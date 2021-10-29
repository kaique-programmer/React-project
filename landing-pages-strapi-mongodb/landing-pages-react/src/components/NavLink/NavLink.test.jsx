import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLink } from '.';
import mock from './mock';

describe('<NavLink />', () => {
  it('should render the links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
});
