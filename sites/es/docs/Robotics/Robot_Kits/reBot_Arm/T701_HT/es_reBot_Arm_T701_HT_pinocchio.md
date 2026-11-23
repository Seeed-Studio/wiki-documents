---
title: reBot Arm T701 HT con Pinocchio
sidebar_label: Pinocchio
description: Verifica la cinemática directa e inversa y ejecuta los ejemplos de compensación de gravedad, trayectoria cartesiana y control por teclado en el reBot Arm T701 HT.
keywords:
  - reBot
  - T701 HT
  - Pinocchio
  - Kinematics
  - Gravity Compensation
slug: /rebot_t701_ht_pinocchio
translation:
  skip: [zh-CN]
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm T701 HT con Pinocchio

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

El SDK T701-HT usa Pinocchio para cargar el modelo URDF y calcular las poses del efector final y los pares articulares debidos a la gravedad. Usa los ejemplos de cinemática directa (FK) e inversa (IK) para comprobar la realimentación articular del robot antes de ejecutar los ejemplos de compensación de gravedad, trayectoria cartesiana y control por teclado.

<section className="section-card">

## Preparar el robot

Instala el SDK y sus dependencias usando las [instrucciones de instalación de inicio rápido de T701 HT](https://wiki.seeedstudio.com/es/rebot_t701_ht_getting_started/#instalar-el-sdk). Luego sigue los pasos restantes del Inicio Rápido para comprobar el mapeo del puerto serie, leer la realimentación de las articulaciones y del gripper, y verificar las posiciones cero.

:::warning[Antes de ejecutar los ejemplos en el robot]

- Asegúrate de que los brazos estén firmemente montados y retira cualquier carga. Usa un solo brazo en la primera ejecución.
- Los brazos pueden empezar a moverse tan pronto como los selecciones en un ejemplo de movimiento. Despeja todo el rango de movimiento, incluido el espacio por encima y la trayectoria de regreso a cero. Permanece junto al robot durante toda la ejecución y mantente alejado de los puntos de pellizco en las articulaciones y los grippers.

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

La cinemática directa calcula la pose del efector final a partir de los ángulos articulares actuales. La comprobación de cinemática inversa resuelve los ángulos articulares que producen esa pose y los compara con las lecturas actuales. Ambos ejemplos usan solo la realimentación articular para sus cálculos y envían un comando de parada de motor cuando sales con `Ctrl+C`.

| Ejemplo | Comando | Salida esperada |
| --- | --- | --- |
| Cinemática directa (FK) en vivo | `python t701_ht_forward_kinematics_test.py` | Imprime la posición del efector final en metros y el balanceo, cabeceo y guiñada (RPY) en grados aproximadamente una vez por segundo. |
| Comprobación de FK a IK en la pose actual | `python t701_ht_inverse_kinematics_test.py` | Imprime los ángulos articulares actuales y la posición del efector final. Si la IK tiene éxito, también imprime el error máximo de ángulo articular en radianes. |

</section>

<section className="section-card">

## Compensación de gravedad

`G(q)` es el par de gravedad que el modelo calcula a partir de los ángulos articulares `q`. La compensación de gravedad facilita mover los brazos a mano.

| Ejemplo | Comando | Comportamiento esperado |
| --- | --- | --- |
| Compensación de gravedad | `python t701_ht_gravity_compensation.py` | Aplica `0.8 × G(q)` sujeto a los límites de par e imprime el par de compensación. |
| Compensación de gravedad con salida de FK | `python t701_ht_gravity_compensation_with_fk.py` | Aplica `G(q)` sujeto a los límites de par e imprime los ángulos articulares, el par de compensación y la pose del efector final. |

Cuando presionas `Ctrl+C`, ambos ejemplos de compensación de gravedad detienen los motores directamente.

</section>

<section className="section-card">

## Control cartesiano

### Mover a un objetivo usando IK

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Primero devuelve las articulaciones a cero. Si la solución de IK para la pose objetivo supera la comprobación de error, el brazo se mueve al objetivo usando `moveJ`.

```bash
python t701_ht_inv_posvel_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demostración de mover a un objetivo usando IK (MOVEJ)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-ik-movej.gif)

</div>
</div>
</div>

### Cinemática inversa por programación cuadrática (QP)

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Se mueve a la pose VR inicial, luego eleva el brazo y traza un círculo por encima.

```bash
python t701_ht_qp_ik.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demostración de círculo por encima con cinemática inversa QP](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-qp-ik-circle.gif)

