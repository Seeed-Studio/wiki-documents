---
description: Reconocimiento de productos de supermercado en el edge: un detector de una sola clase, una galería de embeddings que registra un nuevo SKU a partir de fotografías en lugar de una ejecución de entrenamiento, qué hardware necesita, cómo se despliega, los datos medidos por placa y detalles de implementación para ingenieros
title: 'Reconocimiento de productos en el edge: construcción, despliegue y resultados medidos'
keywords:
  - reconocimiento de productos en el edge
  - reconocimiento de productos en caja sin código de barras
  - auditoría de estanterías con detección de huecos vacíos
  - registro de SKU sin reentrenamiento
  - galería de productos FAISS
  - recuperación de imágenes con embedding ArcFace
  - detector de una sola clase YOLOX
  - embedding DINOv2 INT8
  - paridad RKNN fp16
  - Hailo-8 HEF
  - MQTT
  - RK3588
  - reComputer R2000 Serie
image: https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png
slug: /solutions/edge-product-recognition
sidebar_position: 6
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Lee esto primero]
Este es un diseño de referencia en progreso, no un producto terminado. La consola — registro, versionado de la galería, la interfaz de gestión, el broker — está implementada, y el detector ha sido convertido y medido en dos placas. **El proceso del lado del dispositivo que uniría detección, embedding, consulta a la galería y publicación MQTT en un solo servicio aún no existe upstream**, por lo que en esta página no hay precisión de conteo extremo a extremo, ni precisión por hueco de estantería ni prueba de resistencia. Ningún preset lleva `verified: [hardware]`. No es una balanza comercial certificada y no hace ninguna afirmación sobre un conteo o precio legalmente vinculante.
:::

## Qué hace esta solución

Una cámara observa una cinta de caja o el frente de una estantería. Cada producto en el encuadre se encuadra, recorta, convierte en un vector de 512 dimensiones y se consulta en una galería de SKUs registrados. En la caja el resultado es una cesta — una lista de SKU a cantidad, agregada por id de pista para que un artículo que pasa por la cámara se cuente una sola vez. En la estantería es un estado de hueco — correcto, vacío, SKU incorrecto o desconocido — agregado por posición de planograma. Un mensaje MQTT por frame transporta todo.

La parte interesante es lo que ocurre cuando la tienda añade un producto. **Nada se reentrena.** Fotografías el nuevo SKU entre tres y ocho veces, envías las imágenes a la consola, y la galería obtiene una nueva versión inmutable. El detector nunca aprende sobre productos individuales — es de una sola clase, solo responde “hay un producto aquí” — y el embedder tampoco se actualiza.

- Selección y despliegue: [Página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition)
- Repositorio upstream: no publicado. El paquete no incluye `intro.links.github`; el código vive en un repositorio interno en el momento del empaquetado.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>Un nuevo SKU cuesta 3–8 fotografías, no una ejecución de entrenamiento</h3>
                <p>El registro acuña una nueva versión inmutable de la galería. Pasar de una imagen de registro a ocho vale 28 puntos porcentuales de precisión top-1 (ver el apéndice).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>La detección se convierte limpiamente al NPU</h3>
                <p>RKNN fp16 en RK3588 coincide con la referencia de CPU en el 99,85% de las cajas a 56,7 ms p50; el Hailo-8 INT8 HEF corre a 9,04 ms p50 con un 94,77% de coincidencia.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>El embedding es un coste de CPU de unos 92 ms por recorte</h3>
                <p>Medido en un reComputer R2000 Serie, cuatro hilos, DINOv2-small INT8 cuantizado dinámicamente — a menos de 0,65 pp del mismo modelo en fp32.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Nada sale del sitio</h3>
                <p>La cámara, el host de reconocimiento y el host de la consola son todos locales, y el broker se ejecuta en la pila de la consola. El broker incluido es anónimo y en texto plano: añade cuentas y TLS antes de que salga de un banco de pruebas.</p>
            </div>
        </li>
    </ul>
</div>

### Cómo es la consola

El paquete upstream incluye cuatro capturas de pantalla de la interfaz de gestión: la lista de eventos, el detalle de evento por caja, la galería de productos y el panel de caja/estantería. **Las cuatro fueron producidas por la herramienta upstream `web_demo` contra fixtures sintéticos**: los SKUs, puntuaciones de similitud y eventos que aparecen son datos de prueba, no resultados de campo. Muestran la forma de la interfaz, y nada sobre la calidad del reconocimiento.

