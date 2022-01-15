import slugify from 'slugify';

function createHeader(title: string, level: number) {
  return {
    title,
    level,
    slug: slugify(title, {
      lower: true,
      remove: /[\d\.]/,
    }),
  };
}

export type PageHeaderKind = keyof typeof pageHeaders;

export const pageHeaders = {
  title: createHeader('Styled Components & TypeScript', 1),
  installation: createHeader('1. Installing the types', 2),
  props: createHeader('2. Custom props', 2),
  theme: createHeader('3. Typing the theme', 2),
  cssProp: createHeader('3.1. Making use of css prop', 3),
  media: createHeader('3.2. Media templates', 3),
  conclusion: createHeader('4. Conclusion', 2),
} as const;
