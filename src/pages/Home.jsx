import Header from '../components/header/index';
import Navigation from '../components/navigation/Navigation';
import Discover from '../components/discover';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container fluid className='d-flex'>
        <aside className='me-0'>
          <Navigation />
        </aside>
        <Container fluid className='px-0'>
          <Header />
          <Container fluid>
            <Discover />
          </Container>
        </Container>
      </Container>
    </>
  );
}
