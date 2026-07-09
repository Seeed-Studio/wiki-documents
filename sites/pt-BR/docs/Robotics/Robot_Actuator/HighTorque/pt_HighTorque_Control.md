---
description: Este wiki fornece um Guia Completo de Controle de Motor HighTorque
title: Guia Completo de Controle de Motor HighTorque
keywords:
  - actuator
  - motor
  - arm
  - robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech-ST3215-Servo.webp
slug: /hightorque_control
last_update:
  date: 11/19/2025
  author: Tienjuiwong
createdAt: '2025-11-19'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/hightorque_control/
---

# Guia Completo de Controle de Motor HighTorque

> Linha de base de controle de motor HighTorque de alto desempenho com implementações em Python, C++, Rust e Arduino

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20ESP32-lightgrey.svg)
![Language](https://img.shields.io/badge/languages-Python%20%7C%20C%2B%2B%20%7C%20Rust%20%7C%20Arduino-orange.svg)

## 📋 Tabela de Conteúdos
- [Visão Geral do Projeto](#Visão-Geral-do-Projeto)
- [Preparação de Hardware](#Preparação-de-Hardware)
- [Configuração do Ambiente de Software](#Configuração-do-Ambiente-de-Software)
- [Configuração do Barramento CAN](#Configuração-do-Barramento-CAN)
- [Guia Completo de Uso em Python](#Guia-Completo-de-Uso-em-Python)
- [Guia Completo de Uso em C++](#Guia-Completo-de-Uso-em-C)
- [Guia Completo de Uso em Rust](#Guia-Completo-de-Uso-em-Rust)
- [Explicação Detalhada do Protocolo](#Explicação-Detalhada-do-Protocolo)
- [Solução de Problemas](#Solução-de-Problemas)
- [Comparação de Desempenho](#Comparação-de-Desempenho)
- [Aplicações Avançadas](#Aplicações-Avançadas)

---

## 🎯 Visão Geral do Projeto

### O que são Motores HighTorque?
Motores HighTorque são sistemas de motor DC sem escovas projetados especificamente para aplicações em robótica, com suporte a comunicação via barramento CAN, adequados para:

- 🤖 **Robôs Humanoides** - Controle de juntas
- 🦾 **Braços Robóticos** - Posicionamento de precisão
- 🚗 **Robôs Móveis** - Tração das rodas
- ⚙️ **Equipamentos de Automação** - Controle de servos

### Modelos de Motor Suportados
| Modelo | Torque | Velocidade Máx. | Relação de Redução | Aplicação |
|------|--------|------------|-----------------|-------------|
| 5046_20 | 17 Nm | 50 rad/s | 20:1 | Juntas gerais |
| 4538_19 | 17 Nm | 44 rad/s | 19:1 | Juntas leves |
| 5047_36 | 60 Nm | 50 rad/s | 36:1 | Aplicações pesadas |
| 5047_09 | 17 Nm | 33 rad/s | 9:1 | Aplicações de alta velocidade |

### Recursos Principais
- ✅ **Comunicação via Barramento CAN** - Suporte para múltiplos motores em paralelo
- ✅ **Controle de Alta Precisão** - Controle de posição/velocidade/torque em três malhas
- ✅ **Feedback em Tempo Real** - Monitoramento de status e coleta de dados
- ✅ **Proteção de Segurança** - Proteção contra sobrecorrente/sobretensão/sobretemperatura
- ✅ **SDK Multilíngue** - Suporte para Python/C++/Rust/Arduino

---

## 🔧 Preparação de Hardware

### Lista de Hardware Necessário
1. **Motor HighTorque** - Pelo menos 1
2. **Adaptador CAN** - USB-para-CAN ou placa CAN PCIe
3. **Cabo CAN** - Cabo blindado de par trançado
4. **Resistor de Terminação de 120Ω** - Um em cada extremidade do barramento
5. **Fonte de Alimentação** - Fonte DC de 24V ou 48V
6. **Host de Desenvolvimento** - Sistema Linux (recomendado Ubuntu 20.04+)

### Diagrama de Conexão de Hardware
```
[Linux Host] ←USB→ [CAN Adapter] ←CAN_H/CAN_L→ [Motor1]
                                            ↓
                                    [120Ω Resistor]
                                            ↓
                                          [Motor2]
```

### Etapas de Conexão
1. **Conecte o Adaptador CAN** à porta USB do host
2. **Conecte o Barramento CAN**:
   - CAN_H ←→ CAN_H (todos os dispositivos)
   - CAN_L ←→ CAN_L (todos os dispositivos)
   - GND ←→ GND (aterramento comum)
3. **Instale os Resistores de Terminação**:
   - Instale um resistor de 120Ω em cada extremidade do barramento
   - Se houver apenas 2 dispositivos, instale um em cada dispositivo
4. **Conecte a Alimentação do Motor**:
   - Fio vermelho: +24V/+48V
   - Fio preto: GND
   - Fio amarelo: CAN_H
   - Fio verde: CAN_L

---

## 💻 Configuração do Ambiente de Software

### Requisitos de Sistema
- **Sistema Operacional**: Ubuntu 18.04+ / CentOS 7+ / Debian 10+
- **Versão do Kernel**: Linux 4.15+ (suporte a SocketCAN)
- **Arquitetura**: x86_64 / ARM64

### Instalação de Dependências Universais
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install basic tools
sudo apt install -y build-essential git cmake make

# Install CAN tools
sudo apt install -y can-utils

# Install Python development environment
sudo apt install -y python3 python3-pip python3-dev

# Install Rust (if needed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
```

### Clonar Projeto
```bash
# Clone official SDK
git clone https://github.com/Seeed-Projects/HighTorque_Control ~/HighTorque_Control
pushd ~/HighTorque_Control

# Check project structure
ls -la
# Should see: python/ cpp/ rust/ arduino/ directories
```

---

## 🌐 Configuração do Barramento CAN

### 1. Carregar Módulos de Kernel CAN
```bash
# Check if modules are loaded
lsmod | grep can

# If not loaded, load manually
sudo modprobe can
sudo modprobe can_raw
sudo modprobe can_dev
```

### 2. Configurar Interface CAN
```bash
# Shut down interface (if already open)
sudo ip link set can0 down

# Configure CAN interface parameters
sudo ip link set can0 type can bitrate 1000000 restart-ms 100

# Start interface
sudo ip link set can0 up

# Check interface status
ip -details link show can0
```

### 3. Verificar Comunicação CAN
```bash
# Terminal 1: Monitor CAN messages
candump can0

# Terminal 2: Send test message
cansend can0 123#DEADBEEF

# If you see messages, configuration is successful
```

### 4. Definir Inicialização Automática na Partida
```bash
# Create configuration file
sudo tee /etc/network/interfaces.d/can0 << EOF
auto can0
iface can0 inet manual
    pre-up ip link set can0 type can bitrate 1000000 restart-ms 100
    up ip link set can0 up
    down ip link set can0 down
EOF

# Make configuration effective
sudo systemctl restart networking
```

### Solução de Problemas
```bash
# Check interface permissions
sudo usermod -a -G dialout $USER
# Log out and log back in for effect

# Check device permissions
ls -la /dev/can*
# If no devices, check if driver is loaded correctly

# Check baud rate setting
ip -details link show can0 | grep bitrate
```

---

## 🐍 Guia Completo de Uso em Python

### 1. Preparação do Ambiente
```bash
cd python

# Install Python dependencies
pip install -r requirements.txt

# Manual dependency installation (if requirements.txt doesn't exist)
pip install python-can==4.3.1 numpy matplotlib
```

### 2. Varredura de Motores - Descobrir Motores Conectados
```bash
# Basic scan (scan IDs 1-14)
python3 can_motor_scanner.py

# Specify scan range
python3 can_motor_scanner.py --start 1 --end 10

# Specify CAN channel
python3 can_motor_scanner.py --channel can0

# Detailed information mode
python3 can_motor_scanner.py --detailed

# Continuous monitoring mode (monitor for 30 seconds)
python3 can_motor_scanner.py --monitor 30

# Test single motor communication
python3 can_motor_scanner.py --test 1

# Save scan report
python3 can_motor_scanner.py --save scan_report.txt
```

**Saída Esperada:**
```
Initializing can0 @ 1000000bps...
✅ CAN interface connected successfully
==================================================
Starting motor ID scan (range: 1-14)...
Timeout: 0.05s per motor
Press Ctrl+C to stop at any time
==================================================
Scanning ID  1... ✅ [Response] Found motor ID: 1 (CAN ID: 0x8001)
Scanning ID  2... No response
Scanning ID  3... ✅ [Response] Found motor ID: 3 (CAN ID: 0x8003)
...
==================================================
✅ Scan completed, online motor list: [1, 3]
Total: 2 motors
```

### 3. Controle de Velocidade - Controlar a Velocidade de Rotação do Motor
```bash
# Basic speed control (control motor ID=1)
python3 velocity_acceleration_control.py --motor_id 1

# Specify CAN channel
python3 velocity_acceleration_control.py --motor_id 1 --channel can0

# Specify baud rate
python3 velocity_acceleration_control.py --motor_id 1 --bitrate 1000000
```

**Exemplo de Controle Interativo:**
```
Motor 1 started! Use control commands:
- Speed: +number (e.g.: +5.0, -2.5)
- Acceleration: anumber (e.g.: a10.0)
- Stop: stop
- Query status: status
- Exit: quit

> +5.0        # Set forward 5.0 rad/s
> a8.0        # Set acceleration 8.0 rad/s²
> stop        # Smart stop
> status      # Query current status
> quit        # Exit program
```

### 4. Controle de Posição - Controlar o Ângulo do Motor
```bash
# Interactive position control
python3 angle_stream_control.py --motor_id 1 --mode interactive

# Sine wave test
python3 angle_stream_control.py --motor_id 1 --mode sine --amplitude 1.57 --frequency 0.5

# Step test
python3 angle_stream_control.py --motor_id 1 --mode step --target 1.57

# Multi-position test
python3 angle_stream_control.py --motor_id 1 --mode multi
```

**Exemplo de Controle Interativo:**
```
Motor 1 connected and enabled!
Use control commands:
- Position: pvalue (radians, e.g.: p1.57, p-0.5)
- Torque: tvalue (Nm, e.g.: t2.0, t-1.5)
- Stop: stop
- Exit: quit

> p1.57       # Rotate to 90 degree position
> t2.0        # Set 2Nm torque
> stop        # Stop motor
> quit        # Exit program
```

### 5. Exemplos de Código em Python

#### Código de Varredura de Motores
```python
#!/usr/bin/env python3
from can_motor_scanner import LivelyMotorScanner

def main():
    # Create scanner
    scanner = LivelyMotorScanner(channel='can0', bitrate=1000000)

    # Connect CAN bus
    if not scanner.connect():
        print("CAN connection failed!")
        return

    try:
        # Scan motors
        found_motors = scanner.scan_range(start_id=1, end_id=14)

        if found_motors:
            print(f"Found motors: {found_motors}")

            # Get detailed information
            for motor_id in found_motors:
                info = scanner.get_motor_info(motor_id)
                if info:
                    print(f"Motor{motor_id}: Mode={info.get('mode_name', 'Unknown')}")
        else:
            print("No motors found")

    finally:
        scanner.disconnect()

if __name__ == "__main__":
    main()
```

#### Código de Controle de Velocidade
```python
#!/usr/bin/env python3
from velocity_acceleration_control import MotorVelAccController

def main():
    # Create controller
    controller = MotorVelAccController(channel='can0', motor_id=1)

    # Connect and enable motor
    if not controller.connect():
        print("Connection failed!")
        return

    controller.enable_motor()
    controller.start_control()

    try:
        # Set speed and acceleration
        controller.set_velocity(5.0)  # 5 rad/s
        controller.set_acceleration(10.0)  # 10 rad/s²

        # Run for 10 seconds
        import time
        time.sleep(10)

        # Smart stop
        controller.emergency_stop()

    finally:
        controller.disable_motor()
        controller.disconnect()

if __name__ == "__main__":
    main()
```

---

## ⚡ Guia Completo de Uso em C++

### 1. Preparação do Ambiente
```bash
cd cpp

# Compile all programs
make clean
make

# Or compile single program
make can_motor_scanner
make velocity_acceleration_control
make angle_stream_control
```

### 2. Varredura de Motor
```bash
# Scan motor IDs 1-5
./can_motor_scanner 1 5

# Scan all possible IDs
./can_motor_scanner 1 14
```

**Saída Esperada:**
```
Initializing CAN0 @ 1000000bps...
✅ CAN interface connected successfully
Starting motor ID scan (1-5)...
Scanning ID 1... ✅ Found motor ID: 1 (CAN ID: 0x8001)
Scanning ID 2... No response
Scanning ID 3... ✅ Found motor ID: 3 (CAN ID: 0x8003)
Scanning ID 4... No response
Scanning ID 5... No response
Scan completed! Online motors: [1, 3]
```

### 3. Controle de Velocidade
```bash
# Control motor ID=1
./velocity_acceleration_control 1

# Control specified ID motor
./velocity_acceleration_control 3
```

**Comandos de Controle:**
- `+number` - Definir velocidade para frente
- `-number` - Definir velocidade para trás
- `anumber` - Definir aceleração
- `stop` - Parada inteligente
- `quit` - Sair do programa

### 4. Controle de Posição
```bash
# Interactive mode
./angle_stream_control 1 interactive

# Sine wave mode
./angle_stream_control 1 sine

# Step mode
./angle_stream_control 1 step

# Multi-position mode
./angle_stream_control 1 multi
```

### 5. Exemplos de Código em C++

#### Código de Varredura de Motor
```cpp
#include "can_motor_scanner.h"

int main() {
    // Create scanner
    LivelyMotorScanner scanner("can0", 1000000);

    // Connect CAN bus
    if (!scanner.connect()) {
        std::cerr << "CAN connection failed!" << std::endl;
        return 1;
    }

    // Scan motors
    std::vector<int> found_motors = scanner.scan_range(1, 14);

    if (!found_motors.empty()) {
        std::cout << "Found motors: ";
        for (int id : found_motors) {
            std::cout << id << " ";
        }
        std::cout << std::endl;
    } else {
        std::cout << "No motors found" << std::endl;
    }

    scanner.disconnect();
    return 0;
}
```

Compile e execute:
```bash
g++ -o scan_example scan_example.cpp -lcan
./scan_example
```

---

## 🦀 Guia Completo de Uso em Rust

### 1. Preparação do Ambiente
```bash
cd rust

# Check if Rust is installed
rustc --version

# Compile release version
cargo build --release

# Or use Makefile
make
```

### 2. Varredura de Motor
```bash
# Scan specified range
./target/release/can_motor_scanner --start-id 1 --end-id 5

# Complete scan
./target/release/can_motor_scanner --start-id 1 --end-id 14

# Specify CAN channel
./target/release/can_motor_scanner --channel can0 --start-id 1 --end-id 5
```

### 3. Controle de Velocidade
```bash
# Basic speed control
./target/release/velocity_acceleration_control --motor-id 1

# Specify channel
./target/release/velocity_acceleration_control --motor-id 1 --channel can0
```

### 4. Controle de Posição
```bash
# Interactive mode
./target/release/angle_stream_control --motor-id 1 interactive

# Sine wave mode
./target/release/angle_stream_control --motor-id 1 sine --amplitude 1.57

# Step mode
./target/release/angle_stream_control --motor-id 1 step --target 1.57
```

### 5. Exemplos de Código em Rust

#### Código de Varredura de Motor
```rust
use livelybot_motor_sdk::{LivelyMotorController, CanFrame};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create controller
    let mut controller = LivelyMotorController::new("can0")?;

    // Connect CAN bus
    controller.connect()?;

    // Scan motors
    let mut found_motors = Vec::new();

    for motor_id in 1..=14 {
        if controller.ping_motor(motor_id)? {
            println!("✅ Found motor ID: {}", motor_id);
            found_motors.push(motor_id);
        } else {
            println!("❌ Motor ID: {} No response", motor_id);
        }
    }

    println!("Scan completed, found {} motors", found_motors.len());

    Ok(())
}
```

Compile e execute:
```bash
# Save as scan_example.rs
rustc --extern livelybot_motor_sdk=target/release/liblivelybot_motor_sdk.rlib scan_example.rs
./scan_example
```

---

## 📡 Explicação Detalhada do Protocolo

### Formato do Quadro CAN
- **Tipo de Quadro**: Quadro estendido (ID de 29 bits)
- **Taxa de Baud**: 1Mbps
- **Comprimento de Dados**: 8 bytes
- **Endianness**: Big endian

### Comandos Centrais do Protocolo

#### 1. Comando de Varredura de Motor (Ping)
```
CAN ID: 0x8000 | motor_id
Data: [0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50]
```
- `0x8000`: Bit alto indica necessidade de resposta
- `motor_id`: ID do motor (1-127)
- `0x11`: Comando de leitura
- `0x00`: Endereço (ler modo do motor)

#### 2. Comando de Controle de Velocidade (0xAD)
```
CAN ID: 0x00AD
Data: [PosL, PosH, VelL, VelH, AccL, AccH, 0x50, 0x50]
```
- `PosL/PosH`: Alvo de posição (16 bits, FACTOR_POS=10000.0)
- `VelL/VelH`: Alvo de velocidade (16 bits, FACTOR_VEL=4000.0)
- `AccL/AccH`: Alvo de aceleração (16 bits, FACTOR_ACC=1000.0)
- `0x50`: Bytes de preenchimento

#### 3. Comando de Controle de Posição (0x90)
```
CAN ID: 0x0090
Data: [PosL, PosH, VelL, VelH, TqeL, TqeH, 0x50, 0x50]
```
- `PosL/PosH`: Alvo de posição (16 bits, FACTOR_POS=10000.0)
- `VelL/VelH`: Limite de velocidade (16 bits, FACTOR_VEL=4000.0)
- `TqeL/TqeH`: Limite de torque (16 bits, FACTOR_TQE=200.0)

### Coeficientes do Protocolo
| Parâmetro | Valor | Descrição | Exemplo |
|-----------|-------|-------------|---------|
| FACTOR_POS | 10000.0 | Fator de conversão de posição | 1.57 rad → 15700 |
| FACTOR_VEL | 4000.0 | Fator de conversão de velocidade | 5.0 rad/s → 20000 |
| FACTOR_ACC | 1000.0 | Fator de conversão de aceleração | 10.0 rad/s² → 10000 |
| FACTOR_TQE | 200.0 | Fator de conversão de torque | 2.0 Nm → 400 |
| MAGIC_POS | -32768 | Sinalizador de modo de velocidade | Valor de posição especial |

### Exemplos de Conversão de Dados

#### Conversão de Posição
```python
# Radians → Protocol value
position_rad = 1.57  # 90 degrees
protocol_value = int(position_rad * FACTOR_POS)  # 15700

# Protocol value → Radians
protocol_value = 15700
position_rad = protocol_value / FACTOR_POS  # 1.57
```

#### Conversão de Velocidade
```python
# rad/s → Protocol value
velocity_rps = 5.0
protocol_value = int(velocity_rps * FACTOR_VEL)  # 20000

# Protocol value → rad/s
protocol_value = 20000
velocity_rps = protocol_value / FACTOR_VEL  # 5.0
```

---

## 🔧 Solução de Problemas

### Problemas Comuns e Soluções

#### 1. Interface CAN Não Pode Ser Iniciada
```bash
# Error message
Error: Cannot find device can0

# Solution
sudo modprobe can
sudo modprobe can_raw
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 2. Permissões Insuficientes
```bash
# Error message
Operation not permitted

# Solution 1: Add user to dialout group
sudo usermod -a -G dialout $USER
# Re-login for effect

# Solution 2: Run with sudo
sudo python3 can_motor_scanner.py
```

#### 3. Não É Possível Fazer Varredura dos Motores
```bash
# Check hardware connection
1. Confirm 120Ω termination resistor is installed
2. Check if CAN_H/CAN_L wiring is correct
3. Confirm motor power supply is normal
4. Check if baud rate setting matches

# Verify connection with candump
candump can0
# Manually rotate motor, should see feedback messages
```

#### 4. Comunicação Instável
```bash
# Check signal quality
candump can0 -tA
# View error frame count

# Adjust sampling point
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000 sample-point 0.875
sudo ip link set can0 up
```

#### 5. Erros de Compilação
```bash
# Python dependency issues
pip install --upgrade pip
pip install -r requirements.txt

# C++ compilation errors
sudo apt install build-essential
sudo apt install libcan-dev

# Rust compilation errors
rustup update
cargo clean && cargo build --release
```

### Dicas de Depuração

#### 1. Use o Wireshark para Análise de Comunicação CAN
```bash
# Install wireshark
sudo apt install wireshark

# Start packet capture
sudo wireshark -i can0
```

#### 2. Monitoramento em Tempo Real do Status do Motor
```bash
# Python continuous monitoring
python3 can_motor_scanner.py --monitor 60

# C++ real-time viewing
./can_motor_scanner 1 14 | grep "Found motor"
```

#### 3. Análise de Protocolo
```python
# Send raw CAN commands
import can
bus = can.interface.Bus(channel='can0', interface='socketcan')
msg = can.Message(arbitration_id=0x8001, data=[0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50])
bus.send(msg)
```

---


## Controlando Motores com [reComputer Mini Jetson Orin](/pt-br/recomputer_jetson_mini_getting_started)

Atualmente, as interfaces de comunicação CAN mais comumente usadas para motores no mercado são conectores XT30(2+2) e JST. Nossos dispositivos **reComputer Mini Jetson Orin** e **reComputer Robotics** são equipados com portas duplas XT30(2+2) e interfaces CAN baseadas em JST, proporcionando compatibilidade perfeita.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

Para mais detalhes sobre o uso de CAN, consulte este [wiki](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_mini_hardware_interfaces_usage/#interface-CAN).

### Habilitando a Interface CAN

**Passo 1:** Antes de usar CAN0 e CAN1, remova a tampa inferior e defina ambos os resistores de terminação de 120Ω para a posição ON.

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**Passo 2:** Conecte o motor diretamente ao CAN0 do reComputer Mini através da interface XT30(2+2).

:::tip
Os pinos H/L da interface CAN do reComputer Mini são opostos aos do motor, portanto as conexões H/L no chicote XT30 2+2 precisam ser invertidas.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png" />
</div>

:::danger
Esta solução de alimentação é adequada apenas para aprendizagem e teste com um único motor. Para aplicações com vários motores, projete uma placa de alimentação independente para isolar a fonte de alimentação do Jetson da fonte de alimentação do motor, a fim de evitar que grandes correntes passem diretamente pelo Jetson.
:::

#### Habilitando a Comunicação CAN do Jetson

Abra um terminal e insira o seguinte comando para puxar o pino GPIO para nível alto e ativar o CAN0:

```bash
gpioset --mode=wait 0 43=0
```

Se estiver usando o CAN1 da interface JST, puxe o pino 106 para nível alto:

```bash
gpioset --mode=wait 0 106=0
```

Mantenha este terminal aberto e crie um novo terminal para configurar o CAN0:

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Controle em Python

- **Instalar Ambiente Python**  

```bash
pip install python-can numpy
```

- **Criar Diretório de Scripts**  

```bash
mkdir -p ~/hightorque/scripts
```

- **Criar Arquivo hightorque_motor.py**

```bash
cd ~/hightorque/scripts
touch hightorque_motor.py
```

Copie o código a seguir para o arquivo hightorque_motor.py.

<details>
<summary>hightorque_motor.py</summary>

```python
import can
import numpy as np
from time import sleep
from enum import IntEnum

class MotorType(IntEnum):
    """Motor Type Enum"""
    HT5046 = 0  # 5046 Motor
    HT4538 = 1  # 4538 Motor
    HT5047_36 = 2  # 5047/6056 Dual-pole 36 Reduction Ratio
    HT5047_9 = 3  # 5047 Single-pole 9 Reduction Ratio

class ControlMode(IntEnum):
    """Control Mode Enum"""
    NORMAL = 0  # Normal Mode
    TORQUE = 1  # Torque Mode
    COOPERATIVE = 2  # Cooperative Control Mode

class Motor:
    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):
        """
        Initialize Motor Object
        :param motor_type: Motor Type
        :param slave_id: Slave ID
        :param master_id: Master ID
        """
        self.motor_type = motor_type
        self.slave_id = slave_id
        self.master_id = master_id
        self.position = 0
        self.velocity = 0
        self.torque = 0
        self.temperature = 0

        # Set Torque Conversion Parameters Based on Motor Type
        if motor_type == MotorType.HT5046:
            self.torque_k = 0.005397
            self.torque_d = -0.455107
        elif motor_type == MotorType.HT4538:
            self.torque_k = 0.004587
            self.torque_d = -0.290788
        elif motor_type == MotorType.HT5047_36:
            self.torque_k = 0.004563
            self.torque_d = -0.493257
        elif motor_type == MotorType.HT5047_9:
            self.torque_k = 0.005332
            self.torque_d = -0.072956

    def update_status(self, position: float, velocity: float, torque: float, temperature: float):
        """Update Motor Status"""
        self.position = position
        self.velocity = velocity
        self.torque = torque
        self.temperature = temperature

class MotorControl:
    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        Initialize Motor Controller
        :param channel: CAN Channel
        :param bitrate: CAN Baud Rate
        """
        self.bus = can.interface.Bus(channel=channel, bustype='socketcan', bitrate=bitrate)
        self.motors = {}

    def add_motor(self, motor: Motor):
        """Add Motor to Controller"""
        self.motors[motor.slave_id] = motor

    def __send_data(self, motor_id: int, data: bytes):
        """
        Send CAN Data
        :param motor_id: Motor ID
        :param data: Data to Send
        """
        msg = can.Message(
            arbitration_id=0x8000 | motor_id,
            data=data,
            is_extended_id=True
        )
        self.bus.send(msg)

    def enable(self, motor: Motor):
        """Enable Motor"""
        data = bytes([0x01, 0x00, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def disable(self, motor: Motor):
        """Disable Motor"""
        data = bytes([0x01, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def set_zero_position(self, motor: Motor):
        """Set Motor Zero Position"""
        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])
        self.__send_data(motor.slave_id, data)
        sleep(1.0)  # Wait 1 second
        self.save_settings(motor)

    def save_settings(self, motor: Motor):
        """Save Motor Settings to Flash"""
        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)

    def control_position(self, motor: Motor, position: float, torque: float):
        """
        Position Control
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param torque: Torque Limit
        """
        pos_bytes = int(position).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_velocity(self, motor: Motor, velocity: float, torque: float):
        """
        Velocity Control
        :param motor: Motor Object
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_torque(self, motor: Motor, torque: float):
        """
        Torque Control
        :param motor: Motor Object
        :param torque: Target Torque
        """
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x05, 0x13]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):
        """
        Cooperative Control (Position, Velocity, Torque Simultaneous Control)
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        pos_bytes = int(position).to_bytes(2, 'little')
        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes
        self.__send_data(motor.slave_id, data)

    def read_motor_status(self, motor: Motor):
        """Read Motor Status"""
        data = bytes([0x17, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.01)  # Wait for Data Reception

        # Receive and Parse Data
        msg = self.bus.recv(timeout=0.1)
        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):
            data = msg.data
            if len(data) >= 8 and data[0] == 0x27:
                position = int.from_bytes(data[2:4], 'little')
                velocity = int.from_bytes(data[4:6], 'little')
                torque = int.from_bytes(data[6:8], 'little')
                motor.update_status(position, velocity, torque, 0)

    def periodic_read_status(self, motor: Motor, period_ms: int):
        """
        Set Periodic Motor Status Reading
        :param motor: Motor Object
        :param period_ms: Period (milliseconds)
        """
        period_bytes = int(period_ms).to_bytes(2, 'little')
        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes
        self.__send_data(motor.slave_id, data)

    def close(self):
        """Close CAN Bus"""
        self.bus.shutdown() 
```

</details>

- **Criar Arquivo hightorque_test.py**

Copie o código a seguir para o arquivo hightorque_test.py.

<details>
<summary>hightorque_test.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from hightorque_motor import Motor, MotorControl, MotorType

# Configuration Parameters
NUM_MOTORS = 2  # Number of Motors to Control
CAN_INTERFACE = "can0"  # CAN Interface Name
CAN_BITRATE = 1000000  # CAN Baud Rate
MOTOR_TYPE = MotorType.HT5047_36  # Motor Type

# Sine Wave Parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 2500  # Amplitude (0.0001 turns)
OFFSET = 2500    # Offset to Ensure Positive Position
DURATION = 60.0  # Run Duration (s)

def main():
    # Create Motor Control Object
    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)

    try:
        # Create and Add Motors
        motors = []
        for i in range(NUM_MOTORS):
            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)
            controller.add_motor(motor)
            motors.append(motor)

            # Enable Motor
            print(f"Enabling Motor {i+1}...")
            controller.enable(motor)
            time.sleep(1)  # Wait for Motor Enable

            # Set Zero Position
            print(f"Setting Motor {i+1} Zero Position...")
            controller.set_zero_position(motor)
            time.sleep(1)

            # Save Settings to Flash
            print(f"Saving Motor {i+1} Settings...")
            controller.save_settings(motor)
            time.sleep(1)

            # Read Initial Status
            controller.read_motor_status(motor)
            print(f"Motor {i+1} Initial Status:")
            print(f"Position: {motor.position * 0.0001:.4f} turns")
            print(f"Velocity: {motor.velocity * 0.00025:.4f} turns/second")
            print(f"Torque: {motor.torque * motor.torque_k + motor.torque_d:.4f} Nm")

        # Start Sine Wave Position Control
        print("\nStarting Sine Wave Position Control...")
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate Sine Wave Position with Offset to Ensure Positive
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET

            # Control All Motors
            for motor in motors:
                # Use Position Control Mode with Max Torque of 1000
                controller.control_position(motor, position=int(position), torque=1000)

            # Control Frequency
            time.sleep(0.001)  # 1kHz Control Frequency

    except KeyboardInterrupt:
        print("\nProgram Interrupted by User")
    finally:
        # Disable All Motors
        for motor in motors:
            print(f"Disabling Motor {motor.slave_id}...")
            controller.disable(motor)

        # Close CAN Bus
        controller.close()
        print("CAN Bus Closed")

if __name__ == "__main__":
    main() 

```

</details>

- **Execute hightorque_test.py**

```bash
python hightorque_test.py
```

### Cenários de Uso Recomendados
- **Python**: Protótipo rápido, verificação de algoritmos, experimentos de ensino
- **C++**: Ambiente de produção, requisitos de alto desempenho, sistemas de controle em tempo real
- **Rust**: Ambiente de produção, requisitos de segurança de memória, projetos de manutenção de longo prazo

### Escolha o Idioma Certo
- **Iniciantes**: Python - Simples e fácil de usar, início rápido
- **Desenvolvimento de Produto**: C++ - Alto desempenho, controle em tempo real
- **Projetos de Longo Prazo**: Rust - Seguro em relação à memória, recursos modernos de linguagem

### Recursos
- 📧 **Site Oficial do Motor**: https://hightorquerobotics.com/
- 🐛 **Feedback de Problemas do Projeto**: https://github.com/Seeed-Projects/HighTorque_Control/issue
- 🐛 **Interface Oficial do Motor**: https://github.com/HighTorque-Robotics/livelybot_hardware_sdk/

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
