---
description: DashCamNet y PeopleNet con Jetson Xavier NX Multicamera
title: DashCamNet y PeopleNet con Jetson Xavier NX Multicamera
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

# DashCamNet y PeopleNet con Jetson Xavier NX Multicamera

## Introducción

Hoy en día, en los campos de conducción autonoma, grabación de vehículos y monitoreo de infracciones a menudo utilizamos inteligencia artificial para ayudarnos a identificar información de vehículos, placas y obstáculos. Gracias al gran número de modelos pre entrenados generados por Nvidia NGC, podemos realizar estas tareas complejas de forma más sencilla.

Crear un modelo de IA/aprendizaje automático desde cero puede costarte mucho tiempo y dinero. La [Transferencia de aprendizaje](https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/) es una técnica popular que se puede utilizar para extraer características aprendidas de un modelo de red neuronal existente a uno nuevo. El NVIDIA TAO (Train, Adapt, and Optimize) Toolkit es una solución basada en CLI y Jupyter Notebook de [NVIDIA TAO](https://developer.nvidia.com/tao) que abstrae la complejidad de los marcos de IA/aprendizaje profundo, permitiéndote ajustar modelos de IA preentrenados de alta calidad de NVIDIA con solo una fracción de los datos en comparación con el entrenamiento desde cero.

El TAO Toolkit también es compatible con más de 100 permutaciones de arquitecturas de modelos y backbones optimizados por NVIDIA, como EfficientNet, YOLOv3/v4, RetinaNet, FasterRCNN, UNET y muchos más.

<!-- Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) and [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) are good for this demo. -->

Credit to NVIDIA's [repository](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) and Tomasz's [project](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines), we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) are good for this demo.
Gracias al [repositorio](https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/) de NVIDIA y al [proyecto](https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines) de Tomasz, vamos a detectar autos y personas con cámaras múltiples desplegadas en Jetson Xavier NX. Ambos Jetson SUB Mini PC son adecuados para esta demostración.

*NVIDIA TAO Toolkit was previously named NVIDIA Transfer Learning Toolkit(Tlt).*
*NVIDIA TAO Toolkit solía llamarse NVIDIA Transfer Learning Toolkit(Tlt).*

<p style={{textAlign: 'center'}}><img src="https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg" alt="pir" width={800} height="auto" /></p>

## Materiales requeridos

### Configuración del hardware

<!-- - [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) / [NVIDIA® Jetson Nano™ Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) -->
- [NVIDIA® Jetson Xavier™ NX Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html) / [Jetson SUB Mini PC](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html)

<p style={{textAlign: 'center'}}><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg" alt="pir" width={300} height="auto" /></p>

