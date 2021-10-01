# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas

### Persona 01: 

<img src="persona1.jpg" alt="drawing" style="width:200px;"/>
Nome: Pamela
Idade: 20 anos
Hobby: Ler, ir ao cinema, sair com amigos
Ocupação: Estagiária de veterinária
Personalidade: Tímida, porém tem facilidade em fazer amizades e conversar bastante quando animada
Objetos e lugares: Redes sociais, normalmente no celular quando está fora de casa, e no computador quando está em casa.
Objetivos chaves: Ela sofre abuso de parentes de sua família e precisa de um serviço para ter maior facilidade para fazer denúncias e também de incentivo para realizar essas denúncias e se sentir segura. 
Como ela devemos tratá-la: Tratar com empatia e sempre escutar as suas dores pois ela teve poucas oportunidades de conversar sobre o assunto

### Persona 02: 

<img src="persona2.jpg" alt="drawing" style="width:200px;"/>
Nome: Vera Lúcia
Idade: 57 anos
Hobby: Crochê, leitura
Ocupação: Aposentada
Personalidade: Extrovertida, fácil de conversar
Objetos e lugares: Costuma utilizar bastante o celular e computador para ler notícias e conversar com amigos e parentes
Objetivos chaves: Ela sofreu violência no passado quando não havia leis como a Maria da Penha, mas ela ainda tem traumas e medo do ex-marido
Como ela devemos tratá-la: Tratar ela com empatia e paciência sempre escutando o que ela tem a dizer



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuária do sistema  | Uma forma de denunciar meu agressor com segurança.          | Para me protejer e fazer justiça.           |
|Usuária do sistema       | Uma forma de denunciar meu agressor e conhecer outras vítimas de 
agressão (como uma correte do bem)      |Para me protejer, fazer justiça e incentivar outras mulheres |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|Permitir que o usuario cadastre contatos/amigos próximos:Tela de cadastro de contatos próximos à vítima que em caso de emergência serão acionados.  | ALTA | 
|RF-002| Dispor de um botão para acionamento emergencial da polícia e amigos próximos que enviará automaticamente uma mensagem padrão de denúncia.   | ALTA |
|RF-003| Permitir cadastro de usuários no aplicativo  | MÉDIA |
|RF-004| Possuir um menu lateral com opções de navegação pelo sistema.  | MÉDIA |
|RF-005| Conceber a função de denúncia completa, com descrição e arquivos.  | ALTA |
|RF-006| Possuir botão de adicionar arquivos em "Denúncia completa" para que seja possível adicionar mais de um registros. | MÉDIA |
|RF-007| O sistema deve criar um histórico de denúncias realizadas pelo usuario cadastrado  | MÉDIA |
|RF-008| O sistema deve filtrar a data na tela de "Histórico de denúncias". | MÉDIA |
|RF-009| O sistema deve ter um botão para adicionar relatos das usuárias do aplicativo  | ALTO |
|RF-010| O sistema deve filtrar os relatos  | MÉDIA |
|RF-011| O sistema deve ter um botão de voltar páginas  | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar  dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar denuncias do usuário em no máximo 3s |  ALTA | 
|RNF-003| O sistema tem um número máximo de 50 contatos para serem cadastrados|  ALTA | 
|RNF-004| Para o sistema de denúncia rápida funcionar, o usuário deverá ter cadastrado os números | ALTA | 
|RNF-005| Para acessar o  histórico de denuncias o usuario deverá se cadastrar no sistema | MÉDIA | 
|RNF-006| O número de fotos na denuncia completa não poderá ultrapassar o número máximo de 6 fotos | MEDIA | 
|RNF-007| Para poder deixar um relato o usuario deverá se cadastrar no sistema | MÉDIA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Garantia de que o aplicativo seja discreto o bastante para o agressor não saber |
|02| Utilizar tecnologias de desenvolvimento que permitem a acessibilidade do software.   |
|03| Dificuldade da denúncia chegar à polícia   |


