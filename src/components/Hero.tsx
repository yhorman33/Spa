import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import heroImg from "@/assets/inmobiliaria-hero.jpg";
import BookingModal from "./BookingModal";

const Hero = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-card/70 backdrop-blur-sm px-4 py-2 rounded-full border border-border mb-8">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Marketing Inmobiliario y Financiero</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Para jugar, ganar
            <br />
            y liderar
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            En un mercado altamente competitivo
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto italic">
            A veces necesitamos la colaboración de un profesional que se concentre en cada movimiento con una estrategia definida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group" onClick={() => setOpen(true)}>
              Solicitar consulta
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/servicios")}>
              Ver servicios
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "+20", label: "Años brindando servicios" },
            { value: "+1.800", label: "Alumnos capacitados" },
            { value: "+100", label: "Operaciones anuales" },
            { value: "2001", label: "Desde el año" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <BookingModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default Hero;
