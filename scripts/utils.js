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
    for (let i = 0; i < 5; i++) {
      multiplePosts.push(post);
    }
  });

  return multiplePosts;
};
