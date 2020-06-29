import React, {useState, FormEvent} from 'react';
import api from './services/api'

function App() {
  const [value, setValue] = useState('');

  const handleShowTime = async (event: FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    const response = await api.get(`/time`);
    setValue(response.data);
  }

  return (
    <form onSubmit={handleShowTime}>
      <button type="submit">Click here!
      </button>
      <p>{value}</p>
    </form>
  );
}

export default App;
