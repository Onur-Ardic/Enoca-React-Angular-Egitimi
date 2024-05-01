import './news.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectNews, newsAllİtem } from '../../redux/NewsSlice'
import { useEffect } from 'react'

const NewsCardWrapper = () => {
  const dispatch = useDispatch()
  const news = useSelector(selectNews)

  useEffect(() => {
    dispatch(newsAllİtem())
  }, [])
  return (
    <div className="news-card-wrapper">
      <h1 className="text-center">Haberler </h1>
      <div className="container">
        <div className="card-wrapper mt-5">
          {news.articles?.map((article) => (
            <div className="card mx-auto" key={article.title}>
              {article.urlToImage && (
                <div className="card-top">
                  <img src={article.urlToImage} alt="newscard" className="img-fluid" />
                </div>
              )}

              <div className="card-content">
                <h2>{article.author}</h2>
                <p>{article.title}</p>
              </div>
            </div>
          ))}

          {/* <div className="card">
            <div className="card-top">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Habert%C3%BCrk_TV_logo.svg/1200px-Habert%C3%BCrk_TV_logo.svg.png"
                alt="newscard"
                className="img-fluid"
              />
            </div>

            <div className="card-content">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NewsCardWrapper
