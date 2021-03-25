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
        <h1>toggleClass</h1>
        <h4 style={{ marginTop: "-20px", color: "#f08d49" }}>
          Poner y quitar clases
        </h4>
      </div>
      <div className="row">
        <div className="six columns">
          <p>
          JQuery nos permite interactuar con el DOM. Una de las herramientas más potentes y que nos permiten realizar multitud de interacciones es la capacidad de poner y quitar clases del DOM de forma dinámica.
          </p>
          <p>
            Los métodos fundamentales que nos ofrece jquery para operar con clases css, són
          </p>
          <ul>
            <li><code>.hasClass('xxx')</code> mira si el selector tiene la clase</li>
            <li><code>.addClass('a')</code> añade la clase al selector</li>
            <li><code>.removeClass('a')</code> elimina la clase al selector</li>
            <li><code>.toggleClass('a')</code> interruptor de clase. </li>

          </ul>
        </div>
        <div className="six columns">
          <h2>Selector</h2>
          <CodeRunner language="html" code={`$('expression').toggleClass('show')`} />
          <p>
          Al llamar a toggleClass en un elemento, nos permite poner o quitar la clase css en función de si el elemento la tiene o no.
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Un listado filtrable</h1>

        </div>
        <div className="six columns">
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Un menú desplegable</h1>

        </div>
        <div className="six columns">
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
