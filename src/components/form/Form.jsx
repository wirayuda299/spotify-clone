import { auth } from '../../utils/firebase';
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo/spotify-1.svg";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export default function Form() {

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => { 
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container fluid>
      <Container className='d-flex justify-content-center align-items-center min-vh-100 flex-column'>
        <Row className='justify-content-center mx-4'>
          <Col md='6'>
            <img className='img-fluid' src={logo} alt="" />
          </Col>
          <Col md='6'>
            <div>
              <h1 className='fw-bold text-center pb-5'>Mulai mendengarkan dengan akun Spotify gratis</h1>
              <div>
                <Button onClick={handleGoogleLogin} size='lg' variant='outline-success' className='w-100 py-2 text-white'>Sign-up with google</Button>
              </div>
            </div>
            
          </Col>       
       </Row>
      </Container>
      
    </Container>
  )
}