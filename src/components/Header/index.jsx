import React from 'react'
import './styles.css'

export const Header = (props) => {
  return (
    <div className="header">
      <button className="btn" onClick={props.generateColors}>Random Palette</button>
    </div>
  )
}
