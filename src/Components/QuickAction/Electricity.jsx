import React from 'react'
import Modal from '../Card/modalCont'
import cancelIcon from '../../Assets/Images/cancelIcon.svg'

const Electricity = () => {
  return (
    <Modal cancelbtn={cancelIcon}  text='pay' title='Electricity Payment' hide='hide'>
      hello
    </Modal>
  )
}

export default Electricity
