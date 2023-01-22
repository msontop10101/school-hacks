import './App.css';
import RegistrationForm from './components/Form';
import logo from './assets/images/school-hacks-logo.png'
import notebooks from './assets/images/assignment-image.png'
import one from './assets/images/1.svg'
import two from './assets/images/2.svg'
import three from './assets/images/3.svg'
import four from './assets/images/4.svg'
import five from './assets/images/5.svg'
import facebook from './assets/images/facebook.svg'
import twitter from './assets/images/twitter.svg'
import linkedin from './assets/images/linkedin.svg'
import email from './assets/images/email.svg'


function App() {
  return (
  <div>
    {/* SECTION ONE */}
      <div class='bg-[#9E9E9E] h-[100px] flex items-center px-20'>
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
      <div class='bg-[#9E9E9E] text-center px-[120px] pb-[100px] pt-[40px]'>
        <h2 class='font-bold text-[40px] text-white uppercase'>A props</h2>
        <p class='text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus eros a enim pretium, a tempus ligula lacinia. Aliquam fringilla tristique aliquam. Proin et suscipit est, et euismod arcu. Cras ac egestas tortor. Duis facilisis lobortis tortor, vel dapibus leo egestas vitae. Suspendisse dolor ex, luctus vitae mi eget, eleifend gravida magna. Praesent molestie eu metus et cursus. Fusce et risus euismod, luctus felis dignissim, rhoncus metus. Ut finibus velit diam. Praesent pulvinar fringilla turpis eu eleifend. Cras eu lacinia justo. Integer tristique massa at maximus ultrices. Sed vitae arcu nec ligula facilisis commodo ut non metus.</p>
      </div>
      {/* SECTION FOUR */}
      <div>
        <div class='py-10' style={{backgroundImage: 'url(./assets/images/background.png)'}}>
          <h2 class='font-bold text-[40px] text-center mb-10'>NOS SERVICES</h2>
          <div class='flex justify-center'>
          <div>
          <div class='flex gap-10 mb-10 justify-center'>
            <div class='bg-gray-400 rounded-2xl flex items-center p-5 h-[120px] w-[40%]'>
              <div class='mr-2'><img src={one} width='160px' height='160px' alt='one'/></div>
              <div><p class='font-semibold'>This is tag number one! This is tag number one!</p></div>
            </div>
            <div class='bg-gray-400 rounded-2xl flex items-center p-5 h-[120px] w-[40%]'>
              <div class='mr-2'><img src={two} width='120px' height='120px' alt='two'/></div>
              <div><p class='font-semibold'>This is tag number two!</p></div>
            </div>
          </div>
          <div class='flex gap-10 mb-10 justify-center'>
            <div class='bg-gray-400 rounded-2xl flex items-center p-5 h-[120px] w-[40%]'>
              <div class='mr-4'><img src={three} width='100px' height='100px' alt='three'/></div>
              <div><p class='font-semibold'>This is tag number one!</p></div>
            </div>
            <div class='bg-gray-400 rounded-2xl flex items-center p-5 h-[120px] w-[40%]'>
              <div class='mr-4'><img src={four} width='100px' height='100px' alt='four'/></div>
              <div><p class='font-semibold'>This is tag number two!</p></div>
            </div>
          </div>
          <div class='flex gap-10 justify-center'>
            <div class='bg-gray-400 rounded-2xl flex items-center p-5 h-[120px] w-[40%]'>
              <div class='mr-4'><img src={five} width='100px' height='100px' alt='five'/></div>
              <div><p class='font-semibold'>This is tag number one!</p></div>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div class='w-full'>
        
        </div>
      </div>
      {/* SECTION FIVE */}
      <div class=' bg-[#9E9E9E] px-20'>
        <div class='text-white flex items-center'>
          <div>
          <h1 class='text-[40px] font-bold'>This is the header</h1>
          <h4 class='text-[40px] font-normal'>Another small heading</h4>
          <p> type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
        
        <RegistrationForm/>
        <p> type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
        
            </div>  
        </div>
        <div>
          <footer class='flex justify-between'>
            <div class='w-[20%]'>
              <div><img src={logo} width='115px' height='115px' alt='logo'/></div>
              <p class='font-semibold'>studentshacks.com</p>
            </div>
            <div class='flex w-[60%] justify-evenly'>
              <div class='mr-10 flex-col items-center'>
              <div class='flex justify-center'><img src={facebook} width='70px' height='70px' alt="facebook"/></div>
              <div><p class='font-semibold'>Student Hacks</p></div>
              </div>
              <div class='mr-10'>
              <div class='flex justify-center'><img src={twitter} width='70px' height='70px' alt="twitter"/></div>
              <p class='font-semibold'>Student Hacks</p>
              </div>
              <div class='mr-10'>
              <div class='flex justify-center'><img src={linkedin} width='70px' height='70px' alt="linkedin"/></div>
              <p class='font-semibold'>Student Hacks</p>
              </div>
              <div>
              <div class='flex justify-center'><img src={email} width='70px' height='70px' alt="email"/></div>
              <p class='font-semibold'>contact@votresite.come</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