### Los tres estados de la estantería

Dos ejecuciones el 2026-09-07, una en RK3588 y otra en reComputer R2000 Serie con Hailo-8, ejercitaron la decisión de estantería. Cada hueco recibe uno de tres estados: correcto, vacío o SKU incorrecto.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="Panel de estantería con cada hueco coincidiendo con la galería, marcado como correcto"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="Un artículo retirado de la misma estantería; ese hueco pasa a vacío"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="Un artículo que no pertenece al hueco; se marca como SKU incorrecto con el SKU realmente coincidente"/>
</div>

Los tres estados en secuencia:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="La misma estantería pasando por los estados correcto, vacío y SKU incorrecto"/>
</div>

La cadena de caja produce pistas por persona y por artículo en lugar de estados de hueco:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Pistas de artículos y reconocimiento por artículo en la vista de caja"/>
</div>

Estos frames provienen de las dos ejecuciones de hardware bajo `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`. Los productos son artículos físicos comprados para el proyecto, no imágenes de dataset.

## Qué hardware necesitas

Cuatro elementos por sitio: una cámara, un host de reconocimiento, un host de consola y una máquina x86_64 usada una vez por modelo para la conversión.

**① Cámara**: cualquier cámara RTSP o USB sobre la cinta de caja o frente a la estantería. No se ejecuta nada en ella. El tamaño de frame que importa es el que está compilado en el artefacto: 640² para la caja, 1280² para la estantería.

**② Host de reconocimiento**: aquí es donde difieren los presets y donde está el terreno medido:

| | Host | Medido en este hardware | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" alt="reComputer R2000 series 8GB" width="110" /> | [reComputer R2000 Serie 8GB](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) + [Raspberry Pi AI HAT+ (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)<br/>Detector en el NPU, embedder en los cuatro núcleos A76 | Ambas etapas: 9,04 ms de detección, 91,95 ms por recorte en embedding | Quieres ambas etapas medidas en la placa que realmente tienes en la mano |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector en el NPU de Rockchip, embedder en su CPU | Solo el detector, en un RK3588 (reComputer RK3588 Serie reComputer RK3588 Serie): 99,85% de coincidencia de cajas a 56,7 ms | Ya utilizas placas Rockchip. RK3576 usa la misma cadena de herramientas pero no tiene mediciones en absoluto |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Ruta TensorRT | Nada | Ya utilizas Jetson y aceptas que primero hay que escribir el backend |

Las cifras de latencia son por etapa en el hardware nombrado en la fila. No hay ninguna cifra de rendimiento o número de streams en este diseño, porque aún no hay ningún proceso que ejecute las dos etapas de forma consecutiva en un dispositivo.

**③ Host de consola**: tu propia máquina Linux amd64 o arm64 con Docker y sin GPU, accesible desde cada dispositivo de reconocimiento. Ejecuta tres contenedores: el servicio de registro/consulta, la interfaz de gestión y un broker MQTT. **Ninguna de las imágenes de contenedor se ha subido a un registro**; ambas se construyen en este host a partir del repositorio upstream, con la SPA construida primero (`npm --prefix web/ui ci && npm --prefix web/ui run build`) porque las imágenes no ejecutan npm.

**④ Una máquina x86_64 para la conversión**: ni rknn-toolkit2 ni Hailo Dataflow Compiler se ejecutan en la placa de destino. Esto es una vez por modelo, no una vez por despliegue.

## Cómo desplegar en el sitio

Dos partes: la instalación física, que decide cuántos recortes cuesta cada frame, y el software, que son cuatro pasos por preset.

### 1. Montaje

:::tip[Elige el artefacto antes de elegir el montaje]
El tamaño de entrada está compilado en el artefacto y nunca se cambia en tiempo de ejecución. Un artefacto 640² alimentado con imágenes de estantería pierde los productos lejanos; pasar a 1280² eleva el mAP50-95 de objetos pequeños en la prueba SKU-110K de 17,49 a 26,88. Decide primero si es caja o estantería, luego monta de modo que los productos llenen el encuadre en consecuencia.
:::

La segunda restricción es aritmética, no óptica. El embedding es un paso de CPU por caja. Con los 91,95 ms por recorte medidos en un reComputer R2000 Serie, una cesta de cinco artículos son alrededor de medio segundo, y un frame de estantería a la densidad medida de 157,6 cajas son unos 14 segundos. **Los despliegues en estantería necesitan salto de frames o muestreo a nivel de hueco; eso es una decisión de diseño, no un parámetro de ajuste.**

