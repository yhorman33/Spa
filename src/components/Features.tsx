import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp, Users, Target, Building2, BarChart3, Award,
  Megaphone, ClipboardList, Briefcase, GraduationCap, Shield, LineChart
} from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Mayor cantidad de reservas", description: "Estrategias que incrementan las reservas y captación efectiva." },
  { icon: Building2, title: "Mayor cantidad de tasaciones", description: "Metodologías para aumentar tasaciones y producción." },
  { icon: Award, title: "Mejor imagen institucional", description: "Posicionamos tu marca con campañas profesionales." },
  { icon: Megaphone, title: "Marketing inmobiliario con estrategia", description: "Planes de marketing diseñados para el sector inmobiliario." },
  { icon: Users, title: "Fidelización de clientes", description: "Sistemas de gestión y banco de clientes para futuro." },
  { icon: Target, title: "Posicionamiento y competitividad", description: "Te ayudamos a defender y ganar mercado." },
  { icon: BarChart3, title: "Estudio de mercado", description: "Análisis para asegurar resultados concretos." },
  { icon: Briefcase, title: "Dirección y gerenciamiento", description: "Gerenciamos con profesionalidad tu empresa." },
  { icon: ClipboardList, title: "Mejor administración y organización", description: "Optimizamos procesos internos y cuotas de resultado." },
  { icon: LineChart, title: "Análisis y planificación", description: "Definimos objetivos comerciales claros y medibles." },
  { icon: Shield, title: "Proyectos más seguros y rentables", description: "Reducimos riesgos y maximizamos la rentabilidad." },
  { icon: GraduationCap, title: "Personal más preparado", description: "Capacitamos y entrenamos a tu equipo." },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              logramos juntos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados concretos para inmobiliarias, desarrolladores y constructoras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card group animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
