import React from 'react';
import employees from '../../employees.json';
import FightCard from '../FightCard';

const Search = (props) =>  {
    return (
       <div>
           <input className='userInput' onChange={(e)=>{ 
            props.setFilter(e.target.value);

        }}></input>
        <button onClick={() => props.byName(props.filter)}>Search By Name</button>
       </div> 
    )
}



export default Search;