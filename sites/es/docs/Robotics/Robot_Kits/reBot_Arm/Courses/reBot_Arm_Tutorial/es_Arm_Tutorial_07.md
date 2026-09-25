---
description: "Capítulo 7 del Curso para Principiantes en IA Física de Seeed — MotorBridge, la biblioteca de control de motores CAN entre proveedores, y cómo controlar motores DM y RS vía web y Python."
title: Capítulo 7 - Biblioteca de Control de Motores MotorBridge
keywords:
  - reBot
  - MotorBridge
  - DM Motor
  - RS Motor
  - CAN
  - Python
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_7
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 7 · Práctica</span>
    <h2>7. Biblioteca de Control de Motores MotorBridge</h2>
    <p>
      Capítulo 7 del Curso para Principiantes en IA Física de Seeed — MotorBridge, la
      biblioteca de control de motores CAN entre proveedores, y cómo controlar motores DM y RS vía web y Python.
    </p>
    <div className="hero-actions">
      <a href="#install">Instalación</a>
      <a href="#dm-motors">Motores DM</a>
      <a href="#rs-motors">Motores RS</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>7.1 ¿Qué es MotorBridge?</span>
    <span>7.2 Entorno de instalación</span>
    <span>7.3 MotorBridge controla motores DM</span>
    <span>7.4 MotorBridge controla motores RS</span>
  </div>
</section>

<RebotCourseNav />

## 7.1 ¿Qué es MotorBridge?

<section id="what-is-motorbridge" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>7.1 ¿Qué es MotorBridge?</h2>
  </div>

MotorBridge es una **pila de software de control de motores CAN unificada entre proveedores** de código abierto por **Seeed Studio**, orientada a motores de articulación integrados para brazos robóticos/robots humanoides. Utiliza un núcleo Rust de alto rendimiento en la capa inferior, proporciona una interfaz estándar C ABI y viene con enlaces de lenguaje para Python/C++/ROS2. Un solo conjunto de APIs puede controlar los principales motores de articulación integrados del mercado.

:::tip Posicionamiento central
**Un solo conjunto de código, compatible con todos los motores de articulación principales, eliminando las diferencias en el protocolo CAN propietario de cada proveedor** — resolviendo específicamente el punto de dolor de la tediosa adaptación a múltiples marcas de motores en el desarrollo de brazos robóticos.
:::

**Qué puntos de dolor de la industria resuelve:**

Las articulaciones integradas en el mercado (Damiao, RobStride, MyActuator, etc.) tienen cada una protocolos CAN propietarios, formatos de comandos y modos de control completamente incompatibles. MotorBridge proporciona una capa de encapsulación abstracta — **las llamadas al API de la capa superior son completamente consistentes, y la capa inferior se adapta automáticamente a los diferentes protocolos de los proveedores**. Cambiar de motor solo requiere modificar los parámetros del proveedor, sin cambiar la lógica de control de movimiento.

En concreto, resuelve:

1. Cambiar la marca del motor requiere reescribir todo el conjunto de código de comunicación CAN y de control de tres bucles;
2. Los desarrolladores necesitan aprender simultáneamente más de 5 conjuntos de protocolos propietarios y mantener múltiples bibliotecas de código;
3. Falta de herramientas unificadas de depuración, calibración y visualización — las herramientas incluidas con cada motor no son universales;
4. El control nativo en Python tiene un rendimiento en tiempo real deficiente, y las pausas del GC afectan al control de movimiento del robot.

| Proveedor de motor | Tipo de bus | Modos de control compatibles |
| :--- | :--- | :--- |
| Damiao | CAN2.0 / Puente serie | Impedancia MIT, Posición-Velocidad, Velocidad pura, Control Fuerza-Posición |
| RobStride | CAN2.0 | MIT, Posición, Velocidad |
| MyActuator RMD | CAN2.0 | Corriente, Posición, Velocidad |
| HighTorque | CAN2.0 | MIT, Posición-Velocidad, Velocidad pura, Control Fuerza-Posición |
| Hexfellow | CAN-FD | MIT, Posición-Velocidad |

