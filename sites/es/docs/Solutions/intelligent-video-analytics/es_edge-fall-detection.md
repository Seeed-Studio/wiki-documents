---
description: Creación de un sistema local de alerta de caídas para cuidado de personas mayores, residencias asistidas y atención domiciliaria - qué dispositivos necesitas, cómo desplegarlo, qué interfaces expone y datos medidos en siete dispositivos
title: 'Detección de caídas con IA en el dispositivo: creación, despliegue y resultados medidos'
keywords:
  - sistema de detección de caídas
  - alerta de caída
  - alerta de caída en residencia
  - IA en el dispositivo
  - estimación de pose
  - detección de caídas
  - IA en el borde
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Solo alerta asistencial. No es un dispositivo médico ni de seguridad vital certificado, y no sustituye las rondas presenciales.
:::

## Qué hace esta solución

Instala una cámara en la habitación. Cuando alguien se cae, un mensaje llega en segundos a quien tenga que verlo: el puesto de enfermería, el Home Assistant de un familiar, el NVR de recepción o tu propio sistema. Diseñado para entornos de habitación fija: residencias de mayores, centros de rehabilitación, atención domiciliaria, dormitorios de un solo ocupante. Medido en un conjunto de datos público: 95,8 % de recall de caídas y 1,4 s de media desde la caída hasta que el mensaje sale (detalles en "Rendimiento y datos medidos" más abajo).

