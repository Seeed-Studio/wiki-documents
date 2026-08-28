---
description: Este tutorial muestra cómo usar rebot_control con MotorBridge y bus CAN para control de posición MIT en el reBot Arm B601-RS, incluyendo control del gripper, protección de temperatura y retorno seguro a cero.
title: Introducción al control de posición MIT en reBot Arm B601-RS
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - brazo robótico
  - gripper
  - protección de temperatura
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-10
  author: LiJie
createdAt: '2026-08-04'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_mit_control/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Introducción al control de posición MIT en reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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
  <strong>6+1 GDL · RobStride · CAN @ 1 Mbps · Control de posición MIT · Protección de temperatura · Retorno seguro a cero · API de Python de código abierto</strong>
</p>

[MotorBridge](https://github.com/motorbridge/motorbridge) es un SDK CAN en Python para motores RobStride / Damiao. [rebot_control](https://github.com/LAN-GER/rebot_control) lo envuelve con una API de control de posición MIT para el **reBot Arm B601-RS**: configuración YAML, límites de velocidad por articulación, protección de temperatura MOS de tres niveles y retorno suave a cero mediante Esc / Ctrl+C / `stop()`.

Este tutorial te guía a través de: configuración del entorno → configuración de CAN → ejecución de ejemplos → uso del paquete como biblioteca.

:::caution Aviso de seguridad importante
- **Este proyecto solo proporciona APIs de control — sin límites de articulación por software ni límites de espacio de trabajo.** Los ángulos objetivo que configures se envían directamente a los motores.
- **Mantén el brazo dentro de aproximadamente el 70% de su espacio de trabajo.** Permanecer más allá del espacio de trabajo durante períodos prolongados puede activar la protección contra bloqueo en la articulación 2 y el brazo puede caer.
- En el primer uso, haz pruebas con **ángulos pequeños y bajas velocidades**, y mantén el espacio de trabajo libre de personas y obstáculos.
:::

---

## Características

1. **Control de posición MIT**  
   Comandos de posición MIT por defecto a 200 Hz; límites de velocidad por articulación con suavizado en el bucle de control.

2. **6+1 motores**  
   J1–J6 son articulaciones del brazo; **J7 (ID CAN 7) es el gripper del efector final**, controlado mediante `set_joint_angles` / `set_joint_angle`.

3. **Protección de temperatura de tres niveles**  
   Monitorización en tiempo real de la temperatura MOS: alarma y continuar → sobretemperatura con retorno lento a cero y luego deshabilitar → deshabilitado de emergencia (sin retorno a cero).

4. **Salida segura y retorno a cero**  
   Esc / Ctrl+C / `arm.stop()` activan un retorno suave a cero con función smoothstep; un segundo Ctrl+C durante el retorno a cero aborta inmediatamente y deshabilita los motores.

5. **Configuración basada en YAML**  
   Canal CAN, umbrales de temperatura, parámetros de retorno a cero y `kp`/`kd` MIT de los motores se encuentran en `config/rebotarm_rs.yaml` — ajusta sin cambiar el código.

6. **Lista para usar como biblioteca**  
   Capas claras (configuración / API / ejemplos); importa con `from rebot import ReBotRSMITController`.

---

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/).

| Parámetro | Especificación |
|-----------|---------------|
| Modelo de brazo | reBot Arm B601-RS Kit ensamblado con gripper |
| GDL | 6+1 (incluyendo gripper) |
| Radio de trabajo | 754.7 mm (con gripper) / 587.5 mm (sin gripper) |
| Carga útil | Nominal 2.5 kg / Máx 5 kg |
| Rango de articulaciones | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Gripper: 345° ~ 0° |
| Repetibilidad | 0.1 mm |
| Peso | 6.7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 (incluyendo gripper) |
| Comunicación | Bus CAN @ 1 Mbps |
| Tensión de alimentación | CC 48V |
| Fuente de alimentación | CC 48V 15A |
| Temperatura de funcionamiento | -20°C ~ 50°C |
| Control | PC |

### Asignación de motores en este proyecto

| Articulación | ID CAN | Modelo | Notas |
|-------|--------|-------|-------|
| J1 | 1 | RS06 | Base |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | Muñeca |
| J7 | **7** | RS00 | **Gripper del efector final** |

### Capacidades de software (este repositorio)

