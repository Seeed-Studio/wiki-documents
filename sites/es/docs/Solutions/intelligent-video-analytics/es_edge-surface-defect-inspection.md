---
description: Inspección de defectos en superficies de acero en el dispositivo: seis clases de defectos, un veredicto OK/NG entregado al PLC mediante Modbus TCP y al MES mediante MQTT, en Jetson Orin o en una reComputer Serie R2000 con un Hailo-8. Hardware, esquema de despliegue, contratos de salida y datos medidos.
title: 'Inspección de Defectos Superficiales en el Borde: Seis Clases, Modbus y MQTT'
sidebar_label: 'Inspección de Defectos Superficiales en el Borde'
keywords:
  - inspección de defectos superficiales
  - detección de defectos en tiras de acero
  - inspección Modbus TCP
  - evento de inspección MQTT MES
  - inspección de IA en el borde
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - D-FINE
  - RT-DETRv2
  - detección de anomalías EfficientAD
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg
slug: /solutions/edge-surface-defect-inspection
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/solutions/edge-surface-defect-inspection/
generated_from: sensecraft-solutions@edge_inspection_surface
---

:::caution[Aviso de uso]
Los pesos NEU-DET preempaquetados (ONNX / HEF) sirven como puntos de referencia de diseño para evaluación y verificación del flujo. Para producción comercial, recomendamos reentrenar o recalibrar los modelos con imágenes de defectos específicas del sitio. Este no es un instrumento certificado de calidad ni de seguridad.
:::

## Qué hace esta solución

Una cámara fija observa una tira de acero o una pieza. El dispositivo decide fotograma a fotograma si la superficie tiene un defecto y envía el veredicto OK/NG por dos rutas a la vez: una bobina Modbus TCP que un PLC puede enclavar, y un mensaje JSON MQTT por fotograma que transporta cada caja de detección en ese fotograma.

- **Seis clases de defectos**: craquelado, inclusión, parches, superficie picada, cascarilla laminada, arañazos.
- **La detección, la regla OK/NG y ambas salidas se ejecutan en el dispositivo.** Las imágenes permanecen en el dispositivo. El broker MQTT, el servidor Modbus TCP y una página de depuración de solo lectura se ejecutan en el mismo host.
- **Opciones de detector y acelerador.** En Jetson: YOLOX-Tiny (predeterminado), D-FINE-S o RT-DETRv2-S; en la reComputer Serie R2000 (Hailo-8): YOLOX-Tiny INT8.

- Código fuente del empaquetado y guía de despliegue: [sensecraft-solutions / solutions/edge_inspection_surface](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_inspection_surface)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Listo para ejecutarse en el dispositivo</h3>
                <p>Instala el paquete de la aplicación en una reComputer Serie J30 / J40 y se ejecuta; el primer despliegue tarda unos 40 minutos. Medido en Orin NX 16GB: desde la captura del fotograma hasta la escritura de la bobina P50 9,3 ms, ninguna de 3000 muestras por encima de 20 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto</h3>
                <p>El código de tiempo de ejecución es Apache-2.0; el detector predeterminado es YOLOX (Apache-2.0), y no se usa código ni pesos de Ultralytics en ningún lugar.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Tu propia cámara, PLC y MES</h3>
                <p>Cualquier cámara RTSP. El PLC lee bobinas y registros directamente en la unidad 1 de Modbus TCP y el MES se suscribe mediante MQTT, sin middleware.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Se ejecuta completamente en sitio</h3>
                <p>Las imágenes permanecen en el dispositivo; la cadena principal no necesita acceso a internet.</p>
            </div>
        </li>
    </ul>
</div>

### Qué muestra la demo

El paquete no incluye imágenes derivadas de conjuntos de datos. Su único recurso es un diagrama dibujado para esta solución (ruta de datos, nombres de dispositivos, nombres de protocolos y números de puerto), sin fotografías ni salida del detector.

Para ver la salida del detector, abre la página de depuración incluida con tu propio metraje: `/preview.mjpg` en el puerto 8080 dibuja las cajas sobre un flujo MJPEG en vivo, y `/events` lista los veredictos recientes.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg" alt="Comparación de superposición de detección de inferencia en tiempo real de defectos en superficie de acero"/>
</div>

## Qué hardware necesitas

Dos cosas en sitio: una cámara y un host.

