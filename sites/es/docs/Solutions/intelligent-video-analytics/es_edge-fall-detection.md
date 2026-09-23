---
description: Creación de un sistema local de alerta de caídas para cuidado de personas mayores, residencias asistidas y atención domiciliaria: qué dispositivos necesitas, cómo configurarlo, datos medidos en siete dispositivos y detalles de implementación para ingenieros
title: 'Detección de caídas con IA en el dispositivo: creación, despliegue y resultados medidos'
keywords:
  - fall detection system
  - fall alert
  - nursing home fall alert
  - on-device AI
  - pose estimation
  - fall detection
  - edge AI
  - reCamera
  - reComputer
  - Jetson
  - Hailo-8
  - MQTT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png
slug: /solutions/edge-fall-detection
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: seeed-solutions-hub
createdAt: '2026-09-01'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/es/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Esto es una **alerta de asistencia**, no un dispositivo médico ni de seguridad vital certificado. No ofrece ninguna garantía frente a detecciones perdidas y no sustituye las rondas presenciales. El rendimiento en el mundo real depende de la colocación de la cámara y de la población real: verifícalo con grabaciones in situ antes de un despliegue en producción.
:::

## Qué hace esta solución

Instala una cámara en la habitación. Cuando alguien se cae, un mensaje llega en cuestión de segundos a quien deba verlo — el puesto de enfermería, el Home Assistant de un familiar, el NVR en la recepción o tu propio sistema. Diseñado para entornos de habitación fija: residencias de ancianos, centros de rehabilitación, atención domiciliaria, dormitorios de un solo ocupante.

- Implementación de código abierto: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>El vídeo nunca sale del sitio</h3>
                <p>La detección, la decisión y el envío de mensajes ocurren todas en el dispositivo local. Lo único que cruza la red es un mensaje de texto de unos pocos cientos de bytes: el vídeo nunca sale del sitio.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>1,4 s de latencia media de alerta</h3>
                <p>Medido en un conjunto de datos público en seis configuraciones fijas: 95,8% de recall de caídas y una media de 1,4 segundos desde la caída hasta que sale el mensaje. Los resultados completos están en el apéndice al final de la página.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>De una habitación a más de una docena de flujos</h3>
                <p>La unidad todo en uno maneja una habitación; si cambias a la caja Hailo-8, un solo host puede ejecutar más de una docena de cámaras con exactamente la misma lógica de decisión.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona sin conexión, sin suscripción</h3>
                <p>Sin inferencia en la nube no hay suscripción en la nube por cámara. Solo se necesita Internet si reenvías eventos a algún lugar externo.</p>
            </div>
        </li>
    </ul>
</div>

### Demostración en vivo

Lo que el dispositivo realmente genera: un esqueleto superpuesto sobre la persona, un recuadro etiquetado con el id de seguimiento de esa persona y su estado actual, y en la parte superior derecha, cuántas de las tres características de decisión se cumplen en ese momento.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="Una caída confirmada en reComputer J30 / J40: el esqueleto, el estado de seguimiento y el recuento de evidencias provienen del mensaje MQTT en vivo"/>
</div>

`#12 FALLEN` es el id de seguimiento y el estado actual de esa persona; `Evidence: 2/3` en la parte superior izquierda significa que se cumplen dos de las tres características de decisión. La transición de estado animada está en [los pasos de configuración más abajo](#step-2-install-the-software).

## Qué hardware necesitas

Hay dos elementos en el sitio: la cámara que produce la imagen y el host que ejecuta la detección.

**① Cámara** — ¿Ya tienes una cámara IP? Úsala tal cual por RTSP; no es necesario cambiar nada en la cámara. Si no, la reCamera 2002 / Pro combina cámara y cómputo en una sola unidad: conéctala y estará lista.

**② Host detector** — El dispositivo que ejecuta la detección y la toma de decisiones; también determina cuántos flujos puedes ejecutar y cuánto cuesta. Con una cámara existente, esto es una caja aparte; con reCamera, la cámara es el host detector.

| | Host detector | Flujos por unidad | Cuándo elegirlo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeed.cc/reCamera-Pro-2GB.html)<br/>Cámara y cómputo en una sola unidad | 1 | Una habitación, la forma más rápida de conseguir que funcione una única alerta |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | Ya estandarizado en placas Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | Necesitas una sola caja que maneje muchos flujos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | Varias habitaciones y quieres margen para crecer |

Los recuentos de flujos se derivan del rendimiento medido; solo se ha medido de extremo a extremo un único flujo: haz una prueba de carga en tu propio sitio antes de comprometerte con una cifra.

Además de eso, todo lo que necesitas es una red: el dispositivo y el receptor solo tienen que estar en la misma LAN; no se requiere acceso a Internet.

## Cómo desplegar en el sitio

Dos pasos: primero ajusta bien la posición de la cámara y luego instala el software.

### Paso 1: montar la cámara — la colocación marca el límite superior {#step-1-mount-the-camera}

:::tip[La colocación de la cámara importa más que el hardware]
Fija el soporte, a 2–3 m de la persona, de lado o en ángulo, con hombros y caderas visibles. La propia caída tiene que ocurrir en cámara: si la persona ya está tumbada cuando el dispositivo arranca, solo informa de la pose y no dispara una alerta. Los ángulos cenitales totalmente verticales, los planos generales de pasillos largos y el mobiliario que bloquea la mayor parte de la persona perjudican notablemente la precisión.
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="Colocación de la cámara: un montaje lateral u oblicuo a 2–3 m funciona; los ángulos cenitales, los planos generales y las vistas ocluidas no"/>
</div>

### Paso 2: instalar el software — cuatro pasos {#step-2-install-the-software}

Las instrucciones paso a paso para cada dispositivo están en la página de diseño de referencia: allí eliges una configuración para tu sitio y descargas el paquete de la aplicación correspondiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga el paquete de la aplicación 🖱️</font></span></strong>
    </a>
</div><br />

El flujo general:

1. **Elegir una configuración** — Responde a tres preguntas en la página de diseño de referencia (si tienes cámara, a qué distancia de la zona de caída, cuántos flujos) y te devuelve una combinación de dispositivos adecuada.
2. **Instalar el paquete de la aplicación** — Descarga el paquete para ese dispositivo e instálalo. El modelo, el runtime y los umbrales de decisión vienen fijados en el paquete — las mismas configuraciones evaluadas en los datos medidos más abajo — así que no hay que hacer entrenamiento ni ajuste.
3. **Rellenar dos ajustes** — la dirección de la fuente de vídeo (sáltate esto con reCamera) y un nombre de dispositivo. El nombre del dispositivo es el primer segmento del tema del mensaje; ponle nombre por habitación o cama para que varios dispositivos en el mismo receptor nunca se sobrescriban entre sí. La captura de pantalla de abajo es la página de gestión de dispositivos en la plataforma de despliegue: elige "Embedded" y luego rellena la IP del dispositivo y el puerto ADB.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="Gestión de dispositivos → Embedded → reCamera Pro, desplegado para rellenar la dirección y el puerto ADB"/>
</div>

