import React, { useState } from 'react'
import Container from './Container'
import { QuickActionCard } from './card'
import Airtime from '../../Assets/Images/airtime.svg'
import Data from '../../Assets/Images/data.svg'
import Cable from '../../Assets/Images/cable.svg'
import Electricity from '../../Assets/Images/electricity.svg'
import AirtimeComp from '../QuickAction/Airtime'
import DataComp from '../QuickAction/Data'
import CableComp from '../QuickAction/Cable'
import ElecComp from '../QuickAction/Electricity'

const QuickAction = () => {
  // modal initialization for airtime
  const [airtime, setAirtime] = useState(false);
  const airtimeOpen = () => setAirtime(true);
  const airtimeClose = () => setAirtime(false);

  // modal initialization for data
  const [data, setData] = useState(false);
  const dataOpen = () => setData(true);
  const dataClose = () => setData(false);

  // modal initialization for cable
  const [cable, setCable] = useState(false);
  const cableOpen = () => setCable(true);
  const cableClose = () => setCable(false);

  // modal initialization for electricity
  const [elec, setElec] = useState(false);
  const elecOpen = () => setElec(true);
  const elecClose = () => setElec(false);

  const card = [
    {
      icon: Airtime,
      actionName: 'Buy Airtime',
      children: <AirtimeComp />,
      open: airtime,
      handleOpen: airtimeOpen,
      handleClose: airtimeClose,
    },
    {
      icon: Data,
      actionName: 'Buy Data',
      open: data,
      handleOpen: dataOpen,
      handleClose: dataClose,
      children: <DataComp />
    },
    {
      icon: Cable,
      actionName: 'Cable Payment',
      open: cable,
      handleOpen: cableOpen,
      handleClose: cableClose,
      children: <CableComp />
    },
    {
      icon: Electricity,
      actionName: 'Electricity Payment',
      open: elec,
      handleOpen: elecOpen,
      handleClose: elecClose,
      children: <ElecComp />
    },
  ]
  return (
    <Container tag="Quick actions">
      <QuickActionCard card={card} />
    </Container>
  )
}

export default QuickAction