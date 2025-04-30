# UNIFConect

## Resumo do Projeto

O projeto propõe o desenvolvimento da plataforma inovadora chamada UNIFConect, com o objetivo de facilitar o compartilhamento de conhecimento entre estudantes. A plataforma permitirá que alunos ofereçam aulas ou assistência em diversas disciplinas e habilidades para outros alunos que necessitam de apoio em seus estudos.

## Principais Funcionalidades

1. **Registro de Usuários:**

   - Alunos podem se cadastrar na plataforma indicando suas áreas de expertise e áreas de interesse para aprendizado.

2. **Sistema de Avaliação e Feedback:**

   - Os usuários poderão avaliar e fornecer feedback sobre as aulas recebidas, promovendo a qualidade e a confiança na plataforma.

3. **Chat Integrado:**
   - Um sistema de chat em tempo real permitirá que os alunos e professores se comuniquem diretamente na plataforma para discutir detalhes das aulas e combinar horários.

## Benefícios do Projeto

- **Estímulo ao Aprendizado Colaborativo:**

  - A UNIFConect promove a cultura de aprendizado entre pares, onde os alunos podem aprender com os colegas de forma interativa e personalizada.

- **Flexibilidade de Horários:**

  - Alunos podem agendar aulas de acordo com sua disponibilidade, proporcionando uma experiência de aprendizado mais conveniente.

- **Ampliação das Habilidades Sociais:**
  - Tanto os professores quanto os alunos terão a oportunidade de desenvolver habilidades de comunicação e liderança.

## Aspectos Técnicos

### Arquitetura de Microserviços

- **Serviço de Autenticação e Autorização:**

  - Responsável pelo login, registro e gestão de permissões dos usuários.

- **Serviço de Gerenciamento de Usuários:**

  - Cuida do cadastro, perfis e preferências dos usuários.

- **Serviço de Matchmaking:**

  - Implementa o algoritmo de compatibilidade entre alunos e professores.

- **Serviço de Comunicação:**

  - Gerencia o chat em tempo real entre os usuários.

- **Serviço de Eventos e Grupos:**

  - Facilita a criação e o gerenciamento de eventos e grupos de estudo.

- **Serviço de Feed de Notícias:**

  - Mostra atualizações relevantes, como novos matches, eventos, etc.

- **Serviço de Relatórios e Analytics:**
  - Gera relatórios de uso e insights sobre a plataforma.

### Backend

- Utilizaremos **JavaScript (Node.js)** para o desenvolvimento do backend utilizando o framework **Express.js**.
- **PostgreSQL** será utilizado para armazenamento relacional.
- **Docker** será usado para contêinerizar cada microserviço, facilitando o deployment.
- **Kubernetes** orquestrará os contêineres para escalar a aplicação conforme a demanda.

### Frontend

- Optaremos por **React.js** para construir uma interface de usuário interativa e responsiva.
- **CSS** será usado para estilização, com suporte de **Bootstrap** ou **Material-UI**.

### Comunicação entre Microserviços

- **HTTP/REST** e **gRPC** serão utilizados para comunicação síncrona, enquanto **RabbitMQ** será utilizado para comunicação assíncrona entre os microserviços.

### Hospedagem e Disponibilidade

- **Docker** para contêinerização e **Kubernetes** para orquestração e escalabilidade dos microserviços.
- O backend será hospedado em **Heroku** ou **AWS**, e o frontend em **GitHub Pages** ou **Netlify**.

### Segurança e Privacidade

- **JWT (JSON Web Tokens)** será implementado para autenticação e autorização segura.
- **Vault** será utilizado para gestão segura de segredos e credenciais.

### Gestão de Comunicações

- **SendGrid** ou **Mailgun** serão utilizados para enviar notificações por email.

### Monitoramento e Log

- **Prometheus** e **Grafana** serão utilizados para monitoramento, enquanto o **ELK Stack** cuidará da gestão de logs.

### Testes e Documentação

- Realizaremos testes de unidade, integração e aceitação do usuário, além de documentar a arquitetura, banco de dados e código-fonte detalhadamente.

---

# To-Do List - Desenvolvimento do Projeto UNIFConect

## Resumo do Projeto

- [x] Definir os objetivos específicos da plataforma.
- [x] Escrever uma descrição detalhada do projeto.
- [x] Identificar os requisitos básicos do sistema.

## Principais Funcionalidades

1. **Registro de Usuários:**

   - [ ] Implementar o serviço de gerenciamento de usuários.
   - [ ] Desenvolver o formulário de indicação de áreas de expertise e interesse.

2. **Sistema de Avaliação e Feedback:**

   - [ ] Criar o sistema de avaliação para aulas e feedback dos usuários.
   - [ ] Garantir que as avaliações afetem a reputação dos usuários na plataforma.

3. **Chat Integrado:**
   - [ ] Implementar o serviço de comunicação em tempo real.
   - [ ] Garantir que os usuários possam discutir detalhes das aulas e combinar horários.

## Benefícios do Projeto

- [ ] Descrever mais detalhadamente como a plataforma estimulará o aprendizado colaborativo.
- [ ] Destacar as oportunidades de geração de renda proporcionadas aos alunos.
- [ ] Especificar como a flexibilidade de horários será oferecida aos usuários.
- [ ] Detalhar como a plataforma contribuirá para a ampliação das habilidades sociais.

## Aspectos Técnicos

### Backend

- [ ] Configurar o ambiente de desenvolvimento Node.js.
- [ ] Desenvolver os microserviços utilizando Express.js.
- [ ] Criar a estrutura do banco de dados PostgreSQL.

### Frontend

- [ ] Configurar o ambiente de desenvolvimento React.js.
- [ ] Desenvolver a interface de usuário interativa e responsiva.
- [ ] Integrar bibliotecas de estilização como Bootstrap ou Material-UI.

### Comunicação entre Microserviços

- [ ] Implementar comunicação entre microserviços utilizando HTTP/REST e RabbitMQ.

### Banco de Dados

- [ ] Configurar e integrar o Heroku Postgres para armazenar informações.

### Hospedagem e Disponibilidade

- [ ] Hospedar os microserviços utilizando Docker e Kubernetes.

### Segurança e Privacidade

- [ ] Implementar autenticação segura utilizando JSON Web Tokens.
- [ ] Aplicar práticas de segurança de dados para proteger as informações dos usuários.

### Gestão de Comunicações

- [ ] Adicionar notificações por email utilizando serviços como SendGrid ou Mailgun.

### Monitoramento e Log

- [ ] Configurar Prometheus e Grafana para monitoramento.
- [ ] Integrar o ELK Stack para gestão de logs.

### Testes e Documentação

- [ ] Desenvolver e executar testes de unidade, integração e aceitação do usuário.
- [ ] Documentar a arquitetura e design da base de dados.
- [ ] Documentar o código fonte.
