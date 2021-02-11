import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { Layout } from "../components/layout";
import ReactMarkdown from "react-markdown";
import { RandomizeRows } from "../demos/randomize";
import { Clock } from "../demos/clock";
import menu from "../components/menu"

const Home = () => (
  <Layout>
    <section className="home-header">
      <img src="/static/hello.svg" width="100" />
      <h2>Introducción a la programación</h2>
      <p>
        Conceptos fundamentales de programación orientada a web con javascript
      </p>
      <img src="/static/computer.svg" alt="Computer image" width="150" />
    </section>

    <section className="container content" style={{ marginTop: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#00bcd4", fontSize: "4rem" }}>
        ¿javascript?
      </h1>
      <p style={{ textAlign: "center", fontSize: "2rem" }}>
        A parte de <strong>CSS</strong> y <strong>HTML</strong>,{" "}
        <strong>javascript</strong> nos permite dotar a los sitios web de
        interactividad. Con él podemos{" "}
        <strong>enriquecer la experiencia de usuario</strong>. Durante el
        desarrollo de la materia, aprenderemos los conceptos básicos para{" "}
        <strong>
          ser capaces de trabajar, codo a codo, con un programador de frontend
        </strong>
        , pero también aprenderemos las{" "}
        <strong>nociones básicas para crear y configurar scripts</strong> que
        nos ayuden a enriquecer nuestros proyectos. Finalmente, y en modo
        transversal, la materia nos ayudará a{" "}
        <strong>crecer como diseñadores UX/UI</strong>, ya que nos dotará de las
        herramientas básicas para poder trabajar en el entorno web.
      </p>
    </section>

    <section className="container content">
      <div className="row btop">
        <h5>Algunas interacciones</h5>
      </div>
      <RandomizeRows />
      <p className="mtop">
        Mediante javascript cada vez que hacemos click en el boton{" "}
        <span className="label">Randomize</span> reordenamos la lista de cajas,
        y les asignamos un color nuevo
      </p>
      <Clock />
    </section>

    <section className="container content">
      <div className="row btop">
        <div className="five columns">
          <h1>Método de Trabajo</h1>
        </div>
        <div className="seven columns">
          <br/>
          <ul>
            <li>
              Cada sesión contendrá una ficha de trabajo con videos y ejemplos
            </li>
            <li>Durante la sesión se realizarán algunos ejercicios interactivamente</li>
            <li>Al final de la sesión se propondrá un ejercicio final evaluable</li>
          </ul>
          <p className="explain">Todas las prácticas y ejercicios se realizarán directamente en el hosting contratado al principio de las sesiones, y que se utilizará en el resto de asignaturas/materias</p>
        </div>
      </div>
    </section>

    <section className="container content">
      <div className="row btop">
        <h1>Sesiones</h1>
      </div>
      {menu.map((item, index) =>
        <Session
          title={item.title}
          link={item.link}
          num={(index+1)}
        >
          {item.content}
        </Session>
      )}

    </section>
    <section className="container content">
      <div className="row btop">
        <h1>Evaluación</h1>
      </div>
      <div className="row">
        <div className="five columns">
          <ul>
            <li>
              Cada sesión incluirá un ejercicio evaluable que se entregará al
              finalizar la sesión
            </li>
            <li>
              La maquetación e integración del proyecto final, vuestro portfolio
            </li>
          </ul>
        </div>
        <div className="seven columns">
          <img src="/static/eval.svg" width="100%;" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;

export function Session({ num, title, link, children }) {
  return (
    <div className="row">
      <div className="five columns">
        <h4>
          {num}. <Link href={link}>{title}</Link>
        </h4>
      </div>
      <div className="seven columns">{children}</div>
    </div>
  );
}

export function Key({ l }) {
  return <span className="label">{l}</span>;
}
