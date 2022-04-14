import React from 'react'

const PokemonItem = () => {
  return (
    <div className='collection-item row'>
        <div className="column left">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" width="150" height="150"/>
        </div>
        <div>
            TESTING
        </div>
        <div>
            <div>
                SECOND
            </div>
        </div>
        <br/>
        <span className='grey-text'>
             <span className='black-text'>ID </span>
             <span className='black-text'> </span> 
        </span>
       
    </div>
 
  )
}

export default PokemonItem;