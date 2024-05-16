import { useState } from 'react'
import TextField from './components/ui/TextField'
import './App.css'
import Button from './components/ui/Button'
import InputSection from './components/inputs/InputSection'
import OperationSection from './components/operations/OperationSection'
function App() {
  const [inputState, setInputState] = useState('');
  const [todos,setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
		setInputState(e.target.value);
	};

  const handleEditTodo = (index) => {
    setInputState(todos[index]);
    setEditIndex(index);
  };
  const handleAddOrEditTodo = () => {
   
    if (inputState.trim() !== '') {
      if (editIndex !== null) {
        // Edit existing todo
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? inputState : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
      setTodos([...todos, inputState]);
      
      }
      setInputState('');
    }
  }
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  return (
    <>
      <h1>Todo app</h1>
      <InputSection 
          inputs={inputState} 
          handleInputChange={handleInputChange}
      />
      <OperationSection 
        onAddOrEdit={handleAddOrEditTodo}
        onDelete={handleDeleteAll}
        isEditing={editIndex !== null}
      />
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
    
  )
}

export default App
