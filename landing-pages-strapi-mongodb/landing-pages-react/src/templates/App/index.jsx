import React from 'react';
import Heading from '../../components/Heading';
import { NavLinks } from '../../components/NavLinks';
import * as Styled from './styles';

function Home() {
  return (
    <div>
      <Styled.Wrapper>
        <NavLinks />
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
