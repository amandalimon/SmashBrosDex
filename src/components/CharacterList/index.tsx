import Image from "next/image";
import { Character } from "../../../types";

interface CharacterListProps {
    characters: Character[];
    selectedCharacter: string;
    onCharacterSelect: (id: string) => void;
}

export const CharacterList = ({
    characters,
    selectedCharacter,
    onCharacterSelect,
}: CharacterListProps) => {
    const selectedCharacterIndex = characters.findIndex(
        (character) => character.fighterNumber === selectedCharacter
    );
    const previousCharacter =
        characters[
        selectedCharacterIndex > 0 ? selectedCharacterIndex - 1 : characters.length - 1
        ];
    const nextCharacter =
        characters[
        selectedCharacterIndex < characters.length - 1 ? selectedCharacterIndex + 1 : 0
        ];

    return (
        <div className="sticky bottom-0 z-30">
            <div className="flex flex-col gap-1">
                {characters.length > 0 && (
                    <div className="w-full flex justify-between">
                        <button
                            onClick={() => onCharacterSelect(previousCharacter.fighterNumber)}
                            className="relative inline-flex items-center justify-start py-3 pr-4 pl-10 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out hover:pr-10 hover:pl-4 bg-black group w-60 uppercase"
                        >
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-neutral-800 group-hover:h-full"></span>
                            <span className="absolute left-0 pl-2.5 transition-all duration-150 ease-in-out group-hover:opacity-0 group-hover:-translate-x-12">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white flex justify-between"><p>{previousCharacter.name}</p><p>{previousCharacter.fighterNumber}</p></span>
                            <span className="absolute right-0 pr-2.5 transition-all duration-150 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            </span>
                        </button>

                        <button
                            onClick={() => onCharacterSelect(nextCharacter.fighterNumber)}
                            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-black group w-60 uppercase"
                        >
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-neutral-800 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white flex justify-between"><p>{nextCharacter.name}</p>
                                <p>{nextCharacter.fighterNumber}</p></span>
                        </button>
                    </div>
                )}

                <ul className="flex overflow-x-auto space-x-1 sticky bottom-0">
                    {characters.length > 0 ? (
                        characters.map((character) => (
                            <li
                                key={character.fighterNumber}
                                className={`flex-shrink-0 h-44 w-24 relative overflow-hidden ${character.fighterNumber === selectedCharacter
                                    ? "border-2 border-neutral-500"
                                    : ""
                                    }`}
                                onClick={() => onCharacterSelect(character.fighterNumber)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Select character: ${character.name}`}
                            >
                                <div className="absolute z-10 inset-0 transition-transform duration-300 transform hover:scale-125">
                                    <Image
                                        src={character.images.fullImage}
                                        alt={character.name}
                                        fill={true} 
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
        </div>
    );
};
