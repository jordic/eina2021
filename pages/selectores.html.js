import { Layout } from "../components/layout";
import { CodeRunner } from "../components/runner";
import { Ejercicio } from "../components/ejercicio";
import { RunOnModal } from "../components/modal";
import questions from "../quiz/004"
import {Quiz} from "../components/quiz"


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
            jQuery nos permite interactuar con el DOM de forma dinámica. Podemos
            cambiar colores, ocultar cosas, mover, cargar contenido, o programar
            eventos, pero siempre usando elementos del DOM. Para realizar
            cualquier acción, debemos escojer el elemento sobre el que lo
            realizaremos mediante un selector.
          </p>
        </div>
        <div className="six columns">
          <h2>Selector</h2>
          <CodeRunner language="html" code={`$('expression').metodo()`} />
          <p>
            Un <strong>selector</strong> es una expresión que nos permite
            "seleccionar" un elemento o conjunto de elementos del DOM.
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Seleccionando ids</h1>
          <ul>
            <li>
              Igual que en CSS seleccionamos con <strong>#elemento</strong>
            </li>
            <li>ID, es un identificador y debe de ser único por documento</li>
            <li>jQuery nos devuelve una referencia al elemento</li>
          </ul>
          <h5>En la Demo</h5>
          <ul>
            <li>
              Cargamos Jquery y programamos una función en al evento ready de
              jQuery. <code>{"$(document).ready(function(){"}</code>
            </li>
            <li>
              Utilizamos el selector <strong>#boton</strong>, para programar una
              función al evento <strong>click</strong> del botón. (El código de
              la función se ejecutará al hacer click en el botón).
            </li>
            <li>
              Seleccionamos el body del documento usando el selector
              <strong>#bod</strong>, y le cambiamos sus estilos usando el método{" "}
              <strong>css</strong>
            </li>
          </ul>
          <p className="explain">
            Reproducir el ejemplo en el archivo:
            <code>introprog/c4/ejercicio1.html</code>. El resultado debe ser el
            mismo que la demo.
          </p>
          <p>
            Podéis experimentar un poco, cambiando el css del div principal, o
            añadiendo otra instrucción para que cambie el color de fondo del
            botón al mismo tiempo que cambia el fondo del body.
          </p>
        </div>
        <div className="six columns">
          <CodeRunner language="html" code={htmlIds} />
          <RunOnModal code={htmlIds} />
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Seleccionando classes</h1>
          <p>
            Los selectores de jQuery son los mismos que en css. Podemos
            seleccionar elementos por <strong>.clase</strong>
          </p>
          <ul>
            <li>
              Cuando seleccionames por clase la acción afecta a todos los
              elementos que tienen la clase. (Igual que en CSS)
            </li>
            <li>
              El método toggle, intercanvia la visibilidad de un elemento. Si es
              visible lo esconde, si es invisible lo muestra.
            </li>
            <li>
              Podemos programar distintos eventos para distintos botones en un
              mismo evento ready.
            </li>
            <li>
              El selector por clase, si comprobamos el resultado, nos devuelve
              una lista de elementos (en lugar de un elemento el selector por
              id)
            </li>
          </ul>
          <p className="explain">
            Reproducir el ejemplo en el archivo:
            <code>introprog/c4/ejercicio2.html</code>. El resultado debe ser el
            mismo que la demo.
          </p>
          <ul>
            <li>
              Seleccionando los items con la clase <code>.ele</code>, estamos
              seleccionando todos los elmentos dentro de #principal
            </li>
            <li>
              al seleccionar con la clase <code>.imp</code>, nuestro código
              afecta los elementos impares
            </li>
          </ul>
        </div>
        <div className="six columns">
          <CodeRunner language="html" code={htmlClass} />
          <RunOnModal code={htmlClass} />
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Seleccionando elementos</h1>
          <p>Igual que en css podemos seleccionar elementos completos, utilizando
            como selector el nombre del elemento <code>{'$("p")'}</code> nos seleccionará
            todos los elementos p del html.
          </p>
          <p className="explain">
            Reproducir el ejemplo en el archivo:
            <code>introprog/c4/ejercicio3.html</code>. El resultado debe ser el
            mismo que la demo.
          </p>
          <h5>Notas</h5>
          <ul>
            <li>Declaramos una función <code>getRandomColor</code> que nos devuelve un
            color aleatorio. En la siguiente clase entraremos más en detalle sobre funciones.</li>
            <li>el primer botón <code>#b1</code>, le programamos el evento click, para
              que cambie el color del border de todos los <code>{'<div>'}</code> de la página</li>
            <li>Para los sucesivos: b2, b3 y b4 usamos la misma técnica con otros elementos</li>
          </ul>
          <CodeRunner language="html" code={`$('div').css(
    'border',
    '1px solid ' + getRandomColor()
)`} />
        <ul>
          <li>Para el elemento <code>div</code>, le aplicamos la siguiente regla css,
            mediante el uso del método <code>css</code></li>
            <li>La regla css es la "suma" de los strings <code>1px solid </code>
             + el resultado de la función <code>getRandomColor()</code>
            </li>
          <li>si abrimos el inspector web la consola del navegador en nuestro
            ejercicio, podemos ejecutar directamete la función <code>getRandomCode()</code>
            y comprobar como nos devuelve una cadena de texto con el color.
          </li>
        </ul>
        </div>

        <div className="six columns">
          <CodeRunner language="html" code={htmlElement} />
          <RunOnModal code={htmlElement} />
        </div>
      </div>
      <div className="row btop">
        <h1>Otros</h1>
        <p>Igual que en css podemos hacer combinaciones de selectores:
          <code>{'$("p .red")'}</code> nos seleccionará cualquier elemento hijo de
          <code>p</code> que contenga la clase <code>.red</code></p>
        <p>De momento hemos usado tres métodos posibles en jquery:</p>
        <ul>
          <li><code style={{backgroundColor: '#96b992'}}>.css()</code> Nos permite cambiar el css del elemento seleccionado, si deseamos
            cambiar multiples propiedades lo podríamos hacer con la siguiente forma:
            <CodeRunner language="html" code={`$("sel").css({"bacgrkoundColor": "yellow", "borderColor":"green"})`} />
            <ul>
              <li>Las propiedades css a diferencia de en css, se escriben en formato <code>camelCase</code>.
              <code>background-color => backgroundColor</code> <code>border-color => borderColor</code>
              </li>
              <li>usando <code>let a = {'{"prop": "valor", "prop2": "valor2"}'}</code> estamos definiendo un objeto, con propiedades. (Probadlo en la consola de javascript)</li>
            </ul>
          </li>
          <li>
          <code style={{backgroundColor: '#96b992'}}>.toggle()</code> nos permite intercanviar
            la visibilidad del elemento seleccionado. Si el elemento está oculto, lo muestra,
            si el elemento está visible lo esconde.
          </li>
          <li>
          <code style={{backgroundColor: '#96b992'}}>.click()</code> Nos permite conectar,
          <code>funciones</code> javascript a <code>eventos</code>. Un evento es una interacción que
          realiza el usuario.
          </li>

        </ul>
      </div>
    </div>
    <div style={{marginTop: "40px"}}>
    <Quiz questions={questions} />
    </div>
    <div className="container content">
      <div className="row btop">
        <div className="six columns">
          <h2>Ejercicio entregable</h2>
          <p style={{fontSize: '1.8rem'}}>
            Crearemos un html, con un botón, que cada vez que lo pulsemos, nos
            cambie el color de fondo de la página. (Usando la función getRandomCode)
            <br />
            <code>introprog/c4/ejercicio4.html</code>
          </p>
        </div>
        <div className="six columns">
          <h5 style={{color: "#ff5722", borderBottom: '2px solid #ff5722', fontSize: '2rem'}}>Pistas</h5>
          <ul>
            <li>Crea un documento <code>html</code></li>
            <li>Usa <code>jQuery</code> para pedir leer y procesar las entradas</li>
            <li>Seleccionar el body y aplicar el css con jQuery</li>
          </ul>
        </div>
      </div>
    </div>

  </Layout>
);

