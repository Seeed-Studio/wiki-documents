---
description: Mide analítica de video industrial 4K de cuatro flujos en Jetson Orin Nano 8GB y Orin NX 16GB con TensorRT YOLO, NVDEC, codificación H.264, y monitorización de potencia, latencia y temperatura.
title: Benchmark de visión industrial 4K en Jetson Orin Nano y Orin NX
keywords:
  - Jetson Orin Nano
  - Jetson Orin NX
  - TensorRT
  - YOLOv8
  - NVDEC
  - NVENC
  - H.264
  - visión industrial
  - benchmark
tags:
  - Visión por Computador
  - YOLO
  - Jetson
  - Benchmark
image: https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png
slug: /jetson-orin-industrial-vision-benchmark
last_update:
  date: 11/13/2026
  author: Dayu
createdAt: '2026-11-13'
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/es/jetson-orin-industrial-vision-benchmark/
---

[![Benchmark de visión industrial de reComputer Rugged](https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png)](https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png)

<div className="jetson-product-page">
  <div className="jetson-product-actions" style={{justifyContent: 'center'}}>
    <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">Obtener reComputer Rugged J4012 ↗</a>
  </div>
</div>

Ejecutar YOLO sobre una sola imagen mide solo una pequeña parte de un sistema de video industrial. Una aplicación desplegada debe decodificar múltiples flujos, mover y redimensionar fotogramas, ejecutar inferencia, codificar grabaciones y ofrecer previsualizaciones utilizables mientras comparte memoria y potencia.

Este proyecto instrumenta esa carga de trabajo completa en **Jetson Orin Nano 8GB** y **Jetson Orin NX 16GB**. Cuatro clips industriales H.264 4K nativos alimentan un detector YOLOv8n FP16 de TensorRT, una rama de grabación H.264 y un panel de control en el navegador. Las mediciones muestran dónde la codificación por CPU, la planificación de fotogramas y la refrigeración afectan al resultado.

**Orin Nano no tiene hardware NVENC.** Su rama de grabación usa **emulación x264 por CPU**, produciendo fotogramas H.264 reales como sustituto de la funcionalidad NVENC. Los datos de rendimiento se miden a partir del trabajo completado. Orin NX utiliza su codificador NVENC por hardware.

Con los mismos cuatro archivos de origen, inferencia secuencial y destino de grabación, **Orin NX ofrece 1,33× el rendimiento de inferencia, un 63,3% menos de carga de CPU normalizada y un 69,7% menos de latencia extremo a extremo** en estas ejecuciones de aplicación grabadas.

