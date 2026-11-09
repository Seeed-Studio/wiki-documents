---
description: Cuenta entradas y salidas en aparcamientos con tus cámaras de barrera existentes y publica en tiempo real las plazas libres — hardware, despliegue, interfaces y datos medidos en hosts Jetson y RK
title: Conteo de vehículos en entradas/salidas de aparcamientos — Selección, despliegue y datos medidos
sidebar_label: 'Parking Vehicle Counting'
keywords:
  - conteo de vehículos en aparcamientos
  - conteo de entradas y salidas
  - plazas de aparcamiento libres
  - panel de guiado de aparcamiento
  - contador de cruce de línea
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg
slug: /solutions/edge-parking-counting
sidebar_position: 21
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/solutions/edge-parking-counting/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usarla]
Un conjunto usa una cámara y cubre una entrada. El conteo se basa en los vehículos que cruzan una línea dibujada en la imagen; los vehículos que quedan ocultos o no cruzan la línea no se cuentan.
:::

## Qué hace esta solución

Conoce cuántas plazas quedan sin enterrar lazos en cada carril ni instalar contadores en la barrera. Tras el despliegue dibujas una línea de conteo sobre la imagen en un navegador; cada vehículo que la cruza cuenta como entrada o salida, y los vehículos dentro y las plazas libres se publican en tiempo real en tu broker MQTT, listos para accionar un panel de plazas libres o un sistema de aparcamiento. Se adapta a aparcamientos de centros comerciales y oficinas, así como a accesos de campus y fábricas.

- Paquete de despliegue (Docker Compose y configuración): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_counting)
- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/parking-entry-exit-counting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>El vídeo se queda en el sitio</h3>
                <p>La imagen se analiza en el host junto a la barrera; solo salen los conteos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Cuenta en el cruce</h3>
                <p>En un reComputer J30 Serie se contaron los 41 cruces en la dirección correcta; consulta "Rendimiento y datos medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Usa las cámaras que ya tienes</h3>
                <p>Las cámaras de red RTSP existentes en la barrera se conectan directamente; sin lazos ni cambios en la barrera.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Entradas y salidas, por tipo de vehículo</h3>
                <p>Cada registro de cruce lleva la dirección y el tipo de vehículo (coche, motocicleta, autobús, camión).</p>
            </div>
        </li>
    </ul>
</div>

### En un dispositivo real

La propia página de vista previa en el navegador del host de conteo: la línea vertical amarilla es la línea de conteo, cada vehículo lleva un ID de pista y una confianza, y el panel derecho muestra los vehículos dentro, las plazas libres y los totales de hoy.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-1-before-20261009-e25d0080.jpg" alt="Conteo de entradas/salidas en un reComputer J30 Serie: vehículo n.º 48 antes de la línea, 1/120 dentro, 24 entradas y 23 salidas hoy"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg" alt="El mismo vehículo tras cruzar: las salidas de hoy pasan a 24, 0/120 dentro"/>
</div>

Las dos capturas están separadas 3 s. La entrada es un clip de prueba sintético (una imagen de vehículo moviéndose adelante y atrás sobre un fondo gris), no imágenes reales del sitio.

## Hardware necesario

Tres elementos en el sitio: la cámara de la barrera, un host de conteo y un broker MQTT (uno ya existente en el sitio, o instala Mosquitto).

**① Cámara de la barrera**: una cámara de red existente con un flujo RTSP en H.264 o H.265, fija sobre el carril.

**② Host de conteo**: elige uno; un host por cámara.

