import { Link } from "react-router-dom"
import { Link as IconLink, Newspaper } from 'lucide-react'


const Home = () => {
  return (
    <div>
      <div className="h-[calc(100vh-7rem)] grid sm:grid-flow-col sm:grid-cols-[1fr_1fr]">
        <div className=" bg-secondary grid place-items-center place-content-evenly text-terciary p-4">
          <h1 className="hidden lg:block text-6xl">Criatividade em Matemática</h1>
          <h2 className="text-center text-xl lg:text-4xl">1ª Edição da Formação em Criatividade em Matemática através de Problemas Abertos</h2>
        </div>
        <div className="flex flex-col justify-center lg:justify-end items-center lg:gap-12 lg:h-full xl:bg-logo xl:bg-no-repeat xl:bg-top">
          <div className="h-1/2 flex flex-col justify-center gap-8">
            <Link to="/edital" className="grid grid-flow-col place-items-center gap-4 lg:w-72 text-secondary font-bold hover:underline py-4 px-8 rounded-full ring ring-secondary uppercase">
              <Newspaper color='#6fa4e9' size={28}/>
              Veja o edital
            </Link>
            <a href="https://forms.gle/HDxCavwwbHy2XWT76" className="grid grid-flow-col gap-4 lg:w-72 text-coral font-bold hover:underline py-4 px-8 rounded-full ring ring-coral uppercase">
              <IconLink color="#FF6347" size={28}/>
              Inscreva-se!
            </a>
          </div>
        </div>
      </div> 
      <div className="h-[calc(100vh-7rem)] grid place-items-center bg-midle-gray">
        <div className="w-full h-5/6 xl:w-[1280px] m-auto grid place-items-center bg-light-gray shadow-md">
          <h2 className="text-3xl">Realização</h2>
        </div>
      </div>
    </div>
  )
}

export default Home