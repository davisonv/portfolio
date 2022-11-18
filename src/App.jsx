 
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import 'animate.css';

import {InitialPage} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<InitialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
