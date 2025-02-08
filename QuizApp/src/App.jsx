import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QuizQuestion } from './Pages/QuizQuestion'
import { Start } from './Pages/Start'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/> }/>
          <Route path='/quiz' element={<QuizQuestion/> }/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
