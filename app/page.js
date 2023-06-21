"use client";
import React, { useState } from 'react';
import './globals.css';

export default function Home() {
  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');
  const [confirmMyPassword, setMyConfirmPassword] = useState('');

  const handleMySubmission = (e) => {
    e.preventDefault();
  
    fetch('http://localhost:4000/api/submitForm', { 
      method: 'POST',
      body: JSON.stringify({ email: myEmail, password: myPassword, confirmPassword: confirmMyPassword }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setMyEmail("");
          setMyPassword("");
          setMyConfirmPassword("");
        }
        return response.json();
      })
      .then((data) => {
        alert(JSON.stringify(data.message)); 
      })
      .catch((error) => {
        console.error(error); 
        alert('An error occurred. Please try again.'); 
      });
  };
  
  return (
    <div className="flex flex-col text-white items-center justify-center h-screen bg-gray-900">

      <p className = 'pb-14 font-bold text-2xl'>Instructions for the form</p>
      <p>1. Make sure your password contains atleast 6 characters</p>
      <p className = 'pb-24'>2. Your email must contain the domain "educative.io"</p>
      <form className="rounded-lg w-full max-w-md p-8 bg-gray-700">

        <label htmlFor="email" className="text-gray-200">
          Add your Email here
        </label>

        <input
          type="text"
          placeholder="e.g. i@educative.io"
          required
          value={myEmail}
          onChange={(e) => setMyEmail(e.target.value)}
          name="email"
          className="w-full px-4 py-2 mb-4 bg-gray-900 rounded-md border border-gray-400 text-gray-100 focus:outline-none focus:border-gray-500"
        />

        <label htmlFor="password" className="text-gray-200">
        Add your Password here
        </label>

        <input
          type="password"
          placeholder="e.g. *********"
          required
          value={myPassword}
          onChange={(e) => setMyPassword(e.target.value)}
          name="password"
          className="w-full px-4 py-2 mb-4 bg-gray-900 border border-gray-400 rounded-md text-gray-100 focus:outline-none focus:border-gray-500"
        />

        <label htmlFor="confirmPassword" className="text-gray-200">
        Confirm Password here
        </label>

        <input
          type="password"
          placeholder="e.g. *********"
          required
          value={confirmMyPassword}
          onChange={(e) => setMyConfirmPassword(e.target.value)}
          name="confirmPassword"
          className="w-full px-4 py-2 mb-4 bg-gray-900 border border-gray-400 rounded-md text-gray-100 focus:outline-none focus:border-gray-500"
        />

        <button
          type="submit"
          onClick={handleMySubmission}
          className="w-full py-2 px-4 bg-gray-800 rounded-md text-gray-100 hover:bg-gray-600 focus:outline-none"
        >
          Submit Form in Next.js!
        </button>

      </form>
    </div>
  );
}
