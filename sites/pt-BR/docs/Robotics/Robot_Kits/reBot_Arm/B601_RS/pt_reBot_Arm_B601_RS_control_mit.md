---
description: Este tutorial mostra como usar o rebot_control com MotorBridge e barramento CAN para controle de posição MIT no reBot Arm B601-RS, incluindo controle do gripper, proteção de temperatura e retorno seguro para zero.
title: Introdução ao Controle de Posição MIT no reBot Arm B601-RS
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - braço robótico
  - gripper
  - proteção de temperatura
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-10
  author: LiJie
createdAt: '2026-08-04'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_mit_control/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Introdução ao Controle de Posição MIT no reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 DOF · RobStride · CAN @ 1 Mbps · Controle de posição MIT · Proteção de temperatura · Retorno seguro para zero · API Python open-source</strong>
</p>

[MotorBridge](https://github.com/motorbridge/motorbridge) é um SDK CAN em Python para motores RobStride / Damiao. O [rebot_control](https://github.com/LAN-GER/rebot_control) o encapsula com uma API de controle de posição MIT para o **reBot Arm B601-RS**: configuração em YAML, limites de velocidade por junta, proteção de temperatura MOS em três níveis e retorno suave para zero via Esc / Ctrl+C / `stop()`.

Este tutorial guia você por: configuração do ambiente → configuração do CAN → execução de exemplos → uso do pacote como biblioteca.

:::caution Aviso Importante de Segurança
- **Este projeto fornece apenas APIs de controle — sem limites de junta por software ou limites de espaço de trabalho.** Os ângulos de destino que você definir são enviados diretamente para os motores.
- **Mantenha o braço dentro de aproximadamente 70% do seu espaço de trabalho.** Permanecer além do espaço de trabalho por longos períodos pode acionar a proteção contra travamento na junta 2 e o braço pode cair.
- No primeiro uso, teste com **ângulos pequenos e baixas velocidades**, e mantenha o espaço de trabalho livre de pessoas e obstáculos.
:::

---

## Recursos

1. **Controle de posição MIT**  
   Comandos de posição MIT padrão a 200 Hz; limites de velocidade por junta com suavização no loop de controle.

2. **6+1 motores**  
   J1–J6 são juntas do braço; **J7 (ID CAN 7) é o gripper do efetuador final**, controlado via `set_joint_angles` / `set_joint_angle`.

3. **Proteção de temperatura em três níveis**  
   Monitoramento em tempo real da temperatura do MOS: alarme e continua → superaquecimento com retorno lento para zero e depois desabilita → desabilitação de emergência (sem retorno para zero).

4. **Saída segura e retorno para zero**  
   Esc / Ctrl+C / `arm.stop()` acionam retorno suave para zero com função smoothstep; um segundo Ctrl+C durante o retorno para zero aborta imediatamente e desabilita os motores.

5. **Configuração orientada por YAML**  
   Canal CAN, limites de temperatura, parâmetros de retorno para zero e `kp`/`kd` dos motores ficam em `config/rebotarm_rs.yaml` — ajuste sem alterar código.

6. **Pronto para uso como biblioteca**  
   Camadas bem definidas (config / API / exemplos); importe com `from rebot import ReBotRSMITController`.

---

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/).

| Parâmetro | Especificação |
|-----------|---------------|
| Modelo do braço | reBot Arm B601-RS Kit Montado com Gripper |
| DOF | 6+1 (incluindo gripper) |
| Raio de trabalho | 754,7 mm (com gripper) / 587,5 mm (sem gripper) |
| Carga útil | Nominal 2,5 kg / Máx. 5 kg |
| Faixa das juntas | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Gripper: 345° ~ 0° |
| Repetibilidade | 0,1 mm |
| Peso | 6,7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 (incluindo gripper) |
| Comunicação | Barramento CAN @ 1 Mbps |
| Tensão de alimentação | CC 48V |
| Fonte de alimentação | CC 48V 15A |
| Temperatura de operação | -20°C ~ 50°C |
| Controle | PC |

### Mapeamento dos motores neste projeto

| Junta | ID CAN | Modelo | Observações |
|-------|--------|-------|-------|
| J1 | 1 | RS06 | Base |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | Punho |
| J7 | **7** | RS00 | **Gripper do efetuador final** |

### Capacidades de software (este repositório)

