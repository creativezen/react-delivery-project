export const addItem = (obj) => ({
  type: 'ADD_TO_CART',
  payload: obj,
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  payload: id,
})

export const increaseItem = (id) => ({
  type: 'INCREASE_ITEM',
  payload: id,
})

export const decreaseItem = (id) => ({
  type: 'DECREASE_ITEM',
  payload: id,
})
