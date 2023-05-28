import '../styles/FirstQuater.scss'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const FirstQuater = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='firstquater' >
      <div className='firstquater__case' >

        <section className='firstquater__top' >
          <h1>LO</h1>
          <div className='nav__screen' >
            <a href='#shoes' >Shoes</a>
            <a href='#about' >About</a>
            <a href='#design'  >Design</a>
          </div>

          <div className={'app__nav_smallscreen'} >
            <GiHamburgerMenu className={'nav_open'} onClick={() => setToggle(true)} />
            {toggle && (
                  <div className={'app__nav_smallscreen_overlay'} >
                      <RxCross2  className={'nav_close'} onClick={() => setToggle(false)} />
                      <ul className={'app__nav_smallscreen_list'} >
                          <li><a href='#shoes' onClick={() => setToggle(false)} >Shoes</a></li>
                          <li><a href='#about' onClick={() => setToggle(false)} >About</a></li>
                          <li><a href='#design' onClick={() => setToggle(false)} >Design</a></li>
                      </ul>
                  </div>
              )}
            </div>
        </section>

        <section className='firstquater__bottom' >
          <h1>LOMBOK</h1>
          <h4>A place that loves shoes</h4>
          <div />
        </section>

      </div>
    </div>
  )
}

export default FirstQuater