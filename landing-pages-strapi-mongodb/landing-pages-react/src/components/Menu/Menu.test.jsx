import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
}

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu links={linkMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
  });
});
