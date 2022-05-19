import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonsFavorites() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response ? JSON.parse(response) : [];
    } catch (error) {
        throw error
    }
}

export async function addPokemonFavorite(id) {
    try {
        const favorites = await getPokemonsFavorites()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

export async function isPokemonFavorite(id) {
    try {
        const response = await getPokemonsFavorites()
        return includes(response, id)
    } catch (error) {
        throw error
    }
        
}

export async function removePokemonFavorite(id) {
    try {
        const favorites = await getPokemonsFavorites()
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error
    }
}