- Webcam USB / Raspberry Pi  Camera V2.1 / [Cámaras IMX219-130 de 8MP](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) / [Cámaras de alta calidad 12.3MP IMX477](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<p style={{textAlign: 'center'}}><img src="https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400" alt="pir" width={300} height="auto" /></p>

- Pantalla con interfaz HDMI, DP o eDP
- PC con alguna distribución de Linux como sistema operativo

### Configuración del Software

- Jetpack 4.5 o 4.6 para Jetson Xavier NX
- Docker
- DeepStream
- TAO Toolkit
- Python3.6 con Pypi(python3-pip) y Entornos Virtuales
- NVIDIA Container Toolkit

Los métodos de instalación de software serán detallados en los siguientes pasos.

## Pre instalación

Antes de comenzar el proyecto, necesitamos instalar Docker Engine en Ubuntu. Hay muchas formas de instalar Docker Engine y puedes elegir una dependiendo de tus necesidades. Si ya lo tienes instalado, puedes omitir este paso.

- La mayoría de usuarios [configuran los repositorios de Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository) e instalan desde ellos por la facilidad en la instalación y actualización, este es el enfoque recomendado.
- Algunos usuarios descargan el paquete DEB [lo instalan manualmente](https://docs.docker.com/engine/install/ubuntu/#install-from-a-package) y manejan las actualizaciones de forma completamente manual. Esto es útil para instalar Docker en sistemas aislados sin acceso a internet.
- En entornos de desarrollo y testing, algunos usuarios eligen utilizar [Scripts de conveniencia](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script) para instalar Docker.

En esta wiki vamos a usar el primer método. Antes de instalar Docker, es necesario asegurarse de que la versión sea la más reciente. Los nombres de las versiones antiguas pueden ser docker, docker.io o docker-engine. Puedes verificarlo usando el siguiente comando:

```shell
sudo apt-get purge docker docker-engine docker.io containerd runc
```

Cuando desinstalas Docker, el contenido de /var/lib/docker/, incluidos imágenes, contenedores, volúmenes y redes, se conserva. Si deseas comenzar con una instalación limpia, puedes consultar la sección de [desinstalación de Docker Engine](https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine) en la parte inferior de esta página.

### Instalar Docker utilizando el repositorio

Antes de instalar Docker Engine en una nueva máquina, es necesario configurar el repositorio de Docker. Posteriormente, podemos instalar u actualizar Docker desde el repositorio.

- **Paso 1**. Configurar el repositorio con el paquete `apt`

Actualiza el índice de paquetes de `apt` e instala los paquetes que permiten a `apt` utilizar un repositorio a través de HTTPS con los siguientes comandos:

   ```shell
    sudo apt-get update
    sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

Añade la clave GPC oficial de Docker:

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

Utiliza el siguiente comando para configurar el repositorio **stable**. Para agregar el repositorio **nightly** o **test**, añade la palabra `nightly` o `test` (o ambas) después de la palabra `stable` en los comandos a continuación. Puedes [Aprender más sobre los canales **nightly** y **test**](https://docs.docker.com/engine/install/) aquí.

   ```shell
    echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

- **Paso 2**. Instalar Docker Engine

Actualiza el índice de paquetes de `apt` e instala la **última versión** de Docker Engine y containerd con los siguientes comandos:

   ```shell
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

Podemos verificar si Docker Engine está instalado correctamente ejecutando la imagen `hello-world`.

   ```shell
    sudo docker run hello-world
   ```

- **Paso 3**. Manejar Docker como usuario sin privilegios con los siguientes procesos.

Crea el grupo `docker`.

   ```shell
   sudo groupadd docker
   ```

Añade el usuario en el grupo `docker`.

   ```shell
   sudo usermod -aG docker $USER
   ```

Cierra sesión y vuelve a iniciarla para reevaluar la membresía del grupo.

Verifica que puedas ejecutar comandos de `docker` sin `sudo` ejecutando `hello-world`.

   ```shell
   docker run hello-world
   ```

- **Paso 4**. Configura el NVIDIA Container Toolkit con los siguientes procesos:

Configura el repositorio `stable` y la GPG key:

   ```shell
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
      && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   ```

Actualiza el listado de paquetes e instala el paquete nvidia-docker2 (y sus dependencias):

   ```shell
   sudo apt-get update
   sudo apt-get install -y nvidia-docker2
   ```

Reinicia el daemon de Docker para completar la instalación después de establecer el tiempo de ejecución predeterminado:

   ```shell
   sudo systemctl restart docker
   ```

## Primeros pasos

### Instalar NVIDIA GPU Cloud CLI ARM64 Linux

**NVIDIA GPU Cloud (NGC) CLI** es una interfaz de línea de comandos basada en Python para gestionar contenedores Docker en el Registro de Contenedores NGC. Con NGC CLI, puedes realizar muchas de las mismas operaciones disponibles en el sitio web de NGC, como ejecutar trabajos y ver repositorios Docker dentro de tu espacio de organización y equipo.

- **Paso 1**. Ve a la página de [Descargar CLI](https://ngc.nvidia.com/setup/installers/cli) y descarga el archivo zip que contiene el binario. El binario de NGC CLI para ARM64 es compatible con distribuciones de Ubuntu 18.04 y posteriores.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2**. Transfiere el archivo zip al directorio donde cuentes con los permisos y descomprimelo para finalmente ejecutar el archivo binario.

También puedes descargar, descomprimir e instalar desde la línea de comandos moviéndote a un directorio donde tengas permisos de ejecución y luego ejecutando el siguiente comando:

```shell
wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc
```

Verifica el hash md5 del binario para asegurarte de que el archivo no se haya corrompido durante la descarga:

```shell
md5sum -c ngc.md5
```

- **Paso 3**. Agrega tu directorio actual al PATH:

```shell
echo "export PATH=\"\$PATH:$(pwd)\"" >> ~/.bash_profile && source ~/.bash_profile
```

Debes configurar NGC CLI para tu uso antes de poder ejecutar los comandos.

- **Paso 4**. Ingresa el siguiente comando, incluyendo tu API key.

```shell
ngc config set
```

#### Generar NGC API key

Se requiere una clave de API para configurar NGC CLI, la cual podemos generar a través del sitio web de NGC.

- **Paso 1**. Ve al [sitio web](https://catalog.ngc.nvidia.com/) y haz click en "Iniciar sesión/Registrarse"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2**. Registra una cuenta como desarrollador NVIDIA.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3**. Elige una cuenta y procede.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png" alt="pir" width={800} height="auto" /></p>

- **Paso 5**. Haz click en "Setup" en la esquina superior derecha de la página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png" alt="pir" width={800} height="auto" /></p>

- **Paso 5**. Selecciona "Get API Key".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png" alt="pir" width={800} height="auto" /></p>

- **Paso 6**. Haz click en "Generate API Key".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png" alt="pir" width={800} height="auto" /></p>

- **Paso 7**. La API Key será mostrada en la parte inferior de la página.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png" alt="pir" width={800} height="auto" /></p>

### Instalar el TAO Toolkit

Python3 y python3-pip deben ser instalados para empezar:

```shell
sudo apt install -y python3 python3-pip
```

TAO Toolkit es un paquete de Python pip que se encuentra en NVIDIA PyIndex. Este paquete utiliza la docker restAPI en segundo plano para interactuar con el registro de Docker de NGC y así descargar e instanciar los contenedores Docker subyacentes. En los pasos anteriores, ya hemos creado una cuenta de NGC y generado una clave de API asociada a ella. Si deseas obtener más información, puedes consultar la sección de [requisitos previos de instalación](https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq) para obtener detalles sobre cómo crear una cuenta de NGC y obtener una clave de API.

#### **Entorno Virtual - Virtualenv**

Un entorno virtual es una copia aislada de Python que te permite trabajar en un proyecto específico sin preocuparte por afectar otros proyectos. Por ejemplo, puedes trabajar en un proyecto que requiere Django 1.3 mientras manejas otro proyecto que necesita Django 1.0. Puedes hacer clic [aquí](http://pypi.python.org/pypi/virtualenv) para crear entornos aislados de Python.

Es altamente recomendable configurar un entorno virtual para instalar el TAO Toolkit.

- Puedes instalar virtualenv con pip:

```shell
pip install virtualenv
```

- Para crear el entorno virtual:

```shell
virtualenv venv
```

Con ello se crea una copia de Python en el directorio donde ejecutaste el comando, ubicándola en una carpeta llamada `venv`.

- Para activar el entorno virtual utiliza el siguiente comando:

```shell
source venv/bin/activate
```

- Si terminaste de utilizar el entorno virtual, puedes desactivarlo con el siguiente comando:

```shell
deactivate
```

Esto te devuelve al intérprete de Python predeterminado del sistema con todas sus bibliotecas instaladas.

Para eliminar el entorno virtual solo elimina el folder que lo contiene.

**virtualenvwarpper**

Después de un tiempo, podrías terminar con muchos entornos virtuales esparcidos por tu sistema, y es posible que olvides sus nombres o dónde los guardaste. Por eso, utilizamos virtualenvwrapper. El [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/index.html) proporciona un conjunto de comandos que facilitan el trabajo con entornos virtuales. Además, organiza todos tus entornos virtuales en un solo lugar.

Para instalar se usa el siguiente comando (asegurate de tener **virtualenv** instalado previamente) :

   ```
   pip install virtualenvwrapper
   export WORKON_HOME=~/Envs
   source /usr/local/bin/virtualenvwrapper.sh
   ```

Si necesitas más información al respecto puedes consultar [virtualenvwrapper instrucciones de instalación completa](http://virtualenvwrapper.readthedocs.org/en/latest/install.html).)

*Sigue las instrucciones en este [link](https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html) para configurar tu entorno virtual usando virtualenvwrapper.*

#### **Configurar la versión de python para el entorno virtual**

- **Paso 1**. Una vez hayas instalado `virtualenv` y `virtualenvwrapper`, configurarás la versión de Python, puedes hacerlo de las siguientes formas:

- Defining the environment variable called VIRTUALENVWRAPPER_PYTHON. This variable should point to the path where the python3 binary is installed in your local machine. You can also add it to your `.bashrc` or `.bash_profile` for setting your Python `virtualenv` by default.
- Definir la variable de entorno llamada VIRTUALENVWRAPPER_PYTHON. Esta variable debe apuntar a la ruta donde el binario de python3 está instalado en tu máquina local. También puedes agregarla a tu archivo `.bashrc` o `.bash_profile` para configurar tu `virtualenv` de Python de forma predeterminada.

```shell
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
```

- Configurando la ruta al binario de python3 al crear tu `virtualenv` usando el envoltorio de `virtualenvwrapper`.

```shell
mkvirtualenv launcher -p /path/to/your/python3
```

- **Paso 2**. Una vez que hayas iniciado sesión en el `virtualenv`, el indicador de comando debería mostrar el nombre de tu entorno virtual.

```shell
   (launcher) py-3.6.9 desktop:
```

- **Paso 3**. Cuando hayas terminado tu sesión, puedes desactivar tu `virtualenv` usando el comando `deactivate`:
```shell
deactivate
```

- **Paso 4**. Puedes reactivar este `virtualenv` creado usando el comando `workon`:

   ```shell
   workon launcher
   ```

#### **Instalar el paquete TAO**

- **Paso 1**. Ya hemos configurado el entorno que necesitamos. Ahora podemos instalar el paquete Python del TAO Launcher llamado `nvidia-tao` con el siguiente comando:

   ```shell
   pip3 install nvidia-pyindex
   pip3 install nvidia-tao
   ```

- **Paso 2**. Invoca los punto de entrada utilizando el comando `tao`

```
tao --help
```

El output del comando arriba se muestra a continuación:

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

- **Paso 3**. Ten en cuenta que en la sección de tareas puedes ver todas las tareas que se pueden invocar con el launcher. Las siguientes son las tareas específicas que ayudan a manejar los comandos lanzados usando el TAO Launcher:

  - list
  - stop
  - info

**Precaución:** Si la terminal arroja "bash: Cannot find tao", usa el siguiente comando:

```shell
export PATH=$PATH:~/.local/bin
tao --help
```

### Instalar DeepStream5

- **Paso 1**. Edita `/etc/apt/sources.list.d/nvidia-l4t-apt-source.list` y remplaza .6 por .5:

```shell
deb https://repo.download.nvidia.com/jetson/common r32.5 main
#deb https://repo.download.nvidia.com/jetson/common r32.6 main
deb https://repo.download.nvidia.com/jetson/t194 r32.5 main
#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main
```

- **Paso 2**. Escribe `sudo apt update` y vuelve a intentar instalar DeepStream 5.1.

Ahora instalalo con el siguiente comando:

```shell
sudo -H pip3 install pyds-ext
```

Para más información, revisa los siguientes links:

- [DeepStream-Docker Containers](https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson)
- [Integrating TAO Models into DeepStream](https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html)
- [DashCamNet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet)

### Instala Jetson Multicamera Pipelines y guía rápida

Finalmente, vamos a construir un pipeline típico de múltiples cámaras, es decir, `N×(capture)->preprocess->batch->DNN-> <<your application logic here>> ->encode->file I/O + display`, utilizando gstreamer y deepstream bajo el capó. Proporciona acceso programático para configurar el pipeline en Python a través del paquete jetmulticam.

Este proyecto utiliza la aceleración de hardware de Nvidia para un uso mínimo de la CPU. Por ejemplo, puedes realizar detección de objetos en tiempo real en 6 transmisiones de cámaras utilizando solo un 16.5% de CPU. Puedes crear fácilmente tu lógica personalizada en Python accediendo a los datos de las imágenes (a través de np.array), así como a los resultados de la detección de objetos.

- **Paso 1**. Instala Jetson Multicamera Pipelines con el siguiente comando:

```shell
git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git
cd jetson-multicamera-pipelines
bash scripts/install_dependencies.sh
sudo -H pip3 install Cython
sudo -H pip3 install .
```

- **Paso 2**. Ejemplo de prueba:

```shell
source scripts/env_vars.sh 
cd examples
sudo -H python3 example.py
```

*Este es el archivo'example.py', puedes utilizarlo para una o varias cámaras*

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
        arr = pipeline.images[0] # np.array with shape (1080, 1920, 3), i.e. (1080p RGB image)
        dets = pipeline.detections[0] # Detections from the DNNs
        time.sleep(1/30)
```

Este es el resultado de la multicámara:

<video id="video" controls src="https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4" preload="none">
</video>

*Más*

Hay más modelos soportados / aceleradores:

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

**Precaución:** Si la terminal muestra "EGL Not found", por favor revisa [EGLDevice](https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html).

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
