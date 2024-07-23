'use client'

import { useState } from "react";
import axios from "axios";


export default function Login(){
    
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:5000/login', {email, password})
            alert('Good')
        } catch (error){
            alert('No good')
        }
    }

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <h1>Login page</h1>
            <div>
                <label>Email:</label>
                <input 
                type="text"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input type="text"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <button type="submit"></button>
        </form>

        </>
    )

}