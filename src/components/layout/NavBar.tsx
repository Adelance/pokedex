import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { getPokemons, searchNamePokemons ,searchPokemons } from '../../actions/pokemonActions';

const NavBar = () => {
  const dispatch = useDispatch();

  const text: any = useRef('');

  const onChange = () => {
    if(text.current.value === ""){ 
      getPokemons(0)(dispatch)
    } else if (["normal", "fire", "water", "grass", "flying", "fighting", "poison", "electric", "ground", "rock", "psychic", "ice", "bug", "ghost", "steel", "dragon", "dark", "fairy"].indexOf(text.current.value.toLowerCase()) +1){
      searchPokemons(text.current.value.toLowerCase())(dispatch);
    } else searchNamePokemons(text.current.value.toLowerCase())(dispatch);
  }
  return (
    <nav style={{marginBottom: "30px"}}>
    
      <div className="nav-wrapper">
          <form>
              <div className="input-field">
              <input id="search" type="search" placeholder="Search Pokémon by name of type..." ref={text} onChange={onChange}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              </div>
          </form>
      </div>
    </nav>  
  )
}
export default NavBar
