---
description: ODYSSEY - X86J4105
title: Intel OpenVINO Toolkit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-X86J4105-Intel-OpenVINO
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# Instalación del kit de herramientas Intel® Distribution of OpenVINO™ para ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

El **kit de herramientas Intel® Distribution of OpenVINO™** despliega rápidamente aplicaciones y soluciones que emulan la visión humana. Basado en Redes Neuronales Convolucionales (CNN), el kit de herramientas extiende las cargas de trabajo de visión por computadora (CV) a través del hardware Intel®, maximizando el rendimiento. El kit de herramientas Intel® Distribution of OpenVINO™ incluye el Intel® Deep Learning Deployment Toolkit (Intel® DLDT).

Para más información, por favor visite [kit de herramientas Intel® Distribution of OpenVINO™](https://docs.openvinotoolkit.org/).

**Nota:** Según el documento oficial, el kit de herramientas OpenVINO™ puede instalarse en diferentes sistemas operativos. **Para este tutorial, Ubuntu 18.04.4 LTS está instalado en ODYSSEY - X86J4105 e instalaremos el kit de herramientas OpenVINO™ en Linux.** Se recomienda encarecidamente instalar esta versión de Ubuntu para evitar errores de entorno que puedan ocurrir.

Este tutorial está modificado del oficial [Instalar el kit de herramientas Intel® Distribution of OpenVINO™ para Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html).

## Requisitos de Hardware

- Una Computadora Funcional

- Un Monitor

- Teclado y Ratón

- Conexión a Internet

## Instalar el SO Ubuntu

Si aún no has instalado Ubuntu, por favor siéntete libre de seguir [este tutorial](https://wiki.seeedstudio.com/es/ODYSSEY-X86J4105-Installing-OS/) para instalar Ubuntu en tu ODYSSEY - X86J4105.

## Instalar el kit de herramientas Intel® Distribution of OpenVINO™

Descarga el archivo del paquete del kit de herramientas Intel® Distribution of OpenVINO™ desde Intel® [Distribution of OpenVINO™ toolkit for Linux*](https://software.intel.com/en-us/openvino-toolkit/choose-download?elq_cid=6204639&erpm_id=9318801). Selecciona el paquete del kit de herramientas Intel® Distribution of OpenVINO™ para Linux desde el menú desplegable.

1. Abre la Terminal en Ubuntu.

2. Cambia los directorios a donde descargaste el archivo del paquete del kit de herramientas Intel Distribution of OpenVINO para Linux*. Si descargaste los archivos al directorio `Downloads` del usuario actual:

```sh
cd ~/Download/
```

Por defecto, el archivo se guarda como `l_openvino_toolkit_p_<version>.tgz`

3. Desempaqueta el archivo `.tgz`:

```sh
tar -xvzf l_openvino_toolkit_p_<version>.tgz
```

Los archivos se descomprimen en la carpeta `l_openvino_toolkit_p_<version>`.

4. Ve al directorio `l_openvino_toolkit_p_<version>`:

```sh
cd l_openvino_toolkit_p_<version>
```

5. Instala el Intel® Distribution of OpenVINO™ Toolkit ejecutando el siguiente script:

```sh
sudo ./install_GUI.sh
```

**Nota:** Este es el Asistente de Instalación GUI, también están las instrucciones de línea de comandos: `sudo ./install.sh`, pero se recomienda encarecidamente usar la instalación GUI para evitar errores.

6. Sigue las instrucciones en pantalla.

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-01.png)

7. Si seleccionas las opciones predeterminadas, la pantalla GUI de Resumen de Instalación se verá así:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-02.png)

- **Nota:** También puedes personalizar para cambiar el directorio de instalación o los componentes que deseas instalar:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-03.png)

Cuando se instala como **root**, el directorio de instalación predeterminado para la Distribución Intel de OpenVINO es `/opt/intel/openvino/`.

8. Aparecerá una pantalla de completado cuando los componentes principales hayan sido instalados:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-04.png)

## Instalar Dependencias de Software Externo

Estas dependencias son requeridas para:

- Biblioteca OpenCV optimizada para Intel

- Motor de Inferencia de Aprendizaje Profundo

- Herramientas del Optimizador de Modelos de Aprendizaje Profundo

1. Cambia al directorio `install_dependencies`:

```sh
cd /opt/intel/openvino/install_dependencies
```

2. Ejecuta el script para descargar e instalar las dependencias de software externas:

```sh
sudo -E ./install_openvino_dependencies.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/dependent-complete.png)

Esto depende de la velocidad de internet, por favor ten paciencia. ¡Las dependencias de software externas están instaladas!

## Configurar las Variables de Entorno

Debes actualizar varias variables de entorno antes de poder compilar y ejecutar aplicaciones OpenVINO™. Ejecuta el siguiente script para configurar temporalmente tus variables de entorno:

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

**Nota:** Las variables de entorno de OpenVINO se eliminan cuando cierras el shell. Como opción, puedes establecer permanentemente las variables de entorno de la siguiente manera:

1. Abre el archivo `.bashrc` en `<directorio_usuario>`.

```sh
nano /home/USERNAME/.bashrc
```

Reemplaza tu nombre de usuario por `USERNAME`.

2. Añade esta línea al final del archivo:

```sh
source /opt/intel/openvino/bin/setupvars.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/source-environment.png)

