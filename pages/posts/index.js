import getPosts from '../../scripts/fileSystem';
import PostOutline from '../../components/PostOutline';
import styles from '../../styles/Home.module.css';
import Meta from '../../components/Meta';

const index = ({ posts }) => {
  return (
    <div>
      <Meta title='Blog posts - PressBlog' />
      <p className={styles.desc}>All Posts</p>
      {posts.map((post, index) => (
        <PostOutline key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(false);

  return {
    props: {
      posts,
    },
  };
};
