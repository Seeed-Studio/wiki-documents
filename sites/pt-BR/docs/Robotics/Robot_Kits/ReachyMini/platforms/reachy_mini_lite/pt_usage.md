---
description: Guia de uso do Reachy Mini Lite que abrange o painel do aplicativo para desktop, demonstrações de ações rápidas, instalação do app e início rápido do SDK em Python.
title: Usando o Reachy Mini Lite
slug: /reachymini_platforms_reachy_mini_lite_usage
keywords:
  - uso
  - painel
  - aplicativo para desktop
  - aplicativos
  - demonstrações
  - python
  - sdk
  - controle
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_lite_usage/
---

# Usando o Reachy Mini Lite

Agora que seu robô está conectado, veja como interagir com ele. Você pode controlá-lo visualmente usando o **Reachy Mini Control** ou programaticamente usando **Python**.

Confira [este guia](/pt-br/reachymini_platforms_reachy_mini_lite_get_started) se você ainda não instalou o app.

## 1. Reachy Mini Control 🖥️

**Reachy Mini Control** é o aplicativo para desktop do seu robô. Ele permite verificar o status do robô, atualizar o sistema e gerenciar aplicativos.

Abra o **Reachy Mini Control** e conecte seu robô via USB. Depois de conectado, você verá informações em tempo real sobre o seu robô.

* **Status & Visualizer (Painel Esquerdo):**
    * **3D View:** Mostra a posição em tempo real do robô.
    * **Ready/Not Ready:** Indica se o robô está corretamente conectado via USB.
    * **Sensors:** Monitora a entrada do microfone e o volume do alto-falante.
    * **Logs:** Veja detalhes técnicos e eventos de conexão na parte inferior.

### Funcionalidades

* Controle a **Cabeça** e as **Antenas** usando a aba *Controller*.

![Controller Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* Brinque com **Expressões**: Faça seu robô ficar feliz, triste, bravo e muito mais com as expressões integradas.

![Expressions Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

## 2. Aplicativos 📱

O Reachy Mini pode executar "Apps" — comportamentos autônomos empacotados para o robô (como uma demonstração de Conversa, um Jogo ou uma Dança).

### Como usar Apps
1.  **Browse:** Vá até a aba *Applications* no Reachy Mini Control e clique em "Discover Apps". Isso abrirá o ecossistema Hugging Face Spaces, onde você pode encontrar apps compatíveis para o seu robô.
2.  **Install:** Clique no botão "Install" em um app para adicioná-lo ao seu robô.
3.  **Launch:** Clique no botão "Start ▶️" em um app instalado. O robô iniciará o comportamento imediatamente.
4.  **Stop:** Clique no botão "Stop" ⏹️ para parar o aplicativo.

> **Nota:** Quando um App está em execução, ele assume o controle do robô. Você não pode executar scripts em Python enquanto um App estiver ativo.

## 3. Início rápido em código 🐍

Pronto para escrever sua própria lógica? O Reachy Mini é controlado por meio de um SDK em Python simples.

👉 **[Ir para a documentação do SDK](/pt-br/reachymini_sdk_readme)** para uma visão geral completa.

## ❓ Solução de problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**