---
description: Este tutorial mostra como usar o rebot_control para realizar controle de posição MIT no reBot Arm B601-RS via MotorBridge e barramento CAN, incluindo garra, proteção de temperatura e retorno seguro para zero.
title: Introdução ao Controle de Posição MIT no reBot Arm B601-RS 
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - Robotic Arm
  - Gripper
  - Temperature Protection
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-04
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-08-04'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_mit_control/
---

# Introdução ao Controle de Posição MIT no reBot Arm B601-RS

<p align="center">
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 DOF · RobStride · CAN @ 1 Mbps · Controle de Posição MIT · Proteção de Temperatura · Retorno Seguro para Zero · Interface Python Open-Source</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[MotorBridge](https://github.com/motorbridge/motorbridge) é um SDK de controle CAN em Python para motores como RobStride e Damiao. Construído sobre ele, o [rebot_control](https://github.com/LAN-GER/rebot_control) encapsula uma interface de controle de posição MIT feita sob medida para o **reBot Arm B601-RS**: configuração em YAML, limitação de velocidade por junta, proteção de temperatura MOS em três níveis e retorno suave para zero acionado por Esc / Ctrl+C / `stop()`.

Este tutorial guia você por: configuração do ambiente → configuração do CAN → execução dos exemplos → uso como biblioteca para desenvolvimento secundário.

:::caution Aviso Importante de Segurança
- **Este projeto fornece apenas a interface de controle; ele não inclui limites de junta por software nem limites de espaço de trabalho.** Os ângulos de destino que você definir são enviados diretamente para os motores.
- **Mantenha o braço dentro de aproximadamente 70% do seu espaço de trabalho.** Permanecer além do espaço de trabalho por longos períodos pode acionar a proteção contra travamento no motor J2, e o braço pode cair.
- Para o primeiro uso, teste com **ângulos pequenos e baixas velocidades**, e certifique-se de que o entorno esteja livre de obstáculos e que as pessoas fiquem afastadas do raio de trabalho.
:::

---

## Recursos do Projeto

1. **Controle de Posição MIT**  
   Envia continuamente comandos de posição MIT a 200 Hz por padrão; cada junta tem um limite de velocidade independente, com suavização de velocidade em malha.

2. **Suporte a 6+1 Motores**  
   J1–J6 são juntas do braço, e **J7 (ID CAN 7) é a garra do efetuador final**, todos controlados de forma uniforme via `set_joint_angles` / `set_joint_angle`.

3. **Proteção de Temperatura em Três Níveis**  
   Monitora em tempo real a temperatura MOS de cada motor: alarme e continua → retorno lento para zero em alta temperatura e depois desabilita → desabilitação de emergência (sem retorno para zero).

4. **Saída Segura e Retorno para Zero**  
   Esc / Ctrl+C / `arm.stop()` aciona uma trajetória smoothstep para retorno lento para zero; pressionar Ctrl+C novamente durante o retorno interrompe imediatamente e desabilita.

5. **Configuração Baseada em YAML**  
   Canal CAN, limites de temperatura, parâmetros de retorno para zero e `kp`/`kd` dos motores são todos configurados em `config/rebotarm_rs.yaml` — altere parâmetros sem mexer no código.

6. **Amigável ao Desenvolvimento Secundário**  
   Camadas limpas (config / interface / exemplos); pode ser usado diretamente como biblioteca via `from rebot import ReBotRSMITController`.

---

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/).

| Parâmetro | Especificação |
|-----------|---------------|
| Modelo do Braço | Kit reBot Arm B601-RS Montado com Garra |
| Graus de Liberdade | 6+1 (incluindo garra) |
| Raio de Trabalho | 754,7 mm (com garra) / 587,5 mm (sem garra) |
| Carga Útil | Nominal 2,5 kg / Máxima 5 kg |
| Faixa das Juntas | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Garra: 345° ~ 0° |
| Repetibilidade | 0,1 mm |
| Peso Próprio | 6,7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 (incluindo garra) |
| Comunicação | Barramento CAN @ 1 Mbps |
| Tensão de Operação | DC 48V |
| Fonte de Alimentação | DC 48V 15A |
| Temperatura de Operação | -20°C ~ 50°C |
| Método de Controle | PC |

