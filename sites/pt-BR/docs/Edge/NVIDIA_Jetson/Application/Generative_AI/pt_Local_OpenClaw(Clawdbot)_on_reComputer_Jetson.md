---
description: Este wiki mostra como implantar e usar o Clawdbot no reComputer Jetson.
title: OpenClaw(Clawdbot) local no reComputer Jetson com Ollama
keywords:
  - reComputer
  - Jetson
  - LLM
  - Clawdbot
  - Qwen
  - Ollama
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops_homepage.webp
slug: /local_openclaw_on_recomputer_jetson
sku: 114110314, 114090066
last_update:
  date: 02/3/2026
  author: Youjiang
createdAt: '2026-02-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/local_openclaw_on_recomputer_jetson/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## Visão Geral

OpenClaw é um framework de agentes que pode funcionar tanto com LLMs em nuvem quanto com modelos locais, dependendo das suas necessidades de implantação. Modelos em nuvem são convenientes para começar: eles não exigem configuração local, oferecem uma ampla variedade de modelos e são fáceis de escalar. As compensações são custos contínuos de tokens, dependência de serviços externos e restrições mais rígidas em relação à residência de dados e conectividade. Modelos locais evitam taxas recorrentes de API, mantêm os dados no próprio dispositivo e continuam operando em redes offline ou restritas. As compensações são esforço adicional de configuração e a necessidade de combinar o tamanho do modelo com os limites de computação e armazenamento do dispositivo. Para robótica de borda e assistentes de longa duração, essas vantagens tornam a implantação local o padrão prático. Este wiki mostra como executar o OpenClaw em um reComputer Jetson com Ollama para construir um hub de controle de IA autônomo.

## O Que Você Vai Construir

- Um runtime Ollama local no Jetson
- OpenClaw Gateway e WebUI rodando no Jetson
- OpenClaw configurado para usar um modelo Ollama como LLM padrão

## Hardware Suportado

- Série reComputer Jetson (por exemplo, reComputer Robotics J501X)
- NVMe SSD é recomendado para carregamento mais rápido de modelos

:::note
Este wiki usa o [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html) para a demonstração, mas outros modelos Jetson também são suportados.
Certifique-se de que o dispositivo Jetson tenha pelo menos 16GB de memória.
:::

## Pré-requisitos

- reComputer Robotics J5011 com Jetpack6.2 pré-instalado
- Um Discord Bot Token

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

:::info
Observe que `Discord Bot Token` não é obrigatório; você também pode usar outros softwares sociais, como WhatsApp.
:::

## Conexão de Hardware

:::note
Antes de começar, conecte o dispositivo Jetson à rede e à fonte de alimentação e certifique-se de que a conexão de rede permaneça estável.
:::


## Passo 1: Instalar o Ollama

Abra uma janela de terminal no dispositivo Jetson e execute o seguinte comando para instalar o Ollama no Jetson:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Verifique se a API local está acessível:

```bash
curl http://localhost:11434/api/tags
```

Se a saída não mostrar erros, significa que o Ollama foi instalado corretamente.

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/install_ollama.png" />
</div>

## Passo 2: Baixar um Modelo Local

Baixe pelo menos um modelo do Ollama. Exemplo:

```bash
ollama pull qwen3-vl:2b
```

Liste os modelos instalados:

