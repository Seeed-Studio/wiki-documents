---
description: Este tutorial muestra cómo usar rebot_control para realizar control de posición MIT en el reBot Arm B601-RS a través de MotorBridge y el bus CAN, incluyendo pinza, protección de temperatura y retorno seguro a cero.
title: Introducción al control de posición MIT en el reBot Arm B601-RS
keywords:
  - reBot
  - B601-RS
  - MIT
  - MotorBridge
  - RobStride
  - CAN
  - Brazo robótico
  - Pinza
  - Protección de temperatura
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_mit_control
sku: 100019336
last_update:
  date: 2026-08-04
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-08-04'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_mit_control/
---

# Introducción al control de posición MIT en el reBot Arm B601-RS

<p align="center">
    <a href="https://github.com/LAN-GER/rebot_control/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Mode-MIT%20Position-yellow.svg" alt="MIT Mode" />
</p>

<p align="center">
  <strong>6+1 GDL · RobStride · CAN @ 1 Mbps · Control de posición MIT · Protección de temperatura · Retorno seguro a cero · Interfaz Python de código abierto</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

[MotorBridge](https://github.com/motorbridge/motorbridge) es un SDK de control CAN en Python para motores como RobStride y Damiao. Sobre él, [rebot_control](https://github.com/LAN-GER/rebot_control) encapsula una interfaz de control de posición MIT adaptada al **reBot Arm B601-RS**: configuración YAML, limitación de velocidad por articulación, protección de temperatura MOS de tres niveles y retorno suave a cero activado por Esc / Ctrl+C / `stop()`.

Este tutorial te guía a través de: configuración del entorno → configuración de CAN → ejecución de los ejemplos → uso como biblioteca para desarrollo secundario.

:::caution Aviso de seguridad importante
- **Este proyecto solo proporciona la interfaz de control; no incluye límites de articulación por software ni límites de espacio de trabajo.** Los ángulos objetivo que configures se envían directamente a los motores.
- **Mantén el brazo dentro de aproximadamente el 70% de su espacio de trabajo.** Permanecer más allá del espacio de trabajo durante períodos prolongados puede activar la protección contra bloqueo en el motor J2 y el brazo puede caer.
- Para el primer uso, realiza pruebas con **ángulos pequeños y bajas velocidades**, y asegúrate de que el entorno esté libre de obstáculos y que las personas se mantengan alejadas del radio de trabajo.
:::

---

## Características del proyecto

1. **Control de posición MIT**  
   Envía continuamente comandos de posición MIT a 200 Hz por defecto; cada articulación tiene un límite de velocidad independiente, con suavizado de velocidad en bucle.

2. **Compatibilidad con 6+1 motores**  
   J1–J6 son articulaciones del brazo, y **J7 (ID CAN 7) es la pinza del efector final**, todos controlados de forma unificada mediante `set_joint_angles` / `set_joint_angle`.

3. **Protección de temperatura de tres niveles**  
   Supervisa en tiempo real la temperatura MOS de cada motor: alarma y continuar → retorno lento a cero por alta temperatura y luego desactivación → desactivación de emergencia (sin retorno a cero).

4. **Salida segura y retorno a cero**  
   Esc / Ctrl+C / `arm.stop()` activan una trayectoria smoothstep para un retorno lento a cero; al pulsar Ctrl+C de nuevo durante el retorno se aborta inmediatamente y se desactiva.

5. **Configuración basada en YAML**  
   El canal CAN, los umbrales de temperatura, los parámetros de retorno a cero y los `kp`/`kd` de los motores se configuran todos en `config/rebotarm_rs.yaml`, lo que permite cambiar parámetros sin tocar el código.

6. **Amigable para desarrollo secundario**  
   Capas limpias (configuración / interfaz / ejemplos); puede usarse directamente como biblioteca mediante `from rebot import ReBotRSMITController`.

---

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/).

| Parámetro | Especificación |
|-----------|---------------|
| Modelo de brazo | Kit ensamblado reBot Arm B601-RS con pinza |
| Grados de libertad | 6+1 (incluida la pinza) |
| Radio de trabajo | 754.7 mm (con pinza) / 587.5 mm (sin pinza) |
| Carga útil | Nominal 2.5 kg / Máxima 5 kg |
| Rango de articulaciones | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Pinza: 345° ~ 0° |
| Repetibilidad | 0.1 mm |
| Peso propio | 6.7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 (incluida la pinza) |
| Comunicación | Bus CAN @ 1 Mbps |
| Tensión de funcionamiento | CC 48V |
| Fuente de alimentación | CC 48V 15A |
| Temperatura de funcionamiento | -20°C ~ 50°C |
| Método de control | PC |

