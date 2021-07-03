import css from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={css.main}>
            <div className={css.brand}>
                <img src='/logo.svg' />
            </div>
            <div className={css.row}>
                <div className={css.column}>
                    Phone: +1-543-123-4567
                    <br />
                    <br />
                    example@fylo.com
                </div>

                <div className={css.column}>
                    <a>About Us</a>
                    <br />
                    <br />
                    Jobs
                    <br />
                    <br />
                    Press
                    <br />
                    <br />
                    Blog
                </div>
                <div className={css.column}>
                    Contact Us
                    <br />
                    <br />
                    Terms
                    <br />
                    <br />
                    Privacy
                </div>
                <div className={css.column}>facebook twitter instagram</div>
            </div>
        </footer>
    );
}
