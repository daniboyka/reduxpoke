import {PokemonCard} from "./PokemonCard"
import "./PokemonList.css"

export const PokemonList = ({ pokemons }) =>{
    return(
<div className="PokemonList">
    {pokemons?.map((pokemon ) => {
        return <PokemonCard name={pokemon.name} imagen={pokemon.sprites.front_default}  key={pokemon.name}/>
    })}
</div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(""),
}