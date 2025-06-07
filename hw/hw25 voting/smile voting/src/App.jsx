
import smileClose from './img/smile-svgrepo-com (1).svg';
import smileOpen from './img/smile-svgrepo-com.svg';
import smileMars from './img/mars-gender-svgrepo-com.svg';
import smileThunder from './img/bolt-thunder-svgrepo-com.svg';
import smileCrown from './img/crown-svgrepo-com.svg';
import smileVenus from './img/venus-gender-svgrepo-com.svg';
import './App.css'
import { Smile } from './components/Smile';
import { Winner } from './components/Winner';
export const imageMap = {
  close: smileClose,
  venus: smileVenus,
  thunder: smileThunder,
  mars: smileMars,
  open: smileOpen,
  crown: smileCrown,
};

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
