import '../styles/globals.css'
import { AuthProvider, useAuth } from '../context/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
