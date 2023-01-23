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
      <div class='bg-[#9E9E9E] h-[70px] md:h-[100px] flex items-center px-[30px] md:px-28'>
      <div><a href='/'><img src={logo} height='70px' width='70px' alt='school-hacks-logo'/></a></div>
      </div>
    {/* SECTION TWO */}
      <div class='py-10 px-4 md:px-28 flex flex-col md:flex-row items-center firstbackground'>
      <div class='md:hidden'>
          <div>
            <img src={notebooks} width='300px' height='300px' alt='notebook-imgage'/>
          </div>
        </div>
        <div class='font-semibold w-full md:w-[70%]'>
          <h2 class='text-[50px] font-extrabold text-purple-500'>BIENVENUE</h2>
          <h4 class='text-[22px]'>Neque porro quisquamsit amet, consectetur, <span class='text-purple-500'>adipisci velit</span></h4>
          <p>Lorem ipsum dolor sit amet, consectetur od arcu. Cras ac egestas tortor. Duis facilisis lobortis tortor, vel dapibus leo egestas vitae. Suspendisse dolor ex, luctus vitae mi eget, eleifend gravida magna. Praesent molestie eu metus et cursus. Fusce et risus euismod, luctus felis dignissim, rhoncus metus. Ut finibus velit diam. Praesent pulvinar fringilla turpis eu eleifend. Cras eu lacinia justo. Integer tristique massa at maximus ultrices. Sed vitae arcu nec ligula facilisis commodo ut non metus.</p>
        </div>
        <div class='hidden md:block'>
          <div>
            <img src={notebooks} alt='notebook-imgage'/>
          </div>
        </div>
      </div>
      
      {/* SECTION THREE */}
      <div class='bg-[#9E9E9E] text-center px-4 md:px-[120px] pb-4 md:pb-[100px] pt-4 md:pt-[40px]'>
        <h2 class='font-bold text-[40px] text-white uppercase'>A props</h2>
        <p class='text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus eros a enim pretium, a tempus ligula lacinia. Aliquam fringilla tristique aliquam. Proin et suscipit est, et euismod arcu. Cras ac egestas tortor. Duis facilisis lobortis tortor, vel dapibus leo egestas vitae. Suspendisse dolor ex, luctus vitae mi eget, eleifend gravida magna. Praesent molestie eu metus et cursus. Fusce et risus euismod, luctus felis dignissim, rhoncus metus. Ut finibus velit diam. Praesent pulvinar fringilla turpis eu eleifend. Cras eu lacinia justo. Integer tristique massa at maximus ultrices. Sed vitae arcu nec ligula facilisis commodo ut non metus.</p>
      </div>
      {/* SECTION FOUR */}
      <div>
        <div class='py-10 background'>
          <h2 class='font-bold text-[40px] text-center mb-10'>NOS SERVICES</h2>
          <div class='flex justify-center'>
          <div>
          <div class='flex flex-col items-center md:flex-row gap-2 md:gap-10 mb-2 md:mb-10 justify-center'>
            <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-5 h-[120px] w-[90%] md:w-[40%]'>
              <div class='mr-2'><img src={one} width='160px' height='160px' alt='one'/></div>
              <div><p class='font-semibold'>This is tag number one! This is tag number one!</p></div>
            </div>
            <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-5 h-[120px] w-[90%] md:w-[40%]'>
              <div class='mr-2'><img src={two} width='120px' height='120px' alt='two'/></div>
              <div><p class='font-semibold'>This is tag number two!</p></div>
            </div>
          </div>
          <div class='flex flex-col items-center md:flex-row gap-2 md:gap-10 mb-2 md:mb-10 justify-center'>
            <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-5 h-[120px] w-[90%] md:w-[40%]'>
              <div class='mr-4'><img src={three} width='100px' height='100px' alt='three'/></div>
              <div><p class='font-semibold'>This is tag number one!</p></div>
            </div>
            <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-5 h-[120px] w-[90%] md:w-[40%]'>
              <div class='mr-4'><img src={four} width='100px' height='100px' alt='four'/></div>
              <div><p class='font-semibold'>This is tag number two!</p></div>
            </div>
          </div>
          <div class='flex gap-10 justify-center'>
            <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-5 h-[120px] w-[90%] md:w-[40%]'>
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
      <div class=' bg-[#9E9E9E] px-0 md:px-28'>
        <div class='w-full flex items-center'>
        <div class='text-white flex justify-center py-10'>
          <div class=' w-full md:w-[90%]'>
          <h1 class='text-[20px] md:text-[40px] font-bold mb-2 text-center'>This is the header</h1>
          <h4 class=' text-[20px] md:text-[40px] font-normal text-center'>Another small heading</h4>
          <p class='text-center'> type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
        
        <div class='py-5 px-2 md:px-20'>
        <RegistrationForm/>
        </div>
        <p class='text-center'> type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
        
            </div>  
        </div>
        </div>
        <div>
          <footer class='flex justify-between py-14'>
            <div class='w-[20%]'>
              <div><a href='/'><img src={logo} width='110px' height='110px' alt='logo'/></a></div>
              <p class='font-semibold'>studentshacks.com</p>
            </div>
            <div class='flex flex-col md:flex-row w-full md:w-[60%] justify-evenly'>
              
              <div class='mr-10 flex-col items-center'>
              <div class='flex justify-center'><a href='https://web.facebook.com/people/Student-Hacks/100089567025384/'><img src={facebook} width='60px' height='60px' alt="facebook"/></a></div>
              <div><p class='font-semibold'>Student Hacks</p></div>
              </div>
              <div class='mr-10'>
              <div class='flex justify-center'><a href='https://twitter.com/StudentHacks0'><img src={twitter} width='60px' height='60px' alt="twitter"/></a></div>
              <p class='font-semibold'>Student Hacks</p>
              </div>

              <div class='mr-10'>
              <div class='flex justify-center'><a href='linkedin.com'><img src={linkedin} width='60px' height='60px' alt="linkedin"/></a></div>
              <p class='font-semibold'>Student Hacks</p>
              </div>
              <div>
              <div class='flex justify-center'><a href='mailto:contact.studenthacks@gmail.com'><img src={email} width='60px' height='60px' alt="email"/></a></div>
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
