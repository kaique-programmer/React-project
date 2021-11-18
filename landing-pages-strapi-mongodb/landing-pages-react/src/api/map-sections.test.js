import { mapSections, mapSectionTwoColumns, mapSectionContent, mapTextGrid } from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImage).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056178',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617b',
        name: 'contact',
        section_id: 'contact',
        __v: 0,
        id: '602fdf2d540c00269e05617b',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImage).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: "sections.section-content",
      _id: "616b70f90b9d62214f5f88b5",
      title: "news coverage and some surprises",
      content: 'abc',
      metadata: {
        background: false,
        _id: "616b70f90b9d62214f5f88bc",
        name: "Intro",
        section_id: "intro",
        __v: 0,
        id: "616b70f90b9d62214f5f88bc"
      },
      __v: 1,
      id: "616b70f90b9d62214f5f88b5"
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('sections.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe('abc');
  });

  it('should map section content without data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map grid text', () => {
    const data = mapTextGrid({
      "__component": "sections.section-grid",
      "_id": "616b70f90b9d62214f5f88b6",
      "description": "abc",
      "title": "My grid",
      "text_grid": [
        {
          "_id": "616b70fa0b9d62214f5f88bd",
          "title": "Text 1",
          "description": "abc",
          "__v": 0,
          "id": "616b70fa0b9d62214f5f88bd"
        },
        {
          "_id": "616b70fa0b9d62214f5f88be",
          "title": "Text 2",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          "__v": 0,
          "id": "616b70fa0b9d62214f5f88be"
        },
        {
          "_id": "616b70fa0b9d62214f5f88bf",
          "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
          "title": "Text 3",
          "__v": 0,
          "id": "616b70fa0b9d62214f5f88bf"
        }
      ],
      "image_grid": [],
      "metadata": {
        "background": true,
        "_id": "616b70fd0b9d62214f5f88db",
        "name": "Grid-one",
        "section_id": "grid-one",
        "__v": 0,
        "id": "616b70fd0b9d62214f5f88db"
      },
      "__v": 2,
      "id": "616b70f90b9d62214f5f88b6"
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('sections.section-grid');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Text 1');
    expect(data.grid[0].description).toBe('abc');
  });

  it('should map grid text', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
});
