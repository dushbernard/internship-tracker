import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [fullName, setFullName] = useState("");
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
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, email, password })
            });

            if (!res.ok) {
                throw new Error("Registration failed. Please try again.");
            }

            const data = await res.json();
            console.log("Registration successful:", data);

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
            <h2>Join the system now — it’s free!</h2>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-row">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password (6+ characters)"
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" className="show-password">Show</button>
                </div>
                <button type="submit" className="primary-btn" disabled={loading}>
                    {loading ? "Creating account..." : "Agree & Join"}
                </button>
            </form>

            <p className="register-text">
                Already on LinkedIn? <a href="/login">Sign in</a>
            </p>
        </div>
    );
}

export default Register;