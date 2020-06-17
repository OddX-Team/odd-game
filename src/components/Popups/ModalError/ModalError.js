import React, { useContext } from 'react'
import './style.scss'
import { ModalContext } from 'contexts/ModalContext'

export const ModalError = () => {
  const { stateModal, dispatchModal } = useContext(ModalContext)
  const { error } = stateModal

  const close = () => {
    dispatchModal({ type: 'UPDATE_ERROR', error: null })
  }

  return (
    <div className='modal'>
      <div className='dialog'>
        <div className='header'>
          <div>Error!</div>
          <button class='btn-close' onClick={() => close()} />
        </div>
        <div className='body'>
          {error}
        </div>
        <div className='footer'>
          <button className='btn-confirm' onClick={() => close()}>Confirm</button>
        </div>
      </div>
    </div>
  )
}