---
description: Crie um link de teleoperação ROS 2 sem fio e de baixa latência para um seguidor SO-ARM101 usando o XIAO ESP32-C3 Bus Servo Adapter e micro-ROS via Wi-Fi UDP.
title: SO-Arm com Teleoperação Sem Fio usando XIAO
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/pt-br/soarm101_xiao_microros_wireless_teleoperation/
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Teleoperação com Fio e Sem Fio do SO-ARM101 com XIAO ESP32-C3 e micro-ROS

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp" width={800} height={600} style={{height: 'auto'}} alt="Kits de braço robótico SO-ARM100 e SO-ARM101" />
</div>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem 1rem', margin: '1.1rem 0 1.35rem'}}>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Obtenha o Kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank" rel="noopener noreferrer">
    <span>Obtenha o XIAO Servo Adapter</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

</div>

:::note Community Contribution
Este tutorial é uma contribuição da comunidade por [@linao681](https://github.com/linao681). Obrigado por compartilhar este projeto com a comunidade Seeed Studio!
:::

## Introdução

Este tutorial documenta duas maneiras suportadas de controlar um seguidor SO-ARM101 a partir de um líder SO-ARM101:

| Modo | Conexão do líder | Conexão do seguidor |
| --- | --- | --- |
| Líder com fio | Conecte ao computador por meio de uma placa padrão de driver de servo de barramento USB. | XIAO via Wi-Fi. |
| Líder sem fio | XIAO via Wi-Fi. | XIAO via Wi-Fi. |

Em ambos os modos, o seguidor se comunica com o ROS 2 por meio de micro-ROS via Wi-Fi UDP. O XIAO líder sem fio lê as seis posições dos atuadores do líder e publica o estado somente leitura; ele nunca escreve comandos de posição para o braço líder.

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

Este projeto foi desenvolvido como um protótipo testado em solo para uma futura demonstração do SO-ARM101 montado em um drone. Este guia cobre apenas a comunicação do braço robótico e o link de teleoperação. Ele não fornece um sistema de controle ou segurança certificado para voo.

:::

### Caminho de configuração recomendado

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#step-1-clone-the-project">Clone o projeto</a></h4>
<p>Obtenha o código e os projetos de firmware.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#step-2-calibrate-both-arms">Calibre ambos os braços</a></h4>
<p>Calibre os braços físicos que você usará.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#step-3-configure-wi-fi-and-agent-discovery">Configure o Wi-Fi e a descoberta do Agent</a></h4>
<p>Coloque o computador e os XIAOs na mesma LAN.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#step-4-build-and-flash-the-xiaos">Compile e grave o firmware</a></h4>
<p>Teste e, em seguida, grave o firmware XIAO apropriado.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#step-5-start-the-micro-ros-agent-and-preflight">Inicie o Agent e execute o pré-voo</a></h4>
<p>Verifique o feedback do ROS 2 para o modo escolhido.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#step-6-run-wired-or-dual-wireless-teleoperation">Inicie a teleoperação</a></h4>
<p>Inicie o modo de líder selecionado e verifique a operação.</p>
</div>
</section>

</div>

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

| Item | Quantidade ou requisito | Finalidade |
| --- | --- | --- |
| Líder e seguidor SO-ARM101 | Um de cada | Braços de entrada e controlado. |
| Placa padrão de driver de servo de barramento USB | Uma | Calibração e conexão do líder com fio. |
| XIAO ESP32-C3 Bus Servo Adapter | Um, mais um para o modo de líder sem fio | Necessário para o seguidor; adicione um para o líder sem fio. |
| Fontes de alimentação dos braços | Duas, dimensionadas para os braços | Alimentar o líder e o seguidor de forma independente. |
| Computador | Um, Ubuntu 22.04 | Executar ROS 2 e o micro-ROS Agent. |
| Rede Wi-Fi | Uma, 2,4 GHz | Colocar o computador e os XIAOs na mesma LAN. |
| Cabos USB | Conforme necessário | Calibração, gravação e monitoramento serial. |

Este firmware de referência foi testado com o seguidor padrão SO-ARM101 de 5 V usando seis servos STS3215 com número de modelo `777`.

:::danger

- Desconecte a alimentação dos servos antes de trocar qualquer cabo de servo.
- Use a tensão especificada para a sua versão exata do SO-ARM101. Não conecte uma fonte de 12 V a um braço de 5 V.
- A porta USB não fornece energia suficiente para os servos.
- Faça o primeiro teste em uma bancada estável com um desligamento de energia de emergência claramente acessível.
- Se estiver testando perto de um drone, remova as hélices.

:::

## Requisitos de Software

A configuração de host testada é:

| Item | Configuração testada |
| --- | --- |
| Sistema operacional | Ubuntu 22.04 |
| ROS 2 | Humble |
| Framework de robótica | LeRobot com suporte a Feetech |
| Comunicação micro-ROS | micro-ROS Agent |
| Python | 3.12 |
| Ferramentas de firmware | PlatformIO |

Instale o micro-ROS Agent e o PlatformIO se eles ainda não estiverem disponíveis:

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

Siga o [guia SO-ARM100/101 LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/) para instalar o LeRobot e configurar os IDs dos servos antes de continuar.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

## Clone o projeto {#step-1-clone-the-project}

<p className="rebot-step-label">Etapa 1</p>

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

Os caminhos importantes do projeto são:

| Caminho | Finalidade |
| --- | --- |
| `firmware/xiao_soarm/` | Firmware do seguidor sem fio |
| `firmware/xiao_soarm_leader/` | Firmware do líder sem fio |
| `tools/wireless_teleoperate.py` | Ponte de teleoperação ROS 2 e LeRobot |
| `tools/soarm_agent_discovery.py` | Descoberta do Agent para ambos os XIAOs |
| `start_soarm_demo.sh` | Pré-voo de rede, Agent, hardware e tópicos |
| `cali/` | Arquivos de calibração do líder e do seguidor |

O repositório inclui projetos de firmware PlatformIO separados para o seguidor sem fio e o líder sem fio. Os projetos incluem as bibliotecas micro-ROS ESP32-C3 necessárias, portanto um usuário comum não precisa compilar o micro-ROS de forma cruzada.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

## Calibre ambos os braços {#step-2-calibrate-both-arms}

<p className="rebot-step-label">Etapa 2</p>

Calibre primeiro o seguidor com um driver de servo de barramento USB padrão. Substitua `/dev/ttyACM0` pela porta correta:

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

Os valores de calibração são específicos de um único braço físico. Não controle outro seguidor com os valores de calibração incluídos como exemplo no repositório.

:::

### Copiar a calibração do seguidor para o firmware

O XIAO seguidor valida a EEPROM do servo antes de habilitar o torque. Abra:

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

Substitua esses três arrays pelos valores do seu `cali/follower_recal.json`:

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

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

## Configurar Wi-Fi e descoberta do Agent {#step-3-configure-wi-fi-and-agent-discovery}

<p className="rebot-step-label">Etapa 3</p>

Conecte o computador com Ubuntu e os XIAOs usados no seu modo à mesma rede Wi-Fi de 2,4 GHz. O modo de líder com fio usa apenas o XIAO seguidor; o modo de líder sem fio usa ambos os XIAOs. O firmware do XIAO armazena apenas o SSID e a senha. O launcher e o serviço de descoberta anunciam, em tempo de execução, o endereço atual do Agent no computador. Não codifique o IP do computador diretamente em um arquivo de firmware público.

```bash
ip -4 address
```

Entre no diretório do firmware do seguidor e crie o arquivo de configuração privada:

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

Para o firmware do líder, use os respectivos placeholders `#define WIFI_SSID` e `#define WIFI_PASS` em `firmware/xiao_soarm_leader/src/wifi_config.example.h`.

`wifi_config.h` é ignorado pelo Git e nunca deve ser enviado para um repositório público. O launcher atual usa descoberta de Agent para anunciar o endereço Wi-Fi atual do computador, então uma mudança de IP do hotspot normalmente não exige regravar o firmware de nenhum XIAO.

:::tip

O ESP32-C3 usa Wi-Fi de 2,4 GHz. Se um hotspot de celular suportar ambas as bandas, selecione o modo de compatibilidade ou de 2,4 GHz.

:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

## Compilar e gravar o firmware {#step-4-build-and-flash-the-xiaos}

<p className="rebot-step-label">Etapa 4</p>

Conecte um XIAO por vez ao computador via USB. Execute os testes nativos e a compilação para ESP32-C3 antes de fazer o upload:

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

Depois que os testes e builds passarem, envie o firmware selecionado:

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

Para o modo de líder sem fio, execute os comandos de upload e monitor a partir de `firmware/xiao_soarm_leader`.

Alimente o braço seguidor com sua fonte externa. Uma inicialização bem-sucedida contém mensagens semelhantes a:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` significa que todos os seis IDs de servo responderam. Se a calibração não corresponder, o firmware ainda relata o estado, mas rejeita comandos de movimento.

Após a gravação, o cabo USB é necessário apenas para monitoramento serial. Mantenha a alimentação externa de servo do braço correspondente conectada. O firmware do líder desabilita o torque e apenas publica posição/estado; o firmware do seguidor é o componente que executa comandos de posição.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">

## Iniciar o Agent e executar o preflight {#step-5-start-the-micro-ros-agent-and-preflight}

<p className="rebot-step-label">Etapa 5</p>

A partir da raiz do projeto, defina o nome do Wi-Fi e o executável Python usado pelo LeRobot. Em seguida, execute o preflight para o seu modo de líder.

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

O exemplo verifica o modo de líder sem fio. Para um líder com fio, substitua `--leader wireless` por `--leader wired`. Um preflight com fio ignora a verificação de USB do líder, que é executada na inicialização.

O launcher inicia o Agent e o serviço de descoberta e, em seguida, verifica os tópicos ROS 2 necessários. Quando os XIAOs descobrirem o Agent, seus monitores seriais devem relatar:

```text
micro-ROS ready
```

As interfaces ROS 2 são:

| Tópico | Tipo de mensagem | Direção | Taxa nominal |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | seguidor para PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC para seguidor | até 30 Hz |

Enquanto o Agent estiver em execução, use outro terminal para verificar o feedback. Se o preflight tiver iniciado o Agent, ele interrompe o Agent ao sair. Nesse caso, execute essa verificação após iniciar a teleoperação.

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

Não envie valores arbitrários de juntas antes de concluir o handshake de inicialização da pose atual.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">

## Iniciar a teleoperação {#step-6-run-wired-or-dual-wireless-teleoperation}

<p className="rebot-step-label">Etapa 6</p>

Depois que o preflight passar, selecione o comando de lançamento para a sua conexão de líder. Ambas as opções usam um seguidor sem fio.

<Tabs defaultValue="wired">

<TabItem value="wired" label="Líder com fio">

Conecte o líder através de seu driver padrão de servo de barramento USB e encontre o caminho serial estável.

```bash
ls -l /dev/serial/by-id/
```

Substitua `YOUR_USB_ADAPTER` pelo nome real do dispositivo e, em seguida, inicie o modo de líder com fio.

```bash
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_USB_ADAPTER"
./start_soarm_demo.sh --leader wired
```

</TabItem>
<TabItem value="wireless" label="Líder sem fio">

Alimente o líder com sua fonte externa, confirme que o XIAO dele entrou na rede Wi-Fi configurada e, em seguida, inicie o modo totalmente sem fio.

```bash
./start_soarm_demo.sh --leader wireless
```

</TabItem>
</Tabs>

A ponte lê a pose inicial do seguidor e publica repetidamente a mesma pose antes de habilitar o torque. Ela então usa mapeamento relativo, de modo que o seguidor começa de onde está e segue as mudanças feitas no líder selecionado. Se a sessão sem fio se recuperar, a ponte faz uma transição suave em direção à pose atual do líder antes de retomar os comandos normais. Pressione `Ctrl+C` para parar; o seguidor mantém sua última posição comandada.

:::warning

Parar a ponte ou perder comandos não libera o torque. O seguidor mantém sua última posição comandada. Desconecte a alimentação dos servos para uma parada de emergência.

:::

</div>
</section>

</div>

## Mecanismos de segurança

A implementação de referência inclui várias verificações destinadas a tornar uma demonstração mais previsível:

| Verificação | Condição ou comportamento |
| --- | --- |
| Identidade do servo | Todos os seis IDs e números de modelo devem corresponder. |
| Calibração da EEPROM | Os offsets de homing e limites devem corresponder à calibração do seguidor compilada no firmware. |
| Handshake de pose atual | O primeiro comando deve estar dentro de `0.05 rad` da pose medida. |
| Limites suaves de junta | Cada comando deve permanecer dentro da faixa calibrada. |
| Limite de passo por comando | Após armar, um alvo não pode mudar mais que `0.25 rad` em um único comando. |
| Watchdog de feedback | A ponte no PC para de publicar se o feedback do seguidor for mais antigo que `0.5 s`. |
| Recuperação de Wi-Fi | O XIAO reinicia se o Wi-Fi não conseguir se recuperar em 10 segundos. |

Essas verificações de software complementam, mas não substituem, uma parada de emergência física.

## Solução de problemas

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="the-xiao-stays-at-waiting-for-micro-ros-agent">
<summary>O XIAO permanece em <code>Waiting for micro-ROS Agent</code></summary>

- Confirme que o computador e o XIAO estão na mesma LAN.
- Confirme que o launcher relata o endereço IPv4 atual do Wi-Fi e inicia a descoberta do Agent.
- Confirme que o Agent está usando a porta UDP `8888`.
- Verifique se o hotspot habilita isolamento de clientes.
- Se um firewall estiver ativo, permita a porta UDP `8888`.

</details>

<details className="rebot-demo-details" id="servo_mask-is-not-0x3f">
<summary><code>servo_mask</code> não é <code>0x3f</code></summary>

Um ou mais servos não responderam:

- desconecte a alimentação e inspecione os cabos de barramento de três fios;
- verifique se cada servo tem um ID exclusivo de 1 a 6;
- verifique a tensão e a corrente nominal da fonte de alimentação;
- mantenha o barramento de servos na taxa de baud configurada de 1 Mbps.

</details>

<details className="rebot-demo-details" id="the-firmware-reports-calib0">
<summary>O firmware relata <code>calib:0</code></summary>

A EEPROM do servo não corresponde aos valores compilados em `servo_bus.cpp`. Reconecte o seguidor através da placa controladora USB, recalibre-o, atualize os três arrays do firmware e grave o XIAO novamente.

</details>

<details className="rebot-demo-details" id="wi-fi-disconnects-during-motion">
<summary>O Wi-Fi desconecta durante o movimento</summary>

- aproxime o ponto de acesso;
- posicione a antena externa longe dos cabos de alimentação dos servos e das partes metálicas;
- use uma rede dedicada de 2,4 GHz para a demonstração;
- observe o valor de RSSI na saída de diagnóstico serial;
- compare o resultado com os servos desligados para identificar possível interferência de energia ou eletromagnética.

</details>

<details className="rebot-demo-details" id="the-wireless-leader-is-not-ready">
<summary>O líder sem fio não está pronto</summary>

- confirme que o XIAO líder publica tanto `/leader/raw_state` quanto `/leader/status`;
- confirme que todos os seis servos do líder respondem e que o torque está desativado;
- confirme que `cali/leader_recal.json` corresponde ao líder físico;
- use `./start_soarm_demo.sh --leader wired` como solução temporária.

</details>

<details className="rebot-demo-details" id="a-joint-direction-or-range-is-incorrect">
<summary>A direção ou o alcance de uma junta está incorreto</summary>

Recalibre ambos os braços e confirme a ordem das juntas em ambos os arquivos JSON. Verifique também se os arrays do seguidor em `servo_bus.cpp` vieram do mesmo seguidor físico atualmente conectado ao XIAO.

</details>

</div>

## Escopo de validação

O projeto foi exercitado na configuração de referência com:

- todos os seis servos seguidores foram detectados (`servo_mask=0x3f`);
- `/joint_states` foi publicado a aproximadamente 20 Hz;
- a ponte do líder publicou comandos a 30 Hz;
- todas as seis juntas seguiram juntas por meio de um hotspot de celular;
- o XIAO continuou operando sem o cabo de dados USB após a gravação do firmware e a conexão da alimentação externa do braço.

O caminho duplo sem fio e a solução com fio são ambos suportados pelo lançador atual. Um teste de resistência sem fio de referência foi concluído em 2026-09-20 e durou 783 segundos (cerca de 13 minutos). A execução registrou zero timeouts de comando, zero rejeições de comando e zero recuperações do líder; o feedback teve média de 19,87 Hz, a latência de confirmação de comando foi de 66,0 ms em P50, e o RSSI mínimo observado foi de -65 dBm. Esses números descrevem uma execução de referência, não uma garantia para todos os ambientes de Wi-Fi.

## Referências

- [Código-fonte do projeto](https://github.com/linao681/soarm101-drone-teleop)
- [Introdução ao SO-ARM100 e SO-ARM101 no LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m_new/)
- [Introdução ao XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/pt-br/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

Esta contribuição documenta uma integração desenvolvida de forma independente. LeRobot, ROS 2, micro-ROS, PlatformIO e a biblioteca de servos continuam sujeitos às suas respectivas licenças.
