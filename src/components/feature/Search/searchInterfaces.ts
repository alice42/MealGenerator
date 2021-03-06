export interface PropsSearchComponent {
    onSearch(ingredients: string, query: string, page: number | string): void
    onClear(): void
  }

export interface PropsSearchIngredientsFormItem {
  name: string
}

export interface PropsSearchIngredientsForm {
  canExcludeIngredient: boolean
}

export type SearchInterface =
  | PropsSearchComponent
  | PropsSearchIngredientsFormItem
  | PropsSearchIngredientsForm;