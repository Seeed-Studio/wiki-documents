---
description: Este tutorial presenta cómo usar Pinocchio y MeshCat para análisis cinemático y visualización en el brazo robótico reBot Arm B601-DM.
title: Introducción a Pinocchio y MeshCat para reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - Brazo robótico
  - Robot
  - LeRobot
  - Cinemática
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-17T00:00:00.000Z
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introducción a Pinocchio y MeshCat para reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

:::tip
Este código de ejemplo se puede usar para controlar los motores o las posturas del brazo robótico, incluyendo control de un solo motor, pruebas y control de cinemática directa/inversa, ajuste de la posición cero del brazo y lectura del ángulo del motor, sistema de visualización MeshCat y más.
:::

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) es una biblioteca de código abierto para análisis y optimización de dinámica en robótica. Proporciona cinemática directa/inversa eficiente, cálculos dinámicos y capacidades de planificación de trayectorias. [MeshCat](https://github.com/rdeits/meshcat) es una herramienta de visualización 3D basada en la web que puede mostrar en tiempo real el estado del robot y las trayectorias de movimiento.

Este proyecto combina las potentes capacidades de cálculo de Pinocchio con la visualización intuitiva de MeshCat, proporcionando un conjunto completo de herramientas de análisis cinemático y depuración para reBot Arm B601-DM.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>


---

## Características del proyecto

1. **Análisis cinemático completo**  
   Compatible con cálculos de Cinemática Directa (FK) y Cinemática Inversa (IK), capaz de resolver en tiempo real la postura del efector final del brazo robótico.

2. **Visualización 3D en tiempo real**  
   Muestra en tiempo real el estado del brazo robótico y las trayectorias de movimiento mediante MeshCat en el navegador, sin necesidad de software adicional.

3. **Planificación y seguimiento de trayectorias**  
   Implementa planificación de trayectorias geodésicas en SE(3), compatible con control de seguimiento CLIK (Cinemática Inversa en Bucle Cerrado).

4. **Control con compensación de gravedad**  
   Calcula el par de gravedad de las articulaciones basado en el modelo dinámico de Pinocchio, logrando el efecto de “flotación” del brazo robótico.

5. **Código abierto y extensible**  
   Todo el código es de código abierto, lo que permite a los usuarios personalizar algoritmos de control y efectos de visualización según sus necesidades.

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Especificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo de brazo robótico</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Grados de libertad</td>
      <td>6-DOF + pinza</td>
    </tr>
    <tr>
      <td>Modelo de motor</td>
      <td>Damiao DM4340 / DM4310</td>
    </tr>
    <tr>
      <td>Método de comunicación</td>
      <td>Bus CAN mediante adaptador USB-CAN</td>
    </tr>
    <tr>
      <td>Tensión de funcionamiento</td>
      <td>24V CC</td>
    </tr>
    <tr>
      <td>Método de control</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>Rango de temperatura de funcionamiento recomendado</td>
      <td>0°C ～ 40°C</td>
    </tr>
  </tbody>
</table>

## Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|--|--|--|
| Brazo robótico reBot Arm B601-DM | 1 | ✅ |
| Puente serie USB2CAN | 1 | ✅ |
| Adaptador de corriente (24V) | 1 | ✅ |
| Cable USB-C | 1 | ✅ |
| Pinza | 1 | ✅ |

:::caution
Seeed Studio **solo es responsable de la calidad del hardware**. El tutorial se actualiza en estricta conformidad con la documentación oficial. Si encuentras problemas de software o de entorno que no puedas resolver, consulta primero las Preguntas Frecuentes (FAQ) al final del documento, o contacta con atención al cliente para unirte al grupo de comunicación SeeedStudio Lerobot y realizar consultas.
:::

---

## Requisitos de entorno

| Elemento | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema operativo** | Ubuntu 22.04+ |
| **Interfaz de comunicación** | Puente serie USB2CAN o interfaz CAN |

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
`uv sync` creará automáticamente un entorno virtual (si no existe) e instalará todas las dependencias según `pyproject.toml` y `uv.lock`.
:::

---

## Introducción a las herramientas de depuración

:::tip Configuración de permisos
Antes de ejecutar ejemplos de control de hardware, debes configurar los permisos del dispositivo:

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```
:::

### Consola de control de un solo motor (`0x01damiao_test.py`)

Prueba directa de un solo motor usando el SDK de motorbridge.

**Cómo ejecutar**:
```bash
uv run python example/0x01damiao_test.py
```

**Comandos interactivos**:
| Comando | Descripción |
|------|------|
| `enable` / `disable` | Habilitar/Deshabilitar motor |
| `set_zero` | Establecer posición cero |
| `state` | Ver estado |
| `mode mit` | Modo MIT |
| `mode posvel` | Modo Posición-Velocidad, se pueden añadir parámetros PID |
| `mode vel` | Modo de velocidad pura |
---

### Calibración de cero y monitorización de ángulo (`2_zero_and_read.py`)

Establece automáticamente el cero de todas las articulaciones y muestra en tiempo real los ángulos articulares.

**Cómo ejecutar**:
```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

### Modo de control MIT (`3_mit_control.py`)

Introduce ángulos objetivo para todas las articulaciones para completar el control del motor en modo de control MIT, normalmente usado para control de fuerza, control de impedancia o escenarios que requieren alta respuesta dinámica.

**Cómo ejecutar**:
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

### Modo de control Posición-Velocidad (`4_pos_vel_control.py`)

Introduce ángulos objetivo para todas las articulaciones para completar el control del motor en modo de control híbrido POS_VEL (Posición-Velocidad), logrando un movimiento más suave y controlable al alcanzar los ángulos objetivo, reduciendo la vibración.

**Cómo ejecutar**:
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

Calcular la postura del efector final en función de los ángulos articulares.

**Entrada**: 6 ángulos articulares (grados)

**Salida**:
- Posición del efector final (X, Y, Z) — Unidad: metros
- Matriz de rotación (3×3)
- Ángulos de Euler (roll/pitch/yaw) — Unidad: grados

**Ejemplo**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
====================================================
  Result / Result
====================================================
  Joint angles (deg): [0. 0. 0. 0. 0. 0.]
  End-effector position (m):
    X = +0.260306
    Y = +0.000000
    Z = +0.191701
  Rotation matrix (R_world^end):
    [+1.000000  +0.000000  -0.000007]
    [+0.000000  +1.000000  +0.000100]
    [+0.000007  -0.000100  +1.000000]
  Euler XYZ (roll, pitch, yaw) [deg]:
    roll   = -0.0057
    pitch  = -0.0004
    yaw    = +0.0000
```

---

### Prueba de cinemática inversa (`6_ik_test.py`)

Resolver los ángulos articulares en función de la postura deseada del efector final.

**Formato de entrada**:
- Solo posición: `<x> <y> <z>` (metros)
- Posición + orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)

**Ejemplo**:
```bash
uv run python example/6_ik_test.py

# Usage A
> 0.28 0 0.3  # Position only
====================================================
  Result / Result
====================================================
  Target position : [+0.2800, +0.0000, +0.3000] m
  Converged : Yes
  Iterations: 2000
  Position error: 5.62e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -22.9687 deg  (-0.4009 rad)
    joint3     = -24.2191 deg  (-0.4227 rad)
    joint4     =  +1.2508 deg  (+0.0218 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)

# Usage B
> 0.28 0 0.3 0 1 0       # Position + Orientation
====================================================
  Result / Result
====================================================
  Target position   : [+0.2800, +0.0000, +0.3000] m
  Target orientation : [+0.00, +1.00, +0.00] deg
  Converged  : Yes
  Iterations: 2000
  Position error: 6.28e-17 m
  Joint angles (deg) [first 6 control joints]:
    joint1     =  -0.0003 deg  (-0.0000 rad)
    joint2     = -23.3968 deg  (-0.4084 rad)
    joint3     = -25.3018 deg  (-0.4416 rad)
    joint4     =  +2.9054 deg  (+0.0507 rad)
    joint5     =  -0.0003 deg  (-0.0000 rad)
    joint6     =  +0.0057 deg  (+0.0001 rad)
```
### Control de cinemática inversa en modo MIT (`7_arm_ik_control.py`)

Usa cinemática inversa (IK) en modo MIT para especificar las coordenadas 3D (X, Y, Z) y la orientación (ángulos de Euler) a las que debe moverse el efector final del brazo robótico.

**Formato de entrada**:
- Solo posición: `<x> <y> <z>` (metros)
- Posición + orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)
- Introducir `state`: Ver los valores radianes reales actuales de cada articulación.
- Introducir `end_state`: Ver las coordenadas reales actuales (m) y los ángulos de Euler (rad) del efector final en el espacio.

**Cómo ejecutar**:
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
- Introduce `end_state`: Ver las coordenadas reales actuales del efector final (m) y los ángulos de Euler (rad) en el espacio.

**Cómo ejecutar**:
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
---

## Pruebas de compensación de gravedad

### Control de compensación de gravedad (`9_gravity_compensation.py`)

Compensa la gravedad de las articulaciones utilizando el modelo dinámico de Pinocchio.

**Ley de control**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2, kd = 1     — Uniform stiffness/damping for all joints
```

**Comportamiento esperado**:
- El brazo puede "flotar" en cualquier postura
- No caerá por su propio peso cuando se suelte
- Se puede mover manualmente a cualquier posición

**Cómo ejecutar**:
```bash
uv run python example/9_gravity_compensation.py
```

**Salida**:
- Visualización en tiempo real del par deseado para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

### Control de compensación de gravedad con alta amortiguación (`10_gravity_compensation_lock.py`)

Control de compensación de gravedad que resiste fuerzas externas leves.

**Ley de control**:

Nota: Cuando una persona empuja el brazo con suficiente fuerza de modo que la velocidad lineal del efector final > 0.04 m/s o la velocidad angular > 0.08 rad/s, se desbloquea y actualiza el ángulo objetivo en tiempo real.

```
tau = g(q) + integral term  — Gravity feedforward with integral accumulation to eliminate static friction and residual gravity dead zone
pos = target lock angle   — When end-effector velocity is below threshold, target angle locks at current position
kp = 8.0, kd = 1.0  — Increased stiffness to 8.0 in locked state, providing stronger resistance to disturbance and positioning constraint
```

**Comportamiento esperado**:
  - Bloqueo al soltar: Cuando el brazo se mueve manualmente a una posición y se suelta, se bloquea inmediatamente con firmeza en su lugar, resolviendo perfectamente el problema de la caída lenta y el pequeño desplazamiento.
  - Sin desplazamiento ante empujones ligeros: Sacudidas leves, ráfagas de viento o toques accidentales no pueden mover el brazo.
  - Movible con fuerza: Solo cuando se empuja con suficiente fuerza como para superar el umbral de velocidad se desbloqueará y se moverá de forma complaciente.

**Cómo ejecutar**:
```bash
uv run python example/10_gravity_compensation_lock.py
```

**Salida**:
- Visualización en tiempo real del estado actual (muestra `LOCKED` para el estado bloqueado, `UPDATE` para el estado de arrastre desbloqueado).
- Impresión sincronizada de la velocidad lineal en tiempo real del efector final (m/s), velocidad angular (rad/s) y par de gravedad de cada articulación (N·m).
- Pulsa `Ctrl+C` para detener y desconectar

## Entorno de simulación

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>

#### Simulación de cinemática directa (`sim/fk_sim.py`)

Simulación interactiva de cinemática directa, visualiza la postura del brazo robótico introduciendo ángulos de articulación en MeshCat.

**Uso**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos interactivos**:
- Introduce 6 ángulos de articulación (grados), separados por espacios
- Ejemplo: `0 0 0 0 0 0`
- Ejemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Salir

**Características**:
- Visualización en tiempo real de la posición y orientación del efector final
- Admite entrada continua para probar diferentes posturas
- Salida formateada de la información de la postura

---

#### Simulación de cinemática inversa (`sim/ik_sim.py`)

Simulación interactiva de cinemática inversa, resuelve automáticamente los ángulos de articulación a partir de la postura objetivo y la visualiza.

**Uso**:
```bash
uv run python example/sim/ik_sim.py
```

**Formato de entrada**:
- Solo posición: `x y z` (metros)
- Posición+Orientación: `x y z roll pitch yaw` (radianes)

**Ejemplo**:
```bash
> 0.25 0.0 0.25              # Position only
> 0.25 0.0 0.25 0 0 0        # Position+Orientation
```

**Características**:
- Juicio automático de la convergencia de IK
- Muestra el número de iteraciones y el error
- Actualizaciones en tiempo real de la postura del robot

---

#### Simulación de planificación de trayectoria (`sim/traj_sim.py`)

Simulación de planificación de trayectoria basada en geodésicas en SE(3), incluyendo seguimiento CLIK y reproducción de animaciones en MeshCat.

**Uso**:
```bash
uv run python example/sim/traj_sim.py
```

**Comandos interactivos**:
- Entrada: `x y z [roll pitch yaw]` (metros/radianes)
- Pulsa Enter para usar la configuración predeterminada
- `q`: Salir

**Características**:
- Planificación desde la posición actual hasta la posición objetivo
- Utiliza un perfil de trayectoria de mínimo tirón (minimum jerk)
- Visualización en tiempo real de las estadísticas de la trayectoria
- Reproducción completa de la animación de la trayectoria en MeshCat
- Muestra la trayectoria de referencia (gris) y la trayectoria real (verde)

---

#### Herramienta de visualización (`sim/visualizer.py`)

Wrapper del visualizador MeshCat, que proporciona una interfaz unificada de visualización del robot.

**Características principales**:
- Cargar el modelo URDF y mostrar el robot
- Dibujar trayectorias polilínea 3D (referencia/real)
- Mostrar la postura objetivo de IK (ejes tricolores + esfera)
- Soportar reproducción de animaciones de trayectorias articulares

**Ejemplo de uso**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

## Preguntas frecuentes

- **Aparece el error `Permission denied`**  
  Asegúrate de haber ejecutado `sudo chmod 666 /dev/ttyACM0` o `sudo chmod 666 /dev/can0` para establecer los permisos del dispositivo.

- **La resolución de IK falla o los resultados son anormales**  
  Comprueba si la postura objetivo está dentro del espacio de trabajo del brazo robótico y asegúrate de que la configuración de los límites articulares sea correcta.

- **El efecto de la compensación de gravedad no es bueno**  
  Esto puede deberse a errores estructurales y precisión de mecanizado. La compensación de gravedad de este proyecto depende de urdf y pinocchio. Puedes intentar corregir el urdf con tus parámetros medidos reales (puedes pedir ayuda a una IA para este paso).

---

## Licencia

Este proyecto es de código abierto bajo la **Licencia MIT**.

---

## Contáctanos

- **Soporte técnico**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repositorio**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)
- **Foro**: [Seeed Studio Forum](https://forum.seeedstudio.com/)

---

## Documentos de referencia

- [Documentación oficial de Pinocchio](https://stack-of-tasks.github.io/pinocchio/)
- [Documentación oficial de MeshCat](https://github.com/rdeits/meshcat)
- [motorbridge SDK](https://github.com/motorbridge/motorbridge)

---

<div align="center">
  <strong>Si este proyecto te ayuda, ¡por favor danos una estrella!</strong>
</div>
