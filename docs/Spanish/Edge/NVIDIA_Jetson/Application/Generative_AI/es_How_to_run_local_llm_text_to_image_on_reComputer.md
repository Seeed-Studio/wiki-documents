---
description: Cómo ejecutar un LLM de texto a imagen local en una reComputer
title: Texto a imagen con Stable Diffusion
keywords:
- Contribuyente
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_to_run_local_llm_text_to_image_on_reComputer
last_update:
  date: 04/01/2024
  author: Bruno
---


# Cómo ejecutar un modelo de texto a imagen LLM localmente en la reComputer

## Introducción
Un modelo de texto a imagen es un tipo de modelo de inteligencia artificial (IA) que genera imágenes a partir de una descripción textual. Estos modelos toman información textual, como oraciones o párrafos que describen una escena y producen una imagen basada en esa descripción.

Estos modelos se entrenan con grandes conjuntos de datos que contienen pares de descripciones de texto e imágenes correspondientes, aprendiendo a comprender las relaciones entre la información textual y visual.

Los modelos de texto a imagen han logrado avances significativos en los últimos años, pero generar imágenes diversas y de alta calidad que coincidan con precisión con las descripciones textuales sigue siendo una tarea desafiante en la investigación de la IA.

## Descripción general

En este tutorial, exploraremos varias formas de implementar y ejecutar un LLM de texto a imagen local:
1. Crea el entorno virtual (tanto TensorFlow como PyTorch)
    - 1.1. Crea un ejemplo con Keras Stable Diffusion
    - 1.2. Crea un ejemplo usando uno de los modelos disponibles en Hugging Face
    - 1.3. Crea una pequeña API de Python que usaremos para generar imágenes llamando a la API tanto para Keras como para Hugging Face.
3. Usando un contenedor Nvidia.

### Solución de problemas
Antes de comenzar, aquí hay algunos pasos que podemos seguir para tener más memoria disponible.

1. Deshabilita la GUI del escritorio. Podemos usar la Jetson a través de SSH. Podemos ahorrar alrededor de ~800 MB de memoria.

2. Deshabilita ZRAM y usa Swap.

