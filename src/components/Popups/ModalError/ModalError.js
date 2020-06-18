import React from 'react'
import { useModal } from 'hooks/useModal'
import './style.scss'

export const ModalError = () => {
  const HookModal = useModal()
  const { error, confirmText } = HookModal

  const close = () => {
    HookModal.clearError()
  }

  return (
    <div className='modal'>
      <div className='dialog'>
        <div className='header'>
          <div>Error!</div>
          <button className='btn-close' onClick={() => close()} />
        </div>
        <div className='body'>
          {error}
        </div>
        <div className='footer'>
          <button className='btn-confirm' onClick={() => close()}>{confirmText || 'Confirm'}</button>
        </div>
      </div>
    </div>
  )
}
