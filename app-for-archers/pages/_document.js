import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap" rel="stylesheet" />
        <link rel="icon" href="../public/favicon.ico" />
        <script src="https://kit.fontawesome.com/4c93254228.js" crossorigin="anonymous"></script>
      </Head>
      {/* <Head /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
