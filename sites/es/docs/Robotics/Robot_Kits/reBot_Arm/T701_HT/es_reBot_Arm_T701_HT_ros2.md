---
title: reBot Arm T701 HT ROS 2 SDK
sidebar_label: ROS 2 SDK
toc_max_heading_level: 2
description: Instala el T701-HT ROS 2 SDK en Ubuntu 22.04 con ROS 2 Humble, usa RViz2 y ejemplos de simulación cinemática o de hardware, y controla los brazos mediante topics, servicios y una acción de trayectoria.
keywords:
  - reBot
  - T701 HT
  - ROS 2
  - Humble
  - RViz2
  - QP IK
slug: /rebot_t701_ht_ros2
translation:
  skip: [zh-CN]
last_update:
  date: 11/24/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT ROS 2 SDK

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Welt-liu"
  repo="T701_ROS2_SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT ROS 2 SDK on GitHub"
/>

El T701-HT ROS 2 SDK proporciona control articular, trayectorias multipunto, cinemática inversa QP, control del gripper, homing y freno de amortiguación. Comienza con RViz2 y los ejemplos sin conectar un robot, luego cambia al hardware y envía comandos desde tus propios nodos de ROS 2.

El [repositorio del SDK](https://github.com/Welt-liu/T701_ROS2_SDK) incluye el código fuente, el modelo, ruedas de dependencias y READMEs en chino e inglés. Ejecuta todos los comandos de esta página desde el **directorio raíz `T701_ROS2_SDK`** que contiene `start.sh`.

:::note[Instalar por separado del Python SDK]

Este capítulo usa Python 3.10 del sistema y el `.venv` del SDK; no necesitas activar el entorno Conda `t701-ht` del Inicio Rápido. Ejecuta solo un SDK contra una placa de comunicación a la vez. Las páginas existentes de [Pinocchio](./reBot_Arm_T701_HT_pinocchio.md) y [Teleoperación VR](./reBot_Arm_T701_HT_vr.md) describen ejemplos del Python SDK. Este paquete de ROS 2 no incluye un receptor de entrada VR, MoveIt, un plugin de `ros2_control` ni simulación física en Gazebo.

:::

<section className="section-card">

## Instalar y compilar

### Instalar dependencias del sistema

| Elemento de entorno | Requisito |
| --- | --- |
| Sistema operativo | Ubuntu 22.04 |
| Versión de ROS | ROS 2 Humble |
| Python | Python 3.10 del sistema con el `.venv` del SDK |
| Arquitectura del procesador | Linux x86_64 o ARM64 |
| Bibliotecas de modelo y numéricas | Pinocchio y FCL desde apt, más NumPy 1.x; requerido tanto para simulación como para hardware |

Configura el repositorio de ROS usando las [instrucciones oficiales de instalación de ROS 2 Humble](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html), luego instala las dependencias:

```bash
sudo apt update
sudo apt install python3-venv python3-pip python3-pytest \
  python3-colcon-common-extensions python3-numpy python3-scipy python3-yaml \
  python3-jinja2 python3-joblib \
  ros-humble-desktop ros-humble-control-msgs ros-humble-diagnostic-msgs \
  ros-humble-pinocchio ros-humble-hpp-fcl
```

Pinocchio y FCL proporcionan cinemática, cálculo de gravedad y comprobaciones de colisión de mallas. Tanto la simulación como el hardware los necesitan. Usa las bibliotecas de modelo de apt y NumPy 1.x descritos aquí en lugar de reutilizar el entorno Conda del Python SDK.

### Obtener el SDK

```bash
git clone https://github.com/Welt-liu/T701_ROS2_SDK.git
cd T701_ROS2_SDK
```

### Crear el entorno y compilar

```bash
python3.10 -m venv --system-site-packages .venv
.venv/bin/python -m pip install \
  'numpy>=1.23,<2' 'scipy>=1.9,<2' 'PyYAML>=6,<7' 'osqp>=1,<2' pytest
./build.sh
```

`build.sh` y `start.sh` cargan ROS 2 Humble y este workspace. Después de la configuración inicial, usa `start.sh` para la operación diaria. Vuelve a crear `.venv` y recompila después de mover el directorio o copiarlo a otro ordenador. La simulación no necesita el motor SDK; consulta la pestaña **Connect hardware** más abajo para su instalación.

</section>

<section className="section-card">

## Elegir un modo de ejecución

| Comparación | Simulación `sim` | Hardware `real` |
| --- | --- | --- |
| Conexión del robot | No se necesita robot ni placa de comunicación | Alimenta el robot y conecta la placa de comunicación |
| Motor SDK | No requerido | Instala la rueda para la arquitectura de tu ordenador |
| Movimiento habilitado al inicio | Habilitado automáticamente | Deshabilitado por defecto; comprueba la realimentación antes de habilitarlo |
| Dominio de comunicación por defecto | `20` | `21` |

Abre dos terminales: **mantén el driver ejecutándose en la terminal A y ejecuta los ejemplos en la terminal B**. Ambas terminales deben estar en la raíz del SDK y usar el mismo prefijo `sim` o `real`. Elige los ejemplos que necesites y ejecuta uno a la vez.

<Tabs defaultValue="sim" groupId="t701-ros2-mode">
<TabItem value="sim" label="Simulación y RViz2">

No se requiere conexión con el robot. La simulación actualiza los estados articulares a partir de los comandos para mostrar el modelo y practicar la interfaz ROS. No simula dinámica, contacto ni caída bajo la gravedad.

### Terminal A: iniciar la simulación

```bash
./start.sh sim arms:=dual
```

Mantén esta terminal en ejecución. Establece el Fixed Frame de RViz2 en `base_link`; el modelo debería actualizarse durante los ejemplos. Para usar un solo brazo, cierra el driver actual y reemplaza `arms:=dual` por `arms:=left` o `arms:=right`.

### Terminal B: leer el estado

```bash
./start.sh sim demo --mode state --duration 5
```

Lee una vez la posición articular, velocidad, par y la pose de la herramienta izquierda:

```bash
./start.sh sim topic echo /t701_ht/motor_states --once
./start.sh sim topic echo /t701_ht/left_tool_pose --once
```

### Terminal B: ejecutar ejemplos de movimiento

| Ejemplo | Comportamiento esperado | Parámetros y selección de brazo |
| --- | --- | --- |
| Movimiento articular | J1 de cada brazo seleccionado se mueve adelante y atrás desde su posición actual | Amplitud de `0.10 rad` durante `5 s` |
| Trayectoria multipunto | Ejecuta cuatro pequeños segmentos de trayectoria desde la posición actual | Tiempo de movimiento de `8 s` |
| Cinemática inversa QP | Genera un objetivo de herramienta cercano desde la pose actual, lo resuelve y comprueba la llegada medida | El ejemplo usa el brazo izquierdo; usa `--side right` con el brazo derecho o con ambos brazos seleccionados por el driver |
| Control del gripper (actualmente sin efecto visible) | Solo establece un objetivo simulado interno. El modelo actual no muestra el movimiento de los dedos, por lo que no se puede verificar la apertura ni el agarre | Objetivo izquierdo `0.4 rad`, observado durante `5 s` por defecto; usa `--side right` para el gripper derecho |

Cada bloque de comandos a continuación ejecuta un ejemplo.

**Movimiento articular**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode joint --duration 5 --amplitude 0.10
```

**Trayectoria multipunto**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode trajectory --duration 8 --amplitude 0.10
```

**Cinemática inversa QP**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode ik --side left
```

**Control del gripper (actualmente sin efecto visible)**

:::info[Limitación actual de la simulación]

El gripper se muestra como un único modelo rígido de efector final sin articulaciones de dedos separadas. Este ejemplo solo establece un objetivo simulado interno; RViz2 no muestra movimiento de apertura o cierre. Los estados articulares del brazo impresos en la terminal también omiten la posición del gripper, por lo que no pueden verificar la anchura de apertura, la llegada al objetivo ni el agarre. Esta limitación se aplica al ejemplo actual de `sim`.

:::

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode gripper --side left --gripper 0.4
```

Estos ejemplos de movimiento regresan a home y aplican freno de amortiguación al completarse, por lo que debes habilitar el control antes de cada nuevo ejemplo. Los valores `--duration` de articulación y trayectoria excluyen el tiempo final de homing. RViz2 no anima la apertura y cierre de los dedos individuales del gripper.

### Terminal B: volver a home y detener

Para solicitar un retorno a cero por separado:

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode home
```

Para detener el movimiento simulado inmediatamente y deshabilitar el control:

```bash
./start.sh sim demo --mode stop
```

</TabItem>
<TabItem value="real" label="Conectar hardware">

Sigue el [Inicio Rápido](./reBot_Arm_T701_HT_Getting_Started.md) para montar y alimentar el robot y verificar sus posiciones cero. Este capítulo usa el directorio y la configuración separados del ROS 2 SDK.

:::warning[Primera ejecución con hardware]

Asegura el robot, retira cualquier carga y despeja su rango de movimiento y la trayectoria de retorno a cero. Comienza con un solo brazo y supervisa la ejecución. Comprueba la realimentación después de iniciar el driver antes de habilitar el movimiento.

:::

### Instalar el motor SDK

Elige un comando para la arquitectura de tu ordenador. Instálalo solo una vez.

Linux x86_64, Python 3.10:

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
```

Linux ARM64, Python 3.10:

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.0.0-cp310-cp310-linux_aarch64.whl
```

### Comprobar el cableado y los puertos serie

| Conexión | Puerto |
| --- | --- |
| Brazo izquierdo | CAN1 en la placa de comunicación |
| Brazo derecho | CAN2 en la placa de comunicación |
| Ordenador | Conexión USB a la placa de comunicación |

Comprueba la identidad USB de la placa y establece `board_serial` en `src/t701_ht_description/config/serial_binding.yaml` en su número de serie real. El driver resuelve los puertos por identidad de la placa, por lo que los cambios de enumeración ACM no requieren cambios de configuración manuales.

```bash
ls -l /dev/serial/by-id/
ls -l /dev/ttyACM*
id -nG
```

Si tu usuario no está en el grupo `dialout`, ejecuta el siguiente comando, luego cierra la sesión del escritorio e inicia sesión de nuevo:

```bash
sudo usermod -aG dialout "$USER"
```

### Terminal A: iniciar el driver de hardware

Usa el brazo izquierdo para la primera ejecución:

```bash
./start.sh real arms:=left
```

Usa `arms:=right` para el brazo derecho o `arms:=dual` para ambos. Cierra el driver actual antes de cambiar la selección de brazo. El inicio lee la realimentación con el movimiento deshabilitado por defecto; mantén la terminal A en ejecución.

### Terminal B: comprobar la realimentación

```bash
./start.sh real demo --mode state --duration 5
./start.sh real topic echo /t701_ht/motor_states --once
./start.sh real topic echo /diagnostics --once
```

Comprueba la realimentación articular y los diagnósticos del brazo seleccionado antes de ejecutar un ejemplo de movimiento. Usa el ejemplo de gripper de abajo para observar la respuesta física del gripper.

### Terminal B: ejecutar ejemplos de movimiento

| Ejemplo | Comportamiento esperado | Parámetros y selección de brazo |
| --- | --- | --- |
| Movimiento articular | J1 de cada brazo seleccionado se mueve adelante y atrás desde su posición actual | Amplitud de `0.10 rad` durante `5 s` |
| Trayectoria multipunto | Ejecuta cuatro pequeños segmentos de trayectoria desde la posición actual | Tiempo de movimiento de `8 s` |
| Cinemática inversa QP | Genera un objetivo de herramienta cercano desde la pose actual, lo resuelve y comprueba la llegada medida | El ejemplo usa el brazo izquierdo; usa `--side right` con el brazo derecho o con ambos brazos seleccionados por el driver |
| Control del gripper | Establece un objetivo del motor del gripper y observa su respuesta | Objetivo izquierdo `0.4 rad`, observado durante `5 s` por defecto; usa `--side right` para el gripper derecho |

Cada bloque de comandos a continuación ejecuta un ejemplo.

**Movimiento articular**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode joint --duration 5 --amplitude 0.10
```

**Trayectoria multipunto**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode trajectory --duration 8 --amplitude 0.10
```

**Cinemática inversa QP**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode ik --side left
```

**Control del efector de agarre**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode gripper --side left --gripper 0.4
```

Al finalizar, estos ejemplos de movimiento devuelven las articulaciones y efectores de agarre de todos los brazos seleccionados por el driver a cero y luego aplican freno amortiguado. Vuelve a habilitar el control antes de cada nuevo ejemplo. Los tiempos de movimiento articular y de trayectoria excluyen el homing.

### Terminal B: homing y parada

Para solicitar un retorno a cero por separado:

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode home
```

Para solicitar freno amortiguado del motor de inmediato y deshabilitar el control sin seguir la trayectoria de homing:

```bash
./start.sh real demo --mode stop
```

</TabItem>
</Tabs>

| Parámetro | Propósito | Rango o comportamiento |
| --- | --- | --- |
| `arms` | Seleccionar brazos al inicio del driver para movimiento articular, trayectorias multipunto y homing | `left`, `right` o `dual` |
| `--side` | Seleccionar el lado de IK o del efector de agarre | `left` o `right`; el driver debe haber iniciado ese lado |
| `--amplitude` | Amplitud de los ejemplos de articulación y trayectoria | `(0, 0.20]` rad |
| `--gripper` | Objetivo de ángulo del motor del efector de agarre | `[-0.2, 2.2]` rad |
| `--duration` | Tiempo de movimiento articular y de trayectoria, o tiempo de observación de estado y efector de agarre | Los tiempos de articulación y trayectoria excluyen el homing final. La IK termina según comprobaciones de llegada en lugar de esta duración |

En modo de doble brazo, el movimiento articular se ejecuta en ambos brazos juntos con el signo de J1 derecho invertido. Durante el ejemplo de IK, el otro brazo mantiene su posición actual.

</section>

<section className="section-card">

## RViz2 y operación sin cabeza

<div className="image-frame">

![Modelo del SDK ROS 2 T701-HT y marcos de coordenadas en RViz2](https://raw.githubusercontent.com/Welt-liu/T701_ROS2_SDK/main/assets/docs/rviz_overview.png)

</div>

| Ajuste de RViz2 | Valor o acción | Propósito |
| --- | --- | --- |
| Fixed Frame | `base_link` | Usar la base del robot como marco de referencia de visualización |
| TF | Enable | Mostrar marcos de coordenadas |
| RobotModel → Collision Enabled | Enable | Mostrar mallas de colisión |

El modo hardware usa retroalimentación articular medida; la simulación usa estados articulares simulados.

En un ordenador sin escritorio gráfico, inicia el driver en la terminal A sin RViz2:

```bash
./start.sh sim arms:=dual rviz:=false
```

Para hardware, usa `./start.sh real arms:=left rviz:=false`. Con el driver ya en ejecución, abre RViz2 por separado en otra terminal:

```bash
./start.sh sim run rviz2 rviz2 -d src/t701_ht_ros2/config/t701_ht.rviz
```

Usa el prefijo `real` para hardware. Si GLX/OpenGL falla, cierra el driver original y reinicia con `T701_HT_SOFTWARE_RENDERING=1 ./start.sh sim` o el comando `real` correspondiente.

Cuando el driver y RViz2 se ejecutan en ordenadores separados, usa el mismo modo de SDK y dominio de comunicación en ambos. Establece `export ROS_LOCALHOST_ONLY=0` antes de iniciar y permite la comunicación DDS por LAN. Inicia solo un driver.

</section>

<section className="section-card">

## Conecta tu programa ROS 2

### Interfaces comunes

| Interfaz | Tipo de mensaje | Propósito |
| --- | --- | --- |
| `/joint_states` | `sensor_msgs/msg/JointState` | Estado en coordenadas URDF para TF y RViz2 |
| `/t701_ht/motor_states` | `sensor_msgs/msg/JointState` | Posición, velocidad y par de las articulaciones en coordenadas de motor |
| `/t701_ht/joint_command` | `sensor_msgs/msg/JointState` | Objetivos articulares completos para los brazos seleccionados |
| `/t701_ht/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Trayectorias multipunto, retroalimentación, resultados y cancelación |
| `/t701_ht/left_tool_pose`, `/t701_ht/right_tool_pose` | `geometry_msgs/msg/PoseStamped` | Posiciones medidas de la herramienta |
| `/t701_ht/left_target_pose`, `/t701_ht/right_target_pose` | `geometry_msgs/msg/PoseStamped` | Objetivos de herramienta QP |
| `/t701_ht/left_gripper`, `/t701_ht/right_gripper` | `std_msgs/msg/Float64` | Objetivos de ángulo del motor del efector de agarre |
| `/t701_ht/home`, `/t701_ht/stop` | `std_srvs/srv/Trigger` | Solicitar homing o freno amortiguado inmediato |
| `/t701_ht/set_enabled` | `std_srvs/srv/SetBool` | Habilitar o deshabilitar movimiento |
| `/diagnostics` | `diagnostic_msgs/msg/DiagnosticArray` | Modo, estado de habilitación, objetivo activo y errores |

El modo de un solo brazo crea solo las interfaces de herramienta y efector de agarre del lado seleccionado. La posición, velocidad y par del motor usan rad, rad/s y N·m; las posiciones de la herramienta usan metros.

:::note[Coordenadas del motor y del modelo]

Los comandos articulares usan `left_joint1` a `left_joint7` y `right_joint1` a `right_joint7`. `/joint_states` usa nombres URDF como `A_l_joint1_link` con signos de ejes ya convertidos; no lo envíes sin cambios como comando de motor. Cada comando articular debe incluir todas las articulaciones seleccionadas por el driver: 14 articulaciones en modo de doble brazo.

:::

### Envía un objetivo articular

Este ejemplo requiere un **driver de simulación de brazo izquierdo**. Cierra el driver actual y luego ejecútalo en la terminal A:

```bash
./start.sh sim arms:=left
```

Envía un objetivo de siete ejes desde la terminal B. El tiempo de transición suave predeterminado es de 2 segundos:

```bash
./start.sh sim demo --mode enable
./start.sh sim topic pub --once /t701_ht/joint_command sensor_msgs/msg/JointState \
  '{name: [left_joint1, left_joint2, left_joint3, left_joint4, left_joint5, left_joint6, left_joint7], position: [0.10, 0, 0, 0, 0, 0, 0]}'
```

Los objetivos directos por tópico y las acciones de trayectoria mantienen sus puntos finales después de completarse. Ejecuta `./start.sh sim demo --mode home` cuando quieras volver a cero. Consulta los [comandos ROS estándar del SDK README](https://github.com/Welt-liu/T701_ROS2_SDK/blob/main/README_EN.md) para ejemplos completos de doble brazo, acción de trayectoria y mensajes de pose QP.

Los objetivos de pose se expresan en `base_link`, con cuaterniones normalizados en orden x, y, z, w. Solo se ejecuta una tarea de movimiento a la vez; esta interfaz no es un receptor directo para objetivos de teleoperación continua de alta frecuencia.

</section>

<section className="section-card">

## Parámetros de inicio y apagado

| Parámetro | Predeterminado | Descripción |
| --- | --- | --- |
| `arms` | `dual` | `left`, `right` o `dual` |
| `rviz` | `true` | Iniciar RViz2 |
| `state_rate` | `50.0` | Frecuencia de control y publicación de estado, de 5 a 100 Hz |
| `enable_on_start` | `false` | Habilitar movimiento al inicio de hardware; la simulación se habilita automáticamente |

Reinicia el driver después de cambiar parámetros. Ejecutar `./start.sh` sin argumentos inicia la simulación, y los ejemplos comprueban el modo del driver.

| Modo | Dominio de comunicación predeterminado | Variable de entorno para personalización |
| --- | --- | --- |
| Simulación | `20` | `T701_HT_SIM_DOMAIN_ID` |
| Hardware | `21` | `T701_HT_REAL_DOMAIN_ID` |

Para múltiples robots, establece valores coincidentes de variables de entorno en las terminales correspondientes. Los valores de simulación y hardware deben diferir y estar en el rango 0–232.

| Disparador | Comportamiento del driver | Notas |
| --- | --- | --- |
| Ejemplo de articulación, trayectoria, IK o efector de agarre completado | Volver a home, aplicar freno amortiguado y luego deshabilitar movimiento | Vuelve a habilitar antes del siguiente movimiento |
| Primer Ctrl+C en la terminal B | Solicitar que el movimiento actual termine y volver a home | Mantén la terminal A en ejecución hasta que finalicen las acciones de apagado |
| Ctrl+C en la terminal A | Volver a home y frenar antes de salir cuando las condiciones lo permitan | El control debe estar habilitado, la retroalimentación ser válida y la trayectoria de homing comprobada |
| Segunda interrupción | Solicitar freno amortiguado inmediato | Dejar de esperar el homing |
| Parada o deshabilitación explícita | Solicitar freno amortiguado inmediato | No seguir la trayectoria de homing |
| Cancelación de trayectoria | Finalizar la trayectoria original y solicitar homing | Confirma la finalización del homing a partir del estado real |

Una respuesta de servicio con `success: true` significa que la solicitud fue aceptada; confirma la finalización real del homing a partir del estado articular y del diagnóstico con `mode=braked`.

Las comprobaciones de geometría predeterminadas cubren autocolisión de los brazos seleccionados, colisiones con el cuerpo y colisiones entre brazos en modo de doble brazo. El modo de un solo brazo no comprueba el otro brazo. Los dedos, cables y obstáculos externos están ausentes del modelo, y las comprobaciones discretas de malla no representan una distancia de parada medida. Una retroalimentación no válida o una trayectoria de homing rechazada informa un error e intenta frenar en lugar de informar un homing correcto.

</section>

<section className="section-card">

## Solución de problemas

| Síntoma | Acción |
| --- | --- |
| Falta `ros2` o `rclpy` | Comprueba la instalación de ROS 2 Humble y recompila usando el entorno Python 3.10 del sistema de este capítulo |
| Error de importación de NumPy o de extensión de Python | Usa NumPy 1.x, mantén Conda separado de las bibliotecas nativas de ROS y vuelve a crear `.venv` en la raíz del SDK |
| `control is disabled` | Ejecuta `demo --mode enable` en la terminal B usando el mismo modo. Vuelve a habilitar después de cada ejemplo que haga homing y frene |
| Falta el driver o el ejemplo informa una discrepancia de modo | Mantén la terminal A en ejecución y haz coincidir el prefijo `sim` / `real` y el dominio de comunicación en ambas terminales |
| Error del SDK del motor, del puerto serie o de identidad USB | Instala la wheel para tu arquitectura y comprueba el cableado, `board_serial` y los permisos de `dialout` |
| RViz2 no tiene modelo o informa un error de TF | Comprueba `/joint_states` y `/robot_description`, y usa `base_link` como Fixed Frame |
| Trayectoria rechazada o QP no converge | Comprueba nombres de articulaciones, recuento completo de articulaciones, temporización, límites, marco de la pose y diagnósticos. Empieza con los pequeños ejemplos de esta página |

</section>

</div>
