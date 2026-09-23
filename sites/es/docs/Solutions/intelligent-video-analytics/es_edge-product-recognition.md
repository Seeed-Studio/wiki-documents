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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Léelo primero]
En la versión empaquetada (cbbfa60) el upstream todavía no une detección, embedding, consulta a la galería y publicación MQTT en un único servicio del lado del dispositivo, por lo que aquí no hay precisión de conteo de extremo a extremo, precisión por hueco de estantería ni datos de soak. Los resultados de reconocimiento no son una medición legal y no pueden utilizarse como base para precios ni para un conteo legalmente vinculante.
:::

## Qué hace esta solución

Una cámara observa una cinta de caja o el frente de una estantería. Cada producto en el encuadre se encuadra, recorta, convierte en un vector de 512 dimensiones y se consulta en una galería de SKUs registrados. En la caja, la salida es una cesta (SKU-a-cantidad, agregada por id de pista para que un artículo que pasa por la cámara se cuente una sola vez); en la estantería es un estado de hueco (ok, vacío, wrong_sku, unknown, agregado por posición de planograma). Un mensaje MQTT por fotograma transporta los resultados.

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
                <h3>La detección se ejecuta en la NPU</h3>
                <p>RKNN fp16 en RK3588 coincide con la referencia de CPU en el 99,85% de las cajas a 56,7 ms p50; el Hailo-8 INT8 HEF se ejecuta a 9,04 ms p50 con un 94,77% de coincidencia.</p>
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

El paquete upstream incluye cuatro capturas de pantalla de la interfaz de gestión: la lista de eventos, el detalle de evento por caja, la galería de productos y el panel de caja/estantería. Las cuatro fueron generadas por la herramienta upstream `web_demo` contra fixtures sintéticos; los SKUs, puntuaciones de similitud y eventos que aparecen son datos de prueba y solo muestran el diseño de la interfaz.

### Los tres estados de la estantería

La decisión de estantería se midió en la reComputer RK3588 Serie y en la reComputer R2000 Serie + Hailo-8. Cada hueco recibe uno de tres estados: correcto, vacío o SKU incorrecto.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="Panel de estantería con cada hueco coincidiendo con la galería, marcado como correcto"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="Se ha retirado un artículo de la misma estantería; ese hueco pasa a estar vacío"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="Un artículo que no pertenece al hueco; se marca como SKU incorrecto con el SKU realmente coincidente"/>
</div>

Los tres estados en secuencia:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="La misma estantería pasando por los estados correcto, vacío y SKU incorrecto"/>
</div>

La cadena de caja produce pistas por artículo:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="Pistas de artículos y reconocimiento por artículo en la vista de caja"/>
</div>

Estos fotogramas proceden de dos ejecuciones de hardware, `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*`, usando productos que el proyecto compró; ninguno procede de un dataset.

## Qué hardware necesitas

Cuatro elementos por sitio: una cámara, un host de reconocimiento, un host de consola y una máquina de conversión x86_64 (usada una vez por modelo).

**① Cámara**: cualquier cámara RTSP / USB montada sobre la caja o frente a la estantería; no se ejecuta nada en ella. El tamaño de entrada se compila en el artefacto: 640² para caja, 1280² para estantería.

**② Host de reconocimiento**: aquí es donde difieren los tres presets:

| | Host | Medido en este hardware | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Detector en la NPU, embedder en los cuatro núcleos A76 | Ambas etapas: 9,04 ms de detección, 91,95 ms por embedding de recorte | Necesitas datos medidos tanto de detección como de embedding |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Detector en la NPU de Rockchip, embedder en la CPU | Solo detector, en reComputer RK3588 Serie: 99,85% de coincidencia de cajas a 56,7 ms | Ya utilizas placas Rockchip. RK3576 usa la misma cadena de herramientas |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Ruta TensorRT | Reproducción de caja | Ya utilizas Jetson |

Todas las latencias son mediciones de una sola etapa en el hardware de esa fila.

**③ Host de consola**: tu propia máquina Linux amd64 o arm64 con Docker, sin necesidad de GPU, accesible desde cada dispositivo de reconocimiento. Ejecuta tres contenedores: el servicio de registro/consulta, la interfaz de gestión y el broker MQTT. **Ambas imágenes de contenedor se construyen en este host a partir del repositorio upstream**, no se extraen de un registro.

**④ Una máquina de conversión x86_64**: ni rknn-toolkit2 ni Hailo Dataflow Compiler se ejecutan en la placa de destino. Cada modelo se convierte una vez; los despliegues no repiten este paso.

## Cómo desplegar en el sitio

Primero fija el artefacto y la posición de la cámara, luego instala el software en cuatro pasos por preset.

