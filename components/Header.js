import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='max-width-container'>
        <h2>
          <Link href='/'>PressBlog</Link>
        </h2>
        <ul>
          <li>
            <Link href='/posts'>About</Link>
          </li>
          <li>
            <Link href='https://github.com/Elijah-trillionz/pressblog-mdx-nextjs'>
              GitHub Code
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