**① Una cámara RTSP**: fija sobre la tira o pieza, con los defectos ocupando una parte utilizable del fotograma. Todos los datos medidos se tomaron a 640×640, 10 FPS. La iluminación debe ser estable: el modelo se entrenó solo bajo la iluminación de un conjunto de datos.

**② Host de inspección**: decide cuántas cámaras puedes ejecutar y qué detectores puedes elegir:

| | Host | Flujos medidos | Cuándo elegirlo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html) (Jetson Orin Nano 8GB)<br/>Host de entrada para una sola cámara | 1–2 estables | Una cámara, sensible al costo. Captura→bobina medida P50 10,56 ms |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) (Jetson Orin NX 16GB)<br/>El host medido | 8 estables | Más de una cámara; todos los datos siguientes se midieron en este host |

Un tercer host es la **reComputer Serie R2000 con un Hailo-8**. Existen pasos de despliegue para él; el configurador aún no lo incluye.

La capacidad de flujo se midió en Orin NX 16GB, 640² / 10 FPS por flujo: **8 estables, 12 degradando, 24 fallando**. A partir de 12 flujos, el rendimiento total se mantiene en 110–112 FPS: el contexto del acelerador no es seguro para hilos y la inferencia se ejecuta en serie, por lo que más cómputo no añade flujos.

También necesitas un PLC o controlador de línea en la misma red que pueda actuar como maestro Modbus TCP (opcional; el mapa de registros está fijado en la unidad 1), y alimentación de red junto a la línea o en el armario. La cadena principal no necesita acceso a internet.

### Límites de Selección Negativa

- **Límite de concurrencia y memoria**: Si conectas más de 2 cámaras industriales o encadenas modelos de clasificación de defectos, evita el J3011 de 8GB. Elige el J4012 de 16GB para evitar OOM en el búfer de vídeo.
- **Compatibilidad del operador**: En la reComputer R2000 con Hailo-8, los operadores ONNX personalizados no estándar no soportados por Hailo volverán al CPU del host, añadiendo una latencia significativa.

## Cómo desplegar en sitio

Fija primero la cámara y la iluminación, luego instala el software.

### Uno: instala primero el hardware, la cámara y la luz

:::tip[No cambies la cámara ni la iluminación después de la configuración]
Los datos de entrenamiento provienen de un solo conjunto de datos bajo una sola condición de iluminación. La precisión bajo una lámpara, ángulo o acabado superficial diferente no se ha evaluado, y ningún umbral lo compensa. Mantén la cámara y la fuente de luz tal como se instalaron.
:::

Requisitos de encuadre:

1. **Los defectos deben ocupar una parte utilizable del fotograma 640×640.** En un campo de visión amplio un arañazo tiene unos pocos píxeles de ancho, y los datos de precisión siguientes no aplican.
2. **Montaje fijo.** Reapuntar o reenfocar cambia la escala asumida por las mediciones.
3. **Velocidad de línea configurada en 10 FPS.** El tiempo de ejecución puede ir más rápido; la precisión y la latencia se midieron a 10 FPS.

### Dos: instala el software

Los pasos por dispositivo están en la página de diseño de referencia; esta sección enumera el flujo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_inspection_surface" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga el paquete de la app 🖱️</font></span></strong>
    </a>
</div><br />

1. **Elige una configuración**: cuántas cámaras por host, y si el host se sitúa junto a la línea o en un armario. Estas dos respuestas deciden el módulo y la carcasa.
2. **Instala el paquete de la aplicación**: la imagen de contenedor, el modelo y el umbral de puntuación congelado (0,35) están todos en el paquete. En Jetson el primer despliegue construye el motor TensorRT en el dispositivo, medido en **291 s** en Orin NX 16GB + TensorRT 10.3; el motor está ligado a la arquitectura de la GPU y a la versión de TensorRT y no se distribuye por separado. La reComputer Serie R2000 descarga un HEF INT8, sin compilación en la placa.
3. **Rellena la configuración**: URL RTSP, `device_name` y `stream_id` (para distinguir orígenes cuando varias líneas comparten un broker o un mismo host ejecuta varias cámaras), frecuencia de fotogramas de la fuente, id de unidad Modbus y, en Jetson, la **pista de detector**: YOLOX-Tiny (predeterminado, con datos medidos), D-FINE-S o RT-DETRv2-S. El umbral de puntuación tiene tres pasos, 0.25 / 0.35 / 0.45; 0.35 es el valor de despliegue, calibrado para YOLOX.
4. **Verifica**: abre `/preview.mjpg` en el puerto 8080 y confirma que aparecen cajas en tu propio vídeo; luego comprueba el tiempo de inferencia, la latencia captura→bobina y los contadores MQTT / Modbus en `/healthz`.

