 
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from './pages/Inicio.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
