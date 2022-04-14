import React from 'react'
import Logo from '../../resources/Logo.png'
import PokemonItem from './PokemonItem'

const Pokemons = () => {
  return (
    <ul className='collection with-header'>
        <li className='collection-header'>
            <div className='center'> <img  src={Logo} alt="pokedex"/> </div>
        </li>
        <li>
           <PokemonItem />
           <PokemonItem />
           <PokemonItem />
           <PokemonItem />
           <PokemonItem />
        </li>
    </ul>
  )
}

export default Pokemons