Deja **40 minutos** para un primer despliegue. En Orin la mayor parte es la construcción del motor; la ruta Hailo tiene tres prerrequisitos: una versión menor de Python coincidente; HailoRT 4.21.x en la misma versión en el driver, la biblioteca y los bindings de Python; y el parámetro de kernel `hailo_pci force_desc_page_size=4096`. Los pasos de despliegue comprueban cada uno.

## Qué interfaces están disponibles

Todos los datos los sirve el propio host de inspección: Modbus TCP 502, MQTT 1883, HTTP 8080. No hay paso en la nube en la cadena principal.

- **PLC o controlador de línea**: lee directamente la unidad Modbus TCP 1. La bobina 0 es NG, la bobina 1 es OK, mutuamente excluyentes. Los registros se actualizan de forma atómica **antes** de que se escriba la bobina, así que cuando el PLC ve que la bobina cambia, los HR 0–7 ya contienen la clase, el recuento de defectos, la caja primaria y el latido del mismo fotograma. Sondea primero los registros y usa la bobina como disparador.
- **MES o historiador**: suscríbete a `<device-name>/inspection/<stream-id>/results`. Un JSON por fotograma, con veredicto, motivo, recuento de defectos y todas las cajas de ese fotograma en una sola carga útil. Con varios flujos en un mismo host esta es la única fuente por flujo: Modbus solo mantiene el último veredicto escrito.
- **Portátil de puesta en marcha o panel de planta**: el puerto 8080 sirve `/preview.mjpg` (MJPEG con cajas), `/healthz` (tiempo de inferencia, latencia captura→bobina, contadores MQTT y Modbus) y `/events` (veredictos recientes), solo lectura.

`<device-name>` y `<stream-id>` se establecen en los pasos de despliegue; `stream_id` también está en la carga útil, así que el código aguas abajo no analiza el tema.

### Tabla completa de interfaces

| Tema / puerto | Contenido | retenido |
|---|---|---|
| Modbus TCP 502, unidad 1, bobinas 0–1 | Bobina 0 = NG, bobina 1 = OK, mutuamente excluyentes, se escribe después de los registros | n/a (estado de los registros) |
| Modbus TCP 502, unidad 1, HR 0–7 | HR 0 id de clase primaria; HR 1 recuento de defectos; HR 2–5 caja primaria cx/cy/w/h normalizada ×10000; HR 6–7 latido, segundos Unix como una palabra alta y baja uint32 | n/a |
| `<device-name>/inspection/<stream-id>/results` | `type`, `version`, `device`, `stream_id`, `frame_id`, `verdict`, `verdict_reason`, `defect_count`, `primary_class_id`, `coordinate_space`, `inference_time_ms`, `pipeline_ms`, `detections[]` (`slot`, `class_id`, `class_name`, `score`, `bbox`) | no |
| HTTP 8080 `/preview.mjpg` `/healthz` `/events` `/snapshot.jpg` | Vista previa MJPEG con cajas, contadores de estado, veredictos recientes, captura de un solo fotograma | n/a |

Dos campos a tener en cuenta: **`slot` es el índice dentro del fotograma, ordenado por puntuación**; la canalización no hace seguimiento, así que `slot 0` en dos fotogramas adyacentes no es necesariamente el mismo defecto físico. Con el módulo opcional de anomalías activado, **`anomaly_score` es un campo adicional separado** y no alimenta el `verdict` de nivel superior.

Cada mensaje MQTT se valida contra el esquema de contrato en la ruta de publicación; los fallos se cuentan y se descartan. El broker empaquetado está configurado con `allow_anonymous true`; apunta una línea de producción a un broker con credenciales.

## Rendimiento y datos medidos {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_surface</font></span></strong>
    </a>
</div><br />

### Velocidad y latencia

