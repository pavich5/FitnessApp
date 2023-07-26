import './ExcerciseCart.css'
import {Link} from 'react-router-dom'
const ExcerciseCart = ({excercise}) => {
  return (
    <Link to={`/${excercise.id}`}>
      <div className="ExcerciseCart" key={excercise.id}>
        <p>{excercise.name}</p>
        <button>{excercise?.target}</button>
        <img src={excercise.gifUrl} alt="" /> 
    </div>
    </Link>
  )
}

export default ExcerciseCart