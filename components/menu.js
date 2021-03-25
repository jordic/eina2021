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
    title: "Rutas, archivos y directorios",
    link: "/rutas-archivos-directorios.html",
    content: (
      <p>
          Enlazar documentos en hypertexto.
          <br />
          Rutas absolutas, rutas relativas.
        </p>
    ),
  },
  {
    title: "Funciones y listas",
    link: "/functions.html",
    content: (
      <p>
          Funciones y listas.
          <br />
          function, [],
        </p>
    ),
  },
  {
    title: "toggleClass",
    link: "/has_class.html",
    content: (
      <p>
        toggleClass<br />
        Poner y cambiar clases css des de js
        </p>
    ),
  },

];

export default menu;
