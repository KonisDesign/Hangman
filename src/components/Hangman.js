import React from 'react'

export default function Hangman(props) {

  const anim = {
    gap: 'calc(' + (100 - (props.level * 10)) + '% - 30%)',
  }

  const win = {
    gap: '0px',
    left: '-100%'
  }

  return props.level < 8 && props.level >= 0 ?(
    <div className='hangman-container' style={anim}>
      <img src={process.env.PUBLIC_URL + "/assets/walk.gif"} alt='hangman.png'/>
      <img src={process.env.PUBLIC_URL + "/assets/run.gif"} alt='hangman.png'/>
    </div>
  )
  : props.level >= 8 ?
  (
    <div className='hangman-container' style={anim}>
      <img src={process.env.PUBLIC_URL + "/assets/attack.gif"} alt='hangman.png'/>
      <img src={process.env.PUBLIC_URL + "/assets/death.gif"} alt='hangman.png'/>
    </div>
  )
  : 
  (
    <div className='hangman-container' style={win}>
      <img src={process.env.PUBLIC_URL + "/assets/leave.gif"} alt='hangman.png'/>
      <img src={process.env.PUBLIC_URL + "/assets/win.gif"} alt='hangman.png'/>
    </div>
  )
}
