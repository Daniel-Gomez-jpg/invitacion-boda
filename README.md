# Invitación de boda — María & Carlos

Proyecto en React (Vite) de invitación de boda digital: sobre animado con relieve/sombra, fotos con efecto hover + modal de pantalla completa, secciones con animación fade/slide al hacer scroll, decoraciones de hojas en SVG, diseño responsive (móvil, tablet y escritorio), y formulario de confirmación de asistencia.

## Novedades de esta versión
- **Responsive real**: se ve bien en celular, tablet y escritorio (la tarjeta crece, las fotos pasan de 3 a 4 columnas, etc.) — ver media queries en `src/index.css`.
- **Sobre con relieve**: sombra suave (`feDropShadow`) y degradados para que se vea con profundidad.
- **Fotos con hover + modal**: al pasar el mouse se ve un leve zoom y un texto "Ver foto"; al hacer clic se abre en pantalla completa (clic afuera o en la ✕ para cerrar).
- **Animaciones al hacer scroll**: cada sección usa el componente `Reveal` (`src/components/Reveal.jsx`), que detecta cuándo entra en pantalla con `IntersectionObserver` y aplica `fade`, `slide-left`, `slide-right` o `slide-up`.
- **Hojas decorativas**: ilustraciones SVG propias (línea botánica, sin derechos de autor) en `src/components/Botanicals.jsx`. Por diseño solo se muestran en pantallas ≥900px para no tapar el contenido en celular — puedes cambiar eso en la media query `.botanical` de `src/index.css`.

## Cómo correrlo

1. Instala las dependencias:
   ```
   npm install
   ```
2. Levanta el servidor de desarrollo:
   ```
   npm run dev
   ```
3. Abre la URL que te muestre la terminal (normalmente http://localhost:5173).

## Cómo personalizarlo

### 0. Invitaciones para 1 o 2 personas
El mismo proyecto sirve para ambos casos, sin duplicar nada. Se controla con un parámetro en la URL:

- `tusitio.com/?invitados=1` → invitación individual. El formulario solo pregunta si asistirá.
- `tusitio.com/?invitados=2` → invitación doble. El formulario además pregunta si llevará a su acompañante.

Cuando publiques el sitio, solo cambias ese número al final del link antes de mandarlo a cada invitado. El valor por defecto (si no se especifica nada en el link) se define en `INVITADOS_POR_DEFECTO` dentro de `src/App.jsx`.

### 1. Datos del evento
Abre `src/App.jsx` y edita el objeto `EVENTO` al inicio del archivo (nombres, fecha, lugar, vestimenta, fecha límite de RSVP).

### 2. Tus fotos
1. Copia tus imágenes dentro de la carpeta `public/fotos/` (créala si no existe).
2. En `src/App.jsx`, en el objeto `FOTOS`, escribe la ruta de cada imagen, por ejemplo:
   ```js
   const FOTOS = {
     principal: "/fotos/principal.jpg",
     foto2: "/fotos/foto2.jpg",
     foto3: "/fotos/foto3.jpg",
     foto4: "/fotos/foto4.jpg",
   }
   ```
   Si dejas un valor en `null`, se mostrará el recuadro punteado de "agregar foto".

### 3. El formulario de confirmación
El formulario está en `src/components/RsvpForm.jsx`. Ahora mismo solo muestra un mensaje de agradecimiento en pantalla (no guarda los datos en ningún lado). Para que las confirmaciones se guarden de verdad, tienes varias opciones sencillas:
- **Formspree** (formspree.io): gratis, solo agregas tu `action` de formulario.
- **Google Sheets + Google Forms** o **SheetDB**.
- Un backend propio (Node, Firebase, Supabase, etc.).

Busca el comentario `// Aquí puedes conectar con tu backend...` dentro de `RsvpForm.jsx` para saber dónde agregar la llamada `fetch`.

## Cómo publicarlo (que tenga un link)
Cuando esté listo, puedes subirlo gratis a:
- **Vercel** (vercel.com)
- **Netlify** (netlify.com)

Ambos detectan automáticamente que es un proyecto Vite/React; solo conecta tu repositorio o arrastra la carpeta del proyecto.

## Estructura del proyecto
```
invitacion-boda/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── fotos/        <- aquí van tus imágenes
└── src/
    ├── main.jsx
    ├── App.jsx        <- datos del evento y armado general
    ├── index.css       <- estilos y animaciones
    └── components/
        ├── Envelope.jsx   <- sobre animado de apertura
        ├── PhotoSlot.jsx  <- espacio reutilizable para cada foto
        └── RsvpForm.jsx   <- formulario de confirmación
```