### Mapeamento dos Motores neste Projeto

| Junta # | ID CAN | Modelo | Observações |
|---------|--------|-------|------------|
| J1 | 1 | RS06 | Base |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | Punho |
| J7 | **7** | RS00 | **Garra do efetuador final** |

### Capacidades de Software Suportadas (este repositório)

| Capacidade | Status |
|------------|--------|
| Controle de posição MIT | ✅ |
| Limitação de velocidade por junta | ✅ |
| Controle da garra (ID CAN 7) | ✅ |
| Monitoramento de temperatura MOS e proteção em três níveis | ✅ |
| Retorno seguro para zero / desabilitação de emergência | ✅ |
| Configuração em YAML | ✅ |
| Chamadas como biblioteca Python | ✅ |
| Cinemática direta/inversa (Pinocchio) | ❌ (veja [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)) |
| Simulação MeshCat | ❌ (veja o repositório acima) |

### Parâmetros dos Motores das Juntas

| Parâmetro | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| Tensão Nominal | 48V | 48V |
| Corrente Nominal | 4,7 Apk ± 10% | 14,3 Apk ± 10% |
| Corrente de Pico | 15,5 Apk ± 10% | 57 Apk ± 10% |
| Torque Nominal | 5 N·m | 11 N·m |
| Torque de Pico | 14 N·m | 36 N·m |
| Velocidade Nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidade Máxima em Vazio | 315 rpm ± 10% | 480 rpm ± 10% |
| Relação de Engrenagem | 10 : 1 | 9 : 1 |
| Interface de Controle | CAN @ 1 Mbps | CAN @ 1 Mbps |
| Modo de Controle | MIT / Velocidade / Posição / Torque | MIT / Velocidade / Posição / Torque |

## Lista de Materiais (BOM)

| Peça | Qtde | Incluído |
|------|-----|----------|
| Braço robótico reBot Arm B601-RS | 1 | ✅ |
| Adaptador CAN (CANABLE / PCAN-USB, etc.) | 1 | ✅ |
| Fonte de alimentação (DC 48V 15A) | 1 | ✅ |
| Cabo USB-C | 1 | ✅ |
| Garra | 1 | ✅ |

## Requisitos de Ambiente

| Item | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **SO** | Ubuntu 22.04+ (recomendado) |
| **Interface de Comunicação** | Interface CAN (padrão `can0`) |
| **Alimentação** | DC 48V 15A |
| **Dependências** | `motorbridge`, `pyyaml`; opcional `pynput` (tecla Esc) |

---

## Etapas de Instalação

### Etapa 1. Clonar o Repositório

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### Etapa 2. Instalar Dependências

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` é usado para escutar a tecla Esc. Se não estiver instalado, apenas a função Esc ficará indisponível; Ctrl+C e `arm.stop()` ainda funcionarão.
:::

### Etapa 3. Configurar a Interface CAN

```bash
# View the interface (PCAN-USB, etc.)
sudo modprobe peak_usb   # If using a PEAK adapter
ip -br link

# Set can0 bitrate to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
Após reconectar um adaptador CAN USB, geralmente é necessário executar novamente a configuração `ip link`.
:::

### Etapa 4. (Opcional) Ajustar o Arquivo de Configuração

Edite `config/rebotarm_rs.yaml`:

| Config | Descrição | Padrão |
|--------|-------------|---------|
| `can.channel` | Nome da interface CAN | `can0` |
| `can.host_id` | ID do host | `0xFD` |
| `control.control_hz` | Taxa de envio de comandos MIT (não é a velocidade de movimento) | 200 Hz |
| `control.telemetry_hz` | Taxa de leitura de temperatura | 2 Hz |
| `temperatures.alarm_c` | Limite de alarme de temperatura | 80°C |
| `temperatures.return_zero_c` | Limite de retorno para zero em alta temperatura | 100°C |
| `temperatures.disconnect_c` | Limite de desabilitação de emergência | 140°C |
| `return_zero.max_speed_deg_s` | Velocidade de pico para retorno normal para zero | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | Velocidade de pico para retorno para zero em alta temperatura | 30°/s |
| `return_zero.min_time_s` | Duração mínima do retorno para zero | 3,0 s |
| `return_zero.settle_time_s` | Tempo de espera após atingir zero | 0,30 s |
| `motors` | ID / modelo do motor / MIT `kp` / `kd` | ver YAML |

