import React from 'react';

const Weaknesses = ({weaknesses}) => {

    const arrType = weaknesses && weaknesses.sort((a, b) => {
        return a.localeCompare(b);
    })
    
    return (arrType ? arrType.map((item) => {
        return <span>{item}</span>
    }): (null));
    
}
export {Weaknesses};
export default {Weaknesses};
