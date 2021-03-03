export interface RecipeModel {
    title: string;
    href: string;
    ingredients: string[];
    thumbnail: string;
    favorite: boolean;
}

export interface PropsResultsComponent {
    recipes: []
    hasMore: boolean
    search: {
      ingredients: string
      query: string
      page: string | number
    }
    isLoading: boolean
    error: Error | string | null
    onLoadNextPageRecipe(ingredients: string, query: string): void
  }

export interface PropsResultList {
    recipesListItems: []
  }

export interface PropsResultItem {
    recipeItem: RecipeModel
  }

  export type ResultsInterface =
  | RecipeModel
  | PropsResultsComponent
  | PropsResultList
  | PropsResultItem;