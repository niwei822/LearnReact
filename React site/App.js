import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/main';
import './index.css';

export default function App() {
    return (
        <div className='container'>
            <Navbar />
            <Main />
        </div>
    )
}