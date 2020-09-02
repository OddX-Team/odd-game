import styled from 'styled-components/macro'
import { imageCDN } from 'mixins'
import { mixin } from 'shared/utils/styles'

export const StyledGameRooms = styled.div`
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
  border: 0.013rem solid #ddd;
  background: #fff;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
`

export const Title = styled.div`
  color: #000;
  font-size: 0.25rem;
  font-weight: bold;
  text-align: left;
  margin-top: 0.1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 1.6rem;
    top: 0rem;
    cursor: pointer;
    ${imageCDN('icon-play.png', 0.38, 0.38)};
  }
`

export const Subtitle = styled.div`
  color: #000;
  font-size: 0.18rem;
  font-weight: normal;
  text-align: left;
`

export const ButtonCreate = styled.button`
  position: absolute;
  top: 0.1rem;
  left: 8.46rem;
  color: #fff;
  font-size: 0.22rem;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;

  i {
    ${imageCDN('icon-plus.png', 0.23, 0.23)};
    margin-left: -0.1rem;
    margin-right: 0.02rem;
    display: inline-block;
  }
  span {
    position: relative;
    top: 0.01rem;
  }
`

export const RoomContainer = styled.div`
  ${mixin.flexCenter}
  flex-wrap: wrap;
  justify-content: left;
`