### Arquitectura general por capas (de arriba hacia abajo)

**Capa de aplicación (capa de desarrollo del usuario):**

Admite Python, C++ (en desarrollo), nodos ROS2. Los desarrolladores llaman directamente a APIs unificadas sin preocuparse por el protocolo CAN subyacente.

- Python: ctypes enlaza la biblioteca dinámica compilada por Rust, ligera y sin pérdida de rendimiento;
- Herramientas de soporte: CLI de línea de comandos, consola de visualización web MotorBridge-Studio.

### Ventajas en comparación con SDKs tradicionales específicos de proveedor

| Elemento de comparación | SDKs nativos del proveedor | MotorBridge |
| :--- | :--- | :--- |
| Compatibilidad con múltiples marcas de motores | Dedicado a una sola marca, cambiar de motor requiere reescribir el código | API unificada, cambiar de motor solo requiere modificar los parámetros del proveedor |
| Rendimiento en tiempo real | Implementación en Python, tartamudeos por GC, temporización inestable | Capa inferior en Rust, sin recolección de basura, fuerte rendimiento en tiempo real |
| Herramientas de depuración | Cada uno tiene un upper computer independiente, operaciones inconsistentes | CLI unificada + consola de visualización web |
| Soporte multilenguaje | La mayoría solo proporciona Python | Python/C++/ROS2 comparten la biblioteca de capa inferior |
| Encapsulación de protocolo | Requiere que los desarrolladores analicen manualmente los mensajes CAN | Oculta completamente los detalles del protocolo CAN subyacente |
| Multiplataforma | Adaptación inconsistente | Soporte completo para Windows/macOS/Linux |

</section>

## 7.2 Entorno de instalación

<section id="install" className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>7.2 Entorno de instalación</h2>
  </div>

### 7.2.1 Instalar Miniforge

#### Instalación en Ubuntu

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
```

```bash
bash Miniforge3-Linux-x86_64.sh
```

A continuación, sigue las indicaciones para introducir `yes` o pulsa la tecla Enter. Después de una instalación correcta, introduce el siguiente comando para actualizar el script del terminal:

```bash
source ~/.bashrc
```

:::note
Cuando `(base)` aparece antes del nombre de usuario, la instalación se ha realizado correctamente.
:::

#### Otras plataformas

**Jetson / Raspberry Pi:**

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
```

```bash
bash Miniforge3-$(uname)-$(uname -m).sh
```

**macOS:**

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
```

```bash
bash Miniforge3-MacOSX-$(uname -m).sh
```

**Windows:**

Abre la [página de lanzamientos de Miniforge](https://github.com/conda-forge/miniforge/releases) en tu navegador, busca la última versión de `Miniforge3-Windows-x86_64.exe` y haz clic para descargarla.

### 7.2.2 Crear entorno

Entorno virtual de Python 3.10 o superior — motorbridge requiere la versión de Python >= 3.10:

```bash
conda create -y -n rebot_motorbridge python=3.12
```

Luego activa el entorno virtual. Cada vez que abras un terminal y quieras usar las funciones relacionadas en el entorno virtual, necesitas volver a ejecutar este comando de activación:

```bash
conda activate rebot_motorbridge
```

#### Instalar motorbridge

Después de activar el entorno virtual `rebot_motorbridge`, ejecuta el siguiente comando para instalar motorbridge:

```bash
pip install motorbridge
```

</section>

## 7.3 MotorBridge controla motores DM

<section id="dm-motors" className="section-card">
  <div className="section-title">
    <span>Motores DM</span>
    <h2>7.3 MotorBridge controla motores DM</h2>
  </div>

### Control web

1. Abre la siguiente dirección en tu navegador:

```text
https://motorbridge.github.io/motorbridge-studio/
```

2. Haz clic en la opción **Help**, copia el comando correspondiente según tu sistema operativo y la placa controladora utilizada, verifica la dirección IP y el número de puerto, luego pulsa Enter en el terminal para ejecutarlo.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-01.jpg" alt="MotorBridge Help" />
</div>

Tomando como ejemplo los motores Damiao DM:

- Plataforma **Linux**, introduce el siguiente comando:

```bash
motorbridge-gateway -- \
  --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial \
  --serial-port /dev/ttyACM0 --serial-baud 921600 \
  --dt-ms 20
