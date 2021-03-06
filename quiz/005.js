const questions = [
  {
    q: `una ruta en formato /carpeta/archivo.html`,
    a: [
      "es relativa",
      "es orgánica",
      "está camuflada",
      "es absoluta"
    ],
    c: 3
  },
  {
    q: "una ruta en formato carpeta/archivo.html",
    a: [
      "es relativa",
      "es orgánica",
      "está camuflada",
      "es absoluta"
    ],
    c: 0
  },
  {
    q: "Si usamos ../archivo.html estamos enlazando a:",
    a: [
      "su primo",
      "un hijo de su de su tía",
      "un archivo al mismo nivel que su padre",
      "una canción"
    ],
    c:2
  },
  {
    q: "Si usamos archvio.html en un enlace estamos enlazando",
    a: [
      "a una página en el padre",
      "a una página en su misma carpeta",
      "a su gatito",
      "a su hijo"
    ],
    c: 1
  },
  {
    q: "si enlazamos a un archivo en a/b/c.html",
    a: [
      "a un bisnieto llamado c.html",
      "a un hijo c",
      "a el padre",
      "a la tia"
    ],
    c: 0
  },
  {
    q: "La '/' designa:",
    a: [
      "El servidor",
      "el ftp",
      "El directorio root o raíz",
      "nada"
    ],
    c: 2
  },
  {
    q: "En un documento en /a/b/c.html si referenciamos '../../uno.jpg'",
    a: [
      "un archivo en su padre",
      "el archivo uno.jpg en la raiz",
      "un archivo en /a/uno.jpg",
      "uno.jpg"
    ],
    c: 1
  },
  {
    q: "Dado, /a/b/c/index.html, '/uno.jpg' referencia:",
    a: [
      "un archivo en su padre",
      "el archivo uno.jpg en la raiz",
      "un archivo en /a/uno.jpg",
      "uno.jpg"
    ],
    c: 1
  },
  {
    q: "Dado, /a/b/c/index.html, '../uno.jpg' referencia:",
    a: [
      "/uno.jpg",
      "/a/uno.jpg",
      "/a/b/dos.jpg",
      "/a/b/uno.jpg"
    ],
    c: 3
  },
  {
    q: "Dado, /a/b/c/index.html, '../../uno.jpg' referencia:",
    a: [
      "/uno.jpg",
      "/a/uno.jpg",
      "/a/b/dos.jpg",
      "/a/b/uno.jpg"
    ],
    c: 1
  }

]


export default questions;
