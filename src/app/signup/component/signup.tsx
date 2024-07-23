'use client'

import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/signup', { email, password });
            alert('Signup Successful!');
        } catch (error) {
            alert('Signup Failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Signup</button>
        </form>
    );
}
