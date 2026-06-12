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
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-01'
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
  <strong>Braço Robótico de 6 DOF · Suporte a Múltiplos Motores · Solução de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

O projeto reBot Arm foi disponibilizado como código aberto no [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Este guia irá conduzi-lo pelo início rápido do B601-RS, da montagem à operação.

O conteúdo deste guia está vindo em sua direção à velocidade da luz — fique ligado!

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

### Antes de Redefinir os Motores:

Antes da configuração dos parâmetros do motor, observe as seguintes preparações e regras de segurança:

- Compre 2 grampos de fixação (≥3 polegadas) e uma fonte de alimentação chaveada de 48 V com saída XT30 (use marca confiável, sem produtos de baixa qualidade).
- Mantenha distância ≥1 m durante a depuração/operação.
- Não faça conexão a quente dos motores; desligue a alimentação antes de conectar/desconectar a interface XT30 2+2.
- Não sobrecarregue/não exceda a velocidade; verifique a fiação e os fixadores antes da inicialização; evite ambientes úmidos/quentes/empoeirados.
- Defina parâmetros de programa razoáveis e parada de emergência para evitar perda de controle.
- **Siga rigorosamente estas regras. O vendedor não é responsável por riscos/responsabilidades decorrentes de operação ilegal ou erros pessoais.**

### Lista de Preparação

#### Hardware

#### Requisito de Computador

- Computador pessoal com dual-boot (Windows + Ubuntu / macOS)

#### Software

## Etapa 3: Calibrar o reBot Arm e Primeiros Passos

Confiamos que você concluiu a montagem do braço robótico, a inicialização do ponto zero, a configuração do ID dos motores e outras etapas de preparação seguindo o vídeo. Agora você está pronto para explorar oficialmente a série de tutoriais e ferramentas que lançamos.

1. Explore nossa plataforma **MotorBridge**, uma solução tudo-em-um que oferece suporte a uma lista crescente de motores, incluindo [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow e outros. Ela também é compatível com braços robóticos continuamente atualizados, como o reBot. Projetada para iniciantes, também oferecemos um SDK em Python que implementa a mesma funcionalidade para desenvolvedores.

2. Experimente novos recursos e detalhes do MotorBridge para o braço robótico reBot, incluindo calibração de ponto zero com um clique, gravação de parâmetros, controle de motores via interface gráfica de arrastar e soltar e uma interface integrada de visualização de modelo.

3. Esta ferramenta é totalmente compatível com os sistemas operacionais **Windows, Ubuntu e macOS**.

### Etapa 1: Instalar o miniforge (em Windows\Ubuntu\macOS\Jetson\Pi)

Este tutorial usa o Ubuntu como exemplo.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### Etapa 2: Configuração do Ambiente

Crie um ambiente virtual com Python 3.12:

```bash
conda create -y -n rebot python=3.12
```

Em seguida, ative seu ambiente virtual. **Você precisa executar este comando de ativação sempre que abrir um terminal para usar recursos relacionados ao reBot**:

```bash
conda activate rebot
```

### Etapa 3: Instalar o Motorbridge

:::tip Nota para usuários de macOS
Se você tiver baixa taxa de quadros durante a teleoperação no macOS, isso pode ser causado por um driver WCH CH34x desatualizado. Para **macOS 10.14 e posteriores**, o sistema inclui um driver `AppleUSBCHC0M` integrado. Você pode desinstalar o driver antigo e mudar para o driver integrado do macOS, o que deve melhorar efetivamente a taxa de quadros.
:::

Após ativar o ambiente virtual do reBot, execute o seguinte comando para instalar o motorbridge:

```bash
pip install motorbridge
```

### Etapa 4: Conectar o Braço Robótico

Faça o dispositivo PCAN-USB funcionar no barramento CAN a 1 Mbps para comunicação com o braço robótico.

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

### Etapa 5: Iniciar o MotorBridge-gateway

Opcional (você pode conectar o braço robótico na web para testar a conexão)

Abra `https://motorbridge.github.io/motorbridge-studio/` no seu navegador, clique na opção de ajuda, copie o comando correspondente ao seu sistema operacional e à sua placa controladora, verifique o endereço IP e o número da porta e, em seguida, pressione Enter no terminal para executá-lo.

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

Consulte o vídeo para saber como usar.
