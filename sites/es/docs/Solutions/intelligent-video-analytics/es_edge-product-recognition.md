---
description: Reconocimiento de productos de supermercado en el edge: un detector de una sola clase, una galería de embeddings que registra un nuevo SKU a partir de fotografías en lugar de una ejecución de entrenamiento, qué hardware necesita, cómo se despliega, los datos medidos por placa y detalles de implementación para ingenieros
title: 'Reconocimiento de Productos en el Edge: Construcción, Despliegue y Resultados Medidos'
sidebar_label: 'Edge Product Recognition'
keywords:
  - reconocimiento de productos en el edge
  - reconocimiento de productos en caja sin código de barras
  - auditoría de estanterías con detección de huecos vacíos
  - registro de SKU sin reentrenamiento
  - galería de productos FAISS
  - recuperación de imágenes embedding ArcFace
  - detector de una sola clase YOLOX
  - embedding DINOv2 INT8
  - paridad RKNN fp16
  - Hailo-8 HEF
  - MQTT
  - RK3588
  - reComputer R2000 serie
image: https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png
slug: /solutions/edge-product-recognition
sidebar_position: 6
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Lee esto primero]
Los resultados de reconocimiento no son una medición legal y no pueden utilizarse como base para fijar precios ni para un conteo legalmente vinculante.
:::

## Qué hace esta solución

Una cámara observa una cinta de caja o el frente de una estantería. Cada producto en el encuadre se encuadra, recorta, convierte en un vector de 512 dimensiones y se busca en una galería de SKUs registrados. En la caja, la salida es una cesta (SKU-a-cantidad, agregada por id de pista para que un artículo que pasa por la cámara se cuente una sola vez); en la estantería es un estado de hueco (ok, vacío, wrong_sku, desconocido, agregado por posición de planograma). Un mensaje MQTT por fotograma transporta los resultados.

Añadir un producto en tienda no requiere reentrenamiento: fotografía el nuevo SKU entre tres y ocho veces, envía las imágenes a la consola, y la galería obtiene una nueva versión inmutable. El detector es de una sola clase y solo responde "hay un producto aquí", por lo que nunca aprende productos individuales; el embedder tampoco se actualiza.

- Selección y despliegue: [Página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition)
- Repositorio upstream: no publicado. El paquete no incluye `intro.links.github`; el código vive en un repositorio interno en el momento del empaquetado.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>Añade un SKU con 3–8 fotos, sin reentrenamiento</h3>
                <p>El registro crea una nueva versión inmutable de la galería. Pasar de una imagen de registro a ocho eleva el top-1 en 28 puntos porcentuales (consulta rendimiento y datos medidos).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>La detección se ejecuta en una NPU o GPU</h3>
                <p>RKNN fp16 en RK3588 coincide con la referencia de CPU en el 99,85% de las cajas a 56,7 ms p50; el Hailo-8 INT8 HEF se ejecuta a 9,04 ms p50 con un 94,77% de coincidencia; TensorRT fp16 en reComputer J40 serie (J4012) se ejecuta a 5,18 ms p50 con un 99,91% de coincidencia.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Tus propias cámaras y sistemas de tienda</h3>
                <p>Cualquier cámara RTSP / USB. El POS lee SKU-a-cantidad desde MQTT, un sistema de reposición lee huecos vacíos y erróneos, y una API HTTP sirve consultas de eventos y gestión de la galería.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Los datos permanecen en el sitio</h3>
                <p>La cámara, el host de reconocimiento y el host de consola son todos locales, y el broker se ejecuta en la pila de la consola. El broker incluido es anónimo y en texto plano; añade cuentas y TLS antes de entrar en producción.</p>
            </div>
        </li>
    </ul>
</div>

### La consola

El paquete upstream incluye cuatro capturas de pantalla de la interfaz de gestión: la lista de eventos, el detalle de evento por caja, la galería de productos y el panel de caja/estantería. Las cuatro fueron producidas por la herramienta upstream `web_demo` contra fixtures sintéticos; los SKUs, puntuaciones de similitud y eventos que aparecen son datos de prueba y solo muestran el diseño de la interfaz.

### Los tres estados de la estantería

