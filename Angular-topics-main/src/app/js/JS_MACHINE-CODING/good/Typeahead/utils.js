import { FRUITS } from './data.js';

export const getSuggestions = (keyword) => {
    const result = FRUITS.filter((i) => {
       return i.includes(keyword)
    })
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(result);
        })
    }, 1000)
}