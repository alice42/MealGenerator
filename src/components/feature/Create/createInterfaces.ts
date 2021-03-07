export interface RecipeModel {
    title: string;
    href: string;
    ingredients: string[];
    thumbnail: string;
    favorite: boolean;
}

export interface PropsCreateComponent {
    error: Error | string | null
  }

export type ResultsInterface =
| RecipeModel
| PropsCreateComponent;