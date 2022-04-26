import { useSelector } from 'react-redux'

const ViewPokemonModal = () => {
 
 
  const allPokemons: any = useSelector((state)=> state)
  const params = allPokemons.pokemon.current

  return (
    <div id='view-pokemon-modal' className='modal collection-header' style={modalStyle}>
        <div className='modal-content'>
            <h3>{params.name}</h3>
            <h5>Weight: {params.weight} kg</h5>
            <h5>Height: {params.height}'</h5>
        </div>
       
    </div>
  )
}

const modalStyle = {
    width: '75%',
    height: '75%',

}

export default ViewPokemonModal;