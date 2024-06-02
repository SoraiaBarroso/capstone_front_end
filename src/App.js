import NavBar from './components/NavBar';
import Main from './components/Main'
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Story from './components/Story';

import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <meta name="description" content="Restaurant Little Lemon, make a reservation or watch our menu and order online"/>
      <meta name="og:title" content="Little Lemon restaurant"/>
      <meta name="og:description" content="Restaurant Little Lemon, make a reservation or watch our menu and order online"/>
      <meta name="og:image" content="capstone-front-end\src\assets\Logo.svg"/>
      <NavBar />
      <main>
          <Main />
          {/* <Routes>
            <Route path='/' element={<Main />}></Route>
          </Routes> */}
          <Specials />
          <Testimonials/>
          <Story />
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;