| | Host de conteo | Velocidad medida | Elígelo cuando |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano, JetPack 6.2 | 30 fps | Los vehículos pasan a velocidad normal |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX, JetPack 6.2 | Mismo paquete que J30 | El host también ejecuta otros modelos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Serie](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU integrada | 30 fps | Tráfico a velocidad normal, la prioridad es el coste |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Serie](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU integrada | alrededor de 3 fps | Barreras donde los vehículos reducen la velocidad o se detienen |

Las velocidades de J30 y RK3576 se midieron con entrada de 640×360 a 30 fps; RK3588 con entrada de 1280×720 a 5 fps.

El host de conteo, la cámara y el broker MQTT comparten una LAN o pueden alcanzarse entre sí. El primer despliegue descarga la aplicación (unos 0,5–0,7 GB) y los modelos; después de eso funciona sin conexión.

## Despliegue en el sitio

### 1. Montar la cámara

:::tip[Los vehículos deben cruzar completamente la línea]
Fija la cámara sobre el carril de forma que los vehículos entren por un lado de la imagen y salgan por el otro. En un host RK3588 un vehículo tiene que permanecer a la vista alrededor de la línea durante unos 1 s o más para contarse de forma fiable, lo que encaja con accesos con barrera.
:::

### 2. Instalar el software: tres pasos

Los pasos por dispositivo están en la página de diseño de referencia; esto es el esquema general.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/parking-entry-exit-counting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y despliega 🖱️</font></span></strong>
    </a>
</div><br />

1. **Despliega el host de conteo**: introduce la dirección RTSP de la cámara, el broker MQTT y el número total de plazas; el despliegue comprueba las bibliotecas de ejecución de la placa.
2. **Dibuja la línea de conteo**: arrastra la línea en la página de vista previa, elige qué lado significa "entrada" y guarda.
3. **Comprueba**: tras cruzar un vehículo, el conteo de entradas o salidas en la página de vista previa sube en uno y llega un registro de cruce por MQTT.

## Interfaces

Los conteos van por MQTT a tu broker; el estado usa HTTP.

- **Panel de plazas libres / sistema de aparcamiento**: suscríbete al tema de estado del aparcamiento y lee las plazas libres; cambia a "Full" cuando llegue a cero.
- **Estadísticas de tráfico**: suscríbete al tema de cruces y cuenta por dirección y tipo de vehículo.
- **Varias entradas**: despliega un conjunto por entrada y súmalos por ID de sitio aguas arriba.

| Tema / puerto | Contenido |
|---|---|
| MQTT `<site>/parking/<entrance>/crossing` | Uno por cruce: dirección (entrada / salida), tipo de vehículo, confianza, vehículos dentro y plazas libres tras el cruce |
| MQTT `<site>/parking/<entrance>/occupancy` | Vehículos dentro, plazas totales, plazas libres, entradas y salidas de hoy; se envía tras cada cruce |
| HTTP 8080 `/preview` | Vista previa en navegador: imagen, línea de conteo, conteos dentro y libres |
| HTTP 8099 `/healthz` | Si están llegando fotogramas y la tasa de procesamiento |

## Rendimiento y datos medidos

### Conteos y velocidad de procesamiento

| Dispositivo | Entrada | Velocidad de procesamiento | Resultado de conteo |
|---|---|---|---|
| reComputer J30 Serie (Orin Nano) | 640×360, 30 fps | 29,98 fps, análisis por fotograma p50 3,6 ms (medido) | Los 41 cruces contados, todas las direcciones correctas (medido) |
| reComputer RK3576 Serie | 640×360, 30 fps | 30,0 fps, CPU del contenedor 14,9 %, memoria 95 MiB (medido) | 19 eventos de cruce: 9 entradas, 10 salidas (medido) |
| reComputer RK3588 Serie | 1280×720, 5 fps | 3,0 fps, análisis por fotograma p50 17,8 ms (medido) | 107 eventos de cruce (medido) |

Todas las entradas son un clip de prueba sintético: una imagen de vehículo cruzando adelante y atrás sobre un fondo gris. El RK3588 procesa unos 3 fps, por debajo de los 5 fps de entrada, así que un vehículo tiene que permanecer cerca de la línea durante unos 1 s o más.

Reproducir: `sensecraft-solutions/solutions/edge_parking_counting` (paquete de despliegue) con el clip sintético `count-synthetic-120s.mp4`

### Modelos y runtimes

| Dispositivo | Detección de vehículos | Runtime |
|---|---|---|
| reComputer J30 / J40 Serie | YOLOX, 416×416, FP16 | TensorRT |
| reComputer RK3588 / RK3576 Serie | YOLOX, 416×416, INT8 (w8a8) | RKNN, decodificación hardware MPP |

Parámetros que afectan al conteo (paquete de despliegue `config/counting*.json`):

- `counting.line` / `in_side`: posición de la línea y qué lado cuenta como "entrada"; cámbialos en la página de vista previa después del despliegue.
- `counting.min_track_frames`: un vehículo debe ser rastreado durante al menos 3 fotogramas consecutivos antes de contarse, por lo que a bajas tasas de fotogramas debe permanecer más tiempo en el campo de visión.
- `counting.capacity`: plazas totales; plazas libres = total − vehículos dentro.

### Degradaciones conocidas

- **Pegado al vehículo delantero y oclusión en paralelo**: Cuando las distancias de seguimiento son inferiores a 1 m o dos vehículos cruzan simultáneamente lado a lado, las cajas delimitadoras pueden fusionarse u ocultarse, causando subconteos o vectores de dirección invertidos. Se recomiendan separadores físicos de carril.
- **Interferencia de peatones y bicicletas**: El modelo está entrenado en vehículos motorizados. Cruces peatonales densos o motocicletas que pasan muy cerca de un coche pueden fragmentar los ID de seguimiento.
- **Velocidad y fotogramas de seguimiento**: Cruzar la línea de conteo requiere al menos 3 fotogramas rastreados. Los carriles de acceso deben tener un límite de velocidad recomendado ≤ 15 km/h; los pasos de vehículos a alta velocidad pueden causar conteos perdidos.

## Fuentes de datos y recursos

- Las capturas de pantalla y los resultados de conteo utilizan un clip de prueba sintético; la fuente original de la imagen del vehículo aún está por confirmarse.
- Código del modelo de detección YOLOX: Apache-2.0.
