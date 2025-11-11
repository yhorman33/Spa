# Spa & Wellness - Sitio Web Profesional

## 🧘‍♀️ Descripción del Proyecto

Sitio web moderno y elegante para un **centro de spa y bienestar**, diseñado para transmitir tranquilidad, profesionalismo y lujo. Este proyecto fue desarrollado como parte de un trabajo académico para **Generación T**.

El sitio ofrece una experiencia visual relajante con tonos azules y verdes agua, destacando los servicios de masajes, tratamientos faciales, aromaterapia y bienestar integral.

## ✨ Características Principales

### 🌊 Diseño Relajante
- Paleta de colores inspirada en el agua y la naturaleza (azul, verde agua, lavanda)
- Gradientes suaves y animaciones fluidas
- Diseño responsive para todos los dispositivos
- Experiencia de usuario intuitiva y elegante

### 💆‍♀️ Servicios Destacados
- **Masajes terapéuticos**: Técnicas profesionales personalizadas
- **Tratamientos faciales**: Rejuvenecimiento con tecnología premium
- **Tratamientos corporales**: Exfoliación e hidratación completa
- **Aromaterapia**: Aceites esenciales naturales
- **Productos orgánicos**: Certificados y naturales
- **Ambiente zen**: Espacios diseñados para la relajación

### 📊 Estadísticas del Negocio
- **15+ años** de experiencia en el sector
- **5,000+ clientes** satisfechos
- **98%** de recomendación
- **20+ tratamientos** disponibles

### 🎨 Experiencia Visual
- Hero section con imagen de spa relajante
- Cards de servicios con iconos y animaciones
- Call-to-action persuasivo con oferta especial
- Sistema de diseño coherente y profesional

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con las tecnologías web más modernas:

- **Vite** - Build tool ultrarrápido
- **React 18** - Biblioteca de UI moderna
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes de UI accesibles y personalizables
- **Lucide React** - Iconos modernos y elegantes

## 🎨 Sistema de Diseño

El proyecto implementa un sistema de diseño completo con:

- **Colores relajantes**: Azul agua, verde menta y lavanda
- **Gradientes suaves**: Transiciones naturales y armoniosas
- **Animaciones zen**: Movimientos fluidos y sutiles
- **Tokens semánticos**: Colores y estilos centralizados en HSL
- **Responsive**: Optimizado para todos los dispositivos
- **Modo oscuro**: Soporte completo para temas claro/oscuro

### Paleta de Colores

```css
/* Gradientes principales - Tonos relajantes */
--gradient-primary: linear-gradient(135deg, hsl(180 60% 45%), hsl(210 70% 60%));
--gradient-accent: linear-gradient(135deg, hsl(210 70% 60%), hsl(160 50% 50%));

/* Colores base - Tema spa */
--primary: 180 60% 45%;      /* Azul agua */
--secondary: 210 70% 60%;    /* Azul cielo */
--accent: 160 50% 50%;       /* Verde menta */
```

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js 16+ y npm instalados
- Git para clonar el repositorio

### Instalación

```sh
# 1. Clonar el repositorio
git clone <YOUR_GIT_URL>

# 2. Navegar al directorio del proyecto
cd spa-website

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:8080`

### Scripts Disponibles

```sh
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Preview de la build de producción
npm run lint         # Ejecuta el linter
```

## 🌐 Despliegue

### Lovable Platform

La forma más sencilla de desplegar este proyecto:

