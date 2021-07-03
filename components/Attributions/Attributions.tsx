import css from './Attributions.module.css';

export default function Footer() {
    return (
        <section className={css.main}>
            Challenge by{' '}
            <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
                Frontend Mentor
            </a>
            . Coded by{' '}
            <a href='https://github.com/SeikiMatt' target='_blank' rel='noreferrer'>
                SeikiMatt
            </a>
            .
        </section>
    );
}
