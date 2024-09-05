import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  const [data, setdata] = useState(false)
  const [Inp, setInp] = useState(false)
  const [menuStatus, setmenuStatus] = useState(false)
  const [modalStatus, setmodalStatus] = useState(false)

  const changeData = () => {
    setdata(!data)
  }

  const Increament = () => {
    setcount(count + 1)
  }

  const Decreament = () => {
    setcount(count - 1)
  }

  return (
    <>


      {/* Counter App Code */}



      <div>
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button className='btn' onClick={() => Increament()}>Increament</button>
        <button className='btn' onClick={() => Decreament()}>Decreament</button>
      </div>
      {/* Counter App Code */}


      {/* Text Show Hide   */}
      <div>
        <button onClick={() => changeData()}>
          {
            (data) ? "Hide" : "Show"
          }
        </button>
        {
          (data) ? <p className='design'>My Name Is Muhammad Waqas</p> : ""
        }
      </div>

      {/* Text Show Hide   */}


      {/* Password show and Hide  */}
      <div>
        <input className='inp' type={(Inp) ? "text" : "password"} /> <br />
        <button onClick={() => setInp(!Inp)}>
          {
            (Inp) ? "Hide" : " Show"
          }
        </button>
      </div>
      {/* Password show and Hide  */}

      {/* Menu Bar show hide */}
      <div className={` menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {/* Menu Bar show hide */}


      {/* popup show and background change */}
      <button className='en' onClick={() => setmodalStatus(!modalStatus)}>Enquire Now</button>

      <div className={`modaloverlay ${modalStatus ? 'modalShow' : ''}`}></div>
      <div className={`ModalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
        <form className='formdesign'>
          <h3>Enquiry Now <span onClick={() => setmodalStatus(!modalStatus)}>&times;</span></h3>
          <hr />
          <p>Feel free to contact us if you need any assistance, any help or another question.</p>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="phone" placeholder='Phone Number' />
          <textarea placeholder='Message'></textarea>
          <button>SEND</button>
        </form>
      </div>

      <button className='myMenu' onClick={() => setmenuStatus(!menuStatus)}>
        {
          (menuStatus) ? <span>&times;</span> : <span>&#9776;</span>
        }
      </button>


      {/* popup show and background change */}




    </>
  )
}

export default App
