import MeetMe from '../components/MeetMe.js';
import Link from 'next/link';
import getPosts from '../scripts/fileSystem';
import PostItem from '../components/PostItem';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';

const index = ({ posts }) => {
  return (
    <>
      <Meta title='PressBlog - Your one stop blog for anything React Native' />
      <MeetMe />
      <Link href='/about'>More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post, index) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(10);

  return {
    props: {
      posts,
    },
  };
};
