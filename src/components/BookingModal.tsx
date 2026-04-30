import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Mínimo 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(8, "Teléfono inválido").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Seleccioná un servicio"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const services = [
    "Marketing Inmobiliario y Financiero",
    "Asesoramiento y consultoría",
    "Dirección y gerenciamiento",
    "Hipotecas e Inversiones",
    "Escuela de Marketing y Negocios",
    "Capacitación de personal",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    try {
      const data = schema.parse(formData);
      await new Promise(r => setTimeout(r, 800));
      toast({
        title: "¡Solicitud enviada!",
        description: `Gracias ${data.name}, te contactaremos a la brevedad.`,
      });
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fe: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach(err => { if (err.path[0]) fe[err.path[0] as keyof FormData] = err.message; });
        setErrors(fe);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: undefined }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Solicitar consulta
          </DialogTitle>
          <DialogDescription>
            Completá el formulario y te contactaremos para coordinar una entrevista.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Tu nombre" className={errors.name ? "border-destructive" : ""} />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Empresa (opcional)</Label>
            <Input id="company" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Nombre de la inmobiliaria" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="tu@email.com" className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="11 1234 5678" className={errors.phone ? "border-destructive" : ""} />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Servicio de interés</Label>
            <Select value={formData.service} onValueChange={(v) => handleChange("service", v)}>
              <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                <SelectValue placeholder="Seleccioná un servicio" />
              </SelectTrigger>
              <SelectContent>
                {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje (opcional)</Label>
            <Textarea id="message" rows={3} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Contanos brevemente sobre tu proyecto" />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">Cancelar</Button>
            <Button type="submit" variant="hero" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
