---
description: Inspección de ensamblaje en el dispositivo: comparación de piezas faltantes contra una lista de elementos esperados de plantilla, medición de dimensiones calibrada con ArUco y un único veredicto OK/NG entregado al PLC mediante Modbus TCP y al MES mediante MQTT. Hardware, esquema de despliegue, contratos de salida y datos medidos.
title: 'Inspección de Ensamblaje en el Borde: Piezas Faltantes, Dimensiones, Modbus y MQTT'
keywords:
  - inspección de ensamblaje
  - detección de piezas faltantes
  - medición de dimensiones con visión artificial
  - calibración ArUco
  - inspección Modbus TCP
  - evento de inspección MQTT MES
  - inspección de IA en el borde
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg
slug: /solutions/edge-assembly-inspection
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/edge-assembly-inspection/
generated_from: sensecraft-solutions@edge_inspection_assembly
---

:::caution[Aviso de uso]
Los resultados de dimensión son píxeles convertidos mediante una referencia de calibración y no sustituyen a un calibre calibrado en una prueba de aceptación. El detector enviado está entrenado en DeepPCB, un conjunto de datos de defectos de placas desnudas cuyas seis clases no son piezas faltantes de ensamblaje; antes de usarlo en tu producto, sustituye la lista de elementos esperados por la tuya propia y mide con tus propios datos.
:::

## Qué hace esta solución

Una cámara fija observa una estación de inspección. Cada fotograma pasa por un detector, luego por la comparación de piezas faltantes y la medición de dimensiones, y termina como un único veredicto OK/NG al takt de línea.

- **Comparación de piezas faltantes**: una lista de elementos esperados de plantilla (`class` + ROI + distancia de coincidencia) se compara con las detecciones. Todo lo que la lista espera y el fotograma no contiene se convierte en `missing`; cualquier cosa encontrada fuera de la lista puede opcionalmente informarse como `extra`.
- **Medición de dimensiones**: una referencia de calibración en el plano de la superficie medida proporciona `mm_per_pixel`; el rectángulo de área mínima del objetivo dentro de un ROI de medición se convierte a milímetros y se compara con el valor nominal ± tolerancia.
- **Fusión de veredictos**: `defect`, `missing`, `extra` y `dimension_out_of_tolerance` cada uno por sí solo hace que el fotograma sea NG; cada uno de los cuatro se puede desactivar.

El veredicto se escribe en dos lugares: registros de retención y bobinas Modbus TCP para el PLC, y un evento JSON MQTT por fotograma para el MES o el historiador. Los registros se escriben antes que la bobina, de modo que un PLC que actúa sobre la bobina lea los datos de registro del mismo veredicto.

- Código fuente del paquete y guía de despliegue: [sensecraft-solutions / solutions/edge_inspection_assembly](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_inspection_assembly)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Listo para ejecutarse en el dispositivo</h3>
                <p>Instala el paquete de la aplicación en una reComputer J30 / J40 Serie o R2000 Serie y se ejecuta; una primera instalación tarda unos 60 minutos. Captura a bobina P50 medida en la J40 Serie: 10,92 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto</h3>
                <p>El código de tiempo de ejecución es Apache-2.0; el detector es YOLOX-Tiny (Apache-2.0), sin código ni pesos de Ultralytics y sin obligación AGPL.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>Tus propias cámaras, PLC y MES</h3>
                <p>Cualquier cámara RTSP / ONVIF / USB; los veredictos salen por Modbus TCP y MQTT. Los HR 0–7 usan la misma disposición de registros que el diseño de inspección de superficie, por lo que un programa de PLC existente no necesita cambios.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Se ejecuta completamente en sitio</h3>
                <p>Captura, inferencia, veredicto y salida se ejecutan todos en el host de inspección; la cadena principal no necesita acceso a internet.</p>
            </div>
        </li>
    </ul>
</div>

### Lo que la demo muestra realmente

Las imágenes siguientes son salidas reales de la canalización:

