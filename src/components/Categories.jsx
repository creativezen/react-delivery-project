import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({ activeCategory, onClickCategory, items }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : null}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : null}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  onClickCategory: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories
