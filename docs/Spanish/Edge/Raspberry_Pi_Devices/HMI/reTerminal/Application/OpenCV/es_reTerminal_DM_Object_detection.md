---
description: Detección de objetos con reTerminal y cámara Pi usando OpenCV
title: Detección de objetos con reTerminal y cámara Pi
keywords:
  - Edge
  - reTerminal
  - piCamera
  - OpenCV
  - Object Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_DM_Object_detection
last_update:
  date: 04/03/2025
  author: Erick González
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## Introducción

La detección de objetos en computadoras perimetrales (edge) se ha vuelto un campo fundamental en la visión por computadora, permitiendo que los dispositivos perciban y respondan de manera autónoma a su entorno. **EfficientDet**, un modelo de detección de objetos de última generación, ocupa un lugar destacado en este ámbito. Diseñado para ser **eficiente en recursos, logra un equilibrio entre precisión y demanda computacional**, lo que lo hace especialmente adecuado para implementaciones en dispositivos edge con potencia de procesamiento limitada. La detección de objetos en computadoras edge, ejemplificada por EfficientDet, encuentra aplicaciones en escenarios que van desde cámaras de videovigilancia inteligente y vehículos autónomos hasta dispositivos de Internet de las Cosas (IoT). Su capacidad para identificar y localizar múltiples objetos en tiempo real lo convierte en un habilitador clave para mejorar la autonomía y la inteligencia de los sistemas de computación perimetral.

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software como se describe a continuación.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Cómpralo ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación de Software

Recomendamos instalar la versión **Bullseye** o **Bookworm** del sistema operativo Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Introducción a OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), ya que este tutorial es una continuación de nuestra serie. Esta guía está específicamente dirigida a **Bullseye OS** y **Bookworm OS**. Ten en cuenta que existen dos métodos distintos de instalación de dependencias.

:::

## TinyML

TinyML revoluciona el aprendizaje automático al permitir que modelos ligeros se ejecuten en dispositivos edge con recursos mínimos. En el contexto de la detección de objetos, TensorFlow Lite, un marco clave en TinyML, optimiza los modelos para una mayor eficiencia, permitiendo su implementación en dispositivos como microcontroladores y sistemas embebidos. Esta integración facilita el procesamiento en tiempo real en el dispositivo para tareas como reconocimiento de objetos, haciendo que TinyML con [**TensorFlow Lite**](https://www.tensorflow.org/lite) sea ideal para aplicaciones en sensores inteligentes, dispositivos portátiles (wearables) y IoT, sin necesidad de conexión constante a la nube.

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) es un modelo de detección de objetos sumamente eficiente y preciso, destacando por su rendimiento en dispositivos edge. Desarrollado por Google, EfficientDet optimiza el equilibrio entre la precisión del modelo y la eficiencia computacional, por lo que se adapta perfectamente a entornos con recursos limitados, como dispositivos perimetrales y plataformas móviles. Se basa en un método de escalado compuesto para incrementar de forma eficiente los parámetros del modelo y lograr mejor precisión sin sacrificar velocidad. La arquitectura de EfficientDet incluye una red de características para capturar de manera efectiva las características de la imagen y un método de escalado compuesto para equilibrar la precisión y la eficiencia computacional. Su éxito radica en alcanzar un rendimiento destacado en diversos benchmarks de detección de objetos, manteniendo al mismo tiempo una estructura ligera, lo que lo convierte en una opción preferida para aplicaciones que requieren detección de objetos en tiempo real en dispositivos edge.

## Ejecutar el código en Bullseye OS

Asegúrate de estar en la carpeta correcta. Si no:

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

Asegúrate de instalar las dependencias y el modelo EfficientDet. Si ya completaste este paso en nuestro [**primer tutorial**](https://wiki.seeedstudio.com/Getting-start-opencv/), no hay de qué preocuparse.

```sh
sh setup.sh
```

Ejecuta el código:
```sh
python3 detect_mod.py
```

## Ejecutar el código en Bookworm OS

- **Paso 1:** Necesitas crear un entorno virtual.

:::note

En versiones anteriores del sistema operativo, era posible instalar las bibliotecas de Python directamente a nivel de sistema usando pip, el instalador de paquetes de Python. Sin embargo, en Bookworm y lanzamientos posteriores, se ha producido un cambio. Para evitar posibles problemas durante la instalación, ahora es necesario instalar los paquetes usando pip dentro de un entorno virtual de Python, mediante venv.

:::

Ejecuta estos comandos uno por uno y obtendrás un entorno virtual:

```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
```

- **Paso 2:** A continuación, clona este repositorio de Git en tu entorno virtual de Raspberry Pi de la siguiente manera:

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
```

- **Paso 3:** Utiliza nuestro script para instalar sin esfuerzo los paquetes de Python necesarios y descargar el modelo EfficientDet-Lite. Navega a esta carpeta:

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **Paso 4:** Este script instala las dependencias requeridas y descarga los modelos TFLite para esta serie de tutoriales:

```sh
sh setup.sh
```

Ejecuta el código:
```sh
python3 detect_picam.py
```

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
