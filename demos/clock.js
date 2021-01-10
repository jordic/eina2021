import { useEffect } from "react";
import { useState } from "react";
import {getRandomColor} from "../lib/utils"


function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let initcolor = getRandomColor()

export function Clock() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState(getRandomColor())

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1);
    return () => clearInterval(interval);
  });

  return (
    <div className="row" style={{ marginTop: "20px" }}
      onClick={() => setColor(getRandomColor())}>
      <div className="six columns">
        <h5 style={{color:'#00bcd4'}}>Un Reloj</h5>
        <p className="mtop">
          Javascript se encarga de ir refrescando la hora
          actual en el reloj
        </p>
      </div>
      <div className="six columns">
        <h2 style={{ fontSize: "48px", color }}>
          {pad(time.getHours(), 2)}:{pad(time.getMinutes(), 2)}:
          {pad(time.getSeconds(), 2)}
        </h2>
        <p>click para cambiar el color</p>
      </div>
    </div>
  );
}
