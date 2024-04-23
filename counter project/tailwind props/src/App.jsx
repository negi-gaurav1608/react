import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"Gaurav",
    age:21
  }
  let newarr=[1,2,3]
  return (
    <>

    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>

    <Card channel="chai aur code" myArr="array" name="gaurav"/>
    <Card myArr={myobj} name="abhinav" channel="love babbar"/>
    <Card myArr={newarr} name="shubham" />

      
    </>
  )
}

export default App
