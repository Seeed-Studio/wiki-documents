---
title: SDK de control MIT para reBot Arm T701 HT
sidebar_label: MIT Control SDK
description: Ejecuta control MIT de cinco parámetros para un solo motor con el SDK T701-HT y comprende la selección de CAN, trayectorias objetivo, retroalimentación y apagado con retorno a cero.
keywords:
  - reBot
  - T701 HT
  - Python SDK
  - MIT Control
  - Motor Control
slug: /rebot_t701_ht_control_mit
translation:
  skip: [zh-CN]
last_update:
  date: 11/18/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# SDK de control MIT para reBot Arm T701 HT

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701-SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT SDK on GitHub"
/>

La interfaz MIT del SDK T701-HT establece conjuntamente la posición objetivo, la velocidad objetivo, el par de avance, la ganancia de posición `Kp` y la ganancia de velocidad `Kd`. Esta página presenta el ejemplo de seguimiento sinusoidal de un solo motor, sus parámetros, la retroalimentación y la secuencia de apagado. Para compensación de gravedad de todo el brazo, impedancia articular y control cartesiano, consulta [T701 HT with Pinocchio](https://wiki.seeedstudio.com/es/rebot_t701_ht_pinocchio/).

<section className="section-card">

## Preparar el robot

Obtén el SDK e instala sus dependencias usando las [instrucciones de instalación de inicio rápido de T701 HT](https://wiki.seeedstudio.com/es/rebot_t701_ht_getting_started/#instalar-el-sdk). Completa el mapeo serie y las comprobaciones de retroalimentación de articulaciones y pinza, y luego verifica la posición cero del motor seleccionado.

- **Conexiones.** El brazo izquierdo usa CAN1; el brazo derecho usa CAN2. Establece `board_serial` en `T701-HT_robot_param/serial_binding.yaml` con el número de serie USB de la placa de comunicación.
- **ID de motores.** En cada brazo, ID1–ID7 son las siete articulaciones, e ID8 es la pinza.
- **Directorio de trabajo.** Ejecuta todos los comandos de esta página desde la raíz del SDK. En cada nueva terminal o sesión SSH, vuelve a ese directorio y activa el entorno.

```bash
conda activate t701-ht
```

:::warning[Comprueba el rango de movimiento antes de ejecutar]

El motor seleccionado comienza a moverse inmediatamente cuando ejecutas un comando de movimiento, sin otra selección de brazo ni confirmación. Asegura el hardware, retira las cargas y despeja el rango de movimiento y la trayectoria de retorno. Permanece junto al hardware y mantente alejado de los puntos de pellizco de articulaciones y pinza.

El objetivo original es **±π rad (±180°)**. El bucle de movimiento llama directamente a la interfaz de motor de bajo nivel, sin aplicar los límites de articulación de alto nivel ni la compensación de gravedad. Esta trayectoria puede exceder el rango permitido de una articulación o pinza ensamblada. En particular, el rango de alto nivel para la pinza ID8 es de **−0.2 a 2.2 rad**, por lo que no puede ejecutar la trayectoria original. Antes de ejecutar, ajusta la posición objetivo y la velocidad correspondiente para adaptarlas al mecanismo seleccionado, y verifica toda la trayectoria y la ruta de retorno.

:::

</section>

<section className="section-card">

## Seleccionar y ejecutar un motor

El ejemplo es `scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py`. Después de comprobar y ajustar la trayectoria anterior, elige un comando que coincida con tu cableado.

**Brazo izquierdo CAN1, motor ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 1 --motor-id 8 --arm left
```

**Brazo derecho CAN2, motor ID8:**

```bash
python scripts/motor_example/t701_ht_pos_vel_torque_kp_kd_control.py --can-port 2 --motor-id 8 --arm right
```

| Argumento | Valores | Propósito |
| --- | --- | --- |
| `--can-port` | 1–7 | Canal CAN lógico en la placa de comunicación. El cableado estándar usa 1 para el brazo izquierdo y 2 para el derecho. |
| `--motor-id` | 1–8 | Selecciona solo un motor con este ID en el canal especificado. |
| `--arm` | `left` / `right` | Selecciona los tipos de motor y la configuración de homing de ese lado. |

Los tres argumentos son obligatorios; no hay selección predeterminada de brazo o motor. `--arm` no selecciona el canal CAN ni refleja la trayectoria del brazo derecho. El ejemplo genera una configuración temporal de un solo motor a partir del YAML correspondiente, por lo que no necesitas editar la lista de motores de todo el brazo.

</section>

<section className="section-card">

## Parámetros MIT y trayectoria objetivo

Este fragmento proviene del bucle de movimiento; el ejemplo crea `motor` y `robot`. Establece el comando del motor seleccionado y luego envíalo.

```python
motor.pos_vel_tqe_kp_kd(pos, vel, 0.0, 2, 0.5)
robot.motor_send_cmd()
```

| Parámetro (en orden de llamada) | Significado | Configuración original |
| --- | --- | --- |
| `pos` | Posición objetivo, rad | `π × sin(2π × 0.1 × t)`, con amplitud de π rad. |
| `vel` | Velocidad objetivo, rad/s | `0.2 × π² × cos(2π × 0.1 × t)`, la derivada temporal de la posición objetivo. |
| `tqe` | Par de avance, Nm | `0.0`. Par de avance cero no significa par de salida del motor cero. |
| `kp` | Ganancia de posición | `2`. |
| `kd` | Ganancia de velocidad | `0.5`. |

La frecuencia original es **0.1 Hz**, el período es de **10 segundos**, y la velocidad objetivo máxima es de aproximadamente **1.974 rad/s**. Si cambias la posición a `offset + A × sin(2π × f × t)`, usa la velocidad correspondiente `A × 2π × f × cos(2π × f × t)`, y verifica que todo el rango desde `offset − A` hasta `offset + A` esté permitido.

`t` usa `time.time()`, por lo que la fase inicial depende del momento de lanzamiento; el objetivo no necesariamente comienza en cero. El comentario en el código fuente dice “1.0 rad amplitude”, pero la fórmula usa **π rad**.

El bucle duerme `0.001` segundos después de cada envío. La comunicación, el cálculo y la impresión se suman al tiempo de ciclo, por lo que este no es un bucle en tiempo real fijo de 1 kHz.

</section>

<section className="section-card">

## Leer la retroalimentación de estado

Al inicio, la terminal muestra el número de motores controlados. Luego imprime el estado del motor seleccionado cada 100 iteraciones del bucle.

| Campo | Significado |
| --- | --- |
| `position` | Posición actual del motor, impresa en rad y convertida a grados. |
| `velocity` | Velocidad actual del motor, rad/s. |
| `torque` | Par reportado del motor, Nm. |
| `mode` | Valor de modo devuelto por el SDK de bajo nivel. |
| `fault` | Código de fallo devuelto por el SDK de bajo nivel, impreso en hexadecimal. |

El ejemplo lee estos campos mediante `motor.get_current_motor_state()`. El intervalo de impresión depende del tiempo real del bucle. El ejemplo muestra los valores de modo y fallo sin decodificar los códigos de fallo.

</section>

<section className="section-card">

## Volver a cero y salir

1. El primer `Ctrl+C` sale del seguimiento sinusoidal y comienza un retorno suave del motor seleccionado a su posición cero guardada.
2. El homing usa la interfaz de posición, velocidad y par máximo `pos_vel_MAXtqe()`, con la configuración de homing para el lado seleccionado por `--arm`.
3. Después del homing, la lógica de apagado envía comandos de freno de amortiguamiento. Pulsa `Ctrl+C` de nuevo durante el homing para interrumpir el retorno e intentar el frenado. Una retroalimentación no válida o un fallo en el homing también hace que la lógica de apagado intente el frenado.

El primer `Ctrl+C` activa el movimiento de retorno. El frenado por amortiguamiento no es una sujeción de posición; sostiene el mecanismo durante el arranque y el apagado.

</section>

<section className="section-card">

## Usar control MIT para todo el brazo

El ejemplo de un solo motor usa un objeto `motor` de bajo nivel. El control de todo el brazo usa `Lib.t701_ht.T701HT`, con interfaces separadas para las articulaciones y la pinza.

| Interfaz | Parámetros y comportamiento de envío |
| --- | --- |
| `motor.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | Cinco parámetros escalares para un motor. Llama a `robot.motor_send_cmd()` después para enviar. |
| `arm.pos_vel_tqe_kp_kd(pos, vel, tqe, kp, kd)` | Cinco vectores articulares de longitud 7, excluyendo la pinza. Comprueba el rango configurado de posición objetivo de articulaciones antes de enviar; devuelve `False` para un objetivo fuera de rango. |
| `arm.gripper_control_MIT(pos, vel, tqe, kp, kd, send=True)` | Cinco parámetros escalares de la pinza. Comprueba el rango de posición objetivo de la pinza y envía por defecto. Con `send=False`, solo pone en cola el comando para enviarlo junto con el comando de articulaciones en el mismo ciclo. Devuelve `False` para un objetivo fuera de rango. |

Las comprobaciones de posición objetivo de la interfaz MIT de todo el brazo no sustituyen el diseño de trayectorias ni la limitación de par. Para avance de gravedad, impedancia articular o gestión automática del apagado, usa los ejemplos completos enlazados desde la [página de Pinocchio](https://wiki.seeedstudio.com/es/rebot_t701_ht_pinocchio/).

</section>

</div>
