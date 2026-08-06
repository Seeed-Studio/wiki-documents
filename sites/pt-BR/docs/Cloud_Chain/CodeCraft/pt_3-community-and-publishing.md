---
description: Navegue, reutilize e publique projetos CodeCraft por meio da SenseCraft AI Application Gallery.
title: Comunidade & Publicação do CodeCraft
keywords:
  - CodeCraft
  - Publicação
sidebar_label: 3. Comunidade & Publicação
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/pt-br/codecraft/community-and-publishing/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Comunidade & Publicação do CodeCraft

CodeCraft não é apenas adequado para criar projetos do zero, mas também permite que você navegue, reutilize e publique trabalhos por meio da SenseCraft AI Application Gallery.

Na Application Gallery, você pode explorar inspiração para projetos, navegar por exemplos oficiais, experimentar projetos da comunidade e publicar suas próprias criações CodeCraft para compartilhar com mais usuários. Outros usuários podem visualizar seus projetos, implantar firmware e — se permitido — clonar seu projeto para aprendizado ou desenvolvimento adicional.

Este documento explica como navegar por projetos da comunidade na Application Gallery e como publicar projetos CodeCraft na SenseCraft AI Application Gallery.

---

## 3.1 Application Gallery & Projetos da Comunidade

Na [Application Gallery](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square) da SenseCraft AI, você pode concluir todo o fluxo de trabalho, desde a descoberta de inspiração até a publicação do projeto, em um só lugar.

![CodeCraft Community Projects](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-EN.png)

**O que você pode fazer aqui?**

| Finalidade | Descrição |
|------|----------|
| 🔍 Encontrar inspiração | Navegar por um grande número de projetos em busca de ideias |
| 📖 Aprender com exemplos oficiais | Estudar implementações padronizadas fornecidas pela equipe oficial |
| ♻️ Reutilizar projetos da comunidade | Fazer fork ou adaptar trabalhos existentes diretamente |
| 🚀 Publicar seu próprio trabalho | Exibir suas criações para a comunidade |
| 🎮 Experimentar rapidamente o hardware | De mini games a projetos maker complexos, permitindo prototipagem rápida |

**Vantagens principais**

- **CodeCraft acelera o desenvolvimento** — Ajuda você a criar protótipos mais rapidamente e reduz barreiras de programação.
- **Publicação com um clique** — Projetos concluídos podem ser publicados diretamente na galeria para reutilização global.

> 💡 Adequado para todas as etapas, de projetos casuais a criações maker avançadas. Tanto iniciantes quanto usuários experientes podem se beneficiar.

---

**Como usar a Application Gallery**

| Método | Como funciona | Caso de uso |
| :--- | :--- | :--- |
| **Navegar & Reutilizar** | **Clone** (copiar projeto → modificar com base no original) | • Experimentar rapidamente placas de desenvolvimento ou sensores<br/>• Modificar exemplos existentes<br/>• Adaptar projetos oficiais para ensino ou demonstrações |
| **Criar & Publicar** | **Publish** (App → My Apps → Create New App → New Workspace) | • Exibir ideias e receber feedback<br/>• Contribuir com exemplos para outras pessoas<br/>• Construir um portfólio pessoal de projetos |

---

## 3.2 Publicação de Aplicativos

### 3.2.1 Preparação Antes da Publicação

Antes de publicar, prepare os seguintes materiais:

| Item | Requisitos | Observações |
|--------|----------|------|
| **Imagem do Projeto** | • Recomendado como imagem de capa<br/>• Proporção: `4:3`<br/>• Tamanho < `2MB`<br/>• Clara e visualmente representativa | Obrigatório |
| **Nome & Descrição do Projeto** | • Nome conciso e atrativo<br/>• Pode incluir palavras-chave de dispositivos (por exemplo, `Wio Terminal`, `XIAO ESP32S3 Sense`) | Obrigatório |
| **Arquivo de Firmware** | • Formato: `.bin` ou `.hex`<br/>• Deve ser testado em hardware real<br/>• `.bin` para Wio Terminal / XIAO ESP32S3 Sense<br/>• `.hex` comumente usado para Grove Beginner Kit | Obrigatório |
| **Arquivo de Código-fonte** | • por exemplo, arquivo `.ino`<br/>• Opcional, para aprendizado e modificação | Opcional |

---

### 3.2.2 FAQ de Publicação

| Pergunta | Resposta |
|------|----------|
| **E se o firmware estiver faltando?** | - Firmware é essencial; sem ele, outros não podem executar seu projeto<br/>- Sempre teste o firmware em hardware real antes de enviar<br/>- Se não for gerado, peça ao CodeCraft AI: “Please provide a `.bin` firmware file.” |
| **GIFs são suportados em capas e documentos?** | - Sim, GIFs são suportados tanto na capa quanto na documentação<br/>- Recomendados para demonstrações dinâmicas<br/>- Mantenha o tamanho do arquivo pequeno para evitar carregamento lento |
| **É possível incorporar vídeos?** | - Sim, links de vídeo são suportados<br/>- Compatível com YouTube, Bilibili, Douyin e outras plataformas<br/>- Cole os links diretamente no editor para incorporação automática |

---

## 3.3 Publicando um Novo App na SenseCraft AI