4. **Comprueba la vista previa para confirmar el encuadre** — Una vez instalada, la app muestra una transmisión en vivo con un esqueleto y el estado superpuestos sobre la persona. Confirma que la cámara realmente ve lo que necesita antes de cablear las notificaciones. La captura de pantalla de abajo es la página de vista previa de reCamera Pro, usada para demostrar las transiciones de estado del panel — **la etiqueta de estado es una repetición, no evidencia de evaluación**; consulta los "datos medidos" más abajo para ver las cifras reales.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="La transición de estado de normal a caído, mostrada en la vista previa del App Center de reCamera Pro"/>
</div>

Desde la instalación hasta que está en ejecución: alrededor de media hora para reCamera. Jetson tarda más, porque el motor de inferencia tiene que compilarse en el dispositivo la primera vez (461 segundos o más, medidos).

## Cómo conectarlo a tu propio sistema

El dispositivo publica eventos en el broker MQTT que se ejecuta en él mismo (puerto 1883); tu sistema solo se suscribe. Tres formas de conectarse:

- **Home Assistant** — No se necesita configuración. El dispositivo emite por el protocolo de descubrimiento automático, y cuatro entidades aparecen directamente en HA: un sensor de caídas, estado actual, id de evento y presencia — conéctalos a tus automatizaciones.
- **Sistemas NVR / de llamada de enfermería** — Suscríbete a `<device>/fall-detection/results`. Si lo único que te importa es "¿alguien se ha caído?", observa `fall_event` en el payload — solo se establece una vez, en el momento en que el estado entra en "fallen", así que una caída lo dispara una vez, no repetidamente mientras la persona esté en el suelo.
- **Sistema / API personalizados** — Suscríbete de la misma manera; el payload también incluye `person_count`, `fallen_count`, y para cada persona su `track_id` / `state` / `bbox` — suficiente para construir tu propio panel. reCamera además expone RTSP 8554 `/live0` para la transmisión en vivo.

`<device>` es el nombre que rellenaste antes — asígnalo por habitación o cama para que varios dispositivos en el mismo broker nunca se sobrescriban entre sí.

### Temas completos y payload

| Tema / puerto | Payload | Retenido |
|---|---|---|
| `<device>/fall-detection/results` (multi-stream: `.../results/{stream_id}`) | Un JSON por fotograma: `state`, `fall_detected`, `fall_event`, `event_id`, `person_count`, `fallen_count`, más `track_id` / `state` / `bbox` para cada entrada en `persons[]` | No |
| `<device>/fall-detection/status` | `online` / `offline`, publicado mediante el "last will" de MQTT | Sí |
| `homeassistant/` | Configuración de descubrimiento automático — sensor de caídas, estado, id de evento, presencia | Sí |
| RTSP 8554 `/live0` (reCamera) | Vídeo en vivo para vista previa y NVR | — |

El id de flujo también se escribe en el payload, de modo que los consumidores posteriores no tengan que analizar el tema para conocer el origen. `fall_event` se establece solo una vez, en el momento de la transición de estado, por lo que una automatización se dispara una vez por caída en lugar de repetidamente mientras la persona esté en el suelo.

El broker también reside en el host del detector: reCamera usa el suyo integrado, y cada configuración de reComputer levanta `eclipse-mosquitto:2` junto al detector — el puerto 1883 es servido por el propio host. No se necesita un broker externo, y ningún paso de esta cadena requiere acceso a internet.

## Para ingenieros: detalles de implementación

El código fuente incluye conversión de modelos por plataforma, orquestación con Docker y scripts de entrenamiento de pesos de decisión.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Lo que sigue es lo que necesitas saber sin leer el código fuente.

### Estimación de pose: un modelo, cuatro runtimes

Cada plataforma ejecuta la misma familia de modelos de pose 640² con umbrales idénticos (`score_threshold` 0.35, `keypoint_threshold` 0.25, `nms_threshold` 0.45, `max_fps` 15). Lo que cambia es el runtime y cómo llega el modelo al dispositivo:

