import Link from "next/link";
import { useState } from "react";
import menu from "./menu"

export function Layout({ children, isHeader = false }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={"layout "}>
      {isHeader && (
        <>
          <header>
            <div className="container">
              <div>
                <Link href="/">
                  <img
                    src="/static/hello.svg"
                    width="130"
                    style={{ marginTop: "5px" }}
                  />
                </Link>
              </div>
              <div style={{ textAlign: "right", cursor:"pointer" }}
                onClick={() => setOpened(state => !state)}>
                <img src="/static/menu.svg" width="30" />
              </div>
            </div>
          </header>
        </>
      )}
      {opened && <div className="menu">
        <h3>Sesiones</h3>
        <ul class="container">
          {menu.map((item, index) =>
            <li key={index}><Link href={item.link}>{item.title}</Link></li>
          )}
        </ul>
      </div>}
      <main className={"wrapper " + (isHeader ? "header" : "")}>
        {children}
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2021. Jordi Collell</p>
          <p>
            <a href="https://www.twitter.com/galigan">@galigan</a>
          </p>
          <p>
            <a href="https://github.com/jordic">github.com/jordic</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
