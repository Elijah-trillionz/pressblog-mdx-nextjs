import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostItem = ({ post }) => {
  return (
    <div className={styles.postItem}>
      <h3>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
      <p>{post.data.excerpt}</p>
      <Link href={`/posts/${post.slug}`}>Read more</Link>
    </div>
  );
};

export default PostItem;
