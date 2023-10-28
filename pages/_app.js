import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/result.css'
import '@/styles/categories.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mantine/core/styles.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { AppProvider } from "../Context/AppContext"
import { useState } from 'react';
import Head from 'next/head';
const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

export default function App({ Component, pageProps }) {

  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  return (
    <>

      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css"
        />
        <title>My awesome app</title>
        <ColorSchemeScript />
      </Head>
      <MantineProvider theme={theme}>
        <AppProvider initialLanguage={selectedLanguage}>
          <Component {...pageProps} />
        </AppProvider>
      </MantineProvider>

    </>
  )
}
