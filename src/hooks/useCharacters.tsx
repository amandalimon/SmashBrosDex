import { useState, useEffect } from "react";
import { fetchCharacters } from "@/services/apiService";
import { Character } from "../../types";

export const useCharacter = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [selectedCharacter, setSelectedCharacter] = useState<string>("70");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCharacters = async () => {
            const fetchedCharacters = await fetchCharacters();
            setCharacters(fetchedCharacters);
            setLoading(false);
            console.log(fetchCharacters)
        };

        getCharacters();
    }, []);


    useEffect(() => {
        console.log(characters);
    }, [characters]);

    const handleCharacterSelection = (id: string) => {
        setSelectedCharacter(id);
    };

    const selectedCharacterData = characters?.find(character => character.fighterNumber === selectedCharacter);

    return {
        characters,
        selectedCharacter,
        selectedCharacterData,
        handleCharacterSelection,
        loading
    };
};