### Asignación de motores en este proyecto

| Articulación # | ID CAN | Modelo | Notas |
|---------|--------|-------|-------|
| J1 | 1 | RS06 | Base |
| J2 | 2 | RS06 | |
| J3 | 3 | RS06 | |
| J4 | 4 | RS00 | |
| J5 | 5 | RS00 | |
| J6 | 6 | RS00 | Muñeca |
| J7 | **7** | RS00 | **Pinza del efector final** |

### Capacidades de software compatibles (este repositorio)

| Función | Estado |
|------------|--------|
| Control de posición MIT | ✅ |
| Limitación de velocidad por articulación | ✅ |
| Control de pinza (ID CAN 7) | ✅ |
| Monitorización de temperatura MOS y protección de tres niveles | ✅ |
| Retorno seguro a cero / desactivación de emergencia | ✅ |
| Configuración YAML | ✅ |
| Llamadas como biblioteca Python | ✅ |
| Cinemática directa/inversa (Pinocchio) | ❌ (ver [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)) |
| Simulación MeshCat | ❌ (ver el repositorio anterior) |

### Parámetros de los motores de las articulaciones

| Parámetro | RobStride 00 | RobStride 06 |
|-----------|-------------|--------------|
| Tensión nominal | 48V | 48V |
| Corriente nominal | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| Corriente pico | 15.5 Apk ± 10% | 57 Apk ± 10% |
| Par nominal | 5 N·m | 11 N·m |
| Par pico | 14 N·m | 36 N·m |
| Velocidad nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidad máxima en vacío | 315 rpm ± 10% | 480 rpm ± 10% |
| Relación de engranajes | 10 : 1 | 9 : 1 |
| Interfaz de control | CAN @ 1 Mbps | CAN @ 1 Mbps |
| Modo de control | MIT / Velocidad / Posición / Par | MIT / Velocidad / Posición / Par |

## Lista de materiales (BOM)

| Parte | Cant. | Incluido |
|------|-----|----------|
| Brazo robótico reBot Arm B601-RS | 1 | ✅ |
| Adaptador CAN (CANABLE / PCAN-USB, etc.) | 1 | ✅ |
| Adaptador de corriente (CC 48V 15A) | 1 | ✅ |
| Cable USB-C | 1 | ✅ |
| Pinza | 1 | ✅ |

## Requisitos del entorno

| Elemento | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **SO** | Ubuntu 22.04+ (recomendado) |
| **Interfaz de comunicación** | Interfaz CAN (por defecto `can0`) |
| **Alimentación** | CC 48V 15A |
| **Dependencias** | `motorbridge`, `pyyaml`; opcional `pynput` (tecla Esc) |

---

## Pasos de instalación

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
`pynput` se utiliza para escuchar la tecla Esc. Si no se instala, solo la función de Esc no estará disponible; Ctrl+C y `arm.stop()` seguirán funcionando.
:::

### Paso 3. Configurar la interfaz CAN

```bash
# View the interface (PCAN-USB, etc.)
sudo modprobe peak_usb   # If using a PEAK adapter
ip -br link

# Set can0 bitrate to 1 Mbps (RobStride default)
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 up type can bitrate 1000000
```

:::caution
Después de volver a conectar un adaptador CAN USB, normalmente necesitas ejecutar de nuevo la configuración de `ip link`.
:::

### Paso 4. (Opcional) Ajustar el archivo de configuración

Edita `config/rebotarm_rs.yaml`:

| Configuración | Descripción | Valor por defecto |
|--------|-------------|---------|
| `can.channel` | Nombre de la interfaz CAN | `can0` |
| `can.host_id` | ID del host | `0xFD` |
| `control.control_hz` | Frecuencia de envío de comandos MIT (no velocidad de movimiento) | 200 Hz |
| `control.telemetry_hz` | Frecuencia de lectura de temperatura | 2 Hz |
| `temperatures.alarm_c` | Umbral de alarma de temperatura | 80°C |
| `temperatures.return_zero_c` | Umbral de retorno a cero por alta temperatura | 100°C |
| `temperatures.disconnect_c` | Umbral de desactivación de emergencia | 140°C |
| `return_zero.max_speed_deg_s` | Velocidad pico para retorno normal a cero | 30°/s |
| `return_zero.thermal_max_speed_deg_s` | Velocidad pico para retorno a cero por alta temperatura | 30°/s |
| `return_zero.min_time_s` | Duración mínima del retorno a cero | 3.0 s |
| `return_zero.settle_time_s` | Tiempo de espera tras alcanzar cero | 0.30 s |
| `motors` | ID / modelo del motor / `kp` / `kd` de MIT | ver YAML |