La decisión de estantería se midió en la reComputer RK3588 serie y en la reComputer R2000 serie + Hailo-8. Cada hueco recibe uno de tres estados: correcto, vacío o SKU erróneo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="Panel de estantería con cada hueco coincidiendo con la galería, marcado como correcto"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="Se ha retirado un artículo de la misma estantería; ese hueco pasa a vacío"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="Un artículo que no pertenece al hueco; se marca como SKU erróneo con el SKU realmente coincidente"/>
</div>

Los tres estados en secuencia:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="La misma estantería pasando por los estados correcto, vacío y SKU-erróneo"/>
</div>

La cadena de caja produce pistas por artículo:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Pistas de artículos y reconocimiento por artículo en la vista de caja"/>
</div>

Estos fotogramas proceden de dos ejecuciones de hardware, `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`, usando productos que el proyecto compró; ninguno procede de un conjunto de datos.

## Qué hardware necesitas

Cuatro elementos por sitio: una cámara, un host de reconocimiento, un host de consola y una máquina de conversión x86_64 (usada una vez por modelo).

**① Cámara**: cualquier cámara RTSP / USB montada sobre la caja o frente a la estantería; no se ejecuta nada en ella. El tamaño de entrada se compila en el artefacto: 640² para caja, 1280² para estantería.

**② Host de reconocimiento**: aquí es donde difieren los tres presets:

