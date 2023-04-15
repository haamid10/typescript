import React ,{FC}from 'react'
import './App.css'
import {Person} from './Person'


const App: FC = () => {
  return (
    <div>
      <h1>Typescript</h1>
      <Person name='cabdixamiid' age={33} email='apdi33@gmail.com'/>
    </div>
  )
}

export default App
