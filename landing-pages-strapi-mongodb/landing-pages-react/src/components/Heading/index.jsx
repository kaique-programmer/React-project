import React from 'react';
import Props from 'props-types';
import * as Styled from './styles';

const Heading = ({ children, light = false }) => {
  return  <Styled.Title light={light}>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: Props.node.isRequired,
  light: Props.bool.isRequired,
}

export default Heading;
