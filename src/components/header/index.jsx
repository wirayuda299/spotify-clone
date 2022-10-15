import {HiUserCircle} from 'react-icons/hi';
import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useStateContext} from '../../../context/StateContext';
import Buttons from './Button/Button';
import { Container, Button } from 'react-bootstrap';

export default function Header() {
  const [login, setLogin] = useState(true);
  const {toggler} = useStateContext();

  return (
    <Container fluid className='border-bottom header d-flex justify-content-between align-items-center'>
      <Container>
        <div>
          <Button variant='outline-light' className='header-menu fs-3 border-0' onClick={toggler}>
            <GiHamburgerMenu />
          </Button>
        </div>
        <div className='d-none d-md-block'>
          {login ? <HiUserCircle size={40} /> : <Buttons />}
        </div>
      </Container>
    </Container>
  );
}
