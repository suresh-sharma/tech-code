import React from 'react';
const Nextevolution=({nextevolution})=>{
    const arrType = nextevolution && nextevolution.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })
    return(  arrType ?
        <div>
             <ul>
              <li  className='col col-1'>Name</li>
                <li  className='col col-1'>Number</li>
                </ul>
                {
                    arrType && arrType.map((item) => {
                        return ( <ul>
                              <li  className='col col-1'>{item.name}</li>
                              <li  className='col col-1'>{item.num}</li>
                              </ul>)
                    })
                }
                </div>: null
    )
}
export default {Nextevolution };
export { Nextevolution} ;
