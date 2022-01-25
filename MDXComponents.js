import Image from 'next/image';
import styles from './styles/Markdown.module.css';

const MDXComponents = {
  p: (props) => <p {...props} className={styles.p} style={{ color: 'red' }} />,
  Image: (props) => <Image {...props} className={styles.img} />,
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export default MDXComponents;
