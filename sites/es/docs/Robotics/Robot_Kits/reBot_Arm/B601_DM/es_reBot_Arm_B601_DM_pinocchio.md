---
description: Este tutorial presenta cómo utilizar Pinocchio y MeshCat para el análisis cinemático y la visualización en el brazo robótico reBot Arm B601-DM.
title: B601-DM con Pinocchio
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
  date: 2026-06-30
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/
---

import '/src/css/rebot-wiki-style.css';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-DM Pinocchio & MeshCat

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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

:::tip
Este código de ejemplo se puede usar para controlar los motores o las poses del brazo robótico, incluyendo control de un solo motor, control y pruebas de cinemática directa/inversa, ajuste de la posición cero del brazo y lectura del ángulo del motor, sistema de visualización MeshCat y más.
:::

<div align="center">
  <a href="https://github.com/stack-of-tasks/pinocchio">Pinocchio</a> es una biblioteca de código abierto para análisis y optimización de dinámica en robótica. Proporciona cinemática directa/inversa eficiente, cálculos de dinámica y capacidades de planificación de trayectorias.
</div>

<div align="center">
  <a href="https://github.com/rdeits/meshcat">MeshCat</a> es una herramienta de visualización 3D basada en la web que puede mostrar en tiempo real el estado del robot y las trayectorias de movimiento.
</div>

Este proyecto combina las potentes capacidades de cálculo de Pinocchio con la visualización intuitiva de MeshCat, proporcionando un conjunto completo de herramientas de análisis cinemático y depuración para reBot Arm B601-DM.

<GitHubStarButton owner="Seeed-Projects" repo="reBotArm_control_py" />

---

## Características del proyecto

1. **Análisis cinemático completo**
   Soporta cálculos de Cinemática Directa (FK) y Cinemática Inversa (IK), capaz de resolver en tiempo real la pose del efector final del brazo robótico.

2. **Visualización 3D en tiempo real**
   Muestra en tiempo real el estado del brazo robótico y las trayectorias de movimiento mediante MeshCat en el navegador, sin necesidad de software adicional.

3. **Planificación y seguimiento de trayectorias**
   Implementa planificación de trayectorias geodésicas en SE(3), soportando control de seguimiento CLIK (Cinemática Inversa en Bucle Cerrado).

4. **Control de compensación de gravedad**
   Calcula el par de gravedad de las articulaciones basado en el modelo dinámico de Pinocchio, logrando el efecto de “flotación” del brazo robótico.

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
      <td>6 GDL + pinza</td>
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
      <td>24 V CC</td>
    </tr>
    <tr>
      <td>Método de control</td>
      <td>PC</td>
    </tr>
    <tr>
      <td>Rango de temperatura de funcionamiento recomendado</td>
      <td>0°C ~ 40°C</td>
    </tr>
  </tbody>
</table>

## Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
| -- | -- | -- |
| Brazo robótico reBot Arm B601-DM | 1 | ✅ |
| Puente serie USB2CAN | 1 | ✅ |
| Adaptador de corriente (24 V) | 1 | ✅ |
| Cable USB-C | 1 | ✅ |
| Pinza | 1 | ✅ |

## Requisitos de entorno

:::caution Prerrequisito — Completa primero la guía rápida del brazo
Antes de continuar con este tutorial, **debes** completar de principio a fin el documento **[reBot Arm B601-DM Quick Start](/es/rebot_b601_dm_getting_started)**, incluyendo:

- Desempaquetado del hardware, cableado y lista de verificación de encendido
- Permisos del dispositivo serie / CAN (`sudo chmod 666 /dev/ttyACM0` o `/dev/can0`)
- Calibración a cero de todas las articulaciones (`2_zero_and_read.py`) y verificación de que el brazo puede ser comandado en modo MIT / POS_VEL

Este tutorial asume que el brazo ya responde en el bus, que las articulaciones están puestas a cero y que el operador está familiarizado con los límites de seguridad relevantes. Saltarse la guía rápida puede llevar a motores mal configurados, articulaciones bloqueadas o caídas del brazo.
:::