| Función | Estado |
|------------|--------|
| Control de posición MIT | ✅ |
| Límites de velocidad por articulación | ✅ |
| Control del gripper (ID CAN 7) | ✅ |
| Monitorización de temperatura MOS y protección de tres niveles | ✅ |
| Retorno seguro a cero / deshabilitado de emergencia | ✅ |
| Configuración YAML | ✅ |
| API de biblioteca Python | ✅ |
| Cinemática directa / inversa (Pinocchio) | ❌ (ver [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)) |
| Simulación MeshCat | ❌ (ver repositorio anterior) |

### Parámetros de los motores de las articulaciones

| Parámetro | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| Tensión nominal | 48V | 48V |
| Corriente nominal | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| Corriente pico | 15.5 Apk ± 10% | 57 Apk ± 10% |
| Par nominal | 5 N.m | 11 N.m |
| Par pico | 14 N.m | 36 N.m |
| Velocidad nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidad máxima en vacío | 315 rpm ± 10% | 480 rpm ± 10% |
| Relación de reducción | 10 : 1 | 9 : 1 |
| Interfaz de control | CAN @ 1 Mbps | CAN @ 1 Mbps |
| Modos de control | MIT / Velocidad / Posición / Par | MIT / Velocidad / Posición / Par |

## Lista de materiales (BOM)

| Ítem | Cantidad | Incluido |
|------|-----|----------|
| reBot Arm B601-RS | 1 | ✅ |
| Adaptador CAN (CANABLE / PCAN-USB, etc.) | 1 | ✅ |
| Fuente de alimentación (CC 48V 15A) | 1 | ✅ |
| Cable USB-C | 1 | ✅ |
| Gripper | 1 | ✅ |

## Requisitos

| Ítem | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **SO** | Ubuntu 22.04+ (recomendado) |
| **Interfaz CAN** | `can0` por defecto |
| **Alimentación** | CC 48V 15A |
| **Dependencias** | `motorbridge`, `pyyaml`; opcional `pynput` (tecla Esc) |

---

## Instalación

### Paso 1. Clonar el repositorio

```bash
git clone https://github.com/LAN-GER/rebot_control.git
cd rebot_control
```

### Paso 2. Instalar dependencias

```bash
pip install motorbridge pynput pyyaml
```

:::tip
`pynput` habilita la escucha de la tecla Esc. Sin él, solo Esc queda deshabilitada; Ctrl+C y `arm.stop()` siguen funcionando.
:::

### Paso 3. Configurar la interfaz CAN

