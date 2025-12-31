---
description: Este wiki proporciona un tutorial para los motores de la serie Stackforce.
title: Motores Serie Stackforce
keywords:
- actuator
- motor
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010_homepage.webp
slug: /es/stackforce_series
last_update:
  date: 12/25/2025
  author: Li Shanghang
translation:
    skip: [zh-CN]
---

# Introducción a los Motores Stackforce X Serie

Este artículo presentará cómo comenzar con los motores de la serie Stackforce y cómo usarlos con C++ y Python en el reComputer Jetson Super.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Especificaciones

Aquí está la tabla completa con todos los parámetros llenos para todos los modelos de motor:

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>6010</th>
      <th>8108</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Voltaje Nominal</td><td>24V</td><td>24V</td></tr>
    <tr><td>Corriente Nominal</td><td>10.5A</td><td>7.5A</td></tr>
    <tr><td>Potencia Nominal</td><td>240W</td><td>180W</td></tr>
    <tr><td>Torque Nominal</td><td>5 Nm</td><td>7.5 Nm</td></tr>
    <tr><td>Torque Máximo</td><td>11 Nm</td><td>22 Nm</td></tr>
    <tr><td>Velocidad Nominal</td><td>120 RPM</td><td>110 RPM</td></tr>
    <tr><td>Velocidad Máxima</td><td>270 RPM</td><td>320 RPM</td></tr>
    <tr><td>Relación de Engranajes</td><td>8:1</td><td>8:1</td></tr>
    <tr><td>Protocolo de comunicación</td><td>MIT Protocol</td><td>MIT Protocol</td></tr>
    <tr><td>Modos de Control</td><td>Position, Velocity, Torque Control</td><td>Position, Velocity, Torque Control</td></tr>
    <tr><td>Diámetro Exterior</td><td>80 mm</td><td>97 mm</td></tr>
    <tr><td>Grosor</td><td>47 mm</td><td>46 mm</td></tr>
    <tr><td>Peso</td><td>392 g ±10%</td><td>395 g ±5%</td></tr>
    <tr><td>Resistencia de Fase</td><td>0.48 Ω ±10%</td><td>0.439 Ω ±10%</td></tr>
    <tr><td>Inductancia de Fase</td><td>368 μH ±10%</td><td>403 μH ±10%</td></tr>
  </tbody>
</table>

## Características Principales

1. **Salida de Alto Torque**
2. **Control en Modo MIT**
3. **Retroalimentación de Codificador Magnético**
4. **Diseño Compacto y Ligero**
5. **Soporte para Comunicación CAN Bus de Alta Velocidad**
6. **Aplicaciones Versátiles**