### 2. Software, cuatro pasos

Los pasos por dispositivo están en la página de diseño de referencia. En resumen, cada preset hace las mismas cuatro cosas:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configurar y desplegar 🖱️</font></span></strong>
    </a>
</div><br />

1. **Levantar la pila de la consola**: servicio de registro, interfaz y broker en el host de consola, con la tabla de tokens de rol escrita en el momento del despliegue. No hay token por defecto ni lectura anónima; el servicio se niega a arrancar con una tabla vacía.
2. **Coloca el modelo de embedding**: el ONNX de DINOv2 va donde la consola lo monta, y `RETAIL_EMBEDDER` se cambia del marcador de posición. El valor predeterminado upstream es `fake`, que convierte los bytes de la imagen en un vector mediante un hash; no se informa mediante `GET /api/health`, así que "el registro funciona pero cada búsqueda devuelve el SKU equivocado" es el único síntoma.
3. **Registra SKUs**: de 3 a 8 fotografías cada uno, como mínimo frontal, trasera y lateral en dos condiciones de iluminación. Se rechaza menos de tres; el mismo sku_id devuelve 409 a menos que `replace=true`.
4. **Convierte y comprueba el detector en la placa**: convierte en el host x86_64, copia el artefacto y ejecuta la comprobación de paridad frente a la referencia de CPU. **Aquí es donde cada preset se detiene actualmente**: no existe ningún servicio del lado del dispositivo que arrancar después.

Calcula unos 90 minutos por preset para los pasos 1–4, más la construcción del contenedor en el host de la consola.

**Cómo saber que este paso funcionó.** Un reconocimiento deja un registro completo en el flujo de eventos: hueco, SKU coincidente, similitud y coordenadas por caja. Úsalo para comprobar que el modelo de embedding está realmente cableado: con la implementación `fake` la distribución de similitud es visiblemente incorrecta.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="El conjunto completo de campos de un evento de reconocimiento: hueco, SKU coincidente, similitud y coordenadas por caja"/>
</div>

<!-- TODO image: shelf and camera as installed on site — needs a field shoot -->

## Cómo conectarlo a tu propio sistema

Todo sale del host de la consola: MQTT en 1883 y dos superficies HTTP en 8089 y 8080, todas en la red local, todas detrás de la misma puerta de token excepto el broker.

- **Una caja o POS** se suscribe a `retail/v1/events` y lee `summary.items`, un mapa de SKU a cantidad para el frame. No necesita analizar el array por caja.
- **Un sistema de reposición o auditoría de estanterías** lee `summary.empty_slots` y `summary.wrong_slots` del mismo mensaje.
- **Cualquier cosa que tenga que explicar una decisión** lee el array `detections[]`: por caja, `track_id`, `bbox` normalizado, `sku_id`, `similarity`, `top2_margin`, el bloque `ocr` y un flag `fallback`.

### El topic y el payload completos

