import './App.css'
import Header from './components/header/Header'
import NewsCard from './components/news/newscard'
import NewsCarousel from './components/slider/slider'

function App() {
  return (
    <>
      <Header />
      <NewsCarousel />
      <NewsCard />
    </>
  )
}

export default App
