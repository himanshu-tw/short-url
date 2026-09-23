export function Encoder(input: number) {
    const chars: string = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result: string = "";

    if (input == 0) {
        return 0;
    }

    while (input > 0) {
        let res: number = input % 62;
        result += chars[res];
        input /= 62;
    }

    return result.split("").reverse().join("");
}