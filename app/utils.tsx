export function toTitleCase(word: string): string {
    return word.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}
