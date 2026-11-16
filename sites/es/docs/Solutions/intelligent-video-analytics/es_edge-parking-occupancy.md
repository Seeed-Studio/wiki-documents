---
description: Informa cada plaza de aparcamiento como ocupada o libre con las cámaras IP que ya tienes en el aparcamiento — hardware, despliegue, interfaces y datos medidos multi‑stream en hosts Jetson y RK
title: Detección de Ocupación de Aparcamiento Basada en Cámara — Selección, Despliegue y Datos Medidos
sidebar_label: 'Parking Occupancy Detection'
keywords:
  - detección de ocupación de aparcamiento
  - detección de plaza de aparcamiento con cámara
  - guiado de aparcamiento
  - panel de plazas libres
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg
slug: /solutions/edge-parking-occupancy
sidebar_position: 22
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/solutions/edge-parking-occupancy/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[Antes de usarlo]
Las plazas deben ser visibles en la imagen de la cámara: una plaza totalmente oculta por su vecina, o una que sea muy pequeña y esté muy lejos, no se evalúa de forma fiable.
:::

## Qué hace esta solución

En lugar de un sensor magnético o ultrasónico en cada plaza, usa las cámaras IP que ya hay en el aparcamiento: todas las plazas que una cámara pueda ver se comprueban al mismo tiempo. Dibujas y nombras un recuadro por plaza en un navegador; el host en el edge sigue decidiendo si hay un vehículo en ella y envía el estado de cada plaza — ocupada, libre o desconocida — a tu sistema para paneles de plazas libres, guiado de aparcamiento o gestión de plazas reservadas.

- Paquete de despliegue (Docker Compose y configuración): [github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_occupancy)
- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/parking-space-occupancy-detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>El vídeo se queda en el sitio</h3>
                <p>La imagen se analiza en el host en el edge en el propio sitio; solo salen de él los estados de las plazas.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Varios streams por host</h3>
                <p>Un reComputer J30 Serie ejecutó 6 streams durante 620 s sin fotogramas perdidos; consulta "Rendimiento y datos medidos".</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Dibuja tus propias plazas</h3>
                <p>Dibuja y nombra recuadros sobre la imagen en vivo en un navegador; al guardar se aplica al instante y sobrevive a un reinicio.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Las cámaras perdidas se detectan</h3>
                <p>Unos 10 s después de que se caiga el stream de una cámara, sus plazas pasan a "unknown" en lugar de repetir el estado antiguo.</p>
            </div>
        </li>
    </ul>
</div>

### En un dispositivo real

El propio editor de plazas del host en el edge: cada recuadro es una plaza, rojo para ocupada y verde para libre, con totales y la lista de plazas a la derecha.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg" alt="Editor de plazas en un reComputer J30 Serie: seis plazas, cuatro ocupadas y dos libres"/>
</div>

En la captura de pantalla P01, P02, P04 y P06 están ocupadas y P03 y P05 libres. La entrada es un fotograma fijo en bucle de un aparcamiento en superficie, no imágenes del sitio.

## Hardware necesario

Tres elementos en el sitio: las cámaras IP del aparcamiento, un host en el edge y un broker MQTT (por ejemplo un Mosquitto existente).

**① Cámaras IP**: cámaras existentes con un stream RTSP H.264; el sub‑stream es suficiente.

**② Host en el edge**: elige uno; un host admite varias cámaras, cada una analizada a un fotograma por segundo.