```bash
# List interfaces (PCAN-USB, etc.)
sudo modprobe peak_usb   # if using a PEAK adapter
ip -br link

# Set can0 to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
Después de desconectar y volver a conectar un adaptador CAN USB, normalmente necesitas ejecutar de nuevo los comandos `ip link`.
:::

### Paso 4. (Opcional) Editar el archivo de configuración

Edita `config/rebotarm_rs.yaml`:

| Clave | Descripción | Valor por defecto |
|-----|-------------|---------|
| `can.channel` | Nombre de la interfaz CAN | `can0` |
| `can.host_id` | ID del host | `0xFD` |
| `control.control_hz` | Frecuencia de comandos MIT (no velocidad de movimiento) | 200 Hz |
| `control.telemetry_hz` | Frecuencia de lectura de temperatura | 2 Hz |
| `temperatures.alarm_c` | Umbral de alarma de temperatura | 80°C |
| `temperatures.return_zero_c` | Umbral de retorno a cero por sobretemperatura | 125°C |
| `temperatures.disconnect_c` | Umbral de deshabilitado de emergencia | 140°C |
| `return_zero.max_speed_deg_s` | Velocidad pico normal de retorno a cero | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | Velocidad pico térmica de retorno a cero | 30°/s |
| `return_zero.min_time_s` | Duración mínima de retorno a cero | 3.0 s |
| `return_zero.settle_time_s` | Tiempo de espera en cero después del retorno | 0.30 s |
| `motors` | ID de motor / modelo / `kp` / `kd` MIT | Ver YAML |

Las claves que faltan usan valores por defecto en el código; las claves desconocidas generan un error para detectar errores tipográficos.

---

## Estructura del código

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

Capas:

- **Archivo de configuración**: única fuente de parámetros ajustables.
- **Capa de configuración**: `load_config()` → `ControllerConfig`.
- **Capa de API**: lógica de control sin valores de demostración codificados.
- **Capa de ejemplos**: ángulos objetivo, velocidades y flujo de ejecución.

---

## Cómo funciona

### Control MIT y suavizado de velocidad

- `control_hz` (200 Hz por defecto) establece **solo la frecuencia de envío de comandos**.
- La velocidad real de movimiento proviene de `set_max_speeds([...])` (grados/s).
- `set_joint_angles()` solo actualiza los **objetivos**; el bucle de control incrementa los **ángulos de comando** hacia los objetivos bajo el límite de velocidad.

:::tip
Si llamas a `stop()` inmediatamente después de establecer los objetivos, puede que veas casi ningún movimiento. Los ejemplos usan `wait_for_command_targets()` (ver `examples/_bootstrap.py`) para esperar hasta que los ángulos de comando se acerquen a los objetivos antes de volver a cero.
:::

### Secuencia de conexión y habilitación

Dentro de `connect()`, el orden es: **registrar motores → cambiar a modo MIT → habilitar → leer posiciones mecánicas actuales** (para inicializar los objetivos y evitar un salto repentino después de habilitar). El `mechPos (0x7019)` de RobStride se puede leer de forma fiable después de habilitar.

Para lectura pasiva de posición (Tutorial 5), llama a `disable_motors()` después de `connect()` para que puedas mover el brazo a mano y seguir leyendo ángulos.

### Protección de temperatura de tres niveles

| Umbral (predeterminado) | Comportamiento |
|---------------------|----------|
| ≥ 80°C | Alarma de temperatura (una vez por motor por flanco de sobretemperatura), continúa funcionando |
| ≥ 125°C | Detener el movimiento, retorno a cero lento a velocidad térmica máxima y luego deshabilitar |
| ≥ 140°C | Deshabilitado de emergencia inmediato, **sin retorno a cero** |

### Retorno a cero seguro

El retorno a cero usa una trayectoria **smoothstep**. Duración:

```
duration = max(min_time_s, per-joint time estimated from peak speed)
```

La velocidad máxima es `max_speed_deg_s` (normal) o `thermal_max_speed_deg_s` (térmica). Ambas tienen como valor predeterminado **30°/s**; `min_time_s` tiene como valor predeterminado **3.0 s**.

| Método de salida | Comportamiento |
|-------------|----------|
| Esc / primer Ctrl+C / `arm.stop()` | Retorno a cero lento → deshabilitar → cerrar CAN |
| Segundo Ctrl+C durante el retorno a cero | Abortar el retorno a cero y deshabilitar inmediatamente |
| Error de comunicación | Deshabilitado de emergencia, sin retorno a cero |

### Unidades

| Contexto | Unidades |
|---------|-------|
| API externa (ángulos, velocidades) | grados, deg/s |
| Internos de MotorBridge MIT | radianes, rad/s |

---

## Tutoriales

Ejecuta todos los ejemplos desde la **raíz del proyecto**. Cada script documenta el **Movimiento esperado** al principio e imprime una línea `[Expected / 预期]` al iniciar.

| Tutorial | Archivo | Comando |
|----------|------|---------|
| 1. Inicio rápido | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. Configuración personalizada | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. Supervisar estado | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. Articulación única + pinza | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. Leer posiciones | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. Opciones de parada | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. Estructura del programa | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| Demostración completa | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. Inicio rápido (`quick_start.py`)

**Movimiento esperado**: J1 se mueve a +20° a ~15°/s; las otras articulaciones y la pinza permanecen en 0°; luego retorno a cero lento y deshabilitar.

```bash
python3 examples/quick_start.py
```

Flujo: `start()` → `set_max_speeds()` → `set_joint_angles()` → **esperar al movimiento** → `stop()`.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Video demo - Quick start" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. Archivo de configuración personalizada (`custom_config.py`)

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**Movimiento esperado**: J1 → +15° (~15°/s), las demás en 0°, luego retorno a cero.

---

### 3. Supervisar mientras se ejecuta (`monitor_status.py`)

```bash
python3 examples/monitor_status.py
```

**Movimiento esperado**: J1 → +30°; la terminal imprime continuamente objetivo / enviado / temperatura del MOS. Pulsa **Esc** o **Ctrl+C** para salir y volver a cero.

Notas:

- **Objetivo vs enviado**: los ángulos enviados van por detrás de los objetivos (suavizado limitado por velocidad).
- **Temperatura**: lee `arm.last_temperatures`; no necesitas sondear CAN tú mismo.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Video demo - Monitor status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. Ajuste de articulación única y pinza (`single_joint_adjust.py`)

```bash
python3 examples/single_joint_adjust.py
```

**Objetivos predeterminados**:

| J1 | J2 | J3 | J4 | J5 | J6 | J7 Pinza |
|----|----|----|----|----|----|------------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`: 1–6 son articulaciones del brazo; **7 es la pinza (ID CAN 7)**.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Video demo - Single joint and gripper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. Leer posiciones reales (`read_joint_angles.py`)

