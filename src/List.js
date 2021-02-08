import React, { useState, useCallback } from 'react'
import generateRandomString from './generateRandomString'

import { throttle } from 'lodash'

const List = () => {
  const [items, setItems] = useState([])

  const handleAdd = useCallback(
    throttle(
      (items) => {
        setItems([...items, generateRandomString()])
      },
      5000,
      { leading: true, trailing: false }
    ),
    []
  )

  const handleDelete = () => {
    let randomIndex = Math.floor(Math.random() * (items.length - 1))
    let draftItems = items
    draftItems.splice(randomIndex, 1)
    setItems([...draftItems])
  }

  return (
    <div className='list'>
      <ul>
        {items.map((item, i) => (
          <li id={`li-${i}`} children={item} />
        ))}
      </ul>
      <button onClick={() => handleAdd(items)} children='add' />
      <button onClick={handleDelete} children='delete' />
    </div>
  )
}

export default List
