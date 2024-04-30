import './Header.css'
import NavbarHeader from './navbar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCountry } from '../../redux/NewsSlice'
const Header = () => {
  const [countryValue, setCountryValue] = useState('tr')

  const dispatch = useDispatch()

  const onchangeCountry = (e) => {
    setCountryValue(e.target.value)
  }

  const a = dispatch(setCountry(countryValue))
  console.log(a)

  return (
    <>
      <div className="header font-mono">
        <div className="container">
          <div className="header-top-wrapper">
            <h3>Onur Ardıç</h3>

            <div className="input-area">
              <select name="country" id="country" onChange={onchangeCountry}>
                <option value="tr">Türkiye</option>
                <option value="us">Amerika</option>
                <option value="gb">İngiltere</option>
              </select>
              <input type="text" placeholder="Arama" />
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
