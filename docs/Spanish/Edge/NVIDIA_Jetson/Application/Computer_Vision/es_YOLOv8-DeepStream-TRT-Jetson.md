---
description: Implementa YOLOv8 en la NVIDIA Jetson con TensorRT y DeepStream SDK, etiquetado de datos, entrenamiento de modelos de IA, implementación de modelos de IA
title: Implementa YOLOv8 con TensorRT y DeepStream SDK
tags:
  - Etiquetado de datos
  - Entrenamiento de modelo de IA
  - Despliegue de modelo de IA
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/YOLOv8-DeepStream-TRT-Jetson
last_update:
  date: 04/21/2023
  author: Lakshantha
---

# Despliegue de YOLOv8 en NVIDIA Jetson usando TensorRT y DeepStream SDK Support

Esta guía explica cómo implementar un modelo de IA entrenado, corriendo en un dispositivo NVIDIA Jetson y realizar inferencias utilizando TensorRT y DeepStream SDK. Aquí utilizamos TensorRT para maximizar el rendimiento de inferencia el dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/car.gif" style={{width:1000, height:'auto'}}/></div>

## Prerequisitos

- PC con Ubuntu OS (nativo o en máquina virtual)
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) o cualquier otro dispositivo NVIDIA Jetson corriendo JetPack 4.6 o superior

## Versión de DeepStream correspondiente a la versión de JetPack

