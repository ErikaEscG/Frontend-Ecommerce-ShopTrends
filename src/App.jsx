import './App.css'
import AnnouncementBar from './components/announcementBar/announcementBar'
import Cards from './components/cards/cards'
import SearcherBar from './components/searcherBar/seacherBar'
import NavegationBar from './components/navbar/navbar'

function App () {
  return (
    <>
      <AnnouncementBar />
      <SearcherBar />
      <NavegationBar />
      <Cards />
    </>
  )
}

export default App
