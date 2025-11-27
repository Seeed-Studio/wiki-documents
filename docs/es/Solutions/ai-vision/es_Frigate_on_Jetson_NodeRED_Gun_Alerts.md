---
description: Sistema de detección de armas con IA en el borde basado en Frigate-on-Jetson y Node-RED, compatible con plataformas Jetson y reComputer R2000 (Hailo).
title: Solución de Detección de Armas con IA para Alertas en Tiempo Real en el Borde
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/scene_3.webp
slug: /es/solutions/frigate-on-jetson-nodered-gun-alerts
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Spencer Y
---

:::note[Aviso]
Este proyecto se proporciona **únicamente con fines educativos y de demostración**.  
Si tienes la intención de implementarlo en un entorno real, por favor **asegúrate de cumplir con las regulaciones locales** y obtener **cualquier autorización requerida** antes de hacerlo.
:::

## Descripción General

La Solución de Detección de Armas Frigate + Node-RED es una pila de análisis de video con IA en el borde que detecta armas de fuego en transmisiones de cámara en vivo y orquesta alertas, revisión e integraciones. Construida para implementaciones que preservan la privacidad y de baja latencia en **AI Boxes**, la serie NVIDIA **Jetson** y **reComputer R2000**, combina un motor de detección optimizado (Frigate) con una capa de automatización visual (Node‑RED) y revisión asistida por LLM opcional.

<div align="center">
  <img class='img-responsive' width={680} src="https://www.seeed.cc/wp-content/uploads/2025/09/archi_2-1.png" alt="solution diagram"/>
</div>

Ofrece una experiencia completa de AI NVR[^nvr] que:

- Detecta armas de fuego desde transmisiones RTSP/HTTP en vivo en tiempo real.  
- Automatiza alertas de eventos, registro y notificaciones.  
- Opera localmente para garantizar privacidad, baja latencia y confiabilidad.  

[^nvr]: Los AI NVR aprovechan modelos avanzados de aprendizaje automático para proporcionar **información en tiempo real y capacidades de automatización**, mientras que los NVR tradicionales se enfocan principalmente en grabar y almacenar material de video.
`

Sigue esta guía para implementar la solución si tu dispositivo no es del paquete de Seeed o te gustaría adaptarlo a tu propia configuración.

<table class="table-center">
  <tr>
      <th>Gestión de Seguridad del Campus</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://www.seeed.cc/wp-content/uploads/2025/08/scene_3.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/campus-safety-management" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Paquete de Solución 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Características

Los NVR tradicionales dependen del monitoreo humano, que es lento, inconsistente y difícil de escalar. Esta solución aborda estos desafíos enfocándose en resultados medibles que entregan valor inmediato.
<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Tiempo de Respuesta Más Rápido</h3>
                <p>Logra conciencia situacional instantánea con alertas automatizadas y paneles en tiempo real, evitando las demoras del monitoreo manual.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Menos Falsos Positivos</h3>
                <p>Utiliza verificación asistida por LLM opcional para revisar inteligentemente las alertas, reduciendo significativamente las falsas alarmas y enfocando la atención del operador.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Soberanía de Datos y Privacidad</h3>
                <p>Toda la inferencia y procesamiento de datos ocurre en las instalaciones sin dependencia de la nube, garantizando completa privacidad y control de datos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Soporte Escalable Multi-Stream</h3>
                <p>Aprovecha la potente decodificación de hardware en plataformas Jetson y Hailo para monitorear múltiples transmisiones de cámara simultáneamente sin pérdida de rendimiento.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitectura del Sistema

La solución está compuesta por varios módulos clave que trabajan en conjunto:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png" alt="system architecture"/>
</div>

- **Frigate** procesa video en vivo y publica eventos de detección vía MQTT.
- **Node-RED** se suscribe a estos eventos, orquesta flujos de trabajo de alertas y actualiza el panel.
- **Panel en Tiempo Real** proporciona monitoreo visual, revisión de eventos y configuración del sistema.
- **Webhooks** permiten integración con cualquier sistema de terceros para notificaciones y exportación de datos.

## Guía de Implementación

### Prerrequisitos

- **AI Boxes/Hardware de Borde:** reComputer J3011/J4012 (Jetson Nano/Xavier/Orin Series).
- **Cámaras de Red:** Transmisiones RTSP/HTTP accesibles en la misma red.
- Familiaridad básica con Docker, Node-RED y configuración de Frigate.

<!-- 
This is a ready-to-use AI NVR solution that unifies hardware and software.

- Pre-installed **Frigate** detection engine with a baseline gun model.  
- Built-in **Node-RED Dashboard** for alert visualization and event management.  
- Web-based access — configure RTSP streams and start monitoring immediately.   -->

En esta página, usaremos el **reComputer J4012 (Jetson Orin™ NX 16GB)** como plataforma de ejemplo. Sin embargo, los pasos son similares para otro hardware compatible.

### Paso 1: Instalación de Frigate

:::note[Aviso]
Ejecuta el siguiente comando para instalar `curl` si no está ya instalado:

```bash
sudo apt update && sudo apt install -y curl
```

⚠️ No ejecutes `sudo apt upgrade`, ya que puede romper las dependencias específicas de Jetson.
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/frigate-on-jetson" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>frigate-on-jetson</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Usa el script de instalación preconfigurado de un clic para implementar **Frigate** automáticamente en tu dispositivo Jetson.

```shell
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

