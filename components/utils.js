


export function Youtube({id, height=600}) {
  return (
    <iframe id="player" type="text/html" width="100%" height={height}
      src={'https://www.youtube.com/embed/' + id + '?cc_load_policy=3&?rel=0'}
      frameborder="0"></iframe>
  )
}
