import lattes from '../assets/img/lattes.svg'

import { GraduationCap, Link } from 'lucide-react'

const LinksImportantes = () => {
  return (
    <section className="min-h-[calc(100vh-7rem)] xl:w-[1280px] m-auto grid place-items-center">
      <h1 className="text-3xl lg:text-5xl mt-5">Links Importantes</h1>
      <div className="grid grid-flow-row place-items-center gap-10 my-5">
        <a href="https://forms.gle/HDxCavwwbHy2XWT76" target='_blank' className="text-coral font-bold hover:underline w-full sm:w-72 py-4 px-8 sm:px-0 rounded-full ring ring-coral grid grid-flow-col place-content-evenly gap-2 sm:gap-0 text-lg shadow-lg uppercase">
          <Link color='#FF6347' size={28} strokeWidth={2}/>
          <span>Inscrição</span>
        </a>
        <a href="https://nead.ifb.edu.br/" target='_blank' className="text-coral font-bold hover:underline w-full lg:w-72 py-4 px-8 sm:px-0 rounded-full ring ring-coral grid grid-flow-col place-content-evenly text-lg shadow-lg">
          <GraduationCap color='#FF6347' size={28} strokeWidth={2}/>
          <span>NEaD</span>
        </a>
        <a href="http://lattes.cnpq.br/1556181022870398" target='_blank' className="text-coral font-bold hover:underline w-full lg:w-72 py-4 px-8 sm:px-0 rounded-full ring ring-coral grid grid-flow-col place-content-evenly text-lg shadow-lg uppercase">
          <img src={lattes} alt="icon lattes" className='w-6'/>
          <span translate='no'>Lattes</span>
        </a>
      </div>
    </section>
  )
}

export default LinksImportantes