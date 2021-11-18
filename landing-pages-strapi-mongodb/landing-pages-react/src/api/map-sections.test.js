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
      "__component": "sections.section-grid",
      "_id": "616b70f90b9d62214f5f88b7",
      "description": "abc",
      "title": "Gallery",
      "text_grid": [],
      "image_grid": [
        {
          "_id": "616b70fb0b9d62214f5f88c5",
          "__v": 0,
          "image": {
            "_id": "616b6f030b9d62214f5f88ad",
            "name": "http://source.unsplash.com/random/360x360?r=2",
            "alternativeText": "abc",
            "caption": "Medicines",
            "hash": "360x360_r_2_4eda1a7ad6",
            "ext": "",
            "mime": "image/jpeg",
            "size": 16.66,
            "width": 360,
            "height": 360,
            "url": "a.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_2_4eda1a7ad6",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
                "hash": "thumbnail_360x360_r_2_4eda1a7ad6",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 5.48,
                "path": null,
                "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430722/thumbnail_360x360_r_2_4eda1a7ad6.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_2_4eda1a7ad6",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "616b70fb0b9d62214f5f88c5"
            ],
            "createdAt": "2021-10-17T00:32:03.064Z",
            "updatedAt": "2021-10-17T00:40:28.694Z",
            "__v": 0,
            "id": "616b6f030b9d62214f5f88ad"
          },
          "id": "616b70fb0b9d62214f5f88c5"
        },
        {
          "_id": "616b70fb0b9d62214f5f88c6",
          "__v": 0,
          "image": {
            "_id": "616b6f040b9d62214f5f88b2",
            "name": "http://source.unsplash.com/random/360x360?r=5",
            "alternativeText": "Car",
            "caption": "Car",
            "hash": "360x360_r_5_5268f508b7",
            "ext": "",
            "mime": "image/jpeg",
            "size": 28.44,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430722/360x360_r_5_5268f508b7.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_5_5268f508b7",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=5",
                "hash": "thumbnail_360x360_r_5_5268f508b7",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 6.16,
                "path": null,
                "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430723/thumbnail_360x360_r_5_5268f508b7.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_5_5268f508b7",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "616b70fb0b9d62214f5f88c6"
            ],
            "createdAt": "2021-10-17T00:32:04.880Z",
            "updatedAt": "2021-10-17T00:40:28.704Z",
            "__v": 0,
            "id": "616b6f040b9d62214f5f88b2"
          },
          "id": "616b70fb0b9d62214f5f88c6"
        },
        {
          "_id": "616b70fb0b9d62214f5f88c7",
          "__v": 0,
          "image": {
            "_id": "616b6f040b9d62214f5f88b1",
            "name": "http://source.unsplash.com/random/360x360?r=6",
            "alternativeText": "Palm trees",
            "caption": "Palm trees",
            "hash": "360x360_r_6_855496cae1",
            "ext": "",
            "mime": "image/jpeg",
            "size": 19.93,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430722/360x360_r_6_855496cae1.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_6_855496cae1",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=6",
                "hash": "thumbnail_360x360_r_6_855496cae1",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 4.93,
                "path": null,
                "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430723/thumbnail_360x360_r_6_855496cae1.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_6_855496cae1",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "616b70fb0b9d62214f5f88c7"
            ],
            "createdAt": "2021-10-17T00:32:04.457Z",
            "updatedAt": "2021-10-17T00:40:28.711Z",
            "__v": 0,
            "id": "616b6f040b9d62214f5f88b1"
          },
          "id": "616b70fb0b9d62214f5f88c7"
        },
        {
          "_id": "616b70fb0b9d62214f5f88c8",
          "__v": 0,
          "image": {
            "_id": "616b6f040b9d62214f5f88b0",
            "name": "http://source.unsplash.com/random/360x360?r=1",
            "alternativeText": "Buildings around",
            "caption": "Buildings around",
            "hash": "360x360_r_1_d3b02dd43a",
            "ext": "",
            "mime": "image/jpeg",
            "size": 26.25,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430721/360x360_r_1_d3b02dd43a.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_1_d3b02dd43a",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                "hash": "thumbnail_360x360_r_1_d3b02dd43a",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 6.26,
                "path": null,
                "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430723/thumbnail_360x360_r_1_d3b02dd43a.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_1_d3b02dd43a",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "616b70fb0b9d62214f5f88c8"
            ],
            "createdAt": "2021-10-17T00:32:04.410Z",
            "updatedAt": "2021-10-17T00:40:28.722Z",
            "__v": 0,
            "id": "616b6f040b9d62214f5f88b0"
          },
          "id": "616b70fb0b9d62214f5f88c8"
        },
        {
          "_id": "616b70fb0b9d62214f5f88c9",
          "__v": 0,
          "image": {
            "_id": "616b6f040b9d62214f5f88af",
            "name": "http://source.unsplash.com/random/360x360?r=4",
            "alternativeText": "Woman framing for photo",
            "caption": "Woman framing for photo",
            "hash": "360x360_r_4_6d088f43f9",
            "ext": "",
            "mime": "image/jpeg",
            "size": 24.71,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430721/360x360_r_4_6d088f43f9.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_4_6d088f43f9",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=4",
                "hash": "thumbnail_360x360_r_4_6d088f43f9",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 6.6,
                "path": null,
                "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430723/thumbnail_360x360_r_4_6d088f43f9.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_4_6d088f43f9",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "616b70fb0b9d62214f5f88c9"
            ],
            "createdAt": "2021-10-17T00:32:04.058Z",
            "updatedAt": "2021-10-17T00:40:28.771Z",
            "__v": 0,
            "id": "616b6f040b9d62214f5f88af"
          },
          "id": "616b70fb0b9d62214f5f88c9"
        },
        {
          "_id": "616b70fb0b9d62214f5f88ca",
          "__v": 0,
          "image": {
            "_id": "616b6f030b9d62214f5f88ae",
            "name": "http://source.unsplash.com/random/360x360?r=3",
            "alternativeText": "Photographic camera",
            "caption": "Photographic camera",
            "hash": "360x360_r_3_c06e8044e4",
            "ext": "",
            "mime": "image/jpeg",
            "size": 5.46,
            "width": 360,
            "height": 360,
            "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430720/360x360_r_3_c06e8044e4.jpg",
            "provider_metadata": {
              "public_id": "360x360_r_3_c06e8044e4",
              "resource_type": "image"
            },
            "formats": {
              "thumbnail": {
                "name": "thumbnail_http://source.unsplash.com/random/360x360?r=3",
                "hash": "thumbnail_360x360_r_3_c06e8044e4",
                "ext": "",
                "mime": "image/jpeg",
                "width": 156,
                "height": 156,
                "size": 1.73,
                "path": null,
                "url": "https://res.cloudinary.com/dsn2fcx0c/image/upload/v1634430722/thumbnail_360x360_r_3_c06e8044e4.jpg",
                "provider_metadata": {
                  "public_id": "thumbnail_360x360_r_3_c06e8044e4",
                  "resource_type": "image"
                }
              }
            },
            "provider": "cloudinary",
            "related": [
              "616b70fb0b9d62214f5f88ca"
            ],
            "createdAt": "2021-10-17T00:32:03.254Z",
            "updatedAt": "2021-10-17T00:40:28.837Z",
            "__v": 0,
            "id": "616b6f030b9d62214f5f88ae"
          },
          "id": "616b70fb0b9d62214f5f88ca"
        }
      ],
      "metadata": {
        "background": false,
        "_id": "616b70fe0b9d62214f5f88e7",
        "name": "Gallery",
        "section_id": "gallery",
        "__v": 0,
        "id": "616b70fe0b9d62214f5f88e7"
      },
      "__v": 2,
      "id": "616b70f90b9d62214f5f88b7"
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
