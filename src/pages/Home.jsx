import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, ProductItem, Placeholder } from '../components'
import { setCategory, setSortBy } from '../redux/actions/actionFilters'
import { fetchPizzas } from '../redux/actions/actionPizzas'
import { addItem } from '../redux/actions/actionCart'

const CATEGORIES = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const SORTING = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.productList)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSorting = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const addToCart = (object) => {
    dispatch(addItem(object))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={CATEGORIES}
        />
        <SortPopup activeSortType={sortBy.type} onClickSorting={onSelectSorting} items={SORTING} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <ProductItem
                addToCart={addToCart}
                key={item.id}
                count={cartItems[item.id] && cartItems[item.id].items.length}
                {...item}
              />
            ))
          : Array(10).fill(<Placeholder />)}
      </div>
    </div>
  )
}

export default Home
