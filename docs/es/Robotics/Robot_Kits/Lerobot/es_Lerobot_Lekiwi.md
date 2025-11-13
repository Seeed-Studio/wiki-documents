---
description: Este wiki proporciona el tutorial de ensamblaje y depuración para el Lekiwi y realiza la recolección de datos y entrenamiento dentro del framework Lerobot.
title: Lekiwi en Lerobot
keywords:
- Lerobot
- Huggingface
- Car
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /es/lerobot_lekiwi
last_update:
  date: 8/8/2025
  author: LiShanghang
translation:
  skip: [ zh-CN ]
---

# Cómo usar el Lekiwi en Lerobot

:::tip

Este repositorio de tutoriales mantiene la versión estable verificada de Lerobot al 5 de junio de 2025. Actualmente, ​Hugging Face​ ha lanzado una ​actualización importante​ a Lerobot, introduciendo muchas nuevas características. Si quieres experimentar los últimos tutoriales, por favor sigue la [​documentación oficial​ para orientación](https://huggingface.co/docs/lerobot/lekiwi).

:::

## Introducción

El [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) es un proyecto de coche robótico completamente de código abierto lanzado por [SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC). Incluye archivos detallados de impresión 3D y guías de operación, diseñado para ser compatible con el framework de aprendizaje por imitación [LeRobot](https://github.com/huggingface/lerobot/tree/main). Soporta el brazo robótico SO101 para habilitar un pipeline completo de aprendizaje por imitación,

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Características Principales

1. **Código abierto y bajo costo**: Es una solución de coche robótico de código abierto y bajo costo del [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)
2. **Integración con LeRobot**: Diseñado para integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Abundantes recursos de aprendizaje**: Proporciona recursos de aprendizaje de código abierto integrales como guías de ensamblaje y calibración, y tutoriales para pruebas, recolección de datos, entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**: Despliega este kit de brazo con reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicación Multi-Escenario**: Es aplicable a campos como educación, investigación científica, producción automatizada y robótica, ayudando a los usuarios a lograr operaciones robóticas eficientes y precisas en varias tareas complejas.

:::caution

Seeed Studio solo es responsable de la calidad del hardware en sí. Los tutoriales se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, por favor reporta el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

:::danger

- Todos los servomotores en el chasis LeKiwi requieren alimentación de 12V. Para usuarios con brazos robóticos de 5V, proporcionamos un módulo convertidor reductor de 12V a 5V. Ten en cuenta que se requerirá modificación del circuito de tu parte.

- Una fuente de alimentación de 12V - Puedes seleccionar esta opción al finalizar la compra si es necesario. Si ya posees una fuente de alimentación de 12V, puedes omitir esta opción y simplemente convertir el conector de salida de tu fuente de alimentación a un enchufe DC 5521.

- Controlador Raspberry Pi y cámara - Estos deben comprarse por separado a través de la interfaz de pedido.

:::

## Especificaciones

| Tipo | Lekiwi |
|--|--|
|  Servomotores | 3x 12v STS3215 Relación de Engranaje 1:345|
| Fuente de Alimentación | 12V DC o Batería |
| Sensor de Ángulo| Codificador magnético de 12 bits |
| Rango de Temperatura de Operación Recomendado | 0℃～40℃ |
| Método de Comunicación| UART |
| Método de Control | PC |

## Lista de Materiales (BOM)

| Parte | Cantidad | Incluido|
|--|--|--|
| Servomotores STS3215 1:345 12V | 3 | ✅ |
| Rueda omnidireccional/rueda universal | 3 | ✅ |
| Carcasa impresa en 3D Lekiwi | 1 | ✅ |
| Módulo de Alimentación Buck DC-DC - 24V/12V a 5V | 1 | ✅ |
| Placa de Control de Motor | 1 | ✅ |
| Cable Y DC Macho a Doble DC Macho 5521 | 1 | ✅ |
| Cable USB;Type C 2.0 a Type C 2.0-Negro;L150mm| 1 | ✅ |
| Cable USB 3.1 Type C a A 0.5 Metro | 1 | ✅ |
| Adaptador de Alimentación con Enchufe;Negro-12V-2A AC/DC | 1 | ✅ |
| Tornillos Surtidos M2 M3 M4 | Suficientes | ✅ |
| Raspberry pi | 1 | Opción |
| Cámara USB | 1 | Opción |
| Cámara de Profundidad | 2 | Opción |
| SO-ARM101 Pro | 1 | Opción |
| Paquete de Batería de Iones de Litio de Alta Capacidad 12V E326S| 1 | Opción |

## Entorno del Sistema Inicial

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.0+
- Python 3.10  
- Torch 2.6  

**Para Raspberry Pi:**

- Raspberry Pi5 4G~16G

## Guía de Impresión 3D

### Partes

Proporcionamos archivos STL listos para imprimir para las partes impresas en 3D a continuación. Estas pueden imprimirse con filamento PLA genérico en impresoras FDM de grado consumidor. Probamos en una impresora Bambu Lab P1S. Para todos los componentes, simplemente cargamos en bambuslicer, auto-rotar y auto-organizar, habilitar cualquier soporte recomendado, e imprimir.

| Artículo | Cantidad | Notas |
|:---|:---:|:---:|
| [Placa base Superior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [Placa base Inferior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [Soporte de motor de tracción](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [Cubo de rueda de servo](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | Usar Soportes|
| [Carcasa RasPi Superior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [Carcasa RasPi Inferior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [soporte base](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) y [Soporte de muñeca](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **Compatible con [esta cámara](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)** |
| Webcam [soporte base](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl), [inserto de pinza](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl), y [soporte de muñeca](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **Compatible con [esta cámara](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)** |

### Parámetros de Impresión

Los archivos STL proporcionados están listos para imprimir en muchas impresoras FDM. A continuación están las configuraciones probadas y sugeridas aunque otras pueden funcionar.

- Material: PLA+
- Diámetro de Boquilla y Precisión: diámetro de boquilla de 0.2mm a altura de capa de 0.2mm
- Densidad de Relleno: 15%  
- Velocidad de Impresión: 150 mm/s
- Si es necesario, subir código G (archivo de corte) a la impresora e imprimir

## Instalar LeRobot

En tu Raspberry Pi:

### 1. [Instalar Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. Reiniciar shell

Copia y pega en tu shell: `source ~/.bashrc` o para Mac: `source ~/.bash_profile` o `source ~/.zshrc` si estás usando zshell

### 3. Crear y activar un entorno conda fresco para lerobot

```bash
conda create -y -n lerobot python=3.10
```

Luego activa tu entorno conda (¡haz esto cada vez que abras un shell para usar lerobot!):

```bash
conda activate lerobot
```

### 4. Clonar LeRobot

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. Instalar ffmpeg en tu entorno

Cuando uses `miniconda`, instala `ffmpeg` en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

### 6. Instalar LeRobot con dependencias para los motores feetech

```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## Instalar LeRobot en laptop(PC)

Si ya has instalado LeRobot en tu laptop puedes omitir este paso, de lo contrario por favor sigue adelante mientras hacemos los mismos pasos que hicimos en el Pi.

:::tip
Usamos el Símbolo del Sistema (cmd) bastante. Si no te sientes cómodo usando el cmd o quieres repasar el uso de la línea de comandos puedes echar un vistazo aquí: [Curso intensivo de línea de comandos](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
:::

En tu computadora:

### 1. [Instalar Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. Reiniciar shell

Copia y pega en tu shell: `source ~/.bashrc` o para Mac: `source ~/.bash_profile` o `source ~/.zshrc` si estás usando zshell

### 3. Crear y activar un entorno conda fresco para lerobot

```bash
conda create -y -n lerobot python=3.10
```

Luego activa tu entorno conda (¡haz esto cada vez que abras un shell para usar lerobot!):

```bash
conda activate lerobot
```

### 4. Clonar LeRobot

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. Instalar ffmpeg en tu entorno

Cuando uses `miniconda`, instala `ffmpeg` en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

### 6. Instalar LeRobot con dependencias para los motores feetech

```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## Ensamblaje

<details>
<summary>Ensamblar Lekiwi</summary>

### tutorial en video

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/_QjhOMSnobU?si=xjhfCztoWZcFwW6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/62_JWFpvJyA?si=0YCwKUJgy0YVL-A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/r0LtrTidWdA?si=MEdIJ5XzI8-wbpDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/qk1iYHW-0qg?si=0zXmcVIkBXJcf1M5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/RYu7WLpi7jw?si=Tjc5_4-WLE2xyNWr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/q7zp4qIFdnM?si=fIYgI_3xbrWL7wUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### El siguiente es un tutorial fotográfico

Puedes consultar el [tutorial de ensamblaje](https://github.com/SIGRobotics-UIUC/LeKiwi) oficial.

Al recibir las piezas impresas, todos los componentes impresos son como se muestra a continuación.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. Fija el motor de tracción al soporte del motor usando 12 tornillos autorroscantes m2x6.**

| **Paso 1** | **Paso 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. Atornilla el soporte del motor de tracción a la placa base inferior usando 12 tornillos de máquina m3x16.**

:::tip
Recuerda la disposición de ID: 8 representa la rueda trasera, mientras que 7 y 9 corresponden a las ruedas delantera izquierda y delantera derecha respectivamente.
:::

| **Paso 1** | **Paso 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. Fija el cubo de la rueda a la rueda omnidireccional.**

**Paso 1 y Paso 2**: Retira los tres tornillos.

| **Paso 1** | **Paso 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**Paso 3 y Paso 4**: Fija el cubo de la rueda a la rueda omnidireccional usando 9 tornillos de máquina m4x18.

| **Paso 3** | **Paso 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. Fija el cuerno del servo al cubo de la rueda usando 6 tornillos de máquina m3x16.**

| **Paso 1** | **Paso 2** |**Paso 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. Fija el cuerno del servo al motor de tracción usando 3 tornillos de máquina m3x10.**

| **Paso 1** | **Paso 2** |**Paso 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. Añade el controlador de servo y conecta todos los circuitos.**

| **Paso 1** | **Paso 2** |**Paso 3** |**Paso 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **Paso 5** | **Paso 6** |**Paso 7** |**Paso 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

La **Entrada de Alimentación** se conecta directamente a la fuente de alimentación, como en el Paso 8, mientras que el puerto **USB-C** proporciona alimentación de 5V al Raspberry Pi.  

Para los **terminales adicionales de 2 pines (5V y 12V)**:  

- Si usas un **brazo robótico SO10x de 7.4V**, alimenta la **Placa de Motores Servo** a través de la **salida de 5V**.  
- Si usas un **brazo robótico de 12V**, alimenta la **Placa de Motores Servo** directamente desde el **divisor de alimentación DC**, como en el Paso 8.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. Ahora puedes proceder a montar el Raspberry Pi en la placa superior de la segunda capa del vehículo. Antes de hacerlo, conecta tanto el **cable de alimentación USB-C** como el **cable de comunicación USB-C del motor servo**, luego pásalos a través del panel superior del vehículo.**

**Paso 1** Conecta el cable de alimentación a tu Raspberry Pi y pásalo a través de la abertura central del panel superior.

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**Paso 2** Entre los tres motores servo del chasis, un servo tiene solo un cable conectado. Si necesitas instalar el brazo robótico SO10x, por favor: Retira el cable ID1 del brazo robótico. Conéctalo al motor del chasis. Pásalo a través del panel superior como cable de reserva

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**Paso 3** Ahora puedes conectar el USB-C de la placa controladora de servo al puerto USB del Raspberry Pi.

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. Ahora necesitas asegurar el Raspberry Pi y las partes restantes de la placa superior usando 12 tornillos M3×16.**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. Ahora puedes instalar la cámara USB y el Brazo Seguidor usando 1 tornillo M3x16 y 4 tornillos M5×25**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) |
| ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

Y asegúrate de que tanto el cable de control del servo como la cámara USB estén conectados al Raspberry Pi.

|  |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

:::tip
Verifica las conexiones del circuito; después del ensamblaje, el Lekiwi debe estar conectado a la placa de desarrollo (Raspberry Pi / Jetson). El brazo líder debe estar conectado a tu PC.

| Lekiwi --> Raspberry Pi / Jetson |

| Brazo líder --> PC                |
:::

## Configurar los motores

### Brazo líder

Para encontrar el puerto de cada adaptador de servo bus, ejecuta este script:

```bash
lerobot-find-port
```

Ejemplo de salida:

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/tty.usbmodem575E0032081
Reconnect the USB cable.
```

Ejemplo de salida al identificar el puerto (ej., `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Ejemplo de salida al identificar el puerto (ej., `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

:::tip

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.
```

Recuerda retirar el USB, luego presiona Enter, de lo contrario la interfaz no será detectada.
:::

Solución de problemas: En Linux, podrías necesitar dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```


### Lekiwi

Debes seguir el comando anterior para encontrar el USB correcto y configurar los motores.

Las instrucciones para configurar los motores se pueden encontrar en la [documentación](https://huggingface.co/docs/lerobot/lekiwi) del SO101 (Igual que el brazo líder). Además de los IDs para los motores del brazo, también necesitamos establecer los IDs de los motores para la base móvil. Estos necesitan estar en un orden específico para funcionar. A continuación una imagen de los IDs de los motores y las posiciones de montaje de los motores para la base móvil. Ten en cuenta que solo usamos una placa de Control de Motor en LeKiwi. Esto significa que los IDs de los motores para las ruedas son 7, 8 y 9.

Puedes ejecutar este comando para configurar los motores para LeKiwi. Primero configurará los motores para el brazo (id 6..1) y luego configurará los motores para las ruedas (9,8,7).

```bash
lerobot-setup-motors \
    --robot.type=lekiwi \
    --robot.port=/dev/tty.usbmodem58760431551 # <- paste here the port found at previous step
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/motor_ids.png" />
</div>

## Calibración

Ahora tenemos que calibrar el brazo líder y el brazo seguidor. Los motores de las ruedas no necesitan ser calibrados. El proceso de calibración es muy importante porque permite que una red neuronal entrenada en un robot funcione en otro.

### Calibrar brazo seguidor (en base móvil)

Asegúrate de que el brazo esté conectado a la Raspberry Pi y ejecuta este script o ejemplo de API (en la Raspberry Pi vía SSH) para lanzar la calibración del brazo seguidor:

```bash
lerobot-calibrate \
    --robot.type=lekiwi \
    --robot.id=my_awesome_kiwi # <- Give the robot a unique name
```

Hemos unificado el método de calibración para la mayoría de robots, por lo tanto, los pasos de calibración para este brazo SO100 son los mismos que los pasos para el Koch y SO101. Primero, tenemos que mover el robot a la posición donde cada articulación esté en el medio de su rango, luego presionamos `Enter`. En segundo lugar, movemos todas las articulaciones a través de su rango completo de movimiento. Un video de este mismo proceso para el SO101 como referencia se puede encontrar [aquí](https://huggingface.co/docs/lerobot/lekiwi).

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Versión cableada

Si tienes la versión cableada de LeKiwi, por favor ejecuta todos los comandos en tu laptop.

### Calibrar brazo líder

Luego, para calibrar el brazo líder (que está conectado a la laptop/pc). Ejecuta el siguiente comando o ejemplo de API en tu laptop:

```bash
lerobot-calibrate \
    --teleop.type=so100_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_awesome_leader_arm # <- Give the robot a unique name
```

## Teleoperar LeKiwi

:::tip
Si estás usando una Mac, es posible que necesites dar permiso a Terminal para acceder a tu teclado. Ve a System Preferences > Security & Privacy > Input Monitoring y marca la casilla para Terminal.
:::

Para teleoperar, conéctate por SSH a tu Raspberry Pi, ejecuta `conda activate lerobot` y este script:

```bash
python -m lerobot.robots.lekiwi.lekiwi_host --robot.id=my_awesome_kiwi
```

Luego en tu laptop, también ejecuta `conda activate lerobot` y ejecuta el ejemplo de API, asegúrate de establecer el `remote_ip` y `port` correctos en `examples/lekiwi/teleoperate.py`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/teleoperate.png" />
</div>

```bash
python examples/lekiwi/teleoperate.py
```

Deberías ver en tu laptop algo como esto: ```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` Ahora puedes mover el brazo líder y usar el teclado (w,a,s,d) para conducir hacia adelante, izquierda, atrás, derecha. Y usar (z,x) para girar a la izquierda o girar a la derecha. Puedes usar (r,f) para aumentar y disminuir la velocidad del robot móvil. Hay tres modos de velocidad, ver la tabla a continuación:

| Modo de Velocidad | Velocidad Lineal (m/s) | Velocidad de Rotación (deg/s) |
| ----------------- | ---------------------- | ----------------------------- |
| Rápido            | 0.4                    | 90                            |
| Medio             | 0.25                   | 60                            |
| Lento             | 0.1                    | 30                            |

| Tecla | Acción           |
| ----- | ---------------- |
| W     | Mover adelante   |
| A     | Mover izquierda  |
| S     | Mover atrás      |
| D     | Mover derecha    |
| Z     | Girar izquierda  |
| X     | Girar derecha    |
| R     | Aumentar velocidad |
| F     | Disminuir velocidad |

:::tip
Si usas un teclado diferente puedes cambiar las teclas para cada comando en el `LeKiwiRobotConfig`.
:::

### Versión cableada

Si tienes la versión **cableada** de LeKiwi, por favor ejecuta todos los comandos incluyendo ambos comandos de teleoperación en tu laptop.

## Solucionar problemas de comunicación

Si tienes problemas conectándote al SO100 Móvil, sigue estos pasos para diagnosticar y resolver el problema.

### 1. Verificar configuración de dirección IP

Asegúrate de que la IP correcta para la Pi esté establecida en el archivo de configuración. Para verificar la dirección IP de la Raspberry Pi, ejecuta (en la línea de comandos de la Pi):

```bash
hostname -I
```

### 2. Verificar si la Pi es accesible desde laptop/pc

Intenta hacer ping a la Raspberry Pi desde tu laptop:

```bach
ping <your_pi_ip_address>
```

Si el ping falla:

- Asegúrate de que la Pi esté encendida y conectada a la misma red.
- Verifica si SSH está habilitado en la Pi.

### 3. Probar conexión SSH

Si no puedes conectarte por SSH a la Pi, es posible que no esté conectada correctamente. Usa:

```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```

Si obtienes un error de conexión:

- Asegúrate de que SSH esté habilitado en la Pi ejecutando:

  ```bash
  sudo raspi-config
  ```

  Luego navega a: **Interfacing Options -> SSH** y habilítalo.

### 4. Mismo archivo de configuración

Asegúrate de que el archivo de configuración en tu laptop/pc y la Raspberry Pi sea el mismo.

## Grabar un conjunto de datos

Una vez que estés familiarizado con la teleoperación, puedes grabar tu primer conjunto de datos con LeKiwi.

Usamos las características del hub de Hugging Face para subir tu conjunto de datos. Si no has usado previamente el Hub, asegúrate de poder iniciar sesión vía CLI usando un token de acceso de escritura, este token se puede generar desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens).

Agrega tu token al CLI ejecutando este comando:

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Luego almacena el nombre de tu repositorio de Hugging Face en una variable:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Ahora puedes grabar un conjunto de datos. Para grabar episodios y subir tu conjunto de datos al hub, ejecuta este ejemplo de API adaptado para LeKiwi. Asegúrate de adaptar primero el `remote_ip`, `repo_id`, `port` y `task` en el script. Si quisieras ejecutar el script por más tiempo puedes aumentar `NB_CYCLES_CLIENT_CONNECTION`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/record.png" />
</div>

```bash
python examples/lekiwi/record.py
```

Subida del conjunto de datos

Localmente, tu conjunto de datos se almacena en esta carpeta: `~/.cache/huggingface/lerobot/{repo-id}`. Al final de la grabación de datos, tu conjunto de datos será subido a tu página de Hugging Face (ej. https://huggingface.co/datasets/cadene/so101_test) que puedes obtener ejecutando:

```bash
echo https://huggingface.co/datasets/${HF_USER}/so101_test
```

Tu conjunto de datos será automáticamente etiquetado con `LeRobot` para que la comunidad lo encuentre fácilmente, y también puedes agregar etiquetas personalizadas (en este caso `tutorial` por ejemplo).

Puedes buscar otros conjuntos de datos de LeRobot en el hub buscando etiquetas `LeRobot` [tags](https://huggingface.co/datasets?other=LeRobot).

:::tip

### Consejos para recopilar datos

Una vez que te sientas cómodo con la grabación de datos, puedes crear un conjunto de datos más grande para entrenamiento. Una buena tarea inicial es agarrar un objeto en diferentes ubicaciones y colocarlo en un contenedor. Sugerimos grabar al menos 50 episodios, con 10 episodios por ubicación. Mantén las cámaras fijas y mantén un comportamiento de agarre consistente durante las grabaciones. También asegúrate de que el objeto que estás manipulando sea visible en las cámaras. Una buena regla general es que deberías poder hacer la tarea tú mismo solo mirando las imágenes de la cámara.

En las siguientes secciones, entrenarás tu red neuronal. Después de lograr un rendimiento de agarre confiable, puedes comenzar a introducir más variaciones durante la recopilación de datos, como ubicaciones de agarre adicionales, diferentes técnicas de agarre y alterar las posiciones de la cámara.

Evita agregar demasiada variación muy rápidamente, ya que puede obstaculizar tus resultados.

Si quieres profundizar en este tema importante, puedes consultar la [publicación](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) [del blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escribimos sobre qué hace un buen conjunto de datos.

### Solución de problemas

En Linux, si las teclas de flecha izquierda y derecha y la tecla escape no tienen efecto durante la grabación de datos, asegúrate de haber establecido la variable de entorno `$DISPLAY`. Ver [limitaciones de pynput](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::

### Versión cableada

Si tienes la versión **cableada** de LeKiwi, por favor ejecuta todos los comandos incluyendo ambos comandos de grabación de conjunto de datos en tu laptop.


## Reproducir un episodio

Para reproducir un episodio ejecuta el ejemplo de API a continuación, asegúrate de cambiar `remote_ip`, `port`, LeRobotDatasetId e índice del episodio. El archivo está bajo esa ruta `examples/lekiwi/replay.py`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/Replay an episode.png" />
</div>

Ejecuta el siguiente comando:

```bash
python examples/lekiwi/replay.py
```

## Entrenar una política

Para entrenar una política para controlar tu robot, usa el script `python lerobot/scripts/train.py`. Se requieren algunos argumentos. Aquí hay un comando de ejemplo:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true # You can choose false if you don't need wandb
```

Vamos a explicarlo:

1. Proporcionamos el conjunto de datos como argumento con `--dataset.repo_id=${HF_USER}/lekiwi_test`.
2. Proporcionamos la política con `policy.type=act`. Esto carga configuraciones desde `configuration_act.py`. Importante, esta política se adaptará automáticamente al número de estados del motor, acciones del motor y cámaras de tu robot (ej. `laptop` y `phone`) que han sido guardados en tu conjunto de datos.
4. Proporcionamos `policy.device=cuda` ya que estamos entrenando en una GPU Nvidia, pero podrías usar `policy.device=mps` para entrenar en silicio de Apple.
5. Proporcionamos `wandb.enable=true` para usar [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar gráficos de entrenamiento. Esto es opcional pero si lo usas, asegúrate de estar conectado ejecutando `wandb login`.

El entrenamiento debería tomar varias horas. Encontrarás puntos de control en `outputs/train/act_lekiwi_test/checkpoints`.

## Evalúa tu política

Para evaluar tu política ejecuta el ejemplo de API `evaluate.py`, asegúrate de cambiar `remote_ip`, `port`, modelo..

La ruta es `examples/lekiwi/evaluate.py`.
<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/evaluation.png" />
</div>

```bash
python examples/lekiwi/evaluate.py
```

Como puedes ver, es casi el mismo comando que se usó previamente para grabar tu conjunto de datos de entrenamiento. Dos cosas cambiaron:

1. Hay un argumento adicional `policy` que indica la ruta a tu punto de control de política con (ej. `outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`). También puedes usar el repositorio del modelo si subiste un punto de control del modelo al hub (ej. `${HF_USER}/act_lekiwi_test`).
2. El nombre del conjunto de datos comienza por `eval` para reflejar que estás ejecutando inferencia (ej. `${HF_USER}/eval_act_lekiwi_test`).

## Ayuda 🙋‍

Para problemas de hardware, por favor contacta al servicio al cliente. Para preguntas de uso, únete a Discord.

[Plataforma LeRobot](https://github.com/huggingface/lerobot)

[Canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
