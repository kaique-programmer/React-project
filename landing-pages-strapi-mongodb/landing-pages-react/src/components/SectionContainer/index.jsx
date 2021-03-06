import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';


export const SectionContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

SectionContainer.propTypes = {
  children: Props.node.isRequired,
};
