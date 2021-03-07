import React from 'react'

function AllRecipesListItem(props: any) {
  const { recipe } = props
  return (
    <div className="Recipe">
      <p>{recipe.name}</p>
    </div>
  )
}
export default AllRecipesListItem
