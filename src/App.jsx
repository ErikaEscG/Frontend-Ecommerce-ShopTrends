import './App.css'
import AnnouncementBar from './components/announcementBar/announcementBar'
import Cards from './components/cards/cards'
import SearcherBar from './components/searcherBar/seacherBar'
import NavegationBar from './components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signin from './components/signin/signin'
import Login from './components/login/login'

function App () {
  return (
    <>
      <Router>
        <AnnouncementBar />
        <SearcherBar />
        <NavegationBar />
        <Cards />
        <Routes>
          <Route path='/login' component={Login} />

          <Route path='/signin' component={Signin} />
        </Routes>
      </Router>
    </>
  )
}

export default App
