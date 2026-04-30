import { useState } from "react";
import Navbar from "@/components/Navbar";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import handshakeImg from "@/assets/handshake-deal.jpg";
import propertyImg from "@/assets/property-buenos-aires.jpg";

const services = [
  {
    category: "Asesoramiento y Consultoría",
    description: "Asesoramos a inmobiliarias, desarrolladores y constructoras desde 2001.",
    items: [
      "Analizamos la situación comercial actual de la empresa.",
      "Diagnóstico de fortalezas y debilidades para el crecimiento.",
      "Definimos nuevos objetivos, plazos e inversión necesaria.",
      "Planificamos el nuevo proyecto comercial: estrategia y metodología.",
      "Determinamos cuotas de resultado y tiempos para alcanzarlas.",
      "Analizamos, capacitamos y entrenamos al personal actual.",
      "Tomamos y formamos nuevo personal si es necesario.",
    ],
  },
  {
    category: "Dirección y Gerenciamiento",
    description: "Planes de negocio, estrategia, creatividad e implementación de objetivos.",
    items: [
      "Estadísticas, proyecciones y sistemas de control semanales y mensuales.",
      "Implementación de metodologías innovadoras en tasaciones, producción y ventas.",
      "Campañas promocionales y publicitarias para imagen institucional.",
      "Sistemas de gestión informáticos para control y distribución de información.",
      "Banco de clientes y fidelización para asegurar cartera futura.",
      "Capacitación constante al personal, gerentes y titulares.",
      "Coaching para titulares y gerentes para mejorar la dirección.",
    ],
  },
  {
    category: "Marketing Inmobiliario y Financiero",
    description: "Especialistas en marketing inmobiliario, estrategia y gerenciamiento.",
    items: [
      "Marketing inmobiliario con estrategia.",
      "Hipotecas e Inversiones.",
      "Posicionamiento y mejor competitividad.",
      "Estudio de mercado para asegurar resultados.",
      "Mayor captación y producción de propiedades.",
      "Mejor imagen institucional y rentabilidad.",
    ],
  },
];

const cases = [
  {
    name: "Empresa Inmobiliaria de Flores",
    points: [
      "Año 2022: Inicio gerenciamiento — 40 operaciones anuales.",
      "Año 2023: 80 operaciones anuales.",
      "Año 2024: Apertura de 6 franquicias en CABA — 100 operaciones anuales.",
      "Año 2025: Más de 100 operaciones anuales.",
    ],
  },
  {
    name: "Empresa Inmobiliaria de Belgrano",
    points: [
      "Año 2023: La empresa firmaba 20 operaciones anuales.",
      "Año 2024: Inicio gerenciamiento — 30 operaciones anuales.",
      "Año 2025: Proyección de cierre con 80 operaciones anuales.",
    ],
  },
];

const Servicios = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nuestros{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                servicios
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Asesoramiento y consultoría a inmobiliarias, desarrolladores y constructoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 group">
              <img src={propertyImg} alt="Propiedades en Buenos Aires" loading="lazy" width={1280} height={800} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-1">Marketing Inmobiliario</h3>
                <p className="text-sm text-muted-foreground">Estrategias para captar más propiedades y clientes.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border/50 group">
              <img src={handshakeImg} alt="Cerramos operaciones" loading="lazy" width={1280} height={800} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-1">Más operaciones cerradas</h3>
                <p className="text-sm text-muted-foreground">Resultados medibles en ventas, tasaciones y reservas.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {services.map((cat, i) => (
              <Card key={i} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary">{cat.category}</CardTitle>
                  <CardDescription className="text-base">{cat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resultados */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Resultados obtenidos en{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">gerenciamiento</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cases.map((c, i) => (
                <Card key={i} className="border-border/50 bg-gradient-hero">
                  <CardHeader>
                    <CardTitle className="text-xl">{c.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {c.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <span className="text-sm text-muted-foreground">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center bg-gradient-hero rounded-3xl p-12 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Querés un diagnóstico para tu empresa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Coordinemos una entrevista sin cargo y analizamos juntos tu negocio.
            </p>
            <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
              Solicitar entrevista
            </Button>
          </div>
        </div>
      </main>

      <BookingModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Servicios;