- La salida del detector en una imagen de validación de DeepPCB (`12300060_test.jpg`); cada recuadro es una detección del modelo ONNX. La lista de seis elementos esperados en la configuración de ejemplo enviada se generó a partir de los recuadros de verdad terreno de este fotograma.
- Una escena sintética de dimensiones con ArUco a tamaño nominal: el marcador de la izquierda proporciona mm/px, el bloque de la derecha se mide con respecto a él (60 × 40 mm, veredicto OK).
- La misma escena con una pieza sobredimensionada: 62,25 mm frente a un nominal de 60 mm y una tolerancia de 1 mm, veredicto NG, Modbus HR 10 = 6225 y HR 11 = 2.

La salida del detector en imágenes de validación DeepPCB:

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg" alt="Salida del detector en la imagen de validación DeepPCB 12300060_test.jpg; los recuadros son detecciones reales del modelo"/>
</div>

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-2-13779bda.jpg" alt="El mismo modelo en una segunda imagen de validación DeepPCB"/>
</div>

La cadena de dimensiones: el marcador de la izquierda proporciona mm/px, el bloque de la derecha se mide con respecto a él. A tamaño nominal el veredicto es OK:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-nominal-be46361b.png" alt="Escena de calibración sintética a tamaño nominal: el marcador proporciona mm/px, el bloque mide 60 × 40 mm, veredicto OK"/>
</div>

Una pieza sobredimensionada en la misma escena mide 62,25 mm, veredicto NG, Modbus HR 10 = 6225 y HR 11 = 2:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-oversize-384a1faf.png" alt="Pieza sobredimensionada: 62,25 mm medidos frente a un nominal de 60 mm y una tolerancia de 1 mm, veredicto NG"/>
</div>

Con la pieza girada 25°, el rectángulo de área mínima da el mismo tamaño:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-rotated-1ad0cd88.png" alt="Con la pieza girada 25°, el tamaño del rectángulo de área mínima no cambia"/>
</div>

Las escenas de dimensiones se generan con `evaluation/make_dimension_fixture.py` a un mm/px conocido; la verdad terreno proviene de los parámetros de generación. No son fotografías de una estación real.

## Qué hardware necesitas

Tres cosas por estación: una cámara, un host de inspección y un sistema que reciba el veredicto.

**① Cámara**: cualquier cámara RTSP u ONVIF; una cámara USB o un archivo grabado también funcionan. Cualquier modelo sirve, siempre que toda la placa o ensamblaje esté en el encuadre y el encuadre no cambie después de construir la plantilla.

**② Host de inspección**: decide cuántas estaciones puede soportar un host.

| | Host de inspección | Acelerador | Detector tal como se despliega | Flujo de vídeo medido | Cuándo elegirlo |
|---|---|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Jetson Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Host de estación única | Orin GPU | YOLOX-Tiny 640², TensorRT FP16 | 1 flujo, 67 h de prueba de esfuerzo | Una sola estación |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Jetson Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Host de agregación multiestación | Orin GPU | YOLOX-Tiny 640², TensorRT FP16 | 8 estables / 12 degradando / 24 fallando | Varias estaciones en un solo host; los datos de precisión y velocidad se midieron en este módulo |

Capacidad de flujo: 640² a 10 fps por flujo, cinco minutos por nivel, todo el barrido ejecutado dos veces, con MQTT y Modbus deshabilitados. Con ambas salidas habilitadas el recuento alcanzable es inferior a 8.

Ambos modelos reComputer vienen en una carcasa industrial sin ventilador (reComputer Industrial J3011 / J4012) con el mismo módulo y tiempo de ejecución, para montaje en armario.

**③ Todo lo demás**: para la comprobación de dimensiones, una referencia de calibración en el plano de la superficie medida (un marcador ArUco, `DICT_4X4_50` por defecto, o cualquier objeto de anchura conocida); Ethernet entre la cámara y el host; y un maestro Modbus TCP (el PLC) y/o un consumidor MQTT. La cadena principal no necesita acceso a internet.

### Límites de selección negativa

