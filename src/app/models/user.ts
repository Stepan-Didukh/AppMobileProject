export interface User {
    name: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    };
    company: {name: string, catchPhrase: string, bs: string};
    email: string;
    id: number;
    phone: string;
    username: string;
    website: string;
}