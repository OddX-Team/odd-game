import React, { useContext } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import utils from 'utils'
import { StyledMessage, Avatar, Status, Name, Message, Time } from './styled'
import { GameContext } from 'contexts/GameContext'

export const ChatMessage = ({ username, message, time, small }) => {
  const { hours, mins } = utils.parseTime(time)
  const { state } = useContext(GameContext)
  const onlineStatus = classNames({ online: state.online })

  return (
    <StyledMessage className={classNames({ small })}>
      <Avatar src={`https://www.tinygraphs.com/spaceinvaders/${username}?size=60`} />
      <Status className={onlineStatus} />
      <Name>{username}</Name>
      <Message>{message}</Message>
      <Time>
        {hours}:{mins}
      </Time>
    </StyledMessage>
  )
}

ChatMessage.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.number,
  online: PropTypes.bool,
  small: PropTypes.bool
}