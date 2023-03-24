import React from 'react'

export default function Keyboard(props) {

  const check = (e) => {

    e.target.disabled = true

    let wrong = 0;
    const newAnswer = [...props.answer]

    for (let i = 0; i < props.result.length; i++) {
      if (e.target.id === props.result[i]) {
        newAnswer.splice(i, 1, e.target.id)
      } else {
        wrong++;
      }
    }
    if (wrong === props.result.length) {
      const newLevel = props.level + 1;
      if (newLevel >= 8) {
        for (let i = 0; i < props.result.length; i++) {
          newAnswer.splice(i, 1, props.result[i])
        }
        props.setAnswer(newAnswer)
      }
      props.setLevel(newLevel);
    } else {
      props.setAnswer(newAnswer)
      let good = 0;
      for (let i = 0; i < newAnswer.length; i++) {
        if (newAnswer[i] !== "") {
          good++;
        }
      }
      if (good === props.result.length) {
        const newLevel = -1
        props.setLevel(newLevel);
      }
    }
  }

  return props.level >= 8 || props.level === -1 ? (
    <div className='wl-container'>
      <button className='key-button' onClick={() => window.location.reload()}>Play again</button>
    </div>
  )
  :
  (
    <div className='keyboard-container'>
      {Array.from(Array(26), (_, i) => String.fromCharCode(65 + i)).map(letter => (
        <button className='key-button' key={letter} id={letter} onClick={(e) => check(e)}>{letter}</button>
      ))}
    </div>
  )
  
}