| Elemento | Requisito |
| ------ | ------------- |
| **Python** | 3.10+ |
| **Sistema operativo** | Ubuntu (se recomienda Ubuntu 24.04 LTS) |
| **Interfaz de comunicación** | Puente serie USB2CAN o interfaz CAN |

---

## Pasos de instalación

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Instalar uv (si no está instalado)</h4>
<p className="rebot-step-label">Paso 1</p>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Después de la instalación, ejecuta el siguiente comando para verificar que `uv` está disponible:

```bash
uv --version
```

Si la instalación fue correcta, deberías ver una salida similar a la siguiente (la versión y la plataforma pueden diferir):

```text
uv 0.11.31 (x86_64-unknown-linux-gnu)
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Sincronizar entorno (instalar todas las dependencias)</h4>
<p className="rebot-step-label">Paso 2</p>

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` creará automáticamente un entorno virtual (si no existe) e instalará todas las dependencias según `pyproject.toml` y `uv.lock`.
:::

</div>
</section>
</div>

## Ajuste de parámetros del controlador MIT / POS_VEL {#tune-controller-params}

Esta sección explica **cómo modificar** los parámetros del controlador para cada articulación del brazo bajo **modo MIT** y **modo POS_VEL**, y cómo hacer que los cambios surtan efecto.

:::tip Esta sección solo cubre “dónde / cómo cambiar”, no “qué valor usar”
Parámetros adecuados solo se pueden obtener mediante **ajuste sobre el hardware**. Esta sección solo cubre: dónde residen los parámetros, qué controla cada campo y cómo hacer efectivos los cambios y verificarlos. Para estrategias específicas de ajuste (por ejemplo, prueba y error, Ziegler‑Nichols), consulta referencias generales de control de motores.
:::

### Ubicación del archivo de configuración

| Versión de hardware | Archivo de configuración del motor | Entrada de conmutación |
| --- | --- | --- |
| **reBot Arm B601-DM** (este documento) | `config/rebotarm_dm.yaml` | Establece `hardware_yaml: "rebotarm_dm.yaml"` en `config/rebotarm.yaml` |
| **reBot Arm B601-RS** | `config/rebotarm_rs.yaml` | Establece `hardware_yaml: "rebotarm_rs.yaml"` en `config/rebotarm.yaml` |

:::caution No edites `rebotarm.yaml` directamente
Ese archivo solo contiene una única línea `hardware_yaml: ...`; todos los parámetros de los motores se encuentran en `rebotarm_dm.yaml` / `rebotarm_rs.yaml`.
:::

### Estructura del archivo de configuración

Cada articulación tiene su propia entrada, agrupada por **modo de control**:

```yaml
joints:
  - name: joint1
    motor_id: 0x01
    feedback_id: 0x11
    model: "4340P"
    vendor: "damiao"
    MIT:
      kp: 120.0
      kd: 8.0
    POS_VEL:
      vel_kp: 0.0125
      vel_ki: 0.004
      pos_kp: 150.0
      pos_ki: 0.5
      vlim: 5.0
  # ... joint2 ~ joint6 follow the same structure ...
```

Cómo localizar:

- **Por nombre de articulación**: para modificar una articulación, encuentra el bloque `- name: jointX`;
- **Por modo**: bajo esa articulación, `MIT:` contiene los parámetros del modo MIT, `POS_VEL:` contiene los parámetros del modo POS_VEL;
- **El modo actual determina qué conjunto se envía**: el script cambia de modo mediante `mode mit` / `mode posvel`; el motor realmente recibe los parámetros bajo el sub-bloque correspondiente.

### Significado de los campos en modo MIT

| Campo | Función |
| --- | --- |
| `kp` | Ganancia proporcional del lazo de posición: la “rigidez” del seguimiento de la posición objetivo. |
| `kd` | Ganancia de amortiguamiento del lazo de velocidad: suprime las oscilaciones causadas por el error de posición. |

### Significado de los campos en modo POS_VEL

