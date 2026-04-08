import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) {
                throw new Error("Login failed. Please check your credentials.");
            }

            const data = await res.json();
            console.log("Login successful:", data);

            // Store token if provided
            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            // Navigate to dashboard
            navigate("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
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

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-row">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" className="show-password">Show</button>
                </div>
                <button type="submit" className="primary-btn" disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                </button>
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