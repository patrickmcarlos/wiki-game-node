import wikipedia, { wikiSummary } from 'wikipedia';

export const getRandomArticle = async () => {
    const res: wikiSummary = (await wikipedia.random('summary')) as wikiSummary;

    return {
        data: { title: res.titles.normalized, summary: res.extract_html },
    };
};
