import Layout from '../src/components/0-layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const componentToRender = <Component {...pageProps} />;
  return <Layout component={componentToRender} />;
}

export default MyApp
