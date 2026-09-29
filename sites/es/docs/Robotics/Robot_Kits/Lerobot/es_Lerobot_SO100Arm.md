---
description: Este wiki proporciona el tutorial de ensamblaje y depuración para el SO ARM100 y permite la recopilación de datos y el entrenamiento dentro del framework Lerobot.
title: Cómo usar el brazo robótico SO10xArm en Lerobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
createdAt: '2025-06-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/lerobot_so100m/
---

# Primeros pasos con los brazos robóticos SO-ARM100 y SO-ARM101 con LeRobot

:::tip
El mantenimiento de este tutorial se ha actualizado a la última versión de [lerobot](https://huggingface.co/docs/lerobot/index); si deseas consultar el tutorial de la versión anterior, haz clic [aquí](https://wiki.seeedstudio.com/es/lerobot_so100m/).
:::

## Introducción

El [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico totalmente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye el brazo seguidor y el brazo robótico líder, y también proporciona archivos detallados de impresión 3D y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para robótica en el mundo real en PyTorch. Su objetivo es reducir la barrera de entrada a la robótica, permitiendo que todos contribuyan y se beneficien compartiendo conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones en el mundo real, centrándose en el aprendizaje por imitación. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, lo que permite a los usuarios comenzar sin necesidad de ensamblar robots. En las próximas semanas, la intención es aumentar el soporte para robótica en el mundo real en los robots más rentables y competentes actualmente disponibles.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introducción de proyectos

El kit de robot inteligente SO-ARM10x y reComputer Jetson AI combina a la perfección el control de brazo robótico de alta precisión con una potente plataforma de computación de IA, proporcionando una solución integral de desarrollo de robots. Este kit se basa en la plataforma Jetson Orin o AGX Orin, combinada con el brazo robótico SO-ARM10x y el framework de IA LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.
Este wiki proporciona el tutorial de ensamblaje y depuración para el SO ARM10x y permite la recopilación de datos y el entrenamiento dentro del framework Lerobot.

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características principales

1. **Código abierto y bajo costo**: Es una solución de brazo robótico de código abierto y bajo costo de [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)
2. **Integración con LeRobot**: Diseñado para integrarse con la [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Abundantes recursos de aprendizaje**: Proporciona completos recursos de aprendizaje de código abierto como guías de ensamblaje y calibración, y tutoriales para pruebas, recopilación de datos, entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**: Despliega este kit de brazo con reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicación en múltiples escenarios**: Es aplicable a campos como educación, investigación científica, producción automatizada y robótica, ayudando a los usuarios a lograr operaciones robóticas eficientes y precisas en diversas tareas complejas.

## Novedades：

- Optimización del cableado: En comparación con SO-ARM100, SO-ARM101 presenta un cableado mejorado que evita los problemas de desconexión observados anteriormente en la articulación 3. El nuevo diseño de cableado tampoco limita el rango de movimiento de las articulaciones.
- Diferentes relaciones de engranajes para el brazo líder: El brazo líder ahora utiliza motores con relaciones de engranajes optimizadas, mejorando el rendimiento y eliminando la necesidad de cajas de engranajes externas.
- Nuevo soporte de funcionalidad: El brazo líder ahora puede seguir al brazo seguidor en tiempo real, lo cual es crucial para la próxima política de aprendizaje, donde un humano puede intervenir y corregir las acciones del robot.

:::caution

Seeed Studio solo es responsable de la calidad del hardware en sí. Los tutoriales se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o de dependencias de entorno que no puedan resolverse, además de consultar la sección de Preguntas Frecuentes (FAQ) al final de este tutorial, informa el problema de inmediato en la [plataforma LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Brazo líder</td>
      <td rowSpan="2">12x motores ST-3215- C001 (7.4V) con relación de engranajes 1:345 para todas las articulaciones</td>
      <td rowSpan="2">12x motores ST-3215-C018/ST-3215-C047 (12V) con relación de engranajes 1:345 para todas las articulaciones</td>
      <td colSpan="2">
        1x motor ST-3215- C001 (7.4V) con relación de engranajes 1:345 solo para la articulación 2<br />
        2x motores ST-3215-C044 (7.4V) con relación de engranajes 1:191 para las articulaciones 1 y 3<br />
        3x motores ST-3215-C046 (7.4V) con relación de engranajes 1:147 para las articulaciones 4, 5 y la pinza (articulación 6)
      </td>
    </tr>
    <tr>
      <td>Brazo seguidor</td>
      <td colSpan="2">Igual que SO-ARM100</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A (Brazo seguidor)<br />
        5.5 mm × 2.1 mm DC 5 V 4 A (Brazo líder)
      </td>
    </tr>
    <tr>
      <td>Sensor de ángulo</td>
      <td colSpan="4">Codificador magnético de 12 bits</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento recomendada</td>
      <td colSpan="4">0 °C a 40 °C</td>
    </tr>
    <tr>
      <td>Comunicación</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>Método de control</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Si compras la versión Arm Kit, ambas fuentes de alimentación son de 5V. Si compras la versión Arm Kit Pro, utiliza la fuente de alimentación de 5V para la calibración y cada paso del brazo robótico líder, y la fuente de alimentación de 12V para la calibración y cada paso del brazo robótico seguidor.

:::

## Lista de materiales (BOM)

| Parte | Cantidad | Incluido|
|--|--|--|
|  Servo Motos | 12 | ✅ |
| Placa de control de motor | 2 | ✅ |
| Cable USB-C 2 pcs | 1 | ✅ |
| Fuente de alimentación2 | 2 | ✅ |
| Abrazadera de mesa| 4 | ✅ |
| Piezas impresas en 3D del brazo | 1 | Opción |

## Entorno inicial del sistema

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6+  

**Para Jetson Orin:**

- Jetson JetPack 6.0 y 6.1, no compatible con 6.1
- Python 3.12
- Torch 2.3+

## Tabla de contenidos

  [A. Guía de impresión 3D](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#instalar-lerobot)

  [B. Instalar LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#instalar-lerobot)

  [C. Configurar los motores](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#configurar-los-motores)

  [D. Ensamblaje](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#ensamblaje)

  [E. Calibrar](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#calibrar)

  [F. Teleoperar](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#teleoperar)

  [G. Añadir cámaras](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#añadir-cámaras)

  [H. Registrar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#registrar-el-conjunto-de-datos)

  [I. Visualizar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#visualizar-el-conjunto-de-datos)

  [J. Reproducir un episodio](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#reproducir-un-episodio)

  [K. Entrenar una política](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#entrenar-una-política)

  [L. Evaluar tu política](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#evaluar-tu-política)

## Guía de impresión 3D

:::caution
Tras la actualización oficial de SO101, SO100 ya no será compatible y los archivos fuente se eliminarán según lo indicado oficialmente, pero aún se pueden encontrar los archivos fuente en nuestro [Makerworld](https://makerworld.com/zh/models/908660). Sin embargo, para los usuarios que hayan comprado previamente SO100, los tutoriales y métodos de instalación siguen siendo compatibles. La impresión de SO101 es totalmente compatible con la instalación del kit de motor de SO100.
:::

### Paso 1: Elegir una impresora

Los archivos STL proporcionados están listos para imprimirse en muchas impresoras FDM. A continuación se muestran los ajustes probados y sugeridos, aunque otros también pueden funcionar.

- Material: PLA+
- Diámetro de la boquilla y precisión: boquilla de 0.4mm de diámetro con altura de capa de 0.2mm o boquilla de 0.6mm con altura de capa de 0.4mm.
- Densidad de relleno: 15%  

### Paso 2: Configurar la impresora

- Asegúrate de que la impresora esté calibrada y de que la cama esté correctamente nivelada utilizando las instrucciones específicas de la impresora.
- Limpia la cama de impresión, asegurándote de que esté libre de polvo o grasa. Si limpias la cama con agua u otro líquido, sécala.
- Si tu impresora lo recomienda, utiliza un pegamento en barra estándar y aplica una capa fina y uniforme de pegamento en el área de impresión de la cama. Evita los grumos o la aplicación desigual.
- Carga el filamento de la impresora utilizando las instrucciones específicas de la impresora.
- Asegúrate de que la configuración de la impresora coincida con la sugerida anteriormente (la mayoría de las impresoras tienen múltiples configuraciones, así que elige las que más se acerquen).
- Configura soportes en todas partes, pero ignora las pendientes mayores de 45 grados con respecto a la horizontal.
- No debe haber soportes en los orificios de los tornillos con ejes horizontales.

### Paso 3: Imprime las piezas

Todas las piezas para el líder o el seguidor ya están contenidas en un único archivo para facilitar la impresión 3D, correctamente orientadas con el eje z hacia arriba para minimizar los soportes.

- Para camas de impresora de 220mmx220mm (como la Ender), imprime estos archivos:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para camas de impresora de 205mm x 250mm (como la Prusa/Up):
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Instalar LeRobot

Entornos como pytorch y torchvision deben instalarse en función de tu versión de CUDA.

1. Instala Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

O, para X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crea y activa un entorno conda nuevo para lerobot

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

3. Clona Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Cuando uses miniconda, instala ffmpeg en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto normalmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (comprueba los codificadores compatibles con ffmpeg -encoders), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instalar las dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegurarte de usar el binario de ffmpeg correspondiente a tu instalación con which ffmpeg.

Si encuentras un error como este, también puedes usar este comando.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. Instala LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Para dispositivos Jetson Jetpack 6.0+ (asegúrate de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) desde el paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Comprueba Pytorch y Torchvision

Dado que instalar el entorno lerobot mediante pip desinstalará las versiones originales de Pytorch y Torchvision e instalará las versiones de CPU de Pytorch y Torchvision, necesitas realizar una comprobación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesitas reinstalar Pytorch y Torchvision de acuerdo con el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si estás usando un dispositivo Jetson, instala Pytorch y Torchvision de acuerdo con [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configurar los motores

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

El proceso de calibración e inicialización del servo para el SO-ARM101 es el mismo que el del SO-ARM100 tanto en método como en código. Sin embargo, ten en cuenta que las relaciones de engranajes de las tres primeras articulaciones del brazo líder SO-ARM101 difieren de las del SO-ARM100, por lo que es importante distinguirlas y calibrarlas cuidadosamente.

Para configurar los motores, asigna un adaptador de bus servo y 6 motores para tu brazo líder, y de manera similar el otro adaptador de bus servo y 6 motores para el brazo seguidor. Es conveniente etiquetarlos y escribir en cada motor si es para el seguidor F o para el líder L y su ID del 1 al 6. Usamos **F1–F6** para representar las articulaciones 1 a 6 del **Brazo Seguidor**, y **L1–L6** para representar las articulaciones 1 a 6 del **Brazo Líder**. El modelo de servo correspondiente, la asignación de articulaciones y los detalles de la relación de engranajes son los siguientes:

| Modelo de servo                            | Relación de engranajes | Articulaciones correspondientes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Ahora debes conectar la fuente de alimentación de 5V o 12V al bus del motor. 5V para los motores STS3215 de 7.4V y 12V para los motores STS3215 de 12V. Ten en cuenta que el brazo líder siempre usa los motores de 7.4V, así que asegúrate de conectar la fuente de alimentación correcta si tienes motores de 12V y 7.4V, ¡de lo contrario podrías quemar tus motores! Ahora, conecta el bus del motor a tu ordenador mediante USB. Ten en cuenta que el USB no proporciona alimentación, y tanto la fuente de alimentación como el USB deben estar conectados.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***Los siguientes son los pasos de calibración del código, calibra con el servo de cableado de referencia en la imagen de arriba***

Encuentra los puertos USB asociados a tus brazos
Para encontrar los puertos correctos para cada brazo, ejecuta el script de utilidad dos veces:

```bash
lerobot-find-port
```

Salida de ejemplo:

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

:::tip
Recuerda retirar el usb, de lo contrario la interfaz no será detectada.
:::

Salida de ejemplo al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Salida de ejemplo al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configura tus motores**

:::danger
Utiliza una fuente de alimentación de 5V para calibrar los motores del Líder (ST-3215-C046, C044, 001).
:::

| **Calibración de la articulación 6 del Brazo Líder** | **Calibración de la articulación 5 del Brazo Líder** | **Calibración de la articulación 4 del Brazo Líder** | **Calibración de la articulación 3 del Brazo Líder** | **Calibración de la articulación 2 del Brazo Líder** | **Calibración de la articulación 1 del Brazo Líder** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Si compras la versión Arm Kit (ST-3215-C001), usa una fuente de alimentación de 5V. Si compras la versión Arm Kit Pro, utiliza una fuente de alimentación de 12V para calibrar el servo (ST-3215-C047/ST-3215-C018).
:::

| **Calibración de la articulación 6 del Brazo Seguidor** | **Calibración de la articulación 5 del Brazo Seguidor** | **Calibración de la articulación 4 del Brazo Seguidor** | **Calibración de la articulación 3 del Brazo Seguidor** | **Calibración de la articulación 2 del Brazo Seguidor** | **Calibración de la articulación 1 del Brazo Seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
De nuevo, asegúrate de que los IDs de las articulaciones del servo y las relaciones de engranajes correspondan estrictamente a las del SO-ARM101.
:::

Conecta el cable usb desde tu ordenador y la fuente de alimentación a la placa controladora del brazo seguidor. Luego, ejecuta el siguiente comando.

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

Deberías ver la siguiente instrucción.

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

Según las instrucciones, conecta el motor de la pinza. Asegúrate de que sea el único motor conectado a la placa y de que el propio motor aún no esté conectado en cadena con ningún otro motor. Cuando pulses [Enter], el script configurará automáticamente el id y la velocidad en baudios de ese motor.

Deberías ver entonces el siguiente mensaje:

```bash
'gripper' motor id set to 6
```

Seguido de la siguiente instrucción:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Puedes desconectar el cable de 3 pines de la placa controladora, pero puedes dejarlo conectado al motor de la pinza en el otro extremo, ya que ya estará en el lugar correcto. Ahora, conecta otro cable de 3 pines al motor de giro de muñeca y conéctalo a la placa controladora. Como con el motor anterior, asegúrate de que sea el único motor conectado a la placa y de que el propio motor no esté conectado a ningún otro.

:::caution
Repite la operación para cada motor según las instrucciones.
:::

:::tip
Comprueba el cableado en cada paso antes de pulsar Enter. Por ejemplo, el cable de alimentación podría desconectarse mientras manipulas la placa.
:::

Cuando termines, el script simplemente finalizará, momento en el cual los motores estarán listos para usarse. Ahora puedes conectar el cable de 3 pines de cada motor al siguiente, y el cable del primer motor (el “giro de hombro” con id=1) a la placa controladora, que ahora puede fijarse a la base del brazo.

Realiza los mismos pasos para el brazo líder.

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>

## Ensamblaje

:::tip

- El proceso de ensamblaje de doble brazo del SO-ARM101 es el mismo que el del SO-ARM100. Las únicas diferencias son la adición de clips para cables en el SO-ARM101 y las diferentes relaciones de engranajes de los servos de las articulaciones en el Brazo Líder. Por lo tanto, tanto el SO100 como el SO101 se pueden instalar haciendo referencia al siguiente contenido.
- Antes del ensamblaje, vuelve a comprobar el modelo de tu motor y la relación de reducción. Si has comprado el SO100, puedes ignorar este paso. Si has comprado el SO101, consulta la siguiente tabla para distinguir entre F1 a F6 y L1 a L6.

:::

  | Modelo de servo                            | Relación de engranajes | Articulaciones correspondientes |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso utilizando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso utilizando una fuente de alimentación de 12V.
:::

**Ensamblar el Brazo Líder**

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** | **Paso 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Paso 19** | **Paso 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Ensamblar el Brazo Seguidor**

:::tip

- Los pasos para ensamblar el Brazo Seguidor son, en general, los mismos que para el Brazo Líder. La única diferencia radica en el método de instalación del efector final (pinza y empuñadura) después del Paso 12.

:::

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## Calibración

:::tip
Los códigos de SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso utilizando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso utilizando una fuente de alimentación de 12V.
:::

A continuación, debes conectar la fuente de alimentación y el cable de datos a tu robot SO-10x para la calibración, a fin de garantizar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot SO-10x funcione en otro. Si necesitas recalibrar el brazo robótico, elimina los archivos en `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y vuelve a calibrar el brazo robótico. De lo contrario, aparecerá un mensaje de error. La información de calibración del brazo robótico se almacenará en los archivos JSON de este directorio.

**Calibración manual del brazo seguidor**

Conecta las interfaces de los 6 servos del robot mediante un cable de 3 pines y conecta el servo del chasis a la placa de accionamiento de servos, luego ejecuta el siguiente comando o ejemplo de API para calibrar el brazo robótico:

***Primero se otorgan los permisos de la interfaz***

```bash
sudo chmod 666 /dev/ttyACM*
```

***Luego calibra el brazo seguidor***

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \# <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name
```

El siguiente video muestra cómo realizar la calibración. Primero debes mover el robot a la posición en la que todas las articulaciones estén en el centro de sus rangos. Luego, después de pulsar Enter, debes mover cada articulación a través de todo su rango de movimiento.

**Calibración manual del brazo líder**

Realiza los mismos pasos para calibrar el brazo líder, ejecuta el siguiente comando o ejemplo de API:

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Teleoperar

**Teleoperación simple**
¡Entonces ya estás listo para teleoperar tu robot! Ejecuta este script sencillo (no se conectará ni mostrará las cámaras):

Ten en cuenta que el id asociado a un robot se utiliza para almacenar el archivo de calibración. Es importante usar el mismo id al teleoperar, grabar y evaluar cuando se utiliza la misma configuración.

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

El comando de teleoperación hará automáticamente lo siguiente:

1. Identificar cualquier calibración faltante e iniciar el procedimiento de calibración.
2. Conectar el robot y el dispositivo de teleoperación e iniciar la teleoperación.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Añadir cámaras

<details>
<summary> If using the Orbbec Gemini2 Depth Camera </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

- 🚀 Paso 1: Instalar el entorno dependiente del SDK de Orbbec

1. Clona el repositorio `pyorbbec`

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Descarga e instala el **archivo .whl** correspondiente para el SDK  
   Ve a [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   selecciona e instala según tu versión de Python. Por ejemplo:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Instala las dependencias en el directorio `pyorbbec`

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Fuerza la degradación de la versión de `numpy` a `1.26.0`

    ```bash
    pip install numpy==1.26.0
    ```

  Se pueden ignorar los mensajes de error en rojo.

4. Clona el SDK de Orbbec en el directorio `~/lerobot/src/cameras`

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modificar utils.py y **init**.py

- Busca `utils.py` en el directorio `~/lerobot/src/lerobot/cameras` y añade el siguiente código en la línea 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Busca `__init__.py` en el directorio `~/lerobot/src/lerobot/cameras` y añade el siguiente código en la línea 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Paso 2: Llamada de función y ejemplos

En todos los ejemplos siguientes, reemplaza `so101_follower` con el modelo real del brazo robótico que estés utilizando (por ejemplo, `so100` / `so101`).

Hemos añadido el hiperparámetro `focus_area`. Dado que los datos de profundidad que están demasiado lejos no tienen sentido para el brazo robótico (no puede alcanzar ni agarrar objetos), los datos de profundidad menores o mayores que el `focus_area` se mostrarán en negro. El `focus_area` predeterminado es (20, 600).  
Actualmente, la única resolución compatible es ancho: 640, alto: 880.

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

Para tareas posteriores como recopilación de datos, entrenamiento y evaluación, el proceso es el mismo que para los comandos RGB normales. Solo necesitas reemplazar la parte correspondiente en el comando RGB normal con:

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

También puedes añadir posteriormente una cámara RGB monocular adicional.

</details>

:::tip
Los códigos de SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Para instanciar una cámara, necesitas un identificador de cámara. Este identificador puede cambiar si reinicias tu ordenador o vuelves a conectar tu cámara, un comportamiento que depende principalmente de tu sistema operativo.

Para encontrar los índices de las cámaras conectadas a tu sistema, ejecuta el siguiente script:

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

El terminal imprimirá la siguiente información.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Puedes encontrar las imágenes tomadas por cada cámara en el directorio `outputs/captured_images`.

:::warning
Al usar cámaras Intel RealSense en , podrías obtener este error: , esto se puede resolver ejecutando el mismo comando con permisos. Ten en cuenta que usar cámaras RealSense en es inestable.macOSError finding RealSense cameras: failed to set power statesudomacOS.
:::

Entonces podrás mostrar las cámaras en tu ordenador mientras teleoperas ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Si tienes más cámaras, puedes cambiar `--robot.cameras` para añadir cámaras. Debes prestar atención al formato de index_or_path, que está determinado por el último dígito del ID de la cámara que se muestra al ejecutar `python -m lerobot.find_cameras opencv`.

:::tip
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, se pueden soportar 3 cámaras con una resolución de `1920*1080` manteniendo `30FPS`. Aun así, no se recomienda conectar 2 cámaras a un ordenador a través del mismo HUB USB.
:::


Por ejemplo, si quieres añadir una cámara lateral:

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, bajo el formato `MJPG`, se pueden soportar 3 cámaras con una resolución de `1920*1080` manteniendo `30FPS`. Aun así, no se recomienda conectar 2 cámaras a un ordenador a través del mismo HUB USB.
:::


:::tip
Si encuentras un error como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Grabar el conjunto de datos

- Si quieres guardar el conjunto de datos localmente, puedes ejecutarlo directamente:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` de la carpeta de inicio, donde se creará la carpeta `seeedstudio123/test` mencionada anteriormente.

- Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho antes, asegúrate de haber iniciado sesión usando un token con permisos de escritura, que se puede generar desde los [ajustes de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Guarda el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Graba 5 episodios y sube tu conjunto de datos al hub:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Verás que aparecen muchas líneas como esta:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Función de grabación**

La función **record** proporciona un conjunto de herramientas para capturar y gestionar datos durante el funcionamiento del robot.  

**1. Almacenamiento de datos**

- Los datos se almacenan usando el formato `LeRobotDataset` y se guardan en disco durante la grabación.
- De forma predeterminada, el conjunto de datos se envía a tu página de Hugging Face después de la grabación.  
- Para desactivar la subida, usa: `--dataset.push_to_hub=False`

**2. Puntos de control y reanudación**

- Los puntos de control se crean automáticamente durante la grabación.  
- Para reanudar después de una interrupción, vuelve a ejecutar el mismo comando con: `--resume=true`

⚠️ Nota crítica: Al reanudar, establece `--dataset.num_episodes` en el número de episodios adicionales que se van a grabar (no en el número total de episodios objetivo del conjunto de datos).  

- Para empezar a grabar desde cero, **elimina manualmente** el directorio del conjunto de datos.

**3. Parámetros de grabación**

Configura el flujo de grabación de datos usando argumentos de línea de comandos:

| Parámetro | Descripción | Predeterminado |  
|-----------|-------------|----------------|  
| --dataset.episode_time_s | Duración por episodio de datos (segundos) | 60 |  
| --dataset.reset_time_s | Tiempo de reinicio del entorno después de cada episodio (segundos) | 60 |  
| --dataset.num_episodes | Número total de episodios a grabar | 50 |  

**4. Controles de teclado durante la grabación**

Controla el flujo de grabación de datos usando atajos de teclado:

| Tecla | Acción |  
|-------|--------|  
| → (Flecha derecha) | Detener anticipadamente el episodio actual/reiniciar; pasar al siguiente. |  
| ← (Flecha izquierda) | Cancelar el episodio actual; volver a grabarlo. |  
| ESC | Detener la sesión inmediatamente, codificar los vídeos y subir el conjunto de datos. |  

:::tip

Si el teclado no funciona, puede que necesites instalar otra versión de pynput.

```bash
pip install pynput==1.6.8
```

:::

**Consejos para recopilar datos**

- Sugerencia de tarea: Agarra objetos en diferentes ubicaciones y colócalos en un contenedor.  
- Escala: Graba ≥50 episodios (10 episodios por ubicación).  
- Consistencia:  
  - Mantén las cámaras fijas.  
  - Mantén un comportamiento de agarre idéntico.  
  - Asegúrate de que los objetos manipulados sean visibles en las imágenes de las cámaras.  
- Progresión:  
  - Comienza con agarres fiables antes de añadir variaciones (nuevas ubicaciones, técnicas, ajustes de cámara).  
  - Evita aumentar la complejidad demasiado rápido para prevenir fallos.  

💡 Regla general: Deberías ser capaz de realizar la tarea tú mismo solo mirando las imágenes de la cámara.  

Si quieres profundizar en este tema importante, puedes consultar la [entrada de blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escribimos sobre qué hace que un conjunto de datos sea bueno.

**Solución de problemas**

Problema específico de Linux:  
Si las teclas Flecha derecha/Flecha izquierda/ESC no responden durante la grabación:  

- Verifica que la variable de entorno `$DISPLAY` esté configurada (consulta las [limitaciones de pynput](https://pynput.readthedocs.io/en/latest/limitations.html)).  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualizar el conjunto de datos

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Si subiste tu conjunto de datos al hub con `--control.push_to_hub=true`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu repo id obtenido con:

```bash
echo ${HF_USER}/so101_test  
```

Si no lo subiste con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

Si lo subes con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
lerobot-dataset-viz \
  --repo-id seeed_123/so101_test \
```

**Aquí, `seeed_123` es el nombre personalizado de `repo_id` definido al recopilar datos.**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## Reproducir un episodio

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Una función útil es `replay`, que te permite reproducir cualquier episodio que hayas grabado o episodios de cualquier conjunto de datos disponible. Esta función te ayuda a probar la repetibilidad de las acciones de tu robot y evaluar la transferibilidad entre robots del mismo modelo.

Puedes reproducir el primer episodio en tu robot con el siguiente comando o con el ejemplo de la API:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

Tu robot debería reproducir movimientos similares a los que grabaste.

## Entrenar y evaluar


<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulta [ACT](https://huggingface.co/docs/lerobot/act)

Para entrenar una política que controle tu robot, utiliza el script [lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py). 

**Entrenar**


```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el utilizado durante la recopilación de datos y añade `--policy.push_to_hub=False`.**

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

Vamos a explicarlo:

- **Especificación del conjunto de datos**: Proporcionamos el conjunto de datos mediante el parámetro `--dataset.repo_id=${HF_USER}/so101_test`.
- **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo usa por defecto 800000 pasos, y puedes ajustarlo según la dificultad de tu tarea y observando la pérdida durante el entrenamiento.
- **Tipo de política**: Proporcionamos la política con `policy.type=act`. Del mismo modo, puedes cambiar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]., lo que cargará la configuración desde `configuration_act.py`. Es importante destacar que esta política se adaptará automáticamente a los estados de los motores, las acciones de los motores y el número de cámaras de tu robot (por ejemplo, `laptop` y `phone`), ya que esta información ya está almacenada en tu conjunto de datos.
- **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
- **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar las gráficas de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo utilizas, asegúrate de haber iniciado sesión ejecutando `wandb login`.


**Evaluar**

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un punto de control de la política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

```bash
lerobot-record \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

por ejemplo:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados de entrenamiento de tu política (por ejemplo, `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos del resultado del entrenamiento del modelo a Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/act_so100_test`).

2. El nombre del conjunto de datos `dataset.repo_id` comienza con `eval_`. Esta operación registrará por separado videos y datos durante la evaluación, que se guardarán en la carpeta que comience con `eval_`, como `seeed/eval_test123`.

3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, elimina primero la carpeta que comience con `eval_` y luego ejecuta el programa de nuevo.

4. Cuando aparezca `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que palabras clave como front y side en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las utilizadas al recopilar el conjunto de datos.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


</details>


<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) es el modelo base ligero de robótica de Hugging Face. Diseñado para un ajuste fino sencillo en conjuntos de datos de LeRobot, ¡ayuda a acelerar tu desarrollo!

**Configura tu entorno**

Instala las dependencias de SmolVLA ejecutando:

```bash
pip install -e ".[smolvla]"
```

**Ajusta finamente SmolVLA con tus datos**

Usa [smolvla_base](https://hf.co/lerobot/smolvla_base), nuestro modelo preentrenado de 450M, y ajústalo finamente con tus datos. Entrenar el modelo durante 20k pasos tomará aproximadamente ~4 horas en una sola GPU A100. Debes ajustar el número de pasos en función del rendimiento y de tu caso de uso.

Si no tienes un dispositivo GPU, puedes entrenar usando nuestro cuaderno en [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

Pasa tu conjunto de datos al script de entrenamiento usando `--dataset.repo_id`. Si quieres probar tu instalación, ejecuta el siguiente comando donde usamos uno de los conjuntos de datos que recopilamos para el [artículo de SmolVLA](https://huggingface.co/papers/2506.01844).

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

:::tip
Puedes comenzar con un tamaño de lote pequeño e incrementarlo gradualmente, si la GPU lo permite, siempre que los tiempos de carga sigan siendo cortos.
:::

El ajuste fino es un arte. Para una visión completa de las opciones de fine-tuning, ejecuta

```bash
lerobot-train --help
```

**Evalúa el modelo ajustado finamente y ejecútalo en tiempo real**

De forma similar a cuando grabas un episodio, se recomienda que hayas iniciado sesión en HuggingFace Hub. Puedes seguir los pasos correspondientes: [Grabar un conjunto de datos](https://huggingface.co/docs/lerobot/il_robots). Una vez que hayas iniciado sesión, puedes ejecutar inferencia en tu configuración haciendo:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \ # <- Use your port
  --robot.id=my_blue_follower_arm \ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

Según tu configuración de evaluación, puedes configurar la duración y el número de episodios que se van a registrar para tu conjunto de evaluación.

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) es un benchmark diseñado para estudiar el aprendizaje robótico de por vida. La idea es que los robots no solo se preentrenarán una vez en una fábrica, sino que necesitarán seguir aprendiendo y adaptándose con sus usuarios humanos a lo largo del tiempo. Esta adaptación continua se denomina aprendizaje de por vida en la toma de decisiones (LLDM), y es un paso clave hacia la construcción de robots que se conviertan en ayudantes verdaderamente personalizados.

- 📄 [Artículo de LIBERO](https://arxiv.org/abs/2306.03310)
- 💻 [Repositorio original de LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

**Evaluación con LIBERO**

En **LeRobot**, portamos LIBERO a nuestro framework y lo usamos principalmente para **evaluar** [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla), nuestro modelo ligero de Visión-Lenguaje-Acción.

LIBERO es ahora parte de nuestra **simulación con soporte multi-eval**, lo que significa que puedes evaluar tus políticas en un **único conjunto de tareas** o en **múltiples conjuntos a la vez** con solo un indicador.

Para instalar LIBERO, después de seguir las instrucciones oficiales de LeRobot, simplemente ejecuta: `pip install -e ".[libero]"`

***Evaluación de un solo conjunto***

Evalúa una política en un conjunto LIBERO:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` selecciona el conjunto (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controla cuántos entornos se ejecutan en paralelo.
- `--eval.n_episodes` establece cuántos episodios se ejecutan en total.

***Evaluación de múltiples conjuntos***

Evalúa una política en múltiples conjuntos a la vez:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Pasa una lista separada por comas a `--env.task` para la evaluación de múltiples conjuntos.

**Ejemplo de comando de entrenamiento**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

-----

**Nota sobre el renderizado**

LeRobot usa MuJoCo para la simulación. Debes establecer el backend de renderizado antes del entrenamiento o la evaluación:

- `export MUJOCO_GL=egl` → para servidores sin pantalla (por ejemplo, HPC, nube)

</details>


<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulta [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Entrenar**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**Evaluar**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulta [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Entrenar**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**Evaluar**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>



<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulta [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) 


</details>



Si encuentras el siguiente error:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

Intenta ejecutar el siguiente comando para resolverlo:

```bash
pip install datasets==2.19
```

El entrenamiento debería tomar varias horas. Encontrarás checkpoints en `outputs/train/act_so100_test/checkpoints`.

Para reanudar el entrenamiento desde un checkpoint, a continuación se muestra un comando de ejemplo para reanudar desde el checkpoint `last` de la política `act_so101_test`:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Subir checkpoints de la política**

Una vez finalizado el entrenamiento, sube el último checkpoint con:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

También puedes subir checkpoints intermedios con:

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```



## Preguntas frecuentes (FAQ)

- Si estás siguiendo esta documentación/tutorial, por favor haz git clone del repositorio de GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. El repositorio recomendado en esta documentación es una versión estable verificada; el repositorio oficial de Lerobot se actualiza continuamente a la última versión, lo que puede causar problemas imprevistos como diferentes versiones de conjuntos de datos, diferentes comandos, etc.

- Si encuentras el siguiente error al calibrar los IDs de los servos:

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  Por favor, comprueba cuidadosamente si el cable de comunicación está correctamente conectado al servo y si la fuente de alimentación proporciona el voltaje correcto.

- Si encuentras:

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  Y puedes ver que ACM0 existe al ejecutar `ls /dev/ttyACM*`, significa que olvidaste otorgar permisos al puerto serie. Introduce `sudo chmod 666 /dev/ttyACM*` en la terminal para solucionarlo.

- Si encuentras:

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```

  Por favor, instala ffmpeg 7.1.1 usando `conda install ffmpeg=7.1.1 -c conda-forge`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- Si encuentras:

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  Necesitas comprobar si el brazo robótico en el puerto correspondiente está encendido y si los cables de datos de los servos de bus están sueltos o desconectados. Si la luz de un servo no está encendida, significa que el cable del servo anterior está suelto.

- Si encuentras el siguiente error al calibrar el brazo robótico:

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  Apaga y reinicia el brazo robótico y luego intenta calibrar de nuevo. Este método también se puede usar si el ángulo MAX alcanza un valor de decenas de miles durante la calibración. Si esto no funciona, necesitas recalibrar los servos correspondientes, incluyendo la calibración del punto medio y la escritura del ID.

- Si encuentras durante la fase de evaluación:

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  Por favor, elimina primero la carpeta que comienza con `eval_` y luego ejecuta el programa de nuevo.

- Si encuentras durante la fase de evaluación:

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  Ten en cuenta que palabras clave como "front" y "side" en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las utilizadas al recopilar el conjunto de datos.

- Si has reparado o reemplazado partes del brazo robótico, por favor elimina completamente los archivos bajo `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y recalibra el brazo robótico. De lo contrario, pueden aparecer mensajes de error, ya que la información de calibración se almacena en archivos JSON en estos directorios.

- Entrenar ACT con 50 conjuntos de datos lleva aproximadamente 6 horas en un portátil con una RTX 3060 (8GB), y alrededor de 2-3 horas en ordenadores con GPUs RTX 4090 o A100.

- Durante la recopilación de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental sean estables. Reduce la cantidad de fondo inestable y de peatones capturados por la cámara, ya que cambios excesivos en el entorno de despliegue pueden hacer que el brazo robótico no pueda agarrar correctamente.

- Para el comando de recopilación de datos, asegúrate de que el parámetro `num-episodes` esté configurado para recopilar suficientes datos. No pauses manualmente a mitad de camino, ya que la media y la varianza de los datos se calculan solo después de que la recopilación de datos se haya completado, y son necesarias para el entrenamiento.

- Si el programa indica que no puede leer datos de imagen desde la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar una velocidad rápida de transmisión de imágenes.

- Si encuentras un bug como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, puedes hacer un downgrade de la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Si encuentras problemas de software o de dependencias del entorno que no se puedan resolver, además de consultar la sección de Preguntas frecuentes (FAQ) al final de este tutorial, informa del problema lo antes posible en la [plataforma LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

## Citas

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

Proyecto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Proyecto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT o ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
