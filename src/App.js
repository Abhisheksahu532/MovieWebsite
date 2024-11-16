import React from 'react'
import PopularMovie from './pages/PopularMovie'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import MovieDetailPage from './pages/MovieDetailPage'
import SearchMovie from './pages/SearchMovie'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popular' element={<PopularMovie/>}/>
        <Route path='/movie/:id' element={<MovieDetailPage/>}/>
        <Route path='/movie/:query' element={<SearchMovie/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App