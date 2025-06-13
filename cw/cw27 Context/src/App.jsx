
import { useState } from 'react';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Navbar from './components/Navbar';
import DashboardPage from './pages/Dashboard';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar setPage={setPage}/>
      {page === 'home' && <HomePage/>}
      {page === 'about' && <AboutPage/>}
      {page === 'dashboard' && <DashboardPage/>}
    </>
  )
}

export default App
