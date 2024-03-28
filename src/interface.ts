export interface ICofee {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: number | null;
    votes: number;
    popular: boolean;
    available: boolean;
}
export interface IFilter {
    label: string;
    filter: boolean;
}