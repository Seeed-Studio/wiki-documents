---
description: "Capítulo 8 del Curso para Principiantes de IA Física de Seeed — controla el reBot Arm con el SDK de Python: parámetros, conexión con administrador de contexto, movimiento, punto cero y estado de las articulaciones."
title: Capítulo 8 - Control del reBot Arm usando el SDK de Python
keywords:
  - reBot
  - Robotic Arm
  - Python SDK
  - reBotArm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_8
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_8/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 8 · Teoría y práctica</span>
    <h2>8. Control del reBot Arm usando el SDK de Python</h2>
    <p>
      Capítulo 8 del Curso para Principiantes de IA Física de Seeed — controla el reBot Arm con
      el SDK de Python: parámetros, conexión con administrador de contexto, movimiento, punto cero y estado de las articulaciones.
    </p>
    <div className="hero-actions">
      <a href="#parameters">Parámetros</a>
      <a href="#connect">Conexión</a>
      <a href="#motion">Movimiento</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>8.1 Modificar parámetros y cambiar modos</span>
    <span>8.2 Conectar/desconectar el brazo robótico (usando administrador de contexto)</span>
    <span>8.3 Controlar el movimiento del brazo robótico</span>
    <span>8.4 Establecer el punto cero del brazo robótico</span>
    <span>8.5 Actualizar el estado de las articulaciones del brazo robótico</span>
  </div>
</section>

<RebotCourseNav />

<section className="section-card">
  <p>1. Si el entorno no está instalado, consulta la sección 7.2 para el entorno de instalación.</p>

  <p>2. Los parámetros de cada controlador de articulación del brazo robótico del SDK de Python deben ajustarse según los requisitos reales de uso. Los parámetros actuales solo pueden satisfacer escenarios con requisitos de baja precisión.</p>

Instala las dependencias necesarias:

```bash
python3 -m pip install pyyaml motorbridge
```

Obtén el código de ejemplo:

```bash
git clone https://github.com/hopcan/rebotArm_ctrl.git
```

- Los ejemplos de Python para controlar reBot DM están en `rebotArm_ctrl/example/rebotDM`.
- El archivo de configuración para el brazo robótico reBot DM está en `rebotArm_ctrl/config`.
- Los ejemplos de Python para controlar reBot RS están en `rebotArm_ctrl/example/rebotRS`.
- El archivo de configuración para el brazo robótico reBot RS está en `rebotArm_ctrl/config`.

</section>

## 8.1 Modificar parámetros y cambiar modos

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>Parámetros</span>
    <h2>8.1 Modificar parámetros y cambiar modos</h2>
  </div>

El modo de control recomendado para reBot DM es `POS_VEL`. Cambiar el modo de control de las articulaciones del brazo robótico y configurar los parámetros se puede lograr modificando los parámetros correspondientes en `rebotDM.yaml` bajo `rebotArm_ctrl/config`.

Por ejemplo:

```yaml
- name: Shoulder Pan
  motor_can_id: 1
  MIT:
    kp: 10.0
    kd: 1.0
  POS_VEL:
    vel_kp: 0.0125
    vel_ki: 0.004
    pos_kp: 150.0
    pos_ki: 0.5
    vlim: 5.0
  posmax: 2.6
  posmin: -2.6
  use_mode: POS_VEL
```

Los `kp` y `kd` de MIT, y los `vel_kp`, `vel_ki`, `pos_kp`, `pos_ki` y `vlim` de POS_VEL son los parámetros del modo correspondiente, que se pueden cambiar según el efecto de control del brazo robótico. `use_mode` puede cambiar el modo de control de la articulación correspondiente, y se puede cambiar a `MIT` o `POS_VEL`.

</section>

## 8.2 Conectar/desconectar el brazo robótico (usando administrador de contexto)

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Conexión</span>
    <h2>8.2 Conectar/desconectar el brazo robótico (usando administrador de contexto)</h2>
  </div>

Consulta `example/rebotDM/1_rebotDM_connect.py` o `example/rebotRS/1_rebotRS_connect.py`.

1. Primero crea el controlador de bus.

:::warning Notas
1. Comprueba si el puerto existe.
2. Se deben otorgar permisos de puerto antes de ejecutar el programa.
:::

reBot DM usa un puerto serie, creado de la siguiente manera:

