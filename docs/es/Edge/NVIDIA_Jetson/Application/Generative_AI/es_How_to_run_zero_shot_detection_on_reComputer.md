---
description: Este wiki proporciona un tutorial sobre cómo ejecutar Detección Zero-Shot en reComputer Jetson.
title: Cómo Ejecutar Detección Zero-Shot en reComputer
keywords:
- reComputer
- Zero-Shot Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/run_zero_shot_detection_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# Cómo Ejecutar Detección Zero-Shot en reComputer con Jetson Platform Services

## Introducción
Los transformadores de visión de IA generativa como CLIP han hecho posible construir modelos de detección zero shot capaces de detección de objetos de vocabulario abierto. Esto significa que el modelo no está limitado por un conjunto de clases predefinidas para detectar. Los objetos a detectar son configurados en tiempo de ejecución por el usuario. El servicio de IA de Detección Zero Shot permite el despliegue rápido de IA generativa con Jetson Services para detección de vocabulario abierto en entrada de transmisión de video en vivo. El servicio de IA de Detección Zero Shot expone endpoints de API REST para controlar la entrada de transmisión y los objetos a detectar.

Este wiki proporciona un tutorial sobre cómo ejecutar Detección Zero-Shot en [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
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
- Versión del Driver: `535.113.01`, Jetpack `6.0` y Versión de CUDA: `12.2`.
- Asegúrese de que JetPack y los paquetes relacionados de servicios Jetson estén instalados.
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```
- Las cámaras IP o videos locales pueden ser transmitidos vía RTSP. (Recomendamos usar nuestro tutorial proporcionado de [NVStreamer](/es/getting_started_with_nvstreamer) para transmisión RTSP.)

## Comenzando

**Paso 1**: Descargue el paquete de aplicación **`zero_shot_detection-1.1.0.tar.gz`** desde NGC a su Jetson usando este enlace: [NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Necesitará ingresar sus credenciales de NGC. En la página, use una de las opciones disponibles en el menú **`Download`** (esquina superior derecha):
```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```
**Paso 2**: El servicio de IA de detección zero-shot utilizará los servicios `jetson-ingress` y `jetson-redis`. Necesita configurar el servicio jetson-ingress para exponer la API REST de detección zero-shot. Copie la configuración predeterminada proporcionada al directorio de configuración del servicio correspondiente.
```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```
**Paso 3**: Ejecute los servicios básicos.
```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```
**Paso 4**: Verifique que todas las líneas en el archivo de configuración de ingress de la plataforma (usado para servicios de monitoreo) estén descomentadas en el siguiente archivo:
```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```
**Paso 5**: Inicie el API Gateway para acceder al panel de monitoreo.
```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```
**Paso 6**: Inicie el servicio de IA de detección zero-shot.
```bash
sudo docker compose up -d
```
Para verificar si todos los contenedores requeridos han iniciado, puede ejecutar el siguiente comando:
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## Agregar la entrada de transmisión RTSP
Primero puede agregar una transmisión RTSP para que el modelo de detección zero-shot la use con el siguiente comando curl. Se recomienda usar el [tutorial de NVStreamer](/es/getting_started_with_nvstreamer) para transmisión.
- **Paso 1**: Reemplace `0.0.0.0` con la IP de su Jetson y el enlace `liveStreamUrl` con su enlace RTSP, luego ingrese el siguiente comando en la terminal:
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
Nota: Además del comando curl, también puede probar directamente la API REST a través de la página de documentación de la API, que está disponible en `http://0.0.0.0:5010/docs` cuando el servicio de detección zero-shot está iniciado. 

- **Paso 2**: Después de ejecutar el primer paso, se devolverá un ID. Necesita registrar este ID para usarlo en pasos posteriores.
    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```
    También puede obtener el ID más tarde usando el siguiente comando:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```
    Para eliminar una transmisión por su ID, puede usar el siguiente comando:
    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```
## Agregar Clases de Detección
El modelo de detección zero shot es capaz de actualizar sus clases de detección en tiempo de ejecución. Este endpoint acepta una lista de objetos a detectar y un valor de umbral asociado. El umbral es la sensibilidad de la detección. Valores más altos reducirán los falsos positivos. Valores más bajos aumentarán los falsos positivos. Actualmente este servicio solo soporta 1 transmisión pero en el futuro esta API permitirá soporte multi-transmisión.
- **Paso 1**: Reemplace `0.0.0.0` con la dirección IP de su reComputer, modifique `objects` para incluir los objetos que necesita detectar (hasta diez), establezca `thresholds` para cada categoría, y use el `id` devuelto en el paso anterior. Después de completar el comando, ingrese lo siguiente en la terminal:
    ```bash
    curl -X 'POST' \
    'http://192.168.49.101:5010/api/v1/detection/classes' \
    -H 'accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
    "objects": [
        "a car", "a people"
    ],
    "thresholds": [
        0.2, 0.04
    ],
    "id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"
    }'
    ```
## Ver Resultado de Transmisión RTSP
La salida de detección será transmitida a través de `rtsp://reComputer_ip:5011/out`. Proporcionamos un script de Python para visualizar la salida de transmisión de video. Necesita instalar la biblioteca opencv-python con anticipación y luego ejecutar el siguiente script de Python:
- **Paso 1:** Instale la biblioteca opencv-python:
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
Zero Shot Detection with Jetson Platform Services: https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

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