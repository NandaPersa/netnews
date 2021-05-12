import styled from 'styled-components';

export const Container = styled.article`
  margin-left: 0.563rem;
  margin-right: 0.563rem;
  margin-bottom: 1.125rem;
  border-radius: 1.063rem;
  padding: 1.87rem 1.68rem;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Ubuntu, sans-serif;
    font-size: 2.25rem;
    font-weight: 500;
  }

  p {
    margin-top: 0.688rem;
    font-family: Rajdhani, sans-serif;
    color: #6C6868;
    font-size: 1.5rem;
    line-height: 1.875rem;

    &.info {
        font-weight: 600;
        color: #363131;
        font-size: 1.125rem;
        text-transform: capitalize;
    }
  }
`;


export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;