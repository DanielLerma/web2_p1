import axios from 'axios';
// import dotenv from 'dotenv';
const apiKey = '4588f608573d4e5bb82c6162fb16543c';

export class Noticias {
    getTopNews(country: string): Promise<any> {
        country.toLowerCase();
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
        return axios.get(url);
    }
    getNewsQuery(q: string): Promise<any> {
        let url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`;
        return axios.get(url);
    }
}
