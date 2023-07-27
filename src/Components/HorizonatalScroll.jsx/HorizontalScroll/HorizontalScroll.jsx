import './HorizontalScroll.css';

const HorizontalScroll = ({ body_part, setSelectedBodyPart,setIsSearched}) => {

  const handleClick = () => {
    setSelectedBodyPart(body_part);
    setIsSearched(false)
  };
  
  return (
    <div className="HorizontalScroll" onClick={handleClick}>
      <img src="https://jsm-gym.netlify.app/static/media/gym.6e701417c428e2fbc267.png" alt="" />
      <h2>{body_part}</h2>
    </div>
  );
};

export default HorizontalScroll;
