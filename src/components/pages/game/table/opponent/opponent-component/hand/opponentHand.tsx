import React from 'react'
import { CardComponent } from '../../../card-component/cardComponent'

interface Props {
  cardAmount: number
}

export const OpponentHand = ({ cardAmount }: Props) => {
  const cards = Array(cardAmount).fill(<CardComponent card={null} />)
  return <>{cards}</>
}
