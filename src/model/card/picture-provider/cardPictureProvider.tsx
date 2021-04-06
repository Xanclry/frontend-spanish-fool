import React from 'react'
import { Card } from '../card'
import { FaceCardPictureProvider } from './face/faceCardPictureProvider'
import { BackCardPictureProvider } from './back/backCardPictureProvider'

interface Props {
  card: Card | null | undefined
}

export const CardPictureProvider = ({ card }: Props) => {
  if (card) return <FaceCardPictureProvider card={card} />
  return <BackCardPictureProvider />
}
