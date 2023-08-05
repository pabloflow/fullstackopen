
import Course from "./Course"

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
    {
      name: 'MAnortingala',
      id: 3,
      parts: [
        {
          name: 'padel',
          exercises: 5,
          id: 1,
        },
        {
          name: 'tenis',
          exercises: 4,
          id: 2,
        },
      ],
    },
  ]
  const total = () => {
    let tot = 0
   course.parts.forEach(part=> {
    tot = tot + part.exercises
      
    });
    return tot
  }

  const totalreduces = (props) => course[props].parts.reduce((s, p) => s + p.exercises, 0)

  return <div>
    <ul>
      {course.map(courses => (
        <li key={courses.id}> <Course course={courses}></Course> 
        <ul>
        {courses.parts.map(parts => (
          <li key={parts.id}> {parts.name} {parts.exercises}</li>
        ))}
        </ul>
        <strong>La suma de ejercicios es: {totalreduces(courses.id - 1)}</strong>
        </li>
        
      ))}
    </ul>
    
    </div>
    
    {/* <Course course={course} />
      <ul>
        {course.parts.map(parts => (
          <li key={parts.id}> {parts.name} {parts.exercises} </li>
        ))}
      </ul>
      <strong>la suma de exercises es: {totalreduces}</strong>
       */}
}

export default App