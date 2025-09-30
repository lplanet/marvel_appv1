import React from 'react';

const CharactersList = ({ characters }) => {
    return (
        <>
            {characters.map(character => (
                <p key={character.id}>{character.name}</p>
            ))}
        </>
    );
};

export default CharactersList;