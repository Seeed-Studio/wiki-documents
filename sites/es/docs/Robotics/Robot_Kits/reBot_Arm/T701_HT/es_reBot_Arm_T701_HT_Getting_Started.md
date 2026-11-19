---
title: Guía rápida de inicio de reBot Arm T701 HT
sidebar_label: Quick Start
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
last_update:
  date: 11/19/2026
  author: liujunjie
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

- **Configuración bimanual.** Dos brazos de 7 GDL se montan en un solo torso. Motores con bus CAN accionan las articulaciones y cada brazo tiene su propia garra.
- **Visión y computación en el borde.** La plataforma tiene puntos de montaje para cámaras de muñeca RealSense D405, una cámara de cabeza D435 y un módulo de cómputo NVIDIA Jetson Orin. **La versión Basic no incluye cámaras.**
- **Recursos de código abierto.** Los archivos CAD, la lista de materiales (BOM), las guías de ensamblaje y el software se publican por etapas según la hoja de ruta del proyecto.

## Descargo de responsabilidad de seguridad y aviso de riesgos

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="Descargo de responsabilidad de seguridad y aviso de riesgos del reBot Arm en chino" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="Descargo de responsabilidad de seguridad y aviso de riesgos del reBot Arm en inglés" />
  </figure>
</div>

{/*
## About the Power Supply

- **TODO** Add the power supply model, rated output, connector specifications, and availability.
*/}

## Desempaqueta y ensambla el robot

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Comprueba el contenido del paquete

Abre el maletín de transporte y compara las piezas del robot y los sujetadores con la lista de empaque.

:::note[La versión Basic no incluye cámaras]
Consulta la lista de empaque para conocer el contenido de tu envío.
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Maletín de transporte abierto que muestra ambos brazos, la columna del torso, las cubiertas y las cámaras en la configuración mostrada" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### Monta ambos brazos en la columna del torso

1. Saca la columna del torso y el brazo derecho. Alinea los cuatro orificios de montaje marcados en rojo en ambas fotos.
2. Fija el brazo derecho a la columna usando cuatro de los **tornillos M6** suministrados.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Orificios de montaje en la columna del torso</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="Cuatro orificios de montaje marcados en rojo en el lateral de la columna del torso" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Orificios correspondientes en la placa de montaje del brazo derecho</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="Cuatro orificios de montaje marcados en rojo en la placa metálica de montaje del brazo derecho" loading="lazy" />
  </figure>
</div>

Una vez fijado el brazo derecho, comprueba cómo se apoya contra la columna desde arriba y desde el lateral.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Brazo derecho montado, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="Vista superior de la placa de montaje del brazo derecho y los tornillos superiores" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Brazo derecho montado, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="Vista lateral de la placa de montaje del brazo derecho y los tornillos inferiores" loading="lazy" />
  </figure>
</div>

Con la alimentación desconectada, enchufa el **arnés de cables XT30 2+2** que sale del lateral de la columna del torso en el conector del brazo derecho que se muestra a continuación. Monta y conecta el brazo izquierdo de la misma manera en el otro lado de la columna.

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Enrutamiento del arnés de cables XT30 2+2 desde la columna del torso hasta el conector del brazo" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### Instala las cubiertas de los hombros

1. Ajusta las mitades superior e inferior de cada cubierta verde alrededor del hombro.
2. Inserta los **tornillos M3 medianos-cortos** suministrados en las posiciones marcadas en rojo. Usa cuatro tornillos por lado, ocho en total.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Mitades superior e inferior de una cubierta de hombro</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="Dos piezas semicirculares verdes de la cubierta del hombro" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Cubierta de hombro instalada</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="Recuadro rojo que marca la posición de la cubierta de hombro verde ensamblada" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posiciones de los tornillos de la cubierta de hombro, vista superior</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="Dos tornillos de la cubierta de hombro marcados en rojo en la vista superior" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Posición del tornillo de la cubierta de hombro, vista lateral</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="Tornillo de la cubierta de hombro marcado en rojo en la vista lateral" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### Instala la cubierta del torso