| Host del detector | Modelo de pose | Precisión | Runtime | Entrega del modelo |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | NPU de la cámara | Instalado desde la consola como una app de cámara |
| reComputer J30 / J40 | YOLO11s (Orin Nano) / YOLO11m (Orin NX) | FP16 | TensorRT | El engine se **compila en el dispositivo** — ligado a esa arquitectura de GPU y versión de TensorRT, por lo que no puede distribuirse precompilado. Medido en Orin Nano: 461 s para YOLO11s |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` se distribuye por placa; un modelo compilado para RK3588 no cargará en RK3576 |
| reComputer R2000 Serie (R2035-12, Hailo-8) | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | HEF oficial precompilado, verificado contra un digest fijo |

Las cifras de precisión se obtuvieron en un Orin Nano (JetPack 6.2, TensorRT 10.3, CUDA 12.6, SM87). La imagen de Jetson se distribuye sin CUDA, TensorRT, OpenCV ni GStreamer — las copias del host se montan en solo lectura, por eso la imagen pesa unos 206 MB en lugar de varios GB. La imagen para RK monta `librknnrt.so` desde el host. El despliegue en Hailo está bloqueado a nivel de ABI en **HailoRT 4.21**: el plugin de GStreamer, la biblioteca de usuario y el driver de kernel deben coincidir todos.

### Lógica de decisión: por qué sentarse rápido no dispara una falsa alarma

La salida de pose por sí sola no puede separar "una caída" de "sentarse rápidamente". La capa de decisión es un seguimiento por persona más una máquina de estados, idéntica en diseño en todas las plataformas:

| Etapa | Disparador | Valor configurado |
|---|---|---|
| Asociación de tracks | IoU o distancia al centro a un track existente | `iou_threshold` 0.20, `center_distance_threshold` 0.25, `max_missed_frames` 8 |
| normal → sospechoso | Al menos 2 características se mantienen simultáneamente | ángulo del torso > 55°, relación de aspecto del bbox > 1.25, velocidad de caída de la cadera > 0.25 dentro de una ventana de 0.75 s |
| sospechoso → caído | Las características siguen manteniéndose **y el modelo temporal lo confirma** | `confirmation_sec` 0.80, `temporal_confirmation_required` true; si dejan de mantenerse, el estado expira tras `suspected_timeout_sec` 1.50 |
| Oclusión | El track sobrevive a una breve desaparición | `occlusion_grace_sec` 0.75 |
| caído → recuperándose | De vuelta a una pose de pie | ángulo del torso < 35° y relación de aspecto < 1.10, mantenidos durante 2.00 s |
| Supresión de repeticiones | Una caída cuenta una vez | `cooldown_sec` 3.00; `fall_event` se dispara solo en la transición de entrada |

Un pequeño modelo temporal se sitúa encima de estas características. Sus pesos se **reextraen y refijan por plataforma** a partir de la propia salida de pose real de esa plataforma (`temporal_profile: auto`) — nunca se comparten entre plataformas, porque un modelo de pose diferente produce tracks diferentes.

**Las características geométricas por sí solas no pueden confirmar una caída.** La configuración distribuida establece `fall.temporal_confirmation_required: true`: las características geométricas solo pueden avanzar el estado a "suspected" y gestionar la recuperación; entrar en "fallen" requiere un positivo del modelo temporal sobre un track activo. Un track perdido o expirado no puede disparar un evento, y una persona que ya está tumbada en el primer fotograma tampoco cuenta como una. Este es el mecanismo principal que mantiene bajos los falsos positivos — si lo desactivas, las características geométricas confirman las caídas por sí mismas.

## Apéndice: datos medidos

Esta sección es para quien quiera volver a comprobar las cifras — sáltatela y los pasos de despliegue seguirán funcionando. Todo lo que sigue está medido sobre un conjunto de datos público. **No es una certificación médica ni de seguridad vital** — el rendimiento en el mundo real depende de la colocación de la cámara y de la población real. Los informes brutos por clip y los checksums están en el repositorio bajo [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation) — cada cifra de esta página se remonta a una ejecución específica registrada allí.

### Resultados de precisión

Promediado sobre seis configuraciones congeladas: **precisión 85.8%, recall de caídas 95.8%, especificidad 77.8%, F1 85.7%, latencia media de alerta 1.4 s**. Las configuraciones individuales quedan entre 81.5% y 88.9%.

Estas seis configuraciones son Jetson YOLO11s, Jetson YOLO11m, reCamera Pro, RK3576, RK3588 y Hailo-8, cada una con su propia configuración congelada. La línea base v0.2 de reCamera 2002 (74.1% de precisión) se excluye del promedio — ejecuta una generación anterior de pesos temporales. El detalle por configuración está en la [tabla de precisión unificada](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表) del repositorio.

**Cómo se midió**

- Conjunto de datos [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos) (MIT), dividido por sujeto.
- Los Sujetos 1–2 entrenan el modelo temporal; el Sujeto 3 por sí solo selecciona las características, el ancho de la capa oculta, la regularización, el umbral de probabilidad y el número de fotogramas de confirmación; después de congelar la configuración, los pesos se reajustan con los Sujetos 1–3.
- El Sujeto 4 es el conjunto de prueba reservado y se **lee exactamente una vez**. Se eliminaron diez clips usados previamente para pruebas de humo del pipeline, quedando **27 clips** (12 caídas / 15 actividades de la vida diaria).
- Todo el vídeo se remuestrea a 15 FPS, con el seguimiento y el estado temporal reiniciados antes de cada clip.
- Una alerta que se dispare más de 0,5 s antes del inicio de la caída anotado cuenta como falso positivo, no como acierto.
- Cada plataforma vuelve a extraer las trayectorias, vuelve a entrenar y congela los pesos de decisión a partir de su propia salida real de pose: no se toma nada prestado entre plataformas, porque un modelo de pose diferente produce trayectorias diferentes.
- Reproducir con: `platforms/jetson/tools/evaluate_videos.py`. El conjunto de datos no se distribuye con el repositorio: debes obtenerlo por tu cuenta.

**Por qué no hay comparación de precisión entre dispositivos**: el conjunto de prueba de 27 clips tiene una resolución de 3,7 puntos porcentuales — un clip es un paso — y RK3576, RK3588 y Hailo obtienen exactamente la misma puntuación (88,9%). El tamaño del modelo tampoco se correlaciona con la puntuación. **Elige un dispositivo por el número de flujos, el hardware existente y la fuente de vídeo, no por la precisión.**

### Qué dispositivos probamos

Siete dispositivos, cuatro aceleradores. "End-to-end" significa que se ejecutó y puntuó en el conjunto de prueba toda la ruta desde la ingesta del flujo hasta una alerta; "inference benchmark" significa que solo se midió la velocidad de detección.

| Dispositivo | Acelerador | Modelo enviado | End-to-end | Inference benchmark |
|---|---|---|:-:|:-:|
| reCamera 2002 | NPU integrada | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | NPU integrada (RK) | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | NPU RK3576 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | NPU RK3588 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Serie | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | GPU Orin Nano | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | GPU Orin NX | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

La latencia por fotograma y por dispositivo, el rendimiento multi-flujo y el alcance de la medición están en los [resultados de rendimiento detallados](#性能实测详表) más abajo.

### Resultados de rendimiento detallados {#性能实测详表}

#### Qué tan rápido es cada dispositivo

El mismo modelo en diferentes dispositivos: **YOLO11n-Pose, entrada 640²**. Las cifras por fotograma son solo de inferencia en el acelerador (sin decodificación RTSP, sin postprocesado); el rendimiento agregado es la tasa de fotogramas total más alta medida entre 1 y 6 contextos concurrentes. Nunca se comparan diferentes precisiones en la misma tabla. Las filas de Hailo-8 se midieron en un banco de pruebas Raspberry Pi 5 + Hailo-8 M.2; las tablas nombran R2035-12, el modelo reComputer R2000 Serie que lleva el mismo Hailo-8 (26 TOPS).

FP16:

| Plataforma | Modelo de pose | Por fotograma | Agregado | Flujos limitados por inferencia | Flujos recomendados |
|---|---|---:|---:|---:|---:|
| reComputer RK3576 | YOLO11n | 56,1 ms | 29,2 FPS | 1 | 1 |
| reComputer RK3588 | YOLO11n | 51,4 ms | 51,4 FPS | 3 | 1 |
| reComputer J30 Serie (J3011) | YOLO11n | 3,7 ms | 270,7 FPS | 18 | 7 |
| reComputer J40 Serie (J4012) | YOLO11n | 3,3 ms | 306,2 FPS | 20 | 8 |

INT8:

| Plataforma | Modelo de pose | Por fotograma | Agregado | Flujos limitados por inferencia | Flujos recomendados |
|---|---|---:|---:|---:|---:|
| reCamera 2002 | YOLO11n | 53,0 ms | 10,0 FPS | 1 | 1 |
| reCamera Pro | YOLO11n | 35,9 ms | 18,1 FPS | 1 | 1 |
| reComputer RK3576 | YOLO11n | 36,2 ms | 42,1 FPS | 2 | 1 |
| reComputer RK3588 | YOLO11n | 29,8 ms | 90,4 FPS | 6 | 2 |
| reComputer R2000 Serie (R2035-12, Hailo-8) | YOLOv8s ▲ | 6,9 ms | 393,9 FPS | 26 | 16 |
| reComputer J30 Serie (J3011) | YOLO11n ＊ | 2,7 ms | 363,9 FPS | 24 | 9 |
| reComputer J40 Serie (J4012) | YOLO11n ＊ | 2,5 ms | 408,0 FPS | 27 | 10 |

**▲ La fila de Hailo usa el tamaño s porque el tamaño n es más lento en este acelerador.** El directorio hailo8 del Model Zoo oficial v2.15 solo incluye `yolov8s_pose` y `yolov8m_pose`, sin ningún modelo de pose tamaño n. Compilamos nosotros mismos un YOLO11n-Pose con Hailo Dataflow Compiler 3.31.0 (640², INT8, calibración GMDCSA de 64 fotogramas) y medimos **9,01 ms / 92,2 FPS** en la misma placa, frente a 6,87 ms / 393,9 FPS para el tamaño s: la latencia por fotograma es del mismo orden (+31%), pero el rendimiento difiere en 4,3×. El compilador dividió 11n en **3 contextos**, cambiando pesos en cada fotograma; el modelo s del Model Zoo es de un solo contexto con los pesos residentes. A los 15 FPS que este diseño necesita por flujo, 92,2 FPS aún dejan aproximadamente un margen de 6×: la diferencia solo aparece en la densidad multi-flujo. Este resultado refleja la compilación del HEF, no el techo de YOLO11n en Hailo-8.

**＊ El INT8 de Jetson no es desplegable hoy; es solo una referencia de velocidad.** El motor se construye directamente con `trtexec --int8` sin calibrador ni conjunto de calibración, por lo que los rangos dinámicos son arbitrarios: la velocidad del kernel es real, las detecciones no son utilizables. El `build_engine.sh` ascendente pasa solo `--fp16`. El INT8 de RK es lo contrario: calibrado en 240 fotogramas GMDCSA, y en fotogramas fuera del conjunto de calibración su recuento de detecciones por fotograma coincide exactamente con FP16, por lo que es desplegable.

#### Las grabaciones reales son más lentas

Ambas tablas anteriores reciben **fotogramas sintéticos en blanco de 640** y miden solo la inferencia en el acelerador. Las grabaciones reales son más lentas, porque cualquier cosa en el fotograma tiene que pasar por la decodificación de la cabecera bruta, DFL, puntos clave y NMS:

| Plataforma | Modelo de pose | Acelerador | Pipeline de fotograma real | Delta de pre/post |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52,74 ms ◇ | 53,23 ms | 0,012 ms |
| reCamera Pro | YOLO11n INT8 | 35,2 ms ✦ | 36,6 ms | 1,4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69,6 ms | 70,8 ms | 1,2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54,4 ms | 54,8 ms | 0,4 ms |
| reComputer R2000 Serie (R2035-12, Hailo-8) | YOLOv8s INT8 | 6,9 ms | 8,77 ms | 1,9 ms |
| reComputer J30 Serie (J3011) | YOLO11n FP16 | 3,7 ms ◆ | 5,57 ms | 1,9 ms |
| reComputer J40 Serie (J4012) | YOLO11n FP16 | 3,3 ms ◆ | 5,18 ms | 1,9 ms |

"Pipeline" = inferencia + preprocesado + decodificación de cabecera bruta / DFL / puntos clave / NMS. **Excluye** la decodificación RTSP, el seguimiento, el MLP temporal y MQTT. La cifra de 5,18 ms de Orin NX proviene de 400 fotogramas medidos, los 5,57 ms de Orin Nano de 1359, y los 8,77 ms de Hailo de 1951 (de los cuales la inferencia por hardware es 6,87 ms y la decodificación más NMS representan solo 0,052 ms).

- **◇ reCamera 2002 no puede separar una columna de "solo acelerador"**: expone un único temporizador cuyo alcance coincide exactamente con la definición de pipeline de esta tabla, por lo que 52,74 ms ya incluyen pre y postprocesado (250 fotogramas medidos, con y sin una persona en escena son casi idénticos).
- **✦ La fila de reCamera Pro se midió con las frecuencias bloqueadas** (NPU 950 MHz, CPU en modo performance). El gobernador por defecto `rknpu_ondemand` se midió estabilizándose en 800 MHz y 43,1 ms: una diferencia del 23% en la misma placa solo por el gobernador de frecuencia. RK3576 / RK3588 se midieron funcionando siempre en su nivel máximo y no se ven afectados.
- **◆ La columna de Jetson es cómputo puro de GPU con `trtexec`** (sin copias al host), mientras que la columna de RK es `rknnlite.inference()`; los dos alcances difieren por definición. La columna comparable es la del pipeline. Sobre esa base Jetson es aproximadamente 11× más rápido que RK3588 y aproximadamente 14× más rápido que RK3576.

#### Cómo leer los recuentos de flujos

"Flujos limitados por inferencia" = rendimiento agregado ÷ 15 FPS. Cuenta solo el acelerador y es un techo teórico. "Flujos recomendados" descuenta eso: el rendimiento end-to-end medido en RK alcanza solo el 28%–44% del techo de inferencia, porque la decodificación RTSP, el seguimiento, la máquina de estados y MQTT también consumen CPU y ancho de banda de memoria. Con otras cargas de trabajo aún ejecutándose en la placa, el rendimiento end-to-end medido fue de unos 8,6 FPS en RK3588 y de unos 4,9 FPS en RK3576.

**Condiciones de medición**: ambos Jetson se midieron con las cargas de trabajo co-residentes detenidas. Ese paso es necesario: si una carga de trabajo co-residente ocupa el acelerador, las cifras se invierten: Orin NX midió 264,9 FPS mientras ejecutaba su propia carga de inferencia, por debajo de Orin Nano y lo contrario de su capacidad de cómputo relativa; con ella detenida, 306,2 FPS. Orin Nano midió de forma idéntica en ambos casos (270,5 frente a 270,7) porque su carga de trabajo no toca la GPU.

### Límites conocidos

- **El encuadre determina la precisión.** Las cifras anteriores provienen de una cámara fija, encuadre a media distancia, en interiores, con hombros y caderas visibles. Un montaje lateral u oblicuo a 2–3 m funciona; las tomas cenitales, los planos amplios de pasillos largos y la oclusión fuerte por muebles rinden peor.
- **Un conjunto de datos diferente reduce el recall.** En el conjunto de datos externo independiente RealBiomFall (34 clips, todas caídas), el recall medido cae al 58,8% en reCamera y al 52,9% para el YOLO11m desplegado en reComputer J30 / J40: el factor limitante es la tasa de detección de personas del modelo de pose, no la decisión de caída. Antes de un despliegue en producción, vuelve a extraer trayectorias a partir de grabaciones in situ, vuelve a entrenar y vuelve a congelar los pesos temporales.
- **La propia caída debe ocurrir en cámara.** Si alguien ya está tumbado cuando el detector se inicia, informa de la pose pero no produce ningún evento.
- **Solo se ha medido end-to-end en flujo único.** Los recuentos de flujos anteriores son cifras derivadas: haz pruebas de carga en tu propio sitio para cualquier cosa más allá de un flujo.

## Panel de alarma (fusionado desde el diseño retirado Eldercare Alarm)

El panel de alarma se entrega como parte de este diseño: incluido en la pila de compose en los presets de reComputer J30 / J40, RK y R2000, y como host extra opcional en los dos presets de reCamera. Todo lo siguiente se escribió para la página independiente de Eldercare Alarm y se aplica sin cambios al panel aquí.

:::caution[Aviso de uso]
Se trata de una **alarma asistencial**, no de un dispositivo médico ni de un producto certificado de respuesta a emergencias. No diagnostica, trata ni sustituye el juicio de una persona cuidadora, y no ofrece ninguna garantía contra alarmas perdidas. Una alarma es un aviso; la decisión y la respuesta siguen correspondiendo a una persona. Consulta el [Apéndice: datos medidos](#appendix-measured-data) para saber qué cubren las cifras antes de citar cualquiera de ellas.
:::

### Qué hace esta solución

Un detector de caídas ya publica eventos. Esto añade la parte entre "la cámara vio algo" y "una persona se ocupó de ello": cada habitación es una zona con sus propias reglas, se abre una alarma, alguien de guardia la confirma o la descarta en una consola de una sola página, y la alarma confirmada sale como un webhook o un mensaje MQTT con el nombre del operador. Diseñado para residencias asistidas, atención domiciliaria y cualquier sitio donde una alarma tenga que ser defendible a posteriori.

- Implementación de código abierto: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Elegir una configuración y desplegar: [reference design page](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Tres tipos de alarma, definidos por zona</h3>
                <p>Un evento de caída desde el detector; una zona vacía más allá de su <code>no_person_timeout</code>; una persona cuyo centro del bbox no se ha movido más allá de su <code>no_motion_timeout</code>. Un baño y un dormitorio tienen tiempos de espera diferentes.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Un paso de confirmación, no solo un botón</h3>
                <p>Ventana de evidencia de 5 s, luego 60 s para un operador. Confirmar y descartar se registran ambos contra quien los pulsó.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Entrega que se puede auditar</h3>
                <p>Una alarma confirmada que no se notifica en 5 s pasa a estado de escalada y reintenta cada 30 s. Medido en reproducción local: 3 de 3 alarmas en cola recuperadas tras una caída de 4 s, 0 duplicados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sin vídeo en la notificación</h3>
                <p>Id de alarma, tipo, zona, id de flujo, marca de tiempo, operador, clave de idempotencia. La captura de instantánea es un interruptor que está apagado por defecto.</p>
            </div>
        </li>
    </ul>
</div>

#### Lo que muestra la consola

La consola de confirmación es toda la superficie del operador: la lista de alarmas con el estado actual de cada una, el veredicto de la comprobación por voz cuando esa opción está activada, y los botones de confirmar/descartar que escriben el nombre del operador en el registro de auditoría. Es una app React sobre `@sensecraft/ui-kit`, servida por el propio servicio de alarmas en HTTP 8080.

La captura de pantalla publicada de esa consola se **tomó con datos de demostración reproducidos** — `evaluation/replay/replayer.py --scenario fall` generando datos sintéticos de bbox y de trayectorias. No hay imágenes de cámara en ella ni ninguna persona real o derivada de un dataset. Trátala como una referencia de interfaz, no como evidencia del rendimiento en campo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="Consola de confirmación inicio: lista de habitaciones a la izquierda, flujo de alarmas a la derecha, cada alarma con tipo, zona y estado actual"/>
</div>

Abrir una alarma muestra todo su historial: hora del evento, transiciones de estado y quién pulsó confirmar.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="Detalle de una sola habitación: configuración de zonas, ocupación actual y el historial de alarmas para esa habitación"/>
</div>

### Qué hardware necesitas

Tres cosas: lo que produce los eventos de detección, un host que decide qué se convierte en alarma y lo que recibe la notificación. El tercero es tu propio sistema, así que la elección en realidad es sobre los dos primeros.

**① La fuente de eventos**: o bien cámaras RTSP que ya posees, en cuyo caso el detector se despliega en el host de alarmas y apunta a tu flujo, o cámaras reCamera que ya ejecutan el detector ellas mismas, en cuyo caso nada cambia en la detección.

**② El host de alarmas**: esta es la caja que ejecuta las zonas, los tiempos de espera, la máquina de estados, el almacén de auditoría SQLite, la página de confirmación y la cola de entrega. En dos de los tres paquetes también ejecuta el detector.

| | Host de alarmas | Dónde se ejecuta el detector | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Detector, servicio de alarmas, broker y consola en un solo Jetson | En esta caja, motor TensorRT construido en el primer despliegue | Las cámaras existen y el sitio aún no tiene gateway. Admite más flujos que los otros dos paquetes |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>La misma pila, modelo de pose más grande | En esta caja, YOLO11m en lugar de YOLO11s | Más habitaciones de las que un J3011 puede vigilar, o se quiere un modelo de pose más grande. Mismo paquete, una opción diferente en el formulario de despliegue |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Carcasa industrial sin ventilador | En esta caja, ruta crítica nativa en C++, HEF precompilado | El host va en un armario o en un montante: sin ventilador, amplio rango de temperatura, montaje en carril DIN o en pared |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Cámara AI todo en uno; el servicio de alarmas se ejecuta en una máquina que ya tienes | En la cámara | Aún no hay cámaras, o las cámaras ya están detectando. El servicio de alarmas se levanta a mano: el formulario de despliegue no tiene clase de dispositivo para un gateway que tú aportes |

**Cómo leer la afirmación de capacidad.** "Admite más flujos que los otros dos" proviene de la descripción del paquete original, no de una medición hecha aquí: no se ha ejecutado ninguna prueba de carga multi-flujo en ninguno de los tres dispositivos. Dimensiona el host a partir de tu propia prueba de carga.

Otros prerrequisitos: un broker MQTT accesible en el puerto 1883 (los paquetes Orin y Hailo levantan uno; el paquete reCamera puede usar aquel al que las cámaras ya publican), una vista interior fija en los paquetes Orin y Hailo, y un endpoint de webhook o un suscriptor MQTT que reciba las notificaciones.

### Cómo desplegar en el sitio

Dos partes: colocar las cámaras donde las zonas funcionen, luego instalar y configurar.

#### 1. Cámaras y zonas

:::tip[Las zonas son rectángulos normalizados sobre el fotograma de la cámara]
Mover o reorientar una cámara invalida el diseño de zonas **sin generar ningún error**. El rectángulo sigue existiendo; simplemente cubre otra parte de la habitación. Vuelve a comprobar cada zona después de cualquier cambio físico en una cámara.
:::

En los paquetes Orin y Hailo también necesitas una vista interior fija donde una persona permanezca visible a lo largo de la trayectoria de caída esperada: el detector subyacente es el mismo detector EdgeFallKit documentado en el wiki de detección de caídas, con las mismas restricciones de colocación (vista lateral o desde una esquina a 2–3 m, hombros y caderas visibles).

Dos decisiones sobre la forma de las zonas determinan cuánto ruido produce el sitio:

- **`no_motion` se activará durante el sueño** a menos que la zona excluya la cama o el tiempo de espera sea más largo que una siesta normal. El movimiento es el desplazamiento del centro del bbox de una persona rastreada por encima de `motion_threshold`, no flujo óptico ni velocidad de puntos clave, por lo que los movimientos pequeños bajo una manta no cuentan.
- **La oclusión puede generar un falso `no_person`.** Una zona solo se rearma después de que la persona vuelva a ser vista, así que una oclusión produce una alarma en lugar de una serie repetida, pero aun así produce una.

#### 2. Software: cuatro pasos

Los pasos por dispositivo están en la reference design page, donde responder a unas pocas preguntas sobre el sitio también te da el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga 🖱️</font></span></strong>
    </a>
</div><br />


1. **Elige una configuración**: el configurador pregunta qué hay en la pared y dónde va el host, y devuelve uno de los tres paquetes.
2. **Instala el paquete**: los paquetes de Orin y Hailo despliegan el detector y el servicio de alarmas juntos. El paquete de reCamera no instala nada para la detección; el servicio de alarmas se levanta manualmente en un gateway que tú aportas.
3. **Rellena la configuración**: zonas y sus `no_person_timeout` / `no_motion_timeout`, las ventanas de la máquina de estados, la URL del webhook y el nombre del dispositivo que forma el primer segmento del topic. Las zonas se dibujan directamente sobre la imagen y surten efecto al guardar:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="Dibujar una zona en la vista en vivo; sigue en su sitio después de guardar y recargar"/>
</div>

La página de configuración muestra la vista en vivo de esa habitación a la izquierda y los dos timeouts de la zona a la derecha. Cuando la cámara está sin conexión, la vista vuelve a la última captura y la configuración sigue siendo editable.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="Página de configuración de zona: vista en vivo a la izquierda, timeouts de sin-persona y sin-movimiento a la derecha"/>
</div>
4. **Verifica**: lanza una alarma de prueba y observa que se completa: la alarma aparece en la consola, se registra una acción del operador asociada a ella y el endpoint del webhook recibe un POST con una clave de idempotencia. Abajo, una alarma inyectada pasa de aparecer a confirmada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="Una alarma de caída inyectada aparece en la consola, entra en la ventana del operador y pasa a notificada una vez confirmada"/>
</div>

El estado del detector y del servicio en el propio host está en la consola del dispositivo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="Consola del dispositivo en el host de alarmas: estado de ejecución del detector y del servicio de alarmas"/>
</div>

<!-- TODO image: on-site installation photo (camera mounted in a room) — needs a field shoot -->

El tiempo estimado es de **45 minutos**, con dificultad **intermedia**. El paquete de Orin es el más largo porque el primer despliegue construye un motor TensorRT en el dispositivo.

:::caution[La imagen del servicio de alarmas aún no se ha publicado]
A fecha del empaquetado solo existe como una build local a partir del `docker/Dockerfile` del proyecto upstream. Compílala y vuelve a etiquetarla, o súbela, antes de que un despliegue en Orin o Hailo pueda tener éxito. Los digests de la imagen del detector están registrados como pendientes en `eldercare-alarm/release/PINNING.md`.
:::

### Cómo conectarlo a tu propio sistema

El servicio de alarmas es lo único con lo que te integras, y se ejecuta en el host de alarmas. Tres vías de entrada, según lo que ya tengas:

- **Un sistema de llamada de enfermería o un servicio de paginación**: usa el webhook. Un POST por cada alarma confirmada, que lleva el id de la alarma, tipo, zona, id de flujo, marca de tiempo y operador. Haz la desduplicación con la clave de idempotencia, no con la marca de tiempo.
- **Un sitio basado en MQTT**: activa el bus de alarmas y suscríbete a `eldercare/alarm/<zone-id>`. La misma carga útil que el webhook. Está desactivado por defecto.
- **Tu propio panel o sistema de registros**: haz polling o lee `GET /api/alarms` en HTTP 8080 para obtener los registros completos de alarmas, incluido el historial de estados y el operador en cada una.

**Nombres.** `<device-name>` es el primer segmento del topic de resultados del detector y tú lo defines en el formulario de despliegue. Ponle nombre por habitación, planta o sitio para que varios dispositivos en un mismo broker sigan siendo distinguibles. `stream_id` se lee de la carga útil del mensaje y nunca se extrae del topic, de modo que una reescritura del broker o un prefijo de bridge no pueden redirigir una zona en silencio.

#### Los topics y cargas útiles completos

| Topic / puerto | Carga útil | Predeterminado |
|---|---|---|
| HTTP 8080 `GET /api/alarms`, página en `/` | Registros de alarmas: `id`, `kind`, `zone_id`, `stream_id`, `state`, `event_timestamp`, `operator`. La misma página sirve para confirmar y descartar | Activado |
| HTTP POST a tu URL de webhook | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` más una cabecera de idempotencia. Sin captura, sin vídeo | Activado una vez que se define la URL |
| MQTT 1883 `eldercare/alarm/<zone-id>` | Misma carga útil que el webhook | Desactivado |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | El flujo `fall_result_v1` que consume este servicio: `stream_id`, `person_count`, `fall_event`, bbox por persona | Entrada, publicada por el detector |

