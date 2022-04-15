import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Paleta } from '../../components/Paleta'

export const Colors = () => {

  const [paletas, setPaletas ] = useState([
    {cores:["000","0ffefe"], locked:false},
    {cores:["000"], locked:false},
    {cores:["000"], locked:false},
  ])

  useEffect(() => {
   generateColors()
  },[] )
  useEffect(() => {
   console.log(paletas)
  },[paletas] )

  const generateColors = () =>{
    let newPaleta = [{},{},{}]

    paletas.filter((paleta)=>paleta.locked===true).map((lockedPaleta,i)=>{
      // console.log(lockedPaleta)
      newPaleta[paletas.indexOf(lockedPaleta)]=lockedPaleta
    })

    paletas.filter((paleta)=>paleta.locked===false).map((unlockedPaleta,i)=>{
      console.log(unlockedPaleta)
      let cores=[]
      for(let k=0;k<5;k++){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        cores.push(randomColor)
      }
      newPaleta[paletas.indexOf(unlockedPaleta)]={cores:cores,locked:false}
    }

    )
    setPaletas(newPaleta)
    }

    const changeLockStatus = (index) =>{
      let copyPaletes = [...paletas]
      copyPaletes[index].locked = !copyPaletes[index].locked 
      setPaletas(copyPaletes)
    }

  return (
    <div>
      <Header generateColors={generateColors}/>
      {paletas.map((paleta,i)=>(
        <Paleta cores={paleta.cores} key={i} lock={paleta.locked} changeLockStatus={()=>changeLockStatus(i)}></Paleta>
      )
      )}
    </div>
  )
}
