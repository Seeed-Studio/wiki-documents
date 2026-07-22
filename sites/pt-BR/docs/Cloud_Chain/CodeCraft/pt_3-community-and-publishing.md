---
description: Navegue, reutilize e publique projetos CodeCraft por meio da SenseCraft AI Application Gallery.
title: Comunidade e Publicação do CodeCraft
keywords:
  - CodeCraft
  - Publicação
sidebar_label: 3. Comunidade e Publicação
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/pt-br/codecraft/community-and-publishing/
createdAt: '2026-06-30'
updatedAt: '2026-06-30'
---

# Comunidade e Publicação do CodeCraft

CodeCraft não é apenas adequado para criar projetos do zero, mas também permite que você navegue, reutilize e publique trabalhos por meio da SenseCraft AI Application Gallery.

Na Application Gallery, você pode explorar inspirações de projetos, navegar por exemplos oficiais, experimentar projetos da comunidade e publicar suas próprias criações CodeCraft para compartilhar com mais usuários. Outros usuários podem visualizar seus projetos, implantar firmware e — se permitido — clonar seu projeto para aprendizado ou desenvolvimento adicional.

Este documento explica como navegar por projetos da comunidade na Application Gallery e como publicar projetos CodeCraft na SenseCraft AI Application Gallery.

---

## 3.1 Application Gallery e Projetos da Comunidade

