import { Layout } from "../components/layout";
import { CodeRunner } from "../components/runner";
import { Ejercicio } from "../components/ejercicio";
import { RunOnModal } from "../components/modal";
import questions from "../quiz/005";
import { Quiz } from "../components/quiz";
import Link from "next/link";

const javascript = `<html>
<script language="javascript">
alert("hola mundo")
</script>
</html>
`;

const Rutas = () => (
  <Layout isHeader>
    <div className="container content">
      <div className="row">
        <h1>Rutas, Archivos y Direcotrios</h1>
      </div>
      <div className="row">
        <div className="six columns">
          <h2>¿Qué es una ruta?</h2>
          <p>
            Un ruta (path) es la forma como describimos el lugar desde el cual
            cargar un recurso externo. Por ejemplo, cuando enlazamos una imágen
            en la web con la etiqueta {"<img>"} en el atributo{" "}
            <code>src=""</code> tenemos que indicar el lugar desde donde nuestro
            cliente debe descargar la imágen.
          </p>
          <p>
            También usamos rutas a archivos cuando creamos enlaces con la
            etiqueta <code>{"<a>"}</code>
          </p>
          <p>
            Por lo tanto, un path, siempre describe la ruta en la cual nuestro
            cliente puede encontrar el recurso vinculado.
          </p>
          <p>
            En nuestro caso, una web, un path debe describir la ruta al archivo
            público en el servidor http.
          </p>
          <img src="/static/ruta.png" width="90%" alt="" />
        </div>
        <div className="six columns">
          <h4>Ejercicio 1. /c5/ejercicio1.html</h4>
          <ul>
            <li>
              Accedemos al editor y dentro de la carpeta jordi{" "}
              <code>/web/jordi/</code>
              creamos una carpeta <code>imagenes</code> y guardamos una imágen
              llamada <code>gatito.jpg</code>. (La podemos descargar de &nbsp;
              <Link href="/static/gatito.jpg" target="_blank">
                aquí, con botón derecho
              </Link>
              .)
            </li>
            <li>
              Nos aseguramos mediante el botón derecho de subir la carpeta.
              (Opción upload)
            </li>
            <li>
              Comprobamos que podemos acceder a la imágen en la ruta
              <code>https://nuestrodominio.com/jordi/imagenes/gatito.jpg</code>
            </li>
            <li>
              Si escrivimos esta <strong>URL</strong> en el navegador podremos
              comprobar que la podemos descargar
            </li>
            <li>
              En el archivo html, creamos un doc html y en el body, añadimos un
              tag <code>img</code> y en atributo <code>src</code>, copiamos y
              pegamos la url del archivo. (Comprobamos que la imágen se
              visualiza).
            </li>
          </ul>
          <p>
            Si la imágen la hubiéramos subido a la carpeta{" "}
            <code>/web/jordi/c5/img/</code>
            con el nombre <code>gatito.jpg</code>, la podríamos encontrar en{" "}
            <code>https://jordicodes.com/jordi/c5/img/gatito.jpg</code>.
            Recordad que en nuestro hosting, hemos vinculado la carpeta{" "}
            <code>/web/</code> a la raiz
            <code>https://jordicodes.com/</code> , y por tanto al realizar el
            enlace debemos eliminar el path de /web
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Rutas absolutas</h1>
          <h4 style={{ color: "orange" }}>¿Qué pasa si cambio mi dominio?</h4>
          <p>
            Pues tenemos un problema, porque nuestros documentos referencian
            archivos en el dominio anterior, y por lo tanto al cambiar nuestro
            dominio ya no serán accesibles. Para solucionar este problema de{" "}
            <strong>portabilidad</strong> (queremos hacerlo una vez y que
            funcione siempre, independientemente del dominio donde esté
            alojado), los clientes web (navegadores), permiten referenciar
            objetos sin usar el dominio.
          </p>
          <p>
            <code>https://www.jordicodes.com/jordi/images/imagen1.jpg</code>{" "}
            equivaldria a <code>/jordi/imagenes/imagen1.jpg</code>. Y en el{" "}
            <code>src</code>
            de la imágen de un documento en <code>https://jordicodes.com/</code>
            podemos referenciarlo como{" "}
            <code>{'<img src="/jordi/imagenes/imagen1.jpg" />'}</code>
          </p>
          <p>
            Esta forma de referenciar archivos se llama{" "}
            <strong>ruta absoluta</strong>. Puede ser muy útil, cuando
            referenciamos archivos en documentos que no sabemos en qué ruta
            residirán. (Por ejemplo un trozo de html que se usa en distintas
            páginas). Pero al mismo tiempo, tiene problemas de portabilidad.
          </p>
        </div>
        <div className="six columns">
          <p className="explain">Ejercicio c5/ejercicio2.html</p>
          <p>
            Supongamos que creamos una página cv.html y dentro queremos insertar
            nuestra fotografía personal. Esta página la hospedamos en{" "}
            <code>https://jordicodes/personal/cv.html</code>, la imágen la
            guardamos en la carpeta <code>imagenes/</code> con el nombre
            <code>jordicollell.jpg</code> y nos queda accesible en la url{" "}
            <code>
              https://jordicodes.com/personal/imagenes/jordicollell.jpg
            </code>
          </p>
          <ul>
            <li>
              Si usáramos una ruta absoluta podríamos insertar nuestra
              fotografía con una etiqueta así:
              <code>{'<img src="/personal/imagenes/jordicollell.jpg" />'}</code>
            </li>
            <li>
              Pero qué pasaría si en el futuro quisiéramos renombrar la carpeta
              personal a cvjordi. El nuevo documento reside en /cvjordi/cv.html
              y la imágen dejaría de funcionar, porque en nuestro navegador
              seguiría buscando en la ruta /personal/imagenes/jordicollell.jpg
              que es la ruta que tenemos declarada en nuestro documento html.
            </li>
          </ul>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Rutas Relativas</h1>
          <p>
            Para solucionar este problema, los clientes web, nos permiten usar{" "}
            <strong>rutas relativas</strong>, en lugar de referenciar la imágen
            en relación a la ruta absoluta de nuestro servidor, nos permiten
            referenciarla usando la ruta relativa al documento. En este caso,
            podríamos usar:
          </p>
          <CodeRunner
            language="html"
            code={`<img src="imagenes/jordicollell.jpg" />`}
          />
          <p>
            Fijaros que no usamos una "/" al principio, al hacer esto, nuestro
            navegador entiende que debe de calcular la ruta respecto al
            documento, y que por tanto, si el documento reside en
            https://jordicodes.com/personal/cv.html el calculará la ruta
            relativa juntando la ruta declarada de nuestro documento, a la ruta
            padre del documento.
          </p>
          <CodeRunner
            language="html"
            code={`https://jordicodes.com/personal/ + imagenes/jordicollell.jpg`}
          />
          <p>
            El problema de portabilidad queda resuelto, si renombramos la
            carpeta personal a cvjordi calculará la nueva ruta (sin cambiar nada
            del documento) cómo:
          </p>
          <CodeRunner
            language="html"
            code={`https://jordicodes.com/cvjordi/ + imagenes/jordicollell.jpg`}
          />
          <p>
            y seguirá funcionando, sin tener que editar las rutas de los
            archivos en nuestro documento.
          </p>
        </div>
        <div className="six columns">
          <h4 style={{ marginTop: "30px" }}>
            <strong>¿Por qué nombramos los archivos con nombre.ext?</strong>
          </h4>
          <p>
            Los archivos pueden tener un tipo (documentos de word, photoshop,
            illustrator o sketch), en nuestro sistema operativo
            (Mac/Windows/Linux), este tipo puede estar implícito en el archivo,
            guardado en una metadata (y nuestro ordenador es capaz de saber el
            tipo). Cuando los archivos los usamos de forma pública, (los subimos
            en una web), estos son accesibles a distintos sistemas operativos y
            navegadores. Y la metadata del tipo de archivo se pierde. Cuando el
            cliente, o el sistema tiene que descubrir qué tipo de archivo es, lo
            más fácil es marcarlo con la extensión. (Hay una lista de
            extensiones en la{" "}
            <a href="https://en.wikipedia.org/wiki/List_of_filename_extensions">
              Wikipedia
            </a>
            )
          </p>
          <p>
            Así si subimos una imágen de tipo jpg, la debemos nombrar
            imagen.jpg. O si queremos subir un documento de word, lo debemos
            nombrar .doc. Un archivo js lo debemos nombrar .js
          </p>
          <p>
            Por lo tanto debemos nombrar un archivo con nombre. extensión (donde
            la extensión indica el tipo de archivo)
          </p>
          <p className="explain">
            En resumen, un archivo expuesto públicamente (puesto en una URL) y
            accesible por un cliente web, debe de estar formado por su nombre
            (idealmente usar minúsculas, letras de la [a-z] sin espacios,
            reemplazar con guiones o guiones bajos) un punto (.) y la extensión,
            que le facilita el trabajo al cliente web, a la hora de (*1)
            descargarlo
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="six columns">
          <h1>Padres, hijos y árboles de archivos</h1>
          <p>
            Fijaros que estamos organizando los archivos en un sistema de árbol.
            Creamos una carpeta, dentro otra, y dentro añadimos un archivo.
          </p>
          <img src="/static/tree.png" />
          <p>
            Cuando mencionamos el "padre", estamos hablando de la carpeta que
            contiene el archivo, por ejemplo podemos afirmar que el padre de
            archivo.doc es hija, y al mismo tiempo, que el padre de hija es
            carpeta1. Las hijas de hija son archivo.doc y archivo2.doc. Y las
            hijas de carpeta1 son hija. Finalmente el padre de carpeta1 es "/"
            (raíz o root) y carpeta1 es hija de raíz.{" "}
          </p>
          <p>
            Fijaros que utilizamos la <strong>/</strong> para diferenciar los
            distintos segmentos o niveles.
          </p>
          <p>
            Cuando usamos rutas relativas, disponemos de una forma para usar su
            posición en el árbol mediante rutas (portables).
          </p>
        </div>

        <div className="six columns">
          <p style={{ marginTop: "50px" }}>
            Usaremos <code>..</code> para referenciar el padre
          </p>
          <CodeRunner
            language="html"
            code={`/a/b/1.jpg
/a/b/2.jpg
/a/b/3.jpg
/a/c/doc.html
/a/c/d/elemento.html
`}
          />
          <ul>
            <li>
              Des de /a/c/doc.html podemos enlazar las imágenes de b de forma
              relativa construyendo:
              <code>../b/1.jpg</code>
            </li>
            <li>
              Si estamos en <code>/a/c/doc.html</code>, nuestro padre es{" "}
              <code>/a/c/</code>
              <ul>
                <li>
                  <code>../</code> nos mueve a <code>/a/</code>
                </li>
                <li>
                  y <code>../b/</code> nos mueve a <code>/a/b/</code>
                </li>
                <li>
                  <code>../b/1.jpg</code> nos referencia <code>/a/b/1.jpg</code>
                </li>
              </ul>
            </li>
          </ul>
          <p className="explain">
            Reproducir el ejemplo en el archivo:
            <code>introprog/c5/ejercicio3.html</code>
          </p>
          <p>
            De la misma forma si des del documento{" "}
            <code>/a/c/d/elemento.html</code> queremos enlazar con el documento{" "}
            <code>/a/b/1.jpg</code> podemos expresar nuestra ruta como{" "}
            <code>../../b/1.jpg</code> y al revés des de
            <code>/a/b/1.jpg</code>, podríamos enlazar con{" "}
            <code>/a/c/d/elemento.html</code> usando{" "}
            <code>"../c/d/elemento.html"</code>
          </p>
        </div>
      </div>
      <div className="row btop">
        <div className="twelve columns">
          <h3>PageRank</h3>
          <p>
            <strong>La ventaja competitiva de google cuando nació.</strong>
          </p>
          <p>
            Si consideramos que cada página web tiene un árbol de archivos
            públicos, podemos ir un paso más allá y considerar la web como el
            primer nivel.{" "}

            Así la primera carpeta serían los dominios, de forma que podríamos
            construir un listado de todos los archivos accesibles en internet.
            Google (buscador) cuando empezó, quería ofrecer resultados
            relevantes, a las búsquedas de los usuarios, pero no sabía ordenar
            los resultados iguales. (Dos documentos que contienen la misma
            expresión).{" "}
          </p>
          <p>
            Los dos fundadores tuvieron la genial idea de calcular la
            importancia de cada documento a partir del número de enlaces a él en
            este "big" directorio.{" "}

            Así una url que estaba referenciada 50 veces (desde otros dominios),
            era más importante que una url, referenciada 10 veces desde otros
            dominios).
          </p>
          <h4>SEO</h4>
          <p>
            Aún a día de hoy, este es uno de los factores más importantes que
            usa google para ordenar los resultados equivalentes a una misma
            búsqueda semántica, de hecho, de la optimización de este proceso,
            sale un nuevo perfil profesional, <strong>los SEO</strong>, Search
            Engine Optimization, que se dedican a revisar técnica y
            semánticamente las webs para intentar posicionar de forma que
            obtengan más tráfico entrante. (cantidad de visitas que una web
            recibe)
          </p>
          <p className="small">
            *(1) En realidad el cliente web cuando descarga un archivo descarga dos partes, unos headers y el archivo en sí. Los headers pueden considerarse metadata, y en ella se indica el Content-Type del archivo. El problema es que nuestro servidor, tiene que deducir qué Content-Type sirve para cada archivo y la forma más eficiente de realizar esto, es usando el formato de extensiones.

          </p>
        </div>
      </div>
    </div>

    <div style={{ marginTop: "40px" }}>
      <Quiz questions={questions} />
    </div>
    <div className="container content">
      <div className="row btop">
        <div className="twelve columns">
          <h2>Ejercicio entregable</h2>
          <p style={{ fontSize: "1.8rem" }}>
            Confeccionaremos nuestro curriculum vitae en un documento html. Debe de contener:</p>
            <ul>
              <li>Una foto nuestra</li>
              <li>La información académica y profesional</li>
              <li>Los estilos en un archivo adicional</li>
              <li>Lo debemos subir y crear en la carpeta /cv/ de nuestro hosting</li>
            </ul>
        </div>
      </div>
    </div>
  </Layout>
);



export default Rutas;
