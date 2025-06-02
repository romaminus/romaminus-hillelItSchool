// import { useState } from 'react'
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Link from './components/LinkElement';
import Div from './components/Div';
import Section from './components/Section';
import Text from './components/Text';
import Image from './components/Image';
import Container from './components/Container';
import Button from './components/Button';
let exemple = `{
  "message": "ok",
  "result": {
    "films": "https://swapi.tech/api/films",
    "people": "https://swapi.tech/api/people",
    "planets": "https://swapi.tech/api/planets",
    "species": "https://swapi.tech/api/species",
    "starships": "https://swapi.tech/api/starships",
    "vehicles": "https://swapi.tech/api/vehicles"
  },
  "apiVersion": "1.0",
  "timestamp": "2025-06-01T19:04:00.834Z",
  "support": {
    "contact": "admin@swapi.tech",
    "donate": "https://www.paypal.com/donate/?business=2HGAUVTWGR5T2&no_recurring=0&item_name=Support+Swapi+and+keep+the+galaxy%27s+data+free%21+Your+donation+fuels+open-source+innovation+and+helps+us+grow.+Thank+you%21+%F0%9F%9A%80&currency_code=USD",
    "partnerDiscounts": {
      "saberMasters": {
        "link": "https://www.swapi.tech/partner-discount/sabermasters-swapi",
        "details": "Use this link to automatically get $10 off your purchase!"
      },
      "heartMath": {
        "link": "https://www.heartmath.com/ryanc",
        "details": "Looking for some Jedi-like inner peace? Take 10% off your heart-brain coherence tools from the HeartMath Institute!"
      }
    }
  },
  "social": {
    "discord": "https://discord.gg/zWvA6GPeNG",
    "reddit": "https://www.reddit.com/r/SwapiOfficial/",
    "github": "https://github.com/semperry/swapi/blob/main/CONTRIBUTORS.md"
  }
}`