- **Estación única vs multiestación**: J3011 está dimensionado para inspección de una sola cámara por estación. Si un host debe monitorizar múltiples estaciones (>2 cámaras simultáneas) o altas tasas de fotogramas, elige J4012.
- **Actualizaciones dinámicas de modelos**: Hailo-8 requiere compilación de modelos sin conexión. Si tu flujo de trabajo requiere ajustes frecuentes en el dispositivo o ejecución directa de PyTorch/ONNX, elige la serie Jetson.

## Cómo desplegar en el sitio

Primero fija la cámara y la óptica, luego instala el software.

### Uno: instala el hardware, primero la cámara

:::tip[No muevas la cámara después de la configuración]
Las ROI de los ítems esperados se almacenan como coordenadas de imagen. Después de mover, volver a montar o reenfocar la cámara, se debe reconstruir por completo la plantilla `assembly.expected[]`. Cualquier trabajo con la cámara en la línea implica volver a crear la plantilla de esa estación.
:::

Toda la placa o ensamblaje debe estar en el encuadre. Para la verificación de dimensiones, coloca la referencia de calibración en el mismo plano que la superficie medida; una distancia de trabajo diferente se convierte en error de medición y no genera ningún mensaje de error. Sin una referencia, la sección de dimensiones informa `uncalibrated`, Modbus HR 11 = 4, y ningún valor.

### Dos: instala el software

Los pasos por dispositivo están en la página del diseño de referencia, donde al elegir una configuración para tu sitio también obtienes el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_inspection_assembly" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga 🖱️</font></span></strong>
    </a>
</div><br />

Ambos caminos siguen los mismos pasos:

1. **Elige un preset y un host.** `Camera + reComputer J30 / J40 (Orin)` o `Camera + reComputer R2000 series (Hailo-8)`. Clasificado como **avanzado**; reserva unos **60 minutos** para una primera instalación.
2. **Despliega el runtime de inspección** (obligatorio). En Orin el motor TensorRT se construye en el dispositivo en el primer despliegue, unos 5 minutos, y queda ligado a ese dispositivo y a esa versión de TensorRT. En Hailo el HEF INT8 se compila fuera del dispositivo y se descarga en el momento del despliegue, sin compilación en la placa, pero se aplican tres prerrequisitos: una versión menor de Python coincidente; HailoRT 4.21.x en la misma versión en el driver, la biblioteca de usuario y los bindings de Python; y el parámetro de kernel `hailo_pci force_desc_page_size=4096`.
3. **Configura la calibración de dimensiones** (opcional). Sin ella, la cadena de piezas faltantes sigue funcionando y la sección de dimensiones informa `enabled: false` o `uncalibrated`.
4. **Comprueba los veredictos** (opcional). El panel web local en el puerto 8080 muestra contadores de estado, eventos recientes y una vista previa MJPEG con cajas de detección y ROI de ensamblaje. Confirma aquí que la cámara cubre el área correcta antes de cablear el PLC.
5. **Genera la lista de esperados con la herramienta de anotación SAM2** (opcional). La herramienta se ejecuta en una estación de trabajo offline, no en el dispositivo de borde, y se mantiene fuera del bucle de fotogramas: una persona dibuja la caja, SAM 2.1 Hiera-Small la convierte en una máscara de píxeles, y la máscara se expande en un ROI de ensamblaje. También se incluye un backend numpy Otsu-flood que no necesita GPU.

Antes de entrar en producción, reemplaza `assembly.expected[]` con tus propios slots. La lista enviada se generó a partir de una imagen DeepPCB y solo sirve para ejercitar la cadena.

## Qué interfaces están disponibles

Los datos salen del host de inspección por tres interfaces, todas servidas localmente por el host.

- **Un PLC que ya actúa sobre una bobina OK/NG**: lee Modbus TCP en el puerto 502, unidad 1. HR 0–7 coinciden con el diseño del contrato de inspección de superficie v1, por lo que un programa existente sigue funcionando; la información nueva está en HR 8–11.
- **Un MES o historiador**: suscríbete a `<device-name>/inspection/<stream-id>/results` en el puerto 1883. Un evento JSON por fotograma procesado, esquema `2.0.0`, validado contra el contrato antes de publicarse.
- **Un operador o ingeniero de puesta en marcha**: el panel HTTP en el puerto 8080.

