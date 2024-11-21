import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputCreate = () => {
  const [newTask, setNewTask] = useState('');
  const NAVIGATE = useNavigate();

  const HANDLE_SUBMIT = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask }),
      });
      NAVIGATE('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-container" onSubmit={HANDLE_SUBMIT}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Insert task here"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default InputCreate;