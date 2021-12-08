import React from 'react';

let isValidNumber = true;
let result = '';

const numValidator = (numbers) =>{
    for (let index = 0; index < numbers.length; index++) {
        if (!Number.isInteger(numbers[index])) {
            isValidNumber = false;
            break;
        }
    }
}

const sum = numbers => numbers.reduce((num,acum)=> num + acum,0)

const operations = (first,second,operator) =>{
    switch (operator) {
        case '*':
            return first * second;
            break;
        case '-':
            return first - second;
            break;
        case '%':
            return first % second;
            break;
        case '/':
            return first / second;
            break;
        default:
            return 'Operator not implemented';
            break;
    }
};

function Calculator({numbers,operator}) {

    numValidator(numbers);

    if(isValidNumber){
        if(operator === '+'){
            result = sum(numbers);
        }else{
            result = operations(numbers[0],numbers[1],operator);
        }
    }else{
        return 'Invalid data entries';
    }

    return (
        <>
            <h1>
                Resultado: {result}
            </h1>
        </>
    )
}

export default Calculator;