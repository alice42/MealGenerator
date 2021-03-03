export interface PropsSearchComponent {
    onSearch(ingredients: string, query: string, page: number | string): void
    onClear(): void
  }

  export type ResultsInterface =
  | PropsSearchComponent;