import React from 'react';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return <GridContent
    title="error 404"
    html="<p>The page you find, not found. <a href='/'>Click here to back</a></p>"
  />
};
