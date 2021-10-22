import React from 'react';
import Props from 'props-types';
import * as Styled from './styles';

const Heading = ({ children }) => {
  return  <Styled.Title>{children}</Styled.Title>;
}

Heading.propTypes = {
  children: Props.node.isRequired,
}

export default Heading;
