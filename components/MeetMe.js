import Image from 'next/image';
import styles from '../styles/Home.module.css';

const MeetMe = () => {
  return (
    <div>
      <Image
        src='photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='john doe avatar'
        width={150}
        height={150}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>John Doe</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </div>
  );
};

export default MeetMe;
