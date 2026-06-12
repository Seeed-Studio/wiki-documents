---
description: Esta guía te ayudará a comenzar con el reBot Arm B601-RS, incluyendo opciones de compra, montaje, calibración y configuración de software.
title: Inicio rápido de reBot Arm B601-RS
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/
---

# Primeros pasos con reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
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
  <strong>Brazo robótico de 6 GDL · Soporte para múltiples motores · Solucionador de cinemática · Planificación de trayectorias · Totalmente de código abierto</strong>
</p>

El proyecto reBot Arm ha sido liberado como código abierto en [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Esta guía te llevará a través del inicio rápido del B601-RS, desde el montaje hasta la operación.

El contenido de esta guía se dirige hacia ti a la velocidad de la luz — ¡mantente atento!

:::

## Opciones de compra


## Paso 1: Guía de montaje

Antes del montaje:

- Lee atentamente las siguientes instrucciones para garantizar un proceso de montaje fluido.
  1. Este kit incluye varios tornillos y piezas de apariencia similar. Verifica las especificaciones y la orientación antes de apretar.
  2. El vídeo fue grabado a principios de abril. Pueden existir pequeñas actualizaciones, pero el montaje sigue siendo el mismo. Toma como referencia las piezas enviadas como versión final.
  3. Los tornillos enviados tienen fijador de roscas aplicado. Usa herramientas adecuadas o un destornillador eléctrico (recomendado). Ajusta el par a (3–6 kgf·cm) para evitar barrer la rosca. Si se barre, detente de inmediato y sustituye o realinea el tornillo. Los tornillos con fijador de roscas barridos son difíciles de retirar y pueden dañar las piezas.
  4. Garantiza la seguridad durante el montaje. Evita pellizcos o lesiones. Los niños deben estar supervisados.

## Paso 2: Restablecer ID de los motores

### Antes de restablecer los motores:

Antes de la configuración de parámetros del motor, ten en cuenta las siguientes preparaciones y normas de seguridad:

- Compra 2 abrazaderas de sujeción (≥3 pulgadas) y una fuente de alimentación conmutada de 48 V con salida XT30 (usa una marca habitual, no productos de baja calidad).
- Mantén una distancia ≥1 m durante la depuración/operación.
- No conectes ni desconectes los motores en caliente; corta la alimentación antes de enchufar/desenchufar la interfaz XT30 2+2.
- No sobrecargues ni excedas la velocidad; comprueba el cableado y los elementos de fijación antes de arrancar; evita entornos húmedos, de alta temperatura o con polvo.
- Establece parámetros de programa razonables y un paro de emergencia para evitar pérdidas de control.
- **Sigue estrictamente estas normas. El vendedor no se hace responsable de los riesgos o responsabilidades derivados de un uso indebido o errores personales.**

### Lista de preparación

#### Hardware

#### Requisitos del ordenador

- Ordenador personal con arranque dual (Windows + Ubuntu / macOS)

#### Software

## Paso 3: Calibrar el reBot Arm y primeros pasos

Confiamos en que has completado el montaje del brazo robótico, la inicialización del punto cero, la configuración de ID de los motores y otros pasos de configuración siguiendo el vídeo. Ahora estás listo para explorar oficialmente la serie de tutoriales y herramientas que hemos publicado.

1. Explora nuestra plataforma **MotorBridge**, una solución todo en uno que admite una lista en expansión de motores, incluidos [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow y más. También es compatible con brazos robóticos en actualización continua como reBot. Diseñada para principiantes, también ofrecemos un SDK de Python que implementa la misma funcionalidad para desarrolladores.

2. Experimenta las nuevas funciones y detalles de MotorBridge para el brazo robótico reBot, incluyendo calibración del punto cero con un clic, escritura de parámetros, control de motores mediante arrastrar y soltar en la interfaz de usuario y una interfaz integrada de visualización del modelo.

3. Esta herramienta es totalmente compatible con los sistemas operativos **Windows, Ubuntu y macOS**.

### Paso 1: Instalar miniforge (en Windows\Ubuntu\macOS\Jetson\Pi)

En este tutorial se utiliza Ubuntu como ejemplo.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### Paso 2: Configuración del entorno

Crea un entorno virtual con Python 3.12:

```bash
conda create -y -n rebot python=3.12
```

Luego activa tu entorno virtual. **Debes ejecutar este comando de activación cada vez que abras una terminal para usar las funciones relacionadas con reBot**:

```bash
conda activate rebot
```

### Paso 3: Instalar Motorbridge

:::tip Nota para usuarios de macOS
Si experimentas bajas tasas de fotogramas durante la teleoperación en macOS, puede deberse a un controlador WCH CH34x desactualizado. Para **macOS 10.14 y posteriores**, el sistema incluye un controlador integrado `AppleUSBCHC0M`. Puedes desinstalar el controlador antiguo y cambiar al controlador integrado de macOS, lo que debería mejorar eficazmente la tasa de fotogramas.
:::

Después de activar el entorno virtual de reBot, ejecuta el siguiente comando para instalar motorbridge:

```bash
pip install motorbridge
```

### Paso 4: Conectar el brazo robótico

Haz que el dispositivo PCAN-USB funcione en el bus CAN a 1 Mbps para la comunicación con el brazo robótico.

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

### Paso 5: Iniciar MotorBridge-gateway

Opcional (puedes conectar el brazo robótico en la web para probar la conexión)

Abre `https://motorbridge.github.io/motorbridge-studio/` en tu navegador, haz clic en la opción de ayuda, copia el comando correspondiente a tu sistema operativo y placa controladora, comprueba la dirección IP y el número de puerto y, a continuación, pulsa Intro en la terminal para ejecutarlo.

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

Consulta el vídeo para conocer el uso.
