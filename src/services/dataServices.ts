import { basicFetch } from './utils'

export const  fetchRecipes = ( ingredients: string, query: string, page: string | number ) => 
  basicFetch('GET', {  
  i: ingredients,
  q: query,
  p: page.toString()
})