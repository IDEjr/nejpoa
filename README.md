<h1 align="center"> Projeto NEJPOA </h1>

<div align="center">
  <br/><br/><br/>
  <a href="https://www.idejr.com.br/">
    <img alt="IDE" src="https://user-images.githubusercontent.com/20328442/198098095-2ebe0e19-61ab-4918-8e82-76f4a35bdd66.png" width="800 align="center"" />    
  </a>
  <br/><br/><br/>
</div>

## [Guia rápido de comandos do git](https://rogerdudler.github.io/git-guide/index.pt_BR.html)

## Guia rápido de boas práticas do git

- #### Modelo de issue

  - Titulo: Deve ser um resumo da issue

  - Descrição:

    - Detalhes: Descrição do que deve ser feito na tarefa, de forma que qualquer outro membro da equipe possa entender
    - Imagens: Para auxiliar na identificação do que deve ser feito
    - Links úteis: Referencias diversas sobre o que pode auxiliar na tarefa

  - Ao criar uma issue, um número é associado a mesma e gerado automaticamente, esse número serve como referência para branch

- #### Exemplo de nome de branch:
  ```
  issue #10
  ```
- #### Exemplo de nome de commit:
  ```
  Breve descrição do que foi feito #10
  ```
- #### Modelo de pull request

  - Vão existir três tipos de modelo para o Merge Request:

    - Feature: Adicionar funcionalidades novas
    - Bugfix: Correção de bug
    - Enhancement: Melhorias no codigo

  - Quando escolher alguma delas, preenchar os dados necessários para cada tipo específico

  - Escolha algum outro membro como corretor

## Boas práticas

- git pull sempre com rebase

- Usar o [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Formatação do código:

  - Nomes de variáveis e funções em inglês
  - Habilitar `Format on save`
  - Usar o [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) como formatador

## Next JS

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

- ### Learn More

  To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

- ### Deploy on Vercel

  The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
