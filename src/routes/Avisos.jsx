import { candidatos } from '../util/candidatos'
import { classificadosAr } from '../util/classificadosAR'
import { naoClassificadosAr } from '../util/naoClassificadosAR'
import { candidatos2025 } from '../util/candidatos2025'
import argentina from '../assets/img/argentina.png'
import brasil from '../assets/img/brasil.png'
import { useState } from 'react'
import { Search } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../components/Table'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../components/Collapsible'

const Avisos = () => {
  const [candidato, setCandidato] = useState([])
  const [showTable, setShowTable] = useState(false)

  const handleshowTable = () => setShowTable(prev => !prev)

  const handleSearch = (e, listaCandidatos) => {
    if (e.target.value === '') {
      setCandidato([])
      return
    }

    const candidatoFilter = listaCandidatos.filter(candidato =>
      candidato.nome.toLowerCase().startsWith(e.target.value.toLowerCase())
    )
    setCandidato(candidatoFilter)
  }

  return (
    <div className='min-h-[calc(100dvh-5rem)] grid place-content-center w-full xl:w-7xl m-auto text-justify leading-loose p-3'>
      <section className='border-b'>
        <Collapsible>
          <CollapsibleTrigger className='p-1 xl:w-7xl cursor-pointer rounded hover:bg-midle-gray transition duration-300'>
            <header className='flex flex-col pb-10 gap-1'>
              <div className='flex justify-between items-center'>
                <img
                  src={brasil}
                  alt='bandera de argentina'
                  width={60}
                  height={40}
                />
                <p className='text-red-700'>Encerrado</p>
              </div>
              <h2 className='text-primary text-lg xl:text-2xl'>
                1ª chamada: Turma A (3ª Edição - Segundas e Quartas-feiras,
                14h-16h)
              </h2>
            </header>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p>
              Os selecionados e selecionadas abaixo devem acessar a plataforma{' '}
              <a
                href='https://nead.ifb.edu.br/'
                target='_blank'
                className='text-coral font-bold hover:underline hover:underline-offset-4'
              >
                nead.ifb.edu.br
              </a>
              , criar uma conta e informar ao professor Hênio{' '}
              <a
                href='mailto:henio.oliveira@ifb.edu.br'
                target='_blank'
                className='text-coral font-bold hover:underline hover:underline-offset-4'
              >
                henio.oliveira@ifb.edu.br
              </a>{' '}
              para que sejam vinculados e vinculadas ao ambiente de formação. Os
              candidatos devem realizar o primeiro acesso à plataforma até{' '}
              <strong>11 de setembro de 2025 (sexta-feira), às 23h59</strong>,
              para confirmar sua matrícula.
            </p>
            <h3 className='text-center my-8'>Clasificados</h3>

            <div className='flex flex-col lg:items-center'>
              <div className=' relative flex'>
                <input
                  type='text'
                  onChange={e => handleSearch(e, candidatos2025)}
                  className='flex-1 h-full bg-light-gray border border-midle-gray p-2 pl-10 outline-hidden rounded-lg'
                  placeholder='Procure seu nome aqui'
                />
                <Search className='absolute w-8 left-1 bottom-1.5 ' />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>CPF</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidato.length > 0 ? (
                    candidato.map((can, index) => (
                      <TableRow key={index}>
                        <TableCell>{can.nome}</TableCell>
                        <TableCell>{can.cpf}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={2} className='text-center'>
                        Não há resultados
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <p>Ou se preferir, veja a lista completa abaixo.</p>
            <button
              className='bg-primary text-light-gray p-1 hover:bg-terciary transition duration-300 rounded-sm w-full max-w-sm mb-4'
              onClick={() => handleshowTable()}
            >
              {showTable ? 'Esconder lista' : 'Ver lista completa'}
            </button>
            {showTable && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>CPF</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidatos2025.map(candidatos => (
                    <TableRow key={candidatos.nome}>
                      <TableCell>{candidatos.nome}</TableCell>
                      <TableCell>{candidatos.cpf}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CollapsibleContent>
        </Collapsible>
      </section>
      <section className='border-b'>
        <Collapsible>
          <CollapsibleTrigger className='w-full cursor-pointer p-1 rounded hover:bg-midle-gray transition duration-300'>
            <header className='flex flex-col pb-10 gap-1'>
              <div className='flex justify-between items-center'>
                <img
                  src={argentina}
                  alt='bandera de argentina'
                  width={60}
                  height={40}
                />
                <p className='text-red-700'>Encerrado</p>
              </div>
              <h2 className='text-primary text-lg xl:text-2xl'>
                Estudiantes clasificados y desclasificados [Nombre- DNI]
              </h2>
            </header>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p>
              Informe: próximamente los estudiantes clasificados serán incluidos
              en la plataforma virtual y recibirán las primeras orientaciones
              para la clase presencial del día 03/10/24, 13-16. (en Av.
              Pellegrini 250, FCEIA-UNR, Rosario, Argentina).
            </p>
            <h3 className='text-center my-8'>Clasificados</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>CPF</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classificadosAr.map(classificadoAr => (
                  <TableRow key={classificadoAr.nome}>
                    <TableCell>{classificadoAr.nome}</TableCell>
                    <TableCell>{classificadoAr.cpf}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h3 className='text-center my-8'>No clasificados</h3>
            <p>
              *No tiene disponibilidad para dedicarse a la formación en el día y
              horario disponibles.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>CPF</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {naoClassificadosAr.map(naoClassificadoAr => (
                  <TableRow key={naoClassificadoAr.nome}>
                    <TableCell>{naoClassificadoAr.nome}</TableCell>
                    <TableCell>{naoClassificadoAr.cpf}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CollapsibleContent>
        </Collapsible>
      </section>
      <section className='border-b'>
        <Collapsible>
          <CollapsibleTrigger className='w-full cursor-pointer p-1 rounded hover:bg-midle-gray transition duration-300'>
            <header className='flex flex-col pb-10 gap-1'>
              <div className='flex justify-between items-center'>
                <img
                  src={brasil}
                  alt='bandeira do brasil'
                  width={60}
                  height={40}
                />
                <p className='text-red-700'>Encerrado</p>
              </div>
              <h2 className='text-primary text-lg xl:text-2xl'>
                1ª chamada: Turma A (Quartas-feiras, das 19:00 às 21:00)
              </h2>
            </header>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p>
              Os selecionados e selecionadas abaixo devem acessar a plataforma{' '}
              <a
                href='https://nead.ifb.edu.br/'
                target='_blank'
                className='text-coral font-bold hover:underline hover:underline-offset-4'
              >
                nead.ifb.edu.br
              </a>
              , criar uma conta e informar ao professor Hênio{' '}
              <a
                href='mailto:henio.oliveira@ifb.edu.br'
                target='_blank'
                className='text-coral font-bold hover:underline hover:underline-offset-4'
              >
                henio.oliveira@ifb.edu.br
              </a>{' '}
              para que sejam vinculados e vinculadas ao ambiente de formação.
              Prazo: 9 de setembro de 2024.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>CPF</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {candidatos.map(candidato => (
                  <TableRow key={candidato.nome}>
                    <TableCell>{candidato.nome}</TableCell>
                    <TableCell>{candidato.cpf}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CollapsibleContent>
        </Collapsible>
      </section>
      <p className='text-center font-semibold p-2 my-5'>
        &ldquo;Transforme a Matemática com Criatividade: Inspire, Engaje,
        Eduque!&ldquo;
      </p>
    </div>
  )
}

export default Avisos
