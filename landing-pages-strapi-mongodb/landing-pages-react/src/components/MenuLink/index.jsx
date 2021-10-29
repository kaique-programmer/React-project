import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';

  return  (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  )
}

MenuLink.propTypes = {
  children: Props.node.isRequired,
  link: Props.string.isRequired,
  newTab: Props.bool,
}
