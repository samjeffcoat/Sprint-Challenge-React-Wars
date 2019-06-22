import React from 'react';
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
    return(
        <div>
            {props.characters.map(characters => (<CharacterCard characters={characters} />))}
        </div>
    );
}

export default CharacterList; 

/*
 {props.characters.map(characters => (<CharacterCard characters={characters}/>))}
 */