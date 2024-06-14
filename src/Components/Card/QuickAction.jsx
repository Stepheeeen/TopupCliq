import React from 'react'
import { QuickActionCard } from './card'

const QuickAction = () => {
    const card = [
        {icon: '', actionName: ''},
        {icon: '', actionName: ''},
        {icon: '', actionName: ''},
        {icon: '', actionName: ''},
    ]
  return (
    <div className='w-1/2 grid grid-cols-2 rounded-md'>
      <QuickActionCard card={card}/>
    </div>
  )
}

export default QuickAction

