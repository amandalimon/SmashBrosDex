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
    <>
      <div className="h-screen flex flex-col justify-between overflow-hidden">
        {selectedCharacterData && (
          <SelectedCharacter character={selectedCharacterData} />
        )}

        <CharacterList
          characters={characters}
          selectedCharacter={selectedCharacter}
          onCharacterSelect={handleCharacterSelection}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const characters = await fetchCharacters();
  return {
    props: { characters },
  };
};

export default Home;
