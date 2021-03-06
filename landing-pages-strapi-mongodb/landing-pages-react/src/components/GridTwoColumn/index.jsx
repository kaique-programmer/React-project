import React from 'react';
import Props from 'prop-types';
import {SectionBackground} from '../SectionBackground';
import {Heading} from '../Heading';
import {TextComponent} from '../TextComponent';
import * as Styled from './styles';

const GridTwoColumn = ({ title, text, srcImage, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImage} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: Props.string.isRequired,
  text: Props.string.isRequired,
  srcImage: Props.string.isRequired,
  background: Props.bool,
  sectionId: Props.string,
};

export default GridTwoColumn;
