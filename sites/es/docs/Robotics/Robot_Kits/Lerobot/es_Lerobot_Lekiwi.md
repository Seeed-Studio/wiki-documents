---
description: Este wiki proporciona el tutorial de ensamblaje y depuración para Lekiwi y permite la recopilación de datos y el entrenamiento dentro del framework Lerobot.
title: SO-Arm con Lekiwi
keywords:
  - Lerobot
  - Huggingface
  - Car
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /lerobot_lekiwi
sku: 114090065,E2025090401
last_update:
  date: 11/12/2025
  author: Li shanghang
translation:
  skip: [zh-CN]
createdAt: '2025-05-28'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/lerobot_lekiwi/
---

# Cómo usar Lekiwi en Lerobot

:::tip

Este repositorio de tutoriales mantiene la versión estable verificada de Lerobot a fecha del 5 de junio de 2025. Actualmente, Hugging Face ha lanzado una actualización importante de Lerobot, introduciendo muchas funciones nuevas. Si quieres experimentar los tutoriales más recientes, sigue la [documentación oficial para obtener orientación](https://huggingface.co/docs/lerobot/lekiwi).

:::

## Introducción

El [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) es un proyecto de coche robótico totalmente de código abierto lanzado por [SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC). Incluye archivos detallados de impresión 3D y guías de operación, diseñado para ser compatible con el framework de aprendizaje por imitación [LeRobot](https://github.com/huggingface/lerobot/tree/main). Es compatible con el brazo robótico SO101 para habilitar una canalización completa de aprendizaje por imitación,

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características principales

1. **Código abierto y bajo coste**: Es una solución de coche robótico de código abierto y bajo coste de [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)
2. **Integración con LeRobot**: Diseñado para la integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Abundantes recursos de aprendizaje**: Proporciona completos recursos de aprendizaje de código abierto como guías de ensamblaje y calibración, y tutoriales para pruebas, recopilación de datos, entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**: Despliega este kit de brazo con reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicación en múltiples escenarios**: Es aplicable a campos como la educación, la investigación científica, la producción automatizada y la robótica, ayudando a los usuarios a lograr operaciones robóticas eficientes y precisas en diversas tareas complejas.

:::caution

Seeed Studio solo es responsable de la calidad del hardware en sí. Los tutoriales se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o de dependencias de entorno que no puedan resolverse, informa del problema de inmediato en la [plataforma LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

:::danger

- Todos los servomotores del chasis de LeKiwi requieren una fuente de alimentación de 12 V. Para los usuarios con brazos robóticos de 5 V, proporcionamos un módulo convertidor reductor de 12 V a 5 V. Ten en cuenta que será necesario que realices una modificación del circuito.

- Una fuente de alimentación de 12 V: puedes seleccionar esta opción al finalizar la compra si es necesario. Si ya dispones de una fuente de alimentación de 12 V, puedes omitir esta opción y simplemente convertir el conector de salida de tu fuente a un enchufe DC 5521.

- Controlador y cámara Raspberry Pi: deben comprarse por separado a través de la interfaz de pedido.

:::

## Especificaciones

| Tipo | Lekiwi |
|--|--|
|  Servomotores | 3x 12v STS3215 1:345 Gear Rate|
| Fuente de alimentación | 12V DC o batería |
| Sensor de ángulo| Codificador magnético de 12 bits |
| Rango de temperatura de funcionamiento recomendado | 0℃～40℃ |
| Método de comunicación| UART |
| Método de control | PC |

## Lista de materiales (BOM)

| Parte | Cantidad | Incluido|
|--|--|--|
| STS3215 1:345 12V Servomotores | 3 | ✅ |
| Rueda omnidireccional/rueda universal | 3 | ✅ |
| Carcasa impresa en 3D de Lekiwi | 1 | ✅ |
| Módulo reductor de potencia DC-DC - 24V/12V a 5V | 1 | ✅ |
| Placa de control de motor | 1 | ✅ |
| Cable en Y DC macho a doble DC macho 5521 | 1 | ✅ |
| Cable USB;Type C 2.0 a Type C 2.0-Negro;L150mm| 1 | ✅ |
| Cable USB 3.1 Type C a A 0.5 metros | 1 | ✅ |
| Adaptador de corriente con enchufe;Negro-12V-2A AC/DC | 1 | ✅ |
| Surtido de tornillos M2 M3 M4 | Suficiente | ✅ |
| Raspberry Pi | 1 | Opción |
| Cámara USB | 1 | Opción |
| Cámara de profundidad | 2 | Opción |
| SO-ARM101 Pro | 1 | Opción |
| Batería de iones de litio de alta capacidad de 12V E326S| 1 | Opción |

## Entorno inicial del sistema

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.0+
- Python 3.12
- Torch 2.6  

**Para Raspberry Pi:**

- Raspberry Pi5 4G~16G

## Guía de impresión 3D

### Piezas

Proporcionamos archivos STL listos para imprimir para las piezas impresas en 3D que se indican a continuación. Se pueden imprimir con filamento PLA genérico en impresoras FDM de consumo. Hicimos pruebas en una impresora Bambu Lab P1S. Para todos los componentes, simplemente los cargamos en bambuslicer, aplicamos auto-rotar y auto-organizar, activamos los soportes recomendados y los imprimimos.

| Ítem | Cantidad | Notas |
|:---|:---:|:---:|
| [Placa base superior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [Placa base inferior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [Soporte del motor de tracción](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [Cubo de rueda del servo](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | Usar soportes|
| [Caja RasPi superior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [Caja RasPi inferior](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [soporte base](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) y [soporte de muñeca](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **Compatible con [esta cámara](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)** |
| Webcam [soporte base](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl), [inserto de pinza](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl) y [soporte de muñeca](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **Compatible con [esta cámara](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)** |

### Parámetros de impresión

Los archivos STL proporcionados están listos para imprimirse en muchas impresoras FDM. A continuación se indican los ajustes probados y sugeridos, aunque otros también pueden funcionar.

- Material: PLA+
- Diámetro de la boquilla y precisión: boquilla de 0,2 mm con altura de capa de 0,2 mm
- Densidad de relleno: 15%  
- Velocidad de impresión: 150 mm/s
- Si es necesario, sube el G-code (archivo de corte) a la impresora e imprime

## Instalar LeRobot

En tu Raspberry Pi:

### 1. [Instalar Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. Reiniciar la shell

Copia y pega en tu shell: `source ~/.bashrc` o para Mac: `source ~/.bash_profile` o `source ~/.zshrc` si usas zshell

### 3. Crear y activar un entorno conda nuevo para lerobot

```bash
conda create -y -n lerobot python=3.12
```

Luego activa tu entorno conda (haz esto cada vez que abras una shell para usar lerobot):

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

## Instalar LeRobot en el portátil (PC)

Si ya has instalado LeRobot en tu portátil puedes omitir este paso; de lo contrario, sigue las mismas instrucciones que usamos en la Pi.

:::tip
Usamos la línea de comandos (cmd) con bastante frecuencia. Si no te sientes cómodo usando cmd o quieres repasar el uso de la línea de comandos, puedes echar un vistazo aquí: [Curso intensivo de línea de comandos](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
:::

En tu ordenador:

### 1. [Instalar Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. Reiniciar la shell

Copia y pega en tu shell: `source ~/.bashrc` o para Mac: `source ~/.bash_profile` o `source ~/.zshrc` si usas zshell

### 3. Crear y activar un entorno conda nuevo para lerobot

```bash
conda create -y -n lerobot python=3.12
```

Luego activa tu entorno conda (haz esto cada vez que abras una shell para usar lerobot):

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

### Tutorial en vídeo

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/_QjhOMSnobU?si=xjhfCztoWZcFwW6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/62_JWFpvJyA?si=0YCwKUJgy0YVL-A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/r0LtrTidWdA?si=MEdIJ5XzI8-wbpDo" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/qk1iYHW-0qg?si=0zXmcVIkBXJcf1M5" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/RYu7WLpi7jw?si=Tjc5_4-WLE2xyNWr" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/q7zp4qIFdnM?si=fIYgI_3xbrWL7wUM" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### El siguiente es un tutorial fotográfico

Puedes consultar el [tutorial de ensamblaje](https://github.com/SIGRobotics-UIUC/LeKiwi) oficial.

Al recibir las piezas impresas, todos los componentes impresos son como se muestra a continuación.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. Fija el motor de accionamiento al soporte del motor usando 12 tornillos autorroscantes m2x6.**

| **Paso 1** | **Paso 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. Atornilla el soporte del motor de accionamiento a la placa base inferior usando 12 tornillos de máquina m3x16.**

:::tip
Recuerda la disposición de los ID: 8 representa la rueda trasera, mientras que 7 y 9 corresponden respectivamente a las ruedas delantera izquierda y delantera derecha.
:::

| **Paso 1** | **Paso 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. Fija el cubo de la rueda a la omniwheel.**

**Paso 1 y Paso 2**: Retira los tres tornillos.

| **Paso 1** | **Paso 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**Paso 3 y Paso 4**: Fija el cubo de la rueda a la omniwheel usando 9 tornillos de máquina m4x18.

| **Paso 3** | **Paso 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. Fija el brazo del servo al cubo de la rueda usando 6 tornillos de máquina m3x16.**

| **Paso 1** | **Paso 2** |**Paso 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. Fija el brazo del servo al motor de accionamiento usando 3 tornillos de máquina m3x10.**

| **Paso 1** | **Paso 2** |**Paso 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. Añade el controlador de servos y conecta todos los circuitos.**

| **Paso 1** | **Paso 2** |**Paso 3** |**Paso 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **Paso 5** | **Paso 6** |**Paso 7** |**Paso 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

La **Power IN** se conecta directamente a la fuente de alimentación, como en el Paso 8, mientras que el puerto **USB-C** proporciona alimentación de 5V a la Raspberry Pi.  

Para los **terminales de 2 pines adicionales (5V y 12V)**:  

- Si utilizas un **brazo robótico SO10x de 7,4V**, alimenta la **placa de motores servo** a través de la **salida de 5V**.  
- Si utilizas un **brazo robótico de 12V**, alimenta la **placa de motores servo** directamente desde el **divisor de alimentación de CC**, como en el Paso 8.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. Ahora puedes proceder a montar la Raspberry Pi en la placa superior de la segunda capa del vehículo. Antes de hacerlo, conecta tanto el **cable de alimentación USB-C** como el **cable de comunicación del motor servo USB-C**, y luego guíalos hacia afuera a través del panel superior del vehículo.**

**Paso 1** Conecta el cable de alimentación a tu Raspberry Pi y pásalo a través de la abertura central del panel superior.

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**Paso 2** Entre los tres servomotores del chasis, hay un servo que solo tiene un cable conectado. Si necesitas instalar el brazo robótico SO10x, por favor: Retira el cable ID1 del brazo robótico. Conéctalo al motor del chasis. Pásalo a través del panel superior como un cable reservado.

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**Paso 3** Ahora puedes conectar el USB-C desde la placa controladora de servos al puerto USB de la Raspberry Pi.

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. Ahora necesitas fijar la Raspberry Pi y las piezas restantes de la placa superior usando 12 tornillos M3×16.**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. Ahora puedes instalar la cámara USB y el Follower Arm usando 1 tornillo M3x16 y 4 tornillos M5×25**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) |
| ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

Y asegúrate de que tanto el cable de control del servo como la cámara USB estén conectados a la Raspberry Pi.

|  |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

:::tip
Comprueba las conexiones del circuito; después del ensamblaje, el Lekiwi debe estar conectado a la placa de desarrollo (Raspberry Pi / Jetson). El brazo líder debe estar conectado a tu PC.

| Lekiwi --> Raspberry Pi / Jetson |

| Leader arm --> PC                |
:::

## Configurar los motores

### Brazo líder

Para encontrar el puerto de cada adaptador de servos en bus, ejecuta este script:

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

Ejemplo de salida al identificar el puerto (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Ejemplo de salida al identificar el puerto (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

:::tip

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.
```

Recuerda retirar el USB y luego presionar Enter, de lo contrario la interfaz no será detectada.
:::

Solución de problemas: En Linux, puede que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```


### Lekiwi

Debes seguir el comando anterior para encontrar el USB correcto y configurar los motores.

Las instrucciones para configurar los motores se pueden encontrar en la [documentación](https://huggingface.co/docs/lerobot/lekiwi) de SO101 (igual que para el brazo líder). Además de los ID de los motores del brazo, también necesitamos establecer los ID de los motores para la base móvil. Estos deben estar en un orden específico para que funcionen. A continuación se muestra una imagen de los ID de los motores y las posiciones de montaje de los motores para la base móvil. Ten en cuenta que solo usamos una placa de control de motores en LeKiwi. Esto significa que los ID de los motores para las ruedas son 7, 8 y 9.

Puedes ejecutar este comando para configurar los motores de LeKiwi. Primero configurará los motores del brazo (id 6..1) y luego configurará los motores de las ruedas (9,8,7).

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

Ahora tenemos que calibrar el brazo líder y el brazo seguidor. Los motores de las ruedas no tienen que calibrarse. El proceso de calibración es muy importante porque permite que una red neuronal entrenada en un robot funcione en otro.

### Calibrar el brazo seguidor (en la base móvil)

Asegúrate de que el brazo esté conectado a la Raspberry Pi y ejecuta este script o ejemplo de API (en la Raspberry Pi vía SSH) para iniciar la calibración del brazo seguidor:

```bash
lerobot-calibrate \
    --robot.type=lekiwi \
    --robot.id=my_awesome_kiwi # <- Give the robot a unique name
```

Unificamos el método de calibración para la mayoría de los robots, por lo tanto, los pasos de calibración para este brazo SO100 son los mismos que los pasos para el Koch y el SO101. Primero, tenemos que mover el robot a la posición en la que cada articulación esté en el centro de su rango y luego presionar `Enter`. En segundo lugar, movemos todas las articulaciones a través de todo su rango de movimiento. Un video de este mismo proceso para el SO101 como referencia se puede encontrar [aquí](https://huggingface.co/docs/lerobot/lekiwi).

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Versión con cable

Si tienes la versión con cable de LeKiwi, ejecuta todos los comandos en tu portátil.

### Calibrar el brazo líder

Luego, para calibrar el brazo líder (que está conectado al portátil/PC). Ejecuta el siguiente comando o ejemplo de API en tu portátil:

```bash
lerobot-calibrate \
    --teleop.type=so100_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_awesome_leader_arm # <- Give the robot a unique name
```

## Teleoperar LeKiwi

:::tip
Si usas un Mac, es posible que tengas que dar permiso a Terminal para acceder a tu teclado. Ve a System Preferences > Security & Privacy > Input Monitoring y marca la casilla para Terminal.
:::

Para teleoperar, haz SSH en tu Raspberry Pi y ejecuta `conda activate lerobot` y este script:

```bash
python -m lerobot.robots.lekiwi.lekiwi_host --robot.id=my_awesome_kiwi
```

Luego, en tu portátil, también ejecuta `conda activate lerobot` y ejecuta el ejemplo de API, asegurándote de configurar el `remote_ip` y el `port` correctos en `examples/lekiwi/teleoperate.py`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/teleoperate.png" />
</div>

```bash
python examples/lekiwi/teleoperate.py
```

Deberías ver en tu portátil algo como esto: ```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` Ahora puedes mover el brazo líder y usar el teclado (w,a,s,d) para avanzar, ir a la izquierda, retroceder, ir a la derecha. Y usar (z,x) para girar a la izquierda o a la derecha. Puedes usar (r,f) para aumentar y disminuir la velocidad del robot móvil. Hay tres modos de velocidad, consulta la tabla siguiente:

| Modo de velocidad | Velocidad lineal (m/s) | Velocidad de rotación (deg/s) |
| ---------------- | ---------------------- | ----------------------------- |
| Rápido           | 0.4                    | 90                            |
| Medio            | 0.25                   | 60                            |
| Lento            | 0.1                    | 30                            |

| Tecla | Acción            |
| ----- | ----------------- |
| W     | Avanzar           |
| A     | Mover a la izquierda |
| S     | Retroceder        |
| D     | Mover a la derecha |
| Z     | Girar a la izquierda |
| X     | Girar a la derecha |
| R     | Aumentar velocidad |
| F     | Disminuir velocidad |

:::tip
Si usas un teclado diferente puedes cambiar las teclas para cada comando en la `LeKiwiRobotConfig`.
:::

### Versión con cable

Si tienes la versión **con cable** de LeKiwi, ejecuta todos los comandos, incluidos estos dos comandos de teleoperación, en tu portátil.

## Solucionar problemas de comunicación

Si tienes problemas para conectarte al Mobile SO100, sigue estos pasos para diagnosticar y resolver el problema.

### 1. Verificar la configuración de la IP

Asegúrate de que la IP correcta de la Pi esté configurada en el archivo de configuración. Para comprobar la dirección IP de la Raspberry Pi, ejecuta (en la línea de comandos de la Pi):

```bash
hostname -I
```

### 2. Comprobar si la Pi es accesible desde el portátil/PC

Intenta hacer ping a la Raspberry Pi desde tu portátil:

```bach
ping <your_pi_ip_address>
```

Si el ping falla:

- Asegúrate de que la Pi esté encendida y conectada a la misma red.
- Comprueba que SSH esté habilitado en la Pi.

### 3. Probar la conexión SSH

Si no puedes hacer SSH en la Pi, puede que no esté conectada correctamente. Usa:

```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```

Si obtienes un error de conexión:

- Asegúrate de que SSH esté habilitado en la Pi ejecutando:

  ```bash
  sudo raspi-config
  ```

  Luego navega hasta: **Interfacing Options -> SSH** y actívalo.

### 4. Mismo archivo de configuración

Asegúrate de que el archivo de configuración en tu portátil/PC y en la Raspberry Pi sea el mismo.

## Registrar un conjunto de datos

Una vez que estés familiarizado con la teleoperación, puedes registrar tu primer conjunto de datos con LeKiwi.

Usamos las funciones de Hugging Face hub para subir tu conjunto de datos. Si no has usado antes el Hub, asegúrate de poder iniciar sesión a través de la CLI usando un token con permisos de escritura; este token se puede generar desde los [ajustes de Hugging Face](https://huggingface.co/settings/tokens).

Añade tu token a la CLI ejecutando este comando:

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Luego guarda el nombre de tu repositorio de Hugging Face en una variable:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Ahora puedes registrar un conjunto de datos. Para registrar episodios y subir tu conjunto de datos al hub, ejecuta este ejemplo de API adaptado para LeKiwi. Asegúrate primero de adaptar el `remote_ip`, `repo_id`, `port` y `task` en el script. Si quieres ejecutar el script durante más tiempo puedes aumentar `NB_CYCLES_CLIENT_CONNECTION`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/record.png" />
</div>

```bash
python examples/lekiwi/record.py
```

Subida del conjunto de datos

Localmente, tu conjunto de datos se almacena en esta carpeta: `~/.cache/huggingface/lerobot/{repo-id}`. Al final de la grabación de datos, tu conjunto de datos se subirá a tu página de Hugging Face (por ejemplo, https://huggingface.co/datasets/cadene/so101_test) que puedes obtener ejecutando:

```bash
echo https://huggingface.co/datasets/${HF_USER}/so101_test
```

Tu conjunto de datos se etiquetará automáticamente con `LeRobot` para que la comunidad pueda encontrarlo fácilmente, y también puedes añadir etiquetas personalizadas (en este caso `tutorial`, por ejemplo).

Puedes buscar otros conjuntos de datos de LeRobot en el hub buscando las [tags](https://huggingface.co/datasets?other=LeRobot) `LeRobot`.

:::tip

### Consejos para recopilar datos

Una vez que te sientas cómodo con la grabación de datos, puedes crear un conjunto de datos más grande para el entrenamiento. Una tarea inicial adecuada es agarrar un objeto en diferentes ubicaciones y colocarlo en un contenedor. Sugerimos registrar al menos 50 episodios, con 10 episodios por ubicación. Mantén las cámaras fijas y un comportamiento de agarre consistente durante todas las grabaciones. Asegúrate también de que el objeto que estás manipulando sea visible en las cámaras. Una buena regla general es que deberías ser capaz de realizar la tarea tú mismo solo mirando las imágenes de la cámara.

En las siguientes secciones entrenarás tu red neuronal. Después de lograr un rendimiento de agarre fiable, puedes empezar a introducir más variaciones durante la recopilación de datos, como ubicaciones de agarre adicionales, diferentes técnicas de agarre y cambios en las posiciones de las cámaras.

Evita añadir demasiada variación demasiado rápido, ya que podría perjudicar tus resultados.

Si quieres profundizar en este tema importante, puedes consultar la [entrada](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) del [blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escribimos sobre qué hace que un conjunto de datos sea bueno.

### Solución de problemas

En Linux, si las teclas de flecha izquierda y derecha y la tecla Escape no tienen ningún efecto durante la grabación de datos, asegúrate de haber configurado la variable de entorno `$DISPLAY`. Consulta las [limitaciones de pynput](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::

### Versión con cable

Si tienes la versión **con cable** de LeKiwi, ejecuta todos los comandos, incluidos estos comandos para registrar conjuntos de datos, en tu portátil.


## Reproducir un episodio

Para reproducir un episodio, ejecuta el ejemplo de API que aparece a continuación, asegurándote de cambiar `remote_ip`, `port`, LeRobotDatasetId e índice del episodio. El archivo está en la ruta `examples/lekiwi/replay.py`.

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/Replay an episode.png" />
</div>

Ejecuta el siguiente comando:

```bash
python examples/lekiwi/replay.py
```

## Entrenar una política

Para entrenar una política que controle tu robot, usa el script `python lerobot/scripts/train.py`. Se requieren algunos argumentos. Aquí tienes un comando de ejemplo:

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true # You can choose false if you don't need wandb
```

Expliquémoslo:

1. Proporcionamos el conjunto de datos como argumento con `--dataset.repo_id=${HF_USER}/lekiwi_test`.
2. Proporcionamos la política con `policy.type=act`. Esto carga las configuraciones desde `configuration_act.py`. Es importante destacar que esta política se adaptará automáticamente al número de estados de motor, acciones de motor y cámaras de tu robot (por ejemplo, `laptop` y `phone`) que se hayan guardado en tu conjunto de datos.
4. Proporcionamos `policy.device=cuda` ya que estamos entrenando en una GPU Nvidia, pero podrías usar `policy.device=mps` para entrenar en Apple silicon.
5. Proporcionamos `wandb.enable=true` para usar [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar las gráficas de entrenamiento. Esto es opcional, pero si lo utilizas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

El entrenamiento debería tomar varias horas. Encontrarás los checkpoints en `outputs/train/act_lekiwi_test/checkpoints`.

## Evalúa tu política

Para evaluar tu política ejecuta el ejemplo de API `evaluate.py`, asegúrate de cambiar `remote_ip`, `port`, model..

La ruta es `examples/lekiwi/evaluate.py`.
<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/evaluation.png" />
</div>

```bash
python examples/lekiwi/evaluate.py
```

Como puedes ver, es casi el mismo comando que se usó anteriormente para registrar tu conjunto de datos de entrenamiento. Dos cosas cambiaron:

1. Hay un argumento adicional `policy` que indica la ruta a tu checkpoint de política (por ejemplo, `outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`). También puedes usar el repositorio del modelo si subiste un checkpoint del modelo al hub (por ejemplo, `${HF_USER}/act_lekiwi_test`).
2. El nombre del conjunto de datos comienza por `eval` para reflejar que estás ejecutando inferencia (por ejemplo, `${HF_USER}/eval_act_lekiwi_test`).

## Ayuda 🙋‍

Para problemas de hardware, ponte en contacto con el servicio de atención al cliente. Para preguntas de uso, únete a Discord.

[Plataforma LeRobot](https://github.com/huggingface/lerobot)

[Canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU)

## Soporte técnico y debate sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
