// import MeetMe from '../components/MeetMe.mdx';
import Link from 'next/link';
import getPosts from '../scripts/fileSystem';
import PostOutline from '../components/PostOutline';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';

const index = ({ posts }) => {
  return (
    <>
      <Meta title='PressBlog - Your one stop blog for anything React Native' />
      {/* <MeetMe /> */}
      <Link href='/about'>More about me</Link>

      <div className={styles.articleList}>
        <p className={styles.desc}>Newly Published</p>
        {posts.map((post, index) => (
          <PostOutline key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(20);

  return {
    props: {
      posts,
    },
  };
};