| Campo | Función |
| --- | --- |
| `vel_kp` | Ganancia proporcional del lazo de velocidad. |
| `vel_ki` | Ganancia integral del lazo de velocidad. |
| `pos_kp` | Ganancia proporcional del lazo de posición. |
| `pos_ki` | Ganancia integral del lazo de posición (solo presente en algunas configuraciones del proveedor). |
| `vlim` | Límite de velocidad, restringe la velocidad máxima de movimiento. |

:::warning Las definiciones de campos difieren entre proveedores
Los motores Damiao (DM) y Robostride (RS) usan unidades diferentes a nivel de protocolo, por lo que **el mismo nombre de campo no es comparable entre proveedores**. Modificar `vel_kp` de RS y modificar `vel_kp` de DM significan cosas distintas. Interpreta cada YAML según su propio orden de campos, no compares valores entre archivos de configuración.
:::

:::caution Limita el alcance de las pruebas antes de ajustar
Cambios grandes de `kp` / `kd` en varias articulaciones pueden causar oscilación inmediata, sobrecorriente o colisiones con topes mecánicos si cualquier dirección o signo de articulación es incorrecto. Antes de ajustar, despeja el espacio de trabajo del brazo y planea probar **una articulación y un modo a la vez, en pasos pequeños**.
:::

### Procedimiento de edición

1. **Detén cualquier script en ejecución**. El motor está habilitado cuando editas el YAML, los cambios no surten efecto de inmediato y es fácil provocar comportamientos inconsistentes.
2. **Edita el archivo YAML correspondiente**:

   ```bash
   # Example for DM
   vim config/rebotarm_dm.yaml
   ```

   - Solo cambia la articulación que necesites ajustar (por ejemplo, `joint1`); deja sin tocar las articulaciones no relacionadas;
   - Dentro de una articulación, solo cambia el modo que necesites ajustar (MIT o POS_VEL); no modifiques los campos del otro modo sin motivo.
3. **Conserva la indentación YAML**: 2 espacios por nivel, claves separadas de valores por `:`. Una indentación incorrecta hace que falle el análisis de `yaml.safe_load`, y todos los parámetros volverán a los valores predeterminados.
4. **Reinicia el script después de guardar**. El YAML se lee una vez al iniciar el script; **las ediciones en tiempo de ejecución no surten efecto de inmediato**.
5. **Verificación de una sola articulación**: usa un script como `3_mit_control.py` (MIT) / `4_pos_vel_control.py` (POS_VEL) para verificar el cambio con un **pequeño movimiento de una sola articulación** antes de hacer una prueba con todo el brazo.

### Verificar que el cambio surtió efecto

- **Observación en tiempo de ejecución**: habilita el motor en `3_mit_control.py` / `4_pos_vel_control.py` y revisa `state`; si los parámetros parecen sin cambios o el motor se comporta exactamente igual que antes, el YAML se editó incorrectamente o fue sobrescrito por los valores predeterminados.
- **Auto‑comprobación del YAML**: analízalo directamente con Python e imprime los campos de una articulación para confirmar que los valores coinciden con lo que acabas de escribir:

  ```bash
  uv run python -c "import yaml; print(yaml.safe_load(open('config/rebotarm_dm.yaml'))['joints'][0])"
  ```

- **Reversión rápida**: `git checkout config/rebotarm_dm.yaml` restaura los valores predeterminados del repositorio.

---

## Introducción a las herramientas de depuración

:::tip Permission Settings
Antes de ejecutar ejemplos de control de hardware, debes configurar los permisos del dispositivo:

```bash
# Set serial device permissions (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or set CAN device permissions (e.g., can0)
sudo chmod 666 /dev/can0
```

:::
<details>
<summary>Herramientas de depuración (usar solo cuando ocurra una excepción)</summary>

**Consola de control de un solo motor (`0x01damiao_test.py`)**

Prueba directa de un solo motor usando el SDK de motorbridge.

**Cómo ejecutar**:

```bash
uv run python example/0x01damiao_test.py
```

**Comandos interactivos**:

