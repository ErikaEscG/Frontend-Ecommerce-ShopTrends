import './App.css'
import AnnouncementBar from './components/announcementBar/announcementBar'
import Cards from './components/cards/cards'
import SearcherBar from './components/searcherBar/seacherBar'
import NavegationBar from './components/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SigninForm from './components/signin/signin'
import LoginForm from './components/login/login'
import { TextInputProvider } from './context/searchContex'
import { CategoryProvider } from './context/navbarContext'

function App () {
  return (
    <>
      <CategoryProvider>
        <TextInputProvider>
          <Router>
            <AnnouncementBar />
            <SearcherBar />
            <NavegationBar />

            <Routes>
              <Route exact path='/' element={<Cards />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signin' element={<SigninForm />} />
              <Route exact path='/' element={<Cards />} />

            </Routes>
          </Router>
        </TextInputProvider>
      </CategoryProvider>
    </>
  )
}

export default App
