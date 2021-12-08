import React from 'react';

const operations = (first,second,operator) =>{
    
    if(Number.isInteger(first) && Number.isInteger(second)){
            switch (operator) {
                case '+':
                    return first + second;
                    break;
                case '*':
                    return first * second;
                    break;
                case '-':
                    return first - second;
                    break;
                default:
                    return 'Operator not implemented';
                    break;
            }
    }else{
        return 'Los valores de entrada no son validos'
    }
};

function Calculator({first,second,operator}) {
    const result = operations(first,second,operator)

    return (
        <>
            <h1>
                Resultado: {result}
            </h1>
        </>
    )
}

export default Calculator;