```bash
python3 examples/read_joint_angles.py
```

**Movimiento esperado**:

1. `connect()`: cambiar al modo MIT y habilitar (establecer comunicación), leer los ángulos actuales como semillas objetivo.
2. `disable_motors()`: deshabilitar inmediatamente para que puedas mover el brazo a mano.
3. La terminal imprime los ángulos reales de las articulaciones a ~**30 Hz**; los valores deberían cambiar cuando muevas el brazo.
4. Pulsa **Ctrl+C** para salir; `stop(return_to_zero=False)` cierra CAN **sin retorno a cero**.

Este ejemplo **no** llama a `start()`, por lo que no se ejecuta ningún hilo de control MIT y no se envían objetivos de movimiento.

**Flujo del código**:

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
`read_joint_angles()` accede a CAN de forma síncrona (lee `mechPos` de los 7 motores en secuencia), por lo que la frecuencia alcanzable depende del tiempo de ida y vuelta del bus. El ejemplo apunta a 30 Hz; si cada lectura tarda más, la frecuencia real será menor. Mientras el control MIT está en ejecución, usa `get_command_angles()` para supervisar el movimiento comandado en lugar de llamar a `read_joint_angles()` a alta frecuencia.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint/read_joint_angles.mp4" title="Video demo - Read actual positions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. Opciones de parada segura (`stop_options.py`)

Cada modo primero mueve J1 a ~+20°, luego se detiene según el modo:

```bash
python3 examples/stop_options.py default      # slow return-to-zero (recommended)
python3 examples/stop_options.py no_return    # disable without return-to-zero
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` dejan el brazo en una pose distinta de cero y deshabilitan los motores. Asegúrate de que el área sea segura; sujeta el brazo con la mano si es necesario.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Video demo - Stop options" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. Estructura de programa recomendada (`recommended_structure.py`)

Demuestra `try` / `except` / `finally` para que `stop()` se ejecute incluso en caso de errores.

```bash
python3 examples/recommended_structure.py
```

---

### Demostración completa de parámetros (`mit_position_control.py`)

Edita `TARGET_ANGLES` (longitud 7) y `JOINT_SPEEDS_DEG_S` al principio del archivo y luego ejecuta:

```bash
python3 examples/mit_position_control.py
```

Predeterminado: J1 → +50° (20°/s), las demás y la pinza en 0°; la terminal muestra objetivo / enviado / temperatura; Esc / Ctrl+C sale con retorno a cero.

:::danger
El brazo puede moverse rápidamente en modo MIT. Mantén a las personas y el equipo alejados y permanece dentro de aproximadamente el 70% del espacio de trabajo.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Video demo - Full parameter demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Uso como biblioteca

### Ejemplo mínimo

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# Wait for motion to finish before stop; see examples/quick_start.py
arm.stop()  # slow return-to-zero → disable → close CAN
```

### Configuración personalizada y pinza

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

### Lectura pasiva de posición

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()
arm.connect()           # MIT → enable → read current angles
arm.disable_motors()    # disable — move arm by hand

actual = arm.read_joint_angles()
print(actual)

arm.stop(return_to_zero=False, wait=True)  # close CAN, no return-to-zero
```

### Ciclo de vida del controlador

**Control de movimiento MIT**:

