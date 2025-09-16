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
  date: 8/20/2025
  author: LiShanghang
---

# Cómo usar el brazo robótico SO-ARM100 y SO-ARM101 en la última versión de Lerobot

:::tip
El mantenimiento de este tutorial ha sido actualizado a la última versión de [lerobot](https://huggingface.co/docs/lerobot/index), si deseas consultar el tutorial de la versión anterior, por favor haz clic [aquí](https://wiki.seeedstudio.com/es/lerobot_so100m/).
:::

## Introducción

El [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico completamente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye el brazo seguidor y el brazo robótico líder, y también proporciona archivos detallados de impresión 3D y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien del intercambio de conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones del mundo real, centrándose en el aprendizaje por imitación. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, permitiendo a los usuarios comenzar sin la necesidad de ensamblar robots. En las próximas semanas, la intención es aumentar el soporte para robótica del mundo real en los robots más rentables y competentes actualmente accesibles.

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

## Novedades：

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

  [F. Teleoperación](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#teleoperate)

  [G. Agregar cámaras](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#add-cameras)

  [H. Grabar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#record-the-dataset)

  [I. Visualizar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#visualize-the-dataset)

  [J. Reproducir un episodio](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#replay-an-episode)

  [K. Entrenar una política](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#train-a-policy)

  [L. Evaluar tu política](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#evaluate-your-policy)

## Guía de Impresión 3D

:::caution
Siguiendo la actualización oficial de SO101, SO100 ya no será compatible y los archivos fuente serán eliminados según lo oficial, pero los archivos fuente aún se pueden encontrar en nuestro [Makerworld](https://makerworld.com/zh/models/908660). Sin embargo, para los usuarios que han comprado previamente SO100, los tutoriales y métodos de instalación siguen siendo compatibles. La impresión de SO101 es completamente compatible con la instalación del kit de motor de SO100.
:::

### Paso 1: Elegir una impresora

Los archivos STL proporcionados están listos para imprimir en muchas impresoras FDM. A continuación se muestran las configuraciones probadas y sugeridas aunque otras pueden funcionar.

- Material: PLA+
- Diámetro de Boquilla y Precisión: diámetro de boquilla de 0.4mm a altura de capa de 0.2mm o boquilla de 0.6mm a altura de capa de 0.4mm.
- Densidad de Relleno: 15%  

### Paso 2: Configurar la impresora
- Asegúrese de que la impresora esté calibrada y que el nivel de la cama esté configurado correctamente usando las instrucciones específicas de la impresora.
- Limpie la cama de impresión, asegurándose de que esté libre de polvo o grasa. Si limpia la cama con agua u otro líquido, seque la cama.
- Si su impresora lo recomienda, use una barra de pegamento estándar y aplique una capa delgada y uniforme de pegamento en el área de impresión de la cama. Evite la acumulación o aplicación desigual.
- Cargue el filamento de la impresora usando las instrucciones específicas de la impresora.
- Asegúrese de que la configuración de la impresora coincida con las sugeridas anteriormente (la mayoría de las impresoras tienen múltiples configuraciones, así que elija las que más se acerquen).
- Configure para soportes en todas partes pero ignore pendientes mayores a 45 grados respecto a la horizontal.
- No debe haber soportes en los agujeros de tornillos con ejes horizontales.

### Paso 3: Imprimir las piezas

Todas las piezas para el líder o seguidor están ya contenidas en un solo archivo para facilitar la impresión 3D, correctamente orientadas con z hacia arriba para minimizar los soportes.

- Para tamaños de cama de impresora de 220mmx220mm (como la Ender), imprima estos archivos:
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para tamaños de cama de impresora de 205mm x 250mm (como la Prusa/Up):
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Instalar LeRobot

Los entornos como pytorch y torchvision necesitan ser instalados basándose en su CUDA.

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

2. Crear y activar un entorno conda nuevo para lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clonar Lerobot:

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. Al usar miniconda, instale ffmpeg en su entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto generalmente instala ffmpeg 7.X para su plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (verifique los codificadores compatibles con ffmpeg -encoders), puede:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instalar las dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegúrese de usar el binario ffmpeg correspondiente a su instalación con which ffmpeg.

Si encuentra un error como este, también puede usar este comando.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. Instalar LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Para dispositivos Jetson Jetpack 6.0+ (asegúrese de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) del paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Verificar Pytorch y Torchvision

Dado que instalar el entorno lerobot a través de pip desinstalará el Pytorch y Torchvision originales e instalará las versiones CPU de Pytorch y Torchvision, necesita realizar una verificación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesita reinstalar Pytorch y Torchvision según el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si está usando un dispositivo Jetson, instale Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configurar los motores

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

El proceso de calibración e inicialización del servo para SO-ARM101 es el mismo que el de SO-ARM100 en términos tanto de método como de código. Sin embargo, tenga en cuenta que las relaciones de engranajes para las primeras tres articulaciones del Brazo Líder SO-ARM101 difieren de las de SO-ARM100, por lo que es importante distinguir y calibrarlas cuidadosamente.

Para configurar los motores, designe un adaptador de servo de bus y 6 motores para su brazo líder, y de manera similar el otro adaptador de servo de bus y 6 motores para el brazo seguidor. Es conveniente etiquetarlos y escribir en cada motor si es para el seguidor F o para el líder L y su ID del 1 al 6. Usamos **F1–F6** para representar las articulaciones 1 a 6 del **Brazo Seguidor**, y **L1–L6** para representar las articulaciones 1 a 6 del **Brazo Líder**. Los detalles correspondientes del modelo de servo, asignaciones de articulaciones y relación de engranajes son los siguientes:

| Modelo de Servo                        | Relación de Engranajes | Articulaciones Correspondientes |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                     | 1:191      | L1                           |
| ST-3215-C001(7.4V)                     | 1:345      | L2                           |
| ST-3215-C044(7.4V)                     | 1:191      | L3                           |
| ST-3215-C046(7.4V)                     | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V) | 1:345      | F1–F6                        |

:::danger
Ahora debe conectar la fuente de alimentación de 5V o 12V al bus del motor. 5V para los motores STS3215 7.4V y 12V para los motores STS3215 12V. Tenga en cuenta que el brazo líder siempre usa los motores de 7.4V, así que tenga cuidado de conectar la fuente de alimentación correcta si tiene motores de 12V y 7.4V, ¡de lo contrario podría quemar sus motores! Ahora, conecte el bus del motor a su computadora a través de USB. Tenga en cuenta que el USB no proporciona energía, y tanto la fuente de alimentación como el USB deben estar conectados.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***Los siguientes son los pasos de calibración del código, por favor calibre con el servo de cableado de referencia en la imagen de arriba***

Encontrar puertos USB asociados a sus brazos
Para encontrar los puertos correctos para cada brazo, ejecute el script de utilidad dos veces:

```bash
python -m lerobot.find_port
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
Recuerde quitar el usb, de lo contrario la interfaz no será detectada.
:::

Salida de ejemplo al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Salida de ejemplo al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Podría necesitar dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configure sus motores**

:::danger
Por favor use una fuente de alimentación de 5V para calibrar los motores Líder (ST-3215-C046, C044, 001).
:::

| **Calibración Articulación 6 Brazo Líder** | **Calibración Articulación 5 Brazo Líder** | **Calibración Articulación 4 Brazo Líder** | **Calibración Articulación 3 Brazo Líder** | **Calibración Articulación 2 Brazo Líder** | **Calibración Articulación 1 Brazo Líder** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Si compra la versión Arm Kit (ST-3215-C001), use una fuente de alimentación de 5V. Si compra la versión Arm Kit Pro, por favor use una fuente de alimentación de 12V para calibrar el servo (ST-3215-C047/ST-3215-C018).
:::

| **Calibración Articulación 6 Brazo Seguidor** | **Calibración Articulación 5 Brazo Seguidor** | **Calibración Articulación 4 Brazo Seguidor** | **Calibración Articulación 3 Brazo Seguidor** | **Calibración Articulación 2 Brazo Seguidor** | **Calibración Articulación 1 Brazo Seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |
:::tip
Nuevamente, asegúrese de que los IDs de las articulaciones del servo y las relaciones de engranajes correspondan estrictamente a las del SO-ARM101.
:::

Conecte el cable USB de su computadora y la fuente de alimentación a la placa controladora del brazo seguidor. Luego, ejecute el siguiente comando.

```bash
python -m lerobot.setup_motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

Debería ver la siguiente instrucción.

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

Como se indica, conecte el motor de la pinza. Asegúrese de que sea el único motor conectado a la placa, y que el motor en sí no esté aún conectado en cadena a ningún otro motor. Al presionar [Enter], el script configurará automáticamente el id y la velocidad de transmisión para ese motor.

Luego debería ver el siguiente mensaje:

```bash
'gripper' motor id set to 6
```

Seguido de la siguiente instrucción:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Puede desconectar el cable de 3 pines de la placa controladora, pero puede dejarlo conectado al motor de la pinza en el otro extremo, ya que ya estará en el lugar correcto. Ahora, conecte otro cable de 3 pines al motor de rotación de la muñeca y conéctelo a la placa controladora. Al igual que con el motor anterior, asegúrese de que sea el único motor conectado a la placa y que el motor en sí no esté conectado a ningún otro.

:::caution
Repita la operación para cada motor según las instrucciones.
:::

Verifique su cableado en cada paso antes de presionar Enter. Por ejemplo, el cable de la fuente de alimentación podría desconectarse mientras manipula la placa.

Cuando haya terminado, el script simplemente finalizará, momento en el cual los motores estarán listos para ser utilizados. Ahora puede conectar el cable de 3 pines de cada motor al siguiente, y el cable del primer motor (el 'giro del hombro' con id=1) a la placa controladora, que ahora puede ser fijada a la base del brazo.

Haga los mismos pasos para el brazo líder.

```bash
python -m lerobot.setup_motors \
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
- Antes del ensamblaje, verifique nuevamente su modelo de motor y relación de reducción. Si ha comprado SO100, puede ignorar este paso. Si ha comprado SO101, verifique la siguiente tabla para distinguir F1 a F6 y L1 a L6.

:::

  | Modelo de Servo                            | Relación de Engranajes | Articulaciones Correspondientes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Si compró el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compró el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso usando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso usando una fuente de alimentación de 12V.
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
Si compró el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compró el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso usando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso usando una fuente de alimentación de 12V.
:::

A continuación, necesita conectar la fuente de alimentación y el cable de datos a su robot SO-10x para la calibración para asegurar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot SO-10x funcione en otro. Si necesita recalibrar el brazo robótico, elimine los archivos bajo `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y recalibre el brazo robótico. De lo contrario, aparecerá un mensaje de error. La información de calibración del brazo robótico se almacenará en los archivos JSON bajo este directorio.

**Calibración manual del brazo seguidor**

Conecte las interfaces de los 6 servos del robot mediante un cable de 3 pines y conecte el servo del chasis a la placa de accionamiento del servo, luego ejecute el siguiente comando o ejemplo de API para calibrar el brazo robótico:

***Primero se otorgan permisos de interfaz***

```bash
sudo chmod 666 /dev/ttyACM*
```
***Luego calibra el brazo seguidor***

```python
python -m lerobot.calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm
```

El video a continuación muestra cómo realizar la calibración. Primero necesitas mover el robot a la posición donde todas las articulaciones estén en el medio de sus rangos. Luego, después de presionar enter, tienes que mover cada articulación a través de su rango completo de movimiento.

**Calibración manual del brazo líder**

Realiza los mismos pasos para calibrar el brazo líder, ejecuta el siguiente comando o ejemplo de API:

```python
python -m lerobot.calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
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
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

El comando teleoperate automáticamente:

1. Identificará cualquier calibración faltante e iniciará el procedimiento de calibración.
2. Conectará el robot y el dispositivo de teleoperación e iniciará la teleoperación.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Agregar cámaras

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Para instanciar una cámara, necesitas un identificador de cámara. Este identificador podría cambiar si reinicias tu computadora o reconectas tu cámara, un comportamiento que depende principalmente de tu sistema operativo.

Para encontrar los índices de cámara de las cámaras conectadas a tu sistema, ejecuta el siguiente script:

```python
python -m lerobot.find_cameras opencv # or realsense for Intel Realsense cameras
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
Al usar cámaras Intel RealSense en , podrías obtener este error: , esto se puede resolver ejecutando el mismo comando con permisos. Ten en cuenta que usar cámaras RealSense en es inestable.macOSError finding RealSense cameras: failed to set power statesudomacOS.
:::

Entonces podrás mostrar las cámaras en tu computadora mientras teleoperás ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Si tienes más cámaras, puedes cambiar `--robot.cameras` para agregar cámaras. Debes notar el formato del index_or_path, que está determinado por el último dígito del ID de cámara mostrado por `python -m lerobot.find_cameras opencv`.

Por ejemplo, quieres agregar una cámara lateral:

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

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
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` en la carpeta home, donde se creará la carpeta `seeedstudio123/test` mencionada anteriormente.

- Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho previamente, asegúrate de haber iniciado sesión usando un token de acceso de escritura, que se puede generar desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

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
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
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

**Explicaciones de Parámetros**

- episode-time-s: Representa el tiempo para recopilar datos cada vez.
- reset-time-s: Es el tiempo de preparación entre cada recopilación de datos.
- num-episodes: Indica cuántos grupos de datos se espera recopilar.
- push-to-hub: Determina si subir los datos al HuggingFace Hub.

:::tip

- "Si quieres guardar los datos localmente (`--dataset.push_to_hub=false`), reemplaza `--dataset.repo_id=${HF_USER}/so101_test` con un nombre de carpeta local personalizado, como `--dataset.repo_id=seeed_123/so101_test`. Entonces se almacenará en el directorio home del sistema en `~/.cache/huggingface/lerobot`."

- Si subiste tu conjunto de datos al hub con `--dataset.push_to_hub=true`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu repo id dado por:

- Presiona la flecha derecha → en cualquier momento durante la grabación del episodio para detener temprano e ir al reinicio. Lo mismo durante el reinicio, para detener temprano e ir a la siguiente grabación de episodio.

- Presiona la flecha izquierda ← en cualquier momento durante la grabación del episodio o reinicio para detener temprano, cancelar el episodio actual y volver a grabarlo.

- Presiona escape ESC en cualquier momento durante la grabación del episodio para terminar la sesión temprano e ir directamente a la codificación de video y subida del conjunto de datos.

- Nota: Los puntos de control se crean automáticamente durante la grabación. Si ocurre un problema, puedes reanudar ejecutando el mismo comando con `--resume=true`. Para comenzar a grabar desde cero, elimina manualmente el directorio del conjunto de datos.
- Una vez que te sientas cómodo con la grabación de datos, puedes crear un conjunto de datos más grande para el entrenamiento. Una buena tarea inicial es agarrar un objeto en diferentes ubicaciones y colocarlo en un contenedor. Sugerimos grabar al menos 50 episodios, con 10 episodios por ubicación. Mantén las cámaras fijas y conserva un comportamiento de agarre consistente durante todas las grabaciones. También asegúrate de que el objeto que estás manipulando sea visible en las cámaras. Una buena regla general es que deberías poder realizar la tarea tú mismo solo mirando las imágenes de la cámara.

- En las siguientes secciones, entrenarás tu red neuronal. Después de lograr un rendimiento de agarre confiable, puedes comenzar a introducir más variaciones durante la recolección de datos, como ubicaciones de agarre adicionales, diferentes técnicas de agarre y alteración de las posiciones de la cámara.

- Evita agregar demasiada variación muy rápidamente, ya que puede perjudicar tus resultados.

- En Linux, si las teclas de flecha izquierda y derecha y la tecla escape no tienen ningún efecto durante la grabación de datos, asegúrate de haber configurado la variable de entorno $DISPLAY. Ver [limitaciones de pynput](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualizar el conjunto de datos

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

```bash
echo ${HF_USER}/so101_test  
```

Si no subiste con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/so101_test \
```

Si subes con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
python -m lerobot.scripts.visualize_dataset_html \
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

Ahora intenta reproducir el primer episodio en tu robot:

```bash
python -m lerobot.replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

## Entrenar una política

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Para entrenar una política para controlar tu robot, usa el script python -m lerobot.scripts.train. Se requieren algunos argumentos. Aquí tienes un comando de ejemplo:

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el usado durante la recolección de datos y agrega `--policy.push_to_hub=False`.**

```bash
python -m lerobot.scripts.train \
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
- **Tipo de política**: Proporcionamos la política con `policy.type=act`. De manera similar, puedes cambiar entre políticas como [act, diffusion, pi0, pi0fast, pi0fast, sac, smolvla]., que cargará la configuración desde `configuration_act.py`. Importante, esta política se adaptará automáticamente a los estados del motor de tu robot (por ejemplo, `laptop` y `phone`), acciones del motor y el número de cámaras, ya que esta información ya está almacenada en tu conjunto de datos.
- **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
- **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar gráficos de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

Si encuentras el siguiente error:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

Intenta ejecutar el siguiente comando para resolverlo:

```bash
pip install datasets==2.19
```

El entrenamiento debería tomar varias horas. Encontrarás puntos de control en `outputs/train/act_so100_test/checkpoints`.

Para reanudar el entrenamiento desde un punto de control, a continuación se muestra un comando de ejemplo para reanudar desde el último punto de control de la política `act_so101_test`:

```bash
python -m lerobot.scripts.train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Subir puntos de control de política**

Una vez que el entrenamiento esté terminado, sube el último punto de control con:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

También puedes subir puntos de control intermedios con:

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```

## Evaluar tu política

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un punto de control de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

```bash
python -m lerobot.record  \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

como:

```bash
python -m lerobot.record  \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados de entrenamiento de tu política (por ejemplo, `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos del resultado del entrenamiento del modelo a Hub, también puedes usar el repositorio del modelo (por ejemplo, `${HF_USER}/act_so100_test`).

2. El nombre del conjunto de datos `dataset.repo_id` comienza con `eval_`. Esta operación grabará por separado videos y datos durante la evaluación, que se guardarán en la carpeta que comience con `eval_`, como `seeed/eval_test123`.

3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, por favor elimina primero la carpeta que comience con `eval_` y luego ejecuta el programa nuevamente.

4. Cuando encuentres `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que las palabras clave como front y side en el parámetro `--robot.cameras` deben ser estrictamente consistentes con las usadas al recopilar el conjunto de datos.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- Si estás siguiendo esta documentación/tutorial, por favor clona el repositorio de GitHub recomendado `https://github.com/Seeed-Projects/lerobot.git`. El repositorio recomendado en esta documentación es una versión estable verificada; el repositorio oficial de Lerobot se actualiza continuamente a la última versión, lo que puede causar problemas imprevistos como diferentes versiones de conjuntos de datos, diferentes comandos, etc.

- Si encuentras el siguiente error al calibrar los IDs de servo:

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  Por favor verifica cuidadosamente si el cable de comunicación está conectado correctamente al servo y si la fuente de alimentación está proporcionando el voltaje correcto.

- Si encuentras:

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  Y puedes ver que ACM0 existe al ejecutar `ls /dev/ttyACM*`, significa que olvidaste otorgar permisos del puerto serie. Ingresa `sudo chmod 666 /dev/ttyACM*` en la terminal para solucionarlo.

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

  Ten en cuenta que las palabras clave como "front" y "side" en el parámetro `--robot.cameras` deben ser estrictamente consistentes con las utilizadas al recopilar el conjunto de datos.

- Si has reparado o reemplazado partes del brazo robótico, por favor elimina completamente los archivos bajo `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` y recalibra el brazo robótico. De lo contrario, pueden aparecer mensajes de error, ya que la información de calibración se almacena en archivos JSON en estos directorios.

- Entrenar ACT en 50 conjuntos de datos toma aproximadamente 6 horas en una laptop con RTX 3060 (8GB), y alrededor de 2-3 horas en computadoras con GPUs RTX 4090 o A100.

- Durante la recopilación de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental sean estables. Reduce la cantidad de fondo inestable y peatones capturados por la cámara, ya que cambios excesivos en el entorno de despliegue pueden causar que el brazo robótico falle al agarrar correctamente.

- Para el comando de recopilación de datos, asegúrate de que el parámetro `num-episodes` esté configurado para recopilar datos suficientes. No pauses manualmente a la mitad, ya que la media y la varianza de los datos se calculan solo después de que se complete la recopilación de datos, las cuales son necesarias para el entrenamiento.

- Si el programa indica que no puede leer datos de imagen de la cámara USB, asegúrate de que la cámara USB no esté conectada a través de un hub. La cámara USB debe estar conectada directamente al dispositivo para garantizar una velocidad de transmisión de imagen rápida.

- Si encuentras un error como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de verificar la sección de FAQ al final de este tutorial, por favor reporta el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
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

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
