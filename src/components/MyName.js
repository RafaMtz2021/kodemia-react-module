import React from 'react';

const capitalizeWord = (word) =>{
    if (!word) {
        return "";
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
};

function MyName({name,lastName = ""}) {
    const _name = capitalizeWord(name);
    const _lastName = capitalizeWord(lastName);

    return (
        // fragmentos
        <>
            <h1>
                Hola {_name} {_lastName}
            </h1>
        </>
    )
}

export default MyName;