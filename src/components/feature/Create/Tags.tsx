import { Tag, Input, Tooltip, AutoComplete } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'

const colors = {
  custom: 'purple',
  meats: 'red',
  vegetables: 'green',
  fruits: 'orange',
  seafood: 'geekblue',
  starches: 'gold',
  spices: 'volcano',
  fishes: 'blue',
  herbs: 'lime',
}

const renderTitle = (title: string) => {
  const category = title.toLowerCase()
  return (
    <span>
      <Tag color={colors[category]}>{title}</Tag>
    </span>
  )
}

const categories = [
  {
    label: renderTitle('Meats'),
    options: [{ value: 'Meat option 1', category: 'meats' }],
  },
  {
    label: renderTitle('Fishes'),
    options: [{ value: 'Fishes option 1', category: 'fishes' }],
  },
  {
    label: renderTitle('SeaFood'),

    options: [{ value: 'SeaFood option 1', category: 'seaFood' }],
  },
  {
    label: renderTitle('Starches'),
    options: [{ value: 'Starches option 1', category: 'starches' }],
  },
  {
    label: renderTitle('Vegetables'),
    options: [{ value: 'Vegetables option', category: 'vegetables' }],
  },
  {
    label: renderTitle('Fruits'),
    options: [{ value: 'Fruits option', category: 'fruits' }],
  },
  {
    label: renderTitle('Herbs'),
    options: [{ value: 'Herbs option', category: 'herbs' }],
  },
  {
    label: renderTitle('Spices'),
    options: [{ value: 'Spices option', category: 'spices' }],
  },
]

const Tags = () => {
  const saveInputRef = React.useRef(null)
  const [c, setA] = React.useState([])
  const [tags, setTags] = React.useState([])
  const [inputVisible, setInputVisible] = React.useState(false)
  const [inputValue, setInputValue] = React.useState({
    value: '',
    category: '',
  })

  async function fetchData() {
    const response = await fetch(
      '/api/?https:/foodb.ca/api/v1/foodreport/food',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    setA(await response.json())
  }

  React.useEffect(() => {
    fetchData()
  })

  const handleClose = (removedTag: any) => {
    const newTags = tags.filter((tag: any) => tag.value !== removedTag.value)
    setTags(newTags)
  }

  const showInput = () => {
    setInputVisible(true)
    saveInputRef?.current?.focus()
  }

  const handleInputChange = (e: { target: { value: string } }) => {
    const newValue = categories
      .find((category) =>
        category.options.find((option) => option.value === e.target.value)
      )
      ?.options.find((option) => option.value === e.target.value) || {
      value: e.target.value,
      category: 'custom',
    }
    setInputValue(newValue)
  }

  const handleInputConfirm = () => {
    let newTags = [...tags]
    if (tags.findIndex((tag) => tag.value === inputValue.value) === -1) {
      newTags = [...tags, inputValue]
    }
    setInputVisible(false)
    setInputValue({ value: '', category: '' })
    setTags(newTags)
  }

  const onSelect = (value: string, option: any) => {
    setInputValue(option)
  }

  const a = () =>
    categories
      .map((category) => {
        return {
          ...category,
          options: category.options.filter((c) => {
            return tags.findIndex((tag) => tag.value === c.value) === -1
          }),
        }
      })
      .filter((option) => option.options.length !== 0)

  const b = categories
    .map((category) => {
      return {
        ...category,
        options: category?.options?.filter((c) => {
          return (
            c?.value?.toUpperCase().indexOf(inputValue.value.toUpperCase()) !==
            -1
          )
        }),
      }
    })
    .filter((option) => option.options.length !== 0)

  console.log('AAAAA', c)
  return (
    <>
      {tags.map((tag, index) => {
        const isLongTag = tag.value.length > 20

        const tagElem = (
          <Tag
            color={colors[tag.category]}
            className="edit-tag"
            key={tag.value}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span>
              {isLongTag ? `${tag.value.slice(0, 20)}...` : tag.value}
            </span>
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag} key={tag.value}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        )
      })}
      {inputVisible && (
        <AutoComplete
          options={a()}
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          filterOption={b}
          onSelect={onSelect}
        >
          <Input
            ref={saveInputRef}
            type="text"
            size="small"
            className="tag-input"
            value={inputValue.value}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        </AutoComplete>
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  )
}

export default Tags