| | Host en el edge | Medido | Elígelo cuando |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano, JetPack 6.2 | 6 streams, sin pérdidas; p50 6.5 ms por fotograma | Varias cámaras en un host; opción por defecto |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX, JetPack 6.2 | Mismo paquete que J30 | El host también ejecuta otros modelos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Serie](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU integrada | Un stream; p50 36.6 ms por fotograma | El sitio se estandariza en Rockchip |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 Serie](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>NPU integrada | Un stream a 1 fps, sin pérdidas | Pocas cámaras, el coste es lo primero |

En hosts RK, añade streams de uno en uno y comprueba que cada uno siga actualizándose.

El host en el edge, las cámaras y el broker MQTT comparten una LAN, y el host puede alcanzar las direcciones RTSP de las cámaras (normalmente puerto 554). El despliegue descarga el runtime y los modelos; después de eso funciona sin conexión.

## Despliegue en el sitio

### 1. Comprueba la vista de la cámara

:::tip[Mira hacia abajo desde lo alto]
Cada plaza debe ser claramente visible y no estar totalmente oculta por su vecina. Dibuja un recuadro por plaza: un vehículo tiene que cubrir aproximadamente un tercio del recuadro para contar como ocupada, y un recuadro grande que abarque varias plazas nunca cuenta como ocupado.
:::

### 2. Instala el software: tres pasos

Los pasos por dispositivo están en la página de diseño de referencia; esto es el esquema general.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/parking-space-occupancy-detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y despliega 🖱️</font></span></strong>
    </a>
</div><br />

1. **Despliega el host en el edge**: introduce la dirección RTSP de cada cámara y el broker MQTT, luego despliega.
2. **Dibuja las plazas**: abre el editor de plazas en el puerto 8080, elige una cámara, arrastra un rectángulo sobre una zona vacía, arrastra sus esquinas para ajustarlo, introduce el ID de la plaza (por ejemplo B1-023) y guarda.
3. **Comprueba**: cuando una plaza cambie, su color en el editor la seguirá y el mensaje de estado de la cámara llegará por MQTT.

## Interfaces

Los estados de las plazas van por MQTT a tu broker, un topic por cámara.

- **Paneles de plazas libres / guiado**: suscríbete al topic de cada cámara y suma los contadores de ocupadas, libres y desconocidas en el mensaje.
- **Plazas reservadas**: dibuja las plazas de recarga de VE o de visitantes como sus propios recuadros y actúa según sus IDs de plaza.
- **Home Assistant o tu propio sistema**: el mismo topic, leído por ID de plaza.

| Topic / puerto | Contenido |
|---|---|
| MQTT `<site>/parking/<camera>/slots` | Cada plaza bajo esta cámara (`occupied` / `free` / `unknown`) más los tres contadores; se envía siempre que cambie alguna plaza |
| HTTP 8080 `/slots/editor` | Editor de plazas: dibujar, nombrar, estado en vivo |
| HTTP 8099 `/healthz` | Estado del servicio |

Los estados se mantienen para que no parpadeen de un fotograma a otro: una plaza pasa a ocupada unos 3 s después de que el vehículo se estabilice y a libre unos 5 s después de que se vaya; unos 10 s después de que se caiga un stream sus plazas pasan a desconocidas.

## Rendimiento y datos medidos

### Varios streams y un stream

| Dispositivo | Entrada | Resultado |
|---|---|---|
| reComputer J30 Serie (Orin Nano) | 6 streams, 1 fps cada uno, 620 s | 0 fotogramas perdidos en cada stream, alrededor de 1.0 fps cada uno (medido) |
| reComputer J30 Serie (Orin Nano) | Un stream | 0.988 fps, p50 6.5 ms por fotograma, 15 cambios de estado informados por plaza (medido) |
| reComputer RK3588 Serie | Un stream | p50 36.6 ms por fotograma, 17 cambios de estado informados (medido) |
| reComputer RK3576 Serie | Un stream | 1.0 fps, 21 mensajes de estado de plaza recibidos, 0 fotogramas perdidos (medido) |

La entrada de un solo stream alterna un fotograma fijo de un aparcamiento en superficie con fotogramas oscuros para forzar cambios ocupado/libre.

Reproducir: `sensecraft-solutions/solutions/edge_parking_occupancy` (paquete de despliegue) con el clip de entrada `slots-occ20-empty20-400s.mp4`

### Stream de cámara perdido

| Dispositivo | Resultado |
|---|---|
| reComputer RK3576 Serie | Las plazas pasaron a `unknown` 9.98 s después de que se detuviera el stream, unos 11 s después del último fotograma (medido) |

### Modelos y runtimes

| Dispositivo | Detección de vehículos | Runtime |
|---|---|---|
| reComputer J30 / J40 Serie | YOLOX, 640×640, FP16 | TensorRT |
| reComputer RK3588 / RK3576 Serie | YOLOX, 640×640, INT8 (w8a8) | RKNN, decodificación hardware MPP |

Parámetros que afectan a la decisión (paquete de despliegue `config/slots*.json`):

- `slot_coverage.occupied_ratio` / `free_ratio`: ocupada por encima de 0.3 del área del recuadro, libre por debajo de 0.2.
- `slot_coverage.hold_s` / `free_hold_s`: un estado debe mantenerse durante 3 s / 5 s antes de que cambie.
- `unknown_after_s`: las plazas pasan a estado desconocido 10 s después de que se interrumpe el flujo.

### Degradación conocida

- **Distorsión de perspectiva gran angular y oclusión**: Las plazas cercanas al perímetro de las vistas de cámara gran angular sufren estiramiento de perspectiva; los vehículos de gran altura (SUV, furgonetas) en primer plano pueden bloquear las plazas traseras adyacentes. Se recomienda restringir cada cámara a ≤ 30 plazas.
- **Condiciones de invasión de línea y de contorno**: Cuando un vehículo invade las líneas de las plazas, si ambas plazas caen dentro del intervalo de cobertura transicional de 0.2–0.3, puede producirse un aleteo temporal del estado. Aumentar `hold_s` estabiliza las transiciones.
- **Reflejos en charcos y sombras dinámicas**: El agua estancada después de la lluvia o las sombras dinámicas intensas de pilares/árboles pueden degradar la confianza en la detección de bordes. Debe mantenerse una iluminación funcional básica (iluminancia de superficie ≥ 30 Lux) durante la noche.

## Fuentes de datos y recursos

- Las capturas de pantalla y los resultados de flujo único utilizan una imagen fija de un aparcamiento en superficie cuyo origen original aún está por confirmar.
- Código del modelo de detección YOLOX: Apache-2.0.
