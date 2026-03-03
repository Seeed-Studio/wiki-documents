---
description: Este wiki proporciona la Guía Completa de Control de Motor RobStride
title: Guía Completa de Control de Motor RobStride
keywords:
- actuador
- motor
- brazo
- robótica
image:   https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /robstride_control
last_update:
  date: 11/19/2025
  author: Tienjuiwong
translation:
    skip: [zh-CN]
---

# Biblioteca de Control RobStride - Documentación Técnica Completa

> Línea base de control de motor RobStride de alto rendimiento con implementaciones en Python, C++, Rust y Arduino

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20ESP32-lightgrey.svg)
![Language](https://img.shields.io/badge/languages-Python%20%7C%20C%2B%2B%20%7C%20Rust%20%7C%20Arduino-orange.svg)

## 📋 Tabla de Contenidos

- [Descripción General del Proyecto](#descripción-general-del-proyecto)
- [Modelos de Motor Compatibles](#modelos-de-motor-compatibles)
- [Arquitectura Técnica](#arquitectura-técnica)
- [Inicio Rápido](#inicio-rápido)
- [Implementación en Python](#implementación-en-python)
- [Implementación en C++](#implementación-en-c)
- [Implementación en Rust](#implementación-en-rust)
- [Implementación en Arduino](#implementación-en-arduino)
- [Detalles del Protocolo](#detalles-del-protocolo)
- [Optimización del Rendimiento](#optimización-del-rendimiento)
- [Solución de Problemas](#solución-de-problemas)
- [Guía de Desarrollo](#guía-de-desarrollo)

---

## 🎯 Descripción General del Proyecto

La Biblioteca de Control RobStride es una biblioteca de control de motores de alto rendimiento diseñada específicamente para los motores de la serie RobStride. Este proyecto proporciona una solución completa de control de motores que admite múltiples lenguajes de programación y plataformas de hardware, adecuada para robótica, control de automatización, posicionamiento de precisión y diversos otros escenarios de aplicación.

### Funciones Principales

- ✅ **Compatibilidad con múltiples lenguajes**: Implementaciones en Python, C++, Rust y Arduino
- ✅ **Múltiples modos de control**: MIT Mode, Position Mode, Speed Mode
- ✅ **Rendimiento en tiempo real**: Frecuencia de control de 50-200Hz con baja latencia
- ✅ **Estabilidad de grado industrial**: Admite funcionamiento continuo a largo plazo
- ✅ **Compatibilidad multiplataforma**: Sistemas Linux, ESP32 y otras plataformas embebidas
- ✅ **Interfaz estandarizada**: Diseño de API unificada para facilitar el cambio de lenguaje

### Ventajas Técnicas

- **Alto rendimiento**: Comunicación directa SocketCAN sin sobrecarga de middleware
- **Seguridad de memoria**: La implementación en Rust proporciona garantías de seguridad de memoria
- **Control en tiempo real**: La implementación en C++ alcanza una frecuencia de control de 200Hz
- **Facilidad de uso**: La implementación en Python proporciona una interfaz interactiva amigable
- **Amigable para sistemas embebidos**: La implementación en Arduino es adecuada para entornos con recursos limitados

---

## Modelos de Motor Compatibles

| Modelo | Par Máximo | Velocidad Máxima | Rango KP | Rango KD |
|--------|------------|------------------|----------|----------|
| RS-00 | 17 Nm | 50 rad/s | 500.0 | 5.0 |
| RS-01 | 17 Nm | 44 rad/s | 500.0 | 5.0 |
| RS-02 | 17 Nm | 44 rad/s | 500.0 | 5.0 |
| RS-03 | 60 Nm | 50 rad/s | 5000.0| 100.0|
| RS-04 | 120 Nm| 15 rad/s | 5000.0| 100.0|
| RS-05 | 17 Nm | 33 rad/s | 500.0 | 5.0 |
| RS-06 | 60 Nm | 20 rad/s | 5000.0| 100.0|

---

## Arquitectura Técnica

### Diagrama de Arquitectura del Sistema

```mermaid
graph TB
    A[Application Layer] --> B[Control Library]
    B --> C[CAN Protocol Layer]
    C --> D[Hardware Interface Layer]
    D --> E[CAN Hardware]

    B --> F[Python Implementation]
    B --> G[C++ Implementation]
    B --> H[Rust Implementation]
    B --> I[Arduino Implementation]

    C --> J[MIT Mode]
    C --> K[Position Mode]
    C --> L[Speed Mode]
```

### Protocolo de Comunicación

- **Capa física**: Estándar CAN 2.0B
- **Capa de enlace de datos**: Formato de trama extendida (ID de 29 bits)
- **Capa de aplicación**: Protocolo personalizado RobStride
- **Velocidad de transmisión**: 1 Mbps

### Detalles de los Modos de Control

#### 1. MIT Mode (Mode 0)
- **Características**: Control directo de par con alta velocidad de respuesta
- **Casos de uso**: Aplicaciones que requieren respuesta rápida
- **Parámetros de control**: P, D, T, Posición, Velocidad

#### 2. Position Mode (Mode 1)
- **Características**: Control de lazo cerrado de posición con posicionamiento preciso
- **Casos de uso**: Posicionamiento de precisión, control de articulaciones de robots
- **Parámetros de control**: Posición, Velocidad, Par Máximo

#### 3. Speed Mode (Mode 2)
- **Características**: Control de lazo cerrado de velocidad con regulación estable de velocidad
- **Casos de uso**: Aplicaciones que requieren velocidad constante
- **Parámetros de control**: Velocidad, Par Máximo

---

## Inicio Rápido

### Configuración del Entorno

```bash
# Ubuntu/Debian system dependencies
sudo apt-get update
sudo apt-get install -y \
    build-essential cmake \
    python3 python3-pip \
    rustc cargo \
    can-utils \
    gcc-avr avr-libc arduino-core

# CAN interface setup
sudo modprobe can
sudo ip link set can0 type can bitrate 1000000
sudo ip link set up can0
```

### Clonar el Proyecto

```bash
git clone https://github.com/Seeed-Projects/RobStride_Control.git
cd RobStride_Control
```

### Elige la Implementación en tu Lenguaje

| Lenguaje | Frecuencia de Control | Uso de Memoria | Casos de Uso |
|----------|------------------------|----------------|-------------|
| Python | 50-100Hz | ~50MB | Prototipado rápido, validación de algoritmos |
| C++ | 200Hz | ~10MB | Aplicaciones de alto rendimiento, control en tiempo real |
| Rust | 150Hz | ~8MB | Crítico para la seguridad, requisitos de seguridad de memoria |
| Arduino | 100Hz | ~2KB | Sistemas embebidos, entornos con recursos limitados |

---

## Implementación en Python

### Instalar Dependencias

```bash
cd python
pip install -r requirements.txt
```

### Uso Básico

```python
#!/usr/bin/env python3
from robstride_dynamics import RobstrideBus

# Initialize CAN bus
bus = RobstrideBus('can0')

# Scan for motors
motors = bus.scan_channel()
print(f"Found motors: {motors}")

# MIT mode position control
motor_id = 1
target_position = 0.0

while True:
    # Send control command
    bus.write_operation_frame(
        motor_id=motor_id,
        p_des=target_position,
        v_des=0.0,
        kp=30.0,
        kd=0.5,
        t_ff=0.0
    )

    # Read status
    response = bus.read_frame(motor_id)
    print(f"Position: {response['position']:.3f} rad")

    time.sleep(0.01)  # 100Hz control frequency
```

### Interfaz Interactiva

```bash
# Run MIT position control (with interactive interface)
python3 src/position_control.py 1

# Run speed control
python3 src/velocity_control.py 1
```

### Comandos Interactivos

```bash
# Interactive commands in MIT mode
kp 30.0     # Set position gain
kd 0.5      # Set velocity gain
pos 1.0     # Set target position
vel 2.0     # Set target velocity
tor 5.0     # Set feed-forward torque
quit        # Exit program
```

### Funciones Avanzadas

```python
# Multi-motor synchronous control
motors = [1, 2, 3, 4]
bus.enable_motors(motors)

# Synchronous parameter setting
for motor_id in motors:
    bus.set_motor_param(motor_id, kp=50.0, kd=1.0)

# Synchronous control
while True:
    for i, motor_id in enumerate(motors):
        position = math.sin(time.time() + i * math.pi/2)
        bus.write_operation_frame(motor_id, position, 0, 50.0, 1.0, 0)
```

---

## Implementación en C++

### Compilación

```bash
cd cpp
mkdir build && cd build
cmake ..
make
```

### Uso Básico

```cpp
#include <iostream>
#include <thread>
#include <chrono>
#include <atomic>

class RobStrideMotor {
private:
    int can_socket;
    int motor_id;
    std::atomic<bool> running;

public:
    RobStrideMotor(int id) : motor_id(id), running(false) {
        can_socket = socket(PF_CAN, SOCK_RAW, CAN_RAW);
        // ... initialization code
    }

    void start() {
        running = true;
        std::thread control_thread(&RobStrideMotor::control_loop, this);
        control_thread.detach();
    }

    void set_position(double position, double kp, double kd) {
        uint8_t data[8];
        // ... pack data
        struct can_frame frame;
        frame.can_id = 0x200 + motor_id;
        frame.can_dlc = 8;
        memcpy(frame.data, data, 8);

        write(can_socket, &frame, sizeof(frame));
    }
};
```

### Optimización del Rendimiento

```cpp
// High-performance configuration
static constexpr int CONTROL_FREQ = 200;  // 200Hz
static constexpr auto CONTROL_PERIOD =
    std::chrono::microseconds(1000000 / CONTROL_FREQ);

// Real-time control loop
void control_loop() {
    auto next_time = std::chrono::steady_clock::now();

    while (running) {
        // Control logic
        send_command();

        // Precise timing control
        next_time += CONTROL_PERIOD;
        std::this_thread::sleep_until(next_time);
    }
}
```

### Ejecución

```bash
# Requires administrator privileges
sudo ./build/robstride-mit-position 1
```

---

## Implementación en Rust

### Compilación

```bash
cd rust
cargo build --release
```

### Uso Básico

```rust
use socketcan::{CanSocket, CanFrame, EmbeddedFrame};
use std::sync::{Arc, Mutex};
use std::thread;

struct RobStrideController {
    socket: Arc<Mutex<CanSocket>>,
    motor_id: u8,
}

impl RobStrideController {
    fn new(interface: &str, motor_id: u8) -> Result<Self, Box<dyn std::error::Error>> {
        let socket = CanSocket::open(interface)?;
        Ok(Self {
            socket: Arc::new(Mutex::new(socket)),
            motor_id,
        })
    }

    fn send_position_command(
        &self,
        position: f32,
        velocity: f32,
        kp: f32,
        kd: f32,
        torque: f32,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let data: [u8; 8] = [
            (position * 1000.0) as u8,
            ((position * 1000.0) / 256.0) as u8,
            ((position * 1000.0) / 65536.0) as u8,
            ((position * 1000.0) / 16777216.0) as u8,
            (velocity * 1000.0) as u8,
            (kp * 5.0) as u8,
            (kd * 500.0) as u8,
            (torque * 10.0) as u8,
        ];

        let frame = CanFrame::new(
            socketcan::CanId::new(0x200 + self.motor_id as u32).unwrap(),
            &data,
        )?;

        let socket = self.socket.lock().unwrap();
        socket.write_frame(&frame)?;
        Ok(())
    }
}
```

### Funciones de Seguridad de Memoria

```rust
// Multi-thread safe shared CAN interface
let controller = Arc::new(RobStrideController::new("can0", motor_id)?);

// Control thread
let ctrl_clone = Arc::clone(&controller);
thread::spawn(move || {
    loop {
        ctrl_clone.send_command()?;
        thread::sleep(Duration::from_millis(10));
    }
});

// Monitoring thread
let monitor_clone = Arc::clone(&controller);
thread::spawn(move || {
    loop {
        let status = monitor_clone.read_status()?;
        println!("Motor status: {:?}", status);
        thread::sleep(Duration::from_millis(50));
    }
});
```

### Ejecutar

```bash
cargo run --release -- 1
```

---

## Implementación en Arduino

### Configuración de hardware

```
ESP32           CAN Transceiver      RobStride Motor
GPIO5   <--->   TX                    CAN H
GPIO4   <--->   RX                    CAN L
5V      <--->   VCC                   Power Supply
GND     <--->   GND                   Ground
```

### Código básico

```cpp
#include <ESP32-TWAI-CAN.h>

class RobStrideMotor {
private:
    TWAI_CAN can;
    uint8_t motor_id;

public:
    RobStrideMotor(uint8_t id) : motor_id(id) {}

    bool begin() {
        can.begin(TWAI_SPEED_1000KBPS, 4, 5);  // GPIO4=RX, GPIO5=TX
        return true;
    }

    void send_position_command(float position, float velocity, float kp, float kd, float torque) {
        can_frame_t frame;
        frame.identifier = 0x200 + motor_id;
        frame.extd = true;
        frame.data_length_code = 8;

        // Pack data
        int32_t pos_int = (int32_t)(position * 1000.0);
        frame.data[0] = pos_int & 0xFF;
        frame.data[1] = (pos_int >> 8) & 0xFF;
        frame.data[2] = (pos_int >> 16) & 0xFF;
        frame.data[3] = (pos_int >> 24) & 0xFF;
        frame.data[4] = (uint8_t)(velocity * 1000.0);
        frame.data[5] = (uint8_t)(kp * 5.0);
        frame.data[6] = (uint8_t)(kd * 500.0);
        frame.data[7] = (uint8_t)(torque * 10.0);

        can.writeFrame(&frame);
    }

    void enable_motor() {
        can_frame_t frame;
        frame.identifier = 0x200 + motor_id;
        frame.extd = true;
        frame.data_length_code = 8;
        memset(frame.data, 0xFF, 8);  // Enable command
        can.writeFrame(&frame);
    }
};
```

### Ejemplo de control con Arduino

```cpp
RobStrideMotor motor(1);

void setup() {
    Serial.begin(115200);
    motor.begin();

    // Enable motor
    motor.enable_motor();
    delay(100);

    Serial.println("Motor enabled, starting control loop...");
}

void loop() {
    static float phase = 0.0;
    float target_pos = sin(phase) * 3.14159;  // ±π radians

    motor.send_position_command(target_pos, 0, 30.0, 0.5, 0);

    phase += 0.01;
    delay(10);  // 100Hz control frequency

    if (phase > 2 * 3.14159) {
        phase = 0;
    }
}
```

---

## Detalles del protocolo

### Formato de trama CAN

| Campo | Tamaño | Descripción |
|-------|------|-------------|
| ID | 29 bits | Identificador de trama extendida |
| DLC | 4 bits | Longitud de datos (fijada en 8) |
| Data | 8 bytes | Datos de control |
| CRC | 16 bits | Comprobación de redundancia cíclica |

### Reglas de asignación de ID

- **0x200 + ID**: Comandos de control en modo MIT
- **0x300 + ID**: Comandos de control en modo posición
- **0x400 + ID**: Comandos de control en modo velocidad
- **0x500 + ID**: Consultas de estado del sistema
- **0x600 + ID**: Comandos de configuración del sistema

### Formato del paquete de datos

#### Comando de control en modo MIT (8 bytes)

```c
struct mit_command_t {
    int32_t p_des;     // Target position (rad)
    int16_t v_des;     // Target velocity (rad/s)
    uint16_t kp;       // Position gain
    uint16_t kd;       // Velocity gain
    int16_t t_ff;      // Feed-forward torque (Nm)
};
```

#### Retroalimentación de estado del motor (8 bytes)

```c
struct motor_status_t {
    int32_t position;  // Current position (rad)
    int16_t velocity;  // Current velocity (rad/s)
    int16_t torque;    // Current torque (Nm)
    uint8_t mode;      // Current mode
    uint8_t error;     // Error code
};
```

### Temporización de comunicación

```mermaid
sequenceDiagram
    participant Host
    participant Motor

    Host->>Motor: Enable Command (0x200+ID)
    Motor-->>Host: Enable Ack

    loop Control Loop
        Host->>Motor: Position Command (100Hz)
        Motor-->>Host: Status Feedback
    end

    Host->>Motor: Disable Command
    Motor-->>Host: Disable Ack
```

---

## Optimización del rendimiento

### Ajuste del sistema

#### 1. Optimización de parámetros del kernel de Linux

```bash
# Real-time priority setting
echo 'KERNEL=="can0", MODE="0666"' > /etc/udev/rules.d/99-can.rules

# CPU affinity binding
sudo taskset -cp 0-3 $(pgrep robstride-control)

# Memory locking (optional)
sudo sysctl -w vm.swappiness=1
```

#### 2. Planificación en tiempo real

```cpp
#include <sched.h>
#include <sys/mman.h>

struct sched_param param;
param.sched_priority = 99;
sched_setscheduler(0, SCHED_FIFO, &param);

mlockall(MCL_CURRENT | MCL_FUTURE);
```

### Pruebas de rendimiento

| Lenguaje | Frecuencia de control | Uso de CPU | Latencia | Uso de memoria |
|----------|-------------------|-----------|---------|--------------|
| Python | 50-100Hz | 15-20% | 2-5ms | ~50MB |
| C++ | 200Hz | 5-8% | 0.5-1ms | ~10MB |
| Rust | 150Hz | 8-12% | 1-2ms | ~8MB |
| Arduino | 100Hz | 40-60% | 1-3ms | ~2KB |

### Consejos de optimización

#### Optimización en Python

```python
# Use C extensions for acceleration
from robstride_dynamics import RobstrideBus

# Pre-allocate arrays
import numpy as np
position_buffer = np.zeros(1000)

# Async I/O
import asyncio
async def control_loop():
    while True:
        await send_command()
        await asyncio.sleep(0.01)
```

#### Optimización en C++

```cpp
// Zero-copy optimization
static_assert(sizeof(motor_command_t) == 8, "Command size mismatch");

// Memory pool
class MemoryPool {
    std::array<motor_command_t, 100> pool;
    std::mutex mutex;
public:
    motor_command_t* acquire() { /* ... */ }
    void release(motor_command_t* ptr) { /* ... */ }
};
```

#### Optimización en Rust

```rust
// Pre-allocate capacity
let mut frames: Vec<CanFrame> = Vec::with_capacity(1000);

// Avoid heap allocation
#[repr(C, packed)]
struct MotorCommand {
    p_des: i32,
    v_des: i16,
    kp: u16,
    kd: u16,
    t_ff: i16,
}
```

---

## Solución de problemas

### Problemas comunes

#### 1. Fallo de comunicación CAN

```bash
# Check CAN interface status
ip -details link show can0

# Monitor CAN traffic
candump can0

# Reset CAN interface
sudo ip link set can0 down
sudo ip link set can0 up type can bitrate 1000000
```

#### 2. El motor no responde

```bash
# Scan devices on bus
python3 -c "
from robstride_dynamics import RobstrideBus
bus = RobstrideBus('can0')
motors = bus.scan_channel()
print(f'Found motors: {motors}')
"
```

#### 3. Problemas de rendimiento

```bash
# Check CPU usage
top -p $(pgrep robstride-control)

# Check real-time
sudo chrt -f 99 $(pgrep robstride-control)
```

### Códigos de error

| Código | Descripción | Solución |
|------|-------------|----------|
| 0x01 | Tiempo de espera de comunicación | Comprueba la conexión CAN |
| 0x02 | Parámetro fuera de rango | Comprueba los rangos de parámetros de control |
| 0x03 | Sobrecorriente del motor | Comprueba la carga y los límites de par |
| 0x04 | Desbordamiento de posición | Comprueba los límites y la posición objetivo |
| 0x05 | Temperatura demasiado alta | Comprueba la refrigeración y la carga |

### Herramientas de depuración

```bash
# Real-time CAN bus monitoring
candump -t A can0

# Send test frame
cansend can0 211#FFFFFFFF

# Network topology detection
canbusload can0@1000000

# Error statistics
cangen can0 -I 211 -D r
```

---

## Guía de desarrollo

### Estructura del proyecto

```
RobStride_Control/
├── cpp/                  # C++ implementation
│   ├── src/             # Source code
│   ├── include/         # Header files
│   ├── tests/           # Test code
│   └── examples/        # Example code
├── python/              # Python implementation
│   ├── src/             # Source code
│   ├── examples/        # Example code
│   └── tests/           # Test code
├── rust/                # Rust implementation
│   ├── src/             # Source code
│   ├── examples/        # Example code
│   └── tests/           # Test code
├── arduino/             # Arduino implementation
│   └── mi_motor_control/# ESP32 library
├── docs/                # Documentation
├── scripts/             # Utility scripts
└── tools/               # Helper tools
```

### Guía para contribuir

1. **Estilo de código**
   - Python: Sigue PEP 8
   - C++: Sigue Google C++ Style Guide
   - Rust: Usa rustfmt
   - Arduino: Sigue Arduino Style Guide

2. **Convención de commits**
   ```
   feat: Add new feature
   fix: Bug fix
   docs: Update documentation
   style: Code formatting changes
   refactor: Code refactoring
   test: Add tests
   chore: Build process or auxiliary tool changes
   ```

3. **Requisitos de pruebas**
   ```bash
   # Run all tests
   python3 -m pytest python/tests/
   cd cpp && make test
   cd rust && cargo test
   ```

### Scripts de compilación

```bash
#!/bin/bash
# scripts/build-all.sh

echo "Building all implementations..."

# Python
cd python
python3 setup.py build
cd ..

# C++
cd cpp
mkdir -p build && cd build
cmake ..
make -j$(nproc)
cd ../..

# Rust
cd rust
cargo build --release
cd ..

# Arduino (requires Arduino IDE)
echo "Arduino build requires Arduino IDE"
echo "Open arduino/mi_motor_control/mi_motor_control.ino"

echo "Build completed!"
```

### Guía de despliegue

#### Ubuntu/Debian

```bash
# Install dependencies
sudo apt-get install -y build-essential can-utils

# Build C++ version (fastest)
cd cpp/build
sudo make install

# Create system service
sudo cp scripts/robstride.service /etc/systemd/system/
sudo systemctl enable robstride
sudo systemctl start robstride
```

#### Docker

```dockerfile
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    build-essential cmake \
    python3 python3-pip \
    rustc cargo \
    can-utils

WORKDIR /app
COPY . .

# Build all versions
RUN scripts/build-all.sh

CMD ["./cpp/build/robstride-mit-position", "1"]
```

---

## Recursos

- **URL del proyecto**: https://github.com/Seeed-Projects/RobStride_Control
- **Reporte de incidencias**: https://github.com/Seeed-Projects/RobStride_Control/issues
- **Responsable**: @tianrking


---

## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
