---
description: Clasificación de residuos en el dispositivo en el punto de entrega: un disparo, una imagen, ocho clases de material y la categoría china de eliminación en cuatro vías por MQTT, con una devolución de llamada GPIO para una compuerta. Hardware, esquema de despliegue, contratos de salida y todos los límites medidos.
title: 'Clasificación de Residuos en el Borde: Clases de Material, la Categoría China en Cuatro Vías y MQTT'
keywords:
  - clasificación de residuos
  - clasificación de residuos edge AI
  - clasificación de materiales MQTT
  - categoría china de residuos en cuatro vías
  - contenedor inteligente
  - EfficientNet-Lite0
  - SigLIP2 open vocabulary
  - reComputer
  - Jetson Orin
  - Hailo-8
  - RK3588
  - cuantización INT8
image: https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg
slug: /solutions/edge-waste-sorting
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este es un **paquete de demostración, y no es un sistema de clasificación para cumplimiento normativo o regulatorio**. El mapeo chino de cuatro vías es una tabla que mantiene este proyecto, no una resolución certificada por una autoridad, y las definiciones municipales difieren entre ciudades: ninguna salida aquí debe ser la única base para una decisión de cobro, sanción o cumplimiento. **Nada en este paquete se ha ejecutado en el hardware de destino.** Cada cifra de precisión proviene de onnxruntime en una CPU Apple M4; las cifras de Hailo-8 provienen del emulador de Dataflow Compiler, no del silicio Hailo-8; las únicas mediciones en dispositivo real son la paridad de tiempo de ejecución en RK3588 en una placa de desarrollo RK3588, que no tiene aquí un paquete de despliegue. **Ningún preset lleva `verified: [hardware]`.**
:::

## Lo que hace esta solución

Un disparador — un botón, una llamada HTTP o movimiento en el encuadre — hace que el dispositivo capture **una imagen**, clasifique el objeto en ella en una de **ocho clases de material**, busque la **categoría china de eliminación en cuatro vías** a partir de esa clase y publique un único mensaje MQTT. En paralelo, una devolución de llamada asíncrona recibe la categoría de cuatro vías para que una compuerta, un relé o un indicador de carril pueda actuar en función de ella.

- **Dos capas de respuesta desde una sola cabeza.** El modelo predice papel, cartón, vidrio, metal, plástico, textil, orgánico y residual. La categoría de cuatro vías (可回收物 / 厨余垃圾 / 有害垃圾 / 其他垃圾) es una **tabla de búsqueda sobre el argmax de ocho clases, no una segunda cabeza**, por lo que adaptarse a las normas de una autoridad local es una edición de tabla en lugar de un reentrenamiento.
- **Disparo bajo demanda, no un flujo de vídeo.** Botón, HTTP o movimiento, con un rebote de 800 ms; un disparador que llega mientras otro está en curso se fusiona en lugar de ponerse en cola. Existe un modo continuo, limitado en frecuencia, y requiere tres predicciones top-1 idénticas seguidas antes de publicar.
- **Un contrato que se comprueba, no solo se documenta.** Cada payload se valida contra el esquema de evento antes de publicarse, incluidas las dos reglas que un JSON Schema no puede expresar: `category` debe ser igual a `top3[0]`, y `confidence` debe ser igual a `top3[0].confidence`. Un payload que falle se cuenta y se descarta.
- **Una vía opcional de vocabulario abierto.** Una torre de visión SigLIP 2 puntuada contra prototipos de texto constantes, seleccionada por despliegue con `model.track: open_vocab`. Añade clases sin reentrenar, responde en chino o en inglés a partir del mismo embedding de imagen y puede puntuar "esto no está en mi vocabulario".
- **Una interfaz de actuador sin vinculación de pines.** El runtime devuelve la llamada con una categoría; adónde va eso es trabajo de integración, por lo que la misma build se ejecuta en placas con cabeceras diferentes.

Los bytes de la imagen nunca salen del dispositivo: el payload solo transporta una ruta o un URI de almacén de objetos.

