import css from './SignUp.module.css';

export default function SignUp() {
    return (
        <section className={css.main}>
            <div className={`${css.inner} max-width`}>
                <div className={css.content}>
                    <h2>Get early access today</h2>
                    <p>
                        It only takes a minute to sign up and our free starter tier is extremely
                        generous. If you have any questions, our support team would be happy to help
                        you.
                    </p>
                </div>
                <div className={css.form}>
                    <input className='shadow' placeholder='email@example.com'></input>
                    <button className='button button-primary shadow'>Get Started For Free</button>
                </div>
            </div>
        </section>
    );
}
