import React from 'react';
import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quidem natus laudantium quisquam omnis aspernatur tempora minus odio ullam.
    Nostrum, exercitationem iste velit repellat fugit error.
    Quam, blanditiis eos. Sit, quo!,`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
