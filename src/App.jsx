import './App.css'
import AnnouncementBar from './components/announcementBar/announcementBar'
import Cards from './components/cards/cards'
import SearcherBar from './components/searcherBar/seacherBar'
import NavegationBar from './components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SigninForm from './components/signin/signin'
import LoginForm from './components/login/login'
import Cart from './components/cart/cart'

function App () {
  return (
    <>
      <Router>
        <AnnouncementBar />
        <SearcherBar />
        <NavegationBar />

        <Routes>
          <Route exact path='/' element={<Cards />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signin' element={<SigninForm />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
