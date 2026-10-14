---
description: "Reconocimiento de matrículas y apertura de barrera por lista blanca con tus cámaras de acceso existentes y un host perimetral: hardware, despliegue, interfaces y datos medidos en hosts Jetson y RK"
title: Reconocimiento de matrículas en el borde — Selección, despliegue y datos medidos
keywords:
  - reconocimiento de matrículas
  - ANPR
  - lista blanca para barrera de aparcamiento
  - apertura automática de puerta
  - ANPR en el borde
  - Jetson Orin Nano
  - Jetson Orin NX
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg
slug: /solutions/edge-license-plate-recognition
sidebar_position: 20
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/solutions/edge-license-plate-recognition/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usarlo]
Admite matrículas azules de una sola fila de China continental (7 caracteres) y matrículas verdes de nueva energía (8 caracteres); no se admiten matrículas de dos filas, de uso especial ni extranjeras. La licencia de los pesos de detección y reconocimiento aún no está confirmada; confírmala antes de la distribución comercial.
:::

## Qué hace esta solución

Mantén las cámaras de red ya montadas en la puerta y añade un host de reconocimiento in situ para leer las matrículas. Cuando llega un vehículo en lista blanca, el controlador de la puerta envía a la barrera una señal de apertura; cada vehículo deja un registro con su matrícula, confianza y una captura. Es adecuada para puertas de aparcamientos residenciales, de campus y de personal, y también puede funcionar sin barrera como registro de entrada/salida.

