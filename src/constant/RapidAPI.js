import axios from 'axios'

const Base_URL = 'https://hotels4.p.rapidapi.com'

const options = {
    headers: {
      'X-RapidAPI-Key': 'cdc82904bemshc31ed5f4d7b6fcep1f5b09jsn2a01e08080f5',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
};


export const RapidAPI = async (url) => {
    const { data } = await axios.get(`${Base_URL}/${url}`, options)

    return data;
}
