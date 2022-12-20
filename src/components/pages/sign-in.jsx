import React from 'react';
import Footer from '../UI/footer.jsx'
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';



const SignIn = () => {
    return (
        <div>
            <main className="sign-in-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-in-form" autocomplete="off">
                    <h2 className="sign-in-form__title">Sign In</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" minLength = "3" maxLength={20} 
                        type="password" autocomplete="new-password" required />
                    </label>
                    <button className="button" type="submit">Sign In</button>
                </form>
                <span>
                    Already have an account?
                <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
                </span>
            </main>
            <Footer />
        </div>
    )
}

export default SignIn;