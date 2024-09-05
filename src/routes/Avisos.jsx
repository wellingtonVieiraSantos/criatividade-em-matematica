import { candidatos } from "../util/candidatos"

const Avisos = () => {
  return (
    <section className="min-h-[calc(100vh-7rem)] xl:w-[1280px] grid place-items-center gap-8 m-auto my-10 text-justify leading-loose p-3">
      <h1 className="text-3xl lg:text-5xl mt-5">Avisos</h1>
      {/* <p className="text-dark-gray">Em breve, novidades!</p> */}
      <h2 className="text-terciary text-xl font-bold my-4 place-self-start">1ª chamada: Turma A (Quartas-feiras, das 19:00 às 21:00)</h2>
      <p>Os selecionados e selecionadas abaixo devem acessar a plataforma <a href="https://nead.ifb.edu.br/" target="_blank" className="text-coral font-bold hover:underline hover:underline-offset-4">nead.ifb.edu.br</a>, criar uma conta e informar ao professor Hênio <a href="mailto:henio.oliveira@ifb.edu.br" target="_blank" className="text-coral font-bold hover:underline hover:underline-offset-4">henio.oliveira@ifb.edu.br</a> para que sejam vinculados e vinculadas ao ambiente de formação. Prazo: 9 de setembro de 2024.</p>
      <table className="table-auto my-4 divide-y m-auto sm:w-1/2">
        <thead className="text-center">
          <tr>
            <th scope="col" className="py-2">Nome</th>
            <th scope="col">CPF</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.map(candidato=>(
            <tr className="odd:bg-slate-50 even:bg-blue-100" key={candidato.nome}>
              <td className="py-2">{candidato.nome}</td>
              <td className="text-right text-sm sm:text-base">{candidato.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center font-semibold p-2">&ldquo;Transforme a Matemática com Criatividade: Inspire, Engaje, Eduque!&ldquo;</p>
    </section>
  )
}

export default Avisos