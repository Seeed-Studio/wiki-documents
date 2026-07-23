---
description: Referência completa da API REST para o daemon do Reachy Mini, cobrindo endpoints HTTP e WebSocket para apps, daemon, estado, movimento, motores, cinemática, volume e autenticação Hugging Face.
title: Referência da API REST
slug: /reachymini_api_rest-api
keywords:
  - rest api
  - http api
  - websocket
  - endpoints
  - daemon
  - apps
  - state
  - motors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_rest-api/
---

# API REST

O daemon do Reachy Mini expõe uma API HTTP e WebSocket em `http://<daemon-ip>:8000/api`.

- **Lite** — o daemon é executado na sua máquina: `http://localhost:8000`
- **Wireless** — o daemon é executado no robô: `http://reachy-mini.local:8000`

Quando o daemon está em execução, você pode acessar a **Swagger UI** interativa em

- [http://localhost:8000/docs](http://localhost:8000/docs) (Lite — daemon na sua máquina)
- [http://reachy-mini.local:8000/docs](http://reachy-mini.local:8000/docs) (Wireless — daemon no robô)

A referência abaixo é gerada a partir da mesma especificação OpenAPI e pode ser consultada
sem que o daemon esteja em execução.

## Visão geral dos endpoints

| Categoria | Prefixo | Descrição |
|----------|--------|-------------|
| **Apps** | `/api/apps` | Listar, instalar, iniciar e parar apps |
| **Daemon** | `/api/daemon` | Iniciar, parar e reiniciar o daemon |
| **State** | `/api/state` | Ler pose da cabeça, yaw do corpo, antenas, DoA |
| **Move** | `/api/move` | Ir para, definir alvo, reproduzir movimentos gravados |
| **Motors** | `/api/motors` | Obter status do motor, definir modo de controle |
| **Kinematics** | `/api/kinematics` | Informações de IK, arquivos de malha URDF e STL |
| **Volume** | `/api/volume` | Controle de volume do alto-falante e do microfone |
| **HF Auth** | `/api/hf-auth` | Gerenciamento de token do Hugging Face |

## Referência completa

<iframe
  src="https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json"
  style={{width: '100%', height: '80vh', border: 'none'}}
></iframe>

[Abrir em página inteira](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json) · [Baixar especificação OpenAPI (JSON)](https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json)

## Apps mais complexos

Consulte a página [JavaScript SDK & Web Apps](/pt-br/reachymini_sdk_javascript-sdk) para exemplos de apps mais complexos usando o JavaScript SDK, que aproveita o transporte WebRTC e fornece abstrações de nível mais alto para vídeo, áudio e controle do robô.
