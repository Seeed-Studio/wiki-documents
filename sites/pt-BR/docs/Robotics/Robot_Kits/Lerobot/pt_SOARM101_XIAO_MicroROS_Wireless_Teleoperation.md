---
description: Construa um link de teleoperação ROS 2 sem fio e de baixa latência para um seguidor SO-ARM101 usando o XIAO ESP32-C3 Bus Servo Adapter e micro-ROS via Wi-Fi UDP.
title: Teleoperação sem fio do SO-ARM101 com XIAO ESP32-C3 e micro-ROS
keywords:
  - SO-ARM101
  - XIAO ESP32-C3
  - micro-ROS
  - ROS 2
  - LeRobot
  - Teleoperation
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /soarm101_xiao_microros_wireless_teleoperation
last_update:
  date: 07/24/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-07-24'
url: https://wiki.seeedstudio.com/pt-br/soarm101_xiao_microros_wireless_teleoperation/
---

# Teleoperação sem fio do SO-ARM101 com XIAO ESP32-C3 e micro-ROS

:::note Community Contribution
Este tutorial é uma contribuição da comunidade por [@linao681](https://github.com/linao681). Obrigado por compartilhar este projeto com a comunidade Seeed Studio!
:::

## Introdução

Este tutorial mostra como controlar um seguidor SO-ARM101 sem fio a partir de um líder SO-ARM101. O líder é conectado a um computador Ubuntu por meio de uma placa padrão de controle de servos de barramento USB. O seguidor usa o Seeed Studio XIAO ESP32-C3 Bus Servo Adapter e se comunica com o ROS 2 por meio de micro-ROS via Wi-Fi UDP.

A implementação fornece:

- retorno de todos os seis juntas do seguidor em `/joint_states`;
- comandos para todas as seis juntas do seguidor em `/joint_command`;
- mapeamento de juntas de líder para seguidor do LeRobot;
- um handshake de inicialização que evita um salto inesperado de posição;
- verificações de calibração, limites de junta, passo de comando e integridade do barramento;
- verificações automáticas de pré-voo e inicialização da teleoperação com um único comando.

O código-fonte completo está disponível no [repositório soarm101-drone-teleop](https://github.com/linao681/soarm101-drone-teleop).

:::note

Este projeto foi desenvolvido como um protótipo testado em solo para uma futura demonstração do SO-ARM101 montado em drone. Este guia cobre apenas a comunicação do braço robótico e o link de teleoperação. Ele não fornece um sistema de controle ou segurança certificado para voo.

:::

## Arquitetura do Sistema

```text
SO-ARM101 leader
  │  Feetech UART bus
  ▼
USB bus-servo driver
  │  USB
  ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
XIAO ESP32-C3 Bus Servo Adapter
  ├─ micro-ROS publishes /joint_states
  └─ 1 Mbps UART Sync Read/Write
              │
              ▼
SO-ARM101 follower, 6 × STS3215
```

O PC e o XIAO devem estar conectados à mesma rede local. Um hotspot de celular ou um ponto de acesso dedicado de 2,4 GHz pode ser usado para uma demonstração.

## Hardware

- 1 × SO-ARM101 líder
- 1 × SO-ARM101 seguidor
- 1 × placa padrão de controle de servos de barramento USB para o líder
- 1 × Seeed Studio XIAO ESP32-C3 Bus Servo Adapter para o seguidor
- 2 × fontes de alimentação para o braço com especificação correta
- 1 × computador com Ubuntu 22.04
- 1 × rede Wi-Fi de 2,4 GHz
- Cabos USB para calibração e gravação de firmware

Este firmware de referência foi testado com o seguidor SO-ARM101 padrão de 5 V usando seis servos STS3215 com número de modelo `777`.

:::danger

- Desconecte a alimentação dos servos antes de trocar qualquer cabo de servo.
- Use a tensão especificada para a sua versão exata do SO-ARM101. Não conecte uma fonte de 12 V a um braço de 5 V.
- A porta USB não fornece energia suficiente para os servos.
- Faça o primeiro teste em uma bancada estável, com um desligamento de energia de emergência claramente acessível.
- Se estiver testando perto de um drone, remova as hélices.

:::

## Requisitos de Software

A configuração de host testada é:

- Ubuntu 22.04
- ROS 2 Humble
- LeRobot com suporte a Feetech
- micro-ROS Agent
- Python 3.10
- PlatformIO

Instale o micro-ROS Agent e o PlatformIO se eles ainda não estiverem disponíveis:

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

Siga o [guia SO-ARM100/101 LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/) para instalar o LeRobot e configurar os IDs dos servos antes de continuar.

## Etapa 1: Clonar o Projeto

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

Os caminhos importantes do projeto são:

```text
firmware/xiao_soarm/          PlatformIO firmware for the wireless follower
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

O repositório inclui um `libmicroros.a` pré-compilado para a arquitetura RISC-V do ESP32-C3, portanto um usuário comum não precisa fazer cross-compile do micro-ROS.

## Etapa 2: Calibrar Ambos os Braços

Calibre primeiro o seguidor com uma placa padrão de controle de servos de barramento USB. Substitua `/dev/ttyACM0` pela porta correta:

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower_recal \
  --robot.calibration_dir="$PWD/cali"
```

Em seguida, conecte e calibre o líder:

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM0 \
  --teleop.id=leader_recal \
  --teleop.calibration_dir="$PWD/cali"
```

Isso cria:

```text
cali/follower_recal.json
cali/leader_recal.json
```

:::warning

Os valores de calibração são específicos de um braço físico. Não controle outro seguidor com os valores de calibração incluídos como exemplo no repositório.

:::

### Copiar a calibração do seguidor para o firmware

O XIAO valida a EEPROM do servo antes de habilitar o torque. Abra:

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

Substitua estes três arrays pelos valores do seu `cali/follower_recal.json`:

```cpp
constexpr int16_t kHomingOffsets[kJointCount] = {
    /* homing_offset for joints 1 to 6 */
};
constexpr int16_t kRangeMin[kJointCount] = {
    /* range_min for joints 1 to 6 */
};
constexpr int16_t kRangeMax[kJointCount] = {
    /* range_max for joints 1 to 6 */
};
```

A ordem esperada é:

```text
shoulder_pan, shoulder_lift, elbow_flex,
wrist_flex, wrist_roll, gripper
```

O comando a seguir imprime os três arrays na ordem correta:

```bash
python3 - <<'PY'
import json

joints = [
    "shoulder_pan", "shoulder_lift", "elbow_flex",
    "wrist_flex", "wrist_roll", "gripper",
]
with open("cali/follower_recal.json", encoding="utf-8") as calibration_file:
    calibration = json.load(calibration_file)

for key in ("homing_offset", "range_min", "range_max"):
    print(key, [calibration[joint][key] for joint in joints])
PY
```

## Etapa 3: Configurar o Wi-Fi

Conecte o computador com Ubuntu à rede Wi-Fi que será usada pelo XIAO. Encontre o endereço IPv4 do computador:

```bash
ip -4 address
```

Entre no diretório do firmware e crie o arquivo de configuração privada:

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

Edite `src/wifi_config.h`:

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
const char* AGENT_IP = "YOUR_UBUNTU_PC_IP";
```

`wifi_config.h` é ignorado pelo Git e nunca deve ser enviado para um repositório público.

:::tip

O ESP32-C3 usa Wi-Fi de 2,4 GHz. Se um hotspot de celular suportar ambas as bandas, selecione o modo de compatibilidade ou de 2,4 GHz.

:::

## Etapa 4: Compilar e Gravar o XIAO

Conecte o XIAO ao computador via USB e então execute:

```bash
python3 -m platformio run
python3 -m platformio run --target upload
python3 -m platformio device monitor --baud 115200
```

Alimente o braço seguidor com sua fonte externa. Uma inicialização bem-sucedida contém mensagens semelhantes a:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` significa que todos os seis IDs de servo responderam. Se a calibração não corresponder, o firmware ainda relata o estado, mas rejeita comandos de movimento.

Após a gravação, o cabo USB é necessário apenas para monitoramento serial quando o XIAO estiver corretamente alimentado pelo adaptador. Mantenha a alimentação externa dos servos do seguidor conectada.

## Etapa 5: Iniciar o micro-ROS Agent

No computador com Ubuntu, abra um novo terminal:

```bash
source /opt/ros/humble/setup.bash
snap run micro-ros-agent udp4 --port 8888
```

Quando o XIAO descobrir o Agent, seu monitor serial deverá informar:

```text
micro-ROS ready
```

As interfaces ROS 2 são:

| Tópico | Tipo de mensagem | Direção | Taxa nominal |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | seguidor para PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC para seguidor | até 30 Hz |

Verifique o retorno:

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

Não envie valores arbitrários de juntas antes de concluir o handshake de inicialização na pose atual.

## Etapa 6: Executar a Teleoperação Líder-Seguidor sem Fio

Conecte o líder ao computador por meio de sua placa normal de controle de servos de barramento USB e alimente-o com a fonte externa correta.

Encontre seu caminho serial estável:

```bash
ls -l /dev/serial/by-id/
```

A partir da raiz do projeto, exporte a configuração local:

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_AGENT_IP="YOUR_UBUNTU_PC_IP"
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_LEADER_ADAPTER"
export SOARM_PYTHON="$(command -v python)"
```

Primeiro execute a verificação de pré-voo sem movimento:

```bash
./start_soarm_demo.sh --check
```

Ela verifica:

- o SSID do Wi-Fi e o IP do Agent;
- o adaptador USB do líder;
- os arquivos de calibração do líder e do seguidor;
- o micro-ROS Agent;
- o retorno ao vivo do seguidor em `/joint_states`;
- que outro processo de teleoperação não está usando o mesmo barramento do líder.

Se todas as verificações forem aprovadas, inicie a teleoperação:

```bash
./start_soarm_demo.sh
```

A ponte lê a pose inicial do seguidor e publica repetidamente a mesma pose antes de habilitar o torque. Ela então usa mapeamento relativo, de modo que o seguidor começa de onde está e segue as mudanças feitas no líder. Pressione `Ctrl+C` para parar.

:::warning

Parar a ponte ou perder comandos não libera o torque. O seguidor mantém sua última posição comandada. Desconecte a alimentação dos servos para uma parada de emergência.

:::

## Mecanismos de Segurança

A implementação de referência inclui várias verificações destinadas a tornar uma demonstração mais previsível:

1. **Verificação de identidade dos servos:** todos os seis IDs e números de modelo devem corresponder.
2. **Verificação de calibração da EEPROM:** offsets de homing e limites devem corresponder à calibração do seguidor compilada no firmware.
3. **Handshake na pose atual:** o primeiro comando deve estar dentro de `0.05 rad` da pose medida.
4. **Limites suaves de junta:** todo comando deve permanecer dentro da faixa calibrada.
5. **Limite de passo por comando:** após o armamento, um alvo não pode mudar mais do que `0.25 rad` em um único comando.
6. **Watchdog de retorno:** a ponte no PC para de publicar se o retorno do seguidor for mais antigo que `0.5 s`.
7. **Recuperação de Wi-Fi:** o XIAO reinicia de forma limpa se o Wi-Fi não conseguir se recuperar em 10 segundos.

Essas verificações de software complementam, mas não substituem, um botão de parada de emergência físico.

## Solução de problemas

### O XIAO permanece em `Waiting for micro-ROS Agent`

- Confirme que o computador e o XIAO estão na mesma LAN.
- Verifique se `AGENT_IP` é o endereço IPv4 atual de Wi‑Fi do computador.
- Confirme que o Agent está usando a porta UDP `8888`.
- Verifique se o hotspot habilita isolamento de clientes.
- Se um firewall estiver ativo, permita a porta UDP `8888`.

### `servo_mask` não é `0x3f`

Um ou mais servos não responderam:

- desconecte a alimentação e inspecione os cabos do barramento de três fios;
- verifique se cada servo tem um ID exclusivo de 1 a 6;
- verifique a tensão e a corrente nominal da fonte de alimentação;
- mantenha o barramento dos servos na taxa de baud configurada de 1 Mbps.

### O firmware informa `calib:0`

A EEPROM do servo não corresponde aos valores compilados em `servo_bus.cpp`. Reconecte o seguidor através da placa controladora USB, recalibre-o, atualize os três arrays de firmware e grave o XIAO novamente.

### O Wi‑Fi desconecta durante o movimento

- aproxime o ponto de acesso;
- posicione a antena externa longe dos fios de alimentação dos servos e de partes metálicas;
- use uma rede dedicada de 2,4 GHz para a demonstração;
- observe o valor de RSSI na saída de diagnóstico serial;
- compare o resultado com os servos desligados para identificar possível interferência de energia ou eletromagnética.

### A direção ou o alcance de uma junta está incorreto

Recalibre ambos os braços e confirme a ordem das juntas em ambos os arquivos JSON. Verifique também se os arrays do seguidor em `servo_bus.cpp` vieram do mesmo seguidor físico atualmente conectado ao XIAO.

## Resultado testado

Na configuração de referência:

- todos os seis servos seguidores foram detectados (`servo_mask=0x3f`);
- `/joint_states` foi publicado a aproximadamente 20 Hz;
- a ponte do líder publicou comandos a 30 Hz;
- todas as seis juntas seguiram juntas por meio de um hotspot de celular;
- o XIAO continuou operando sem seu cabo de dados USB após a gravação e a conexão da alimentação externa do braço.

## Referências

- [Código-fonte do projeto](https://github.com/linao681/soarm101-drone-teleop)
- [Introdução ao SO-ARM100 e SO-ARM101 no LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/)
- [Introdução ao XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/pt-br/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

Esta contribuição documenta uma integração desenvolvida de forma independente. LeRobot, ROS 2, micro-ROS, PlatformIO e a biblioteca de servos continuam sujeitos às suas respectivas licenças.