```
create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

**Lectura pasiva de posición** (sin movimiento ordenado):

```
create → connect() → disable_motors() → read_joint_angles() → … → stop(return_to_zero=False)
```

### API principal

| Método / atributo | Descripción |
|--------------------|-------------|
| `connect()` | Conecta CAN, modo MIT, habilita, lee ángulos actuales; se llama automáticamente mediante `start()` |
| `disable_motors()` | Deshabilita todos los motores sin cerrar CAN (para lectura pasiva) |
| `start(enable_esc=True, install_signal_handlers=True)` | Inicia los hilos de control y temperatura |
| `set_joint_angles(angles_deg)` | Establece 7 ángulos objetivo (grados) |
| `set_joint_angle(joint_id, angle_deg)` | Establece una articulación / pinza (1–7) |
| `set_max_speeds(speeds_deg_s)` | Establece 7 velocidades máximas (grados/s) |
| `get_target_angles()` / `get_command_angles()` | Ángulos objetivo / de comando suavizados |
| `read_joint_angles()` | Lectura síncrona de posiciones mecánicas reales (grados); usa CAN |
| `last_temperatures` | Temperatura MOS por motor |
| `is_stopped` | Indica si el apagado seguro ha finalizado |
| `stop(return_to_zero=True, wait=True)` | Detiene (vuelve a cero por defecto) |
| `request_stop(..., emergency=True)` | Parada avanzada / deshabilitado de emergencia |

Constantes exportadas: `GRIPPER_MOTOR_ID = 7`, `GRIPPER_JOINT_ID = 7`.

---

## Preguntas frecuentes (FAQ)

- **`Permission denied` / no se puede abrir can0**  
  Asegúrate de que la interfaz CAN esté `up` y de que tu usuario pueda acceder a los dispositivos de red. Usa `sudo` para `ip link` si es necesario, o revisa las reglas de udev.

- **Sin respuesta del motor / fallo al habilitar**  
  1. Confirma que la tasa de bits es 1 Mbps;  
  2. Confirma que `channel`, `host_id` y los IDs de motor en `config/rebotarm_rs.yaml` coinciden con el hardware;  
  3. Vuelve a ejecutar `ip link` después de reconectar el USB CAN.

- **Se establecen ángulos pero el brazo apenas se mueve**  
  `set_joint_angles()` solo actualiza los objetivos. Establece `set_max_speeds()` razonables y espera hasta que los ángulos de comando se acerquen a los objetivos antes de `stop()`. Consulta `examples/quick_start.py`.

- **La pinza no se mueve**  
  La pinza es **J7 / CAN ID 7**. Pasa **7 valores** a `set_joint_angles` (el último es la pinza), o usa `set_joint_angle(7, angle)`.

- **Tiempo de espera agotado al leer posición / no se pueden leer ángulos**  
  `mechPos` se puede leer de forma fiable en modo MIT después de habilitar. El Tutorial 5 usa `connect()` y luego `disable_motors()` para que puedas mover el brazo a mano y seguir leyendo. Si `ensure_mode` o las lecturas de parámetros agotan el tiempo de espera, revisa el cableado CAN, la terminación y la alimentación de los motores.

- **Spam de alarma de temperatura**  
  Las alarmas se disparan por flancos con histéresis: una alarma por motor por evento de sobretemperatura; se vuelve a alarmar solo después de que la temperatura baje por debajo de `alarm_c - 2°C`.

- **Protección contra bloqueo de la articulación 2 / el brazo cae**  
  A menudo se debe a permanecer más allá de ~70% de extensión del espacio de trabajo. Cicla la alimentación para borrar la protección y reduce los ángulos objetivo y el tiempo de permanencia.

- **Comportamiento tras errores de comunicación**  
  Ante un fallo de comunicación en el bucle de control, el programa **deshabilita de emergencia sin volver a cero** para evitar movimiento bajo malas comunicaciones.

- **Pinocchio / MeshCat / compensación de gravedad**  
  Este repositorio se centra en el control de posición MIT. Para cinemática, simulación y compensación de gravedad, consulta [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) y la guía de Pinocchio & MeshCat en el Wiki de Seeed.

---

## Contacto

- **Repositorio**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **Incidencias**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **Foro**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Referencias

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py (cinemática / simulación / compensación de gravedad)](https://github.com/Seeed-Projects/reBotArm_control_py)
- [Documentación del motor RobStride](https://www.seeedstudio.com/)
- README en chino en este repositorio: `README_zh.md`
- README en inglés en este repositorio: `README.md`