| Capacidade | Status |
|------------|--------|
| Controle de posição MIT | ✅ |
| Limites de velocidade por junta | ✅ |
| Controle do gripper (ID CAN 7) | ✅ |
| Monitoramento de temperatura MOS e proteção em três níveis | ✅ |
| Retorno seguro para zero / desabilitação de emergência | ✅ |
| Configuração em YAML | ✅ |
| API de biblioteca Python | ✅ |
| Cinemática direta / inversa (Pinocchio) | ❌ (veja [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)) |
| Simulação MeshCat | ❌ (veja o repositório acima) |

### Parâmetros dos motores das juntas

| Parâmetro | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| Tensão nominal | 48V | 48V |
| Corrente nominal | 4,7 Apk ± 10% | 14,3 Apk ± 10% |
| Corrente de pico | 15,5 Apk ± 10% | 57 Apk ± 10% |
| Torque nominal | 5 N.m | 11 N.m |
| Torque de pico | 14 N.m | 36 N.m |
| Velocidade nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidade máxima em vazio | 315 rpm ± 10% | 480 rpm ± 10% |
| Relação de redução | 10 : 1 | 9 : 1 |
| Interface de controle | CAN @ 1 Mbps | CAN @ 1 Mbps |
| Modos de controle | MIT / Velocidade / Posição / Torque | MIT / Velocidade / Posição / Torque |

## Lista de Materiais (BOM)

| Item | Qtde | Incluído |
|------|-----|----------|
| reBot Arm B601-RS | 1 | ✅ |
| Adaptador CAN (CANABLE / PCAN-USB, etc.) | 1 | ✅ |
| Fonte de alimentação (CC 48V 15A) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Gripper | 1 | ✅ |

## Requisitos

| Item | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **SO** | Ubuntu 22.04+ (recomendado) |
| **Interface CAN** | `can0` padrão |
| **Alimentação** | CC 48V 15A |
| **Dependências** | `motorbridge`, `pyyaml`; opcional `pynput` (tecla Esc) |

---

## Instalação

### Etapa 1. Clonar o repositório

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### Etapa 2. Instalar dependências

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` habilita a escuta da tecla Esc. Sem ele, apenas a Esc é desativada; Ctrl+C e `arm.stop()` ainda funcionam.
:::

### Etapa 3. Configurar a interface CAN

```bash
# List interfaces (PCAN-USB, etc.)
sudo modprobe peak_usb   # if using a PEAK adapter
ip -br link

# Set can0 to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
Após desconectar e reconectar um adaptador CAN USB, geralmente é necessário executar novamente os comandos `ip link`.
:::

### Etapa 4. (Opcional) Editar o arquivo de configuração

Edite `config/rebotarm_rs.yaml`:

| Chave | Descrição | Padrão |
|-----|-------------|---------|
| `can.channel` | Nome da interface CAN | `can0` |
| `can.host_id` | ID do host | `0xFD` |
| `control.control_hz` | Taxa de comandos MIT (não é a velocidade de movimento) | 200 Hz |
| `control.telemetry_hz` | Taxa de leitura de temperatura | 2 Hz |
| `temperatures.alarm_c` | Limite de alarme de temperatura | 80°C |
| `temperatures.return_zero_c` | Limite de retorno para zero por superaquecimento | 125°C |
| `temperatures.disconnect_c` | Limite de desabilitação de emergência | 140°C |
| `return_zero.max_speed_deg_s` | Velocidade de pico normal de retorno para zero | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | Velocidade de pico térmica de retorno para zero | 30°/s |
| `return_zero.min_time_s` | Duração mínima do retorno para zero | 3,0 s |
| `return_zero.settle_time_s` | Tempo de permanência em zero após o retorno | 0,30 s |
| `motors` | ID / modelo do motor / MIT `kp` / `kd` | Veja o YAML |

Chaves ausentes usam padrões do código; chaves desconhecidas geram erro para capturar erros de digitação.

---

## Estrutura do código

```
rebot_control/
├── config/
│   └── rebotarm_rs.yaml            # CAN / motors / temperature / return-to-zero
├── rebot/
│   ├── __init__.py                 # Public API
│   ├── config.py                   # Config loading and validation
│   └── controller.py               # ReBotRSMITController
└── examples/
    ├── _bootstrap.py               # Path setup + wait-for-target helpers
    ├── quick_start.py              # Tutorial 1: quick start
    ├── custom_config.py            # Tutorial 2: custom config
    ├── monitor_status.py           # Tutorial 3: monitor status
    ├── single_joint_adjust.py      # Tutorial 4: single joint + gripper
    ├── read_joint_angles.py        # Tutorial 5: read actual positions
    ├── stop_options.py             # Tutorial 6: stop options
    ├── recommended_structure.py    # Tutorial 7: recommended structure
    └── mit_position_control.py     # Full editable demo
```

