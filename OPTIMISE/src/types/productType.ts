import type {Categorie, Type, Compatibility} from "./enumType"

export type productType = {
    id: number;
    name: string;
    brand: string;//la marque
    slug: string;// name mais avec des - au lieu es espaces
    categorie: Categorie|null;
    type: Type|null;
    compatibilitys: Compatibility[]|null;
    prix: number;
    info: string;// Spécifications techniques
    description: string;// liste des info de base 
}

