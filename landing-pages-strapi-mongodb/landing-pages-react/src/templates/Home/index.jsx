import React, { useEffect, useState } from 'react';
import { Base } from '../Base';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/pages/?slug=landing-page');
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };
    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />
  }

  if (data && !data.slug) {
    return <Loading />
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImage } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImage }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />
        }
      })}
    </Base>
  );
}

export default Home;
