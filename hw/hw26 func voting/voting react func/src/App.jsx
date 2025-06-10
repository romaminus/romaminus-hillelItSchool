
import './App.css'
import { Smile } from './components/Smile';
import { Winner } from './components/Winner';
import { imageMap } from './path/path';
import './App.css'

function App() {

  return (
      <>
        <div className='container'>
          <h1>vote for the highest emoticon</h1>
          <div className='smile-container' >
            <Smile src={imageMap.close} id='close'></Smile>
            <Smile src={imageMap.venus} id='venus'></Smile>
            <Smile src={imageMap.thunder} id='thunder'></Smile>
            <Smile src={imageMap.mars} id='mars'></Smile>
            <Smile src={imageMap.open} id='open'></Smile>
          </div>
          <Winner id='crown'></Winner>
        </div>
      </>
    )
}

export default App
