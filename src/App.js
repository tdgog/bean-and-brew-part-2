import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Menu from "./pages/menu";

function App() {
  return <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/menu' element={<Menu />} />
      </Routes>
  </BrowserRouter>
}

export default App;
