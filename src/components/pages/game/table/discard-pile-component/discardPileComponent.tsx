import React from 'react'

interface DiscardPileProps {
  cardsAmount: number
}

export const DiscardPileComponent = ({ cardsAmount }: DiscardPileProps) => {
  return (
    <div>
      <h2>Discard pile</h2>
      <p>{cardsAmount} in discard pile</p>
    </div>
  )
}
