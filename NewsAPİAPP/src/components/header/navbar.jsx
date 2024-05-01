import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'
import { getTechnologyNews, getHealthNews, getSporNews } from '../../redux/NewsSlice'

function NavbarHeader() {
  const dispatch = useDispatch()

  const fetchTechnologyApi = async () => {
    await dispatch(getTechnologyNews())
  }

  const fetchHealthApi = async () => {
    await dispatch(getHealthNews())
  }

  const fetchSportsApi = async () => {
    await dispatch(getSporNews())
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="#action1">Anasayfa</Nav.Link>
          <Nav.Link href="#action2">Hakkımda</Nav.Link>

          <button className="text-start " onClick={fetchTechnologyApi}>
            Teknoloji Haberleri
          </button>
          <button className="text-start " onClick={fetchHealthApi}>
            Sağlık Haberleri
          </button>
          <button className="text-start " onClick={fetchSportsApi}>
            Spor Haberleri
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHeader
