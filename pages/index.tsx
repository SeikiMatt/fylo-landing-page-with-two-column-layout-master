import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Testimonials from '../components/Testimonials/Testimonials';
import SignUp from '../components/SignUp/SignUp';
import Footer from '../components/Footer/Footer';
import Attributions from '../components/Attributions/Attributions';

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                <title>Frontend Mentor | Fylo landing page with two column layout</title>
            </Head>
            <Navbar />
            <main>
                <Header />
                <Testimonials />
                <SignUp />
                <Footer />
                <Attributions />
            </main>
        </>
    );
}