</div>
</div>
</div>

### Traslación MoveL

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Mantiene la orientación objetivo del efector final mientras sigue secuencialmente trayectorias rectilíneas, diagonales y cuadradas.

```bash
python t701_ht_moveL_pos_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demostración de traslación MoveL](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-movel-translation.gif)

</div>
</div>
</div>

### Rotación MoveL

Mantiene la posición objetivo del efector final mientras rota alrededor de los ejes locales del efector final y realiza un movimiento cónico.

```bash
python t701_ht_moveL_rotate_control.py
```

Ambos ejemplos de MoveL comienzan moviéndose a la pose VR inicial. Cada trayectoria se ejecuta durante 5 segundos, excluyendo el posicionamiento inicial y el regreso a cero. Los cuatro ejemplos de esta sección regresan a cero y se detienen al final.

</section>

<section className="section-card">

## Control por teclado

- **Trasladar.** Usa `W` / `S`, `A` / `D` y `Q` / `E` para moverte a lo largo de los ejes X, Y y Z, respectivamente.
- **Rotar.** Usa `1` / `2`, `3` / `4` y `5` / `6` para rotar alrededor de los ejes X, Y y Z, respectivamente.
- **Restablecer la postura de referencia.** En el ejemplo de bloqueo de postura en el espacio nulo, presiona `R` para establecer la postura articular actual como referencia.
- **Salir.** Presiona `Esc` o `Ctrl+C` para regresar a cero y detenerte.

<div className="row row--align-top">
<div className="col col--8" style={{minWidth: 0}}>

Ejecuta estos ejemplos en una terminal local interactiva o en una sesión SSH. Después de que selecciones los brazos, se mueven automáticamente a la pose VR inicial antes de aceptar la entrada por teclado.

**Pose del efector final**

Cada pulsación de tecla cambia la pose objetivo del efector final en un paso. Si la IK falla, el ejemplo mantiene el objetivo articular anterior.

```bash
python t701_ht_keyboard_cartesian_pos_control.py
```

**Velocidad del efector final**

Mantén presionada una tecla para trasladar o rotar continuamente el efector final. Suéltala para reducir gradualmente la velocidad comandada hasta cero.

```bash
python t701_ht_keyboard_cartesian_vel_control.py
```

**Velocidad del efector final con predicción de colisiones**

Usa las teclas para controlar la velocidad del efector final. Si el ejemplo predice una colisión o una violación de límites articulares, ordena velocidad cero y muestra un mensaje.

```bash
python t701_ht_keyboard_cartesian_vel_collision_control.py
```

**Bloqueo de postura en el espacio nulo**

Sigue la pose objetivo del efector final mientras mantiene la postura articular lo más cercana posible a la postura de referencia.

```bash
python t701_ht_keyboard_cartesian_pd_nullspace_lock_control.py
```

</div>
<div className="col col--4">
<div className="image-frame" style={{marginTop: 0}}>

![Demostraciones de control por teclado](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/T701_HT/pinocchio/rebot-t701-ht-keyboard-control.gif)

</div>
</div>
</div>

:::warning[Alcance de la predicción de colisiones]

Una vez que los brazos alcanzan la pose VR inicial, el ejemplo de velocidad del efector final con predicción de colisiones comprueba colisiones y violaciones de límites articulares durante los siguientes 0,20 segundos. Las comprobaciones de colisión usan las mallas STL en `T701-HT_URDF/meshes/` e incluyen colisiones entre los brazos en modo de doble brazo. Deja holgura durante el arranque y el regreso a cero, y permite espacio adicional para los grippers y la distancia real de parada.

:::

</section>

</div>
