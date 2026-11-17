---
title: Guía rápida de inicio de reBot Arm T701 HT
sidebar_label: Guía rápida
description: Desempaqueta y ensambla el reBot Arm T701 HT, instala el SDK en Ubuntu, comprueba la retroalimentación de las articulaciones, establece las posiciones cero y ejecuta las demostraciones.
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - Bimanual Robot
  - Python SDK
slug: /rebot_t701_ht_getting_started
translation:
  skip: [zh-CN]
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Guía rápida de inicio de reBot Arm T701 HT

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="reBot Arm T701 HT bimanual robot" />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="Star reBot Arm T701 on GitHub"
/>

## Introducción al proyecto

El reBot Arm T701 es una plataforma robótica bimanual de código abierto de Seeed Studio para IA Física, aprendizaje de robots y recopilación de datos en el mundo real. Se basa en el diseño de código abierto del reBot Arm B601 y ofrece a los desarrolladores una única plataforma para recopilar datos y estudiar tareas coordinadas de dos brazos.

- **Configuración bimanual.** Dos brazos de 7 GDL se montan en un solo torso. Motores con bus CAN accionan las articulaciones y cada brazo tiene su propia pinza.
- **Visión y computación en el borde.** La plataforma tiene puntos de montaje para cámaras de muñeca RealSense D405, una cámara de cabeza D435 y un módulo de cómputo NVIDIA Jetson Orin. **La versión Basic no incluye cámaras.**
- **Recursos de código abierto.** Los archivos CAD, la lista de materiales (BOM), las guías de ensamblaje y el software se publican por etapas de acuerdo con la hoja de ruta del proyecto.

## Descargo de responsabilidad de seguridad y aviso de riesgos

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm safety disclaimer and risk notice in Chinese" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm safety disclaimer and risk notice in English" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## Desembalar y ensamblar el robot

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Comprobar el contenido del paquete

Abre el maletín de transporte y comprueba las piezas del robot y los sujetadores con la lista de empaque.

:::note[The Basic version does not include cameras]
Consulta la lista de empaque para conocer el contenido de tu envío.
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Open carrying case showing both arms, the torso column, the covers, and the cameras in the pictured configuration" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Montar ambos brazos en la columna del torso

1. Saca la columna del torso y el brazo derecho. Alinea los cuatro orificios de montaje marcados en rojo en ambas fotos.
2. Fija el brazo derecho a la columna usando cuatro de los **tornillos M6** suministrados.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Orificios de montaje en la columna del torso</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="Four mounting holes circled in red on the side of the torso column" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Orificios correspondientes en la placa de montaje del brazo derecho</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="Four mounting holes circled in red on the right arm's metal mounting plate" loading="lazy" />
  </figure>
</div>

Una vez fijado el brazo derecho, comprueba cómo se apoya contra la columna desde arriba y desde el lateral.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Brazo derecho montado, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="Top view of the right arm mounting plate and upper screws" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Brazo derecho montado, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="Side view of the right arm mounting plate and lower screws" loading="lazy" />
  </figure>
</div>

Con la alimentación desconectada, enchufa el **arnés de cables XT30 2+2** que sale del lateral de la columna del torso en el conector del brazo derecho que se muestra a continuación. Monta y conecta el brazo izquierdo de la misma manera en el otro lado de la columna.

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Routing of the XT30 2+2 cable harness from the torso column to the arm connector" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Instalar las cubiertas de los hombros

1. Ajusta las mitades superior e inferior de cada cubierta verde alrededor del hombro.
2. Inserta los **tornillos M3 de longitud media-corta** suministrados en las posiciones marcadas en rojo. Usa cuatro tornillos por lado, ocho en total.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Mitades superior e inferior de una cubierta de hombro</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="Two green semicircular shoulder cover pieces" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Cubierta de hombro instalada</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="Red box marking the position of the assembled green shoulder cover" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posiciones de los tornillos de la cubierta de hombro, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="Two shoulder cover screws circled in red in the top view" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posición del tornillo de la cubierta de hombro, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="Shoulder cover screw circled in red in the side view" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Instalar la cubierta del torso

1. Una vez fijadas ambas cubiertas de hombro, coloca la cubierta del torso y guía los cables laterales a través de las aberturas correspondientes. Si tu robot tiene la cámara **RealSense D435i** que se muestra a continuación, alinéala con la abertura en la cubierta frontal. **La versión Basic no incluye cámaras.**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>Abertura de la cámara en la cubierta frontal (la versión Basic no incluye cámaras)</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="Red box marking where the D435i aligns with the opening in the front cover" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>Abertura lateral para el cable</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="Red circle marking the cable cutout on the side of the torso cover" loading="lazy" />
     </figure>
   </div>

2. Fija la cubierta del torso insertando los cuatro **tornillos M3 más largos suministrados** en los orificios marcados en rojo en la parte posterior.

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="Four screw positions circled in red on the rear torso cover" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## Conectar el robot

:::warning
Desconecta la alimentación antes de cablear. Antes de encender el robot, asegúrate de que esté firmemente montado y mantén libre todo el rango de movimiento de ambos brazos.
:::

1. Conecta la fuente de alimentación como se muestra a continuación.
2. Pulsa el botón de encendido redondo para encender el robot.
3. Conecta el ordenador al puerto USB-C de la placa principal con un cable de datos USB.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Conexión de alimentación</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Power connector and cable at the base of the T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Botón de encendido redondo y puerto USB-C de la placa principal</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Round power button next to the mainboard and a USB data cable plugged into the USB-C port" loading="lazy" />
  </figure>
</div>

## Calibrar y ejecutar el robot con el SDK T701-HT

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Instalar el SDK

:::info[Plataformas compatibles con la biblioteca de motor]

