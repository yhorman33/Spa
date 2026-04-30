import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import BookingModal from "./BookingModal";

const CTA = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card/70 backdrop-blur-sm px-4 py-2 rounded-full border border-border mb-8 animate-float">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Cursos y charlas gratuitas</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para llevar tu inmobiliaria al{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              siguiente nivel
            </span>
            ?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Más de 20 años brindando servicios a inmobiliarias y desarrolladores.
            Solicitá una entrevista sin cargo y diagnosticamos tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group" onClick={() => setOpen(true)}>
              Solicitar entrevista
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/contacto")}>
              Contactar
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Tel.: 4634-2663 • Cel.: 155 344-6040 • marcelorponce@hotmail.com
          </p>
        </div>
      </div>

      <BookingModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default CTA;
