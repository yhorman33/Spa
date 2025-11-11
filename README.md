# Generación T - Plataforma para la Nueva Generación

## 🚀 Descripción del Proyecto

**Generación T** es una plataforma moderna y vibrante diseñada para conectar, empoderar e inspirar a la nueva generación de creadores, desarrolladores y emprendedores digitales. Nuestro objetivo es proporcionar un espacio donde los jóvenes talentos puedan aprender, colaborar y construir su futuro profesional.

## ✨ Características Principales

### 🎯 Comunidad Vibrante
- **10,000+ miembros activos** compartiendo conocimientos y experiencias
- Networking con profesionales de tu generación
- Colaboración en proyectos reales

### 🚀 Aprendizaje Acelerado
- Recursos educativos actualizados constantemente
- Tutoriales interactivos y dinámicos
- Contenido adaptado a las tendencias más relevantes

### 🏆 Desarrollo Profesional
- Sistema de logros y reconocimientos
- Portfolio profesional integrado
- Oportunidades de crecimiento y mentoría

### 🌍 Alcance Global
- Red internacional de talento joven
- Eventos virtuales y presenciales
- Soporte 24/7 en múltiples idiomas

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

- **Gradientes vibrantes**: Combinaciones de púrpura, rosa y naranja
- **Animaciones fluidas**: Transiciones suaves y efectos hover
- **Tokens semánticos**: Colores y estilos centralizados en HSL
- **Responsivo**: Optimizado para todos los dispositivos
- **Modo oscuro**: Soporte completo para temas claro/oscuro

### Paleta de Colores

```css
/* Gradientes principales */
--gradient-primary: linear-gradient(135deg, hsl(280 85% 60%), hsl(320 90% 65%));
--gradient-accent: linear-gradient(135deg, hsl(320 90% 65%), hsl(30 95% 60%));

/* Colores base */
--primary: 280 85% 60%;      /* Púrpura vibrante */
--secondary: 320 90% 65%;    /* Rosa energético */
--accent: 30 95% 60%;        /* Naranja cálido */
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
cd generacion-t

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
generacion-t/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── components/      # Componentes reutilizables
│   │   ├── ui/         # Componentes base de shadcn
│   │   ├── Hero.tsx    # Sección hero principal
│   │   ├── Features.tsx # Características del producto
│   │   └── CTA.tsx     # Call-to-action
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
Sección principal con:
- Título impactante con gradientes
- Estadísticas en tiempo real
- CTAs prominentes
- Imagen de fondo dinámica

### Features
Grid de características con:
- 6 características principales
- Iconos animados
- Cards con hover effects
- Diseño responsive

### CTA (Call-to-Action)
Sección de conversión con:
- Mensaje persuasivo
- Botones de acción claros
- Animaciones flotantes
- Fondo con gradientes

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
  --primary: TU_COLOR_HSL;
  --gradient-primary: TU_GRADIENTE;
}
```

### Añadir Nuevas Secciones

1. Crea un componente en `src/components/`
2. Impórtalo en `src/pages/Index.tsx`
3. Usa los tokens de diseño existentes

## 🔒 Seguridad

- Todas las dependencias se actualizan regularmente
- No se exponen secretos en el código
- Configuración de CORS adecuada
- Validación de inputs en formularios

## 📄 Licencia

Este proyecto es parte de Lovable. Consulta los términos de servicio de Lovable para más información.

## 🌟 Agradecimientos

- **shadcn/ui** por los componentes base
- **Lucide** por los iconos
- **Tailwind CSS** por el framework de estilos
- **Lovable** por la plataforma de desarrollo

## 📞 Contacto y Soporte

- **Project URL**: https://lovable.dev/projects/66182b1b-2f7b-4c7b-b873-690d2c06a178
- **Documentación**: https://docs.lovable.dev/
- **Discord**: [Únete a la comunidad](https://discord.gg/lovable)

---

Hecho con 💜 por la Generación T
