import React from 'react';
import Props from 'prop-types';
import MenuLink from '../MenuLink'
import * as Styled from './styles';

export const NavLink = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map(link => {
        <MenuLink key={link.link} {...link}/>
      })}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  links: Props.arrayOf(
    Props.shape({
      children: Props.node.isRequired,
      link: Props.string.isRequired,
      newTab: Props.bool,
    }),
  ).isRequired
};
