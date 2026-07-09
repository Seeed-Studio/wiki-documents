---
description: Este tutorial presenta cómo utilizar Pinocchio y MeshCat para el análisis y la visualización de cinemática en el brazo robótico reBot Arm B601-RS.
title: Introducción a Pinocchio y MeshCat para reBot Arm B601-RS
keywords:
  - Pinocchio
  - MeshCat
  - Brazo robótico
  - Robot
  - LeRobot
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-06-30
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_pinocchio_meshcat/
---

# Introducción a Pinocchio y MeshCat para reBot Arm B601-RS

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectorias · Totalmente de código abierto</strong>
</p>

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) es una biblioteca de código abierto para el análisis y la optimización de la dinámica de robots. Proporciona cinemática directa/inversa eficiente, cálculo de dinámica y planificación de trayectorias. [MeshCat](https://github.com/rdeits/meshcat) es una herramienta de visualización 3D basada en la web que puede mostrar en tiempo real los estados del robot y las trayectorias de movimiento.

Este proyecto combina las potentes capacidades de cálculo de Pinocchio con la visualización intuitiva de MeshCat, proporcionando un conjunto completo de herramientas de análisis y depuración de cinemática para reBot Arm B601-RS.


---

## Características del proyecto

1. **Análisis de cinemática completo**
   Soporta cálculos de cinemática directa (FK) y cinemática inversa (IK), permitiendo resolver en tiempo real la pose del efector final del brazo robótico.

2. **Visualización 3D en tiempo real**
   Muestra en el navegador, a través de MeshCat y en tiempo real, el estado del brazo robótico y las trayectorias de movimiento, sin necesidad de software adicional.

3. **Planificación y seguimiento de trayectorias**
   Implementa planificación de trayectorias geodésicas en SE(3), soportando control de seguimiento CLIK (Cinemática Inversa en Bucle Cerrado).

4. **Control de compensación de gravedad**
   Calcula los pares de gravedad de las articulaciones basándose en el modelo dinámico de Pinocchio, logrando un efecto de “flotación” para el brazo robótico. Soporta tanto la versión básica como la versión con bloqueo de velocidad del efector final.

5. **Control de motor en múltiples modos**
   Soporta modos de control MIT, POS_VEL y VEL, compatible con los protocolos de motor Damiao y Robostride.

6. **Código abierto y extensible**
   Todo el código es de código abierto, lo que permite a los usuarios personalizar algoritmos de control y efectos de visualización según sus necesidades.

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/)

| Parámetro | Especificación |
|-----------|--------------|
| Modelo de brazo robótico | Kit ensamblado reBot Arm B601-RS con pinza |
| Grados de libertad | 6+1 (con pinza) |
| Alcance | 754.7 mm (con pinza) / 587.5 mm (sin pinza) |
| Capacidad de carga | Carga nominal 2.5 kg / Carga máxima 5 kg |
| Rango de movimiento de las articulaciones | J1: ±150° / J2: 220° ~ 0° / J3: 220° ~ 0° / J4: ±90° / J5: ±90° / J6: ±180° / Pinza: 345° ~ 0° |
| Repetibilidad | 0.1 mm |
| Peso propio | 6.7 kg |
| Servomotores | RobStride 06 × 3 / RobStride 00 × 4 |
| Comunicación | Bus CAN @ 1 Mbps |
| Tensión de funcionamiento | CC 48V |
| Fuente de alimentación | CC 48V 15A |
| Temperatura de funcionamiento | -20°C ~ 50°C |
| Método de control | PC |

### Plataformas de software compatibles

| Plataforma | Estado de soporte |
|----------|---------------|
| ROS1 | ✅ |
| MoveIt1 | ✅ |
| ROS2 | ✅ |
| MoveIt2 | ✅ |
| Python | ✅ |
| LeRobot | ✅ |
| Isaac Sim | ✅ |
| Pinocchio | ✅ |

### Parámetros de los motores de las articulaciones

