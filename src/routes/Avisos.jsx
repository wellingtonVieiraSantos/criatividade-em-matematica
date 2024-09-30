import { candidatos } from "../util/candidatos"
import { classificadosAr } from "../util/classificadosAR"
import { naoClassificadosAr } from "../util/naoClassificadosAR"
import argentina from '../assets/img/argentina.png'
import brasil from '../assets/img/brasil.png'


const Avisos = () => {
  return (
    <section className="min-h-[calc(100vh-7rem)] xl:w-[1280px] grid place-items-center gap-8 m-auto my-10 text-justify leading-loose p-3 ">
      <h1 className="text-3xl lg:text-5xl mt-5">Avisos</h1>
      
      {/* <p className="text-dark-gray">Em breve, novidades!</p> */}
      <div className="flex flex-col gap-8 divide-y-2 divide-terciary divide-dashed">
        <div>
          <header>
            <img src={argentina} alt="bandeira do brasil" width={96} height={96} className="h-24"/>
            <h2 className="text-terciary text-xl font-bold my-4 place-self-start">Estudiantes clasificados y desclasificados [Nombre- DNI]</h2>
          </header>
          <p>Informe: próximamente los estudiantes clasificados serán incluidos en la plataforma virtual y recibirán las primeras orientaciones para la clase presencial del día 03/10/24, 13-16. (en Av. Pellegrini 250, FCEIA-UNR, Rosario, Argentina).</p>
          <h3 className="text-center my-8">Clasificados</h3>
          <table className="table-auto my-4 divide-y m-auto sm:w-1/2">
            <thead className="text-center">
              <tr>
                <th scope="col" className="py-2">Nome</th>
                <th scope="col">CPF</th>
              </tr>
            </thead>
            <tbody>
              {classificadosAr.map(classificadoAr=>(
                <tr className="odd:bg-slate-50 even:bg-blue-100" key={classificadoAr.nome}>
                  <td className="py-2">{classificadoAr.nome}</td>
                  <td className="text-right text-sm sm:text-base">{classificadoAr.cpf}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-center my-8">No clasificados</h3>
          <p>*No tiene disponibilidad para dedicarse a la formación en el día y horario disponibles.</p>
          <table className="table-auto my-4 divide-y m-auto sm:w-1/2">
            <thead className="text-center">
              <tr>
                <th scope="col" className="py-2">Nome</th>
                <th scope="col">CPF</th>
              </tr>
            </thead>
            <tbody>
              {naoClassificadosAr.map(naoClassificadoAr=>(
                <tr className="odd:bg-slate-50 even:bg-blue-100" key={naoClassificadoAr.nome}>
                  <td className="py-2">{naoClassificadoAr.nome}</td>
                  <td className="text-right text-sm sm:text-base">{naoClassificadoAr.cpf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <header>
            <img src={brasil} alt="bandeira do brasil" width={96} height={96} className="h-24"/>
          <h2 className="text-terciary text-xl font-bold my-4 place-self-start">1ª chamada: Turma A (Quartas-feiras, das 19:00 às 21:00)</h2>
          </header>
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
        </div>
      </div>
      <p className="text-center font-semibold p-2">&ldquo;Transforme a Matemática com Criatividade: Inspire, Engaje, Eduque!&ldquo;</p>
    </section>
  )
}

export default Avisos