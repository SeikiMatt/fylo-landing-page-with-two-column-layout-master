import css from './Testimonials.module.css';

export default function Footer() {
    return (
        <>
            <img className={css.curve} src='/bg-curve-mobile.svg' />
            <section className={css.main}>
                <div className={`${css.inner} max-width`}>
                    <div className={css.content}>
                        <h2>Stay productive, wherever you are</h2>
                        <p className={css.flavorText}>
                            Never let location be an issue when accessing your files. Fylo has you
                            covered for all of your file storage needs.
                            <br />
                            <br />
                            Securely share files and folders with friends, family and colleagues for
                            live collaboration. No email attachments required!
                            <br />
                            <br />
                            <a>See how Fylo works</a>
                        </p>
                        <div className={css.cardHolder}>
                            <div className={css.card}>
                                <p>
                                    <img src='/icon-quotes.svg' className={css.quotes} />
                                    <br />
                                    Fylo has improved our team productivity by an order of
                                    magnitude. Since making the switch our team has become a
                                    well-oiled collaboration machine.
                                </p>
                                <div className={css.author}>
                                    <img className={css.photo} src='/avatar-testimonial.jpg' />
                                    <div>
                                        <span className={css.authorName}>Kyle Burton</span>
                                        <br />
                                        <span className={css.authorSubtitle}>
                                            Founder & CEO, Huddle
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.illustration}>
                        <img src='illustration-2.svg' />
                    </div>
                </div>
            </section>
        </>
    );
}
