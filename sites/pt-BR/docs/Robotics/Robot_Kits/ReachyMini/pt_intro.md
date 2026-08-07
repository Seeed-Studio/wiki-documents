---
description: Reachy Mini é um robô expressivo e de código aberto feito para hackers e desenvolvedores de IA. Possui loja de apps, SDK em Python e múltiplas opções de plataforma.
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
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_intro/
---

# Reachy Mini 🤖

[![Discord](https://img.shields.io/badge/Discord-Join_the_Community-7289DA?logo=discord&logoColor=white)](https://discord.gg/Y7FgMqHsub)

**Reachy Mini é um robô expressivo e de código aberto feito para hackers e desenvolvedores de IA.**

🛒 [**Buy Reachy Mini**](https://www.hf.co/reachy-mini/)

[![Reachy Mini Hello](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachy_mini_hello.gif)](https://www.pollen-robotics.com/reachy-mini/)

## ⚡️ Monte e inicie o seu próprio robô

**Escolha sua plataforma para acessar o guia específico:**

| **🤖 Reachy Mini (Wireless)** | **🔌 Reachy Mini Lite** | **💻 Simulação** |
| :---: | :---: | :---: |
| A experiência autônoma completa.<br/>Raspberry Pi CM4 + Bateria + WiFi. | A versão para desenvolvedores.<br/>Conexão USB com o seu computador. | Nenhum hardware necessário.<br/>Prototipe em MuJoCo. |
| 👉 [**Ir para o guia Wireless**](/pt-br/reachymini_platforms_reachy_mini_get_started) | 👉 [**Ir para o guia Lite**](/pt-br/reachymini_platforms_reachy_mini_lite_get_started) | 👉 [**Ir para a Simulação**](/pt-br/reachymini_platforms_simulation_get_started) |

:::tip Dica avançada
Instale o [uv](https://docs.astral.sh/uv/getting-started/installation/) para instalações de apps 10 a 100 vezes mais rápidas (detectado automaticamente, com fallback para `pip`).
:::

## 📱 Apps e Ecossistema

Reachy Mini vem com uma loja de apps baseada em Hugging Face Spaces. Você pode instalar esses apps diretamente a partir do Reachy Mini Control com um clique!

* **🗣️ [Conversation App](https://huggingface.co/spaces/pollen-robotics/reachy_mini_conversation_app):** Converse naturalmente com o Reachy Mini (baseado em LLMs).
* **📻 [Radio](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio):** Ouça rádio com o Reachy Mini!
* **👋 [Hand Tracker](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2):** O robô segue os movimentos da sua mão em tempo real.

👉 [**Navegue por todos os apps no Hugging Face**](https://hf.co/reachy-mini/#/apps)

## 🚀 Primeiros passos com o Reachy Mini SDK

<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

### Visão rápida
Controle seu robô com apenas **algumas linhas de código**:

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

### Guias do usuário
* **[Instalação](/pt-br/reachymini_sdk_installation)**: 5 minutos para configurar o seu computador
* **[Guia de início rápido](/pt-br/reachymini_sdk_quickstart)**: Execute seu primeiro comportamento no Reachy Mini
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique no Hugging Face.
* **[Criando e publicando Apps](/pt-br/reachymini_sdk_apps)**: Crie, teste, publique e depure apps do Reachy Mini.
* **[Conceitos centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.
* **[Tutoriais](/pt-br/reachymini_examples_minimal_demo)**: Exemplos práticos para aprender o SDK passo a passo.
* 📂 [**Navegue pela pasta de exemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🛠 Visão geral do hardware

Os robôs Reachy Mini são vendidos como kits e geralmente levam **de 2 a 3 horas** para serem montados. Guias detalhados passo a passo estão disponíveis nas pastas específicas de cada plataforma vinculadas acima.

* **Reachy Mini (Wireless):** Roda embarcado (RPi CM4), autônomo, inclui IMU. [Veja as especificações](/pt-br/reachymini_platforms_reachy_mini_hardware).
* **Reachy Mini Lite:** Roda no seu PC, alimentado pela tomada. [Veja as especificações](/pt-br/reachymini_platforms_reachy_mini_lite_hardware).

## ❓ Solução de problemas

Encontrou algum problema? 👉 **[Confira o guia de solução de problemas e FAQ](/pt-br/reachymini_troubleshooting)**

## 🤝 Comunidade e contribuição

* **Participe da comunidade:** Entre no [Discord](https://discord.gg/2bAhWfXme9) para compartilhar seus momentos com o Reachy, criar apps em conjunto e obter ajuda.
* **Encontrou um bug?** Abra uma issue neste [repositório](https://github.com/pollen-robotics/reachy_mini/issues).
* **Próximos passos:** Confira nosso [roadmap](/pt-br/reachymini_troubleshooting_roadmap) e compartilhe seu feedback!

## Licença

Este projeto é licenciado sob a Licença Apache 2.0. Consulte o arquivo [LICENSE](https://github.com/pollen-robotics/reachy_mini/tree/main/LICENSE) para mais detalhes.
Os arquivos de design de hardware são licenciados sob Creative Commons BY-SA-NC.