`<device-name>` se establece en el momento del despliegue y forma el primer segmento del tópico; asígnale un nombre por línea, célula o estación para que varios hosts en un mismo broker se mantengan separados. El id de flujo también se escribe en el payload, por lo que el código aguas abajo no necesita analizar el tópico.

### Tabla completa de interfaces

| Tipo | Dónde | Contenido | Notas |
|---|---|---|---|
| `mqtt` | 1883, `<device-name>/inspection/<stream-id>/results` | `verdict`, `verdict_reasons`, `defect_count`, `detections[]`, `assembly` (`enabled`, `expected_count`, `matched_count`, `missing_count`, `extra_count`, cada ítem faltante con su etiqueta y ROI), `dimension` (`enabled`, `calibrated`, `mm_per_pixel`, `out_of_tolerance_count`, `measurements[]` con estado por medición) | Esquema `2.0.0`; ambas secciones siempre presentes, `enabled: false` cuando el módulo está desactivado para esa fuente |
| `modbus_tcp` | 502, unidad 1, Coil 0/1 + HR 0–11 | Coil 0 = NG, Coil 1 = OK (mutuamente excluyentes). HR 0–7 como en el contrato v1: clase primaria, conteo de defectos, bbox ×10000, latido. HR 8 = conteo de faltantes, HR 9 = conteo de extras, HR 10 = mm medidos ×100, HR 11 = código de tolerancia | Registros escritos antes de que la bobina cambie de estado, bajo un único bloqueo |
| `http` | 8080, `/healthz` `/events` `/preview.mjpg` | fps, tiempo de inferencia, contadores de fallos por faltantes y dimensiones; los eventos más recientes; vista previa MJPEG con cajas y ROI | Panel local, sin autenticación |

**Código de tolerancia HR 11**: `0` ok, `1` undersize, `2` oversize, `3` not_found, `4` uncalibrated.

`verdict_reasons` es una lista; las cuatro razones (`defect`, `missing`, `extra`, `dimension_out_of_tolerance`) pueden aparecer juntas. Las ROI se configuran por fuente (`sources[].assembly` y `sources[].dimension`). Una sección `assembly` generada por la herramienta de anotación lleva `roi_profile_sha256`, que identifica qué perfil de ROI se ejecuta en el sitio; con ROI escritas a mano se omite o es `null`.

```json
{
  "schema": "2.0.0",
  "device": "assembly-station-01",
  "stream": "cam_pcb_top",
  "timestamp": 1729000000.456,
  "verdict": "NG",
  "verdict_reasons": ["missing"],
  "defect_count": 0,
  "detections": [],
  "assembly": {
    "enabled": true,
    "expected_count": 6,
    "matched_count": 5,
    "missing_count": 1,
    "extra_count": 0,
    "missing_items": [
      {"label": "capacitor_c12", "roi": [120, 240, 160, 280]}
    ]
  },
  "dimension": {
    "enabled": true,
    "calibrated": true,
    "mm_per_pixel": 0.125,
    "out_of_tolerance_count": 0,
    "measurements": [
      {"name": "pcb_width", "value_mm": 60.05, "status": "ok"}
    ]
  }
}
```

Tres cosas a vigilar al leer campos:

- **Cuando `HR 10 = 0`, lee primero HR 11.** `3` y `4` significan que no hay medición, no una lectura de 0 mm.
- **En la v2, `verdict = NG` puede venir con `defect_count = 0`.** Una pieza faltante o una medición fuera de tolerancia también hace que el fotograma sea NG.
- **Bobina y registros son solo una muestra en el lado de escritura.** Leerlos como dos peticiones Modbus puede abarcar dos veredictos a tasas altas de veredictos, observado alrededor de 20 veredictos/s. Si importa, sondea primero los registros y usa la bobina como disparador.

Con varios flujos en un mismo host, los registros Modbus contienen el último veredicto de cualquier flujo que lo haya producido; los resultados por flujo vienen de MQTT. El broker MQTT empaquetado es local y anónimo; apunta una instalación de producción a un broker con credenciales.

