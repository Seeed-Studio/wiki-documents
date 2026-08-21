---
description: Crea un enlace inalámbrico de teleoperación ROS 2 de baja latencia para un seguidor SO-ARM101 usando el adaptador de bus de servos XIAO ESP32-C3 y micro-ROS sobre Wi‑Fi UDP.
title: Teleoperación inalámbrica de SO-ARM101 con XIAO ESP32-C3 y micro-ROS
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
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/es/soarm101_xiao_microros_wireless_teleoperation/
---

# Teleoperación inalámbrica de SO-ARM101 con XIAO ESP32-C3 y micro-ROS

:::note Community Contribution
Este tutorial es una contribución de la comunidad de [@linao681](https://github.com/linao681). ¡Gracias por compartir este proyecto con la comunidad de Seeed Studio!
:::

## Introducción

Este tutorial muestra cómo controlar de forma inalámbrica un seguidor SO-ARM101 desde un líder SO-ARM101. El líder está conectado a un ordenador con Ubuntu mediante una placa controladora de bus de servos USB estándar. El seguidor utiliza el adaptador de bus de servos Seeed Studio XIAO ESP32-C3 y se comunica con ROS 2 a través de micro-ROS sobre Wi‑Fi UDP.

La implementación proporciona:

- retroalimentación de las seis articulaciones del seguidor en `/joint_states`;
- comandos para las seis articulaciones del seguidor en `/joint_command`;
- mapeo de articulaciones de líder a seguidor de LeRobot;
- un apretón de manos de inicio que evita un salto inesperado de posición;
- comprobaciones de calibración, límites de articulación, paso de comando y estado del bus;
- comprobaciones automáticas previas al vuelo e inicio de teleoperación con un solo comando.

El código fuente completo está disponible en el [repositorio soarm101-drone-teleop](https://github.com/linao681/soarm101-drone-teleop).

:::note

Este proyecto se desarrolló como un prototipo probado en tierra para una futura demostración de SO-ARM101 montado en un dron. Esta guía solo cubre la comunicación del brazo robótico y el enlace de teleoperación. No proporciona un sistema de control o seguridad certificado para vuelo.

:::

## Arquitectura del sistema

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

El PC y el XIAO deben estar conectados a la misma red local. Para una demostración se puede usar un punto de acceso de un teléfono o un punto de acceso dedicado de 2,4 GHz.

## Hardware

- 1 × SO-ARM101 líder
- 1 × SO-ARM101 seguidor
- 1 × placa controladora de bus de servos USB estándar para el líder
- 1 × adaptador de bus de servos Seeed Studio XIAO ESP32-C3 para el seguidor
- 2 × fuentes de alimentación para el brazo con la potencia adecuada
- 1 × ordenador con Ubuntu 22.04
- 1 × red Wi‑Fi de 2,4 GHz
- Cables USB para calibración y flasheo de firmware

Este firmware de referencia se probó con el seguidor SO-ARM101 estándar de 5 V usando seis servos STS3215 con número de modelo `777`.

:::danger

- Desconecta la alimentación de los servos antes de cambiar cualquier cable de servo.
- Usa el voltaje especificado para tu versión exacta de SO-ARM101. No conectes una fuente de 12 V a un brazo de 5 V.
- El USB no proporciona suficiente potencia para los servos.
- Realiza la primera prueba en un banco de trabajo estable con una desconexión clara de emergencia de la alimentación.
- Si haces pruebas cerca de un dron, retira las hélices.

:::

## Requisitos de software

La configuración del host probada es:

- Ubuntu 22.04
- ROS 2 Humble
- LeRobot con soporte para Feetech
- micro-ROS Agent
- Python 3.10
- PlatformIO

Instala micro-ROS Agent y PlatformIO si aún no están disponibles:

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

Sigue la [guía de LeRobot para SO-ARM100/101](https://wiki.seeedstudio.com/es/lerobot_so100m_new/) para instalar LeRobot y configurar los IDs de los servos antes de continuar.

## Paso 1: Clonar el proyecto

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

Las rutas importantes del proyecto son:

```text
firmware/xiao_soarm/          PlatformIO firmware for the wireless follower
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

El repositorio incluye un `libmicroros.a` precompilado para la arquitectura RISC‑V del ESP32-C3, por lo que un usuario normal no necesita compilar micro-ROS de forma cruzada.

## Paso 2: Calibrar ambos brazos

Calibra primero el seguidor con una controladora de bus de servos USB estándar. Sustituye `/dev/ttyACM0` por el puerto correcto:

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=follower_recal \
  --robot.calibration_dir="$PWD/cali"
```

Luego conecta y calibra el líder:

```bash
python -m lerobot.scripts.lerobot_calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM0 \
  --teleop.id=leader_recal \
  --teleop.calibration_dir="$PWD/cali"
```

Esto crea:

```text
cali/follower_recal.json
cali/leader_recal.json
```

:::warning

Los valores de calibración son específicos de un brazo físico. No controles otro seguidor con los valores de calibración incluidos como ejemplo en el repositorio.

:::

### Copiar la calibración del seguidor en el firmware

El XIAO valida la EEPROM de los servos antes de habilitar el par. Abre:

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

Sustituye estos tres arrays por los valores de tu `cali/follower_recal.json`:

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

El orden esperado es:

```text
shoulder_pan, shoulder_lift, elbow_flex,
wrist_flex, wrist_roll, gripper
```

El siguiente comando imprime los tres arrays en el orden correcto:

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

## Paso 3: Configurar el Wi‑Fi

Conecta el ordenador con Ubuntu a la red Wi‑Fi que usará el XIAO. Busca la dirección IPv4 del ordenador:

```bash
ip -4 address
```

Entra en el directorio del firmware y crea el archivo de configuración privada:

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

Edita `src/wifi_config.h`:

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
const char* AGENT_IP = "YOUR_UBUNTU_PC_IP";
```

`wifi_config.h` es ignorado por Git y nunca debe subirse a un repositorio público.

:::tip

El ESP32-C3 usa Wi‑Fi de 2,4 GHz. Si un punto de acceso de teléfono admite ambas bandas, selecciona el modo de compatibilidad o de 2,4 GHz.

:::

## Paso 4: Compilar y flashear el XIAO

Conecta el XIAO al ordenador mediante USB y luego ejecuta:

```bash
python3 -m platformio run
python3 -m platformio run --target upload
python3 -m platformio device monitor --baud 115200
```

Alimenta el brazo seguidor con su fuente externa. Un arranque correcto contiene mensajes similares a:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` significa que respondieron los seis IDs de servos. Si la calibración no coincide, el firmware sigue informando del estado pero rechaza los comandos de movimiento.

Después de flashear, el cable USB solo es necesario para el monitor serie cuando el XIAO está alimentado correctamente por el adaptador. Mantén conectada la alimentación externa de los servos del seguidor.

## Paso 5: Iniciar micro-ROS Agent

En el ordenador con Ubuntu, abre una nueva terminal:

```bash
source /opt/ros/humble/setup.bash
snap run micro-ros-agent udp4 --port 8888
```

Cuando el XIAO detecte el Agent, su monitor serie debería mostrar:

```text
micro-ROS ready
```

Las interfaces de ROS 2 son:

| Topic | Tipo de mensaje | Dirección | Frecuencia nominal |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | seguidor a PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC a seguidor | hasta 30 Hz |

Verifica la retroalimentación:

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

No envíes valores arbitrarios de articulaciones antes de completar el apretón de manos de inicio con la pose actual.

## Paso 6: Ejecutar la teleoperación inalámbrica líder-seguidor

Conecta el líder al ordenador mediante su controladora de bus de servos USB normal y aliméntalo con la fuente externa correcta.

Encuentra su ruta de puerto serie estable:

```bash
ls -l /dev/serial/by-id/
```

Desde la raíz del proyecto, exporta la configuración local:

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_AGENT_IP="YOUR_UBUNTU_PC_IP"
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_LEADER_ADAPTER"
export SOARM_PYTHON="$(command -v python)"
```

Primero ejecuta la comprobación previa al vuelo sin movimiento:

```bash
./start_soarm_demo.sh --check
```

Verifica:

- el SSID de Wi‑Fi y la IP del Agent;
- el adaptador USB del líder;
- los archivos de calibración del líder y del seguidor;
- el micro-ROS Agent;
- la retroalimentación en vivo del seguidor en `/joint_states`;
- que otro proceso de teleoperación no esté usando el mismo bus del líder.

Si todas las comprobaciones pasan, inicia la teleoperación:

```bash
./start_soarm_demo.sh
```

El puente lee la pose inicial del seguidor y publica repetidamente la misma pose antes de habilitar el par. Luego usa un mapeo relativo, de modo que el seguidor comienza donde está y sigue los cambios realizados en el líder. Pulsa `Ctrl+C` para detener.

:::warning

Detener el puente o perder comandos no libera el par. El seguidor mantiene su última posición ordenada. Desconecta la alimentación de los servos para una parada de emergencia.

:::

## Mecanismos de seguridad

La implementación de referencia incluye varias comprobaciones destinadas a hacer que una demostración sea más predecible:

1. **Comprobación de identidad de los servos:** los seis IDs y números de modelo deben coincidir.
2. **Comprobación de calibración de la EEPROM:** los desplazamientos de homing y los límites deben coincidir con la calibración del seguidor compilada en el firmware.
3. **Apretón de manos con la pose actual:** el primer comando debe estar dentro de `0.05 rad` de la pose medida.
4. **Límites suaves de articulación:** cada comando debe permanecer dentro del rango calibrado.
5. **Límite de paso por comando:** después de armar, un objetivo no puede cambiar más de `0.25 rad` en un solo comando.
6. **Vigilancia de la retroalimentación:** el puente en el PC deja de publicar si la retroalimentación del seguidor es más antigua que `0.5 s`.
7. **Recuperación de Wi‑Fi:** el XIAO se reinicia limpiamente si el Wi‑Fi no puede recuperarse en 10 segundos.

Estas comprobaciones de software complementan, pero no sustituyen, a una parada de emergencia física.

## Solución de problemas

### El XIAO se queda en `Waiting for micro-ROS Agent`

- Confirma que el ordenador y el XIAO están en la misma LAN.
- Verifica que `AGENT_IP` es la dirección IPv4 Wi‑Fi actual del ordenador.
- Confirma que el Agent está usando el puerto UDP `8888`.
- Comprueba si el punto de acceso habilita el aislamiento de clientes.
- Si hay un cortafuegos activo, permite el puerto UDP `8888`.

### `servo_mask` no es `0x3f`

Uno o más servos no respondieron:

- desconecta la alimentación e inspecciona los cables del bus de tres hilos;
- verifica que cada servo tenga un ID único del 1 al 6;
- verifica el voltaje y la corriente nominal de la fuente de alimentación;
- mantén el bus de servos en la velocidad en baudios configurada de 1 Mbps.

### El firmware informa `calib:0`

La EEPROM del servo no coincide con los valores compilados en `servo_bus.cpp`. Vuelve a conectar el seguidor a través de la placa controladora USB, recalíbralo, actualiza los tres arreglos de firmware y vuelve a flashear el XIAO.

### El Wi‑Fi se desconecta durante el movimiento

- acerca el punto de acceso;
- coloca la antena externa lejos de los cables de alimentación de los servos y de las partes metálicas;
- utiliza una red dedicada de 2,4 GHz para la demostración;
- observa el valor de RSSI en la salida de diagnóstico serie;
- compara el resultado con los servos apagados para identificar posibles interferencias de alimentación o electromagnéticas.

### La dirección o el rango de una articulación es incorrecto

Recalibra ambos brazos y confirma el orden de las articulaciones en ambos archivos JSON. Verifica también que los arreglos del seguidor en `servo_bus.cpp` provengan del mismo seguidor físico que está conectado actualmente al XIAO.

## Resultado probado

En la configuración de referencia:

- se detectaron los seis servos seguidores (`servo_mask=0x3f`);
- `/joint_states` se publicó a aproximadamente 20 Hz;
- el puente del líder publicó comandos a 30 Hz;
- las seis articulaciones siguieron juntas a través de un hotspot de teléfono;
- el XIAO siguió funcionando sin su cable de datos USB después de flashearlo y de conectar la alimentación externa del brazo.

## Referencias

- [Project source code](https://github.com/linao681/soarm101-drone-teleop)
- [Getting Started with SO-ARM100 and SO-ARM101 in LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/)
- [Getting Started with the XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/es/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

Esta contribución documenta una integración desarrollada de forma independiente. LeRobot, ROS 2, micro-ROS, PlatformIO y la biblioteca de servos siguen sujetos a sus respectivas licencias.
