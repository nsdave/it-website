import Card from '../components/Card'
import '../styles/SecondQuater.scss'

const SecondQuater = () => {
  return (
    <div className='secondquater' id='shoes' >
      <div className='secondquater__top' >
        <h1>Latest Shoes</h1>
        <div />
      </div>

      <div
      className='secondquater__bottom'
      >
        <Card 
        image={'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg'}
        />
        <Card 
        image={'https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'}
        />
        <Card 
        image={'https://images.unsplash.com/photo-1584735174914-6b1272458e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}
        />
      </div>
    </div>
  )
}

export default SecondQuater