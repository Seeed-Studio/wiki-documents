---
description: Esta wiki proporciona un tutorial sobre cómo ejecutar VLM en reComputer Jetson.
title: Cómo Ejecutar VLM en reComputer
keywords:
- reComputer
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/run_vlm_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# Cómo Ejecutar VLM en reComputer con Jetson Platform Services

## Introducción

Los modelos de lenguaje visual (VLMs) son modelos multimodales que soportan imágenes, video y texto y utilizan una combinación de modelos de lenguaje grandes y transformadores de visión. Basándose en esta capacidad, son capaces de soportar prompts de texto para consultar videos e imágenes, habilitando así capacidades como chatear con el video y definir alertas basadas en lenguaje natural. El [servicio de IA VLM](https://docs.nvidia.com/jetson/jps/inference-services/vlm.html), permite el despliegue rápido de VLMs con Jetson Platform Services para aplicaciones de análisis de video. El servicio VLM expone endpoints de API REST para configurar la entrada de flujo de video, establecer alertas y hacer preguntas en lenguaje natural sobre el flujo de video de entrada.

Esta wiki proporciona un tutorial sobre cómo ejecutar VLM en [reComputer J4012 Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" />
</div>

## Requisitos

Antes de proceder con el proceso de configuración, asegúrese de que su sistema cumple con los siguientes prerrequisitos:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

- Un reComputer J4012 Orin NX 16G ejecutando Ubuntu `22.04` o `posterior`.
- Versión del Driver: `535.113.01`, Jetpack `6.0` y Versión CUDA: `12.2`.
- Asegúrese de que JetPack y los paquetes de servicios Jetson relacionados estén instalados.

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

- Cámaras IP o videos locales pueden ser transmitidos vía RTSP. (Recomendamos usar nuestro [tutorial de NVStreamer](/es/getting_started_with_nvstreamer) proporcionado para transmisión RTSP.)

## Comenzando

**Paso 1**: Descargue el paquete de aplicación **`vlm-1.1.0.tar.gz`** desde NGC a su Jetson usando este enlace: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Necesitará ingresar sus credenciales NGC. En la página, use una de las opciones disponibles en el menú **`Download`** (esquina superior derecha):

```bash
tar -xvf vlm-1.1.0.tar.gz
cd ~/vlm/example_1
```

**Paso 2**: El servicio de IA VLM utilizará los servicios `jetson-ingress` y `jetson-monitoring`. Necesita configurar estos dos servicios para integrarlos con el servicio de IA VLM. Copie la configuración predeterminada proporcionada al directorio de configuración del servicio correspondiente:

```bash
sudo cp config/vlm-nginx.conf /opt/nvidia/jetson/services/ingress/config
sudo cp config/prometheus.yml /opt/nvidia/jetson/services/monitoring/config/prometheus.yml
sudo cp config/rules.yml /opt/nvidia/jetson/services/monitoring/config/rules.yml
```

**Paso 3**: Ejecute los servicios básicos:

```bash
sudo systemctl start jetson-ingress
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
sudo systemctl start jetson-redis
sudo systemctl start jetson-vst
```

**Paso 4**: Al iniciar el servicio VLM por primera vez, automáticamente descargará y cuantizará el VLM. Este proceso puede tomar algún tiempo. Si está desplegando en Orin NX16, podría necesitar montar más espacio SWAP porque el proceso de cuantización puede consumir una gran cantidad de memoria. Ejecute los siguientes comandos para montar más espacio swap:

```bash
sudo fallocate -l 10G /data/10GB.swap
sudo mkswap /data/10GB.swap
sudo swapon /data/10GB.swap
```

**Paso 5**: Inicie el servicio de IA VLM:

```bash
cd ~/vlm/example_1
sudo docker compose up -d
```

Para verificar si todos los contenedores requeridos han iniciado, puede ejecutar el siguiente comando:

```bash
sudo docker ps
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmfig2.png" />
</div>

## Agregar la entrada de flujo RTSP

Primero puede agregar un flujo RTSP para que el modelo VLM lo use con el siguiente comando curl. Se recomienda usar el [tutorial de NVStreamer](/es/getting_started_with_nvstreamer) para transmisión.

- **Paso 1**: Reemplace `0.0.0.0` con la IP de su Jetson y el enlace `liveStreamUrl` con su enlace RTSP, luego ingrese el siguiente comando en la terminal:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```

    Nota: Además del comando curl, también puede probar directamente la API REST a través de la página de documentación de la API, que está disponible en `http://0.0.0.0:5010/docs` cuando el servicio de detección zero-shot está iniciado.

- **Paso 2**: Después de ejecutar el primer paso, se devolverá un ID. Necesita registrar este ID para usarlo en pasos posteriores:

    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```

    También puede obtener el ID más tarde usando el siguiente comando:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```

    Para eliminar un flujo por su ID, puede usar el siguiente comando:

    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```

## Configurar Alertas

Las alertas son preguntas que el VLM evaluará continuamente en la entrada del flujo en vivo. Para cada conjunto de reglas de alerta, el VLM intentará decidir si es Verdadero o Falso basándose en el frame más reciente del flujo en vivo. Estos estados Verdadero y Falso según lo determinado por el VLM, se envían a un websocket y al servicio de monitoreo jetson.

Al configurar alertas, la regla de alerta debe formularse como una pregunta de sí/no. Como "¿Hay fuego?" o "¿Hay humo?". El cuerpo de la solicitud también debe tener el campo "id" que corresponde al ID del flujo que se devolvió cuando se agregó el flujo RTSP.

Por defecto, el servicio VLM soporta hasta 10 reglas de alerta. Esto puede incrementarse ajustando los archivos de configuración.

**Paso 1**: Reemplace `0.0.0.0` con la dirección IP de su reComputer, modifique `alerts` para incluir los objetos para los que necesita alertas, use el `id` devuelto en el paso anterior. Después de completar el comando, ingrese lo siguiente en la terminal:

``` bash
curl --location 'http://0.0.0.0:5010/api/v1/alerts' \
--header 'Content-Type: application/json' \
--data '{
    "alerts": ["is there a fire?", "is there smoke?"],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
}'
```

## Ver Resultado del Flujo RTSP

La salida de detección será transmitida a través de `rtsp://reComputer_ip:5011/out`. Proporcionamos un script de Python para visualizar la salida del flujo de video, Necesita instalar la librería opencv-python con anticipación y luego ejecutar el siguiente script de Python:

- **Paso 1:** Instale la librería opencv-python:

    ```bash
    pip install opencv-python
    ```

- **Paso 2:** Ejecute el siguiente script de Python:

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

## Apagar

Para detener el servicio de detección zero-shot, ejecute el siguiente comando en el mismo directorio donde se encuentra el archivo `compose.yaml`:

```bash
sudo docker compose down
```

## Más Detalles

Modelos de Lenguaje Visual (VLM) con Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/vlm.html

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
