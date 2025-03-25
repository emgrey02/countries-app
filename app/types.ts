export interface Country {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string] : {
                common: string;
                official: string;
            }
        };
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    flags: {
        svg: string;
        alt?: string;
    };
    tld: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
    borders: string[];
}