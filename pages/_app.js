import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { AppProvider } from "../Context/AppContext"
import { useState } from 'react';
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {

  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  return (
    <MantineProvider theme={theme}>
       <AppProvider initialLanguage={selectedLanguage} >
      <Component {...pageProps} />
      </AppProvider>
    </MantineProvider>)
}