### 1. Montaje: elige el artefacto y luego la posición de la cámara

:::tip[El tamaño de entrada se fija en la conversión]
El tamaño de entrada se compila en el artefacto y no puede cambiarse en tiempo de ejecución. Un artefacto de 640² mirando a una estantería no detecta productos lejanos; pasar a 1280² eleva el mAP50-95 de objetos pequeños en la prueba SKU-110K de 17,49 a 26,88. Decide primero si es caja o estantería y luego monta la cámara de modo que los productos ocupen una parte adecuada del encuadre.
:::

El embedding es una inferencia de CPU por caja. Con los 91,95 ms por recorte medidos en la reComputer R2000 Serie, una cesta de cinco artículos tarda alrededor de medio segundo; un fotograma de estantería con la densidad medida de 157,6 cajas tarda unos 14 segundos. **Los despliegues en estantería deben submuestrear fotogramas o muestrear por hueco.**

### 2. Software, cuatro pasos

Los pasos por dispositivo están en la página de diseño de referencia; esta sección enumera el flujo. Los tres presets siguen los mismos cuatro pasos:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Configurar y desplegar 🖱️</font></span></strong>
    </a>
</div><br />

1. **Poner en marcha la consola**: el servicio de registro, la interfaz y el broker se ejecutan en el host de consola, con una tabla de tokens de rol escrita en el momento del despliegue. No hay token por defecto ni lectura anónima; con una tabla vacía el servicio se niega a arrancar.
2. **Colocar el modelo de embedding**: coloca el ONNX de DINOv2 donde la consola lo monta y cambia `RETAIL_EMBEDDER` del valor provisional. El valor por defecto upstream es `fake`, que convierte los bytes de la imagen en un vector mediante hashing; `GET /api/health` no informa de esto, y el único síntoma es que el registro funciona pero cada consulta devuelve el SKU incorrecto.
3. **Registrar SKUs**: de 3 a 8 fotos cada uno, al menos frontal, trasera y lateral, bajo dos condiciones de iluminación. Menos de tres se rechaza; un sku_id repetido devuelve 409 a menos que se establezca `replace=true`.
4. **Convertir y comprobar el detector en la placa**: convierte en el host x86_64, copia el artefacto a la placa y ejecuta una comprobación de consistencia frente a la referencia de CPU.

Calcula unos 90 minutos por preset para los cuatro pasos, más el tiempo de construcción de contenedores en el host de consola.

**Confirma que el modelo de embedding está conectado.** Cada reconocimiento deja un registro completo en el flujo de eventos: hueco, SKU coincidente, similitud y coordenadas por caja. Con la implementación `fake` la distribución de similitud es visiblemente anómala.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="El conjunto completo de campos de un evento de reconocimiento: hueco, SKU coincidente, similitud y coordenadas por caja"/>
</div>

<!-- TODO image: shelf and camera as installed on site — needs a field shoot -->

## Qué interfaces están disponibles

Toda la salida está en el host de consola: MQTT en 1883 y dos interfaces HTTP en 8089 y 8080, todas en la red local, y todas excepto el broker protegidas por la misma comprobación de token.

- **Caja / POS** se suscribe a `retail/v1/events` y lee `summary.items`, el mapa de SKU a cantidad del frame, sin analizar el array por caja.
- **Reposición o auditoría de estanterías** lee `summary.empty_slots` y `summary.wrong_slots` del mismo mensaje.
- **Un sistema que necesite rastrear una decisión** lee `detections[]`: cada caja lleva `track_id`, un `bbox` normalizado, `sku_id`, `similarity`, `top2_margin`, un bloque `ocr` y un flag `fallback`.

### El topic y el payload completos

| Interfaz / puerto | Contenido | Notas |
|---|---|---|
| MQTT `retail/v1/events`, 1883 | `event_id`, `scene`, `timestamp`, `gallery.{version,sha256}`, `detections[]`, `summary.{items,empty_slots,wrong_slots}`, `models.{detector_sha256,embedder_sha256}` | Uno por frame, no uno por caja |
| HTTP `/v1/gallery/skus`, 8089 | `POST` un sku_id, nombre para mostrar, alias, campos de licencia y de 3 a 8 imágenes → una nueva versión inmutable | El mismo sku_id devuelve 409 a menos que `replace=true` |
| HTTP `/v1/gallery`, `/v1/gallery/{version}`, `/v1/gallery/current/download`, `/v1/gallery/rollback/{version}`, 8089 | Lista de versiones, manifiesto por versión, tar.gz con SHA256SUMS y rollback que vuelve a verificar los SHA del destino antes de cambiar | El rollback no crea una nueva versión |
| HTTP `/api/events`, `/api/events/{id}`, `/api/summary`, 8080 | Lista de eventos filtrada por escena / SKU / dispositivo / tiempo, detalle por caja, resumen de la placa | API de solo lectura, misma comprobación de token |

