import Image from "next/image";
import { Character } from "../../../types";

export const SelectedCharacter = ({ character }: { character: Character }) => (
    <div className="">
        <div className="flex items-center gap-2 w-full bg-black px-2">
            <Image
                src={character.series.image}
                alt={character.name}
                width={50}
                height={50}
                className=""
            />
            <h1 className="text-4xl font-extrabold text-white">
                {character.name}
            </h1>
        </div>

        <div className="relative h-96 flex flex-col justify-between">
            <div className="flex items-start justify-between w-full">
                <h1 className="text-[15rem] font-extrabold leading-[11rem] tracking-tighter pt-3 text-black z-50">
                    {character.name}
                </h1>

                <h1 className="font-extrabold text-8xl tracking-tighter p-2">
                    #{character.fighterNumber}
                </h1>
            </div>

            <Image
                src={character.series.image}
                alt={character.name}
                width={500}
                height={500}
                className="absolute inset-0 m-auto opacity-50 z-0"
            />

            <Image
                src={character.images.fullImage}
                alt={character.name}
                width={600}
                height={600}
                className="absolute top-0 left-1/2 m-auto"
            />
        </div>
    </div>
);
