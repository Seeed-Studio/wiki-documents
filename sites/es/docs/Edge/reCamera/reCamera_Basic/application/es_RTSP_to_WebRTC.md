---
title: Transmisión de vídeo en tiempo real de RTSP a WebRTC con reCamera
description: Este documento presenta cómo usar reCamera para transmitir vídeo a un PC mediante el protocolo RTSP y convertir el flujo RTSP a formato WebRTC en el lado del PC, habilitando la reproducción de vídeo en tiempo real y baja latencia en un navegador.
keywords:
  - reCamera
  - RTSP
  - WebRTC
slug: /rtsp_to_webrtc_with_recamera
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif
sidebar_position: 15
last_update:
  date: 06/10/2026
  author: Xuanjun Zhu
createdAt: '2026-06-10'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/es/rtsp_to_webrtc_with_recamera/
---

# Transmisión de vídeo en tiempo real de RTSP a WebRTC con reCamera

## Introducción

Cuando quieras **integrar el flujo de vídeo de reCamera en tu propia aplicación Web**, o **ver de forma remota** la señal de la cámara con baja latencia a través de un navegador, puedes consultar esta demo.
Este proyecto transmite el vídeo de reCamera mediante el **protocolo RTSP**, envía los resultados de inferencia al PC a través del nodo **mqtt out**, luego fusiona en el PC el flujo RTSP con los resultados de inferencia y lo convierte a formato **WebRTC**, permitiendo que cualquier navegador reproduzca en tiempo real el flujo de vídeo con inferencia sin complementos. Proporciona una forma de **“liberar” el flujo de vídeo de reCamera**: una vez que el flujo de vídeo puede salir por RTSP, puedes fácilmente:

- **Integrarlo en tu propia aplicación Web o plataforma de gestión**: Incrusta la señal de vídeo en vivo en paneles existentes, sistemas de monitorización o plataformas IoT.

- **Agregación de vídeo de múltiples dispositivos**: Visualiza varias señales de reCamera simultáneamente en la misma página web para construir un muro de videovigilancia multicanal.

- **Acceso remoto y cruce de redes**: Gracias a la capacidad de cruce de NAT de WebRTC, puedes ver la señal en vivo de reCamera con baja latencia incluso en diferentes entornos de red.

- **Proporcionar un canal de transporte para la visualización de resultados de inferencia de IA**: Después de que reCamera realice inferencia de IA en el borde, saca los resultados de inferencia junto con el vídeo, y el PC puede mostrar en tiempo real en el navegador los resultados de análisis de IA, adecuado para construir aplicaciones de inspección remota, seguridad inteligente y otras.

Esta demo muestra un enfoque para **transformar reCamera de un dispositivo visual independiente en una fuente de vídeo que cualquier sistema Web puede integrar**. Esperamos que este proyecto te inspire a explorar más posibilidades de combinar reCamera con tecnologías Web.
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif" />
</div>
### Arquitectura del sistema

Todo el sistema se completa de forma colaborativa por dos partes: **lado reCamera** y **lado servidor PC**. La arquitectura es la siguiente:

| Etapa | Ubicación de ejecución | Tecnología/Protocolo utilizado | Descripción |
|------|----------|-----------------|------|
| Captura y codificación de vídeo | reCamera | Cámara + Codificación H.264 | Captura vídeo y lo codifica |
| Inferencia de IA | reCamera | Modelo YOLO11n | Realiza inferencia de detección de objetos de IA sobre los fotogramas de vídeo |
| Transmisión RTSP | reCamera | Protocolo RTSP (Puerto 554) | Transmite vídeo mediante el protocolo RTSP a la red |
| Transmisión de resultados de inferencia por MQTT | reCamera → Servidor PC | Protocolo MQTT (Puerto 1883) | Transmite resultados de inferencia (cajas delimitadoras, etiquetas) al PC mediante MQTT |
| Recepción y decodificación de vídeo | Servidor PC | OpenCV + FFmpeg | Recibe el flujo RTSP y lo decodifica a fotogramas en bruto |
| Fusión de resultados de inferencia y vídeo | Servidor PC | detection_store + OpenCV | Superpone cajas de detección de IA y etiquetas sobre los fotogramas de vídeo |
| Codificación y transmisión WebRTC | Servidor PC | aiortc | Codifica los fotogramas de vídeo fusionados a formato WebRTC y los transmite |
| Reproducción en tiempo real | Navegador en PC | WebRTC | Reproduce en el navegador el vídeo con resultados de inferencia y baja latencia |

## Preparación de hardware

Para ejecutar esta demo, necesitas el siguiente hardware:

- **Un dispositivo reCamera** (compatible con todas las variantes de reCamera)
- **Un ordenador PC** (para ejecutar el servicio de puente WebRTC, debe estar en la misma LAN que reCamera)

Puedes elegir **cualquier versión de reCamera** según tus necesidades de despliegue:

- reCamera 2002 Serie (Wi-Fi)
- reCamera Gimbal
- reCamera HQ PoE (Ethernet + PoE)

> **Nota:**
> La versión PoE no soporta Wi-Fi y debe conectarse a la misma red local a través de un switch con PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Configuración de la demo

