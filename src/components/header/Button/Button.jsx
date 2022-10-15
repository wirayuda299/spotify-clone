import { Button } from "react-bootstrap";
export default function Buttons() {
  return (
    <div className='header-btn'>
      <Button variant='outline-light' className='mx-2 header-btn__daftar text-white fw-semibold rounded rounded-pill'>
        Daftar
      </Button>

      <Button className='btn btn-light rounded fw-semibold rounded-pill header-btn__login'>
        Masuk
      </Button>
    </div>
  );
}
