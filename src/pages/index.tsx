import { useState } from "react";
import { GetServerSideProps } from "next";
import { fetchCharacters } from "@/services/apiService";
import { CharacterList } from "@/components/CharacterList";
import { SelectedCharacter } from "@/components/SelectedCharacter";
import { Character } from "../../types";

interface HomeProps {
  characters: Character[];
}

const Home = ({ characters }: HomeProps) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("70");

  const handleCharacterSelection = (id: string) => {
    setSelectedCharacter(id);
  };

  const selectedCharacterData = characters?.find(character => character.fighterNumber === selectedCharacter);

  return (
    <div className="h-screen overflow-hidden">

      <h1 className="text-4xl font-extrabold p-2">
        Super Smash Bros Fighters
      </h1>

      <div className="flex flex-col justify-between">
        {selectedCharacterData && (
          <SelectedCharacter character={selectedCharacterData} />
        )}
        <CharacterList
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelection}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const characters = await fetchCharacters();
  return {
    props: { characters },
  };
};

export default Home;
