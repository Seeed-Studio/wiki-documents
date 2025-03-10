---
description: Introducción a Roboflow en dispositivos NVIDIA Jetson
title: Introducción a Roboflow en dispositivos NVIDIA Jetson
tags:
  - Etiquetado de datos
  - Entrenamiento de modelo de IA
  - Despliegue de modelo de IA
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Roboflow-Jetson-Getting-Started
last_update:
  date: 10/26/2023
  author: Lakshantha
---

# Introducción a Roboflow Inference en dispositivos NVIDIA® Jetson

Esta wiki explica cómo implementar fácilmente modelos de IA utilizando el servidor de inferencia [Roboflow](https://roboflow.com) que se ejecuta en dispositivos NVIDIA Jetson. Aquí usaremos [Roboflow Universe](https://universe.roboflow.com) para seleccionar un modelo ya entrenado, implementar el modelo en el dispositivo Jetson y realizar inferencias en una transmisión de cámara web en vivo.

[Roboflow Inference](https://github.com/roboflow/inference) es la forma más sencilla de utilizar e implementar modelos de visión por computadora, ya que proporciona una API HTTP Roboflow que se utiliza para ejecutar la inferencia. La inferencia de Roboflow soporta:

- Detección de objetos
- Segmentación de imágenes
- Clasificación de imágenes

Y modelos fundamentales como CLIP y SAM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/9.gif
" style={{width:1000, height:'auto'}}/></div>

## Prerequisitos

- PC con Ubuntu OS (nativo o en máquina virtual)
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) o cualquier otro dispositivo NVIDIA Jetson

:::nota
Esta wiki ha sido testeada y verificada en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y la [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) potenciada por el módulo NVIDIA Jetson Orin NX 16GB 
:::

## Flashear JetPack en la Jetson

Ahora debes asegurarte de que el dispositivo Jetson esté actualizado con un sistema [JetPack](https://developer.nvidia.com/embedded/jetpack). Puedes utilizar NVIDIA SDK Manager o la línea de comandos para actualizar JetPack en el dispositivo.

Para obtener guías de actualización de dispositivos impulsados ​​por Seeed Jetson, consulte los enlaces a continuación:
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [A206 Carrier Board](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [A603 Carrier Board](https://wiki.seeedstudio.com/reComputer_A603_Flash_System)
- [A607 Carrier Board](https://wiki.seeedstudio.com/reComputer_A607_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)
- [reComputer Indsutrial](https://wiki.seeedstudio.com/reComputer_Industrial_Getting_Started/#flash-jetpack)
- [reServer Industrial](https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/#flash-jetpack)

:::nota
Asegúrate de actualizar JetPack a la versión 5.1.1 porque esa es la versión que hemos verificado para esta wiki.
:::

## Aprovecha más de 50 000 modelos en Roboflow Universe

Roboflow ofrece más de 50,000 modelos de IA listos para usar para que todos puedan comenzar con la implementación de sistemas de visión por computadora de la manera más rápida. Puedes explorarlos todos en [Roboflow Universe](https://universe.roboflow.com). Roboflow Universe también ofrece más de 200,000 conjuntos de datos que puedes utilizar para [entrenar un modelo](https://docs.roboflow.com/train/train) en servidores en la nube de Roboflow o usar tu propio conjunto de datos, usar la [herramienta de etiquetado de imágenes en línea de Roboflow](https://docs.roboflow.com/annotate/use-roboflow-annotate) y comenzar a entrenar.

- **Paso 1:** Usaremos un [modelo de detección de personas](https://universe.roboflow.com/mohamed-traore-2ekkp/people-detection-general/model/7) de Roboflow Universe como referencia

- **Paso 2:** Aquí el nombre del modelo seguirá el formato "nombre_modelo/versión". En este caso, es **detección-de-personas-general/7**. Usaremos este nombre de modelo más adelante en esta wiki cuando comencemos con las inferencias.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/1.png
" style={{width:1000, height:'auto'}}/></div>

## Obtén la API Key de Roboflow

Ahora necesitamos obtener una clave API de Roboflow para que funcione el servidor de inferencia.

- **Paso 1:** [Crea una cuenta](https://app.roboflow.com) de Roboflow ingresando tus datos. 

- **Paso 2:** Ingresa a tu cuenta, navega a `Projects > Workspaces > <your_workspace_name> > Roboflow API`, y haz click en **Copy** que se encuentra al lado de la sección "Private API Key"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/2.jpg
" style={{width:1000, height:'auto'}}/></div>

Guarda esta clave privada porque la necesitaremos más adelante.

## Ejecutando el servidor de inferencias de Roboflow

Puedes comenzar con la inferencia de Roboflow en NVIDIA Jetson de tres maneras diferentes.

1. **Using pip package (Utilizar PIP)** - Usar el paquete pip será la forma más rápida de comenzar; sin embargo, deberás instalar los componentes del SDK (CUDA, cuDNN, TensorRT) junto con JetPack.
2. **Using Docker hub (Utilizar Docker Hub)** - El uso de Docker Hub será un poco lento porque primero extraerá una imagen de Docker que tiene alrededor de 19 GB. sin embargo, no es necesario instalar los componentes del SDK porque la imagen de Docker ya los tendrá.
3. **Using local Docker build (Utilizar la compilación local de Docker)** - El uso de la compilación local de Docker es una extensión del método Docker Hub con la cual puedes cambiar el código fuente de la imagen de Docker según la aplicación que desees (como habilitar la precisión de TensorRT con INT8).

Antes de continuar con la ejecución del servidor de inferencia de Roboflow, debes obtener un modelo de IA para realizar la inferencia y una clave API de Roboflow. Primero repasaremos eso.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pip Package" label="pip Package">

### Utilizando el paquete PIP

- **Paso 1:** Si solo actualizas el dispositivo Jetson con Jetson L4T, primero debes instalar los componentes del SDK

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```


- **Paso 2:** Ejecuta los siguientes comandos en la terminal para instalar el paquete pip del servidor de inferencia Roboflow

```sh
sudo apt update
sudo apt install python3-pip -y
pip install inference-gpu
```

- **Paso 3:** Ejecuta lo siguiente y reemplázalo con tu clave API privada de Roboflow.

```sh
export ROBOFLOW_API_KEY=your_key_here
```

- **Paso 4:** Conecta una cámara web al dispositivo Jetson y ejecuta el siguiente script de Python para ejecutar un modelo de detección de personas de código abierto en la transmisión de tu cámara web.

<details>

<summary> webcam.py</summary>

```python
import cv2
import inference
import supervision as sv

annotator = sv.BoxAnnotator()

inference.Stream(
    source="webcam", 
    model=" people-detection-general/7", 

    output_channel_order="BGR",
    use_main_thread=True, 
    
    on_prediction=lambda predictions, image: (
        print(predictions), 
        
        cv2.imshow(
            "Prediction", 
            annotator.annotate(
                scene=image, 
                detections=sv.Detections.from_roboflow(predictions)
            )
        ),
        cv2.waitKey(1)
    )
)
```

</details>


Finalmente, deberías observar los resultados tal como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/11.gif
" style={{width:1000, height:'auto'}}/></div>

---

</TabItem>
<TabItem value="Docker Hub" label="Docker Hub">

### Utilizando Docker Hub

Para utilizar este método, basta con flashear el dispositivo Jetson con L4T. Este utiliza una arquitectura cliente-servidor donde el servidor de inferencia Roboflow se ejecutará en un puerto de red específico en el Jetson y podrás acceder a este servidor de inferencia usando cualquier PC en la misma red o incluso usar la propia Jetson como servidor/cliente.

#### Configuración del servidor - Jetson

Ejecuta lo siguiente para descargar y ejecutar el contenedor Docker del servidor de inferencia Roboflow

```sh
sudo docker run --network=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1
```

Si ves el siguiente resultado, el servidor de inferencia se ha iniciado correctamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/3.png
" style={{width:1000, height:'auto'}}/></div>

#### Configuración del cliente - Jetson/ PC

- **Paso 1:** Instala los paquetes necesarios

```sh
sudo apt update
sudo apt install python3-pip -y
git clone https://github.com/roboflow/roboflow-api-snippets
cd Python/webcam
pip install -r requirements.txt
```

- **Paso 2:** Cree un archivo roboflow_config.json en el mismo directorio que incluye tu clave API de Roboflow y nombre del modelo. Puedes consultar el archivo de muestra roboflow_config.sample.json incluido dentro de este repositorio de GitHub.

- **Paso 3:** En el mismo dispositivo en una terminal diferente o en otra PC conectada a la misma red que tu dispositivo Jetson, ejecuta el siguiente script de Python para correr un modelo de detección de personas de código abierto en la transmisión de tu cámara web.

```sh
python infer-simple.py
```

---

</TabItem>
<TabItem value="Local Docker Build" label="Local Docker Build">

### Utilizando la compilación local de Docker

#### Configuración del servidor - Jetson

Para utilizar este método, basta con flashear el dispositivo Jetson con L4T. Esto utiliza una arquitectura cliente-servidor donde el servidor de inferencia Roboflow se ejecutará en un puerto de red específico en la Jetson y podrás acceder a este servidor de inferencia usando cualquier PC en la misma red o incluso usar la propia Jetson como servidor/cliente.

- **Paso 1:** Clona el repositorio del servidor de inferencia de Roboflow

```sh
git clone https://github.com/roboflow/inference
```

- **Paso 2:** Ingresa al directorio "inference" (inferencia) y comienza a compilar tu propia imagen de Docker

```sh
cd inference
sudo docker build \
    -f docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1 \
    -t roboflow/roboflow-inference-server-jetson-5.1.1:seeed1 .
```

Aquí el texto después de "-t" es el nombre del contenedor que estamos construyendo. Puedes darle cualquier nombre.

- **Paso 3:** Ejecuta el siguiente comando para verificar si la imagen de Docker que compilaste aparece en la lista

```sh
sudo docker ps
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/5.png
" style={{width:1000, height:'auto'}}/></div>

- **Paso 4:** Inicia un contenedor Docker basado en la imagen de Docker que acabas de crear

```sh
docker run --privileged --net=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1:seeed1
```

Si ves el siguiente resultado, el servidor de inferencia se ha iniciado correctamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Roboflow-inference/6.png
" style={{width:1000, height:'auto'}}/></div>

#### Configuración del Cliente - Jetson/ PC

Ejecuta el siguiente script de Python para correr un modelo de detección de personas de código abierto en la transmisión de tu cámara web

<details>

<summary> webcam.py</summary>

```python
import cv2
import base64
import requests
import time


upload_url = ("http://<ip_address_of_jetson>:9001/"
              "people-detection-general/7"
              "?api_key=xxxxxxxx"
              "&stroke=5")
video = cv2.VideoCapture(0)

while True:
    start = time.time()

    ret, img = video.read()
    if ret:
        # Resize (while maintaining the aspect ratio) to improve speed and save bandwidth
        height, width, channels = img.shape
        scale = 416 / max(height, width)
        img = cv2.resize(img, (round(scale * width), round(scale * height)))

        # Encode image to base64 string
        retval, buffer = cv2.imencode('.jpg', img)
        img_str = base64.b64encode(buffer)

        # Get prediction from Roboflow Infer API
        resp = requests.post(upload_url, data=img_str, headers={
            "Content-Type": "application/x-www-form-urlencoded"
        }, stream=True)
        resp = resp.json()

        for bbox in resp["predictions"]:
            img = cv2.rectangle(
                img,
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2))),
                (int(bbox['x']+(bbox['width']/2)), int(bbox['y']+(bbox['height']/2))),
                (0, 255, 0),
                2)
            cv2.putText(
                img, f"{bbox['class']}",
                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2)-5)),
                0, 0.9,
                (0, 255, 0), thickness=2, lineType=cv2.LINE_AA
            )
        cv2.imshow('image', img)
        print((1/(time.time()-start)), " fps")

    if cv2.waitKey(1) == ord('q'):
        break
video.release()
cv2.destroyAllWindows()
```

</details>

Ten en cuenta que los elementos que deben incluirse en `upload_url` en el script son:

- Dirección IP del servidor de inferencia de roboflow
- El modelo que quieres utilizar
- API Key de Roboflow

El modelo se puede seleccionar en Roboflow Universe.

#### Habilitar TensorRT

De forma predeterminada, el servidor de inferencia de Roboflow utiliza el tiempo de ejecución CUDA. Sin embargo, si deseas cambiar al tiempo de ejecución de TensorRT para aumentar la velocidad de inferencia, puedes agregar lo siguiente dentro del archivo "inference/docker/dockerfiles
/Dockerfile.onnx.jetson.5.1.1" y crea la imagen de Docker

```sh
ENV ONNXRUNTIME_EXECUTION_PROVIDERS=TensorrtExecutionProvider
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## Leer más

Roboflow ofrece documentación muy detallada y completa. Por lo que es muy recomendable consultarla [aquí](https://docs.roboflow.com).

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