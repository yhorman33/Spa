import { useState } from "react";
import Navbar from "@/components/Navbar";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import trainingImg from "@/assets/training-class.jpg";
import teamImg from "@/assets/team-meeting.jpg";

const cursos = [
  {
    title: "Sistemas informáticos y Marketing inmobiliario",
    classes: "2 clases",
    teacher: "Marcelo Ponce",
    extra: "Herramientas digitales / IA",
  },
  {
    title: "Producción y Captación de propiedades a la venta",
    classes: "2 clases",
    teacher: "Marcelo Ponce",
  },
  {
    title: "Dirección y gerenciamiento de la nueva empresa inmobiliaria",
    classes: "Múltiples clases",
    teacher: "Marcelo Ponce / Marcelo Ghio",
  },
  {
    title: "Herramientas digitales y Tasaciones",
    classes: "2 clases",
    teacher: "Marcelo Ghio",
    extra: "Departamentos / casas / terrenos",
  },
];

const empresas = [
  "Galante Inmobiliaria", "M&M Desarrollos Inmobiliarios", "Altman Construcciones",
  "Cabildo 500 Propiedades", "Martin Arrieta Propiedades", "Asempro Propiedades",
  "Maxi Propiedades", "Luján Propiedades", "Claudia Tevere Inmobiliaria",
  "Crédito Imperial Argentina", "la Donna S.A.", "Alternativa Crediticia S.R.L.",
];

const trayectoria = [
  "Más de 40 años de trayectoria en el sector inmobiliario.",
  "Gerente comercial de importantes empresas inmobiliarias y financieras de créditos hipotecarios.",
  "Dictó cursos, jornadas y seminarios los últimos 10 años vinculados al sector inmobiliario y crediticio.",
  "Docente universitario de la carrera de corredor inmobiliario en IPCC, FASTA y Universidad de Gastón Dachary.",
  "Corredor inmobiliario matriculado.",
  "Profesor en jornadas dictadas en el Centro de Martilleros y Corredores para alumnos de UTN, Cámara Inmobiliaria Argentina.",
  "Asesor y consultor de importantes empresas inmobiliarias, constructoras, desarrolladores e inversores.",
  "Asesor de empresa informática con más de 1.200 inmobiliarias que utilizan su servicio.",
];

const Escuela = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Cursos y charlas gratuitas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Escuela de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Marketing y Negocios
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capacitación • Jornadas • Seminarios • Cursos • Formación • Preparación y entrenamiento de personal
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/50 mb-16">
            <img src={trainingImg} alt="Clases y capacitación" loading="lazy" width={1280} height={800} className="w-full h-80 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 md:p-16">
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Formación práctica e intensiva
                </h2>
                <p className="text-muted-foreground">
                  Conocé el día a día del negocio inmobiliario y financiero con nuestros docentes especializados.
                </p>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="border-border/50">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Dirigido a</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Estudiantes, empleados, gerentes y titulares de empresas inmobiliarias, desarrolladores y constructoras.</p>
                <p>Profesionales e inversores que desean ingresar al mundo de los negocios inmobiliarios y financieros.</p>
                <p>Basado en modernas técnicas prácticas e intensivas que permiten conocer el día a día del negocio.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <Award className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Resultados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Al finalizar la capacitación brindamos asesoramiento y los contactos necesarios para comenzar a desarrollarse en el rubro.</p>
                <p>Te preparamos para afrontar la realidad del mercado inmobiliario.</p>
                <p className="font-semibold text-foreground">Más de 1.800 alumnos capacitados en los últimos 5 años, muchos de ellos hoy son empleados o titulares de empresas.</p>
              </CardContent>
            </Card>
          </div>

          {/* Cursos */}
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" /> Nuestros cursos
          </h2>
          <p className="text-muted-foreground mb-6">Consultá por cursos para grupos en tu empresa.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {cursos.map((c, i) => (
              <Card key={i} className="border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                  {c.extra && <CardDescription>{c.extra}</CardDescription>}
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{c.classes}</span>
                  <span className="text-sm font-medium text-primary">Docente: {c.teacher}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empresas */}
          <h2 className="text-3xl font-bold mb-6 text-center">
            Empresas en las que logramos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">crecimiento comercial</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {empresas.map((e, i) => (
              <Badge key={i} variant="outline" className="text-sm py-2 px-4">{e}</Badge>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/50 mb-12">
            <img src={teamImg} alt="Equipo profesional" loading="lazy" width={1280} height={800} className="w-full h-72 object-cover" />
          </div>

          {/* Trayectoria */}
          <Card className="border-border/50 bg-gradient-hero mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <GraduationCap className="w-7 h-7 text-primary" />
                Un profesional con trayectoria comprobada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {trayectoria.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 italic text-center text-foreground font-semibold">
                Más de 20 años brindando servicios a inmobiliarias y desarrolladores.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
              Inscribirme a un curso
            </Button>
          </div>
        </div>
      </main>

      <BookingModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Escuela;
