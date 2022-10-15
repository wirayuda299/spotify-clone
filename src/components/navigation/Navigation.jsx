import {Link} from 'react-router-dom';
import {AiFillHome, AiFillPlusSquare, AiOutlineSearch} from 'react-icons/ai';
import {BsCollectionPlayFill, BsFillBookmarkHeartFill} from 'react-icons/bs';
import logo from '../../assets/images/logo/spotify-1.svg';
import {useStateContext} from '../../../context/StateContext';
import { Nav, Navbar, NavbarBrand, Container } from 'react-bootstrap';

export default function Navigation() {
  const {navbar, hide} = useStateContext();

  return (
    <Navbar className='min-vh-100 d-flex flex-column' ref={navbar}>
      <Container fluid className='navbar__container d-block'>
        <NavbarBrand as='div'>
          <Link to='/' > 
            <img src={logo} alt='spotify' width={129} height={40} />
          </Link>
        </NavbarBrand>
        <Nav className='flex-column ps-2'>
          <li className='nav-item'>
            <Link to='/' className='nav-link text-white'>
              <AiFillHome className='icon' />
              <span className='ms-2'>Home</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link text-white'>
              <AiOutlineSearch className='icon' />
              <span className='ms-2'>Search</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link text-white'>
              <BsCollectionPlayFill className='icon' />
              <span className='ms-2'>Your Library</span>
            </Link>
          </li>

          <li className='nav-item mt-4'>
            <Link to='/' className='nav-link text-white'>
              <AiFillPlusSquare className='icon' />
              <span className='ms-2'>Create playlist</span>
            </Link>
          </li>
          <li className='nav-item border-bottom pb-4'>
            <Link to='/' className='nav-link text-white'>
              <BsFillBookmarkHeartFill className='icon' />
              <span className='ms-2'>Liked Songs</span>
            </Link>
          </li>
        </Nav>
      </Container>
    </Navbar>
  );
}
