import PostItem from '../../components/PostItem';
import styles from '../../styles/Home.module.css';
import Meta from '../../components/Meta';
import { useState } from 'react';

const index = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts((_posts) => [..._posts, ...posts]);
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1);
  };

  return (
    <div>
      <Meta title='Blog posts - PressBlog' />
      <p className={styles.desc}>All Posts</p>
      {filteredPosts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
      <button onClick={loadMorePosts} className={styles.button}>
        Load more
      </button>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch('http:localhost:3000/api/posts?page=1');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
