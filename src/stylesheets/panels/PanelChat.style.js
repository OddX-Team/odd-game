import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 2.5rem;
`;

export const ChatContent = styled.div`
  border-top: 0.013rem solid #ddd;
  flex: 1;
  overflow-y: auto;
  height: 1.45rem;
`;

export const StyledInput = styled.div`
  display: flex;
  color: #000;
  font-size: 0.18rem;
  width: 4.5rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  background: rgba($color: #000, $alpha: 0.05);
  margin: 0.1rem;
`;
