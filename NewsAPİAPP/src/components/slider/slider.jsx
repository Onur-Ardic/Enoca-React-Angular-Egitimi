import Carousel from 'react-bootstrap/Carousel'
import './slider.css'
import { newsAllİtem, selectNews } from '../../redux/NewsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function NewsCarousel() {
  const dispatch = useDispatch()
  const news = useSelector(selectNews)
  console.log(news)

  useEffect(() => {
    dispatch(newsAllİtem())
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

          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/8xSMAv3w1Sk/hq720_live.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAk723b8JRhRsnTYZwSEeakXJu0Q"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  )
}

export default NewsCarousel
