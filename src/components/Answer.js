import React from 'react'

export default function Answer(props) {

  return props.level >= 8 ? (
    <div className='answer-container'>
      {props.answer.map((item, index) => (
        <h2 className='red' key={index}>{item}</h2>
      ))}
    </div>
  )
  :
  (
    <div className='answer-container'>
      {props.answer.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  )
}