**El campo que más fácilmente se malusa es `state`.** `escalated` significa que se incumplió el plazo de notificación; no vuelve a `notified` cuando un reintento posterior tiene éxito. Un panel que trate `escalated` como un estado de fallo mostrará alarmas que, de hecho, sí se entregaron: ese es el propósito del campo.

El broker se ejecuta en el host de alarmas en los paquetes de Orin y Hailo, y en las cámaras o en el gateway en el paquete de reCamera. Nada en el camino necesita internet. El broker incluido permite conexiones anónimas para la puesta en marcha en una LAN de confianza; ponle credenciales y TLS antes de que el dispositivo sea accesible desde cualquier otro lugar.

### Para ingenieros: detalles de implementación

El servicio de alarmas es el propio código del proyecto upstream; el detector que tiene debajo es EdgeFallKit, consumido solo a través de su contrato de salida publicado.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong>
    </a>
</div><br />

#### Una capa de decisión, tres runtimes por debajo

La lógica de alarmas es idéntica en los tres paquetes: misma máquina de estados, mismo esquema SQLite, misma cola de entrega. Lo que cambia es dónde se ejecuta el detector y qué lo ejecuta.

| Host de alarmas | Ubicación del detector | Modelo de pose | Runtime | Entrega del modelo |
|---|---|---|---|---|
| reComputer J30 (Orin Nano 8GB) | Mismo host | YOLO11s-Pose | TensorRT | Motor construido en el dispositivo durante el primer despliegue |
| reComputer J40 (Orin NX 16GB) | Mismo host | YOLO11m-Pose | TensorRT | Motor construido en el dispositivo durante el primer despliegue |
| reComputer R2000 Serie industrial (R2035-12) | Mismo host | YOLOv8s-Pose | HailoRT 4.21, ruta crítica nativa en C++ | HEF precompilado descargado, no construido en el dispositivo |
| Gateway que tú aportas | En las cámaras reCamera | Lo que sea que el detector de App Center de la cámara incluya | NPU de la cámara | No gestionado por este paquete |

