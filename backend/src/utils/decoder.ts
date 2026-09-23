export function Decode(input: string): number {
    const chars: string = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result: number = 0;

    for (const char of input) {
        let index: number = chars.indexOf(char);
        if (index < 0) {
            throw new Error(`Invalid character '${char}' in the short code.`);
        }
        result = result * 62 + index;
    }

    return result;
}