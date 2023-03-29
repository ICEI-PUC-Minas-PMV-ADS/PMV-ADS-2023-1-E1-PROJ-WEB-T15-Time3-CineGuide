# **Especificações do Projeto**

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Com o crescente aumento dos conteúdos *streaming* o sistema irá realizar filtros de catálogos: com 19 cards, com as seguintes informações: imagem, título, título original, gêneros e sinopse; através de uma API que permite acesso á um banco de dados.O usuário poderá filtrar filmes e séries através dos gêneros, em diferentes plataformas de forma intuitiva e rápida. Os filmes também poderão ser salvos em localStorage podendo usuário montar sua própria lista de filmes.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## **Personas**

### Persona 1 - Rubens

#### Hard Facts
Rubens mora com os pais em Porto Alegre. Tem 23 anos, é solteiro e faz faculdade de arquitetura. Condição social: classe C. Trabalha como porteiro, tem como hobbie cinema - vê filmes escondido no trabalho e gasta boa parte do seu dinheiro com idas ao cinema e assinando plataformas de streaming.

#### Motivações
Rubens é apaixonado por filmes experimentais. Odeia o mainstream e consome obras pouco vistas. Adora discutir em fóruns da internet sobre correntes estéticas - as comédias italianas dos anos 70, o cinema underground da Polônia atual, coisas do tipo.

#### Frustrações
O conteúdo cinematográfico que Rubens gosta é raro e difícil de achar. Frequentemente fica zapeando pelas diversas plataformas que assina sem encontrar o que deseja. Se recusa a assistir conteúdo mainstream e acaba repetindo filmes que já viu involuntariamente por conta disso. 

#### Soluções/Apps que utiliza atualmente
Utiliza o Google como forma de otimizar suas buscas, mas como a plataforma não é específica de filmes, e frequentemente lembra do nome do filme, mas não do diretor, por exemplo, as buscas dão resultados que insatisfatórios.

Assina as plataformas: Mubi, Cardume Curtas, Belas Artes à La Carte, Oldflix, Reserva Imovision, Filmicca, e Mosfilm.

### Persona 2 - Ricardo

#### Hard Facts
Ricardo mora no Rio e é Diretor de Tecnologia e sócio fundador de uma startup chamada CineTEC que recebe aportes do Governo Federal para promover soluções tecnológicas que melhorem a distribuição dos filmes brasileiros. Tem acesso à base de dados do Canal Brasil, onde trabalhava anteriormente. É casado, tem dois filhos, 42 anos e uma rotina bastante intensa.

#### Motivações
Ricardo desenvolve seus negócios através de pesquisas de mercado sobre o público consumidor de cinema. Tem boa relação com grandes redes exibidoras e emissoras de TV brasileiras.

#### Frustrações
Ricardo não consegue acessar as bases de dados dos serviços de streaming estrangeiros. Apesar de grande respaldo institucional em território nacional e de sua notável habilidade como negociador, Ricardo não consegue diálogo com as Big Techs. Precisa urgentemente de um player que colete dados do público das mesmas que esteja aberto a negociações.

#### Soluções/Apps que utiliza atualmente
Ricardo, além de como consumidor assinar a Amazon Prime, Netflix e Star+, no seu negócio Ricardo se vale das bases de dados do Canal Brasil, Rede Record, Globo Play, Sesc Digital, Itaú Cultural Play, Spcine Play, Porta Curtas Petrobras e da Rede Cinemark (esta última dona de salas de cinema, não de streaming).

### Persona 3 - Joyce

#### Hard Facts
Joyce tem 62 anos, é professora de Psicologia na UFMG, mora em Belo Horizonte. Tem pouca familiaridade apetrechos digitais.

#### Motivações
Especialista em Micro Expressões, as aulas de Joyce são sempre ilustradas por trechos dos filmes que ela assiste aos domingos. Ela, além de gostar bastante de assistir um filminho, se cobra de sempre atualizar as referências cinematográficas que utiliza em aula para conseguir dialogar melhor com o universo jovem de seus alunos.

#### Frustrações
Joyce tem um grande arquivo de DVD's separados por temas. Mas não consegue mais usá-los em sala por incompatibilidade dos aparelhos de TV disponíveis atualmente. Seus alunos vivem te contando a respeito das plataformas de streaming, mas ela não sabe bem como mexer com isso.

#### Soluções/Apps que utiliza atualmente
Joyce assinou o Netflix tem um ano. Seu neto lhe ensinou a favoritar seus filmes, mas ela ainda tem dificuldade de criar listas por assuntos para exibir em suas aulas.

### Persona 4 - Marcelo

#### Hard Facts
Marcelo é Jornalista, tem 36 anos e reside em São José dos Campos (SP). Bastante ligado nos campeões de bilheteria, Marcelo vai ao cinema assistir ao blockbuster da vez todo sábado.

#### Motivações
Marcelo é editor chefe do caderno cultural do jornal local. Conhecido como Caneta Afiada, suas críticas de cinema fazem bastante sucesso nas redes sociais. 

#### Frustrações
Marcelo perde bastante tempo zapeando pela aba de lançamentos de cada plataforma. Frequentemente perde o timing de lançar uma crítica em relação a um filme que não teve tempo de assistir por conta deste problema.

#### Soluções/Apps que utiliza atualmente
Marcelo assina as 6 plataformas de streaming com mais assinantes no Brasil: Netflix, Amazon Prime, HBO Max, GloboPlay, Disney+ e Paramount+

### Persona 5 - Laura

#### Hard Facts
Laura tem 17 anos trabalha como doceira e reside com a família, em Marajá do Sena, interior do Maranhão, uma das cidades mais pobres do Brasil. Após conquistar com muito esforço seu primeiro celular, começou uma carreira de influencer postando vídeos na internet. 

#### Motivações
Quando começou a falar sobre tendências de comportamento ditadas por atores e atrizes famosos(as) em seus vídeos no Youtube, Laura começou a acumular um número expressivo de seguidores e já ganha seus primeiros rendimentos com a plataforma, o que a leva a assistir muitos filmes como pesquisa.

#### Frustrações
Laura não tem dinheiro para arcar com plataformas de streaming pagas. Seus conteúdos dependem de reviews sobre o trabalho de artistas famosos, mas as plataformas gratuitas não possuem boas ferramentas de busca capazes de filtrar tais conteúdos pelos atores que os protagonizam.

#### Soluções/Apps que utiliza atualmente
Laura se vale, além do Google e do Youtube, das plataformas de streaming, gratuitas: Pluto TV, Vix Cine e TV, ViKi, Net Movies, Tubi TV, Plex e LivreFlix. 

> **ORIENTAÇÕES PROFESSOR:**
> Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:
> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
> Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

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
|RF-001| O programa deve filtra os filmes de acordo com a *Streaming* e gênero desejados pelo usuário             |    ALTA    |      
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
