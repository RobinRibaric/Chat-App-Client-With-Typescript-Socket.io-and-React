export interface user {
    id: number;
    name: string;
}

export interface messageInterface {
    user: string;
    text: string;
}

export interface userTyping {
    name: string;
    isTyping: boolean;
}