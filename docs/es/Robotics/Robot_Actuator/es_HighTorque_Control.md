---
description: Esta wiki proporciona una Guía Completa de Control de Motores de Alto Torque
title: Guía Completa de Control de Motores de Alto Torque
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech-ST3215-Servo.webp
slug: /es/hightorque_control
last_update:
  date: 11/19/2025
  author: Tienjuiwong
---

# Guía Completa de Control de Motores de Alto Torque

> Control de motores de alto torque de alto rendimiento con implementaciones en Python, C++, Rust y Arduino

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20ESP32-lightgrey.svg)
![Language](https://img.shields.io/badge/languages-Python%20%7C%20C%2B%2B%20%7C%20Rust%20%7C%20Arduino-orange.svg)

## 📋 Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Preparación de Hardware](#preparación-de-hardware)
- [Configuración del Entorno de Software](#configuración-del-entorno-de-software)
- [Configuración del Bus CAN](#configuración-del-bus-CAN)
- [Guía Completa de Uso de Python](#guía-completa-de-uso-de-Python)
- [Guía Completa de Uso de C++](#guía-completa-de-uso-de-C++)
- [Guía Completa de Uso de Rust](#guía-completa-de-uso-de-Rust)
- [Explicación Detallada del Protocolo](#explicación-detallada-del-protocolo)
- [Solución de Problemas](#solución-de-problemas)
- [Comparación de Rendimiento](#comparación-de-rendimiento)
- [Aplicaciones Avanzadas](#aplicaciones-avanzadas)

---

## 🎯 Descripción del Proyecto

### ¿Qué son los Motores de Alto Torque?
Los motores de alto torque son sistemas de motores DC sin escobillas diseñados específicamente para aplicaciones robóticas, que soportan comunicación por bus CAN, adecuados para:

- 🤖 **Robots Humanoides** - Control de articulaciones
- 🦾 **Brazos Robóticos** - Posicionamiento de precisión
- 🚗 **Robots Móviles** - Accionamiento de ruedas
- ⚙️ **Equipos de Automatización** - Control de servos

### Modelos de Motores Soportados
| Modelo | Torque | Velocidad Máx | Relación de Reducción | Aplicación |
|------|--------|------------|-----------------|-------------|
| 5046_20 | 17 Nm | 50 rad/s | 20:1 | Articulaciones generales |
| 4538_19 | 17 Nm | 44 rad/s | 19:1 | Articulaciones ligeras |
| 5047_36 | 60 Nm | 50 rad/s | 36:1 | Aplicaciones de trabajo pesado |
| 5047_09 | 17 Nm | 33 rad/s | 9:1 | Aplicaciones de alta velocidad |

### Características Principales
- ✅ **Comunicación por Bus CAN** - Soporte para múltiples motores en paralelo
- ✅ **Control de Alta Precisión** - Control de triple bucle Posición/Velocidad/Torque
- ✅ **Retroalimentación en Tiempo Real** - Monitoreo de estado y recolección de datos
- ✅ **Protección de Seguridad** - Protección contra sobrecorriente/sobrevoltaje/sobretemperatura
- ✅ **SDK Multi-lenguaje** - Soporte para Python/C++/Rust/Arduino

---

## 🔧 Preparación de Hardware

### Lista de Hardware Requerido
1. **Motor de Alto Torque** - Al menos 1
2. **Adaptador CAN** - USB-a-CAN o tarjeta CAN PCIe
3. **Cable CAN** - Cable blindado de par trenzado
4. **Resistor de Terminación de 120Ω** - Uno en cada extremo del bus
5. **Fuente de Alimentación** - Fuente de alimentación DC de 24V o 48V
6. **Host de Desarrollo** - Sistema Linux (Ubuntu 20.04+ recomendado)

### Diagrama de Conexión de Hardware
```
[Linux Host] ←USB→ [CAN Adapter] ←CAN_H/CAN_L→ [Motor1]
                                            ↓
                                    [120Ω Resistor]
                                            ↓
                                          [Motor2]
```

### Pasos de Conexión
1. **Conectar Adaptador CAN** al puerto USB del host
2. **Conectar Bus CAN**:
   - CAN_H ←→ CAN_H (todos los dispositivos)
   - CAN_L ←→ CAN_L (todos los dispositivos)
   - GND ←→ GND (conexión de tierra común)
3. **Instalar Resistores de Terminación**:
   - Instalar un resistor de 120Ω en cada extremo del bus
   - Si solo hay 2 dispositivos, instalar uno en cada dispositivo
4. **Conectar Alimentación del Motor**:
   - Cable rojo: +24V/+48V
   - Cable negro: GND
   - Cable amarillo: CAN_H
   - Cable verde: CAN_L

---

## 💻 Configuración del Entorno de Software

### Requisitos del Sistema
- **Sistema Operativo**: Ubuntu 18.04+ / CentOS 7+ / Debian 10+
- **Versión del Kernel**: Linux 4.15+ (soporte SocketCAN)
- **Arquitectura**: x86_64 / ARM64

### Instalación de Dependencias Universales
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

### Clonar Proyecto
```bash
# Clone official SDK
git clone https://github.com/Seeed-Projects/HighTorque_Control ~/HighTorque_Control
pushd ~/HighTorque_Control

# Check project structure
ls -la
# Should see: python/ cpp/ rust/ arduino/ directories
```

---

## 🌐 Configuración del Bus CAN

### 1. Cargar Módulos del Kernel CAN
```bash
# Check if modules are loaded
lsmod | grep can

# If not loaded, load manually
sudo modprobe can
sudo modprobe can_raw
sudo modprobe can_dev
```

### 2. Configurar Interfaz CAN
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

### 3. Verificar Comunicación CAN
```bash
# Terminal 1: Monitor CAN messages
candump can0

# Terminal 2: Send test message
cansend can0 123#DEADBEEF

# If you see messages, configuration is successful
```

### 4. Configurar Inicio Automático al Arranque
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

### Solución de Problemas
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

## 🐍 Guía Completa de Uso de Python

### 1. Preparación del Entorno
```bash
cd python

# Install Python dependencies
pip install -r requirements.txt

# Manual dependency installation (if requirements.txt doesn't exist)
pip install python-can==4.3.1 numpy matplotlib
```

### 2. Escaneo de Motores - Descubrir Motores Conectados
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

**Salida Esperada:**
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

### 3. Control de Velocidad - Controlar la Velocidad de Rotación del Motor
```bash
# Basic speed control (control motor ID=1)
python3 velocity_acceleration_control.py --motor_id 1

# Specify CAN channel
python3 velocity_acceleration_control.py --motor_id 1 --channel can0

# Specify baud rate
python3 velocity_acceleration_control.py --motor_id 1 --bitrate 1000000
```

**Ejemplo de Control Interactivo:**
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

### 4. Control de Posición - Controlar el Ángulo del Motor
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

**Ejemplo de Control Interactivo:**
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

### 5. Ejemplos de Código Python

#### Código de Escaneo de Motores
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

#### Código de Control de Velocidad
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

## ⚡ Guía Completa de Uso de C++

### 1. Preparación del Entorno
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

### 2. Escaneo de Motores
```bash
# Scan motor IDs 1-5
./can_motor_scanner 1 5

# Scan all possible IDs
./can_motor_scanner 1 14
```

**Salida Esperada:**
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

### 3. Control de Velocidad
```bash
# Control motor ID=1
./velocity_acceleration_control 1

# Control specified ID motor
./velocity_acceleration_control 3
```

**Comandos de Control:**
- `+número` - Establecer velocidad hacia adelante
- `-número` - Establecer velocidad hacia atrás
- `anúmero` - Establecer aceleración
- `stop` - Parada inteligente
- `quit` - Salir del programa

### 4. Control de Posición
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

### 5. Ejemplos de Código C++

#### Código de Escaneo de Motores
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

Compilar y ejecutar:
```bash
g++ -o scan_example scan_example.cpp -lcan
./scan_example
```

---

## 🦀 Guía Completa de Uso de Rust

### 1. Preparación del Entorno
```bash
cd rust

# Check if Rust is installed
rustc --version

# Compile release version
cargo build --release

# Or use Makefile
make
```

### 2. Escaneo de Motores
```bash
# Scan specified range
./target/release/can_motor_scanner --start-id 1 --end-id 5

# Complete scan
./target/release/can_motor_scanner --start-id 1 --end-id 14

# Specify CAN channel
./target/release/can_motor_scanner --channel can0 --start-id 1 --end-id 5
```

### 3. Control de Velocidad
```bash
# Basic speed control
./target/release/velocity_acceleration_control --motor-id 1

# Specify channel
./target/release/velocity_acceleration_control --motor-id 1 --channel can0
```

### 4. Control de Posición
```bash
# Interactive mode
./target/release/angle_stream_control --motor-id 1 interactive

# Sine wave mode
./target/release/angle_stream_control --motor-id 1 sine --amplitude 1.57

# Step mode
./target/release/angle_stream_control --motor-id 1 step --target 1.57
```

### 5. Ejemplos de Código Rust

#### Código de Escaneo de Motores
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

Compilar y ejecutar:
```bash
# Save as scan_example.rs
rustc --extern livelybot_motor_sdk=target/release/liblivelybot_motor_sdk.rlib scan_example.rs
./scan_example
```

---

## 📡 Explicación Detallada del Protocolo

### Formato de Trama CAN
- **Tipo de Trama**: Trama extendida (ID de 29 bits)
- **Velocidad de Baudios**: 1Mbps
- **Longitud de Datos**: 8 bytes
- **Endianness**: Big endian

### Comandos del Protocolo Principal

#### 1. Comando de Escaneo de Motores (Ping)
```
CAN ID: 0x8000 | motor_id
Data: [0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50]
```
- `0x8000`: El bit alto indica necesidad de respuesta
- `motor_id`: ID del motor (1-127)
- `0x11`: Comando de lectura
- `0x00`: Dirección (leer modo del motor)

#### 2. Comando de Control de Velocidad (0xAD)
```
CAN ID: 0x00AD
Data: [PosL, PosH, VelL, VelH, AccL, AccH, 0x50, 0x50]
```
- `PosL/PosH`: Objetivo de posición (16-bit, FACTOR_POS=10000.0)
- `VelL/VelH`: Objetivo de velocidad (16-bit, FACTOR_VEL=4000.0)
- `AccL/AccH`: Objetivo de aceleración (16-bit, FACTOR_ACC=1000.0)
- `0x50`: Bytes de relleno

#### 3. Comando de Control de Posición (0x90)
```
CAN ID: 0x0090
Data: [PosL, PosH, VelL, VelH, TqeL, TqeH, 0x50, 0x50]
```
- `PosL/PosH`: Objetivo de posición (16-bit, FACTOR_POS=10000.0)
- `VelL/VelH`: Límite de velocidad (16-bit, FACTOR_VEL=4000.0)
- `TqeL/TqeH`: Límite de torque (16-bit, FACTOR_TQE=200.0)

### Coeficientes del Protocolo
| Parámetro | Valor | Descripción | Ejemplo |
|-----------|-------|-------------|---------|
| FACTOR_POS | 10000.0 | Factor de conversión de posición | 1.57 rad → 15700 |
| FACTOR_VEL | 4000.0 | Factor de conversión de velocidad | 5.0 rad/s → 20000 |
| FACTOR_ACC | 1000.0 | Factor de conversión de aceleración | 10.0 rad/s² → 10000 |
| FACTOR_TQE | 200.0 | Factor de conversión de torque | 2.0 Nm → 400 |
| MAGIC_POS | -32768 | Bandera de modo de velocidad | Valor de posición especial |

### Ejemplos de Conversión de Datos

#### Conversión de Posición
```python
# Radians → Protocol value
position_rad = 1.57  # 90 degrees
protocol_value = int(position_rad * FACTOR_POS)  # 15700

# Protocol value → Radians
protocol_value = 15700
position_rad = protocol_value / FACTOR_POS  # 1.57
```

#### Conversión de Velocidad
```python
# rad/s → Protocol value
velocity_rps = 5.0
protocol_value = int(velocity_rps * FACTOR_VEL)  # 20000

# Protocol value → rad/s
protocol_value = 20000
velocity_rps = protocol_value / FACTOR_VEL  # 5.0
```

---

## 🔧 Solución de Problemas

### Problemas Comunes y Soluciones

#### 1. La Interfaz CAN No Puede Iniciarse
```bash
# Error message
Error: Cannot find device can0

# Solution
sudo modprobe can
sudo modprobe can_raw
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### 2. Permisos Insuficientes
```bash
# Error message
Operation not permitted

# Solution 1: Add user to dialout group
sudo usermod -a -G dialout $USER
# Re-login for effect

# Solution 2: Run with sudo
sudo python3 can_motor_scanner.py
```

#### 3. No Se Pueden Escanear Motores
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

#### 4. Comunicación Inestable
```bash
# Check signal quality
candump can0 -tA
# View error frame count

# Adjust sampling point
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 1000000 sample-point 0.875
sudo ip link set can0 up
```

#### 5. Errores de Compilación
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

### Consejos de Depuración

#### 1. Usar Wireshark para Análisis de Comunicación CAN
```bash
# Install wireshark
sudo apt install wireshark

# Start packet capture
sudo wireshark -i can0
```

#### 2. Monitoreo en Tiempo Real del Estado del Motor
```bash
# Python continuous monitoring
python3 can_motor_scanner.py --monitor 60

# C++ real-time viewing
./can_motor_scanner 1 14 | grep "Found motor"
```

#### 3. Análisis de Protocolo
```python
# Send raw CAN commands
import can
bus = can.interface.Bus(channel='can0', interface='socketcan')
msg = can.Message(arbitration_id=0x8001, data=[0x11, 0x00, 0x50, 0x50, 0x50, 0x50, 0x50, 0x50])
bus.send(msg)
```

---

### Escenarios de Uso Recomendados
- **Python**: Prototipado rápido, verificación de algoritmos, experimentos educativos
- **C++**: Entorno de producción, requisitos de alto rendimiento, sistemas de control en tiempo real
- **Rust**: Entorno de producción, requisitos de seguridad de memoria, proyectos de mantenimiento a largo plazo

### Elegir el Lenguaje Adecuado
- **Principiantes**: Python - Simple y fácil de usar, rápido para comenzar
- **Desarrollo de Productos**: C++ - Alto rendimiento, control en tiempo real
- **Proyectos a Largo Plazo**: Rust - Seguridad de memoria, características de lenguaje moderno

### Recursos
- 📧 **Sitio Web Oficial del Motor**: https://hightorquerobotics.com/
- 🐛 **Retroalimentación de Problemas del Proyecto**: https://github.com/Seeed-Projects/HighTorque_Control/issue
- 🐛 **Interfaz Oficial del Motor**: https://github.com/HighTorque-Robotics/livelybot_hardware_sdk/

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
