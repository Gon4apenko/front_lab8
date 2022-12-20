import React from 'react';
import Footer from '../UI/footer.jsx'
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';



const SignUp = () => {

    return (
        <div>
            <main className="sign-up-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-up-form" autocomplete="off">
                    <h2 className="sign-up-form__title">Sign Up</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Full name</span>
                        <input name="full-name" type="text" required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" minLength = "3" maxLength={20}
                        type="password" autocomplete="new-password" required />
                    </label>
                    <button className="button" type="submit">Sign Up</button >
                </form>
                <span>
                    Already have an account?
                    <Link to="/sign-in" className="sign-up-form__link">Sign In</Link>
                </span>
            </main>
            <Footer />
        </div>
    )
}

export default SignUp;