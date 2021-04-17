import React from 'react'
import { Suit } from '../../suit'
import { Rank } from '../../ranks'
import { Card } from '../../card'
import styles from '../cardPictureProvider.module.scss'

interface Props {
  card: Card
}

const suitNameAdapter = (suit: Suit) => {
  return suit.name.charAt(0)
}

const rankNameAdapter = (rank: Rank) => {
  const digits = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN']
  const index = digits.findIndex(value => value === rank.name)
  if (index !== -1) {
    return index
  }
  return rank.name.charAt(0)
}

export const FaceCardPictureProvider = ({ card }: Props) => {
  const { suit, rank } = card

  return (
    <>
      <img
        className={styles.cardPicture}
        src={process.env.PUBLIC_URL + '/cards/' + rankNameAdapter(rank) + suitNameAdapter(suit) + '.png'}
        alt={suit.logo + rank.name}
      />
    </>
  )
}