```bash
ollama list
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/ollama_list.png" />
</div>

## Passo 3: Instalar o OpenClaw (Clawdbot)

OpenClaw requer Node.js 22 ou superior. Instale-o globalmente com npm:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

## Passo 4: Configurar o OpenClaw

Depois que o download do OpenClaw for concluído, ele entrará automaticamente na página de configuração. Siga as instruções exibidas na janela do terminal para configurar o OpenClaw.

:::danger
A página do assistente de configuração pode não incluir uma opção para configurar um modelo local. Não se preocupe — podemos modificar o arquivo de configuração diretamente depois. No assistente de configuração, você pode optar por pular a configuração do modelo ou configurar temporariamente um modelo baseado em nuvem.
:::

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/config.png" />
</div>

Se você vir a página acima, isso significa que o OpenClaw foi instalado e configurado com sucesso. Em seguida, prosseguiremos para configurar o modelo local.

Abra o arquivo `~/.openclaw/openclaw.json` e adicione ou modifique a seguinte configuração.

```json
{
  "agents": {
    "defaults": {
      "models": {"ollama":{}},
      "model": {"primary": "ollama/qwen3-vl:2b"}
    }
  },
  "models": {
    "providers": {
      "ollama":{
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:2b",
            "name": "Qwen3 VL 2B",
            "reasoning": false,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
}
```

O arquivo de configuração completo é o seguinte:

<details>

<summary> ~/.openclaw/openclaw.json </summary>

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "agents": {
    "defaults": {
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      },
      "compaction": {
        "mode": "safeguard"
      },
      "workspace": "/home/seeed/.openclaw",
      "models": {
        "qwen-portal/coder-model": {
          "alias": "qwen"
        },
        "qwen-portal/vision-model": {},
        "ollama":{}
      },
      "model": {
        "primary": "ollama/qwen3-vl:2b"
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    },
    "port": 18789,
    "bind": "loopback",
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "plugins": {
    "entries": {
      "qwen-portal-auth": {
        "enabled": true
      },
      "discord": {
        "enabled": true
      }
    }
  },
  "models": {
    "providers": {
      "qwen-portal": {
        "baseUrl": "https://portal.qwen.ai/v1",
        "apiKey": "qwen-oauth",
        "api": "openai-completions",
        "models": [
          {
            "id": "coder-model",
            "name": "Qwen Coder",
            "reasoning": false,
            "input": [
              "text"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          },
          {
            "id": "vision-model",
            "name": "Qwen Vision",
            "reasoning": false,
            "input": [
              "text",
              "image"
            ],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      },
      "ollama":{
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3-vl:2b",
            "name": "Qwen3 VL 2B",
            "reasoning": false,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "auth": {
    "profiles": {
      "qwen-portal:default": {
        "provider": "qwen-portal",
        "mode": "oauth"
      }
    }
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "groupPolicy": "open"
    }
  },
  "skills": {
    "install": {
      "nodeManager": "npm"
    }
  },
  "wizard": {
    "lastRunAt": "2026-02-02T06:19:11.256Z",
    "lastRunVersion": "2026.1.30",
    "lastRunCommand": "onboard",
    "lastRunMode": "local"
  },
  "meta": {
    "lastTouchedVersion": "2026.1.30",
    "lastTouchedAt": "2026-02-02T06:19:11.282Z"
  }
}
```

</details>

## Passo 5: Reiniciar os Serviços do OpenClaw

Execute o comando de reinicialização:

```bash
openclaw gateway restart
```

## Passo 6: Abrir o WebUI e Verificar

Abra o WebUI no navegador do Jetson:

```
http://127.0.0.1:18789/
```

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/web_ui.png" />
</div>

Se a página não carregar, verifique se o Gateway está em execução.

:::danger
Se você continuar vendo um erro de “unable to access” ao abrir o WebUI, pode ser porque o token de acesso está ativado. Você pode encontrar o token do WebUI no arquivo de configuração e anexá-lo à URL do WebUI ao acessá-lo.
`http://127.0.0.1:18789/?token=...`
::: 

## Demonstração de Efeito

A boa notícia é que conseguimos executar o OpenClaw usando computação local de baixo consumo (Jetson). 
A má notícia é que o desempenho do modelo local não atendeu às expectativas.

Isso pode ser devido aos meus parâmetros de configuração ou às configurações de prompt não terem sido ajustados adequadamente. Acredito que, ajustando os parâmetros de funcionamento do OpenClaw, possamos otimizar ainda mais o desempenho do modelo local.

Se você também estiver interessado neste projeto, tente implantá-lo agora! 

<iframe width="800" height="450" src="https://www.youtube.com/embed/kZbWuK7YFuc" title="Local OpenClaw(Clawdbot) on reComputer Jetson with Ollama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referências

- https://docs.openclaw.ai/
- https://docs.openclaw.ai/providers/ollama
- https://ollama.com/
- https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_j501_robotics_getting_started/




## Recursos

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
