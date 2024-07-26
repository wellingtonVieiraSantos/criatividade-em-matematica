import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center shadow-md lg:flex-row">
        <div className="h-1/2 bg-secondary rounded-sm flex flex-col justify-evenly items-center text-light-gray p-4 lg:w-1/2 lg:h-full">
          <h1 className="hidden lg:block text-6xl">Criatividade em Matemática</h1>
          <h2 className="text-center text-xl lg:text-4xl">1ª Edição da Formação em Criatividade em Matemática através de Problemas Abertos</h2>
        </div>
        <div className="h-1/2 flex flex-col justify-center lg:justify-end lg:pb-40 items-center gap-8 lg:gap-12 lg:w-1/2 lg:h-full lg:bg-teste lg:bg-no-repeat lg:bg-top">

{/*             <h2 className="text-center text-xl lg:text-6xl">A criatividade em Matemática através de problemas.</h2>
 */}        <Link to="/edital" className=" text-light-gray font-bold text-lg py-4 px-8 bg-secondary hover:bg-primary rounded-lg uppercase ring-2 ring-primary transition-all">Veja o edital</Link>
            <a href="https://forms.gle/HDxCavwwbHy2XWT76" className="text-light-gray font-bold bg-coral hover:bg-red-700 text-lg py-4 px-8 rounded-lg ring-2 ring-red-700 uppercase transition-all">Inscreva-se!</a>

        </div>
      </div> 
      <div className="h-screen"></div>
    </div>
  )
}

export default Home