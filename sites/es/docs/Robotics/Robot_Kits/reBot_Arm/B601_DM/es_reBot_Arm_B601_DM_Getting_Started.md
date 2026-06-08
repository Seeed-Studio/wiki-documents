---
description: Esta guía te ayudará a comenzar con el reBot Arm B601-DM, incluyendo opciones de compra, montaje, calibración y configuración de software.
title: Inicio rápido de reBot Arm B601-DM
keywords:
  - reBot
  - B601-DM
  - Brazo robótico
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-04-13T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/
---

# Primeros pasos con reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 DOF · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectoria · Totalmente de código abierto</strong>
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

El contenido de esta guía se dirige hacia ti a la velocidad de la luz — ¡mantente atento!

El proyecto reBot Arm ha sido liberado como código abierto en [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Esta guía te llevará a través del inicio rápido del B601-DM, desde el montaje hasta la operación.

:::tip
Si compraste un kit preensamblado, pasa directamente al video tutorial en el **Paso 3** al final de este artículo y síguelo. No es necesario escribir IDs de motor ni calibrar las posiciones cero.
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

## Paso 1: [Guía de montaje](https://youtu.be/rfTQoFCfnMc)

Antes del montaje:

- Lee atentamente las siguientes instrucciones para garantizar un proceso de montaje fluido.
  1. Este kit incluye varios tornillos y piezas de apariencia similar. Verifica las especificaciones y la orientación antes de apretar.
  2. El video fue grabado a principios de abril. Pueden existir pequeñas actualizaciones, pero el montaje sigue siendo el mismo. Toma como referencia las piezas enviadas como versión final.
  3. Los tornillos enviados tienen fijador de roscas aplicado. Usa herramientas adecuadas o un destornillador eléctrico (recomendado). Ajusta el par a (3–6 kgf·cm) para evitar barrer la rosca. Si se barre, detente de inmediato y reemplaza o realinea el tornillo. Los tornillos con fijador de roscas barridos son difíciles de retirar y pueden dañar las piezas.
  4. Garantiza la seguridad durante el montaje. Evita pellizcos o lesiones. Los niños deben estar supervisados.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Paso 2: Restablecer ID de los motores

### Antes de restablecer los motores:

  Antes de la configuración de parámetros de los motores, ten en cuenta las siguientes preparaciones y normas de seguridad:

- Compra 2 sargentos de sujeción (≥3 pulgadas) y una fuente de alimentación conmutada de 24V 15A con salida XT30 (usa una marca habitual, no productos de baja calidad).
- Mantén una distancia ≥1 m durante la depuración/operación.
- No conectes ni desconectes motores en caliente; corta la alimentación antes de enchufar/desenchufar la interfaz XT30 2+2.
- No sobrecargues ni excedas la velocidad; revisa el cableado y los elementos de fijación antes de arrancar; evita entornos húmedos, de alta temperatura o con polvo.
- Establece parámetros de programa razonables y un paro de emergencia para evitar pérdida de control.
- **Sigue estrictamente estas normas. El vendedor no se hace responsable de los riesgos/responsabilidades derivados de operaciones ilegales o errores personales.**

### Lista de preparación

#### Hardware

- [Brazo robótico reBot Arm B601 DM × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [Placa adaptadora USB-CAN × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [Placa de separación de señal y potencia × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- Sargentos de carpintería × 2
- Cable USB-C × 1
- [Fuente de alimentación de 24V 15A (salida XT30) × 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [Cable de alimentación-US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [Cable de alimentación-EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### Requisito del ordenador

- Ordenador personal con arranque dual (Windows + Ubuntu / macOS)

#### Software

- [DM_Tools_v.1.8.0.1.exe (Solo compatible con Windows)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Paso 3: Calibrar reBot Arm y primeros pasos

Confiamos en que has completado el montaje del brazo robótico, la inicialización del punto cero, la configuración de los IDs de los motores y otros pasos de configuración siguiendo el video. Ahora estás listo para explorar oficialmente la serie de tutoriales y herramientas que hemos publicado.

1. Explora nuestra plataforma **MotorBridge**, una solución todo en uno que admite una lista en expansión de motores, incluidos [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow y más. También es compatible con brazos robóticos en actualización continua como reBot. Diseñada para principiantes, también ofrecemos un SDK de Python que implementa la misma funcionalidad para desarrolladores.

2. Experimenta las nuevas funciones y detalles de MotorBridge para el brazo robótico reBot, incluyendo ajuste de punto cero con un clic, escritura de parámetros, control de motores mediante arrastrar y soltar en la interfaz de usuario y una interfaz integrada de visualización de modelos.

3. Esta herramienta es totalmente compatible con los sistemas operativos **Windows, Ubuntu y Mac**.

### Paso 1: Instalar miniforge (en Windows\Ubuntu\Mac\Jetson\Pi)

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### Paso 2: Configuración del entorno

Crea un entorno virtual con Python 3.12:

```
conda create -y -n rebot python=3.12
```

Luego activa tu entorno virtual; tienes que hacer esto cada vez que abras una terminal para usar rebot:

```bash
conda activate rebot
```

### Paso 3: Instalar motorbridge

:::tip
Si todos los motores escaneados aparecen sin conexión, instala motorbridge v0.2.9.

**Nota para usuarios de macOS:**
Si experimentas bajas tasas de fotogramas durante la teleoperación en macOS, puede deberse a un controlador WCH CH34x desactualizado. Para **macOS 10.14 y posteriores**, el sistema incluye un controlador integrado `AppleUSBCHC0M`. Puedes desinstalar el controlador antiguo y cambiar al controlador integrado de macOS, lo que debería mejorar eficazmente la tasa de fotogramas.
:::

Después de activar el entorno virtual de reBot, ejecuta el siguiente comando para instalar motorbridge:

```bash
pip install motorbridge
```

### Paso 4: Conectar el rebot

Después de conectar el brazo robótico a tu ordenador mediante un cable USB y encender su fuente de alimentación, debes configurar permisos de acceso 666 para el puerto serie.

```bash
sudo chmod 666 /dev/ttyACM*
```

### Paso 5: Abrir motorbridge

Abre `https://rebot-devarm.w0x7ce.eu/` en tu navegador, luego haz clic en la ayuda, copia el comando adecuado para tu sistema y placa controladora, comprueba la IP y el puerto y, a continuación, pulsa Intro en la terminal.

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
- Este problema suele ocurrir cuando la calibración de parámetros se activa accidentalmente durante la configuración del ID, lo que sobrescribe los parámetros preestablecidos de fábrica, como la inercia del motor. Usa **DM_Tools_v.1.8.0.1.exe (solo Windows)** disponible en:
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
Exporta los parámetros completos de un motor intacto del mismo modelo mediante el software host, importa estos parámetros en la unidad defectuosa, actualiza su correspondiente ID de CAN, guarda los parámetros escritos y luego procede con la calibración del punto cero.

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

### 2. Todos los motores comparten IDs de CAN idénticos
- Al realizar la calibración del punto cero mediante **DM_Tools_v.1.8.0.1.exe (solo Windows)**, evita hacer clic en los botones Read o Set junto al campo de CAN ID. La interfaz de depuración se comunica a través del bus CAN; al hacer clic en Set se unificará el CAN ID de cada motor conectado al CANBUS.


#### Para los pasos de operación posteriores, consulta nuestro video tutorial.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
