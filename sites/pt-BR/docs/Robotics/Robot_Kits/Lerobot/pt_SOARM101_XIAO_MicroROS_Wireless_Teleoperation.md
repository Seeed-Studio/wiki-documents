---
description: Crie um link de teleoperação ROS 2 sem fio e de baixa latência para um seguidor SO-ARM101 usando o XIAO ESP32-C3 Bus Servo Adapter e micro-ROS via Wi-Fi UDP.
title: SO-Arm com Teleoperação Sem Fio XIAO
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
  date: 09/20/2026
  author: linao681
createdAt: '2026-07-24'
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/pt-br/soarm101_xiao_microros_wireless_teleoperation/
---

# Teleoperação com fio e sem fio do SO-ARM101 com XIAO ESP32-C3 e micro-ROS

:::note Community Contribution
Este tutorial é uma contribuição da comunidade por [@linao681](https://github.com/linao681). Obrigado por compartilhar este projeto com a comunidade Seeed Studio!
:::

## Introdução

Este tutorial documenta duas maneiras suportadas de controlar um SO-ARM101 seguidor a partir de um SO-ARM101 líder:

1. **Líder com fio + seguidor sem fio:** o líder usa uma placa padrão de driver de servos de barramento USB.
2. **Líder sem fio + seguidor sem fio:** cada braço usa um Seeed Studio XIAO ESP32-C3 Bus Servo Adapter.

Em ambos os modos, o seguidor se comunica com o ROS 2 por meio de micro-ROS via Wi-Fi UDP. O XIAO do líder sem fio lê as seis posições dos atuadores do líder e publica o estado somente leitura; ele nunca escreve comandos de posição para o braço líder.

A implementação fornece:

- feedback de todas as seis juntas do seguidor em `/joint_states`;
- comandos para todas as seis juntas do seguidor em `/joint_command`;
- mapeamento de juntas de líder para seguidor do LeRobot;
- um handshake de inicialização que evita um salto inesperado de posição;
- verificações de calibração, limites de junta, passo de comando e integridade do barramento;
- verificações de sequência, watchdogs de feedback, comportamento seguro de manter o último comando e recuperação de sessão;
- descoberta dinâmica do Agent em tempo de execução a partir do endereço Wi-Fi atual do computador, de modo que uma mudança de endereço do hotspot não exija regravação do firmware;
- fallback de líder com fio para diagnóstico e operação quando o líder sem fio não estiver disponível;
- verificações automáticas de pré-voo e inicialização da teleoperação com um único comando.

O código-fonte completo está disponível no [repositório soarm101-drone-teleop](https://github.com/linao681/soarm101-drone-teleop).

:::note

Este projeto foi desenvolvido como um protótipo testado em solo para uma futura demonstração do SO-ARM101 montado em drone. Este guia cobre apenas a comunicação do braço robótico e o link de teleoperação. Ele não fornece um sistema de controle ou segurança certificado para voo.

:::

## Arquitetura do Sistema

```text
SO-ARM101 leader
  ├─ wireless: leader XIAO ── Wi-Fi / micro-ROS ──┐
  └─ wired: USB bus-servo driver ────────────────┤
                                                  ▼
Ubuntu 22.04 PC
  ├─ LeRobot reads the leader
  ├─ ROS 2 Humble bridge publishes /joint_command
  └─ micro-ROS Agent, UDP port 8888
              │
              │  2.4 GHz Wi-Fi LAN
              ▼
follower XIAO ESP32-C3 Bus Servo Adapter
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
- 1 × placa padrão de driver de servos de barramento USB para calibração do líder e fallback com fio
- 1 × XIAO ESP32-C3 Bus Servo Adapter para o seguidor
- 1 × XIAO ESP32-C3 Bus Servo Adapter adicional para o modo de líder sem fio
- 2 × fontes de alimentação para o braço com especificação correta
- 1 × computador com Ubuntu 22.04
- 1 × rede Wi-Fi de 2,4 GHz
- Cabos USB para calibração e gravação de firmware

Este firmware de referência foi testado com o seguidor SO-ARM101 padrão de 5 V usando seis servos STS3215 com número de modelo `777`.

:::danger

- Desconecte a alimentação dos servos antes de trocar qualquer cabo de servo.
- Use a tensão especificada para a sua versão exata do SO-ARM101. Não conecte uma fonte de 12 V a um braço de 5 V.
- A porta USB não fornece energia suficiente para os servos.
- Faça o primeiro teste em uma bancada estável com um desligamento de energia de emergência claramente acessível.
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
firmware/xiao_soarm_leader/   PlatformIO firmware for the wireless leader
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
tools/soarm_agent_discovery.py Agent discovery service for both XIAOs
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

O repositório inclui projetos de firmware PlatformIO separados para o seguidor sem fio e para o líder sem fio. Os projetos incluem as bibliotecas micro-ROS necessárias para o ESP32-C3, portanto um usuário comum não precisa fazer cross-compile do micro-ROS.

## Etapa 2: Calibrar Ambos os Braços

Calibre primeiro o seguidor com um driver de servos de barramento USB padrão. Substitua `/dev/ttyACM0` pela porta correta:

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

O XIAO do seguidor valida a EEPROM do servo antes de habilitar o torque. Abra:

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

## Etapa 3: Configurar Wi-Fi e descoberta do Agent

Conecte o computador com Ubuntu e ambos os XIAOs à mesma rede Wi-Fi de 2,4 GHz. O firmware do XIAO armazena apenas o SSID e a senha. O endereço atual do Agent no computador é anunciado em tempo de execução pelo launcher e pelo serviço de descoberta; não codifique o IP do computador em um arquivo de firmware público.

```bash
ip -4 address
```

Entre no diretório de firmware do seguidor e crie o arquivo de configuração privada:

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

Para o modo de líder sem fio, repita o mesmo passo em `firmware/xiao_soarm_leader`.

Edite `src/wifi_config.h`:

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
```

Para o firmware do líder, use os placeholders correspondentes de `#define WIFI_SSID` e `#define WIFI_PASS` em `firmware/xiao_soarm_leader/src/wifi_config.example.h`.

`wifi_config.h` é ignorado pelo Git e nunca deve ser enviado para um repositório público. O launcher atual usa descoberta do Agent para anunciar o endereço Wi-Fi atual do computador, portanto uma mudança de IP do hotspot normalmente também não exige regravação de nenhum XIAO.

:::tip

O ESP32-C3 usa Wi-Fi de 2,4 GHz. Se um hotspot de celular suportar ambas as bandas, selecione o modo de compatibilidade ou de 2,4 GHz.

:::

## Etapa 4: Compilar e Gravar os XIAOs

Conecte um XIAO por vez ao computador via USB. Execute os testes nativos e a compilação para ESP32-C3 antes de fazer o upload:

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

Depois que os testes e as compilações forem concluídos com sucesso, envie o firmware selecionado:

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

Para o modo de líder sem fio, execute os comandos de upload e monitoramento em `firmware/xiao_soarm_leader`.

Alimente o braço seguidor com sua fonte externa. Uma inicialização bem-sucedida contém mensagens semelhantes a:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` significa que todos os seis IDs de servos responderam. Se a calibração não corresponder, o firmware ainda reporta o estado, mas rejeita comandos de movimento.

Após a gravação, o cabo USB é necessário apenas para monitoramento serial. Mantenha conectada a alimentação externa de servos do braço correspondente. O firmware do líder desabilita o torque e publica apenas posição/estado; o firmware do seguidor é o componente que executa comandos de posição.

## Etapa 5: Iniciar o micro-ROS Agent e o pré-voo

A partir da raiz do projeto, o launcher pode iniciar o Agent e o serviço de descoberta:

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

O launcher inicia o Agent e o serviço de descoberta e, em seguida, verifica os tópicos ROS 2 necessários. Quando os XIAOs descobrirem o Agent, seus monitores seriais devem reportar:

```text
micro-ROS ready
```

As interfaces ROS 2 são:

| Tópico | Tipo de mensagem | Direção | Taxa nominal |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | seguidor para PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC para seguidor | até 30 Hz |

Verifique o feedback:

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

Não envie valores arbitrários de juntas antes de concluir o handshake de inicialização da pose atual.

## Etapa 6: Execute a teleoperação com fio ou dupla sem fio

Escolha uma das duas entradas de líder. Para o modo com fio, conecte o líder ao computador através do seu driver de servo de barramento USB normal. Para o modo sem fio, alimente o líder com sua fonte externa e deixe o XIAO conectado à rede Wi-Fi configurada.

Encontre seu caminho serial estável:

```bash
ls -l /dev/serial/by-id/
```

A partir da raiz do projeto, exporte a configuração local:

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

Primeiro execute a verificação de pré-voo sem movimento:

```bash
./start_soarm_demo.sh --leader wireless --check
```

Ela verifica:

- o SSID do Wi-Fi e o IP do Agent;
- a entrada de líder selecionada (`wireless` verifica `/leader/raw_state` e `/leader/status`; `wired` verifica o adaptador USB ao iniciar);
- os arquivos de calibração do líder e do seguidor;
- o micro-ROS Agent;
- o feedback ao vivo do seguidor em `/joint_states`;
- que outro processo de teleoperação não está usando o mesmo barramento do líder.

Se todas as verificações forem aprovadas, inicie a teleoperação:

```bash
./start_soarm_demo.sh --leader wireless

# Wired leader fallback:
./start_soarm_demo.sh --leader wired
```

A ponte lê a pose inicial do seguidor e publica repetidamente a mesma pose antes de habilitar o torque. Em seguida, ela usa mapeamento relativo, de modo que o seguidor começa de onde está e segue as mudanças feitas no líder selecionado. Se a sessão sem fio se recuperar, a ponte faz uma transição gradual em direção à pose atual do líder antes de retomar os comandos normais. Pressione `Ctrl+C` para parar; o seguidor mantém sua última posição comandada.

:::warning

Parar a ponte ou perder comandos não libera o torque. O seguidor mantém sua última posição comandada. Desconecte a alimentação dos servos para uma parada de emergência.

:::

## Mecanismos de segurança

A implementação de referência inclui várias verificações destinadas a tornar uma demonstração mais previsível:

1. **Verificação de identidade dos servos:** todos os seis IDs e números de modelo devem corresponder.
2. **Verificação de calibração da EEPROM:** offsets de homing e limites devem corresponder à calibração do seguidor compilada no firmware.
3. **Handshake da pose atual:** o primeiro comando deve estar dentro de `0.05 rad` da pose medida.
4. **Limites suaves das juntas:** todo comando deve permanecer dentro da faixa calibrada.
5. **Limite de passo por comando:** após armar, um alvo não pode mudar mais do que `0.25 rad` em um único comando.
6. **Watchdog de feedback:** a ponte no PC para de publicar se o feedback do seguidor for mais antigo que `0.5 s`.
7. **Recuperação de Wi-Fi:** o XIAO reinicia de forma limpa se o Wi-Fi não conseguir se recuperar em 10 segundos.

Essas verificações de software complementam, mas não substituem, uma parada de emergência física.

## Solução de problemas

### O XIAO permanece em `Waiting for micro-ROS Agent`

- Confirme que o computador e o XIAO estão na mesma LAN.
- Confirme que o launcher relata o endereço IPv4 Wi-Fi atual e inicia a descoberta do Agent.
- Confirme que o Agent está usando a porta UDP `8888`.
- Verifique se o hotspot habilita isolamento de clientes.
- Se um firewall estiver ativo, permita a porta UDP `8888`.

### `servo_mask` não é `0x3f`

Um ou mais servos não responderam:

- desconecte a alimentação e inspecione os cabos de barramento de três fios;
- verifique se cada servo tem um ID exclusivo de 1 a 6;
- verifique a tensão e a corrente nominal da fonte de alimentação;
- mantenha o barramento dos servos na taxa de baud configurada de 1 Mbps.

### O firmware relata `calib:0`

A EEPROM do servo não corresponde aos valores compilados em `servo_bus.cpp`. Reconecte o seguidor através da placa controladora USB, recalibre-o, atualize os três arrays de firmware e faça o flash do XIAO novamente.

### O Wi-Fi desconecta durante o movimento

- aproxime o ponto de acesso;
- posicione a antena externa longe dos fios de alimentação dos servos e de partes metálicas;
- use uma rede dedicada de 2,4 GHz para a demonstração;
- observe o valor de RSSI na saída de diagnóstico serial;
- compare o resultado com os servos desligados para identificar possível interferência de energia ou eletromagnética.

### O líder sem fio não está pronto

- confirme que o XIAO do líder publica tanto `/leader/raw_state` quanto `/leader/status`;
- confirme que todos os seis servos do líder respondem e que o torque está desabilitado;
- confirme que `cali/leader_recal.json` corresponde ao líder físico;
- use `./start_soarm_demo.sh --leader wired` como fallback temporário.

### A direção ou faixa de uma junta está incorreta

Recalibre ambos os braços e confirme a ordem das juntas em ambos os arquivos JSON. Verifique também se os arrays do seguidor em `servo_bus.cpp` vieram do mesmo seguidor físico atualmente conectado ao XIAO.

## Escopo de validação

O projeto foi exercitado na configuração de referência com:

- todos os seis servos do seguidor foram detectados (`servo_mask=0x3f`);
- `/joint_states` foi publicado a aproximadamente 20 Hz;
- a ponte do líder publicou comandos a 30 Hz;
- todas as seis juntas seguiram juntas através de um hotspot de telefone;
- o XIAO continuou operando sem seu cabo de dados USB após o flash e a conexão da alimentação externa do braço.

O caminho duplo sem fio e o fallback com fio são ambos suportados pelo launcher atual. Um teste de resistência de referência sem fio foi concluído em 2026-09-20 e durou 783 segundos (cerca de 13 minutos). A execução registrou zero timeouts de comando, zero rejeições de comando e zero recuperações do líder; o feedback teve média de 19,87 Hz, a latência de confirmação de comando foi de 66,0 ms em P50, e o RSSI mínimo observado foi de -65 dBm. Esses números descrevem uma execução de referência, não uma garantia para todos os ambientes Wi-Fi.

## Referências

- [Project source code](https://github.com/linao681/soarm101-drone-teleop)
- [Getting Started with SO-ARM100 and SO-ARM101 in LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/)
- [Getting Started with the XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/pt-br/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

Esta contribuição documenta uma integração desenvolvida de forma independente. LeRobot, ROS 2, micro-ROS, PlatformIO e a biblioteca de servos continuam sujeitos às suas respectivas licenças.