## Guía de Introducción
### Preparaciones Antes del Uso
**En una PC con Sistema Windows**
- [Manual del Producto](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf).
- Descargar [VOFA](https://www.vofa.plus/).

El CANID y CANMode del motor se modifican ambos a través del puerto serie. El motor se envía con un CANID predeterminado de 0x01 y CANMode de CAN2.0 a 1Mbps.

### Cableado del Puerto Serie
Conecte V, G, T, R al VCC (3.3V), GND, RX, TX del módulo de comunicación serie respectivamente (RX y TX deben estar conectados cruzados). Como se muestra en la figura a continuación:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### Modificando CANID
Configure la velocidad de baudios del puerto serie a 1Mbps.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

El CANID a enviar es 0x**, y el ID configurado es 0x**, con un límite máximo de 0x7F. Después de configurar exitosamente el CANID, se imprimirá el siguiente registro:

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

:::tip
Puede configurar el CANID:0x01 para facilitar las pruebas en el código posterior.
:::

### Modificando el Modo CAN
Envíe CANMODE:0 o CANMODE:1 a través del puerto serie.

CANMODE:0 representa el modo CAN2.0 (1Mbps), mientras que CANMODE:1 representa el modo CANFD (5Mbps).

La modificación exitosa del modo CAN se muestra en las figuras a continuación:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

:::tip
Puede configurar el CANMODE:0 para facilitar las pruebas en el código posterior.
:::

## Usando [reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started) para Controlar Motores
Las interfaces de comunicación CAN más comunes para motores en el mercado son **XT30 (2+2)** y **conectores JST**. Nuestros dispositivos **reComputer Mini Jetson Orin** y **reComputer Robotics** están equipados con **interfaces duales XT30 (2+2)** e **interfaces CAN basadas en JST**, proporcionando compatibilidad perfecta.

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg "/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg "/>  
</div>

Para información más detallada sobre el uso de CAN, consulte este [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can-).

### Habilitando la Interfaz CAN

**Paso 1:** Antes de usar CAN0 y CAN1, retire la cubierta inferior y configure las dos resistencias terminales de 120Ω en la posición ON.

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png " />
</div>

Apague el interruptor de la resistencia terminal de comunicación CAN de 120Ω integrada en el motor.

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/resistance_switch.png" />
</div>

:::tip
Si el Recomputer Mini no ha configurado la resistencia terminal de 120Ω en ON, puede elegir encender el interruptor de la resistencia terminal de comunicación CAN del motor.
:::

**Paso 2:** Conecte el motor directamente al CAN0 del reComputer Mini a través de la interfaz XT30 (2+2).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Hardware_connect.png" />
</div>

:::tip
Dado que [el diseño de la interfaz CAN del reComputer Mini](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1) es opuesto al de la interfaz CAN del motor, se requiere soldadura manual para invertir las líneas de datos.

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={700} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/MotorCAN.png" />
</div>

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/TX30.jpg" />
</div>

Considerando el alto voltaje y corriente requeridos por el motor, se recomienda comprar un adaptador de corriente de 24V 300W para alimentar el reComputer Mini para manejar un solo motor. Si se necesitan conectar más motores, se puede comprar un adaptador de corriente de `mayor potencia` según el requerimiento.

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/EN/Power_adapter.png" />
</div>
:::

:::danger
Esta fuente de alimentación es solo para aprendizaje y pruebas de un solo motor. Para múltiples motores, diseñe una placa de alimentación separada y aísle la fuente de alimentación de Jetson de la fuente de alimentación del motor para evitar que pase alta corriente directamente a través de Jetson.
:::

### Habilitando la Comunicación CAN de Jetson
Abra una terminal e ingrese el siguiente comando para poner el pin GPIO en alto para activar CAN0:
```bash
gpioset --mode=wait 0 43=0
```

Si usa CAN1 con la interfaz JST, ponga el pin 106 en alto.
```bash
gpioset --mode=wait 0 106=0
```

Mantenga esta terminal abierta, inicie una nueva terminal y configure CAN0.
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Configurando el Entorno C++ y Python

**Paso 1:** Clone el SDK.
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git 
```

**Paso 2:** El SDK del controlador requiere las siguientes dependencias. Para Debian Linux, se pueden instalar a través de los siguientes comandos:

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Si se necesitan enlaces de Python, instale adicionalmente Python 3, pip y pybind11:
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

Después de instalar las dependencias, siga los pasos a continuación para instalar el SDK del controlador como una biblioteca C++ o un paquete Python. Ambos usarán CMake para compilar el código C++.

## Control del Motor y Recepción de Datos

### C++

<details>
<summary>main.cpp</summary>
```cpp
#include <chrono>
#include <cstdint>
#include <cmath>
#include <cstdio>
#include <thread>
#include "CAN_comm.h"
#include "config.h"

MIT devicesState[4];

uint32_t sendNum; // for testing send speed
uint32_t recNum;

MIT MITCtrlParam;

uint16_t sendCounter = 0;
bool motorEnable = true;
int receivedNumber = 0;
uint64_t prev_ts = 0;
float t = 0.0f;
float targetJointAngle = 0.0f; // Target joint angle (can be modified at runtime via input)

namespace {
uint64_t micros_steady(){
  using namespace std::chrono;
  return duration_cast<microseconds>(steady_clock::now().time_since_epoch()).count();
}
}

void setup() {
  std::printf("SF Motor Control (Jetson) start\n");
  CANInit();
  enable(0x01); // Enable motor with ID 0x01  <- Change ID to control different motors
  prev_ts = micros_steady();
  t = 0.0f;
}

uint16_t printCount = 0;
uint16_t recCount = 0;

void loop() {

  recCANMessage();

  // Check for new joint angle input
  // (Check once every 1000 loops to avoid frequent blocking input calls)
  static uint16_t inputCheckCount = 0;
  if(++inputCheckCount >= 1000){
    inputCheckCount = 0;
    float newAngle;
    if(std::scanf("%f", &newAngle) == 1){
      targetJointAngle = newAngle;
      std::printf("Target joint angle updated: %.3f rad\n", newAngle);
    }
  }

  static int IDswitch = 0x01; // <- Change ID to control different motors
  uint64_t current_ts = micros_steady();

  /*
   * Function:
   *   Update control parameters based on time difference and send MIT command.
   *
   * Parameters:
   *   - current_ts: current timestamp
   *   - prev_ts   : previous timestamp
   *   - t         : time variable used for sine/cosine calculations
   *   - MITCtrlParam:
   *       Control parameter structure including position, velocity,
   *       position gain (Kp), velocity gain (Kd), and torque
   *   - IDswitch  : motor ID selector
   *
   * Return:
   *   None
   */
  if(current_ts - prev_ts >= 1000){ // 1 ms control period
    // Update time variable (increase by 1 ms)
    t += 0.001;

    // Set control parameters:
    // target position, target velocity, position gain, velocity gain, and torque
    MITCtrlParam.pos = targetJointAngle;
    MITCtrlParam.vel = 0;
    MITCtrlParam.kp  = 0.5;
    MITCtrlParam.kd  = 0.3;
    MITCtrlParam.tor = 0;

    // Update previous timestamp
    prev_ts = current_ts;

    // IDswitch++;
    // If IDswitch exceeds 0x04, reset it to 0x01
    // if(IDswitch > 0x04){
    //   IDswitch = 0x01;
    // }

    sendMITCommand(IDswitch, MITCtrlParam); // Send MIT command

    printCount++;
    if(printCount >= 100){
      printCount = 0;
      // Only print when IDswitch is 0x01
      // Print commanded position/velocity and actual motor position/velocity
      if(IDswitch == 0x01){
        std::printf( "[CMD] pos: %6.3f rad vel: %6.3f rad/s | " "[FB] pos: %6.3f rad vel: %6.3f rad/s\n", MITCtrlParam.pos, MITCtrlParam.vel, devicesState[IDswitch - 1].pos, devicesState[IDswitch - 1].vel );
      }
    }
  }

  std::this_thread::sleep_for(std::chrono::milliseconds(1));
}

int main(){
  setup();

  while(true){
    loop();
  }

  disable(0x01); // Disable motor with ID 0x01
  return 0;
}
```

</details>

```bash
cd build
cmake ..
make
```

El ejecutable compilado se ubicará en `build/sfmotor_control`. Ejecuta el programa:

```bash
./sfmotor_control
```

El programa por defecto controla el motor con ID 0x01. Durante la operación, puedes ingresar el valor del ángulo objetivo (en radianes) a través del teclado. También recibe datos de retroalimentación sobre el ángulo y la velocidad angular del motor.

### Python

<details>
<summary>main.py</summary>
```python
import sys
import time
import select

# Import core control module (assumes sf_can_controller.py is in the same directory)
from sf_can_controller import MotorController 

# --- Core Configuration ---
IFACE = "can0"        
MOTOR_ID = 1         # <- Change ID to control different motors
UPDATE_RATE_HZ = 100.0 
PRINT_EVERY = 2     
INITIAL_TARGET_DEG = 0.0

# --- Main Control Loop ---
def run_simple_test() -> None:
    """Run a simplified position control loop."""

    # 1. Initialization
    update_period = 1.0 / UPDATE_RATE_HZ
    target_rad = INITIAL_TARGET_DEG

    KP, KD = 0.5, 0.3  # Default MIT parameters

    controller = MotorController(interface=IFACE, motor_id=MOTOR_ID)
    print(f"--- SF Motor Test Start ---")
    print(f"Interface: {IFACE}, ID: {MOTOR_ID}, Rate: {UPDATE_RATE_HZ} Hz")

    # 2. Enable motor
    controller.enable()

    last_send_time = time.perf_counter()
    print_counter = 0

    inputCheckCount = 0

    # 3. Main loop
    while True:
        controller.poll_rx()
        current_state = controller.get_motor_state()

        now = time.perf_counter()

        # --- Periodic input check (every 500 loops) ---
        inputCheckCount += 1
        if inputCheckCount >= 500:
            inputCheckCount = 0

            # Blocking I/O waiting for user input (this will pause the control loop)
            # Note: If the input is not a number, a ValueError will be raised.
            line = input("Please enter target joint angle: ").strip()
            if line:
                angle_deg = float(line)
                target_rad = angle_deg
                print(f"Target joint angle updated: {angle_deg:.3f} deg")

        # Periodically send MIT command
        if now - last_send_time >= update_period:
            last_send_time = now

            # Send target position command
            controller.send_mit_command(
                pos=target_rad,
                vel=0.0,
                kp=KP,
                kd=KD,
                tor=0.0
            )

            # Print motor state
            print_counter += 1
            if print_counter >= PRINT_EVERY:
                print_counter = 0
                print(
                    f"Cmd={target_rad:.2f} | "
                    f"Pos={current_state.pos:.2f} (Vel={current_state.vel:.2f})"
                )

        time.sleep(0.001)


if __name__ == "__main__":
    # Run test
    run_simple_test()
```
</details>

El script de Python se encuentra en el directorio `script/` y puede ejecutarse directamente sin compilación.

```bash
python main.py 
```

El programa por defecto controla el motor con ID 0x01. Durante la operación, puedes ingresar el valor del ángulo objetivo (en radianes) a través del teclado. También recibe datos de retroalimentación sobre el ángulo y la velocidad angular del motor.


## Citas

[Step 6010](https://wiki.seeedstudio.com/es/wiki/robotics/Actuator/stackforce/Citation/6010.stp)  

[Step 8108](https://wiki.seeedstudio.com/es/wiki/robotics/Actuator/stackforce/Citation/8108.stp)

[8108 Motor_Curve](https://wiki.seeedstudio.com/es/wiki/robotics/Actuator/stackforce/Citation/8108Motor_Curve.png)

[6010Motor_Document.pdf](https://wiki.seeedstudio.com/es/wiki/robotics/Actuator/stackforce/Citation/6010Motor_Document.pdf)

[8108Motor_Document.pdf](https://wiki.seeedstudio.com/es/wiki/robotics/Actuator/stackforce/Citation/8108Motor_Document.pdf)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
