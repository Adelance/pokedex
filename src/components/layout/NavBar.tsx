import React from 'react'

const NavBar = () => {
  return (
    <nav style={{marginBottom: "30px"}}>
    
      <div className="nav-wrapper">
          <form>
              <div className="input-field">
              <input id="search" type="search" placeholder="Search Pokémon..."/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              </div>
          </form>
      </div>
    </nav>  
  )
}
export default NavBar