```

- Plataforma **macOS**, introduce el siguiente comando:

```bash
motorbridge-gateway -- \
  --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial \
  --serial-port /dev/tty.usbmodem14101 --serial-baud 921600 \
  --dt-ms 20
```

- En **Windows**, introduce el siguiente comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --dt-ms 20
```

:::warning
El número de puerto debe ser el puerto correcto y se deben conceder permisos antes de enlazar.
:::

3. Después de introducir el comando anterior, vuelve a la página web y haz clic en **Connect**. Tras una conexión correcta, aparecerá el texto verde `Connected` en la esquina superior derecha.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-02.jpg" alt="Connected" />
</div>

4. Después de seleccionar el motor DM, haz clic en **Scan Damiao**.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-03.jpg" alt="Scan Damiao" />
</div>

5. Tras un escaneo correcto, aparece la siguiente tarjeta.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-04.jpg" alt="Scan result card" />
</div>

6. En el lado derecho están los parámetros relacionados con el motor. Haz clic en el botón de habilitar en la esquina inferior izquierda y la luz del motor se volverá verde. En este punto, puedes controlar el motor.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-05.jpg" alt="Motor parameters and enable" />
</div>

7. Arrastra el control deslizante o introduce el ángulo correspondiente en el cuadro pequeño (la unidad es rad), luego haz clic en **Move**, y el motor girará hasta el ángulo objetivo.

8. Después de hacer clic en el botón **Enable**, haz clic en **Zero+Save** para establecer la posición actual como el punto cero.

9. Configura el ID del motor. Si el motor se utiliza en reBot, `can_id` debe establecerse en el número de articulación correspondiente, y `master_id` debe establecerse en `0x10 + can_id`.

Por ejemplo, si `can_id` es 1, entonces `master_id` debe ser `0x11`, es decir, 16 + 1 = 17. Luego haz clic en **Set CAN_ID**.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-06.jpg" alt="Set CAN ID" />
</div>

### Control mediante código Python

Si el entorno no está instalado, primero consulta el entorno de instalación en la sección 7.2. Los ejemplos relacionados con el motor DM se implementan todos a través del puerto serie de Damiao.

Primero, descarga el código de ejemplo:

```bash
git clone https://github.com/hopcan/motorbridge_ctrl.git
```

Luego activa el entorno conda correspondiente y entra en la carpeta del código de ejemplo:

```bash
conda activate rebot_motorbridge

cd your_folder_path/motorbridge_ctrl/dm_motor_ctrl
```

#### Habilitar/Deshabilitar motores DM

`1_enable_dm.py` es un ejemplo típico de habilitar/deshabilitar motores DM.

```bash
python 1_enable_dm.py
```

Fenómeno: Después de habilitar el motor DM, la luz del motor se vuelve verde. Después de 3 segundos, el motor DM se deshabilita.

```python
# Enable specified motor, disable motor after 3 seconds
from motorbridge import Controller, Mode
import time

motor_configs = {
    1 : {
        "can_id": 0x01,
        "master_id": 0x11,  # 0x10 + 1
        "model": "4310",  # 4310 / 4340P / 6001
    },
}

ctrl = Controller.from_dm_serial("/dev/ttyACM0", 921600)

# Add motor to the bus
motor = {}
for num, cfg in motor_configs.items():
    motor[num] = ctrl.add_damiao_motor(cfg["can_id"], cfg["master_id"], cfg["model"])

# Enable all motors on the bus
ctrl.enable_all()

time.sleep(3)

# Disable all motors on the bus
ctrl.disable_all()
```

#### Escanear ID del motor

`2_scan_DMmotor.py` es un ejemplo de escaneo del ID CAN de los motores DM.

```bash
python 2_scan_DMmotor.py
```

