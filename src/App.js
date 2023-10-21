import './App.css';

import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
