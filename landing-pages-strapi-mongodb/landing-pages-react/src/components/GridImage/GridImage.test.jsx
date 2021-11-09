import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';

describe('<GridImage />', () => {
  it('should render grid image', () => {
    renderTheme(<GridImage>Children</GridImage>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render grid image', () => {
    const { container } = renderTheme(<GridImage/>);
    expect(container).toMatchSnapshot();
  });
});