La entrada de la función principal de implementación `scan_damiao_motors` es el rango de ID CAN y el puerto. Después de ejecutarse, se mostrarán el ID CAN escaneado y su ID maestro correspondiente. Este script se puede usar para comprobar si el ID CAN y el ID maestro correspondiente son correctos.

```python
from motorbridge import Controller

def scan_damiao_motors(start_can_id, end_can_id, channel="/dev/ttyACM0"):
    found_motors = []

    print(f"start scanning  {channel},canID : {start_can_id} - {end_can_id}")

    for motor_can_id in range(start_can_id, end_can_id + 1):
        ctrl = Controller.from_dm_serial(channel, 921600)
        temp_motor_master_id = 0x11 + motor_can_id

        try:
            motor = ctrl.add_damiao_motor(motor_can_id, temp_motor_master_id, "4340P")

            try:
                # Read register to get CAN ID
                esc_id = motor.get_register_u32(8, timeout_ms=100)
                master_id = motor.get_register_u32(7, timeout_ms=100)
                print(f"[find] motor_can_id=0x{esc_id:02X} motor_master_id=0x{master_id:02X}")
                found_motors.append(esc_id)

            except Exception:
                # Read error, no such CAN ID
                print(f"[no respond] motor_can_id=0x{motor_can_id:02X}")

            finally:
                motor.close()

        except Exception as e:
            print(f"[error] motor_can_id=0x{motor_can_id:02X}: {e}")
        finally:
            ctrl.close_bus()
            ctrl.close()

    print(f"\nfinish find {len(found_motors)} motor")
    return found_motors

# Run scanning
if __name__ == "__main__":
    motors = scan_damiao_motors(start_can_id=1, end_can_id=10, channel="/dev/ttyACM0")

    print("\nfind motor config:")
    for can_id in motors:
        print(f"  can_id=0x{can_id:02X}")
```

#### Establecer ID CAN e ID maestro correspondiente

`3_set_id.py` es un ejemplo de configuración del ID CAN y del ID maestro de los motores DM.

```bash
python 3_set_id.py
```

La entrada de la función principal de implementación `set_DMmotor_ID` es el ID CAN antiguo, el nuevo ID CAN a configurar, el nuevo ID maestro a configurar y el puerto.

```python
from motorbridge import Controller
from motorbridge import Controller, RID_MST_ID, RID_ESC_ID
import time

# Set CAN ID and master ID
def set_DMmotor_ID(old_can_id, new_can_id, new_master_id, channel="/dev/ttyACM0"):

    ctrl = Controller.from_dm_serial(channel, 921600)
    temp_motor_master_id = 0x10 + old_can_id
    motor = ctrl.add_damiao_motor(old_can_id, temp_motor_master_id, "4340P")

    try:
        motor.write_register_u32(RID_MST_ID, new_master_id)
    except Exception:
        pass
    try:
        motor.write_register_u32(RID_ESC_ID, new_can_id)
    except Exception:
        pass
    new_motor = ctrl.add_damiao_motor(new_can_id, new_master_id, "4340P")
    new_motor.store_parameters()
    print("change ID and save")
    time.sleep(1)
    ctrl.close_bus()
    ctrl.close()

if __name__ == "__main__":
    old_can_id = 0x06
    new_can_id = 0x01
    new_master_id = 0x11
    set_DMmotor_ID(old_can_id, new_can_id, new_master_id, channel="/dev/ttyACM0")
```

#### Controlar diferentes modos

`4_mit_ctrl.py` es un ejemplo de control para el modo MIT. `kp` es la rigidez del controlador, `kd` es el amortiguamiento del controlador y `tau` es el par de avance (feedforward).

```bash
python 4_mit_ctrl.py
```

Fenómeno: El ejemplo solo proporciona tau, por lo que el motor seguirá girando. Según el modo MIT, se pueden derivar varios modos de control. Por ejemplo, cuando kp=0 y kd no es 0, al dar vel se puede lograr una rotación a velocidad constante; cuando kp=0 y kd=0, al dar tau se puede lograr una salida de par determinada.