Los elementos no rellenados en el YAML usan valores por defecto del código; rellenar una clave inexistente genera un error inmediatamente, lo que facilita detectar errores tipográficos.

---

## Estructura del código

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

Notas sobre las capas:

- **Archivo de configuración**: única fuente de verdad para los parámetros ajustables.
- **Capa de configuración**: `load_config()` → `ControllerConfig`.
- **Capa de interfaz**: lógica de control pura, sin parámetros de demostración codificados.
- **Capa de ejemplos**: ángulos objetivo, velocidades y flujo de ejecución.

---

## Notas sobre las funciones

### Control MIT y suavizado de velocidad

- `control_hz` (200 Hz por defecto) solo determina la **frecuencia de envío de comandos**.
- La velocidad real de movimiento viene determinada por `set_max_speeds([...])` (unidad: grados/segundo).
- `set_joint_angles()` solo actualiza el **objetivo**; el bucle de control mueve gradualmente el **ángulo comandado** hacia el objetivo a la velocidad limitada.

:::tip
Si llamas a `stop()` justo después de establecer el objetivo, apenas verás movimiento hacia el objetivo. Los ejemplos usan `wait_for_command_targets()` (ver `examples/_bootstrap.py`) para esperar hasta que el ángulo comandado esté cerca del objetivo antes de volver a cero.
:::

### Protección de temperatura de tres niveles

| Umbral (predeterminado) | Comportamiento |
|---------------------|----------------|
| ≥ 80°C | Alarma de temperatura (se informa solo una vez por flanco de sobretemperatura por motor); continúa funcionando |
| ≥ 100°C | Detiene el movimiento, vuelve lentamente a cero a la velocidad máxima de alta temperatura y luego se deshabilita |
| ≥ 140°C | Deshabilitado de emergencia inmediato, **sin retorno a cero** |

### Retorno seguro a cero

El retorno a cero utiliza una trayectoria **smoothstep**. La duración total es:

```
duration = max(min_time_s, time estimated from peak speed for each joint)
```

La velocidad máxima es `max_speed_deg_s` (normal) o `thermal_max_speed_deg_s` (alta temperatura). Ambas son por defecto **30°/s**, y `min_time_s` es **3.0 s**.

| Método de salida | Comportamiento |
|-----------------|----------------|
| Esc / primer Ctrl+C / `arm.stop()` | Retorno lento a cero → deshabilitar → cerrar CAN |
| Segundo Ctrl+C durante el retorno a cero | Aborta inmediatamente el retorno y deshabilita |
| Error de comunicación | Deshabilitado de emergencia, no se intenta retorno a cero |

### Convención de unidades

| Contexto | Unidad |
|----------|--------|
| API externa (ángulos, velocidades) | grados, grados/segundo |
| MotorBridge MIT interno | radianes, radianes/segundo |

---

## Tutoriales de llamada

Todos los ejemplos siguientes se ejecutan desde la **raíz del proyecto**. Cada script tiene un encabezado **Expected motion** en la parte superior e imprime una línea `[Expected]` al inicio, lo que facilita seguirlo.

| Tutorial | Archivo | Comando |
|----------|---------|---------|
| 1. Quick Start | `examples/quick_start.py` | `python3 examples/quick_start.py` |
| 2. Custom Config | `examples/custom_config.py` | `python3 examples/custom_config.py` |
| 3. Status Monitoring | `examples/monitor_status.py` | `python3 examples/monitor_status.py` |
| 4. Single Joint + Gripper | `examples/single_joint_adjust.py` | `python3 examples/single_joint_adjust.py` |
| 5. Read Actual Position | `examples/read_joint_angles.py` | `python3 examples/read_joint_angles.py` |
| 6. Stop Options | `examples/stop_options.py` | `python3 examples/stop_options.py default` |
| 7. Recommended Structure | `examples/recommended_structure.py` | `python3 examples/recommended_structure.py` |
| Demo completa | `examples/mit_position_control.py` | `python3 examples/mit_position_control.py` |

### 1. Inicio rápido (`quick_start.py`)

**Movimiento esperado**: J1 gira a +20° a unos 15°/s mientras las otras articulaciones y el gripper permanecen en 0°; después de alcanzar el objetivo, vuelve lentamente a cero y se deshabilita.

```bash
python3 examples/quick_start.py
```

