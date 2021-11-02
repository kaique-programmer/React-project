import React from 'react';
import Props from 'prop-types';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import NavLinks from '../NavLinks';

import * as Styled from './styles';

const Menu = ({ links = [], logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: Props.shape(LogoLink.propTypes).isRequired,
};

export default Menu;
