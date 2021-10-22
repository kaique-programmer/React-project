import React from 'react';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: {type: 'string'},
  }
};

export const Template = (args) => <Heading {...args} />;
