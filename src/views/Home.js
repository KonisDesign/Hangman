import React from 'react'
import Header from '../components/Header'
import Hangman from '../components/Hangman'
import Answer from '../components/Answer'
import Keyboard from '../components/Keyboard'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <div className='game-container'>
                <Hangman />
                <Answer />
            </div>
            <Keyboard />
            <Footer />
        </>
    )
}
