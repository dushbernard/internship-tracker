import "../styles/main.css";

function Login() {
    return (
        <div className="auth-container">
            <h2>Sign in</h2>

            <div className="social-buttons">
                <button type="button" className="social-btn google">
                    <span className="icon">G</span>
                    Continue with Google
                </button>
                <button type="button" className="social-btn apple">
                    <span className="icon"></span>
                    Sign in with Apple
                </button>
            </div>

            <p className="social-disclaimer">
                By clicking Continue, you agree to LinkedIn’s
                <a href="#"> User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
            </p>

            <div className="or-divider">
                <span></span>
                <small>or</small>
                <span></span>
            </div>

            <form>
                <input type="email" name="email" placeholder="Email or phone" required />
                <div className="password-row">
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="button" className="show-password">Show</button>
                </div>
                <button type="submit" className="primary-btn">Sign in</button>
            </form>

            <div className="extra-actions">
                <label>
                    <input type="checkbox" name="remember" /> Keep me logged in
                </label>
                <a href="#" className="forgot">Forgot password?</a>
            </div>

            <p className="register-text">
                New to LinkedIn? <a href="/register">Join now</a>
            </p>
        </div>
    );
}

export default Login;