---
description: Clasificación de residuos en el dispositivo en el punto de entrega: un disparo, una imagen, ocho clases de material y la categoría china de eliminación en cuatro vías por MQTT, con una devolución de llamada GPIO para una compuerta. Hardware, esquema de despliegue, contratos de salida y todos los límites medidos.
title: 'Clasificación de Residuos en el Borde: Clases de Material, la Categoría China en Cuatro Vías y MQTT'
keywords:
  - clasificación de residuos
  - clasificación de residuos con IA en el borde
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
La asignación china en cuatro vías es una tabla mantenida por este proyecto, no una resolución de ninguna autoridad, y las normas de cada ciudad difieren; la salida no debe ser la única base para tarifas, sanciones o decisiones de cumplimiento.
:::

## Qué hace esta solución

Un disparo (un botón, una llamada HTTP o movimiento en el encuadre) hace que el dispositivo tome **una imagen**, clasifique el objeto en una de **ocho clases de material**, busque la **categoría china de residuos domésticos en cuatro vías** a partir de esa clase y publique un mensaje MQTT. Una devolución de llamada asíncrona recibe el resultado de cuatro vías al mismo tiempo, de modo que una compuerta, un relé o un indicador de carril puedan actuar en función de él.

- **Una cabeza, dos niveles de respuesta.** El modelo predice ocho clases: papel, cartón, vidrio, metal, plástico, textil, orgánico, residual. La categoría en cuatro vías (reciclable / residuos de cocina / peligrosos / otros) es una búsqueda en tabla sobre el argmax de ocho clases, por lo que adaptarse a una norma local significa editar la tabla, no reentrenar.
- **Un disparo, una captura.** Botón, HTTP o detección de movimiento con un antirrebote de 800 ms; un disparo que llega mientras el anterior sigue en ejecución se fusiona, no se pone en cola. También existe un modo continuo; está limitado en frecuencia y solo publica después de que tres fotogramas consecutivos coincidan en el top-1.
- **Las cargas útiles se validan antes de publicarse.** Cada carga útil pasa el esquema de eventos, más dos reglas que JSON Schema no puede expresar: `category` debe ser igual a `top3[0]`, y `confidence` debe ser igual a `top3[0].confidence`. Los fallos se cuentan y se descartan.
- **Una pista opcional de vocabulario abierto.** Una torre de visión SigLIP 2 evaluada frente a prototipos de texto constantes, seleccionada en el despliegue con `model.track: open_vocab`. Añade clases sin reentrenar, responde en chino o inglés a partir del mismo embedding de imagen y produce una puntuación de "no está en mi vocabulario".
- **Interfaz de actuador sin vinculación de pines.** El runtime devuelve la llamada con una categoría; qué pin se acciona se decide en el código de integración, por lo que una sola build se ejecuta en placas con distintos encabezados.

Los bytes de imagen nunca salen del dispositivo; la carga útil solo transporta una ruta o un URI de almacén de objetos.