- Implementación de código abierto: [github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona localmente, sin vídeo en la nube</h3>
                <p>La detección, decisión y mensajería se ejecutan todas en el dispositivo local; solo un mensaje de texto de unos pocos cientos de bytes cruza la red. Las alertas siguen funcionando sin conexión y no hay suscripción en la nube por cámara.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona nada más sacarlo de la caja</h3>
                <p>Instala el paquete de la aplicación para tu dispositivo y las alertas empiezan. El modelo, el runtime y los umbrales de decisión vienen fijados en el paquete; no se necesita entrenamiento ni ajuste.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Usa las cámaras y sistemas que ya tienes</h3>
                <p>Las cámaras IP existentes se conectan por RTSP sin cambios en la cámara. Las alertas salen por MQTT: Home Assistant las recoge mediante auto-descubrimiento, y un NVR o sistema de llamada a enfermería se suscribe a un único tema.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto</h3>
                <p>La conversión de modelos por plataforma, la orquestación con Docker y los scripts de entrenamiento de pesos de decisión están todos en el repositorio, para que puedas reentrenar los pesos de decisión con grabaciones de tu propio sitio.</p>
            </div>
        </li>
    </ul>
</div>

### Demostración en vivo

Lo que el dispositivo realmente genera: un esqueleto superpuesto sobre la persona, un recuadro etiquetado con el id de seguimiento de esa persona y su estado actual, y en la parte superior derecha, cuántas de las tres características de decisión se cumplen en ese momento.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="Una caída confirmada en reComputer J30 / J40: el esqueleto, el estado de seguimiento y el recuento de evidencias provienen del mensaje MQTT en vivo"/>
</div>

`#12 FALLEN` es el id de seguimiento y el estado actual de esa persona; `Evidence: 2/3` en la parte superior izquierda significa que se cumplen dos de las tres características de decisión. La transición de estado animada está en [los pasos de configuración más abajo](#paso-2-instalar-el-software).

### Panel de alarmas (componente opcional)

El panel de alarmas viene incluido en la pila de compose en los presets reComputer J30 / J40, RK y R2000. En los dos presets de reCamera es un componente opcional en un host separado.

Una vez que el detector de caídas publica eventos, el panel de alarmas gestiona lo que sigue: cada habitación es una zona con sus propias reglas, se abre una alarma, alguien de guardia la confirma o descarta en una consola de una sola página, y la alarma confirmada sale como un webhook o un mensaje MQTT con el nombre del operador. Diseñado para residencias asistidas, atención domiciliaria y cualquier sitio donde cada alarma tenga que poder rastrearse hasta una persona después.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Tres tipos de alarma, decididos por zona</h3>
                <p>Un evento de caída desde el detector; una zona vacía más allá de su <code>no_person_timeout</code>; una persona cuyo centro de bbox no se ha movido más allá de su <code>no_motion_timeout</code>. Un baño y un dormitorio tienen tiempos de espera distintos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>El operador confirma antes de notificar</h3>
                <p>Ventana de evidencias de 5 s, luego 60 s para un operador. Confirmar y descartar se registran ambos con la persona que pulsó.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Entrega que puedes auditar</h3>
                <p>Una alarma confirmada que no se notifica en 5 s pasa a escalada y reintenta cada 30 s. Medido en reproducción local: 3 de 3 alarmas en cola recuperadas tras una caída de 4 s, 0 duplicados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Sin vídeo en la notificación</h3>
                <p>Id de alarma, tipo, zona, id de flujo, marca de tiempo, operador, clave de idempotencia. La captura de instantáneas es un interruptor que está apagado por defecto.</p>
            </div>
        </li>
    </ul>
</div>

#### Lo que muestra la consola

El operador trabaja solo desde la consola de confirmación: la lista de alarmas con el estado actual de cada una, el veredicto de comprobación por voz cuando esa opción está activada, y los botones de confirmar/descartar que escriben el nombre del operador en el registro de auditoría. El servicio de alarmas sirve la consola en HTTP 8080.

Las capturas de pantalla de la consola de abajo usan **datos reproducidos**: datos sintéticos de bbox y seguimiento, sin imágenes de cámara y sin personas en cuadro.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="Inicio de la consola de confirmación: lista de habitaciones a la izquierda, flujo de alarmas a la derecha, cada alarma con tipo, zona y estado actual"/>
</div>

Al abrir una alarma se ve todo su historial: hora del evento, transiciones de estado y quién pulsó confirmar.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="Detalle de una sola habitación: configuración de zona, ocupación actual e historial de alarmas para esa habitación"/>
</div>

## Qué hardware necesitas

Hay dos elementos en el sitio: la cámara que produce la imagen y el host que ejecuta la detección.

**① Cámara**: ¿ya tienes una cámara IP? Úsala tal cual por RTSP; no hace falta cambiar nada en la cámara. Si no, la reCamera 2002 / Pro combina cámara y cómputo en una sola unidad: conéctala y está lista.

**② Host del detector** — El dispositivo que ejecuta la detección y la toma de decisiones; también determina cuántos streams puedes ejecutar y cuánto cuesta. Con una cámara existente, esto es una caja separada; con reCamera, la cámara es el host del detector.

| | Host del detector | Streams por unidad | Cuándo elegirlo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Cámara y cómputo en una sola unidad | 1 | Una habitación, la forma más rápida de hacer funcionar una única alerta |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | Ya estandarizado en placas Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | Necesitas una sola caja para manejar muchos streams |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | Varias habitaciones y quieres margen para crecer |

Los recuentos de streams se derivan del rendimiento medido del acelerador (consulta "Stream counts" más abajo).

Más allá de eso, todo lo que necesitas es una red: el dispositivo y el receptor solo tienen que estar en la misma LAN; no se requiere acceso a internet.

### Host del panel de alarmas

Tres cosas: lo que produce los eventos de detección, un host que decide qué se convierte en alarma y lo que recibe la notificación. El tercero es tu propio sistema, así que la elección en realidad es sobre los dos primeros.

**① La fuente de eventos** — o bien cámaras RTSP que ya posees, en cuyo caso el detector se despliega en el host de alarmas y apunta a tu stream, o cámaras reCamera que ya ejecutan el detector por sí mismas, en cuyo caso nada cambia en la detección.

**② El host de la alarma** — esta es la caja que ejecuta las zonas, los timeouts, la máquina de estados, el almacén de auditoría SQLite, la página de confirmación y la cola de entrega. En dos de los tres paquetes también ejecuta el detector.

| | Host de la alarma | Dónde se ejecuta el detector | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Detector, servicio de alarmas, broker y consola en un solo Jetson | En esta caja, motor TensorRT construido en el primer despliegue | Las cámaras existen y el sitio aún no tiene gateway. Acepta más streams de los tres paquetes |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>La misma pila, modelo de pose más grande | En esta caja, YOLO11m en lugar de YOLO11s | Más habitaciones de las que un J3011 puede vigilar, o se quiere un modelo de pose más grande. Mismo paquete, una opción diferente en el formulario de despliegue |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Carcasa industrial sin ventilador | En esta caja, HEF precompilado | El host va en un armario o un montante: sin ventilador, amplio rango de temperatura, montaje en carril DIN o en pared |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Cámara AI todo en uno; el servicio de alarmas se instala en una máquina que ya tienes | En la cámara | Aún no hay cámaras, o las cámaras ya están detectando. El servicio de alarmas se levanta a mano: el formulario de despliegue no tiene clase de dispositivo para un gateway que tú aportes |

Otros requisitos previos: un broker MQTT accesible en el puerto 1883 (los paquetes Orin y Hailo levantan uno; el paquete reCamera puede usar aquel al que las cámaras ya publican), una vista interior fija en los paquetes Orin y Hailo, y un endpoint de webhook o un suscriptor MQTT que reciba las notificaciones.

#### Comprobación por voz (opcional, desactivada por defecto)

Cuando está activada, una alarma de caída generada hace que el servicio pronuncie un mensaje en la habitación y escuche durante unos segundos, en paralelo con la ventana de evidencia. Una llamada de ayuda, ninguna respuesta o una respuesta ilegible confirman la alarma de inmediato; "I'm fine" no cierra la alarma por defecto, solo la marca para revisión.

Hardware necesario: un micrófono y altavoz USB en una caja de cómputo en la LAN, más una instancia de OpenVoiceStream para TTS y ASR en streaming. El audio no pasa por las cámaras: ninguno de los modelos reCamera tiene un micrófono utilizable confirmado, y la SG2002 no puede ejecutar ASR local. El audio nunca se escribe en disco; solo se conservan el veredicto, la confianza, la latencia y el texto transcrito, y `store_transcript: false` descarta también el texto.

## Cómo desplegar en el sitio

Dos pasos: primero coloca bien la cámara y luego instala el software.

### Paso 1: montar la cámara {#step-1-mount-the-camera}

:::tip[Requisitos de colocación]
Fija el soporte, a 2–3 m de la persona, de lado o en ángulo, con hombros y caderas visibles. La caída en sí tiene que ocurrir en cámara: si la persona ya está tumbada cuando el dispositivo se inicia, solo informa de la pose y no dispara una alerta. Los ángulos cenitales totalmente verticales, los planos generales de pasillos largos y el mobiliario que bloquea la mayor parte de la persona reducen notablemente la precisión.
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="Colocación de la cámara: un montaje lateral u oblicuo a 2–3 m funciona; tomas cenitales, planos generales y vistas ocluidas no funcionan"/>
</div>

### Paso 2: instalar el software — cuatro pasos {#step-2-install-the-software}

Las instrucciones paso a paso para cada dispositivo están en la página del diseño de referencia: allí elige una configuración para tu sitio y descarga el paquete de la app correspondiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga el paquete de la app 🖱️</font></span></strong>
    </a>
</div><br />

El flujo general:

1. **Elige una configuración** — Responde tres preguntas en la página del diseño de referencia (si tienes cámara, a qué distancia de la zona de caída, cuántos streams), y devuelve una combinación de dispositivos adecuada.
2. **Instala el paquete de la app** — Descarga el paquete para ese dispositivo e instálalo. El modelo, el runtime y los umbrales de decisión vienen fijados en el paquete — las mismas configuraciones evaluadas en los datos medidos más abajo — así que no hay entrenamiento ni ajuste que hacer.
3. **Rellena dos ajustes** — la dirección de la fuente de vídeo (omite esto con reCamera) y un nombre de dispositivo. El nombre del dispositivo es el primer segmento del topic del mensaje; ponle nombre por habitación o cama para que varios dispositivos en el mismo receptor nunca se sobrescriban entre sí. La captura de pantalla de abajo es la página de gestión de dispositivos en la plataforma de despliegue: elige "Embedded" y luego rellena la IP del dispositivo y el puerto ADB.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="Gestión de dispositivos → Embedded → reCamera Pro, expandido para rellenar dirección y puerto ADB"/>
</div>

4. **Comprueba la vista previa para confirmar el encuadre** — Una vez instalada, la app muestra un feed en vivo con un esqueleto y el estado superpuestos sobre la persona. Confirma que la cámara realmente ve lo que necesita antes de cablear las notificaciones. La captura de pantalla de abajo es la página de vista previa de reCamera Pro. **Las etiquetas de estado provienen de una reproducción, no de una ejecución medida**; las cifras medidas están en "Rendimiento y datos medidos".

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="La transición de estado de normal a caído, mostrada en la vista previa del App Center de reCamera Pro"/>
</div>

Desde la instalación hasta estar en ejecución: alrededor de media hora para reCamera. Jetson tarda más, porque el motor de inferencia tiene que construirse en el dispositivo la primera vez (461 segundos o más, medido).

### Panel de alarmas: zonas e instalación

Dos partes: coloca las cámaras donde las zonas funcionen y luego instala y configura.

#### 1. Cámaras y zonas

:::tip[Las zonas son rectángulos normalizados sobre el fotograma de la cámara]
Mover o reorientar una cámara invalida el diseño de zonas **sin error alguno**: el rectángulo sigue existiendo pero cubre otra parte de la habitación. Vuelve a comprobar cada zona después de cualquier cambio físico en una cámara.
:::

En los paquetes Orin y Hailo también necesitas una vista interior fija donde una persona permanezca visible a lo largo de la trayectoria de caída esperada. El detector es el mismo detector EdgeFallKit, con los mismos requisitos de colocación que arriba (una vista lateral o desde una esquina a 2–3 m, con hombros y caderas visibles).

Dos puntos al dibujar zonas, o el sitio producirá alarmas adicionales:

- **`no_motion` se activará durante el sueño** a menos que la zona excluya la cama o el timeout sea más largo que una siesta normal. El movimiento es el desplazamiento del centro del bbox de una persona rastreada por encima de `motion_threshold`, no flujo óptico ni velocidad de puntos clave, por lo que los movimientos pequeños bajo una manta no cuentan.
- **La oclusión genera un `no_person` falso.** Una zona solo se rearma después de que la persona vuelve a verse, así que una oclusión produce una sola alarma.

#### 2. Software: cuatro pasos

Los pasos por dispositivo están en la misma página de diseño de referencia anterior, donde puedes elegir una configuración y descargar el paquete de aplicación correspondiente.

1. **Elige una configuración**: el configurador pregunta qué hay en la pared y dónde va el host, y devuelve uno de los tres paquetes.
2. **Instala el paquete**: los paquetes de Orin y Hailo despliegan el detector y el servicio de alarmas juntos. El paquete de reCamera no instala nada para la detección; el servicio de alarmas se levanta manualmente en un gateway que tú proporcionas.
3. **Rellena la configuración**: zonas y sus `no_person_timeout` / `no_motion_timeout`, las ventanas de la máquina de estados, la URL del webhook y el nombre del dispositivo que forma el primer segmento del tópico. Las zonas se dibujan directamente sobre la imagen y surten efecto al guardar:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="Dibujar una zona en la vista en vivo; sigue en su lugar después de guardar y recargar"/>
</div>

La página de configuración muestra la vista en vivo de esa habitación a la izquierda y los dos timeouts de la zona a la derecha. Cuando la cámara está sin conexión, la vista vuelve a la última captura y la configuración sigue siendo editable.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="Página de configuración de zona: vista en vivo a la izquierda, timeouts de no-persona y no-movimiento a la derecha"/>
</div>
4. **Verifica**: genera una alarma de prueba y obsérvala completarse: la alarma aparece en la consola, se registra una acción del operador asociada a ella y el endpoint del webhook recibe un POST con una clave de idempotencia. A continuación, una alarma inyectada pasa de aparecer a confirmada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="Una alarma de caída inyectada aparece en la consola, entra en la ventana del operador y pasa a notificada una vez confirmada"/>
</div>

El estado del detector y del servicio en el propio host está en la consola del dispositivo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="Consola del dispositivo en el host de alarmas: estado de ejecución del detector y del servicio de alarmas"/>
</div>

<!-- TODO imagen: foto de la instalación en el sitio (cámara montada en una habitación) — necesita una sesión de fotos en campo -->

El tiempo estimado es de **45 minutos**, con dificultad **intermedia**. El paquete de Orin es el más largo porque el primer despliegue construye un motor TensorRT en el dispositivo.

## Interfaces que expone

El dispositivo publica eventos en el broker MQTT que se ejecuta en él mismo (puerto 1883); tu sistema solo tiene que suscribirse. Tres formas de conectarse:

- **Home Assistant**: no se necesita configuración. El dispositivo se anuncia mediante el protocolo de auto-descubrimiento y aparecen directamente en HA cuatro entidades: un sensor de caídas, estado actual, id de evento y presencia; conéctalos a tus automatizaciones.
- **Sistemas NVR / de llamada a enfermería**: suscríbete a `<device>/fall-detection/results`. Si lo único que te importa es "¿alguien se ha caído?", observa `fall_event` en el payload: solo se establece una vez, en el momento en que el estado entra en "fallen", así que una caída lo dispara una vez, no repetidamente mientras la persona esté en el suelo.
- **Sistema personalizado / API**: suscríbete de la misma manera; el payload también incluye `person_count`, `fallen_count` y, para cada persona, su `track_id` / `state` / `bbox`, suficiente para construir tu propio panel. reCamera además expone RTSP 8554 `/live0` para la transmisión en vivo.

`<device>` es el nombre que rellenaste antes: asígnalo por habitación o cama para que varios dispositivos en el mismo broker nunca se sobrescriban entre sí.

### Tópicos y payload completos

| Tópico / puerto | Payload | Retenido |
|---|---|---|
| `<device>/fall-detection/results` (multi-stream: `.../results/{stream_id}`) | Un JSON por frame: `state`, `fall_detected`, `fall_event`, `event_id`, `person_count`, `fallen_count`, más `track_id` / `state` / `bbox` para cada entrada en `persons[]` | No |
| `<device>/fall-detection/status` | `online` / `offline`, publicado mediante el último testamento de MQTT | Sí |
| `homeassistant/` | Configuración de auto-descubrimiento: sensor de caídas, estado, id de evento, presencia | Sí |
| RTSP 8554 `/live0` (reCamera) | Vídeo en vivo para vista previa y NVR | — |

El id de stream también se escribe en el payload, de modo que los consumidores posteriores no tienen que analizar el tópico para conocer la fuente.

El broker también se ejecuta en el host del detector: reCamera usa el suyo integrado, y cada configuración de reComputer levanta `eclipse-mosquitto:2` junto al detector, sirviendo el puerto 1883 desde el host. No se necesita un broker externo y nada en la cadena necesita acceso a internet.

### Interfaces del panel de alarmas

El servicio de alarmas es lo único con lo que te integras y se ejecuta en el host de alarmas. Tres formas de entrar, según lo que ya tengas:

- **Un sistema de llamada a enfermería o un servicio de paginación**: usa el webhook. Un POST por alarma confirmada, que incluye el id de la alarma, tipo, zona, id de stream, marca de tiempo y operador. Haz la desduplicación con la clave de idempotencia, no con la marca de tiempo.
- **Un sitio basado en MQTT**: enciende el bus de alarmas y suscríbete a `eldercare/alarm/<zone-id>`. Mismo payload que el webhook. Está desactivado por defecto.
- **Tu propio panel o sistema de registros**: haz polling o lee `GET /api/alarms` en HTTP 8080 para obtener los registros completos de alarmas, incluido el historial de estados y el operador en cada uno.

La clave de idempotencia es `zone:kind:event_timestamp:global_event_id`. `stream_id` se lee del payload del mensaje y nunca se extrae del tópico, por lo que una reescritura del broker o un prefijo de bridge no pueden redirigir silenciosamente una zona. Los registros de alarmas (eventos, transiciones de estado, operadores y acuses de entrega) se conservan durante 90 días.

#### Tópicos y payloads completos

| Tópico / puerto | Payload | Predeterminado |
|---|---|---|
| HTTP 8080 `GET /api/alarms`, página en `/` | Registros de alarmas: `id`, `kind`, `zone_id`, `stream_id`, `state`, `event_timestamp`, `operator`. La misma página sirve para confirmar y descartar | Activado |
| HTTP POST a tu URL de webhook | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` más una cabecera de idempotencia. Sin captura, sin vídeo | Activado una vez que se establece la URL |
| MQTT 1883 `eldercare/alarm/<zone-id>` | Mismo payload que el webhook | Desactivado |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | El stream `fall_result_v1` que consume este servicio: `stream_id`, `person_count`, `fall_event`, bbox por persona | Entrada, publicado por el detector |

**El campo `state`**: `escalated` significa que se perdió el plazo de notificación; no vuelve a `notified` cuando un reintento posterior tiene éxito. No muestres `escalated` como un fallo de entrega en un panel; solo significa que el plazo ha pasado.

El broker se ejecuta en el host de alarmas en los paquetes de Orin y Hailo, y en las cámaras o el gateway en el paquete de reCamera; nada en la ruta necesita internet. El broker incluido permite conexiones anónimas y está pensado para una LAN de confianza; añade credenciales y TLS antes de que el dispositivo sea accesible desde fuera de ella.

## Rendimiento y datos medidos {#appendix-measured-data}

Todo lo siguiente se mide en dispositivos frente a un conjunto de datos público. Los informes brutos por clip y los checksums están en el repositorio bajo [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation). El código fuente incluye conversión de modelos por plataforma, orquestación con Docker y scripts de entrenamiento de pesos de decisión.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Resultados de precisión

Promediado sobre seis configuraciones congeladas: **precisión 85,8%, recall de caídas 95,8%, especificidad 77,8%, F1 85,7%, latencia media de alerta 1,4 s**. Las configuraciones individuales quedan entre 81,5% y 88,9%.

Estas seis configuraciones son Jetson YOLO11s, Jetson YOLO11m, reCamera Pro, RK3576, RK3588 y Hailo-8, cada una con su propia configuración congelada. La línea base v0.2 de la reCamera 2002 (74,1% de precisión) se excluye del promedio: ejecuta una generación anterior de pesos temporales. Los detalles por configuración están en la [tabla unificada de precisión](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表) del repositorio.

Condiciones: conjunto de datos [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos) (MIT), dividido por sujeto; el Sujeto 4 reservado se evalúa una sola vez, 27 clips (12 caídas / 15 actividades de la vida diaria); todo el vídeo a 15 FPS; una alerta más de 0,5 s antes del inicio de caída anotado cuenta como falso positivo; cada plataforma reentrena y congela los pesos de decisión a partir de su propia salida de pose, sin nada compartido entre plataformas.

Reproducir: `platforms/jetson/tools/evaluate_videos.py` (el conjunto de datos no se distribuye con el repositorio: obténlo por tu cuenta).

**La precisión no diferencia los dispositivos**: en un conjunto de prueba de 27 clips, un clip son 3,7 puntos porcentuales, y RK3576, RK3588 y Hailo obtienen la misma puntuación (88,9%). El tamaño del modelo tampoco se correlaciona con la puntuación. Elige un dispositivo según el número de flujos, el hardware existente y la fuente de vídeo.

### Dispositivos probados

Siete dispositivos, cuatro aceleradores. "Extremo a extremo" significa que se ejecutó y puntuó en el conjunto de prueba toda la ruta desde la ingesta del flujo hasta una alerta; "velocidad de inferencia" significa que solo se midió la velocidad de detección.

| Dispositivo | Acelerador | Modelo distribuido | Extremo a extremo | Velocidad de inferencia |
|---|---|---|:-:|:-:|
| reCamera 2002 | NPU integrada | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | NPU integrada (RK) | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | NPU RK3576 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | NPU RK3588 | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Serie | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | GPU Orin Nano | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | GPU Orin NX | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

La latencia por fotograma por dispositivo, el rendimiento multi-flujo y las condiciones de prueba están en los [resultados de rendimiento detallados](#性能实测详表) más abajo.

### Resultados de rendimiento detallados {#性能实测详表}

#### Latencia por fotograma y rendimiento

El mismo modelo en diferentes dispositivos: **YOLO11n-Pose, entrada 640²**. Las cifras por fotograma son solo de inferencia en el acelerador (sin decodificación RTSP, sin postprocesado); el rendimiento agregado es la mayor tasa de fotogramas total medida entre 1 y 6 contextos concurrentes. FP16 e INT8 están en tablas separadas. Las filas de Hailo-8 se midieron en reComputer R2000 Serie + módulo Hailo-8 M.2 (26 TOPS).

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

**▲ La fila de Hailo usa el tamaño s: el tamaño n es más lento en este acelerador.** El directorio hailo8 del Model Zoo oficial v2.15 solo distribuye `yolov8s_pose` y `yolov8m_pose`, sin ningún modelo de pose tamaño n. Compilamos nosotros mismos un YOLO11n-Pose con Hailo Dataflow Compiler 3.31.0 (640², INT8, calibración GMDCSA de 64 fotogramas) y medimos **9,01 ms / 92,2 FPS** en la misma placa, frente a 6,87 ms / 393,9 FPS para el tamaño s: la latencia por fotograma es del mismo orden (+31%), pero el rendimiento difiere en 4,3×. El compilador dividió 11n en **3 contextos**, intercambiando pesos en cada fotograma; el modelo s del Model Zoo es de un solo contexto con pesos residentes. A 15 FPS por flujo, 92,2 FPS aún deja aproximadamente un margen de 6×; la diferencia solo afecta a la densidad multi-flujo. El resultado aplica a la compilación de este único HEF.

**Jetson INT8 usa motores calibrados y se lista por separado.** Las filas INT8 anteriores son todas YOLO11n; los motores Jetson INT8 calibrados existentes hasta ahora solo son para YOLOv8s / YOLOv8m-Pose (calibración de entropía en fotogramas GMDCSA — 64 para s, 494 para m — con retroceso a FP16 para capas que no tienen implementación INT8), así que no son el mismo modelo que en las otras plataformas:

| Plataforma | Modelo de pose | Precisión | Por fotograma | Agregado |
|---|---|---|---:|---:|
| reComputer J30 (Orin Nano Super) | YOLOv8s-Pose | INT8 | 3,75 ms | 266 FPS |
| reComputer J40 (Orin NX Super) | YOLOv8s-Pose | INT8 | 3,34 ms | 300 FPS |
| reComputer J30 (Orin Nano Super) | YOLOv8m-Pose | Mixta (neck + head FP16) | 8,11 ms | 123 FPS |
| reComputer J40 (Orin NX Super) | YOLOv8m-Pose | Mixta (neck + head FP16) | 7,18 ms | 139 FPS |

Condiciones: 640², batch 1, mediana de tres ejecuciones de 120 s, solo cómputo de GPU. YOLOv8s INT8 es 1,57× más rápido que FP16 en el mismo dispositivo. YOLOv8m totalmente INT8 pierde su salida de caída, de ahí la precisión mixta para m. Evaluación de despliegue en GMDCSA-24 Sujeto 4 (27 clips): YOLOv8s INT8 F1 66,7%, YOLOv8m precisión mixta 87,0%. Los presets siguen distribuyendo YOLO11s / YOLO11m FP16.

Reproducir: `tools/build_calibrated_int8.py`.

El INT8 de RK se calibró en 240 fotogramas GMDCSA; en fotogramas fuera del conjunto de calibración su recuento de detecciones por fotograma coincide exactamente con FP16, por lo que es desplegable.

#### Latencia del pipeline en fotogramas reales

Ambas tablas anteriores reciben **fotogramas sintéticos en blanco de 640** y miden solo la inferencia en el acelerador. Las imágenes reales son más lentas, porque cualquier cosa en el fotograma tiene que pasar por decodificación de raw-head, DFL, keypoints y NMS:

| Plataforma | Modelo de pose | Acelerador | Pipeline en fotograma real | Delta pre/post |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52,74 ms ◇ | 53,23 ms | 0,012 ms |
| reCamera Pro | YOLO11n INT8 | 35,2 ms ✦ | 36,6 ms | 1,4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69,6 ms | 70,8 ms | 1,2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54,4 ms | 54,8 ms | 0,4 ms |
| reComputer R2000 Serie (R2035-12, Hailo-8) | YOLOv8s INT8 | 6,9 ms | 8,77 ms | 1,9 ms |
| reComputer J30 Serie (J3011) | YOLO11n FP16 | 3,7 ms ◆ | 5,57 ms | 1,9 ms |
| reComputer J40 Serie (J4012) | YOLO11n FP16 | 3,3 ms ◆ | 5,18 ms | 1,9 ms |

"Pipeline" = inferencia + preprocesado + decodificación de raw-head / DFL / keypoints / NMS. **Excluye** decodificación RTSP, tracking, la MLP temporal y MQTT. La cifra de 5,18 ms de Orin NX proviene de 400 fotogramas medidos, los 5,57 ms de Orin Nano de 1359, y los 8,77 ms de Hailo de 1951 (de los cuales la inferencia hardware es 6,87 ms y la decodificación más NMS representan solo 0,052 ms).

- **◇ reCamera 2002 no puede separar una columna de "solo acelerador"**: expone un único temporizador cuyo alcance coincide exactamente con la definición de pipeline de esta tabla, así que 52,74 ms ya incluyen pre y postprocesado (250 fotogramas medidos, con y sin una persona en escena son casi idénticos).
- **✦ La fila de reCamera Pro se midió con relojes bloqueados** (NPU 950 MHz, CPU en modo performance). El governor por defecto `rknpu_ondemand` se midió estabilizándose en 800 MHz y 43,1 ms — una diferencia del 23% en la misma placa solo por el governor de frecuencia. RK3576 / RK3588 se midieron ejecutándose siempre en su escalón máximo y no se ven afectados.
- **◆ La columna Jetson es cómputo puro de GPU con `trtexec`** (sin copias al host), mientras que la columna RK es `rknnlite.inference()`; miden cosas distintas, así que compara entre plataformas usando la columna de pipeline. Por esa columna Jetson es aproximadamente 11× más rápido que RK3588 y aproximadamente 14× más rápido que RK3576.

Reproducir: [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation).

#### Número de flujos

"Flujos limitados por inferencia" = rendimiento agregado ÷ 15 FPS. Cuenta solo el acelerador y es un techo teórico. "Flujos recomendados" descuenta eso: el rendimiento extremo a extremo medido en RK alcanza solo el 28%–44% del techo de inferencia, porque la decodificación RTSP, el tracking, la máquina de estados y MQTT también consumen CPU y ancho de banda de memoria. Con otras cargas aún ejecutándose en la placa, el rendimiento extremo a extremo medido fue de unos 8,6 FPS en RK3588 y unos 4,9 FPS en RK3576.

### Runtimes y parámetros clave

Todas las plataformas ejecutan la misma familia de modelos de pose 640². Lo que cambia es el runtime y cómo llega el modelo al dispositivo:

| Host del detector | Modelo de pose | Precisión | Runtime | Entrega del modelo |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | NPU de la cámara | Instalado desde la consola como una app de cámara |
| reComputer J30 / J40 | YOLO11s (Orin Nano) / YOLO11m (Orin NX) | FP16 | TensorRT | El motor se **construye en el dispositivo** — ligado a esa arquitectura de GPU y versión de TensorRT, por lo que no puede distribuirse precompilado. Medido en Orin Nano: 461 s para YOLO11s |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` se distribuye por placa; un modelo compilado para RK3588 no cargará en RK3576 |
| reComputer R2000 Serie (R2035-12, Hailo-8) | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | HEF oficial precompilado, verificado contra un digest fijo |

El despliegue de Hailo está bloqueado a **HailoRT 4.21**: el plugin de GStreamer, la biblioteca de usuario y el driver de kernel deben coincidir todos, y ningún otro proceso puede tener el acelerador.

Parámetros que cambian el comportamiento del despliegue (valor distribuido por defecto entre paréntesis):

- `max_fps` (15): tasa de procesamiento por flujo; los recuentos de flujos anteriores se derivan de ella.
- `fall.temporal_confirmation_required` (true): entrar en "fallen" requiere confirmación del modelo temporal, el mecanismo principal que mantiene bajos los falsos positivos; si se pone en false, las características geométricas pueden confirmar una caída por sí solas.
- `cooldown_sec` (3.00): una caída cuenta una vez; `fall_event` solo se dispara al entrar en el estado de caída.

Panel de alarmas:

- `statemachine.evidence_sec` (5.0) / `statemachine.confirm_window_sec` (60.0): la ventana de evidencia y la ventana del operador; juntas fijan la mayor parte del tiempo desde la alarma hasta la notificación.
- `statemachine.confirm_timeout_action` (tratar como real y notificar): lo que ocurre cuando nadie responde dentro de la ventana del operador.
- `publish_empty_frames` (true en el paquete Orin): el detector Jetson publica fotogramas vacíos cuando no hay nadie en escena; sin ellos el timeout de `no_person` no recibe entrada. Vuelve a activarlo si sustituyes la configuración de detector distribuida por la propia del dispositivo; el runtime de Hailo no tiene tal interruptor y no lo necesita.

### Datos medidos del panel de alarmas {#alarm-path-measured}

El servicio de alarmas no hace detección por sí mismo; la precisión de detección está en "Resultados de precisión" más arriba. La latencia de alarma se suma a la latencia de detección (media por plataforma 1,22–1,75 s).

| Métrica | Valor | Condiciones |
|---|---:|---|
| Latencia de alerta, de la marca de tiempo del evento al envío de la notificación | P50 2061 ms / P95 2093 ms | Reproducción local, un reproductor sustituyendo a las cámaras, excluyendo inferencia y red entre máquinas; 5 reproducciones de caídas, 15 FPS × 12 s cada una; 1 s de evidencia + 1 s de autoconfirmación; una sola zona, un solo flujo, webhook de loopback |
| Retraso de detección de "sin persona" respecto al timeout configurado | P50 65 ms / P95 77 ms | Reproducción local, 3 ejecuciones, 10 FPS × 11 s, timeout de 5 s, tick de 0,1 s, sin broker |
| Recuperación tras caída, entregas únicas correctas sobre las en cola | 3 de 3, 0 duplicados, primera entrega 96 ms después de la recuperación | Reproducción local, endpoint de webhook devolviendo 503 durante 4 s, 3 alarmas en cola, intervalo de reintento de 2 s |
| Falsas alarmas | 0 en 0,02 horas-cámara | 72 s de reproducción en silencio, demasiado corto para una tasa |
| De caída a webhook recibido | P50 2487 ms / P95 2751 ms | reCamera One (USB-RNDIS), fotogramas reales de `fall-detection` + alarmas de caída inyectadas a través del broker propio del dispositivo; primeras 5 de 10 inyecciones (el resto se detuvieron por el límite de tasa de notificaciones, ver degradación conocida); también se entregó una alarma real de 60 s sin actividad |
| De caída a webhook recibido, con inferencia Hailo-8 | P50 2830 ms / P95 3061 ms (mín 2102 ms) | reComputer R2000 Serie + módulo Hailo-8 M.2, HEF oficial YOLOv8s-Pose, HailoRT 4.21.0; reproducción RTSP de un clip de caída GMDCSA-24 (640×640, 15 FPS); 10 alarmas, 1 s de evidencia + 1 s de autoconfirmación + 2 s de rearme; una sola zona, un solo flujo; las 10 dentro del plazo de notificación de 5 s |

La latencia de alerta es aproximadamente la suma de las dos ventanas más unos 60 ms de envío. Las ventanas de esta tabla se acortaron; con los valores predeterminados enviados (5 s de evidencia, 60 s de operador) la misma ruta comienza en unos 65 s (derivados).

Reproducción: los tres directorios de ejecución fechados 2026-09-05, 2026-09-06 y 2026-09-08 bajo `eldercare-alarm/evaluation/runs/`; la definición de latencia está en `evaluation/measure_alert_latency.py`.

### Degradaciones conocidas

- **Colocación de la cámara.** Las cifras anteriores provienen de una cámara fija, encuadre a media distancia, en interiores, con hombros y caderas visibles. Un montaje lateral u oblicuo a 2–3 m funciona; tomas cenitales desde arriba, planos generales de pasillos largos y una fuerte oclusión por muebles reducen la precisión.
- **Un conjunto de datos diferente reduce el recall.** En el conjunto de datos externo RealBiomFall (34 clips, todas caídas), el recall medido es 58,8% en reCamera y 52,9% para el YOLO11m desplegado en reComputer J30 / J40; la mayoría de los fallos provienen de que el modelo de pose no detecta a la persona. En un sitio nuevo, vuelve a extraer las trayectorias a partir de metraje del propio sitio y luego vuelve a entrenar y a fijar de nuevo los pesos de decisión.
- **El rendimiento disminuye cuando otra carga de trabajo mantiene ocupada la GPU.** Las cifras de Jetson anteriores se midieron con las cargas de trabajo co-residentes detenidas; con su propia carga de inferencia en ejecución, Orin NX midió solo 264,9 FPS agregados (306,2 FPS detenida), por debajo de Orin Nano. Orin Nano midió lo mismo en ambos casos (270,5 / 270,7 FPS) porque su carga de trabajo no usa la GPU.
- **Las notificaciones tienen límite de frecuencia.** Como máximo 5 por cada 600 s; las alarmas más allá de eso no se notifican y no generan ningún error (a partir de la 6.ª inyección en reCamera One).

### Próximos pasos

- Ejecutar la evaluación externa RealBiomFall en las rutas RK y Hailo.
- Grabar vídeo de campo y trazas de pose en reCamera, y usar reproducción anotada para evaluar los umbrales de decisión y volver a entrenar el perfil temporal.

## Fuentes de datos y recursos

- **GMDCSA-24 v2.1** — Tanto la evaluación de precisión como el metraje de demostración provienen de este conjunto de datos, [ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos), licencia MIT. Los rostros en las imágenes de demostración se han pixelado y difuminado con Gauss: la licencia cubre los derechos de autor del autor, no los derechos de imagen de los sujetos.
- **RealBiomFall** — El subconjunto de prueba utilizado para la prueba de generalización externa, 34 clips, todas caídas, por lo que solo se informan el recall y la latencia.
- Ninguno de los conjuntos de datos se distribuye con el repositorio `edgefallkit`; obténlos por tu cuenta para reproducir la evaluación.
- El diagrama de colocación de la cámara está dibujado internamente.