| Dispositivo | Modelo / precisión | Rendimiento del detector | Canalización completa | Captura extremo a extremo → bobina Modbus |
|---|---|---:|---:|---|
| reComputer J40 series (J4012, Orin NX 16GB) | YOLOX-Tiny 640², TensorRT 10.3 FP16 | 113.7 FPS (`detect()` P50 8.797 ms, P95 9.097, P99 9.223) | 9.999 FPS con 0 perdidos cuando se limita a 10 FPS; 76.5–104.3 FPS sin limitar | P50 9.298 / P95 9.441 / P99 9.549 ms; 3000 muestras, máximo 9.926 ms |
| reComputer J30 series (J3011, Orin Nano 8GB) | YOLOX-Tiny 640², TensorRT 10.3 FP16 | 105.2 FPS (cómputo puro 198.5 FPS, GPU 5.03 ms) | 9.999 FPS con 0 perdidos cuando se limita a 10 FPS; 75.3 FPS sin limitar | P50 10.56 / P95 10.82 / P99 11.10 ms; cadencia estable, 18.2 W MAXN |
| reComputer R2000 series + Hailo-8 | YOLOX-Tiny 640², HailoRT INT8 HEF | Hardware 106.75 FPS (`hailortcli run`, latencia de hardware 8.47 ms); aplicación 91.49 FPS (P50 10.93 ms, P95 13.19 ms) | 46.14 FPS sin limitar | P50 11.61 / P95 14.99 / P99 16.63 ms |

Condiciones: la entrada es un vídeo sintético ensamblado a partir de 290 imágenes de validación a 640×640 / 10 FPS, sin continuidad temporal entre fotogramas. Las cifras del detector en Orin son 500 llamadas a `detect()` sobre 60 fotogramas predecodificados, incluyendo letterbox, ejecución y NMS en CPU; la ejecución del motor es unos 5.0–5.6 ms (unos 178–198 FPS) de eso. Sin limitar, la captura→bobina P50 sube a 35.90 ms (J4012) / 41.3 ms (J3011); los ~26–30 ms extra son cola en una cola de profundidad 2. Las cifras de la aplicación Hailo se midieron sobre metal desnudo, no en el contenedor, RSS unos 126 MB.

| Nivel multi-flujo | Flujos | FPS por flujo | Perdidos | Latencia P95 |
|---|---:|---:|---:|---:|
| Estable | 8 | 9.989 | 0.02% | 72.3 ms |
| Degradando | 12 | 9.306 | 6.83% | 104.0 ms |

Multi-flujo: reComputer J40 series, 640² / 10 FPS por flujo, cinco minutos por nivel. 24 flujos es el nivel de fallo: 4.593 FPS por flujo y 53.95% perdidos. El proceso no se bloquea, pero más de la mitad de la entrada se descarta silenciosamente y esas partes nunca se inspeccionan.

Reproducir: `solutions/edge_inspection_surface/evaluation/runs/2026-09-05-m2-orin/results.md` (Orin), `evaluation/runs/2026-09-06-rpi-hailo/results.md` (Hailo-8)

### Precisión de detección

| Métrica | Valor | Condiciones |
|---|---:|---|
| mAP50, reComputer J40 series, TensorRT FP16 | **0.7577** | 290 imágenes de validación / 706 cajas, una sola pasada de inferencia a puntuación 0.01 |
| Precisión / recall en umbral de despliegue 0.35 | **P 0.7652 / R 0.6969** | Post-filtrado de la misma pasada. TP 492 / FP 151 / FN 214; 7 de 290 fotogramas no producen ninguna salida |
| Recall en umbral 0.6 | 0.5807 | FN 214 → 296, fotogramas completamente perdidos 7 → 39 (13.4%); la precisión sube a 0.865 |
| Recall en umbral 0.9 | 0.0241 | 273 de 290 fotogramas no producen nada (94%); recall de crazing y rolled-in scale 0 |
| TensorRT FP16 vs CPU onnxruntime, caja por caja | Diferencia de mAP50 0.0003 | 643 pares emparejados, IoU media 0.9972 (mín 0.8311), diferencia media de puntuación 0.0011; no cambió el veredicto de ningún fotograma |
| mAP50, reComputer R2000 series + Hailo-8, INT8 HEF | **0.7091** | Las mismas 290 imágenes; referencia CPU 0.7574, −0.0483 |
| Tasa de coincidencia de cajas Hailo vs referencia CPU | 86.66% | 523 de 684 cajas coincidieron a IoU ≥ 0.5 |
| mAP50, emulador Hailo Dataflow Compiler, INT8 nivel-1 (compilación enviada) | 0.7266 | 20 imágenes de validación / 45 cajas, CPU en el mismo subconjunto 0.7228; no directamente comparable con las filas de 290 imágenes |

