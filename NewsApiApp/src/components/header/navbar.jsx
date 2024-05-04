import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'
import { fetchNewsByCategory } from '../../redux/NewsSlice'
import { NavLink } from 'react-router-dom'

function NavbarHeader() {
  const dispatch = useDispatch()

  const fetchNews = (category) => {
    dispatch(fetchNewsByCategory(category))
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <NavLink to="/" exact activeClassName="active" className="nav-link">
            Anasayfa
          </NavLink>
          <NavLink to="/about" exact activeClassName="active" className="nav-link">
            Hakkımda
          </NavLink>
          <button className="text-start" onClick={() => fetchNews('technology')}>
            Teknoloji Haberleri
          </button>
          <button className="text-start" onClick={() => fetchNews('health')}>
            Sağlık Haberleri
          </button>
          <button className="text-start" onClick={() => fetchNews('sports')}>
            Spor Haberleri
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
