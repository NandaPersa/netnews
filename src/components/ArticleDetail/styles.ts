import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
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
    margin-top: 1.25rem;
  }

  p {
    margin-top: 1.25rem;
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

  .content {
    img {
      width: 100%;
    }
  }

  .back {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-family: Rajdhani, sans-serif;
      font-size: 1.5rem;
      text-decoration: none;
      color: #2A7DDE;
      padding: 1rem;
      border: 0.2rem solid #2A7DDE;
      border-radius: 0.75rem;
    }
  }
`;
