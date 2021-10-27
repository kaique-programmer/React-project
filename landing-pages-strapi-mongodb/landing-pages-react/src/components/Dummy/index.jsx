import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

const dummy = ({ children }) => {
  return (
    <Styled.Container>
      <h1>dummy</h1>
    </Styled.Container>
  );
};

dummy.propTypes = {
  children: Props.node.isRequired,
};
export default dummy;
