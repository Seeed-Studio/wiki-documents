---
description: Este wiki proporciona el tutorial de ensamblaje y depuración para el SO ARM100 y realiza la recolección de datos y entrenamiento dentro del framework Lerobot.
title: Cómo usar el brazo robótico SO10xArm en Lerobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /es/lerobot_so100m
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
---

# Cómo usar el brazo robótico SO-ARM100 y SO-ARM101 en la versión antigua de Lerobot

:::tip
Este repositorio de tutorial mantiene la versión estable verificada de Lerobot al 5 de junio de 2025. Actualmente, ​Hugging Face​ ha lanzado una ​actualización importante​ a Lerobot, introduciendo muchas nuevas características. Si quieres experimentar los tutoriales más recientes, por favor sigue la [​documentación oficial​ para orientación](https://huggingface.co/docs/lerobot/index).
:::

## Introducción

El [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico completamente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye el brazo seguidor y el brazo robótico líder, y también proporciona archivos detallados de impresión 3D y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) está comprometido a proporcionar modelos, conjuntos de datos y herramientas para robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien del intercambio de conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicación en el mundo real, centrándose en el aprendizaje por imitación. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos que presentan demostraciones recopiladas por humanos, y entornos de simulación, permitiendo a los usuarios comenzar sin la necesidad de ensamblar robots. En las próximas semanas, la intención es aumentar el soporte para robótica del mundo real en los robots más rentables y competentes actualmente accesibles.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introducción de Proyectos

El kit de robot inteligente AI SO-ARM10x y reComputer Jetson combina perfectamente el control de brazo robótico de alta precisión con una plataforma de computación AI potente, proporcionando una solución integral de desarrollo de robots. Este kit está basado en la plataforma Jetson Orin o AGX Orin, combinado con el brazo robótico SO-ARM10x y el framework AI LeRobot, ofreciendo a los usuarios un sistema de robot inteligente aplicable a múltiples escenarios como educación, investigación y automatización industrial.
Este wiki proporciona el tutorial de ensamblaje y depuración para el SO ARM10x y realiza la recolección de datos y entrenamiento dentro del framework Lerobot.

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
2. **Integración con LeRobot**: Diseñado para integración con [plataforma LeRobot](https://github.com/huggingface/lerobot)
3. **Abundantes recursos de aprendizaje**: Proporciona recursos de aprendizaje de código abierto integrales como guías de ensamblaje y calibración, y tutoriales para pruebas, recolección de datos, entrenamiento y despliegue para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.
4. **Compatible con Nvidia**: Despliega este kit de brazo con reComputer Mini J4012 Orin NX 16 GB.
5. **Aplicación Multi-Escenario**: Es aplicable a campos como educación, investigación científica, producción automatizada y robótica, ayudando a los usuarios a lograr operaciones robóticas eficientes y precisas en varias tareas complejas.

## Novedades：

- Optimización del cableado: Comparado con SO-ARM100, SO-ARM101 presenta un cableado mejorado que previene problemas de desconexión previamente vistos en la articulación 3. El nuevo diseño de cableado también ya no limita el rango de movimiento de las articulaciones.
- Diferentes relaciones de engranajes para el brazo líder: El brazo líder ahora usa motores con relaciones de engranajes optimizadas, mejorando el rendimiento y eliminando la necesidad de cajas de engranajes externas.
- Soporte de nueva funcionalidad: El brazo líder ahora puede seguir al brazo seguidor en tiempo real, lo cual es crucial para la próxima política de aprendizaje, donde un humano puede intervenir y corregir las acciones del robot.

:::caution

Seeed Studio solo es responsable de la calidad del hardware en sí. Los tutoriales se actualizan estrictamente de acuerdo con la documentación oficial. Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de verificar la sección de FAQ al final de este tutorial, por favor reporta el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal Discord de LeRobot](https://discord.gg/8TnwDdjFGU).

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
        3x motores ST-3215-C046 (7.4V) con relación de engranajes 1:147 para las articulaciones 4, 5, y pinza (articulación 6)
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

Si compras la versión Arm Kit, ambas fuentes de alimentación son de 5V. Si compras la versión Arm Kit Pro, por favor usa la fuente de alimentación de 5V para la calibración y cada paso del brazo robótico Leader, y la fuente de alimentación de 12V para la calibración y cada paso del brazo robótico Follower.

:::

## Lista de Materiales (BOM)

| Parte | Cantidad | Incluido|
|--|--|--|
|  Servomotores | 12 | ✅ |
| Placa de Control de Motor | 2 | ✅ |
| Cable USB-C 2 piezas | 1 | ✅ |
| Fuente de Alimentación2 | 2 | ✅ |
| Abrazadera de Mesa| 4 | ✅ |
| Piezas impresas en 3D del brazo | 1 | Opción |

## Entorno del Sistema Inicial

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Para Jetson Orin:**

- Jetson JetPack 6.2  
- Python 3.10  
- Torch 2.6  

## Tabla de Contenidos

  [A. Guía de Impresión 3D](https://wiki.seeedstudio.com/es/lerobot_so100m/#install-lerobot)

  [B. Instalar LeRobot](https://wiki.seeedstudio.com/es/lerobot_so100m/#install-lerobot)

  [C. Configurar los motores](https://wiki.seeedstudio.com/es/lerobot_so100m/#configure-the-motors)

  [D. Ensamblaje](https://wiki.seeedstudio.com/es/lerobot_so100m/#assembly)

  [E. Calibrar](https://wiki.seeedstudio.com/es/lerobot_so100m/#calibrate)

  [F. Teleoperar](https://wiki.seeedstudio.com/es/lerobot_so100m/#teleoperate)

  [G. Añadir cámaras](https://wiki.seeedstudio.com/es/lerobot_so100m/#add-cameras)

  [H. Grabar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m/#record-the-dataset)

  [I. Visualizar el conjunto de datos](https://wiki.seeedstudio.com/es/lerobot_so100m/#visualize-the-dataset)

  [J. Reproducir un episodio](https://wiki.seeedstudio.com/es/lerobot_so100m/#replay-an-episode)

  [K. Entrenar una política](https://wiki.seeedstudio.com/es/lerobot_so100m/#train-a-policy)

  [L. Evaluar tu política](https://wiki.seeedstudio.com/es/lerobot_so100m/#evaluate-your-policy)

## Guía de Impresión 3D

:::caution
Siguiendo la actualización oficial de SO101, SO100 ya no lo soportará y los archivos fuente serán eliminados según lo oficial, pero los archivos fuente aún se pueden encontrar en nuestro [Makerworld](https://makerworld.com/zh/models/908660). Sin embargo, para los usuarios que han comprado previamente SO100, los tutoriales y métodos de instalación siguen siendo compatibles. La impresión de SO101 es completamente compatible con la instalación del kit de motores de SO100.
:::

### Paso 1: Elegir una impresora

Los archivos STL proporcionados están listos para imprimir en muchas impresoras FDM. A continuación se muestran las configuraciones probadas y sugeridas, aunque otras pueden funcionar.

- Material: PLA+
- Diámetro de Boquilla y Precisión: diámetro de boquilla de 0.4mm a altura de capa de 0.2mm o boquilla de 0.6mm a altura de capa de 0.4mm.
- Densidad de Relleno: 15%  

### Paso 2: Configurar la impresora

- Asegúrate de que la impresora esté calibrada y el nivel de la cama esté configurado correctamente usando las instrucciones específicas de la impresora.
- Limpia la cama de impresión, asegurándote de que esté libre de polvo o grasa. Si limpias la cama usando agua u otro líquido, seca la cama.
- Si tu impresora lo recomienda, usa una barra de pegamento estándar y aplica una capa delgada y uniforme de pegamento en el área de impresión de la cama. Evita aglomeraciones o aplicación desigual.
- Carga el filamento de la impresora usando las instrucciones específicas de la impresora.
- Asegúrate de que las configuraciones de la impresora coincidan con las sugeridas arriba (la mayoría de las impresoras tienen múltiples configuraciones, así que elige las que más se acerquen).
- Configura para soportes en todas partes pero ignora pendientes mayores a 45 grados respecto a la horizontal.
- No debería haber soportes en los agujeros de tornillos con ejes horizontales.

### Paso 3: Imprimir las piezas

Todas las piezas para el líder o seguidor están para fácil impresión 3D ya contenidas en un solo archivo, correctamente orientadas para z hacia arriba para minimizar soportes.

- Para tamaños de cama de impresora de 220mmx220mm (como la Ender), imprime estos archivos:
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para tamaños de cama de impresora de 205mm x 250mm (como la Prusa/Up):
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Instalar LeRobot

Los entornos como pytorch y torchvision necesitan ser instalados basándose en tu CUDA.

1. Instalar Miniconda:
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

2. Create and activate a fresh conda environment for lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clona Lerobot:

```bash
git clone https://github.com/ZhuYaoHui1998/lerobot.git ~/lerobot
```

**Adaptamos la cámara de profundidad Orbbec Gemini2 y encontramos que una sola cámara de profundidad funciona mejor que dos cámaras RGB. Si también estás usando esta cámara, por favor clona la rama del repositorio de conversión a Orbbec y sigue nuestros pasos posteriores para configurar la cámara.**  

```bash  
cd ~/lerobot  
git checkout orbbec  
```  

**Si solo estás usando RGB, no cambies de rama, de lo contrario pueden ocurrir errores relacionados con dependencias. Si ya has cambiado a `orbbec` y quieres volver a la versión original:**  

```bash  
cd ~/lerobot  
git checkout main  
```

4. Cuando uses miniconda, instala ffmpeg en tu entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto usualmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (verifica los codificadores compatibles con ffmpeg -encoders), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Solo en Linux] Instala las dependencias de compilación de ffmpeg y compila ffmpeg desde el código fuente con libsvtav1, y asegúrate de usar el binario de ffmpeg correspondiente a tu instalación con which ffmpeg.

:::

5. Instala LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

6. (Este paso se puede omitir en el lado de la computadora X86 Ubuntu.) Para dispositivos Jetson Jetpack (por favor asegúrate de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) del paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

7. Verificar Pytorch y Torchvision

Dado que instalar el entorno lerobot a través de pip desinstalará el Pytorch y Torchvision originales e instalará las versiones CPU de Pytorch y Torchvision, necesitas realizar una verificación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesitas reinstalar Pytorch y Torchvision según el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si estás usando un dispositivo Jetson, instala Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configurar los motores

:::danger  
Debido a actualizaciones del código oficial y del firmware del fabricante de servos, los usuarios antes del 30 de junio de 2025, por favor descarguen primero el [software de computadora host oficial de Feetech](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250706).7z) (para sistemas Windows). Encienda y conecte todos los servos, seleccione el `Número de Puerto` correspondiente -> `Baudrate 1000000` -> `Abrir` -> `Buscar`. Después de detectar todos los servos, haga clic en `Actualizar` -> `Detección en Línea` -> `Actualizar Firmware` para asegurar que la versión del firmware se actualice de 3.9 a 3.10 para evitar problemas posteriores.  
:::

:::note
Si el servo no puede ser reconocido nuevamente después de una actualización de firmware fallida, puede conectar otro servo detectable directamente a la computadora host, luego realizar un escaneo de motor y detección de firmware en línea. Mantenga la ventana actual abierta, desconecte inmediatamente el servo actual, y conecte el servo no reconocido en su lugar. Haga clic en "Actualización en Línea" dentro de 1 segundo. Si falla, puede reintentar múltiples veces.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

El proceso de calibración e inicialización del servo para SO-ARM101 es el mismo que el de SO-ARM100 en términos tanto de método como de código. Sin embargo, tenga en cuenta que las relaciones de engranaje para las primeras tres articulaciones del Brazo Líder SO-ARM101 difieren de las del SO-ARM100, por lo que es importante distinguir y calibrarlas cuidadosamente.

Para configurar los motores, designe un adaptador de servo de bus y 6 motores para su brazo líder, y de manera similar el otro adaptador de servo de bus y 6 motores para el brazo seguidor. Es conveniente etiquetarlos y escribir en cada motor si es para el seguidor F o para el líder L y su ID del 1 al 6. Usamos **F1–F6** para representar las articulaciones 1 a 6 del **Brazo Seguidor**, y **L1–L6** para representar las articulaciones 1 a 6 del **Brazo Líder**. Los detalles correspondientes del modelo de servo, asignaciones de articulaciones y relación de engranaje son los siguientes:

| Modelo de Servo                            | Relación de Engranaje | Articulaciones Correspondientes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Ahora debes conectar la fuente de alimentación de 5V o 12V al bus del motor. 5V para los motores STS3215 de 7.4V y 12V para los motores STS3215 de 12V. Ten en cuenta que el brazo líder siempre usa los motores de 7.4V, así que asegúrate de conectar la fuente de alimentación correcta si tienes motores de 12V y 7.4V, ¡de lo contrario podrías quemar tus motores! Ahora, conecta el bus del motor a tu computadora vía USB. Ten en cuenta que el USB no proporciona energía, y tanto la fuente de alimentación como el USB deben estar conectados.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

**Encontrar puertos USB asociados a tus brazos**
Para encontrar los puertos correctos para cada brazo, ejecuta el script de utilidad dos veces:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

Ejemplo de salida al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Ejemplo de salida al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Solución de problemas: En Linux, es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configura tus motores**

:::danger
Por favor usa una fuente de alimentación de 5V para calibrar los motores Leader (ST-3215-C046, C044, 001).
:::

| **Calibración Articulación 6 Brazo Leader** | **Calibración Articulación 5 Brazo Leader** | **Calibración Articulación 4 Brazo Leader** | **Calibración Articulación 3 Brazo Leader** | **Calibración Articulación 2 Brazo Leader** | **Calibración Articulación 1 Brazo Leader** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Si compras la versión Arm Kit (ST-3215-C001), usa una fuente de alimentación de 5V. Si compras la versión Arm Kit Pro, por favor usa una fuente de alimentación de 12V para calibrar el servo (ST-3215-C047/ST-3215-C018).
:::

| **Calibración Articulación 6 Brazo Seguidor** | **Calibración Articulación 5 Brazo Seguidor** | **Calibración Articulación 4 Brazo Seguidor** | **Calibración Articulación 3 Brazo Seguidor** | **Calibración Articulación 2 Brazo Seguidor** | **Calibración Articulación 1 Brazo Seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

También puedes consultar nuestro video de calibración de servo SO-ARM100, pero asegúrate de que los IDs de las articulaciones del servo y las relaciones de engranajes correspondan estrictamente a los del SO-ARM101.

Conecta tu primer motor y ejecuta este script para establecer su ID a 1. También establecerá su posición actual a 2048, así que espera que tu motor rote:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

Nota: Estos motores están actualmente limitados. Solo pueden tomar valores entre 0 y 4096, lo que corresponde a una vuelta completa. No pueden girar más que eso. 2048 está en el medio de este rango, por lo que podemos tomar -2048 pasos (180 grados en sentido antihorario) y alcanzar el rango máximo, o tomar +2048 pasos (180 grados en sentido horario) y alcanzar el rango máximo. El paso de configuración también establece el desplazamiento de origen en 0, de modo que si ensamblaste mal el brazo, siempre puedes actualizar el desplazamiento de origen para compensar un cambio de hasta ± 2048 pasos (± 180 grados).

Luego desconecta tu motor y conecta el segundo motor y establece su ID en 2.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

Repite el proceso para todos tus motores hasta el ID 6. Haz lo mismo para los 6 motores del brazo líder.
</TabItem>

<TabItem value="SO100" label="SO100">

Designa un adaptador de servo bus y 6 motores para tu brazo líder, y de manera similar el otro adaptador de servo bus y 6 motores para el brazo seguidor. Es conveniente etiquetarlos y escribir en cada motor si es para el seguidor F o para el líder L y su ID del 1 al 6 (F1...F6 y L1...L6).

Sigue los pasos 1 del [video de ensamblaje](https://www.youtube.com/watch?v=FioA2oeFZ5I) que ilustra el uso de nuestros scripts a continuación.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**Encuentra los puertos USB asociados a tus brazos**
Para encontrar los puertos correctos para cada brazo, ejecuta el script de utilidad dos veces:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

Ejemplo de salida al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Ejemplo de salida al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Solución de problemas: En Linux, es posible que necesites dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configura tus motores**

Conecta tu primer motor y ejecuta este script para establecer su ID a 1. También establecerá su posición actual a 2048, así que espera que tu motor rote:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

:::note
Nota: Estos motores están actualmente limitados. Solo pueden tomar valores entre 0 y 4096, lo que corresponde a una vuelta completa. No pueden girar más que eso. 2048 está en el medio de este rango, por lo que podemos tomar -2048 pasos (180 grados en sentido antihorario) y alcanzar el rango máximo, o tomar +2048 pasos (180 grados en sentido horario) y alcanzar el rango máximo. El paso de configuración también establece el desplazamiento de origen en 0, de modo que si ensamblaste mal el brazo, siempre puedes actualizar el desplazamiento de origen para compensar un cambio de hasta ± 2048 pasos (± 180 grados).
:::

Luego desconecta tu motor y conecta el segundo motor y establece su ID en 2.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

Repite el proceso para todos tus motores hasta el ID 6. Haz lo mismo para los 6 motores del brazo líder.
</TabItem>
</Tabs>

## Ensamblaje

:::tip

- El proceso de ensamblaje de doble brazo del SO-ARM101 es el mismo que el del SO-ARM100. Las únicas diferencias son la adición de clips de cable en el SO-ARM101 y las diferentes relaciones de engranaje de los servos de las articulaciones en el Brazo Líder. Por lo tanto, tanto el SO100 como el SO101 se pueden instalar siguiendo el siguiente contenido
- Después de calibrar los servos, no los gires antes de apretar los tornillos. Asegúrate de que la orientación de las piezas impresas en 3D coincida con la dirección de referencia en las imágenes y que los motores estén en sus posiciones centrales.

- Antes del ensamblaje, por favor verifica nuevamente el modelo de tu motor y la relación de reducción. Si has comprado el SO100, puedes ignorar este paso. Si has comprado el SO101, por favor verifica la siguiente tabla para distinguir F1 a F6 y L1 a L6.

:::

  | Modelo de Servo                            | Relación de Engranaje | Articulaciones Correspondientes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe ser calibrado y operado en cada paso usando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe ser calibrado y operado en cada paso usando una fuente de alimentación de 12V.
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
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el Brazo Líder debe calibrarse y operarse en cada paso usando una fuente de alimentación de 5V, mientras que el Brazo Seguidor debe calibrarse y operarse en cada paso usando una fuente de alimentación de 12V.
:::

A continuación, necesitas conectar la fuente de alimentación y el cable de datos a tu robot SO-10x para la calibración para asegurar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot SO-10x funcione en otro. Si necesitas recalibrar el brazo robótico, elimina la carpeta `~/lerobot/.cache/huggingface/calibration/so101`.

**Calibración manual del brazo seguidor**

IMPORTANTE: Ahora que tienes tus puertos, actualiza los valores predeterminados de puerto de [SO101RobotConfig](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) (`lerobot/lerobot/common/robot_devices/robots/configs.py`). Encontrarás algo como:

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM1",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )
```

<details>

<summary> Teleoperación de Brazo Dual. (Opcional) </summary>

Si quieres implementar teleoperación de brazo dual, significa que necesitas dos brazos robóticos Líder y dos brazos robóticos Seguidor. Por lo tanto, necesitas añadir los nombres de clase de los brazos robóticos y sus números de puerto correspondientes en el `leader_arms dick` y `follower_arms dick`, por ejemplo:

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev/ttyACM1",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM2",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM3",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

```

:::caution
Necesitas hacer coincidir correctamente los nombres izquierdo y derecho de los brazos duales y asegurar que el número de puerto serie de cada brazo robótico en el dispositivo esté asignado correctamente.
:::

En el siguiente paso, al calibrar los brazos robóticos, necesitas calibrar los cuatro brazos individualmente. El comando es el siguiente:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["left_follower"]'
  #  --control.arms='["right_follower"]'
  #  --control.arms='["left_leader"]'
  #  --control.arms='["right_leader"]'
```

Después de completar la calibración, puedes ver los resultados en el directorio .cache/calibration/so101.

```bash
`-- calibration
    `-- so101
        |-- left_follower.json
        |-- left_leader.json
        |-- right_follower.json
        `-- right_leader.json
```

Los pasos posteriores son los mismos que para la configuración de un solo brazo.

</details>

```bash
sudo chmod 666 /dev/ttyACM*
```

**Calibración manual del brazo Seguidor**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

**Calibración manual del brazo líder**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **Posición Media del Seguidor** | **Posición Cero del Seguidor** | **Posición Rotada del Seguidor** | **Posición de Reposo del Seguidor** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |
| **Posición Media del Líder** | **Posición Cero del Líder** | **Posición Rotada del Líder** | **Posición de Reposo del Líder** |
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

## Teleoperar

**Teleoperación simple**
¡Entonces estás listo para teleoperar tu robot! Ejecuta este script simple (no se conectará ni mostrará las cámaras):

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Agregar cámaras

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Después de insertar sus dos cámaras USB, ejecute el siguiente script para verificar los números de puerto de las cámaras. Es importante recordar que la cámara no debe conectarse a un Hub USB; en su lugar, debe conectarse directamente al dispositivo. La velocidad más lenta de un Hub USB puede resultar en la incapacidad de leer datos de imagen.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

La terminal imprimirá la siguiente información.

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 2
Camera found at index 4
[...]
Connecting cameras
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

Puedes encontrar las imágenes tomadas por cada cámara en el directorio `outputs/images_from_opencv_cameras`, y confirmar la información del índice de puerto correspondiente a las cámaras en diferentes posiciones. Luego completa la alineación de los parámetros de la cámara en el archivo `lerobot/lerobot/common/robot_devices/robots/configs.py`.

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

<details>

<summary> Agregar dos o más cámaras adicionales. (Opcional) </summary>
Si deseas agregar más cámaras, puedes continuar agregando diferentes nombres de cámara y valores de `camera_index` en el diccionario de cámaras, siempre que la entrada USB lo permita. Ten en cuenta que no se recomienda usar un hub USB para las cámaras.

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "new_camera": OpenCVCameraConfig( ##### UPDATE HEARE
                camera_index=3,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

</details>

<details>

<summary>Usando una Sola Cámara de Profundidad Orbbec Gemini 2</summary>

:::tip
Este proyecto fue iniciado por Orbbec con valiosa orientación, e implementado por Jiaquan Zhang, Wenzhao Wang, y Jinpeng Huang de la Universidad Normal del Sur de China. Permite el uso de cámaras Orbbec para recopilar datos de profundidad dentro del framework lerobot, enriqueciendo así la percepción ambiental de los brazos robóticos.
Si ya tienes una cámara de profundidad Orbbec Gemini2, nuestra configuración de prueba actual coloca la cámara de profundidad en la posición frontal superior. Por favor, sigue las instrucciones de instalación a continuación.
:::

**Instalar y Compilar el SDK de Python de la Cámara de Profundidad Gemini 2**

1. Clonar pyOrbbecsdk

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

2. Instalar dependencias y compilar pyOrbbecsdk

```bash
conda activate lerobot
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
pip3 install -r requirements.txt
mkdir build
cd build
cmake -Dpybind11_DIR=`pybind11-config --cmakedir` ..
make -j4
make install
cd ~/pyorbbecsdk
pip install -e .
```

3. Prueba si la cámara de profundidad funciona correctamente

```bash
cd ~/pyorbbecsdk 
pip install -e .
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

However, you need to run these commands again when opening a new terminal:

```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

También puedes añadir lo siguiente al final de tu archivo `.bashrc`:

```bash
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ~/pyorbbecsdk/scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

Esto cargará automáticamente el entorno de la cámara de profundidad al iniciar un terminal.

Después de conectar tu cámara de profundidad Orbbec, ejecuta el siguiente script para verificar el flujo de datos de profundidad y el flujo de datos de color. Se abrirán dos ventanas, permitiéndote ajustar la posición de la cámara. Usa Ctrl+C en el terminal para salir. Importante: La cámara debe estar conectada directamente a tu dispositivo, no a través de un hub USB, ya que el ancho de banda del hub puede ser demasiado lento para la transmisión de datos de imagen.

Después de ajustar la cámara, alinea los parámetros de la cámara en el archivo de configuración en `lerobot/lerobot/common/robot_devices/robots/configs.py`.

```python
@RobotConfig.register_subclass("so101")  # Also compatible with so100
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "Orbbec":OrbbecCameraConfig(    # Add Orbbec camera configuration here
                fps=30,
                use_depth=True,             # Whether to use depth
                width = 640,                # Resolution automatically adapts to width. Only 640 or 1280 (untested) are valid values
                Hi_resolution_mode = False, # High resolution mode (may reduce visualization quality but improves depth data resolution)
            ),

        }
    )

    mock: bool = False
```

</details>

Luego podrás mostrar las cámaras en tu computadora mientras estés teleoperando ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Grabar el conjunto de datos

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Una vez que te familiarices con la teleoperación, puedes grabar tu primer conjunto de datos con SO-10x.

Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho anteriormente, asegúrate de haber iniciado sesión usando un token de acceso de escritura, que se puede generar desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Almacena el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Graba 2 episodios y sube tu conjunto de datos al hub:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/so101_test \
  --control.tags='["so101","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.display_data=true \
  --control.push_to_hub=true
```

Verás muchas líneas apareciendo como esta:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Explicaciones de Parámetros**

- wormup-time-s: Se refiere al tiempo de inicialización.
- episode-time-s: Representa el tiempo para recopilar datos cada vez.
- reset-time-s: Es el tiempo de preparación entre cada recopilación de datos.
- num-episodes: Indica cuántos grupos de datos se espera recopilar.
- push-to-hub: Determina si subir los datos al HuggingFace Hub.

:::tip

- "Si quieres guardar los datos localmente (`--control.push_to_hub=false`), reemplaza `--control.repo_id=${HF_USER}/so101_test` con un nombre de carpeta local personalizado, como `--control.repo_id=seeed_123/so101_test`. Entonces se almacenará en el directorio home del sistema en `~/.cache/huggingface/lerobot`."

- Si subiste tu conjunto de datos al hub con `--control.push_to_hub=true`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu repo id dado por:

- Presiona la flecha derecha → en cualquier momento durante la grabación del episodio para detener temprano e ir al reinicio. Lo mismo durante el reinicio, para detener temprano e ir a la siguiente grabación de episodio.

- Presiona la flecha izquierda ← en cualquier momento durante la grabación del episodio o reinicio para detener temprano, cancelar el episodio actual, y volver a grabarlo.

- Presiona escape ESC en cualquier momento durante la grabación del episodio para terminar la sesión temprano e ir directamente a la codificación de video y subida del conjunto de datos.

- Nota: Puedes reanudar la grabación añadiendo --control.resume=true. También si no has subido tu conjunto de datos aún, añade --control.local_files_only=true. Necesitarás eliminar manualmente el directorio del conjunto de datos si quieres empezar a grabar desde cero.

- Una vez que te sientas cómodo con la grabación de datos, puedes crear un conjunto de datos más grande para entrenamiento. Una buena tarea inicial es agarrar un objeto en diferentes ubicaciones y colocarlo en un contenedor. Sugerimos grabar al menos 50 episodios, con 10 episodios por ubicación. Mantén las cámaras fijas y mantén un comportamiento de agarre consistente durante todas las grabaciones. También asegúrate de que el objeto que estás manipulando sea visible en las cámaras. Una buena regla general es que deberías poder hacer la tarea tú mismo solo mirando las imágenes de la cámara.

- En las siguientes secciones, entrenarás tu red neuronal. Después de lograr un rendimiento de agarre confiable, puedes empezar a introducir más variaciones durante la recopilación de datos, como ubicaciones de agarre adicionales, diferentes técnicas de agarre, y alterar las posiciones de la cámara.

- Evita añadir demasiada variación muy rápidamente, ya que puede obstaculizar tus resultados.

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

Si no subiste con `--control.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so101_test \
```

Si subes con `--control.push_to_hub=false`, también puedes visualizarlo localmente con:

```bash
python lerobot/scripts/visualize_dataset_html.py \
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
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so101_test \
  --control.episode=0
```

Nota: Si aún no has subido tu conjunto de datos, añade `--control.local_files_only=true` .

## Entrenar una política

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Para entrenar una política para controlar tu robot, usa el script `python lerobot/scripts/train.py`. Se requieren algunos argumentos. Aquí tienes un comando de ejemplo:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```

**Si quieres entrenar en un conjunto de datos local, asegúrate de que el `repo_id` coincida con el utilizado durante la recolección de datos.**

Vamos a explicarlo:

1. Proporcionamos el conjunto de datos como argumento con `--dataset.repo_id=${HF_USER}/so101_test`.
2. Proporcionamos la política usando `policy.type=act`, que cargará la configuración desde [`lerobot/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py). Actualmente, ACT ha sido probado, pero también puedes probar otras políticas como diffusion, pi0, pi0fast, tdmpc, y vqbet.
3. Proporcionamos policy.device=cuda ya que estamos entrenando en una GPU Nvidia, pero podrías usar policy.device=mps para entrenar en silicio de Apple.
5. Proporcionamos `wandb.enable=true` para usar [Weights and Biases](https://docs.wandb.ai/quickstart) para visualizar gráficos de entrenamiento. Esto es opcional pero si lo usas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

El entrenamiento debería tomar varias horas. Encontrarás puntos de control en `outputs/train/act_so100_test/checkpoints`.

Para reanudar el entrenamiento desde un punto de control, a continuación hay un comando de ejemplo para reanudar desde el último punto de control de la política act_so101_test:

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Subir checkpoints de política**
Una vez que el entrenamiento haya terminado, sube el último checkpoint con:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

## Evalúa tu política

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y código de SO101 para la operación.
:::

Puedes usar la función `record` de [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) pero con un checkpoint de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/eval_act_so101_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

Como puedes ver, es casi el mismo comando que se usó previamente para grabar tu conjunto de datos de entrenamiento. Dos cosas cambiaron:

1. Hay un argumento adicional `--control.policy.path` que indica la ruta a tu checkpoint de política con (por ejemplo, `outputs/train/eval_act_so100_test/checkpoints/last/pretrained_model`). También puedes usar el repositorio del modelo si subiste un checkpoint del modelo al hub (por ejemplo, `${HF_USER}/act_so100_test`).
2. El nombre del conjunto de datos comienza por `eval` para reflejar que estás ejecutando inferencia (por ejemplo, `${HF_USER}/eval_act_so100_test`).

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- Si estás siguiendo esta documentación/tutorial, por favor clona con git el repositorio de GitHub recomendado `https://github.com/ZhuYaoHui1998/lerobot.git`. El repositorio recomendado en esta documentación es una versión estable verificada; el repositorio oficial de Lerobot se actualiza continuamente a la versión más reciente, lo que puede causar problemas imprevistos como diferentes versiones de conjuntos de datos, diferentes comandos, etc.

- Si encuentras el siguiente error, necesitas verificar si el brazo robótico conectado al puerto correspondiente está encendido y si los servos del bus tienen cables sueltos o desconectados.

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- Si has reparado o reemplazado cualquier parte del brazo robótico, por favor elimina completamente la carpeta `~/lerobot/.cache/huggingface/calibration/so100` y recalibra el brazo robótico.

- Si el control remoto funciona normalmente pero el control remoto con Cámara no logra mostrar la interfaz de imagen, puedes encontrar [aquí](https://github.com/huggingface/lerobot/pull/757/files)

- Si encuentras problemas con libtiff durante la operación remota del conjunto de datos, por favor actualiza la versión de libtiff.

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- Después de ejecutar la [Instalación de Lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m/#install-lerobot), la versión GPU de pytorch puede desinstalarse automáticamente, por lo que necesitas instalar manualmente torch-gpu.

- Para Jetson, por favor instala primero [Pytorch y Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) antes de ejecutar `conda install -y -c conda-forge ffmpeg`, de lo contrario, al compilar torchvision, puede ocurrir un problema de incompatibilidad de versión de ffmpeg.

- Si ocurre el siguiente problema, significa que tu computadora no soporta este formato de códec de video. Necesitas modificar la línea 134 en el archivo `lerobot/lerobot/common/datasets
/video_utils.py` cambiando el valor de `vcodec: str = "libsvtav1"` a `libx264` o `libopenh264`. Diferentes computadoras pueden requerir diferentes parámetros, así que puedes probar varias opciones. [Issues 705](https://github.com/huggingface/lerobot/issues/705)
  
  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- ¡Importante! Si durante la ejecución el cable del servo se afloja, por favor restaura el servo a su posición inicial y luego reconecta el cable del servo. También puedes calibrar individualmente un servo usando el [Comando de Inicialización del Servo](https://wiki.seeedstudio.com/es/lerobot_so100m/#configure-the-motors), asegurándote de que solo un cable esté conectado entre el servo y la placa del controlador durante la calibración individual. Si encuentras

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

  o otros errores durante el proceso de calibración del brazo robótico relacionados con ángulos y valores que exceden los límites, este método sigue siendo aplicable.

- Entrenar 50 conjuntos de datos ACT en una laptop 3060 de 8G toma aproximadamente 6 horas, mientras que en una computadora 4090 o A100, entrenar 50 conjuntos de datos toma alrededor de 2–3 horas.

- Durante la recolección de datos, asegúrese de que la posición, ángulo e iluminación ambiental de la cámara permanezcan estables, y minimice la captura de fondos inestables excesivos y peatones; de lo contrario, cambios ambientales significativos durante el despliegue pueden causar que el brazo robótico falle al agarrar correctamente.

- Asegúrese de que el parámetro `num-episodes` en el comando de recolección de datos esté configurado para recopilar datos suficientes, y no pause manualmente a la mitad. Esto se debe a que la media y varianza de los datos se calculan solo después de que la recolección de datos esté completa, lo cual es necesario para el entrenamiento.

- Si el programa indica que no puede leer los datos de imagen de la cámara USB, por favor asegúrese de que la cámara USB no esté conectada a un hub. La cámara USB debe estar conectada directamente al dispositivo para asegurar una velocidad de transmisión de imagen rápida.

:::tip
Si encuentra problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de verificar la sección de FAQ al final de este tutorial, por favor reporte el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

## Cita

[中文文档](https://wiki.seeedstudio.com/es/cn/lerobot_so100m/)

Proyecto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Proyecto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
