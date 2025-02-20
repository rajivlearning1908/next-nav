// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './main.module.css';

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Simulate authentication API request
        if (user === 'user' && password === 'password') {
            // Store the auth token (this could be a JWT or session token)
            document.cookie = 'auth_token=your_token_here; path=/; secure';

            // Redirect to the dashboard
            router.push('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.heading}>Login</h1>
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Username"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className={styles.input}
                        />
                    </div>
                    {error && <p>{error}</p>}
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
}
