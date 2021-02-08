import React, { useState } from 'react'
import List from './List'
import generateRandomString from './generateRandomString'

const Tab = ({ children, ...props }) => (
  <div {...props} className='tab'>
    {children}
  </div>
)

const Btn = ({ children, ...props }) => (
  <button
    {...props}
    className='btn'
    style={{ backgroundColor: props.active ? '#42bff5' : '#fff' }}
  >
    {children}
  </button>
)

const contents = [generateRandomString(), generateRandomString()]

const Tabs = () => {
  const [tab, setTab] = useState(1)

  const tabChildren = tab === 1 ? <List /> : contents[tab - 2]
  return (
    <div className='tabs'>
      <div className='tab_buttons'>
        <Btn active={tab === 1} onClick={() => setTab(1)} children='1' />
        <Btn active={tab === 2} onClick={() => setTab(2)} children='2' />
        <Btn active={tab === 3} onClick={() => setTab(3)} children='3' />
      </div>
      <Tab children={tabChildren}></Tab>
    </div>
  )
}

export default Tabs
