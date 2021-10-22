import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${light ? theme.colors.white : theme.colors.primaryBackground }
  `}
`;
