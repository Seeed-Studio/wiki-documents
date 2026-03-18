---
description: Como Fazer - Rápido e Simplificado
title: Pull Request Rápido
keywords:
  - Comunidade
  - Projetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /quick_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
createdAt: '2024-08-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/quick_pull_request/
---

### Obrigado por considerar contribuir com nossos arquivos da seeed-studio!

Este processo de contribuição simplificado permite criar PRs de arquivos rapidamente (sem necessidade de fazer deploy do site localmente). Se você quiser conferir localmente as alterações ou a página adicionada, pode clicar [aqui](/pt-br/full_steps_pull_request).


## Código TUDO EM UM

Imagine que você só adiciona arquivos md e imagens:

1. Visite o [repositório GitHub da Seeed Studio Wiki Platform](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version) e então faça `fork` do repositório 'wiki-documents' para a sua conta.

2. Copie todo o código de uma vez e execute os comandos (lembre-se de substituir `{your repo}` pelo seu repositório forkado):

:::tip
Por exemplo, se meu nome de usuário GitHub é `MatthewJeffson`, meu primeiro comando é: `git clone --no-checkout --depth 1 https://github.com/MatthewJeffson/wiki-documents.git`
:::

```bash
git clone --no-checkout --depth 1 https://github.com/{your repo}}/wiki-documents.git
cd wiki-documents
git sparse-checkout init --cone
git sparse-checkout set sidebars.js docs 
git switch docusaurus-version
git pull origin docusaurus-version
```

Haverá uma pasta chamada "wiki-documents" no seu PC.

2. Armazene todos os arquivos (os arquivos Markdown e as imagens) na pasta "Contributor_Files":

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>

3. Envie todos os arquivos para o GitHub executando estes comandos:

```
git add .
git commit -m "Add new document"
git push origin docusaurus-version
```

4. Clique em "Pull Request" no seu repositório e tudo estará concluído.

<strong><font color={'8DC215'} size={"5"}>Pronto!</font></strong>

## Apresentação PASSO A PASSO com Auto-Verificação

Aqui está a apresentação do que foi descrito acima, incluindo os códigos de Auto-verificação.

1. Primeiro, clone o repositório usando o seguinte comando:

   ```
   git clone --no-checkout --depth 1 https://github.com/Seeed-Studio/wiki-documents.git
   ```

   Aqui, usamos duas opções:
   - `--no-checkout`: Clona o repositório sem fazer checkout de nenhum arquivo, buscando apenas os metadados do repositório. Isso acelera o processo de clonagem.
   - `--depth 1`: Clona apenas o commit mais recente dos arquivos e metadados, sem buscar todo o histórico. Isso reduz ainda mais a quantidade de dados baixados.

2. Após clonar, navegue até o diretório do repositório:

   ```
   cd wiki-documents
   ```

3. Em seguida, habilite o recurso de sparse checkout do Git:

   ```
   git sparse-checkout init --cone
   ```

   Sparse checkout permite fazer checkout apenas de um subconjunto de arquivos do repositório, em vez do repositório inteiro. A opção `--cone` habilita o modo cone, que oferece suporte a correspondência de caminhos mais flexível.

4. Depois, configure as regras de sparse checkout:

   ```
   git sparse-checkout set sidebars.js docs
   ```

   Este comando informa ao Git para fazer checkout apenas do arquivo `sidebars.js` e do diretório `docs`. `sidebars.js` é o arquivo de configuração do Docusaurus, e o diretório `docs` contém todos os documentos em Markdown.

5. Depois de configurar as regras de sparse checkout, garanta que você mude para a branch `docusaurus-version`:

   ```
   git switch docusaurus-version
   ```

   Esta etapa é necessária porque a documentação é desenvolvida e mantida nesta branch.

6. Após mudar para a branch de destino, puxe os arquivos e diretórios configurados:

   ```
   git pull origin docusaurus-version
   ```

   Este comando puxa a versão mais recente de `sidebars.js` e `docs` da branch `docusaurus-version` do repositório remoto.

7. Agora, os colaboradores podem adicionar novos arquivos Markdown no diretório `docs` e modificar o arquivo `sidebars.js` para adicionar os caminhos dos novos documentos.

8. Depois de adicionar novos documentos, use a ferramenta Lint Markdown para verificar a sintaxe dos novos arquivos:

   ```
   npm install -g @lint-md/cli
   npx @lint-md/cli docs/new-file.md
   ```

   Se houver algum erro de sintaxe ou violação de convenções nos novos arquivos, o Lint Markdown exibirá avisos. Os colaboradores podem fazer alterações com base nesses avisos até que não haja mais mensagens de erro.

9. Se os colaboradores quiserem corrigir automaticamente alguns erros de sintaxe comuns, podem usar a opção `--fix`:

   ```
   npx @lint-md/cli docs/new-file.md --fix
   ```

   Este comando corrigirá automaticamente alguns problemas de formatação comuns, como a falta de espaços entre texto em chinês e em inglês, uso incorreto de reticências, etc.

10. Finalmente, depois de concluir todas as modificações, os colaboradores podem criar o commit das alterações e enviar para o repositório remoto:

    ```
    git add .
    git commit -m "Add new document"
    git push origin docusaurus-version
    ```

    Com isso, o novo documento é adicionado com sucesso à branch `docusaurus-version` do repositório remoto.

Ao usar a ferramenta Lint Markdown nos passos 8 e 9, podemos garantir que os documentos recém-adicionados sigam as convenções, melhorando a qualidade geral e a consistência da documentação.

Este processo de contribuição simplificado, junto com o uso de sparse checkout e Lint Markdown, otimiza o fluxo de trabalho dos colaboradores, tornando-o mais eficiente e fácil de usar.
