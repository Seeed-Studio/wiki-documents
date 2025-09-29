---
description: ODYSSEY - X86J41x5
title: Acelerador Coral Mini PCIe para ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Coral-Mini-PCIe-Accelerator-x86
last_update:
  date: 03/16/2023
  author: Lakshantha

---


<!-- ---
name: Coral-Mini-PCIe-Accelerator-x86
category: Platform
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 114992124
tags:
--- -->

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)

El Acelerador Coral Mini PCIe en ODYSSEY X86J41x5 es un módulo M.2 que lleva el coprocesador edge tpu a sistemas y productos existentes.

El edge tpu es un pequeño ASCI diseñado por google que proporciona inferencia de ML de alto rendimiento con bajos requisitos de energía: es capaz de realizar 4 billones de operaciones (tera-operaciones) por segundo (tops), usando 0.5 watts por cada tops (2 tops por watt). Por ejemplo, puede ejecutar modelos de visión móvil de última generación como mobileNet v2 a casi 400 fps, de manera energéticamente eficiente. Este procesamiento en el dispositivo reduce la latencia, aumenta la privacidad de los datos y elimina la necesidad de conectividad constante de alto ancho de banda.

El Acelerador M.2 es una tarjeta M.2 de doble clave (claves B+M), diseñada para adaptarse a cualquier ranura M.2 compatible. Este factor de forma permite una fácil integración en plataformas arm y x86 para que puedas agregar aceleración de ML local a productos como plataformas embebidas, mini-PCs y gateways industriales.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)

## Características

- Realiza inferencia de ML de alta velocidad
- Funciona con debian linux
- Soporta tensorFlow lite
- Soporta [AutoML Vision Edge](https://cloud.google.com/vision/automl/docs/edge-quickstart)

## Especificaciones

|Especificaciones físicas  | Valor  |
|------|--------------|
|Dimensiones| Clave B+M: 22.00 x 80.00 x 2.35 mm  |
|Peso| Clave B+M: 5.8 g|
|Interfaz del host|
|Interfaz de hardware| M.2 B+M key (M.2-2280-B-M-S3)|
|Interfaz serial| PCIe Gen2 x1|
|Voltaje de operación|  |
|Suministro DC|  3.3V +/- 10 %|
|Confiabilidad ambiental| |
|Temperatura| -40 ~ 85°C (almacenamiento)     -20 ~ 70° C (funcionamiento)
|Humedad relativa|  0 ~ 100% (sin condensación)|
|Confiabilidad mecánica| |
|Choque operativo| 100 G, 11ms (persistente)1000 G, 0.5 ms (estrés)1000 G, 1.0 ms (estrés) |
|Vibración operativa (aleatoria)| 0.5 Grms, 5 - 500 Hz (persistente)3 Grms, 5 - 800 Hz (estrés)|
|Vibración operativa (sinusoidal)|0.5 Grms, 5 - 500 Hz (persistente)3 Grms, 5 - 800 Hz (estrés)|

## Descripción General del Hardware

![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/hardware.jpg)

## Primeros Pasos

### jugar con ODYSSEY - X86J4105

**Materiales requeridos**

| Coral Mini PCIe Accelerator | ODYSSEY  X86J41x5 |
|--------------|-------------|
|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg)|![ ](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/PC.png)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Coral-M-2-Accelerator-B-M-key-p-4411.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html)|

#### Conexión de Hardware

Los pasos de conexión de hardware son muy simples.

- **Paso 1.** Conectar el Acelerador Coral Mini PCIe al ODYSSEY - X86J41x5.
- **Paso 2.** Conectar la alimentación al ODYSSEY - X86J41x5.
- **Paso 3.** Conectar la alimentación y la pantalla al ODYSSEY - X86J41x5.
- **Paso 4.** Conectar el teclado y el ratón al ODYSSEY - X86J41x5.
- **Paso 5.** Si tienes un cable de red, por favor conéctalo a tu ODYSSEY - X86J41x5.

