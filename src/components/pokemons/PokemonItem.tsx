import React from 'react'

const PokemonItem = () => {
  return (
    <div className='collection-item row'>
      <a href='#view-pokemon-modal' className="modal-trigger">
        <div className="column sprite">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png" width="150" height="150" alt='PokeDex'/>
        </div>
        <span className='column left'>
          <span className='header-NameTypes'>Name: </span>
          <span className='NameTypes'>Pikachu</span> 
        </span>
        <span className='column middle'>
          <div className='column-text'>
          <span className='header-NameTypes'>Types: </span>
          <span className='NameTypes'>Electric</span>
          <span className='NameTypes'>Electric</span> 
          <span className='NameTypes'>Electric</span> 
          </div>
        </span>

      
        <div className="column right">
            
        </div>
      </a>
    </div>
 
  )
}

export default PokemonItem;