import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjE1YzE1ZTZlOTdhZTAwNzFiMjFlOGRkNmRjNzc3MyIsInN1YiI6IjY1ODdmYmRmNGRhM2Q0NjNmNTQxZGRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OW3_O6peFcQm-EjGBvaeHFosyBYj6I91YFK-Biucn4';

const headers =  {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch (err){
        console.log(err);
        return err;
    }
}