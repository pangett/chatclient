export class TmiIdentity {
    // Twitch username.
    username: string;
    // Should be oAuth token.
    password: string;

    constructor(u: string, p: string) {
        this.username = u;
        this.password = p;
    }
}