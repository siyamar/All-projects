import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singers'
import BooksStores from './BooksStores'

function App() {
  const [count, setCount] = useState(0)

const actors = ['Sakib', 'Raj', 'Salman', 'Amir', 'Akib'];
const singers = [
  {id:1, name: 'Akil', age: 45},
  {id:2, name: 'Anil', age: 65},
  {id:3, name: 'Alil', age: 25},
  {id:4, name: 'Akib', age: 35},
]

const books = [
  {id:1, name: 'CSE', price: 145},
  {id:2, name: 'OOP', price: 650},
  {id:3, name: 'DLD', price: 225},
  {id:4, name: 'ACS', price: 350},
]


  return (
    <>
      <h1>Vite + React</h1>

      <BooksStores books={books}></BooksStores>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Explore core concepts"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="65k"></Device>
      <Device name="Mobile" price="15k"></Device>
      <Person></Person>
      <Student grade="7" score="89"></Student>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  console.log(props)
  return <h2>This is: {props.name} Price: {props.price}</h2>
}

function Person() {
  const person = {
    name: 'Ami',
    age: 21
  }
  return (
    <h3>I am {person.name}. I am {person.age} years old.</h3>
  )
}


// const {grade, score}={grade: '7', score:'89'}=destructing

function Student({ grade = 1, score = 0 }) {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid red',
    borderRadius: '10px'
  }

  return (
    // <div style={developerStyle}>
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid red',
      borderRadius: '10px'
    }}>
      <h5>Devo....</h5>
      <h3>Coding</h3>
    </div>
  )
}


export default App
