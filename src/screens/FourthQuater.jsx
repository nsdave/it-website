import '../styles/FourthQuater.scss'
import po from '../assets/design.jpeg'

const FourthQuater = () => {
  return (
    <div className='fourthquater' id='design' >
      <div className='fourthquater__text' >
        <h1>My design inspiration</h1>
      </div>

      <div className='fourthquater__image' >
        <img src={po} />
      </div>
    </div>
  )
}

export default FourthQuater