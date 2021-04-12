import React from 'react'
import { Card } from '../../../../../model/card/card'
import { CardPictureProvider } from '../../../../../model/card/picture-provider/cardPictureProvider'

interface Props {
  card: Card | null | undefined
  innerRef?: any
}

export const CardComponent = ({ card, innerRef }: Props) => {
  return (
    // <span style={{ zIndex: 10000 }} ref={innerRef}>
    <span ref={innerRef}>
      <CardPictureProvider card={card} />
    </span>
  )
}
