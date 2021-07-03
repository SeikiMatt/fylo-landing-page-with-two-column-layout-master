import css from './SignUp.module.css';

export default function SignUp() {
    return (
        <section className={css.main}>
            <h2>Get early access today</h2>
            <p>
                It only takes a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our support team would be happy to help you.
            </p>
            <input placeholder='email@example.com'></input> <button>Get Started For Free</button>
        </section>
    );
}
