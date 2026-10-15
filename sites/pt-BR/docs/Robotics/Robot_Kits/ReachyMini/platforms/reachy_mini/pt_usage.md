---
description: Guia de uso do Reachy Mini cobrindo a interface web do Dashboard, gerenciamento de apps e início rápido do SDK em Python.
title: Usando o Reachy Mini
slug: /reachymini_platforms_reachy_mini_usage
keywords:
  - usage
  - dashboard
  - apps
  - python
  - sdk
  - control
  - management
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_usage/
---

# Usando o Reachy Mini

Agora que seu robô está conectado, veja como interagir com ele. Você pode controlá-lo visualmente usando o **Reachy Mini Control** ou de forma programática usando **Python**.

## 1. Reachy Mini Control 🕹️

**Reachy Mini Control** é o aplicativo desktop para o seu robô. Ele permite verificar o status do robô, atualizar o sistema e gerenciar aplicativos.

**Download:** Obtenha a versão mais recente do **Reachy Mini Control** no [site oficial](https://hf.co/reachy-mini/#/download).

**Abra o Reachy Mini Control** e conecte-se ao seu robô. Uma vez conectado, você verá informações em tempo real sobre o seu robô.

![Reachy Mini Control](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-dashboard.png)

### Funcionalidades

* Controle a **Cabeça** e as **Antenas** usando a aba *Controller*.

![Controller Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-controller.png)

* Brinque com **Expressões**: Faça seu robô ficar feliz, triste, bravo e muito mais com as expressões integradas.

![Expressions Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-expressions.png)

* Na aba *⚙️*, você pode:
    * **Atualizações do sistema:** Mantenha sempre seu robô atualizado.
    * **Rede:** Configure conexões Wi-Fi.

## 2. Aplicativos 📱

O Reachy Mini pode executar "Apps" — comportamentos autônomos empacotados para o robô (como uma demonstração de Conversa, um Jogo ou uma Dança).

### Como usar Apps
1.  **Explorar:** Vá até a aba *Applications* no Reachy Mini Control e clique em "Discover Apps". Isso abrirá o ecossistema Hugging Face Spaces, onde você pode encontrar apps compatíveis para o seu robô.
2.  **Instalar:** Clique no botão "Install" em um app para adicioná-lo ao seu robô.
3.  **Iniciar:** Clique no botão "Start ▶️" em um app instalado. O robô iniciará o comportamento imediatamente.
4.  **Parar:** Clique no botão "Stop" ⏹️ para parar o aplicativo.

> **Observação:** Quando um App está em execução, ele assume o controle do robô. Você não pode executar scripts em Python enquanto um App estiver ativo.

## 3. Início rápido em código 🐍

Pronto para escrever sua própria lógica? O Reachy Mini é controlado por meio de um SDK em Python simples.

👉 **[Vá para a documentação do SDK](/pt-br/reachymini_sdk_readme)** para uma visão geral completa.

## ❓ Solução de problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**