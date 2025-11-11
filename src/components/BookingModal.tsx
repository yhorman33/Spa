import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre debe tener menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "El email debe tener menos de 255 caracteres"),
  phone: z.string().trim().min(10, "Teléfono inválido").max(20, "Teléfono inválido"),
  service: z.string().min(1, "Por favor selecciona un servicio"),
  date: z.string().min(1, "Por favor selecciona una fecha"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  const services = [
    "Masaje relajante",
    "Masaje terapéutico",
    "Tratamiento facial",
    "Tratamiento corporal",
    "Aromaterapia",
    "Paquete completo",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = bookingSchema.parse(formData);
      
      // Aquí iría la lógica para enviar la reserva
      // Por ahora solo simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "¡Reserva confirmada!",
        description: `Gracias ${validatedData.name}, te contactaremos pronto para confirmar tu cita.`,
      });

      // Limpiar formulario y cerrar modal
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
      });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof BookingFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof BookingFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al procesar tu reserva. Por favor intenta de nuevo.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Reservar cita
          </DialogTitle>
          <DialogDescription>
            Completa el formulario y te contactaremos para confirmar tu cita
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Tu nombre"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="tu@email.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="1234567890"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Servicio</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleChange("service", value)}
            >
              <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-sm text-destructive">{errors.service}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Fecha preferida</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={errors.date ? "border-destructive" : ""}
            />
            {errors.date && (
              <p className="text-sm text-destructive">{errors.date}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="hero"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Enviando..." : "Confirmar reserva"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