:::warning Notas
1. Cuando solo se da tau, no des un tau demasiado grande. Si tau es demasiado grande, el motor girará cada vez más rápido para alcanzar el tau deseado.
2. Al controlar la posición, kd no puede establecerse en 0, de lo contrario causará oscilación del motor o incluso pérdida de control.
3. Las unidades de pos y vlim son rad y rad/s respectivamente, y el tipo de datos es float.
:::

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to MIT mode, timeout 1000ms
motor.ensure_mode(Mode.MIT, timeout_ms=1000)

# MIT control
motor.send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,
    kd=0.0,
    tau=0.8  # 0.8 Nm
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`5_pos_vel_ctrl.py` es un ejemplo de control para el modo pos_vel.

```bash
python 5_pos_vel_ctrl.py
```

`pos` es la posición objetivo para el control, y `vlim` se usa para limitar la velocidad absoluta máxima durante el movimiento.

:::warning
Las unidades de pos y vlim son rad y rad/s respectivamente, y el tipo de datos es float.
:::

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

# Position-velocity mode control
motor.send_pos_vel(
    pos=2.0,    # target angle (rad)
    vlim=1.5    # max vel (rad/s)
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`6_vel_ctrl.py` es un ejemplo de control para el modo vel.

```bash
python 6_vel_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to velocity mode, timeout 1000ms
motor.ensure_mode(Mode.VEL, 1000)

# Velocity mode control
motor.send_vel(vel=1.0)  # 1 rad/s

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

Donde `vel` es la velocidad objetivo para el control.

:::warning
La unidad de pos es rad/s, y el tipo de datos es float.
:::

`7_force_pos.py` es un ejemplo de control para el modo force_pos.

```bash
python 7_force_pos.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to force_pos mode, timeout 1000ms
motor.ensure_mode(Mode.FORCE_POS, 1000)

# force_pos control
motor.send_force_pos(
    pos=0.5,    # target angle (rad)
    vlim=1.0,   # max vel (rad/s)
    ratio=0.3   # torque ratio (0.0 - 1.0), 0 means no torque, 1 means full torque
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`pos` es la posición objetivo para el control, `vlim` es el límite de velocidad, y `ratio` representa la cantidad de par utilizada. Cuando ratio es 0, significa sin par; cuando es 1, significa par completo.

#### Obtener el estado del motor

`8_get_state.py` es un ejemplo de obtención del estado del motor.

```bash
python 8_get_state.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Enable all motors
ctrl.enable_all()

# Switch to pos_vel mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, 1000)

# Record start time
start = time.perf_counter()

# Control cycle
dt = 0.01  # 10ms

# Run for 5s
while time.perf_counter() - start < 5.0:
    now_time = time.perf_counter() - start
    motor.send_pos_vel(
        pos=2.0,    # target angle (rad)
        vlim=1.5    # max vel (rad/s)
    )
    time.sleep(dt)
    state = motor.get_state()

    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

El ejemplo dado en `8_get_state.py` sirve para obtener la trama de respuesta devuelta por el motor en la trama anterior durante el proceso de control. Esta trama de respuesta se envía cuando se envía una trama de control al motor, y el motor responderá, lo que equivale a un modo de pregunta y respuesta. Si solo quieres que el motor devuelva una trama de respuesta para obtener el estado sin dejar que el motor se mueva, puedes consultar el método de lectura del estado del motor en `9_set_zero.py`.

#### Establecer el punto cero del motor

`9_set_zero.py` es un ejemplo de cómo establecer el punto cero del motor.

```bash
python 9_set_zero.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0x11
channel = "/dev/ttyACM0"

# Get motor control handle
ctrl = Controller.from_dm_serial(channel, 921600)
motor = ctrl.add_damiao_motor(motor_can_id, motor_master_id, "4340P")

# Set zero point
try:
    motor.set_zero_position()
    print("set zero successfully")
except Exception:
    print("set zero failed")
time.sleep(1)

# Check position
start = time.perf_counter()
dt = 0.01  # 10ms
while time.perf_counter() - start < 1.0:
    now_time = time.perf_counter() - start
    motor.request_feedback()
    time.sleep(dt)
    state = motor.get_state()
    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

time.sleep(1)

ctrl.close_bus()
ctrl.close()
```

Fenómeno: Después de establecer correctamente el punto cero, se leerá el estado actual del motor para confirmar si la configuración del punto cero fue exitosa.

</section>

## 7.4 MotorBridge controla motores RS

Si tu sistema aún no tiene instalado el controlador PCAN, consulta esta página: [PCAN driver installed](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/#configuración-de-software-y-flujo-de-trabajo-de-calibración)

<section id="rs-motors" className="section-card">
  <div className="section-title">
    <span>Motores RS</span>
    <h2>7.4 MotorBridge controla motores RS</h2>
  </div>

### Control web

1. Carga el módulo del kernel `peak_usb`, comprueba el puerto, establece la velocidad en baudios e inicia el puerto:

```bash
# The kit comes with PCAN-USB, which usually should directly appear as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, then set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

2. Abre la siguiente dirección en tu navegador:

```text
https://motorbridge.github.io/motorbridge-studio/
```

3. Haz clic en la opción **Help**, copia el comando correspondiente según tu sistema operativo y la placa controladora utilizada, verifica la dirección IP y el número de puerto, luego pulsa Enter en la terminal para ejecutarlo.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-07.jpg" alt="MotorBridge Help" />
</div>

- Plataforma **Linux**, introduce el siguiente comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

- Plataforma **macOS**, introduce el siguiente comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

- **Windows**, introduce el siguiente comando:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0@1000000
```

4. Después de introducir el comando anterior, vuelve a la página web y haz clic en **Connect**. Tras una conexión exitosa, aparecerá el texto verde `Connected` en la esquina superior derecha.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-08.jpg" alt="Connected" />
</div>

5. Después de seleccionar el motor RS, haz clic en **Scan RobStride motor**.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-09.jpg" alt="Scan RobStride" />
</div>

6. Después de un escaneo exitoso, aparece la siguiente tarjeta.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-10.jpg" alt="Scan result card" />
</div>

7. En el lado derecho están los parámetros relacionados con el motor. Haz clic en el botón de habilitar en la esquina inferior izquierda y la luz del motor se volverá verde. En este punto, puedes controlar el motor.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-7/ch7-11.jpg" alt="Motor parameters and enable" />
</div>

8. Arrastra el control deslizante o introduce el ángulo correspondiente en el cuadro pequeño (la unidad es rad), luego haz clic en **Move**, y el motor girará hasta el ángulo objetivo.

9. Después de hacer clic en el botón **Enable**, haz clic en **Zero+Save** para establecer la posición actual como punto cero.

10. Configura el ID del motor. Si el motor se utiliza en reBot, `can_id` debe establecerse en el número de articulación correspondiente, y `master_id` es fijo.

### Control con código Python

#### Habilitar/Deshabilitar motores RS

`1_enable_rs.py` es un ejemplo típico de habilitar/deshabilitar motores RS.

```bash
python 1_enable_rs.py
```

```python
# Enable specified motor, disable motor after 3 seconds
from motorbridge import Controller, Mode
import time

motor_configs = {
    1 : {
        "can_id": 0x07,
        "master_id": 0xfd,  # fixed
        "model": "rs-00",  # rs-06 / rs-00
    },
}

ctrl = Controller("can0")

# Add motor
motor = {}
for num, cfg in motor_configs.items():
    motor[num] = ctrl.add_robstride_motor(cfg["can_id"], cfg["master_id"], cfg["model"])

# Enable all motors
ctrl.enable_all()

# Switch to MIT mode, timeout 1000ms
motor[1].ensure_mode(Mode.MIT, timeout_ms=1000)

# Control MIT
motor[1].send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,
    kd=0.0,
    tau=0.3  # 0.3 Nm
)

time.sleep(3)

# Disable all motors
ctrl.disable_all()
```

Fenómeno: Después de habilitar el motor RS, la luz del motor se vuelve verde. Después de 3 segundos, el motor RS se deshabilita y la luz del motor se vuelve roja.

#### Escanear ID del motor

`2_scan_RSmotor.py` es un ejemplo de escanear el ID CAN de los motores RS.

```bash
python 2_scan_RSmotor.py
```

```python
from motorbridge import Controller, Mode
import time


def scan_robstride_motors(start_can_id, end_can_id, channel="can0"):
    found_motors = []
    for motor_can_id in range(start_can_id, end_can_id + 1):
        ctrl = Controller(channel)

        try:
            motor = ctrl.add_robstride_motor(motor_can_id, 0xfd, "rs-00")

            try:
                can_id, respond_id = motor.robstride_ping()
                found_motors.append(can_id)
                print(f"can_id={can_id:02X} respond_id={respond_id:02X}")  # response ID is not master ID

            except Exception:
                # Scan error
                print(f"[no respond] no this motor_can_id=0x{motor_can_id:02X}")

            finally:
                motor.close()

        except Exception as e:
            print(f"[error] motor_can_id=0x{motor_can_id:02X}: {e}")
        finally:
            ctrl.close_bus()
            ctrl.close()
    print(f"\nfinish find {len(found_motors)} motor\n")
    return found_motors

if __name__ == "__main__":
    motors = scan_robstride_motors(1, 10, channel="can0")

    print("\nfind motor config:")
    for can_id in motors:
        print(f"  can_id=0x{can_id:02X}")
```

La entrada de la función principal de implementación `scan_robstride_motors` es el rango de ID CAN y el puerto. Después de ejecutarse, se mostrarán el ID CAN escaneado y su ID maestro correspondiente. Este script se puede utilizar para comprobar si el ID CAN y el ID maestro correspondiente son correctos.

#### Establecer ID CAN e ID maestro correspondiente

`3_set_id.py` es un ejemplo de cómo establecer el ID CAN y el ID maestro de los motores RS.

```bash
python 3_set_id.py
```

```python
from motorbridge import Controller
from motorbridge import Controller, RID_MST_ID, RID_ESC_ID
import time

# Set CAN ID
def set_RSmotor_ID(old_can_id, new_can_id, channel="can0"):

    ctrl = Controller(channel)

    motor = ctrl.add_robstride_motor(old_can_id, 0xfd, "rs-00")
    try:
        motor.robstride_set_device_id(new_can_id)
        print(f"change to new id :{new_can_id}")
    except Exception:
        print("set id failed")

    time.sleep(1)
    ctrl.close_bus()
    ctrl.close()

if __name__ == "__main__":
    old_can_id = 0x01
    new_can_id = 0x01
    set_RSmotor_ID(old_can_id, new_can_id, channel="can0")
```

La entrada de la función principal de implementación `set_RSmotor_ID` es el antiguo ID CAN, el nuevo ID CAN que se va a establecer y el puerto.

#### Controlar diferentes modos

`4_mit_ctrl.py` es un ejemplo de control para el modo MIT. `kp` es la rigidez del controlador, `kd` es el amortiguamiento del controlador y `tau` es el par de avance (feedforward).

```bash
python 4_mit_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to MIT mode, timeout 1000ms
motor.ensure_mode(Mode.MIT, timeout_ms=1000)

# Control MIT
motor.send_mit(
    pos=0.0,
    vel=0.0,
    kp=0.0,
    kd=0.0,
    tau=0.3  # 0.3 Nm
)

# Run for 3s
time.sleep(3)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

Fenómeno: El ejemplo solo da tau, por lo que el motor seguirá girando. De acuerdo con el modo MIT, se pueden derivar varios modos de control. Por ejemplo, cuando kp=0 y kd no es 0, al dar vel se puede lograr una rotación a velocidad constante; cuando kp=0 y kd=0, al dar tau se puede lograr una salida de par dada.

:::warning Notas
1. Cuando solo se da tau, no des un tau demasiado grande. Si tau es demasiado grande, el motor girará cada vez más rápido para alcanzar el tau deseado.
2. Al controlar la posición, kd no se puede establecer en 0, de lo contrario causará oscilación del motor o incluso pérdida de control.
3. Las unidades de pos y vlim son rad y rad/s respectivamente, y el tipo de dato es float.
:::

`5_pos_vel_ctrl.py` es un ejemplo de control para el modo pos_vel.

```bash
python 5_pos_vel_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

# Control position-velocity
motor.send_pos_vel(
    pos=2.0,    # target angle (rad)
    vlim=1.5    # max vel (rad/s)
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

`pos` es la posición objetivo para el control, y `vlim` se utiliza para limitar la velocidad absoluta máxima durante el movimiento.

:::warning Notas
1. Las unidades de pos y vlim son rad y rad/s respectivamente, y el tipo de dato es float.
2. El modo pos_vel utilizado aquí es el modo posición-velocidad (PP).
:::

`6_vel_ctrl.py` es un ejemplo de control para el modo vel.

```bash
python 6_vel_ctrl.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, timeout_ms=1000)