### 3.3.1 Acessar a SenseCraft AI

Abra a [SenseCraft AI Application Gallery](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square). Você pode criar um novo aplicativo do zero ou clonar um existente para modificação e republicação.

---

### 3.3.2 Criar um Novo Aplicativo

Você pode começar do zero ou usar um aplicativo existente como modelo.

#### 3.3.2.1 Clonar um App Existente

Abra qualquer aplicativo publicado e clique em `Clone` para continuar editando com base nele.

![Clone App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

---

#### 3.3.2.2 Criar um Novo App

Vá para a Application Gallery e clique em:

`My Apps` > `Create New App` > `Create New Workspace`

![Create New App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-EN.png)

---

### 3.3.3 Edição de Conteúdo

Após criar um aplicativo, complete o conteúdo em quatro etapas usando o editor.

![Edit App Workflow](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

---

#### 3.3.3.1 Visão Geral do App

Preencha as informações básicas do app, incluindo nome, descrição, cenário, licença e imagens.

| Campo | Descrição & Sugestões | Obrigatório |
| :--- | :--- | :--- |
| **Name** | • Claro e atrativo<br/>• Inclua palavras-chave de dispositivos como `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense`, `CodeCraft`<br/>• Exemplo: `CodeCraft Smart Temperature & Humidity Display - Wio Terminal` | ✅ |
| **Description** | • Descreva brevemente a função e o hardware utilizado<br/>• Mencione “created with CodeCraft” se aplicável<br/>• Exemplo: `This is a Wio Terminal project created with CodeCraft for real-time temperature and humidity display.` | ✅ |
| **Scenario** | Escolha entre:<br/>• Education<br/>• Smart Home<br/>• Environmental Monitoring<br/>• Sensor Applications<br/>• AIoT Projects | ✅ |
| **License** | **1. Allow cloning:** permite que outros façam fork e modifiquem seu projeto<br/>**2. Allow commercial use:** permite uso comercial se habilitado | ✅ |
| **Images** | • Use fotos reais do dispositivo<br/>• Proporção `4:3`, tamanho < `2MB`<br/>• Mostre claramente o resultado do projeto<br/>• Até 16 imagens | ✅ |

---

#### 3.3.3.2 Detalhes do App

Nesta seção, descreva o contexto do projeto, o processo de desenvolvimento e as instruções de uso. Você também pode adicionar blocos de firmware para implantação com um clique.

| Categoria | Instruções / Conteúdo | Exemplo |
| :--- | :--- | :--- |
| **Introdução ao Projeto** | • Descreva a função e o hardware<br/>• Explique o fluxo de trabalho do CodeCraft<br/>• Liste os prompts utilizados<br/>• Mostre resultados e observações<br/>• Adicione o link do CodeCraft | ![project-doc-interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **Firmware & Implantação em Dispositivo** | • Insira o bloco “Flash Firmware”<br/>• Selecione o dispositivo alvo<br/>• Suporta Wio Terminal / Grove Beginner Kit / XIAO ESP32S3 Sense | ![Document Editing](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **Enviar Arquivo de Firmware** | • Envie arquivos `.bin` ou `.hex`<br/>• `.hex` normalmente para Grove Beginner Kit<br/>• Certifique-se de que o firmware foi testado | ![Firmware Upload](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **Enviar Código-fonte (Opcional)** | • Envie arquivos `.ino` ou outros arquivos de código-fonte<br/>• Ajuda no aprendizado e na modificação | ![Upload Source](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **Detalhes de Desenvolvimento & Testes** | • Descreva as etapas com clareza<br/>• Inclua métodos de teste e resultados<br/>• Adicione capturas de tela ou dados, se necessário | — |

---

#### 3.3.3.3 Lista de Materiais (Bill of Materials)

| Placas de Desenvolvimento Seeed | Outros Produtos Seeed | Hardware / Ferramentas de Terceiros |
| :--- | :--- | :--- |
| `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense` | • Sensores Grove, módulos de expansão, etc.<br/>• Se estiver faltando, envie uma solicitação via [SenseCraft AI Device Request Form](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) | • Hardware de terceiros<br/>• Outros materiais relacionados |

---

#### 3.3.3.4 Pré-visualizar & Publicar

**Antes de enviar, certifique-se do seguinte:**

| Categoria | Lista de verificação |
| :--- | :--- |
| **Informações Básicas** | • Imagem de capa clara e atrativa<br/>• Nome do app está correto<br/>• Descrição está clara<br/>• Configurações de licença estão corretas |
| **Materiais & Firmware** | • Lista de materiais está completa<br/>• Firmware enviado corretamente |
| **Validação de Funcionalidade** | • Dispositivo funciona corretamente após o flash |
| **Conteúdo Opcional** | • Código-fonte disponível para download (se enviado)<br/>• Outros arquivos, como modelos 3D ou recursos vetoriais |

Depois de confirmar, clique em **Publish** e concorde com o termo de isenção de responsabilidade.

---

### 3.3.4 Após a Publicação

Após a aprovação na revisão, seu aplicativo aparecerá na SenseCraft AI Application Gallery.

Você pode copiar o link do app e compartilhá-lo em mídias sociais, fóruns da comunidade ou documentação de projetos para que mais usuários possam descobrir e usar seu projeto CodeCraft.
