import { Link, useRouteError } from 'react-router-dom'
import { Undo2 } from 'lucide-react'

const PageNotFound = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <section className='h-[100dvh] grid place-content-center place-items-center gap-10 bg-light-gray px-2'>
      <header>
        <h1 className='text-4xl'>Oops!</h1>
      </header>
      <p className='text-lg text-center'>
        Desculpe, um erro inesperado ocorreu!
      </p>
      <p className='text-dark-gray'>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to='/'
        className='sm:w-76 ring ring-secondary hover:underline uppercase font-bold grid grid-flow-col place-items-center gap-4 text-secondary px-8 py-4 rounded-full'
      >
        <Undo2 color='#6fa4e9' size={28} />
        Voltar para Home
      </Link>
    </section>
  )
}

export default PageNotFound
