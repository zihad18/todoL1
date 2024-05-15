import { useState } from 'react'
import TextField from './components/ui/TextField'
import './App.css'
import Button from './components/ui/Button'

function App() {
  const [inputState, setInputState] = useState("");

  const handleInputChange = (e) => {
		setInputState(e.target.value);
	};

  return (
    <>
      <h1>Todo app</h1>
      <TextField 
          inputs={inputState} 
          handleInputChange={handleInputChange}
      />
      <Button text="create"/>
    </>
    
  )
}

export default App
