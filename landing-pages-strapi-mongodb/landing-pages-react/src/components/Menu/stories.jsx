import React from 'react';
import { Menu } from '.';

export default {
  title: 'string',
  component: Menu,
  args: {
    children: 'Menu',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
