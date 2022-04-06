import wikipedia, { wikiSummary } from 'wikipedia';
import { redactSubjectFromSummary } from '../utils/stringUtils';

export const getRandomArticle = async () => {
    const res: wikiSummary = (await wikipedia.random('summary')) as wikiSummary;

    return {
        data: {
            title: res.titles.normalized,
            summary: redactSubjectFromSummary(res.extract_html),
        },
    };
};
