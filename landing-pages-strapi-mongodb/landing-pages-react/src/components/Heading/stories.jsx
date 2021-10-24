import React from 'react';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'the text is dark',
  },
  argsTypes: {
    children: { type: 'string' },
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
  colorDark: false,
};
