import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <h1>Vite + React</h1>
      <Person></Person>
    </>
  )
}

function Person(){
  const name = 'Abdur';
  const age = 21;
  const person = {name: 'Abdul', age: 23
  }
  return (
    // <h3>I am a {name}. I am {age} years old.</h3>
    <h3>I am a {person.name}. I am {person.age} years old.</h3>
  )
}
export default App