[![Rendimiento de la aplicación de cuatro flujos en Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-performance-overview.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-performance-overview.png)

**Jetson Orin Nano 8GB — Emulación x264 por CPU**

[![Panel de visión industrial de Jetson Orin Nano 8GB con emulación x264 por CPU](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nano-dashboard.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nano-dashboard.png)

**Jetson Orin NX 16GB — NVENC por hardware**

[![Panel de visión industrial de Jetson Orin NX 16GB con NVENC por hardware](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-dashboard.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-dashboard.png)

## Plataformas de prueba y carga de trabajo

| Configuración | Jetson Orin Nano 8GB | Jetson Orin NX 16GB |
|---|---|---|
| Identificación del módulo | Orin Nano 8GB | Orin NX 16GB |
| Jetson Linux | L4T 35.5 | L4T 35.5 |
| CUDA | 11.4 | 11.4 |
| TensorRT | 8.5.2 | 8.5.2 |
| Modo de potencia configurado | 25W | MAXN |
| Límites de frecuencia en tiempo de ejecución | DVFS predeterminado | CPU 1,50 GHz; GPU 816 MHz |
| Normalización de CPU | Promedio entre seis núcleos | Promedio entre ocho núcleos |
| Decodificador de video | NVDEC | NVDEC |
| Codificador H.264 | Emulación x264 por CPU; sin NVENC | NVENC por hardware |
| Configuración de inferencia | Lote secuencial 1, FP16 | Lote secuencial 1, FP16 |
| Refrigeración durante la ejecución reportada | Refrigeración pasiva | Refrigeración pasiva |

El modelo es YOLOv8n con una entrada letterboxed de 640×640, umbral de confianza 0,30 y umbral IoU 0,45. La decodificación y la codificación mantienen la resolución nativa de **3840×2160**. “Analítica 4K” describe la canalización de video; el detector en sí consume imágenes redimensionadas.

Los cuatro clips activos cubren actividad de almacén y fábrica:

| Canal | Escena | Frecuencia de fotogramas nativa | Fuente |
|---|---|---:|---|
| 1 | Pasillo de almacén | 25 FPS | [Men Working in a Warehouse](https://www.pexels.com/video/men-working-in-a-warehouse-4281405/) |
| 2 | Manipulación de material | 25 FPS | [Video of Man Loading Cart](https://www.pexels.com/video/video-of-man-loading-cart-4284185/) |
| 3 | Línea de producción de fábrica | 24 FPS | [Wide View of Modern Factory Production Line](https://www.pexels.com/video/wide-view-of-modern-factory-production-line-30715848/) |
| 4 | Operaciones en fábrica textil | 25 FPS | [Documentary Filming Inside Textile Factory](https://www.pexels.com/video/documentary-filming-inside-textile-factory-39533716/) |

En conjunto, las fuentes contienen 99 fotogramas por segundo de contenido. Los clips se repiten en bucle para la carga de trabajo y están cubiertos por la [Licencia de Pexels](https://www.pexels.com/license/). Este experimento utiliza H.264 en todo momento.

## Arquitectura de la canalización

Los fotogramas decodificados permanecen en NVMM antes de bifurcarse en grabación e inferencia:

```text
3840×2160 H.264 → NVDEC → NVMM
                           ├─ Recording
                           │    NX:   hardware NVENC → 4K H.264
                           │    Nano: VIC → CPU-accessible I420 → x264 → 4K H.264
                           │
                           └─ VIC resize to 640×360
                                → CPU letterbox/preprocessing to 640×640
                                → TensorRT FP16 YOLOv8n
                                → CPU class-aware NMS
                                → detection results

Independent 640×360 JPEG preview worker → browser
Latest completed detections → preview overlays
```

El codificador de Nano utiliza el preset `ultrafast` de x264, ajuste `zerolatency`, dos hilos por flujo, subprocesado por segmentos, sin fotogramas B y un objetivo de 10.000 kbit/s. Una cola de grabación acotada descarta fotogramas antiguos bajo presión, permitiendo que la inferencia continúe. Los fotogramas codificados y los bytes de salida se cuentan después de que la codificación real se completa.

**La conversión VIC y la inferencia TensorRT no proporcionan codificación de flujo de bits H.264 por GPU.** La actividad NVENC en Nano se reporta como no disponible; no se inventa ningún valor de utilización de hardware para el codificador ausente.

La ejecución sostenida en Nano selecciona un objetivo de tiempo de medios de codificación de 5 FPS por flujo. Esto reduce el trabajo de grabación antes de la conversión a memoria de CPU. Ese ajuste no garantiza 20 fotogramas completados por segundo de reloj de pared: el progreso real de entrada y la capacidad del codificador siguen determinando el rendimiento de salida. El panel informa tanto los FPS realmente codificados como la cobertura de codificación.

## Qué se midió

Los cuatro archivos de video en NX se verificaron frente a la referencia de Nano con SHA256. Ambas ejecuciones sostenidas usan cuatro flujos, sincronización con la fuente, lote secuencial TensorRT 1, un objetivo de tiempo de medios de grabación de 5 FPS por flujo, generación de previsualización a 15 FPS y diez minutos de recopilación. Los resúmenes excluyen los primeros 30 segundos. Estas son mediciones de sistema desplegado con diferentes backends de codificador y puntos de operación, más que una comparación aislada de GPU.

- **Ejecución sostenida en Nano:** 13 de noviembre de 2026, 10:08:04–10:18:04 UTC+08, 582 muestras en 599,83 segundos.
- **Ejecución sostenida en NX:** 13 de noviembre de 2026, 13:47:26 UTC+08 a 13 de noviembre de 2026, 13:57:27 UTC+08, 582 muestras en 599,86 segundos. Los límites de frecuencia de CPU/GPU se indican arriba. Visual Hub se pausó durante la recopilación y se restauró después.
- **Segmento de grabación a tasa completa en NX:** los primeros 99,72 segundos de una captura independiente, con el límite de grabación eliminado y el batching dinámico de inferencia habilitado. La captura planificada de 150 segundos se detuvo en el umbral de protección de 99°C; este breve segmento de capacidad excluye sus primeros 30 segundos y mantiene la sincronización con la fuente y los mismos límites de frecuencia.

La generación de previsualización en el backend permanece habilitada durante la recopilación; un cliente de previsualización adicional en el navegador solo se abre después de que finaliza la medición sostenida.

El rendimiento cuenta fotogramas completados, en lugar de FPS solicitados. Ambos resúmenes sostenidos utilizan diferencias de contadores y energía integrada del módulo:

```text
Throughput (FPS)       = completed frames / elapsed seconds
Average module power  = integrated module energy / elapsed seconds
Encoding coverage     = encoded frames / decoded frames
```

Las leyendas de las curvas muestran los valores finales muestreados; las tablas de resumen utilizan deltas de contadores después del calentamiento.

La potencia proviene del raíl **VDD_IN del módulo** INA3221. Excluye periféricos alimentados por separado y no es la potencia en pared. La carga de CPU se normaliza entre los núcleos de cada módulo. Los porcentajes de actividad NVDEC/NVENC representan la fracción de muestras de contador distintas de cero a 20 Hz, más que una medición calibrada de utilización de hardware.

## Resultados de cuatro flujos

| Métrica | Orin Nano 8GB | Orin NX 16GB |
|---|---:|---:|
| Rendimiento agregado de decodificación | 65,24 FPS | 98,63 FPS |
| Rendimiento agregado de inferencia | 58,82 FPS | 78,06 FPS |
| Rendimiento agregado de codificación H.264 | 13,24 FPS, x264 por CPU | 20,00 FPS, NVENC |
| Carga de CPU | 49,34% | 18,10% |
| Carga de GPU | 30,49% | 54,68% |
| Latencia extremo a extremo, media móvil P95 | 1108,46 ms | 335,57 ms |
| Potencia de entrada del módulo | 11,02 W | 15,76 W |
| Temperatura máxima medida | 58,19°C | 97,38°C |
| Muestras con estrangulamiento térmico | 0 | 0 |

### Rendimiento y presión de codificación

[![Rendimiento de decodificación, inferencia y codificación: Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-throughput-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-throughput-comparison.png)

Curvas individuales: [Rendimiento de Nano](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-throughput.png) · [Rendimiento de NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-throughput.png).

NX mantiene 78,06 FPS de inferencia y 98,63 FPS de decodificación con los mismos cuatro archivos de origen. Nano completa 58,82 FPS de inferencia y 65,24 FPS de decodificación. Ambos usan el objetivo de grabación de 5 FPS por flujo; las tasas de grabación realmente completadas son 20,00 y 13,24 FPS respectivamente.

### Grabación NVENC a tasa completa

Eliminar el límite de grabación en NX produce **98,51 FPS agregados de codificación H.264 4K** mientras la inferencia continúa a 75,63 FPS. El rendimiento de decodificación es 98,51 FPS, la carga de CPU normalizada es 12,79% y la potencia del módulo es 16,88 W. Este breve segmento de capacidad utiliza batching dinámico de inferencia y grabación a la tasa de la fuente; no es un resultado de resistencia de diez minutos.

[![Carga de trabajo de grabación H.264 por hardware a tasa completa en NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-full-rate-throughput.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-full-rate-throughput.png)

El NVENC por hardware permite que la rama de grabación maneje la carga de trabajo 4K a la tasa de origen mientras comparte el sistema con la detección. El reemplazo x264 por CPU en Nano requiere un presupuesto de grabación explícito para preservar el resto de la aplicación.

### Carga de cómputo y potencia

[![Carga de CPU, carga de GPU y potencia del módulo: Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-load-and-power-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-load-and-power-comparison.png)

Curvas individuales: [Carga y potencia de Nano](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-load-and-power.png) · [Carga y potencia de NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-load-and-power.png).

En Nano, x264 comparte recursos de CPU con el preprocesamiento, el posprocesamiento, la generación de previsualizaciones y los hilos de la aplicación. Por lo tanto, la carga de GPU por sí sola no puede explicar la capacidad del flujo de procesamiento. El NVENC por hardware en NX maneja la rama de grabación de forma independiente de la codificación de flujo de bits por CPU, aunque la decodificación, el tráfico de memoria y los límites térmicos siguen afectando a la aplicación.

### Temperatura y refrigeración

[![Temperatura de CPU, GPU y sensor máximo: Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-temperature-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-temperature-comparison.png)

Curvas individuales: [Temperatura de Nano](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-temperature.png) · [Temperatura de NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-temperature.png).

Nano alcanzó un máximo de 58,19 °C. La ejecución sostenida de NX alcanzó un pico de 97,38 °C y registró 0 eventos de estrangulamiento térmico muestreados. Una captura preliminar MAXN sin restricciones se detuvo a 99 °C; por lo tanto, el resultado sostenido utiliza los límites de CPU/GPU indicados arriba. Las protecciones térmicas por hardware permanecen activas.

Ambos dispositivos usan refrigeración pasiva. La temperatura ambiente y los conjuntos de refrigeración equivalentes no se controlaron, por lo que estas sesiones no establecen una ventaja térmica entre módulos.

### Latencia de extremo a extremo

[![Historiales de latencia de extremo a extremo: Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-latency-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-latency-comparison.png)

Curvas individuales: [Latencia de Nano](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-latency.png) · [Latencia de NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-latency.png).

Ambas curvas muestran el **peor P95 móvil por canal**, medido desde la entrada del decodificador hasta el posprocesamiento de detección completado. Las medias ponderadas por tiempo después del calentamiento son 1108,46 ms para Nano y 335,57 ms para NX, una reducción del 69,7 % en esta estadística registrada.

Estas son mediciones de latencia del flujo completo, no tiempos de ejecución aislados de TensorRT ni un P95 recalculado sobre cada fotograma en la ejecución de diez minutos. Ambas curvas y ambos valores de resumen usan la misma estadística móvil.

### Comportamiento de la memoria

[![Uso de memoria del dispositivo: Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-memory-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-memory-comparison.png)

Curvas individuales: [Memoria de Nano](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-memory.png) · [Memoria de NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-memory.png).

Las curvas muestran el uso real de memoria del dispositivo como porcentaje de la RAM disponible de cada dispositivo. Nano sube del 35,6 % al 71,2 % durante la ejecución; el RSS de la aplicación sube de aproximadamente 2.108 MiB a 4.695 MiB. La memoria de NX sube del 37,3 % al 43,6 % en la nueva ejecución sostenida, con el RSS de la aplicación terminando en 1277 MiB. El mayor crecimiento de Nano sigue sin resolverse en esta medición. Diez minutos de temperatura y rendimiento aceptables no establecen la estabilidad de memoria para operación continua.

## Previsualizaciones de detección y comportamiento del panel

[![Cuatro vistas de detección industrial de Orin Nano y Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-detection-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-detection-comparison.png)

Previsualizaciones individuales: [Detecciones de Nano](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-detection.png) · [Detecciones de NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-detection.png).

El navegador usa previsualizaciones JPEG independientes de 640×360 con un objetivo seleccionable de 5 o 15 FPS. Cada canal tiene una solicitud de fotograma pendiente, pinta nuevos fotogramas y evita acumular una cola de fotogramas antiguos. Los FPS de previsualización generados, los FPS de visualización del navegador, los FPS de inferencia y los FPS de codificación de video se informan por separado.

Los cuadros delimitadores usan el último resultado de detección completado. La superposición muestra su antigüedad de actualización y oculta los cuadros después de 300 ms sin un nuevo resultado. En consecuencia, una imagen fluida en el navegador no significa que cada fotograma mostrado haya sido inferido, y estas superposiciones no son seguimiento de objetos.

Ambas figuras del panel representan la telemetría registrada y los resúmenes de la ejecución completada. La telemetría de Nano es del 13 de noviembre a las 10:18:04 UTC+08; sus píxeles de previsualización se capturaron por separado a las 11:05:05. La telemetría y los píxeles de previsualización de NX se capturaron después de la ejecución sostenida a las 13:57:34 UTC+08. Los valores instantáneos del panel pueden diferir de los promedios de la ventana, y las escenas de previsualización no están sincronizadas entre dispositivos.

YOLOv8n usa clases genéricas COCO80. Estas previsualizaciones demuestran detección de personas y objetos en escenas industriales; no se reclama ningún punto de referencia de EPP, detección de defectos ni precisión industrial.

## Reproducir el enfoque de medición

Antes de elegir un backend de grabación, inspecciona la identidad real del módulo y el software instalado. Una cadena de modelo de device-tree de la placa portadora por sí sola puede ser insuficiente para distinguir módulos. La identidad de Orin Nano 8GB usada aquí se verificó a partir de la EEPROM del módulo.

Las comprobaciones útiles en una instalación Jetson incluyen:

```bash
cat /etc/nv_tegra_release
/usr/local/cuda/bin/nvcc --version
python3 -c "import tensorrt as trt; print(trt.__version__)"
sudo nvpmodel -q
gst-inspect-1.0 nvv4l2decoder
gst-inspect-1.0 nvv4l2h264enc
gst-inspect-1.0 x264enc
```

En Nano, un plugin NVENC ausente no debe informarse como un codificador por hardware en funcionamiento. Verifica el códec de salida y las dimensiones de forma independiente, y cuenta los fotogramas codificados completados en lugar de los fotogramas enviados a una cola. Los motores TensorRT deben construirse para el módulo de destino y la pila de software.

Para una ejecución repetible, conserva los archivos de origen y sus checksums, la configuración del modelo, el modo de potencia, el estado de refrigeración, el objetivo del codificador, la política de temporización, la configuración de previsualización y las marcas de tiempo de medición. Comienza el monitoreo antes de la carga de trabajo y distingue una prueba corta de capacidad de una ejecución sostenida. Mantén contadores por canal para que el rendimiento agregado no pueda ocultar una cámara detenida.

El panel sirve los recursos del frontend y el API de medición desde el mismo backend. Cada curva puede exportarse de forma independiente. Esto hace posible inspeccionar el rendimiento junto con la potencia, la temperatura, la latencia y la memoria en lugar de seleccionar un único valor de FPS favorable.

## Elecciones prácticas de despliegue

- **Para grabación 4K multi-flujo a tasa completa, reserva presupuesto para el codificador.** La rama NVENC por hardware de NX alcanzó 98,51 FPS codificados en su ejecución de grabación a la tasa de origen. El reemplazo x264 por CPU en Nano requiere un presupuesto de tasa de grabación y una cobertura visible de fotogramas.
- **Ajusta todo el flujo de procesamiento.** Un conjunto corto anterior en Nano midió 56,82 FPS de inferencia con inferencia secuencial frente a 51,70 FPS con batching bajo su configuración de codificador limitado. El tamaño de lote por sí solo no predijo el rendimiento de la aplicación.
- **Trata la refrigeración y la memoria como restricciones de operación.** El punto de operación sostenido de NX usa límites explícitos de frecuencia; el registro de Nano contiene crecimiento de memoria. Supervisa la temperatura, el estrangulamiento y la memoria durante ejecuciones de resistencia más largas.
- **Mide la frescura por separado de la suavidad de visualización.** Los FPS del navegador describen la presentación. La latencia de decodificador a detección describe cuándo el resultado se vuelve disponible para una aplicación.

## Recursos relacionados

- [Desplegar YOLOv8 con TensorRT en Jetson](https://wiki.seeedstudio.com/es/YOLOv8-TRT-Jetson/)
- [AI NVR con Jetson Orin](https://wiki.seeedstudio.com/es/ai_nvr_with_jetson/)
- [Licencia de Pexels](https://www.pexels.com/license/)

## Soporte técnico y debate sobre el producto

Para preguntas técnicas y debates sobre implementación, visita el [Foro de Seeed Studio](https://forum.seeedstudio.com/) o las [discusiones del Wiki](https://github.com/Seeed-Studio/wiki-documents/discussions/69).
