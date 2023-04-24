
# Projeto de Interface

O projeto de interface aqui proposto tem como princípios a simplicidade e a usabilidade. Isso, é viabilizado por uma interface minimalista e padronizada entre as diferentes telas. Estas serão projetadas para permitir uma boa experiência de uso tanto em *desktops* quanto em dispositivos móveis.

## Fluxo do usuário

O fluxo do usuário (*user flow*) dentro da aplicação pode ser visualizado no esquema abaixo ou no [*user flow* interativo](https://www.figma.com/proto/v1QlDU5F5g4dYkHxDsKStI/Wireframes_proj_cine_guide_ADS_PUC_E1?node-id=187-140&scaling=contain&page-id=0%3A1&starting-point-node-id=187%3A140). Em ambos, é possível compreender como ocorre a interação do usuário com a interface do projeto CineGuide.

![user flow interativo](img/static-user-flow.png)

## Wireframes

Na 1° tela o usuário acessa a home do site de busca de filmes. Na home, o usuário é apresentado a diversas opções de busca, como: caixa de pesquisa, filtro de filmes, filtro de séries, sessão nostalgia, seleção de gênero, seleção de streaming e Favoritos.

Se o usuário optar por fazer a busca por meio da caixa de pesquisa, ele deve digitar o nome do filme desejado e clicar em "Buscar". O site irá apresentar ao usuário uma página de resultados com uma lista de filmes que correspondem à busca realizada assim como é mostrado na 2° tela.

O usuário pode clicar em um dos filmes da lista para acessar a página com as informações do filme em questão. Nessa página, o usuário pode encontrar informações como: Título em português, título original do filme, ano de laçamento, nota, sinopse, diretor, entre outras. Assim como é apresentado na 3° tela.

Na 4° tela, se o usuário desejar buscar filmes utilizando filtros, ele pode clicar em "Filtro de Filmes" na home. Na página do filtro, o usuário pode selecionar opções como: gênero, streaming, ou mudar para a página de séries clicando em séries dentro dessa mesma página. Ao selecionar uma opção, o site apresenta ao usuário uma lista de filmes que correspondem ao filtro selecionado.

Como é apresentado na 5° tela vemos que se o usuário desejar buscar séries, ele pode clicar em "Filtro de Séries" na home. Na página do filtro de séries, o usuário pode selecionar opções como: gênero, streaming, ou mudar para a página de filmes clicando em filmes dentro dessa mesma página. Ao selecionar uma opção, o site apresenta ao usuário uma lista de séries que correspondem ao filtro selecionado.

Já na 6° tela, se o usuário desejar acessar a sessão de nostalgia, ele pode clicar em "Sessão Nostalgia" na home. Na página da sessão nostalgia, o usuário encontra uma lista de filmes antigos e clássicos.

Na 7° tela, se o usuário desejar buscar filmes por gênero, ele pode clicar em "Seleção de Gênero" na home.
Na página de seleção de gênero, o usuário pode escolher um gênero de sua preferência, como: ação, comédia, drama, entre outros. Ao selecionar um gênero, o site apresenta ao usuário uma lista de filmes que correspondem ao gênero selecionado.

Na 8° tela, se o usuário desejar buscar filmes por streaming, ele pode clicar em "Seleção de Streaming" na home. Na página de seleção de streaming, o usuário pode escolher um serviço de streaming de sua preferência, como: Netflix, Amazon Prime Video, entre outros. Ao selecionar um serviço de streaming, o site apresenta ao usuário uma lista de filmes disponíveis no serviço de streaming selecionado.

Por fim, na 9° e última tela, o usuário pode salvar seus filmes favoritos clicando em "Favoritos" na home.
Na página de favoritos, o usuário pode encontrar todos os filmes que salvou como favoritos e acessá-los facilmente.


# Reaproveitar


Em síntese, ao acessar a *home page* o usuário pode realizar buscas por meio da: 
- Caixa de pesquisa;
- Filtros (tipo de conteúdo: filme ou série, gênero, streaming)
- Sessão nostalgia
- Favoritos.

Além disso, ainda na home page haverá uma seleção de conteúdos que são lançamentos e de conteúdos bem avaliados por críticos.


Uma vez que o usuário faça uma busca, será exibida uma tela com lista *cards* dos conteúdos  (filmes ou séries) correspondentes à busca realizada. Ao clicar em um filme ou série, ocorrerá o redirecionamento para a card page, onde serão exibidas as seguintes informações do conteúdo:
- Título (português e original);
- Ano de laçamento;
- Gênero;
- Nota;
- Duração;
- Sinopse; 
- e a indicação de outras streamings que podem contam com o conteúdo.

Na página de filtros, o usuário pode selecionar opções de gênero ou streaming e o site apresenta uma lista de filmes ou séries correspondentes. Na sessão nostalgia, o usuário encontra uma lista de filmes antigos e clássicos. Na seleção de gênero, o usuário pode escolher um gênero de sua preferência e o site apresenta uma lista de filmes correspondentes. Na seleção de streaming, o usuário pode escolher um serviço de streaming de sua preferência e o site apresenta uma lista de filmes disponíveis no serviço. O usuário pode salvar seus filmes favoritos na página de favoritos.