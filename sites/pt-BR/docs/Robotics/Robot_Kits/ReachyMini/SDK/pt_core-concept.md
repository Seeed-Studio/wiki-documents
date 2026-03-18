---
description: Compreenda os conceitos centrais e a arquitetura do Reachy Mini, incluindo o design cliente-servidor, sistemas de coordenadas, limites de segurança e modos de motor para um desenvolvimento de aplicações robustas.
title: Conceitos Centrais & Arquitetura
slug: /reachymini_sdk_core-concept
keywords:
  - architecture
  - coordinate systems
  - safety limits
  - motor modes
  - client-server
  - daemon
  - sdk
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_core-concept/
---

# Conceitos Centrais & Arquitetura

Entender como o Reachy Mini funciona internamente ajudará você a criar aplicações robustas e depurar problemas.

## Arquitetura de Software

O Reachy Mini usa uma arquitetura **Cliente-Servidor**:

1.  **O Daemon (Servidor):**
    * Roda no computador conectado ao robô (ou à simulação).
    * Lida com E/S de hardware (USB/Serial), verificações de segurança e leitura de sensores.
    * Expõe uma REST API (`localhost:8000`) e WebSocket.

2.  **O SDK (Cliente):**
    * Seu código Python (pacote `reachy_mini`).
    * Conecta ao Daemon pela rede.
    * *Vantagem:* Você pode executar seu código de IA em um servidor potente enquanto o Daemon roda em um Raspberry Pi conectado ao robô.

## Sistemas de Coordenadas

Ao mover o robô, você trabalhará com dois quadros de referência principais:

### 1. Quadro da Cabeça
Localizado na base da cabeça. Usado para os comandos `goto_target` e `set_target`.

![Reachy Mini Head Frame](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_frame.png)

### 2. Quadro do Mundo
Fixo em relação à base do robô. Usado para comandos `look_at_world`.

![Reachy Mini World Frame](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/world_frame.png)

## Limites de Segurança ⚠️

O Reachy Mini possui limites físicos e de software para evitar autocolisão e danos. O SDK irá automaticamente limitar os valores à posição válida mais próxima.

| Junta / Eixo | Faixa de Limite |
| :--- | :--- |
| **Inclinação/Rolagem da Cabeça** | [-40°, +40°] |
| **Rotação da Cabeça (Yaw)** | [-180°, +180°] |
| **Rotação do Corpo (Yaw)** | [-160°, +160°] |
| **Delta de Yaw** | Diferença máxima de 65° entre a Rotação da Cabeça e do Corpo |

## Modos de Motor

Você pode alterar como os motores se comportam:
* **`mini.enable_motors()`**: Rígido. Mantém a posição.
* **`mini.disable_motors()`**: Solto. Sem energia.
* **`mini.enable_gravity_compensation()`**: Modo "suave". Você pode mover a cabeça com a mão, e ela permanecerá onde você a deixar. (Funciona apenas com o backend de cinemática Placo.)


## Próximos Passos
* **[Guia de Início Rápido](/pt-br/reachymini_sdk_quickstart)**: Execute seu primeiro comportamento no Reachy Mini
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique no Hugging Face.