1. Visita [Lovable](https://lovable.dev/projects/66182b1b-2f7b-4c7b-b873-690d2c06a178)
2. Click en **Share → Publish**
3. Tu app estará live en segundos

### Dominio Personalizado

Puedes conectar tu propio dominio:

1. Navega a **Project > Settings > Domains**
2. Click en **Connect Domain**
3. Sigue las instrucciones para configurar tu DNS

Más información: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 📂 Estructura del Proyecto

```
spa-website/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   │   └── spa-hero.jpg # Imagen hero del spa
│   ├── components/      # Componentes reutilizables
│   │   ├── ui/         # Componentes base de shadcn
│   │   ├── Hero.tsx    # Sección hero con reserva
│   │   ├── Features.tsx # Servicios del spa
│   │   └── CTA.tsx     # Call-to-action con oferta
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Index.tsx   # Página principal
│   │   └── NotFound.tsx # Página 404
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilidades y helpers
│   ├── index.css       # Estilos globales y design tokens
│   └── App.tsx         # Componente raíz
├── public/             # Archivos públicos estáticos
├── tailwind.config.ts  # Configuración de Tailwind
├── vite.config.ts      # Configuración de Vite
└── README.md           # Este archivo
```

## 🎯 Componentes Principales

### Hero
Sección principal de bienvenida con:
- Título atractivo sobre bienestar
- Estadísticas del spa (años de experiencia, clientes)
- Botones de reserva y ver servicios
- Imagen de fondo con ambiente zen

### Features (Servicios)
Grid de servicios con:
- 6 servicios principales del spa
- Iconos temáticos (masajes, tratamientos, aromaterapia)
- Cards con efectos hover suaves
- Diseño responsive

### CTA (Call-to-Action)
Sección de conversión con:
- Oferta especial destacada
- Botones de reserva y contacto
- Información de horarios
- Animaciones suaves y relajantes

## 🤝 Contribuir

¿Quieres contribuir al proyecto? ¡Genial! Sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Editar el Código

### Usando Lovable (Recomendado)

Visita [Lovable Project](https://lovable.dev/projects/66182b1b-2f7b-4c7b-b873-690d2c06a178) y comienza a hacer prompts. Los cambios se commitean automáticamente.

### Usando tu IDE Favorito

Puedes clonar el repo y trabajar localmente. Los cambios pusheados se reflejarán en Lovable.

### GitHub Codespaces

1. Ve a la página principal del repositorio
2. Click en "Code" → "Codespaces" → "New codespace"
3. Edita directamente en el navegador

## 📱 Responsive Design

El proyecto está completamente optimizado para:

- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px - 1919px
- 🖥️ **Large Desktop**: 1920px+

## 🎨 Personalización

### Cambiar Colores

Edita `src/index.css` para modificar los tokens de diseño:

```css
:root {
  --primary: TU_COLOR_HSL;        /* Color principal */
  --gradient-primary: TU_GRADIENTE; /* Gradiente principal */
}
```

### Añadir Nuevas Secciones

Puedes agregar secciones como:
- **Galería de fotos**: Muestra instalaciones y tratamientos
- **Testimonios**: Opiniones de clientes satisfechos
- **Precios**: Tabla de tarifas de servicios
- **Equipo**: Presenta a los terapeutas
- **Blog**: Consejos de bienestar y cuidado personal

## 🔒 Seguridad

- Todas las dependencias se actualizan regularmente
- No se exponen secretos en el código
- Configuración de CORS adecuada
- Validación de inputs en formularios

## 📄 Licencia

Este proyecto es parte de Lovable. Consulta los términos de servicio de Lovable para más información.

## 🌟 Créditos

Este proyecto fue desarrollado como trabajo académico para **Generación T** (escuela).

**Tecnologías y herramientas utilizadas:**
- **shadcn/ui** por los componentes base elegantes
- **Lucide** por los iconos profesionales
- **Tailwind CSS** por el framework de estilos
- **Lovable** por la plataforma de desarrollo

## 📞 Contacto y Soporte

- **Project URL**: https://lovable.dev/projects/66182b1b-2f7b-4c7b-b873-690d2c06a178
- **Documentación**: https://docs.lovable.dev/
- **Discord**: [Únete a la comunidad](https://discord.gg/lovable)

---

**Proyecto académico - Generación T**  
Hecho con 💙 para promover el bienestar y la relajación
