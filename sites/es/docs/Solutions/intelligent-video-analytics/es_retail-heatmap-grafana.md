---
description: "Creación de un mapa de calor local de flujo de personas para tiendas y espacios de exposición: qué dispositivos necesitas, cómo desplegarlo, qué interfaces expone y tasas de fotogramas medidas en tres dispositivos"
title: 'Mapa de Calor de Flujo de Personas en Retail: Construcción, Despliegue y Resultados Medidos'
keywords:
  - mapa de calor de flujo de personas
  - analítica de afluencia
  - tiempo de permanencia
  - conteo de entradas y salidas
  - IA en el dispositivo
  - conteo de personas
  - mapa de calor
  - IA en el borde
  - reCamera
  - reComputer
  - Hailo-8
  - RK3588
  - MQTT
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png
slug: /solutions/retail-heatmap-grafana
sidebar_position: 3
last_update:
  date: 09/17/2026
  author: seeed-solutions-hub
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/es/solutions/retail-heatmap-grafana/
generated_from: sensecraft-solutions@recamera_heatmap_grafana
---

:::caution[Aviso de uso]
El mapa de calor solo registra **dónde están las personas**. No identifica a nadie ni realiza emparejamiento de rostros. La precisión de la detección no se ha evaluado; consulta [Rendimiento y datos medidos](#apéndice-datos-medidos).
:::

## Qué hace esta solución

Una cámara mira hacia el suelo, localiza a cada persona en el encuadre y las sigue, luego escribe dónde se detienen las personas, cuánto tiempo se quedan y cuántas entran y salen en una base de datos local, que se muestra en un panel de Grafana y en un mapa de calor. Diseñado para tiendas minoristas, pilotos de cadenas de tiendas, salas de exposiciones y cualquier espacio interior donde las decisiones de distribución dependan de por dónde camina la gente.

Los sitios que ya tienen cámaras IP las conservan y añaden un host de IA que realiza la detección. Los sitios sin cámaras usan una reCamera, donde la detección se ejecuta dentro de la cámara. El vídeo se procesa en el lugar y el backend solo almacena números. En un flujo RTSP en vivo, reComputer R2000 Serie (Hailo-8) midió 14,3 FPS (fuente de 15 FPS), y reComputer RK3588 / RK3576 Serie midió 13,2 / 13,3 FPS.

- Implementación de código abierto (ruta reCamera): [github.com/xr686/reCamera-with-Heatmap](https://github.com/xr686/reCamera-with-Heatmap)
- Implementación de código abierto (ruta cámara IP + Jetson): [github.com/bleaaach/yolo11-grafana-influxdb](https://github.com/bleaaach/yolo11-grafana-influxdb)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/recamera_heatmap_grafana)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Procesado en el sitio, el backend almacena números</h3>
                <p>La detección se ejecuta en la cámara o en el host de IA. Lo que llega al backend son posiciones en porcentajes, conteos y tiempos de permanencia. La vista previa en vivo pasa por la pasarela de vídeo local y permanece en tu red.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Usa las cámaras que ya tienes</h3>
                <p>Cualquier cámara IP con un flujo RTSP funciona, sea cual sea la marca; nada en la pared necesita ser reemplazado. Sin cámaras, una reCamera con la app de analítica para retail instalada empieza a producir datos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Cinco rutas de hardware, un panel</h3>
                <p>reCamera 2002, reCamera Pro, Rockchip, Hailo-8 y Jetson publican todos el mismo formato de mensaje. Varias tiendas pueden mezclar hardware y aun así informar a un solo backend.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>No se necesita internet una vez desplegado</h3>
                <p>El broker, la base de datos y el panel se ejecutan todos en el backend local. Internet solo se usa durante el despliegue para descargar imágenes y modelos.</p>
            </div>
        </li>
    </ul>
</div>

### Qué generan realmente los dispositivos

Los resultados de cada detector llegan a un único panel de Grafana: la transmisión en vivo de la cámara a la izquierda y paneles que agregan ocupación, estados de permanencia y conteos de entrada/salida a lo largo del tiempo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png" alt="Panel de Grafana: transmisión en vivo de la cámara más paneles de flujo de personas, permanencia y entradas/salidas agregados por hora, día y semana"/>
</div>

Los mismos datos de posición también dibujan un mapa de calor. Las zonas más oscuras son donde la gente se quedó más tiempo o pasó con más frecuencia. De forma predeterminada se superpone a la vista de la cámara; tras la calibración puede superponerse al plano de tu tienda.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/heatmap-demo-c6a45c6f.png" alt="Mapa de calor espacial: posiciones rastreadas acumuladas en zonas de calor, superpuestas sobre la vista de la cámara"/>
</div>

## Qué hardware necesitas

Tres cosas: una cámara que vea el suelo, algo que detecte personas y un backend que almacene los datos y los represente. El backend es compartido por todas las rutas.

**① Cámara**: si ya tienes cámaras IP con un flujo RTSP, consérvalas; cualquier marca funciona y nada en la pared cambia. Si no tienes ninguna, reCamera 2002 / reCamera Pro combinan cámara y cómputo en una sola unidad, ejecutando detección, seguimiento, estados de permanencia y conteo de entradas/salidas dentro de la cámara.

**② Host de detección**: solo es necesario en las rutas con cámara IP. Cada host ejecuta la misma lógica de seguimiento y permanencia; la diferencia es el acelerador.

**③ Backend del panel**: ejecuta el broker MQTT, InfluxDB, Grafana y la pasarela de vídeo. Puede ser un ordenador siempre encendido o un reComputer R1100; en las rutas con cámara IP puede compartir la caja con el detector.

| | Dispositivo | Qué hace | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-64GB-p-6252.html)<br/>cámara y cómputo en uno, 1080P | Detección + seguimiento + conteo | Cerca de la zona contada, cobertura pequeña, la forma más rápida de poner un flujo en marcha |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>cámara y cómputo en uno, 4K | Detección + seguimiento + conteo | Más lejos, gran cobertura, donde las personas distantes aún necesitan suficientes píxeles para encuadrarlas |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Serie](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>el mismo preset también es compatible con reComputer RK3576 Serie | Host de detección | Ya utilizas placas Rockchip; la decodificación de vídeo se ejecuta por hardware |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrial-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer R2000 Serie (R2035-12, Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | Host de detección | Una caja industrial sin ventilador para un armario o cuarto de instalaciones |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 Serie (J4012)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>y reComputer J50 Serie | Host de detección | Varias cámaras en un solo host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-113991334--recomputer-r1125-10-45font.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 Serie (R1124-10)](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html) | Backend del panel | No hay un ordenador siempre encendido en el sitio para ejecutar el panel |

Otros requisitos previos: Docker en la máquina backend, al menos 2 GB de disco libre, los puertos 1883, 3000, 8080 y 8086 libres, y cámaras y backend en el mismo segmento de red para que funcione el descubrimiento de cámaras ONVIF.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/architecture-en-0432d229.png" alt="Composición de dispositivos del mapa de calor de flujo de personas: las cámaras IP envían RTSP a un host de IA reComputer, el host y reCamera 2002 / Pro publican MQTT a un backend reComputer R1100, y el panel de Grafana se abre vía HTTP"/>
</div>

Distribución de dispositivos: las cámaras IP entregan vídeo RTSP al host de IA, mientras que una reCamera ejecuta la detección dentro de la cámara; los detectores solo generan porcentajes de posición y conteos, sin imágenes; cada detector informa a un backend (broker MQTT, InfluxDB, Grafana, pasarela de vídeo go2rtc), de modo que un solo panel cubre todas las cámaras. La vista previa en vivo es el navegador tirando de la cámara a través de la pasarela de vídeo local, no a través de la base de datos del backend.

### Límites de selección negativa

- **Altura de montaje y campo de visión**: reCamera 2002 es adecuada para techos de 3–4 m; para alturas superiores a 5 m o grandes atrios, no elijas 2002, elige reCamera Pro con resolución 4K.
- **Seguimiento de identidad**: Esta solución genera únicamente mapas de calor de densidad anónimos, no reconocimiento facial ni reidentificación de personas.

## Instalación in situ

Dos partes: montar la cámara correctamente e instalar el software.

### 1. Montaje de la cámara

:::tip[Requisitos de colocación]
Monta la cámara en alto, mirando hacia abajo al área que se va a contar, a 3–5 m del objetivo. Las personas deben ocupar al menos unos 30 × 30 píxeles en el encuadre; de lo contrario, no se pueden encuadrar. Vistas a la altura de los ojos, ángulos con mucha oclusión mutua y tomas lejanas donde las personas son demasiado pequeñas provocan detecciones perdidas.
:::

### 2. Instalación del software: de tres a cuatro pasos

Las instrucciones por dispositivo se encuentran en la página del diseño de referencia, donde respondes algunas preguntas sobre el sitio y descargas el paquete de aplicación correspondiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/recamera_heatmap_grafana" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configura y descarga el paquete de la aplicación 🖱️</font></span></strong>
    </a>
</div><br />

1. **Levanta el backend**: inicia el broker, InfluxDB, Grafana y el video gateway en la máquina siempre encendida. Este paso descubre cámaras ONVIF en el mismo segmento; para cámaras en otro segmento, introduce las URL RTSP en el formulario de despliegue.
2. **Haz que el detector publique**: en las rutas reCamera, instala la app de analítica retail en la cámara; en las rutas de cámara IP, despliega el detector en el host de IA. Ambos piden tres cosas: la dirección del broker MQTT (la máquina del paso 1), un **nombre de instalación** y un **ID de cámara**. Usa un nombre de instalación por tienda y un ID por cámara; así es como el panel diferencia los dispositivos.
3. **Calibra el plano de planta (opcional)**: abre el mapa de calor en el puerto 8080, sube una captura de la cámara y el plano de la tienda, y haz clic en cuatro puntos coincidentes en cada uno. Elige puntos de referencia muy separados, como pilares, puertas y esquinas de paredes. La calibración se guarda en el servidor y varias cámaras pueden compartir un mismo plano. Omite esto si la vista de la cámara es todo lo que necesitas.
4. **Abre el panel**: Grafana en el puerto 3000, el mapa de calor en vivo en 8080, el video gateway en 1984.

La documentación upstream indica **15 minutos** de extremo a extremo. La ruta Jetson es la excepción: el primer despliegue construye un motor TensorRT en el dispositivo, lo que lleva de 2 a 5 minutos y luego se reutiliza.

## Interfaces que expone

Cada detector publica el mismo formato de mensaje en el broker backend. Tres formas de entrada, según lo que ya tengas en marcha:

- **El panel integrado es suficiente**: no hay nada que integrar. Los paneles de Grafana ya cubren las tendencias de flujo de personas por hora, día y semana, además del tiempo de permanencia y los conteos de entrada/salida, y los datos de los paneles se pueden exportar directamente.
- **Un sistema BI o de analítica existente**: suscríbete al topic de resultados MQTT para datos en vivo, o consulta InfluxDB en el backend para el histórico.
- **Tu propio sistema o API**: suscríbete como arriba; la carga útil incluye conteos por zona más la posición y el tiempo de permanencia de cada persona seguida, suficiente para dibujar tus propios paneles. Los fotogramas en vivo provienen del video gateway local en el puerto 1984.

### Referencia completa de topics y payload

| Topic / puerto | Contenido | Retenido |
|---|---|---|
| `<site>/retail-vision/results/<camera-id>` | Un JSON por segundo en lote: conteos por zona (ocupación, curioseando, implicado, necesita ayuda, entradas, salidas, tiempo medio de permanencia) más el `track_id`, la posición y el tiempo de permanencia de cada persona seguida | No |
| `<site>/retail-vision/status` | `online` / `offline` | Sí |
| Broker MQTT 1883 | Resultados de cada detector | — |
| Grafana 3000 | Tendencias de flujo de personas por hora, día y semana; tiempo de permanencia y conteos de entrada/salida | — |
| Mapa de calor en vivo 8080 | Superposición de calor sobre la vista de la cámara o sobre tu plano de planta; el icono de engranaje abre la calibración | — |
| Video gateway 1984 | Descubrimiento de cámaras y vista previa en vivo | — |

`<site>` y `<camera-id>` se configuran en el formulario de despliegue y solo aceptan letras, dígitos, guiones y guiones bajos.

**Las posiciones se publican como porcentajes del encuadre.** Cada detector convierte el centro del recuadro seguido en un porcentaje antes de publicar, de modo que una sola calibración del plano de planta sirve para cualquier resolución de cámara; sustituir una cámara por otra de mayor resolución no requiere recalibrar.

**Los mensajes se agrupan una vez por segundo.** En reCamera esto es `--mqtt-interval-ms 1000`; sin ello, la app publica por fotograma (unos 10 mensajes por segundo por cámara). En las rutas con host de IA es `publish_hz: 1.0` en la configuración del detector. Con varias cámaras en un mismo sitio, que el broker mantenga el ritmo depende de este parámetro.

**reCamera Pro no emite el tiempo medio de permanencia**, por lo que el panel Avg Dwell permanece vacío en esa ruta. El resto de métricas no se ve afectado.

## Rendimiento y datos medidos {#appendix-measured-data}

Las cuatro rutas con host de IA ejecutan la misma lógica de seguimiento y permanencia; el modelo de detección y el runtime difieren según el acelerador.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/xr686/reCamera-with-Heatmap" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reCamera-with-Heatmap</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Lo que sigue son datos medidos de dispositivos sobre rendimiento y tasa de mensajes, a partir de fuentes en vivo de una sola secuencia en las rutas RK y Hailo.

### Qué dispositivos se midieron

| Dispositivo | Acelerador | Modelo entregado | Estado de verificación |
|---|---|---|---|
| reComputer RK3588 series | NPU RK3588 | YOLO11n rawhead FP16 | ✅ Flujo en vivo en hardware |
| reComputer RK3576 series | NPU RK3576 | YOLO11n rawhead FP16 | ✅ Flujo en vivo en hardware |
| reComputer R2000 series (R2135-12, Hailo-8) | Hailo-8 | YOLOv8n INT8 | ✅ Flujo en vivo en hardware |
| reCamera 2002 | NPU SG2002 | YOLO11n INT8 | Despliegue verificado |

### Detalle de rendimiento {#performance-detail}

#### Frecuencia de fotogramas de extremo a extremo en un flujo en vivo

La entrada es metraje RTSP real. La medición cubre **toda la ruta desde el fotograma de la cámara hasta la llegada de los resultados al backend**: decodificación + detección + seguimiento + lógica de permanencia + publicación MQTT, una secuencia por host.

| Host de detección | Modelo | Frecuencia de seguimiento | Frecuencia de mensajes MQTT | Fuente |
|---|---|---:|---:|---|
| reComputer R2000 series (R2135-12, Hailo-8) | YOLOv8n INT8 | **14.3 FPS** | 0.94 msg/s | Medido (440 fotogramas / 30.7 s) |
| reComputer RK3588 series | YOLO11n FP16 | **13.2 FPS** | 1.00 msg/s | Medido |
| reComputer RK3576 series | YOLO11n FP16 | **13.3 FPS** | 1.00 msg/s | Medido |

- **Las dos placas RK**: la decodificación hardware MPP estaba activa y la frecuencia de mensajes era 1.00 msg/s.
- **Los 14.3 FPS de Hailo están limitados por la frecuencia de fotogramas de la fuente.** Sin limitación, la misma canalización alcanzó **234 FPS**, aproximadamente 15× los 15 FPS de la fuente.
- **La diferencia entre 0.94 y 1.00 msg/s proviene de cómo se promedió**: ambas apuntan a un mensaje por segundo, y 0.94 es la media en una ventana de 30.7 s.
- **Reproducción**: los benchmarks de inferencia de extremo a extremo y autónoma se encuentran en el repositorio `benchmarks/run_heatmap_bench.sh`; ejecuta `./run_heatmap_bench.sh --profile rk3588`.

#### Velocidad de inferencia autónoma

| Host de detección | Modelo | Por inferencia | Fuente |
|---|---|---:|---|
| reComputer J40 / J50 series | YOLO11n FP16 (TensorRT) | 9.7 ms | Cifra de inferencia autónoma proporcionada upstream |
| reCamera 2002 | YOLO11n INT8 | alrededor de 10 FPS | Frecuencia en cámara indicada en las notas de la app upstream |

Estas dos filas no se comparan directamente con la tabla de extremo a extremo anterior: 9.7 ms excluye decodificación, seguimiento y publicación, y alrededor de 10 FPS es la frecuencia de procesamiento en cámara, no la frecuencia a la que los resultados llegan al backend.

#### Multisecuencia

Cada cifra anterior proviene de un host viendo una cámara. "Varias cámaras en un host" es la división del trabajo entre presets (la ruta Jetson cumple ese papel). Un backend puede aceptar cualquier número de detectores a nivel de protocolo, separados por nombre de instalación e ID de cámara; el límite está en el lado del host de IA.

### Tiempos de ejecución y parámetros clave

| Host de detección | Modelo de detección | Precisión | Runtime | Cómo se entrega el modelo |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n (`yolo11n_detection_cv181x_int8.cvimodel`) | INT8 | NPU de la cámara SG2002 | Incluido con `retail-vision_1.5.1_riscv64.deb`, verificado por sha256 |
| reCamera Pro | Incluido con la app `retail-vision` del App Center | Definida por la app | NPU de la cámara | **No incluido en el paquete**; instálalo primero desde el App Center del dispositivo |
| reComputer RK3576 / RK3588 series | `yolo11n_pose_rawhead_fp16.<board>.rknn` | FP16 | RKNN | Entregado por placa y verificado por sha256; el modelo de placa incorrecto no se cargará |
| reComputer R2000 series (R2135-12, Hailo-8) | YOLOv8n (`yolov8n.hef`) | INT8 | HailoRT 4.21 + GStreamer | Obtenido del directorio hailo8 del Hailo Model Zoo v2.15.0, fijado por sha256 |
| reComputer J40 / J50 series | YOLO11n (`yolo11n.engine`) | FP16 | TensorRT | El motor se **construye en el dispositivo** (`ultralytics` export, `half=True`, `imgsz=640`): de 2 a 5 minutos la primera vez, reutilizado después |

- **Hailo está bloqueado a HailoRT 4.21.** El despliegue comprueba las bibliotecas en la placa y se detiene, imprimiendo la versión instalada, si no coinciden. Un Hailo-8 ejecuta una aplicación a la vez; si otra app de Hailo está usando el acelerador, el detector no se iniciará.
- **Las placas RK necesitan que el controlador NPU esté presente** (`/usr/lib/librknnrt.so`).
- **En reCamera la aplicación de analítica toma la cámara en exclusiva**: al instalarla desactiva el inicio automático de Node-RED, y ambas no pueden ejecutarse a la vez.

Parámetros que cambian el comportamiento del despliegue (valores enviados en las rutas RK y Jetson):

- `dwell_min_duration` (1.5 s): una persona cuenta como en permanencia solo después de moverse más despacio que `dwell_speed_threshold` (10.0) durante este tiempo, por lo que darse la vuelta frente a un estante no cuenta.
- `dwell_assistance_threshold` (20.0 s): el tiempo de permanencia más allá de este valor entra en el estado de necesita asistencia.
- `avg_person_height_m` (1.7): convierte el umbral de velocidad de píxeles a distancia real. Cuando la altura media de las personas en cámara difiere sustancialmente de 1.7 m, la detección de permanencia se vuelve más laxa o más estricta en general.

### Degradación conocida

- **Colocación.** La cámara debe montarse en alto, a 3–5 m del objetivo, con personas de al menos unos 30 × 30 píxeles en el encuadre. Las vistas a la altura de los ojos, las tomas lejanas y la oclusión intensa impiden que las personas sean encuadradas, y una persona que no se detecta deja el mapa de calor en blanco sin que se genere ningún error.
- **La calibración del plano de planta son cuatro puntos clicados manualmente.** Los puntos de referencia que están muy juntos o son colineales amplifican el error de posición. Mover o reorientar la cámara invalida la calibración y hay que rehacerla: **una calibración incorrecta no genera ningún error**, simplemente dibuja el calor en otro lugar.
- **El Avg Dwell de reCamera Pro siempre está vacío**, porque la aplicación no emite ese campo.
- **En RK, la decodificación por hardware vuelve a la decodificación por software cuando no está activa.** Una tasa de fotogramas claramente baja junto con una CPU saturada es el síntoma; la ruta Jetson no tiene retroceso (`fallback: none`).

## Fuentes y licencias

- **Modelos de detección**: la ruta Hailo usa `yolov8n.hef` del [Hailo Model Zoo](https://github.com/hailo-ai/hailo_model_zoo) directorio hailo8 de la versión v2.15.0, fijado por digest en lugar de volver a alojarlo. La ruta RK reutiliza `yolo11n_pose_rawhead_fp16.<board>.rknn` ya publicado por fall_detection. La ruta Jetson exporta `yolo11n.engine` en el dispositivo con `ultralytics`.
- **Licenciamiento de modelos**: los detectores usan modelos de la familia YOLO (YOLO11n, YOLOv8n). Los modelos Ultralytics YOLO son AGPL-3.0 a menos que se licencien comercialmente, así que confirma las licencias de los modelos, o sustituye un modelo con licencia compatible, antes de enviar un producto.
- **Componentes de backend**: el broker MQTT, InfluxDB, Grafana y la pasarela de vídeo go2rtc se despliegan desde sus imágenes oficiales. Las credenciales predeterminadas de Grafana son `admin` / `admin`; cámbialas justo después de la puesta en marcha.
- **Imágenes**: el panel de Grafana y las capturas de pantalla del mapa de calor provienen de la biblioteca de recursos de la solución upstream; el diagrama de arquitectura está dibujado internamente. Ninguna persona identificable aparece en las imágenes de demostración.