Restricciones de plataforma que conviene conocer antes de comprometerte:

- **Hailo está bloqueado a nivel de ABI en HailoRT 4.21**: plugin, biblioteca de usuario y driver se mueven juntos, y ningún otro proceso puede usar el acelerador.
- **El detector Jetson debe publicar frames vacíos.** Su valor predeterminado es no enviar nada cuando no hay nadie en la vista, lo que deja sin entrada al timeout de `no_person`. El paquete de Orin establece `publish_empty_frames: true`; si sustituyes la configuración de detector incluida por la propia del dispositivo, vuelve a activarlo. El runtime de Hailo no tiene tal interruptor y no lo necesita.
- **Confirma las formas exactas de topic y carga útil de reCamera en tu propio dispositivo**, junto con el comportamiento de publicación por frame de Hailo y la anulación de Jetson mencionada arriba.

#### La máquina de estados: por qué un evento no es una notificación

Un `fall_event` en bruto no es una alarma. La capa entre ambos es lo que hace que la salida sea defendible.

| Etapa | Disparador | Valor configurado |
|---|---|---|
| Ventana de evidencia | Se abre la alarma, se recopilan más frames del detector antes de pedir nada a nadie | `statemachine.evidence_sec` 5.0 |
| Ventana del operador | La consola muestra la alarma y espera confirmación o descarte | `statemachine.confirm_window_sec` 60.0 |
| Comportamiento ante timeout | Nadie respondió dentro de la ventana del operador | `statemachine.confirm_timeout_action` — por defecto se trata como real y se notifica |
| Plazo de notificación | La alarma confirmada debe entregarse dentro de este plazo o se escala | `notify_deadline_sec` 5.0 |
| Reintento | Las alarmas `escalated` siguen reintentando y permanecen en `escalated` | `retry_interval_sec` 30.0 |
| Zona: vacía | `person_count` se mantiene en 0 más allá del timeout de la zona | `no_person_timeout`, por zona |
| Zona: sin movimiento | El desplazamiento del centro del bbox rastreado se mantiene por debajo del umbral más allá del timeout de la zona | `no_motion_timeout` por zona, `motion_threshold` 0.02 normalizado |

