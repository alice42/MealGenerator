export interface PropsSearchComponent {
    onSearch(ingredients: string, query: string, page: number | string): void
    onClear(): void
  }

export interface PropsSearchIngredientsFormItem {
  name: string
}

export type ResultsInterface =
  | PropsSearchComponent
  | PropsSearchIngredientsFormItem;