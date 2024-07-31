import { useState } from "react";
import { Character } from "../../types";

export const useCharacter = (characters: Character[]) => {
    const [selectedCharacter, setSelectedCharacter] = useState<string>("70");

    const handleCharacterSelection = (id: string) => {
        setSelectedCharacter(id);
    };

    const selectedCharacterData = characters.find(character => character.fighterNumber === selectedCharacter);

    return {
        selectedCharacter,
        selectedCharacterData,
        handleCharacterSelection
    };
};