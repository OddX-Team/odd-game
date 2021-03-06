import React from 'react'
import { useModalState, useModalActions } from 'contexts/ModalContext'
import './style.scss'

export const ModalError = () => {
  const { error, confirmText } = useModalState()
  const { clearError } = useModalActions()

  const close = () => {
    clearError()
  }

  return (
    <div className='modal-error'>
      <div className='dialog'>
        <div className='header'>
          <div>Error!</div>
          <button className='btn-close' onClick={() => close()} />
        </div>
        <div className='body'>
          <div className='content'>{error}</div>
        </div>
        <div className='footer'>
          <button className='btn-confirm block dark-blue' onClick={() => close()}>{confirmText || 'Confirm'}</button>
        </div>
      </div>
    </div>
  )
}
