import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImage && <img src={srcImage} alt={text} />}
        {!srcImage && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: Props.string.isRequired,
  srcImage: Props.string,
  link: Props.string.isRequired,
};
