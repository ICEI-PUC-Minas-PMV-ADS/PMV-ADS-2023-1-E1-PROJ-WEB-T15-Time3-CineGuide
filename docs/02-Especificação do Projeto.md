# **Especificações do Projeto**

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## **Personas**

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

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
|RNF-004| Cada Lista de filmes deve ter 2 páginas com 19 cards cada.                   |   MÉDIO    |
|RNF-005| O ano de lançamento dos filmes, terá como referência o lançamento no Brasil. |   ALTA     |


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