- Código fuente del empaquetado y guía de despliegue: [sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Top-1 de material 0.8877, top-1 chino de cuatro vías 0.9500</h3>
                <p>En una partición de validación deduplicada de 7417 imágenes, medido con onnxruntime en una CPU Apple M4. El desglose completo está en el apéndice.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>La línea base es EfficientNet-Lite0, no MobileNetV3-Small</h3>
                <p>La línea base original colapsó bajo INT8 en las tres cadenas edge probadas; Lite0 no lo hace, y es ligeramente más precisa en la misma partición.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Un objeto por imagen</h3>
                <p>No hay ningún detector en esta cadena. Dos objetos en un mismo encuadre producen una sola respuesta, y cuál de ellos describe es indefinido.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Nada se ha medido en silicio Jetson ni Hailo-8</h3>
                <p>El preset de Jetson es el único que tiene un archivo de modelo, y nunca se ha construido ningún engine en un Jetson; el preset de Hailo lleva una insignia de modelo pendiente.</p>
            </div>
        </li>
    </ul>
</div>

### Cómo se ve ejecutándose en un dispositivo

A continuación se muestra el área de entrega tal como la ve una reCamera PoE con el paquete `waste-sorting` instalado. No se colocó nada delante de la cámara en esta ejecución: es una referencia de encuadre, no un resultado de clasificación.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="Encuadre del área de entrega por una reCamera PoE, sin nada colocado delante de ella en esta ejecución"/>
</div>

Los resultados no van a la imagen; van a MQTT. A continuación se muestran eventos consecutivos capturados mientras se estaba suscrito a `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Eventos de clasificación consecutivos en waste/recamera-cvi/results, cada uno con el resultado de ocho clases, el mapeo de cuatro vías y el tiempo de inferencia"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

### Lo que la demo realmente muestra

El único recurso incluido en la galería de este paquete es un esquema de la ruta de datos dibujado para la solución. **Ninguna imagen derivada de conjuntos de datos está comprometida en ninguna parte del paquete**: ambos conjuntos de datos fuente permiten la redistribución, pero el repositorio ascendente mantiene toda imagen derivada de conjuntos de datos fuera del control de versiones y este paquete sigue la misma regla. `assets/models/` solo contiene manifiestos de checksums; `SHA256SUMS.hef` está deliberadamente vacío porque ningún HEF se distribuye con el paquete.

## Qué hardware necesitas

Tres cosas en el contenedor: algo que dispare el disparador, una cámara y un host.

**① Disparador**: un botón cableado al host, una llamada HTTP a `POST /trigger` en el puerto 8080 o movimiento en el encuadre. Los tres comparten el mismo rebote de 800 ms y producen el mismo evento, diferenciado por el campo `trigger` en el payload.

**② Cámara**: cualquier fuente USB, RTSP o de archivo que mire hacia abajo al área de entrega. El diseño restringe el encuadre, no el modelo de cámara: un objeto debe llenar una parte significativa del encuadre, y solo debe haber un objeto en él. Un encuadre que deje el objeto pequeño degrada la clasificación, y ninguna de las cifras de esta página se midió bajo ese encuadre.

**③ Host de clasificación**: esto es lo que decide qué rutas de modelo tienes disponibles y la mayor parte del coste.

| Host de clasificación | Acelerador | Clasificador desplegado | Vía de vocabulario abierto | Cuándo elegirlo |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | Orin GPU | EfficientNet-Lite0 224², TensorRT FP16 | No dimensionado para este módulo | Un punto de entrega con el clasificador base, el host Seeed de menor coste con un archivo de modelo |
| reComputer J4012 (Jetson Orin NX 16GB) | Orin GPU | EfficientNet-Lite0 224², TensorRT FP16 | Ofrecido — la única clase de dispositivo donde lo está | Esperas añadir tipos de objetos más adelante sin reentrenar |
| reComputer R2000 series (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | No | Estás preparando hardware Hailo-8 para esta carga de trabajo; la insignia del preset es `HEF pending` |

Ambos modelos reComputer existen en una carcasa industrial sin ventilador (reComputer Industrial J3011 / J4012) con el mismo módulo y el mismo runtime, para montaje en armario o en exteriores.

**Ninguna imagen de esta página se tomó en ninguna de estas placas.** Las filas de Jetson describen lo que incluye el paquete, no lo que se ha medido. La columna de vocabulario abierto es una declaración de recursos del catálogo de dispositivos del paquete: la torre de visión SigLIP 2 es un ONNX de 371 MB con 66,93 ms p50 por imagen en una CPU, así que necesita un acelerador, y el módulo Orin Nano 8GB no se ha dimensionado para ella.

**④ Todo lo demás**: un consumidor MQTT (el paquete levanta su propio broker local en el puerto 1883) y, si un flap o un indicador de carril están dentro del alcance, el hardware del driver más el código de integración para el callback GPIO, que se entrega sin asignación de pines. Nada en la cadena principal necesita acceso a internet.

## Cómo desplegarlo in situ

Dos fases: fijar la óptica y el disparador, luego instalar el software. El despliegue está clasificado como **intermedio**, alrededor de **35 minutos** para una primera instalación.

### Uno: encuadrar el área de caída y elegir el disparador

:::tip[Un ítem por imagen, y tiene que ocupar buena parte del encuadre]
No hay detector. Dos ítems en una sola toma producen una sola respuesta y cuál de ellos describe es indefinido, y un ítem que ocupa una parte pequeña del encuadre se clasifica peor: ninguna de las mediciones se tomó con ese tipo de encuadre. Monta la cámara mirando hacia abajo al área de caída de forma que un solo ítem llene una parte significativa de la imagen, y decide antes del despliegue si el disparador será un botón, una llamada HTTP o movimiento.
:::

### Dos: instalar el software

Los pasos por dispositivo están en la página del diseño de referencia, donde responder a unas pocas preguntas sobre el sitio también te da el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga 🖱️</font></span></strong>
    </a>
</div><br />

El esquema es el mismo en ambos presets:

1. **Elige un preset y un host.** `Camera + reComputer J30 / J40 (Orin)` o `Camera + reComputer R2000 series (Hailo-8)`.
2. **Despliega el runtime de clasificación de residuos** (obligatorio). En la ruta Orin esto construye el motor TensorRT en el dispositivo durante el despliegue: un motor está ligado a la arquitectura exacta de la GPU y a la versión de TensorRT y no se puede enviar precompilado. En la ruta Hailo el paso de despliegue comprueba las tres puertas ABI de Hailo y luego **se detiene en el archivo de modelo que falta**: este preset prepara la placa, hoy no entrega un clasificador en ejecución.
3. **Observa la clasificación en vivo** (opcional). El panel local en el puerto 8080 ofrece la previsualización MJPEG, los contadores de estado y los eventos recientes con su top-3: aquí es donde confirmas el encuadre antes de cablear nada.
4. **Cablea el disparador y confirma una clasificación** (obligatorio). Una pulsación de botón, llamada HTTP o evento de movimiento debe producir exactamente un mensaje MQTT en `waste/<stream-id>/results` cuyo `category` y `confidence` coincidan con `top3[0]`.
5. **Cambia a la vía de vocabulario abierto** (opcional, solo Orin), explicada más abajo.

## Cómo conectarlo a tu propio sistema

Los datos salen del host de clasificación por dos interfaces más un callback en proceso, con un canal lateral MQTT opcional. Todas ellas son servidas por el propio host.

- **Un sistema de operaciones o de registro**: suscríbete a `waste/<stream-id>/results` en el puerto 1883. Un mensaje JSON por clasificación, nunca uno por clase.
- **Una interfaz de kiosco, una pasarela PLC o un script de pruebas**: `POST /trigger` en el puerto 8080 dispara una captura‑y‑clasificación; `/events` devuelve los resultados recientes con su top-3.
- **Un flap, relé o indicador de carril**: el callback GPIO asíncrono transporta la categoría de cuatro vías. No tiene asignación de pines; proporcionar esa asignación es trabajo de integración.

### Tabla completa de interfaces

| Tipo | Dónde | Contenido | Notas |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | Un mensaje por clasificación. Validado contra el esquema de evento antes de publicar |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` dispara una captura‑y‑clasificación (origen del disparador `http`); vista en vivo MJPEG; estado con tiempo de inferencia, contadores de disparo y antirrebote y contadores MQTT; resultados recientes con top-3 | Panel local, sin autenticación |
| Callback GPIO | en proceso | La categoría de cuatro vías, de forma asíncrona | `actuator.enabled` es false por defecto. Sin asignación de pines |

Tres semánticas de campo fáciles de usar mal:

- **La imagen nunca va en el payload.** `image_ref.kind` es `none`, `local` u `object_store`. Bytes de imagen en Base64 en un payload son una violación del contrato y se rechazan antes de publicar.
- **`category` siempre es igual a `top3[0]`, y `confidence` siempre es igual a `top3[0].confidence`.** Ambos se comprueban antes de publicar; un payload que incumple el contrato se cuenta y se descarta en lugar de enviarse, de modo que un consumidor nunca tiene que reconciliar los dos.

El broker MQTT incluido permite conexiones anónimas: eso es para la puesta en marcha local. Un despliegue que salga del banco necesita un broker con credenciales.

## Para ingenieros: detalles de implementación

### Dos vías, una taxonomía

| Vía | Modelo | Entrada | Tamaño | Dónde se ejecuta |
|---|---|---|---|---|
| Base (incluida) | EfficientNet-Lite0 (`m1c`), cabeza de 8 clases | 224² | 13.477.056 B ONNX | Ambos presets; TensorRT FP16 en Orin, INT8 HEF en Hailo-8 |
| Base (reemplazada) | MobileNetV3-Small (`m1b`) | 224² | 6.118.606 B ONNX | Se mantiene solo como contraste del colapso INT8 |
| Vocabulario abierto (opcional) | Torre de visión SigLIP 2 ViT-B/16 + prototipos de texto constantes | 224² | 371.695.898 B ONNX | Solo Orin NX 16GB, `model.track: open_vocab` |

Los bancos de prototipos más el informe de calibración añaden unos 155 KB. La cabeza de ocho clases alimenta una tabla de búsqueda para la categoría de cuatro vías; la tabla es el punto de extensión, no la cabeza.

### Por qué cambió la base y qué sigue sin demostrarse

El grafo INT8 de MobileNetV3-Small colapsó en **todas** las cadenas de borde probadas: acuerdo del emulador Hailo DFC 0,115, RK3576 0,10, RK3588 0,22, frente a aproximadamente 0,98–1,00 para fp16 en las mismas cadenas. La cuantización post‑entrenamiento de ORT reprodujo el mismo colapso, lo que descarta un bug específico del compilador: esto es degradación de toda la red, no un problema localizado de una operación.

Existe un defecto concreto en la receta de entrenamiento: `AdamW(model.parameters(), weight_decay=1e-4)` aplica weight decay a la gamma y el sesgo de BatchNorm, y 4 de las 34 capas `BatchNorm2d` en el checkpoint m1b tienen `running_var` / `|gamma|` degradadas a magnitud denormal de float32, en las mismas capas donde aparece el precipicio de precisión INT8. **Esto no es una causa raíz demostrada.** EfficientNet-Lite0 tiene el mismo ajuste de weight decay y el mismo tipo de valores atípicos de pesos (máx `|w|` 35,70 frente a 52,35 de m1b, solo un 32% menos) y aun así no colapsa: una caída tan pequeña no explica por sí sola un cambio de 0,115 a más de 0,89 de acuerdo. La lectura más probable es que el SE‑gating y el hard‑swish sean estructuralmente más sensibles a INT8 y que el defecto de weight decay amplifique esa sensibilidad en lugar de causarla. No se ha realizado ninguna ablación para confirmar ninguna de las dos lecturas.

El coste del cambio es solo en CPU: el tiempo medio de inferencia subió de 1,886 ms a 16,796 ms, unas 9×, porque Lite0 tiene más FLOPs que MobileNetV3-Small. **En los NPUs realmente probados la penalización no se traslada**: véase la tabla de RK3588 más abajo, donde Lite0 INT8 se ejecuta a 3,803 ms p50 frente a los 4,70 ms de m1b.

### Disparador, antirrebote y el modo continuo

Una clasificación por disparador. El antirrebote de 800 ms fusiona un disparador que llega mientras otro está en curso en lugar de ponerlo en cola, de modo que una doble pulsación rápida produce una respuesta, no dos. El modo continuo está limitado en tasa y requiere **tres predicciones top‑1 idénticas seguidas** antes de publicar; el modo de disparador no tiene tal suavizado, y una sola toma es una sola respuesta.

### Vía de vocabulario abierto: dos hallazgos que determinan cómo se despliega

- **Usa la vía jerárquica, no la predicción directa de cuatro vías.** Las predicciones en inglés de ocho clases mapeadas a las cuatro categorías puntúan 0,9393; los prompts en chino que predicen las cuatro categorías directamente puntúan 0,8478. «Reciclable» no es un concepto visual; «botella de vidrio» sí lo es.
- **`residual` es lo más débil del conjunto.** Su AUROC leave‑one‑out es 0,5795, cerca del azar: elimina «residuos generales» del vocabulario y siempre hay alguna palabra de material que captura esos ítems con alta confianza. Es una definición de reserva, no un concepto visual.

### Alcance de las cifras anteriores

- **Precisión base y de vocabulario abierto y latencia en CPU**: onnxruntime 1.25.1, CPU Apple M4, batch 1.
- **Base INT8 para Hailo-8**: construida con DFC 3.31.0 / HailoRT 4.21.0, `--hw-arch hailo8`. El archivo `efficientnet_lite0_waste8_u8.hef` incluido está cuantizado con `optimization_level=2` (finetune de destilación con reconocimiento de cuantización, 8 épocas, corrección de sesgo activada) sobre 2048 recortes de entrenamiento uint8 balanceados por clase, y compilarlo requiere una GPU visible dentro del contenedor DFC; se midió en un Hailo-8 sobre todo el conjunto de validación de 7417 imágenes. El mismo grafo con `optimization_level=1` puntúa 2,40 puntos por debajo de fp32 y no se despliega. La comparación con el emulador en 200 imágenes de validación (acuerdo 0,890) proviene del empaquetado anterior `efficientnet_lite0_waste8.hef`.
- **Torre SigLIP 2 de vocabulario abierto**: `hailo parser` pasa de extremo a extremo, pero `hailo optimize` (INT8 PTQ, 256 imágenes de calibración, `optimization_level=1`) falla en la capa `ne_activation_mul_and_add78`, así que no existe un HEF para ella.
- **Base fp16 e INT8 en RK3588**: una placa de desarrollo RK3588, librknnrt 2.3.2, 50 imágenes de validación. No existe paquete de despliegue para esa placa.
- **Base en RK3576**: una placa de desarrollo RK3576, solo m1b; Lite0 no se ha convertido para RK3576.
- **Precisión en campo**: ambos conjuntos de datos son fotografías de un solo ítem (TrashNet sobre un cartón blanco, GC3 con objetos descentrados y a menudo ocluidos), así que recopila un conjunto de campo de tu propio contenedor y vuelve a medir sobre él.

## Apéndice: datos medidos {#measured-data}

Omite esta sección si solo necesitas desplegar. **La mayoría de las cifras aquí son de onnxruntime en una CPU Apple M4**, y cada tabla indica de dónde proceden sus números. Se midieron dos clasificadores en la **misma partición**, mismas imágenes, misma entrada 224², mismo posprocesado, en la misma máquina.

### Clasificador base — EfficientNet-Lite0 (m1c, enviado)

| Métrica | Valor | Condiciones |
|---|---:|---|
| Top-1 de material (8 clases) | **0.8877** | val, 7417 imágenes; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13,477,056 B |
| Top-5 de material | 0.9833 | igual |
| Top-1 chino de cuatro vías | **0.9500** | igual; búsqueda sobre el argmax de ocho clases |
| macro-F1 (7 clases con muestras) | 0.8511 | `textile` excluida — cero muestras |
| Top-1 de material, test retenido | 0.8802 | test, 7290 imágenes, misma partición que m1b |
| Latencia de inferencia, imagen única, CPU | media 16.796 ms / p50 14.724 ms / p95 28.718 ms | solo `session.run`, CPU Apple M4, batch 1 |
| Imágenes por debajo de 0.5 de confianza | 318 (4.3%) | val |
| Acuerdo ORT PTQ INT8 vs fp32 | 0.965 | 200 imágenes de val, por canal + MinMax — no es un colapso |

Directorios de ejecución: `evaluation/runs/2026-09-06-m1c-cpu`, `evaluation/runs/2026-09-06-m1c-int8-diag-quick`.

**Informa ambas cifras top-1 juntas.** La cifra de cuatro vías (0.9500) es mucho más alta que la cifra de material (0.8877) porque la confusión vidrio↔metal↔plástico se absorbe — las tres se asignan a 可回收物. Citar solo la cifra de cuatro vías exagera lo que el modelo sabe sobre materiales.

### MobileNetV3-Small (m1b) — reemplazado, se mantiene como contraste del colapso INT8

Misma partición, mismas imágenes, misma CPU.

| Métrica | Valor | Condiciones |
|---|---:|---|
| Top-1 de material (8 clases) | 0.8792 | val, 7417 imágenes; ONNX `51c7c0ed…` |
| Top-5 de material | 0.9854 | igual |
| Top-1 chino de cuatro vías | 0.9519 | igual |
| macro-F1 (7 clases con muestras) | 0.8292 | `textile` excluida |
| Top-1 de material, test retenido | 0.8807 | test, 7290 imágenes |
| Latencia de inferencia, imagen única, CPU | media 1.886 ms / p50 1.769 ms / p95 2.276 ms | solo `session.run`, CPU Apple M4, batch 1 |
| Imágenes por debajo de 0.5 de confianza | 335 (4.5%) | val |
| **Colapso INT8 — emulador Hailo-8** | top-1 0.15, acuerdo 0.115 vs CPU/nativo | 200 imágenes de val; el acuerdo fp16 en las mismas imágenes es 1.000 |
| **Colapso INT8 — RK3576 (hardware real)** | acuerdo 0.10 vs CPU golden | acuerdo fp16 0.98 en el mismo dispositivo |
| **Colapso INT8 — RK3588 (hardware real)** | acuerdo 0.22 vs CPU golden | acuerdo fp16 0.98 en el mismo dispositivo |

Directorios de ejecución: `evaluation/runs/2026-09-06-m1b-cpu`, `2026-09-06-m1b-hef`, `2026-09-06-rk3576-cat`, `2026-09-06-rk3588-radxa`.

### Pista de vocabulario abierto — SigLIP 2 ViT-B/16

Misma partición, mismas imágenes, mismo posprocesado, misma máquina.

| Métrica | Valor | Condiciones |
|---|---:|---|
| Top-1 de material (8 clases) | 0.8501 | val, 7417 imágenes; conjunto de prompts en inglés `waste8-en/v1`, plantilla `t02`, 16-shot α=0.8, temperatura 0.0075 |
| Top-5 de material | 0.9987 | igual |
| Top-1 chino de cuatro vías | 0.9393 | igual; ruta jerárquica (ocho clases, luego mapeadas) |
| macro-F1 (7 clases) | 0.7460 | igual |
| ECE (15 bins) | 0.0221 | igual |
| AUROC de conjunto abierto | 0.7538 | media sobre las 7 clases con muestras, dejando-una-clase-fuera, puntuación = `1 - max softmax` |
| Acuerdo multilingüe (zh vs en, misma imagen) | 0.8698 material / 0.9143 cuatro vías | un embedding visual, tres bancos de prototipos — sin ruido de preprocesado ni de muestreo en esta cifra |
| Top-1 de material, test retenido | 0.8620 | test, 7290 imágenes; plantillas, α y temperatura nunca se buscaron en él |
| Latencia de inferencia, imagen única | p50 66.93 ms / p95 91.62 ms | CPU Apple M4, batch 1, solo torre de visión |

Directorio de ejecución: `evaluation/runs/2026-09-05-w1-cpu`.

### Base vs vocabulario abierto, misma partición

La columna de referencia en esta comparación es **MobileNetV3-Small**, el modelo que era base cuando se ejecutó la comparación — no el EfficientNet-Lite0 enviado hoy. Lite0 es marginalmente más preciso en esta partición (val 0.8877 frente a 0.8792), por lo que la brecha de precisión no se reduce; el múltiplo de latencia sí, de 40× frente al p50 de CPU de MobileNetV3-Small a aproximadamente 4–5× frente al propio p50 de CPU de Lite0 de unos 14.7 ms. **Ninguna de las dos pistas se ha vuelto a medir frente a la otra desde el cambio de base.**

| Métrica | Base (MobileNetV3-Small) | Vocabulario abierto (SigLIP2-B/16) |
|---|---:|---:|
| Top-1 de material, val | **0.8792** | 0.8501 |
| Top-1 de material, test | **0.8807** | 0.8620 |
| Top-1 chino de cuatro vías, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| AUROC de conjunto abierto | no es posible — una cabeza de conjunto cerrado no puede eliminar una clase sin reentrenar | **0.7538** |
| Acuerdo multilingüe | sin lado de texto | **0.8698 / 0.9143** |
| Nueva clase zero-shot | requiere reentrenar | **edición de prompt** |
| Latencia p50 de CPU | **1.57 ms** | 66.93 ms |

Ambas columnas proceden de los mismos archivos de val/test, la misma entrada 224² y la misma ruta de código de softmax / top-k / mapeo. La columna base se recomputó en esta partición para la comparación; su top-1 de val coincide dígito por dígito con el informe independiente de m1b.

### Hailo-8 — compilado y comprobado en INT8 en el emulador DFC, **sin hardware Hailo-8**

| Ruta | Estado |
|---|---|
| EfficientNet-Lite0 base (m1c) → HEF | **Compilado correctamente, un intento, sin necesidad de corrección.** `hailo optimize` y `compiler` salen con 0 al primer intento — Lite0 no tiene rama Squeeze-Excite, así que nunca alcanza el problema de rango de desplazamiento de `avgpool` para el que m1b necesitó una corrección en el script del modelo. En 200 imágenes de val (DFC 3.31.0 / emulador HailoRT 4.21.0): acuerdo top-1 INT8 vs CPU/nativo **0.890**, precisión frente a la verdad de terreno **0.755** (nativo/CPU es 0.795 en las mismas imágenes) — una caída de 4 puntos, no un colapso. Similitud de coseno con CPU: media 0.948, mínimo 0.441. **Todo desde el emulador x86 en el host de compilación; no se usó ninguna tarjeta PCIe Hailo-8.** `evaluation/runs/2026-09-06-m1c-hef` |
| MobileNetV3-Small base (m1b) → HEF | Compilado, pero INT8 colapsa: acuerdo del emulador 0.115, precisión 0.150 — cerca de la base aleatoria 1/7. Reemplazado por esta razón |
| Torre de visión SigLIP 2 → HEF | `hailo parser` pasa de extremo a extremo sin ninguna op no soportada. `hailo optimize` (INT8 PTQ, 256 imágenes de calibración, optimization_level=1) **falla** con `NegativeSlopeExponentNonFixable` en la capa `ne_activation_mul_and_add78` — "Desired shift is 16.0, but op has only 8 data bits". Sin HAR optimizado, sin ejecución de compiler, sin HEF |

**Lo que "0.89 de acuerdo" sí y no respalda.** Sí respalda: EfficientNet-Lite0 se cuantiza a INT8 sin el colapso de patrones que mostró MobileNetV3-Small en la misma canalización de compilación y el mismo conjunto de calibración, y `hailo optimize` no necesitó ningún rodeo de rama SE. No respalda: que el HEF clasifique residuos correctamente en un Hailo-8 real — mide la latencia a nivel de placa, el comportamiento térmico y la precisión en tu propia unidad. El conjunto de calibración (256 imágenes) también está por debajo del umbral de ~1024 imágenes que la documentación de DFC suele recomendar, y se reutilizó sin cambios desde la ejecución de m1b en lugar de volver a muestrearse para Lite0.

La comprobación numérica de la fase de parseo sí pasó — el emulador nativo de DFC coincide con onnxruntime en CPU con similitud de coseno 1.0 y top-1 idéntico en las 20 imágenes de comparación — por lo que la traducción ONNX→HAR no introduce error. Esa es la mitad de la cuestión que puede responderse sin un Hailo-8; la mitad de INT8 no puede. Del mismo modo, nada de esto respalda la afirmación de que SigLIP 2 no puede ejecutarse en un Hailo-8: se hizo un intento en un nivel de optimización con un conjunto de calibración, y el mensaje de error menciona tres posibles causas, de las cuales solo una (normalización del conjunto de calibración) se ha comprobado y descartado.

### Placa de desarrollo RK3588 — hardware real, INT8 base utilizable

Medición en el dispositivo, no un emulador. Convertido en `wsl2-local` con rknn-toolkit2 2.3.2, ejecutado en una placa de desarrollo RK3588 con librknnrt **2.3.2** (el symlink la nombra 2.3.0; la versión dentro de la librería es la que importa), 50 imágenes de val, `core_mask=AUTO`, cuantización por canal.

| Modelo / precisión | Latencia p50 / p95 (media) | Acuerdo con CPU golden | Precisión vs verdad de terreno | Condiciones |
|---|---|---|---|---|
| **EfficientNet-Lite0 (m1c), fp16** | 7.906 ms / 8.129 ms (7.041 ms) | 1.00 | 0.78 | ONNX sha `e9f9e847…`, 50 imágenes de val |
| EfficientNet-Lite0 (m1c), int8 calib64+normal | 3.780 ms / 3.984 ms (3.807 ms) | 0.90 | 0.72 | calibración de 63 imágenes, algoritmo `normal` |
| EfficientNet-Lite0 (m1c), int8 calib64+mmse | 3.785 ms / 3.981 ms (3.808 ms) | 0.98 | 0.78 | calibración de 63 imágenes, algoritmo `mmse` |
| EfficientNet-Lite0 (m1c), int8 calib256+normal | 3.766 ms / 3.920 ms (3.500 ms) | 0.90 | 0.72 | calibración de 252 imágenes, algoritmo `normal` |
| **EfficientNet-Lite0 (m1c), int8 calib256+mmse** — recomendado | 3.803 ms / 4.003 ms (3.834 ms) | **1.00** | **0.78** | calibración de 252 imágenes, `mmse`; coincide con fp16 tanto en acuerdo como en precisión, **52% más rápido** |
| MobileNetV3-Small (m1b, reemplazado), fp16 | 4.44 ms / 6.32 ms | 0.98 | — | ONNX sha `aa181dd5…`, solo contraste |
| MobileNetV3-Small (m1b, reemplazado), int8 | 4.70 ms / 11.04 ms | **0.22 — colapsado** | — | calibración de 64 imágenes, solo contraste |

**Lee las filas de contraste de m1b como paridad de runtime, no como precisión.** Esa ejecución usó un ONNX de MobileNetV3 con sha256 `aa181dd5…`, que **no** es el archivo m1b (`51c7c0ed…`) al que se refiere cada cifra de precisión de m1b en esta página. No se deben combinar ambos en una afirmación de precisión.

**Configuración recomendada: `calib256+mmse`.** Las cuatro variantes Lite0 INT8 caen en una banda de acuerdo de 0.90–1.00; ninguna colapsa. `mmse` es entre 40 y 90 veces más lento de convertir que `normal` (17.3 min frente a 11.5 s con 256 imágenes de calibración): es un coste de conversión único, no un coste en tiempo de ejecución. El int8 de m1b fue *más lento* que su propio fp16 (4.70 ms frente a 4.44 ms), prueba de que su ejecución nunca activó la ruta rápida INT8. Directorios de ejecución: `evaluation/runs/2026-09-06-m1c-rk3588-radxa`, `2026-09-06-rk3588-radxa`.

Torre de visión SigLIP 2 en el mismo dispositivo, sin verse afectada por el cambio de m1c:

| Modelo / precisión | Latencia p50 / p95 | Acuerdo con el valor de referencia en CPU | Condiciones |
|---|---|---|---|
| Torre de visión SigLIP 2, fp16 | 169.4 ms / 170.5 ms | coseno de embedding media **0.999617**, mínimo 0.998841 | ONNX sha `6f664af0…`, 191 MB `.rknn` |

### Placa de desarrollo RK3576 — hardware real, solo m1b

| Modelo / precisión | Latencia p50 / p95 | Acuerdo con el valor de referencia en CPU | Condiciones |
|---|---|---|---|
| MobileNetV3-Small (m1b), fp16 | 9.49 ms / 12.49 ms | top-1 **98%** (49/50) | `evaluation/runs/2026-09-06-rk3576-cat` |
| MobileNetV3-Small (m1b), int8 | 4.62 ms / 6.68 ms | top-1 **10%** (5/50): inutilizable, peor que aleatorio | Calibración con 64 imágenes del conjunto de entrenamiento |
| Torre de visión SigLIP 2, fp16 | 152.51 ms / 176.59 ms | coseno de embedding media **0.99965**, mínimo 0.99900 | misma ejecución |

**EfficientNet-Lite0 no se ha convertido ni ejecutado en RK3576.** No asumas que el resultado INT8 de RK3588 se traslada: RK3576 y RK3588 son generaciones de NPU distintas y se comportaron de forma diferente en el mismo grafo MobileNetV3-Small (10% frente a 22% de acuerdo), así que cualquier afirmación en un sentido u otro sería una conjetura.

### Compatibilidad de plataforma

| Plataforma | Estado |
|---|---|
| Jetson Orin (TensorRT) | Paquete de despliegue enviado, referencia cambiada al ONNX EfficientNet-Lite0; **nunca se ha construido un engine en ningún Jetson** |
| reComputer R2000 series | Paquete de despliegue enviado; HEF de referencia compilado y comprobado en INT8 solo en el emulador DFC (acuerdo 0.890): **ningún hardware Hailo-8 lo ha ejecutado**. La torre SigLIP 2 sigue fallando la cuantización INT8 |
| RK3588 | **Paridad de inferencia verificada en hardware real, fp16 e INT8 (m1c); sin paquete de despliegue**: sin archivo compose, sin imagen, sin preset. La conversión y el runtime funcionan; el empaquetado no existe |
| RK3576 | Paridad de inferencia verificada en hardware real, fp16 e INT8: **solo m1b, no se ha vuelto a probar con la referencia actual**; sin paquete de despliegue |
| CPU (onnxruntime) | Todas las cifras de precisión de esta página |

### Huella de despliegue

| Elemento | Tamaño |
|---|---|
| ONNX de referencia (`efficientnet_lite0_waste8.onnx`, m1c, actual) | 13,477,056 B |
| ONNX de referencia (`mobilenetv3s_waste8.onnx`, m1b, reemplazado) | 6,118,606 B |
| ONNX de la torre de visión SigLIP 2 (`siglip2_vision_224.onnx`) | 371,695,898 B |
| Bancos de prototipo + informe de calibración | ~155 KB en total |

### Dónde se degrada y qué no cubren las cifras

- **`textile` tiene cero muestras de entrenamiento y cero de evaluación.** Ninguno de los conjuntos de datos de origen contiene una categoría de tela o textil: la exportación de GC3 no tiene tal etiqueta, en contra de una descripción secundaria muy repetida. El octavo logit existe y la salida ONNX sigue siendo `1×8` porque la forma de salida forma parte del contrato, pero nada lo ha entrenado ni probado; todas las tablas informan de `n/a` para esa clase en lugar de 0, y el modelo nunca la ha predicho ni una sola vez.
- **`hazardous` (有害垃圾) no tiene ninguna clase de material asignada.** Está en el enum para que el esquema se mantenga estable; esta build nunca lo emitirá.
- **Cambio de dominio.** Ambos conjuntos de datos son fotografías de elementos individuales: TrashNet sobre una cartulina blanca bajo luz diurna o interior, GC3 un conjunto de datos de detección con objetos descentrados y a menudo ocluidos. Ninguno es un contenedor real: en la evaluación no hay residuos mojados, aplastados, apilados, a contraluz o parcialmente embolsados. **No se ha recopilado ningún conjunto de campo, así que no hay cifra sobre cuánto cae la precisión en un contenedor real.** Espera que caiga; el tamaño de la caída es desconocido.
- **`organic` domina los datos.** 48.9% del conjunto de entrenamiento y 47.1% de validación, porque la clase `BIODEGRADABLE` de GC3 por sí sola representa 45407 de las 74090 cajas originales. Su recall (0.9791) está muy por encima de todas las demás clases (0.70–0.88), y la matriz de confusión muestra que el modelo empuja los elementos inciertos hacia ella.
- **`residual` tiene 20 muestras de validación.** No debería citarse por sí sola ninguna cifra de precisión para esa clase: la precisión de 0.2754 de la pista de vocabulario abierto es un artefacto tanto del número de muestras como del modelo.
- **La deduplicación es la razón por la que estas cifras son de precisión y no de fuga.** GC3 reutiliza fotografías de origen de TrashNet. La agrupación se hace por lote de origen + imagen de origen + hash perceptual (dhash 8×8, Hamming ≤ 3), unidos en componentes conexos: 430 fusiones de casi duplicados, **183 de ellas entre los dos conjuntos de datos**. Los grupos se mueven entre particiones como una unidad, y la partición garantiza que ningún grupo ni ningún dhash idéntico abarque dos particiones.

## Fuentes de datos y recursos

- **TrashNet**: [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **Licencia MIT, Copyright (c) 2017 Gary Thung**. Verificado frente a dos fuentes de primera mano: el propio archivo `LICENSE` del repositorio en el commit `6fa2b87`, y el campo `license` de la ficha oficial del conjunto de datos en HuggingFace. **Corrección registrada:** la propia SPEC del proyecto upstream y su informe de encuesta registran este conjunto de datos como CC BY 4.0. Eso es incorrecto, y ninguna fuente de primera mano indica CC BY 4.0. MIT es más permisiva: exige que se conserven el aviso de copyright y de licencia, pero no impone ninguna cláusula de compartir igual.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)**: **CC BY 4.0**, indicado literalmente en el propio `README.dataset.txt` del paquete de exportación. Ruta del proyecto `material-identification/garbage-classification-3` en Roboflow Universe.
- **SigLIP 2**: [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revisión `75de2d55…`, Apache-2.0. Usado solo por la pista opcional de vocabulario abierto.
- **Pesos iniciales de MobileNetV3-Small en ImageNet** (torchvision): BSD-3-Clause.
- **Código de runtime upstream**: Apache-2.0.
- **Diagrama de arquitectura**: dibujado para esta página a partir del propio catálogo de dispositivos y las interfaces de salida del paquete. Sin imágenes de conjuntos de datos.

Cadena de atribución, que debe usarse literalmente en material externo derivado de estos conjuntos de datos:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**En este paquete no se incluye ninguna imagen derivada de conjuntos de datos.** Ambas licencias permiten la redistribución, pero el repositorio upstream mantiene fuera del control de versiones todas las imágenes derivadas de conjuntos de datos: `data/raw`, `data/cls`, `data/crops` y las superposiciones de evaluación están todas en `.gitignore`, y este paquete sigue la misma regla. `assets/models/` solo contiene manifiestos de checksums.
