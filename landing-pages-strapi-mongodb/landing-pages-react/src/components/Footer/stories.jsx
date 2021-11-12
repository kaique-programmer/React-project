import React from 'react';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/kaique-programmer">By Kaique Oliveira</a></p>`,
  },
};
export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};