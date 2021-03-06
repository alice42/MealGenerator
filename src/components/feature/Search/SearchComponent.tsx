import React, { FunctionComponent } from 'react'
import SearchIngredientsForm from './SearchIngredientsForm'
import SearchQueryForm from './SearchQueryForm'
import * as searchTypes from './searchInterfaces'
import { Form, Button } from 'antd'

interface Values {
  query?: string
  with_ingredient?: string[]
  without_ingredient?: string[]
}

const SearchComponent: FunctionComponent<searchTypes.PropsSearchComponent> = ({
  onSearch,
}) => {
  const [form] = Form.useForm()
  const [canExcludeIngredient, setCanExcludeIngredient] = React.useState(false)

  React.useEffect(() => {
    form.validateFields()
  })

  const onFinish = ({
    query = '',
    with_ingredient = [],
    without_ingredient = [],
  }: Values) => {
    const ingredientList = `${with_ingredient.join(
      ','
    )},-${without_ingredient.join(',-')}`
    onSearch(ingredientList, query, 1)
  }

  const onValuesChange = (_: any, allValues: any) => {
    const with_ =
      !allValues.with_ingredient ||
      (allValues.with_ingredient && !allValues.with_ingredient.length)
    const query =
      !allValues.query || (allValues.query && !allValues.query.length)
    if ((!query && with_) || (query && !with_)) {
      setCanExcludeIngredient(true)
    }
    if (query && with_) setCanExcludeIngredient(false)
  }

  return (
    <div className="site-layout-background">
      <Form
        name="recipe_search"
        form={form}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      >
        <SearchQueryForm />
        <SearchIngredientsForm canExcludeIngredient={canExcludeIngredient} />
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
    </div>
  )
}

export default SearchComponent
