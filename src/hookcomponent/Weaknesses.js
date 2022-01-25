import React from 'react';

const Weaknesses = ({weaknesses}) => {

    const arrType = weaknesses && weaknesses.sort((a, b) => {
        return a.localeCompare(b);
    })
    
    return (arrType ? arrType.map((item,index) => {
        return <span>{item}{index<arrType.length-1?'/':''}</span>
    }): (null));
    
}
export {Weaknesses};
export default {Weaknesses};
