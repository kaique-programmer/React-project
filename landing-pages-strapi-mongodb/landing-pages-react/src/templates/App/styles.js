import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ props }) => css`
    background: ${props.background};
  `}
`;