Itens não preenchidos no YAML usam padrões do código; preencher uma chave inexistente gera um erro imediatamente, facilitando a detecção de erros de digitação.

---

## Estrutura do Código

```
rebot_control/
├── config/
│   └── rebotarm_rs.yaml            # CAN / motors / temperature / return-to-zero
├── rebot/
│   ├── __init__.py                 # Public API
│   ├── config.py                   # Config loading & validation
│   └── controller.py               # ReBotRSMITController
└── examples/
    ├── _bootstrap.py               # Path bootstrap + wait-for-reached helper
    ├── quick_start.py              # Tutorial 1: Quick Start
    ├── custom_config.py            # Tutorial 2: Custom Config
    ├── monitor_status.py           # Tutorial 3: Status Monitoring
    ├── single_joint_adjust.py      # Tutorial 4: Single Joint + Gripper
    ├── read_joint_angles.py        # Tutorial 5: Read Actual Position
    ├── stop_options.py             # Tutorial 6: Stop Options
    ├── recommended_structure.py    # Tutorial 7: Recommended Structure
    └── mit_position_control.py     # Full editable demo
```

Observações sobre as camadas:

- **Arquivo de configuração**: fonte única de verdade para parâmetros ajustáveis.
- **Camada de configuração**: `load_config()` → `ControllerConfig`.
- **Camada de interface**: lógica de controle pura, sem parâmetros de demonstração fixos no código.
- **Camada de exemplos**: ângulos de destino, velocidades e fluxo de execução.

---

## Observações sobre Recursos

### Controle MIT e Suavização de Velocidade

- `control_hz` (padrão 200 Hz) apenas determina a **taxa de envio de comandos**.
- A velocidade real de movimento é determinada por `set_max_speeds([...])` (unidade: graus/segundo).
- `set_joint_angles()` apenas atualiza o **alvo**; o laço de controle move gradualmente o **ângulo comandado** em direção ao alvo na velocidade limitada.

:::tip
Se você chamar `stop()` logo após definir o alvo, talvez mal veja movimento em direção ao alvo. Os exemplos usam `wait_for_command_targets()` (veja `examples/_bootstrap.py`) para esperar até que o ângulo comandado esteja próximo do alvo antes de retornar para zero.
:::

### Proteção de Temperatura em Três Níveis

| Limite (padrão) | Comportamento |
|---------------------|----------|
| ≥ 80°C | Alarme de temperatura (relatado apenas uma vez por transição de sobretemperatura por motor); continua em operação |
| ≥ 100°C | Para o movimento, retorna lentamente para zero na velocidade de pico de alta temperatura e depois desabilita |
| ≥ 140°C | Desabilitação imediata de emergência, **sem retorno para zero** |

### Retorno Seguro para Zero

O retorno para zero usa uma trajetória **smoothstep**. A duração total é:

```
duration = max(min_time_s, time estimated from peak speed for each joint)
```

A velocidade de pico é `max_speed_deg_s` (normal) ou `thermal_max_speed_deg_s` (alta temperatura). Ambas são **30°/s** por padrão, e `min_time_s` é **3,0 s**.

| Método de saída | Comportamento |
|----------------|--------------|
| Esc / primeiro Ctrl+C / `arm.stop()` | Retorno lento para zero → desabilitar → fechar CAN |
| Segundo Ctrl+C durante o retorno para zero | Aborta imediatamente o retorno e desabilita |
| Erro de comunicação | Desabilitação de emergência, nenhum retorno para zero é tentado |

### Convenção de Unidades

| Contexto | Unidade |
|----------|--------|
| API externa (ângulos, velocidades) | graus, graus/segundo |
| MotorBridge MIT interno | radianos, radianos/segundo |

---

## Chamando Tutoriais

