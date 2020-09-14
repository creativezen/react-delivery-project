import React from 'react'
import classNames from 'classnames'

const Button = ({ onClick, className, outline, add, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--add': add,
      })}>
      {children}
    </button>
  )
}

export default Button
