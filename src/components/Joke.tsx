export default function Joke(props: { setup?: string; punchline: string }) {
  let jokeText = ""
  if (props.setup) {
    jokeText += `${props.setup} - ${props.punchline}`
  } else {
    jokeText = props.punchline
  }
  return (
    <>
      <h1>{jokeText}</h1>
    </>
  )
}
