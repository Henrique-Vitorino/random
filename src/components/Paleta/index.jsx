import { Cor } from '../Cor'
import './styles.css'
import {ReactComponent as Locked} from '../../Assets/locked.svg'
import {ReactComponent as Unlocked} from '../../Assets/unlocked.svg'
import { useState } from 'react'
import lockImage from '../../Assets/lock.png'
import unLockImage from '../../Assets/unlock.png'

export const Paleta = (props) => {
  return (
    <div className="flex">
      {props.cores?.map((cor)=>(  
        <Cor hex ={`#`+cor} key={cor}></Cor>
      )
      )}
      <div onClick={()=>props.changeLockStatus()}>

      {props.lock?
      <img src={lockImage} alt="locked" style={{width: 48, height: ''}} className="lock-btn"></img>  
      : 
      <img src={unLockImage} alt="unlocked" style={{width: 48, height: ''}} className="lock-btn"></img> 
    }
      </div>
    </div>
  )
}
