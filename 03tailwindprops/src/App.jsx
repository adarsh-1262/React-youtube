import { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>tailwid test</h1>
     <Card username="Adarsh Singh" btnText="Click Me"/>
     <Card username="Vipul Singh"/>
    </>
  )
}

export default App
