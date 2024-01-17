# Proposta de Projeto de TCC - UniConect

## Resumo do Projeto

O projeto propõe o desenvolvimento da plataforma inovadora chamada EduConnect, com o objetivo de facilitar o compartilhamento de conhecimento entre estudantes. A plataforma permitirá que alunos ofereçam aulas ou assistência remunerada em diversas disciplinas e habilidades para outros alunos que necessitam de apoio em seus estudos.

## Principais Funcionalidades

1. **Registro de Usuários:**

   - Alunos podem se cadastrar na plataforma indicando suas áreas de expertise e áreas de interesse para aprendizado.

2. **Sistema de Avaliação e Feedback:**

   - Os usuários poderão avaliar e fornecer feedback sobre as aulas recebidas, promovendo a qualidade e a confiança na plataforma.

3. **Sistema de Pagamento Integrado:**

   - A plataforma oferecerá uma solução de pagamento segura para as aulas remuneradas, proporcionando uma experiência tranquila para os usuários.

4. **Chat Integrado:**
   - Um sistema de chat em tempo real permitirá que os alunos e professores se comuniquem diretamente na plataforma para discutir detalhes das aulas e combinar horários.

## Benefícios do Projeto

- **Estímulo ao Aprendizado Colaborativo:**

  - A EduConnect promove a cultura de aprendizado entre pares, onde os alunos podem aprender com os colegas de forma interativa e personalizada.

- **Oportunidade de Geração de Renda:**

  - A plataforma oferece aos alunos a oportunidade de ganhar dinheiro extra ao compartilhar suas habilidades e conhecimentos.

- **Flexibilidade de Horários:**

  - Alunos podem agendar aulas de acordo com sua disponibilidade, proporcionando uma experiência de aprendizado mais conveniente.

- **Ampliação das Habilidades Sociais:**
  - Tanto os professores quanto os alunos terão a oportunidade de desenvolver habilidades de comunicação e liderança.

## Aspectos Técnicos

### Backend

- Utilizaremos **Node.js** com o framework **Express** para o desenvolvimento do servidor.
- O banco de dados **PostgreSQL** será empregado para armazenar informações dos usuários, aulas e avaliações.

### Frontend

- Optaremos por **React.js**, uma biblioteca JavaScript, para construir uma interface de usuário interativa e responsiva.
- Para a estilização, faremos uso de **CSS** com possibilidade de integração de bibliotecas como **Bootstrap** ou **Material-UI**.

### Comunicação em Tempo Real

- Integraremos o **Socket.IO** para implementar o sistema de chat entre os usuários, permitindo uma interação em tempo real de forma eficaz e dinâmica.

### Sistema de Pagamentos

- A integração com **Stripe** ou **PayPal** proporcionará uma solução segura para processar pagamentos de aulas remuneradas.

### Banco de Dados

- O **Heroku Postgres**, em seu plano gratuito, será utilizado para armazenar informações de usuários, aulas, avaliações e mensagens.

### Hospedagem e Disponibilidade

- A aplicação poderá ser hospedada gratuitamente em serviços como **Heroku** para o backend e **GitHub Pages** ou **Netlify** para o frontend, garantindo disponibilidade sem custos.

### Segurança e Privacidade

- Implementaremos medidas de segurança para proteger os dados dos usuários, como autenticação segura (**JSON Web Tokens**) e práticas de segurança de dados.

### Gestão de Comunicações

- Adicionaremos opções para notificações por email (por exemplo, confirmações de agendamentos e notificações de novas mensagens) usando serviços como **SendGrid** ou **Mailgun** em seus planos gratuitos.

### Testes e Documentação

- Realizaremos testes abrangentes, incluindo testes de unidade, integração e aceitação do usuário, além de documentar detalhes do projeto, incluindo design da base de dados e código fonte.
