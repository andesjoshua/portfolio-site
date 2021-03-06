import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';
import {useEffect, useState} from 'react'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div className='home'>
        {loading ? <LoadingScreen /> : 
        <div>
          <section className='header'>
            <Header />
          </section>
          <section className='about'>
            <About />
          </section>
          <section className='projects'>
           <Projects />
          </section>
        </div>
        }
        
    </div>
     
  );
}

export default App;
