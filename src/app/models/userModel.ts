export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const users: User[] = [
    {
        id: 1,
        name: 'admin',
        email: 'admin',
        password: 'admin'
    }
];

export function findUserByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
}