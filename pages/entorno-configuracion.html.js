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
  </div>
  <div className="row">
    <div className="six columns">
      video
    </div>
    <div className="six columns">
      <ReactMarkdown>{`
1. Accedemos a [Ionos](https://www.ionos.es/alojamiento/alojamiento-web)
2. Escojemos el pack Essencial
3. Nos pide un dominio (ponemos nuestro nombre de dominio)
`}</ReactMarkdown>
    </div>
  </div>
  <div className="row">
    <h2>Configuración de VSCode</h2>

  </div>


    </section>
  </Layout>

)

export default Entorno
