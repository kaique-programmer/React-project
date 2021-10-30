import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';

const SectionBackground = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: Props.node.isRequired,
  background: Props.bool,
};

export default SectionBackground;