Para que YOLOv8 funcione junto con DeepStream, estamos usando este repositorio [DeepStram-YOLO](https://github.com/marcoslucianops/DeepStream-Yolo) y admite diferentes versiones de DeepStream. Así que asegúrate de utilizar la versión correcta de JetPack de acuerdo a la versión correcta de DeepStream.

<table>
  <thead>
    <tr>
      <th>DeepStream Version</th>
      <th>JetPack Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>5.1.1</td>
    </tr>
    <tr>
      <td>5.1</td>
    </tr>
    <tr>
      <td>6.1.1</td>
      <td>5.0.2</td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>5.0.1 DP</td>
    </tr>
    <tr>
      <td rowSpan={3}>6.0.1</td>
      <td>4.6.3</td>
    </tr>
    <tr>
      <td>4.6.2</td>
    </tr>
    <tr>
      <td>4.6.1</td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>4.6</td>
    </tr>
  </tbody>
</table>

Para verificar este wiki, hemos instalado **DeepStream SDK 6.2** en un sistema **JetPack 5.1.1** que se ejecuta en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

## Flashear JetPack a la Jetson

Ahora debes asegurarte de que el dispositivo Jetson esté actualizado con un sistema [JetPack](https://developer.nvidia.com/embedded/jetpack) que incluya componentes SDK como CUDA, TensorRT, cuDNN y más. Puedes utilizar NVIDIA SDK Manager o la línea de comandos para actualizar JetPack en el dispositivo.

Para obtener guías de actualización de dispositivos impulsados ​​por Seeed Jetson, consulta los enlaces a continuación:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## Instalar DeepStream

Hay varias formas de instalar DeepStream en el dispositivo Jetson. Puedes seguir [esta guía](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_Quickstart.html) para obtener más información. Sin embargo, te recomendamos que instales DeepStream a través del SDK Manager porque puede garantizar una instalación sencilla y exitosa.

Si instalas DeepStream usando el administrador de SDK, debes ejecutar los siguientes comandos, que son dependencias adicionales para DeepStream, después de que se inicie el sistema.

```sh
sudo apt install \
libssl1.1 \
libgstreamer1.0-0 \
gstreamer1.0-tools \
gstreamer1.0-plugins-good \
gstreamer1.0-plugins-bad \
gstreamer1.0-plugins-ugly \
gstreamer1.0-libav \
libgstreamer-plugins-base1.0-dev \
libgstrtspserver-1.0-0 \
libjansson4 \
libyaml-cpp-dev
```

## Instalar paquetes necesarios

- **Paso 1.** Accede a la terminal del dispositivo Jetson, instala pip y actualízalo

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **Paso 2.** Clona el siguiente repositorio:

```sh
git clone https://github.com/ultralytics/ultralytics.git
```

- **Paso 3.** Abre el archivo requirements.txt

```sh
cd ultralytics
vi requirements.txt
```

- **Paso 4.** Edita las siguientes líneas. Aquí debes presionar `i` primero para ingresar al modo de edición. Presiona `ESC`, luego escribe `:wq` para guardar y salir

```sh
# torch>=1.7.0
# torchvision>=0.8.1
```

**Nota:** torch y torchvision están excluidos por ahora porque se instalarán más adelante.

- **Paso 5.** Instalar los paquetes necesarios

```sh
pip3 install -r requirements.txt
```

Si el instalador marca como desactualizado el paquete **python-dateutil** actualízalo con el siguiente comando:
```sh
pip3 install python-dateutil --upgrade
```

## Instalar PyTorch y Torchvision

No podemos instalar PyTorch y Torchvision desde pip porque no son compatibles para ejecutarse en la plataforma Jetson, que se basa en la **arquitectura ARM aarch64**. Por lo tanto, necesitamos instalar manualmente la pip PyTorch Wheel prediseñada y compilar/instalar Torchvision desde la fuente.

Visita [esta página](https://forums.developer.nvidia.com/t/pytorch-for-jetson) Para acceder a todos los links de PyTorch y Torchvision.

Estas son algunas de las versiones compatibles con JetPack 5.0 y superiores.

**PyTorch v1.11.0**

Supported by JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) with Python 3.8

**file_name:** torch-1.11.0-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/ssf2v7pf5i245fk4i0q926hy4imzs2ph.whl

**PyTorch v1.12.0**

Supported by JetPack 5.0 (L4T R34.1.0) / JetPack 5.0.1 (L4T R34.1.1) / JetPack 5.0.2 (L4T R35.1.0) with Python 3.8

**file_name:** torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl

- **Paso 1.** Instala "Torch" según tu versión JetPack en el siguiente formato

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

Por ejemplo, aquí estamos ejecutando **JP5.0.2** y por lo tanto elegimos **PyTorch v1.12.0**

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.com/compute/redist/jp/v50/pytorch/torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl -O torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
pip3 install torch-1.12.0a0+2c916ef.nv22.3-cp38-cp38-linux_aarch64.whl
```

- **Paso 2.** Instala torchvision según la versión de PyTorch que tengas instalada. Por ejemplo, elegimos PyTorch v1.12.0, lo que significa que debemos elegir Torchvision v0.13.0.

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.13.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
```

Aquí hay una lista de la versión correspondiente de torchvision que necesitas instalar de acuerdo con la versión de PyTorch:

- PyTorch v1.11 - torchvision v0.12.0
- PyTorch v1.12 - torchvision v0.13.0

Si deseas una lista más detallada, revisa [este link](https://github.com/pytorch/vision/blob/main/README.rst).

## Configuración de DeepStream para YOLOv8

- **Pasos 1.** Clona el siguiente repositorio:

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **Paso 2.** Revisa el siguiente commit del repositorio:

```sh
cd DeepStream-Yolo
git checkout 68f762d5bdeae7ac3458529bfe6fed72714336ca
```

- **Paso 3.** Copia **gen_wts_yoloV8.py** de **DeepStream-Yolo/utils** al directorio **ultralytics**

```sh
cp utils/gen_wts_yoloV8.py ~/ultralytics
```

- **Paso 4.** Dentro del repositorio de Ultralytics, descarga **pt file** de [YOLOv8 releases](https://github.com/ultralytics/assets/releases/) (ejemplo para YOLOv8s)

```sh
wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt
```

**NOTA:** Puedes usar tu modelo personalizado, pero es importante mantener la referencia del modelo YOLO **(yolov8_)** en sus nombres de archivo **cfg** y **weights/wts** para generar el motor correctamente.

- **Paso 5.** Generar los archivos cfg, wts y etiquetas.txt (si están disponibles) (ejemplo para YOLOv8s)

```sh
python3 gen_wts_yoloV8.py -w yolov8s.pt
```

**Nota:** Cambiar el tamaño de inferencia (default: 640)

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

Example for 1280:

-s 1280
or
-s 1280 1280
```

- **Paso 6.** Copia los archivos **cfg**, **wts** y **labels.txt** (si se generan) generados en la carpeta **DeepStream-Yolo**s

```sh
cp yolov8s.cfg ~/DeepStream-Yolo
cp yolov8s.wts ~/DeepStream-Yolo
cp labels.txt ~/DeepStream-Yolo
```

- **Paso 7.** Abre el folder **DeepStream-Yolo** y compila la librería

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.2/ 6.1.1 / 6.1
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0
```

- **Paso 8.** Edita el archivo **config_infer_primary_yoloV8.txt** de acuerdo a tu modelo (ejemplo para YOLOv8s con 80 clases)

```sh
[property]
...
custom-network-config=yolov8s.cfg
model-file=yolov8s.wts
...
num-detected-classes=80
...
```

- **Paso 9.** Edita el archivo **deepstream_app_config.txt**

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV8.txt
```

- **Paso 10.** Cambie la fuente del video en el archivo **deepstream_app_config.txt**. Aquí se carga un archivo de video predeterminado como puedes ver a continuación

```sh
...
[source0]
...
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
```

## Ejecutar la inferencia

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-1.gif" style={{width:1000, height:'auto'}}/></div>

El resultado anterior se ejecuta en el kit Jetson AGX Orin 32GB H01 con FP32 y YOLOv8s 640x640. Podemos ver que los FPS rondan los 60 y ese no es el valor real porque cuando configuramos **type=2** en **[sink0]** en el archivo **deepstream_app_config.txt**, los FPS se limitan a los fps del monitor y el monitor que usamos para esta prueba es un monitor de 60 Hz. Sin embargo, si cambias este valor a **type=1**, podrás obtener los máximo FPS, pero no habrá salida de detección en vivo.

Para la misma fuente de video y el mismo modelo usado anteriormente, después de cambiar **type=1** en **[sink0]**, se puede obtener el siguiente resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/FP32-no-screen.gif" style={{width:1000, height:'auto'}}/></div>

Como puedes ver, podemos obtener aproximadamente 139 FPS, que se relaciona con el valor real de fps.

## Calibración INT8 

Si deseas utilizar la precisión INT8 para la inferencia, debes seguir los siguientes pasos:

- **Paso 1.** Instalar OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **Paso 2.** Compilar/recompilar la librería **nvdsinfer_custom_impl_Yolo** con soporte para OpenCV

```sh
cd ~/DeepStream-Yolo
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.2/ 6.1.1 / 6.1
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo  # for DeepStream 6.0.1 / 6.0
```

- **Paso 3.** Para el conjunto de datos COCO, descarga el archivo [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing), extrae su contenidp, y mueve el contenido al folder **DeepStream-Yolo**

- **Paso 4.** Haz un directorio nuevo para las imágenes de calibración

```sh
mkdir calibration
```

- **Paso 5.** Ejecuta lo siguiente para seleccionar 1000 imágenes aleatorias del conjunto de datos COCO para ejecutar la calibración

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**Nota:** NVIDIA recomienda al menos 500 imágenes para obtener una buena precisión. En este ejemplo, se eligen 1000 imágenes para obtener una mayor precisión (más imágenes = más precisión). Los valores más altos de INT8_CALIB_BATCH_SIZE darán como resultado una mayor precisión y una velocidad de calibración más rápida. Configúralo según la memoria de tu GPU. Puedes configurarlo desde head -1000. Por ejemplo, para 2000 imágenes, head = -2000. Este proceso puede llevar mucho tiempo.

- **Paso 6.** Crea un archivo **calibration.txt** con todas las imágenes seleccionadas.

```sh
realpath calibration/*jpg > calibration.txt
```

- **Paso 7.** Configura las variables de entorno

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **Paso 8.** Actualiza el archivo **config_infer_primary_yoloV8.txt**

De:

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

A:

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **Paso 9.** Antes de ejecutar la inferencia, establezca **type=2** en **[sink0]** en el archivo **deepstream_app_config.txt** como se mencionó anteriormente para obtener el rendimiento máximo de fps.

- **Paso 10.** Ejecuta la inferencia

```sh
deepstream-app -c deepstream_app_config.txt
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/2.png" style={{width:1000, height:'auto'}}/></div>

¡En esta caso obtenemos alrededor de 350 FPS!

## Configuración Multistream

NVIDIA DeepStream te permite configurar fácilmente múltiples transmisiones en un único archivo de configuración para crear aplicaciones de análisis de video de múltiples transmisiones. Más adelante en esta wiki demostraremos cómo los modelos con alto rendimiento de FPS realmente pueden ayudar con aplicaciones multitransmisión junto con algunos puntos de referencia.

Aquí tomaremos 9 streams como ejemplo. Cambiaremos el archivo **deepstream_app_config.txt**.

- **Paso 1.** Adentro de la sección **[tiled-display]**, cambia las filas y columnas a 3 y 3 para que podamos tener una cuadrícula de 3x3 con 9 streams.

```sh
[tiled-display]
rows=3
columns=3
```

- **Paso 2.** Dentro de la sección **[source0]**, establece **num-sources=9** y agrega más **uri**. Aquí simplemente duplicaremos el archivo de vídeo de ejemplo actual 8 veces para formar 9 transmisiones en total. Sin embargo, puedes cambiar a diferentes transmisiones de video según tu aplicación.

```sh
[source0]
enable=1
type=3
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
uri=file:///opt/nvidia/deepstream/deepstream/samples/streams/sample_1080p_h264.mp4
num-sources=9
```

Ahora, si ejecutas la aplicación nuevamente con el comando **deepstream-app -c deepstream_app_config.txt**, verás el siguiente resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/7.jpg" style={{width:1000, height:'auto'}}/></div>

## Herramienta trtexec

En el directorio de ejemplos se incluye una herramienta contenedora de línea de comandos llamada [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec). trtexec es una herramienta para utilizar TensorRT sin tener que desarrollar tu propia aplicación. La herramienta trtexec tiene tres propósitos principales:

- Comparación de redes con datos de entrada aleatorios o proporcionados por el usuario.
- Generación de motores serializados a partir de modelos.
- Generando un caché de tiempo serializado desde el compilador.

Aquí podemos usar la herramienta trtexec para comparar rápidamente los modelos con diferentes parámetros. Pero antes que nada, es necesario tener un modelo onnx y podemos generar este modelo onnx utilizando ultralytics yolov8.

- **Paso 1.** Compila ONNX usando:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **Paso 2.** Compila el archivo del engine usando trtexec como se muestra:

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

Por ejemplo:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

Esto generará resultados de rendimiento de la siguiente manera junto con un archivo **.engine**. De forma predeterminada, convertirá ONNX en un archivo optimizado para TensorRT con precisión **FP32** y podrás ver el resultado de la siguiente manera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/3.png" style={{width:1000, height:'auto'}}/></div>

Aquí podemos tomar la latencia media como 7,2 ms, lo que se traduce en 139 FPS. Este es el mismo rendimiento que obtuvimos en la demostración anterior de DeepStream.

Sin embargo, si deseas una precisión **INT8** que ofrezca un mejor rendimiento, puedes ejecutar el comando anterior de la siguiente manera

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/4.jpg" style={{width:1000, height:'auto'}}/></div>

Aquí podemos tomar la latencia media como 3,2 ms, lo que se traduce en 313 FPS.

## Resultados de referencia de YOLOv8

Hemos realizado pruebas comparativas de rendimiento para diferentes modelos YOLOv8 que se ejecutan en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html), la [AGX Orin 32GB H01 Kit](https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html) y la [reComputer J2021](https://www.seeedstudio.com/reComputer-J2021-p-5438.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8/14.png" style={{width:1000, height:'auto'}}/></div>

Para conocer más pruebas comparativas de rendimiento que hemos realizado utilizando modelos YOLOv8, consulta [nuestro blog](https://www.seeedstudio.com/blog/2023/03/30/yolov8-performance-benchmarks-on-nvidia-jetson-devices).

## Resultados de referencia Multistream

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg" style={{width:1000, height:'auto'}}/></div>

Después de ejecutar varias aplicaciones de flujo profundo en los productos de la serie reComputer Jetson Orin, realizamos pruebas comparativas con los modelos YOLOv8s.

- Primero, utilizamos un único modelo de IA y ejecutamos múltiples transmisiones en el mismo modelo de IA.
- En segundo lugar, hemos utilizado múltiples modelos de IA y múltiples flujos en múltiples modelos de IA.

Todos estos benchmarks se llevan a cabo bajo las siguientes condiciones:

- YOLOv8s con imágenes de entrada de 640x640
- UI Deshabilitada
- Modo de max power y max performance habilitados

<iframe src="https://jetson-camera-selection-tool.seeedstudio.com/" width="100%" height="690px"></iframe>

A partir de estos puntos de referencia, podemos ver que para el dispositivo Orin NX de 16 GB de gama más alta con un solo modelo YOLOv8s en INT8, puedes usar alrededor de 40 cámaras a alrededor de 5 fps y con múltiples modelos YOLOv8s en INT8 para cada transmisión, puedes usar alrededor de 11 cámaras a alrededor de 15 fps. Para aplicaciones de múltiples modelos, la cantidad de cámaras es menor debido a las limitaciones de RAM del dispositivo y cada modelo ocupa una cantidad sustancial de RAM.

En resumen, cuando se opera un dispositivo en el borde (Como la Jetson) con el modelo YOLOv8 solo sin aplicaciones en ejecución, <strong> la Jetson Orin Nano de 8 GB puede admitir de 4 a 6 transmisiones, mientras que la Jetson Orin NX de 16 GB puede administrar de 16 a 18 transmisiones a su capacidad máxima.</strong> Sin embargo, estos números pueden disminuir a medida que los recursos de RAM se utilizan en aplicaciones del mundo real. Por lo tanto, es aconsejable utilizar estas cifras como guía y realizar tus propias pruebas en tus condiciones específicas.

## Recursos

- [Documentación YOLOv8](https://docs.ultralytics.com)
- [Documentación TensorRT](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)
- [Documentación DeepStream SDK](https://docs.nvidia.com/metropolis/deepstream/dev-guide)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>