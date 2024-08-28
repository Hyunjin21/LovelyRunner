// import logo from './logo.svg';
import './App.css';
import Loading from './gsap/loading';
import Main01 from './gsap/main01';
import Main02 from './gsap/main02';
import Main03 from './gsap/main03';
import Main04 from './gsap/main04';
import Main05 from './gsap/main05';
import Main06 from './gsap/main06';
import Main07 from './gsap/main07';
import Main08 from './gsap/main08';

function App() {
  return (
    <>
      <Loading />
      <Main01 />
      <Main02 />
      <Main03 />
      <Main04 />
      <Main05 />
      <Main06 />
      <Main07 />
      <Main08 />
      <section className='h-dvh text-white flex justify-center items-center border-4 border-red-600' style={{backgroundColor:'#ffec40'}}>
        <div className='text-8xl uppercase leading-tight'>
          <footer></footer>
        </div>
      </section>
      <script>
        
      </script>
    </>
  );
}

export default App;
