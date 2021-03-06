import styled from 'styled-components/macro'
import { mixin } from 'shared/utils/styles'

export const PageRoomWrapper = styled.div`
  ${mixin.flexCenter} 
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  top: 0;
  padding-bottom: 0.5rem;
  position: relative;
`

export const CardContainer = styled.div`
  margin-top: 0.15rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`
