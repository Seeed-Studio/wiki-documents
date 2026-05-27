---
description: Este guia ajudará você a começar com o reBot Arm B601-RS, incluindo opções de compra, montagem, calibração e configuração de software.
title: Início Rápido do reBot Arm B601-RS
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
# image:
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/
---

# Introdução ao reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Braço Robótico de 6 DOF · Suporte a Múltiplos Motores · Solucionador de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

O projeto reBot Arm foi disponibilizado como código aberto no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia irá conduzi-lo pelo início rápido do B601-RS, da montagem à operação.

O conteúdo deste guia está chegando até você à velocidade da luz — fique ligado!

:::

## Opções de Compra


## Etapa 1: Guia de Montagem

Antes da montagem:

- Leia atentamente as instruções a seguir para garantir um processo de montagem tranquilo.
  1. Este kit inclui vários parafusos e peças com aparência semelhante. Verifique as especificações e a orientação antes de apertar.
  2. O vídeo foi gravado no início de abril. Podem existir pequenas atualizações, mas a montagem permanece a mesma. Considere as peças enviadas como versão final.
  3. Os parafusos enviados possuem trava-rosca aplicada. Use ferramentas adequadas ou uma parafusadeira elétrica (recomendado). Ajuste o torque para (3–6 kgf·cm) para evitar espanar. Se ocorrer espanamento, pare imediatamente e substitua ou realinhe o parafuso. Parafusos com trava-rosca espanados são difíceis de remover e podem danificar as peças.
  4. Garanta a segurança durante a montagem. Evite beliscões ou ferimentos. Crianças devem estar sob supervisão.

## Etapa 2: Redefinir ID dos Motores

### Antes de redefinir os motores:

Antes da configuração dos parâmetros do motor, observe as seguintes preparações e regras de segurança:

- Compre 2 grampos de fixação (≥3 polegadas) e uma fonte de alimentação chaveada de 48 V com saída XT30 (use marca confiável, sem produtos de baixa qualidade).
- Mantenha distância ≥1 m durante a depuração/operação.
- Não faça conexão/desconexão a quente dos motores; desligue a alimentação antes de conectar/desconectar a interface XT30 2+2.
- Não sobrecarregue/não exceda a velocidade; verifique a fiação e os fixadores antes da inicialização; evite ambientes úmidos/de alta temperatura/empoeirados.
- Defina parâmetros de programa razoáveis e parada de emergência para evitar perda de controle.
- **Siga rigorosamente estas regras. O vendedor não é responsável por riscos/responsabilidades decorrentes de operação ilegal ou erros pessoais.**

### Lista de Preparação

#### Hardware

#### Requisito de Computador

- Computador pessoal com dual boot (Windows + Ubuntu / macOS)

#### Software
