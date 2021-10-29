import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
