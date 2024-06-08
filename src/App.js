import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import BookingPage from './pages/BookinPage';

import {  Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <meta name="description" content="Restaurant Little Lemon, make a reservation or watch our menu and order online"/>
      <meta name="og:title" content="Little Lemon restaurant"/>
      <meta name="og:description" content="Restaurant Little Lemon, make a reservation or watch our menu and order online"/>
      <meta name="og:image" content="capstone-front-end\src\assets\Logo.svg"/>
      <NavBar />
      <main>
          <Routes>
            <Route path='/reservation' element={ <BookingPage /> }></Route>
            <Route path='/' element={ <MainPage /> }></Route>
          </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <Analytics/>
    </>
  );
}

export default App;