Conjunto de datos: NEU6 (una copia re-alojada de NEU-DET, licencia al final de la página), dividido 70/15/15 agrupado por origen para que fotogramas adyacentes de una tira nunca crucen una división. Las filas de umbral son post-filtros de una pasada, no pruebas separadas.

AP50 por clase de la misma pasada:

| Clase | Cajas | AP50 | Recall a 0.35 |
|---|---:|---:|---:|
| scratches | 95 | 0.9685 | 0.9263 |
| pitted_surface | 70 | 0.9301 | 0.8857 |
| patches | 122 | 0.9065 | 0.8689 |
| inclusion | 184 | 0.7658 | 0.6902 |
| rolled-in_scale | 104 | 0.6149 | 0.5481 |
| crazing | 131 | 0.3603 | 0.3969 |

Reproducir: `solutions/edge_inspection_surface/evaluation/runs/`

### Comparación de pistas de detector

| Detector | mAP50 | P / R a 0.35 fijo | Fotogramas completamente perdidos |
|---|---:|---|---:|
| YOLOX-Tiny (predeterminado) | 0.7574 | 0.7632 / 0.6983 | 7/290 |
| D-FINE-S | 0.7499 | 0.4956 / 0.8017 | **0/290** |
| RT-DETRv2-S | 0.7317 | 0.4575 / 0.7847 | 1/290 |

Condiciones: referencia CPU onnxruntime, no una cifra de dispositivo; las mismas 290 imágenes de validación, entrada estática batch-1 640×640, una semilla por pista. El umbral 0.35 está calibrado sobre la distribución de puntuaciones `obj × cls` de YOLOX; las puntuaciones de DETR se distribuyen de forma diferente, de ahí el P/R desequilibrado. A precisión igualada (P ≈ 0.81–0.87), el recall de D-FINE está 2–7 puntos por encima de YOLOX y los fotogramas completamente perdidos caen de 38 a 20.

Reproducir: `solutions/edge_inspection_surface/evaluation/runs/`

### Módulo opcional de anomalías (EfficientAD-S)

| Métrica | Valor | Condiciones |
|---|---:|---|
| Pixel AUROC | **0.8752** | DeepPCB división OK/anomalía `pcb`: 205 OK val + 213 OK test + 213 defect test |
| Pixel AUPRO (FPR ≤ 0.30) | 0.6494 | Misma ejecución, 1177 regiones de defecto conectadas |
| Image AUROC | **0.5201** | Misma ejecución; 0.5 es azar |
| Recall en clases de defecto no vistas (leave-one-out, nivel píxel/región) | 0.225 – 0.955 | Amplia dispersión por clase (open 0.955, spur 0.225) |
| Sobrecarga de latencia de doble ruta (detector + EfficientAD, referencia CPU) | +139 ms P95 por fotograma | queue=2, timeout 500 ms (valores predeterminados del paquete); 120/120 fotogramas fusionados |

La puntuación a nivel de píxel/región es utilizable, la de nivel de imagen no: doce formas de reducir el mapa de calor a una sola puntuación dan todas un Image AUROC 0.495–0.530. El conjunto OK anterior (plantillas escaneadas) y el conjunto de defectos (fotos de placas reales) provienen de fuentes diferentes.

Reproducir: `solutions/edge_inspection_surface/evaluation/runs/`

### Huella de despliegue

| Elemento | Valor | Condiciones |
|---|---|---|
| Construcción del motor TensorRT en el dispositivo | 291 s | reComputer J40 series, JetPack 6.2, TensorRT 10.3, YOLOX-Tiny 640² FP16, forma estática |
| Imagen Jetson | 375 MB | TensorRT y CUDA del host se montan en el contenedor, no se empaquetan en la imagen |
| Huella añadida en la reComputer R2000 series | unos 452 MB | Imagen de runtime de 443 MB + 8.9 MB HEF + configuración |

### Tiempos de ejecución y parámetros clave

| Dispositivo | Modelo | Precisión | Tiempo de ejecución | Cómo llega el modelo al dispositivo |
|---|---|---|---|---|
| Serie reComputer J30 / J40 | YOLOX-Tiny 640² (opcional D-FINE-S, RT-DETRv2-S) | FP16 | TensorRT 10.3 | Motor generado en el dispositivo en el primer despliegue (medidos 291 s), ligado a la arquitectura de la GPU y a la versión de TensorRT, no se distribuye por separado |
| Serie reComputer R2000 + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.0 | HEF compilado fuera del dispositivo con Dataflow Compiler 3.31.0 con `optimization_level=1`, descargado en el momento del despliegue |

