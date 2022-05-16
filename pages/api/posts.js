import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  createMultiplePosts,
  filterPostsByPageIndex,
} from '../../scripts/utils';

export default function handler(req, res) {
  const { page } = req.query;

  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'posts'), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'posts', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
    })
    .filter((post) => post);

  res
    .status(200)
    .json(filterPostsByPageIndex(createMultiplePosts(posts), page));
}
