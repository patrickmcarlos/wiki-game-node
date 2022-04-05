import axios from 'axios';

const WIKI_API_URL = 'https://en.wikipedia.org/w/api.php';

export const getRandomArticles = async (numArticles?: number) => {
    const params = new URLSearchParams([
        ['action', 'query'],
        ['format', 'json'],
        ['list', 'random'],
        ['rnlimit', String(numArticles ?? 1)],
    ]);

    const res = await axios.get(WIKI_API_URL, { params });

    return res.data;
};