Puedes encontrar esos consejos en el [Nvidia Jetson AI Lab](https://www.jetson-ai-lab.com/tips_ram-optimization.html) y cómo implementarlos.

## Requerimientos

Para este tutorial, necesitaremos una Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

Y vamos a necesitar asegurarnos de que TensorFlow y PyTorch estén instalados.

### Paso 1: crear los entornos virtuales

Keras puede usar TensorFlow o PyTorch como backend. Hugging Face utilizará principalmente PyTorch

Ahora instalaremos TensorFlow y PyTorch. 

Las instrucciones sobre cómo instalar TensorFlow y PyTorch en la Jetson Orin NX se encuentran en el [sitio web de Nvidia](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html).

Podemos instalar TensorFlow y PyTorch de forma global o en un entorno virtual. En este tutorial usaremos un entorno virtual.

Al utilizar un Entorno Virtual no corremos el riesgo de mezclar proyectos o versiones de paquetes.

Esta es la mejor manera, aunque el sitio de Nvidia prefiere la instalación global.

##### TensorFlow

Crea el entorno virtual (estoy usando el nombre kerasStableEnvironment porque lo usaré para el ejemplo de keras. Usa otro nombre si lo deseas).
```bash
sudo apt install python3.8-venv
python -m venv kerasStableEnvironment
```
Después de crearlo, activa el entorno virtual.
```bash
source kerasStableEnvironment/bin/activate
```
Cuando esté activo, verás su nombre antes del mensaje.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/1_prompt_bash.png" /></div>

Ingresa al entorno virtual
```bash
cd kerasStableEnvironment
```
Actualiza PIP e instala algunas dependencias
```bash
pip install -U pip
pip install -U numpy grpcio absl-py py-cpuinfo psutil portpicker six mock requests gast h5py astor termcolor protobuf keras-applications keras-preprocessing wrapt google-pasta setuptools testresources
```
Instala TensorFlow para Jetpack 5.1.1

Para saber qué versión de JetPack tenemos, utiliza el siguiente comando:
```bash
dpkg -l | grep -i jetpack
```
y el resultado debería mostrar la versión de jetpack:
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/2_jetpack_version.png" />
</div>

```bash
pip install --extra-index-url https://developer.download.nvidia.com/compute/redist/jp/v511 tensorflow==2.12.0+nv23.05
```
Si tienes otra versión de JetPack, consulta el [Sitio web de Nvidia](https://docs.nvidia.com/deeplearning/frameworks/install-tf-jetson-platform/index.html) para obtener la URL correcta.

Ahora, verifiquemos la instalación de TensorFlow.
```bash
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
```
Esto debería devolver la siguiente línea:
```bash
[PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
```

##### PyTorch

Instalemos algunas dependencias.
```bash
sudo apt install libopenblas-dev
```
Ahora, instala PyTorch para JetPack 5.1.1
```bash
pip install --no-cache https://developer.download.nvidia.com/compute/redist/jp/v511/pytorch/torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```
Para comprobar la instalación y si CUDA está disponible
```bash
python -c "import torch; print(torch.cuda.is_available())"
```
Debería mostrar como output **True**

Ahora que tenemos TensorFlow y PyTorch instalados, instalemos Keras y crearemos una imagen.

#### 1.1 Keras

Después de instalar **PyTorch** y **Tensorflow**, ahora estamos listos para comenzar a crear imágenes a partir de indicaciones de texto.
Asegúrate de estar todavía en el entorno virtual.

[KerasCV](https://keras.io/keras_cv/) tiene una implementación (junto con varias otras) del modelo de texto a imagen [Stability.ai](https://stability.ai/), [Stable Diffusion](https://github.com/CompVis/stable-diffusion).

[Al usar la implementación de KerasCV](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/), podemos aprovechar algunas de las ventajas de rendimiento, como la compilación XLA y el soporte de precisión mixta.

[Puedes consultar más en el sitio web oficial de Keras](https://keras.io/guides/keras_cv/generate_images_with_stable_diffusion/)

Instalar keras y dependencias. Optamos por estas versiones porque funcionan con las versiones de TensorFlow (o PyTorch) que hemos instalado.

```bash
pip install keras-cv==0.5.1
pip install keras==2.12.0
pip install Pillow
```
Abre tu IDE preferida y escribe el siguiente ejemplo

```bash
vi generate_image.py
```
```python
import keras_cv
import keras
from PIL import Image

keras.mixed_precision.set_global_policy("mixed_float16")

model = keras_cv.models.StableDiffusion (
        img_width=512,  # we can choose another size, but has to be a mutiple of 128
        img_height=512, # the same above
        jit_compile=True
)

prompt = "a cute magical flying dog, fantasy art, golden color, high quality, highly detailed, elegant, sharp focus, concept art, character concepts, digital painting, mystery, adventure"

image = model.text_to_image (prompt,
        num_steps = 25, #image quality
        batch_size = 1 # how many images to generate at once
)

Image.fromarray(image[0]).save("keras_generate_image.png")
```
Mientras ejecutas el script, aquí hay algunas estadísticas.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/3_statistics.png" />
</div>

Y después de un tiempo, el resultado debería lucir como se muestra a continuación:
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/4_keras_generate_image.png" />
</div>

### Paso 1.2 - Hugging Face
[Hugging Face](https://huggingface.co/) Es como Github para el aprendizaje automático. Permite a los desarrolladores crear, implementar, compartir y entrenar sus modelos de aprendizaje automático.

Hugging Face también es conocido por su biblioteca Transformers Python, que facilita el proceso de descarga y entrenamiento de modelos de ML.

Utilicemos algunos de los modelos disponibles.
Dirígete a Hugging Face y elige ver los modelos.

En el lado izquierdo tienes filtros que te permiten elegir qué tipo de modelos quieres ver.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/5_huggingface.png" />
</div>
Hay muchos modelos disponibles, pero nos concentraremos en los modelos de texto a imagen.

#### Entorno virtual
Crea un entorno virtual, como hicimos anteriormente, para que podamos usar Hugging Face sin alterar las versiones de los paquetes o instalar paquetes que no necesitamos.

```bash
python -m venv huggingfaceTesting
source huggingfaceTesting/bin/activate
```
Después de crear el entorno virtual, ingresemos a él. 
Instala PyTorch siguiendo las instrucciones anteriores.

```bash
cd huggingfaceTesting
```
#### Modelo
Hugging Face tiene muchos [modelos de texto a imagen](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending). Aunque teóricamente deberían funcionar con nuestra Jetson, esto no es así.

**stable-diffusion-v1-5**

Voy a probar [stable-diffusion-v1-5 de Runway](https://huggingface.co/runwayml/stable-diffusion-v1-5). 

En la ficha del modelo tienen toda la información necesaria para trabajar con el.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/6_stable_diffusion_v1_5.png"/>
</div>

Usaremos la biblioteca de difusores Hugging Face. 
Dentro del entorno virtual (y con él activado) instala las siguientes dependencias.
```bash
pip install diffusers transformers accelerate
```
Ahora que tenemos todas las dependencias instaladas, probemos el modelo.
Usando tu editor favorito, copia el siguiente código (también disponible en la página del modelo):
```python
from diffusers import StableDiffusionPipeline
import torch

model_id = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)
pipe = pipe.to("cuda")

prompt = "a master jedi cat in star wars holding a lightsaber, wearing a jedi cloak hood, dramatic, cinematic lighting"
image = pipe(prompt).images[0]  
    
image.save("cat_jedi.png")

```
Probemos el modelo.
```bash
python stableDiffusion.py
```
**Recuerda:** Esto requiere mucho espacio. Se están descargando los puntos de control del modelo. Esto se hará sólo una vez.

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/7_model_download.png"/>
</div>
Después de un tiempo, el resultado debe lucir como se muestra a continuación.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/8_result_stablediffusion.png"/>
</div>

**SDXL-Turbo**

Otro model que podemos probar es [SDXL Turbo de Stability AI.](https://huggingface.co/stabilityai/sdxl-turbo)
Copia el siguiente código
```python
from diffusers import AutoPipelineForText2Image
import torch

pipe = AutoPipelineForText2Image.from_pretrained("stabilityai/sdxl-turbo", torch_dtype=torch.float16, variant="fp16")
pipe.to("cuda")

prompt = "full body, cat dressed as a Viking, with weapon in his paws, battle coloring, glow hyper-detail, hyper-realism, cinematic"

image = pipe(prompt=prompt, num_inference_steps=1, guidance_scale=0.0).images[0]
image.save("sdxl-turbo.png")
```
[Este mensaje fue tomado de un artículo de Medium escrito por Daria Wind.](https://medium.com/phygital/top-40-useful-prompts-for-stable-diffusion-xl-008c03dd0557)

Este genera una imagen muy rápido. Tarda casi 30 segundos, desde que se ejecuta el script hasta que sale. 
Aquí está el resultado
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/9_sdxl-turbo.png"/>
</div>

También podemos probar otros modelos, como modelos entrenados específicamente para anime o cyberpunk.

Habrá algunos modelos que no funcionarán. Puede deberse a varios factores: memoria, CPU disponibles o incluso a la memoria Swap.

### Paso 1.3: Crea una pequeña API
Ahora creemos una pequeña API con Flask para usarla para generar una imagen a partir de un prompt y devolvérsela al cliente.

Imagina que tienes una Jetson y deseas poder generar una imagen llamando a una API: Tu generador de imágen a texto LLM personal.

Ya existen proyectos que hacen esto (como el que veremos más adelante), pero nada mejor que hacerlo uno mismo.

Creemos un nuevo Entorno Virtual
```bash
python -m venv imageAPIGenerator
```
Activa el entorno virtual y entra en él.
```bash
source  imageAPIGenerator/bin/activate
cd imageAPIGenerator
```
Usaremos Flask para esto. [FlasK](https://flask.palletsprojects.com/en/3.0.x/) es framework de Python para desarrollo de aplicaciones web. Es lo suficientemente pequeño para nuestro propósito. 

Instala Flask.
```bash
pip install Flask
```
Después de instalarlo, instalemos todas las demás dependencias que necesitemos. Sólo con fines de demostración, usaremos Keras, porque tiene la menor cantidad de dependencias. 

Instala TensorFlow. Sigue las instrucciones anteriores. 
A continuación, instala Keras.
```bash
pip install keras-cv==0.5.1
pip install keras==2.12.0
pip install Pillow
```
Ahora, comencemos a escribir nuestra aplicación.

```bash
vi app.py
```
Para aquellos que no saben qué es o qué hace Flask, probemos con un pequeño ejemplo.

```python
from flask import Flask

app = Flask (__name__)


@app.route("/generate_image")
def generate_image_api():
    return "<h2>Hello World !</h2>"


if __name__ == "__main__":
    app.run(host='',port=8080)
```
Para ejecutar, corre el siguiente script de Python:
```bash
python app.py
```
Deberías obtener el siguiente resultado:
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/10_run_flask.png"/>
</div>

Ahora, abre un navegador e intenta acceder a tu dispositivo Jetson mediante el puerto 8080.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/11_browser_access.png"/>
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/12_accessed_flask.png"/>
</div>

Lo que hicimos fue importar la clase Flask.
```python
import Flask
```
A continuación creamos una instancia de la clase Flask.
```python
app = Flask(__name__)
```
A continuación creamos un decorador de ruta para decirle a Flask qué URL activará nuestra función.
 ```python
@app.route("/generate_image")
```
Al usar generate_image en la URL, activaremos nuestra función
```python
def generate_image_api():
    return "<h2>Hello World !</h2>"
```
También podemos usar curl para acceder a nuestra API.
```bash
curl http://192.168.2.230:8080/generate_image
```
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/13_curl.png"/>
</div>
Ahora que sabemos cómo crear una API, profundicemos en ella y escribámosla.

```bash
vi app.py
```
Y pega el siguiente código:
```python
from flask import Flask, request, send_file
import random, string
import keras_cv
import keras
from PIL import Image

#define APP
app = Flask (__name__)


#option for keras
keras.mixed_precision.set_global_policy("mixed_float16")

# generate custom filename
def generate_random_string(size):
    """Generate a random string of specified size."""
    return ''.join(random.choices(string.ascii_letters + string.digits, k=size))


"""
    This is the function that will generate the image
    and save it using a random created filename
"""
def generate_image(prompt):

    model = keras_cv.models.StableDiffusion (
        img_width=512,  # we can choose another size, but has to be a mutiple of 128
        img_height=512, # the same above
        jit_compile=True
    )

    image = model.text_to_image (prompt,
            num_steps = 25,
            batch_size = 1
    )

    # image filename
    filename = generate_random_string(10) + ".png"
    Image.fromarray(image[0]).save(filename)
    return filename # return filename to send it to client


#define routes
# Use this to get the prompt. we're going to receive it using GET
@app.route("/generate_image", methods=["GET"])
def generate_image_api():
    # get the prompt
    prompt = request.args.get("prompt")
    if not prompt:
        # let's define a default prompt
        prompt = "A cinematic shot of a baby racoon wearing an intricate italian priest robe."

    image_name = generate_image(prompt)
    return send_file(image_name, mimetype='image/png')


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080)
```
**RECUERDA:** Este no es un código listo para Internet. No tenemos ninguna medida de seguridad, así que úsalo con precaución.

Ejecutemos el código.

En un navegador, escribe la URL *http://jetsonIP:8080/generate_image* y espera a que cargue.

Si no le damos un mensaje, utilizará el predeterminado que hemos configurado.

En la CLI, puedes ver que la imágen se está generando.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/14_generating_image_api.png"/>
</div>

Y en el navegador, al cabo de un rato, podremos ver la imagen.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/15_image_API_generated.png"/>
</div>

También podemos ver que la imagen ha sido enviada.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/16_cli_generated.png"/>
</div>

También podemos usar curl para obtener la imagen y guardarla.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/17_cli_generating.png"/>
</div>

Si queremos darle un prompt (como deberíamos), la URL se verá así
*http://jetsonIP:8080/generate_image?prompt=<tu_prompt>*

Podemos ampliar este ejemplo para crear una página mejor, como tener algunos cuadros de texto para la entrada del usuario, un fondo bonito, etc. Pero esto es para otro proyecto.

### Paso 2 - LLM Nvidia
#### Stable Diffusion v1.5
Podemos utilizar un proyecto con [Jetson Containers](https://github.com/dusty-nv/jetson-containers) para correr [stable-diffusion-webui using AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui). 
El proyecto Jetson Containers está dirigido por [Dusty Franklin](https://github.com/dusty-nv), un empleado de NVIDIA.

NVIDIA tiene el proyecto [NVIDIA Jetson Generative AI Lab](https://www.jetson-ai-lab.com/tutorial-intro.html) que tiene muchos tutoriales sobre aprendizaje automático.

Usaremos el [tutorial de Stable Difussion](https://www.jetson-ai-lab.com/tutorial_stable-diffusion.html) para esto.

Clonemos el repositorio de github, ingresemos al repositorio e instalemos las dependencias
```bash
git clone https://github.com/dusty-nv/jetson-containers
cd jetson-containers/
sudo apt update; sudo apt install -y python3-pip
pip3 install -r requirements.txt
```

Ahora que tenemos todo lo que necesitamos, ejecutemos el contenedor con el *stable-diffusion-webui autotag*

```bash
./run.sh $(./autotag stable-diffusion-webui)
```
Comenzará a ejecutar el contenedor.

Después de un rato nos dirá que hay un contenedor compatible y si queremos continuar.
```bash
Found compatible container dustynv/stable-diffusion-webui:r35.3.1 (2024-02-02, 7.3GB) - would you like to pull it? [Y/n] 
```
Comenzará a descargar el contenedor.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/18_container_downloading.png"/>
</div>

Después de terminar, descargará el modelo y ejecutará el servidor en el puerto 7860.

En mí caso no funcionó al principio. No aparecería ningún punto de control para elegir, sin importar cuántas veces presionaras el botón de recargar.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/20_no_checkpoint.png"/>
</div>

Descubrí que tenía el 100% del espacio ocupado.
```bash
feiticeir0@JetsonOrin:~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/nvme0n1p1   79G   79G     0 100% /
none            7,4G     0  7,4G   0% /dev
tmpfs           7,6G     0  7,6G   0% /dev/shm
tmpfs           1,6G   19M  1,5G   2% /run
tmpfs           5,0M  4,0K  5,0M   1% /run/lock
tmpfs           7,6G     0  7,6G   0% /sys/fs/cgroup
/dev/loop0      162M  162M     0 100% /snap/chromium/2797
/dev/loop2      128K  128K     0 100% /snap/bare/5
/dev/loop1       70M   70M     0 100% /snap/core22/1125
/dev/loop3       65M   65M     0 100% /snap/cups/1025
/dev/loop4       92M   92M     0 100% /snap/gtk-common-themes/1535
/dev/loop6      162M  162M     0 100% /snap/chromium/2807
/dev/loop5      483M  483M     0 100% /snap/gnome-42-2204/174
/dev/loop7       35M   35M     0 100% /snap/snapd/21185
tmpfs           1,6G  4,0K  1,6G   1% /run/user/1000
```
He estado probando otros modelos y ocupaban todo el espacio. 
Si esto te sucede, simplemente ve a tu directorio de inicio, al directorio de caché oculto y elimina el directorio de huggingface. 
```bash
cd ~/.cache
rm -rf huggingface
```
Ahora deberías tener espacio disponible. O simplemente consigue una unidad nueva, con más espacio. :)

Ahora se está descargando el modelo.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/21_mode_downloading.png"/>
</div>
Y tenemos un puesto de control
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/22_checkpoint.png"/>
</div>

Abre tu navegador y dirigete a tu dirección IP y puerto de la Jetson para ejecutar la webgui de Stable difussion de AUTOMATIC1111.

*http://JetsonIPAddress:7860*
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/19_jetson_webgui.png"/>
</div>

Ahora podemos jugar con él. 
Aquí hay algunas imágenes creadas con el modelo predeterminado.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/23_creating_image1.gif"/>
</div>
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/24_creating_image2.gif"/>
</div>

#### Stable Diffusion XL
AUTOMATIC1111 admite otros modelos. Probemos con Stable Diffusion XL. Tiene 6,6 mil millones de parámetros.

Para agregar otro modelo y que sea más fácil descargarlo, definamos algunas variables, cambiemos permisos y descarguemos los modelos. 
Este es un ejemplo del [Tutorial de NVIDIA](https://www.jetson-ai-lab.com/tutorial_stable-diffusion-xl.html).

```bash
CONTAINERS_DIR=<where_jetson-containers_is_located>
MODEL_DIR=$CONTAINERS_DIR/data/models/stable-diffusion/models/Stable-diffusion/
sudo chown -R $USER $MODEL_DIR
```
Ahora, descarguemos el modelo
```bash
wget -P $MODEL_DIR https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
wget -P $MODEL_DIR https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors
```
Con los modelos descargados, actualicemos el menú desplegable de puntos de control si tienes el contenedor en ejecución, o iniciemos el contenedor nuevamente.

Ahora tenemos dos modelos más disponibles.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/25_models.png"/>
</div>

Este es un ejemplo generado con el modelo XL, con el siguiente mensaje:
>Un retrato, una modelo de moda con ropa futurista, en un entorno ciberpunk en la azotea, con un fondo de ciudad iluminado con luces de neón, retroiluminado por un vibrante resplandor de la ciudad, fotografía de moda.


<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/26_neon_xl.png"/>
</div>
Pruébalo. Recuerde que es posible que no funcione con algunas opciones seleccionadas.

#### Añadir otros modelos
También podemos añadir muchos más modelos. Además de Hugging Face, [Civitai](https://civitai.com/) es otro centro con más modelos para elegir. Civitai tiene algunos modelos NSFW, así que considérate advertido. 

Selecciona el que desees, descarga los puntos de control y colócalos en el directorio de modelos.
```bash
/home/<user>/<jetson-containers-location>/data/models/stable-diffusion/models/Stable-diffusion/
```
Voy a descargar y probar un modelo llamado [DreamShaper XL](https://civitai.com/models/112902/dreamshaper-xl). 
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/27_dreamshaperxl.png"/>
</div>

Recuerda que algunos modelos pueden no funcionar.

Debes jugar con la configuración y leer la tarjeta del modelo para saber qué configuración puede funcionar mejor (si es que funciona).

Por ejemplo, esta tarjeta modelo dice que los pasos de muestreo deben ser 4-8, el método de muestreo debe ser DPM++ SDE Karras, etc...

Descarga el punto de control del modelo y agrégalo al directorio anterior.

Después de actualizar, deberías tener el modelo listo para seleccionar. 
Al seleccionar, AUTOMATIC1111 optimizará el modelo. 

Si muere o aparece un error, obten más espacio. Me estaba pasando a mí y después de generar más espacio, todo salió bien.

Usar el siguiente prompt
>Sosteniendo un bastón, orbstaff <lora:orbstaff:0.60>, (por Gabriel Isak y Adam Elsheimer:1.20), (por Jon Whitcomb y Bayard Wu y Malcolm Liepke0.80),8k, fotografía de moda profesional

[De esta imágen](https://civitai.com/images/8570722),
obtuve el siguiente resultado

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png"/>
</div>

Con estos ajustes:
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/29_dreamshaperXL_settings.png"/>
</div>

¿Recuerdas el mensaje anterior para la chica cyberpunk que usa el modelo *Stable Diffusion XL*?

Aquí hay una nueva imagen, con el mismo mensaje, generada con *DreamShaper XL* con la misma configuración anterior.
<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/30_cyberpunkGirl.png"/>
</div>

Como puedes ver, se pueden crear imágenes maravillosas, siempre que conozcas los parámetros a ajustar. :)

He aprendido que las imágenes más grandes tienden a producir mejores resultados.

Espero que hayas aprendido cómo generar imágenes usando Nvidia Jetson NX de 16 GB y cómo usarla como servidor para generar imágenes mediante prompts.


## ✨ Proyecto de contribuyentes

- Este proyecto es soportado por Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56418890).
- Gracias al esfuerzo de [Bruno](https://github.com/Seeed-Studio/wiki-documents/issues/1029) tu trabajo será [expuesto aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

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