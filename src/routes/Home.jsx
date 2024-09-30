import { Link } from "react-router-dom"
import { Link as IconLink, Newspaper } from 'lucide-react'

import logo from '../assets/img/logo.webp'
import unioeste from '../assets/img/unioeste.webp'
import ifb from '../assets/img/ifb.webp'
import capes from '../assets/img/capes.webp'
import gtie from '../assets/img/gtie.webp'
import ppgecem from '../assets/img/ppgecem.webp'
import gepeem from '../assets/img/gepeem.webp'

const Home = () => {
  return (
    <>
      <section className="min-h-[calc(100vh-7rem)] grid sm:grid-cols-[1fr_1fr]">
        <div className=" bg-secondary grid place-items-center place-content-evenly text-terciary p-4">
          <h1 className="hidden lg:block lg:text-5xl xl:text-6xl text-center font-trebuchet">Criatividade em Matemática</h1>
          <h2 className="text-center text-2xl lg:text-3xl xl:text-4xl font-trebuchet">Formação em Criatividade em Matemática através de Problemas Abertos</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="hidden lg:grid lg:w-full lg:place-content-center">
            <img src={logo} alt="criatividade em matematica logo" className="h-full aspect-square opacity-80"/>
          </div>
          <div className="flex flex-col justify-center gap-8 pb-4">
            <Link to="/edital" className="grid grid-flow-col place-items-center gap-4 lg:w-72 text-secondary font-bold hover:underline py-4 px-8 rounded-full ring ring-secondary uppercase">
              <Newspaper color='#6fa4e9' size={28}/>
              Veja o edital
            </Link>
            <button disabled>
              <a href="https://forms.gle/E5yGCoZ9V1wxzrSu6" target="_blank" className="hidden grid-flow-col gap-4 lg:w-72 text-coral font-bold hover:underline py-4 px-8 rounded-full ring ring-coral uppercase" aria-disabled>
                <IconLink color="#FF6347" size={28}/>
                Inscreva-se!
              </a>
            </button>
          </div>
        </div>
      </section> 
      <section className="min-h-[calc(100vh-7rem)] grid place-items-center bg-midle-gray">
        <div className="w-full min-h-5/6 xl:w-[1280px] m-auto grid place-items-center bg-light-gray shadow-md">
          <h2 className="text-5xl my-10">Realização</h2>
          <div className="w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center p-10">
            <img src={unioeste} alt="unioeste logo" className="w-[150px] hover:scale-125 transition-all" />
            <img src={ifb} alt="ifb logo" className="w-[150px] hover:scale-125 transition-all" />
            <img src={capes} alt="capes logo" className="w-[150px] hover:scale-125 transition-all" />
            <img src={ppgecem} alt="ppgecem logo" className="w-[150px] hover:scale-125 transition-all" />
            <img src={gtie} alt="gtie logo" className="w-[150px] hover:scale-125 transition-all" />
            <img src={gepeem} alt="gepeem logo" className="w-[150px] hover:scale-125 transition-all" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home