import React from 'react';
import { SectionBackground } from '.';

export default {
  title: 'string',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nostrum molestias sequi voluptatum sunt itaque consequatur
          cum ducimus debitis praesentium doloremque, commodi, iusto
          nobis, voluptate atque unde ut quis nesciunt delectus.</p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
