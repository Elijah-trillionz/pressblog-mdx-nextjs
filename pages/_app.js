import '../styles/globals.css';
import { TolgeeProvider } from '@tolgee/react';
import { UI } from '@tolgee/ui';

function MyApp({ Component, pageProps }) {
  return (
    <TolgeeProvider
      filesUrlPrefix='i18n/'
      apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
      apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
      ui={process.env.REACT_APP_TOLGEE_API_KEY ? UI : undefined}
      loadingFallback='Loading...'
    >
      <Component {...pageProps} />
    </TolgeeProvider>
  );
}

export default MyApp;