const htmlElement = `<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
$(document).ready(function() {
  $('#b1').click(function() {
    $('div').css('border', '1px solid ' + getRandomColor())
  })
  $('#b2').click(function() {
    $('ul').css('border', '1px solid ' + getRandomColor())
  })
  $('#b3').click(function() {
    $('li').css('border', '1px solid ' + getRandomColor())
  })
  $('#b4').click(function() {
    $('ol').css('border', '1px solid ' + getRandomColor())
  })
})
</script>
</head>
<body id="bod">
  <div id="principal">
    <button id="b1">div</button><button id="b2">ul</button>
    <button id="b3">li</button><button id="b4">ol</button>
  </div>
  <div id="principal">
    <ul><li>Elemento 1</li><li>Elemento 2</li></ul>
    <ol><li>Elemento</li><li>Elemento</li></ol>
  </div>
</body>
</html>`;



const htmlClass = `<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
  $('#boton1').click(function(){
    $('.ele').toggle()
  })
  $('#boton2').click(function(){
    $('.imp').toggle()
  })
  $('#boton3').click(function(){
    $('.par').toggle()
  })
})
</script>
</head>
<body id="bod">
  <div id="principal">
    <button id="boton1">todos</button>
    <button id="boton2">toggle Impares</button>
    <button id="boton3">toggle Pares</button>
  </div>
  <div id="principal">
    <div class="ele imp">Uno</div>
    <div class="ele par">Dos</div>
    <div class="ele imp">Tres</div>
    <div class="ele par">Cuatro</div>
  </div>
</body>
</html>`;

const htmlIds = `<html>
  <head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script>
  $(document).ready(function() {
    $('#boton').click(function(){
      $('#bod').css('backgroundColor', 'yellow')
    })
  })
  </script>
  </head>
  <body id="bod">
    <div id="principal">
      <p>Content</p>
      <button id="boton">Button</button>
    </div>
  </body>
</html>
`;

export default Jeyquery;
