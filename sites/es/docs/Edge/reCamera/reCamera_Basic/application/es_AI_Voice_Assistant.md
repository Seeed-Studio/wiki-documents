---
title: Interacción de voz con IA con reCamera
description: Este documento presenta una demostración de conversación de voz inteligente basada en reCamera usando STT/LLM/TTS, que muestra cómo reCamera desencadena la interacción por voz mediante el reconocimiento de poses y se conecta al gran modelo iFlytek Spark para implementar la canalización completa de diálogo STT→LLM→TTS.
keywords:
  - reCamera
  - AI Edge Vision
  - Interacción por voz
slug: /ai_voice_assitant_with_recamera
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 16
last_update:
  date: 06/10/2026
  author: Xuanjun Zhu
createdAt: '2026-06-10'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/ai_voice_assitant_with_recamera/
---

# Interacción de voz con IA con reCamera

## Introducción

Este proyecto demuestra una forma de interactuar con reCamera mediante lenguaje natural. Después de que el razonamiento visual desencadena la grabación de audio, reCamera envía la grabación al servidor, la procesa a través de la canalización completa de **STT (Speech-to-Text) → LLM (razonamiento con Large Language Model) → TTS (Text-to-Speech)**, y la voz sintetizada se devuelve a reCamera para su reproducción, lo que permite una conversación en lenguaje natural.

¿Alguna vez has querido una cámara que no solo pueda "ver", sino también "entender" y "hablar"? A través de la arquitectura de este proyecto, utilizando el micrófono y el altavoz de la reCamera, el dispositivo deja de ser solo una herramienta visual para convertirse en un asistente inteligente capaz de mantener conversaciones naturales. Esto incluye, entre otros, los siguientes escenarios:

- **Asistente inteligente de control de acceso**: Instala reCamera en la entrada, donde los visitantes pueden completar el registro de identidad, dejar mensajes u obtener indicaciones solo mediante la voz, sin necesidad de una pantalla interactiva adicional.

- **Compañero de inspección de seguridad en fábrica**: En entornos industriales, cuando las manos de los trabajadores están ocupadas, pueden activar la interacción por voz mediante gestos para preguntar al asistente de IA sobre el estado del equipo, manuales de operación o para informar anomalías.

- **Interacción asistida para accesibilidad**: Proporciona un punto de entrada de control por voz para usuarios con discapacidad visual o movilidad reducida, permitiendo la conversación en lenguaje natural con el dispositivo mediante simples gestos para obtener información del entorno o enviar comandos.

- **Guía educativa y de exposiciones**: En museos o salas de exposiciones, los visitantes pueden activar la interacción por voz mediante gestos para preguntar al asistente de IA sobre la información de las exhibiciones y recibir visitas guiadas personalizadas.

### Video de demostración

<div align="center">
  <video width="600" controls>
    <source src="https://raw.githubusercontent.com/hunter5299/Node-Red-project/main/reCamera_ai_voice_assitant/testVedioFinal.mp4" type="video/mp4" />
    Tu navegador no admite la reproducción de video.
  </video>
</div>

### Arquitectura del sistema

Todo el sistema se completa de forma colaborativa mediante dos partes: **lado reCamera** y **lado servidor PC**. La arquitectura es la siguiente:

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/arc.png" />
</div>


| Etapa | Ubicación de ejecución | Tecnología/Modelo utilizado | Descripción |
|------|----------|-----------------|------|
| Detección de pose | reCamera | YOLO11n Pose | Detecta 17 puntos clave del cuerpo humano |
| Juicio de pose | reCamera (Función de Node-RED) | Lógica personalizada | Compara las distancias de los puntos clave del hombro y el codo |
| Grabación/Reproducción | reCamera | arecord / aplay | PCM mono de 16 kHz |
| Reconocimiento de voz (STT) | Servidor PC | iFlytek Speech Dictation API | Audio a texto |
| Razonamiento con modelo grande (LLM) | Servidor PC | Spark Large Model Spark Lite | Genera respuestas inteligentes |
| Text-to-Speech (TTS) | Servidor PC | iFlytek Speech Synthesis API | Texto a audio |