| Interfaz / puerto | Payload | Notas |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | Un mensaje por frame, nunca uno por caja |
| HTTP `/v1/gallery/skus`, 8089 | `POST` con sku_id, nombre para mostrar, alias, un campo de licencia y de 3 a 8 imágenes → una nueva versión inmutable | 409 en un sku_id duplicado a menos que `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Listado de versiones, manifiesto por versión, un tar.gz con SHA256SUMS dentro y rollback que vuelve a verificar el SHA de destino antes de cambiar | El rollback no acuña una versión nueva |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Lista de eventos filtrada por escena, SKU, dispositivo y tiempo; detalle por caja; el resumen de la placa | API de solo lectura detrás de la misma puerta de token |

**El campo que más fácilmente se malinterpreta es `similarity`.** Solo es interpretable junto con `gallery.version`, `gallery.sha256` y los hashes de modelo en el mismo mensaje: los vectores producidos por dos embedders diferentes no son comparables, y el síntoma de mezclarlos es "no se reconoce nada". Por eso cada mensaje lleva los cuatro.

La autorización es `Bearer <token>` con viewer < operator < admin. El broker, en cambio, es texto plano anónimo en la configuración incluida: cualquiera que pueda alcanzar 1883 puede publicar eventos de reconocimiento falsificados.

## Para ingenieros: detalles de implementación

### Dos modelos, y por qué existe la división

Un clasificador tendría que reentrenarse para cada producto nuevo. Este diseño divide el problema de modo que nada aprenda la identidad del producto:

| Etapa | Modelo | Salida | ¿Cambia cuando se añade un SKU? |
|---|---|---|---|
| Detección | YOLOX-Tiny, una sola clase, 640² o 1280² | Cajas, sin clase | No |
| Embedding | DINOv2 ajustado con ArcFace en imágenes de productos de comercio electrónico: base (348 MB fp32) o small (23.5 MB INT8) | Vector de 512 dimensiones por recorte | No |
| Identidad | Búsqueda coseno en FAISS en una galería versionada | SKU + similitud + margen top-2 | **Sí: una nueva versión de galería inmutable** |
| Agregación | Id de track (caja) o hueco de planograma (estantería) | Cesta, u ok / empty / wrong_sku / unknown | No |

### Matriz de runtime

| Host | Detector | Embedder | Entrega |
|---|---|---|---|
| RK3588 / RK3576 | `.rknn` fp16 o INT8 en la NPU | onnxruntime en la CPU, no existe conversión a RKNN | Convertido en un host x86_64 con rknn-toolkit2 2.3.2, onnx fijado a 1.16.1, setuptools por debajo de 81; la versión del toolkit debe coincidir con el `librknnrt.so` de la placa |
| reComputer R2000 series + Hailo-8 | INT8 `.hef` en la NPU | DINOv2-small INT8 cuantizado dinámicamente en la CPU | Compilado con Hailo Dataflow Compiler en un host x86_64, copiado a la Pi |
| Jetson Orin | No implementado | No implementado | `platforms/` upstream solo contiene console, hailo y rknn; la entrada jetson del README se heredó del proyecto donante y apunta a archivos que nunca se copiaron |

Un desajuste de versión entre rknn-toolkit2 y `librknnrt.so` **no siempre falla de forma ruidosa**: puede cargar y producir números erróneos. La comprobación de paridad frente a la referencia de CPU existe precisamente por este motivo y no es opcional.

### El protocolo de versión de la galería

La galería es el único estado mutable, y solo se modifica acuñando una versión nueva:

| Propiedad | Comportamiento |
|---|---|
| Directorio de versión | Inmutable: vectores, tabla de SKU, índice FAISS, manifiesto, SHA256SUMS |
| Manifiesto | Registra qué modelo de embedding y qué preprocesado produjeron los vectores |
| Conmutación | Atómica, bloqueo de un solo escritor |
| Rollback | Vuelve a verificar el SHA de la versión de destino antes de cambiar y no acuña una versión nueva |
| Descarga | `current/download` sirve un tar.gz con SHA256SUMS dentro |

**La mitad de consola de esto está implementada; la mitad de dispositivo no.** El runtime que obtendría una versión, verificaría sus checksums y cambiaría de forma atómica aún no existe, por lo que un SKU recién registrado no llega hoy a ningún dispositivo.

### Qué está especificado y no implementado

- **Reranking por OCR.** El campo `top2_margin` y el bloque `ocr` están en el esquema del mensaje, y el reranking que los usaría cuando las similitudes top-1 y top-2 están próximas no está escrito.
- **Un fallback VLM.** El bloque `fallback` está en el esquema por el mismo motivo.
- **El pipeline del lado del dispositivo**, para cada plataforma.
- **Un backend TensorRT**, para el preset Jetson.

## Apéndice: datos medidos

Sáltate esta sección si no estás comprobando números. Todo lo que sigue se midió en el hardware con el que se nombra; nada se interpola a partir de una placa similar, y cada archivo de límites en el árbol de evaluación upstream lleva `reproduced_by: null`.

### Detección, en hardware

| Host | Artefacto | p50 / p95 | Acuerdo de cajas vs referencia de CPU | Fuente |
|---|---|---:|---:|---|
| reComputer R2000 series + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 imágenes), 94.68% (300 imágenes) | `evaluation/runs/2026-09-06-det-hef/` |
| RK3588 (reComputer RK3588 series reComputer RK3588 series) | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% | `evaluation/runs/2026-09-06-det-rk3588-radxa/` |
| RK3588 (reComputer RK3588 series reComputer RK3588 series) | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% | misma ejecución |

El acuerdo es IoU ≥ 0.5 frente a la referencia de CPU. El throughput de una sola secuencia en Hailo es 110.4 fps, verificado de forma independiente con `hailortcli benchmark` en 110.64 fps y 8.21 ms de tiempo de hardware puro: los 0.8 ms extra son el viaje de ida y vuelta del vstream de Python. **De extremo a extremo en la Pi, incluyendo letterboxing, ensamblado de salida, decodificación y NMS, es 18.74 ms p50 / 24.25 ms p95**: el NMS por clase en puro numpy sobre unas 160 cajas cuesta más que la inferencia. No se observó estrangulamiento térmico durante la ejecución; la temperatura del dado de Hailo y el consumo de energía no pudieron leerse en esta plataforma y se registran como no disponibles en lugar de estimados.

### Embedding, en hardware

| Variante | Por recorte p50 / p95 | Coste de recuperación vs fp32 |
|---|---:|---|
| DINOv2-small, INT8 cuantizado dinámicamente, 4 hilos | 91.95 / 105.98 ms | dentro de 0.65 pp en las siete configuraciones medidas |
| DINOv2-small, fp32, 4 hilos | 180.75 / 233.41 ms | baseline |
| DINOv2-small, INT8 QDQ estático (activaciones cuantizadas también) | — | **pierde de 3.78 a 9.96 puntos; no usable** |

Medido en la CPU de un reComputer R2000 series, `evaluation/runs/2026-09-06-embed-small/` §8. La cuantización solo de pesos es casi gratuita aquí; cuantizar activaciones no lo es.

### Precisión de recuperación y detección, fuera del dispositivo

| Configuración | Resultado | Dataset |
|---|---:|---|
| DINOv2-base, 8 imágenes de registro por SKU | 84.67% top-1 / 96.66% top-5 | Grocery Store Dataset, 81 clases, fp32 |
| DINOv2-small, 8 imágenes de registro por SKU | 79.11% top-1 | mismo |
| DINOv2-small, 1 imagen de registro por SKU | 51.11% top-1 | mismo |
| DINOv2-base, 8 imágenes por SKU, SKUs reservados | 78.92% top-1 | Products-10K split reservado, muchas más clases |
| Detector, preset 640² | 52.84 mAP50-95, 88.26 mAP50 | SKU-110K test |
| Detector, preset 1280² | 56.32 mAP50-95 | SKU-110K test |

Ambos límites del detector se sitúan en el nivel de fallo propio del proyecto, cuyo umbral es 60 mAP50-95. Ese 60 es un valor genérico que este proyecto aplica a cada métrica, no uno fijado a partir de SKU-110K; los resultados publicados en SKU-110K alcanzan 58.0 (DenseDet, Cascade R-CNN + ResNeXt-101) y 58.7 (arXiv 2007.11946). La mAP50 a 640² es 88.26: las cajas se encuentran y no se colocan ajustadas. La mAP50-95 de objetos pequeños sube de 17.49 a 640² a 26.88 a 1280², que es por lo que el preset de estantería existe como artefacto separado.

El factor individual más influyente en esta página es el número de vistas registradas por SKU: 51,11% con una imagen, 79,11% con ocho, en el mismo modelo y el mismo conjunto de datos.

## Fuentes de datos y recursos

**Este paquete no incluye pesos de modelos ni imágenes de conjuntos de datos.** Las restricciones siguientes se heredan a todo lo entrenado sobre estos conjuntos de datos, por lo que un despliegue comercial es una tarea de reentrenamiento y no una conversación de licencias.

| Recurso | Licencia / alcance | Nota |
|---|---|---|
| Pesos del detector (entrenados en [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Licencia Trax: académica y no comercial; la cláusula (iii) prohíbe trabajos derivados | `use_scope: academic-only`, `redistributable: false` |
| Pesos del embedder (ajustados finamente en JD Products-10K) | Investigación y educación no comercial | `use_scope: non-commercial`, `redistributable: false` |
| backbones `facebook/dinov2-base`, `facebook/dinov2-small` | Apache-2.0 | La restricción proviene de los datos de entrenamiento, no del backbone |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Solo evaluación de recuperación; el único conjunto de datos comercialmente utilizable del conjunto |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / solo académico / licencia por confirmar con el propietario del conjunto de datos | Aparecen en el plan de evaluación upstream; alcance no comercial |
| Código del proyecto | Apache-2.0 | |

Los campos por artefacto — `license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256` — están en las model cards upstream; el resumen está en `gallery/ATTRIBUTION.md` del paquete. El diagrama de arquitectura en la página de diseño de referencia está dibujado a partir del catálogo de dispositivos del paquete y es un recurso propio.
