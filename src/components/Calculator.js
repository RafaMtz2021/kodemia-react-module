import React from 'react';

const operations = (first,second,operator) =>{
    
    if(!(Number.isInteger(first) || Number.isInteger(second))){
        return(
            <div>
                <spa>Los valores de entrada no son validos</spa>
            </div>
        )
    }else{
        switch (operator) {
            case '+':
                return first+second;
                break;
            case '*':
                return first*second;
                break;
            case '-':
                return first-second;
                break;
            default:
                console.error('Operator not implemented');
                break;
        }
    }
};

function Calculator({first,second,operator}) {
    const result = operations(first,second,operator)

    return (
        // fragmentos
        <>
            <h1>
                Resultado {first} {operator} {second} = {result}
            </h1>
        </>
    )
}

export default Calculator;