| | Host | Medido en este hardware | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Detector en la NPU, embedder en los cuatro núcleos A76 | Ambas etapas: 9,04 ms de detección, 91,95 ms por embedding de recorte | Necesitas datos medidos tanto de detección como de embedding |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector en la NPU de Rockchip, embedder en la CPU o en la NPU | Detector con un 99,85% de coincidencia de cajas y 56,7 ms; con el embedder en la NPU, una reproducción de estantería de 20 SKUs publicó resultados a 924 ms p50 desde la detección | Ya utilizas placas Rockchip, o la cámara mira a una estantería. RK3576 usa la misma cadena de herramientas |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) o [reComputer Super J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Ruta TensorRT, detector y embedder en la GPU | J4012: 5,18 ms de detección, 4,23 ms por embedding de recorte; reproducción de caja de 2956 fotogramas sin fotogramas perdidos | Ya utilizas Jetson, o quieres toda la cadena en una sola máquina |

Todas las cifras se miden en el hardware de esa fila.

**③ Host de consola**: tu propia máquina Linux amd64 o arm64 con Docker, sin necesidad de GPU, accesible desde cada dispositivo de reconocimiento. Ejecuta tres contenedores: el servicio de registro/consulta, la interfaz de gestión y el broker MQTT. **Ambas imágenes de contenedor se construyen en este host desde el repositorio upstream**, no se extraen de un registro.

**④ Una máquina de conversión x86_64**: ni rknn-toolkit2 ni Hailo Dataflow Compiler se ejecutan en la placa de destino. Cada modelo se convierte una vez; los despliegues no repiten este paso.

### Límites de selección negativa

- **Tamaño del catálogo y latencia de búsqueda**: si el catálogo local de productos supera los 200 SKUs, aumenta la latencia de búsqueda vectorial lineal. Para catálogos más grandes (>500 SKUs), despliega indexación ANN o externaliza la búsqueda.
- **Embedding solo en CPU**: nunca ejecutes la extracción de embeddings solo en CPU (supera los 900 ms por recorte); verifica siempre la aceleración por hardware NPU o TensorRT.

## Cómo desplegar en el sitio

Fija primero el artefacto y la posición de la cámara, luego instala el software en cuatro pasos por preset.

### 1. Montaje: elige el artefacto y luego la posición de la cámara

:::tip[El tamaño de entrada se fija en la conversión]
El tamaño de entrada se compila en el artefacto y no puede cambiarse en tiempo de ejecución. Un artefacto 640² mirando a una estantería no detecta productos lejanos; pasar a 1280² eleva el mAP50-95 de objetos pequeños en la prueba SKU-110K de 17,49 a 26,88. Decide primero caja o estantería y luego monta la cámara de modo que los productos ocupen una parte adecuada del encuadre.
:::

En el preset Hailo-8, el embedding es una inferencia de CPU por caja. Con los 91,95 ms por recorte medidos en la reComputer R2000 serie, una cesta de cinco artículos tarda alrededor de medio segundo; un fotograma de estantería con la densidad medida de 157,6 cajas tarda unos 14 segundos. **Los despliegues en estantería con este preset deben submuestrear fotogramas o muestrear por hueco.** En reComputer J40 serie (J4012) el embedding se ejecuta en la GPU a 4,23 ms por recorte.

### 2. Software, cuatro pasos

Los pasos por dispositivo están en la página de diseño de referencia; esta sección enumera el flujo. Los tres presets siguen los mismos cuatro pasos:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configurar y desplegar 🖱️</font></span></strong>
    </a>
</div><br />

1. **Levantar la consola**: el servicio de registro, la interfaz y el broker se ejecutan en el host de consola, con una tabla de tokens de rol escrita en el momento del despliegue. No hay token por defecto ni lectura anónima; con una tabla vacía el servicio se niega a arrancar.
2. **Coloca el modelo de embedding en su sitio**: coloca el ONNX de DINOv2 donde la consola lo monte y cambia `RETAIL_EMBEDDER` para que deje de usar el marcador de posición. El valor predeterminado upstream es `fake`, que convierte los bytes de la imagen en un vector mediante un hash; `GET /api/health` no informa de esto, y el único síntoma es que el registro funciona pero todas las búsquedas devuelven el SKU equivocado.
3. **Registra los SKUs**: de 3 a 8 fotos cada uno, al menos frontal, trasera y lateral, bajo dos condiciones de iluminación. Menos de tres se rechaza; un sku_id repetido devuelve 409 a menos que se establezca `replace=true`.
4. **Convierte y comprueba el detector en la placa**: convierte en el host x86_64, copia el artefacto a la placa y ejecuta una comprobación de consistencia frente a la referencia en CPU.

Calcula unos 90 minutos por preset para los cuatro pasos, más el tiempo de construcción del contenedor en el host de la consola.

**Confirma que el modelo de embedding está cableado.** Un reconocimiento deja un registro completo en el flujo de eventos: slot, SKU coincidente, similitud y coordenadas por caja. Con la implementación `fake` la distribución de similitud es visiblemente anómala.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="El conjunto completo de campos de un evento de reconocimiento: slot, SKU coincidente, similitud y coordenadas por caja"/>
</div>

## Qué interfaces están disponibles

Todas las salidas están en el host de la consola: MQTT en 1883 y dos interfaces HTTP en 8089 y 8080, todas en la red local, y todas excepto el broker protegidas por la misma comprobación de token.

- **Checkout / POS** se suscribe a `retail/v1/events` y lee `summary.items`, el mapa de SKU a cantidad del frame, sin analizar el array por caja.
- **Reposición o auditoría de estanterías** lee `summary.empty_slots` y `summary.wrong_slots` del mismo mensaje.
- **Un sistema que necesite trazar una decisión** lee `detections[]`: cada caja lleva `track_id`, un `bbox` normalizado, `sku_id`, `similarity`, `top2_margin`, un bloque `ocr` y un flag `fallback`.

### El topic y el payload completos

| Interfaz / puerto | Contenido | Notas |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | Uno por frame, no uno por caja |
| HTTP `/v1/gallery/skus`, 8089 | `POST` de un sku_id, nombre para mostrar, alias, campos de licencia y 3–8 imágenes → una nueva versión inmutable | El mismo sku_id devuelve 409 a menos que `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Lista de versiones, manifiesto por versión, tar.gz con SHA256SUMS y rollback que vuelve a verificar los SHA del destino antes de cambiar | El rollback no crea una versión nueva |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Lista de eventos filtrada por escena / SKU / dispositivo / tiempo, detalle por caja, resumen por placa | API de solo lectura, misma comprobación de token |

**Lee `similarity` junto con `gallery.version`, `gallery.sha256` y los hashes de modelo en el mismo mensaje.** Los vectores de dos embedders diferentes no son comparables, y mezclarlos se manifiesta como que no se reconoce nada; por este motivo cada mensaje lleva los cuatro.

La autenticación es `Bearer <token>` con roles viewer < operator < admin. El broker se entrega anónimo y en texto claro, así que cualquiera que pueda alcanzar el puerto 1883 puede publicar eventos de reconocimiento falsificados.

## Rendimiento y datos medidos

### Detección, medida en el dispositivo

| Dispositivo | Artefacto | p50 / p95 | Coincidencia de cajas con la referencia en CPU |
|---|---|---:|---:|
| reComputer serie R2000 + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 imágenes), 94.68% (300 imágenes) |
| reComputer serie RK3588 | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% |
| reComputer serie RK3588 | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% |
| reComputer serie RK3576 | RKNN fp16, 640², dos núcleos | 51.05 / 54.18 ms | 99.91% |
| reComputer serie J40 (J4012) | TensorRT fp16, 640² | 5.18 / 5.28 ms | 99.91% |
| reComputer serie J30 (J3011) | TensorRT fp16, 640² | 5.88 / 8.89 ms | 99.27% (frames de checkout) |

Condiciones: la coincidencia se compara con la referencia en CPU a IoU ≥ 0.5; RK3588, RK3576 y J4012 usan las mismas 50 imágenes SKU-110K, J3011 usa 50 frames de checkout. El throughput de un solo stream en Hailo es 110.4 fps (`hailortcli benchmark` 110.64 fps, tiempo puramente de hardware 8.21 ms; los 0.8 ms extra son el viaje de ida y vuelta del vstream en Python). **De extremo a extremo en reComputer serie R2000 (incluidos letterbox, concatenación de salidas, decodificación y NMS) es p50 18.74 ms / p95 24.25 ms**: el NMS por clase en pure-numpy sobre unas 160 cajas tarda más que la propia inferencia.

Reproducir: `evaluation/runs/2026-09-06-det-hef/`, `evaluation/runs/2026-09-06-det-rk3588-radxa/`, `evaluation/runs/2026-09-07-embed-rknn-rk3576/`, `evaluation/runs/2026-09-07-jetson-trt/`, `evaluation/runs/2026-09-08-orin-nano-acceptance/`

### Embedding, medido en el dispositivo

| Dispositivo | Variante | p50 / p95 por recorte | Coste de recuperación frente a fp32 |
|---|---|---:|---|
| reComputer serie R2000 (CPU, 4 hilos) | DINOv2-small, INT8 con cuantización dinámica | 91.95 / 105.98 ms | Dentro de 0.65 pp en los 7 puntos de operación medidos |
| reComputer serie R2000 (CPU, 4 hilos) | DINOv2-small, fp32 | 180.75 / 233.41 ms | Línea base |
| reComputer serie RK3588 (NPU) | DINOv2-small, RKNN fp16 | 48.68 / 49.86 ms | Como mucho 0.85 pp en 21 métricas |
| reComputer serie RK3576 (NPU, dos núcleos) | DINOv2-small, RKNN fp16 | 56.38 / 62.17 ms | Como mucho 0.36 pp en 21 métricas |
| reComputer serie J40 (J4012) | DINOv2-small, TensorRT fp16 | 4.23 / 4.69 ms | Como mucho 0.24 pp en 21 métricas |
| reComputer serie J30 (J3011) | DINOv2-small, TensorRT fp16 | 5.06 / 7.64 ms | Como mucho 0.21 pp en 21 métricas |

Condiciones: las 21 métricas son top-1, top-5 y AUROC open-set en 4 niveles de registro en el Grocery Store Dataset y 3 en Products-10K. En la CPU, cuantizar solo los pesos casi no cuesta precisión de recuperación; cuantizar también las activaciones cuesta mucho.

Reproducir: `evaluation/runs/2026-09-06-embed-small/` §8, `evaluation/runs/2026-09-07-embed-rknn/`, `evaluation/runs/2026-09-07-embed-rknn-rk3576/`, `evaluation/runs/2026-09-07-jetson-trt/`, `evaluation/runs/2026-09-08-orin-nano-acceptance/`

### Replays de la cadena completa y recortes de estantería, medidos en el dispositivo

| Dispositivo | Escena | Resultado | Condiciones |
|---|---|---|---|
| reComputer serie J40 (J4012) | Replay de checkout | De detección a resultado publicado p50 22.3 ms / p95 42.8 ms; 0 frames perdidos sobre 2956 frames | Replay de vídeo grabado, galería de 30 SKUs; detección, embedding, recuperación y publicación MQTT en el mismo dispositivo |
| reComputer serie J30 (J3011) | Replay de checkout | 0 frames perdidos sobre 6726 frames (2.27 bucles), los 84 eventos publicados | Mismo vídeo grabado y misma galería |
| reComputer serie RK3588 | Replay de estantería | De detección a resultado publicado p50 924 ms / p95 1153 ms; top-1 541/704 en 704 recortes de slots, idéntico a la referencia CPU fp32 | 20 SKUs, detector y embedder ambos RKNN fp16 en la NPU |
| reComputer serie RK3576 | Recortes de estantería | Top-1 76.28% en 704 recortes (CPU fp32 76.99%), 99.29% de coincidencia mismo SKU; embedder p50 61.0 ms por recorte | Los mismos 704 recortes, detector y embedder ambos RKNN fp16 |

Reproducir: `evaluation/runs/2026-09-07-jetson-trt/`, `evaluation/runs/2026-09-08-orin-nano-acceptance/`, `evaluation/runs/2026-09-08-rk3588-console-acceptance-020/`, `evaluation/runs/2026-09-08-rk3576-acceptance/`

### Precisión de recuperación y detección (fuera del dispositivo)

| Configuración | Resultado | Dataset |
|---|---:|---|
| DINOv2-base, 8 imágenes de registro por SKU | top-1 84.67% / top-5 96.66% | Grocery Store Dataset, 81 clases, fp32 |
| DINOv2-small, 8 imágenes de registro por SKU | top-1 79.11% | Igual |
| DINOv2-small, 1 imagen de registro por SKU | top-1 51.11% | Igual |
| DINOv2-base, 8 por SKU, SKUs reservados | top-1 78.92% | Conjunto reservado de Products-10K, muchas más clases |
| Detector, 640² | mAP50-95 52.84, mAP50 88.26 | Test de SKU-110K |
| Detector, 1280² | mAP50-95 56.32 | Test de SKU-110K |

Los resultados publicados de SKU-110K van desde mAP50-95 58.0 (DenseDet, Cascade R-CNN + ResNeXt-101) hasta 58.7 (arXiv 2007.11946). A 640², mAP50 es 88.26 mientras que mAP50-95 es 52.84: las cajas se encuentran pero la localización es imprecisa. El número de vistas de registro es lo que más importa para la recuperación: mismo modelo, mismo dataset, 51.11% con 1 imagen por SKU y 79.11% con 8.

Reproducir: `evaluation/runs/` (evaluación de embedding: `evaluation/eval_embedder.py`)

### Tiempos de ejecución y parámetros clave

| Dispositivo | Detector | Embedder | Cómo llega el modelo al dispositivo |
|---|---|---|---|
| reComputer serie RK3588 / RK3576 | `.rknn` en la NPU, fp16 o INT8 | onnxruntime en la CPU, o RKNN fp16 en la NPU | Convertido en un host x86_64 con rknn-toolkit2 2.3.2; la versión del toolkit debe coincidir con `librknnrt.so` en la placa |
| reComputer serie R2000 + Hailo-8 | INT8 `.hef` en la NPU | DINOv2-small INT8 con cuantización dinámica en la CPU | Compilado en un host x86_64 con Hailo Dataflow Compiler, luego copiado a la placa |
| reComputer serie J40 / J30 (Jetson Orin) | TensorRT fp16 (GPU) | TensorRT fp16 (GPU) | Motores construidos desde ONNX en el dispositivo en tiempo de despliegue; 427 s para el detector y 132 s para el embedder en J3011 |

El detector es un YOLOX-Tiny de una sola clase (640² o 1280²); el embedder es DINOv2 ajustado con ArcFace sobre imágenes de productos de comercio electrónico, base (348 MB fp32) o small (23.5 MB INT8), produciendo un vector de 512 dimensiones por recorte; la identidad del SKU solo existe en la búsqueda de coseno de FAISS sobre la galería versionada.

- Tamaño de entrada: **640²** para checkout, **1280²** para estanterías; compilado en el artefacto y fijo en tiempo de ejecución
- Imágenes de registro: **3–8** por SKU; menos de tres se rechazan
- `RETAIL_EMBEDDER`: el valor predeterminado upstream es `fake` (convierte los bytes de la imagen en un vector mediante un hash); cámbialo al ONNX de DINOv2 en el momento del despliegue

### Degradaciones conocidas

- En el preset Hailo-8, el embedding es una inferencia en CPU por caja: a 91.95 ms por recorte, una cesta de cinco artículos tarda alrededor de medio segundo y un frame de estantería (157.6 cajas) unos 14 segundos, así que los despliegues en estantería deben muestrear frames o muestrear por slot.
- Ninguno de los dos intentos de cuantización en Hailo-8 para el embedder DINOv2 dio un resultado utilizable (en uno, cada imagen se mapeaba al mismo vector), por lo que el preset Hailo-8 mantiene el embedding en la CPU.
- Cuando detección y embedding comparten una GPU, la detección en proceso en reComputer serie J40 (J4012) sube de 5.18 ms p50 en solitario a 8.76 ms, y el embedding de 4.23 ms a 5.37 ms.
- El INT8 QDQ estático (activaciones también cuantizadas) pierde entre 3.78 y 9.96 puntos porcentuales de recuperación y es inutilizable.
- Una discrepancia entre rknn-toolkit2 y `librknnrt.so` puede cargar con normalidad y devolver valores erróneos; comprueba la coincidencia frente a la referencia en CPU después de cada conversión.
- Un artefacto 640² en una estantería no detecta productos lejanos; el mAP50-95 para objetos pequeños de SKU-110K es 17.49 a 640² y 26.88 a 1280².
- Los vectores de dos embedders diferentes no son comparables; mezclarlos se manifiesta como que no se reconoce nada.
- El runtime en el dispositivo que descarga una versión de galería, la verifica y cambia de forma atómica no está implementado, así que los SKUs recién registrados no llegan automáticamente a los dispositivos.
- El re-ranking por OCR y el fallback VLM no están implementados: el mensaje ya lleva los bloques `top2_margin`, `ocr` y `fallback`, pero el código no está implementado.

### Próximos pasos

- Medir la precisión del conteo en caja y la precisión por hueco de estantería como métricas de aceptación.
- Implementar el runtime del lado del dispositivo que obtenga una versión de la galería, la verifique y cambie de forma atómica, de modo que los SKUs recién registrados lleguen automáticamente a los dispositivos.

## Fuentes de datos y recursos

**El paquete no contiene pesos de modelos ni imágenes de conjuntos de datos.** Las restricciones siguientes se aplican a todo lo entrenado con estos datos; el despliegue comercial requiere reentrenar el detector y el embedder con datos comercialmente utilizables.

| Recurso | Licencia / alcance | Notas |
|---|---|---|
| Pesos del detector (entrenado en [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Licencia Trax: académica y no comercial; la cláusula (iii) prohíbe trabajos derivados | `use_scope: academic-only`, `redistributable: false` |
| Pesos del embedder (ajustado finamente en JD Products-10K) | Investigación y educación no comercial | `use_scope: non-commercial`, `redistributable: false` |
| backbones `facebook/dinov2-base`, `facebook/dinov2-small` | Apache-2.0 | Los backbones son comercialmente utilizables; la restricción proviene de los datos de entrenamiento |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Solo evaluación de recuperación; el único conjunto de datos comercialmente utilizable en este conjunto |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / solo académico / la licencia debe confirmarse con el propietario del conjunto de datos | Aparecen en el plan de evaluación upstream; alcance no comercial |
| Código del proyecto | Apache-2.0 | |

Los campos por artefacto (`license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256`) están en las model cards upstream; hay un resumen en `gallery/ATTRIBUTION.md` del paquete. El diagrama de arquitectura en la página de diseño de referencia está dibujado por nosotros a partir de la lista de dispositivos del paquete.
