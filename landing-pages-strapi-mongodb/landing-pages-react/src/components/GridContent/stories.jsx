import React from 'react';
import { GridContent } from '.';

export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    children: 'GridContent',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
