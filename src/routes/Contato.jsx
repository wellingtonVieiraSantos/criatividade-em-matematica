import { Instagram, Mail } from 'lucide-react'

const Contato = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] xl:w-[1280px] m-auto grid place-items-center">
      <h1 className="text-3xl lg:text-5xl">Contato</h1>
      <div className="rounded-lg p-8 lg:w-1/2 grid gap-4 shadow-lg">
        <h2 className='text-xl font-bold'>Instagram</h2>
        <p className='text-dark-gray'>Fique por dentro das novidades pelo nosso Instagram</p>
        <div className='w-full grid place-items-end'>
          <a href="" className='w-1/2 ring ring-secondary hover:underline uppercase font-bold flex justify-evenly items-center text-secondary px-8 py-4 rounded-full transition-all'>
            <Instagram color='#6fa4e9' size={28}/>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="rounded-lg p-8 lg:w-1/2 grid gap-4 shadow-lg">
        <h2 className='text-xl font-bold'>Email</h2>
        <p className='text-dark-gray'>Alguma dúvida? Mande um email para nós</p>
        <div className='w-full grid place-items-end'>
          <a href="" className='w-1/2 ring ring-coral hover:underline uppercase font-bold flex justify-evenly items-center text-coral px-8 py-4 rounded-full transition-all'>
            <Mail color='#FF6347' size={28}/>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contato