Todos os exemplos abaixo são executados a partir da **raiz do projeto**. Cada script tem um cabeçalho **Movimento esperado** no topo e imprime uma linha `[Expected]` na inicialização, facilitando o acompanhamento.

| Tutorial | Arquivo | Comando |
|----------|---------|---------|
| 1. Início Rápido | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. Configuração Personalizada | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. Monitoramento de Status | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. Única Junta + Garra | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. Ler Posição Real | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. Opções de Parada | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. Estrutura Recomendada | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| Demonstração Completa | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. Início Rápido (`quick_start.py`)

**Movimento esperado**: J1 gira até +20° a cerca de 15°/s enquanto as outras juntas e a garra permanecem em 0°; após atingir o alvo, retorna lentamente para zero e desabilita.

```bash
python3 examples/quick_start.py
```

Fluxo: `start()` → `set_max_speeds()` → `set_joint_angles()` → **aguardar até atingir** → `stop()`.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Demonstração em Vídeo - Início Rápido" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. Arquivo de Configuração Personalizada (`custom_config.py`)

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**Movimento esperado**: J1 → +15° (cerca de 15°/s), o restante em 0°, depois retorna para zero.

---

### 3. Monitorar Status Durante a Execução (`monitor_status.py`)

```bash
python3 examples/monitor_status.py
```

**Movimento esperado**: J1 → +30°; o terminal imprime continuamente alvo / comando / temperatura do MOS. Pressione **Esc** ou **Ctrl+C** para encerrar e retornar para zero.

Observações:

- **Alvo vs comando**: o ângulo comandado fica atrás do alvo (suavização limitada por velocidade).
- **Temperatura**: leia `arm.last_temperatures` diretamente — não é necessário consultar o CAN manualmente.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Demonstração em Vídeo - Monitorar Status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. Ajuste Fino de Única Junta e Garra (`single_joint_adjust.py`)

```bash
python3 examples/single_joint_adjust.py
```

**Alvos padrão**:

| J1 | J2 | J3 | J4 | J5 | J6 | J7 Garra |
|----|----|----|----|----|----|----------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`: 1–6 são juntas do braço, e **7 é a garra (ID CAN 7)**.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Demonstração em Vídeo - Única Junta e Garra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. Ler Posição Real (`read_joint_angles.py`)

```bash
python3 examples/read_joint_angles.py
```

**Movimento esperado**: imprime os ângulos reais na inicialização; J1 se move em direção a +20° por cerca de 5 s, depois lê novamente o ângulo real (deve estar próximo de 20°); em seguida retorna para zero.

:::tip
`read_joint_angles()` acessa o CAN de forma síncrona, portanto não deve ser chamada em frequências muito altas. Use `get_command_angles()` para monitorar o progresso do comando.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint_angles/read_joint_angles.mp4" title="Demonstração em Vídeo - Ler Posição Real" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. Opções de Parada Segura (`stop_options.py`)

Cada modo primeiro move J1 para cerca de +20°, depois para de acordo com o modo:

```bash
python3 examples/stop_options.py default      # Slow return-to-zero then disable (recommended)
python3 examples/stop_options.py no_return    # No return-to-zero, disable directly
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # Emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` deixa o braço em uma pose diferente de zero e o desabilita. Certifique-se de que o entorno esteja seguro e segure o braço com a mão se necessário.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Demonstração em Vídeo - Opções de Parada Segura" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. Estrutura de Programa Recomendada (`recommended_structure.py`)

Demonstra `try` / `except` / `finally` para garantir um `stop()` seguro mesmo quando ocorrerem exceções.

```bash
python3 examples/recommended_structure.py
```

---

### Demonstração Completa de Parâmetros (`mit_position_control.py`)

Modifique `TARGET_ANGLES` (comprimento 7) e `JOINT_SPEEDS_DEG_S` no topo do arquivo e então execute:

```bash
python3 examples/mit_position_control.py
```

Exemplo padrão: J1 → +50° (20°/s), o restante e a garra em 0°; o terminal atualiza alvo / comando / temperatura; Esc / Ctrl+C retorna para zero e sai.

