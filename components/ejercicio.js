

export function Ejercicio({title, children}) {
  return (
    <div className="ejercicio">
      <h4>{title}</h4>
      {children}
    </div>
  )
}
