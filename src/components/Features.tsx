import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Heart, Sparkles, Flower2, Leaf, Wind } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Masajes terapéuticos",
    description: "Alivia tensiones y recupera tu bienestar con técnicas profesionales personalizadas.",
  },
  {
    icon: Heart,
    title: "Tratamientos faciales",
    description: "Rejuvenece tu piel con productos premium y tecnología de última generación.",
  },
  {
    icon: Sparkles,
    title: "Tratamientos corporales",
    description: "Exfoliación, hidratación y renovación completa para tu piel.",
  },
  {
    icon: Flower2,
    title: "Aromaterapia",
    description: "Experimenta el poder curativo de los aceites esenciales naturales.",
  },
  {
    icon: Leaf,
    title: "Productos naturales",
    description: "Utilizamos productos orgánicos certificados para tu seguridad y bienestar.",
  },
  {
    icon: Wind,
    title: "Ambiente zen",
    description: "Espacios diseñados para tu máxima relajación y desconexión total.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencias únicas de bienestar diseñadas para ti
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
