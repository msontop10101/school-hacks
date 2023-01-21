import './App.css';
import Form from './components/Form';
import logo from './assets/images/1.svg'

function App() {
  return (
  <div>
      <div class='bg-[#8b877b] h-16'><img src={logo} alt='school-hacks-logo'/></div>
      <div class='h-24'>Biencvenue!</div>
      <div class='h-24 bg-[#8b877b]'></div>
      <div class='h-28'>Nos Services</div>
      <div class='h-24 bg-[#8b877b]'>
        <Form/>
      </div>
    </div>
  );
}

export default App;