Camadas:

- **Arquivo de configuração**: fonte única de parâmetros ajustáveis.
- **Camada de configuração**: `load_config()` → `ControllerConfig`.
- **Camada de API**: lógica de controle sem valores de demonstração fixos no código.
- **Camada de exemplos**: ângulos de destino, velocidades e fluxo de execução.

---

## Como funciona

### Controle MIT e suavização de velocidade

- `control_hz` (padrão 200 Hz) define **apenas a taxa de envio de comandos**.
- A velocidade real de movimento vem de `set_max_speeds([...])` (graus/s).
- `set_joint_angles()` atualiza apenas os **alvos**; o loop de controle aproxima os **ângulos de comando** dos alvos respeitando o limite de velocidade.

:::tip
Se você chamar `stop()` imediatamente após definir os alvos, pode ver quase nenhum movimento. Os exemplos usam `wait_for_command_targets()` (veja `examples/_bootstrap.py`) para esperar até que os ângulos de comando se aproximem dos alvos antes de retornar para zero.
:::

### Sequência de conexão e habilitação

Dentro de `connect()`, a ordem é: **registrar motores → mudar para modo MIT → habilitar → ler as posições mecânicas atuais** (para inicializar os alvos e evitar um salto repentino após habilitar). O `mechPos (0x7019)` da RobStride é confiavelmente legível após a habilitação.

Para leitura passiva de posição (Tutorial 5), chame `disable_motors()` após `connect()` para que você possa mover o braço manualmente e continuar lendo os ângulos.

### Proteção de temperatura em três níveis

| Limite (padrão) | Comportamento |
|---------------------|----------|
| ≥ 80°C | Alarme de temperatura (uma vez por motor por borda de sobretemperatura), continua em funcionamento |
| ≥ 125°C | Para o movimento, retorno lento para zero na velocidade térmica de pico e depois desativa |
| ≥ 140°C | Desativação de emergência imediata, **sem retorno para zero** |

### Retorno seguro para zero

O retorno para zero usa uma trajetória **smoothstep**. Duração:

```
duration = max(min_time_s, per-joint time estimated from peak speed)
```

A velocidade de pico é `max_speed_deg_s` (normal) ou `thermal_max_speed_deg_s` (térmica). Ambas são padrão em **30°/s**; `min_time_s` tem padrão de **3,0 s**.

| Método de saída | Comportamento |
|-------------|----------|
| Esc / primeiro Ctrl+C / `arm.stop()` | Retorno lento para zero → desativar → fechar CAN |
| Segundo Ctrl+C durante o retorno para zero | Aborta o retorno para zero e desativa imediatamente |
| Erro de comunicação | Desativação de emergência, sem retorno para zero |

### Unidades

| Contexto | Unidades |
|---------|-------|
| API externa (ângulos, velocidades) | graus, deg/s |
| Internos do MotorBridge MIT | radianos, rad/s |

---

## Tutoriais

Execute todos os exemplos a partir da **raiz do projeto**. Cada script documenta o **Movimento esperado** no topo e imprime uma linha `[Expected / 预期]` na inicialização.

| Tutorial | Arquivo | Comando |
|----------|------|---------|
| 1. Início rápido | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. Configuração personalizada | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. Monitorar status | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. Única junta + garra | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. Ler posições | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. Opções de parada | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. Estrutura do programa | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| Demonstração completa | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. Início rápido (`quick_start.py`)

**Movimento esperado**: J1 se move para +20° a ~15°/s; outras juntas e a garra permanecem em 0°; depois retorno lento para zero e desativação.

```bash
python3 examples/quick_start.py
```

Fluxo: `start()` → `set_max_speeds()` → `set_joint_angles()` → **aguardar o movimento** → `stop()`.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Demonstração em vídeo - Início rápido" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. Arquivo de configuração personalizada (`custom_config.py`)

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**Movimento esperado**: J1 → +15° (~15°/s), outros em 0°, depois retorno para zero.

---

### 3. Monitorar enquanto executa (`monitor_status.py`)

```bash
python3 examples/monitor_status.py
```

**Movimento esperado**: J1 → +30°; o terminal imprime continuamente alvo / enviado / temperatura do MOS. Pressione **Esc** ou **Ctrl+C** para sair e retornar para zero.

Notas:

