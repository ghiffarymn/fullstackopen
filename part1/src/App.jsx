

const App = () => {

  const Header = [
    <h1>Half Stack application development</h1>
  ]

  const Content = [
    {part: 'Fundamentals of React'},
    {part: 'Using props to pass data'},
    {part: 'State of a component'}
  ]

  const Total = [
    {exercises: 10},
    {exercises: 7},
    {exercises: 14}
  ]

  return (
    <div>
      {Header}
      <p>
        {Content[0].part} {Total[0].exercises}
      </p>
      <p>
       {Content[1].part}  {Total[1].exercises}
      </p>
      <p>
        {Content[2].part}  {Total[2].exercises}
      </p>
      <p>Number of exercises {Total[0].exercises + Total[1].exercises + Total[2].exercises}</p>
    </div>
  )
}

export default App