Flujo: `start()` → `set_max_speeds()` → `set_joint_angles()` → **esperar a que alcance** → `stop()`.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/quick_start/quick_start.mp4" title="Video Demo - Quick Start" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 2. Archivo de configuración personalizada (`custom_config.py`)

```bash
python3 examples/custom_config.py
python3 examples/custom_config.py config/rebotarm_rs.yaml
```

**Movimiento esperado**: J1 → +15° (unos 15°/s), el resto en 0°, luego vuelve a cero.

---

### 3. Monitorizar estado mientras se ejecuta (`monitor_status.py`)

```bash
python3 examples/monitor_status.py
```

**Movimiento esperado**: J1 → +30°; la terminal imprime continuamente objetivo / ordenado / temperatura del MOS. Pulsa **Esc** o **Ctrl+C** para finalizar y volver a cero.

Notas:

- **Objetivo vs ordenado**: el ángulo ordenado va por detrás del objetivo (suavizado limitado por velocidad).
- **Temperatura**: lee `arm.last_temperatures` directamente—no necesitas sondear CAN tú mismo.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/monitor_status/monitor_status.mp4" title="Video Demo - Monitor Status" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 4. Ajuste fino de una sola articulación y gripper (`single_joint_adjust.py`)

```bash
python3 examples/single_joint_adjust.py
```

**Objetivos predeterminados**:

| J1 | J2 | J3 | J4 | J5 | J6 | J7 Gripper |
|----|----|----|----|----|----|------------|
| +25° | +15° | +15° | -15° | 0° | 0° | **180°** |

`joint_id`: 1–6 son articulaciones del brazo, y **7 es el gripper (CAN ID 7)**.

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/single_joint_adjust/single_joint_adjust.mp4" title="Video Demo - Single Joint and Gripper" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 5. Leer posición real (`read_joint_angles.py`)

```bash
python3 examples/read_joint_angles.py
```

**Movimiento esperado**: imprime los ángulos reales al inicio; J1 se mueve hacia +20° durante unos 5 s, luego vuelve a leer el ángulo real (debería estar cerca de 20°); después vuelve a cero.

:::tip
`read_joint_angles()` accede a CAN de forma síncrona, por lo que no debe llamarse a frecuencias muy altas. Usa `get_command_angles()` para monitorizar el progreso de los comandos.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/read_joint_angles/read_joint_angles.mp4" title="Video Demo - Read Actual Position" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 6. Opciones de parada segura (`stop_options.py`)

Cada modo primero mueve J1 a unos +20°, luego se detiene según el modo:

```bash
python3 examples/stop_options.py default      # Slow return-to-zero then disable (recommended)
python3 examples/stop_options.py no_return    # No return-to-zero, disable directly
python3 examples/stop_options.py async        # stop(wait=False) + wait_until_stopped()
python3 examples/stop_options.py emergency    # Emergency disable, no return-to-zero
```

:::danger
`no_return` / `emergency` deja el brazo en una postura distinta de cero y lo deshabilita. Asegúrate de que el entorno sea seguro y sujeta el brazo con la mano si es necesario.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/stop_options/stop_options.mp4" title="Video Demo - Safe Stop Options" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 7. Estructura de programa recomendada (`recommended_structure.py`)

Demuestra `try` / `except` / `finally` para garantizar un `stop()` seguro incluso cuando se producen excepciones.

```bash
python3 examples/recommended_structure.py
```

---

### Demo de parámetros completa (`mit_position_control.py`)

Modifica `TARGET_ANGLES` (longitud 7) y `JOINT_SPEEDS_DEG_S` en la parte superior del archivo, luego ejecuta:

```bash
python3 examples/mit_position_control.py
```

Ejemplo predeterminado: J1 → +50° (20°/s), el resto y el gripper en 0°; la terminal actualiza objetivo / ordenado / temperatura; Esc / Ctrl+C vuelve a cero y sale.

:::danger
En modo MIT el brazo aún puede moverse rápidamente. Mantén a las personas y al equipo fuera del radio de trabajo y limita la operación a aproximadamente el 70% del espacio de trabajo.
:::

<div class="video-container">
<iframe width="900" height="600" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/cn_reBot_Arm_B601_RS_control_mit/V2.0/mit_position_control/mit_position_control.mp4" title="Video Demo - Full Parameter Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Uso como biblioteca

### Ejemplo mínimo

