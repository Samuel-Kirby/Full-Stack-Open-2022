const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

      <Header course={course}/>

      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>

      <Total addend1={exercises1} addend2={exercises2} addend3={exercises3}/>

    </div>
  )
}

const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )

}

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  var sum = props.addend1 + props.addend2 + props.addend3;
  return (
    <p>Number of exercises {sum}</p>
  )
}

export default App