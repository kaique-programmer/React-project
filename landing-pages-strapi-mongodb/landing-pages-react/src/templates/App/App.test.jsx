import React from 'react';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/dom';
import Home from '.';
import theme from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryBackground,
  });
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
