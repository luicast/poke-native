import {API_URL} from '../utils/constants'

export async function getPokemon (endpointUrl) {
  try {
    const url = `${API_URL}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrl (url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }       
}

export async function getPokemonDetailsById (id) {
    try {
        const url = `${API_URL}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }       
}