import React from 'react';
import { NavLink } from '.';
import links from './mock';

export default {
  title: 'string',
  component: NavLink,
  args: {
    links: links,
  },
  argsTypes: {
    links: { type: '' }
  }
};
export const Template = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  );
};