El SDK incluye las siguientes ruedas `hightorque_robot` precompiladas en `motor_whl/`.

| Plataforma | Versión de la biblioteca de motor | Versiones de CPython |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

El ejemplo de instalación siguiente usa **Ubuntu 22.04 (x86_64) y Python 3.10**. Para otra combinación de la tabla, elige el archivo `.whl` que coincida con tu arquitectura y versión de Python, y luego ejecuta la comprobación de entorno que aparece a continuación.

:::

Clona el [repositorio del SDK T701-HT](https://github.com/Seeed-Projects/reBot-Arm-T701-SDK) y entra en el directorio raíz del SDK.

```bash
git clone https://github.com/Seeed-Projects/reBot-Arm-T701-SDK.git
cd reBot-Arm-T701-SDK
```

Ejecuta los siguientes comandos del SDK desde este directorio, salvo que se indique lo contrario.

Si no tienes Conda, instala Miniforge.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Sigue las indicaciones para inicializar Conda. Abre una nueva terminal y vuelve al directorio raíz del SDK. Crea el entorno y luego instala el SDK y sus dependencias.

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

Ejecuta el siguiente comando para comprobar que Python puede importar las dependencias y cargar el modelo URDF. Puedes ejecutar esta comprobación con el robot desconectado.

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Comprobar la conexión serie

El brazo izquierdo se conecta a CAN1 y el brazo derecho a CAN2. Establece `board_serial` en `T701-HT_robot_param/serial_binding.yaml` del SDK con el número de serie USB de tu placa de comunicación. El SDK utiliza la identidad USB de la placa para encontrar los dispositivos serie actuales al iniciar.

Ejecuta los siguientes comandos para comprobar la asignación de ambos brazos sin abrir los puertos serie. Para comprobar un solo brazo, pasa solo su archivo YAML.

```bash
ls -l /dev/serial/by-id/
python scripts/t701_ht_can_serial_adapter.py T701-HT_robot_param/T701-HT_left.yaml T701-HT_robot_param/T701-HT_right.yaml
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Leer el estado de las articulaciones y la pinza

Ejecuta el script e introduce `1` para el brazo izquierdo, `2` para el brazo derecho o `3` para ambos. Confirma que las siete articulaciones y la pinza de cada brazo seleccionado informan retroalimentación. Pulsa `Ctrl+C` para salir.

```bash
python scripts/t701_ht_read_state.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Establecer las posiciones cero

<div align="center">
  <img width={520} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-zero-pose.png" alt="T701-HT zero pose" loading="lazy" />
</div>

Inicia el script y selecciona el brazo. Mueve las articulaciones y la pinza a sus posiciones cero previstas y luego selecciona `3` en el menú de operación para reemplazar las posiciones cero almacenadas del brazo seleccionado con la pose actual. Selecciona `4` para moverte a la posición cero guardada o `0` para salir.

```bash
python scripts/t701_ht_set_zero.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">

### Ejecutar las demostraciones

:::warning[Antes de ejecutar las demostraciones]
Verifica las posiciones cero de las articulaciones, retira cualquier carga y despeja el rango de movimiento de los brazos. Empieza con un solo brazo en la primera ejecución. Sujeta el brazo al iniciar y detener la demostración de compensación de gravedad.
:::

Entra en el directorio `scripts`. Después de iniciar una demo, introduce `1` para el brazo izquierdo, `2` para el brazo derecho o `3` para ambos.

```bash
cd scripts
```

#### Compensación de gravedad

La demo aplica `0.8 × G(q)` como par de avance MIT para que el brazo sea más fácil de mover a mano. Las ganancias `Kp` y `Kd` de las articulaciones y el par de la pinza son cero.

```bash
python t701_ht_gravity_compensation.py
```

#### Impedancia articular

:::warning[Antes de iniciar una demo de impedancia articular]
**Asegúrate de que el área alrededor del robot y dentro del rango de movimiento de los brazos esté libre de personas y objetos frágiles antes de iniciar cualquiera de las demostraciones.** El brazo seleccionado se mueve hacia una pose fija tan pronto como comienza la demo.
:::

El objetivo del brazo izquierdo es aproximadamente `[-0.2, -0.2, 0.2, -0.4, 0.5, 0.2, 1.4708]` rad. El objetivo del brazo derecho invierte el signo de cada ángulo articular.

**Impedancia articular con avance de gravedad**

```bash
python t701_ht_joint_impedance_with_gravity.py
```

**Impedancia articular con avance de gravedad y compensación de fricción**

```bash
python t701_ht_joint_impedance_with_gravity_friction.py
```

Las tres demostraciones aplican los límites de par articular configurados. Pulsa `Ctrl+C` para detener la compensación de gravedad o para devolver los brazos a cero antes de detener una demo de impedancia articular. Durante el retorno, pulsa `Ctrl+C` de nuevo para detener los brazos.

Consulta [T701 HT con Pinocchio](./reBot_Arm_T701_HT_pinocchio.md) para comprobaciones de cinemática directa e inversa, trayectorias cartesianas y ejemplos de control por teclado.

  </div>
</div>

</div>

## Solución de problemas

- **No se encontró ningún puerto serie.** Confirma que el robot está encendido y que el cable de datos USB está conectado al puerto USB-C de la placa base, y luego ejecuta de nuevo `ls -l /dev/serial/by-id/`.
- **Falta la interfaz USB coincidente.** Comprueba que `board_serial` coincide con la placa conectada y que el brazo izquierdo usa CAN1 y el brazo derecho usa CAN2.
- **Permiso denegado.** En Ubuntu, comprueba que tu usuario tenga acceso de lectura y escritura al dispositivo serie a través del grupo `dialout`.