# Control position-velocity
motor.send_pos_vel(
    pos=2.0,    # target angle (rad)
    vlim=1.5    # max vel (rad/s)
)

# Run for 5s
time.sleep(5)

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

Donde `vel` es la velocidad objetivo para el control.

:::warning
La unidad de pos es rad/s, y el tipo de dato es float.
:::

#### Obtener el estado del motor

`7_get_state.py` es un ejemplo de cómo obtener el estado del motor.

```bash
python 7_get_state.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

# Enable all motors
ctrl.enable_all()

# Switch to position-velocity mode, timeout 1000ms
motor.ensure_mode(Mode.POS_VEL, 1000)

# Record start time
start = time.perf_counter()

# Control cycle
dt = 0.01  # 10ms

# Run for 5s
while time.perf_counter() - start < 5.0:
    now_time = time.perf_counter() - start
    motor.send_pos_vel(
        pos=2.0,    # target angle (rad)
        vlim=1.5    # max vel (rad/s)
    )
    time.sleep(dt)
    state = motor.get_state()

    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

# Disable all motors
ctrl.disable_all()
ctrl.close_bus()
ctrl.close()
```

El ejemplo dado en `7_get_state.py` es para obtener la trama de respuesta devuelta por el motor en la trama anterior durante el proceso de control. Esta trama de respuesta se envía cuando se envía una trama de control al motor, y el motor responderá, lo que equivale a un modo de pregunta y respuesta. Si solo quieres que el motor devuelva una trama de respuesta para obtener el estado sin dejar que el motor se mueva, puedes consultar el ejemplo de lectura del estado del motor en `8_set_zero.py`.

