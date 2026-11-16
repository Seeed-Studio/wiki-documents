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

## Desempaqueta y ensambla el robot

### Comprueba el contenido del paquete

Abre el estuche de transporte y compara las piezas del robot y los elementos de fijación con la lista de empaque.

:::note[The Basic version does not include cameras]
Consulta la lista de empaque para conocer el contenido de tu envío.
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="Open carrying case showing both arms, the torso column, the covers, and the cameras in the pictured configuration" loading="lazy" />
</div>

### Monta ambos brazos en la columna del torso

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

Con la alimentación desconectada, enchufa el **arnés de cable XT30 2+2** que sale del lateral de la columna del torso en el conector del brazo derecho que se muestra a continuación. Monta y conecta el brazo izquierdo de la misma manera en el otro lado de la columna.

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="Routing of the XT30 2+2 cable harness from the torso column to the arm connector" loading="lazy" />
</div>

### Instala las cubiertas de los hombros

1. Ajusta las mitades superior e inferior de cada cubierta verde alrededor del hombro.
2. Inserta los **tornillos M3 medianos-cortos** suministrados en las posiciones marcadas en rojo. Usa cuatro tornillos por lado, ocho en total.

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

### Instala la cubierta del torso

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
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="Power connector and cable at the base of the T701 HT" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>Botón de encendido redondo y puerto USB-C de la placa principal</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="Round power button next to the mainboard and a USB data cable plugged into the USB-C port" loading="lazy" />
  </figure>
</div>

## Calibra y ejecuta el robot con el SDK T701-HT

### Instala el SDK

:::info[Supported Platforms for the Motor Library]

The SDK includes the following prebuilt `hightorque_robot` wheels in `motor_whl/`.

| Platform | Motor library version | CPython versions |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9, 3.10, 3.11, 3.12 |
| Linux aarch64 (ARM64) | 1.0.0 | 3.9, 3.10, 3.11, 3.12 |

The installation example below uses **Ubuntu 22.04 (x86_64) and Python 3.10**. For another combination in the table, choose the `.whl` file that matches your architecture and Python version, then run the environment check below.

:::

Abre una terminal en el directorio raíz del SDK, que contiene `motor_whl/`, `requirements.txt` y `scripts/`. Ejecuta los comandos del SDK que aparecen a continuación desde este directorio.

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

Ejecuta el siguiente comando para comprobar que Python puede importar las dependencias y cargar el modelo URDF. Puedes realizar esta comprobación con el robot desconectado.

```bash
python -I -c "import hightorque_robot, numpy, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT environment check passed')"
```

### Comprobar la conexión serie

1. **Lista los puertos serie.** Conecta el robot y luego ejecuta el siguiente comando en una terminal.

   ```bash
   ls -l /dev/ttyACM*
   ```

2. **Comprueba los puertos serie de ambos brazos.** Ejecuta el script de comprobación.

   ```bash
   python scripts/t701_ht_read_state.py --arm both --check
   ```

   El script comprueba lo siguiente.

   - Orden de enumeración de los puertos serie
   - Identificadores USB de la placa de comunicación
   - Permisos de lectura y escritura del puerto serie

:::tip[Comprobar un solo brazo]

Sustituye `--arm both` por el argumento del brazo que quieras comprobar.

| Brazo | Argumento | Puerto serie predeterminado | ID serie del SDK |
| --- | --- | --- | --- |
| Brazo izquierdo | `--arm left` | `/dev/ttyACM0` | `serial_id=1` |
| Brazo derecho | `--arm right` | `/dev/ttyACM1` | `serial_id=2` |

:::

**Errores de permisos del puerto serie**

Si el script informa de un error de permisos, el siguiente comando de la guía del SDK concede temporalmente a todos los usuarios locales acceso de lectura y escritura a los puertos serie especificados. Al comprobar un solo brazo, especifica solo su puerto.

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1
```

Vuelve a ejecutar la comprobación del puerto serie después de conceder el acceso. Al reconectar el dispositivo o reiniciar el sistema, estos permisos se restablecen.

### Leer el estado de las articulaciones y del efector de agarre

Después de que la comprobación serie se complete correctamente, lee una muestra de ambos brazos. Verifica que las siete articulaciones y el efector de agarre de cada brazo devuelven retroalimentación. El script informa de la posición de la articulación (rad), la velocidad (rad/s) y el par (N·m), y de la posición (rad) y velocidad (rad/s) del efector de agarre.

```bash
python scripts/t701_ht_read_state.py --arm both --once
```

Para lecturas continuas, ejecuta el siguiente comando e introduce `1` para el brazo izquierdo, `2` para el brazo derecho o `3` para ambos. Pulsa `Ctrl+C` para salir.

```bash
python scripts/t701_ht_read_state.py
```

### Establecer las posiciones cero

- **TODO** Añadir las posiciones cero estándar y los diagramas de calibración para las articulaciones y los efectores de agarre de ambos brazos. Aclarar si los robots calibrados de fábrica necesitan ser recalibrados.

Después de confirmar las posiciones cero estándar, mueve las articulaciones y el efector de agarre del brazo seleccionado a esas posiciones. El siguiente comando selecciona el brazo izquierdo. Sustituye `left` por `right` o `both` para seleccionar el brazo derecho o ambos brazos. Introducir `yes` escribe las posiciones actuales como las nuevas posiciones cero y sobrescribe los valores almacenados.

```bash
python scripts/t701_ht_set_zero.py --arm left
```

### Ejecutar las demostraciones

:::warning
Antes de ejecutar una demostración, verifica las posiciones cero de las articulaciones, retira cualquier carga y despeja el rango de movimiento de los brazos. Comienza con un solo brazo y sujétalo al iniciar y detener la demostración. En las demostraciones de impedancia articular, el brazo seleccionado se mueve hacia la pose objetivo establecida en el script.
:::

En cualquiera de las tres demostraciones, introduce `1` para el brazo izquierdo, `2` para el brazo derecho o `3` para ambos. También puedes especificar `--arm left`, `--arm right` o `--arm both` en la línea de comandos. Pulsa `Ctrl+C` para salir y enviar comandos de parada a los brazos y efectores de agarre seleccionados.

#### Compensación de gravedad

La demostración aplica 0,8 veces el par de gravedad calculado para la pose actual como par de avance, lo que facilita mover el brazo a mano.

```bash
python scripts/t701_ht_gravity_compensation.py
```

#### Impedancia articular con avance de gravedad

```bash
python scripts/t701_ht_joint_impedance_with_gravity.py
```

#### Impedancia articular con avance de gravedad y compensación de fricción

```bash
python scripts/t701_ht_joint_impedance_with_gravity_friction.py
```

## Solución de problemas

- **No se encontró ningún puerto serie.** Comprueba que el robot esté encendido y que el cable de datos USB esté conectado al puerto USB-C de la placa principal. Ejecuta `ls -l /dev/ttyACM*` de nuevo.
- **La enumeración del puerto serie no coincide con la configuración.** Comprueba la ruta de dispositivo predeterminada para el brazo seleccionado y si hay otros dispositivos serie USB conectados.
