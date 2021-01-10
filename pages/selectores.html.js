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
          <h5>¿Qué es?</h5>
          <p>
            Un lenguaje formal que le proporciona a una persona, en este caso el
            programador, la capacidad de escribir una serie de instrucciones o
            secuencias de órdenes, de manera que se puedan ejecutar determinadas
            tareas. Todo el conjunto de órdenes se le llama programa
          </p>
        </div>
        <div className="six columns">
          <h2>DOM</h2>
        </div>
      </div>
      <div className="row btop">
        <h1>Seleccionando ids</h1>
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

export default Jeyquery;
