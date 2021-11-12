import React from 'react';
import mockLinks from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';
import { GridText }from '../../components/GridText';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} />
      <GridText {...gridMock} />
    </>
  ),
  links: mockLinks,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Footer test</p>',
}
