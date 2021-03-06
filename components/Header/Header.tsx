import css from './Header.module.css';

export default function Header() {
    return (
        <header className={css.main}>
            <div className={`${css.inner} max-width`}>
                <div className={css.content}>
                    <h1 className={css.title}>
                        All your files in one secure location, accessible anywhere.
                    </h1>
                    <p className={css.flavorText}>
                        Fylo stores your most important files in one secure location. Access them
                        wherever you need, share and collaborate with friends, family, and
                        co-workers.
                    </p>
                    <input
                        className={`input input-primary ${css.input}`}
                        placeholder='Enter your email...'
                    ></input>
                    <button className={`button button-primary ${css.button}`}>Get Started</button>
                </div>
                <div className={css.illustration}>
                    <img src='illustration-1.svg' />
                </div>
            </div>
        </header>
    );
}
