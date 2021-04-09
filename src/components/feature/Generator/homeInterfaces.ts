export interface RecipeModel {
    title: string;
    href: string;
    ingredients: string[];
    thumbnail: string;
    favorite: boolean;
}

export interface PropsGeneratorComponent {
    error: Error | string | null
  }

export type ResultsInterface =
| RecipeModel
| PropsGeneratorComponent;