- Código fuente del empaquetado y guía de despliegue: [sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Listo para ejecutarse en el dispositivo</h3>
                <p>Instala el paquete de la aplicación y se ejecuta; un primer despliegue tarda unos 35 minutos. Top-1 de ocho clases 0.8877, top-1 de cuatro vías 0.9500 (7417 imágenes de validación, referencia offline en CPU onnxruntime, consulta rendimiento y datos medidos).</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto</h3>
                <p>El código de runtime es Apache-2.0; los datos de entrenamiento, TrashNet (MIT) y GC3 (CC BY 4.0), ambos permiten la redistribución.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Tu propia cámara, sistemas y actuadores</h3>
                <p>Cámara USB / RTSP o una fuente de archivos; los resultados salen por MQTT, `POST /trigger` puede ser llamado por un kiosco o una pasarela PLC, y una devolución de llamada GPIO acciona una compuerta o un indicador.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Se ejecuta completamente in situ</h3>
                <p>La captura, la clasificación, la búsqueda y el broker MQTT se ejecutan todos en el host; las imágenes permanecen en el dispositivo y la cadena principal no necesita acceso a internet.</p>
            </div>
        </li>
    </ul>
</div>

### Cómo se ve ejecutándose en un dispositivo

A continuación se muestra el encuadre del área de entrega visto por una reCamera PoE después de instalar el paquete de aplicación `waste-sorting`. No se coloca nada delante de la cámara; la imagen es solo una referencia de encuadre.

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="Encuadre del área de entrega por reCamera PoE, sin nada colocado delante de ella"/>
</div>

Los resultados de clasificación van directamente a MQTT. A continuación se muestran eventos consecutivos capturados suscribiéndose a `waste/recamera-cvi/results`:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Eventos de clasificación consecutivos en waste/recamera-cvi/results, cada uno con el resultado de ocho clases, la asignación en cuatro vías y el tiempo de inferencia"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

## Qué hardware necesitas

Tres cosas en el punto de entrega: un disparador, una cámara, un host.

**① Disparador**: un botón cableado al host, `POST /trigger` en el puerto 8080, o movimiento en el encuadre. Los tres comparten un único antirrebote de 800 ms, producen el mismo evento y se distinguen por el campo `trigger` en la carga útil.

**② Cámara**: cualquier fuente USB, RTSP o de archivos que mire hacia abajo al área de entrega; cualquier modelo sirve. Un solo objeto debe ocupar una parte utilizable del encuadre, con solo un objeto a la vista. Los objetos demasiado pequeños reducen la calidad de la clasificación, y ninguno de los valores en rendimiento y datos medidos procede de ese tipo de encuadre.

**③ Host de clasificación**: determina qué rutas de modelo puedes usar.

| Host de clasificación | Acelerador | Clasificador desplegado | Pista de vocabulario abierto | Cuándo elegirlo |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | No disponible | Un punto de entrega, solo clasificador base |
| reComputer J4012 (Jetson Orin NX 16GB) | GPU Orin | EfficientNet-Lite0 224², TensorRT FP16 | Disponible (la única clase de dispositivo que lo ofrece) | Esperas añadir clases de objetos más adelante sin reentrenar |
| Serie reComputer R2000 (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224², INT8 HEF | Ninguna | Tienes o quieres hardware Hailo-8; el HEF se compila fuera del dispositivo y se descarga en el despliegue |

Ambos modelos reComputer vienen en una carcasa industrial sin ventilador (reComputer Industrial J3011 / J4012) con el mismo módulo y runtime, para un armario de control o una carcasa exterior.

La columna de vocabulario abierto proviene de las notas de recursos en el catálogo de dispositivos: la torre de visión SigLIP 2 es un ONNX de 371 MB con p50 de 66.93 ms por imagen como referencia offline en CPU onnxruntime y necesita un acelerador.

**④ Todo lo demás**: un consumidor MQTT (el paquete ejecuta un broker local en 1883); si el diseño tiene una compuerta o un indicador de carril, el hardware de control más el código de integración para la devolución de llamada GPIO, que se entrega sin estar vinculada a ningún pin. La cadena principal no necesita acceso a internet.

## Cómo desplegar in situ

Primero fija el encuadre y el disparador, luego instala el software. Clasificado como **intermedio**, unos **35 minutos** para un primer despliegue.

### Uno: instala el hardware, el encuadre y el disparador

:::tip[Un objeto por imagen, lo bastante grande]
No hay detector en esta cadena. Dos objetos en un fotograma producen una sola respuesta, y qué objeto describe es indefinido; los objetos que ocupan una parte demasiado pequeña del encuadre se clasifican peor. Monta la cámara mirando hacia abajo al área de entrega para que un solo objeto llene una parte utilizable del encuadre, y decide antes del despliegue si el disparador será un botón, HTTP o detección de movimiento.
:::

### Dos: instala el software

Los pasos por dispositivo están en la página de diseño de referencia, donde elegir una configuración para tu sitio también te da el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga 🖱️</font></span></strong>
    </a>
</div><br />

Ambos presets siguen los mismos pasos:

1. **Elige un preset y un host.** `Camera + reComputer J30 / J40 (Orin)` o `Camera + reComputer R2000 series (Hailo-8)`.
2. **Despliega el runtime de clasificación de residuos** (obligatorio). En Orin el motor TensorRT se construye en el dispositivo durante el despliegue; el motor está ligado a la arquitectura de la GPU y a la versión de TensorRT y no puede precompilarse para su distribución. En Hailo los pasos de despliegue comprueban tres puertas ABI de Hailo y luego descargan el HEF.
3. **Observa la clasificación en vivo** (opcional). El panel local en el puerto 8080 tiene una vista previa MJPEG, contadores de estado y el top-3 de resultados recientes. Confirma aquí el encuadre antes de cablear nada.
4. **Cablea el disparador y confirma una clasificación** (obligatorio). Una pulsación de botón, llamada HTTP o evento de movimiento debe producir exactamente un mensaje MQTT en `waste/<stream-id>/results`, con `category` y `confidence` coincidiendo con `top3[0]`.
5. **Cambia a la pista de vocabulario abierto** (opcional, solo Orin). Establece `model.track: open_vocab` en el momento del despliegue.

## Qué interfaces están disponibles

El host de clasificación expone dos interfaces y una devolución de llamada en proceso, todas servidas por el propio host.

- **Sistema de operaciones o de registro**: suscríbete a `waste/<stream-id>/results` en el puerto 1883. Un JSON por clasificación.
- **Interfaz de kiosco, pasarela PLC o script de prueba**: `POST /trigger` en el puerto 8080 dispara una captura y clasificación; `/events` devuelve resultados recientes con su top-3.
- **Compuerta, relé o indicador de carril**: una devolución de llamada GPIO asíncrona transporta el resultado de cuatro vías. No está vinculada a ningún pin; el código de vinculación forma parte del trabajo de integración.

### Tabla completa de interfaces

| Tipo | Dónde | Contenido | Notas |
|---|---|---|---|
| `mqtt` | 1883, `waste/<stream-id>/results` | `type`, `version`, `taxonomy_version`, `device`, `stream_id`, `frame_id`, `timestamp`, `trigger`, `inference_time_ms`, `pipeline_ms`, `category` (`class_id`, `class_name`, `china_category`, `china_category_zh`), `confidence`, `top3[]`, `image_ref`, `model` (name, backbone, input, `onnx_sha256`, accelerator) | Uno por clasificación. Validado contra el esquema de eventos antes de publicar |
| `http` | 8080, `/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` dispara una captura y clasificación (el disparador se registra como `http`); MJPEG en vivo; un endpoint de estado con tiempo de inferencia, recuentos de disparos y de antirrebote y recuentos MQTT; resultados recientes con top-3 | Panel local, sin autenticación |
| Devolución de llamada GPIO | En proceso | Resultado de cuatro vías, de forma asíncrona | `actuator.enabled` es `false` por defecto. No está vinculado a ningún pin |

Dos cosas a tener en cuenta al leer los campos:

- **La imagen nunca va en la carga útil.** `image_ref.kind` es `none`, `local` u `object_store`. Los bytes de imagen en Base64 en una carga útil violan el contrato y se rechazan antes de publicar.
- **`category` siempre es igual a `top3[0]`, y `confidence` siempre es igual a `top3[0].confidence`.** Ambos se comprueban antes de publicar y las cargas útiles que fallen se contabilizan y descartan, por lo que los consumidores no necesitan reconciliarlos.

El broker MQTT incluido permite conexiones anónimas para la puesta en servicio local; usa un broker con credenciales en un despliegue en producción.

## Rendimiento y datos medidos {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_waste_sorting</font></span></strong>
    </a>
</div><br />

### Medido en dispositivo: reComputer RK3588 series

| Modelo / precisión | Latencia p50 / p95 (media) | Coincidencia con la referencia en CPU | Precisión frente a la verdad de terreno | Condiciones |
|---|---|---|---|---|
| **EfficientNet-Lite0 (m1c), fp16** | 7.906 ms / 8.129 ms (7.041 ms) | 1.00 | 0.78 | 50 imágenes de validación |
| EfficientNet-Lite0 (m1c), int8 calib64+normal | 3.780 ms / 3.984 ms (3.807 ms) | 0.90 | 0.72 | 63 imágenes de calibración, algoritmo `normal` |
| EfficientNet-Lite0 (m1c), int8 calib64+mmse | 3.785 ms / 3.981 ms (3.808 ms) | 0.98 | 0.78 | 63 imágenes de calibración, algoritmo `mmse` |
| EfficientNet-Lite0 (m1c), int8 calib256+normal | 3.766 ms / 3.920 ms (3.500 ms) | 0.90 | 0.72 | 252 imágenes de calibración, algoritmo `normal` |
| **EfficientNet-Lite0 (m1c), int8 calib256+mmse** — recomendado | 3.803 ms / 4.003 ms (3.834 ms) | **1.00** | **0.78** | 252 imágenes de calibración, `mmse`; la coincidencia y la precisión igualan a fp16, y es **52% más rápido** |
| SigLIP 2 vision tower, fp16 | 169.4 ms / 170.5 ms | Media del coseno de embeddings **0.999617**, mínimo 0.998841 | — | 191 MB `.rknn` |

Condiciones: convertido con rknn-toolkit2 2.3.2, librknnrt 2.3.2, `core_mask=AUTO`, cuantificación por canal. La conversión `mmse` tarda entre 40 y 90 veces más que `normal` (17.3 minutos frente a 11.5 segundos con 256 imágenes de calibración), se paga una vez en la conversión y no en tiempo de ejecución.

Reproducir: `solutions/edge_waste_sorting/evaluation/runs/2026-09-06-m1c-rk3588-radxa`

En la serie reComputer RK3576 solo se ejecutaron la SigLIP 2 vision tower y la MobileNetV3-Small obsoleta: SigLIP 2 vision tower fp16 p50 152.51 ms / p95 176.59 ms, media del coseno de embeddings **0.99965**, mínimo 0.99900.

Reproducir: `evaluation/runs/2026-09-06-rk3576-cat`

### Precisión del clasificador base: EfficientNet-Lite0 (m1c, distribuido)

| Métrica | Valor | Condiciones |
|---|---:|---|
| Material top-1 (8 clases) | **0.8877** | val, 7417 imágenes; onnxruntime 1.25.1 CPU; ONNX `e9f9e847…`, 13,477,056 B |
| Material top-5 | 0.9833 | Igual |
| China de cuatro vías top-1 | **0.9500** | Igual; búsqueda sobre el argmax de ocho clases |
| macro-F1 (7 clases con muestras) | 0.8511 | `textile` excluida — cero muestras |
| Material top-1, test retenido | 0.8802 | test, 7290 imágenes |
| Latencia de inferencia por imagen, CPU | media 16.796 ms / p50 14.724 ms / p95 28.718 ms | Solo `session.run`, referencia offline en CPU, batch 1, no es una cifra de dispositivo |
| Imágenes con confianza por debajo de 0.5 | 318 (4.3%) | val |
| Acuerdo ORT PTQ INT8 vs fp32 | 0.965 | 200 imágenes de validación, por canal + MinMax, sin colapso |
| Acuerdo top-1 emulador Hailo DFC INT8 vs CPU | 0.890 | 200 imágenes de validación; precisión frente a la verdad de terreno 0.755 (CPU en las mismas imágenes 0.795); de una build anterior al HEF distribuido, sin latencia de placa |

El top-1 de cuatro vías (0.9500) es mayor que el top-1 de material (0.8877) porque la confusión entre vidrio, metal y plástico cae toda en reciclables; solo la clasificación de cuatro vías exagera lo bien que el modelo distingue materiales.

Reproducir: `evaluation/runs/2026-09-06-m1c-cpu`, `evaluation/runs/2026-09-06-m1c-hef`

### Pista de vocabulario abierto: SigLIP 2 ViT-B/16

| Métrica | Valor | Condiciones |
|---|---:|---|
| Material top-1 (8 clases) | 0.8501 | val, 7417 imágenes; conjunto de prompts en inglés `waste8-en/v1`, plantilla `t02`, 16-shot α=0.8, temperatura 0.0075 |
| Material top-5 | 0.9987 | Igual |
| China de cuatro vías top-1 | 0.9393 | Igual; ruta jerárquica (ocho clases, luego mapeo) |
| macro-F1 (7 clases) | 0.7460 | Igual |
| ECE (15 bins) | 0.0221 | Igual |
| AUROC de conjunto abierto | 0.7538 | Media sobre las 7 clases con muestras, dejando una clase fuera, puntuación = `1 - max softmax` |
| Acuerdo chino–inglés (misma imagen) | material 0.8698 / cuatro vías 0.9143 | Un embedding visual, tres bancos de prototipos |
| Material top-1, test retenido | 0.8620 | test, 7290 imágenes |
| Latencia de inferencia por imagen | p50 66.93 ms / p95 91.62 ms | Referencia offline en CPU, batch 1, solo vision tower, no es una cifra de dispositivo |

Frente a la línea base (misma partición):

| Métrica | Línea base (MobileNetV3-Small) | Vocabulario abierto (SigLIP2-B/16) |
|---|---:|---:|
| Material top-1, val | **0.8792** | 0.8501 |
| Material top-1, test | **0.8807** | 0.8620 |
| China de cuatro vías top-1, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| AUROC de conjunto abierto | Ninguna (una cabeza de conjunto cerrado no puede descartar una clase sin reentrenar) | **0.7538** |
| Acuerdo chino–inglés | Sin lado de texto | **0.8698 / 0.9143** |
| Clases nuevas zero-shot | Reentrenamiento requerido | **Edita el prompt** |
| Latencia p50 en CPU | **1.57 ms** | 66.93 ms |

La línea base en esta comparación es la MobileNetV3-Small obsoleta. La EfficientNet-Lite0 distribuida alcanza un top-1 de validación de 0.8877 en esta partición con una p50 de CPU de unos 14.7 ms, lo que reduce la relación de latencia de 40× a 4–5×.

Reproducir: `evaluation/runs/2026-09-05-w1-cpu`

### Huella de despliegue

| Elemento | Tamaño |
|---|---|
| ONNX base (`efficientnet_lite0_waste8.onnx`) | 13,477,056 B |
| SigLIP 2 vision tower ONNX (`siglip2_vision_224.onnx`) | 371,695,898 B |
| Bancos de prototipos + informe de calibración | unos 155 KB en total |

### Runtimes y parámetros clave

| Dispositivo | Modelo | Precisión | Runtime | Cómo llega el modelo al dispositivo |
|---|---|---|---|---|
| reComputer J30 / J40 series | EfficientNet-Lite0 224² | FP16 | TensorRT | Motor construido en el dispositivo en el momento del despliegue, ligado a la arquitectura de la GPU y a la versión de TensorRT; no puede precompilarse para su distribución |
| reComputer J40 series (pista opcional de vocabulario abierto) | SigLIP 2 ViT-B/16 vision tower + prototipos de texto constantes | — | — | `model.track: open_vocab` |
| reComputer R2000 series + Hailo-8 | EfficientNet-Lite0 224² | INT8 (HEF uint8, `optimization_level=2`) | HailoRT 4.21.0 | HEF compilado fuera del dispositivo con DFC 3.31.0, descargado en el momento del despliegue |
| reComputer RK3588 series | EfficientNet-Lite0 224² | INT8 (calib256+mmse) | librknnrt 2.3.2 | Convertido fuera del dispositivo con rknn-toolkit2 2.3.2 |

- Antirrebote del disparador: **800 ms**; un disparador que llega mientras el anterior sigue en ejecución se fusiona, no se pone en cola
- Modo continuo: solo publica cuando el top-1 es el mismo durante **3 fotogramas** seguidos; el modo de disparo da una respuesta por toma
- `actuator.enabled`: `false` por defecto; la devolución de llamada GPIO no está vinculada a ningún pin

### Degradaciones conocidas

- `textile` no tiene muestras de entrenamiento ni de evaluación: ninguno de los conjuntos de datos fuente tiene una clase de tejido. Se mantiene el octavo logit (la salida ONNX sigue siendo `1×8`), pero el modelo nunca lo ha predicho, y todas las tablas informan de `n/a` para él.
- Ninguna clase de material se asigna a `hazardous`; se mantiene en el enum por estabilidad del esquema y la build actual nunca lo emite.
- `organic` constituye el 48.9% de train y el 47.1% de val; su recall (0.9791) está muy por encima de las otras clases (0.70–0.88), y el modelo empuja hacia ella los elementos inciertos.
- `residual` solo tiene 20 muestras de validación; la pista de vocabulario abierto alcanza 0.2754 de precisión y un AUROC leave-one-out de 0.5795 en ella, cercano al azar.
- En la pista de vocabulario abierto, predecir la clase de cuatro vías directamente a partir de prompts en chino solo da 0.8478; la ruta jerárquica (ocho clases, luego mapeo) da 0.9393.
- La MobileNetV3-Small obsoleta se derrumba bajo INT8 en las tres cadenas de borde: acuerdo del emulador Hailo DFC 0.115, reComputer RK3576 series 0.10, reComputer RK3588 series 0.22 (fp16 0.98–1.00); por eso la línea base pasó a EfficientNet-Lite0. Los resultados INT8 de RK3588 no se trasladan a RK3576.
- La SigLIP 2 vision tower falla la cuantificación INT8 para Hailo-8 (errores de `hailo optimize` en la capa `ne_activation_mul_and_add78`), por lo que no hay HEF; la pista de vocabulario abierto no se ejecuta en la reComputer R2000 series.
- Ambos conjuntos de datos son fotos de un solo objeto (TrashNet sobre una pizarra blanca, GC3 descentrado y a menudo ocluido), sin residuos mojados, aplastados, apilados, a contraluz o parcialmente embolsados; la precisión en un punto de entrega en vivo será menor que las cifras de las tablas.

### Próximos pasos

- Añadir el material de la serie reComputer R2000 (R2035-12, Hailo-8) y los resultados en cuatro vías en todas las 7417 imágenes de validación, y la latencia de disparo a respuesta y el tiempo de construcción del motor en la serie reComputer J40 (J4012), a "Performance and measured data".

## Fuentes de datos y recursos

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet), **Licencia MIT, Copyright (c) 2017 Gary Thung**. Basado en dos fuentes de primera mano: el archivo `LICENSE` del repositorio en el commit `6fa2b87`, y el campo `license` de la tarjeta oficial del conjunto de datos en HuggingFace. MIT requiere que se mantenga el aviso de copyright y licencia y no tiene cláusula de compartir igual.
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**, indicado textualmente en el archivo `README.dataset.txt` incluido con la exportación. La ruta del proyecto en Roboflow Universe es `material-identification/garbage-classification-3`.
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224), revisión `75de2d55…`, Apache-2.0. Usado solo por la pista opcional de vocabulario abierto.
- **Pesos iniciales de MobileNetV3-Small ImageNet** (torchvision) — BSD-3-Clause.
- **Código de tiempo de ejecución upstream** — Apache-2.0.
- **Diagrama de arquitectura** — dibujado a partir del catálogo de dispositivos del paquete y de las interfaces de salida; no contiene imágenes del conjunto de datos.

El material externo derivado de estos conjuntos de datos debe usar literalmente la siguiente cadena de atribución:

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**Ninguna imagen derivada de conjuntos de datos se ha incorporado a este paquete.** Ambas licencias permiten la redistribución.