## Software

Después de que terminamos la conexión de hardware, el siguiente paso es resolver los problemas de software.
 Aquí te diré algunos pasos de instalación: instalar el controlador PCIe, el runtime de edge tpu, y el runtime de TensorFlow Lite.

Al principio, lo que necesitas es una computadora linux, por favor sigue el paso.

- Puedes elegir el sistema x86-64, ARMv7 (32-bit), o ARMv8 (64-bit).

   Por favor consulta cómo [crear una unidad USB de arranque e instalar el SO Linux (Ubuntu Desktop 18.04)](https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-OS/) en el ODYSSEY - X86J41x5.

- Un Acelerador Coral Mini PCIe disponible en ODYSSEY X86J41x5

- Distribución Linux Debian 6.0 o superior, o cualquier derivado de la misma (como Ubuntu 10.0+)

- Python 3.5 o superior

Después de que hagas exitosamente el disco de arranque USB e instales el archivo del SO Linux, puedes ir al siguiente paso.

## 1.Instalar el controlador PCIe

Si ya instalaste un controlador Apex pre-construido, deberías considerar si el controlador resultará en que el Edge TPU falle, porque algunos de los controladores tienen errores que llevan a estos errores. Así que deberías verificarlo. Así que primero sigue estos pasos:

   1.Verifica tu versión del kernel de linux con este comando:

   ```
      uname -r 
   
   ```

   Si imprime 4.18 o inferior, deberías estar bien y puedes omitir la instalación de nuestro controlador pcie.

   2.Si tu versión del kernel es 4.19 o superior, ahora verifica si tienes un controlador apex pre-construido instalado:

   ```
      lsmod | grep apex
   
   ```

   Si no imprime nada, entonces está bien y continúa con la instalación de nuestro controlador pcie.

   Si imprime un nombre de módulo apex, detente aquí y sigue la [solución alternativa para deshabilitar Apex y Gasket](https://coral.ai/docs/m2/get-started/#workaround-to-disable-apex-and-gasket).

Instala el controlador pcie de la siguiente manera:

1. Asegúrate de que el sistema host donde conectarás el módulo esté apagado.

2. Conecta el módulo Coral PCIe a tu sistema host en la interfaz B Key M.2 (la interfaz SATA_SSD M.2 no es compatible con el módulo Coral).

3. Inicia el sistema y asegúrate de que tenga una conexión a internet. Luego añade nuestro repositorio de paquetes debian a tu sistema e instala nuestro controlador pcie con estos comandos:

```
echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | sudo tee /etc/apt/sources.list.d/coral-edgetpu.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

sudo apt update

sudo apt-get install gasket-dkms
```

4. Si la cuenta de usuario que vas a utilizar no tiene permisos de root, es posible que necesites agregar la siguiente regla udev, y luego verificar que el grupo "apex" existe y que tu usuario está agregado a él:

```
   sudo sh -c "echo 'SUBSYSTEM==\"apex\", MODE=\"0660\", GROUP=\"apex\"' >> /etc/udev/rules.d/65-apex.rules"

   sudo groupadd apex

   sudo adduser $USER apex
```

5. Reinicia el sistema.

6. Verifica que el módulo acelerador sea detectado:

   ```
      lspci -x | grep 089a
   ```

   Deberías ver algo como esto:

    ```
      03:00.0 System peripheral: Device 1ac1:089a
    ```

   El número 03 y el nombre del periférico del sistema pueden ser diferentes porque son específicos del sistema host, pero mientras veas un dispositivo listado con 089a entonces puedes proceder.

7. Verifica que el controlador pcie esté cargado:

   ```
   ls /dev/apex_0
   ```

   Simplemente deberías ver el nombre repetido de vuelta:

   ```
   /dev/apex_0
   
   ```

## 2. Instalar el runtime de edge tpu

El runtime de edge tpu es necesario para comunicarse con el edge tpu. Puedes instalarlo en tu computadora host desde una línea de comandos de la siguiente manera:

```
sudo apt-get install libedgetpu1-std
```

Notas
> A diferencia del [USB Accelerator](https://coral.ai/products/accelerator/), los aceleradores mini pcie y M.2 no utilizan diferentes paquetes de tiempo de ejecución para frecuencias de reloj "reducidas" y "máximas". En su lugar, estos dispositivos operan a la frecuencia máxima por defecto y realizan [limitación de potencia basada en límites térmicos](https://coral.ai/docs/m2/get-started/#operating-frequency-and-thermal-settings).

## 3. Instalar la biblioteca TensorFlow Lite

Hay varias formas de instalar las apis de TensorFlow, pero para comenzar con Python, la opción más fácil es instalar el paquete tflite_runtime. Este paquete proporciona el código mínimo requerido para ejecutar una inferencia con python (principalmente, la api [Interpreter](https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter)), ahorrándote así mucho espacio en disco.

Para instalarlo, sigue el [inicio rápido de TensorFlow Lite Python](https://www.tensorflow.org/lite/guide/python), y luego regresa a esta página después de ejecutar el comando pip3 install.

## 4. Ejecutar un modelo usando la API de TensorFlow Lite

Ahora estás listo para ejecutar inferencia en la edge tpu. Sigue estos pasos para realizar clasificación de imágenes con nuestro código de ejemplo y modelo:

   1. Descarga el código de ejemplo desde GitHub:

```
   mkdir coral && cd coral

   git clone https://github.com/google-coral/tflite.git
```

   2. Descarga el modelo clasificador de aves, el archivo de etiquetas y una foto de ave:

```
cd tflite/python/examples/classification

bash install_requirements.sh
```

   3. Ejecuta el clasificador de imágenes con la foto del pájaro (mostrada en la figura 1):

```
python3 classify_image.py \
--model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite \
--labels models/inat_bird_labels.txt \
--input images/parrot.jpg
```

![](https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/parrot.jpg)

Deberías ver resultados como este:

```
INFO: Initialized TensorFlow Lite runtime.
----INFERENCE TIME----
Note: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.
11.8ms
3.0ms
2.8ms
2.9ms
2.9ms
-------RESULTS--------
Ara macao (Scarlet Macaw): 0.76562
```

¡Felicidades! Acabas de realizar una inferencia en el edge tpu usando tensorflow lite.

Para demostrar las diferentes velocidades de inferencia, el ejemplo repite la misma inferencia cinco veces. Imprime el tiempo para realizar cada inferencia y la clasificación principal (el ID/nombre de la etiqueta y la puntuación de confianza, de 0 a 1.0). Tus velocidades de inferencia pueden diferir según tu sistema anfitrión.

El ejemplo classify_image.py anterior usa la api de python de tensorflow lite. Para aprender más sobre cómo funciona, echa un vistazo al [código fuente de classify_image.py](https://github.com/google-coral/tflite/blob/master/python/examples/classification/classify_image.py) y lee sobre cómo [ejecutar inferencia con TensorFlow Lite](https://www.tensorflow.org/lite/guide/inference#load_and_run_a_model_in_python).

Como alternativa al uso de la api de tensorflow lite (usada arriba), puedes usar la [API de Python de Edge TPU](https://coral.ai/docs/edgetpu/api-intro/), que proporciona apis de alto nivel para realizar inferencia con modelos de clasificación de imágenes y detección de objetos con solo unas pocas líneas de código. Por ejemplo, prueba nuestra otra versión de [classify_image.py usando la API de Edge TPU](https://coral.ai/examples/classify-image/).

También puedes [ejecutar inferencia usando C++ y TensorFlow Lite](https://coral.ai/docs/edgetpu/tflite-cpp/).

Recursos
--------

- [Hoja de datos](https://github.com/SeeedDocument/Bazaar_Document/raw/master/Coral-M2-datasheet.pdf)
- [Manual de usuario de Coral Ai](https://coral.ai/docs/mini-pcie/datasheet/#)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
