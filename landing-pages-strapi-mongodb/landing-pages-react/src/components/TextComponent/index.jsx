import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: Props.node.isRequired,
};
