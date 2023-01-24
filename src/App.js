import './App.css';
import RegistrationForm from './components/Form';
import logo from './assets/images/school-hacks-logo.png'
import notebooks from './assets/images/assignment-image.png'
import one from './assets/images/1.svg'
import two from './assets/images/2.svg'
import three from './assets/images/3.svg'
import four from './assets/images/4.svg'
import five from './assets/images/5.svg'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'


function App() {
  return (
    <div>
      {/* SECTION ONE */}
      <div class='bg-[#9E9E9E] h-[70px] md:h-[100px] flex items-center px-[30px] md:px-28'>
        <div><a href='/'><img src={logo} height='70px' width='70px' alt='school-hacks-logo' /></a></div>
      </div>
      {/* SECTION TWO */}
      <div class='py-10 px-4 md:px-28 flex flex-col md:flex-row items-center'>
        <div class='md:hidden'>
          <div>
            <img src={notebooks} width='300px' height='300px' alt='notebook-imgage' />
          </div>
        </div>
        <div class='font-semibold w-full md:w-[70%]'>
          <h2 class='text-[50px] font-extrabold text-[#8D58F8]'>BIENVENUE</h2>
          <h4 class='text-[22px]'>sur notre site web d'lA pour <span class='text-[#8D58F8]'>LES ÉTUDIANTS!</span></h4>
          <p>Nous proposons une plateforme de réponses automatiques pour vous aider à résoudre toutes les questions liées. études, quel que soit votre niveau ou la matière. Avec notre SA, vous pouvez obtenir des réponses rapides et précises
              Tous vos doutes et améliorer vos corinassances. Nous waus eidans egelernent & trauner des orientatene professionnelles dans les métiers d'avenir et à trouver les écoles les plus adaptées à votre furss. Rejoignez-nous de maintenant pour découvrir toutes les possibiliés que notre site peut wous offrir pour réussir uns énudes.</p>
        </div>
        <div class='hidden md:block'>
          <div>
            <img src={notebooks} alt='notebook-imgage' />
          </div>
        </div>
      </div>

      {/* SECTION THREE */}
      <div class='bg-[#9E9E9E] text-center px-4 md:px-[120px] pb-4 md:pb-[100px] pt-4 md:pt-[40px]'>
        <h2 class='font-bold text-[40px] text-white uppercase'>A PROPOS</h2>
        <p class='text-white font-semibold'>Notre site a eté créé pour aider les étudiants à réussir leurs études grâce à une plateforme d'IA. Nous croyans que l'acces à des reponses précises et rapides est essentiel pour réussir dans les études et nous avons donc développé une plateforme qui offre cette possibilité. Nous sommes une équipe de professionnels passionnes par lA et l'education qui travaillent ensemble pour offrir une expérience d'apprentissage unique et efficace. Nous sommes fiers de proposer des services d'lA pour les etudiants et d'aider les étudiants à trouver les métiers d'avenir et les écoles les plus adaptées à leur cursus. Nous sommes également fiers de notre communauté d'étudiants et d'enseignants qui se soutiennent mutuellement pour réussir dans les études. Nous espérons que vous apprecierez votre experience sur notre site et nous attendons avec impatience de vous aider à réussir vos études.</p>
      </div>
      {/* SECTION FOUR */}
      <div>
        <div class='py-10'>
          <h2 class='font-bold text-[40px] text-center mb-10'>NOS SERVICES</h2>
          <div class='flex justify-center'>
            <div>
              <div class='flex flex-col items-center md:flex-row gap-2 md:gap-10 mb-2 md:mb-10 justify-center'>
                <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-3 md:p-5 h-[100px] md:h-[120px] w-[90%] md:w-[40%]'>
                  <div class='mr-2'><img src={one} class='image-size-one' alt='one' /></div>
                  <div><p class='font-semibold text-xs md:text-normal'> Réaliser des devoirs et des projets scolaires dans diverses matieres</p></div>
                </div>
                <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-3 md:p-5 h-[100px] md:h-[120px] w-[90%] md:w-[40%]'>
                  <div class='mr-2'><img src={two} class='image-size' alt='two' /></div>
                  <div><p class='font-semibold text-xs md:text-normal'>Traducteur automatique precis</p></div>
                </div>
              </div>
              <div class='flex flex-col items-center md:flex-row gap-2 md:gap-10 mb-2 md:mb-10 justify-center'>
                <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-3 md:p-5 h-[100px] md:h-[120px] w-[90%] md:w-[40%]'>
                  <div class='mr-4'><img src={three} class='image-size-three' alt='three' /></div>
                  <div><p class='font-semibold text-xs md:text-normal'>Redaction de CV et lettres de motivation</p></div>
                </div>
                <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-3 md:p-5 h-[100px] md:h-[120px] w-[90%] md:w-[40%]'>
                  <div class='mr-4'><img src={four} class='image-size' alt='four' /></div>
                  <div><p class='font-semibold text-xs md:text-normal'>Preparation aux examens et aux entretiens d'embauche</p></div>
                </div>
              </div>
              <div class='flex gap-10 justify-center'>
                <div class='bg-[#D2D2D2] rounded-2xl flex items-center p-3 md:p-5 h-[100px] md:h-[120px] w-[90%] md:w-[40%]'>
                  <div class='mr-4'><img src={five} class='image-size' alt='five' /></div>
                  <div><p class='font-semibold text-xs md:text-normal'> Aide à l'orientation professionnelle et au choix d'un métier</p></div>
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
              <h1 class='text-[20px] md:text-[40px] font-bold mb-2 text-center'>NOUS CONTACTER</h1>
              <h4 class=' text-[20px] md:text-[40px] font-normal text-center'>NOUS AIMERIONS VOUS ENTENDRE!</h4>
              <p class='text-center'> Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à nous contacter. Vous pouvez nous envoyer un courriel à l'adresse contact@votresite.com ou remplir le formulaire de contact ci-dessous. </p>

              <div class='py-5 px-2 md:px-20'>
                <RegistrationForm />
              </div>
              <p class='text-center'>Nous ferons de notre mieux pour répondre à toutes vos demandes dans les plus brefs délais.
                  Vous pouvez également nous joindre par téléphone au +33 12 34 56 78 90 de sh à 18h du lundi au vendredi. Nous sommes également présents sur les réseaux sociaux vous pouvez nous suivre sur Facebook Twitter et Linkedin pour rester informé de nos dernières actualités et de nos offres exclusives. Nous espérons avoir bientôt de vos nouvelles!</p>

            </div>
          </div>
        </div>
        <div>
          <footer class='flex flex-col md:flex-row justify-between pt-2 pb-4'>
            <div class='w-[50%] md:w-[20%] pl-4 md:pl-0'>
              <div class='flex justify-center'><a href='/'><img src={logo} width='110px' height='110px' alt='logo' /></a></div>
              <p class='font-semibold flex justify-center'>studentshacks.com</p>
            </div>


            {/* --------DESKTOP-ICONS------------ */}
            <div class='hidden md:flex flex-col md:flex-row w-full md:w-[60%] justify-evenly'>
              <div class='mr-10 flex-col items-center'>
                <div class='flex justify-center'><a href='https://web.facebook.com/people/Student-Hacks/100089567025384/'><FaFacebook color='#8D58F8' size='4em'/></a></div>
                <div><p class='font-semibold'>Student Hacks</p></div>
              </div>
              <div class='mr-10'>
                <div class='flex justify-center'><a href='https://twitter.com/StudentHacks0'><FaTwitter color='#8D58F8' size='4em'/></a></div>
                <p class='font-semibold'>Student Hacks</p>
              </div>

              <div class='mr-10'>
                <div class='flex justify-center'><a href='linkedin.com'><FaLinkedin color='#8D58F8' size='4em'/></a></div>
                <p class='font-semibold'>Student Hacks</p>
              </div>
              <div>
                <div class='flex justify-center'><a href='mailto:contact.studenthacks@gmail.com'><AiOutlineMail color='#8D58F8' size='4em'/></a></div>
                <p class='font-semibold'>contact@votresite.come</p>
              </div>

            </div>
            {/* ---------DESKTOP-ICONS-------- */}

            {/* --------MOBILE-ICONS--------- */}
            <div>
              <div class='pt-4 block md:hidden'>

                <div class='flex justify-center gap-10 mb-4'>
                  <div class='flex flex-col items-center'>
                    <div class=''><a href='https://web.facebook.com/people/Student-Hacks/100089567025384/'><FaFacebook color='#8D58F8' size='4em'/></a></div>
                    <div><p class='font-semibold'>Student Hacks</p></div>
                  </div>
                  <div class='flex flex-col items-center'>
                    <div><a href='https://twitter.com/StudentHacks0'><FaTwitter color='#8D58F8' size='4em'/></a></div>
                    <div><p class='font-semibold'>Student Hacks</p></div>
                  </div>
                </div>

                <div class='flex justify-center gap-10'>
                  <div class='flex flex-col items-center'>
                    <div><a href='linkedin.com'><FaLinkedin color='#8D58F8' size='4em'/></a></div>
                    <div><p class='font-semibold'>Student Hacks</p></div>
                  </div>
                  <div class='flex flex-col items-center'>
                    <div><a href='mailto:contact.studenthacks@gmail.com'><AiOutlineMail color='#8D58F8' size='4em'/></a></div>
                    <div><p class='font-semibold'>Student Hacks</p></div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------MOBILE----------- */}

          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
