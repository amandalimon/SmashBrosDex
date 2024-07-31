import Image from "next/image";
import { Character } from "../../../types";

export const SelectedCharacter = ({ character }: { character: Character }) => (
    <div className="relative w-screen">
        <h1 className="text-4xl font-extrabold p-2 bg-white w-screen">
            Super Smash Bros Fighters
        </h1>
        <div className="flex items-center gap-2 w-full bg-black px-2 z-20 relative">
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
            {character.dlcCharacter === true ? (
                <p className="px-2 ml-2 bg-red-600 text-white text-sm font-bold">DLC</p>
            ) : (null)}
        </div>

        <div className="relative h-96 flex flex-col justify-between z-10">
            <div className="flex items-start justify-between w-full">
                <h1 className="text-[16rem] font-extrabold leading-[12rem] tracking-tighter pt-3 text-black">
                    {character.name}
                </h1>
                <h1 className="font-extrabold text-8xl tracking-tighter p-2">
                    #{character.fighterNumber}
                </h1>
            </div>
            <Image
                src={character.images.fullImage}
                alt={character.name}
                width={600}
                height={600}
                className="absolute top-0 left-1/2 m-auto"
                style={{ width: 'auto', height: 'auto' }}
            />
        </div>

        <div className="bg-slate-100 h-screen absolute inset-x-0 top-0 m-auto skew-y-[-40deg] overflow-hidden z-0"></div>
        <Image
            src={character.series.image}
            alt={character.name}
            width={600}
            height={600}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30"
        />
    </div>

);
