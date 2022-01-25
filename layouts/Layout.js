import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='max-width-container' style={{ padding: '50px 30px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
