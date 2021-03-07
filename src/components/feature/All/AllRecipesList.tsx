import React, { useState, useEffect } from 'react'
import AllRecipesListItem from './AllRecipesListItem'
import { recipesRef } from '../../../../firebase'
import Divider from 'antd/lib/divider'

function AllRecipesList() {
  const [recipes, setRecipes] = useState<any>([])

  useEffect(() => {
    recipesRef.on('value', (snapshot: { val: () => any }) => {
      let items = snapshot.val()
      let newState = []
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
        })
      }
      setRecipes(newState)
    })
  }, [])
  return (
    <>
      {recipes.map((recipe: any, i: number) => (
        <React.Fragment key={recipe.id}>
          <AllRecipesListItem recipe={recipe} />
          {i < recipes.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  )
}
export default AllRecipesList
