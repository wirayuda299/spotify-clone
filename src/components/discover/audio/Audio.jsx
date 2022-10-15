import { Button, Container, ProgressBar } from "react-bootstrap";
import { FaPlay, FaPause } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";


export default function Audio({ src,setisPlaying,isPlaying, audio }) {
  function playSong(src) {
    setCurrentSong(src)
    setisPlaying(true)
    audio.current.play()

  }
  function pauseSong() {
    setisPlaying(false)
    audio.current.pause()
  }
  
  return (
    <Container fluid className='audio-container fixed-bottom p-3 active'>
      <Container className='d-flex flex-column justify-content-between align-items-center'>
        <h6>Song title</h6>
        
        <audio className='w-100'>
          <source src={src} type="audio/mpeg" ref={audio} />
        </audio>

        <div className='w-100 p-2'>
          <ProgressBar variant="dark" now={55} />
        </div>

        <div>
          <Button variant="dark"><BiSkipPrevious/></Button>
          {
            isPlaying ? <Button variant="dark" onClick={() => playSong(src)}><FaPause /></Button>
              : <Button variant="dark" onClick={pauseSong}><FaPlay /></Button>
          }
          <Button variant="dark"><BiSkipNext/></Button>
        </div>

      </Container>

    </Container>
  );
}