export interface Character {
    name: string;
    series: Series;
    fighterNumber: string;
    images: Images;
    dlcCharacter: boolean;
}

export interface Images {
    bannerImage: string;
    fullImage: string;
}

export interface Series {
    name: string;
    image: string;
}