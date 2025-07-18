import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import DashBoard from './pages/DashBoard';
import BoardList from './pages/BoardList';
import GalleryList from './pages/GalleryList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/dash' element={<DashBoard/>}>
            <Route path='board' element={<BoardList/>}/>
            <Route path='gallery' element={<GalleryList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
