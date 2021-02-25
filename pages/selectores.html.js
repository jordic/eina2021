import { Layout } from "../components/layout";
import { CodeRunner } from "../components/runner";
import { Ejercicio } from "../components/ejercicio";

const javascript = `<html>
<script language="javascript">
alert("hola mundo")
</script>
</html>
`;

const Jeyquery = () => (
  <Layout isHeader>
    <div className="container content">
      <div className="row">
        <h1>Selectores</h1>
        <h4 style={{ marginTop: "-20px", color: "#f08d49" }}>
          CSS des de javascript
        </h4>
      </div>
      <div className="row">
        <div className="six columns">
          <p>
            jQuery nos permite interactuar con el DOM de forma dinámica.
            Podemos cambiar colores, ocultar cosas, mover, cargar contenido,
            o programar eventos, pero siempre usando elementos del DOM.
            Para realizar cualquier acción, debemos escojer el elemento
            sobre el que lo realizaremos. Y para eso usaremos un selector.
          </p>
        </div>
        <div className="six columns">
          <h2>Selector</h2>
          <CodeRunner language="html" code={`$('expression').metodo()`} />
          <p>Un <strong>selector</strong> es una expresión que nos
          permite un elemento o conjunto de elementos del DOM.</p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
        <h1>Seleccionando ids</h1>
          <ul>
            <li>Igual que en CSS seleccionamos con <strong>#elemento</strong></li>
            <li>ID, es un identificador y debe de ser único por documento</li>
            <li>jQuery nos devuelve una referencia al elemento</li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner language="html" code={htmlIds} />
        </div>
      </div>
      <div className="row btop">
        <h1>Seleccionando classes</h1>
      </div>
      <div className="row btop">
        <h1>Seleccionando elementos</h1>
      </div>
      <div className="row btop">
        <h1>Otros</h1>
      </div>


    </div>
  </Layout>
);

const htmlIds = `<html>
  <body id="bod">
    <div id="principal">
      <p>Content</p>
      <button id="boton">Button</button>
    </div>
  </body>
</html>
`




export default Jeyquery;
