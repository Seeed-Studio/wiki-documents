---
description: Visão geral do Reachy Mini SDK com guia de início rápido, exemplos de código e links para instalação, documentação do SDK em Python e recursos da comunidade.
title: Reachy Mini SDK
slug: /reachymini_sdk_readme
keywords:
  - sdk
  - início rápido
  - python
  - exemplos de código
  - tutoriais
  - primeiros passos
  - controle de robô
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_readme/
---

# Construa, brinque e inove com o Reachy Mini 🤖

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/h2lyqR2eMyM"
  frameborder="0"
  allowfullscreen
/>

## ⚡️ Visão Rápida
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

## 🚀 Comece Agora

:::tip Novo no Reachy Mini?
Siga estes guias nesta ordem:
:::

* **[Instalação](https://wiki.seeedstudio.com/pt-br/reachymini_sdk_installation)**: 5 minutos para configurar seu computador
* **[Guia de Início Rápido](https://wiki.seeedstudio.com/pt-br/reachymini_sdk_quickstart)**: Execute seu primeiro comportamento no Reachy Mini
* **[Python SDK](https://wiki.seeedstudio.com/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Integrações de IA](https://wiki.seeedstudio.com/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique na Hugging Face.
* **[Conceitos Centrais](https://wiki.seeedstudio.com/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.

## 📂 Exemplos de Código

:::info Pronto para rodar
Fornecemos uma coleção de scripts prontos para uso para ajudar você a entender como utilizar recursos específicos do robô.
:::

[**👉 Navegue pela pasta de exemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 Desenvolvimento assistido por IA

:::tip Para agentes de codificação com IA
Usando um agente de codificação com IA (Claude Code, Codex, Copilot, etc.)? Você pode começar a criar apps imediatamente. Cole este prompt no seu agente:
:::

> *Eu gostaria de criar um app para o Reachy Mini. Comece lendo https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

Este guia [**AGENTS.md**](/pt-br/reachymini_agents) fornece aos agentes de IA tudo o que eles precisam: padrões do SDK, boas práticas, apps de exemplo e habilidades passo a passo.

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o guia de Solução de Problemas & FAQ](https://wiki.seeedstudio.com/pt-br/reachymini_troubleshooting)**

## 💬 Comunidade

* [Discord](https://discord.gg/Y7FgMqHsub) - Obtenha ajuda e compartilhe projetos.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Descubra apps da comunidade.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Solicitações de recursos e bugs.
