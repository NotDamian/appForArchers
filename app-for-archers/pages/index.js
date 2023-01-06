import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Inter } from '@next/font/google'
import SectionOne from '../components/mainPageSectionOne'
import SectionTwo from '../components/mainPageSectionTwo'
import SectionThree from '../components/mainPageSectionThree'
import SectionJoin from '../components/mainPageJoin'

import mainPageStyle from '../styles/mainPageStyle.module.css'
import { useAuth } from '../context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>App For Archers</title>
        <meta name="description" content="App for Archers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">AppForArchers</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active" href="#section1">Dla trenerów
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#section2">Dla zawodników</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" href="#section3">FAQ</Link>
                </li>
              </ul>
              <div className='d-flex'>
                <button type="button" className="btn btn-success my-2 my-sm-0"><Link href="/login" className='LinkStyle'>Zaloguj się</Link></button>
              </div>

            </div>
          </div>
        </nav>
        <div className='headerTitle container mt-5 p-4 d-flex justify-content-around mx-20 mobile'>
          <div>
            <h1>
              {/* <!-- Green highlight effect --> */}
              <span className={mainPageStyle.highlight}>Dziennik łuczniczy</span>
              i wiele <br />
              <span className={mainPageStyle.highlight}>więcej</span>
            </h1>
            <p>Włącz appForArchers i zyskaj dziennik łuczniczy, który masz zawsze przy sobie. Koystaj
              na laptopie, w telefonie lub innym, dowolnym urządzeniu i miej go zawsze przy sobie!</p>
          </div>
          <div>
            <Image src="/archery-40738_960_720.png" alt="vector archer" height={300} width={300}
            />
          </div>
        </div>
      </header>

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionJoin />

      <footer className="footer mt-5 pt-4 d-flex flex-column justify-content-around mx-20 h-75 d-inline-block">
        {/* <!-- czesc footera --> */}
        <div className="container" >
          <ul className="navbar-nav me-auto d-flex flex-column">
            <li className="nav-item">
              <Link className="nav-link active" href="#section1">Dla trenerów
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="#section2">Dla zawodników</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="#section3">FAQ</Link>
            </li>
          </ul>
        </div>
        <h5>AppForArchers</h5>
        <p className="footerCopyright">&copy; Copyright by DS. AppForArchers</p>
      </footer>



    </>
  )
}
