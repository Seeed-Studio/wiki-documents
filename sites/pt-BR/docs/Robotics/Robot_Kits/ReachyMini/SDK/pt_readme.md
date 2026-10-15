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
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_readme/
---

# Construa, brinque e inove com o Reachy Mini 🤖


<div align="center">
  <a href="https://www.youtube.com/watch?v=h2lyqR2eMyM" target="_blank">
    <img src="https://img.youtube.com/vi/h2lyqR2eMyM/maxresdefault.jpg" width="560" alt="点击观看视频" style={{border: '1px solid #ddd', borderRadius: '8px'}} />
    <p><i>▶️ 点击在 YouTube 上观看：Reachy Mini SDK 运行指南</i></p>
  </a>
</div>

## ⚡️ Visão Rápida
Controle seu robô com **apenas algumas linhas de código**:

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
* **[Instalação](/pt-br/reachymini_sdk_installation)**: 5 minutos para configurar seu computador
* **[Guia de Início Rápido](/pt-br/reachymini_sdk_quickstart)**: Execute seu primeiro comportamento no Reachy Mini
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique no Hugging Face.
* **[Criando e Publicando Apps](/pt-br/reachymini_sdk_apps)**: Crie, teste, publique e depure apps do Reachy Mini.
* **[Conceitos Centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.

## 📂 Exemplos de Código

Fornecemos uma coleção de scripts prontos para uso para ajudar você a entender como utilizar recursos específicos do robô.

[**👉 Navegue pela Pasta de Exemplos**](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)

## 🤖 Desenvolvimento Assistido por IA

Usando um agente de codificação com IA (Claude Code, Codex, Copilot, etc.)? Você pode começar a criar apps imediatamente. Cole este prompt no seu agente:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

Este guia [**AGENTS.md**](/pt-br/reachymini_agents) fornece aos agentes de IA tudo o que eles precisam: padrões do SDK, boas práticas, apps de exemplo e habilidades passo a passo.

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**

## 💬 Comunidade
* [Discord](https://discord.gg/Y7FgMqHsub) - Obtenha ajuda e compartilhe projetos.
* [Hugging Face Spaces](https://huggingface.co/spaces?q=reachy_mini) - Descubra apps da comunidade.
* [GitHub Discussions](https://github.com/pollen-robotics/reachy_mini/discussions) - Solicitações de recursos e bugs.