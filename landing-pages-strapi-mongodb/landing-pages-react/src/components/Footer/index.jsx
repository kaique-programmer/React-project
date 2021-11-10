import React from 'react';
import Props from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: Props.string.isRequired,
};
