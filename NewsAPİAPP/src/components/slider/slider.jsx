import Carousel from 'react-bootstrap/Carousel'
import './slider.css'
import { fetchNewsByCategory, selectNews } from '../../redux/NewsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function NewsCarousel() {
  const dispatch = useDispatch()
  const news = useSelector(selectNews)

  useEffect(() => {
    dispatch(fetchNewsByCategory('general'))
  }, [])

  return (
    <div className="carousel">
      <div className="container">
        <Carousel data-bs-theme="dark">
          {news.articles?.slice(0, 3).map((article) => (
            <Carousel.Item key={article.title}>
              {article.urlToImage ? (
                <img className="d-block w-100" src={article.urlToImage} alt="First slide" />
              ) : (
                <img className="d-block w-100" src="lastnews.jpeg" alt="First slide" />
              )}
              <Carousel.Caption>
                <h5 className="text-white fw-bold bg-black opacity-50">{article.author}</h5>
                <p className="text-white fw-bold bg-black opacity-50">{article.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default NewsCarousel