```python
from rebot import ReBotRSMITController

arm = ReBotRSMITController()  # Auto-loads config/rebotarm_rs.yaml

arm.start(enable_esc=True)
arm.set_max_speeds([15.0] * 7)
arm.set_joint_angles([20.0, 0, 0, 0, 0, 0, 0])  # J1–J6 + gripper J7

# You need to wait for motion to complete yourself before calling stop; see examples/quick_start.py
arm.stop()  # Slow return-to-zero → disable → close CAN
```

### Configuración personalizada y gripper

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

### Ciclo de vida del controlador

```
Create → start() → set_max_speeds() → set_joint_angles() / set_joint_angle() → … → stop()
```

### API principal

| Método / Atributo | Descripción |
|------------------|-------------|
| `start(enable_esc=True, install_signal_handlers=True)` | Inicia los hilos de control y temperatura |
| `set_joint_angles(angles_deg)` | Establece 7 ángulos objetivo (grados) |
| `set_joint_angle(joint_id, angle_deg)` | Establece una sola articulación / gripper (1–7) |
| `set_max_speeds(speeds_deg_s)` | Establece 7 velocidades máximas (grados/segundo) |
| `get_target_angles()` / `get_command_angles()` | Ángulos objetivo / ordenados suavizados |
| `read_joint_angles()` | Lee de forma síncrona la posición mecánica real |
| `last_temperatures` | Temperatura del MOS de cada motor |
| `is_stopped` | Indica si la parada segura se ha completado |
| `stop(return_to_zero=True, wait=True)` | Detiene (vuelve a cero por defecto) |
| `request_stop(..., emergency=True)` | Parada avanzada / deshabilitado de emergencia |

Constantes exportadas: `GRIPPER_MOTOR_ID = 7`, `GRIPPER_JOINT_ID = 7`.

---

## Preguntas frecuentes

- **`Permission denied` / no se puede abrir can0**  
  Asegúrate de que la interfaz CAN esté `up` y de que el usuario actual tenga permiso para acceder a dispositivos de red. Usa `sudo` para configurar `ip link` si es necesario, o revisa las reglas de udev.

- **Sin respuesta del motor / fallo al habilitar**  
  1. Confirma que la velocidad de transmisión sea 1 Mbps;  
  2. Confirma que `channel`, `host_id` y los IDs de los motores en `config/rebotarm_rs.yaml` coincidan con el hardware real;  
  3. Después de reconectar el USB CAN, ejecuta `ip link` de nuevo.

- **Se establecen ángulos pero casi no se mueve**  
  `set_joint_angles()` solo cambia el objetivo. Establece un `set_max_speeds()` razonable y espera a que el ángulo ordenado se acerque al objetivo antes de llamar a `stop()`. Consulta `examples/quick_start.py`.

- **La pinza no se mueve**  
  La pinza es **J7 / CAN ID 7**. `set_joint_angles` debe recibir **7 valores**, siendo el último la pinza; o usa `set_joint_angle(7, angle)`.

- **Alarma de temperatura continua**  
  La implementación actual se activa por flanco con rebote por histéresis: cada motor informa solo una vez por evento de sobretemperatura; informará de nuevo solo después de que la temperatura baje por debajo de `alarm_c - 2°C`.

- **Protección por bloqueo de J2 / el brazo cae**  
  Es común cuando se opera más allá de aproximadamente el 70% del alcance del brazo durante períodos prolongados. Apaga y enciende el brazo para borrar la protección y reduce los ángulos objetivo y el rango de permanencia.

- **Comportamiento tras un error de comunicación**  
  Cuando el bucle de control encuentra un fallo de comunicación, el programa **deshabilita de emergencia sin volver a cero**, evitando el movimiento continuo bajo una comunicación defectuosa.

- **Relación con los tutoriales de Pinocchio / MeshCat / compensación de gravedad**  
  Este repositorio se centra en la interfaz de control de posición del MIT. Para cinemática, simulación de trayectorias y compensación de gravedad, consulta [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) y el Wiki de Seeed "Getting Started with Pinocchio and MeshCat".

---

## Contacto

- **Repositorio del proyecto**: [https://github.com/LAN-GER/rebot_control](https://github.com/LAN-GER/rebot_control)
- **Soporte técnico / Incidencias**: [GitHub Issues](https://github.com/LAN-GER/rebot_control/issues)
- **Foro**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Referencias

- [MotorBridge SDK](https://github.com/motorbridge/motorbridge)
- [reBotArm_control_py (cinemática / simulación / compensación de gravedad)](https://github.com/Seeed-Projects/reBotArm_control_py)
- [Documentación del motor RobStride](https://www.seeedstudio.com/)
- README en chino de este repositorio: `README_zh.md`
