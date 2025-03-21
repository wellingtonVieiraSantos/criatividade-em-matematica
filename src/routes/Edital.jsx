import { Link } from 'react-router-dom'

import argentina from '../assets/img/argentina.png'
import brasil from '../assets/img/brasil.png'

const Edital = () => {
  return (
    <div className='min-h-[calc(100vh-11rem)] xl:w-[1280px] m-auto mb-10 text-justify leading-loose p-3 divide-y-2 divide-terciary divide-dashed'>
      <section className='my-10'>
        <header>
          <img
            src={brasil}
            alt='bandera de argentina'
            width={96}
            height={96}
            className='h-24'
          />
          <h1 className='text-xl lg:text-4xl text-center my-10 text-primary'>
            CHAMADA PARA A FORMAÇÃO EM CRIATIVIDADE EM MATEMÁTICA ATRAVÉS DE
            PROBLEMAS ABERTOS - 3ª Edição
          </h1>
        </header>
        <p>
          Este edital destina-se a regular o processo de seleção dos cursistas
          que comporão a 3ª turma da formação em Criatividade em Matemática
          através de Problemas Abertos, realizado na modalidade a distância e
          promovido pela Universidade Estadual do Oeste do Paraná (Unioeste),
          Campus Cascavel, e pelo Instituto Federal de Brasília (IFB), Campus
          Planaltina. O curso faz parte do projeto de pesquisa (Sucupira):
          Formação e/em Práticas com Pensamento Computacional e Tecnologias
          Digitais para Professores que Ensinam Matemática.
        </p>
        <h2 className='my-4'>Público-alvo</h2>
        <p>
          Professores e professoras que ensinam Matemática na Educação Básica
          <em> (Ensino Fundamental – Anos Finais)</em> e estudantes de
          licenciatura em Matemática.
        </p>
        <h2 className='my-4'>
          Período de realização do curso (14/04/25 – 26/05/25)
        </h2>
        <p>
          A formação terá carga horária total de 56 horas, distribuídas da
          seguinte forma: <br />
          <strong>
            Encontros (24 horas síncronas + 32 horas assíncronas = 56 horas)
          </strong>
        </p>
        <h2 className='my-4'>
          Datas dos encontros síncronos (Segundas e Quartas-feiras, 14h-16h):
        </h2>
        <div className='grid grid-flow-col grid-rows-6 sm:grid-rows-4 place-items-center'>
          <span>01 - 14/04</span>
          <span>02 - 16/04</span>
          <span>03 - 23/04</span>
          <span>04 - 28/04</span>
          <span>05 - 30/04</span>
          <span>06 - 05/05</span>
          <span>07 - 07/05</span>
          <span>08 - 12/05</span>
          <span>09 - 14/05</span>
          <span>10 - 19/05</span>
          <span>11 - 21/05</span>
          <span>12 - 26/05</span>
        </div>
        <h2 className='my-4'>Modalidade do curso </h2>
        <p>
          A distância e gratuito via plataforma{' '}
          <a
            href='https://nead.ifb.edu.br/'
            target='_blank'
            className='text-coral font-bold hover:underline'
          >
            nead.ifb.edu.br
          </a>
          .
        </p>
        <h2 className='my-4'>Carga horária </h2>
        <p>
          A formação terá um total de <strong>56 horas</strong>, com{' '}
          <strong>24 horas de encontros síncronos</strong> e 32{' '}
          <strong>horas de atividades assíncronas</strong>.{' '}
        </p>
        <h2 className='my-4'>Vagas</h2>
        <p>
          Serão disponibilizadas <strong>20 vagas</strong>, distribuídas da
          seguinte forma:
        </p>
        <ul className='list-disc list-inside '>
          <li className='indent-4'>
            <strong>10 vagas</strong> para professores/as da Educação Básica que
            ensinam Matemática
          </li>
          <li className='indent-4'>
            <strong>10 vagas</strong> para estudantes de licenciatura em
            Matemática
          </li>
        </ul>
        <p>
          Caso o/a candidato/a tenha participado da chamada anterior, não poderá
          se inscrever nesta terceira chamada, pois o grupo 2 ainda está em
          formação.
        </p>
        <h2 className='my-4'>Processo de solicitação de inscrição </h2>
        <p>
          Os interessados deverão preencher um formulário online disponível em{' '}
          <strong>
            24 de março de 2025 (segunda-feira), às 13h (horário de Brasília)
          </strong>
          . O formulário de{' '}
          <a
            href='https://forms.gle/eDY6gqEszVgrkd218'
            target='_blank'
            className='text-coral font-bold hover:underline'
          >
            Inscrição
          </a>{' '}
          deverá conter as seguintes informações:
        </p>
        <ul className='list-disc list-inside '>
          <li className='indent-4'>Nome completo</li>
          <li className='indent-4'>CPF</li>
          <li className='indent-4'>Data de nascimento</li>
          <li className='indent-4'>Região e estado</li>
          <li className='indent-4'>E-mail</li>
          <li className='indent-4'>
            Termo de Consentimento Livre e Esclarecido (TCLE)
          </li>
        </ul>
        <p>
          Os candidatos receberão um e-mail com a confirmação da solicitação de
          inscrição no prazo máximo de <strong>24 horas</strong>. O processo de
          inscrição poderá ser encerrado antecipadamente caso o número de
          inscritos atinja <strong>40 solicitações</strong>.
        </p>
        <h2 className='my-4'>Critérios de preenchimento das vagas</h2>
        <p>
          As vagas serão preenchidas obedecendo à{' '}
          <strong>ordem cronológica</strong> de inscrição e à distribuição por
          categoria (professores e licenciandos). Caso haja mais solicitações do
          que vagas disponíveis, será formada uma{' '}
          <strong>lista de espera</strong>.
        </p>
        <h2 className='my-4'>Efetivação da inscrição</h2>
        <p>
          A lista de candidatos inscritos será divulgada até{' '}
          <strong>
            07 de abril de 2025 (segunda-feira), às 13h (horário de Brasília)
          </strong>
          . Os candidatos devem realizar o primeiro acesso à plataforma até{' '}
          <strong>11 de setembro de 2025 (sexta-feira), às 23h59</strong>, para
          confirmar sua inscrição. Caso o candidato não acesse a plataforma até
          essa data, sua vaga será destinada a um candidato da{' '}
          <strong>lista de espera</strong>.
        </p>
        <p>
          Para dúvidas, entre em contato pelo e-mail{' '}
          <a
            href='mailto:henio.oliveira@ifb.edu.br'
            target='_blank'
            className='text-coral font-bold hover:underline'
          >
            henio.oliveira@ifb.edu.br
          </a>
          .
        </p>
        <h2 className='my-4'>Conteúdo Programático</h2>
        <p>
          <em>
            Reflexões Teórico-Práticas 1 – A criatividade em um primeiro olhar
          </em>
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li className='indent-4'>
            Introduzindo a importância e o impacto da criatividade.
          </li>
          <li className='indent-4'>Wallas e o Pensamento Criativo. </li>
          <li className='indent-4'>
            Guilford e os Pensamentos Convergente e Divergente.
          </li>
          <li className='indent-4'>
            Fluência, Flexibilidade, Originalidade e Elaboração.
          </li>
          <li className='indent-4'>
            Torrance, o pai da Pesquisa em Criatividade.
          </li>
          <li className='indent-4'>Novaes e a Psicologia da criatividade. </li>
        </ul>
        <p>
          <em>
            Reflexões Teórico-Práticas 2 – A criatividade através dos problemas
            abertos
          </em>
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li className='indent-4'>O “somatório de Gauss”. </li>
          <li className='indent-4'>Alencar, Criatividade e Ensino. </li>
          <li className='indent-4'>Escolas criativas. </li>
        </ul>
        <p>
          <em>Reflexões Teórico-Práticas 3 – A Criatividade em Matemática</em>
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li className='indent-4'>Conceitos de Criatividade em Matemática.</li>
          <li className='indent-4'>A fórmula de Ofili. </li>
          <li className='indent-4'>Pesquisas em Criatividade em Matemática.</li>
          <li className='indent-4'>
            O Modelo dos Quatro C de Kaufman e Beghetto.
          </li>
        </ul>
        <p>
          <em>Reflexões Teórico-Práticas 4 – A Criatividade Docente</em>
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li className='indent-4'>
            O ensinar criativamente e o ensinar para a criatividade.
          </li>
          <li className='indent-4'>Avaliação e Criatividade em Matemática. </li>
          <li className='indent-4'>A Criatividade Docente. </li>
          <li className='indent-4'>Reflexões teórico-práticas autônomas </li>
          <li className='indent-4'>Práticas em criatividade em matemática. </li>
        </ul>
      </section>
      {/* -------------- editais antigos ------------- */}
      <section className='my-10'>
        <header>
          <img
            src={argentina}
            alt='bandera de argentina'
            width={96}
            height={96}
            className='h-24'
          />
          <p className='text-2xl text-red-700'>Encerrado</p>
          <h1 className='text-xl lg:text-4xl text-center my-10 text-primary'>
            Invitación para Formación en Creatividad en Matemática a través de
            Problemas Abiertos (Argentina)
          </h1>
        </header>
        <p>
          Este documento tiene como objetivo regular el proceso de selección de
          los cursantes que integrarán el grupo de profesores y profesoras
          argentinos para la formación en Creatividad en Matemática a través de
          Problemas Abiertos. La formación será semipresencial y gratuita,
          promovida por la Universidad Estatal del Oeste de Paraná (Unioeste),
          Campus Cascavel, el Instituto Federal de Brasília (IFB), Campus
          Planaltina, y la Universidad Nacional de Rosario (UNR), Facultad de
          Ciencias Exactas, Ingeniería y Agrimensura.
        </p>
        <p>
          <strong>Público objetivo:</strong> Profesores y profesoras, en
          ejercicio, que enseñan Matemática en el nivel secundario, formadores
          de profesores, y estudiantes avanzados de Profesorado en Matemática.
        </p>
        <p>
          <strong>Período de realización del curso:</strong> Clases presenciales
          en octubre (en Av. Pellegrini 250, FCEIA-UNR, Rosario, Argentina) y
          clases online sincrónicas en noviembre, del 03/10 al 28/11. ¡Todos los
          jueves! De 13:00 a 16:00 h.
        </p>
        <p>
          <strong>Modalidad del curso:</strong> Semipresencial, con 5 encuentros
          presenciales y 4 encuentros online sincrónicos a través de la
          plataforma nead.ifb.edu.br.
        </p>
        <p>
          <strong>Créditos:</strong> 56 horas reloj con evaluación.
        </p>
        <p>
          <strong>Cupos disponibles:</strong> 20.
        </p>
        <p>
          <strong>Inscripciones:</strong>{' '}
          <a
            href='#'
            target='_blank'
            className='text-coral font-bold hover:underline'
          >
            Inscripción (encerrado)
          </a>
        </p>
        <p>
          El formulario se abrirá el 20 de septiembre de 2024 a las 13:00 h y
          estará disponible hasta el 27 de septiembre de 2024 a las 23:00 h. La
          selección se realizará según el orden de inscripción registrado por el
          propio sistema. Si los cupos se completan antes de la fecha límite, el
          formulario será cerrado.
        </p>
        <h2 className='text-xl font-bold my-4'>Contenido Programático:</h2>
        <p>Reflexiones Teórico-Prácticas en torno a:</p>
        <ol className='list-decimal list-inside space-y-4'>
          <li>
            <strong>La creatividad en una primera mirada:</strong> Introducción
            a la importancia e impacto de la creatividad; Wallas y el
            Pensamiento Creativo; Guilford y los Pensamientos Convergente y
            Divergente; Fluidez, Flexibilidad, Originalidad y Elaboración;
            Torrance, el padre de la Investigación en Creatividad; Novaes y la
            Psicología de la Creatividad.
          </li>
          <li>
            <strong>La creatividad a través de problemas abiertos:</strong> El
            “sumatorio de Gauss”; Alencar, Creatividad y Enseñanza; Escuelas
            creativas.
          </li>
          <li>
            <strong>La Creatividad en Matemática:</strong> Conceptos de
            Creatividad en Matemática; La fórmula de Ofili; Investigaciones en
            Creatividad en Matemática; El Modelo de los Cuatro C de Kaufman y
            Beghetto.
          </li>
          <li>
            <strong>La Creatividad Docente:</strong> Enseñar creativamente y
            enseñar para la creatividad; Evaluación y Creatividad en Matemática;
            La Creatividad Docente; Reflexiones teórico-prácticas autónomas;
            Prácticas en creatividad en matemática.
          </li>
        </ol>
      </section>
      <section className='my-10'>
        <header>
          <img
            src={brasil}
            alt='bandeira do brasil'
            width={96}
            height={96}
            className='h-24'
          />
          <p className='text-2xl text-red-700'>Encerrado</p>
          <h1 className='text-xl lg:text-4xl text-center my-10 text-primary'>
            Chamada para a Formação em Criatividade em Matemática através de
            Problemas Abertos
          </h1>
        </header>
        <p>
          Este edital destina-se a regular o processo de seleção dos cursistas
          que comporão a turma da formação em Criatividade em Matemática através
          de Problemas Abertos, realizado na modalidade a distância e promovido
          pela Universidade Estadual do Oeste do Paraná (Unioeste), Campus
          Cascavel e pelo Instituto Federal de Brasília (IFB), Campus Planaltina
          e faz parte do projeto de pesquisa (Sucupira): Formação e/em Práticas
          com Pensamento Computacional e Tecnologias Digitais para Professores
          que Ensinam Matemática.{' '}
        </p>
        <ol className='list-decimal list-inside space-y-4'>
          <li>
            <strong>Público-alvo:</strong> Professores e professoras que ensinam
            Matemática no Ensino Fundamental, Anos finais, em exercício.
          </li>
          <li>
            <strong>Períodos de realização do Curso</strong>
            <ol className='list-disc list-inside'>
              <li>
                1ª etapa - De 16 de setembro a 4 de novembro de 2024 [2 meses].
              </li>
              <li>
                2ª etapa - De 11 de novembro de 2024 a 11 de maio de 2025 [6
                meses].
              </li>
            </ol>
          </li>
          <li>
            <strong>Modalidade do Curso:</strong> A distância e gratuito via
            plataforma{' '}
            <a
              href='https://nead.ifb.edu.br/'
              target='_blank'
              className='text-coral font-bold hover:underline'
            >
              nead.ifb.edu.br
            </a>
            .
          </li>
          <li>
            <strong>Carga horária </strong>
            <p>
              A formação está dividida em dois momentos: o primeiro terá duração
              de dois meses, incluindo 8 encontros síncronos semanais de 2 horas
              cada, além de 2 horas semanais de atividades assíncronas. O
              segundo momento estende-se por seis meses e conta com encontros
              mensais de 2 horas síncronas, além de 2 horas de atividades
              assíncronas. A carga horária da formação está dividida do seguinte
              modo:
            </p>
            <table className='table-auto my-4 divide-y m-auto lg:m-0'>
              <thead>
                <tr>
                  <th scope='col' className='py-2'>
                    Etapa
                  </th>
                  <th scope='col'>Carga Horária</th>
                </tr>
              </thead>
              <tbody>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 1</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 2</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 3</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 4</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 5</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 6</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 7</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 1 - Semana 8</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 2 - Mês 1</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 2 - Mês 2</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 2 - Mês 3</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 2 - Mês 4</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 2 - Mês 5</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Etapa 2 - Mês 6</td>
                  <td className='text-right'>4 h</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2 text-center'>Total</td>
                  <td className='text-right'>56 h</td>
                </tr>
              </tbody>
            </table>
            <p>
              Para obter a certificação da formação, o cursista deverá
              completar, no mínimo, 75% das atividades propostas, tanto
              síncronas quanto assíncronas.
            </p>
          </li>
          <li>
            <strong>Vagas</strong>
            <p>
              É disponibilizado um total de 30 vagas divididas em duas turmas,
              para o território nacional. Tendo em vista atender a candidatos e
              candidatas de todas as macrorregiões brasileiras. Essas regiões
              são:
            </p>
            <p>
              <span className='font-bold'>Região Norte</span>: Acre, Amapá,
              Amazonas, Pará, Rondônia, Roraima e Tocantins.
            </p>
            <p>
              <span className='font-bold'>Região Nordeste</span>: Alagoas,
              Bahia, Ceará, Maranhão, Paraíba, Pernambuco, Piauí, Rio Grande do
              Norte e Sergipe.
            </p>
            <p>
              <span className='font-bold'>Região Centro-Oeste</span>: Goiás,
              Mato Grosso, Mato Grosso do Sul e o Distrito Federal.
            </p>
            <p>
              <span className='font-bold'>Região Sudeste</span>: Espírito Santo,
              Minas Gerais, Rio de Janeiro e São Paulo.
            </p>
            <p>
              <span className='font-bold'>Região Sul</span>: Paraná, Rio Grande
              do Sul e Santa Catarina.
            </p>
            <p>A quantidade de vagas está de acordo com o quadro abaixo.</p>
            <table className='table-auto my-4 divide-y m-auto lg:m-0'>
              <thead>
                <tr>
                  <th scope='col' className='py-2'>
                    Região
                  </th>
                  <th scope='col'>Vagas</th>
                </tr>
              </thead>
              <tbody>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Norte</td>
                  <td className='text-right'>6</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Nordeste</td>
                  <td className='text-right'>6</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Centro-Oeste</td>
                  <td className='text-right'>6</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Sul</td>
                  <td className='text-right'>6</td>
                </tr>
                <tr className='odd:bg-slate-50 even:bg-blue-100'>
                  <td className='py-2'>Sudeste</td>
                  <td className='text-right'>6</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <strong>Turmas disponíveis e quantidade de vagas</strong>
            <p>Turma A – Segundas-feiras, das 09:00 às 11:00, 15 vagas.</p>
            <p>Turma B – Quartas-feiras, das 19:00 às 21:00, 15 vagas.</p>
          </li>
          <li>
            <strong>Processo de solicitação de inscrição</strong>
            <p>
              Para se candidatar a uma vaga no curso, os interessados e
              interessadas deverão preencher um formulário online com sua
              solicitação. Esse formulário estará disponível somente em 1º de
              Setembro de 2024 (domingo) das 13:00 h às 23:59 h (horário de
              Brasília). Os interessados e interessadas deverão acessar o
              formulário disponível em:{' '}
              <a
                href='#'
                target='_blank'
                className='text-coral font-bold hover:underline'
              >
                Inscreva-se! (encerrado)
              </a>{' '}
              e preencher os seguintes campos: nome, CPF, data de nascimento,
              Região, estado, <span translate='no'> e-mail</span>, turma de
              preferência e o Termo de Consentimento Livre e Esclarecido (TCLE)
              aceitando participar da pesquisa a qual se racionada esta
              formação: abordagens criativas através de problemas abertos nos
              processos de formação com professores de matemática, caso o
              candidato não esteja de acordo com a participação, deverá esperar
              uma nova convocatória, sem data definida. Por último o candidato
              deverá clicar em ENVIAR para que sua solicitação de inscrição seja
              registrada no sistema online.
            </p>
            <p>
              Os candidatos receberão um <span translate='no'> e-mail </span>{' '}
              com confirmação da solicitação de inscrição no prazo máximo de 24
              horas, contado do momento da conclusão de sua solicitação de
              inscrição. O processo de solicitação de inscrição com término
              previsto para 23:59 h (horário de Brasília) de 1º de setembro de
              2024 poderá ser encerrado antecipadamente no momento em que a
              quantidade de inscritos atingir 150% do total de vagas, ou seja,
              45 solicitações de inscrição.
            </p>
          </li>
        </ol>
        <h2 className='text-xl font-bold my-4'>Preenchimento das vagas</h2>
        <p>
          As vagas descritas no item 5 serão preenchidas obedecendo à ordem
          cronológica de inscrição dos candidatos e ao estado preenchido no
          formulário de inscrição.
        </p>
        <p>
          Caso a quantidade de solicitações de inscrição de um estado seja maior
          que a quantidade de vagas oferecidas, os candidatos que não tiverem
          suas inscrições efetivadas comporão uma lista de espera. Caso o número
          de solicitações de inscrições não atinja o número de vagas previstas
          para uma ou mais regiões, tais vagas serão preenchidas pelos
          candidatos da lista de espera, obedecendo a ordem cronológica das
          inscrições. O sistema de inscrições online registra os dados do
          formulário conforme preenchido pelo candidato e, também, registra a
          data, o horário da conclusão da inscrição e a ordem geral da
          solicitação de inscrição.
        </p>
        <h2 className='text-xl font-bold my-4'>Efetivação da inscrição</h2>
        <p>
          Até às 23h59min (horário de Brasília) de 05 de setembro de 2024
          (segunda-feira), será disponibilizada, na aba{' '}
          <Link to='/avisos' className='text-coral font-bold hover:underline'>
            avisos
          </Link>
          , uma lista dos candidatos inscritos na Formação em Criatividade em
          Matemática através de Problemas Abertos, e, também, uma lista de
          candidatos da lista de espera. Os inscritos serão considerados
          cursistas desta formação após realizarem seu primeiro acesso ao
          sistema online, e o prazo máximo para esse acesso encerra às 23h59min
          (horário de Brasília) de 09 de setembro de 2024 (segunda-feira). Para
          acessar o sistema online, os inscritos receberão, via{' '}
          <span translate='no'> e-mail</span>, informações de como cadastrar um
          usuário e senha. Em caso de não recebimento dos dados de acesso, o
          candidato deverá solicitar seus dados enviando{' '}
          <span translate='no'> e-mail </span> para{' '}
          <a
            href='mailto:henio.oliveira@ifb.edu.br'
            target='_blank'
            className='text-coral font-bold hover:underline'
          >
            henio.oliveira@ifb.edu.br
          </a>{' '}
          dentro do prazo previsto para a confirmação das inscrições. Não
          havendo o primeiro acesso ao sistema online do curso até a data
          prevista, o candidato perderá sua vaga e a qual será redistribuída aos
          candidatos da lista de espera, compondo assim uma lista de 2ª chamada.
        </p>
        <p>
          A lista de 2ª chamada será divulgada na aba{' '}
          <Link to='/avisos' className='text-coral font-bold hover:underline'>
            avisos
          </Link>{' '}
          até 14h (horário de Brasília) de 12 de setembro de 2024. Os candidatos
          que comporão essa lista deverão realizar seu primeiro acesso ao
          sistema online do curso para confirmação da inscrição até às 23h59min
          (horário de Brasília) de 15 de setembro de 2024 (domingo).
        </p>
        <h2 className='text-xl font-bold my-4'>Conteúdo Programático</h2>
        <ul className='text-left'>
          <li>
            <h3 className='font-bold'>
              Reflexões Teórico-Práticas 1 – A criatividade em um primeiro olhar
            </h3>
            <ul className='list-inside list-disc'>
              <li>Introduzindo a importância e o impacto da criatividade.</li>
              <li>Wallas e o Pensamento Criativo.</li>
              <li>Guilford e os Pensamentos Convergente e Divergente.</li>
              <li>Fluência, Flexibilidade, Originalidade e Elaboração.</li>
              <li>Torrance, o pai da Pesquisa em Criatividade.</li>
              <li>Novaes e a Psicologia da criatividade.</li>
            </ul>
          </li>
          <li>
            <h3 className='font-bold mt-4'>
              Reflexões teórico-práticas 2 – A criatividade através dos
              problemas abertos
            </h3>
            <ul className='list-inside list-disc'>
              <li>O “somatório de Gauss”.</li>
              <li>Alencar, Criatividade e Ensino.</li>
              <li>Escolas criativas.</li>
            </ul>
          </li>
          <li>
            <h3 className='font-bold mt-4'>
              Reflexões teórico-práticas 3 – A Criatividade em Matemática
            </h3>
            <ul className='list-inside list-disc'>
              <li>Conceitos de Criatividade em Matemática.</li>
              <li>A fórmula de Ofili.</li>
              <li>Pesquisas em Criatividade em Matemática.</li>
              <li>O Modelo dos Quatro C de Kaufman e Beghetto.</li>
            </ul>
          </li>
          <li>
            <h3 className='font-bold mt-4'>
              Reflexões teórico-práticas 4 – A Criatividade Docente
            </h3>
            <ul className='list-inside list-disc'>
              <li>O ensinar criativamente e o ensinar para a criatividade.</li>
              <li>Avaliação e Criatividade em Matemática.</li>
              <li>A Criatividade Docente.</li>
            </ul>
          </li>
          <li>
            <h3 className='font-bold mt-4'>
              Reflexões teórico-práticas autonomas
            </h3>
            <ul className='list-inside list-disc'>
              <li>Práticas em criatividade em matemática.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Edital
