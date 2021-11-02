import React from 'react';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'string',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImage: '',
    }
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
