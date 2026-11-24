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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/soarm101_xiao_microros_wireless_teleoperation/
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Teleoperación con cable e inalámbrica del SO-ARM101 con XIAO ESP32-C3 y micro-ROS

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp" width={800} height={600} style={{height: 'auto'}} alt="Kits de brazo robótico SO-ARM100 y SO-ARM101" />
</div>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem 1rem', margin: '1.1rem 0 1.35rem'}}>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue el kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<div className="rebot-buy-button-group" style={{margin: 0}}>
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue el XIAO Servo Adapter</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

</div>

:::note Contribución de la comunidad
Este tutorial es una contribución de la comunidad de [@linao681](https://github.com/linao681). ¡Gracias por compartir este proyecto con la comunidad de Seeed Studio!
:::

## Introducción

Este tutorial documenta dos formas compatibles de controlar un seguidor SO-ARM101 desde un líder SO-ARM101:

| Modo | Conexión del líder | Conexión del seguidor |
| --- | --- | --- |
| Líder con cable | Conectar al ordenador mediante una placa estándar controladora de servos de bus por USB. | XIAO por Wi‑Fi. |
| Líder inalámbrico | XIAO por Wi‑Fi. | XIAO por Wi‑Fi. |

En ambos modos, el seguidor se comunica con ROS 2 mediante micro-ROS sobre Wi‑Fi UDP. El XIAO líder inalámbrico lee las seis posiciones de los actuadores del líder y publica el estado de solo lectura; nunca escribe comandos de posición en el brazo líder.

La implementación proporciona:

- retroalimentación de las seis articulaciones del seguidor en `/joint_states`;
- comandos para las seis articulaciones del seguidor en `/joint_command`;
- mapeo de articulaciones de líder a seguidor de LeRobot;
- un apretón de manos de inicio que evita un salto inesperado de posición;
- comprobaciones de calibración, límites de articulación, paso de comando y estado del bus;
- comprobaciones de secuencia, watchdogs de retroalimentación, comportamiento seguro de mantener el último comando y recuperación de sesión;
- descubrimiento del Agent en tiempo de ejecución a partir de la dirección Wi‑Fi actual del ordenador, de modo que un cambio de dirección del hotspot no requiere volver a flashear;
- un modo de reserva de líder con cable para diagnóstico y operación cuando el líder inalámbrico no está disponible;
- comprobaciones previas automáticas y arranque de teleoperación con un solo comando.

El código fuente completo está disponible en el [repositorio soarm101-drone-teleop](https://github.com/linao681/soarm101-drone-teleop).

:::note

Este proyecto se desarrolló como un prototipo probado en tierra para una futura demostración de SO-ARM101 montado en dron. Esta guía solo cubre la comunicación del brazo robótico y el enlace de teleoperación. No proporciona un sistema de control o seguridad certificado para vuelo.

:::

### Ruta de configuración recomendada

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#step-1-clone-the-project">Clona el proyecto</a></h4>
<p>Obtén el código y los proyectos de firmware.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#step-2-calibrate-both-arms">Calibra ambos brazos</a></h4>
<p>Calibra los brazos físicos que vas a usar.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#step-3-configure-wi-fi-and-agent-discovery">Configura el Wi‑Fi y el descubrimiento del Agent</a></h4>
<p>Pon el ordenador y los XIAO en la misma LAN.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#step-4-build-and-flash-the-xiaos">Compila y flashea el firmware</a></h4>
<p>Prueba y luego flashea el firmware XIAO apropiado.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#step-5-start-the-micro-ros-agent-and-preflight">Inicia el Agent y ejecuta las comprobaciones previas</a></h4>
<p>Comprueba la retroalimentación de ROS 2 para el modo elegido.</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#step-6-run-wired-or-dual-wireless-teleoperation">Inicia la teleoperación</a></h4>
<p>Lanza el modo de líder seleccionado y verifica el funcionamiento.</p>
</div>
</section>

</div>

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

El PC y el XIAO deben estar conectados a la misma red local. Para una demostración se puede usar un hotspot de teléfono o un punto de acceso dedicado de 2,4 GHz.

## Hardware

| Elemento | Cantidad o requisito | Propósito |
| --- | --- | --- |
| SO-ARM101 líder y seguidor | Uno de cada | Brazos de entrada y controlado. |
| Placa estándar controladora de servos de bus por USB | Una | Calibración y conexión del líder con cable. |
| XIAO ESP32-C3 Bus Servo Adapter | Uno, más uno para el modo de líder inalámbrico | Requerido para el seguidor; añade uno para el líder inalámbrico. |
| Fuentes de alimentación para los brazos | Dos, dimensionadas para los brazos | Alimentar el líder y el seguidor de forma independiente. |
| Ordenador | Uno, Ubuntu 22.04 | Ejecutar ROS 2 y el micro-ROS Agent. |
| Red Wi‑Fi | Una, 2,4 GHz | Poner el ordenador y los XIAO en la misma LAN. |
| Cables USB | Según sea necesario | Calibración, flasheo y monitorización serie. |

Este firmware de referencia se probó con el seguidor estándar SO-ARM101 de 5 V usando seis servos STS3215 con número de modelo `777`.

:::danger

- Desconecta la alimentación de los servos antes de cambiar cualquier cable de servo.
- Usa el voltaje especificado para tu versión exacta de SO-ARM101. No conectes una fuente de 12 V a un brazo de 5 V.
- El USB no suministra suficiente potencia para los servos.
- Realiza la primera prueba en un banco de trabajo estable con una desconexión clara de emergencia de la alimentación.
- Si haces pruebas cerca de un dron, retira las hélices.

:::

## Requisitos de software

La configuración del host probada es:

| Elemento | Configuración probada |
| --- | --- |
| Sistema operativo | Ubuntu 22.04 |
| ROS 2 | Humble |
| Framework de robótica | LeRobot con soporte para Feetech |
| Comunicación micro-ROS | micro-ROS Agent |
| Python | 3.12 |
| Herramientas de firmware | PlatformIO |

Instala micro-ROS Agent y PlatformIO si aún no están disponibles:

```bash
sudo snap install micro-ros-agent
python3 -m pip install --user platformio
```

Sigue la [guía SO-ARM100/101 LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/) para instalar LeRobot y configurar los ID de los servos antes de continuar.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

## Clona el proyecto {#step-1-clone-the-project}

<p className="rebot-step-label">Paso 1</p>

```bash
git clone https://github.com/linao681/soarm101-drone-teleop.git
cd soarm101-drone-teleop
```

Las rutas importantes del proyecto son:

| Ruta | Propósito |
| --- | --- |
| `firmware/xiao_soarm/` | Firmware del seguidor inalámbrico |
| `firmware/xiao_soarm_leader/` | Firmware del líder inalámbrico |
| `tools/wireless_teleoperate.py` | Puente de teleoperación ROS 2 y LeRobot |
| `tools/soarm_agent_discovery.py` | Descubrimiento del Agent para ambos XIAO |
| `start_soarm_demo.sh` | Comprobaciones previas de red, Agent, hardware y topics |
| `cali/` | Archivos de calibración de líder y seguidor |

El repositorio incluye proyectos de firmware PlatformIO separados para el seguidor inalámbrico y el líder inalámbrico. Los proyectos incluyen las bibliotecas micro-ROS ESP32-C3 necesarias, por lo que un usuario normal no necesita compilar micro-ROS de forma cruzada.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

## Calibra ambos brazos {#step-2-calibrate-both-arms}

<p className="rebot-step-label">Paso 2</p>

Calibra primero el seguidor con una placa estándar controladora de servos de bus por USB. Sustituye `/dev/ttyACM0` por el puerto correcto:

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

### Copia la calibración del seguidor en el firmware

El XIAO seguidor valida la EEPROM del servo antes de habilitar el par. Abre:

```text
firmware/xiao_soarm/src/servo_bus.cpp
```

Sustituye estos tres arreglos por los valores de tu `cali/follower_recal.json`:

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

El siguiente comando imprime los tres arreglos en el orden correcto:

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

## Configura Wi‑Fi y el descubrimiento del Agent {#step-3-configure-wi-fi-and-agent-discovery}

<p className="rebot-step-label">Paso 3</p>

Conecta el ordenador con Ubuntu y los XIAO usados en tu modo a la misma red Wi‑Fi de 2,4 GHz. El modo de líder por cable solo usa el XIAO seguidor; el modo de líder inalámbrico usa ambos XIAO. El firmware del XIAO solo almacena el SSID y la contraseña. El launcher y el servicio de descubrimiento anuncian en tiempo de ejecución la dirección actual del Agent del ordenador. No codifiques de forma fija la IP del ordenador en un archivo de firmware público.

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

Para el firmware del líder, usa los correspondientes marcadores de posición `#define WIFI_SSID` y `#define WIFI_PASS` en `firmware/xiao_soarm_leader/src/wifi_config.example.h`.

`wifi_config.h` es ignorado por Git y nunca debe subirse a un repositorio público. El launcher actual usa el descubrimiento del Agent para anunciar la dirección Wi‑Fi actual del ordenador, por lo que un cambio de IP del hotspot normalmente no requiere volver a flashear ninguno de los XIAO.

:::tip

El ESP32‑C3 usa Wi‑Fi de 2,4 GHz. Si un hotspot de teléfono admite ambas bandas, selecciona el modo de compatibilidad o de 2,4 GHz.

:::

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

## Compila y flashea el firmware {#step-4-build-and-flash-the-xiaos}

<p className="rebot-step-label">Paso 4</p>

Conecta un XIAO al ordenador por USB cada vez. Ejecuta las pruebas nativas y la compilación para ESP32‑C3 antes de subir:

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

Para el modo de líder inalámbrico, ejecuta en su lugar los comandos de subida y monitor desde `firmware/xiao_soarm_leader`.

Alimenta el brazo seguidor con su fuente externa. Un arranque correcto contiene mensajes similares a:

```text
Servo Ping mask: 0x3f (expected 0x3f)
Servo calibration match: YES
IP: 192.168.x.x  RSSI: -xx
Waiting for micro-ROS Agent...
```

`0x3f` significa que respondieron los seis IDs de servo. Si la calibración no coincide, el firmware sigue informando del estado pero rechaza los comandos de movimiento.

Después de flashear, el cable USB solo es necesario para el monitoreo serie. Mantén conectada la alimentación externa de servos del brazo correspondiente. El firmware del líder deshabilita el par y solo publica posición/estado; el firmware del seguidor es el componente que ejecuta los comandos de posición.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">

## Inicia el Agent y ejecuta el preflight {#step-5-start-the-micro-ros-agent-and-preflight}

<p className="rebot-step-label">Paso 5</p>

Desde la raíz del proyecto, establece el nombre de la red Wi‑Fi y el ejecutable de Python usado por LeRobot. Luego ejecuta el preflight para tu modo de líder.

```bash
export SOARM_WIFI_SSID="YOUR_2G4_WIFI_SSID"
export SOARM_PYTHON="$(command -v python)"
```

```bash
source /opt/ros/humble/setup.bash
./start_soarm_demo.sh --leader wireless --check
```

El ejemplo comprueba el modo de líder inalámbrico. Para un líder por cable, sustituye `--leader wireless` por `--leader wired`. Un preflight por cable omite la comprobación del USB del líder, que se ejecuta en el lanzamiento.

El launcher inicia el Agent y el servicio de descubrimiento, luego comprueba los topics ROS 2 requeridos. Cuando los XIAO descubren el Agent, sus monitores serie deberían informar:

```text
micro-ROS ready
```

Las interfaces ROS 2 son:

| Topic | Tipo de mensaje | Dirección | Frecuencia nominal |
|---|---|---|---|
| `/joint_states` | `sensor_msgs/msg/JointState` | seguidor a PC | 20 Hz |
| `/joint_command` | `sensor_msgs/msg/JointState` | PC a seguidor | hasta 30 Hz |

Mientras el Agent se está ejecutando, usa otra terminal para verificar la retroalimentación. Si el preflight inició el Agent, este se detiene al salir. En ese caso, ejecuta esta comprobación después de iniciar la teleoperación.

```bash
source /opt/ros/humble/setup.bash
ros2 topic echo /joint_states --once
ros2 topic hz /joint_states
```

No envíes valores de articulaciones arbitrarios antes de completar el handshake de arranque de la pose actual.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">

## Inicia la teleoperación {#step-6-run-wired-or-dual-wireless-teleoperation}

<p className="rebot-step-label">Paso 6</p>

Después de que el preflight pase, selecciona el comando de lanzamiento para tu conexión de líder. Ambas opciones usan un seguidor inalámbrico.

<Tabs defaultValue="wired">

<TabItem value="wired" label="Líder por cable">

Conecta el líder a través de su controlador estándar de servos de bus USB y encuentra la ruta serie estable.

```bash
ls -l /dev/serial/by-id/
```

Sustituye `YOUR_USB_ADAPTER` por el nombre real del dispositivo y luego inicia el modo de líder por cable.

```bash
export SOARM_LEADER_PORT="/dev/serial/by-id/YOUR_USB_ADAPTER"
./start_soarm_demo.sh --leader wired
```

</TabItem>
<TabItem value="wireless" label="Líder inalámbrico">

Alimenta el líder con su fuente externa, confirma que su XIAO se ha unido a la red Wi‑Fi configurada y luego inicia el modo inalámbrico dual.

```bash
./start_soarm_demo.sh --leader wireless
```

</TabItem>
</Tabs>

El bridge lee la pose inicial del seguidor y publica repetidamente la misma pose antes de habilitar el par. Luego usa mapeo relativo, por lo que el seguidor comienza donde está y sigue los cambios realizados en el líder seleccionado. Si la sesión inalámbrica se recupera, el bridge se aproxima gradualmente a la pose actual del líder antes de reanudar los comandos normales. Pulsa `Ctrl+C` para detener; el seguidor mantiene su última posición ordenada.

:::warning

Detener el bridge o perder comandos no libera el par. El seguidor mantiene su última posición ordenada. Desconecta la alimentación de los servos para una parada de emergencia.

:::

</div>
</section>

</div>

## Mecanismos de seguridad

La implementación de referencia incluye varias comprobaciones destinadas a hacer que una demostración sea más predecible:

| Comprobación | Condición o comportamiento |
| --- | --- |
| Identidad de los servos | Los seis IDs y números de modelo deben coincidir. |
| Calibración de la EEPROM | Los offsets de homing y los límites deben coincidir con la calibración del seguidor compilada en el firmware. |
| Handshake de la pose actual | El primer comando debe estar dentro de `0.05 rad` de la pose medida. |
| Límites suaves de articulación | Cada comando debe permanecer dentro del rango calibrado. |
| Límite de paso por comando | Después de armar, un objetivo no puede cambiar más de `0.25 rad` en un solo comando. |
| Watchdog de retroalimentación | El bridge en el PC deja de publicar si la retroalimentación del seguidor es más antigua que `0.5 s`. |
| Recuperación de Wi‑Fi | El XIAO se reinicia si Wi‑Fi no puede recuperarse en 10 segundos. |

Estas comprobaciones de software complementan, pero no sustituyen, un paro de emergencia físico.

## Solución de problemas

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="the-xiao-stays-at-waiting-for-micro-ros-agent">
<summary>El XIAO se queda en <code>Waiting for micro-ROS Agent</code></summary>

- Confirma que el ordenador y el XIAO están en la misma LAN.
- Confirma que el launcher informa de la dirección IPv4 Wi‑Fi actual e inicia el descubrimiento del Agent.
- Confirma que el Agent está usando el puerto UDP `8888`.
- Comprueba si el hotspot habilita el aislamiento de clientes.
- Si hay un firewall activo, permite el puerto UDP `8888`.

</details>

<details className="rebot-demo-details" id="servo_mask-is-not-0x3f">
<summary><code>servo_mask</code> no es <code>0x3f</code></summary>

Uno o más servos no respondieron:

- desconecta la alimentación e inspecciona los cables de bus de tres hilos;
- verifica que cada servo tenga un ID único del 1 al 6;
- verifica el voltaje y la corriente nominal de la fuente de alimentación;
- mantén el bus de servos en la tasa de baudios configurada de 1 Mbps.

</details>

<details className="rebot-demo-details" id="the-firmware-reports-calib0">
<summary>El firmware informa <code>calib:0</code></summary>

La EEPROM del servo no coincide con los valores compilados en `servo_bus.cpp`. Vuelve a conectar el seguidor a través de la placa controladora USB, recalíbralo, actualiza los tres arreglos del firmware y flashea de nuevo el XIAO.

</details>

<details className="rebot-demo-details" id="wi-fi-disconnects-during-motion">
<summary>El Wi‑Fi se desconecta durante el movimiento</summary>

- acerca el punto de acceso;
- coloca la antena externa lejos de los cables de alimentación de los servos y de las partes metálicas;
- utiliza una red dedicada de 2,4 GHz para la demostración;
- observa el valor de RSSI en la salida de diagnóstico serie;
- compara el resultado con los servos apagados para identificar posibles interferencias de alimentación o electromagnéticas.

</details>

<details className="rebot-demo-details" id="the-wireless-leader-is-not-ready">
<summary>El líder inalámbrico no está listo</summary>

- confirma que el XIAO líder publica tanto `/leader/raw_state` como `/leader/status`;
- confirma que los seis servos del líder responden y que el par está deshabilitado;
- confirma que `cali/leader_recal.json` coincide con el líder físico;
- utiliza `./start_soarm_demo.sh --leader wired` como solución temporal alternativa.

</details>

<details className="rebot-demo-details" id="a-joint-direction-or-range-is-incorrect">
<summary>La dirección o el rango de una articulación es incorrecto</summary>

Recalibra ambos brazos y confirma el orden de las articulaciones en ambos archivos JSON. Verifica también que los arrays del seguidor en `servo_bus.cpp` provienen del mismo seguidor físico que está conectado actualmente al XIAO.

</details>

</div>

## Alcance de la validación

El proyecto se ha probado en la configuración de referencia con:

- los seis servos seguidores detectados (`servo_mask=0x3f`);
- `/joint_states` publicado a aproximadamente 20 Hz;
- el puente del líder publicando comandos a 30 Hz;
- las seis articulaciones siguiendo juntas a través de un hotspot de teléfono;
- el XIAO continuó funcionando sin su cable de datos USB después de flashear y conectar la alimentación externa del brazo.

La ruta doble inalámbrica y la alternativa por cable están ambas soportadas por el lanzador actual. Se completó una ejecución de resistencia inalámbrica de referencia el 2026-09-20 y duró 783 segundos (unos 13 minutos). La ejecución registró cero timeouts de comandos, cero rechazos de comandos y cero recuperaciones del líder; la retroalimentación promedió 19,87 Hz, la latencia de reconocimiento de comandos fue de 66,0 ms en el P50, y el RSSI mínimo observado fue de -65 dBm. Estas cifras describen una ejecución de referencia, no una garantía para cada entorno Wi‑Fi.

## Referencias

- [Código fuente del proyecto](https://github.com/linao681/soarm101-drone-teleop)
- [Primeros pasos con SO-ARM100 y SO-ARM101 en LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/)
- [Primeros pasos con el XIAO Bus Servo Adapter](https://wiki.seeedstudio.com/es/xiao_bus_servo_adapter/)
- [micro-ROS](https://micro.ros.org/)
- [ROS 2 Humble](https://docs.ros.org/en/humble/)
- [LeRobot](https://github.com/huggingface/lerobot)

Esta contribución documenta una integración desarrollada de forma independiente. LeRobot, ROS 2, micro-ROS, PlatformIO y la biblioteca de servos siguen sujetos a sus respectivas licencias.
