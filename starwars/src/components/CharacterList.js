import React from 'react';
import Characters from "./Characters";

function CharacterList(props) {
    return(
        <div>
            {props.starwarsChars.map(characters => {
                return <Characters 
                characters= {characters}
                key= {characters.id}/>;
            })}
        </div>
    );
}

export default CharacterList; 