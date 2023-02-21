import { Routes, Route } from 'react-router-dom'
import MemoTest from './pages/memoTest/MemoTest'
import styles from './App.module.scss'
import Home from './pages/Home/Home'
import TicTacToe from './pages/TicTacToe/TicTacToe'

function App() {
  

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/memotest' element={<MemoTest/>}/>
        <Route path='/tictactoe' element={<TicTacToe/>}/>
      </Routes>
    </div>
  )
}

export default App
