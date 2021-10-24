import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false
}) => {
  return  (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  )
}

Heading.propTypes = {
  children: Props.node.isRequired,
  colorDark: Props.bool.isRequired,
  as: Props.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: Props.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
  uppercase: Props.bool.isRequired,
}

export default Heading;