function App() {
  return (
    <>
      <header className='header__menu fixed-top my-header-menu-bg-color'>
        <nav className='navbar navbar-expand-lg container'>
          <Link className="navbar-brand text-light" href="#" text='React SWAPI'></Link>
          <Div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link text-light'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light'>About</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-light'>Documentation</Link>
              </li>
            </ul>
          </Div>
        </nav>
      </header>
      <Div className='content-wrapper mt-5'>
        <Section className='description text-center py-5'>
          <Container>
            <h1 className="text-warning display-4 mb-3">SWAPI</h1>
            <Text className='text-warning fs-4'>The Star Wars API</Text>
            <Text className='text-warning fs-5 lh-base mx-auto' style={{ maxWidth: '800px' }}>"In my experience, there's no such thing as luck. Big changes are coming, and we must be prepared."</Text>
            <Text className='text-warning api-requests fs-4 fw-bold mt-4'>Over 3,000,000+ API requests served every day!</Text>
          </Container>
        </Section>
        <Section className='promo-block bg-dark py-4 mb-4 text-center'>
          <Container>
            <Div className='row align-items-center'>
              <Div className='col-md-6 text-md-start'>
                <Div className="row justify-content-center justify-content-md-start g-3">
                  <Div className='col-auto'>
                    <Text className="text-light mb-2">Get $10 Off!</Text>
                    <Image src={reactLogo} className='img-fluid saber-master-deal rounded cursor-pointer' alt='Saber Masters Deal'></Image>
                  </Div>
                  <Div className='col-auto'>
                    <Text className="text-light mb-2">Get $10 Off!</Text>
                    <Image src={viteLogo} className='img-fluid saber-master-deal rounded cursor-pointer' alt='Saber Masters Deal'></Image>
                  </Div>
                </Div>
              </Div>
              <Div className='col-md-6 text-md-end mt-4 mt-md-0'>
                <Text className="promo-text text-light fs-5 mb-3">Saving for a clone army, help if you can...</Text>
                <Link href='#' className="btn btn-warning fw-bold px-4 py-2 rounded">Donate</Link>
              </Div>
            </Div>
          </Container>
          <Div className="container-fluid mt-5 pt-5 pb-5 promo-block__container my-bg-dark-color">
            <Text className="text-light fs-6">All the Star Wars data you've ever wanted:</Text>
            <Text className="text-light fs-6 fw-bold">Planets, Spaceships, Vehicles, People, Films and Species</Text>
            <Text className="text-light fs-4">Now with The Force Awakens data!</Text>
          </Div>
        </Section>
        <Section className='try-it-now py-5 text-center'>
          <Container>
            <h2 className="display-5 mb-4 text-light">Try it now!</h2>
            <Div className="input-group mb-4 mx-auto" style={{ maxWidth: '800px' }}>
              <span className="input-group-text bg-secondary text-light border-secondary" id="basic-addon1">https://www.swapi.tech/api/</span>
              <input type="text" className="form-control  text-light border-secondary" placeholder="...try people/1, or select from below." aria-label="API endpoint" aria-describedby="button-addon2"></input>
              <Button className="btn btn-warning fw-bold" id="button-addon2">request</Button>
            </Div>
            {/* <Div className="row mb-5">
              <Div className='col-12'>
                <Text className='fs-5'>Planets, Spaceships, Vehicles, People, Films and Species</Text>
                <Text className='fs-5'>Now with The Force Awakens data!</Text>
              </Div>
            </Div> */}
            <Div className='external_advertising mt-5 mb-5 pt-4 pb-4 text-center rounded-3'>
              <Div className='ad-row d-flex justify-content-center justify-content-around flex-wrap mb-5'>
                <Div className='ad-item text-center'>
                  <Image src={viteLogo} alt='Bvlgari Aqva' className="img-fluid rounded"></Image>
                  <Div className='price fw-bold text-warning mt-2'>BGN 286</Div>
                </Div>
                <Div className='ad-item text-center'>
                  <Image src={reactLogo} alt='Dior Sauvage' className="img-fluid rounded"></Image>
                  <Div className='price fw-bold text-warning mt-2'>BGN 276</Div>
                </Div>
                <Div className='ad-item text-center'>
                  <Image src={viteLogo} alt='Wella Perfume' className="img-fluid rounded"></Image>
                  <Div className='price fw-bold text-warning mt-2'>BGN 18.86</Div>
                </Div>
                <Div className='ad-item text-center'>
                  <Image src={reactLogo} alt='YSL Black Opium' className="img-fluid rounded"></Image>
                  <Div className='price fw-bold text-warning mt-2'>BGN 109</Div>
                </Div>
                <Div className='ad-item text-center'>
                  <Image src={viteLogo} alt='Gucci Perfume' className="img-fluid rounded"></Image>
                  <Div className='price fw-bold text-warning mt-2'>BGN 37.58</Div>
                </Div>
              </Div>
              <Div className='ad-logo mt-3 text-center'>
                <Image src={reactLogo} alt='Makeup.bg Logo' className="img-fluid"></Image>
                <Text className='text-dark mt-1 fs-6'>Онлайн магазин Makeup.bg</Text>
              </Div>
            </Div>
            <Div className='result-block p-4 bg-dark rounded mx-auto' style={{ maxWidth: '800px', textAlign: 'left' }}>
              <Text className='text-light mb-3'>Result:</Text>
              <pre className="bg-dark-subtle text-dark p-3 rounded overflow-auto" style={{ maxHeight: '400px' }}><code>{exemple}</code></pre>
            </Div>
          </Container>
        </Section>
        <footer className='footer text-center py-4 text-light'>
          <Container>
            <Text className='fs-6 text-start'>Originially by Paul Hallett | Refactored and Maintained by Ryan Curtis ©2025</Text>
          </Container>
        </footer>
      </Div>
    </>
  )
}

export default App
