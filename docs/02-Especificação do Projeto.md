# **Especificações do Projeto**

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## **Personas**

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Persona 1 - Rubens

Hard Facts
Rubens mora com os pais em Porto Alegre. Tem 23 anos, é solteiro e faz faculdade de arquitetura. 

Interesses e Valores
Apaixonado por inovações estéticas, Rubens é interessado pelo cinema de vanguarda e movimentos literários dos anos 60. Em um dia típico, bebe bastante café e come comida congelada que prepara no microondas. 

Relação com dispositivos eletrônicos
Entre os dispositivos eletrônicos que usa, passa muito tempo no kindle e navegando em apps de streaming na sua smart TV. Rubens não assiste à programação de grandes emissoras nem passa muito tempo nas redes sociais.

Dia Típico
- Acorda às 10h30. Toma café da manhã e da os últimos retoques em um trabalho de faculdade que quase terminou na noite anterior. Almoça e sai para a aula.
- Após os primeiros horários é hora do café. Se reune com seus amigos e debatem durante todo intervalo as polêmicas sobre a última série experimental que saiu numa plataforma de streaming turca.
- Chega em casa por volta das 19h30. Faz seus trabalhos de faculdade e assiste suas séries e filmes ou lê seus contos de ficção até dormir.

Persona 2 - Ricardo

Hard Facts
Ricardo é Diretor de Tecnologia e sócio fundador de uma startup chamada CineTEC. Seu principal cliente é o Canal Brasil, onde trabalhava antes de fundar a empresa. Ele é casado com Mônica, que é piscicóloga. Os dois moram em uma kit net em Copacabana.

Interesses e Valores
Ricardo é do tipo próativo, não gosta de receber ordens, mas assume uma postura diplomata nos negócios. Tem um carro caro e um apartamento pequeno, e justifica a discrepância dizendo que um bom cartão de visitas ajuda a abrir portas. Sua esposa quer um filho, mas ele pede paciência, que as coisas precisam melhorar um pouco mais antes.

Relação com dispositivos eletrônicos
Ricardo tem um Xiomi de última geração, utiliza seu smartphone para tarefas complexas de programação com frequência. No seu escritório, desenvolve suas atividades em um HP Dragon Fly, que fez questão de adquirir a contra gosto de seu sócio. Em casa assiste às notícias em sua smart TV

Dia típico
- Acorda às 6h30, treina na acedemia ao lado de casa, volta, toma banho e corre para o trabalho, que fica a poucos quarteirões de sua casa. Lá toma café com Lurdinha, sua fiel escudeira que cuida da limpeza do escritório, enquanto desabafa sobre seus problemas pessoais.
- Na primeira etapa do dia checa sua agenda de reuniões, responde alguns e-mails e começa a coordenar o projeto de software inovador da sua empresa.
- Costuma almoçar ou com seu sócio ou com algum cliente em potencial em uma reunião. No primeiro caso vão sempre no Chico do Peixe, próximo ao escritório, no segundo, costumam escolher um lugar mais pomposo.
- Com frequência tem reuniões com clientes na parte da tarde, onde são demandados requisitos não informados anteriormente para os seus projetos que o estressam. Diplomata que é, Ricardo costuma ceder para não perder os clientes.
- Volta para casa por volta das 20h, sempre bastante cansado e assiste ao jornal nacional com sua esposa antes de dormirem.


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## **Histórias de Usuários**

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

Contexto:
Um site que busca filmes por nome, gênero ou ano, e mostra em quais plataformas estão disponíveis para assistir

[Persona] Como cinéfilo, tanto de filmes atuais quanto antigos, eu quero otimizar meu tempo quando for buscar por filmes, para que eu não use do meu tempo procurando e sim assistindo eles.

[Persona] Como Diretor de Tecnologia, eu quero um site com informações de onde estão os filmes mais assistidos deste e de outros anos, para que minha empresa tenha uma rede de dados sempre atualizada.

[Persona] Para que meus alunos tenham maior facilidade ao encontrar filmes, eu quero um site que busque por filmes antigos, como professor de psicologia uso muito essa ferramenta como base de estudo. 

[Persona] Como crítico de filmes do jornal local, eu quero um site para encontrar onde os filmes estão sendo lançados, para que eu não perca meu tempo e foco apenas procurando filmes.

[Persona] Para que eu consiga produzir conteúdos de qualidade com minha equipe, eu quero um site que me diga em qual plataforma é possível assistir um filme da atualidade como Coordenador de Mídia Social tenho como foco agilidade, qualidade e originalidade.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## **Requisitos**

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### **Requisitos Funcionais**

|ID    | Descrição do Requisito                                                                                 | Prioridade |
|------|--------------------------------------------------------------------------------------------------------|------------|
|RF-001| O programa deve filtra os filmes de acordo com a Streaming e gênero desejados pelo usuário             |    ALTA    |      
|RF-002| Sessão Nostalgia: O programa deve filtra os filmes de acordo com ano de lançamento e gênero dos filmes |    ALTA    |
|RF-003| O programa deve ter a função favoritar para salvar os filmes desejados em LocalStorage                 |    MÉDIA   |
|RF-004| O programa deve permitir a busca de filmes através do nome.                                            |    BAIXA   |
|RF-005| Os cards serão compostos por: Imagem, título, título original, gêneros, sinopse.                       |    ALTA    | 

### **Requisitos não Funcionais**

|ID     | Descrição do Requisito                                                       | Prioridade |
|-------|------------------------------------------------------------------------------|------------|
|RNF-001| O sistema deve ser responsivo em um dispositivos móvel                       |   ALTA     | 
|RNF-002| Deve processar requisições do usuário em no máximo 4s                        |   MÉDIO    | 
|RNF-003| O sistema deve rodar nos principais navegadores Web                          |   ALTA     |
|RNF-004| O ano de lançamento dos filmes, terá como referência o lançamento no Brasil. |   ALTA     |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## **Restrições**

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do primeiro semestre de 2023 |
|02| Não pode ser desenvolvido um módulo de backend                         |
|03| O sistema deve ser desenvolvido na linguagem JavaScript                |
|04| Deverá ser feita uma documentação sobre o projeto                      |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