| Command | Description |
| ------ | ------ |
| `enable` / `disable` | Enable/Disable motor |
| `set_zero` | Set zero position |
| `state` | View status |
| `ping` | Ping motor to get response |
| `clear_error` | Clear motor errors |
| `mode <mit/posvel/vel>` | Switch control mode |
| `mit <pos> [vel] [kp] [kd]` | MIT mode command |
| `posvel <pos> [vlim]` | POS_VEL mode command |
| `vel <velocity>` | Pure velocity mode command |
| `read_param <id> [type]` | Read motor parameters |
| `write_param <id> <value> [type]` | Write motor parameters |
| `loop` | Enter loop control mode |
| `q` / `quit` | Quit |

---

**Calibración de cero y monitorización de ángulo (`2_zero_and_read.py`)**

Establece automáticamente el cero de todas las articulaciones y muestra los ángulos articulares en tiempo real.

**Cómo ejecutar**:

```bash
uv run python example/2_zero_and_read.py

# Example Output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01
```

---
</details>

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Modo de control MIT (alternativa en reBot DM, consultar bajo demanda — se recomienda POS_VEL)</h4>
<p className="rebot-step-label">Demo 3 · 3_mit_control.py</p>

:::warning Opcional — MIT es el modo alternativo en DM
Para el **reBot Arm B601-DM**, POS_VEL (Position‑Velocity) suele ser el modo de control de articulaciones más adecuado; el protocolo del motor Damiao admite de forma nativa el control híbrido posición‑velocidad con limitación de velocidad integrada. El modo MIT normalmente requiere un ajuste más cuidadoso de `kp` / `kd`.

