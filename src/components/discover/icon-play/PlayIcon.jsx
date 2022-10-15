import { AiFillPlayCircle } from 'react-icons/ai';
export default function PlayIcon({hover}) {
  return (
    <div className={`play ${hover ? 'icon' : ''}`}>
        <AiFillPlayCircle size={50} />
    </div>
  );
}