import React, { useState, useEffect } from 'react'
import AllRecipesListItem from './AllRecipesListItem'
import { recipesRef } from '../../../../firebase'

function AllRecipesList() {
  const [recipes, setRecipes] = useState<any>([])

  useEffect(() => {
    let newState: {
      id: string
      name: any
      ingredients: any
      instructions: any
      imageURL: any
    }[] = []
    recipesRef
      .once('value', (snapshot: { val: () => any }) => {
        let items = snapshot.val()
        for (let item in items) {
          newState.push({
            id: item,
            name: items[item].name,
            ingredients: items[item].ingredients.map((ingredient: any) => {
              return ingredient.name
            }),
            instructions: items[item].instructions,
            imageURL: items[item].image,
          })
        }
      })
      .then(() => {
        setRecipes(newState)
      })
  }, [])

  return (
    <>
      {recipes.map((recipe: any, i: number) => (
        <React.Fragment key={recipe.id}>
          <AllRecipesListItem recipe={recipe} />
        </React.Fragment>
      ))}
    </>
  )
}
export default AllRecipesList