D-FINE-S y RT-DETRv2-S solo están disponibles en Jetson: Hailo Dataflow Compiler 3.31.0 no admite sus operadores de atención deformable (`GridSample`, `GatherElements`, `TopK`).

- `min_score`: valor de despliegue **0.35**; el paso de despliegue ofrece 0.25 / 0.35 / 0.45
- `min_defects`: valor predeterminado 1; un fotograma con al menos esta cantidad de detecciones es NG
- `anomaly.enabled`: valor predeterminado `false`; `anomaly_score` es un campo MQTT independiente y no entra en el `verdict` de nivel superior

### Degradaciones conocidas

- Cambia la iluminación y las cifras anteriores dejan de aplicar: el modelo se entrenó y evaluó bajo la iluminación de un único conjunto de datos.
- El AP50 de crazing está entre 0.30–0.36 en las tres arquitecturas (YOLOX 0.360, D-FINE 0.302, RT-DETRv2 0.310) y no se mueve con el umbral ni con la cabeza del detector; una línea cuyo defecto principal sea crazing necesita reentrenarse con sus propias imágenes.
- INT8 en la serie reComputer R2000 pierde 0.0483 mAP50; las mayores pérdidas son las dos clases más débiles (crazing AP50 0.3873, rolled-in_scale 0.4483).
- El techo de flujos está en el bucle de inferencia: a partir de 12 flujos el rendimiento total se mantiene en 110–112 FPS; el contexto del acelerador no es seguro para subprocesos y la inferencia se ejecuta en serie, por lo que más cómputo no añade flujos.
- Todos los flujos comparten un único bloque de registros Modbus, y el último veredicto prevalece; los resultados por flujo provienen de MQTT.
- Las puntuaciones de anomalía a nivel de imagen están cerca del azar. Antes de activar `anomaly.enabled`, recopila tus propias imágenes OK con la cámara de inspección real y recalibra `anomaly.threshold` sobre ellas.

### Próximos pasos

- Volver a ejecutar la comparación de detectores con tres semillas por pista para confirmar la ventaja de recall de D-FINE-S a precisión igualada.

## Fuentes de datos y recursos {#data-and-asset-sources}

- **NEU-DET (Northeastern University surface defect database), vía copia de Roboflow** — datos de entrenamiento y validación para el detector base incluido y fuente de las cifras de precisión anteriores. Los pesos de modelo preconvertidos se alojan en el CDN oficial para la evaluación del diseño de referencia y la verificación de la canalización de extremo a extremo. Los despliegues en producción deben reentrenar los modelos con imágenes reales de la línea para ajustarse a las piezas objetivo y a las condiciones de iluminación.
- **DeepPCB** —— [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB), licencia MIT. Usado solo por la pista opcional de anomalías no supervisadas, y distinto de NEU-DET. La licencia MIT permite la redistribución y el uso comercial y exige que el aviso de copyright acompañe a las copias y a las obras derivadas.
- **YOLOX** —— [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX), Apache-2.0. El backbone de detección predeterminado, elegido en lugar de Ultralytics para evitar los términos AGPL. No se utiliza ningún código ni pesos de Ultralytics en ninguna parte de esta solución.
- **D-FINE** —— [github.com/Peterande/D-FINE](https://github.com/Peterande/D-FINE), Apache-2.0, y **RT-DETRv2** —— [github.com/lyuwenyu/RT-DETR](https://github.com/lyuwenyu/RT-DETR), Apache-2.0. Las dos pistas de detectores opcionales, ajustadas únicamente a partir de sus checkpoints con licencia COCO. No se descargan ni distribuyen pesos entrenados en Objects365, ya que el propio proyecto original indica que esa licencia no está confirmada. El fijado de licencia y commit está en `tracks/detector/PROVENANCE.md`.
- **anomalib EfficientAD-S** —— Apache-2.0, incluidos sus pesos de teacher preentrenados (`tracks/anomaly/PROVENANCE.md`, anomalib `lib/v2.6.0`).
- **Diagrama de arquitectura** —— elaborado a partir del catálogo de dispositivos del paquete y de las interfaces de salida; no contiene contenido de conjuntos de datos.

El código de tiempo de ejecución está bajo Apache-2.0. Los pesos incluidos sirven como líneas base de evaluación; los despliegues en producción deben reentrenarse con datos específicos del sitio.
