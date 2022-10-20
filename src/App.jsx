import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <Product />
      </div>
      <Footer />
    </>
  )
}

export default App;