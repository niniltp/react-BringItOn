export function firstLetterUpperCase(text) {
    if(text && text.length > 0) return text[0].toUpperCase() + text.slice(1);
    else return text;
}

export function firstLetterLowerCase(text) {
    if(text && text.length > 0) return text[0].toLowerCase() + text.slice(1);
    else return text;
}