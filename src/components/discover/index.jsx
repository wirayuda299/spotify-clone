import { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loader from './Loader/Loader';
import { useStateContext } from '../../../context/StateContext';
import Cards from './card/Card';
import Audio from './audio/Audio';


export default function Discover() {
  const { loading, topChart } = useStateContext();
  const [isPlaying, setisPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState('')

  const audio = useRef()
  console.log(topChart)



  return (
    <Container fluid>
      <Container>
        <div>
          <h1 className='text-white fw-bold py-4'>Discover</h1>
        </div>
        <Row className='g-3 discover'>
          {
            loading ? <Loader /> : (
            topChart.map((item) => {
              return <Cards item={item} key={item.key} />
            })
            )
          }
          <Audio audio={audio} isPlaying={isPlaying} setisPlaying={setisPlaying} src='' />
        </Row>
      </Container>
    </Container>
  );
}
