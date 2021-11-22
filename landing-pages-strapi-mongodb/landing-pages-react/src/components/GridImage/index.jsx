import React from 'react';
import Props from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridImage = ({ title, description, grid, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
    <Styled.Container>
      <Heading size="huge" uppercase colorDark={!background} as="h2">
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <Styled.Grid>
        {grid.map((el) => (
          <Styled.GridElement key={`${el.srcImage}${el.altText}`}>
            <Styled.Image src={el.srcImage} alt={el.altText} />
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </Styled.Container>
  </SectionBackground>
  );
};

GridImage.propTypes = {
  background: Props.bool,
  title: Props.string.isRequired,
  description: Props.string.isRequired,
  grid: Props.arrayOf(
    Props.shape({
      altText: Props.string.isRequired,
      srcImage: Props.string.isRequired,
    }),
  ).isRequired,
  sectionId: Props.string,
};
