
import {useState} from "react";
import {useEffect} from "react"
import {getRandomColor} from "../lib/utils"

import css from "./randomize.module.css"


function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



let list = ([...Array(12)]).map((it, index) => it=index+1)


export function RandomizeRows() {
  const [randomize, setRandomize] = useState(undefined)

  useEffect(() => {
    list = shuffle(list)
  }, [randomize])

  return (
    <>
    <div className="row" style={{marginTop: '25px'}}>
      {list.map((item) =>
        <div className={"one columns " + css.box }key={item}
          style={{backgroundColor: getRandomColor()}}>{item}</div>
      )}
    </div>
    <div className="row" style={{ marginTop: '20px' }}>
        <button className="button-primary"
          onClick={()=>setRandomize(Math.random())}>RANDOMIZE</button>
    </div>
    </>
  )
}
