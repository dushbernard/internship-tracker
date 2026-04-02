function Register() {
    return (
        <div className="auth-container">
            <h2>Join LinkedIn now — it’s free!</h2>

            <form>
                <input type="text" name="fullName" placeholder="Full name" required />
                <input type="email" name="email" placeholder="Email" required />
                <div className="password-row">
                    <input type="password" name="password" placeholder="Password (6+ characters)" minLength={6} required />
                    <button type="button" className="show-password">Show</button>
                </div>
                <button type="submit" className="primary-btn">Agree & Join</button>
            </form>

            <p className="register-text">
                Already on LinkedIn? <a href="/login">Sign in</a>
            </p>
        </div>
    );
}

export default Register;