```python
channel = "/dev/ttyACM0"
ctrl = Controller.from_dm_serial(channel, 921600)
```

reBot RS usa PCAN:

```python
channel = "can0"
ctrl = Controller(channel)
```

2. Implementado mediante un administrador de contexto seguro:

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:

with reBotArm_handle(ctrl, "rebotRS") as handle:
```

Donde `reBotArm_handle` también admite el parámetro `config_path`. Este parámetro puede especificar el archivo de configuración importado, y el archivo de configuración predeterminado del brazo robótico ya no se importará. Puedes consultar los archivos de configuración en `config` para escribir tu propio archivo de configuración.

```python
with reBotArm_handle(ctrl, "rebotDM", config_path="absolute path of yaml") as handle:

with reBotArm_handle(ctrl, "rebotRS", config_path="absolute path of yaml") as handle:
```

Implementación principal:

1. La función `__enter__` llamará a la función `connect` para conectarse automáticamente al brazo robótico. Si la conexión falla, se mostrará el registro correspondiente.
2. La función `__exit__` llamará a la función `disconnect` para desconectarse automáticamente del brazo robótico cuando el programa salga.
3. Conectarse al brazo robótico añadirá motores al controlador de bus, comprobará la comunicación del motor al encender, verificará si el ID CAN del motor y el ID maestro son válidos, verificará si el archivo de configuración es válido y cambiará el modo de control del motor al modo de control objetivo.
4. Al desconectarse del brazo robótico, primero se restaurará automáticamente el estado inicial y luego se deshabilitará.

:::warning
Después de usar Ctrl+C para salir del programa, espera unos segundos. No sigas pulsando Ctrl+C; debes esperar a que el brazo robótico vuelva automáticamente a su posición inicial y luego se deshabilite.
:::

Si no deseas usar el administrador de contexto, puedes llamar directamente a la función `connect` y a la función `disconnect` para conectar/desconectar el brazo robótico.

</section>

## 8.3 Controlar el movimiento del brazo robótico

<section id="motion" className="section-card">
  <div className="section-title">
    <span>Movimiento</span>
    <h2>8.3 Controlar el movimiento del brazo robótico</h2>
  </div>

Consulta `example/rebotDM/3_rebotDM_move_joint.py` o `example/rebotRS/3_rebotRS_move_joint.py`.

```python
while True:
    handle.move_to_joint_positions([0, 0, 0, 0.5, 0.5, 0, -1])
    for motor_id in list(range(1, 8)):
        print(f"motor {motor_id}")
        print(f"pos: {handle.motor_state[motor_id].pos:.3f} rad")
        print(f"vel: {handle.motor_state[motor_id].vel:.3f} rad/s")
        print(f"torque: {handle.motor_state[motor_id].torq:.3f} Nm\n")
    time.sleep(0.002)
```

`handle.motor_state` es un diccionario que contiene la información de estado de todas las articulaciones. El método de lectura es como se muestra arriba.

</section>

## 8.4 Establecer el punto cero del brazo robótico

<section id="zero-point" className="section-card">
  <div className="section-title">
    <span>Punto cero</span>
    <h2>8.4 Establecer el punto cero del brazo robótico</h2>
  </div>

Consulta `example/rebotDM/2_rebotDM_set_zero.py` o `example/rebotRS/2_rebotRS_set_zero.py`.

```python
with reBotArm_handle(ctrl, "rebotRS") as handle:
    handle.set_zero_position()

with reBotArm_handle(ctrl, "rebotDM") as handle:
    handle.set_zero_position()
```

Llamar a la función `set_zero_position` a través de la clase de control del brazo robótico puede establecer el ID de articulación correspondiente para todas las articulaciones del brazo robótico.

</section>

## 8.5 Actualizar el estado de las articulaciones del brazo robótico

<section id="joint-state" className="section-card">
  <div className="section-title">
    <span>Estado de las articulaciones</span>
    <h2>8.5 Actualizar el estado de las articulaciones del brazo robótico</h2>
  </div>

Consulta `example/rebotDM/5_rebotDM_request_joints_data.py` o `example/rebotRS/5_rebotRS_request_joints_data.py`.

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)


with reBotArm_handle(ctrl, "rebotRS") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)
```

`get_joints_state()`: Actualiza activamente el estado de cada articulación del brazo robótico y devuelve los ángulos actuales de las articulaciones.

</section>

</div>
