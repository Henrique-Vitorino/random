import React from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Colors } from '../../pages/Colors'
import { Home } from '../../pages/Home'
import { Typing } from '../../pages/typing'
import './styles.css'

export const Nav = (props) => {
  return (
    <Router>
      <nav className="nav">
      <Link to='/'>Home</Link>
      <Link to='/colors'>Colors</Link>
      <Link to='/typing'>Typing</Link>
      </nav>
      <Switch>
        <Route path="/typing"><Typing/></Route>
        <Route path="/colors"><Colors/></Route>
        <Route path="/"><Home/></Route>
      </Switch>
    </Router>
  )
}
