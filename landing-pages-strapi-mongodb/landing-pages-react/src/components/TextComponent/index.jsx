import React from 'react';
import Props from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />
  );
};

TextComponent.propTypes = {
  children: Props.node.isRequired,
};