## Rendimiento y datos medidos {#datos-medidos}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_assembly</font></span></strong>
    </a>
</div><br />

### Velocidad y latencia

"Detector throughput" cubre solo la llamada de detección; "full pipeline" añade la fusión de veredictos, Modbus, MQTT y validación del contrato, sin limitación; "end-to-end" es desde la captura hasta la escritura de la bobina Modbus, limitado a una cadencia de línea de 10 fps.

| Dispositivo | Modelo / precisión | Detector throughput | Full pipeline | Captura de extremo a extremo → bobina Modbus |
|---|---|---:|---:|---|
| reComputer J40 series (J4012, Orin NX 16GB) | YOLOX-Tiny 640², TensorRT FP16 | 95.06 FPS (`detect()` P50 10.52 ms) | 89 FPS (P50 42.9 ms) | P50 10.92 ms / P99 11.18 ms; 3000 muestras, 0 perdidas. Después de un despliegue desde cero (motor construido en el dispositivo): P50 9.81 ms / P95 10.18 ms, n=300 |
| reComputer R2000 series + Hailo-8 | YOLOX-Tiny 640², HailoRT INT8 HEF | Hardware 106.75 FPS (`hailortcli run`); aplicación 94.02 FPS (P50 10.64 ms) | 43.92 FPS | P50 11.89 ms / P99 16.08 ms |

Condiciones: las cifras del detector en Orin se midieron en 500 ejecuciones sobre 60 fotogramas predecodificados; la ejecución del motor es unos 6.3 ms de eso, el resto es letterbox más NMS en CPU. La capacidad de flujo se midió en reComputer J40 series (J4012): 8 estables / 12 degradando / 24 fallando; 640² a 10 fps por flujo, cinco minutos por nivel, todo el barrido ejecutado dos veces, MQTT y Modbus desactivados. reComputer J30 series (J3011) ejecutó un flujo de 10 fps de forma continua durante 67 h, extremo a extremo P50 11.45 ms.

Reproducir: `solutions/edge_inspection_assembly/evaluation/` (Hailo-8: `evaluation/runs/2026-09-06-rpi-hailo/results.md`)

### Precisión de detección

| Métrica | Valor | Condiciones |
|---|---:|---|
| mAP50, reComputer J40 series, TensorRT FP16 | **0.9876** | DeepPCB6 val, 205 imágenes / 1158 cajas / 6 clases; con umbral 0.35, P 0.9284 / R 0.9741, FP 87 / FN 30, 0 fotogramas completamente perdidos |
| mAP50-95, reComputer J40 series (desplegado desde cero) | 0.8207 | Mismo conjunto de validación; referencia en CPU 0.8213 |
| mAP50, reComputer R2000 series + Hailo-8, INT8 HEF | **0.9858** | Mismo conjunto de validación; −0.0018 frente a la referencia en CPU |
| mAP50, emulador Hailo Dataflow Compiler, INT8 | 0.9924 | 20 imágenes de validación / 118 cajas, no directamente comparable con las filas de 205 imágenes; CPU, nativo y cuantizado dan el mismo mAP50 / P / R, por caja CPU ↔ cuantizado 119/120 coinciden |