Una vez que la instalación esté completa, abre tu navegador y visita `http://<tu_ip_jetson>:5000` para acceder a la interfaz web de Frigate y configurar tus cámaras.

Si no funcionó, verifica si te falta permiso para ejecutar Docker sin `sudo`. Consulta la [sección de FAQ](#docker-permission-denied) para pasos de solución de problemas. Y luego vuelve a ejecutar el comando anterior.

<div style={{textAlign:'center'}}>
  <img alt="Frigate Homepage" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png" />
</div>

En NodeRED, nos suscribiremos a los temas MQTT de Frigate para recibir eventos de detección y orquestar flujos de trabajo de alertas. Puedes consultar la [documentación MQTT de Frigate](https://docs.frigate.video/integrations/mqtt) para más detalles sobre los temas y cargas útiles disponibles.

### Paso 2: Configuración de Node-RED

Usamos NodeRED como la capa de orquestación para manejar la programación.

#### Instalación de Node-RED

Si aún no has instalado Node-RED, sigue los pasos a continuación para configurarlo en tu dispositivo Jetson.

Ejecuta Node-RED en un contenedor con el siguiente comando:

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

Después de que el contenedor inicie, abre tu navegador y visita `http://<tu_ip_jetson>:1880` para acceder al editor de Node-RED.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-panel.png" alt="nodered-panel"/>
</div>

#### Instalación de Nodos

Antes de comenzar, asegúrate de instalar los siguientes nodos de Node-RED desde la opción "Manage palette" en el editor de Node-RED:

- `node-red-dashboard` para construir el panel frontal simple.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-install-dashboard.png" alt="nodered-install-dashboard"/>
</div>

## Aplicaciones

En entornos como campus, centros de transporte, parques industriales y lugares públicos, los operadores necesitan respuesta inmediata a riesgos de armas de fuego. Esta solución está diseñada para:

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
            </div>
            <div class="info-content">
                <h3>Campus y Educación</h3>
                <p>Habilita alertas proactivas para equipos de seguridad y facilita la revisión rápida de incidentes con datos de eventos registrados e instantáneas.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M5.625 13.5a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zm12.75 0a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Centros de Transporte Público</h3>
                <p>Despliega monitoreo multicámara en estaciones e integra alertas directamente en un Centro de Operaciones de Seguridad (SOC) mediante webhooks.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304m7.496-9.191a3.75 3.75 0 015.304 0l6.401 6.402a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-5.304 0l-6.401-6.402a3.75 3.75 0 010-5.304l6.401-6.402z" /></svg>
            </div>
            <div class="info-content">
                <h3>Parques Industriales y Logística</h3>
                <p>Asegura perímetros, puntos de acceso y zonas sensibles con monitoreo automatizado que nunca se cansa ni se distrae.</p>
            </div>
        </li>
    </ul>
</div>

<br />

Las siguientes demostraciones de ejemplo te guían a través del proceso de despliegue y personalización de la solución.

### Demo 1 — Alerta de Detección de Armas

Esta demo muestra cómo construir un flujo de Node-RED que escucha eventos de detección de armas desde **Frigate** vía **MQTT**, luego activa *alertas en tiempo real* tanto en un panel de control como a través de notificaciones webhook.

#### Pipeline de Datos

Frigate (detectar arma) → MQTT (publicar) → Node-RED (filtrar/alertar) → Panel de Control + Webhook

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/security/nodered-sample-gun-shot.png" alt="Muestra de detección de armas Node-RED"/>
  <br/>
</div>

#### Configuración del Flujo Node-RED

Puedes importar el flujo de ejemplo directamente en tu editor Node-RED usando el archivo de configuración de flujo proporcionado ([gist flow.json](https://gist.github.com/Love4yzp/2fccdfa6a2d8e64e2740cd566b9b991c)).

> **Nota:** Actualiza la dirección IP y la URL del webhook en el flujo para que coincidan con tu instancia de Frigate y el endpoint de notificación.

La ruta de entrada del panel de control está configurada como `/frigate`.
Accede al panel de control en: `http://<tu_ip_jetson>:1880/dashboard/frigate`

Por ejemplo: `http://192.168.101.100:1880/dashboard/frigate`.

#### Resumen del Flujo

- Escuchador MQTT – Se suscribe a un tema específico (ej., frigate/reviews) para recibir eventos de detección.
- Filtro de Eventos – Permite pasar solo eventos etiquetados como "gun".
- Constructor de Alertas – Construye un mensaje de alerta detallado incluyendo una miniatura, marca de tiempo y contador.
- Actualización del Panel – Actualiza el panel de control con la imagen más reciente, historial de eventos y contadores de detección.
- Notificación Webhook – Envía solicitudes HTTP POST a endpoints externos, como bot de Telegram, Slack o APIs personalizadas.

#### Resultados

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png" alt="Visualización de eventos de Frigate"/>
</div>

Después de configurar este flujo, **Node-RED** responderá automáticamente a los **eventos de detección de armas de Frigate** actualizando tu panel de control y enviando notificaciones webhook inmediatas.

Procede a la [sección de Configuración de Frigate](#frigate-config) para instrucciones sobre cómo configurar los parámetros de detección.

## Configuración Predeterminada de Frigate {#frigate-config}

Navega rápidamente a la página de configuración de Frigate en `http://<tu_ip_jetson>:5000/config` para ver tu configuración actual.

Frigate usa un archivo YAML llamado `config.yml` para definir cómo funciona.
Este archivo le dice a Frigate dónde encontrar tus transmisiones de cámara, qué modelo de IA usar y cómo enviar resultados de detección a través de MQTT.
Al ajustarlo, puedes controlar cómo se detectan, graban y muestran los objetos.

### Ubicación de Almacenamiento

Por defecto, Frigate almacena grabaciones de video e instantáneas bajo: `/media/frigate` en tu dispositivo Jetson.

Por ejemplo:

```bash
seeed@desktop:/$ docker exec -it frigate /bin/sh
root@274103ae951b:/opt/frigate# cd /media/frigate/
root@274103ae951b:/media/frigate# ls
clips  exports  handgun.mp4  machinegun.mov  recordings
```

Si planeas mantener videos por períodos más largos, monta este directorio a un **SSD externo o unidad de red** para evitar que el almacenamiento interno de tu Jetson se llene.

### Configuración de Cámara

En Frigate, cada cámara necesita ser definida bajo la sección `cameras:`.
Cada bloque de cámara describe de dónde viene la transmisión de video y cómo se decodifica antes de ser analizada por el modelo de detección.

```YAML
cameras:
  handgun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/handgun.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
  machinegun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/machinegun.mov
          input_args: -stream_loop -1 -re
          roles:
            - detect
```

**Explicación:**

- `enabled`: Habilita o deshabilita esta cámara.
- `ffmpeg`: Define cómo Frigate usa FFmpeg para leer y decodificar la transmisión de video.
  - FFmpeg es un framework de medios que convierte y transmite video desde archivos, cámaras RTSP u otras fuentes.
- `hwaccel_args`: Habilita aceleración por hardware (ej., decodificación H.264 en Jetson).
- `inputs`: Lista una o más entradas de video.
  - `path`: La fuente de video real.
    - En este ejemplo, es un archivo demo local como `/media/frigate/handgun.mp4`.
    - En despliegues reales, puedes reemplazarlo con una transmisión de cámara en vivo, como: `path: rtsp://user:password@192.168.1.21:554/stream1`
- `input_args`: Parámetros adicionales de FFmpeg.
  - `-stream_loop -1` reproduce el video demo infinitamente.
  - `-re` asegura que la reproducción coincida con la velocidad en tiempo real.
- `roles`: Define cómo se usa esta entrada.
  - `detect` significa que la transmisión se usa para detección de objetos.
  - Otros roles posibles incluyen `record` o `rtmp` para transmisión.

:::tip
Cada cámara puede tener múltiples entradas — por ejemplo, una para detección y otra para grabación de alta calidad.
Frigate maneja automáticamente la decodificación y extracción de fotogramas a través de FFmpeg para todas las fuentes definidas.
:::

### Configuración del Modelo de IA y Detección

Después de definir las cámaras, el siguiente paso es decirle a Frigate qué modelo de IA usar y cómo procesar cada fotograma de video.
Esta sección define el tipo de detector, ruta del archivo del modelo y comportamiento de detección como tamaño de fotograma, seguimiento de objetos y umbral.

```YAML
detectors:
  tensorrt:
    type: tensorrt
    device: 0

model:
  path: /config/model_cache/tensorrt/yolov4-tiny-288_gun_v3.trt
  width: 288
  height: 288
  labelmap_path: /config/guns.txt
  input_tensor: nchw
  input_pixel_format: rgb
```

**Explicación:**

- `detectors`: Define qué backend de IA usa Frigate para inferencia.
  - `type`: tensorrt le dice a Frigate que use aceleración NVIDIA TensorRT (optimizada para Jetson).
  - `device`: Especifica el índice de GPU. Para la mayoría de dispositivos Jetson, usa 0.
- `model`: Apunta al archivo del modelo de IA y describe su formato de entrada.
  - `path`: Ruta a tu archivo .trt (motor TensorRT).
  - `width` / height: Resolución de entrada del modelo (debe coincidir con lo que el modelo espera).
  - `labelmap_path`: Archivo que mapea índices de clase a etiquetas, ej. guns.txt → contiene "gun".
  - `input_tensor`: Define el diseño del tensor; nchw = lote, canal, altura, ancho.
  - `input_pixel_format`: Especifica el formato de píxel, usualmente rgb.

:::tip
Los modelos TensorRT son versiones compiladas de redes entrenadas, optimizadas para inferencia rápida en GPU.
Puedes reemplazar este archivo con tu propio modelo si entrenas uno nuevo — solo asegúrate de que el ancho, altura y etiquetas coincidan.
:::

### Configuración de Seguimiento de Objetos

Frigate puede detectar y rastrear tipos específicos de objetos.
Para este proyecto, solo rastreamos armas, lo que mantiene el sistema eficiente y enfocado.

```YAML
objects:
  track:
    - gun
  filters:
    gun:
      threshold: 0.3
```

**Explicación:**

- `track`: Lista de objetos a detectar y rastrear.
  - Aquí solo es "gun", pero podrías agregar más etiquetas (ej., person, car, etc.) si tu modelo las soporta.
- `filters`: Ajusta la confianza de detección para cada tipo de objeto.
- `threshold`: Valor mínimo de confianza (0.0–1.0).
  - Un valor más bajo (como 0.3) es más sensible pero puede incluir falsos positivos.
  - Un valor más alto (como 0.5) hace la detección más estricta.

:::tip
Si notas demasiadas detecciones falsas, intenta aumentar el umbral a 0.5 o más.
Para objetos más pequeños que a menudo se pierden, puedes bajarlo ligeramente — pero equilibra entre precisión y ruido.
:::

### Configuración de Grabación

Una vez que Frigate detecta un objeto, puede grabar videos y guardar instantáneas para análisis posterior o visualización de alertas.
Estas configuraciones controlan cuánto tiempo se almacenan las grabaciones y qué información se muestra en las imágenes capturadas.

```YAML
record:
  enabled: true
  retain:
    days: 3
    mode: all
```

**Explicación:**

- `enabled`: Activa la grabación de video.
- `retain`: Controla cuánto tiempo mantener los archivos grabados y qué tipo de metraje se almacena.
  - `days`: Número de días para mantener las grabaciones antes de la eliminación automática.
  - `mode`:
    - `all` – grabar continuamente (útil para pruebas).
    - `motion` – solo grabar cuando se detecta movimiento.
    - `events` – grabar solo cuando aparecen objetos rastreados (ej., armas).

:::tip
Para despliegues reales, usa `mode: events` o `mode: motion` para ahorrar espacio de almacenamiento mientras mantienes grabaciones útiles.
:::

### Configuración de Instantáneas

```YAML
snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95
```

**Explicación:**

- `enabled`: Habilita el guardado de instantáneas cuando ocurre un evento de detección.
- `clean_copy`: Guarda una versión adicional sin cajas de detección.
- `timestamp`: Agrega la superposición de hora y fecha en la instantánea.
- `bounding_box`: Dibuja una caja alrededor de los objetos detectados.
- `crop`: Cuando es verdadero, guarda solo el área de detección recortada.
- `retain.default`: Número de días para mantener las instantáneas.
- `quality`: Establece la calidad de imagen (1–100). Mayor = mejor detalle pero archivo más grande.

:::tip
Las instantáneas son ideales para alertas o paneles de control, ya que son mucho más pequeñas que los clips de video y fáciles de enviar vía webhook o MQTT.
:::

### Vista Panorámica

Frigate también soporta una vista panorámica, que muestra múltiples feeds de cámara juntos para una visión general rápida.

```YAML
birdseye:
  enabled: true
  mode: objects
```

**Explicación:**

- `enabled`: Activa la vista compuesta panorámica.
- `mode`:
  - `objects` – solo mostrar cámaras donde se detectan objetos actualmente.
  - `continuous` – siempre mostrar todos los feeds de cámara.

### Configuración MQTT

Frigate comunica sus eventos de detección a través de MQTT, lo que permite que otros servicios — como Node-RED, Home Assistant, o paneles de control personalizados — reciban actualizaciones en tiempo real cada vez que se detecta un objeto.
También proporciona opciones de registro para ayudar a monitorear el rendimiento del sistema y depurar problemas de detección.

```YAML
mqtt:
  enabled: true
  host: 172.17.0.1
  port: 1883
```

**Explicación:**

- `enabled`: Activa la comunicación MQTT.
- `host`: La dirección IP de tu broker MQTT.
  - Cuando usas Docker en Jetson, `172.17.0.1` usualmente se refiere a la máquina host.
  - Reemplaza con la IP real de tu servidor MQTT si lo ejecutas en otro dispositivo.
- `port`: Puerto MQTT predeterminado, típicamente 1883.

Para configuraciones MQTT más avanzadas, consulta la [documentación MQTT de Frigate](https://docs.frigate.video/integrations/mqtt).

Con MQTT habilitado, Frigate se convierte en parte de una red de eventos en tiempo real — enviando alertas de detección de armas directamente a Node-RED o Home Assistant, donde pueden activar paneles de control, notificaciones, o flujos de trabajo personalizados.

## Rendimiento y Dimensionamiento

| Plataforma de Hardware | Modelo | FPS (Total) | Streams Estables (≥15 FPS) | Observaciones |
| ---------------------- | ------ | ----------- | -------------------------- | ------------- |
| reComputer R2000 (Raspberry Pi + Hailo-8) | YOLOv11-s | 30 | 2 | NVR AI compacto; dispositivo edge eficiente de bajo consumo |
| reComputer J3011 (Jetson Orin Nano 8 GB) | YOLOv4-tiny-288 | 90 | 6 | Jetson de nivel básico; FPS se estabiliza después del calentamiento |
| reComputer J4012 (Jetson Orin NX 16 GB) | YOLOv4-tiny-288 | 120 | 8 | Límite de concurrencia NVDEC alcanzado; margen de cómputo permanece |

## Recursos y Próximos Pasos

- **Paquete de Solución:** [Frigate + Node-RED Gun Detection en Jetson](https://www.seeed.cc/solutions/campus-safety-management)
- **Documentación de Frigate:** [https://docs.frigate.video/](https://docs.frigate.video/)
- **Repositorio GitHub:** [Seeed-Studio / frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
- **Complemento de Panel Node-RED:** [@flowfuse/node-red-dashboard](https://flows.nodered.org/node/@flowfuse/node-red-dashboard)

<!-- Summary

The **Frigate + Node-RED Gun Detection Solution** delivers real-time firearm detection and intelligent alerting on edge AI hardware — from Raspberry Pi + Hailo systems to Jetson Orin series. It offers a modular, open, and production-ready framework for security integrators, enabling private on-premise analytics, instant visualization, and LLM-driven verification while keeping video data under full control.

| Module | Purpose / Value | Key Capabilities |
| ------ | ---------------- | ---------------- |
| Real-time Video Monitoring | Observe scene context before and after detection | Multi-RTSP/HTTP stream input; split-screen or carousel views; zoom and PTZ control |
| Gun Detection Visualization | Confirm detection accuracy visually | Real-time bounding boxes with confidence overlay; frame pause, magnify, and annotate |
| Event / Alert Queue | Deliver instant alerting and logging | Adjustable confidence and ROI thresholds; popup, sound, light, webhook, email, or SMS actions |
| Event Replay & Retrieval | Support evidence review and playback | Filter by time, camera, or alert type; jump to pre-event and post-event footage |
| Detection Log & Export | Enable third-party analytics and reporting | Timestamp, camera, confidence, snapshot metadata; export in CSV or JSON formats |
| LLM-based Analysis | Reduce false positives and generate summaries | False-positive review for gun/not-gun decisions; semantic summarization and querying (for example, rifle alerts last week); contextual response suggestions for operators | -->

## FAQ

### 1. No puedo instalar Docker en mi dispositivo Jetson. ¿Qué debo hacer?

Si encuentras problemas con el script de instalación predeterminado de Docker, puedes usar el siguiente script alternativo:

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

Para más información, por favor visita: https://linuxmirrors.cn

### 2. ¿Cómo saber mi versión de Jetpack?

Ejecuta el siguiente comando en tu dispositivo Jetson:

```bash
dpkg -l | grep nvidia-jetpack
```

La salida mostrará la versión de Jetpack instalada.

### 3. ¿Cómo actualizar mi versión de Jetpack?

Sigue las instrucciones en [tu wiki específico del producto](/es/NVIDIA_Jetson).

### 4. "Permission Denied" Al Ejecutar Docker {#docker-permission-denied}

No tienes permisos para acceder al daemon de Docker.
Ejecuta:

```shell
sudo usermod -aG docker $USER
newgrp docker
```

> Cerrar sesión y volver a iniciarla también aplica los nuevos permisos de grupo.

Luego verifica:

```shell
docker ps
```
