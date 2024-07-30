import Image from "next/image";
import { Character } from "../../../types";

interface CharacterListProps {
    characters: Character[]
    selectedCharacter: string
    onCharacterSelect: (id: string) => void
}

export const CharacterList = ({ characters, selectedCharacter, onCharacterSelect }: CharacterListProps) => {
    const selectedCharacterIndex = characters.findIndex(character => character.fighterNumber === selectedCharacter);
    const previousCharacter = characters[selectedCharacterIndex > 0 ? selectedCharacterIndex - 1 : characters.length - 1];
    const nextCharacter = characters[selectedCharacterIndex < characters.length - 1 ? selectedCharacterIndex + 1 : 0];
    
    return (
        <div className="flex flex-col gap-1">

            {characters.length > 0 && (
                <div className="w-full flex justify-between  z-20">
                    <button
                        onClick={() => onCharacterSelect(previousCharacter.fighterNumber)}
                        className="flex justify-between items-center font-bold bg-black text-white py-1 px-2 w-48 uppercase"
                    >
                        <p>{previousCharacter.name}</p>
                        <p>{previousCharacter.fighterNumber}</p>
                    </button>
                    <button
                        onClick={() => onCharacterSelect(nextCharacter.fighterNumber)}
                        className="flex justify-between items-center font-bold bg-black text-white py-1 px-2 w-48 uppercase"
                    >
                        <p>{nextCharacter.name}</p>
                        <p>{nextCharacter.fighterNumber} </p>
                    </button>
                </div>
            )}

            <ul className="flex overflow-x-auto space-x-1 sticky bottom-0">
                {characters.length > 0 ? (
                    characters.map(character => (
                        <li
                            key={character.fighterNumber}
                            className="flex-shrink-0 h-32 w-24 relative overflow-hidden"
                            onClick={() => onCharacterSelect(character.fighterNumber)}
                        >
                            <div className="absolute z-10 inset-0 transition-transform duration-300 transform hover:scale-y-125 hover:scale-x-125">
                                <Image
                                    src={character.images.fullImage}
                                    alt={character.name}
                                    layout="fill"
                                    sizes="(max-width: 768px) 100vw, 200px"
                                    className="object-cover bg-black"
                                />
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No characters found</p>
                )}
            </ul>
        </div>
    )

};
