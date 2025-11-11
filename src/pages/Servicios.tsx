import { useState } from "react";
import Navbar from "@/components/Navbar";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";

const services = [
  {
    category: "Masajes",
    items: [
      {
        name: "Masaje relajante",
        duration: "60 min",
        price: "$800",
        description: "Masaje suave con aceites aromáticos para relajación profunda y alivio del estrés.",
      },
      {
        name: "Masaje terapéutico",
        duration: "90 min",
        price: "$1,200",
        description: "Masaje de tejido profundo para aliviar dolores musculares y mejorar la circulación.",
      },
      {
        name: "Masaje con piedras calientes",
        duration: "75 min",
        price: "$1,000",
        description: "Terapia con piedras volcánicas calientes para relajación muscular profunda.",
      },
    ],
  },
  {
    category: "Tratamientos faciales",
    items: [
      {
        name: "Facial hidratante",
        duration: "60 min",
        price: "$900",
        description: "Limpieza profunda, exfoliación e hidratación intensa para todo tipo de piel.",
      },
      {
        name: "Facial anti-edad",
        duration: "75 min",
        price: "$1,300",
        description: "Tratamiento con colágeno y ácido hialurónico para reducir líneas de expresión.",
      },
      {
        name: "Facial purificante",
        duration: "60 min",
        price: "$850",
        description: "Limpieza profunda para piel grasa, elimina impurezas y controla el brillo.",
      },
    ],
  },
  {
    category: "Tratamientos corporales",
    items: [
      {
        name: "Exfoliación corporal",
        duration: "45 min",
        price: "$700",
        description: "Exfoliación completa con sales marinas y aceites naturales.",
      },
      {
        name: "Envoltura de algas",
        duration: "60 min",
        price: "$950",
        description: "Tratamiento desintoxicante y reafirmante con algas marinas.",
      },
      {
        name: "Paquete spa completo",
        duration: "180 min",
        price: "$2,500",
        description: "Masaje + facial + envoltura corporal. Experiencia de lujo completa.",
      },
    ],
  },
];

const Servicios = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nuestros{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                servicios
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra variedad de tratamientos diseñados para tu bienestar
            </p>
          </div>

          {/* Services by category */}
          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card group"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </div>
                          <div className="flex items-center gap-2 font-semibold text-primary text-lg">
                            <DollarSign className="w-4 h-4" />
                            {service.price}
                          </div>
                        </div>
                        <Button
                          variant="hero"
                          className="w-full"
                          onClick={() => setBookingModalOpen(true)}
                        >
                          Reservar
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-hero rounded-3xl p-12 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Podemos crear un paquete personalizado según tus necesidades
            </p>
            <Button variant="hero" size="lg" onClick={() => setBookingModalOpen(true)}>
              Contactar para paquete personalizado
            </Button>
          </div>
        </div>
      </main>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  );
};

export default Servicios;
