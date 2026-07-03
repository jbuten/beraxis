
## 📘 Manual de Identidad Visual: Beraxis

### 1. Códigos de Color Oficiales (Paleta Tecnológica Premium)

Para garantizar que la marca se vea exactamente igual en una pantalla de celular, en tu web o impresa en una tarjeta de presentación, utiliza estos códigos cromáticos exactos:

| Aplicación | Azul Corporativo | Verde Innovación | Naranja Energía | Blanco Puro |
| --- | --- | --- | --- | --- |
| **HEX (Web/Apps)** | `#0B2545` | `#139A43` | `#F39200` | `#FFFFFF` |
| **RGB (Pantallas)** | `11, 37, 69` | `19, 154, 67` | `243, 146, 0` | `255, 255, 255` |
| **CMYK (Imprenta)** | `100, 80, 30, 20` | `85, 10, 100, 0` | `0, 50, 100, 0` | `0, 0, 0, 0` |

---

### 2. Tipografía Corporativa

Para mantener el aspecto moderno, robusto y de "ingeniería de software" que muestra tu logo, se recomiendan las siguientes fuentes tipográficas gratuitas y comerciales:

* **Tipografía Principal (Logotipo):** **Orbitron (Bold)** o **Michroma** (Disponibles en Google Fonts). Tienen ese corte futurista, tecnológico y limpio que combina con el peso visual de la "B".
* **Tipografía Secundaria (Cuerpo de texto, propuestas, web):** **Inter** o **Roboto**. Son altamente legibles en aplicaciones móviles, plataformas SaaS y contratos financieros.

---

### 3. El Isotipo como Icono de Aplicación (App Icon & Favicon)

Para aplicaciones móviles, el botón de acceso en el teléfono de tus clientes o el favicon del navegador, **nunca uses el texto "BERAXIS"**. El isotipo (la "B" estilizada) debe ir solo y centrado, asegurando una correcta área de respiración.

* **Para pantallas oscuras/Modo Noche:** El isotipo original resalta perfectamente.
* **Para pantallas claras o fondos blancos:** El isotipo mantiene su configuración original.

---

### 4. Variaciones Sugeridas de Aplicación Oficial

Para que tu marca sea versátil y funcione en cualquier escenario corporativo (por ejemplo, si patrocinas un evento o necesitas imprimir a una sola tinta), aquí tienes cómo deben estructurarse las versiones oficiales de Beraxis:

* **Versión Principal:** Isotipo a color + texto azul (sobre fondos blancos o gris muy claro).
* **Versión Negativa:** Isotipo a color + texto blanco (para usar sobre fondos azul marino corporativo o pantallas en modo oscuro).
* **Versión Monocromática (Gris/Blanco):** Todo el conjunto en color blanco plano (ideal para colocar sobre fotografías complejas o fondos tecnológicos sin que compitan los colores).

---

### 5. Kit de Implementación para tus Desarrolladores (CSS Breve)

Si estás trabajando ya en tus plataformas de software o sitio web, comparte estos estilos con tu equipo de desarrollo para asegurar la consistencia del diseño de interfaz (UI):

```css
/* Paleta de Colores Beraxis */
:root {
  --beraxis-blue: #0b2545;
  --beraxis-green: #139a43;
  --beraxis-orange: #f39200;
  --beraxis-white: #ffffff;
  --font-tech: 'Orbitron', sans-serif;
  --font-body: 'Inter', sans-serif;
}

/* Ejemplo de botón premium para la plataforma SaaS */
.btn-beraxis-primary {
  background-color: var(--beraxis-blue);
  color: var(--beraxis-white);
  font-family: var(--font-body);
  border-radius: 6px;
  border: 1px solid var(--beraxis-green);
  transition: all 0.3s ease;
}
.btn-beraxis-primary:hover {
  background-color: var(--beraxis-green);
  box-shadow: 0px 4px 15px rgba(19, 154, 67, 0.3);
}

```

### ¿Qué debes hacer ahora para formalizarlo?

1. **Vectorización:** Toma la imagen que seleccionaste y envíasela a un diseñador gráfico para que la "calque" en curvas vectoriales (`.ai` o `.svg`). Al pasarle los códigos HEX que te di arriba, el resultado será milimétricamente perfecto.
2. **Exportación:** Pídele que te exporte el isotipo solo (la B) en tamaño `32x32px` (para el favicon web) y `512x512px` (para las tiendas de apps).

¡Con esta estructura, Beraxis está lista para proyectar la robustez y la confianza que exigen las fintechs y la banca corporativa!