import React from 'react'
import Container from './Container'
import { QuickActionCard } from './card'
import Airtime from '../../Assets/Images/airtime.svg'
import Data from '../../Assets/Images/data.svg'
import Cable from '../../Assets/Images/cable.svg'
import Electricity from '../../Assets/Images/electricity.svg'

const QuickAction = () => {
    const card = [
        {icon: Airtime , actionName: 'Buy Airtime'},
        {icon: Data , actionName: 'Buy Data'},
        {icon: Cable , actionName: 'Cable Payment'},
        {icon: Electricity , actionName: 'Electricity Payment'},
        ]
  return (
    <Container tag="Quick actions">
        <QuickActionCard card={card}/>
    </Container>
  )
}

export default QuickAction