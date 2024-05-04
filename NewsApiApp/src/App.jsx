import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import NewsCardWrapper from './components/news/newscardwrapper'
import NewsCarousel from './components/slider/slider'
import About from './components/pages/about'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NewsCarousel />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <NewsCardWrapper />
    </Router>
  )
}

export default App