| Parámetro | RobStride 00 | RobStride 06 |
|-----------|--------------|--------------|
| Tensión nominal | 48V | 48V |
| Corriente nominal | 4.7 Apk ± 10% | 14.3 Apk ± 10% |
| Corriente pico | 15.5 Apk ± 10% | 57 Apk ± 10% |
| Par nominal | 5 N.m | 11 N.m |
| Par pico | 14 N.m | 36 N.m |
| Velocidad nominal | 100 rpm ± 10% | 100 rpm ± 10% |
| Velocidad máxima en vacío | 315 rpm ± 10% | 480 rpm ± 10% |
| Relación de reducción | 10 : 1 | 9 : 1 |
| Pares de polos | 28 | — |
| Inductancia del motor | 750 ± 20 μH | 0.165 mH ± 10% |
| Resistencia de línea | 1.5 ± 10% Ω | 0.23 ± 10% Ω |
| Diámetro exterior | 57 mm | 82 mm |
| Altura | 51 ± 1 mm | 49 ± 0.5 mm |
| Peso del motor | 310 g ± 3 g | 621 g |
| Resolución del codificador | 14 bit (absoluto de una vuelta) | |
| Número de codificadores | 2 | |
| Tipo de codificador | Codificador magnético (una vuelta) | |
| Interfaz de control | CAN @ 1 Mbps | |
| Interfaz de depuración | UART @ 921600 bps | |
| Modos de control | Modo MIT / Modo de velocidad / Modo de posición / Modo de par | |
| Protección | Protección contra sobretemperatura: la temperatura del termistor del motor supera los 145°C<br />Protección contra subtensión: tensión del motor por debajo de la tensión de protección de 12V | |

## Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|-----------|----------|----------|
| Brazo robótico reBot Arm B601-RS | 1 | ✅ |
| CANABLE | 1 | ✅ |
| Adaptador de corriente (CC 48V 15A) | 1 | ✅ |
| Cable USB-C | 1 | ✅ |
| Pinza | 1 | ✅ |


## Requisitos del entorno

| Elemento | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema operativo** | Ubuntu 22.04+ |
| **Interfaz de comunicación** | Interfaz CAN (can0) |
| **Fuente de alimentación** | CC 48V 15A |

---

## Pasos de instalación

### Paso 1. Instalar uv (si no está instalado)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Paso 2. Sincronizar entorno (instalar todas las dependencias)

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` creará automáticamente un entorno virtual (si no existe) e instalará todas las dependencias basándose en `pyproject.toml` y `uv.lock`.
:::

### Paso 3. Modificar el archivo de configuración para la versión RS

Esta Wiki es para **reBot Arm B601-RS**. Antes de ejecutar cualquier ejemplo, cambia la configuración de hardware en `config/rebotarm.yaml` de la versión DM a la versión RS:

```yaml
# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"
```

:::caution
Si no se modifica esta configuración, el programa se comunicará utilizando el protocolo de motor Damiao, lo que hará que los motores RS no se reconozcan o no funcionen correctamente.
:::


### Herramientas de depuración

:::tip Configuración del canal CAN
Antes de ejecutar ejemplos de control en máquina real y depurar motores, debes configurar el canal CAN (para PCAN-USB, es necesario configurarlo de nuevo después de reconectar el dispositivo):

```bash
# PCAN-USB should usually appear directly as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up    # Bring up can0
```

:::

### Consola de un solo motor — Robostride RS06 (`0x01rs06_test.py`)

Utiliza directamente el SDK de motorbridge para las pruebas de un solo motor Robostride RS06. Los motores RS06 se comunican mediante **bus CAN**.

**Comando de ejecución**:
```bash
uv run python example/0x01rs06_test.py
```

**Comandos interactivos**:
| Comando | Descripción |
|---------|-------------|
| `enable` / `disable` | Habilitar/Deshabilitar |
| `set_zero` | Establecer posición cero por software |
| `state` | Ver estado actual |
| `ping` | Hacer ping al motor para obtener respuesta |
| `clear_error` | Borrar errores del motor |
| `mode <mit/posvel/vel>` | Cambiar modo de control |
| `mit <pos> [vel] [kp] [kd]` | Comando en modo MIT |
| `posvel <pos> [vlim]` | Comando en modo POS_VEL |
| `vel <velocity>` | Comando en modo de velocidad pura |
| `read_param <id> [type]` | Leer parámetros del motor |
| `write_param <id> <value> [type]` | Escribir parámetros del motor |
| `loop` | Entrar en modo de control en bucle |
| `q` / `quit` | Salir |

**Nota**: Los motores Robostride utilizan la interfaz CAN (por defecto `can0`), con ID de host/retroalimentación por defecto `0xFD`. Durante las pruebas del motor, es necesario deshabilitar primero el motor y luego volver a habilitarlo para permitir la lectura y el control normales.

---

### Calibración de cero y monitorización de ángulos (`2_zero_and_read.py`)

Establece automáticamente todas las posiciones cero de las articulaciones y muestra los ángulos de las articulaciones en tiempo real.

**Comando de ejecución**:
```bash
uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---

