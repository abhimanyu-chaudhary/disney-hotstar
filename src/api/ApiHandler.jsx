import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "4decfcedbe40f2c112bcd7a4f82e1fee"

const getTrendingMovies = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

export default { 
    getTrendingMovies
}