### Paso 1: Configurar reCamera

Primero, sigue la guía oficial de primeros pasos para completar la configuración básica de reCamera: [reCamera Getting Started](https://wiki.seeedstudio.com/es/recamera_getting_started/)

Después de completar la configuración inicial, asegúrate de que el dispositivo esté encendido y correctamente conectado a la red.
Luego, accede a la dirección 192.168.42.1 a través de un navegador para iniciar sesión en reCamera y entrar en el espacio de trabajo de **Node-RED**.

Si puedes acceder correctamente a la interfaz de flujo de trabajo de Node-RED como se muestra a continuación, la configuración está completa.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Paso 2: Configurar la transmisión RTSP

reCamera tiene incorporada la funcionalidad de transmisión RTSP que puede configurarse fácilmente mediante el flujo de trabajo de Node-RED. Solo necesitas desplegar dos nodos en el flujo de trabajo. Para los tutoriales de SenseCraft AI, consulta el enlace [Access SenseCraft AI reCamera Dashboard](https://wiki.seeedstudio.com/es/recamera_getting_started/#access-recamera-preview-dashboard).


#### 2.1 Importar y configurar el nodo Camera

Arrastra el **Camera Node** desde el lado izquierdo al espacio de trabajo y haz doble clic para entrar en la interfaz de configuración. Puedes establecer parámetros como resolución y tasa de fotogramas según sea necesario. Importa y configura el nodo de cámara de acuerdo con el flujo de trabajo que se muestra a continuación.
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/nodeimport1sum1.png" />
</div>
<p align="center">Configuración de parámetros de la cámara</p>

#### 2.2 Importar y configurar el nodo Stream

Arrastra el **Stream Node** desde el lado izquierdo al espacio de trabajo, selecciona el protocolo RTSP y configura la dirección y el puerto del flujo. La dirección de flujo RTSP predeterminada de reCamera es:

```
rtsp://admin:admin@192.168.42.1:554/live
```

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/streamset.png" />
</div>
<p align="center">Configuración de parámetros de transmisión RTSP</p>

#### 2.3 Importar el nodo Model

Arrastra el **Model Node** desde el lado izquierdo al espacio de trabajo, haz clic en Device y selecciona el modelo YOLO11n Detection.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/modelimport.png" />
</div>
#### 2.4 Importar el nodo MQTT Out

Arrastra el **MQTT Out Node** desde el lado izquierdo al espacio de trabajo y, siguiendo el diagrama de abajo, configura la dirección del broker MQTT y el tema para la comunicación con el servidor.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/mqttimportsum.png" />
</div>



Una vez completada la configuración, haz clic en **Deploy** en la esquina superior derecha para desplegar el flujo de trabajo, y reCamera comenzará a transmitir mediante el protocolo RTSP.

### Paso 3: Desplegar el servicio de conversión WebRTC en el PC

El servicio de puente WebRTC se ejecuta en el PC y es responsable de recibir el flujo RTSP y los mensajes MQTT, fusionar los resultados de inferencia con el flujo de vídeo y convertirlo a formato WebRTC para la reproducción en tiempo real en el navegador.

#### 3.1 Requisitos previos

Asegúrate de tener instalado en tu PC el siguiente entorno:

- **Python 3.8+**
- Gestor de paquetes **pip**

> **Nota:** La instalación de `aiortc` en Windows puede requerir que primero se instalen las Microsoft C++ Build Tools. Puedes descargarlas e instalarlas desde [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/).

#### 3.2 Obtener el código e instalar dependencias

Obtén el código del proyecto Python de RTSP a WebRTC desde el [repository](https://github.com/hunter5299/Node-Red-project/tree/main/rtsp_to_webrtc). Después de descargar el código del proyecto a tu PC, entra en el directorio del proyecto e instala las dependencias de Python:

```bash
cd rtsp_to_webrtc
pip install -r requirements.txt
```

#### 3.3 Descripción de los archivos del proyecto

El proyecto contiene los siguientes archivos principales:

| Archivo | Descripción |
|------|------|
| `server.py` | Servidor de señalización WebRTC, inicia el MQTT Broker embebido, gestiona las solicitudes de conexión del navegador y establece sesiones WebRTC |
| `mqtt_broker.py` | Broker MQTT 3.1.1 embebido (implementación pura con asyncio) y cliente suscriptor, recibe los resultados de inferencia YOLO enviados desde el Node-RED de reCamera |
| `detection_store.py` | Módulo de almacenamiento de resultados de inferencia, almacena en caché los datos más recientes de cajas de detección y etiquetas para el renderizado superpuesto en los fotogramas de vídeo |
| `video_sources.py` | Capa de abstracción de protocolo de vídeo |
| `index.html` | Página frontal del reproductor, proporciona selección de protocolo y funcionalidad de reproducción de vídeo WebRTC |
| `requirements.txt` | Lista de dependencias de Python |

#### 3.4 Iniciar el servicio

Inicia el servicio con la configuración predeterminada:

```bash
python server.py
```

Después de que el servicio se inicie, verás el siguiente registro de salida:

```
INFO:webrtc-server:Starting server on http://0.0.0.0:8080
INFO:webrtc-server:Default source: rtsp://admin:admin@192.168.42.1:554/live
INFO:webrtc-server:Supported protocols: rtsp, onvif, gb28181, rtmp, hls
INFO:webrtc-server:MQTT Broker: 0.0.0.0:1883, topic: yolo11n_result
INFO:webrtc-server:Open http://localhost:8080 in your browser
```

También puedes personalizar la configuración mediante argumentos de línea de comandos:

```bash
# Specify the default video source address
python server.py --source rtsp://admin:admin@192.168.42.1:554/live

# Specify the service port
python server.py --port 9090

# Specify both address and port
python server.py --source rtsp://admin:admin@192.168.42.1:554/live --port 8080
```

**Descripción de los argumentos de línea de comandos:**

| Argumento | Valor predeterminado | Descripción |
|------|--------|------|
| `--host` | `0.0.0.0` | Dirección de enlace del servidor |
| `--port` | `8080` | Puerto de escucha del servidor |
| `--source` | `rtsp://admin:admin@192.168.42.1:554/live` | Dirección de fuente de video predeterminada |

> **Nota:** Asegúrate de que el firewall del PC permita conexiones entrantes en el puerto 8080 (o el puerto que especifiques) y de que el PC y la reCamera estén en la misma LAN.

### Paso 4: Ejecutar la demostración

1. Asegúrate de que la reCamera se haya configurado para la transmisión RTSP y que el flujo de trabajo se haya desplegado
2. Asegúrate de que `server.py` en el PC esté iniciado y en ejecución
3. Accede a `http://localhost:8080` en el navegador del PC
4. Selecciona el protocolo (RTSP) en la página e introduce la dirección del flujo RTSP de la reCamera (rellenada de forma predeterminada)
5. Haz clic en el botón **"Start Playing"**

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.png" />
</div>
<p align="center">Reproducción en tiempo real del video de la reCamera en el navegador</p>

Después de una conexión exitosa, la página mostrará la siguiente información:

- **Flujo de video**: Visualización en tiempo real del video de la reCamera
- **Estado de la conexión**: Indicador de estado de conexión en verde en la esquina superior izquierda de la página
- **Información del flujo**: Muestra la dirección del flujo de video, el estado de la conexión, el estado de la conexión ICE y la resolución de video
- **Registro de operaciones**: Registros de conexión detallados mostrados en la parte inferior de la página

## Cómo funciona

El flujo de trabajo de alto nivel de todo el sistema es el siguiente:

1. **Captura de video e inferencia de IA**
   La reCamera captura continuamente video a través de la cámara, utiliza el modelo YOLO11n para la inferencia de detección de objetos y obtiene resultados de cuadros delimitadores y etiquetas.

2. **Transmisión RTSP y envío de resultados por MQTT**
   La reCamera transmite video codificado mediante el protocolo RTSP a la red, mientras que simultáneamente publica los resultados de inferencia mediante el protocolo MQTT (tema: `yolo11n_result`) al Broker MQTT integrado en el PC.

3. **Recepción de video y fusión de resultados de inferencia**
   El servicio del PC utiliza un hilo en segundo plano de OpenCV + FFmpeg para leer continuamente los fotogramas de video más recientes del flujo RTSP, recupera los resultados de inferencia más recientes de detection_store y superpone los cuadros delimitadores y las etiquetas sobre los fotogramas de video.

4. **Codificación y transmisión WebRTC**
   Cuando el navegador inicia una solicitud de conexión, el PC codifica los fotogramas de video fusionados en formato WebRTC mediante la biblioteca aiortc, estableciendo una PeerConnection WebRTC para la transmisión.

5. **Reproducción en tiempo real en el navegador**
   El navegador recibe el flujo de video a través de WebRTC y reproduce en tiempo real el video con anotaciones de inferencia de IA sin instalar ningún complemento.

## Notas

- El flujo RTSP de la reCamera admite solo **1-2 conexiones simultáneas** de forma predeterminada. Si otros programas (como VLC) ya han ocupado la conexión RTSP, es posible que el servicio WebRTC no pueda recibir el flujo de video. Cierra otros programas conectados al flujo RTSP antes de usarlo.
- Si encuentras errores de instalación de `aiortc`, asegúrate de que **Microsoft C++ Build Tools** (Windows) o las herramientas `gcc`/`make` (Linux) estén instaladas.
- Si aparecen errores `non-existing PPS` en el registro del servidor, esto se debe a que aún no se ha recibido un fotograma clave, lo cual es normal. Se recuperará automáticamente después de que llegue el fotograma clave (aproximadamente 1 segundo).
- Para cambiar el puerto del servicio, utiliza `python server.py --port <port_number>` para especificar un puerto diferente.
- Si experimentas una alta latencia de video, verifica si el ancho de banda de la red es suficiente y asegúrate de que la conexión de red entre el PC y la reCamera sea estable.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Si necesitas orientación sobre objetivos de personalización específicos o deseas ampliar aún más el flujo de trabajo, no dudes en ponerte en contacto con nosotros. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