:::danger
No modo MIT o braço ainda pode se mover rapidamente. Mantenha pessoas e equipamentos fora do raio de trabalho e limite a operação a aproximadamente 70% da área de trabalho.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Demonstração em Vídeo - Demonstração Completa de Parâmetros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Uso como Biblioteca

### Exemplo Mínimo

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # Auto-loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# You need to wait for motion to complete yourself before calling stop; see examples/quick_start.py
arm.stop()  # Slow return-to-zero → disable → close CAN
```

### Configuração Personalizada e Garra

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
arm.set_joint_angle(GRIPPER_JOINT_ID, 180.0)  # Gripper = J7
```

### Ciclo de Vida do Controlador

```
Create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

### API Principal

| Método / Atributo | Descrição |
|------------------|-----------|
| `start(enable_esc=True, install_signal_handlers=True)` | Inicia as threads de controle e temperatura |
| `set_joint_angles(angles_deg)` | Define 7 ângulos alvo (graus) |
| `set_joint_angle(joint_id, angle_deg)` | Define uma única junta / garra (1–7) |
| `set_max_speeds(speeds_deg_s)` | Define 7 velocidades máximas (graus/segundo) |
| `get_target_angles()` / `get_command_angles()` | Ângulos alvo / comandados suavizados |
| `read_joint_angles()` | Lê de forma síncrona a posição mecânica real |
| `last_temperatures` | Temperatura do MOS de cada motor |
| `is_stopped` | Indica se a parada segura foi concluída |
| `stop(return_to_zero=True, wait=True)` | Para (retorna para zero por padrão) |
| `request_stop(..., emergency=True)` | Parada avançada / desabilitação de emergência |

Constantes exportadas: `GRIPPER_MOTOR_ID = 7`, `GRIPPER_JOINT_ID = 7`.

---

## FAQ

- **`Permission denied` / não é possível abrir can0**  
  Certifique-se de que a interface CAN esteja `up` e de que o usuário atual tenha permissão para acessar dispositivos de rede. Use `sudo` para configurar `ip link` se necessário, ou verifique as regras do udev.

- **Nenhuma resposta do motor / falha ao habilitar**  
  1. Confirme que o bitrate é 1 Mbps;  
  2. Confirme se `channel`, `host_id` e os IDs dos motores em `config/rebotarm_rs.yaml` correspondem ao hardware real;  
  3. Após reconectar o USB CAN, execute `ip link` novamente.

- **Define ângulos, mas quase não se move**  
  `set_joint_angles()` apenas altera o alvo. Defina um `set_max_speeds()` razoável e aguarde o ângulo comandado se aproximar do alvo antes de chamar `stop()`. Veja `examples/quick_start.py`.

- **O gripper não se move**  
  O gripper é **J7 / CAN ID 7**. `set_joint_angles` deve receber **7 valores**, sendo o último o gripper; ou use `set_joint_angle(7, angle)`.

- **Alarme de temperatura em excesso**  
  A implementação atual é acionada por borda com debounce por histerese: cada motor relata apenas uma vez por evento de superaquecimento; ele só voltará a relatar depois que a temperatura cair abaixo de `alarm_c - 2°C`.

- **Proteção contra travamento de J2 / braço cai**  
  Comum ao operar além de cerca de 70% do alcance do braço por períodos prolongados. Desligue e ligue novamente o braço para limpar a proteção e reduza os ângulos de destino e a faixa de permanência.

- **Comportamento após erro de comunicação**  
  Quando o loop de controle encontra uma falha de comunicação, o programa **desabilita em emergência sem retornar a zero**, evitando movimento contínuo sob comunicação com falha.

- **Relação com os tutoriais de Pinocchio / MeshCat / compensação de gravidade**  
  Este repositório foca na interface de controle de posição do MIT. Para cinemática, simulação de trajetória e compensação de gravidade, consulte [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) e o Wiki da Seeed "Getting Started with Pinocchio and MeshCat".

---

## Contato

- **Repositório do projeto**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **Suporte técnico / Issues**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **Fórum**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Referências

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py (cinemática / simulação / compensação de gravidade)](https://github.com/Seeed-Projects/reBotArm_control_py)
- [Documentação do motor RobStride](https://www.seeedstudio.com/)
- README em chinês deste repositório: `README_zh.md`