**Lee `similarity` junto con `gallery.version`, `gallery.sha256` y los hashes de modelo en el mismo mensaje.** Los vectores de dos embedders diferentes no son comparables, y mezclarlos se manifiesta como que nada es reconocido; cada mensaje lleva los cuatro por esta razón.

La autenticación es `Bearer <token>` con roles viewer < operator < admin. El broker se entrega anónimo y en texto plano, así que cualquiera que pueda alcanzar el puerto 1883 puede publicar eventos de reconocimiento falsificados.

## Rendimiento y datos medidos

### Detección, medida en el dispositivo

| Dispositivo | Artefacto | p50 / p95 | Coincidencia de cajas con la referencia en CPU |
|---|---|---:|---:|
| reComputer serie R2000 + Hailo-8 | INT8 HEF, 640² | 9.04 / 9.10 ms | 94.77% (200 imágenes), 94.68% (300 imágenes) |
| reComputer serie RK3588 | RKNN fp16, 640² | 56.7 / 89.5 ms | 99.85% |
| reComputer serie RK3588 | RKNN INT8, 640² | 26.0 / 33.2 ms | 98.35% |

Condiciones: la coincidencia se compara con la referencia en CPU a IoU ≥ 0.5. Throughput de un solo flujo en Hailo 110.4 fps (`hailortcli benchmark` 110.64 fps, tiempo puramente de hardware 8.21 ms; los 0.8 ms extra son el viaje de ida y vuelta del vstream en Python). **De extremo a extremo en la reComputer serie R2000 (incluyendo letterbox, concatenación de salida, decodificación y NMS) es p50 18.74 ms / p95 24.25 ms**: el NMS por clase en pure-numpy sobre unas 160 cajas tarda más que la propia inferencia.

Reproducir: `evaluation/runs/2026-09-06-det-hef/`, `evaluation/runs/2026-09-06-det-rk3588-radxa/`

### Embedding, medido en el dispositivo

| Variante | p50 / p95 por recorte | Coste de recuperación frente a fp32 |
|---|---:|---|
| DINOv2-small, INT8 con cuantización dinámica, 4 hilos | 91.95 / 105.98 ms | Dentro de 0.65 pp en los 7 puntos de operación medidos |
| DINOv2-small, fp32, 4 hilos | 180.75 / 233.41 ms | Línea base |

Condiciones: CPU de reComputer serie R2000. Cuantizar solo los pesos casi no cuesta precisión de recuperación; cuantizar también las activaciones cuesta mucho.

Reproducir: `evaluation/runs/2026-09-06-embed-small/` §8

### Precisión de recuperación y detección (fuera del dispositivo)

| Configuración | Resultado | Conjunto de datos |
|---|---:|---|
| DINOv2-base, 8 imágenes de registro por SKU | top-1 84.67% / top-5 96.66% | Grocery Store Dataset, 81 clases, fp32 |
| DINOv2-small, 8 imágenes de registro por SKU | top-1 79.11% | Igual |
| DINOv2-small, 1 imagen de registro por SKU | top-1 51.11% | Igual |
| DINOv2-base, 8 por SKU, SKUs reservados | top-1 78.92% | Conjunto reservado de Products-10K, muchas más clases |
| Detector, 640² | mAP50-95 52.84, mAP50 88.26 | Prueba SKU-110K |
| Detector, 1280² | mAP50-95 56.32 | Prueba SKU-110K |

Los resultados publicados de SKU-110K van desde mAP50-95 58.0 (DenseDet, Cascade R-CNN + ResNeXt-101) hasta 58.7 (arXiv 2007.11946). A 640², mAP50 es 88.26 mientras que mAP50-95 es 52.84: las cajas se encuentran pero la localización es imprecisa. El número de vistas de registro importa más para la recuperación: mismo modelo, mismo conjunto de datos, 51.11% con 1 imagen por SKU y 79.11% con 8.

Reproducir: `evaluation/runs/` (evaluación de embedding: `evaluation/eval_embedder.py`)

### Tiempos de ejecución y parámetros clave

