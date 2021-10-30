import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import LogoLink from '.';

describe('<LogoLink />', () => {
  it(('should render text logo'), () => {
    renderTheme(<LogoLink link="#target" text="hello" />);
    expect(screen.getByRole('heading', { name: 'hello' })).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'hello'})).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="hello" srcImage="image.jpg" />);
    expect(screen.getByAltText('hello')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme (
      <LogoLink link="#target" text="hello" srcImage="image.jpg" />
    );
    expect(container.firstChild).toMatchSnapshot();
  })
});
