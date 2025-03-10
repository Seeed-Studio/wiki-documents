---
description: Esta wiki proporciona un tutorial sobre cómo ejecutar Zero-Shot Detection en una reComputer Jetson.
title: Cómo ejecutar la detección de disparo cero en una reComputer
keywords:
- reComputer
- Detección de disparo cero
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/run_zero_shot_detection_on_recomputer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---

# Cómo ejecutar la detección Zero-Shot en una reComputer con Jetson Platform Services

## Introducción
Los transformadores de visión de IA generativa como CLIP han hecho posible construir modelos de detección de disparo cero capaces de detectar objetos con vocabulario abierto. Es decir, el modelo no está limitado por un conjunto de clases predefinidas para detectar. Los objetos a detectar son configurados en tiempo de ejecución por el usuario. El servicio de IA de detección de disparo cero permite una implementación rápida de IA generativa con Jetson Services para la detección de vocabulario abierto en la entrada de transmisión de video en vivo. El servicio de IA de detección de disparo cero expone los puntos finales de la API REST para controlar la entrada de flujo y los objetos a detectar.

Esta wiki proporciona un tutorial sobre cómo ejecutar la detección Zero-Shot en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" />
</div>

## Requerimientos
Antes de continuar con el proceso de configuración, asegúrate de que tu sistema cumpla con los siguientes requisitos previos:

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
- Versión del controlador: `535.113.01`, Jetpack `6.0` y CUDA Versión: `12.2`.
- Asegúrate de que JetPack y los paquetes de servicios Jetson relacionados estén instalados.
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```
- Se pueden transmitir cámaras IP o vídeos locales a través de RTSP. (Recomendamos utilizar nuestro [tutorial de NVStreamer](/getting_started_with_nvstreamer) proporcionado para la transmisión RTSP).

## Primeros pasos

**Paso 1**: Descarga el paquete de la aplicación **`zero_shot_detection-1.1.0.tar.gz`** de NGC en tu Jetson usando este enlace: [Flujo de trabajo y recursos de referencia de NGC](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources). Deberás ingresar tus credenciales de NGC. En la página, usa una de las opciones disponibles en el menú **`Descargar`** (esquina superior derecha):
```bash
tar -xvf zero_shot_detection-1.1.0.tar.gz
cd ~/zero_shot_detection/example_1
```
**Paso 2**: El servicio de IA de detección de disparo cero utilizará los servicios `jetson-ingress` y `jetson-redis`. Debes configurar el servicio jetson-ingress para exponer la API REST de detección de disparo cero. Copia la configuración predeterminada proporcionada en el directorio de configuración del servicio correspondiente.
```bash
sudo cp config/zero_shot_detection-nginx.conf /opt/nvidia/jetson/services/ingress/config
```
**Paso 3**: Ejecuta los servicios básicos.
```bash
sudo systemctl start jetson-monitoring
sudo systemctl start jetson-sys-monitoring
sudo systemctl start jetson-gpu-monitoring
```
**Paso 4**: Verifica que todas las líneas en el archivo de configuración de ingreso a la plataforma (utilizado para los servicios de monitoreo) estén descomentadas en el siguiente archivo:
```bash
/opt/nvidia/jetson/services/ingress/config/platform-nginx.conf
```
**Paso 5**: Inicia API Gateway para acceder al panel de monitoreo.
```bash
sudo systemctl restart jetson-ingress
sudo systemctl restart jetson-redis
sudo systemctl restart jetson-vst
```
**Paso 6**: Inicia el servicio de IA de detección de disparo cero.
```bash
sudo docker compose up -d
```
Para comprobar si se han iniciado todos los contenedores necesarios, puedes ejecutar el siguiente comando:
```bash
sudo docker ps
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig2.png" />
</div>

## Agrega la entrada de flujo RTSP
Primero puedes agregar una secuencia RTSP para que el modelo de detección de disparo cero la use con el siguiente comando curl. Se recomienda utilizar el [tutorial de NVStreamer](/getting_started_with_nvstreamer) para la transmisión.
- **Paso 1**: Reemplaza `0.0.0.0` con la IP de tu Jetson y el enlace `liveStreamUrl` con tu enlace RTSP, luego ingresa el siguiente comando en la terminal:
    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream' \
    --header 'Content-Type: application/json' \
    --data '{
    "liveStreamUrl": "rtsp://0.0.0.0:31554/nvstream/root/store/nvstreamer_videos/car.mp4"
    }'
    ```
Nota: Además del comando curl, también puedes probar directamente la API REST a través de la página de documentación de la API, que está disponible en `http://0.0.0.0:5010/docs` cuando se inicia el servicio de detección de disparo cero.

- **Paso 2**: Después de ejecutar el primer paso, se devolverá una identificación. Debes registrar esta identificación para usarla en los pasos siguientes.
    ```bash
    {"id": "a782e200-eb48-4d17-a1b9-5ac0696217f7"}
    ```
    También puedes obtener el ID utilizando el siguiente comando:

    ```bash
    curl --location 'http://0.0.0.0:5010/api/v1/live-stream'
    ```
    Para eliminar una secuencia por su ID, puedes utilizar el siguiente comando:
    ```bash
    curl --location --request DELETE 'http://0.0.0.0:5010/api/v1/live-stream/{id}'
    ```
## Agregar clases de detección
El modelo de detección de disparo cero es capaz de actualizar sus clases de detección en tiempo de ejecución. Este punto final acepta una lista de objetos para detectar y un valor de umbral asociado. El umbral es la sensibilidad de la detección. Los valores más altos reducirán los falsos positivos. Los valores más bajos aumentarán los falsos positivos. Actualmente, este servicio solo admite una transmisión, pero en el futuro esta API permitirá la compatibilidad con múltiples transmisiones.
- **Paso 1**: Reemplaza `0.0.0.0` con la dirección IP de tu reComputer, modifica `objects` para incluir los objetos que necesitas detectar (hasta diez), establece `umbrales` para cada categoría y usa el `id` devuelto en el paso anterior. Después de completar el comando, ingresa lo siguiente en la terminal:
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
## Visualizar el resultado de la transmisión RTSP
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
Detección de disparo cero con los servicios de la plataforma Jetson: https://docs.nvidia.com/jetson/jps/inference-services/zero_shot_detection.html

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