**La compuerta necesaria es la clave de idempotencia**, no ninguna de las ventanas. Es `zone:kind:event_timestamp:global_event_id`, y tanto la tabla de alarmas como la tabla de notificaciones llevan índices únicos sobre ella. Si la quitas, un flujo de eventos reproducido genera alarmas duplicadas y entregas duplicadas; cualquier otro parámetro de la tabla anterior solo cambia el tiempo.

La retención es de 90 días para eventos, transiciones de estado, operadores y acuses de entrega; 7 días con purga diaria para medios, si alguna vez se habilitan los medios.

#### Comprobación por voz (opcional, desactivada)

Cuando está activada, una alarma de caída lanzada hace que el servicio pronuncie un mensaje en la habitación y escuche durante unos segundos, **en paralelo con** la ventana de evidencia en lugar de después de ella. La asimetría es deliberada: una llamada de ayuda, ninguna respuesta o una respuesta ilegible confirman la alarma inmediatamente y omiten el resto de la ventana del operador, mientras que "I'm fine" *no* cierra la alarma por defecto: la marca para revisión y deja que continúe la temporización normal. Un "I'm fine" mal oído suprimiría una caída real; una alarma confirmada que nadie necesitaba le cuesta al operador unos segundos.

El hardware de audio es un micrófono y altavoz USB en la caja de cómputo de la LAN más una instancia de OpenVoiceStream para TTS y ASR en streaming. Las cámaras no son la ruta de audio: ningún modelo de reCamera tiene un micrófono utilizable confirmado, y la SG2002 no puede alojar ASR local en absoluto.

