import React from 'react'
import { Card } from '../../../../../model/card/card'
import { CardPictureProvider } from '../../../../../model/card/picture-provider/cardPictureProvider'

interface Props {
  card: Card | null | undefined
}

export const CardComponent = ({ card }: Props) => {
  return (
    <>
      <CardPictureProvider card={card} />
    </>
  )
}
