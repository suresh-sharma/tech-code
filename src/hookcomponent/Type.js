import React from 'react';

const Type = ({type}) => {

    const arrType = type && type.sort((a, b) => {
        return a.localeCompare(b);
    })
    return (arrType && arrType.map((item,index) => {
        return <span>{item}{index<arrType.length-1?'/':''}</span>
    }))
}
export { Type};
export default {Type};