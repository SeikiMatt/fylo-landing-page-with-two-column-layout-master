import css from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={css.main}>
            <div className={`${css.inner} max-width`}>
                <img className={css.brand} src='/logo.svg' />
                <nav className={css.links}>
                    <a>Features</a>
                    <a>Team</a>
                    <a>Sign In</a>
                </nav>
            </div>
        </div>
    );
}
