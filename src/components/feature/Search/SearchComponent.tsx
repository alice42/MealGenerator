import React, { FunctionComponent } from 'react'
import SearchIngredientsForm from './SearchIngredientsForm'
import SearchQueryForm from './SearchQueryForm'
import * as searchTypes from './searchInterfaces'

import { Form, Button } from 'antd'

const SearchComponent: FunctionComponent<searchTypes.PropsSearchComponent> = ({
  onSearch,
}) => {
  const onFinish = (values: {
    query: string
    with_ingredient: string[]
    without_ingredient: string[]
  }) => {
    const ingredientList =
      values.with_ingredient && values.without_ingredient
        ? `${values.with_ingredient.join(
            ','
          )},-${values.without_ingredient.join(',-')}`
        : values.with_ingredient && !values.without_ingredient
        ? values.with_ingredient.join(',')
        : !values.with_ingredient && values.without_ingredient
        ? `-${values.without_ingredient.join(',-')}`
        : ''
    const validQuery = values.query || ''
    onSearch(ingredientList, validQuery, 1)
  }

  return (
    <Form name="recipe_search" onFinish={onFinish}>
      <SearchQueryForm />
      <SearchIngredientsForm />
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="get-recipes-form-button"
        >
          Get Recipes
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SearchComponent
