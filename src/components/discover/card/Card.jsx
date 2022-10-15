import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import PlayIcon from '../icon-play/PlayIcon';

export default function Cards({ item }) {

  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  
  return (
    <Col md='4' lg='3' className='discover__col' >
    <Card className='border-0 discover__card position-relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PlayIcon hover={hover}/>
      <Card.Img src={item.images?.coverart}
        className='rounded'
        alt={item.title}
        title={item.title} />
      <Card.Body>
        <Card.Title className='text-white text-truncate fw-semibold h6' title={item.title}>
          {item.title}
        </Card.Title>
        <Card.Text className='text-muted text-truncate'>{item.subtitle}</Card.Text>
      </Card.Body>
      </Card>
    </Col>
  );
}
