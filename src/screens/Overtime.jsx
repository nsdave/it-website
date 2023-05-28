import '../styles/Overtime.scss'
import { BsInstagram, BsTwitter, BsFacebook, BsTiktok } from 'react-icons/bs'

const Overtime = () => {
  return (
    <div className='overtime' >

      <div className='overtime__left' >
        <div>
          <BsInstagram />
        </div>
        <div>
          <BsTwitter />
        </div>
        <div>
          <BsFacebook />
        </div>
        <div>
          <BsTiktok />
        </div>
      </div>

      <div className='overtime__right' >
        <p>Shoes</p>
        <p>About</p>
        <p>Design</p>
      </div>
    </div>
  )
}

export default Overtime