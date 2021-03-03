import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState,
} from 'react'
import { Tag, Input, Tooltip } from 'antd'

interface PropsMyTag {
  ingredients: string[]
  setIngredients: Dispatch<SetStateAction<string[]>>
}

const MyTag: FunctionComponent<PropsMyTag> = ({
  ingredients,
  setIngredients,
}) => {
  const inputRef = React.useRef<Input>(null)

  const [inputVisible, setInputVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const handleClose = (removedTag: string) => {
    setIngredients(
      ingredients.filter((ingredient: string) => ingredient !== removedTag)
    )
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (e: { target: { value: string } }) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = () => {
    let updatedTags = [...ingredients]
    if (inputValue && ingredients.indexOf(inputValue) === -1) {
      updatedTags = [...updatedTags, inputValue]
    }
    setInputVisible(false)
    setInputValue('')
    setIngredients(updatedTags)
  }

  return (
    <div>
      {ingredients.map((ingredient) => {
        const isLongTag = ingredient.length > 20
        const ingredientElem = (
          <Tag
            key={ingredient}
            closable={true}
            onClose={() => handleClose(ingredient)}
          >
            {isLongTag ? `${ingredient.slice(0, 20)}...` : ingredient}
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={ingredient} key={ingredient}>
            {ingredientElem}
          </Tooltip>
        ) : (
          ingredientElem
        )
      })}
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          Add an ingredient
        </Tag>
      )}
    </div>
  )
}

export default MyTag
