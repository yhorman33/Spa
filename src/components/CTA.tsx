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
            <span className="text-sm font-medium">¡Únete hoy mismo!</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para ser parte de la{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Generación T
            </span>
            ?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Miles de jóvenes ya están construyendo su futuro. No te quedes atrás. 
            Comienza tu viaje hoy sin costo alguno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Registrarse gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Ver planes
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Sin tarjeta de crédito requerida • Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
