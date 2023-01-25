import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import '../sass/custom.scss';

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
