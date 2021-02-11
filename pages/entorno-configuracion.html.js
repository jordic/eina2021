import {Layout} from '../components/layout'
import ReactMarkdown from 'react-markdown'

const Entorno = () => (
  <Layout isHeader>
    <section className="container content">
    <div className="row">
      <h1>Entorno y configuración</h1>
      <p className="hl">Para poder desarrollar correctamente los contenidos del grado, trabajaremos
en remoto en un servidor, para eso debemos contratar un hosting y
dominio en <a href="https://www.ionos.es/" target="_blank">Ionos</a>, pero antes veremos
un poco que es una red.</p>
    </div>
    <div className="row btop">
      <div className="six columns">
    <ReactMarkdown>{`

## Servidores y clientes

- Cuando accedemos a internet, lo podemos hacer gracias a que nuestro dispositivo
(móvil o ordenador) están conectados a la red.
- **Internet** es una red global basada en el protocolo **TCP/IP**.
- Cuando accedemos a una web nos estamos conectando a un **servidor web**,
mediante nuestro **navegador (cliente)** y entre ellos hablan
el protocolo HTTP.
- Un servidor es ordenador que físicamente está en un datacenter. Un servidor web
es un programa que se ejecuta en el servidor y atiende las peticiones que los navegadores
le realizan.
- El **nombre de dominio** (www.dominio.com) utiliza el servicio de **DNS**
para localizar el servidor donde tenemos alojado nuestra web.

`}</ReactMarkdown>
  </div>
  <div className="six columns">
    <img src="/static/network.svg" width="100%" />
  </div>
  </div>

  <div className="row btop">
    <h2>Configuración del Hosting</h2>
    <p>Para poder desarrollar el curso, en esta y en el resto de asignaturas,
      debeis comprar un hosting. (un hosting es un servidor donde podremos
      alojoar nuestra web del curso). El siguiente tutorial muestra como
      comprar el hosting usando el proveedor Ionos.
    </p>
  </div>
  <div className="row">
    <div className="twelve columns">
        <Youtube id="Zma-DaHsyug" />
    </div>
    <div className="twelve columns mtop">
     <ul>
       <li>1. Accedemos a <a href="https://www.ionos.es/alojamiento/alojamiento-web"
        target="_blank">Ionos</a></li>
       <li>2. Escojemos el pack Bussines</li>
       <li>3. Nos pide un dominio (nuestro nuevo nombre de dominio)</li>
        <li>4. Pagaremos</li>
     </ul>
    </div>
  </div>

  <div className="row btop">

    <div className="four columns">
    <h2>Verificación del Dominio</h2>
      <p>Verificar la propiedad del dominio</p>
    </div>
    <div className="eight columns">
      <Youtube id="hhymTWZTeXs" height={400} />
    </div>

  </div>
  <div className="row btop">

    <div className="four columns">
    <h2>Activación certificado SSL</h2>
    </div>
    <div className="eight columns">
      <Youtube id="3HnpAOyC1BY" height={400} />
    </div>

  </div>
  <div className="row btop">

    <div className="four columns">
    <h2>Instalación de VSCode</h2>
    </div>
    <div className="eight columns">
      <Youtube id="pNami8O_fIE" height={400} />
    </div>

  </div>
  <div className="row btop">

    <div className="four columns">
    <h2>Configuración VSCode</h2>
    </div>
    <div className="eight columns">
      <Youtube id="83x-kwGlhfA" height={400} />
    </div>

  </div>


    </section>
  </Layout>

)

function Youtube({id, height=600}) {
  return (
    <iframe id="player" type="text/html" width="100%" height={height}
      src={'https://www.youtube.com/embed/' + id + '?cc_load_policy=3&?rel=0'}
      frameborder="0"></iframe>
  )
}


export default Entorno