- **Alvo vs enviado**: os ângulos enviados ficam atrás dos alvos (suavização limitada por velocidade).
- **Temperatura**: leia `arm.last_temperatures`; não há necessidade de consultar o CAN manualmente.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Demonstração em vídeo - Monitorar status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. Ajuste de junta única e garra (`single_joint_adjust.py`)

```bash
python3 examples/single_joint_adjust.py
```

**Alvos padrão**:

| J1 | J2 | J3 | J4 | J5 | J6 | J7 Garra |
|----|----|----|----|----|----|------------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`: 1–6 são juntas do braço; **7 é a garra (ID CAN 7)**.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Demonstração em vídeo - Junta única e garra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. Ler posições reais (`read_joint_angles.py`)

```bash
python3 examples/read_joint_angles.py
```

**Movimento esperado**:

1. `connect()`: alterna para o modo MIT e ativa (estabelece comunicação), lê os ângulos atuais como sementes de alvo.
2. `disable_motors()`: desativa imediatamente para que você possa mover o braço manualmente.
3. O terminal imprime os ângulos reais das juntas a ~**30 Hz**; os valores devem mudar quando você move o braço.
4. Pressione **Ctrl+C** para sair; `stop(return_to_zero=False)` fecha o CAN **sem retorno para zero**.

Este exemplo **não** chama `start()`, portanto nenhuma thread de controle MIT é executada e nenhum alvo de movimento é enviado.

**Fluxo de código**:

```python
arm.connect()           # MIT → enable → read current angles
arm.disable_motors()    # disable — arm can be moved by hand

while True:
    actual = arm.read_joint_angles()  # ~30 Hz
    print(actual)

# After Ctrl+C
arm.stop(return_to_zero=False, wait=True)
```

:::tip
`read_joint_angles()` acessa o CAN de forma síncrona (lê `mechPos` de todos os 7 motores em sequência), portanto a taxa alcançável depende do tempo de ida e volta no barramento. O exemplo mira 30 Hz; se cada leitura levar mais tempo, a taxa real será menor. Enquanto o controle MIT estiver em execução, use `get_command_angles()` para monitorar o movimento comandado em vez de chamar `read_joint_angles()` em alta frequência.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint/read_joint_angles.mp4" title="Demonstração em vídeo - Ler posições reais" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. Opções de parada segura (`stop_options.py`)

Cada modo primeiro move J1 para ~+20°, depois para de acordo com o modo:

```bash
python3 examples/stop_options.py default      # slow return-to-zero (recommended)
python3 examples/stop_options.py no_return    # disable without return-to-zero
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` deixam o braço em uma pose diferente de zero e desativam os motores. Certifique-se de que a área esteja segura; sustente o braço com a mão se necessário.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Demonstração em vídeo - Opções de parada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. Estrutura de programa recomendada (`recommended_structure.py`)

Demonstra `try` / `except` / `finally` para que `stop()` seja executado mesmo em caso de erros.

```bash
python3 examples/recommended_structure.py
```

---

### Demonstração completa de parâmetros (`mit_position_control.py`)

Edite `TARGET_ANGLES` (comprimento 7) e `JOINT_SPEEDS_DEG_S` no topo do arquivo e depois execute:

```bash
python3 examples/mit_position_control.py
```

Padrão: J1 → +50° (20°/s), outros e a garra em 0°; o terminal mostra alvo / enviado / temperatura; Esc / Ctrl+C sai com retorno para zero.

:::danger
O braço pode se mover rapidamente no modo MIT. Mantenha pessoas e equipamentos afastados e permaneça dentro de aproximadamente 70% da área de trabalho.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Demonstração em vídeo - Demonstração completa de parâmetros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Uso como biblioteca

### Exemplo mínimo

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# Wait for motion to finish before stop; see examples/quick_start.py
arm.stop()  # slow return-to-zero → disable → close CAN
```

### Configuração personalizada e garra

```python
from rebot import (
    ReBotRSMITController,
    load_config,
    GRIPPER_JOINT_ID,
)

arm = ReBotRSMITController(load_config("config/rebotarm_rs.yaml"))
arm.start()
arm.set_max_speeds([20.0] * 7)
arm.set_joint_angles([25, 15, 15, -15, 0, 0, 0])
arm.set_joint_angle(GRIPPER_JOINT_ID, 180.0)  # gripper = J7
```

### Leitura passiva de posição

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()
arm.connect()           # MIT → enable → read current angles
arm.disable_motors()    # disable — move arm by hand

