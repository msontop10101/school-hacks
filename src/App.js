import './App.css';
import Form from './components/Form';
import logo from './assets/images/school-hacks-logo.png'
import notebooks from './assets/images/assignment-image.png'
import one from './assets/images/1.svg'
import two from './assets/images/2.svg'
import three from './assets/images/3.svg'
import four from './assets/images/4.svg'

function App() {
  return (
  <div>
    {/* SECTION ONE */}
      <div class='bg-[#8b877b] h-[150px] flex items-center px-20'>
      <div><img src={logo} height='70px' width='70px' alt='school-hacks-logo'/></div>
      </div>
    {/* SECTION TWO */}
      <div class='py-10 px-20 flex items-center'>
        <div class='font-semibold w-[70%]'>
          <h2 class='text-[60px] font-extrabold text-purple-500'>BIENVENUE</h2>
          <h4 class='text-[30px]'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, <span class='text-purple-500'>adipisci velit</span></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus eros a enim pretium, a tempus ligula lacinia. Aliquam fringilla tristique aliquam. Proin et suscipit est, et euismod arcu. Cras ac egestas tortor. Duis facilisis lobortis tortor, vel dapibus leo egestas vitae. Suspendisse dolor ex, luctus vitae mi eget, eleifend gravida magna. Praesent molestie eu metus et cursus. Fusce et risus euismod, luctus felis dignissim, rhoncus metus. Ut finibus velit diam. Praesent pulvinar fringilla turpis eu eleifend. Cras eu lacinia justo. Integer tristique massa at maximus ultrices. Sed vitae arcu nec ligula facilisis commodo ut non metus.</p>
        </div>
        <div>
          <div>
            <img src={notebooks} alt='notebook-imgage'/>
          </div>
        </div>
        <div></div>
      </div>
      {/* SECTION THREE */}
      <div class='bg-[#8b877b] text-center px-[120px] pb-[100px] pt-[40px]'>
        <h2 class='font-bold text-[40px] text-white uppercase'>A props</h2>
        <p class='text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus eros a enim pretium, a tempus ligula lacinia. Aliquam fringilla tristique aliquam. Proin et suscipit est, et euismod arcu. Cras ac egestas tortor. Duis facilisis lobortis tortor, vel dapibus leo egestas vitae. Suspendisse dolor ex, luctus vitae mi eget, eleifend gravida magna. Praesent molestie eu metus et cursus. Fusce et risus euismod, luctus felis dignissim, rhoncus metus. Ut finibus velit diam. Praesent pulvinar fringilla turpis eu eleifend. Cras eu lacinia justo. Integer tristique massa at maximus ultrices. Sed vitae arcu nec ligula facilisis commodo ut non metus.</p>
      </div>
      {/* SECTION FOUR */}
      <div>
        <div>
        <h2 class='font-bold text-[40px]'>NOS SERVICES</h2>
        </div>
        <div class='w-full'>
        
        </div>
      </div>
      {/* SECTION FIVE */}
      <div class='h-24 bg-[#8b877b]'>
        <Form/>
      </div>
    </div>
  );
}

export default App;