Na [Application Gallery](https://sensecraft.seeed.cc/ai/application) da SenseCraft AI, você pode concluir todo o fluxo de trabalho, desde a descoberta de inspiração até a publicação do projeto, em um só lugar.

![CodeCraft Community Projects](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-EN.png)

**O que você pode fazer aqui?**

| Finalidade | Descrição |
|------|----------|
| 🔍 Encontrar inspiração | Navegar por um grande número de projetos em busca de ideias |
| 📖 Aprender com exemplos oficiais | Estudar implementações padronizadas fornecidas pela equipe oficial |
| ♻️ Reutilizar projetos da comunidade | Fazer fork ou adaptar trabalhos existentes diretamente |
| 🚀 Publicar seu próprio trabalho | Exibir suas criações para a comunidade |
| 🎮 Experimentar rapidamente o hardware | De mini games a projetos maker complexos, permitindo prototipagem rápida |

**Vantagens centrais**

- **CodeCraft acelera o desenvolvimento** — Ajuda você a criar protótipos mais rápido e reduz barreiras de programação.
- **Publicação com um clique** — Projetos concluídos podem ser publicados diretamente na galeria para reutilização global.

> 💡 Adequado para todas as etapas, de projetos casuais a criações maker avançadas. Tanto iniciantes quanto usuários experientes podem se beneficiar.

---

**Como usar a Application Gallery**

| Método | Como funciona | Caso de uso |
| :--- | :--- | :--- |
| **Navegar e reutilizar** | **Clone** (copiar projeto → modificar com base no original) | • Experimentar rapidamente placas de desenvolvimento ou sensores<br/>• Modificar exemplos existentes<br/>• Adaptar projetos oficiais para ensino ou demonstrações |
| **Criar e publicar** | **Publish** (App → My Apps → Create New App → New Workspace) | • Exibir ideias e receber feedback<br/>• Contribuir com exemplos para outras pessoas<br/>• Construir um portfólio pessoal de projetos |

---

## 3.2 Publicação de Aplicativos

### 3.2.1 Preparação antes da publicação

Antes de publicar, prepare os seguintes materiais:

| Item | Requisitos | Observações |
|--------|----------|------|
| **Imagem do projeto** | • Recomendado como imagem de capa<br/>• Proporção: `4:3`<br/>• Tamanho < `2MB`<br/>• Clara e visualmente representativa | Obrigatório |
| **Nome e descrição do projeto** | • Nome conciso e atrativo<br/>• Pode incluir palavras-chave de dispositivos (por exemplo, `Wio Terminal`, `XIAO ESP32S3 Sense`) | Obrigatório |
| **Arquivo de firmware** | • Formato: `.bin` ou `.hex`<br/>• Deve ser testado em hardware real<br/>• `.bin` para Wio Terminal / XIAO ESP32S3 Sense<br/>• `.hex` comumente usado para Grove Beginner Kit | Obrigatório |
| **Arquivo de código-fonte** | • por exemplo, arquivo `.ino`<br/>• Opcional, para aprendizado e modificação | Opcional |

---

### 3.2.2 FAQ sobre publicação

| Pergunta | Resposta |
|------|----------|
| **E se o firmware estiver faltando?** | - O firmware é essencial; sem ele, outros não podem executar seu projeto<br/>- Sempre teste o firmware em hardware real antes de enviar<br/>- Se não tiver sido gerado, pergunte ao CodeCraft AI: “Please provide a `.bin` firmware file.” |
| **GIFs são suportados em capas e documentos?** | - Sim, GIFs são suportados tanto na capa quanto na documentação<br/>- Recomendados para demonstrações dinâmicas<br/>- Mantenha o tamanho do arquivo pequeno para evitar carregamento lento |
| **É possível incorporar vídeos?** | - Sim, links de vídeo são suportados<br/>- Compatível com YouTube, Bilibili, Douyin e outras plataformas<br/>- Cole os links diretamente no editor para incorporação automática |

---

## 3.3 Publicando um novo App na SenseCraft AI

### 3.3.1 Acessar a SenseCraft AI

Abra a [SenseCraft AI Application Gallery](https://sensecraft.seeed.cc/ai/application). Você pode criar um novo aplicativo do zero ou clonar um existente para modificação e republicação.

---

### 3.3.2 Criar um novo aplicativo

Você pode começar do zero ou usar um aplicativo existente como modelo.

#### 3.3.2.1 Clonar um App existente

Abra qualquer aplicativo publicado e clique em `Clone` para continuar editando com base nele.

![Clone App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

---

#### 3.3.2.2 Criar um novo App

Vá para a Application Gallery e clique em:

`My Apps` > `Create New App` > `Create New Workspace`

![Create New App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-EN.png)

---

### 3.3.3 Edição de conteúdo

Após criar um aplicativo, complete o conteúdo em quatro etapas usando o editor.

![Edit App Workflow](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

---

#### 3.3.3.1 Visão geral do App

Preencha as informações básicas do app, incluindo nome, descrição, cenário, licença e imagens.

| Campo | Descrição e sugestões | Obrigatório |
| :--- | :--- | :--- |
| **Nome** | • Claro e atrativo<br/>• Inclua palavras-chave de dispositivos como `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense`, `CodeCraft`<br/>• Exemplo: `CodeCraft Smart Temperature & Humidity Display - Wio Terminal` | ✅ |
| **Descrição** | • Descreva brevemente a função e o hardware utilizado<br/>• Mencione “criado com CodeCraft” se aplicável<br/>• Exemplo: `Este é um projeto Wio Terminal criado com CodeCraft para exibição em tempo real de temperatura e umidade.` | ✅ |
| **Cenário** | Escolha entre:<br/>• Educação<br/>• Casa inteligente<br/>• Monitoramento ambiental<br/>• Aplicações de sensores<br/>• Projetos AIoT | ✅ |
| **Licença** | **1. Permitir clonagem:** permite que outros façam fork e modifiquem seu projeto<br/>**2. Permitir uso comercial:** permite uso comercial se autorizado | ✅ |
| **Imagens** | • Use fotos reais do dispositivo<br/>• Proporção `4:3`, tamanho < `2MB`<br/>• Mostre claramente a saída do projeto<br/>• Até 16 imagens | ✅ |

---

#### 3.3.3.2 Detalhes do App

Nesta seção, descreva o contexto do projeto, o processo de desenvolvimento e as instruções de uso. Você também pode adicionar blocos de firmware para implantação com um clique.

| Categoria | Instruções / Conteúdo | Exemplo |
| :--- | :--- | :--- |
| **Introdução ao projeto** | • Descreva a função e o hardware<br/>• Explique o fluxo de trabalho do CodeCraft<br/>• Liste os prompts utilizados<br/>• Mostre resultados e observações<br/>• Adicione o link do CodeCraft | ![project-doc-interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **Firmware e implantação em dispositivo** | • Insira o bloco “Flash Firmware”<br/>• Selecione o dispositivo de destino<br/>• Suporta Wio Terminal / Grove Beginner Kit / XIAO ESP32S3 Sense | ![Document Editing](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **Enviar arquivo de firmware** | • Envie arquivos `.bin` ou `.hex`<br/>• `.hex` normalmente para Grove Beginner Kit<br/>• Certifique-se de que o firmware foi testado | ![Firmware Upload](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **Enviar código-fonte (opcional)** | • Envie arquivos `.ino` ou outros arquivos de código-fonte<br/>• Ajuda no aprendizado e na modificação | ![Upload Source](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **Detalhes de desenvolvimento e testes** | • Descreva claramente as etapas<br/>• Inclua métodos e resultados de teste<br/>• Adicione capturas de tela ou dados, se necessário | — |

---

#### 3.3.3.3 Lista de materiais (Bill of Materials)

| Placas de desenvolvimento Seeed | Outros produtos Seeed | Hardware / Ferramentas de terceiros |
| :--- | :--- | :--- |
| `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense` | • Sensores Grove, módulos de expansão etc.<br/>• Se estiver faltando, envie uma solicitação via [SenseCraft AI Device Request Form](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) | • Hardware de terceiros<br/>• Outros materiais relacionados |

---

#### 3.3.3.4 Pré-visualizar e publicar

**Antes de enviar, certifique-se do seguinte:**

| Categoria | Lista de verificação |
| :--- | :--- |
| **Informações básicas** | • A imagem de capa é clara e atrativa<br/>• O nome do app está correto<br/>• A descrição está clara<br/>• As configurações de licença estão corretas |
| **Materiais e firmware** | • A lista de materiais está completa<br/>• O firmware foi enviado corretamente |
| **Validação de funcionamento** | • O dispositivo funciona corretamente após o flash |
| **Conteúdo opcional** | • Código-fonte disponível para download (se enviado)<br/>• Outros arquivos, como modelos 3D ou recursos vetoriais |

Depois de confirmar, clique em **Publish** e concorde com o termo de isenção de responsabilidade.

---

### 3.3.4 Após a publicação

Após a aprovação na revisão, seu aplicativo aparecerá na SenseCraft AI Application Gallery.

Você pode copiar o link do app e compartilhá-lo em mídias sociais, fóruns da comunidade ou documentação de projetos para que mais usuários possam descobrir e usar seu projeto CodeCraft.
