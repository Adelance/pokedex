import React from 'react'

const ViewPokemonModal = () => {
   
  
  return (
    <div id='view-pokemon-modal' className='modal collection-header' style={modalStyle}>
        <div className='modal-content'>
            <h3>NAME</h3>
            <h5>Types:</h5>
            <h5>Weight:</h5>
            <h5>Height:</h5>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png" width="300" height="300"/>
        </div>
       
    </div>
  )
}

const modalStyle = {
    width: '75%',
    height: '75%'
  }
export default ViewPokemonModal;