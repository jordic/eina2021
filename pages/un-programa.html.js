import { Layout } from "../components/layout";
import { CodeRunner } from "../components/runner";
import { CodeRunnerOutput } from "../components/runner";
import { Ejercicio } from "../components/ejercicio";
import { Quiz } from "../components/quiz";
import questions from "../quiz/002";
import {Youtube} from "./utils"


const IntroProg = () => (
  <Layout isHeader>
    <div className="container content">
      <div className="row">
        <h1>Un programa</h1>
        <h4 style={{ marginTop: "-20px", color: "#f08d49" }}>
          Instrucciones, operadores y variables
        </h4>
      </div>
      <div className="row">
        <div className="six columns">
          <h5>Lenguaje de programación</h5>
          <p>
            Un lenguaje formal que le proporciona a una persona, en este caso el
            programador, la capacidad de escribir una serie de instrucciones o
            secuencias de órdenes, de manera que se puedan ejecutar determinadas
            tareas. Todo el conjunto de órdenes se le llama programa
          </p>
          <ul>
            <li>
              Un <strong>programa</strong> es una lista de instrucciones
            </li>
            <li>
              Una <strong>instrucción</strong> es una orden que le damos a la
              computadora
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner
            executable
            code={`let a = 1;
let b = 2;
alert("Resultado " + (a+b))`}
          />
          <p className="explain">
            el programa anterior suma el contenido de dos variables y nos
            muestra el resultado mediante un pequeña ventana modal
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Javascript</h5>
          <ul>
            <li>Interpretado. (Necesita de un intérprete para su ejecución)</li>
            <li>Uno de los lenguajes más populares</li>
            <li>Se ejecuta en el navegador (cliente web)</li>
            <li>
              Nos permite añadir interacción a las páginas confeccionadas con
              HTML y CSS
            </li>
            <li>
              Lo podemos escribir directamente en el html. Mediante la etiqueta
              <span className="label">&lt;script&gt;</span>
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner language="html" code={javascript} />
          <Ejercicio title="introprog/c2/ejercicio1.html">
            <ol>
              <li>Crearemos el archivo html en la ruta indicada</li>
              <li>Copiaremos el contenido superior en el archivo</li>
              <li>
                Abriremos el navegador e introduciremos la url del ejercicio.
                Debe de parecer una ventaja emergente con el mensaje hola mundo
              </li>
              <li>
                Si reemplazamos <strong>hola mundo</strong> por otro string y
                recargamos el navegador tiene que actualizar
              </li>
            </ol>
          </Ejercicio>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Operadores</h5>
          <table class="u-full-width">
            <thead>
              <tr>
                <th>Operador</th>
                <th>Función</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              {ops.map(([x, y, z] = item) => (
                <tr>
                  <td>{x}</td>
                  <td>{y}</td>
                  <td>{z}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="six columns">
          <Youtube id="M_OvQ3LidMw" height={400} />
        </div>
      </div>
      <div className="row">
        <CodeRunnerOutput code={operations} executable />
      </div>
      <div className="row">
        <p className="explain">
          Abre la consola del navegador. <code>Ctrl.+Mayu.+i</code>. Pestaña{" "}
          <strong>Consola</strong>. Y en la línea de comandos reproduce las
          mismas pruebas que has visto en el video, y experimenta un poco con
          los operadores.
        </p>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Variables</h5>
          <ul>
            <li>
              Una variable es un espacio donde podemos almacenar un dato.
              Podemos almacenar una cadena de texto, un número o incluso un
              objeto.
            </li>
            <li>
              Imaginad una variable como una cajita, que podemos usar para
              operar con ellas. La memoria (M) de las calculadoras es una
              variable.
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner code={example_variables} executable />
        </div>
      </div>
      <div className="row btop">
        <div className="four columns">
          <h5>Ejercicio operaciones</h5>
          <ul>
            <li>Creamos un documento html</li>
            <li>
              Las etiquetas <span className="label">&lt;script&gt;</span> nos
              permiten introducir javascript
            </li>
            <li>
              <code>prompt</code> para pedir un número y lo almacenamos en la
              variable <code>a</code>
            </li>
            <li>
              lo mismo con <code>b</code>
            </li>
            <li>
              la instrucción <code>prompt</code> devuelve textos, y para poder
              operar los debemos de convertir a números, que es lo que realiza
              la función <code>parseInt</code>
            </li>
            <li>
              Mostramos el resultado con un <code>alert</code>
            </li>
          </ul>
        </div>
        <div className="eight columns">
          <CodeRunner
            code={ejercicio_operaciones}
            language="html"
            executableIframe
          />
        </div>
      </div>

      <div className="row">
        <p className="explain">
          Podemos crear el mismo ejercicio, nombrandolo &nbsp;
          <code>introprog/c2/ejercicio2.html</code>. Una vez lo hayamos creado
          en el servidor y guardado, debemos acceder con el navegador para poder
          probarlo.
          <br />
          <strong>
            Podemos repetir el ejercicio con multiplicaciones en lugar de sumas
            y guardarlo como
            <code>introprog/c2/ejercicio3.html</code>
          </strong>
        </p>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Condicionales</h5>
          <p>
            Como sabemos el flujo del programa se{" "}
            <strong>ejecuta línea a línea</strong>, de principio a fin.
            Disponemos de un tipo de expresión que nos permite evaluar las
            líneas de forma <strong>condicional</strong>.
          </p>
          <ul>
            <li>
              <code>if(isNaN(a))</code> valida si el valor es número. isNaN
              devuelve <code>true</code> si <code>a</code> <strong>NO</strong>{" "}
              es numérico
            </li>
            <li>
              <code>else</code> es numérico, pasamos a evaluar el valor de{" "}
              <code>a</code>
            </li>
            <li>
              si <code>a</code> es menor a <code>5</code>, la nota es suspenso
            </li>
            <li>
              si <code>a</code> es mayor a <code>5</code>, aprobado
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner code={conditionals} executable />
        </div>
      </div>
      <div className="row">
        <p className="explain">
          Podemos crear el mismo ejercicio, nombrandolo
          <code>introprog/c2/ejercicio4.html</code>. Una vez lo hayamos creado
          en el servidor y guardado, debemos acceder con el navegador para poder
          probarlo.
          <br />
          <strong>Recordad</strong>, añadir la parte de <code>{"<html>"}</code>,
          para que al cargarlo en el navegador, sepa que tiene que
          interpretar el <code>{"<script>"}</code>.
          <br />
        </p>
      </div>
    </div>
    <Quiz questions={questions} title="Test de conocimientos" />
    <div className="container content">
      <div className="row btop">
        <div className="six columns">
          <h2>Ejercicio entregable</h2>
          <p style={{fontSize: '1.8rem'}}>
            Imaginad que tenemos una tienda, estamos en rebajas, y deseamos
            crear un programa que nos calcule un <strong>descuento</strong> fijo
            del <strong>30%</strong> sobre el valor de los objetos. <br />
            Nombrad el archivo en el servidor como
            <code>introprog/c2/ejercicio5.html</code>
          </p>
        </div>
        <div className="six columns">
          <h5 style={{color: "#ff5722", borderBottom: '2px solid #ff5722', fontSize: '2rem'}}>Pistas</h5>
          <ul>
            <li>Crea un documento <code>html</code></li>
            <li>Usa <code>prompt</code> para pedir el número y <code>alert</code>
              para mostrar el resultado</li>
            <li>Aplicar un descuento del <code>30%</code> es lo mismo que multiplicar
            por <code>0.7</code></li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

const conditionals = `let a = parseInt(prompt("¿Nota?"))
if (isNaN(a)) {
  alert("Debes introducir un número")
} else {
  if (a < 5) {
    alert("Has suspendido")
  } else {
    alert("Has aprobado")
  }
}
`;

const javascript = `<html>
<script language="javascript">
alert("hola mundo")
</script>
</html>
`;

const ejercicio_operaciones = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio Operaciones</title>
</head>
<script>
  let a = prompt("Introduce un numero")
  let b = prompt("Introduce otro numero")
  let resultado = parseInt(a) + parseInt(b)
  alert(resultado)
</script>
<body>
</body>
</html>
`;

const example_variables = `// prompt pregunta datos al usuario
let a = prompt("Introduce tu nombre")
// a, contiene la cadena de texto introducido.
alert("Tu nombre es " + a)
`;

const ops = [
  ["+", "Suma", "a + b"],
  ["-", "Resta", "a - b"],
  ["/", "División", "12 / 6"],
  ["*", "Multiplicación", "3*9"],
  ["==", "Igualdad", "(a == b) true"],
  ["!=", "Diferencia", "(a != b)"],
  [">=", "Mayor o igual", "5 >= 1"],
  ["<=", "Menor o igaul", "1 <= 3"],
];

const operations = `console.log("sum", 1+3)
console.log("div", 12/3)
console.log("are equal?", 1 == 1)
console.log("are different", 1 != 3)
`;

export default IntroProg;
