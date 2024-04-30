import './Header.css'
import NavbarHeader from './navbar'

const Header = () => {
  return (
    <>
      <div className="header font-mono">
        <div className="container">
          <div className="header-top-wrapper">
            <h3>Onur Ardıç</h3>

            <div className="input-area">
              <select name="country" id="country" onChange={}>
                <option value="TR">Türkiye</option>
                <option value="US">Amerika</option>
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
