import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = (pageIndex) => {
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

  return filterPostsByPageIndex(createMultiplePosts(posts), pageIndex);
};

export const filterPostsByPageIndex = (posts, pageIndex) => {
  const postPerPage = 5;
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage;

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts.filter(
    (post, index) => index < totalPagePosts && index >= prevPagePosts
  );
};

export const createMultiplePosts = (posts) => {
  const multiplePosts = [];

  posts.forEach((post) => {
    for (let i = 0; i < 45; i++) {
      multiplePosts.push(post);
    }
  });

  return multiplePosts;
};
