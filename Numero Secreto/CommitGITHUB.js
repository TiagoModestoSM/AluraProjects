/*
COMMIT NO GITHUB
Crie uma conta no GitHub Você pode começar seguindo os passos mostrados no vídeo, preenchendo o formulário de cadastro, verificando sua conta e explorando a página inicial do GitHub.

Criar um novo repositório no GitHub e fazer o upload de um projeto local para esse repositório. Você pode seguir passos mencionados na aula, como acessar as configurações do GitHub, criar um novo repositório com um nome único e escolher se ele será público ou privado. Em seguida, você pode adicionar uma descrição, um README, um .gitignore e uma licença ao repositório.

Instalação do Git: Caso você ainda não tenha realizado a instalação, siga os passos na atividade Faça como eu fiz: instalação do Git

Para criar um repositório local você, digite o seguinte comando no terminal: git init

Para adicionar os arquivos no repositório local, digite no terminal o comando: git add .

Faça um commit com as modificações, digite no terminal o comando: git commit -m "mensagem de commit"

Para configurar a identidade do autor do commit, digite no terminal o comando:

git -config --global user.email "seuemailaqui@example.com"
git config --global user.name "seu nome aqui"
COPIAR CÓDIGO
Para criar a branch Main, digite no terminal o comando: git branch -M main

O comando git branch -m é usado para criar uma nova ramificação no repositório Git atual. Neste caso, criamos a branch padrão main, que representa a versão principal do código.

Para realizar a conexão do seu repositório local com o remoto via SSH, digite no terminal: git remote add origin https://github.com/seunomedeusuario/seu-repositorio.git

Caso seja necessário, realize a configuração do protocolo SSH através da geração de chave, você pode acompanhar os passos em vídeo na atividade Sincronizando repositórios

Para subir as alterações no repositório local para o remoto, digite o seguinte comando no terminal: git push -u origin main

Digite no terminal o comando git status e observe a saída.

O comando git status é uma ferramenta essencial para gerenciar alterações no controle de versão Git. Ele fornece uma visão geral do estado atual do repositório, indicando quais arquivos foram modificados, adicionados ou excluídos desde o último commit. Essa informação é crucial para compreender o progresso do desenvolvimento e tomar decisões de gerenciamento de alterações.

A saída do comando git status geralmente contém três seções principais:

Modificados: Lista os arquivos que foram modificados desde o último commit, mas ainda não foram adicionados à área de preparação (Stage).

Adicionados: Indica os arquivos que foram adicionados à área de preparação, mas ainda não foram confirmados no histórico de commits.

Modificados, adicionados ou excluídos: Exibe os arquivos que não foram rastreados pelo Git, ou seja, que não foram adicionados ao índice de modificações (Staging Area).

Além disso, o comando git status pode fornecer informações adicionais sobre as ramificações atuais, como a ramificação atual e as ramificações que estão à frente ou atrás da atual.

O comando git status é uma ferramenta indispensável para qualquer desenvolvedor que utiliza Git. Ele permite monitorar as alterações no repositório, identificar o estado dos arquivos e tomar decisões de gerenciamento de commits de forma eficiente.*/

/*
COMANDOS GIT

Nessa aula, você aprendeu como:
Baixar uma cópia de um repositório hospedado no GitHub para o seu computador, utilizando o comando git clone;

Realizar alterações no código de um projeto e registrá-las com commits, utilizando os comandos git add e git commit;

Visualizar quais arquivos foram modificados no repositório local, utilizando o comando git status;

Listar os commits realizados no repositório, com dados do autor, data e mensagem de cada commit, utilizando o comando git log;

Visualizar os repositórios remotos linkados com o repositório local, utilizando o comando git remote;

Enviar commits feitos no repositório local para o repositório remoto, utilizando o comando git push;

Baixar commits do repositório remoto para o repositório local, utilizando o comando git pull;

Adicionar uma pessoa como colaboradora em um repositório no GitHub, e também como aceitar um convite de colaboração recebido.*/