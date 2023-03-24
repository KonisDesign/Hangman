import React, { useState, useMemo } from 'react'
import Header from '../components/Header'
import Hangman from '../components/Hangman'
import Answer from '../components/Answer'
import Keyboard from '../components/Keyboard'
import Footer from '../components/Footer'
import { Dictionary } from '../data/data'

export default function Home() {
    
    const randomNumber = useMemo(() => Math.floor(Math.random() * 130), []);
    const result = useMemo(() => Dictionary[randomNumber].toUpperCase().split(""), []);
    const [answer, setAnswer] = useState(Array(result.length).fill(''))
    const [level, setLevel] = useState(0)

    return (
        <>
            <Header />
            <Hangman level={level}/>
            <Answer answer={answer} level={level}/>
            <Keyboard result={result} answer={answer} setAnswer={setAnswer} level={level} setLevel={setLevel}/>
            <Footer />
        </>
    )
}
