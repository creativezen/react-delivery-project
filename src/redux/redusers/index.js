import { combineReducers } from 'redux'

import reduceFilters from './reduceFilters'
import reducePizzas from './reducePizzas'
import reduceCart from './reduceCart'

const rootReducer = combineReducers({
  filters: reduceFilters,
  pizzas: reducePizzas,
  cart: reduceCart,
})

export default rootReducer
