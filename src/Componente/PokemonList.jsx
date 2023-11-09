import {PokemonCard} from "./PokemonCard"
import "./PokemonList.css"

export const PokemonList = ({ pokemons }) =>{

// const obtenerNombresDeHabilidades = (habilidades) => {
//     return (
//       <ul>
//         {habilidades.map((habilidad) => (
//           <li key={habilidad.ability.name}>{habilidad.ability.name}</li>
//         ))}
//       </ul>
//     );
//   };
    return(
<div className="PokemonList">
    {pokemons?.map((pokemon ) => {
        return <PokemonCard name={pokemon.name} id={pokemon.id} imagen={pokemon.sprites.front_default}  types={pokemon.types} abilities={pokemon.abilities} favorite={pokemon.favorite} key={pokemon.name}/>
    })}
</div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(""),
}
