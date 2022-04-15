import React, { useEffect, useState } from 'react'
import Logo from '../../resources/Logo.png'
import PokemonItem from './PokemonItem'
import Preloader from '../layout/Preloader'
import { getPokemons} from '../../actions/pokemonActions'
import { useDispatch, useSelector } from 'react-redux';

 
const Pokemons = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1)


  const dispatch = useDispatch();
  useEffect(()=>{
    getPokemons(offset)(dispatch);
  }, [])
  
  const onBack = () => {
    if(offset > 0) {
      getPokemons(offset-20)(dispatch);
      setPage(page-1)
      setOffset(offset - 20);
    }
  }
  const onNext = () => {
    if(offset < 1000){
      setOffset(offset+20);
      setPage(page+1);
      getPokemons(offset+20)(dispatch);
    }
    
  }
  const allPokemons: any = useSelector((state)=> state)
  
  const pokemonList: any[] = allPokemons.pokemon.pokemons

  if(pokemonList.length === 0){
    return <Preloader />
  }

  return (
    <div>
    <ul className='collection with-header'>
        <li className='collection-header'>
            <div className='center'> <img  src={Logo} alt="PokéDex"/> </div>
        </li>
        {
             pokemonList.map((pokemon, index) => <li key={index}>{<PokemonItem pokemon={pokemon}/>}</li>)
        } 
    </ul>
  
      <div className="center">
        <a className="waves-effect waves-light btn" onClick={onBack}>Back</a>
        <span className="waves-effect waves-light"> Page {page}</span>
        <a className="waves-effect waves-light btn" onClick={onNext}>Next</a>
      </div>
      

      
   </div>  
  )
}

export default Pokemons;