import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

const Menu = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: Props.node.isRequired,
};

export default Menu;
