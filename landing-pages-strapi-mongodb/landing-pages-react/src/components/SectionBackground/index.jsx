import React from 'react';
import Props from 'prop-types';
import {SectionContainer} from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({ children, background = false, sectionId = '' }) => {

  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: Props.node.isRequired,
  background: Props.bool,
  sectionId: Props.string,
};