## Pruebas de control básicas

### Control completo de articulaciones en modo MIT (`3_mit_control.py`)

Todas las articulaciones utilizan de forma uniforme el modo MIT, enviando comandos de control de manera síncrona en cada ciclo.

**Entrada**: Todos los ángulos de las articulaciones (grados), separados por espacios. Si se configura la pinza, se requiere un ángulo adicional para la pinza.

**Comando de ejecución**:
```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```
:::danger
Ten en cuenta que en el modo de control MIT, el brazo robótico se mueve muy rápido. Asegúrate de que las personas y otros dispositivos estén fuera del radio de trabajo del brazo.
:::

---

### Control completo de articulaciones en modo POS_VEL (`4_pos_vel_control.py`)

Introduce todos los ángulos objetivo de las articulaciones para completar el control del motor en el modo híbrido POS_VEL (Posición-Velocidad), logrando un movimiento más suave y controlable al alcanzar los ángulos objetivo, reduciendo la vibración.

**Comando de ejecución**:
```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

---

## Pruebas de cinemática

### Prueba de cinemática directa (`5_fk_test.py`)

Calcular la pose del efector final a partir de los ángulos de las articulaciones.

**Entrada**: 6 ángulos de articulación (grados)

**Salida**:
- Posición del efector final (X, Y, Z) — unidad: metros
- Matriz de rotación (3×3)
- Ángulos de Euler (roll/pitch/yaw) — unidad: grados

**Ejemplo**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

### Prueba de cinemática inversa (`6_ik_test.py`)

Resolver los ángulos de las articulaciones a partir de la pose deseada del efector final.

**Formato de entrada**:
- Solo posición: `<x> <y> <z>` (metros)
- Posición + orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)

**Ejemplo**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + orientation
```

### Control de cinemática inversa en modo MIT (`7_arm_ik_control.py`)

Utiliza cinemática inversa (IK) en modo MIT para especificar las coordenadas 3D (X, Y, Z) y la orientación (ángulos de Euler) a las que debe moverse el efector final del brazo robótico.

**Formato de entrada**:
- Solo posición: `<x> <y> <z>` (metros)
- Posición + Orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)
- Introduce `state`: Ver los valores actuales en radianes de cada articulación.
- Introduce `end_state`: Ver las coordenadas actuales reales del efector final (m) y los ángulos de Euler (rad) en el espacio.

**Comando de ejecución**:
```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Exit system
```
:::danger
Ten en cuenta que en este código de ejemplo, el brazo robótico se mueve muy rápido. Asegúrate de que las personas y otros dispositivos estén fuera del radio de trabajo del brazo.
:::

### Control de cinemática inversa con trayectoria suave (`8_arm_traj_control.py`)

Utiliza cinemática inversa (IK) en modo MIT para planificar automáticamente una trayectoria de movimiento con aceleración/desaceleración uniforme o suave dentro del tiempo objetivo, evitando fuertes vibraciones en las articulaciones.

