---
description: Este tutorial presenta cómo usar Pinocchio y MeshCat para análisis cinemático y visualización en el brazo robótico reBot Arm B601-DM.
title: Introducción a Pinocchio y MeshCat para reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-17
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introducción a Pinocchio y MeshCat para reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

[Pinocchio](https://github.com/stack-of-tasks/pinocchio) es una biblioteca de código abierto para análisis y optimización de dinámica robótica. Proporciona cinemática directa/inversa eficiente, cálculos dinámicos y capacidades de planificación de trayectorias. [MeshCat](https://github.com/rdeits/meshcat) es una herramienta de visualización 3D basada en la web que puede mostrar el estado del robot y las trayectorias de movimiento en tiempo real.

Este proyecto combina las potentes capacidades de cálculo de Pinocchio con la visualización intuitiva de MeshCat, proporcionando un conjunto completo de herramientas de análisis cinemático y depuración para reBot Arm B601-DM.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>


---

## Características del proyecto

1. **Análisis cinemático completo**  
   Soporta cálculos de Cinemática Directa (FK) y Cinemática Inversa (IK), capaz de resolver en tiempo real la pose del efector final del brazo robótico.

2. **Visualización 3D en tiempo real**  
   Muestra en tiempo real el estado del brazo robótico y las trayectorias de movimiento mediante MeshCat en el navegador, sin necesidad de software adicional.

3. **Planificación y seguimiento de trayectorias**  
   Implementa planificación de trayectorias geodésicas en SE(3), soportando control de seguimiento CLIK (Cinemática Inversa en Lazo Cerrado).

4. **Control de compensación de gravedad**  
   Calcula el par de gravedad de las articulaciones basado en el modelo dinámico de Pinocchio, logrando el efecto de "flotación" del brazo robótico.

5. **Código abierto y extensible**  
   Todo el código es de código abierto, permitiendo a los usuarios personalizar algoritmos de control y efectos de visualización según sus necesidades.

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
Seeed Studio **solo es responsable de la calidad del hardware**. El tutorial se actualiza en estricta conformidad con la documentación oficial. Si encuentras problemas de software o de entorno que no puedas resolver, consulta primero las Preguntas Frecuentes al final del documento, o contacta con atención al cliente para unirte al grupo de comunicación SeeedStudio Lerobot para realizar consultas.
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

## Herramientas de depuración

#### Consola de un solo motor (`1_damiao_text.py`)

Prueba de un solo motor mediante el SDK de motorbridge directamente.

**Uso**:
```bash
uv run python example/1_damiao_text.py
```

**Comandos interactivos**:
| Comando | Descripción |
|---------|-------------|
| `enable` / `disable` | Habilitar/Deshabilitar |
| `set_zero` | Establecer posición cero |
| `state` | Ver estado |

---

#### Calibración de cero y monitor de ángulo (`2_zero_and_read.py`)

Establece automáticamente los ceros de todas las articulaciones y muestra los ángulos de las articulaciones en tiempo real.

**Uso**:
```bash
uv run python example/2_zero_and_read.py
```

---

## Pruebas de cinemática

#### Prueba de cinemática directa (`5_fk_test.py`)

Calcular la pose del efector final a partir de los ángulos articulares.

**Entrada**: 6 ángulos articulares (grados)

**Salida**:
- Posición del efector final (X, Y, Z) — Unidad: metros
- Matriz de rotación (3×3)
- Ángulos de Euler (Roll/Pitch/Yaw) — Unidad: grados

**Ejemplo**:
```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### Prueba de cinemática inversa (`6_ik_test.py`)

Resolver los ángulos articulares a partir de la pose deseada del efector final.

**Formato de entrada**:
- Solo posición: `<x> <y> <z>` (metros)
- Posición + orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)

**Ejemplo**:
```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

## Entorno de simulación

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" />
</div>

#### Simulación de cinemática directa (`sim/fk_sim.py`)

Simulación interactiva de cinemática directa, visualiza la pose del brazo robótico introduciendo ángulos articulares en MeshCat.

**Uso**:
```bash
uv run python example/sim/fk_sim.py
```

**Comandos interactivos**:
- Introducir 6 ángulos articulares (grados), separados por espacios
- Ejemplo: `0 0 0 0 0 0`
- Ejemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Salir

**Características**:
- Visualización en tiempo real de la posición y orientación del efector final
- Soporta entrada continua para probar diferentes poses
- Salida formateada de la información de la pose

---

#### Simulación de cinemática inversa (`sim/ik_sim.py`)

Simulación interactiva de cinemática inversa, resuelve automáticamente los ángulos articulares a partir de la pose objetivo y los visualiza.

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
- Juicio automático de la convergencia de la IK
- Muestra el número de iteraciones y el error
- Actualizaciones en tiempo real de la pose del robot

---

#### Simulación de planificación de trayectorias (`sim/traj_sim.py`)

Simulación de planificación de trayectorias basada en geodésicas en SE(3), incluyendo seguimiento CLIK y reproducción de animaciones en MeshCat.

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
- Usa un perfil de trayectoria de mínimo tirón (minimum jerk)
- Muestra en tiempo real las estadísticas de la trayectoria
- Reproducción completa de la animación de la trayectoria en MeshCat
- Muestra la trayectoria de referencia (gris) y la trayectoria real (verde)

---

#### Herramienta de visualización (`sim/visualizer.py`)

[LINE_298>Envoltorio del visualizador MeshCat, que proporciona una interfaz unificada de visualización del robot.

**Características principales**:
- Cargar el modelo URDF y mostrar el robot
- Dibujar trayectorias polilínea 3D (referencia/real)
- Mostrar la pose objetivo de IK (ejes tricolores + esfera)
- Soportar reproducción de animaciones de trayectorias articulares

**Ejemplo de uso**:
```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

---

## Control en máquina real

:::tip Configuración de permisos
Antes de ejecutar ejemplos de control en máquina real, necesitas configurar los permisos del dispositivo:

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```
:::

#### Control IK en tiempo real (`7_arm_ik_control.py`)

Control en tiempo real del efector final basado en el solucionador de IK.

**Comandos interactivos**:
| Comando | Descripción |
|---------|-------------|
| `x y z [roll pitch yaw]` | Pose objetivo del efector final |
| `state` | Ver estado |
| `pos` | Posición actual del efector final |
| `q/quit/exit` | Salir |

**Uso**:
```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### Control de planificación de trayectorias (`8_arm_traj_control.py`)

Planificación de trayectorias geodésicas en SE(3) + seguimiento CLIK.

**Formato de entrada**:
```
x y z [roll pitch yaw] [duration]
```

**Parámetros**:
- `x, y, z`: Posición objetivo (metros)
- `roll, pitch, yaw`: Orientación objetivo (radianes)
- `duration`: Duración del movimiento (segundos), por defecto 2.0 s

**Uso**:
```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### Control de compensación de gravedad (`9_gravity_compensation.py`)

Compensa la gravedad de las articulaciones utilizando el modelo dinámico de Pinocchio.

**Ley de control**:
```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamiento esperado**:
- El brazo robótico puede "flotar" en cualquier postura
- No caerá por su propio peso cuando se suelte
- Se puede mover manualmente a cualquier posición

**Uso**:
```bash
uv run python example/9_gravity_compensation.py
```

**Salida**:
- Visualización en tiempo real del par esperado para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

---

## Preguntas frecuentes (FAQ)

- **Aparece un error `Permission denied`**  
  Asegúrate de haber ejecutado `sudo chmod 666 /dev/ttyACM0` o `sudo chmod 666 /dev/can0` para establecer los permisos del dispositivo.

- **La resolución de IK falla o los resultados son anormales**  
  Comprueba si la pose objetivo está dentro del espacio de trabajo del brazo robótico y asegúrate de que la configuración de los límites articulares sea correcta.

- **El efecto de compensación de gravedad no es bueno**  
  Esto puede deberse a errores estructurales y precisión de procesamiento. La compensación de gravedad de este proyecto depende de urdf y pinocchio. Puedes intentar corregir el urdf según tus parámetros medidos reales (puedes pedir ayuda a una IA para este paso).

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
- [motorbridge SDK](https://github.com/Damiao/motorbridge)

---

<div align="center">
  <strong>Si este proyecto te ayuda, ¡por favor danos una estrella!</strong>
</div>