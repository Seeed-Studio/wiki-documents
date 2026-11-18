---
title: reBot Arm T701 HT con Pinocchio
sidebar_label: Pinocchio
description: Verifica la cinemática directa e inversa y ejecuta ejemplos de compensación de gravedad, trayectoria cartesiana y control por teclado en el reBot Arm T701 HT.
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - Kinematics
  - Gravity Compensation
slug: /rebot_t701_ht_pinocchio
translation:
  skip: [zh-CN]
---

import '/src/css/rebot-wiki-style.css';

# reBot Arm T701 HT con Pinocchio

<div className="rebot-page">

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

El SDK del T701-HT usa Pinocchio para cargar el modelo URDF y calcular las poses del efector final y los pares articulares debidos a la gravedad. Usa los ejemplos de cinemática directa (FK) y cinemática inversa (IK) para comprobar la retroalimentación articular del robot antes de ejecutar los ejemplos de compensación de gravedad, trayectoria cartesiana y control por teclado.

<section className="section-card">

## Preparar el robot

Instala el SDK y sus dependencias usando las [instrucciones de instalación de inicio rápido del T701 HT](/es/rebot_t701_ht_getting_started/#instalar-el-sdk). Luego sigue los pasos restantes del Inicio Rápido para comprobar el mapeo del puerto serie, leer la retroalimentación de las articulaciones y del efector final, y verificar las posiciones cero.

:::warning[Antes de ejecutar los ejemplos en el robot]

- Asegúrate de que los brazos estén firmemente montados y retira cualquier carga. Usa un solo brazo en la primera ejecución.
- Los brazos pueden empezar a moverse tan pronto como los selecciones en un ejemplo de movimiento. Despeja todo el rango de movimiento, incluido el espacio por encima y la trayectoria de regreso a cero. Permanece junto al robot durante toda la ejecución y mantente alejado de los puntos de pellizco en las articulaciones y los efectores finales.
- Sujeta los brazos antes de iniciar o detener un ejemplo de compensación de gravedad para que no caigan cuando se retire el par de compensación.
- En los ejemplos que regresan automáticamente a cero, la primera pulsación de `Ctrl+C` inicia el retorno. Pulsa `Ctrl+C` de nuevo durante el retorno para interrumpir el movimiento y enviar un comando de parada.

:::

Cada vez que abras una nueva terminal o sesión SSH, ve al directorio raíz del SDK, activa el entorno Conda `t701-ht` que creaste en el Inicio Rápido y entra en el directorio `scripts`.

```bash
conda activate t701-ht
cd scripts
```

Cuando se te solicite después de lanzar un ejemplo, introduce `1` para el brazo izquierdo, `2` para el brazo derecho o `3` para ambos brazos.

</section>

<section className="section-card">

## Verificar la cinemática directa e inversa

La cinemática directa calcula la pose del efector final a partir de los ángulos articulares actuales. La comprobación de cinemática inversa resuelve los ángulos articulares que producen esa pose y los compara con las lecturas actuales. Ambos ejemplos usan solo la retroalimentación articular para sus cálculos y envían un comando de parada de motor cuando sales con `Ctrl+C`.

| Ejemplo | Comando | Salida esperada |
| --- | --- | --- |
| Cinemática directa (FK) en vivo | `python t701_ht_forward_kinematics_test.py` | Imprime la posición del efector final en metros y el balanceo, cabeceo y guiñada (RPY) en grados aproximadamente una vez por segundo. |
| Comprobación de FK a IK en la pose actual | `python t701_ht_inverse_kinematics_test.py` | Imprime los ángulos articulares actuales y la posición del efector final. Si la IK tiene éxito, también imprime el error máximo de ángulo articular en radianes. |

</section>

<section className="section-card">

## Compensación de gravedad e impedancia articular

`G(q)` es el par de gravedad que el modelo calcula a partir de los ángulos articulares `q`. La compensación de gravedad facilita mover los brazos a mano. Los ejemplos de impedancia articular mueven activamente los brazos a una postura predefinida y la mantienen.

| Ejemplo | Comando | Comportamiento esperado |
| --- | --- | --- |
| Compensación de gravedad | `python t701_ht_gravity_compensation.py` | Aplica `0.8 × G(q)` sujeto a los límites de par e imprime el par de compensación. |
| Compensación de gravedad con salida de FK | `python t701_ht_gravity_compensation_with_fk.py` | Aplica `G(q)` sujeto a los límites de par e imprime los ángulos articulares, el par de compensación y la pose del efector final. |
| Impedancia articular con avance de gravedad | `python t701_ht_joint_impedance_with_gravity.py` | Se mueve y mantiene una postura articular predefinida, añade compensación de gravedad e imprime el par total. |
| Impedancia articular con avance de gravedad y fricción | `python t701_ht_joint_impedance_with_gravity_friction.py` | Se mueve y mantiene una postura articular predefinida, añade compensación de gravedad y fricción, e imprime el par total. |

Cuando pulses `Ctrl+C`, ambos ejemplos de compensación de gravedad detienen los motores directamente. Ambos ejemplos de impedancia articular regresan a cero antes de detenerse.

</section>

<section className="section-card">

## Control cartesiano

| Ejemplo | Comando | Secuencia de movimiento |
| --- | --- | --- |
| Mover a un objetivo usando IK | `python t701_ht_inv_posvel_control.py` | Primero devuelve las articulaciones a cero. Si la solución de IK para la pose objetivo supera la comprobación de error, el brazo se mueve al objetivo usando `moveJ`. |
| Cinemática inversa por programación cuadrática (QP) | `python t701_ht_qp_ik.py` | Se mueve a la pose VR inicial, luego eleva el brazo y traza un círculo por encima. |
| Traslación MoveL | `python t701_ht_moveL_pos_control.py` | Mantiene la orientación objetivo del efector final mientras sigue secuencialmente trayectorias rectilíneas, diagonales y cuadradas. |
| Rotación MoveL | `python t701_ht_moveL_rotate_control.py` | Mantiene la posición objetivo del efector final mientras rota alrededor de los ejes locales del efector final y realiza un movimiento cónico. |

Ambos ejemplos MoveL comienzan moviéndose a la pose VR inicial. Cada trayectoria se ejecuta durante 5 segundos, excluyendo el posicionamiento inicial y el retorno a cero. Los cuatro ejemplos de esta sección regresan a cero y se detienen al final.

</section>

<section className="section-card">

## Control por teclado

Ejecuta estos ejemplos en una terminal local interactiva o en una sesión SSH. Después de seleccionar los brazos, se mueven automáticamente a la pose VR inicial antes de aceptar la entrada por teclado.

| Ejemplo | Comando | Comportamiento esperado |
| --- | --- | --- |
| Pose del efector final | `python t701_ht_keyboard_cartesian_pos_control.py` | Cada pulsación de tecla cambia la pose objetivo del efector final en un paso. Si la IK falla, el ejemplo conserva el objetivo articular anterior. |
| Velocidad del efector final | `python t701_ht_keyboard_cartesian_vel_control.py` | Mantén pulsada una tecla para trasladar o rotar continuamente el efector final. Suéltala para reducir gradualmente la velocidad comandada hasta cero. |
| Velocidad del efector final con predicción de colisión | `python t701_ht_keyboard_cartesian_vel_collision_control.py` | Usa las teclas para controlar la velocidad del efector final. Si el ejemplo predice una colisión o una violación de límite articular, ordena velocidad cero y muestra un mensaje. |
| Impedancia cartesiana | `python t701_ht_keyboard_cartesian_impedance_control.py` | Usa las teclas para ajustar la pose objetivo del efector final. El brazo la sigue de forma complaciente usando control de par articular con compensación de gravedad. |
| Bloqueo de postura en el espacio nulo | `python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py` | Sigue la pose objetivo del efector final mientras mantiene la postura articular lo más cercana posible a la postura de referencia. |

- **Trasladar.** Usa `W` / `S`, `A` / `D` y `Q` / `E` para moverte a lo largo de los ejes X, Y y Z, respectivamente.
- **Rotar.** Usa `1` / `2`, `3` / `4` y `5` / `6` para rotar alrededor de los ejes X, Y y Z, respectivamente.
- **Restablecer la postura de referencia.** En el ejemplo de bloqueo de postura en el espacio nulo, pulsa `R` para establecer la postura articular actual como referencia.
- **Salir.** Pulsa `Esc` o `Ctrl+C` para volver a cero y detenerte.

:::warning[Alcance de la predicción de colisión]

Una vez que los brazos alcanzan la pose VR inicial, el ejemplo de velocidad del efector final con predicción de colisión comprueba colisiones y violaciones de límites articulares durante los siguientes 0.20 segundos. Las comprobaciones de colisión usan las mallas STL en `T701-HT_URDF/meshes/` e incluyen colisiones entre los brazos en modo de doble brazo. Deja espacio libre durante el arranque y el retorno a cero, y permite espacio adicional para los efectores finales y la distancia real de parada.

:::

</section>

</div>
