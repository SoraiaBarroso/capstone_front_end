import NavBar from './components/NavBar';
import Main from './components/Main'

function App() {
  return (
    // React fragment
    <>
      <meta name="description" content="Restaurant Little Lemon, make a reservation or watch our menu and order online"/>
      <meta name="og:title" content="Little Lemon restaurant"/>
      <meta name="og:description" content="Restaurant Little Lemon, make a reservation or watch our menu and order online"/>
      <meta name="og:image" content="capstone-front-end\src\assets\Logo.svg"/>
      <NavBar />
      <main>
        <Main />
        <section>
          another section
        </section>
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;
