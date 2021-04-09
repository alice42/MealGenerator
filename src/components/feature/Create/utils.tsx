export const optionsBase = [
  {
    label: renderTitle('Meats', 'red'),
    options: [
      renderItem('pork', 'red', 'Meats'),
      renderItem('beef', 'red', 'Meats'),
      renderItem('lamb', 'red', 'Meats'),
      renderItem('chiken', 'red', 'Meats'),
      renderItem('turkey', 'red', 'Meats'),
    ],
  },
  {
    label: renderTitle('Vegetables', 'green'),
    options: [renderItem('Vegetables option', 'green', 'Vegetables')],
  },
  {
    label: renderTitle('Fruits', 'lime'),
    options: [renderItem('Fruits option', 'lime', 'Fruits')],
  },
  {
    label: renderTitle('SeaFood', 'blue'),

    options: [renderItem('SeaFood option', 'blue', 'SeaFood')],
  },
  {
    label: renderTitle('Starches', 'gold'),
    options: [renderItem('Starches option', 'gold', 'Starches')],
  },
  {
    label: renderTitle('Spices', 'volcano'),
    options: [renderItem('Spices option', 'volcano', 'Meats')],
  },
]
