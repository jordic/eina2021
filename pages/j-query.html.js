import { Layout } from "../components/layout";
import { CodeRunner } from "../components/runner";
import { Ejercicio } from "../components/ejercicio";
import { useApp } from "../components/context";
import { RunOnModal } from "../components/modal";
import questions from "../quiz/003"
import {Quiz} from "../components/quiz"

const javascript = `<html>
<script language="javascript">
alert("hola mundo")
</script>
</html>
`;

const Jeyquery = () => {
  const app = useApp();

  return (
    <Layout isHeader>
      <div className="container content">
        <div className="row">
          <h1>jQuery</h1>
          <h4 style={{ marginTop: "-20px", color: "#f08d49" }}>
            Interactuar con el DOM
          </h4>
        </div>
        <div className="row cent">
          <img src="/static/dom.png" height="400px"  />
        </div>
        <div className="row">
          <div className="twelve columns">
            <h5>¿Qué es?</h5>
            <p>
              JQuery es una <strong>librería</strong> que nos permite
              interactuar con el <strong>DOM</strong> de una forma{" "}
              <strong>civilizada</strong>. Una librería, es un conjunto de
              funciones y utilidades que podemos usar en nuestro programa.
            </p>
            <p>
              Las librerías normalmente se "instalan" referenciándolas en una
              etiqueta script del documento html.
            </p>
            <CodeRunner code={`<script src="ruta/libreria.js"></script>`} />
            <p>
              donde el path es la ruta al archivo. (Igual que una imágen o un
              css).
            </p>
          </div>
        </div>
        <div className="row btop">
          <div className="six columns">
            <h1>Instalación</h1>
            <p>
              Para usar jQuery en nuestra página, debemos incluir el archivo.
              para ello nos basta añadiendo una etiqueta{" "}
              <span className="label">{"<script>"}</span>, y apuntando el
              atributo <span className="label">src</span>&nbsp; a la ruta donde
              tengamos el archivo descargado.
            </p>
            <p>
              Otra opción, la del ejemplo, usamos directamente la{" "}
              <strong>url</strong> de un CDN (Content Delivery Network) de
              google.
            </p>
            <p>
              Reproducir el ejemplo en el archivo{" "}
              <span className="label">introprog/c3/ejercicio1.html</span>. El
              resultado tiene que ser una ventana emergente con un "hola".
            </p>
            <p className="small">
              *La parte dentro del script la veremos seguidamente, de momento,
              es suficiente con que funcione.
            </p>
          </div>
          <div className="six columns">
            <CodeRunner code={jQueryInstall} />
            <RunOnModal code={jQueryInstall} />
          </div>
        </div>
        <div className="row btop">
          <h1>$()</h1>
          <p>
            El único propósito de jQuery es manipular el DOM, y así lo refleja
            su API (Application Programming Interface o el conjunto de funciones
            y utilidades que nos ofrece una librería), siempre sigue el mismo
            patrón:
            <CodeRunner code={"$(selector).metodo(parametros)"} />
            Dónde el <strong>selector</strong> es un string u elemento del DOM,
            que designa el objeto/s o nodo/s sobre los cuales queremos
            aplicar/conectar un &nbsp;
            <strong>método / acción / handler</strong>.
          </p>
        </div>
        <div className="row btop">
          <div className="six columns">
            <h1>El evento click</h1>
            <p>
              Veamos un ejemplo práctico: hemos creado un html, con un único
              elemento html, un <code>{"<button>"}</code>, y conectaremos un
              evento que al hacerle click, nos muestre un <code>alert</code>.
              Nos concentramos en la parte dentro de los{" "}
              <code>{"<script>"}</code>.
            </p>
            <ul>
              <li>
                <code>{"$(document).ready(function() {"}</code> es obligatorio,
                y nos permite esperar a qué todo el html haya descargado (este
                listo) para poder actuar con seguridad.
              </li>
              <li>
                <code>{'$("#boton").click(function(){'}</code> Aquí, usamos el
                patrón anterior, <strong>#boton</strong> es un selector por id
                que nos selecciona el botton del html (fijaros que tiene el
                id="boton"). Usamos el método/función <strong>click</strong>,
                que nos permite asociarnos a un evento de click.
              </li>
              <li>
                Finalmente, la parte del <code>alert</code>, ya la conocemos, y
                fijaros, que al final es simple,{" "}
                <strong>al hacer click en el botón ejecuta un alert</strong>.
              </li>
            </ul>
            <p className="explain">
              Reproducir el ejemplo en el archivo:
              <code>introprog/c3/ejercicio2.html</code>. El resultado debe ser
              el mismo que la demo.
            </p>
          </div>
          <div className="six columns">
            <CodeRunner code={codeClick} />
            <RunOnModal code={codeClick} />
          </div>
        </div>
        <div className="row btop">
          <div className="six columns">
            <h1>Leer datos</h1>
            <p>
              Continuando con el ejemplo anterior, ahora aprenderemos como usar
              jQuery para leer datos. Nos centraremos en los cambios.
            </p>
            <ul>
              <li>
                <code>{'<input type="text"...'}</code> hemos introducido un
                nuevo elemento <code>html</code> que nos permite introducir
                datos.
              </li>
              <li>
                En la parte del script hemos añadido{" "}
                <code>{'$("#text").val()'}</code>. De nuevo, usamos un selector{" "}
                <strong>#text</strong> (fijaros que el campo input tiene un{" "}
                <code>{'id="text"'}</code>) para seleccionar el elemento del DOM
                (input). y llamamos al método <code>.val()</code> que nos
                devuelve su contenido.
              </li>
              <li>
                Finalmente, hemos compuesto el texto del <code>alert</code>,
                como suma de la cadena <strong>Hola </strong> y el resultado
                devuelto por la expresión jQuery.
              </li>
              <li>
                De momento no es relevante, en siguientes sesiones entraremos en
                ello, pero fijaros que para seleccionar por <strong>id</strong>,
                siempre usamos el carácter <code>#</code>. Un elemento con un{" "}
                <code>id='test'</code>, lo podremos recuperar con{" "}
                <code>"#test'</code>. (Los id, identificadores, tienen que ser
                únicos en el documento, para poder ser usables).
              </li>
            </ul>
            <p className="explain">
              Crear el ejemplo en: <code>introprog/c3/ejercicio3.html</code>
            </p>
          </div>
          <div className="six columns">
            <CodeRunner code={leerDatos} />
            <RunOnModal code={leerDatos} />
          </div>
        </div>
        <div className="row btop">
          <div className="six columns">
            <h1>Manipulando el DOM</h1>
            <p>
              Cerraremos el círculo empezado, reemplazando el <code>alert</code>
              es feo y molesto, escribiendo el resultado en el DOM.
            </p>
            <ul>
              <li>
                En la parte del html, hemos introducido una nueva etiqueta{" "}
                <code>{'<h1 id="resultado"></h1>'}</code>, que usaremos como{" "}
                <i>placeholder</i> para escribir el resultado.
              </li>
              <li>
                En el script, hemos reemplazado el alert, por una nueva
                operación con jQuery, <code>{'$("#resultado").text(...)'}</code>
              </li>
              <li>
                Seleccionamos el elemento <code>{"<h1>"}</code>, utilizando su
                identificador <code>resultado</code>, mediante el selector{" "}
                <code>#resultado</code>. En este caso, utilizamos el método
                <code>.text()</code> para modificar su contenido.
              </li>
              <li>Dentro de <code>.text()</code> escribimos el resultado
                de sumar el string <code>"Hola "</code> y <code>$("#text").val()</code>
                el valor del campo.</li>
            </ul>
            <p>Fijaros que tanto <code>.text()</code> como <code>.val()</code>
              son métodos que aplican a elementos html. En jQuery, el mismo nombre
              puede usarse tanto para leer como para escribir. Si no le pasamos
                ningún parámetro, estamos leyendo. Si le pasamos parámetros, estamos
                escribiendo. </p>
            <CodeRunner code={`.text(parametros)`} />
            <p className="explain">
              Crear el ejemplo en: <code>introprog/c3/ejercicio4.html</code>
            </p>

          </div>
          <div className="six columns">
            <CodeRunner code={manipularDom} />
            <RunOnModal code={manipularDom} />
          </div>
        </div>
        </div>
        <Quiz questions={questions} />
        <div className="container content">
      <div className="row btop">
        <div className="six columns">
          <h2>Ejercicio entregable</h2>
          <p style={{fontSize: '1.8rem'}}>
            Retomamos el ejercicio de la sesión anterior
            y lo adaptamos a html. Cambiaremos el prompt por un campo de
            texto y un botón, y escribimos el resultado en un {"<div>"}
            <br />
            <code>introprog/c3/ejercicio5.html</code>
          </p>
        </div>
        <div className="six columns">
          <h5 style={{color: "#ff5722", borderBottom: '2px solid #ff5722', fontSize: '2rem'}}>Pistas</h5>
          <ul>
            <li>Crea un documento <code>html</code></li>
            <li>Usa <code>jQuery</code> para pedir leer y procesar las entradas</li>
            <li>Aplicar un descuento del <code>30%</code> es lo mismo que multiplicar
            por <code>0.7</code></li>
          </ul>
        </div>
      </div>
    </div>
    </Layout>
  );
};

const manipularDom = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hola JQuery</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<script>
$(document).ready(function() {
  $("#boton").click(function(){
    $('#resultado').text(
      "Hola " + $("#text").val()
    )
  })
})
</script>
<body>
<input type="text" id="text"
  placeholder="Introduce tu nombre" />
<button id="boton">Saluda</button>
<h1 id="resultado"></h1>
</body>
</html>`;

const leerDatos = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hola JQuery</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<script>
$(document).ready(function() {
  $("#boton").click(function(){
    alert("Hola " + $("#text").val())
  })
})
</script>
<body>
<input type="text" id="text"
  placeholder="Introduce tu nombre" />
<button id="boton">Saluda</button>
</body>
</html>`;

const codeClick = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hola JQuery</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<script>
$(document).ready(function() {
  $("#boton").click(function(){
    alert("resultado")
  })
})
</script>
<body>
<button id="boton">Muestra aviso</button>
</body>
</html>`;

const jQueryInstall = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hola JQuery</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<script>
  $(document).ready(function(){
    alert("hola")
  })
</script>
<body>
<h1>hola jquery</h1>
</body>
</html>`;

export function HelloWorld() {
  const app = useApp();
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => app.closeModal()}>Close</button>
    </>
  );
}

export default Jeyquery;
