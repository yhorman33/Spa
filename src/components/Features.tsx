import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, Zap, Trophy, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Acelera tu crecimiento",
    description: "Herramientas y recursos diseñados para impulsar tu desarrollo profesional y personal.",
  },
  {
    icon: Users,
    title: "Comunidad vibrante",
    description: "Conecta con miles de creadores, desarrolladores y emprendedores de tu generación.",
  },
  {
    icon: Zap,
    title: "Aprendizaje rápido",
    description: "Contenido actualizado y dinámico que se adapta a las tendencias más relevantes.",
  },
  {
    icon: Trophy,
    title: "Logros reales",
    description: "Completa desafíos, gana reconocimientos y construye tu portafolio profesional.",
  },
  {
    icon: BookOpen,
    title: "Recursos ilimitados",
    description: "Accede a tutoriales, cursos y documentación de alta calidad sin restricciones.",
  },
  {
    icon: Globe,
    title: "Alcance global",
    description: "Forma parte de una red internacional de talento joven y ambicioso.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              destacar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma completa con las herramientas esenciales para tu éxito
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card group animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
