export const setHighlihts = (text: string, condition: RegExp) => {
    return text.replace(/\n$/g, '\n\n').replace(condition, '<mark>$&</mark>');
};