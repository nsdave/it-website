import '../styles/Card.scss'

const Card = ({ image }) => {
  return (
    <div className='card' >
        <img src={image}  />
        <div />
        <h4>
        There are many variations of 
        passages of Lorem Ipsum available, 
        but the majority have suffered 
        alteration in some form, by injected 
        humour
        </h4>
    </div>
  )
}

export default Card