import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = (limit) => {
  const dir = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
    withFileTypes: true,
  });

  const posts = dir
    .map((file) => {
      if (file.name.endsWith('.js')) return; // just ignoring javascript files

      const slug = file.name.replace(/.mdx$/, '');
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'posts', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);
      return { data, content, slug };
    })
    .filter((post) => post);

  if (limit) {
    const filteredPosts = posts.filter((post, index) => {
      return index + 1 <= limit;
    });

    return filteredPosts;
  }

  return posts;
};

export default getPosts;
