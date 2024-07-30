import type { NextApiRequest, NextApiResponse } from "next";
import ICharacter from "./interface";

const characters: ICharacter[] = require('./characters.json');

const charactersHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const characterNames = characters.map(character => character.name);
    return res.status(200).json(characterNames);
};

export default charactersHandler;
