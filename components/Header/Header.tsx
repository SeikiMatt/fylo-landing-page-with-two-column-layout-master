import css from './Header.module.css';

export default function Header() {
    return (
        <header className={css.main}>
            <div className={`${css.inner} max-width`}>
                <div className={css.content}>
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>
                        Fylo stores your most important files in one secure location. Access them
                        wherever you need, share and collaborate with friends, family, and
                        co-workers.
                    </p>
                    <input placeholder='Enter your email...'></input>
                    <button>Get Started</button>
                </div>
                <div className={css.illustration}>
                    <img src='illustration-1.svg' />
                </div>
            </div>
        </header>
    );
}
