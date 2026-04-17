---
description: Exemplo que demonstra como controlar o ângulo de guinada da cabeça do Reachy Mini usando um joystick (controlador de PS4 ou Xbox) para um controle intuitivo em tempo real.
title: Controlador Joystick
slug: /reachymini_examples_joy_controller
keywords:
  - joystick
  - controller
  - ps4
  - xbox
  - pygame
  - real-time control
  - head yaw
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_joy_controller/
---

# Controlador Joystick

Este exemplo demonstra como controlar o ângulo de guinada da cabeça do Reachy Mini usando um joystick (controlador de PS4 ou Xbox). O joystick esquerdo controla a rotação esquerda-direita da cabeça, proporcionando um controle intuitivo em tempo real do robô.

**Controles:**
- **JOYSTICK ESQUERDO (Esquerda/Direita)**: Controla o ângulo de guinada da cabeça
- **BOTÃO CIRCLE / B**: Sai do aplicativo com segurança
- **CTRL-C**: Sai do aplicativo

**Requisitos:**
- Instalar pygame: `pip install pygame`
- Conectar um controlador de PS4 ou Xbox ao seu computador

**Mapeamentos do controlador:**
- PS4: Botão 1 = Circle (O), Eixo 0 = Stick Esquerdo Horizontal
- Xbox: Botão 1 = B, Eixo 0 = Stick Esquerdo Horizontal

Veja o exemplo completo em: [joy_controller.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/joy_controller.py)
