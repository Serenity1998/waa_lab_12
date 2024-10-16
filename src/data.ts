export interface Post {
  id: number;
  title: string;
  content: string;
}

export const posts: Post[] = [
  { id: 1, title: 'Zero to One', content: 'Looking to go from idea to market.' },
  { id: 2, title: 'PMF Accelerator', content: 'Looking to seek product market fit.' },
  { id: 3, title: 'Expansion Express', content: 'Looking to scale and optimise an existing product.' },
];