1. Una vez fijadas ambas cubiertas de hombro, coloca la cubierta del torso y enruta los cables laterales a través de las aberturas correspondientes. Si tu robot tiene la cámara **RealSense D435i** que se muestra a continuación, alinéala con la abertura en la cubierta frontal. **La versión Basic no incluye cámaras.**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>Abertura para la cámara en la cubierta frontal (la versión Basic no incluye cámaras)</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="Recuadro rojo que marca dónde se alinea la D435i con la abertura en la cubierta frontal" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>Abertura lateral para el cable</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="Círculo rojo que marca la abertura para el cable en el lateral de la cubierta del torso" loading="lazy" />
     </figure>
   </div>

2. Fija la cubierta del torso insertando los cuatro **tornillos M3 más largos suministrados** en los orificios marcados en rojo en la parte posterior.

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="Cuatro posiciones de tornillos marcadas en rojo en la cubierta trasera del torso" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** Add instructions for securing the base and installing the grippers separately. */}

## Conecta el robot

:::warning
Desconecta la alimentación antes de cablear. Antes de encender el robot, asegúrate de que esté firmemente montado y mantén libre todo el rango de movimiento de ambos brazos.
:::

1. Conecta la fuente de alimentación como se muestra a continuación.
2. Pulsa el botón de encendido redondo para encender el robot.
3. Conecta el ordenador al puerto USB-C de la placa principal con un cable de datos USB.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>Conexión de alimentación</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Conector de alimentación y cable en la base del T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Botón de encendido redondo y puerto USB-C de la placa principal</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Botón de encendido redondo junto a la placa principal y un cable de datos USB conectado al puerto USB-C" loading="lazy" />
  </figure>
</div>

## Calibra y ejecuta el robot con el SDK T701-HT

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### Instalar el SDK

:::info[Plataformas compatibles para la biblioteca del motor]

El SDK incluye las siguientes ruedas `hightorque_robot` precompiladas en `motor_whl/`.

| Plataforma | Versión de la biblioteca del motor | Versiones de CPython |
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

El brazo izquierdo se conecta a CAN1 y el brazo derecho a CAN2. Establece `board_serial` en `T701-HT_robot_param/serial_binding.yaml` del SDK con el número de serie USB de tu placa de comunicación. El SDK utiliza la identidad USB de la placa para encontrar los dispositivos serie actuales al inicio.

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

Inicia el script y selecciona el brazo. Mueve las articulaciones y la pinza a sus posiciones cero previstas y luego selecciona `3` en el menú de operaciones para reemplazar las posiciones cero almacenadas del brazo seleccionado con la pose actual. Selecciona `4` para moverte a la posición cero guardada o `0` para salir.

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

Entra en el directorio `scripts`. Después de iniciar una demostración, introduce `1` para el brazo izquierdo, `2` para el brazo derecho o `3` para ambos.

```bash
cd scripts
```

#### Compensación de gravedad

La demostración aplica `0.8 × G(q)` como par de avance MIT para que el brazo sea más fácil de mover a mano. Las ganancias `Kp` y `Kd` de las articulaciones y el par de la pinza son cero.

```bash
python t701_ht_gravity_compensation.py
```

La demostración aplica los límites de par de articulación configurados. Pulsa `Ctrl+C` para detener los motores.

Para control de cinco parámetros de un solo motor, retroalimentación de estado y apagado de retorno a cero, consulta el [MIT Control SDK](https://wiki.seeedstudio.com/es/rebot_t701_ht_control_mit/).

Consulta [T701 HT con Pinocchio](https://wiki.seeedstudio.com/es/rebot_t701_ht_pinocchio/) para comprobaciones de cinemática directa e inversa, trayectorias cartesianas y ejemplos de control por teclado.

  </div>
</div>

</div>

## Solución de problemas

- **No se encontró ningún puerto serie.** Confirma que el robot está encendido y que el cable de datos USB está conectado al puerto USB-C de la placa base, y luego ejecuta de nuevo `ls -l /dev/serial/by-id/`.
- **Falta la interfaz USB coincidente.** Comprueba que `board_serial` coincida con la placa conectada y que el brazo izquierdo use CAN1 y el brazo derecho use CAN2.
- **Permiso denegado.** En Ubuntu, comprueba que tu usuario tenga acceso de lectura y escritura al dispositivo serie a través del grupo `dialout`.
