import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Type} from './Type'
import {Weaknesses} from './Weaknesses'
import {Nextevolution} from  './Nextevolution'
const Pokman=()=>{
   const [pockman, pokmanSetList] = useState(null);

   useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json").then(response=>{
    const pockmandata=response.data.pokemon;
    const arrpockman=pockmandata.sort((a,b)=>{return a.name.localeCompare(b.name);})
    pokmanSetList(arrpockman);
    })
   },[]);

   return (pockman && <div className="container">
            <h1>List of Pockman</h1>
            <ul className='responsive-table'>
                <li className='col col-1'>Name</li>
                <li  className='col col-1'>Number</li>
                <li  className='col col-1'>Type</li>
                <li  className='col col-1'>Height</li>
                <li  className='col col-1'>Weight</li>
                <li  className='col col-1'>Weaknesses</li>
                <li  className='col col-1'>Next Evolution</li>
                </ul>
                {
                   pockman && pockman.map(item=>{

                        return (
                            <ul>
                              <li  className='col col-1'>{item.name}</li>
                                <li  className='col col-1'>{item.num}</li>
                                <li  className='col col-1'><Type type={item.type}></Type></li>
                                <li  className='col col-1'>{item.height}</li>
                                <li  className='col col-1'>{item.weight}</li>
                                <li  className='col col-1'><Weaknesses weaknesses={item.Weaknesses} ></Weaknesses></li>
                                <li  className='col col-1'><Nextevolution nextevolution={item.next_evolution} ></Nextevolution></li>
                        </ul>
                        )
                    })
                }
            
        </div>);
}

export default Pokman;