## Preparación de hardware

Para ejecutar esta demostración, necesitas el siguiente hardware:

- **Un dispositivo reCamera** (compatible con todas las variantes de reCamera)
- **Un ordenador PC** (para ejecutar el servicio de procesamiento de voz, debe estar en la misma LAN que reCamera)

Puedes elegir **cualquier versión de reCamera** según tus necesidades de despliegue:

- reCamera 2002 Serie (Wi-Fi)
- reCamera Gimbal
- reCamera HQ PoE (Ethernet + PoE)

> **Nota:**
> La versión PoE no admite Wi-Fi y debe conectarse a la misma red local a través de un switch compatible con PoE.

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

## Configuración de la demostración

### Paso 1: Configurar reCamera

Primero, sigue la guía oficial de inicio rápido para completar la configuración básica de reCamera: [reCamera Getting Started](https://wiki.seeedstudio.com/es/recamera_getting_started/)

Después de completar la configuración inicial, asegúrate de que el dispositivo esté encendido y correctamente conectado a la red.
Luego, accede a la dirección 192.168.42.1 a través de un navegador para iniciar sesión en reCamera y entrar en el espacio de trabajo de **Node-RED**.

Si puedes acceder correctamente a la interfaz de flujo de trabajo de Node-RED como se muestra a continuación, la configuración está completa.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Paso 2: Importar el flujo de trabajo de Node-RED

Esta demostración proporciona un **archivo de flujo de trabajo preconfigurado** con todos los nodos y conexiones necesarios para el asistente de voz inteligente ya configurados.
Debes seguir los pasos a continuación para realizar algunas configuraciones y ejecutar correctamente este proyecto.

Crea una nueva aplicación, luego descarga el archivo de flujo de trabajo del Asistente de Voz con IA desde la [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/application/) e impórtalo directamente en reCamera. Para los tutoriales de SenseCraft AI, consulta el enlace [Access SenseCraft AI reCamera Dashboard](https://wiki.seeedstudio.com/es/recamera_getting_started/#access-recamera-preview-dashboard).

Si puedes acceder correctamente a la interfaz de flujo de trabajo de Node-RED como se muestra a continuación, el flujo de trabajo se ha importado correctamente.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/workflow.jpg" />
</div>

### Paso 3: Configurar los parámetros del flujo de trabajo

Después de importar el flujo de trabajo, debes modificar los parámetros en las secciones 3.1 a 3.5 a continuación según tu entorno de red real y la configuración del sistema.
#### 3.1 Nodo Model

El nodo Model en el flujo de trabajo incluye varios modelos preentrenados. Aquí puedes seleccionar y configurar varios parámetros del modelo. Esta demostración utiliza el modelo YOLO11n Pose para detectar poses humanas.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/modelset.png" />
</div>
<p align="center">Configuración del nodo Model</p>

#### 3.2 Nodo Model — Lógica de juicio de pose

El nodo Function contiene la lógica de juicio de pose que determina si se debe activar la interacción por voz comparando la **distancia de los puntos clave del hombro** con la **distancia de los puntos clave del codo**. Puedes ajustar los parámetros de Confidence e IOU en el nodo Model para reducir falsos positivos, o modificar el código lógico en el nodo Function que se muestra a continuación para implementar funciones adicionales.

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/modelresult.png" />
</div>
<p align="center">Configuración del nodo Function de juicio de pose</p>


#### 3.3 Nodo Exec — Control del LED y grabación

El flujo de trabajo utiliza **nodos Exec** para ejecutar comandos del sistema para controlar el LED y la grabación. Haz doble clic en el nodo correspondiente y modifica la contraseña root de reCamera según tu configuración real:
```
echo "your_Password" | sudo -S sh -c 'echo 1 > /sys/class/leds/blue/brightness'
```
- **Encender y apagar el LED azul** (indica que la grabación ha comenzado)

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/ledcontrol.png" />
</div>
<p align="center">Configuración de parámetros del nodo Turn On LED</p>


#### 3.4 Nodo HTTP Request — Dirección de envío de audio

Busca el nodo **HTTP Request** en el flujo de trabajo y modifica la URL a la dirección de tu servidor PC. Para ello debes completar primero el Paso 4 y ejecutar server.py, luego rellenar la dirección en la posición correspondiente que se muestra a continuación.

```
http://<PC_IP_ADDRESS>:5000/interact
```

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/httprequest.png" />
</div>
<p align="center">Configuración de parámetros del nodo HTTP Request</p>


#### 3.5 Nodo Exec — Reproducción de audio

El audio devuelto se reproduce mediante el comando **aplay**. Debes especificar los parámetros de audio correctos para que coincidan con el formato de salida del modelo TTS (16 kHz, mono, 16 bits):

```
aplay -D hw:1,0 -f S16_LE -c 1 -r 16000 /tmp/reply.wav
```

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/audioplay.png" />
</div>
<p align="center">Configuración de parámetros del nodo de reproducción de audio</p>


### Paso 4: Desplegar el servicio de procesamiento de voz en el PC

El servicio de procesamiento de voz se ejecuta en el PC y es responsable de completar toda la canalización de procesamiento de voz **STT → LLM → TTS**.

#### 4.1 Requisitos previos

Asegúrate de que el siguiente entorno esté instalado en tu PC:

- **Python 3.8+**
- Administrador de paquetes **pip**

#### 4.2 Obtén el código e instala las dependencias

Obtén el código Python del lado del servidor para el Asistente de Voz con IA desde el [repositorio](https://github.com/hunter5299/Node-Red-project/tree/main/reCamera_ai_voice_assitant). Después de descargar el código del proyecto a tu PC, entra en el directorio del servicio e instala las dependencias de Python:

```bash
cd server/
pip install -r requirements.txt
```

Las dependencias principales incluyen:

| Package | Purpose |
|------|------|
| Flask | Framework de servicio HTTP |
| websocket-client | Comunicación con la API de iFlytek |
| certifi | Verificación de certificados SSL |
| pydub | Procesamiento de audio |

#### 4.3 Configurar claves de API

Antes de ejecutar el servicio, necesitas configurar las claves de API de **iFlytek**. Ve a la [Plataforma Abierta de iFlytek](https://www.xfyun.cn/) para registrar una cuenta y activar los siguientes tres servicios:

| Service | Purpose | Activation Link |
|------|------|----------|
| Speech Dictation (STT) | Convertir el habla del usuario en texto | [iFlytek Speech Dictation](https://www.xfyun.cn/services/voicedictation) |
| Spark Large Model (LLM) | Generar respuestas inteligentes basadas en texto | [iFlytek Spark Large Model](https://www.xfyun.cn/services/SparkLLM) |
| Speech Synthesis (TTS) | Convertir el texto de respuesta en voz | [iFlytek Speech Synthesis](https://www.xfyun.cn/services/online_tts) |

Después de la activación, rellena tus claves de API en `server.py`:

```python
# 1. STT Speech Recognition Configuration
STT_APPID = "your_APPID"
STT_APISecret = "your_APISecret"
STT_APIKey = "your_APIKey"

# 2. TTS Speech Synthesis Configuration
TTS_APPID = "your_APPID"
TTS_APISecret = "your_APISecret"
TTS_APIKey = "your_APIKey"

# 3. LLM Spark Large Model Configuration (Spark Lite)
LLM_APPID = "your_APPID"
LLM_APISecret = "your_APISecret"
LLM_APIKey = "your_APIKey"
```
Esta demo utiliza el modelo **Spark Lite** (gratuito). También puedes cambiar a una versión de modelo más avanzada según sea necesario, o usar modelos grandes de otros proveedores.

#### 4.4 Iniciar el servicio

```bash
python server.py
```
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/serverlog.png" />
</div>
<p align="center">Registro de inicio del servidor</p>
Después de que el servicio se inicie, esperará solicitudes de audio desde la reCamera. Asegúrate de que el firewall del PC permita conexiones entrantes en el puerto 5000 y que el PC y la reCamera estén en la misma LAN.


### Paso 5: Ejecutar la demo

1. Asegúrate de que `server.py` en el PC esté iniciado y en ejecución
2. Haz clic en **Deploy** en Node-RED para desplegar el flujo de trabajo
3. Ponte frente a la reCamera y haz un gesto de **brazos cruzados** (la distancia entre los hombros debe ser menor que la distancia entre los codos)
4. El **LED azul** de la reCamera se enciende, indicando que la grabación ha comenzado
5. Di tu pregunta al micrófono
6. Después de que el LED azul se apague, la reCamera envía el audio al servidor y reproduce la respuesta después de recibirla.
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/test.jpg" />
</div>
<p align="center">Activación del flujo de conversación por voz</p>

```log
Received reCamera audio,length:160044 bytes
User said:Hi,who are you?
LLM is thinking……
LLM reply:Hi,I′m the voice assistant on your smart camera reCamera.I'm here to help you with any questions or concerns you may have.
Generating speech……
Speech delivered! Waiting for next interaction.
192.168.4.53--[11/Jun/2026 16:38:14]"POST /interact HTTP/1.1" 200 -
```
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/AI_Voice_Assistant/testlog.png" />
</div>
<p align="center">Registro del servidor</p>

## Detalles del flujo de trabajo

La lógica de alto nivel de todo el flujo de trabajo es la siguiente:

1. **Entrada de video y detección de pose**
   La cámara captura continuamente fotogramas de video, y el modelo de estimación de pose YOLO11 detecta los puntos clave del cuerpo humano (17 puntos clave en total, incluidos hombros, codos, muñecas, etc.).

2. **Juicio de activación por gesto**
   El nodo Function calcula la distancia entre los puntos clave de los hombros izquierdo y derecho y la distancia entre los puntos clave de los codos izquierdo y derecho. Cuando **distancia entre hombros < distancia entre codos**, se determina como un gesto de activación (es decir, pose de brazos cruzados).

3. **Proceso de grabación**
   Después de la activación: encender el LED azul → grabar audio → apagar el LED azul.

4. **Procesamiento de audio y generación de diálogo**
   Después de que la grabación se complete, los datos de audio se envían por POST al servicio Flask del PC mediante una solicitud HTTP, ejecutando:
   - **STT**: la API de Speech Dictation de iFlytek convierte el audio en texto
   - **LLM**: el Spark Large Model (Spark Lite) genera respuestas inteligentes basadas en la entrada del usuario
   - **TTS**: la API de Speech Synthesis de iFlytek convierte el texto de respuesta en audio

5. **Reproducción de audio**
   El PC devuelve audio WAV, y la reCamera reproduce la voz de respuesta mediante el comando `aplay`.

## Notas

- El intervalo de grabación actual está configurado en **10 segundos**. Si el tiempo de procesamiento STT → LLM → TTS excede este intervalo, múltiples activaciones pueden causar congestión en la canalización. Se recomienda controlar el número de palabras de la respuesta del LLM (el mensaje del sistema actual lo limita a 50 palabras o menos) para reducir el tiempo de procesamiento.
- Si la congestión hace que la CPU deje de responder, puedes ajustar el atributo Confidence en el nodo Model para reducir falsos positivos y controlar la frecuencia de activación.
- Al reproducir el audio devuelto usando `aplay`, especifica los parámetros correctos (`-f S16_LE -c 1 -r 16000`), de lo contrario la reproducción puede no funcionar correctamente. Consulta el audio generado por TTS para conocer los parámetros específicos.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Si necesitas orientación sobre objetivos de personalización específicos o quieres ampliar aún más el flujo de trabajo, no dudes en contactarnos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
