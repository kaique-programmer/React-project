import {
  mapSections,
  mapSectionTwoColumns,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid'
      }
    ]);

    const withNoComponent = mapSections([{}]);
    expect(withNoComponent).toEqual([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid'
      }
    ]);
  });

  it('should test section.section-grid with no text_grid or images_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      }
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
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
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        url: 'a.svg',
      },
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
      title: "abc",
      content: 'abc',
      metadata: {
        background: false,
        section_id: "intro",
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('sections.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('abc');
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
      __component: "sections.section-grid",
      description: "abc",
      title: "My grid",
      text_grid: [
        {
          title: "Text 1",
          description: "abc",
        },
        {
          title: "Text 2",
          description: "abc",
        },
        {
          title: "Text 3",
          description: "abc",
        }
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: "grid-one",
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Text 1');
    expect(data.grid[0].description).toBe('abc');
  });

  it('should map grid text', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: "sections.section-grid",
      description: "abc",
      title: "Gallery",
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: "abc",
            url: "a.jpg",
          },
        },
      ],
      metadata: {
        background: false,
        name: "Gallery",
        section_id: "gallery",
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImage).toBe('a.jpg');
    expect(data.grid[0].alternativeText).toBe('abc');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
});
