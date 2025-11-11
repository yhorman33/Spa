import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Oferta especial</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para una experiencia{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              única de relajación
            </span>
            ?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reserva tu cita hoy y descubre por qué somos el spa preferido de miles de clientes. 
            Primera sesión con 20% de descuento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Reservar ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Contactar
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Abierto de lunes a domingo • Horario: 9:00 - 21:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
