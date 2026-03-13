---
description: Como Fazer - Rápido e Simplificado
title: Etapas Completas de Pull Request
keywords:
  - Colaborador
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /full_steps_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
createdAt: '2023-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/full_steps_pull_request/
---

### Obrigado por considerar contribuir com nossos arquivos da seeed-studio!

Este processo de contribuição simplificado tem como objetivo oferecer todas as etapas para fazer PR dos arquivos. Se você só quiser adicionar arquivos md e imagens, você pode conferir [aqui](/pt-br/quick_pull_request).


## Enviar os arquivos para o repositório passo a passo

### Pré-requisito: `git clone` do repositório e deploy do site localmente

<strong><a href="/pt-br/Deploy_Page_Locally"><span><font color={'8DC215'} size={"4"}>Você pode fazer o deploy do site localmente e ver as alterações clicando aqui!</font></span></a></strong>

### 1. Atualize o seu branch forkado

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/1.jpg" /></div>

### 2. Atualize os arquivos baixados

Use o código abaixo e atualize os arquivos baixados.

```
git checkout docusaurus-version
git pull
```

### 3. Modifique o conteúdo dos arquivos existentes

Todos os arquivos na plataforma wiki são armazenados na pasta "docs".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/2.jpg" /></div>

:::note
O nome do arquivo que você quer alterar geralmente é a última parte da url (usando Seeed Studio XIAO ESP32C3 como exemplo).
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/3.jpg" /></div>
:::

#### Se você for adicionar arquivos

Armazene todos os arquivos adicionados (os arquivos markdown e imagens) na pasta "Contributor_Files":

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>


### 4. Verifique localmente os arquivos alterados

Depois de concluir as atualizações, você pode usar o comando abaixo para ver se tudo está aparecendo corretamente.

```
yarn start
```

Na plataforma de edição:

![image4](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/4.jpg)

Na página local:

![image5](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/5.jpg)

### 5. Salve e faça push das alterações para o seu repositório gitHub forkado


Se estiver tudo certo, você pode usar o comando abaixo para fazer push das alterações para o seu repositório gitHub forkado.

```
git add "the files that you changed"
git commit -m "Update：I have updated ..."
git push
```

### 5. Faça o Pull Request para o repositório da Seeed Studio

Depois de fazer push das alterações para o seu repositório gitHub, uma coluna aparecerá automaticamente. Clique no botão "Compare & Pull Request":

![image6](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/6.jpg)

Mostre o que você editou e clique no botão "create pull request" para nos enviar.

![image7](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/7.jpg)

Obrigado pelas suas contribuições!