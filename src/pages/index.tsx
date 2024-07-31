import { GetServerSideProps } from "next";
import { useCharacter } from "@/hooks/useCharacters";
import { fetchCharacters } from "@/services/apiService";
import { CharacterList } from "@/components/CharacterList";
import { SelectedCharacter } from "@/components/SelectedCharacter";
import { Character } from "../../types";

interface HomeProps {
  characters: Character[];
}

const Home = ({ characters }: HomeProps) => {
  const { selectedCharacter, selectedCharacterData, handleCharacterSelection } = useCharacter(characters);

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
  try {
    const characters = await fetchCharacters();
    return {
      props: { characters },
    };
  } catch (error) {
    console.error("Failed to fetch characters", error);
    return {
      props: { characters: [] },
    };
  }
};

export default Home;
