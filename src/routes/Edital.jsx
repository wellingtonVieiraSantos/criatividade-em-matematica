import { Link } from "react-router-dom"

const Edital = () => {
  return (
    <div className="min-h-[calc(100vh-11rem)] xl:w-[1280px] m-auto mb-10 text-justify leading-loose p-3">
      <h1 className="text-xl lg:text-4xl text-center my-10 text-primary">Chamada para a Formação em Criatividade em Matemática através de Problemas Abertos</h1>
      <p>Este edital destina-se a regular o processo de seleção dos cursistas que comporão a turma da formação em Criatividade em Matemática através de Problemas Abertos, realizado na modalidade a distância e promovido pela Universidade Estadual do Oeste do Paraná (Unioeste), Campus Cascavel e pelo Instituto Federal de Brasília (IFB), Campus Planaltina e faz parte do projeto de pesquisa (Sucupira): Formação e/em Práticas com Pensamento Computacional e Tecnologias Digitais para Professores que Ensinam Matemática. </p>
      <ol className="list-decimal list-inside space-y-4">
        <li><strong>Público-alvo:</strong> Professores e professoras que ensinam Matemática no Ensino Fundamental, Anos finais, em exercício.</li>
        <li><strong>Períodos de realização do Curso</strong>
          <ol className="list-disc list-inside">
            <li>1ª etapa - De 16 de setembro a 4 de novembro de 2024 [2 meses].</li>
            <li>2ª etapa - De 11 de novembro de 2024 a 11 de maio de 2025 [6 meses].</li>
          </ol>
        </li>
        <li><strong>Modalidade do Curso:</strong> A distância e gratuito via plataforma <a href="https://nead.ifb.edu.br/" target="_blank" className="text-coral font-bold hover:underline">nead.ifb.edu.br</a>.</li>
        <li><strong>Carga horária </strong>
          <p>A formação está dividida em dois momentos: o primeiro terá duração de dois meses, incluindo 8 encontros síncronos semanais de 2 horas cada, além de 2 horas semanais de atividades assíncronas. O segundo momento estende-se por seis meses e conta com encontros mensais de 2 horas síncronas, além de 2 horas de atividades assíncronas. A carga horária da formação está dividida do seguinte modo:</p>
          <table className="table-auto my-4 divide-y m-auto lg:m-0">
            <thead>
              <tr>
                <th scope="col" className="py-2">Etapa</th>
                <th scope="col">Carga Horária</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 1</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 2</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 3</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 4</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 5</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 6</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 7</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 1 - Semana 8</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 2 - Mês 1</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 2 - Mês 2</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 2 - Mês 3</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 2 - Mês 4</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 2 - Mês 5</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Etapa 2 - Mês 6</td>
                <td className="text-right">4 h</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2 text-center">Total</td>
                <td className="text-right">56 h</td>
              </tr>
            </tbody>
          </table>
          <p>Para obter a certificação da formação, o cursista deverá completar, no mínimo, 75% das atividades propostas, tanto síncronas quanto assíncronas.</p>
        </li>
        <li><strong>Vagas</strong>
          <p>É disponibilizado um total de 30 vagas divididas em duas turmas, para o território nacional. Tendo em vista atender a candidatos e candidatas de todas as macrorregiões brasileiras. Essas regiões são:</p>
          <p><span className="font-bold">Região Norte</span>: Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins.</p>
          <p><span className="font-bold">Região Nordeste</span>: Alagoas, Bahia, Ceará, Maranhão, Paraíba, Pernambuco, Piauí, Rio Grande do Norte e Sergipe.</p>
          <p><span className="font-bold">Região Centro-Oeste</span>: Goiás, Mato Grosso, Mato Grosso do Sul e o Distrito Federal.</p>
          <p><span className="font-bold">Região Sudeste</span>: Espírito Santo, Minas Gerais, Rio de Janeiro e São Paulo.</p>
          <p><span className="font-bold">Região Sul</span>: Paraná, Rio Grande do Sul e Santa Catarina.</p>
          <p>A quantidade de vagas está de acordo com o quadro abaixo.</p>
          <table className="table-auto my-4 divide-y m-auto lg:m-0">
            <thead>
              <tr>
                <th scope="col" className="py-2">Região</th>
                <th scope="col" >Vagas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Norte</td>
                <td className="text-right">6</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Nordeste</td>
                <td className="text-right">6</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Centro-Oeste</td>
                <td className="text-right">6</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Sul</td>
                <td className="text-right">6</td>
              </tr>
              <tr className="odd:bg-slate-50 even:bg-blue-100">
                <td className="py-2">Sudeste</td>
                <td className="text-right">6</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li><strong>Turmas disponíveis e quantidade de vagas</strong>
          <p>Turma A – Segundas-feiras, das 09:00 às 11:00, 15 vagas.</p>
          <p>Turma B – Quartas-feiras, das 19:00 às 21:00, 15 vagas.</p>
        </li>
        <li><strong>Processo de solicitação de inscrição</strong>
          <p>Para se candidatar a uma vaga no curso, os interessados e interessadas deverão preencher um formulário online com sua solicitação. Esse formulário estará disponível somente em 1º de Setembro de 2024 (domingo) das 13:00 h às 23:59 h (horário de Brasília). Os interessados e interessadas deverão acessar o formulário disponível em: <a href="https://forms.gle/HDxCavwwbHy2XWT76" target="_blank" className="text-coral font-bold hover:underline">Inscreva-se!</a> e preencher os seguintes campos: nome, CPF, data de nascimento, Região, estado, e-mail, turma de preferência e o Termo de Consentimento Livre e Esclarecido (TCLE) aceitando participar da pesquisa a qual se racionada esta formação: abordagens criativas através de problemas abertos nos processos de formação com professores de matemática, caso o candidato não esteja de acordo com a participação, deverá esperar uma nova convocatória, sem data definida. Por último o candidato deverá clicar em ENVIAR para que sua solicitação de inscrição seja registrada no sistema online.</p>
          <p>Os candidatos receberão um e-mail com confirmação da solicitação de inscrição no prazo máximo de 24 horas, contado do momento da conclusão de sua solicitação de inscrição.
            O processo de solicitação de inscrição com término previsto para 23:59 h (horário de Brasília) de 1º de setembro de 2024 poderá ser encerrado antecipadamente no momento em que a quantidade de inscritos atingir 150% do total de vagas, ou seja, 45 solicitações de inscrição.
          </p>
        </li>
      </ol>
      <h2 className="text-xl font-bold my-4">Preenchimento das vagas</h2>
      <p>As vagas descritas no item 5 serão preenchidas obedecendo à ordem cronológica de inscrição dos candidatos e ao estado preenchido no formulário de inscrição.</p>
      <p>Caso a quantidade de solicitações de inscrição de um estado seja maior que a quantidade de vagas oferecidas, os candidatos que não tiverem suas inscrições efetivadas comporão uma lista de espera.
        Caso o número de solicitações de inscrições não atinja o número de vagas previstas para uma ou mais regiões, tais vagas serão preenchidas pelos candidatos da lista de espera, obedecendo a ordem cronológica das inscrições. O sistema de inscrições online registra os dados do formulário conforme preenchido pelo candidato e, também, registra a data, o horário da conclusão da inscrição e a ordem geral da solicitação de inscrição.
      </p>
      <h2 className="text-xl font-bold my-4">Efetivação da inscrição</h2>
      <p>Até às 23h59min (horário de Brasília) de 05 de setembro de 2024 (segunda-feira), será disponibilizada, na aba <Link to="/avisos" className="text-coral font-bold hover:underline">avisos</Link>, uma lista dos candidatos inscritos na Formação em Criatividade em Matemática através de Problemas Abertos, e, também, uma lista de candidatos da lista de espera. Os inscritos serão considerados cursistas desta formação após realizarem seu primeiro acesso ao sistema online, e o prazo máximo para esse acesso encerra às 23h59min (horário de Brasília) de 09 de setembro de 2024 (segunda-feira). Para acessar o sistema online, os inscritos receberão, via e-mail, informações de como cadastrar um usuário e senha. Em caso de não recebimento dos dados de acesso, o candidato deverá solicitar seus dados enviando e-mail para <a href="mailto:henio.oliveira@ifb.edu.br" target="_blank" className="text-coral font-bold hover:underline">henio.oliveira@ifb.edu.br</a> dentro do prazo previsto para a confirmação das inscrições. Não havendo o primeiro acesso ao sistema online do curso até a data prevista, o candidato perderá sua vaga e a qual será redistribuída aos candidatos da lista de espera, compondo assim uma lista de 2ª chamada.</p>
      <p>A lista de 2ª chamada será divulgada na aba <Link to="/avisos" className="text-coral font-bold hover:underline">avisos</Link> até 14h (horário de Brasília) de 12 de setembro de 2024. Os candidatos que comporão essa lista deverão realizar seu primeiro acesso ao sistema online do curso para confirmação da inscrição até às 23h59min (horário de Brasília) de 15 de setembro de 2024 (domingo).</p>
      <h2 className="text-xl font-bold my-4">Conteúdo Programático</h2>
      <ul className="text-left">
        <li>
          <h3 className="font-bold">Reflexões Teórico-Práticas 1 – A criatividade em um primeiro olhar</h3>
          <ul className="list-inside list-disc">
            <li>Introduzindo a importância e o impacto da criatividade.</li>
            <li>Wallas e o Pensamento Criativo.</li>
            <li>Guilford e os Pensamentos Convergente e Divergente.</li>
            <li>Fluência, Flexibilidade, Originalidade e Elaboração.</li>
            <li>Torrance, o pai da Pesquisa em Criatividade.</li>
            <li>Novaes e a Psicologia da criatividade.</li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold mt-4">Reflexões teórico-práticas 2 – A criatividade através dos problemas abertos</h3>
          <ul className="list-inside list-disc">
            <li>O “somatório de Gauss”.</li>
            <li>Alencar, Criatividade e Ensino.</li>
            <li>Escolas criativas.</li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold mt-4">Reflexões teórico-práticas 3 – A Criatividade em Matemática</h3>
          <ul className="list-inside list-disc">
            <li>Conceitos de Criatividade em Matemática.</li>
            <li>A fórmula de Ofili.</li>
            <li>Pesquisas em Criatividade em Matemática.</li>
            <li>O Modelo dos Quatro C de Kaufman e Beghetto.</li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold mt-4">Reflexões teórico-práticas 4 – A Criatividade Docente</h3>
          <ul className="list-inside list-disc">
            <li>O ensinar criativamente e o ensinar para a criatividade.</li>
            <li>Avaliação e Criatividade em Matemática.</li>
            <li>A Criatividade Docente.</li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold mt-4">Reflexões teórico-práticas autonomas</h3>
          <ul className="list-inside list-disc">
            <li>Práticas em criatividade em matemática.</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Edital