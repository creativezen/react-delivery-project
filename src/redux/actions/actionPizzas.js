export const setLoaded = (value) => ({
  type: 'SET_LOADED',
  payload: value,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  // Ajax запросы идут через proxy http://localhost:3001
  fetch(
    `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
      sortBy.order
    }`,
  )
    .then((responce) => responce.json())
    .then((pizzas) => dispatch(setPizzas(pizzas)))
}

export const setPizzas = (pizzas) => ({
  type: 'SET_PIZZAS',
  payload: pizzas,
})