**Privacidad.** El audio nunca se escribe en disco. El PCM en bruto vive en memoria durante una ventana de escucha y se libera cuando se produce el veredicto. Lo que se persiste es el veredicto, la confianza, la latencia y el texto transcrito; `store_transcript: false` descarta también el texto.

### Apéndice: datos medidos {#appendix-measured-data}

Esta sección es para quien quiera comprobar los números; omitirla no afecta al despliegue. **Nada de lo que aparece aquí constituye una certificación médica ni de seguridad.**

#### La ruta de alarma, medida con reproducción local {#alarm-path-measured}

Todo en esta tabla se midió en un portátil con un reproductor sustituyendo a las cámaras — **reproducción local, no un dispositivo**.

| Métrica | Valor | Condiciones | Registro de origen |
|---|---:|---|---|
| Latencia de alerta, de la marca de tiempo del evento al envío de la notificación | P50 2061 ms / P95 2093 ms | 5 reproducciones de caídas, 15 FPS × 12 s cada una, 1 s de evidencia + 1 s de auto-confirmación, una sola zona, un solo flujo, webhook en loopback | `boundary.alert_latency.yaml` |
| Retraso de la detección de ausencia de persona respecto al tiempo de espera configurado | P50 65 ms / P95 77 ms de retraso | 3 reproducciones, 10 FPS × 11 s, tiempo de espera de 5 s, tick de 0.1 s, en proceso, sin broker | `boundary.inactivity.yaml` |
| Recuperación tras caída del servicio, entregas únicas correctas sobre las en cola | 3 de 3, 0 duplicados, primera entrega 96 ms después de la recuperación | Endpoint de webhook devolviendo 503 durante 4 s, 3 alarmas en cola, intervalo de reintento de 2 s | `boundary.offline_recovery.yaml` |
| Falsas alarmas | 0 en 0.02 horas-cámara | 72 s de reproducción en silencio | No es una tasa: la ejecución prevista es de 24 h |

**Cómo se midió**

- Fecha 2026-09-05, directorio de ejecución `evaluation/runs/2026-09-05-smoke/` en el proyecto eldercare-alarm. Salidas en bruto bajo `raw/`, condiciones en `conditions.yaml`, un `boundary.<metric>.yaml` por fila.
- Host: MacBook, macOS 15 (Darwin 25.5.0), arm64. Red de loopback. Sin contenedor: el servicio se ejecutó directamente.
- Los scripts controlan el `AlarmService` real — máquina de estados real, SQLite real, webhook HTTP real — con solo la cámara sustituida por un reproductor. Por tanto, las cifras describen la ruta de alarma y **excluyen el tiempo de inferencia y cualquier red entre máquinas**.
- Las ventanas de la máquina de estados se acortaron para la ejecución: 1 s de evidencia + 1 s de auto-confirmación en lugar de los 5 s + 60 s distribuidos. Por tanto, la latencia de alerta es una propiedad de esa configuración, no de un sitio: con los valores por defecto la misma ruta tarda algo más de un minuto, por diseño y no como sobrecarga.
- Cada `boundary.*.yaml` tiene valores solo en el nivel `stable`. `degrading` y `failure` son `null`: nada se cargó hasta el punto de degradación, así que no se encontró ningún límite.
- `reproduced_by: null` — una persona, una ejecución, no reproducido de forma independiente.

