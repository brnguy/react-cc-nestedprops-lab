// import React, { Component } from 'react'
import Student from './Student'

function App({students}) {
  const mappedStudents = students.map((student, idx) => {
    return (
      <Student 
        key={`Student-${idx}`}
        name={student.name}
        bio={student.bio}
        scores={student.scores}
      />
    )
  })
  return ( 
    <>
    <h1>Student Grades:</h1>
    {mappedStudents}
    </>
  );
}

export default App;

// class App extends Component {
//   render() {
//     const studentComponents = students.map((student, index) => {
//       return (
//         <Student
//           key={`Student-${index}`}
//           name={student.name}
//           bio={student.bio}
//           scores={student.scores}
//         />
//       )
//     })
//     return (
//       <>
//       {studentComponents}
//       </>
//     )
//   }
// }

// export default App;
