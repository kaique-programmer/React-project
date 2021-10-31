import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

const Menu = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: Props.node.isRequired,
};

export default Menu;
