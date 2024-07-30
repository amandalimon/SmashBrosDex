import type { NextApiRequest, NextApiResponse } from "next";
import ICharacter from './interface';

const characters: ICharacter[] = require('./characters.json');

const character = (req: NextApiRequest, res: NextApiResponse) => {
    const { name } = req.query;

    if (name) {
        const matchingCharacter: ICharacter | undefined = characters.find(
            (character) => character.name.toLowerCase() === (name as string).toLowerCase()
        );

        if (matchingCharacter) {
            return res.status(200).json(matchingCharacter);
        }

        return res.status(404).json({ message: "Character not found" });
    }

    const characterNames = characters.map(character => character.name);
    return res.status(200).json(characterNames);
};

export default character;
