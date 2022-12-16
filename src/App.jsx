 
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import 'animate.css';
import { Analytics } from '@vercel/analytics/react';

import {InitialPage} from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<InitialPage />} />
        </Routes>
      </BrowserRouter>

      <Analytics />
    </>
  );
}

export default App;