Este ejemplo no es necesario para completar el tutorial. A menos que necesites específicamente depurar el modo MIT, **omite este ejemplo** y usa el ejemplo POS_VEL de abajo. Si tu objetivo es un movimiento suave del efector final a lo largo de una trayectoria planificada, ve directamente a [Control IK de trayectoria suave (`8_arm_traj_control.py`)](#demo8-traj-control).
:::

Introduce ángulos objetivo para todas las articulaciones para completar el control del motor en modo de control MIT, que se usa normalmente para control de fuerza, control de impedancia o escenarios que requieren alta respuesta dinámica.

:::danger Antes de ejecutar — Este ejemplo no tiene planificación de trayectoria suave
Este ejemplo envía ángulos articulares objetivo directamente a los motores, **sin planificación de trayectoria ni de velocidad**. Un cambio grande del objetivo puede causar un movimiento repentino a alta velocidad y activar la protección por sobrecorriente.

- Ejecútalo solo cuando necesites verificar el control de articulaciones MIT de bajo nivel. Empieza moviendo una articulación solo 5–10 grados y luego aumenta el cambio gradualmente después de confirmar la respuesta y la dirección;
- Si necesitas una trayectoria suave completa, omite este ejemplo y ve a [Control IK de trayectoria suave (`8_arm_traj_control.py`)](#demo8-traj-control);
- Despeja el espacio de trabajo del brazo antes de ejecutar y asegúrate de poder cortar la alimentación de inmediato.
:::

<details className="rebot-demo-details">
<summary>Desplegar instrucciones de ejecución (opcional)</summary>

**Cómo ejecutar**:

```bash
uv run python example/3_mit_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Modo de control posición‑velocidad</h4>
<p className="rebot-step-label">Demo 4 · 4_pos_vel_control.py</p>

Introduce ángulos objetivo para todas las articulaciones para controlar los motores en modo híbrido POS_VEL (Position‑Velocity). La limitación de velocidad integrada de Damiao puede reducir el impacto de los cambios de objetivo, pero este ejemplo en sí no proporciona una planificación completa de trayectoria suave.

:::danger Opcional — La limitación de velocidad no es una planificación de trayectoria completa
Aunque POS_VEL es el modo de control de articulaciones recomendado para DM, este ejemplo sigue actualizando directamente los objetivos de posición articular y no planifica la trayectoria intermedia. Un cambio grande del objetivo aún puede causar movimiento repentino, colisión o sobrecorriente.

- Este ejemplo no es necesario para completar el tutorial. Si solo necesitas un movimiento suave del efector final, **omite este ejemplo** y ve directamente a [Control IK de trayectoria suave (`8_arm_traj_control.py`)](#demo8-traj-control);
- Al verificar el control articular POS_VEL, empieza moviendo una articulación solo 5–10 grados y luego aumenta gradualmente el cambio de objetivo;
- Despeja el espacio de trabajo del brazo antes de ejecutar y asegúrate de poder cortar la alimentación de inmediato.
:::

<details className="rebot-demo-details">
<summary>Desplegar instrucciones de ejecución (opcional)</summary>

**Cómo ejecutar**:

```bash
uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0 0 # Control motor 1 to rotate 30 degrees
> state
  pos (deg): ['+29.99', '+0.00', '-45.00', '+0.00', '+0.00', '+0.00']
> q # Exit system
```

</details>

</div>
</section>
</div>

---

## Pruebas de cinemática

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Pruebas de cinemática directa</h4>
<p className="rebot-step-label">Demo 5 · 5_fk_test.py</p>

Calcular la pose del efector final a partir de los ángulos articulares.

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

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Pruebas de cinemática inversa</h4>
<p className="rebot-step-label">Demo 6 · 6_ik_test.py</p>

Resolver los ángulos articulares a partir de la pose deseada del efector final.

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

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
<span className="rebot-step-number">7</span>
<div className="rebot-step-content">
<h4>Control de cinemática inversa en modo MIT</h4>
<p className="rebot-step-label">Demo 7 · 7_arm_ik_control.py</p>

Utiliza cinemática inversa (IK) en modo MIT para especificar las coordenadas 3D (X, Y, Z) y la orientación (ángulos de Euler) a las que debe moverse el efector final del brazo robótico.

**Formato de entrada**:

- Solo posición: `<x> <y> <z>` (metros)
- Posición + Orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)
- Introduce `state`: Ver los valores actuales en radianes de cada articulación.
- Introduce `end_state`: Ver las coordenadas actuales reales del efector final (m) y los ángulos de Euler (rad) en el espacio.

:::danger Opcional — Este ejemplo no tiene planificación de trayectoria suave
Este ejemplo envía la solución de IK directamente como objetivo de articulaciones, **sin planificación de trayectoria ni de velocidad**. Un gran cambio en la pose objetivo puede causar un movimiento repentino a alta velocidad y activar la protección por sobrecorriente.

- Este ejemplo no es necesario para completar el tutorial. En la mayoría de los casos, **omite este ejemplo** y utiliza la siguiente sección, [Control IK con trayectoria suave (`8_arm_traj_control.py`)](#demo8-control-de-trayectoria), que incluye planificación de aceleración/desaceleración de mínimo tirón;
- Ejecútalo solo cuando necesites comparar o depurar el control IK sin planificación de trayectoria. Mantén el primer objetivo dentro de 5–10 cm de la posición actual del efector final;
- Antes de ejecutarlo, confirma que la pose objetivo sea alcanzable, despeja el área de trabajo de personas y obstáculos, y asegúrate de poder cortar la alimentación inmediatamente.
:::

<details className="rebot-demo-details">
<summary>Mostrar instrucciones de ejecución (opcional)</summary>

**Cómo ejecutar**:

```bash
uv run python example/7_arm_ik_control.py

#Usage A
> 0.3 0.0 0.4 # Position only (orientation defaults to 0), move the arm end-effector to 0.3 meters forward and 0.4 meters above.

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians.

> ctrl + c # Return to zero position and exit system
```

</details>

</div>
</section>

<section className="rebot-step-item rebot-step-item--recommended">
<span className="rebot-step-number">8</span>
<div className="rebot-step-content">
<h4 id="demo8-traj-control">Control de cinemática inversa con trayectoria suave</h4>
<p className="rebot-step-label">Demo 8 · 8_arm_traj_control.py</p>

Utiliza cinemática inversa (IK) en modo MIT para planificar automáticamente una trayectoria de movimiento con aceleración/desaceleración uniforme o suave dentro del tiempo objetivo, evitando fuertes vibraciones en las articulaciones.

**Formato de entrada**:

- Solo posición: `<x> <y> <z>` (metros)
- Posición + Orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)
- Posición + Orientación + Tiempo (por defecto 2.0): `<x> <y> <z> <roll> <pitch> <yaw> <time>` (grados)
- Introduce `state`: Ver los valores actuales en radianes de cada articulación.
- Introduce `end_state`: Ver las coordenadas actuales reales del efector final (m) y los ángulos de Euler (rad) en el espacio.

**Cómo ejecutar**:

```bash
uv run python example/8_arm_traj_control.py

#Usage A
> 0.3 0.0 0.4 # Position only, orientation defaults to 0, default movement time is 2.0 seconds

#Usage B
> 0.3 0.0 0.4 0.0 0.0 0.5 # Control both position and orientation: move to the specified position while rotating the wrist yaw angle by 0.5 radians, default movement time is 2.0 seconds

#Usage C
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0 # Move the arm to the specific position and specify 5.0 seconds to slowly move there. (Note: If entering time, the preceding orientation parameters 0 0 0 cannot be omitted)

> ctrl + c # Return to zero position and exit system
```

:::tip ¿Qué pasa si observo desviación de la pose?
Si notas que la **pose leída del efector final** difiere de la **pose objetivo ordenada**, y la **pose en sí es alcanzable** (no está fuera del espacio de trabajo, ni en una singularidad), es probable que el problema esté en los parámetros de tu controlador MIT / POS_VEL. En ese caso, consulta la sección anterior [Ajuste de parámetros del controlador MIT / POS_VEL](#ajustar-parámetros-del-controlador) y ajusta manualmente `kp` / `kd`, etc. usando el enfoque de "una sola articulación, modo por modo, pasos pequeños"; una vez ajustado, vuelve a este ejemplo para verificar.
:::

</div>
</section>
</div>

---

## Pruebas de compensación de gravedad

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">9</span>
<div className="rebot-step-content">
<h4>Control de compensación de gravedad — Versión básica</h4>
<p className="rebot-step-label">Demo 9 · 9_gravity_compensation.py</p>

Utiliza el modelo dinámico Pinocchio para compensar la gravedad de las articulaciones.

**Ley de control**:

```
tau = g(q)          — Gravity feedforward
pos = current motor position   — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all joints
```

**Comportamiento esperado**:

- El brazo puede "flotar" en cualquier pose
- No caerá por su propio peso cuando se suelte
- Se puede mover manualmente a cualquier posición

:::caution La salida normal realiza un retorno seguro a casa
Cuando detienes el script normalmente con `Ctrl+C`, primero detiene el control de compensación de gravedad y mantiene la pose actual con ganancias rígidas y alimentación adelantada de gravedad. Luego devuelve el brazo a cero mediante una trayectoria de mínimo tirón; solo después de que el retorno a casa se complete se desconecta y desactiva los motores.

El retorno automático a casa depende de la ejecución normal del programa, la comunicación y la alimentación. Mantén a las personas y los obstáculos fuera del espacio de trabajo del brazo y prepárate para sostener el brazo durante el retorno. Un fallo de comunicación, una pérdida inesperada de alimentación o una terminación forzada pueden impedir que la secuencia de protección se complete; corta la alimentación inmediatamente si se produce un movimiento anómalo.
:::

**Cómo ejecutar**:

```bash
uv run python example/9_gravity_compensation.py
```

**Salida**:

- Visualización en tiempo real del par deseado para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

:::tip Ajuste de la compensación de articulaciones individuales
Si algunas articulaciones están subcompensadas o sobrecompensadas debido a fricción estructural o diferencias de montaje, puedes aplicar un factor de escala adicional al elemento correspondiente del array `tau_g` en el código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por ejemplo, `tau_g[2] *= 1.2` significa aumentar el par de compensación de gravedad de la articulación 2 en un 20%. Se recomienda ajustar elemento por elemento según el efecto de flotación real para evitar realizar cambios excesivamente grandes de una sola vez.
:::

</div>
</section>

<section className="rebot-step-item rebot-step-item--caution">
<span className="rebot-step-number">10</span>
<div className="rebot-step-content">
<h4>Control de compensación de gravedad — Versión con bloqueo de velocidad del efector final</h4>
<p className="rebot-step-label">Demo 10 · 10_gravity_compensation_lock.py</p>

Basado en la compensación de gravedad básica, añade detección de velocidad del efector final y un mecanismo de bloqueo de ángulo de articulación.

**Ley de control**:

```
tau = g(q) + integral_term    — Gravity feedforward + integral term
pos = q_target                 — Target joint angle (locked or updated)
kp = 8.0,  kd = 1.0           — Enhanced stiffness/damping
```

**Lógica de bloqueo**:

- Cuando la velocidad lineal del extremo `||v_ee|| < 0.04 m/s` y la velocidad angular `||w_ee|| < 0.08 rad/s`:
  - El ángulo de articulación objetivo `q_target` permanece bloqueado
  - El brazo robótico se bloquea en la posición actual
- Cuando la velocidad del extremo supera el umbral:
  - `q_target` se actualiza al ángulo de articulación actual
  - Permite empujar manualmente para cambiar la posición

**Comportamiento esperado**:

- El brazo robótico se bloquea en la posición actual, requiriendo fuerza para cambiar el ángulo objetivo
- Más estable que la versión básica, adecuada para escenarios que requieren mantenimiento de la pose

:::caution La salida normal realiza un retorno seguro a casa
Cuando detienes el script normalmente con `Ctrl+C`, primero detiene el control de compensación de gravedad y mantiene la pose actual con ganancias rígidas y alimentación adelantada de gravedad. Luego devuelve el brazo a cero mediante una trayectoria de mínimo tirón; solo después de que el retorno a casa se complete se desconecta y desactiva los motores.

El retorno automático a casa depende de la ejecución normal del programa, la comunicación y la alimentación. Mantén a las personas y los obstáculos fuera del espacio de trabajo del brazo y prepárate para sostener el brazo durante el retorno. Un fallo de comunicación, una pérdida inesperada de alimentación o una terminación forzada pueden impedir que la secuencia de protección se complete; corta la alimentación inmediatamente si se produce un movimiento anómalo.
:::

**Cómo ejecutar**:

```bash
uv run python example/10_gravity_compensation_lock.py
```

**Salida**:

- Visualización en tiempo real del estado de bloqueo (LOCKED / UPDATE)
- Velocidad lineal del extremo, velocidad angular
- Par de compensación de gravedad para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

:::tip Ajuste de la compensación de articulaciones individuales
Si algunas articulaciones están subcompensadas o sobrecompensadas debido a fricción estructural o diferencias de montaje, puedes aplicar un factor de escala adicional al elemento correspondiente del array `tau_g` en el código:

```python
tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3
```

Por ejemplo, `tau_g[2] *= 1.2` significa aumentar el par de compensación de gravedad de la articulación 2 en un 20%. Se recomienda ajustar elemento por elemento según el efecto de flotación real para evitar realizar cambios excesivamente grandes de una sola vez.
:::

**Configuración de prueba de seguridad**:
Puedes modificar la lista `ENABLED_JOINTS` al principio del script para habilitar solo las articulaciones especificadas para las pruebas de seguridad:

```python
ENABLED_JOINTS = ["joint1"]  # Enable only joint1
```

</div>
</section>
</div>

---

## Entorno de simulación

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/meshcat_DM.png" alt="Simulación MeshCat del reBot Arm B601-DM" />
</div>

:::tip Dirección del visor web MeshCat
Después de iniciar una simulación, la terminal imprime la URL de acceso real. El valor por defecto es `http://127.0.0.1:7000/static/`; si el puerto está ocupado, MeshCat intenta automáticamente el siguiente puerto, así que utiliza la URL impresa en la terminal.
:::

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S1</span>
<div className="rebot-step-content">
<h4>Simulación de cinemática directa</h4>
<p className="rebot-step-label">Demostración de simulación 1 · sim/fk_sim.py</p>

Simulación interactiva de cinemática directa, visualiza la pose del brazo robótico introduciendo ángulos articulares en MeshCat.

**Cómo ejecutar**:

```bash
uv run python example/sim/fk_sim.py
```

**Comandos interactivos**:

- Introduce 6 ángulos articulares (grados), separados por espacios
- Ejemplo: `0 0 0 0 0 0`
- Ejemplo: `45 -30 15 -60 90 -180`
- `q`/`quit`/`exit`: Salir

**Características**:

- Visualización en tiempo real de la posición y orientación del efector final
- Admite entrada continua para probar diferentes poses
- Salida de información de pose formateada

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S2</span>
<div className="rebot-step-content">
<h4>Simulación de cinemática inversa</h4>
<p className="rebot-step-label">Demostración de simulación 2 · sim/ik_sim.py</p>

Simulación interactiva de cinemática inversa, resuelve automáticamente los ángulos articulares a partir de la pose objetivo y la visualiza.

**Cómo ejecutar**:

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
- Actualizaciones de la pose del robot en tiempo real

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S3</span>
<div className="rebot-step-content">
<h4>Simulación de planificación de trayectoria</h4>
<p className="rebot-step-label">Demostración de simulación 3 · sim/traj_sim.py</p>

Simulación de planificación de trayectoria basada en geodésicas en SE(3), incluyendo seguimiento CLIK y reproducción de animaciones en MeshCat.

**Cómo ejecutar**:

```bash
uv run python example/sim/traj_sim.py
```

**Comandos interactivos**:

- Entrada: `x y z [roll pitch yaw]` (metros/radianes)
- Pulsa Enter para usar la configuración predeterminada
- `q`: Salir

**Características**:

- Planificar desde la posición actual hasta la posición objetivo
- Usar un perfil de trayectoria de mínimo tirón (minimum jerk)
- Visualización en tiempo real de las estadísticas de la trayectoria
- Reproducción completa de la animación de la trayectoria en MeshCat
- Muestra la trayectoria de referencia (gris) y la trayectoria real (verde)

</div>
</section>

<section className="rebot-step-item rebot-step-item--simulation">
<span className="rebot-step-number">S4</span>
<div className="rebot-step-content">
<h4>Herramienta de visualización</h4>
<p className="rebot-step-label">Demostración de simulación 4 · sim/visualizer.py</p>

[LINE_101>Wrapper del visualizador MeshCat, que proporciona una interfaz unificada de visualización del robot.

**Características principales**:

- Cargar el modelo URDF y mostrar el robot
- Dibujar trayectorias polilínea 3D (referencia/real)
- Mostrar la pose objetivo de la IK (ejes tricolores + esfera)
- Soporta la reproducción de animaciones de trayectorias articulares

**Ejemplo de uso**:

```python
from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)  # Update robot pose
viz.draw_path(points, "path_name", color)  # Draw path
```

</div>
</section>
</div>

---

## Preguntas frecuentes

- **Aparece el error `Permission denied`**
  Asegúrate de haber ejecutado `sudo chmod 666 /dev/ttyACM0` o `sudo chmod 666 /dev/can0` para establecer los permisos del dispositivo.

- **La resolución de IK falla o los resultados son anormales**
  Comprueba si la pose objetivo está dentro del espacio de trabajo del brazo robótico y asegúrate de que la configuración de los límites articulares sea correcta.

- **El efecto de compensación de gravedad no es bueno**
  Esto puede deberse a errores estructurales y a la precisión del mecanizado. La compensación de gravedad de este proyecto depende de URDF y Pinocchio. Puedes intentar corregir el URDF según tus parámetros medidos reales (puedes pedir ayuda a una IA para este paso).

---

## Contacto

- **Soporte técnico**: [Submit Issue](https://github.com/Seeed-Projects/reBotArm_control_py/issues)
- **Repositorio del proyecto**: [GitHub](https://github.com/Seeed-Projects/reBotArm_control_py)
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