- Paquete de despliegue (Docker Compose y configuración): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_plate_recognition)
- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge-anpr-plate-recognition)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Las matrículas y el vídeo se quedan in situ</h3>
                <p>El reconocimiento se ejecuta en el host in situ. Las capturas se conservan allí durante 7 días por defecto y solo salen cuando se recuperan mediante enlace.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>30 fps a 1080p</h3>
                <p>reComputer J30 Series y RK3576 Series procesan 1080p a 29–30 fps; consulta "Rendimiento y datos medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Mantén tus cámaras</h3>
                [LINE[64]                <p>Las cámaras de red 1080p existentes se conectan por RTSP; el host extrae el flujo a través de la LAN.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Un registro por vehículo</h3>
                <p>Cada vehículo se informa una vez con número de matrícula, tipo de matrícula, confianza y un enlace a la captura; un sistema de aparcamiento se suscribe a un tema MQTT.</p>
            </div>
        </li>
    </ul>
</div>

### En un dispositivo real

La propia página de vista previa en el navegador del host de reconocimiento: la matrícula aparece enmarcada y etiquetada con su número y confianza, y las últimas cinco lecturas se muestran a la derecha.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg" alt="Vista previa de matrícula en un reComputer J30 Series: matrícula azul 皖A62599 leída a 0.98, con las últimas cinco lecturas a la derecha"/>
</div>

Los fotogramas de entrada son imágenes fijas del conjunto de pruebas público CCPD (licencia MIT) en bucle por RTSP, no imágenes del sitio.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-2-jetson-green-front-20261009-a3ab0b16.jpg" alt="reComputer J30 Series leyendo la matrícula verde de nueva energía 皖AF10528 a 0.87"/>
</div>

## Hardware que necesitas

Tres elementos in situ: la cámara de la puerta, un host de reconocimiento y, para la apertura automática, un controlador de puerta más un relé intermedio.

**① Cámara de la puerta**: tu cámara de red existente, 1080p o mejor, con un flujo RTSP.

**② Host de reconocimiento**: elige uno; un host por cámara de puerta.

| | Host de reconocimiento | Medido (entrada 1080p) | Elígelo cuando |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 Series (J3011)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano, JetPack 6.2 | 30 fps | Opción por defecto |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 Series (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX, JetPack 6.2 | Mismo paquete que J30 | El host también ejecuta otros modelos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU integrado | Despliegue y salida medidos | El sitio se estandariza en Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Series](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU integrado | 29–30 fps | Prima el coste |

**③ Controlador de puerta (opcional)**: [reComputer R1100 Series (R1124-10)](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html). Ejecuta el broker MQTT, mantiene la lista blanca y señala a la barrera desde una salida digital a través de un relé intermedio para carril DIN. El cierre sigue a cargo del propio lazo o radar de la barrera.

La cámara, el host de reconocimiento y el controlador de puerta están en la misma LAN; se recomiendan conexiones cableadas.

## Despliegue in situ

### 1. Monta la cámara

:::tip[La matrícula debe ser legible en la imagen]
Monta la cámara a 3–8 m del carril en una posición fija, apuntando al punto por el que pasan las matrículas. El reconocimiento solo se ejecuta dentro de una región configurada de la imagen (la parte inferior central por defecto); comprueba esa región de nuevo siempre que se mueva la cámara.
:::

### 2. Instala el software: tres pasos

Los pasos por dispositivo están en la página de diseño de referencia; esto es el esquema general.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge-anpr-plate-recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y despliega 🖱️</font></span></strong>
    </a>
</div><br />

1. **Controlador de puerta (opcional)**: instala el broker MQTT y el servicio de puerta en el R1124-10, sube el CSV de la lista blanca y confirma que la barrera se mueve con el endpoint de prueba de apertura.
2. **Host de reconocimiento**: introduce la dirección RTSP de la cámara y la dirección del broker MQTT, luego despliega. El primer despliegue descarga el runtime y los modelos; después de eso funciona sin conexión.
3. **Comprobación**: abre la página de vista previa en el puerto 8080 del host; los vehículos que pasan muestran una matrícula enmarcada, y el tema de matrículas lleva un registro por vehículo.

Antes de entrar en producción, compara las lecturas con matrículas reales usando imágenes diurnas y nocturnas de tu propia puerta.

## Interfaces

Los resultados van por MQTT al broker que introdujiste en el despliegue (normalmente el R1124-10); las capturas y el estado usan HTTP.

- **Sistema de aparcamiento o facturación**: suscríbete al tema de matrículas, un registro por vehículo; concilia sobre `plate_normalized`.
- **Barrera**: el R1124-10 comprueba cada registro de matrícula contra la lista blanca y publica el resultado en el tema de la puerta. La misma matrícula que llega de nuevo dentro del tiempo de enfriamiento se registra como `suppressed` y no vuelve a abrir.
- **Tu propio sistema**: recupera la captura mediante el enlace en el registro, o supervisa el servicio a través del endpoint de estado.

| Tema / puerto | Contenido |
|---|---|
| MQTT `<site>/parking/<camera>/plate` | Número de matrícula, tipo de matrícula (`cn_blue` / `cn_green`), confianza, fotogramas de votación, posición en la imagen, enlace a la captura |
| MQTT `<site>/parking/<camera>/gate` | Registro de puerta: `open_pulse` (abierta) o `suppressed`, con el registro de matrícula correspondiente y la etiqueta de lista blanca |
| MQTT `<root>/status` | Estado del servicio, publicado periódicamente; el último permanece en el broker si el host se desconecta |
| HTTP 8080 `/snapshots/{seq}.jpg` | Captura enlazada desde el registro de matrícula, conservada 7 días por defecto |
| HTTP 8081 `/whitelist` (R1124-10) | GET devuelve el CSV de la lista blanca, PUT lo reemplaza (un 400 indica la línea con fallo); `POST /gate/test` lanza una apertura de prueba |
| HTTP 8099 `/healthz` | Estado del servicio, incluida la velocidad de procesamiento |

Las capturas no se incrustan en los registros; un registro solo lleva el enlace y el sha256 de la captura.

## Rendimiento y datos medidos

### Velocidad de procesamiento

| Dispositivo | Velocidad de procesamiento | Detección de matrícula por fotograma | Condiciones |
|---|---:|---:|---|
| reComputer J30 Series (Orin Nano) | 29.9 fps (medido) | p50 5.6 ms (medido) | RTSP 1080p a 30 fps |
| reComputer RK3576 Series | 29–30 fps (medido) | p50 23.1 ms, reconocimiento 1.8 ms (medido) | Igual |

Reproducir: `sensecraft-solutions/solutions/edge_plate_recognition` (paquete de despliegue) con el clip de entrada `plate-labeled40-1080p-120s.mp4`

### Lecturas de matrículas

La entrada son imágenes fijas de matrículas del conjunto de prueba CCPD, cada una mantenida durante varios segundos, transmitidas a 1080p por RTSP. La verdad de terreno proviene de los nombres de archivo de CCPD.

| Dispositivo | Entrada | Resultado |
|---|---|---|
| reComputer J30 Serie | 40 imágenes fijas | 56 registros de matrículas publicados, 50 coinciden con la verdad de terreno (medido) |
| reComputer RK3576 Serie | 40 imágenes fijas | 57 registros de matrículas publicados, 51 coinciden con la verdad de terreno (medido) |
| reComputer J30 Serie | 8 imágenes fijas | 5 leídas correctamente, 3 no produjeron registro, 0 matrículas erróneas (medido) |
| reComputer RK3588 Serie | 8 imágenes fijas | 5 leídas correctamente, 3 no produjeron registro, 0 matrículas erróneas (medido) |

Una imagen fija puede producir más de un registro mientras permanece en pantalla, por lo que el número de registros supera al de imágenes fijas. Cuando no se puede leer una matrícula, el host no publica nada: ninguno de los dispositivos publicó una matrícula errónea en las 8 imágenes fijas.

Reproducir: `sensecraft-solutions/solutions/edge_plate_recognition/gallery/ATTRIBUTION.md` (nombres de archivo y verdad de terreno de las 8 imágenes fijas)

### Modelos y runtimes

| Dispositivo | Detección | Reconocimiento | Runtime |
|---|---|---|---|
| reComputer J30 / J40 Serie | YOLOX-Tiny, 640×640, FP16 | PlateRecNet (interno), 96×32, FP16 | TensorRT, decodificación por hardware |
| reComputer RK3588 / RK3576 Serie | YOLOX-Tiny, 640×640, INT8 | PlateRecNet, 96×32, INT8 (capa de salida FP16) | Runtime RKNN 2.3.2, decodificación por hardware MPP |

Parámetros que afectan los resultados (paquete de despliegue `config/plate.json`):

- `plate.roi`: región de reconocimiento, parte inferior central de la imagen por defecto. Redibújala después de mover la cámara.
- `plate.vote`: hasta 7 fotogramas votan por vehículo; se publica un registro cuando al menos 3 coinciden con una confianza de 0.6 o superior.
- `plate.dedup_s`: la misma matrícula se publica como máximo una vez cada 30 s.

### Degradación conocida

- **Tipos de matrículas no compatibles**: Solo admite matrículas azules de una fila (7 caracteres) y verdes de nueva energía (8 caracteres). No se admiten matrículas amarillas de dos filas, remolques, policía ni matrículas extranjeras.
- **Ángulo y velocidad de la cámara**: Los vehículos deben entrar con un ángulo ≤ 30° y con un ancho de matrícula > 96 píxeles en el fotograma. Los ángulos de entrada agudos (> 45°) o velocidades superiores a 30 km/h degradan la detección.
- **Reflejos y sobreexposición de faros**: El deslumbramiento directo o los faros de luz larga por la noche pueden blanquear los caracteres. Incluso en portones sin iluminación se recomienda iluminación suplementaria (~5000K).

## Fuentes de datos y recursos

- CCPD (Xu, Z. et al., ECCV 2018): [github.com/detectRecog/CCPD](https://github.com/detectRecog/CCPD), Licencia MIT, Copyright (c) 2017 CCPD. Las capturas de pantalla de esta página usan sus imágenes del conjunto de prueba; las matrículas son matrículas reales del conjunto de datos público.
- Código del modelo de detección YOLOX: Apache-2.0. La estructura del modelo de reconocimiento es código interno. La licencia de ambos conjuntos de pesos entrenados aún no está confirmada; confírmala antes de la distribución comercial.
