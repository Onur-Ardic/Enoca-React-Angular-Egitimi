import './Header.css'
import NavbarHeader from './navbar'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountry, setSearch, fetchNewsByCategory } from '../../redux/NewsSlice'

const Header = () => {
  const [countryValue, setCountryValue] = useState('tr')
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()
  const selectedCountry = useSelector((state) => state.news.country)

  useEffect(() => {
    dispatch(fetchNewsByCategory('general'))
  }, [selectedCountry])

  const searchText = (e) => {
    e.preventDefault()
    dispatch(setSearch(searchValue))
  }

  const onchangeCountry = (e) => {
    const selectedCountry = e.target.value
    setCountryValue(selectedCountry)
    dispatch(setCountry(selectedCountry))
  }

  return (
    <>
      <div className="header font-mono">
        <div className="container">
          <div className="header-top-wrapper">
            <h3 className="d-none d-md-block">Onur Ardıç</h3>
            <div className="input-area d-flex flex-column flex-md-row">
              <select name="country" id="country" onChange={onchangeCountry} value={countryValue}>
                <option value="tr">Türkiye</option>
                <option value="us">Amerika</option>
                <option value="gb">İngiltere</option>
              </select>
              <form onSubmit={searchText}>
                <input
                  type="text"
                  placeholder="Arama"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="header-bottom-wrapper border-bottom">
          <div className="container py-0">
            <NavbarHeader />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
