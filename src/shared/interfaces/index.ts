export interface Hero {
    id?: number;
    name: string;
}

export interface HeroListResponse {
    rows: Hero[];
    count: number;
}
