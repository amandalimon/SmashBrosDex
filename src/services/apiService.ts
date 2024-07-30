import axios from 'axios';
import { Character } from '../../types';

const API_URL = 'https://super-smash-bros-ultimate-api.onrender.com/api/characters';

export const fetchCharacters = async (): Promise<Character[]> => {
    try {
        const res = await axios.get(API_URL);
        return res.data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
};
