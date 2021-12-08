import React from 'react';

// function Greeting(props) {
//     return (
//         <div>
//             <h1>
//                 Hola {props.name}
//             </h1>
//         </div>
//     )
// }

function Greeting({name = 'Koders'}) {
    return (
        // fragmentos
        <>
            <h1>
                Hola {name}
            </h1>
        </>
    )
}

export default Greeting;