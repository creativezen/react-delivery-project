const initialState = {
  productList: {},
  totalPrice: 0,
  totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, item) => item.price + sum, 0)
// const allItems = Object.values(newItems).flat() Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
const setCartList = (list) =>
  [].concat.apply(
    [],
    Object.values(list).map((obj) => obj.items),
  ) // Альтернативый метод const

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newItems = !state.productList[action.payload.id]
        ? [action.payload]
        : [...state.productList[action.payload.id].items, action.payload]
      let newProductList = {
        ...state.productList,
        [action.payload.id]: {
          items: newItems,
          price: getTotalPrice(newItems),
        },
      }
      let newTotalCount = setCartList(newProductList)
      let newTotalPrice = getTotalPrice(newTotalCount)
      return {
        ...state,
        productList: newProductList,
        totalPrice: newTotalPrice,
        totalCount: newTotalCount.length,
      }
    }

    case 'CLEAR_CART':
      return {
        productList: {},
        totalPrice: 0,
        totalCount: 0,
      }

    case 'DELETE_ITEM':
      let newProductList = { ...state.productList }
      delete newProductList[action.payload]
      let newTotalCount = setCartList(newProductList)
      let newTotalPrice = getTotalPrice(newTotalCount)
      return {
        ...state,
        productList: newProductList,
        totalPrice: newTotalPrice,
        totalCount: newTotalCount.length,
      }

    case 'INCREASE_ITEM': {
      let newItems = [...state.productList[action.payload.id].items, action.payload]
      let newProductList = {
        ...state.productList,
        [action.payload.id]: {
          items: newItems,
          price: getTotalPrice(newItems),
        },
      }
      let newTotalCount = setCartList(newProductList)
      let newTotalPrice = getTotalPrice(newTotalCount)
      return {
        ...state,
        productList: newProductList,
        totalPrice: newTotalPrice,
        totalCount: newTotalCount.length,
      }
    }

    case 'DECREASE_ITEM': {
      let newItems = [...state.productList[action.payload.id].items]
      let newProductList
      if (newItems.length > 1) {
        newItems.pop()
        newProductList = {
          ...state.productList,
          [action.payload.id]: {
            items: newItems,
            price: getTotalPrice(newItems),
          },
        }
      } else {
        newProductList = { ...state.productList }
        delete newProductList[action.payload.id]
      }
      let newTotalCount = setCartList(newProductList)
      let newTotalPrice = getTotalPrice(newTotalCount)
      return {
        ...state,
        productList: newProductList,
        totalPrice: newTotalPrice,
        totalCount: newTotalCount.length,
      }
    }

    default:
      return state
  }
}

export default cart
