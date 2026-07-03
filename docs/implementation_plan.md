# Plan de Implementación: Identidad Visual de Beraxis

Este plan detalla el proceso para formalizar la identidad visual de **Beraxis** a partir del logotipo seleccionado en [beraxis.png](file:///Users/jbuten/proyects/beraxis/beraxis.png) y las especificaciones descritas en [beraxis.md](file:///Users/jbuten/proyects/beraxis/beraxis.md).

---

## 📘 Resumen de Objetivos

1. **Vectorización de Alta Precisión [SVG]**: Convertir el isotipo ("B" estilizada) y el logotipo completo ("B" + "BERAXIS") a formato vectorial SVG ultra-limpio, con curvas perfectas basadas en los contornos exactos de `beraxis.png` y aplicando los colores corporativos oficiales.
2. **Generación de Variaciones Oficiales**:
   - Logotipo Principal (Horizontal y Vertical).
   - Logotipo en Negativo (Para fondos oscuros).
   - Logotipo Monocromático (Blanco y Negro).
   - Isotipo Solo (Para favicon e iconos de app).
3. **Exportación de Assets Multi-Formato [PNG / ICO]**:
   - Favicons para web (`favicon.ico` y `favicon.svg`).
   - Iconos de aplicación móvil (`app_icon_192.png`, `app_icon_512.png`).
   - Versiones transparentes en alta resolución sin el patrón de tablero de ajedrez falso.
4. **Kit de Desarrollo Integrado**:
   - Archivo CSS con variables de diseño, tipografía y estilos base de componentes (`beraxis-identity.css`).
5. **Brandbook Interactivo Premium**:
   - Diseñar y desarrollar un sitio web interactivo de una sola página (`index.html`, `style.css`, `app.js`) que sirva como manual de marca interactivo.
   - Permitirá:
     - Ver y copiar los códigos de color en HEX, RGB y CMYK con un solo clic.
     - Descargar directamente todos los recursos vectoriales y rasterizados (SVG y PNG).
     - Probar tipografías de manera interactiva.
     - Visualizar componentes de interfaz de usuario de Beraxis (botones, inputs, headers, alertas).
     - Ver maquetas interactivas (mockups) de la marca en tarjetas de presentación, carpetas corporativas, camisetas y pantallas de aplicaciones móviles.

---

## 🛠️ Investigación y Técnica de Vectorización

Para asegurar una precisión milimétrica del isotipo:
- Crearemos un script en Python que lea [beraxis.png](file:///Users/jbuten/proyects/beraxis/beraxis.png).
- Segmentará la imagen por color utilizando rangos RGB exactos para separar el verde, el azul y el naranja.
- Extraerá los contornos de cada región utilizando `opencv-python` o `scikit-image` si están disponibles, o calculará las trayectorias de curvas Bezier de manera geométrica.
- En caso de que se prefiera un diseño vectorial puramente geométrico y optimizado, crearemos un archivo SVG programático trazando los nodos clave con curvas Beziér cúbicas suaves. Esto genera un archivo vectorial extremadamente ligero y limpio.
- El texto "BERAXIS" se vectorizará utilizando curvas SVG nativas o aplicando la tipografía **Orbitron / Michroma** en el renderizado SVG con fallback local, garantizando que sea escalable sin depender de fuentes externas.

---

## 🗂️ Cambios Propuestos

### Componente 1: Recursos de Marca (Vectorial y Rasterizado)

#### [NEW] [logo_principal.svg](file:///Users/jbuten/proyects/beraxis/assets/logo_principal.svg)
Logotipo principal en formato SVG (Isotipo + texto "BERAXIS" a la derecha o abajo, en color azul corporativo).

#### [NEW] [logo_vertical.svg](file:///Users/jbuten/proyects/beraxis/assets/logo_vertical.svg)
Variación vertical oficial para layouts centrados.

#### [NEW] [logo_negativo.svg](file:///Users/jbuten/proyects/beraxis/assets/logo_negativo.svg)
Logotipo optimizado para fondos oscuros (Texto y detalles en blanco puro, isotipo original).

#### [NEW] [logo_monocromatico_blanco.svg](file:///Users/jbuten/proyects/beraxis/assets/logo_monocromatico_blanco.svg)
Versión vectorial completamente blanca.

#### [NEW] [logo_monocromatico_negro.svg](file:///Users/jbuten/proyects/beraxis/assets/logo_monocromatico_negro.svg)
Versión vectorial completamente negra.

#### [NEW] [isotipo.svg](file:///Users/jbuten/proyects/beraxis/assets/isotipo.svg)
Solo el símbolo de la "B" estilizada.

#### [NEW] [favicon.svg](file:///Users/jbuten/proyects/beraxis/assets/favicon.svg) y `favicon.ico`
Favicons listos para producción.

#### [NEW] [app_icon_192.png](file:///Users/jbuten/proyects/beraxis/assets/app_icon_192.png) y [app_icon_512.png](file:///Users/jbuten/proyects/beraxis/assets/app_icon_512.png)
Iconos de aplicación con fondo sólido para Android/iOS.

---

### Componente 2: Estilos y Código

#### [NEW] [beraxis-identity.css](file:///Users/jbuten/proyects/beraxis/assets/beraxis-identity.css)
Hoja de estilos que declara las variables CSS corporativas (`:root`), fuentes tipográficas de Google Fonts (`Orbitron`, `Inter`), y estilos base para botones premium, tarjetas y layouts coherentes.

---

### Componente 3: Brandbook Interactivo (Aplicación Web)

#### [NEW] [index.html](file:///Users/jbuten/proyects/beraxis/index.html)
Estructura semántica del manual interactivo de Beraxis.

#### [NEW] [style.css](file:///Users/jbuten/proyects/beraxis/style.css)
Estilos visuales premium, modernos (Glassmorphism, transiciones suaves, modo oscuro/claro nativo) y diseño responsivo adaptado a móviles, tablets y escritorios.

#### [NEW] [app.js](file:///Users/jbuten/proyects/beraxis/app.js)
Lógica para copiar códigos de color, alternar temas visuales, renderizar maquetas interactivas en tiempo real y manejar la descarga interactiva de los recursos de la marca.

---

## 🔍 Plan de Verificación

### Verificación Automatizada
- Ejecutar un script de prueba en Node.js o Python para verificar que todos los archivos SVG creados sean válidos XML y contengan las estructuras de ruta correctas.
- Comprobar que los archivos de imagen PNG se hayan creado correctamente y tengan las dimensiones especificadas.

### Verificación Manual
- Iniciar un servidor de desarrollo local para previsualizar el manual interactivo de la marca.
- Abrir y auditar la página usando el navegador, verificando que los colores se muestren de acuerdo con los códigos HEX oficiales y que los mockups funcionen correctamente.
- Probar la descarga de archivos SVG y PNG desde la aplicación web interactiva.
