# Plano de Testes de Software
Após uma reunião com a equipe de teste e após uma serie de perguntas feitas decidimos responder as seguintes questões

1. Quais atributos da qualidade deverão ser testados?
Se todas as funções correspondem corretamente

2. Quem realizará os testes?
A equipe de testes

3. Quais recursos serão utilizados?
O próprio site, a equipe não utilizará ferramentas externas

4. Quais as dependências entre os atributos de qualidade?
Usabilidade, desempenho, confiabilidade, disponibilidade, segurança e privacidade, acessibilidade e navegabilidade.

5. Quais as dependências entre as atividades de desenvolvimento?
Algumas das dependências durante o processo de desenvolvimento são:
- Analise dos requisitos e o design;
- Design e implementação;
- Implementação e testes

7. Como o processo e a qualidade do sistema de software serão acompanhados?
Pela equipe de testes e pelo feedback dos usuários

Portanto, o seguinte plano foi traçado 
<table border="1">
    <tr>
        <td>Caso de uso</td>
        <td>Passos</td>
        <td>Resultados Esperado</td>
    </tr>
     <tr>
        <td>Processo de Login com credenciais corretas</td>
        <td>1. Acesse a página de login do site</td>
        <td>A página de login é exibida corretamente</td>
    </tr>
    <tr>
        <td></td>
        <td>2. Insira um nome de usuário válido </td>
        <td>O nome de usuário é aceito</td>
    </tr>
     <tr>
        <td></td>
        <td>3. Insira uma senha válida </td>
        <td>A senha é aceita</td>
    </tr>
    <tr>
        <td></td>
        <td>4. Clique o botão de login </td>
        <td>O usuário é autenticado com sucesso</td>
    </tr>
     <tr>
        <td>Processo de Login com credenciais incorretas</td>
        <td>1. Acesse a página de login do site</td>
        <td>A página de login é exibida corretamente</td>
    </tr>
     <tr>
        <td></td>
        <td>2. Insira um nome de usuário válido </td>
        <td>O nome de usuário não é aceito</td>
    </tr>
     <tr>
        <td></td>
        <td>3. Insira uma senha válida </td>
        <td>A senha não é aceita</td>
    </tr>
    <tr>
        <td></td>
        <td>4. Clique o botão de login </td>
        <td>O usuário não é autenticado</td>
    </tr>
    <tr>
        <td>Pesquisa de filmes </td>
        <td>1. O usuário deve acessar o campo de pesquisa de filmes ou series</td>
        <td>Ao pesquisar um filme ou serie o usuário deve encontrar o resultado da sua pesquisa</td>
    </tr>
    <tr>
        <td></td>
        <td>2. Inserir um termo de pesquisa que seja válido </td>
        <td>O usuário recebe o resultado da sua pesquisa</td>
    </tr>
    <tr>
        <td></td>
        <td>3. O usuário verifica se os resulados correspondem a sua pesquisa</td>
        <td>O usuário comprova o sucesso do resuldato da sua pesquisa</td>
    </tr>
    <tr>
        <td></td>
        <td>4. O usuário repete os últimos dois passos, com diferentes termos de pesquisa </td>
        <td>O usuário recebe os filmes ou series que correspondem a pesquisa inserida </td>
    </tr>
    <tr>
        <td>Aplicação de algum filtro disponível</td>
        <td>1. Aplicar um filtro sendo ele, ano, gênero, streaming, atores</td>
        <td>A lista com os resultados correspondentes ao filtro é exibida</td>
    </tr>
    <tr>
        <td></td>
        <td>2. Verifique se os resultados exibidos corespondem apenas ao filtro</td>
        <td>A lista exibida corresponde ao filtro</td>
    </tr>
    <tr>
        <td>Informações dos Cards</td>
        <td>1. Realize uma pesquisa de filme conforme descrito anteriormente</td>
        <td>O usuário recebe o resultado da sua pesquisa</td>
    </tr>
    <tr>
        <td></td>
        <td>2. Selecione um dos cards na lista de resultados</td>
        <td>A página de detalhes do conteúdo escolhido é exibida corretamente</td>
    </tr>
    <tr>
        <td></td>
        <td>3. Verifique se todas as informações sobre o conteúdo são exibidas</td>
        <td>As informações são exibidas</td></td>
    </tr>
    <tr>
        <td></td>
        <td>4. Verifique se os links para trailers estão funcionando corretamente</td>
        <td>Os links estão corretos e sem erros</td>
    </tr>
</table>
 
## Ferramentas de Testes (Opcional)

Usamos apenas o site para os testes, e o print screen para registro
