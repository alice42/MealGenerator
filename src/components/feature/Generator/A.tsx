import { Button, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useState, useEffect } from 'react'
import { recipesRef } from '../../../../firebase'
import defaultImg from '../../../assets/images/default_img.jpg'

const random = (arr: number[]) => Math.floor(Math.random() * arr.length)

function AllRecipesList() {
  const [recipes, setRecipes] = useState<any>([])
  const [recipe, setRecipe] = useState<number>(-1)

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

  const handleClick = () => {
    setRecipe(random(recipes))
  }
  return (
    <>
      {recipes[recipe] && (
        <Card>
          {/* <Skeleton loading={loading} active> */}
          <Meta
            avatar={
              <img
                style={{ width: 80, height: 80, borderRadius: 3 }}
                src={recipes[recipe].imageURL || defaultImg}
                alt={recipes[recipe].name}
              />
            }
            title={recipes[recipe].name}
            description={recipes[recipe].ingredients.join(',')}
          />
          {/* </Skeleton> */}
        </Card>
      )}
      <Button onClick={handleClick}>Generate</Button>
    </>
  )
}
export default AllRecipesList