actual = arm.read_joint_angles()
print(actual)

arm.stop(return_to_zero=False, wait=True)  # close CAN, no return-to-zero
```

### Ciclo de vida do controlador

**Controle de movimento MIT**:

```
create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

**Leitura passiva de posição** (sem movimento comandado):

```
create → connect() → disable_motors() → read_joint_angles() → … → stop(return_to_zero=False)
```

### API principal

| Método / atributo | Descrição |
|--------------------|-------------|
| `connect()` | Conecta CAN, modo MIT, habilita, lê ângulos atuais; chamado automaticamente por `start()` |
| `disable_motors()` | Desabilita todos os motores sem fechar o CAN (para leitura passiva) |
| `start(enable_esc=True, install_signal_handlers=True)` | Inicia as threads de controle e temperatura |
| `set_joint_angles(angles_deg)` | Define 7 ângulos alvo (graus) |
| `set_joint_angle(joint_id, angle_deg)` | Define uma junta / garra (1–7) |
| `set_max_speeds(speeds_deg_s)` | Define 7 velocidades máximas (graus/s) |
| `get_target_angles()` / `get_command_angles()` | Ângulos alvo / de comando suavizados |
| `read_joint_angles()` | Leitura síncrona das posições mecânicas reais (graus); usa CAN |
| `last_temperatures` | Temperatura do MOS por motor |
| `is_stopped` | Indica se o desligamento seguro foi concluído |
| `stop(return_to_zero=True, wait=True)` | Para (retorno ao zero por padrão) |
| `request_stop(..., emergency=True)` | Parada avançada / desabilitação de emergência |

Constantes exportadas: `GRIPPER_MOTOR_ID = 7`, `GRIPPER_JOINT_ID = 7`.

---

## FAQ

- **`Permission denied` / cannot open can0**  
  Certifique-se de que a interface CAN esteja `up` e que seu usuário possa acessar dispositivos de rede. Use `sudo` para `ip link` se necessário ou verifique as regras do udev.

- **Nenhuma resposta do motor / falha ao habilitar**  
  1. Confirme que o bitrate é 1 Mbps;  
  2. Confirme que `channel`, `host_id` e os IDs dos motores em `config/rebotarm_rs.yaml` correspondem ao hardware;  
  3. Execute novamente `ip link` após reconectar o USB CAN.

- **Ângulos definidos, mas o braço mal se move**  
  `set_joint_angles()` apenas atualiza os alvos. Defina `set_max_speeds()` razoáveis e aguarde até que os ângulos de comando se aproximem dos alvos antes de `stop()`. Veja `examples/quick_start.py`.

- **A garra não se move**  
  A garra é **J7 / CAN ID 7**. Passe **7 valores** para `set_joint_angles` (o último é a garra) ou use `set_joint_angle(7, angle)`.

- **Tempo limite na leitura de posição / não é possível ler ângulos**  
  `mechPos` é legível de forma confiável no modo MIT após habilitar. O Tutorial 5 usa `connect()` e depois `disable_motors()` para que você possa mover o braço manualmente e continuar lendo. Se `ensure_mode` ou leituras de parâmetros expirarem, verifique a fiação CAN, terminação e alimentação dos motores.

- **Spam de alarme de temperatura**  
  Alarmes são disparados por borda com histerese: um alarme por motor por evento de sobretemperatura; o alarme é reemitido apenas depois que a temperatura cai abaixo de `alarm_c - 2°C`.

- **Proteção contra travamento da junta 2 / braço cai**  
  Frequentemente causado por permanecer além de ~70% da extensão da área de trabalho. Desligue e ligue a alimentação para limpar a proteção e reduza os ângulos alvo e o tempo de permanência.

- **Comportamento após erros de comunicação**  
  Em caso de falha de comunicação no loop de controle, o programa **desabilita em emergência sem retorno ao zero** para evitar movimento sob comunicação ruim.

- **Pinocchio / MeshCat / compensação de gravidade**  
  Este repositório é focado em controle de posição MIT. Para cinemática, simulação e compensação de gravidade, consulte [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) e o guia Pinocchio & MeshCat no Wiki da Seeed.

---

## Contato

- **Repositório**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **Issues**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Referências

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py (cinemática / simulação / compensação de gravidade)](https://github.com/Seeed-Projects/reBotArm_control_py)
- [Documentação do motor RobStride](https://www.seeedstudio.com/)
- README em chinês neste repositório: `README_zh.md`
- README em inglês neste repositório: `README.md`
