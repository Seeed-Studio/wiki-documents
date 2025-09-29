---
description: DashCamNet with Jetson Xavier NX Multicamera
title: DashCamNet with Jetson Xavier NX Multicamera
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/DashCamNet-with-Jetson-Xavier-NX-Multicamera
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# DashCamNet y PeopleNet con Jetson Xavier NX Multicámara

## Introducción

Hoy en día, en los campos de la conducción autónoma, grabación de automóviles y monitoreo de violaciones, a menudo usamos inteligencia artificial para ayudarnos a identificar información de vehículos, placas de matrícula de vehículos y obstáculos circundantes. Gracias a la gran cantidad de modelos preentrenados proporcionados por Nvidia NGC, podemos realizar estas tareas complejas más fácilmente.

Crear un modelo de IA/aprendizaje automático desde cero puede costarte mucho tiempo y dinero. [Transfer learning](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/) es una técnica popular que se puede usar para extraer características aprendidas de un modelo de red neuronal existente a uno nuevo. El NVIDIA TAO(*Train, Adapt, and Optimize*) Toolkit es una solución basada en CLI y Jupyter notebook de [NVIDIA TAO](https://developer.nvidia.com/tao), que abstrae la complejidad del framework de IA/aprendizaje profundo, permitiéndote ajustar modelos de IA preentrenados de alta calidad de NVIDIA con solo una fracción de los datos comparado con entrenar desde cero.

El TAO Toolkit también soporta más de 100 permutaciones de arquitecturas de modelos optimizadas por NVIDIA y backbones como EfficientNet, YOLOv3/v4, RetinaNet, FasterRCNN, UNET, y muchos más.

<!-- Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) and [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) are good for this demo. -->

Gracias al [repositorio](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) de NVIDIA y al [proyecto](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines) de Tomasz, vamos a detectar automóviles y personas con multicámara desplegada en Jetson Xavier NX. Tanto el [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) son buenos para esta demostración.

*NVIDIA TAO Toolkit anteriormente se llamaba NVIDIA Transfer Learning Toolkit(Tlt).*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## Requisitos de Materiales

