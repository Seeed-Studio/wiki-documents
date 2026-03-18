---
description: Guia de uso do Reachy Mini cobrindo a interface web do Dashboard, gerenciamento de apps e início rápido do SDK em Python.
title: Usando o Reachy Mini
slug: /reachymini_platforms_reachy_mini_usage
keywords:
  - uso
  - dashboard
  - apps
  - python
  - sdk
  - controle
  - gerenciamento
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_usage/
---

# Usando o Reachy Mini

Agora que seu robô está conectado, veja como interagir com ele. Você pode controlá-lo visualmente usando o **Dashboard** ou programaticamente usando **Python**.

## 1. O Dashboard 🕹️

:::info
O Dashboard é a interface web em execução dentro do seu robô. Ela permite verificar o status do robô, atualizar o sistema e gerenciar aplicativos.
:::

**Acesso:** Abra [http://reachy-mini.local:8000/](http://reachy-mini.local:8000/) no seu navegador.

### Funcionalidades

* **Atualizações de Sistema:** Mantenha sempre seu robô atualizado. Vá até a aba *Settings* e clique em "Check for updates".
* **Monitor de Hardware:** Verifique o nível da bateria, temperaturas dos motores e uso de disco.
* **Rede:** Configure conexões Wi-Fi.

## 2. Aplicações 📱

:::tip
O Reachy Mini pode executar "Apps" — comportamentos autônomos empacotados para o robô (como uma demonstração de Conversa, um Jogo ou uma Dança).
:::

### Como usar Apps

**Etapa 1:** Vá até a aba *Apps* no Dashboard.

**Etapa 2:** Clique no botão "Store" para navegar pelo ecossistema do [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini). Você pode instalar qualquer app compatível com um clique.

**Etapa 3:** Clique no botão "Play" ▶️ em um app instalado. O robô iniciará o comportamento imediatamente.

**Etapa 4:** Clique no botão "Stop" ⏹️ para encerrar a aplicação.

:::warning
Quando um App está em execução, ele assume o controle do robô. Você não pode executar scripts em Python enquanto um App estiver ativo.
:::

## 3. Início Rápido em Código 🐍

:::info
Pronto para escrever sua própria lógica? O Reachy Mini é controlado por meio de um SDK em Python simples.
:::

👉 **[Acesse a documentação do SDK](/pt-br/reachymini_sdk_readme)** para uma visão geral completa.

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Consulte o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**
