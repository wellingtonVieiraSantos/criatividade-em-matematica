import lattes from '../assets/lattes.svg'

import { GraduationCap, Link } from 'lucide-react'

const LinksImportantes = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] xl:w-[1280px] m-auto grid place-items-center">
      <h1 className="text-3xl lg:text-5xl">Links Importantes</h1>
      <div className="w-full grid grid-flow-row place-items-center gap-10">
        <a href="" className="text-coral hover:underline w-full lg:w-72 px-8 py-4 rounded-full ring ring-coral flex justify-around items-center text-xl shadow-md uppercase">
          <Link color='#FF6347' size={28} strokeWidth={2}/>
          <span>Inscrição</span>
        </a>
        <a href="https://nead.ifb.edu.br/" target='_blank' className="text-coral hover:underline w-full lg:w-72 px-8 py-4 rounded-full ring ring-coral flex justify-around items-center text-xl shadow-md">
          <GraduationCap color='#FF6347' size={28} strokeWidth={2}/>
          <span>NEaD</span>
        </a>
        <a href="http://lattes.cnpq.br/1556181022870398" target='_blank' className="text-coral hover:underline w-full lg:w-72 px-8 py-4 rounded-full ring ring-coral flex justify-around items-center text-xl shadow-md uppercase">
          <img src={lattes} alt="icon lattes" className='w-6'/>
          <span>Lattes</span>
        </a>
      </div>
    </div>
  )
}

export default LinksImportantes