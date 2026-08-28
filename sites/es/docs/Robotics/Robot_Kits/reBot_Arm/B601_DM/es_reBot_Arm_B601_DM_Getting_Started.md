---
description: Esta guía te ayudará a comenzar con el reBot Arm B601-DM, incluyendo opciones de compra, montaje, calibración y configuración de software.
title: Inicio rápido de reBot Arm B601-DM
keywords:
  - reBot
  - B601-DM
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_b601_dm_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Primeros pasos con reBot Arm B601-DM

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectoria · Totalmente de código abierto</strong>
</p>

El contenido de esta guía se dirige hacia ti a la velocidad de la luz — ¡mantente atento!

El proyecto reBot Arm ha sido liberado como código abierto en [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Esta guía te llevará a través del inicio rápido del B601-DM, desde el montaje hasta la operación.

:::tip
Si compraste un kit preensamblado, pasa directamente al video tutorial en el **Paso 3** al final de este artículo y síguelo. No es necesario escribir IDs de motor ni calibrar las posiciones cero.

Se ha verificado que el rendimiento de las máquinas virtuales es insuficiente para ejecutar las demostraciones y que existen problemas de configuración. Se recomienda usar una máquina física con Ubuntu para controlar el brazo robótico.
:::

## Opciones de compra

El reBot Arm B601-DM está disponible en múltiples configuraciones para satisfacer diferentes necesidades de los usuarios.

### Comparación de opciones

| Configuración | Cuerpo | Pinza | Motores | Estructura | Enlace de compra |
|:---|:---:|:---:|:---:|:---:|:---|
| **Kit completo** | ✅ | ✅ | ✅ | ✅ | [Próximamente](https://www.seeedstudio.com/) |
| **Solo pinza** | ❌ | ✅ | ❌ | ❌ | [Próximamente](https://www.seeedstudio.com/) |
| **Solo cuerpo (estructura)** | ✅ | ❌ | ❌ | ✅ | [Próximamente](https://www.seeedstudio.com/) |
| **Solo cuerpo (motores)** | ✅ | ❌ | ✅ | ❌ | [Próximamente](https://www.seeedstudio.com/) |


## Descargo de responsabilidad de seguridad y aviso de riesgos

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## Sobre la fuente de alimentación

1. El brazo robótico no se envía con una fuente de alimentación / no incluye una fuente de alimentación por defecto. Puedes conectar una batería por tu cuenta, o comprar nuestra [fuente de alimentación MeanWell de 24V 14.6A de código abierto](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html) o en [Amazon](https://www.amazon.com/MEAN-WELL-LRS-350-24-350-4W-Switchable/dp/B013ETVO12/ref=sr_1_1?crid=36B2HIB8MM2IT&dib=eyJ2IjoiMSJ9.vpZwmjb4m5KMNcsg2Kb7wr8DDWa-ryUqO5fConlxqlsGoTVB5HN2uBBnRNZI0kcACiaR5DKFiYWvIHLEUN3luZqJAzogeQkeT-fol0m835-oBBWSud1ixkGayrl5nRsF5KMgfvkwAIW949dTTpU2CWdNMrf8g43_vKWaytfX9SHeMJ1hmhS6Kab6fBgER6CgB47K_eEmoJj3KhrjJMtn980osDG-bCLniBcRAHThmXsVRVdpGPsmckGLLyaXrIGRG9plhKI-F7H8hfqW7vzGbwIV_bF8cFtRjdRm5Shtb0o.ekLYD0hsc1Uzji4qKl0Q0USpDTr92JEMQobBXl9lYD0&dib_tag=se&keywords=LRS-350-24&qid=1780021690&s=industrial&sprefix=lrs-350-24%2Cindustrial%2C696&sr=1-1&th=1). No compres fuentes de alimentación de fabricantes sin marca o canales inseguros. Cualquier riesgo o consecuencia que surja de ello será asumido por el propio usuario.

Si el voltaje de tu hogar es 220V, ajusta el interruptor selector de voltaje en el lateral de la fuente de alimentación a 230V. Si el voltaje de tu hogar es 110V, cámbialo a 115V.

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" />
   </div>

2. Alternativamente, puedes elegir nuestra carcasa de fuente de alimentación MeanWell de 24V 14.6A de código abierto para autoensamblaje. Las instrucciones de texto y la lista de materiales (BOM) están publicadas como código abierto en el [repositorio de GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_DM) (recomendado solo para desarrolladores con experiencia relevante en montaje de fuentes de alimentación).

   Video de referencia para el montaje:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>



## Paso 1: [Guía de montaje](https://youtu.be/rfTQoFCfnMc)

Antes del montaje:

- Lee atentamente las siguientes instrucciones para garantizar un proceso de montaje fluido.
  1. Este kit incluye varios tornillos y piezas de apariencia similar. Verifica las especificaciones y la orientación antes de fijarlos.
  2. El video fue grabado a principios de abril. Pueden existir pequeñas actualizaciones, pero el montaje sigue siendo el mismo. Toma como referencia las piezas enviadas como versión final.
  3. Los tornillos enviados tienen fijador de roscas aplicado. Usa herramientas adecuadas o un destornillador eléctrico (recomendado). Ajusta el par a (3–6 kgf·cm) para evitar barrer la rosca. Si se barre la rosca, detente inmediatamente y reemplaza o realinea el tornillo. Los tornillos con fijador de roscas barridos son difíciles de retirar y pueden dañar las piezas.
  4. Garantiza la seguridad durante el montaje. Evita pellizcos o lesiones. Los niños deben estar supervisados.

  :::tip
  Recordatorio: El D4 * 7 entre el motor 5 y el motor 6 en el video de montaje no necesita instalarse. Es un error en el video. Si compraste la versión DIY del reBot Arm B601-DM, los 7 tornillos D4 * 7 son suficientes para que completes el montaje.
  :::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Video tutorial de cableado:

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/vVxCOfu5ZCE" title="reBot-B601-DM Wiring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Paso 2: Restablecer ID de los motores

:::tip
Al montar el brazo robótico, no olvides conectar el mazo de cables entre el Motor 1 y el Motor 2. La posición exacta está resaltada en la imagen de abajo. Antes de cambiar la conexión del cable de 3 pines, asegúrate de que el motor actual esté deshabilitado y la alimentación desconectada para evitar conexiones en caliente u operaciones incorrectas que puedan causar parámetros anómalos en el motor.

<div align="center">
    <img width={200}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1to2_ID_set.jpg" />
</div>
:::

### AI AGENT

:::tip
Esta sección está en versión beta. Observa las precauciones de seguridad durante su uso. Si las sugerencias de la IA difieren de esta documentación, sigue esta guía y solicita ayuda a nuestros ingenieros.
:::

Deja que un AI AGENT te ayude en este proceso. Copia el siguiente prompt en tu asistente de IA:

```text

Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.

```

### Antes de restablecer los motores:

  Antes de la configuración de parámetros del motor, ten en cuenta las siguientes preparaciones y normas de seguridad:

- Compra 2 pinzas de sujeción (≥3 pulgadas) y una fuente de alimentación conmutada de 24V 15A con salida XT30 (usa una marca reconocida, no productos de baja calidad).
- Mantén una distancia ≥1 m durante la depuración/operación.
- No conectes/desconectes motores en caliente; corta la alimentación antes de enchufar/desenchufar la interfaz XT30 2+2.
- No sobrecargues/sobregires; revisa el cableado y los elementos de fijación antes de arrancar; evita entornos húmedos/de alta temperatura/polvorientos.
- Establece parámetros de programa razonables y un paro de emergencia para evitar pérdida de control.
- **Sigue estrictamente estas normas. El vendedor no es responsable de los riesgos/responsabilidades derivados de operaciones ilegales o errores personales.**

### Lista de preparación

#### Hardware

- [Brazo robótico reBot Arm B601 DM × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [Placa adaptadora USB-CAN × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [Placa de separación de señal y potencia × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- Pinzas de carpintería × 2
- Cable USB-C × 1
- [Fuente de alimentación de 24V 15A (salida XT30) × 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [Cable de alimentación-US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [Cable de alimentación-EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### Requisito del ordenador

- Ordenador personal con arranque dual (Windows + Ubuntu / macOS)

#### Software

- [Enlace de descarga de software](https://github.com/dmBots/motor-debugging-tool)


#### Escribir ID del motor y probar habilitación

Configura el CAN ID y el Master ID para cada motor de articulación según los parámetros de la siguiente tabla:

| Número de motor | ID CAN | ID maestro |
|:---:|:---:|:---:|
| Motor 1 | 0x01 | 0x11 |
| Motor 2 | 0x02 | 0x12 |
| Motor 3 | 0x03 | 0x13 |
| Motor 4 | 0x04 | 0x14 |
| Motor 5 | 0x05 | 0x15 |
| Motor 6 | 0x06 | 0x16 |
| Motor 7 | 0x07 | 0x17 |

:::danger
A continuación se muestra un ejemplo de operación usando el Motor 1. Asegúrate de que el ID CAN y el ID maestro de cada motor de la articulación estén configurados correctamente según la tabla anterior.
:::
1.Abre el software host **DM_Tools**, selecciona el puerto USB COM correspondiente y establece la velocidad en baudios a `921600`. Una vez conectado correctamente, se imprimirá información en la interfaz `Serial`.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_damiao_tool_en.png" width="800" />
</div>

2.Utiliza el cable de 3 pines para conectar el Motor 1 a la placa adaptadora USB-CAN.

3.Después de la conexión, entra en la interfaz `Parameter Settings`. Haz clic en `Read Parameters` para leer los parámetros actuales, luego establece el `CAN ID` en `0x01` y el `Master ID` en `0x11`.

4.Después de la configuración, haz clic en `Write Parameters` para guardar los parámetros.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_damiao_tool_en.png" width="800" />
</div>

:::tip
El modo USB en el cuadro naranja de la izquierda representa el método utilizado al leer y escribir parámetros del motor en la página de configuración actual.
:::

5.Navega a la interfaz `Debug`. Después de asegurarte de que el `CAN ID` y el `Master ID` estén configurados correctamente, haz clic en `Enable`. El indicador del motor se volverá verde fijo, lo que indica que el motor está habilitado. La prueba del Motor 1 se ha completado.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_damiao_tool_en.png" width="800" />
</div>

:::tip
Después de la prueba, recuerda hacer clic en `Disable` para salir del estado habilitado.
:::

**Puntos de conexión del cable de 3 pines y efecto de habilitación para cada motor**

| Configuración Motor 1 | Configuración Motor 2 | Configuración Motor 3 | Configuración Motor 4 | Configuración Motor 5 | Configuración Motor 6 | Configuración Motor 7 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" width="120" /> |

| Motor 1 habilitado | Motor 2 habilitado | Motor 3 habilitado | Motor 4 habilitado | Motor 5 habilitado | Motor 6 habilitado | Motor 7 habilitado |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" width="120" /> |

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Paso 3: Calibración del reBot Arm e introducción

Confiamos en que has completado el montaje del brazo robótico, la inicialización del punto cero, la configuración de los ID de los motores y otros pasos de configuración siguiendo el video. Ahora estás listo para explorar oficialmente la serie de tutoriales y herramientas que hemos publicado.


Consulta el video y el tutorial en texto. Antes de controlar el brazo robótico, debes restablecer el punto cero nuevamente.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

1. Explora nuestra plataforma **MotorBridge**, una solución todo en uno que admite una lista en expansión de motores, incluidos [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow y más. También es compatible con brazos robóticos actualizados continuamente como reBot. Diseñada para principiantes, también ofrecemos un SDK de Python que implementa la misma funcionalidad para desarrolladores.

2. Experimenta nuevas funciones y detalles de MotorBridge para el brazo robótico reBot, incluyendo configuración del punto cero con un clic, escritura de parámetros, control del motor mediante arrastrar y soltar en la interfaz de usuario y una interfaz integrada de visualización de modelos.

3. Esta herramienta es totalmente compatible con los sistemas operativos **Windows, Ubuntu y Mac**.

### Paso 1: Instalar Miniforge (en Windows\Ubuntu\macOS\Jetson\Pi)

Instala Miniforge y crea un entorno virtual para evitar interferencias de otros paquetes de entorno.

Ubuntu\Jetson\Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

o macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

o Windows:

Abre la página de lanzamientos de Miniforge en tu navegador, busca el último `Miniforge3-Windows-x86_64.exe` y descárgalo:

```text
https://github.com/conda-forge/miniforge/releases
```

### Paso 2: Configuración del entorno

Crea un entorno virtual con Python 3.12:

```
conda create -y -n rebot python=3.12
```

Luego activa tu entorno virtual; debes hacer esto cada vez que abras una terminal para usar rebot:

```bash
conda activate rebot
```

### Step3: Install motorbridge

:::tip

**Nota para usuarios de macOS:**
Si experimentas bajas tasas de fotogramas durante la teleoperación en macOS, puede deberse a un controlador WCH CH34x desactualizado. Para **macOS 10.14 y posteriores**, el sistema incluye un controlador integrado `AppleUSBCHC0M`. Puedes desinstalar el controlador antiguo y cambiar al controlador integrado de macOS, lo que debería mejorar eficazmente la tasa de fotogramas.

:::

Después de activar el entorno virtual de reBot, ejecuta el siguiente comando para instalar motorbridge:

```bash
pip install motorbridge
```

###  Step4: Connect the rebot
Después de conectar el brazo robótico a tu ordenador mediante un cable USB y encender su fuente de alimentación, debes configurar permisos de acceso 666 para el puerto serie. (Los sistemas Windows no requieren configuración de permisos; puedes omitir este paso).

```bash
sudo chmod 666 /dev/ttyACM*
```

### Step5: Open the motorbridge

Abre `https://motorbridge.github.io/motorbridge-studio/` en tu navegador, luego haz clic en la ayuda. Copia el comando adecuado para tu sistema y placa controladora, comprueba la IP y el puerto y, a continuación, pulsa Intro en la terminal.

Por ejemplo, en Windows:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

## Preguntas frecuentes (FAQ)
### 1. Se produce un ruido anómalo fuerte inmediatamente después del arranque del motor
- Este problema suele ocurrir cuando la calibración de parámetros se activa accidentalmente durante la configuración del ID, lo que sobrescribe los parámetros preestablecidos de fábrica, como la inercia del motor. Utiliza **DM_Tools_v.1.8.0.1.exe (solo para Windows)** disponible en:
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
Exporta los parámetros completos de un motor intacto del mismo modelo mediante el software host, importa estos parámetros en la unidad defectuosa, actualiza su correspondiente ID CAN, guarda los parámetros escritos y luego procede con la calibración del punto cero.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" />
</div>

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" />
</div>

[Parámetros predeterminados DM4310](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt)
[Parámetros predeterminados DM4340P](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt)

### 2. Todos los motores comparten IDs CAN idénticos
- Al realizar la calibración del punto cero mediante **DM_Tools_v.1.8.0.1.exe (solo para Windows)**, evita hacer clic en los botones Read o Set junto al campo CAN ID. La interfaz de depuración se comunica a través del bus CAN; al hacer clic en Set se unificará el ID CAN de todos los motores conectados al CANBUS.
