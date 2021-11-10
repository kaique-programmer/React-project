import React from 'react';
import { GoTop } from '.';

export default {
  title: 'string',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  );
};
