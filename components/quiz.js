import {useState} from "react"


export function Quiz({questions, title="Ejercicio"}) {
  const [current, setCurrent] = useState(0)
  const [errors, setErrors] = useState([])
  const [answ, setAns] = useState([])
  const [ok, setOk] = useState(false)

  let curr = questions[current]

  const checkAnswer = (idx) => {
    if (answ.includes(idx)) return
    setAns(state => [...state, idx])
    if (curr.c == idx) {
      setOk(true)
    } else {
      setErrors((state) => [...state, idx])
    }
  }

  return (
    <div className="container mtop">
    <div className="row quiz">
      <h3>{title} {current+1}/{questions.length}</h3>
      <p>{curr.q}</p>
      <ul>
        {curr.a.map((item, idx) => {
          let class_ = ""
          if(errors.includes(idx)) class_ = "error";
          else if (idx == curr.c && answ.includes(idx)) class_ = "ok"
          return (<li
            onClick={(e) => checkAnswer(idx)}
            className={class_}

            >
            <input type="radio" readOnly defaultChecked={answ.includes(idx)} />
            {item}
          </li>)
      } )}
      </ul>
      {ok && current < questions.length -1 &&
        <button className="button-primary"
          onClick={() => {
            setCurrent(state => state + 1)
            setErrors([])
            setOk(false)
            setAns([])
          }}>Siguiente</button>
      }
      {ok && current == (questions.length -1 ) &&
        <p>Felicidades, test completado!</p>
      }

    </div>
    </div>
  )

}