**Formato de entrada**:
- Solo posición: `<x> <y> <z>` (metros)
- Posición + Orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)
- Posición + Orientación + Tiempo (por defecto 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (grados)
- Introduce `state`: Ver los valores actuales en radianes de cada articulación.
- Introduce `end_state`: Ver las coordenadas actuales reales del efector final (m) y los ángulos de Euler (rad) en el espacio.

**Comando de ejecución**:
```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Exit system
```

### Control de compensación de gravedad — Versión básica (`9_gravity_compensation.py`)

Utiliza el modelo dinámico Pinocchio para compensar la gravedad de las articulaciones.

**Ley de control**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamiento esperado**:
- El brazo robótico puede "flotar" en cualquier pose
- No caerá por su propio peso después de soltarlo
- Se puede mover manualmente a cualquier posición

**Comando de ejecución**:
```bash
uv run python example/9_gravity_compensation.py
```

**Salida**:
- Muestra en tiempo real el par deseado para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

:::caution Vuelve a la posición inicial antes de salir de la compensación de gravedad
Al detener el script (`Ctrl+C`), el programa **deshabilitará directamente todos los motores**, y el brazo robótico **no volverá automáticamente a cero**. Sujeta el brazo robótico con la mano o muévelo a una pose segura/inicial antes de salir para evitar caídas repentinas de las articulaciones que puedan causar colisiones o daños.
:::

:::tip Ajuste de la compensación de articulaciones individuales
Si algunas articulaciones están subcompensadas o sobrecompensadas debido a fricción estructural o diferencias de montaje, puedes aplicar un factor de escala adicional al elemento correspondiente del array `tau_g` en el código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por ejemplo, `tau_g[2] *= 1.2` significa aumentar en un 20% el par de compensación de gravedad de la articulación 2. Se recomienda ajustar elemento por elemento según el efecto de flotación real para evitar realizar cambios excesivamente grandes de una sola vez.
:::

---

### Control de compensación de gravedad — Versión con bloqueo de velocidad del efector final (`10_gravity_compensation_lock.py`)

Basado en la compensación de gravedad básica, añade detección de velocidad del efector final y un mecanismo de bloqueo de ángulo de articulación.

**Ley de control**:
```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lógica de bloqueo**:
- Cuando la velocidad lineal del efector final `||v_ee|| < 0.04 m/s` y la velocidad angular `||w_ee|| < 0.08 rad/s`:
  - El ángulo de articulación objetivo `q_target` permanece bloqueado
  - El brazo robótico se bloquea en la posición actual
- Cuando la velocidad del efector final supera el umbral:
  - `q_target` se actualiza al ángulo de articulación actual
  - Permite empujar manualmente para cambiar la posición

**Comportamiento esperado**:
- El brazo robótico se bloquea en la posición actual, requiriendo fuerza para cambiar el ángulo objetivo
- Más estable que la versión básica, adecuada para escenarios que requieren mantenimiento de la pose

**Comando de ejecución**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Salida**:
- Muestra en tiempo real el estado de bloqueo (LOCKED / UPDATE)
- Velocidad lineal del efector final, velocidad angular
- Par de compensación de gravedad para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

:::caution Vuelve a la posición inicial antes de salir de la compensación de gravedad
Al detener el script (`Ctrl+C`), el programa **deshabilitará directamente todos los motores**, y el brazo robótico **no volverá automáticamente a cero**. Sujeta el brazo robótico con la mano o muévelo a una pose segura/inicial antes de salir para evitar caídas repentinas de las articulaciones que puedan causar colisiones o daños.
:::

:::tip Ajuste de la compensación de articulaciones individuales
Si algunas articulaciones están subcompensadas o sobrecompensadas debido a fricción estructural o diferencias de montaje, puedes aplicar un factor de escala adicional al elemento correspondiente del array `tau_g` en el código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por ejemplo, `tau_g[2] *= 1.2` significa aumentar en un 20% el par de compensación de gravedad de la articulación 2. Se recomienda ajustar elemento por elemento según el efecto de flotación real para evitar realizar cambios excesivamente grandes de una sola vez.
:::

**Configuración de prueba de seguridad**:
Puedes modificar la lista `ENABLED_JOINTS` al principio del script para habilitar solo las articulaciones especificadas para pruebas de seguridad:
```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

---

### Entorno de simulación

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" />
</div>


#### Simulación de cinemática directa (`sim/fk_sim.py`)

Simulación interactiva de cinemática directa, visualizando la pose del brazo robótico en MeshCat introduciendo ángulos de articulación.

**Comando de ejecución**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos interactivos**:
- Introduce 6 ángulos de articulación (grados), separados por espacios
- Ejemplo: `0 0 0 0 0 0`
- Ejemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Salir

**Funciones**:
- Muestra en tiempo real la posición y orientación del efector final
- Admite entrada continua para probar diferentes poses
- Muestra información de pose formateada

---

#### Simulación de cinemática inversa (`sim/ik_sim.py`)

Simulación interactiva de cinemática inversa, resolviendo automáticamente los ángulos de articulación y visualizándolos para una pose objetivo.

**Comando de ejecución**:
```bash
uv run python example/sim/ik_sim.py
```

**Formato de entrada**:
- Solo posición: `x y z` (metros)
- Posición + Orientación: `x y z roll pitch yaw` (radianes)

**Ejemplo**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position + orientation
```

**Funciones**:
- Determina automáticamente si la IK converge
- Muestra el número de iteraciones y el error
- Actualiza en tiempo real la pose del robot

---

#### Simulación de planificación de trayectoria (`sim/traj_sim.py`)

Simulación de planificación de trayectoria geodésica en SE(3), incluyendo seguimiento CLIK y reproducción de animaciones en MeshCat.

**Comando de ejecución**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos interactivos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianes)
- Pulsa Enter directamente para usar la configuración por defecto
- `q`: Salir

**Funciones**:
- Planifica desde la posición actual hasta la pose objetivo
- Utiliza un perfil de trayectoria de mínimo tirón (minimum jerk)
- Muestra estadísticas de la trayectoria en tiempo real
- Reproduce la animación completa de la trayectoria en MeshCat
- Muestra la trayectoria de referencia (gris) y la trayectoria real (verde)

---

#### Herramienta de visualización (`sim/visualizer.py`)

Wrapper del visualizador MeshCat, que proporciona una interfaz unificada de visualización del robot.

**Funciones principales**:
- Cargar el modelo URDF y mostrar el robot
- Dibujar trayectorias polilínea 3D (referencia/real)
- Mostrar la pose objetivo de IK (ejes de tres colores + esfera)
- Admitir reproducción de animaciones de trayectorias articulares

**Ejemplo de uso**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```


---

## Preguntas frecuentes (FAQ)

- **Aparece el error `Permission denied`**
  Asegúrate de ejecutar `sudo chmod 666 /dev/ttyACM0` (Damiao) o `sudo chmod 666 /dev/can0` (Robostride) para establecer los permisos del dispositivo.

- **La resolución de IK falla o los resultados son anormales**
  Comprueba si la pose objetivo está dentro del espacio de trabajo del brazo robótico y asegúrate de que los límites de las articulaciones estén configurados correctamente.

- **El efecto de compensación de gravedad es deficiente**
  Esto puede deberse a errores estructurales y a la precisión del mecanizado. La compensación de gravedad en este proyecto se basa en URDF y Pinocchio. Puedes intentar corregir el URDF con los parámetros que realmente hayas medido (puedes pedir ayuda a una IA para este paso).

- **Los motores Robostride no pueden leer el estado**
  Los problemas de configuración del protocolo interno en motorbridge pueden impedir que los motores RS consulten el estado como los motores DM. Por favor, júzgalo según los efectos de movimiento reales, o intenta usar el comando `ping` para confirmar la comunicación normal con los motores.

- **Cómo cambiar entre las configuraciones de motores Damiao y Robostride**
  Modifica el archivo de configuración `config/rebotarm_dm.yaml` (Damiao) o `config/rebotarm_rs.yaml` (Robostride) y carga la configuración correspondiente en el código.

---

## Contacto

- **Soporte técnico**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repositorio del proyecto**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **Foro**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de referencia

- [Pinocchio Official Documentation](https://stack-of-tasks.github.io/pinocchio/)
- [MeshCat Official Documentation](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---