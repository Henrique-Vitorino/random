import React, { useEffect, useState } from 'react'
import {ReactComponent as Clock} from '../../Assets/clock.svg'
import './styles.css'
export const Timer = () => {
  const [time, setTime] = useState(10)
  const [resetVisible,setResetVisible] = useState(false)
  const [value,setValue] = useState("")
  const [venceu, setVenceu] = useState(false)
  const [numeros, setNumeros] = useState([])
  const [answer, setAnswer] = useState()
  const [message, setMessage] = useState()
  
  const setProblema = () => {
    let randomNumbers = []
    randomNumbers.push((Math.random()*10).toFixed(0))
    randomNumbers.push((Math.random()*10).toFixed(0))
    setNumeros(randomNumbers)
  }

  const problemaToString = () => {
    return (
      <p>{`${numeros[0]}+${numeros[1]} ?`}</p>
    )
  }
  var reset
  const countTimer = () =>{
    reset = setTimeout(() =>handleTime(),1000)
  }

  const handleTime = () =>{
    if(time>0 && !venceu)
    setTime(time-1)
    else if(!venceu){
      setResetVisible(true)
      setMessage("Voce perdeu")
    }
    else{
      setResetVisible(true)
      setMessage("Acertou miseravi")
    }
  }

  const checkAnswer = () =>{
    if(Number(value)===answer){
      setVenceu(true)
      setTime(time)
      clearTimeout(reset)
    }
  }

  useEffect(() => {
    setProblema()
  },[])

  useEffect(() => {
    setAnswer(Number(numeros[0])+Number(numeros[1]))
  },[numeros])

  useEffect(() => {
    countTimer()
  },[time])
 
  useEffect(() => {
    checkAnswer()
  },[value])
  
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className="clock">
        {message}
        {problemaToString()}
        <Clock/>
        {time}
      </div>
      
      <input focus type="text" value={value} onChange={(e)=>setValue(e.target.value)}></input>
   
      {
        resetVisible && 
        <button onClick={()=>
          {
          setResetVisible(false)
          setTime(10)
          setVenceu(false)
          setValue("")
          setProblema()
          setMessage("")
      }}>
        Reset Timer
      </button>
      }
    </div>
  )
}
