---
description: Esta wiki proporciona un tutorial sobre cómo ejecutar VLM en una reComputer Jetson.
title: Como ejecutar un VLM en una reComputer
keywords:
- reComputer
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/run_vlm_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# Cómo ejecutar un VLM en una reComputer con Jetson Platform Services

## Introducción
Los modelos de lenguaje de visión (VLM) son modelos multimodales que admiten imágenes, videos y texto y utilizan una combinación de LLM's y transformadores de visión. Con base en esta capacidad, pueden admitir indicaciones de texto para consultar videos e imágenes, lo que permite chatear con el video y definir alertas basadas en lenguaje natural. El [servicio VLM AI](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html) permite una implementación rápida de VLM con Jetson Platform Services para aplicaciones de información de video. El servicio VLM expone puntos finales de API REST para configurar la entrada de la transmisión de video, establecer alertas y hacer preguntas en lenguaje natural sobre la transmisión de video de entrada.

Esta wiki proporciona un tutorial sobre cómo ejecutar un VLM en la [reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## Requerimientos
Antes de continuar con el proceso de configuración, asegúrate de que tu sistema cumpla con los siguientes prerequisitos:

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png">
      <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

- Una reComputer J4012 Orin NX 16G con Ubuntu `22.04` o `posterior`.
- Versión de controlador: `535.113.01`, Jetpack `6.0` y CUDA Versión: `12.2`.
- Asegúrate de que JetPack y los paquetes de servicios Jetson relacionados estén instalados.
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```
- Se pueden transmitir cámaras IP o vídeos locales a través de RTSP. (Recomendamos utilizar nuestro [tutorial de NVStreamer](/getting_started_with_nvstreamer) proporcionado para la transmisión RTSP).




## Primeros pasos

**Paso 1**: Descarga el paquete de aplicación **`vlm-1.1.0.tar.gz`** de NGC en tu Jetson usando este enlace: [Flujo de trabajo y recursos de referencia de NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Deberás ingresar tus credenciales de NGC. En la página, usa una de las opciones disponibles en el menú **`Descargar`** (esquina superior derecha):
```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**Paso 2**: El servicio VLM AI utilizará los servicios `jetson-ingress` y `jetson-monitoring`. Debes configurar estos dos servicios para integrarlos con el servicio VLM AI. Copia la configuración predeterminada proporcionada en el directorio de configuración del servicio correspondiente:
```bash
sudo cp config/vlm-nginx.conf /opt/nvidia/jetson/services/ingress/config
sudo cp config/prometheus.yml /opt/nvidia/jetson/services/monitoring/config/prometheus.yml
sudo cp config/rules.yml /opt/nvidia/jetson/services/monitoring/config/rules.yml
```

**Paso 3**: Ejecuta los servicios básicos:
```bash
sudo systemctl start jetson-ingress
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
sudo systemctl start jetson-redis
sudo systemctl start jetson-vst
```

**Paso 4**: Al iniciar el servicio VLM por primera vez, descargará y cuantificará automáticamente el VLM. Este proceso puede llevar algún tiempo. Si realizas la implementación en Orin NX16, es posible que necesites montar más espacio SWAP porque el proceso de cuantificación puede consumir una gran cantidad de memoria. Ejecuta los siguientes comandos para montar más espacio SWAP:

```bash
sudo fallocate -l 10G /data/10GB.swap
sudo mkswap /data/10GB.swap
sudo swapon /data/10GB.swap
```

**Paso 5**: Inicia el servicio VLM AI:
```bash
cd ~/vlm/example_1
sudo docker compose up -d
```
Para comprobar si se han iniciado todos los contenedores necesarios, puedes ejecutar el siguiente comando:
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## Agrega la entrada de flujo RTSP
Primero puedes agregar una secuencia RTSP para que el modelo VLM la use con el siguiente comando curl.
Se recomienda utilizar el [tutorial de NVStreamer](/getting_started_with_nvstreamer) para la transmisión.
- **Paso 1**: Reemplaza `0.0.0.0` con el IP de tu Jetson y el enlace `liveStreamUrl` con tu enlace RTSP, luego ingresa el siguiente comando en la terminal:
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
    Nota: Además del comando curl, también puedes probar directamente la API REST a través de la página de documentación de la API, que está disponible en `http://0.0.0.0:5010/docs` cuando se inicia el servicio de detección de disparo cero.

- **Paso 2**: Después de ejecutar el primer paso, se devolverá una identificación. Debes registrar esta identificación para usarla en los pasos siguientes:
    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```
    También puedes obtener la identificación más tarde usando el siguiente comando:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```
    Para eliminar una secuencia por su ID, puedes utilizar el siguiente comando:
    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## Configurar alertas
Las alertas son preguntas que el VLM evaluará continuamente en la entrada de la transmisión en vivo. Para cada conjunto de reglas de alerta, el VLM intentará decidir si es Verdadero o Falso en función del fotograma más reciente de la transmisión en vivo. Estos estados Verdadero y Falso, según lo determina el VLM, se envían a un websocket y al servicio de monitoreo Jetson.

Al configurar alertas, la regla de alerta debe formularse como una pregunta de sí o no. Como "¿Hay fuego?" o “¿Hay humo?”. El cuerpo de la solicitud también debe tener el campo "id" que corresponde al ID de la transmisión que se devolvió cuando se agregó la transmisión RTSP.

De forma predeterminada, el servicio VLM admite hasta 10 reglas de alerta. Esto se puede aumentar ajustando los archivos de configuración.

**Paso 1**: Reemplaz `0.0.0.0` con la dirección IP de tu reComputer, modifica `alerts` para incluir los objetos que necesitas para las alertas, usa el `id` devuelto en el paso anterior. Después de completar el comando, ingresa lo siguiente en la terminal:
``` bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["is there a fire?", "is there smoke?"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## Ver el resultado de la transmisión RTSP
El resultado de la detección se transmitirá a través de `rtsp://reComputer_ip:5011/out`. Proporcionamos una secuencia de comandos de Python para visualizar la salida de la transmisión de video. Debes instalar la biblioteca opencv-python con anticipación y luego ejecutar la siguiente secuencia de comandos de Python:
- **Paso 1:** Instala la biblioteca opencv-python:
    ```bash
    pip install opencv-python
    ```
- **Paso 2:** Ejecuta el siguiente script de Python:
    ```python
    import cv2
    rtsp_url = "rtsp://reComputer_ip:5011/out"
    cap = cv2.VideoCapture(rtsp_url)
    if not cap.isOpened():
        print("Cannot open RTSP stream")
        exit()
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to retrieve frame")
            break
        cv2.imshow('RTSP Stream', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    cap.release()
    cv2.destroyAllWindows()
    ```

## Apagado
Para detener el servicio de detección de disparo cero, ejecuta el siguiente comando en el mismo directorio donde se encuentra el archivo `compose.yaml`:
```bash
sudo docker compose down
```

## Más detalles
Modelos de lenguaje visual (VLM) con Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

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