#### Establecer el punto cero del motor

`8_set_zero.py` es un ejemplo de cómo establecer el punto cero del motor.

```bash
python 8_set_zero.py
```

```python
from motorbridge import Controller, Mode
import time


motor_can_id = 0x01
motor_master_id = 0xfd
channel = "can0"

# Get motor handle
ctrl = Controller(channel)
motor = ctrl.add_robstride_motor(motor_can_id, motor_master_id, "rs-00")

try:
    motor.set_zero_position()
    print("set zero successfully")
except Exception:
    print("set zero failed")
time.sleep(1)

# Check position
start = time.perf_counter()
dt = 0.01  # 10ms
while time.perf_counter() - start < 1.0:
    now_time = time.perf_counter() - start
    motor.request_feedback()
    time.sleep(dt)
    state = motor.get_state()
    if state:
        print(f"time:{now_time:.3f}")
        print(f"pos: {state.pos:.3f} rad")
        print(f"vel: {state.vel:.3f} rad/s")
        print(f"torque: {state.torq:.3f} Nm\n")
    else:
        print("no respond\n")

time.sleep(1)

ctrl.close_bus()
ctrl.close()
```

Fenómeno: Después de establecer correctamente el punto cero, se leerá el estado actual del motor para confirmar si la configuración del punto cero fue exitosa.

</section>

</div>
