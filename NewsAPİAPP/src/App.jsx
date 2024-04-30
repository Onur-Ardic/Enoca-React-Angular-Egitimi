import './App.css'
import Header from './components/header/Header'
import NewsCardWrapper from './components/news/newscardwrapper'
import NewsCarousel from './components/slider/slider'

function App() {
  return (
    <>
      <Header />
      <NewsCarousel />
      <NewsCardWrapper />
    </>
  )
}

export default App
