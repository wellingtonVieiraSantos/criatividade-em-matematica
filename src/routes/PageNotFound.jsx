import { Link } from 'react-router-dom'
import { Undo2 } from 'lucide-react'

const PageNotFound = () => {
  return (
    <section className='w-screen h-dvh grid place-items-center p-1'>
      <div className='w-full max-w-lg p-5 grid place-items-center gap-5 text-center'>
        <header>
          <h1 className='text-9xl font-calibri bg-linear-to-r from-terciary via-primary to-secondary bg-clip-text text-transparent'>
            404
          </h1>
        </header>
        <p className=' text-center'>Erro 404. Página não encontrada.</p>
        <p className='text-dark-gray'>
          A página que você procura pode ter sido removida ou renomeada!
        </p>
        <Link
          to='/'
          className='full font-bold grid grid-flow-col place-items-center gap-4 text-primary hover:underline hover:underline-offset-4'
        >
          <Undo2 className='text-primary' size={20} />
          Voltar para página inicial
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
