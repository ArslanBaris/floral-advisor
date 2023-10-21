import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mantine/core/styles.css';
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
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My awesome app</title>
        <ColorSchemeScript />
      </Head>
      <MantineProvider theme={theme}>
        <AppProvider initialLanguage={selectedLanguage} >
          <Component {...pageProps} />
        </AppProvider>
      </MantineProvider>

    </>
  )
}
