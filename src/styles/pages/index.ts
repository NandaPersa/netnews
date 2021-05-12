import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5.43rem 5.87rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;

  @media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}

  @media (max-width: 600px) {
		padding: 2rem 2rem;
	}
`;