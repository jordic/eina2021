import { Layout } from "../components/layout";
import { CodeRunner } from "../components/runner";
import { CodeRunnerOutput } from "../components/runner";
import { Ejercicio } from "../components/ejercicio";
import { Quiz } from "../components/quiz";
import questions from "../quiz/006";
import { Youtube } from "../components/utils";
import { RunOnModal } from "../components/modal";

const IntroProg = () => (
  <Layout isHeader>
    <div className="container content">
      <div className="row">
        <h1>Funciones y listas</h1>
        <h4 style={{ marginTop: "-20px", color: "#f08d49" }}>
          Herramientas javascript
        </h4>
      </div>
      <div className="row">
        <div className="six columns">
          <h5>¿Qué es una función?</h5>
          <p>
            Una función es un bloque de código que se convierte en reusable y
            realiza un mismo propósito. una función puede recibir parámetros y
            devolver un resultado. para declarar una función usamos{" "}
            <code>{"function(){}"}</code>.
          </p>
          <ul>
            <li>
              Declaramos una función con la palabra <code>function()</code>, y
              una lista de instrucciones dentro del bloque.
            </li>
            <li>
              El bloque interno <code>alert('hola')</code> solo se ejecutará
              cuando llamemos a la función por su nombre. <code>saluda()</code>
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner
            executable
            code={`function saluda() {
  alert('hola')
}
saluda()
// saluda()            `}
          />
          <p className="explain">
            <code>introprog/c6/ejercicio1.html</code>
            Probad de añadir una nueva llamada a la función saluda(), justo
            después de la primera. Luego comentar las dos funciones. Debería de
            no pasar nada.
          </p>
          <p className="explain">
            Añadiendo <code>//</code> al principio de la línea, la comentamos y
            deja de ejecutarse.
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Parámetros en una función</h5>
          <p>
            Pensemos en una función que suma números. El propósito de la misma
            será que dados dos números nos devuelva la suma de los mismos.
          </p>
          <ul>
            <li>
              En la función SUMA recibimos un parámetro <strong>a</strong> y un
              parámetro <strong>b</strong> que deben de ser números, la función{" "}
              <code>suma</code> nos devuelve un número con el resultado de la
              suma
            </li>
            <li>
              Mediante el uso de la instrucción <code>return</code>, marcamos la
              parte que debe de devolver. Cuando el interprete encuentra una
              instrucción
              <code>return</code> dentro de una función, devuelve el resultado y
              termina su ejecución
            </li>
            <li>
              Una vez declarada una función se puede usar tantas veces como
              queramos y tantas veces como la llamemos.
            </li>
            <li>
              Las variables declaradas dentro de una función sólo son visibles
              en el bloque de la función. Está propiedad se llama{" "}
              <strong>scope</strong> en inglés que se puede traducir como
              alcance y determina la visibilidad de sus elementos. Podemos
              pensar en una función como un nuevo programa que podemos usar en
              otras partes de nuestro programa principal.
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner
            language="html"
            executable
            code={`function suma(a, b) {
  return a + b
}
let a = suma(10, 20)
alert(a)
alert(suma(100, 200))
console.log(suma(1,2))
`}
          />
          <Ejercicio title="introprog/c6/ejercicio2.html">
            <ol>
              <li>Crearemos el archivo html en la ruta indicada</li>
              <li>
                Añadimos el html con los script para poder ejecutar el script
              </li>
              <li>
                Podemos forzar a que devuelva algo fijo añadiendo{" "}
                <code>return 5</code>
                antes de <code>return a + b</code>
              </li>
              <li>
                Podemos usar la función tantas veces como queramos con
                parámetros distintos, se comporta como una nueva instrucción.
              </li>
            </ol>
          </Ejercicio>
          <p className="explain mtop">
            Si usamos <code>console.log()</code> en lugar de mostrar el
            resultado en una ventana emergente lo mandamos a la consola del
            navegador. Podemos abrir la consola, con botón derecho,
            inspeccionar, consola. Una vez ejecutado el ejercicio, debería
            aparecer <code>3</code>
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Evaluación de funciones</h5>
          <p>
            Las funciones, son <code>lazy</code>, solo se evalúan cunado las
            llamámos
          </p>
          <p className="explain">
            <h4>Interpretar vs evaluar</h4>
            <p>
              Cuando el navegador lee nuestro código lo interpreta y lo prepara
              en memoria. La acción de evaluarlos sucede en el momento que se
              empieza a ejecutar.{" "}
            </p>
          </p>
          <p>
            En Javascript las funciones son muy útiles para programar trozos de
            código que se ejecutarán cuando el usuario realiza ciertas
            interacciones. Por ejemplo, podemos programar una función que se
            ejecute cada vez que el usuario pulsa un botón. A diferencia del
            código que añadimos al hilo principal las funciones se evalúan de
            forma lazy (vaga) ya que solo se evaluarán cuando las ejecutamos
            desde algún punto del hilo principal.
          </p>
          <p>
            Cuando en jQuery estamos programando el document ready en realidad
            lo que estamos haciendo es adjuntar una función al evento de DOM
            disponible. El código dentro de nuestra función se evaluará en el
            momento que se haya cargado el html y css .
          </p>
        </div>
        <div className="six columns">
          <h4>introprog/c6/ejercicio3.html</h4>
          <CodeRunner code={ejercicio_funciones} />
          <RunOnModal code={ejercicio_funciones} />
        </div>
      </div>
      <div className="row"></div>
      <div className="row btop">
        <div className="six columns">
          <h5>Listas. (Array)</h5>
          <ul>
            <li>
              Sabemos que una variable se crea usando la expresión{" "}
              <code>let a = 'xxx'</code>. Dentro de una variable podemos
              almacenar, números, textos u objetos.
            </li>
            <li>
            Una lista (array) es una variable que almacena elementos en sus posiciones.
            </li>
            <li>Podemos acceder por posición. <code>a[0]</code>, es la primera posición.
              <code>a[5]</code> es la última.</li>
            <li>Podemos consultar su tamaño. <code>a.length</code>.
            Cuantos elementos hay dentro de la lista</li>
            <li>Podemos añadir elementos <code>a.push(3)</code> al final o al principio
            <code>a.unshift(1)</code></li>
            <li>En una lista podemos gauardar cualquier tipo de dato</li>
          </ul>

        </div>
        <div className="six columns">
        <h4>introprog/c6/ejercicio4.html</h4>
        <CodeRunner code={`let a = [1,2,3,4,5,6]
console.log(a[0]) // = 1
// Tamaño de la lista
console.log(a.length) // = 6
// Última posición, si empieza por 0 la útima es 5
console.log(a[5]) // = 6
// Añadir un elemento
a.push(7);
console.log(a.length, a[6]) // 7, 7
// Quitar el último elemento
a.pop()
console.log(a.length) // 6
`}
/>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Listas. Iteraciones</h5>
          <ul>
            <li>Mediante código, podemos recorrer todos los elementos de una lista</li>
            <CodeRunner code={`let a = [1,2,3,4,5]
for(let i=0; i<a.length; i++) {
  console.log(a[i])
}
`} />
            <li>
              <code>for</code> para cada valor de i, desde <code>i=0</code>,
              hasta <code>{`i<a.length`}</code> incrementa <code>++</code>
              el valor de i
            </li>
            <li>la instrucción for, ejecutará 5 veces el código de su bloque <code>{'{}'}</code>
            <code>console.log</code> en cada <strong>iteración</strong> <code>i</code>
            irá incrementando su valor</li>

          </ul>
        </div>
        <div className="six columns">
          <h4>Paso a paso</h4>
          <CodeRunner code={`let a = ['a', 'b', 'c']
for(let i=0; i<a.length; i++) {
  console.log(a[i])
}
console.log('fin')
`} />
        <ul>
          <li>a contine una lista (1,2,3)</li>
          <li>Iteración 1, <code>i=0</code>, <code>a[i]</code> es a[0], por tanto
            console.log(a[i]) = 'a'</li>
          <li>Iteración 2. <code>(i=0, i++, i=1)</code>. <code>i=1</code>,
            <code>a[i] == 'b'</code></li>
          <li>iteración 3. <code>(i=0, i++, i=1)</code>. <code>i=2</code>,
            <code>a[i] == 'c'</code></li>
          <li>Iteración 4. <code>i=3</code>, como que <code>i{`>=`}a.length</code>
            el código no se ejecuta y salta a la siguiente instrucción despúes del
            <code>for</code> <code>console.log('fin')</code></li>
        </ul>
        <p>Más sore loops: (<a href="https://www.youtube.com/watch?v=Kn06785pkJg"
          target="_blank">Vídeo youtube</a>)</p>
        </div>
      </div>

      <div className="row">
        <div className="six columns">
        <h4>un ejemplo</h4>
        <p>Supongamos una clase de 5 alumnos, y queremos calcular la nota media,
          de la clase. Las notas són <code>let notas = [4,5,6,8,7]</code></p>
          <li>La media es la suma de todas las notas / entre el total de notas</li>
          <li>Debemos escribir un programa que realice la operación <code>(4+5+6+8+7)/5</code></li>
          <li>La nota media es <code>6</code></li>
          <li>Usaremos la variable <code>total</code> para almacenar el resultado</li>
          <li>En cada iteración sumaremos la nota de la posición de la lista</li>
          <li>al final del bucle, total contendrá la suma de todas las notas</li>
          <li>Para calcular la media, dividiremos <code>total</code>, entre el número
          de notas <code>notas.length</code></li>
          <li>Probad de añadir mas notas o cambiarlas, y comprobad el resultado</li>
        </div>
        <div className="six columns">
          <h4>introprog/c6/ejercicio6.html</h4>
        <CodeRunner code={notaMedia}/>
        <RunOnModal code={notaMedia} />
        </div>

      </div>
      <div className="row btop">
        <div className="six columns">
          <h5>Ejercicios</h5>
        </div>
        <div className="six columns">
        </div>
      </div>
      <div className="row">
      <p className="explain">
            introprog/c6/ejercicio7.html
            <p>Crearemos un reloj. (En Clase)</p>
          </p>
        <p className="explain">
          <strong>Ejercicio entregable: introprog/c6/ejericio7.html</strong>
          <p>Crear una web que en función de la hora del día cambie el fondo
            del body. (Una imágen de noche, una imágen de aterdecer y una imágen de día.)
          </p>
        </p>
      </div>
    </div>
    <Quiz questions={questions} title="Test de conocimientos" />

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

const ejercicio_funciones = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio Operaciones</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
<script>
function suma(a, b) {
  return a + b
}
$(document).ready(function() {
  $("#calcula").click(function() {
    let k = parseInt($('#a').val())
    let r = parseInt($('#b').val())
    $("#calcula").text("Calcula " + suma(k, r))
  })
})
</script>
<body>
<input type="number" id="a" placeholder="numero" />
<input type="number" id="b" placeholder="numero" />
<button id="calcula">Calcula</button>
</body>
</html>
`;

const notaMedia = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
<script>
let notas = [4,5,6,8,7]
$(document).ready(function() {
  $("#calcula").click(function() {
    let total = 0
    for(let i=0; i<notas.length; i++) {
      total = total + notas[i]
    }
    $("#resultado").text("Media " + (total / notas.length))
  })
})
</script>
<body>
<button id="calcula">Calcula</button>
<h2 id="resultado"></h2>
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
