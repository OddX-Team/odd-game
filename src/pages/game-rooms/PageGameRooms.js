import React, { useState, useEffect } from 'react'
import { useGame, useModal } from 'hooks'
import { CardRoom } from 'components/CardRoom'
import { TabList } from './tab-list'
import { GlobalChat } from './global-chat'
import Api from 'services'
import {
  PageRoomWrapper,
  OuterWrapper,
  Container,
  Title,
  Subtitle,
  ButtonCreate,
  RoomContainer
} from './styled'

export const PageGameRooms = () => {
  const HookGame = useGame()
  const HookModal = useModal()
  const [activeTab, setActiveTab] = useState(0)
  const rooms = activeTab === 0 ? HookGame.enRooms : HookGame.vnRooms

  useEffect(() => {
    HookGame.clearRoom()
    HookGame.setBanner(true)
    fetchRoomList()
  }, [])

  const fetchRoomList = async () => {
    const [eRooms, vRooms] = await Promise.all([Api.getEnglishRooms(), Api.getVietnameseRooms()])
    HookGame.updateRooms({ enRooms: eRooms, vnRooms: vRooms })
  }

  return (
    <PageRoomWrapper>
      <GlobalChat />

      <OuterWrapper>
        <TabList switchTab={idx => setActiveTab(idx)} activeTab={activeTab} />
        <Container>
          <Title>Game rooms</Title>
          <Subtitle>Select any room:</Subtitle>
          <ButtonCreate className='block accent' onClick={() => HookModal.openModal('create')}>
            <i />
            <span>Create</span>
          </ButtonCreate>

          <RoomContainer>
            {rooms.map((room, i) => (
              <div key={i}>
                <CardRoom {...room} />
              </div>
            ))}
            {rooms.length === 0 && <h4 style={{ marginTop: '10px' }}>No room available at the moment.</h4>}
          </RoomContainer>
        </Container>
      </OuterWrapper>
    </PageRoomWrapper>
  )
}