La latencia de alerta es esencialmente la suma de las dos ventanas configuradas más unos 60 ms de envío. Lee la fila de falsas alarmas por lo que es: 72 segundos de silencio, listados para que no se puedan citar como una tasa.

#### Una sesión de dispositivo, no un sitio

El 2026-09-06 el bucle se cerró una vez en una reCamera One estándar (no PoE) sobre USB-RNDIS: tramas MQTT reales de `fall-detection`, una alarma de caída inyectada y una alarma real de 60 s sin actividad llegaron ambas a un webhook a través del broker mosquitto propio del dispositivo. La latencia de alerta en las primeras 5 de 10 pruebas inyectadas fue de **P50 2487 ms / P95 2751 ms**; a partir de la sexta, el propio límite de velocidad del notificador (5 por 10 minutos) detuvo silenciosamente más envíos — por diseño, no por fallo. La ruta de red directa fue interceptada por una herramienta de red local, así que el tráfico pasó por un túnel SSH; eso es un artefacto del entorno del host, no un problema del dispositivo. No se intentó la recuperación tras desconexión USB. Registro: `eldercare-alarm/evaluation/runs/2026-09-06-recamera-one/results.md`.

Esta es una sesión de laboratorio en un solo dispositivo. Es evidencia de que la ruta funciona de extremo a extremo; no es una caracterización de rendimiento y no dice nada sobre los paquetes de Orin y Hailo.

#### Una ejecución con Hailo-8 con inferencia real en el bucle

El 2026-09-08 el paquete Hailo se ejecutó de extremo a extremo una vez en un banco Raspberry Pi 5 + Hailo-8 M.2 (nombrado en esta página como reComputer R2000 Serie, R2035-12, Hailo-8). El contenedor `fall-detection` ejecutó inferencia real con el HEF oficial YOLOv8s-Pose sobre HailoRT 4.21.0, alimentado por una reproducción RTSP de GMDCSA-24 `subject-4/Fall/01.mp4` (640×640, 15 FPS, 4.68 s, en bucle); el servicio de alarma entregó a un sumidero HTTP mínimo en el mismo dispositivo.

| Métrica | Valor | Condiciones | Registro de origen |
|---|---:|---|---|
| De la caída al webhook recibido, inferencia real de Hailo-8 en el bucle | P50 2830 ms / P95 3061 ms (mín 2102 ms) | 10 alarmas independientes `kind=fall` de un solo clip en bucle; 1 s de evidencia + 1 s de auto-confirmación + 2 s de rearme; una sola zona, un solo flujo; sumidero en el mismo dispositivo, así que sin reloj entre máquinas | `eldercare-alarm/evaluation/runs/2026-09-08-harvest-pi-acceptance/results.md`, `boundary.hailo_alarm.yaml` |

- La latencia es el tiempo de llegada del webhook en reloj de pared menos `payload.event_timestamp_ms`, la misma definición que `evaluation/measure_alert_latency.py`. Las 10 alarmas se completaron dentro de `notify_deadline_sec` (5 s); ninguna entró en la cola de reintentos.
- Las ventanas se acortaron respecto a los 5 s / 60 s / 120 s distribuidos. Con los valores por defecto la misma ruta tiene un mínimo de unos 65 s; eso no se midió.
- Desplegado a mano sobre SSH, no mediante el instalador, y se usó el broker existente del dispositivo en el puerto 1883 en lugar del incluido.
- Las alarmas llegaron en ráfagas: 5 en unos 45 s, luego unos 9 minutos sin ninguna, luego 5 en unos 40 s. No se localizó la causa.

#### La precisión de detección es la del proyecto base

Este diseño no detecta nada por sí mismo, así que su precisión es la que consiga el detector EdgeFallKit subyacente. Esas cifras — GMDCSA-24 v2.1, divididas por sujeto, Sujeto 4 reservado leído una vez, 27 clips — se publican en el diseño de referencia de Fall Detection, donde la precisión congelada por plataforma va de **74.1% a 88.9%** y la latencia media de alerta de **1.22 s a 1.75 s**. Cítalas como datos base con sus condiciones adjuntas. No se vuelven a medir aquí, y la capa de alarma añade sus propias ventanas de confirmación por encima de esa latencia de detección.

#### Lo que no se ha mostrado en absoluto

- **Confirma en tu propio dispositivo**: la anulación Jetson `publish_empty_frames`, el comportamiento de publicación por fotograma de Hailo y las formas exactas de topic y payload de reCamera.
- **"Admite más flujos" es una afirmación a nivel de paquete** de la descripción upstream, no una capacidad medida: dimensiona con tu propia ejecución.
- **La tasa de falsas alarmas proviene de tu propio sitio**; la ejecución prevista son 24 horas de silencio.
- **Sin límite.** Nada se cargó hasta el punto de degradación, así que los niveles `degrading` y `failure` de cada archivo de límites son `null`.

Trata cada despliegue como un ejercicio de puesta en servicio hasta que hayas visto completar una alarma real en tu propio sitio.

#### Alcance de las cifras anteriores

- **La ruta de alarma**: máquina de estados, SQLite, entrega por webhook y recuperación tras caída del servicio: medida con reproducción local con un reproductor sustituyendo a las cámaras, no en un dispositivo.
- **Un único bucle cerrado con reCamera One**: una sesión de laboratorio, 2026-09-06, no un sitio.
- **Precisión de detección**: es la cifra del proyecto base EdgeFallKit, no de este diseño.
- **Falsas alarmas**: 0 en 0.02 horas-cámara (72 s de reproducción en silencio). La ejecución prevista son 24 h de silencio; ejecútala en tu propio sitio antes de citar una tasa.
- **Robustez ante oscurecimiento y oclusión**: el script existe y necesita clips GMDCSA más inferencia en el dispositivo para ejecutarse.
- **Una única ejecución con Hailo-8**: 2026-09-08, un dispositivo de banco, un clip reproducido, ventanas de confirmación acortadas; no un sitio.
- **Los tres paquetes en su propio hardware**: los tres dispositivos objetivo estaban desconectados en la fecha de medición 2026-09-05; mídelo en tus propias unidades.

## Fuentes de datos y recursos

- **GMDCSA-24 v2.1**: tanto la evaluación de precisión como las imágenes de demostración de esta página proceden de este conjunto de datos, [ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos), licencia MIT. Los rostros de las imágenes de demostración se han pixelado y difuminado con Gauss: la licencia cubre los derechos de autor del autor, no los derechos de imagen de los sujetos.
- **RealBiomFall**: el subconjunto de prueba usado para la prueba de generalización externa, 34 clips, todas caídas, así que solo se informan el recall y la latencia.
- Ninguno de los conjuntos de datos se distribuye con el repositorio `edgefallkit`: obténlos tú mismo para reproducir la evaluación.
- El diagrama de colocación de la cámara está dibujado internamente para esta solución.
