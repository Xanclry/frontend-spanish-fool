import React from 'react'
import styles from '../cardPictureProvider.module.scss'

const backOfCardName = () => {
  // todo: implement
  return 'purple_back'
}

export const BackCardPictureProvider = () => {
  return (
    <>
      <img
        className={styles.cardPicture}
        src={process.env.PUBLIC_URL + '/cards/' + backOfCardName() + '.png'}
        alt="back of the card"
      />
    </>
  )
}
