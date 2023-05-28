import './App.css'
import By from './components/By'
import FirstQuater from './screens/FirstQuater'
import FourthQuater from './screens/FourthQuater'
import Overtime from './screens/Overtime'
import SecondQuater from './screens/SecondQuater'
import ThirdQuater from './screens/ThirdQuater'

function App() {

  return (
    <div className='app' >
      <FirstQuater />
      <SecondQuater />
      <ThirdQuater />
      <FourthQuater />
      <Overtime />
      <By />
    </div>
  )
}

export default App
