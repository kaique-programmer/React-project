import React from 'react';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'the text is dark',
    light: false,
  },
  argsTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'primaryBackground'
    }
  }
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: 'white',
  },
};

Dark.args = {
  children: 'the text is light',
  light: true,
};
