import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

const SectionBackground = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: Props.node.isRequired,
};

export default SectionBackground;
