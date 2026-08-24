---
description: Guia para usar agentes de codificação com IA para criar apps Reachy Mini, apontando para a documentação AGENTS.md para que os agentes de IA entendam os padrões do SDK e as melhores práticas.
title: Vibe Code com o Seu Agente
slug: /reachymini_vibe-code-with-your-agent
keywords:
  - vibe coding
  - agente de IA
  - claude code
  - copilot
  - agente
  - criação de apps
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/pt-br/reachymini_vibe-code-with-your-agent/
---
# Vibe code um app Reachy Mini com o seu agente favorito 🤖

Usando um agente de codificação com IA (Claude Code, Codex, Copilot, etc.)? Você pode começar a criar apps imediatamente.
Cole este prompt no seu agente:

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md  I want my app to do [describe your app idea here].*

Este guia AGENTS.md fornece aos agentes de IA tudo o que eles precisam: padrões do SDK, melhores práticas, apps de exemplo e habilidades passo a passo.

## Guia passo a passo

**1. Deixe o agente analisar o projeto**

Abra a sua ferramenta de agente (aqui usamos o Kimi Code como exemplo) e peça para ele analisar os arquivos e o projeto nas duas páginas a seguir:

Exemplo: Analise o projeto e os arquivos em https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md e  https://github.com/pollen-robotics/reachy_mini/tree/main

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_1.webp" />
</div>

**2. Informe a versão do hardware e inicie o desenvolvimento**

Após a análise, diga à IA se o seu Reachy Mini é a versão com fio ou sem fio, e peça para ela começar a desenvolver o projeto para você.

Exemplo: Estou usando a versão com fio. Faça um projeto de correção de postura que emita um aviso por voz sempre que detectar que a pessoa está sentada com má postura.

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_2.webp" />
</div>

**3. Inicie o daemon**

Depois que a IA terminar o projeto, abra um terminal, entre no ambiente virtual correspondente e execute:

```bash
reachymini-mini-daemon
```

**4. Execute o script**

Abra outro terminal e execute o script escrito pela IA para começar. Se encontrar algum pequeno bug ou quiser adicionar funcionalidades sobre a versão atual, basta continuar conversando com a IA para que ela faça as alterações.

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/Reachymini/reachymini_vibe/reachymini_3.webp" />
</div>

Isso permitirá que você desenvolva robôs com IA rapidamente — criando, testando e iterando apps Reachy Mini. E até publique-os na loja de apps da Hugging Face para o mundo usar!
