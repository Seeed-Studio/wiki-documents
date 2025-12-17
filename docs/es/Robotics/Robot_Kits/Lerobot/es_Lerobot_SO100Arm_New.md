---
description: Este wiki proporciona el tutorial de ensamblaje y depuración para el SO ARM100 y realiza la recopilación de datos y entrenamiento dentro de la última versión del framework Lerobot.
title: SoArm en Lerobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /es/lerobot_so100m_new
last_update:
  date: 9/26/2025
  author: LiShanghang
translation:
  skip: [ zh-CN ]
---

# Comenzando con el brazo robótico SO-ARM100 y SO-ARM101 con LeRobot

:::tip
El mantenimiento de este tutorial ha sido actualizado a la última versión de [lerobot](https://huggingface.co/docs/lerobot/index), si deseas consultar el tutorial de la versión anterior, por favor haz clic [aquí](https://wiki.seeedstudio.com/es/lerobot_so100m/).
:::

## Introducción

El [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico completamente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye el brazo seguidor y el brazo robótico líder, y también proporciona archivos detallados de impresión 3D y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) está comprometido a proporcionar modelos, conjuntos de datos y herramientas para robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien del intercambio de conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones del mundo real, centrándose en el aprendizaje por imitación. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, permitiendo a los usuarios comenzar sin la necesidad de ensamblar robots. En las próximas semanas, la intención es aumentar el soporte para robótica del mundo real en los robots más rentables y competentes actualmente accesibles.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introducción del Proyecto

El kit de robot inteligente SO-ARM10x y reComputer Jetson AI combina perfectamente el control de brazo robótico de alta precisión con una potente plataforma de computación AI, proporcionando una solución integral de desarrollo de robots. Este kit está basado en la plataforma Jetson Orin o AGX Orin, combinado con el brazo robótico SO-ARM10x y el framework AI LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.
Este wiki proporciona el tutorial de ensamblaje y depuración para el SO ARM10x y realiza la recopilación de datos y entrenamiento dentro del framework Lerobot.

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Características Principales

1. **Código abierto y bajo costo**: Es una solución de brazo robótico de código abierto y bajo costo de [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)
2. **Integración con LeRobot**: Diseñado para integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Abundantes recursos de aprendizaje**: Proporciona recursos de aprendizaje de código abierto integrales como guías de ensamblaje y calibración, y tutoriales para pruebas, recopilación de datos, entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**: Despliega este kit de brazo con reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicación Multi-Escenario**: Es aplicable a campos como educación, investigación científica, producción automatizada y robótica, ayudando a los usuarios a lograr operaciones de robot eficientes y precisas en varias tareas complejas.

## Novedades:

- Optimización del cableado: Comparado con SO-ARM100, SO-ARM101 presenta un cableado mejorado que previene problemas de desconexión previamente vistos en la articulación 3. El nuevo diseño de cableado también ya no limita el rango de movimiento de las articulaciones.
- Diferentes relaciones de engranajes para el brazo líder: El brazo líder ahora usa motores con relaciones de engranajes optimizadas, mejorando el rendimiento y eliminando la necesidad de cajas de engranajes externas.
- Soporte de nueva funcionalidad: El brazo líder ahora puede seguir al brazo seguidor en tiempo real, lo cual es crucial para la próxima política de aprendizaje, donde un humano puede intervenir y corregir las acciones del robot.

:::caution

Seeed Studio solo es responsable de la calidad del hardware en sí. Los tutoriales se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de verificar la sección FAQ al final de este tutorial, por favor reporta el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal Discord de LeRobot](https://discord.gg/8TnwDdjFGU).

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
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Kit de Brazo</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Kit de Brazo Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Kit de Brazo</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Kit de Brazo Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Brazo Líder</td>
      <td rowSpan="2">12x motores ST-3215- C001 (7.4V) con relación de engranajes 1:345 para todas las articulaciones</td>
      <td rowSpan="2">12x motores ST-3215-C018/ST-3215-C047 (12V) con relación de engranajes 1:345 para todas las articulaciones</td>
      <td colSpan="2">
        1x motor ST-3215- C001 (7.4V) con relación de engranajes 1:345 solo para la articulación 2<br />
        2x motores ST-3215-C044 (7.4V) con relación de engranajes 1:191 para las articulaciones 1 y 3<br />
        3x motores ST-3215-C046 (7.4V) con relación de engranajes 1:147 para las articulaciones 4, 5 y pinza (articulación 6)
      </td>
    </tr>
    <tr>
      <td>Brazo Seguidor</td>
      <td colSpan="2">Igual que SO-ARM100</td>
    </tr>
    <tr>
      <td>Fuente de Alimentación</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A (Brazo Seguidor)<br />
        5.5 mm × 2.1 mm DC 5 V 4 A (Brazo Líder)
      </td>
    </tr>
    <tr>
      <td>Sensor de Ángulo</td>
      <td colSpan="4">Codificador magnético de 12 bits</td>
    </tr>
    <tr>
      <td>Temperatura de Operación Recomendada</td>
      <td colSpan="4">0 °C a 40 °C</td>
    </tr>
    <tr>
      <td>Comunicación</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>Método de Control</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Si compras la versión Arm Kit, ambas fuentes de alimentación son de 5V. Si compras la versión Arm Kit Pro, por favor usa la fuente de alimentación de 5V para la calibración y cada paso del brazo robótico Líder, y la fuente de alimentación de 12V para la calibración y cada paso del brazo robótico Seguidor.

:::

## Lista de Materiales (BOM)

| Parte | Cantidad | Incluido|
|--|--|--|
|  Motores Servo | 12 | ✅ |
| Placa de Control de Motor | 2 | ✅ |
| Cable USB-C 2 piezas | 1 | ✅ |
| Fuente de Alimentación2 | 2 | ✅ |
| Abrazadera de Mesa| 4 | ✅ |
| Partes impresas en 3D del brazo | 1 | Opción |

## Entorno del Sistema Inicial

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Para Jetson Orin:**

- Jetson JetPack 6.0 y 6.1, no soporta 6.1
- Python 3.10  
- Torch 2.3+

## Tabla de Contenidos

  [A. Guía de Impresión 3D](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#install-lerobot)

  [B. Instalar LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#install-lerobot)

  [C. Configurar los motores](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#configure-the-motors)

  [D. Ensamblaje](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#assembly)

  [E. Calibrar](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#calibrate)

  [F. Teleoperar](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#teleoperate)

  [G. Agregar cámaras](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#add-cameras)

  [H. Grabar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#record-the-dataset)

  [I. Visualizar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#visualize-the-dataset)

  [J. Reproducir un episodio](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#replay-an-episode)

  [K. Entrenar una política](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#train-a-policy)

  [L. Evaluar tu política](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#evaluate-your-policy)

## Guía de Impresión 3D

:::caution
Siguiendo la actualización oficial de SO101, SO100 ya no lo soportará y los archivos fuente serán eliminados según lo oficial, pero los archivos fuente aún se pueden encontrar en nuestro [Makerworld](https://makerworld.com/zh/models/908660). Sin embargo, para usuarios que han comprado previamente SO100, los tutoriales y métodos de instalación siguen siendo compatibles. La impresión de SO101 es completamente compatible con la instalación del kit de motor de SO100.
:::

### Paso 1: Elegir una impresora

Los archivos STL proporcionados están listos para imprimir en muchas impresoras FDM. A continuación se muestran las configuraciones probadas y sugeridas aunque otras pueden funcionar.

- Material: PLA+
- Diámetro de Boquilla y Precisión: diámetro de boquilla de 0.4mm a altura de capa de 0.2mm o boquilla de 0.6mm a altura de capa de 0.4mm.
- Densidad de Relleno: 15%  

### Paso 2: Configurar la impresora

- Asegúrate de que la impresora esté calibrada y el nivel de la cama esté configurado correctamente usando las instrucciones específicas de la impresora.
- Limpia la cama de impresión, asegurándote de que esté libre de polvo o grasa. Si limpias la cama usando agua u otro líquido, seca la cama.
- Si tu impresora lo recomienda, usa una barra de pegamento estándar y aplica una capa delgada y uniforme de pegamento en el área de impresión de la cama. Evita la acumulación o aplicación desigual.
- Carga el filamento de la impresora usando las instrucciones específicas de la impresora.
- Asegúrate de que la configuración de la impresora coincida con las sugeridas anteriormente (la mayoría de las impresoras tienen múltiples configuraciones, así que elige las que más se acerquen).
- Configura para soportes en todas partes pero ignora pendientes mayores a 45 grados respecto a la horizontal.
- No debe haber soportes en los agujeros de tornillos con ejes horizontales.

### Paso 3: Imprimir las piezas

Todas las piezas para el líder o seguidor están para impresión 3D fácil ya contenidas en un solo archivo, correctamente orientadas para z hacia arriba para minimizar soportes.

- Para tamaños de cama de impresora de 220mmx220mm (como la Ender), imprime estos archivos:
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para tamaños de cama de impresora de 205mm x 250mm (como la Prusa/Up):
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Instalar LeRobot

Entornos como pytorch y torchvision necesitan ser instalados basándose en tu CUDA.

1. Instalar Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

O, Para X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crear y activar un entorno conda fresco para lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clonar Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Cuando uses miniconda, instala ffmpeg en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto usualmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (verifica codificadores compatibles con ffmpeg -encoders), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instalar dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegúrate de usar el binario ffmpeg correspondiente a tu instalación con which ffmpeg.

Si encuentras un error como este, también puedes usar este comando.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. Instalar LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Para dispositivos Jetson Jetpack 6.0+ (por favor asegúrate de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) desde el paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Verificar Pytorch y Torchvision

Dado que instalar el entorno lerobot vía pip desinstalará el Pytorch y Torchvision originales e instalará las versiones CPU de Pytorch y Torchvision, necesitas realizar una verificación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesitas reinstalar Pytorch y Torchvision según el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si estás usando un dispositivo Jetson, instala Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configurar los motores

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

El proceso de calibración e inicialización del servo para SO-ARM101 es el mismo que el de SO-ARM100 en términos tanto de método como de código. Sin embargo, ten en cuenta que las relaciones de engranajes para las primeras tres articulaciones del Brazo Líder SO-ARM101 difieren de las de SO-ARM100, por lo que es importante distinguir y calibrarlas cuidadosamente.

Para configurar los motores designa un adaptador de servo de bus y 6 motores para tu brazo líder, y de manera similar el otro adaptador de servo de bus y 6 motores para el brazo seguidor. Es conveniente etiquetarlos y escribir en cada motor si es para el seguidor F o para el líder L y su ID del 1 al 6. Usamos **F1–F6** para representar las articulaciones 1 a 6 del **Brazo Seguidor**, y **L1–L6** para representar las articulaciones 1 a 6 del **Brazo Líder**. Los detalles correspondientes del modelo de servo, asignaciones de articulaciones y relación de engranajes son los siguientes:

| Modelo de Servo                        | Relación de Engranajes | Articulaciones Correspondientes |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Ahora debes conectar la fuente de alimentación de 5V o 12V al bus del motor. 5V para los motores STS3215 7.4V y 12V para los motores STS3215 12V. Ten en cuenta que el brazo líder siempre usa los motores de 7.4V, así que ten cuidado de conectar la fuente de alimentación correcta si tienes motores de 12V y 7.4V, ¡de lo contrario podrías quemar tus motores! Ahora, conecta el bus del motor a tu computadora vía USB. Ten en cuenta que el USB no proporciona energía, y tanto la fuente de alimentación como el USB deben estar conectados.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***Los siguientes son los pasos de calibración de código, por favor calibra con el servo de cableado de referencia en la imagen de arriba***

Encontrar puertos USB asociados a tus brazos
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
Recuerda quitar el usb, de lo contrario la interfaz no será detectada.
:::

Salida de ejemplo al identificar el puerto del brazo seguidor (ej., `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Salida de ejemplo al identificar el puerto del brazo líder (ej., `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Podrías necesitar dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configurar tus motores**

:::danger
Por favor usa una fuente de alimentación de 5V para calibrar los motores Líder (ST-3215-C046, C044, 001).
:::

| **Calibración Articulación 6 Brazo Líder** | **Calibración Articulación 5 Brazo Líder** | **Calibración Articulación 4 Brazo Líder** | **Calibración Articulación 3 Brazo Líder** | **Calibración Articulación 2 Brazo Líder** | **Calibración Articulación 1 Brazo Líder** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Si compras la versión Arm Kit (ST-3215-C001), usa una fuente de alimentación de 5V. Si compras la versión Arm Kit Pro, por favor usa una fuente de alimentación de 12V para calibrar el servo (ST-3215-C047/ST-3215-C018).
:::

| **Calibración Articulación 6 Brazo Seguidor** | **Calibración Articulación 5 Brazo Seguidor** | **Calibración Articulación 4 Brazo Seguidor** | **Calibración Articulación 3 Brazo Seguidor** | **Calibración Articulación 2 Brazo Seguidor** | **Calibración Articulación 1 Brazo Seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
Nuevamente, asegúrate de que los IDs de las articulaciones del servo y las relaciones de engranajes correspondan estrictamente a las del SO-ARM101.
:::

Conecta el cable USB desde tu computadora y la fuente de alimentación a la placa controladora del brazo seguidor. Luego, ejecuta el siguiente comando.

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

Deberías ver la siguiente instrucción.

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

Como se indica, conecta el motor de la pinza. Asegúrate de que sea el único motor conectado a la placa, y que el motor en sí no esté aún conectado en cadena a ningún otro motor. Al presionar [Enter], el script configurará automáticamente el ID y la velocidad de baudios para ese motor.

Entonces deberías ver el siguiente mensaje:

```bash
'gripper' motor id set to 6
```

Seguido de la siguiente instrucción:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Puedes desconectar el cable de 3 pines de la placa controladora, pero puedes dejarlo conectado al motor de la pinza en el otro extremo, ya que ya estará en el lugar correcto. Ahora, conecta otro cable de 3 pines al motor de rotación de la muñeca y conéctalo a la placa controladora. Como con el motor anterior, asegúrate de que sea el único motor conectado a la placa y que el motor en sí no esté conectado a ningún otro.

:::caution
Repite la operación para cada motor según se indica.
:::

:::tip
Verifica tu cableado en cada paso antes de presionar Enter. Por ejemplo, el cable de la fuente de alimentación podría desconectarse mientras manipulas la placa.
:::

Cuando hayas terminado, el script simplemente finalizará, momento en el cual los motores estarán listos para ser utilizados. Ahora puedes conectar el cable de 3 pines de cada motor al siguiente, y el cable del primer motor (el 'giro del hombro' con id=1) a la placa controladora, que ahora puede ser fijada a la base del brazo.

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

- El proceso de ensamblaje de brazo dual del SO-ARM101 es el mismo que el del SO-ARM100. Las únicas diferencias son la adición de clips de cable en el SO-ARM101 y las diferentes relaciones de engranajes de los servos de las articulaciones en el Brazo Líder. Por lo tanto, tanto el SO100 como el SO101 pueden instalarse siguiendo el siguiente contenido
- Antes del ensamblaje, por favor verifica nuevamente tu modelo de motor y relación de reducción. Si has comprado el SO100, puedes ignorar este paso. Si has comprado el SO101, por favor verifica la siguiente tabla para distinguir F1 a F6 y L1 a L6.

:::

  | Modelo de Servo                            | Relación de Engranajes | Articulaciones Correspondientes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso usando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso usando una fuente de alimentación de 12V.
:::

**Ensamblar Brazo Líder**

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** | **Paso 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Paso 19** | **Paso 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Ensamblar Brazo Seguidor**

:::tip

- Los pasos para ensamblar el Brazo Seguidor son generalmente los mismos que los del Brazo Líder. La única diferencia radica en el método de instalación del efector final (pinza y mango) después del Paso 12.

:::

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## Calibrar

:::tip
Los códigos del SO100 y SO101 son compatibles. Los usuarios del SO100 pueden utilizar directamente los parámetros y código del SO101 para la operación.
:::

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso usando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso usando una fuente de alimentación de 12V.
:::

A continuación, necesitas conectar la fuente de alimentación y el cable de datos a tu robot SO-10x para la calibración para asegurar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot SO-10x funcione en otro. Si necesitas recalibrar el brazo robótico, elimina los archivos bajo `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y recalibra el brazo robótico. De lo contrario, aparecerá un mensaje de error. La información de calibración del brazo robótico se almacenará en los archivos JSON bajo este directorio.

**Calibración manual del brazo seguidor**

Por favor conecta las interfaces de los 6 servos del robot mediante un cable de 3 pines y conecta el servo del chasis a la placa de control del servo, luego ejecuta el siguiente comando o ejemplo de API para calibrar el brazo robótico:

***Primero se otorgan permisos de interfaz***

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

El video a continuación muestra cómo realizar la calibración. Primero necesitas mover el robot a la posición donde todas las articulaciones estén en el medio de sus rangos. Luego, después de presionar enter, tienes que mover cada articulación a través de su rango completo de movimiento.

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
¡Entonces estás listo para teleoperar tu robot! Ejecuta este script simple (no se conectará ni mostrará las cámaras):

Ten en cuenta que el id asociado con un robot se usa para almacenar el archivo de calibración. Es importante usar el mismo id al teleoperar, grabar y evaluar cuando uses la misma configuración.

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

El comando teleoperate automáticamente:

1. Identificará cualquier calibración faltante e iniciará el procedimiento de calibración.
2. Conectará el robot y el dispositivo de teleoperación e iniciará la teleoperación.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Agregar cámaras

<details>
<summary> Si usas la Cámara de Profundidad Orbbec Gemini2 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

- 🚀 Paso 1: Instalar el Entorno Dependiente del SDK de Orbbec

1. Clonar el repositorio `pyorbbec`

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Descargar e instalar el **archivo .whl** correspondiente para el SDK  
   Ve a [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   selecciona e instala basándote en tu versión de Python. Por ejemplo:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Instalar dependencias en el directorio `pyorbbec`

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Forzar la degradación de la versión de `numpy` a `1.26.0`

    ```bash
    pip install numpy==1.26.0
    ```

  Los mensajes de error rojos pueden ser ignorados.

4. Clonar el SDK de Orbbec en el directorio `~/lerobot/src/cameras`

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modificar utils.py y **init**.py

- Encuentra `utils.py` en el directorio `~/lerobot/src/lerobot/cameras`, y agrega el siguiente código en la línea 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Encuentra `__init__.py` en el directorio `~/lerobot/src/lerobot/cameras`, y agrega el siguiente código en la línea 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Paso 2: Llamada de Función y Ejemplos

En todos los siguientes ejemplos, reemplaza `so101_follower` con el modelo real del brazo robótico que estés usando (ej., `so100` / `so101`).

Hemos agregado el hiperparámetro `focus_area`. Dado que los datos de profundidad que están demasiado lejos no tienen sentido para el brazo robótico (no puede alcanzar o agarrar objetos), los datos de profundidad menores o mayores que el `focus_area` se mostrarán en negro. El `focus_area` predeterminado es (20, 600).  
Actualmente, la única resolución soportada es ancho: 640, alto: 880.

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

Para tareas posteriores como recolección de datos, entrenamiento y evaluación, el proceso es el mismo que para comandos RGB regulares. Solo necesitas reemplazar la parte relevante en el comando RGB regular con:

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

También puedes agregar una cámara RGB monocular adicional después.

</details>

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Para instanciar una cámara, necesitas un identificador de cámara. Este identificador podría cambiar si reinicias tu computadora o reconectas tu cámara, un comportamiento que depende principalmente de tu sistema operativo.

Para encontrar los índices de cámara de las cámaras conectadas a tu sistema, ejecuta el siguiente script:

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

La terminal imprimirá la siguiente información.

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
Al usar cámaras Intel RealSense en macOS, podrías obtener este error: Error finding RealSense cameras: failed to set power state, esto se puede resolver ejecutando el mismo comando con permisos sudo. Ten en cuenta que usar cámaras RealSense en macOS es inestable.
:::

Entonces podrás mostrar las cámaras en tu computadora mientras teleoperás ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

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

Si tienes más cámaras, puedes cambiar `--robot.cameras` para agregar cámaras. Debes notar el formato del index_or_path, que está determinado por el último dígito del ID de cámara mostrado por `python -m lerobot.find_cameras opencv`.

:::tip
Las imágenes en formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas, y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de imagen y FPS, causando retraso en la operación del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, conectar 2 cámaras a una computadora a través del mismo USB HUB aún no se recomienda.
:::


Por ejemplo, quieres agregar una cámara lateral:

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
Las imágenes en formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas, y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de imagen y FPS, causando retraso en la operación del brazo robótico. Actualmente, bajo el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, conectar 2 cámaras a una computadora a través del mismo USB HUB aún no se recomienda.
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

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` en la carpeta de inicio, donde se creará la carpeta `seeedstudio123/test` mencionada anteriormente.

- Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho anteriormente, asegúrate de haber iniciado sesión usando un token de acceso de escritura, que se puede generar desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Almacena el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

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

Verás muchas líneas apareciendo como esta:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Función de grabación**

La función **record** proporciona un conjunto de herramientas para capturar y gestionar datos durante la operación del robot.  

**1. Almacenamiento de Datos**

- Los datos se almacenan usando el formato `LeRobotDataset` y se guardan en disco durante la grabación.
- Por defecto, el conjunto de datos se sube a tu página de Hugging Face después de la grabación.  
- Para deshabilitar la subida, usa: `--dataset.push_to_hub=False`

**2. Puntos de Control y Reanudación**

- Los puntos de control se crean automáticamente durante la grabación.  
- Para reanudar después de una interrupción, vuelve a ejecutar el mismo comando con: `--resume=true`

⚠️ Nota Crítica: Al reanudar, establece `--dataset.num_episodes` al número de episodios adicionales a grabar (no el número total objetivo de episodios en el conjunto de datos).  

- Para comenzar a grabar desde cero, **elimina manualmente** el directorio del conjunto de datos.

**3. Parámetros de Grabación**

Configura el flujo de grabación de datos usando argumentos de línea de comandos:

| Parámetro | Descripción | Por defecto |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | Duración por episodio de datos (segundos) | 60 |  
| --dataset.reset_time_s | Tiempo de reinicio del entorno después de cada episodio (segundos) | 60 |  
| --dataset.num_episodes | Total de episodios a grabar | 50 |  

**4. Controles de Teclado Durante la Grabación**

Controla el flujo de grabación de datos usando atajos de teclado:

| Tecla | Acción |  
|-----|--------|  
| → (Flecha Derecha) | Detener temprano el episodio actual/reiniciar; pasar al siguiente. |  
| ← (Flecha Izquierda) | Cancelar episodio actual; volver a grabarlo. |  
| ESC | Detener sesión inmediatamente, codificar videos y subir conjunto de datos. |  

:::tip

Si el teclado no funciona, es posible que necesites instalar otra versión de pynput.

```bash
pip install pynput==1.6.8
```

:::

**Consejos para Recopilar Datos**

- Sugerencia de Tarea: Agarrar objetos en diferentes ubicaciones y colocarlos en un contenedor.  
- Escala: Grabar ≥50 episodios (10 episodios por ubicación).  
- Consistencia:  
  - Mantener las cámaras fijas.  
  - Mantener un comportamiento de agarre idéntico.  
  - Asegurar que los objetos manipulados sean visibles en las transmisiones de la cámara.  
- Progresión:  
  - Comenzar con un agarre confiable antes de agregar variaciones (nuevas ubicaciones, técnicas, ajustes de cámara).  
  - Evitar aumentos rápidos de complejidad para prevenir fallos.  

💡 Regla General: Deberías poder hacer la tarea tú mismo solo mirando las imágenes de la cámara.  

Si quieres profundizar en este tema importante, puedes consultar la [publicación del blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escribimos sobre qué hace un buen conjunto de datos.

**Solución de Problemas**

Problema específico de Linux:  
Si las teclas Flecha Derecha/Flecha Izquierda/ESC no responden durante la grabación:  

- Verifica que la variable de entorno `$DISPLAY` esté configurada (ver [limitaciones de pynput](https://pynput.readthedocs.io/en/latest/limitations.html)).  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualizar el conjunto de datos

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Si subiste tu conjunto de datos al hub con `--control.push_to_hub=true`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu repo id dado por:

```bash
echo ${HF_USER}/so101_test  
```

Si no subiste con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

Si subes con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

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
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Una función útil es la función `replay`, que te permite reproducir cualquier episodio que hayas grabado o episodios de cualquier conjunto de datos disponible. Esta función te ayuda a probar la repetibilidad de las acciones de tu robot y evaluar la transferibilidad entre robots del mismo modelo.

Puedes reproducir el primer episodio en tu robot con el comando de abajo o con el ejemplo de API:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

Tu robot debería replicar movimientos similares a los que grabaste.

## Entrenar y Evaluar


<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulta [ACT](https://huggingface.co/docs/lerobot/act)

Para entrenar una política para controlar tu robot, usa el script [lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py). 

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

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el usado durante la recopilación de datos y agrega `--policy.push_to_hub=False`.**

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

- **Especificación del conjunto de datos**: Proporcionamos el conjunto de datos a través del parámetro `--dataset.repo_id=${HF_USER}/so101_test`.
- **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo por defecto usa 800000 pasos, y puedes ajustarlo según la dificultad de tu tarea y observando la pérdida durante el entrenamiento.
- **Tipo de política**: Proporcionamos la política con `policy.type=act`. De manera similar, puedes cambiar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]., que cargará la configuración desde `configuration_act.py`. Importante, esta política se adaptará automáticamente a los estados del motor de tu robot (por ejemplo, `laptop` y `phone`), acciones del motor y el número de cámaras, ya que esta información ya está almacenada en tu conjunto de datos.
- **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
- **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar gráficos de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.


**Evaluar**

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un punto de control de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

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

como por ejemplo:

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

3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, por favor elimina primero la carpeta que comience con `eval_` y luego ejecuta el programa nuevamente.

4. Cuando encuentres `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que las palabras clave como front y side en el parámetro `--robot.cameras` deben ser estrictamente consistentes con las utilizadas al recopilar el conjunto de datos.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


</details>


<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) es el modelo fundacional ligero de Hugging Face para robótica. Diseñado para un ajuste fino fácil en conjuntos de datos de LeRobot, ¡ayuda a acelerar tu desarrollo!

**Configura Tu Entorno**

Instala las dependencias de SmolVLA ejecutando:

```bash
pip install -e ".[smolvla]"
```

**Ajusta SmolVLA con tus datos**

Usa [smolvla_base](https://hf.co/lerobot/smolvla_base), nuestro modelo preentrenado de 450M, y ajústalo con tus datos. Entrenar el modelo durante 20k pasos tomará aproximadamente ~4 horas en una sola GPU A100. Debes ajustar el número de pasos basándote en el rendimiento y tu caso de uso.

Si no tienes un dispositivo GPU, puedes entrenar usando nuestro notebook en [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

Pasa tu conjunto de datos al script de entrenamiento usando `--dataset.repo_id`. Si quieres probar tu instalación, ejecuta el siguiente comando donde usamos uno de los conjuntos de datos que recopilamos para el [Artículo de SmolVLA](https://huggingface.co/papers/2506.01844).

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
Puedes comenzar con un tamaño de lote pequeño y aumentarlo incrementalmente, si la GPU lo permite, siempre que los tiempos de carga se mantengan cortos.
:::

El ajuste fino es un arte. Para una visión completa de las opciones para el ajuste fino, ejecuta

```bash
lerobot-train --help
```

**Evalúa el modelo ajustado y ejecútalo en tiempo real**

De manera similar a cuando grabas un episodio, se recomienda que hayas iniciado sesión en HuggingFace Hub. Puedes seguir los pasos correspondientes: [Grabar un conjunto de datos](https://huggingface.co/docs/lerobot/il_robots). Una vez que hayas iniciado sesión, puedes ejecutar la inferencia en tu configuración haciendo:

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

Dependiendo de tu configuración de evaluación, puedes configurar la duración y el número de episodios a grabar para tu suite de evaluación.

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) es un benchmark diseñado para estudiar el aprendizaje robótico de por vida. La idea es que los robots no solo serán preentrenados una vez en una fábrica, necesitarán seguir aprendiendo y adaptándose con sus usuarios humanos a lo largo del tiempo. Esta adaptación continua se llama aprendizaje de por vida en la toma de decisiones (LLDM), y es un paso clave hacia la construcción de robots que se conviertan en verdaderos asistentes personalizados.

- 📄 [Artículo de LIBERO](https://arxiv.org/abs/2306.03310)
- 💻 [Repositorio original de LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

**Evaluando con LIBERO**

En **LeRobot**, portamos LIBERO a nuestro framework y lo usamos principalmente para **evaluar** [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla), nuestro modelo ligero de Visión-Lenguaje-Acción.

LIBERO ahora es parte de nuestra **simulación multi-eval soportada**, lo que significa que puedes hacer benchmark de tus políticas ya sea en una **suite única de tareas** o a través de **múltiples suites a la vez** con solo una bandera.

Para instalar LIBERO, después de seguir las instrucciones oficiales de LeRobot, simplemente haz: `pip install -e ".[libero]"`

***Evaluación de suite única***

Evalúa una política en una suite de LIBERO:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` selecciona la suite (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controla cuántos entornos se ejecutan en paralelo.
- `--eval.n_episodes` establece cuántos episodios ejecutar en total.

***Evaluación multi-suite***

Haz benchmark de una política a través de múltiples suites a la vez:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Pasa una lista separada por comas a `--env.task` para evaluación multi-suite.

**Comando de entrenamiento de ejemplo**

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

**Nota sobre renderizado**

LeRobot usa MuJoCo para simulación. Necesitas configurar el backend de renderizado antes del entrenamiento o evaluación:

- `export MUJOCO_GL=egl` → para servidores sin cabeza (por ejemplo, HPC, nube)

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

**Subir checkpoints de política**

Una vez que el entrenamiento esté completo, sube el último checkpoint con:

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



## FAQ

- Si estás siguiendo esta documentación/tutorial, por favor clona el repositorio de GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. El repositorio recomendado en esta documentación es una versión estable verificada; el repositorio oficial de Lerobot se actualiza continuamente a la última versión, lo que puede causar problemas imprevistos como diferentes versiones de conjuntos de datos, diferentes comandos, etc.

- Si encuentras el siguiente error al calibrar los IDs de los servos:

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  Por favor verifica cuidadosamente si el cable de comunicación está conectado correctamente al servo y si la fuente de alimentación está proporcionando el voltaje correcto.

- Si encuentras:

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  Y puedes ver que ACM0 existe al ejecutar `ls /dev/ttyACM*`, significa que olvidaste otorgar permisos al puerto serie. Ingresa `sudo chmod 666 /dev/ttyACM*` en la terminal para solucionarlo.

- Si encuentras:

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```

  Por favor instala ffmpeg 7.1.1 usando `conda install ffmpeg=7.1.1 -c conda-forge`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- Si encuentras:

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  Necesitas verificar si el brazo robótico en el puerto correspondiente está encendido, y si los cables de datos de los servos del bus están sueltos o desconectados. Si la luz de un servo no está encendida, significa que el cable del servo anterior está suelto.

- Si encuentras el siguiente error al calibrar el brazo robótico:

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  Apaga y reinicia el brazo robótico, luego intenta calibrar nuevamente. Este método también se puede usar si el ángulo MAX alcanza un valor de decenas de miles durante la calibración. Si esto no funciona, necesitas recalibrar los servos correspondientes, incluyendo la calibración mediana y la escritura de ID.

- Si encuentras durante la fase de evaluación:

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  Por favor elimina primero la carpeta que comience con `eval_` y luego ejecuta el programa nuevamente.

- Si encuentras durante la fase de evaluación:

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  Por favor ten en cuenta que las palabras clave como "front" y "side" en el parámetro `--robot.cameras` deben ser estrictamente consistentes con las utilizadas al recopilar el conjunto de datos.

- Si has reparado o reemplazado partes del brazo robótico, por favor elimina completamente los archivos bajo `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y recalibra el brazo robótico. De lo contrario, pueden aparecer mensajes de error, ya que la información de calibración se almacena en archivos JSON en estos directorios.

- Entrenar ACT en 50 conjuntos de datos toma aproximadamente 6 horas en una laptop con RTX 3060 (8GB), y alrededor de 2-3 horas en computadoras con GPUs RTX 4090 o A100.

- Durante la recopilación de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental sean estables. Reduce la cantidad de fondo inestable y peatones capturados por la cámara, ya que cambios excesivos en el entorno de despliegue pueden causar que el brazo robótico falle al agarrar correctamente.

- Para el comando de recopilación de datos, asegúrate de que el parámetro `num-episodes` esté configurado para recopilar datos suficientes. No pauses manualmente a la mitad, ya que la media y la varianza de los datos se calculan solo después de que la recopilación de datos esté completa, las cuales son necesarias para el entrenamiento.

- Si el programa indica que no puede leer datos de imagen de la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar una velocidad de transmisión de imagen rápida.

- Si encuentras un error como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de verificar la sección FAQ al final de este tutorial, por favor reporta el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

## Cita

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

Proyecto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Proyecto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

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
