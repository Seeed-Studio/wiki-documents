---
description: Crea un enlace de teleoperación inalámbrico ROS 2 de baja latencia para un seguidor SO-ARM101 usando el XIAO ESP32-C3 Bus Servo Adapter y micro-ROS sobre Wi‑Fi UDP.
title: SO-Arm con teleoperación inalámbrica XIAO
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
url: https://wiki.seeedstudio.com/es/soarm101_xiao_microros_wireless_teleoperation/
---

# Teleoperación cableada e inalámbrica del SO-ARM101 con XIAO ESP32-C3 y micro-ROS

:::note Community Contribution
Este tutorial es una contribución de la comunidad de [@linao681](https://github.com/linao681). ¡Gracias por compartir este proyecto con la comunidad de Seeed Studio!
:::

## Introducción

Este tutorial documenta dos formas compatibles de controlar un seguidor SO-ARM101 desde un líder SO-ARM101:

1. **Líder cableado + seguidor inalámbrico:** el líder usa una placa controladora de servos de bus USB estándar.
2. **Líder inalámbrico + seguidor inalámbrico:** cada brazo usa un Seeed Studio XIAO ESP32-C3 Bus Servo Adapter.

En ambos modos, el seguidor se comunica con ROS 2 mediante micro-ROS sobre Wi‑Fi UDP. El XIAO líder inalámbrico lee las seis posiciones de los actuadores del líder y publica el estado de solo lectura; nunca escribe comandos de posición al brazo líder.

La implementación proporciona:

- retroalimentación de las seis articulaciones del seguidor en `/joint_states`;
- comandos para las seis articulaciones del seguidor en `/joint_command`;
- mapeo de articulaciones de líder a seguidor para LeRobot;
- un apretón de manos de arranque que evita un salto inesperado de posición;
- comprobaciones de calibración, límites de articulación, paso de comando y estado del bus;
- comprobaciones de secuencia, watchdogs de retroalimentación, comportamiento seguro de mantener el último comando y recuperación de sesión;
- descubrimiento del Agent en tiempo de ejecución a partir de la dirección Wi‑Fi actual del ordenador, de modo que un cambio de dirección del hotspot no requiere volver a flashear;
- un modo de respaldo con líder cableado para diagnóstico y operación cuando el líder inalámbrico no está disponible;
- comprobaciones automáticas previas al vuelo e inicio de teleoperación con un solo comando.

El código fuente completo está disponible en el [repositorio soarm101-drone-teleop](https://github.com/linao681/soarm101-drone-teleop).

:::note

Este proyecto se desarrolló como un prototipo probado en tierra para una futura demostración del SO-ARM101 montado en un dron. Esta guía solo cubre la comunicación del brazo robótico y el enlace de teleoperación. No proporciona un sistema de control o seguridad certificado para vuelo.

:::

## Arquitectura del sistema

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

El PC y los XIAO deben estar conectados a la misma red local. Para una demostración se puede usar un hotspot de teléfono o un punto de acceso dedicado de 2,4 GHz.

## Hardware

- 1 × SO-ARM101 líder
- 1 × SO-ARM101 seguidor
- 1 × placa controladora de servos de bus USB estándar para la calibración del líder y el modo de respaldo cableado
- 1 × XIAO ESP32-C3 Bus Servo Adapter para el seguidor
- 1 × XIAO ESP32-C3 Bus Servo Adapter adicional para el modo de líder inalámbrico
- 2 × fuentes de alimentación para el brazo con la potencia adecuada
- 1 × ordenador con Ubuntu 22.04
- 1 × red Wi‑Fi de 2,4 GHz
- Cables USB para calibración y flasheo de firmware

Este firmware de referencia se probó con el seguidor SO-ARM101 estándar de 5 V usando seis servos STS3215 con número de modelo `777`.

:::danger

- Desconecta la alimentación de los servos antes de cambiar cualquier cable de servo.
- Usa el voltaje especificado para tu versión exacta de SO-ARM101. No conectes una fuente de 12 V a un brazo de 5 V.
- El USB no suministra suficiente potencia para los servos.
- Realiza la primera prueba en un banco de trabajo estable con una desconexión clara de emergencia de la alimentación.
- Si haces pruebas cerca de un dron, retira las hélices.

:::

## Requisitos de software

La configuración del host probada es:

- Ubuntu 22.04
- ROS 2 Humble
- LeRobot con soporte para Feetech
- micro-ROS Agent
- Python 3.12
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
firmware/xiao_soarm_leader/   PlatformIO firmware for the wireless leader
tools/wireless_teleoperate.py ROS 2 and LeRobot teleoperation bridge
tools/soarm_agent_discovery.py Agent discovery service for both XIAOs
start_soarm_demo.sh           network, Agent, arm, and topic preflight checks
cali/                         leader and follower calibration files
```

El repositorio incluye proyectos de firmware PlatformIO separados para el seguidor inalámbrico y el líder inalámbrico. Los proyectos incluyen las bibliotecas micro-ROS necesarias para ESP32-C3, por lo que un usuario normal no necesita compilar micro-ROS de forma cruzada.

## Paso 2: Calibrar ambos brazos

Calibra primero el seguidor con una controladora de servos de bus USB estándar. Sustituye `/dev/ttyACM0` por el puerto correcto:

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

El XIAO del seguidor valida la EEPROM del servo antes de habilitar el par. Abre:

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

## Paso 3: Configurar Wi‑Fi y descubrimiento del Agent

Conecta el ordenador con Ubuntu y ambos XIAO a la misma red Wi‑Fi de 2,4 GHz. El firmware del XIAO solo almacena el SSID y la contraseña. La dirección actual del Agent en el ordenador se anuncia en tiempo de ejecución mediante el lanzador y el servicio de descubrimiento; no codifiques de forma fija la IP del ordenador en un archivo de firmware público.

```bash
ip -4 address
```

Entra en el directorio del firmware del seguidor y crea el archivo de configuración privada:

```bash
cd firmware/xiao_soarm
cp src/wifi_config.example.h src/wifi_config.h
```

Para el modo de líder inalámbrico, repite el mismo paso en `firmware/xiao_soarm_leader`.

Edita `src/wifi_config.h`:

```cpp
#pragma once

const char* WIFI_SSID = "YOUR_2G4_WIFI_SSID";
const char* WIFI_PASS = "YOUR_WIFI_PASSWORD";
```

Para el firmware del líder, usa los correspondientes placeholders `#define WIFI_SSID` y `#define WIFI_PASS` en `firmware/xiao_soarm_leader/src/wifi_config.example.h`.

`wifi_config.h` es ignorado por Git y nunca debe subirse a un repositorio público. El lanzador actual usa el descubrimiento del Agent para anunciar la dirección Wi‑Fi actual del ordenador, por lo que un cambio de IP del hotspot normalmente tampoco requiere volver a flashear ninguno de los XIAO.

:::tip

El ESP32-C3 usa Wi‑Fi de 2,4 GHz. Si un hotspot de teléfono admite ambas bandas, selecciona el modo de compatibilidad o de 2,4 GHz.

:::

## Paso 4: Compilar y flashear los XIAO

Conecta un XIAO al ordenador mediante USB cada vez. Ejecuta las pruebas nativas y la compilación para ESP32-C3 antes de subir:

```bash
(cd firmware/xiao_soarm && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
(cd firmware/xiao_soarm_leader && \
  pio test -e native && \
  pio run -e seeed_xiao_esp32c3)
```

Después de que las pruebas y compilaciones pasen, sube el firmware seleccionado:

```bash
cd firmware/xiao_soarm
pio run -e seeed_xiao_esp32c3 --target upload
pio device monitor -b 115200
```

Para el modo de líder inalámbrico, ejecuta los comandos de subida y monitor desde `firmware/xiao_soarm_leader` en su lugar.

Alimenta el brazo seguidor con su fuente externa. Un arranque correcto contiene mensajes similares a:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` significa que respondieron los seis IDs de servos. Si la calibración no coincide, el firmware sigue informando del estado pero rechaza los comandos de movimiento.

Después de flashear, el cable USB solo es necesario para el monitoreo serie. Mantén conectada la alimentación externa de servos del brazo correspondiente. El firmware del líder deshabilita el par y solo publica posición/estado; el firmware del seguidor es el componente que ejecuta los comandos de posición.

## Paso 5: Iniciar micro-ROS Agent y la comprobación previa al vuelo

Desde la raíz del proyecto, el lanzador puede iniciar el Agent y el servicio de descubrimiento:

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

El lanzador inicia el Agent y el servicio de descubrimiento, y luego comprueba los topics ROS 2 necesarios. Cuando los XIAO descubren el Agent, sus monitores serie deberían informar:

```text
micro-ROS ready
```

Las interfaces ROS 2 son:

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

No envíes valores de articulación arbitrarios antes de completar el protocolo de inicio de la pose actual.

## Paso 6: Ejecutar la teleoperación por cable o doble inalámbrica

Elige una de las dos entradas del líder. Para el modo por cable, conecta el líder al ordenador a través de su controlador USB bus-servo normal. Para el modo inalámbrico, alimenta el líder con su fuente externa y deja su XIAO conectado a la red Wi‑Fi configurada.

Encuentra su ruta serie estable:

```bash
ls -l /dev/serial/by-id/
```

Desde la raíz del proyecto, exporta la configuración local:

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

Primero ejecuta la comprobación previa sin movimiento:

```bash
./start_soarm_demo.sh --leader wireless --check
```

Verifica:

- el SSID de Wi‑Fi y la IP del Agent;
- la entrada de líder seleccionada (`wireless` comprueba `/leader/raw_state` y `/leader/status`; `wired` comprueba el adaptador USB al iniciar);
- los archivos de calibración del líder y del seguidor;
- el micro-ROS Agent;
- la retroalimentación en vivo del seguidor en `/joint_states`;
- que otro proceso de teleoperación no esté usando el mismo bus del líder.

Si todas las comprobaciones pasan, inicia la teleoperación:

```bash
./start_soarm_demo.sh --leader wireless

# Wired leader fallback:
./start_soarm_demo.sh --leader wired
```

El puente lee la pose inicial del seguidor y publica repetidamente la misma pose antes de habilitar el par. Luego usa mapeo relativo, por lo que el seguidor comienza donde está y sigue los cambios realizados en el líder seleccionado. Si la sesión inalámbrica se recupera, el puente se mezcla hacia la pose actual del líder antes de reanudar los comandos normales. Pulsa `Ctrl+C` para detener; el seguidor mantiene su última posición ordenada.

:::warning

Detener el puente o perder comandos no libera el par. El seguidor mantiene su última posición ordenada. Desconecta la alimentación de los servos para una parada de emergencia.

:::

## Mecanismos de seguridad

La implementación de referencia incluye varias comprobaciones destinadas a hacer que una demostración sea más predecible:

1. **Comprobación de identidad de los servos:** los seis IDs y números de modelo deben coincidir.
2. **Comprobación de calibración de la EEPROM:** los offsets de homing y los límites deben coincidir con la calibración del seguidor compilada en el firmware.
3. **Protocolo de la pose actual:** el primer comando debe estar dentro de `0.05 rad` de la pose medida.
4. **Límites suaves de articulación:** cada comando debe permanecer dentro del rango calibrado.
5. **Límite de paso por comando:** después de armar, un objetivo no puede cambiar más de `0.25 rad` en un solo comando.
6. **Watchdog de retroalimentación:** el puente en el PC deja de publicar si la retroalimentación del seguidor es más antigua que `0.5 s`.
7. **Recuperación de Wi‑Fi:** el XIAO se reinicia limpiamente si Wi‑Fi no puede recuperarse en 10 segundos.

Estas comprobaciones de software complementan, pero no sustituyen, un paro de emergencia físico.

## Solución de problemas

### El XIAO se queda en `Waiting for micro-ROS Agent`

- Confirma que el ordenador y el XIAO están en la misma LAN.
- Confirma que el lanzador informa la dirección IPv4 Wi‑Fi actual e inicia el descubrimiento del Agent.
- Confirma que el Agent está usando el puerto UDP `8888`.
- Comprueba si el punto de acceso habilita el aislamiento de clientes.
- Si hay un firewall activo, permite el puerto UDP `8888`.

### `servo_mask` no es `0x3f`

Uno o más servos no respondieron:

- desconecta la alimentación e inspecciona los cables del bus de tres hilos;
- verifica que cada servo tenga un ID único de 1 a 6;
- verifica el voltaje y la corriente nominal de la fuente de alimentación;
- mantén el bus de servos en la tasa de baudios configurada de 1 Mbps.

### El firmware informa `calib:0`

La EEPROM del servo no coincide con los valores compilados en `servo_bus.cpp`. Vuelve a conectar el seguidor a través de la placa controladora USB, recalíbralo, actualiza los tres arreglos de firmware y vuelve a flashear el XIAO.

### Wi‑Fi se desconecta durante el movimiento

- acerca el punto de acceso;
- coloca la antena externa lejos de los cables de alimentación de los servos y de las partes metálicas;
- usa una red dedicada de 2.4 GHz para la demostración;
- observa el valor de RSSI en la salida de diagnóstico serie;
- compara el resultado con los servos apagados para identificar posibles interferencias de alimentación o electromagnéticas.

### El líder inalámbrico no está listo

- confirma que el XIAO del líder publica tanto `/leader/raw_state` como `/leader/status`;
- confirma que los seis servos del líder responden y que el par está deshabilitado;
- confirma que `cali/leader_recal.json` coincide con el líder físico;
- usa `./start_soarm_demo.sh --leader wired` como solución temporal.

### La dirección o el rango de una articulación es incorrecto

Recalibra ambos brazos y confirma el orden de las articulaciones en ambos archivos JSON. Verifica también que los arreglos del seguidor en `servo_bus.cpp` provengan del mismo seguidor físico que está actualmente conectado al XIAO.

## Alcance de la validación

El proyecto se ha probado en la configuración de referencia con:

- se detectaron los seis servos seguidores (`servo_mask=0x3f`);
- `/joint_states` se publicó a aproximadamente 20 Hz;
- el puente del líder publicó comandos a 30 Hz;
- las seis articulaciones siguieron juntas a través de un hotspot de teléfono;
- el XIAO siguió funcionando sin su cable de datos USB después de flashear y de conectar la alimentación externa del brazo.

La ruta doble inalámbrica y la alternativa por cable están ambas soportadas por el lanzador actual. Una prueba de resistencia inalámbrica de referencia se completó el 2026-09-20 y duró 783 segundos (unos 13 minutos). La prueba registró cero timeouts de comando, cero rechazos de comando y cero recuperaciones del líder; la retroalimentación promedió 19.87 Hz, la latencia de acuse de recibo de comando fue de 66.0 ms en P50, y el RSSI mínimo observado fue de -65 dBm. Estas cifras describen una ejecución de referencia, no una garantía para cada entorno Wi‑Fi.

## Referencias

- [Código fuente del proyecto](https://github.com/linao681/soarm101-drone-teleop)
- [Primeros pasos con SO-ARM100 y SO-ARM101 en LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/)
- [Primeros pasos con el XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/es/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

Esta contribución documenta una integración desarrollada de forma independiente. LeRobot, ROS 2, micro-ROS, PlatformIO y la biblioteca de servos siguen sujetos a sus respectivas licencias.
