import './App.css';
//import Lesson from './Lesson/Lesson';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Whyus from './pages/Whyus';
import Teams from './pages/Teams';
import Newsletter from './pages/Newsletter';


function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Services />
     <Whyus />
     <About />
     <Teams />
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
