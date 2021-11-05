import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import GridTwoColumn from '.';

import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn {...mock}/>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
