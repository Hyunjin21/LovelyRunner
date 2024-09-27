import React, { useEffect, useRef } from 'react';
import './App.css';
import Loading from './gsap/loading';
import Main01 from './gsap/main01';
import Main02 from './gsap/main02';
import Main02fixed from './gsap/main02fixed';
import Main03 from './gsap/main03';
import Main03scroll from './gsap/main03scroll';
import Main03index from './gsap/main03index';
import Main04 from './gsap/main04';
import Main05 from './gsap/main05';
import Main06 from './gsap/main06';
import Main07 from './gsap/main07';
import Main08 from './gsap/main08';
import Main09 from './gsap/main09';

function App() {
  const headerRef = useRef(null);
  const fixedRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset; // Get the current scroll position
      const windowHeight = window.innerHeight; // Get the viewport height
      const targetPosition = 2 * windowHeight; // 200vh equivalent

      if (scrollPosition > targetPosition) {
        headerRef.current.classList.remove('hide');
      } else {
        headerRef.current.classList.add('hide');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Loading />
      <Main01 />
      <Main02 />
      <div ref={headerRef} className='hide'>
        <Main02fixed />
      </div>
      <Main03 />
      <Main03scroll /> 
      {/* <Main03index />  */}
      <Main04 />
      <Main05 />
      <Main06 />
      <Main07 />
      {/* <Main08 /> */}
      <Main09 />
      {/* <section className='h-dvh text-white flex justify-center items-center border-4 border-red-600' style={{backgroundColor:'#ffec40'}}>
        <div className='text-8xl uppercase leading-tight'>
          <footer></footer>
        </div>
      </section> */}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollToPlugin.min.js"></script>
    </>
  );
}

export default App;

