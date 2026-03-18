---
description: Guia de uso do Reachy Mini Lite que abrange o painel do aplicativo desktop, demonstrações de ações rápidas, instalação de apps e guia rápido do SDK em Python.
title: Usando o Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_usage
keywords:
  - usage
  - dashboard
  - desktop app
  - applications
  - demos
  - python
  - sdk
  - control
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_lite_usage/
---

# Usando o Reachy Mini Lite

A versão Lite depende do seu computador para executar sua inteligência. O hub central para isso é o aplicativo **Reachy Mini Control**.

:::info
Confira [este guia](/pt-br/reachymini_platforms_reachy_mini_lite_get_started) se você ainda não o instalou.
:::

## 1. Reachy Mini Control (Dashboard) 🖥️

Ao abrir o aplicativo, você acessa o painel de controle completo do seu robô.

:::info Status & Visualizer (Painel Esquerdo)
* **Vista 3D:** Mostra a posição em tempo real do robô.
* **Pronto/Não Pronto:** Indica se o robô está corretamente conectado via USB.
* **Sensores:** Monitora a entrada do microfone e o volume do alto-falante.
* **Logs:** Veja detalhes técnicos e eventos de conexão na parte inferior.
:::

## 2. Aplicativos & Demos 📱

:::tip
Você não precisa programar para começar a se divertir. O app vem com um ecossistema integrado.
:::

### Ações Rápidas

Localizadas no canto inferior direito, são demos integradas prontas para serem executadas instantaneamente:
* **Expressões:** Faça o Reachy expressar emoções (Feliz, Triste, Bravo, etc.).
* **Controller:** Teleopere o robô usando um controle de videogame ou sliders.

### Instalando Novos Apps

Para ampliar as capacidades do Reachy com comportamentos criados pela comunidade:

**Passo 1:** Clique no botão **"Discover apps"**. Isso abrirá a loja Hugging Face Spaces.

**Passo 2:** Selecione um app (como um jogo ou uma demo de Conversação) e clique em "Install".

**Passo 3:** Depois de instalado, o app aparecerá na sua lista "Applications". Basta clicar em **"Play"** para iniciá-lo.

:::warning
Quando um App está em execução, ele controla o robô. Pare o app antes de tentar executar seus próprios scripts em Python.
:::

## 3. Programando com Python 🐍

:::info
Pronto para escrever sua própria lógica? O Reachy Mini é controlado por meio de um SDK em Python simples.
:::

👉 **[Vá para a documentação do SDK](/pt-br/reachymini_sdk_readme)** para uma visão geral completa.

## ❓ Solução de Problemas

Encontrou um problema? 👉 **[Confira o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**
