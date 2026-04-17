---
description: Reachy Mini é um robô expressivo e de código aberto feito para hackers e desenvolvedores de IA. Possui app store, SDK em Python e múltiplas opções de plataforma.
title: Reachy Mini
slug: /reachymini_intro
keywords:
  - reachy mini
  - robótica
  - código aberto
  - kit de robô
  - robô expressivo
  - python sdk
  - robô de ia
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_intro/
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini é um robô expressivo e de código aberto feito para hackers e desenvolvedores de IA.**

🛒 [**Compre o Reachy Mini**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ Monte e inicie o seu próprio robô

**Escolha sua plataforma para acessar o guia específico:**

| **🤖 Reachy Mini (Wireless)** | **🔌 Reachy Mini Lite** | **💻 Simulação** |
| :---: | :---: | :---: |
| A experiência autônoma completa.<br/>Raspberry Pi 4 + bateria + WiFi. | A versão para desenvolvedores.<br/>Conexão USB com o seu computador. | Nenhum hardware necessário.<br/>Prototipe em MuJoCo. |
| 👉 [**Ir para o Guia Wireless**](/pt-br/reachymini_platforms_reachy_mini_get_started) | 👉 [**Ir para o Guia Lite**](/pt-br/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**Ir para a Simulação**](/pt-br/reachymini_platforms_simulation_get_started) |

:::tip Dica avançada
Instale o [uv](https://docs.astral.sh/uv/getting-started/installation/) para instalações de apps 10 a 100 vezes mais rápidas (detectado automaticamente, volta para `pip` se necessário).
:::

## 📱 Apps e Ecossistema

O Reachy Mini vem com uma app store alimentada pelo Hugging Face Spaces. Você pode instalar esses apps diretamente pelo painel do seu robô com um clique!

* **🗣️ [Conversation App](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app):** Converse naturalmente com o Reachy Mini (impulsionado por LLMs).
* **📻 [Radio](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio):** Ouça rádio com o Reachy Mini!
* **👋 [Hand Tracker](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2):** O robô segue os movimentos da sua mão em tempo real.

👉 [**Navegue por todos os apps no Hugging Face**](https://hf.co/reachy-mini/#/apps)

## 🚀 Primeiros Passos com o Reachy Mini SDK

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

### Visão Rápida
Controle seu robô em apenas **algumas linhas de código**:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

with ReachyMini() as mini:
    # Look up and tilt head
    mini.goto_target(
        head=create_head_pose(z=10, roll=15, degrees=True, mm=True),
        duration=1.0
    )
```

### Guias do Usuário
* **[Instalação](/pt-br/reachymini_sdk_installation)**: 5 minutos para configurar o seu computador
* **[Guia de Início Rápido](/pt-br/reachymini_sdk_quickstart)**: Execute seu primeiro comportamento no Reachy Mini
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique no Hugging Face.
* **[Conceitos Centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.
* 🤗[**Compartilhe seu app com a comunidade**](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)
* 📂 [**Navegue pela Pasta de Exemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 Visão Geral do Hardware

Os robôs Reachy Mini são vendidos como kits e geralmente levam de **2 a 3 horas** para montar. Guias detalhados passo a passo estão disponíveis nas pastas específicas de cada plataforma vinculadas acima.

* **Reachy Mini (Wireless):** Roda embarcado (RPi 4), autônomo, inclui IMU. [Ver especificações](/pt-br/reachymini_platforms_reachy_mini_hardware).
* **Reachy Mini Lite:** Roda no seu PC, alimentado pela tomada. [Ver especificações](/pt-br/reachymini_platforms_reachy_mini_lite_hardware).

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Consulte o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**

## 🤝 Comunidade e Contribuição

* **Entre para a Comunidade:** Entre no [Discord](https://discord.com/2bAhWfXme9) para compartilhar seus momentos com o Reachy, criar apps em conjunto e obter ajuda.
* **Encontrou um bug?** Abra uma issue neste [repositório](https://github.com/pollen-robotics/reachy_mini/issues).

## Licença

Este projeto é licenciado sob a Licença Apache 2.0. Veja o arquivo [LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE) para mais detalhes.
Os arquivos de design de hardware são licenciados sob Creative Commons BY-SA-NC.