| Dispositivo | Detector | Embedder | Cómo llega el modelo al dispositivo |
|---|---|---|---|
| reComputer serie RK3588 / RK3576 | `.rknn` en la NPU, fp16 o INT8 | onnxruntime en la CPU; sin conversión RKNN | Convertido en un host x86_64 con rknn-toolkit2 2.3.2; la versión del toolkit debe coincidir con `librknnrt.so` en la placa |
| reComputer serie R2000 + Hailo-8 | INT8 `.hef` en la NPU | DINOv2-small INT8 con cuantización dinámica en la CPU | Compilado en un host x86_64 con Hailo Dataflow Compiler, luego copiado a la placa |
| reComputer serie J40 (Jetson Orin) | TensorRT fp16 (GPU) | TensorRT fp16 (GPU) | La reproducción completa — detección, embedding, recuperación e informes — se ejecuta en J4012 y J3011 |

El detector es un YOLOX-Tiny de una sola clase (640² o 1280²); el embedder es DINOv2 ajustado con ArcFace sobre imágenes de productos de comercio electrónico, base (348 MB fp32) o small (23.5 MB INT8), produciendo un vector de 512 dimensiones por recorte; la identidad de SKU solo existe en la búsqueda de coseno FAISS sobre la galería versionada.

- Tamaño de entrada: **640²** para caja, **1280²** para estanterías; compilado en el artefacto y fijo en tiempo de ejecución
- Imágenes de registro: **3–8** por SKU; se rechazan menos de tres
- `RETAIL_EMBEDDER`: el valor predeterminado upstream es `fake` (hashea los bytes de la imagen en un vector); cámbialo al ONNX de DINOv2 en el momento del despliegue

### Degradaciones conocidas

- El embedding es una inferencia de CPU por caja: a 91.95 ms por recorte, una cesta de cinco artículos tarda alrededor de medio segundo y un frame de estantería (157.6 cajas) alrededor de 14 segundos, así que los despliegues en estanterías deben muestrear frames o muestrear por hueco.
- INT8 QDQ estático (activaciones también cuantizadas) pierde entre 3.78 y 9.96 puntos porcentuales de recuperación y es inutilizable.
- Un desajuste entre rknn-toolkit2 y `librknnrt.so` puede cargar normalmente y devolver valores erróneos; comprueba la coincidencia con la referencia en CPU después de cada conversión.
- Un artefacto 640² en una estantería no detecta productos lejanos; el mAP50-95 para objetos pequeños de SKU-110K es 17.49 a 640² y 26.88 a 1280².
- Los vectores de dos embedders diferentes no son comparables; mezclarlos se manifiesta como que nada es reconocido.
- El runtime del lado del dispositivo que extrae una versión de galería, la verifica y cambia de forma atómica no está implementado, por lo que los SKUs recién registrados no llegan automáticamente a los dispositivos.
- El reordenamiento por OCR y el fallback VLM no están implementados: el mensaje ya lleva bloques `top2_margin`, `ocr` y `fallback`, pero el código no está implementado.

### Próximos pasos

- Añadir los resultados TensorRT de la reComputer serie J40 (J4012 / J3011) para detección, embedding y reproducción de caja a "Rendimiento y datos medidos" y a la tabla de tiempos de ejecución.
- Medir la precisión del conteo en caja y la precisión por hueco de estantería como métricas de aceptación.
- Implementar el runtime del lado del dispositivo que extrae una versión de galería, la verifica y cambia de forma atómica, para que los SKUs recién registrados lleguen automáticamente a los dispositivos.

## Fuentes de datos y recursos

**El paquete no contiene pesos de modelo ni imágenes de conjuntos de datos.** Las restricciones siguientes se trasladan a cualquier cosa entrenada con estos datos; el despliegue comercial requiere reentrenar el detector y el embedder con datos comercialmente utilizables.

| Recurso | Licencia / alcance | Notas |
|---|---|---|
| Pesos del detector (entrenados en [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)) | Licencia Trax: académica y no comercial; la cláusula (iii) prohíbe trabajos derivados | `use_scope: academic-only`, `redistributable: false` |
| Pesos del embedder (ajustados en JD Products-10K) | Investigación y educación no comercial | `use_scope: non-commercial`, `redistributable: false` |
| backbones `facebook/dinov2-base`, `facebook/dinov2-small` | Apache-2.0 | Los backbones son comercialmente utilizables; la restricción proviene de los datos de entrenamiento |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Solo evaluación de recuperación; el único conjunto de datos comercialmente utilizable en este grupo |
| RPC, Unitail-OCR, GroZi-120 | CC BY-NC-SA 4.0 / solo académico / licencia por confirmar con el propietario del conjunto de datos | Aparecen en el plan de evaluación upstream; alcance no comercial |
| Código del proyecto | Apache-2.0 | |

Los campos por artefacto (`license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256`) están en las model cards upstream; hay un resumen en `gallery/ATTRIBUTION.md` del paquete. El diagrama de arquitectura en la página de diseño de referencia está dibujado por nosotros a partir de la lista de dispositivos del paquete.
