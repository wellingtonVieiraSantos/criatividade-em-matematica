import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {

  const error = useRouteError()
  console.log(error)

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        <header>
          <h1 className="text-4xl">Oops!</h1>
        </header>
        <p className="text-xl">Desculpe, um erro inesperado ocorreu!</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/' className="bg-blue-500 p-4 text-white font-bold rounded hover:ring-2 hover:ring-blue-900">Voltar para Home</Link>
    </section>
  )
}

export default PageNotFound