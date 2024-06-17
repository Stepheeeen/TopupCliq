import React from 'react'
import Modal from '../Card/modalCont'
import cancelIcon from '../../Assets/Images/cancelIcon.svg'

const Cable = () => {
  return (
    <Modal cancelbtn={cancelIcon}  text='pay' title='Cable Payment' hide='hide'>
      hello
    </Modal>
  )
}

export default Cable