3. Usa **Ctrl + O** para guardar y **Ctrl + X** para salir.

4. Para probar tu cambio, abre una nueva terminal. Deberías ver `[setupvars.sh] OpenVINO environment initialized` en la parte superior de la terminal.

## Configurar el Optimizador de Modelos

El Optimizador de Modelos es una herramienta de línea de comandos basada en Python*para importar modelos entrenados de marcos de aprendizaje profundo populares como Caffe*, TensorFlow*, Apache MXNet*, ONNX*y Kaldi*.

El Optimizador de Modelos es un componente clave del Intel Distribution of OpenVINO toolkit. No puedes realizar inferencia en tu modelo entrenado sin ejecutar el modelo a través del Optimizador de Modelos. Cuando ejecutas un modelo pre-entrenado a través del Optimizador de Modelos, tu salida es una Representación Intermedia (IR) de la red. La Representación Intermedia es un par de archivos que describen todo el modelo:

- `.xml`: Describe la topología de la red

- `.bin`: Contiene los datos binarios de pesos y sesgos

Para más información sobre el Optimizador de Modelos, consulta la [Guía del Desarrollador del Optimizador de Modelos](https://docs.openvinotoolkit.org/latest/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html).

### Pasos de Configuración del Optimizador de Modelos

Puedes elegir configurar todos los marcos compatibles a la vez **O** configurar un marco a la vez. Elige la opción que mejor se adapte a tus necesidades. Si ves mensajes de error, asegúrate de haber instalado todas las dependencias.

**OPCIÓN 1: Configurar todos los marcos compatibles al mismo tiempo**

1. Ve al directorio de prerrequisitos del Optimizador de Modelos:

```sh
cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites
```

2. Ejecuta el script para configurar el Optimizador de Modelo para Caffe, TensorFlow, MXNet, Kaldi*, y ONNX:

```sh
sudo ./install_prerequisites.sh
```

**OPCIÓN 2: Configurar cada framework por separado**

Ejecuta el script para tu framework de modelo. Puedes ejecutar más de un script:

- Para **Caffe**:

```
sudo ./install_prerequisites_caffe.sh
```

- Para **TensorFlow**:

```
sudo ./install_prerequisites_tf.sh
```

- Para **MXNet**:

```
sudo ./install_prerequisites_mxnet.sh
```

- Para **ONNX**:

```
sudo ./install_prerequisites_onnx.sh
```

- Para **Kaldi**:

```
sudo ./install_prerequisites_kaldi.sh
```

Ahora estás listo para compilar y ejecutar las muestras!

## Ejecutar el Script de Verificación para Verificar la Instalación

**Para verificar la instalación y compilar dos muestras en la CPU del ODYSSEY - X86J4105:**

1. Ve al directorio de demostración del Motor de Inferencia:

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. Ejecuta el **script de verificación de Clasificación de Imágenes:**

```sh
./demo_squeezenet_download_convert_run.sh
```

Este script de verificación descarga un modelo SqueezeNet, utiliza el Optimizador de Modelos para convertir el modelo a los archivos de Representación Intermedia (IR) .bin y .xml. El Motor de Inferencia requiere esta conversión de modelo para poder usar el IR como entrada y lograr un rendimiento óptimo en hardware Intel.

Este script de verificación construye la [aplicación de muestra de Clasificación de Imágenes Asíncrona](https://docs.openvinotoolkit.org/latest/_inference_engine_samples_classification_sample_async_README.html) y la ejecuta con la imagen `car.png` ubicada en el directorio de demostración. Cuando el script de verificación se complete, tendrás la etiqueta y confianza para las 10 categorías principales:

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-1.png)

Ejecuta el **script de verificación del Pipeline de Inferencia:**

```sh
./demo_security_barrier_camera.sh
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png)

Este script descarga tres IRs de modelos pre-entrenados, construye la aplicación [Security Barrier Camera Demo](https://docs.openvinotoolkit.org/latest/_demos_security_barrier_camera_demo_README.html), y la ejecuta con los modelos descargados y la imagen car_1.bmp del directorio demo para mostrar un pipeline de inferencia. El script de verificación utiliza reconocimiento de vehículos en el cual los atributos del vehículo se construyen uno sobre otro para enfocarse en un atributo específico.

Para aprender sobre los scripts de verificación, consulta el archivo **README.txt** en `/opt/intel/openvino/deployment_tools/demo`.

Para una descripción de los modelos de detección de objetos y reconocimiento de objetos pre-entrenados de Intel Distribution of OpenVINO™, consulta [Overview of OpenVINO™ Toolkit Pre-Trained Models](https://docs.openvinotoolkit.org/latest/_models_intel_index.html).

Has completado todos los pasos requeridos de instalación, configuración y construcción en esta guía para usar tu CPU para trabajar con tus modelos entrenados, ¡siéntete libre de explorar la poderosa herramienta Intel OpenVINO para entrenar tus modelos con ODYSSEY - X86J4105!

## Recursos

- [Intel® Distribution of OpenVINO™ toolkit](https://docs.openvinotoolkit.org/)

- [Install Intel® Distribution of OpenVINO™ toolkit for Linux*](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html)

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
