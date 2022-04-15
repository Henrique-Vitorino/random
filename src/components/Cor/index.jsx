import React from 'react'

export const Cor = (props) => {
  return (
    <div style={{margin:10}}>
      <div style={{backgroundColor:props.hex, width:'100px', height:'100px'}}>
      </div>
      <p style={{textAlign:'center', backgroundColor:'#ddd', marginTop:'0px'}}>{props.hex}</p>
    </div>
  )
}
