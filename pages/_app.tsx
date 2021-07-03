import type { AppProps } from 'next/app';
import '../styles/globals.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel='icon' type='image/png' sizes='32x32' href='./images/favicon-32x32.png' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
