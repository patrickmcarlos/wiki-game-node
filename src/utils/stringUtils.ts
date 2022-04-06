import { stripHtml } from 'string-strip-html';

export const redactSubjectFromSummary = (str: string) => {
    // Remove first and last 3 characters
    const processedStr = str.slice(3, str.length - 4);
    const subjectIdx: [number, number][] = [];
    const resArr = [];

    let p1Left = 0;
    let p1Right = p1Left + 3;

    while (p1Right < str.length) {
        const extract = processedStr.slice(p1Left, p1Right);

        if (extract === '<b>') {
            let p2Left = p1Right;
            let p2Right = p2Left + 4;

            while (p2Right < str.length) {
                const closingTag = processedStr.slice(p2Left, p2Right);

                if (closingTag === '</b>') {
                    break;
                } else {
                    p2Left++;
                    p2Right++;
                }
            }

            subjectIdx.push([p1Right, p2Left]);
            p1Left = p2Right;
            p1Right = p1Left + 3;
        }

        p1Left++;
        p1Right++;
    }

    let pointer = 0;

    for (const [start, end] of subjectIdx) {
        resArr.push(processedStr.slice(pointer, start));
        resArr.push(replaceSubjectStr(processedStr.slice(start, end)));
        pointer = end;
    }

    resArr.push(processedStr.slice(pointer, processedStr.length));

    const joinedStr = resArr.join('');
    const res = stripHtml(joinedStr).result;

    return res;
};

const replaceSubjectStr = (str: string) => {
    return str.replace(/[A-Za-z0-9]/g, '*');
};
