import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }
    return (
        <Form className={`${Classes.login}`} onSubmit={handleSubmit}>
            <TextInput
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
            />
            <TextInput
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                icon="lock"
            />

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don&apos;t have an account? <Link to="/signup">Signup</Link>{" "}
                instead.
            </div>
        </Form>
    );
}
