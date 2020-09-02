import React, { useState, useEffect } from 'react'
import { useFetch } from 'shared/hooks/fetch'
import { useGameActionsContext } from 'shared/contexts/GameContext'
import { Card } from 'shared/components/Card'
import { TabList } from './TabList'
import {
  PageRoomWrapper,
  Container,
  CardContainer
} from './styled'

import Api from 'shared/services'

export const PageViewCards = () => {
  const [allCards, loading] = useFetch(Api.getAllCards)
  const { setBanner, setGlobalLoading } = useGameActionsContext()

  useEffect(() => setGlobalLoading(loading), [loading, setGlobalLoading])
  useEffect(() => setBanner(true), [setBanner])

  return (
    <PageRoomWrapper>
      <Container>
        <CardContainer>
          {allCards && allCards.length
            ? allCards.map((card, i) => (
              <div key={i}>
                <Card {...card} />
              </div>
            ))
            : <div>Loading cards...</div>}
        </CardContainer>
      </Container>
    </PageRoomWrapper>
  )
}
