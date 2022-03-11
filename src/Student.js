// import React, { Component } from 'react'
import Score from './Score'


function Student({ name, bio, scores }) {
    const scoreComponents = scores.map((score, index) => {
        return(
            <Score
                key={`Score-${index}`}
                content={score}
            />
        )
    })
    return(
        <>
            <h1>Name:{name}</h1>
            <p>Bio:{bio}</p>
            {scoreComponents}
        </>
    )
}

export default Student;

// class Student extends Component {
//     render() { 
//         const scoreComponents = this.props.scores.map((score, index) => {
//             return(
//                 <Score
//                     key={`Score-${index}`}
//                     date={score.date}
//                     score={score.score}
//                 />
//             )
//         })
//         return (
//             <>
//             <h1>Name:{this.props.name}</h1>
//             <p>Bio:{this.props.bio}</p>
//             {scoreComponents}
//             </>
//         );
//     }
// }
 
// export default Student;
