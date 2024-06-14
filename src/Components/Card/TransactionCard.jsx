import React from 'react'
import Container from './Container'
import { TransactionHistory } from './card'
import Sent from '../../Assets/Images/sent.svg'
import Receive from '../../Assets/Images/receive.svg'

const TransactionCard = () => {
    const list = [
        {svg: Sent , name:'Send money' , status:'sent' , color: 'sent' , amount: 6000 , date: '16 Nov 2022',},
        {svg: Receive , name:'Send money' , status:'success' , amount: 6000 , date: '16 Nov 2022',},
        {svg: Sent , name:'Send money' , status:'sent' , color: 'sent' , amount: 6000 , date: '16 Nov 2022',},
        {svg: Sent , name:'Send money' , status:'sent' , color: 'sent' , amount: 6000 , date: '16 Nov 2022',},
        {svg: Receive , name:'Send money' , status:'success' , amount: 6000 , date: '16 Nov 2022',},
        {svg: Sent , name:'Send money' , status:'sent' , color: 'sent' , amount: 6000 , date: '16 Nov 2022',},
    ]

  return (
    <Container tag="Recent Transactions">
        <TransactionHistory list={list}/>
    </Container>
  )
}

export default TransactionCard