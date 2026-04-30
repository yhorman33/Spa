import teamMeeting from "@/assets/team-meeting.jpg";
import property from "@/assets/property-buenos-aires.jpg";
import handshake from "@/assets/handshake-deal.jpg";
import training from "@/assets/training-class.jpg";

const items = [
  { src: teamMeeting, title: "Estrategia con tu equipo", desc: "Reuniones de planificación y dirección comercial." },
  { src: property, title: "Propiedades de calidad", desc: "Mayor captación y producción de propiedades." },
  { src: handshake, title: "Cerramos operaciones", desc: "Más reservas, tasaciones y ventas concretadas." },
  { src: training, title: "Capacitación continua", desc: "Más de 1.800 alumnos formados profesionalmente." },
];

const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trabajamos con{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              profesionales como vos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompañamos a inmobiliarias, desarrolladores y constructoras en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