### Configuración de Hardware

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- Cámara web USB / Raspberry Pi Camera V2.1 / [cámaras IMX219-130 8MP](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [cámaras IMX477 de alta calidad 12.3MP](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- Pantalla con interfaz HDMI, DP o eDP
- PC con sistema operativo de distribución Linux

### Configuración de Software

- Jetpack 4.5 o 4.6 para Jetson Xavier NX
- Docker
- DeepStream
- TAO Toolkit
- Python3.6 con Pypi(python3-pip) y Entornos Virtuales
- NVIDIA Container Toolkit

Los métodos de instalación de software se proporcionarán en los siguientes pasos.

## Pre-instalación

Antes de comenzar el proyecto, necesitamos instalar Docker Engine en Ubuntu. Hay varias formas de instalar Docker Engine y puedes elegir cualquier forma dependiendo de tus necesidades. Si ya lo has configurado, puedes omitir este paso.

- La mayoría de los usuarios [configuran los repositorios de Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) e instalan desde ellos para facilitar las tareas de instalación y actualización, que es el enfoque recomendado.
- Algunos usuarios descargan el paquete DEB y [lo instalan manualmente](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) y gestionan las actualizaciones completamente de forma manual. Esto es útil en situaciones como instalar Docker en sistemas aislados sin acceso a internet.
- En entornos de prueba y desarrollo, algunos usuarios eligen usar [scripts de conveniencia](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) automatizados para instalar Docker.

Aquí vamos a usar el primero. Antes de instalar docker, se requiere asegurar que la versión sea la más reciente. Los nombres de las versiones antiguas podrían ser `docker`, `docker.io`, o `docker-engine`, puedes verificarlo usando el siguiente comando:

```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

Cuando desinstalas docker, el contenido de `/var/lib/docker/`, incluyendo imágenes, contenedores, volúmenes y redes, todo se conserva. Si quieres empezar con una instalación limpia, puedes consultar la sección [desinstalar Docker Engine](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine) al final de esta página.

### Instalar Docker usando el repositorio

Antes de instalar Docker Engine en una nueva máquina host, es necesario configurar el repositorio de Docker. Después, podemos instalar y actualizar Docker desde el repositorio.

- **Paso 1**. Configurar el repositorio con el paquete `apt`

Actualiza el índice de paquetes `apt` e instala paquetes para permitir que `apt` use un repositorio sobre HTTPS con los siguientes comandos:

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

Añade la clave GPG oficial de Docker:

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

Usa el siguiente comando para configurar el repositorio **estable**. Para añadir el repositorio **nightly** o **test**, añade la palabra `nightly` o `test` (o ambas) después de la palabra `stable` en los comandos de abajo. Puedes [Aprender sobre los canales **nightly** y **test**](https://docs.docker.com/engine/install/) aquí.

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **Paso 2**. Instalar el Motor de Docker

Actualiza el índice de paquetes `apt`, e instala la **última versión** del Motor de Docker y containerd con los siguientes comandos:

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

Podemos verificar si el Motor de Docker está instalado correctamente ejecutando la imagen `hello-world`.

   ```shell
    sudo docker run hello-world
   ```

- **Paso 3**. Gestionar Docker como un usuario no root con los siguientes procesos.

Crear el grupo `docker`.

   ```shell
   sudo groupadd docker
   ```

Añadir el usuario al grupo `docker`.

   ```shell
   sudo usermod -aG docker $USER
   ```

Cerrar sesión y volver a iniciar sesión para reevaluar la membresía del grupo.

Verificar que puedes ejecutar comandos `docker` sin `sudo` ejecutando `hello-world`

   ```shell
   docker run hello-world
   ```

- **Paso 4**. Configurar el NVIDIA Container Toolkit con los siguientes procesos:

Configurar el repositorio `stable` y la clave GPG:

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

Actualizar la lista de paquetes e instalar el paquete `nvidia-docker2` (y dependencias):

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

Reiniciar el daemon de Docker para completar la instalación después de configurar el runtime predeterminado:

   ```shell
   sudo systemctl restart docker
   ```

## Comenzando

### Instalar NVIDIA GPU Cloud CLI ARM64 Linux

**NVIDIA GPU Cloud (NGC) CLI** es una interfaz de línea de comandos basada en Python para gestionar contenedores Docker en el NGC Container Registry. Con NGC CLI, puedes realizar muchas de las mismas operaciones que están disponibles desde el sitio web de NGC, como ejecutar trabajos y ver repositorios Docker dentro de tu organización y espacio de equipo.

- **Paso 1**. Ve a la página [Download CLI](https://ngc.nvidia.com/setup/installers/cli) y descarga el archivo zip que contiene el binario. El binario NGC CLI para ARM64 es compatible con Ubuntu 18.04 y distribuciones posteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2**. Transfiere el archivo zip a un directorio donde tengas permisos y descomprímelo y finalmente ejecuta el binario.

También puedes descargar, descomprimir e instalar desde la línea de comandos moviéndote a un directorio donde tengas permisos de ejecución y luego ejecutando el siguiente comando:

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

Verifica el hash md5 del binario para asegurar que el archivo no se corrompió durante la descarga:

```shell
md5sum -c ngc.md5
```

- **Paso 3**. Añade tu directorio actual al path:

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

Debes configurar NGC CLI para tu uso con el fin de ejecutar los comandos.

- **Paso 4**. Ingresa el siguiente comando, incluyendo tu clave API cuando se te solicite:

```shell
ngc config set
```

#### Generación de clave API de NGC

Se requiere una clave API para configurar NGC CLI, podemos generarla a través del sitio web de NGC.

- **Paso 1**. Ve al [sitio web](https://catalog.ngc.nvidia.com/) y haz clic en "Sign In/Sign Up".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2**. Registra una cuenta como desarrollador de NVIDIA.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3**. Elige una cuenta para continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **Paso 4**. Haz clic en "Setup" en la esquina superior derecha de la página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **Paso 5**. Selecciona "Get API Key".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **Paso 6**. Haz clic en "Generate API Key".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **Paso 7**. La clave API se mostrará en la parte inferior de la página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### Instalar el TAO Toolkit

Python3 y python3-pip deben instalarse primero:

```shell
sudo apt install -y python3 python3-pip
```

TAO Toolkit es un paquete pip de Python que está alojado en el NVIDIA PyIndex. El paquete utiliza la API REST de docker internamente para interactuar con el registro de Docker de NGC para extraer e instanciar los contenedores docker subyacentes. En los pasos anteriores, ya hemos configurado una cuenta NGC y generado una clave API asociada con ella. Si deseas ver más sobre la sección [Prerrequisitos de Instalación](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq), puedes hacer clic en ella para obtener detalles sobre cómo crear una cuenta NGC y obtener una clave API.

#### **Entorno Virtual - Virtualenv**

Un Entorno Virtual es una copia de trabajo aislada de Python que te permite trabajar en un proyecto específico sin preocuparte por afectar otros proyectos. Por ejemplo, puedes trabajar en un proyecto que requiere Django 1.3 mientras procesas un proyecto que requiere Django 1.0. Puedes hacer clic [aquí](http://pypi.python.org/pypi/virtualenv) para crear entornos Python aislados.

Se recomienda encarecidamente configurar un entorno virtual primero y luego instalar el TAO Toolkit.

- Puedes instalar virtualenv a través de pip:

```shell
pip install virtualenv
```

- Crear un entorno virtual:

```shell
virtualenv venv
```

Esto crea una copia de Python en cualquier directorio donde ejecutes el comando, colocándola en una carpeta llamada `venv`.

- Activa el entorno virtual:

```shell
source venv/bin/activate
```

- Si has terminado de trabajar en el entorno virtual por el momento, puedes desactivarlo:

```shell
deactivate
```

Esto te devuelve al intérprete de Python predeterminado del sistema con todas sus librerías instaladas.

Para eliminar un entorno virtual, simplemente elimina su carpeta.

**virtualenvwarpper**

Sin embargo, después de un tiempo, podrías terminar con muchos entornos virtuales dispersos por tu sistema, y es posible que olvides sus nombres o dónde fueron ubicados. Por lo tanto, estamos usando virtualenvwarpper. El [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html) proporciona un conjunto de comandos que hace que trabajar con entornos virtuales sea mucho más agradable. También coloca todos tus entornos virtuales en un solo lugar.

Puedes instalar (asegúrate de que **virtualenv** ya esté instalado):

   ```
   pip install virtualenvwrapper
   export WORKON_HOME=~/Envs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

Si quieres ver más información al respecto, por favor consulta las [Instrucciones completas de instalación de virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/install.html).)

*Puedes seguir las instrucciones en este [enlace](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html) para configurar un virtualenv de Python usando un virtualenvwrapper.*

#### **Establecer la versión de Python en el Entorno Virtual**

- **Paso 1**. Una vez que hayas seguido las instrucciones para instalar `virtualenv` y `virtualenvwrapper`, establece la versión de Python en el `virtualenv`. Esto se puede hacer de cualquiera de las siguientes maneras:

- Definiendo la variable de entorno llamada VIRTUALENVWRAPPER_PYTHON. Esta variable debe apuntar a la ruta donde el binario de python3 está instalado en tu máquina local. También puedes agregarla a tu `.bashrc` o `.bash_profile` para configurar tu `virtualenv` de Python por defecto.

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- Configurando la ruta al binario de python3 al crear tu `virtualenv` usando el wrapper `virtualenvwrapper`

```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **Paso 2**. Una vez que hayas iniciado sesión en el `virtualenv`, el símbolo del sistema debería mostrar el nombre de tu entorno virtual

```shell
   (launcher) py-3.6.9 desktop:
```

- **Paso 3**. Cuando hayas terminado con tu sesión, puedes desactivar tu `virtualenv` usando el comando `deactivate`:

```shell
deactivate
```

- **Paso 4**. Puedes reinstanciar este entorno `virtualenv` creado usando el comando `workon`.

   ```shell
   workon launcher
   ```

#### **Instalar el paquete TAO**

- **paso 1**. Ya hemos configurado el entorno que necesitamos. Ahora podemos instalar el paquete Python TAO Launcher llamado `nvidia-tao` con el siguiente comando.

   ```shell
   pip3 install nvidia-pyindex
   pip3 install nvidia-tao
   ```

- **paso 2**. Invoca los puntos de entrada usando el comando `tao`.

```
tao --help
```

La salida de muestra del comando anterior es:

```
usage: tao [-h]
         {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,
         heartratenet,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,
         retinanet,speech_to_text,ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
         ...

Launcher for TAO

optional arguments:
-h, --help            show this help message and exit

tasks:
      {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,heartratenet
      ,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,retinanet,speech_to_text,
      ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}
```

- **paso 3**. Nota que bajo tareas puedes ver todas las tareas invocables por el lanzador. Las siguientes son las tareas específicas que ayudan con el manejo de los comandos lanzados usando el Lanzador TAO:

  - list
  - stop
  - info

**Precaución:** Si la terminal informa "bash: Cannot find tao", por favor usa este comando:

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### Instalar DeepStream5

- **Paso 1**. Edita `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list` y reemplaza .6 con .5:

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **Paso 2**. Escribe `sudo apt update` e intenta nuevamente instalar DeepStream 5.1.

Y luego instálalo con el siguiente comando:

```shell
sudo -H pip3 install pyds-ext
```

Para más información, por favor consulta los enlaces a continuación:

- [Contenedores DeepStream-Docker](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [Integración de Modelos TAO en DeepStream](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### Instalar Jetson Multicamera Pipelines e Inicio Rápido

Finalmente, vamos a construir un pipeline típico de múltiples cámaras, es decir, `N×(captura)->preprocesamiento->lote->DNN-> tu lógica de aplicación aquí ->codificación->E/S de archivos + visualización`, utilizando gstreamer y deepstream internamente. Proporciona acceso programático para configurar el pipeline en python a través del paquete jetmulticam.

Este proyecto utiliza la aceleración HW de Nvidia para un uso mínimo de CPU. Por ejemplo, puedes realizar detección de objetos en tiempo real en 6 flujos de cámara usando tan solo 16.5% de CPU. Puedes construir fácilmente tu lógica personalizada en python accediendo a los datos de imagen (vía np.array), así como a los resultados de detección de objetos.

- **Paso 1**. Instala Jetson Multicamera Pipelines con el siguiente comando:

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```

- **Paso 2**. Ejecuta el ejemplo con tus cámaras:

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*Este es el 'example.py', puedes aplicarlo tanto a cámara monocular como a múltiples cámaras.*

```cpp
import time
from jetmulticam import CameraPipelineDNN
from jetmulticam.models import PeopleNet, DashCamNet

if __name__ == "__main__":

    pipeline = CameraPipelineDNN(
        cameras=[2, 5, 8],
        models=[
            PeopleNet.DLA1,
            DashCamNet.DLA0,
            # PeopleNet.GPU
        ],
        save_video=True,
        save_video_folder="/home/nx/logs/videos",
        display=True,
    )

    while pipeline.running():
        arr = pipeline.images[0] # np.array con forma (1080, 1920, 3), es decir, (imagen RGB 1080p)
        dets = pipeline.detections[0] # Detecciones de las DNNs
        time.sleep(1/30)
```

Este es el resultado de múltiples cámaras mostrado así:

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*Más*

Hay más modelos / aceleradores soportados:

```cpp
pipeline = CameraPipelineDNN(
    cam_ids = [0, 1, 2]
    models=[
        models.PeopleNet.DLA0,
        models.PeopleNet.DLA1,
        models.PeopleNet.GPU,
        models.DashCamNet.DLA0,
        models.DashCamNet.DLA1,
        models.DashCamNet.GPU
        ]
    # ...
)
```

**Precaución:** Si la terminal informa "EGL Not found", por favor revisa [EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
