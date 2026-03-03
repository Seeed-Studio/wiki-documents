---
description: Detección de objetos con reTerminal y cámara Pi con OpenCV
title: Detección de objetos con reTerminal y cámara Pi 
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Detection 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Object_detection
last_update:
  date: 12/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## Introducción

La detección de objetos en computadoras de borde se ha convertido en un campo fundamental en visión por computadora, permitiendo que los dispositivos perciban y respondan autónomamente a su entorno. **EfficientDet**, un modelo de detección de objetos de última generación, toma el protagonismo en este dominio. Diseñado para ser **eficiente en recursos, logra un equilibrio entre precisión y demandas computacionales, haciéndolo particularmente adecuado para despliegue en dispositivos de borde con poder de procesamiento limitado**. La detección de objetos en computadoras de borde, ejemplificada por EfficientDet, encuentra aplicaciones en escenarios que van desde cámaras de vigilancia inteligente y vehículos autónomos hasta dispositivos de Internet de las Cosas (IoT). Su capacidad para identificar y localizar múltiples objetos en tiempo real lo convierte en un habilitador clave para mejorar la autonomía e inteligencia de los sistemas de computación de borde.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Recomendamos instalar la versión **Bullesye** o **Bookworm** de Raspberry Pi OS de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Primeros pasos con OpenCV**](https://wiki.seeedstudio.com/es/reTerminal_DM_opencv/), ya que este tutorial sirve como continuación de nuestra serie. Esta guía es específicamente para **Bulleseye OS** y **Bookworm OS**. Por favor, toma nota de las dependencias de instalación, ya que hay dos métodos distintos descritos aquí.

:::

## TinyML

TinyML revoluciona el aprendizaje automático al permitir que modelos ligeros se ejecuten en dispositivos edge con recursos mínimos. En el contexto de la detección de objetos, TensorFlow Lite, un framework clave en TinyML, optimiza modelos para eficiencia, permitiendo que se desplieguen en dispositivos como microcontroladores y sistemas embebidos. Esta integración facilita el procesamiento en tiempo real y en el dispositivo para tareas como el reconocimiento de objetos, haciendo que TinyML con [**TensorFlow Lite**](https://www.tensorflow.org/lite) sea ideal para aplicaciones en sensores inteligentes, wearables y dispositivos IoT sin la necesidad de conectividad constante a la nube.

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) es un modelo de detección de objetos altamente eficiente y preciso que destaca por su rendimiento en dispositivos edge. Desarrollado por Google, EfficientDet optimiza el equilibrio entre la precisión del modelo y la eficiencia computacional, haciéndolo muy adecuado para el despliegue en entornos con recursos limitados como dispositivos edge y plataformas móviles. Aprovecha un método de escalado compuesto para escalar eficientemente los parámetros del modelo y lograr mejor precisión sin comprometer la velocidad. La arquitectura de EfficientDet incluye una red de características para capturar características de imagen de manera efectiva y un método de escalado compuesto para equilibrar la precisión del modelo y la eficiencia computacional. Su éxito radica en lograr un rendimiento impresionante en varios benchmarks de detección de objetos mientras mantiene una estructura ligera, convirtiéndolo en una opción preferida para aplicaciones que requieren detección de objetos en tiempo real en dispositivos edge.

## Ejecutemos el código en Bullseye OS

Asegúrate de que estás en la carpeta correcta. Si no

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```

Asegúrate de instalar las dependencias y el modelo EfficientDet. Si ya has completado este paso en nuestro [**primer tutorial**](https://wiki.seeedstudio.com/es/Getting-start-opencv/), no hay necesidad de preocuparse.

 ```sh
sh setup.sh
 ```

Ejecuta el código

 ```sh
python3 detect_mod.py
 ```

## Ejecutemos el código en BookWorm OS

- **Paso 1** Para eso necesitas crear un entorno virtual.

:::note

En versiones anteriores del OS, las librerías de Python podían instalarse directamente a nivel del sistema usando pip, el instalador de paquetes de Python. Sin embargo, en Bookworm y versiones posteriores, ha ocurrido un cambio. Para mitigar problemas potenciales durante la instalación, ahora es necesario instalar paquetes vía pip en un entorno virtual de Python usando venv.

:::

Ejecuta estos comandos uno por uno, y terminarás con un entorno virtual.

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

- **Paso 2** A continuación, clona este repositorio Git en tu entorno virtual de Raspberry Pi de esta manera

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **Paso 3** A continuación, utiliza nuestro script para instalar sin esfuerzo los paquetes de Python requeridos y descargar el modelo EfficientDet-Lite. Navega a esta carpeta.

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **Paso 3** El script instala las dependencias requeridas y descarga los modelos TFLite para esta serie de tutoriales.

```sh
sh setup.sh
```

Ejecuta el código

 ```sh
python3 detect_picam.py
 ```

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
