import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';

describe('<NavLinks />', () => {
  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });
});
