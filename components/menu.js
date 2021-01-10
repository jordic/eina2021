export function Key({ l }) {
  return <span className="label">{l}</span>;
}

const menu = [
  {
    title: "Entorno y configuración",
    link: "/entorno-configuracion.html",
    content: (
      <p>
        Creación y configuración del entorno de trabajo. Alta del Hosting.
        Configuración de VSCode. Subir nuestro primer ejercicio a la web.
      </p>
    ),
  },
  {
    title: "Un programa",
    link: "/un-programa.html",
    content: (
      <p>
        ¿Qué es un programa? Instrucciones, operadores y variables.
        <Key l="alert" /> <Key l="prompt" />. Operadores. Condiciones. Cálculos
        básicos
      </p>
    ),
  },
  {
    title: "jQuery",
    link: "/j-query.html",
    content: (
      <p>
        ¿Qué es jQuery? Inicialización. Eventos click y selectores.
        <br />
        El Inspector de Chrome
      </p>
    ),
  },
  {
    title: "Selectores",
    link: "/selectores.html",
    content: (
      <p>
          Selectores, selectores y selectores. id, classe, hijo...
          <br />
          Combinar selectores con eventos
        </p>
    ),
  },
  {
    title: "Sliders",
    link: "/sliders.html",
    content: (
      <p>
          Configuración e inicialización de un plugin jQuery básico.
          <br />
          Un slider de imágenes.
        </p>
    ),
  },
  {
    title: "Galería Imágenes",
    link: "/gallery.html",
    content: (
      <p>
          Configuración de un plugin de galería de imágenes.
          <br />
          fotos en modal.
        </p>
    ),
  },
  {
    title: "Menú desplegable",
    link: "/menu-desplegable.html",
    content: (
      <p>
          Creación de un menú desplegable des de 0.
          <br />
          HTML, CSS y Javascript
        </p>
    ),
  },
  {
    title: "Animaciones SVG",
    link: "/animaciones-svg.html",
    content: (
      <p>
          Pequeñas animaciones con SVG. <br />
          Paths y CSS
        </p>
    ),
  },
  {
    title: "Sincronizar el scroll",
    link: "/scrolling.html",
    content: (
      <p>
          Construcción de landing pages con animaciones sincronizadas al scroll.
          (CSS/js)
        </p>
    ),
  },
  {
    title: "Revisión y Evaluación",
    link: "/revision.html",
    content: (
      <p>Revisión y evaluación del curso</p>
    ),
  }
];

export default menu;