Conjunto de datos: [DeepPCB](https://github.com/tangsanli5201/DeepPCB) (MIT), seis clases (open / short / mousebite / spur / copper / pin-hole), no redistribuido con el paquete.

Reproducir: `solutions/edge_inspection_assembly/evaluation/` (emulador: `evaluation/runs/2026-09-05-m3-hef/`)

### Piezas faltantes y dimensiones

| Ítem | Resultado | Condiciones |
|---|---|---|
| Bucle de verdad de terreno de piezas faltantes | Fotograma de plantilla 6 / 6 coincidente; después de intercambiar placas 6 / 6 reportados como faltantes | Lista de esperados construida a partir de las cajas de verdad de terreno de una imagen de validación (ROI = caja GT × 1.6, 6 entradas); después del intercambio `verdict_reasons` lista `missing` junto con `defect` |
| Error de dimensión (calibración ArUco) | Peor error relativo **0.65%**, presupuesto 1% | Escena ArUco sintética, sin error de lente ni de iluminación; lado largo 60 → 60.241 mm (+0.40%), lado corto 40 → 40.261 mm (+0.65%); tolerancia ±1.0 mm, veredicto `ok`; PNG sin comprimir y mp4v dan valores idénticos |
| Prueba de resistencia de flujo único | 67 h de ejecución continua, 0 fotogramas perdidos | reComputer J30 series (J3011), flujo único a 10 fps; RSS de referencia inicial 256–259 MiB, temperatura de unión 61–62 °C, 0 reinicios |

Reproducir: `evaluation/make_dimension_fixture.py`, `evaluation/smoke_cpu_dimension.py`; niveles de remojo en `boundary.soak.yaml`

### Tiempos de ejecución y parámetros clave

| Dispositivo | Modelo | Precisión | Tiempo de ejecución | Cómo llega el modelo al dispositivo |
|---|---|---|---|---|
| Serie reComputer J30 / J40 | YOLOX-Tiny 640² | FP16 | TensorRT | Motor generado en el dispositivo en el primer despliegue (unos 5 minutos), ligado a ese dispositivo y a la versión de TensorRT |
| Serie reComputer R2000 + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.x | HEF compilado fuera del dispositivo con Hailo Dataflow Compiler (nivel de optimización 1 + Bias Correction), descargado en el momento del despliegue |

- Umbral de detección: `0.35` (configuración de evaluación)
- Objetivo de calibración: ArUco `DICT_4X4_50` (predeterminado), o cualquier objeto de referencia de anchura conocida
- Motivos de veredicto: `defect` / `missing` / `extra` / `dimension_out_of_tolerance` se pueden desactivar uno por uno; `extra` requiere que el informe de piezas extra esté habilitado

### Degradaciones conocidas

- Mover, volver a montar o reenfocar la cámara invalida la plantilla de ROI; reconstruye la lista esperada.
- Un objetivo de calibración a una distancia de trabajo diferente de la cara medida, una pieza inclinada o un bajo contraste de borde producen error de dimensión, `not_found` o `uncalibrated`, sin que se genere ningún error.
- La precisión proviene de defectos de placas desnudas DeepPCB: defectos sintéticos con bordes limpios, y las seis clases no son piezas de montaje faltantes. Las escenas de montaje reales son más difíciles.
- En la serie reComputer R2000 el cuello de botella es la CPU host: toda la canalización se ejecuta a 43,92 FPS y cae aún más por debajo del rendimiento del detector que en Orin.
- La capacidad de flujo se midió con MQTT y Modbus deshabilitados; con ambas salidas habilitadas el recuento alcanzable es inferior a 8.

## Fuentes de datos y recursos

- **DeepPCB** — [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB), licencia MIT. Usado para entrenar el detector incluido y como conjunto de validación para todas las cifras de precisión anteriores. La licencia MIT permite la redistribución y el uso comercial y requiere que el aviso de copyright acompañe a las copias y trabajos derivados; la atribución viaja con las imágenes en `gallery/ATTRIBUTION.md` del paquete. Las imágenes son escaneos en escala de grises binarizados de capas de cobre de PCB desnudas, sin personas y sin contenido que identifique al cliente. **El conjunto de datos no se redistribuye con el paquete.**
- **YOLOX** — [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX), Apache-2.0. Backbone del detector. No se utiliza código ni pesos de Ultralytics, por lo que no hay obligación de AGPL.
- **SAM 2.1 Hiera-Small** — [github.com/facebookresearch/sam2](https://github.com/facebookresearch/sam2), código y checkpoints Apache-2.0. Usado solo por la herramienta de anotación offline.
- **Imágenes del útil de dimensiones** — sintéticas, generadas por `evaluation/make_dimension_fixture.py` de este proyecto. Sin material de terceros, no se requiere atribución.
- **Diagrama de arquitectura** — dibujado a partir del catálogo de dispositivos del paquete y de las interfaces de salida.

El código de tiempo de ejecución es Apache-2.0. El modelo incluido está entrenado en DeepPCB; consulta el aviso de uso al principio para conocer su alcance.
