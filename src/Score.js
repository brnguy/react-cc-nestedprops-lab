function Score({content}) {
    return ( 
        <>
            <p>Date:{content.date}</p>
            <p>Score: {content.score}</p>
        </>
     );
}

export default Score;

{/* // import React, { Component } from 'react';

// class Score extends Component { */}
{/* //     render() {  */}
{/* //         return (
//             <>
//                 <p>Date: {this.props.date}</p>
//                 <p>Score: {this.props.score}</p>
//             </>
//         );
//     }
// }
 
// export default Score; */}