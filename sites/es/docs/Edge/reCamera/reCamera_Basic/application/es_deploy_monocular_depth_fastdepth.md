---
description: Convierte, cuantiza y despliega el modelo de estimación de profundidad monocular FastDepth en el TPU CV181x de reCamera con TPU-MLIR, y ejecútalo en el dispositivo a 54 FPS junto con YOLO11n.
title: Desplegar Estimación de Profundidad Monocular (FastDepth INT8)
keywords:
  - Borde
  - reCamera
  - Estimación de Profundidad
  - FastDepth
  - Conversión de Modelo
  - TPU-MLIR
image: https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png
slug: /recamera_deploy_monocular_depth
sidebar_position: 19
last_update:
  date: 08/18/2026
  author: Zafar Khidoyatov
---

# Desplegar Estimación de Profundidad Monocular en reCamera (FastDepth, INT8)

Esta guía explica paso a paso cómo convertir, cuantizar y desplegar un modelo de estimación de profundidad monocular — [FastDepth](https://github.com/dwofk/fast-depth) — en el TPU CV181x de reCamera y ejecutarlo en el dispositivo. Todos los comandos se ejecutaron y todas las cifras se midieron en hardware real.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="Fotograma de oficina interior junto a su mapa de calor de profundidad FastDepth INT8" />
</div>

Resultados medidos que puedes esperar al final:

| Métrica | Resultado |
|---|---|
| Latencia de inferencia de profundidad (INT8, 224×224) | **18.4 ms** (P50 18.36 / P95 18.46, n=300) |
| FPS de profundidad en modo independiente | **54** |
| Profundidad + YOLO11n en serie, por fotograma | 53.9 ms → **18.5 FPS** (a nivel de modelo) |
| Pérdida de precisión INT8 vs BF16 (DIODE AbsRel) | **< 2%** |
| Tamaño de `.cvimodel` | 1.5 MB (INT8) / 3.1 MB (BF16) |
| Prueba continua de 30 minutos | sin bloqueos, sin deriva, memoria estable |

:::note Profundidad relativa, no en metros
FastDepth predice profundidad **relativa** y fue entrenado en el conjunto de datos *indoor* NYU Depth V2. En interiores produce una estructura cerca/lejos correcta; las escenas en exteriores salen con un rango fuertemente comprimido (consulta [Resultados cualitativos](#resultados-cualitativos-qué-esperar)). No interpretes las salidas en bruto como metros.
:::

El flujo de trabajo: ONNX → Top-MLIR (`model_transform`) → tabla de calibración INT8 (`run_calibration`, 500 imágenes) → `.cvimodel` compilado (`model_deploy`, dos compuertas de validación) → inferencia en el dispositivo (`cviruntime`).

## Requisitos previos

- reCamera serie 2002 (SoC SG2002, TPU CV181x), conectada por USB (`192.168.42.1`), acceso ssh como usuario `recamera`
- Docker en tu máquina de desarrollo
- El contenedor de la cadena de herramientas TPU-MLIR:

```bash
docker pull sophgo/tpuc_dev:v3.4
docker run --rm -it -v $(pwd):/workspace sophgo/tpuc_dev:v3.4
```

Dentro del contenedor, instala TPU-MLIR en un entorno virtual mantenido en el bind mount (para que sobreviva a los reinicios del contenedor):

```bash
python3 -m venv /workspace/tpu_env
source /workspace/tpu_env/bin/activate
pip install "tpu_mlir[onnx]==1.28.1"
pip install psutil
pip install torch --index-url https://download.pytorch.org/whl/cpu
```

:::caution Dos trampas de instalación

1. Instala el extra `[onnx]`, **no** `[all]` — `tpu_mlir[all]==1.28.1` fija una versión de paddlepaddle que se ha eliminado de PyPI y ya no se puede instalar.
2. `psutil` y `torch` son dependencias no declaradas — sin ellas las herramientas fallan al importar. Usa la rueda de torch solo-CPU (el paquete por defecto de PyPI descarga una pila CUDA de varios GB que no necesitas).

:::

Verifica: `model_transform.py --help` debería imprimir el banner de versión de TPU-MLIR.

## Paso 1 — Obtener el modelo ONNX

Exporta FastDepth (la variante `mobilenet-nnconv5dw-skipadd-pruned`) a ONNX con una entrada fija 1×3×224×224, opset ≥ 13, y pásalo por [onnxsim](https://github.com/daquexian/onnx-simplifier). Tras la simplificación el grafo contiene solo `Conv / Clip / Relu / Resize / Add` — todas soportadas por TPU-MLIR para CV181x. (Auditar la lista de operaciones *antes* de la conversión es un hábito que compensa — consulta [¿Se ejecutará tu modelo en este chip?](#se-ejecutará-tu-modelo-en-este-chip) más abajo.)

## Paso 2 — Traducir a Top-MLIR

El preprocesamiento esperado de FastDepth es simplemente **resize + RGB + /255** — sin normalización de media/desviación estándar. Declaras la receta una vez aquí; se incrusta en el `.mlir`, y todas las herramientas posteriores (calibración, despliegue) la reutilizan automáticamente:

```bash
mkdir -p /workspace/build/fastdepth && cd /workspace/build/fastdepth
model_transform.py --model_name fastdepth \
  --model_def /workspace/fastdepth_224.onnx \
  --input_shapes [[1,3,224,224]] \
  --mean 0.0,0.0,0.0 \
  --scale 0.00392156862745098,0.00392156862745098,0.00392156862745098 \
  --pixel_format rgb \
  --test_input /workspace/test_image.jpg \
  --test_result fastdepth_top_outputs.npz \
  --mlir fastdepth_224.mlir
```

**Deberías ver:** una comparación capa por capa contra ONNX que termina con todas las capas aprobadas (`46/46`, similitud coseno ≈ 1.0).

Conserva `fastdepth_in_f32.npz` y `fastdepth_top_outputs.npz` — son las referencias congeladas en float32 que validan el modelo cuantizado más adelante.

:::tip
La comprobación de la extensión de `--test_input` distingue mayúsculas de minúsculas: `.JPG` provoca un fallo con una aserción confusa. Usa `.jpg` en minúsculas — para este archivo y para cada imagen de calibración.
:::

## Paso 3 — Crear un conjunto de datos de calibración

Aquí viene la parte que la mayoría de los tutoriales omiten, y es la que determina tu calidad INT8. La cuantización reparte 256 niveles sobre el rango de valores que cada capa *realmente produce en tus imágenes de calibración*. En inferencia, los valores fuera de ese rango registrado se recortan — información destruida en la capa. Así que el conjunto debe cubrir lo que la cámara verá realmente:

- **~500 imágenes**, en su mayoría fotogramas capturados **con la propia reCamera de destino** (día / interior / noche / a contraluz), completados con un conjunto de datos público (p. ej. imágenes de validación de [DIODE](https://diode-dataset.org/))
- Selecciones repartidas de forma uniforme entre las grabaciones — nunca casi duplicados consecutivos
- **Preprocesamiento idéntico al despliegue**: proporciona imágenes originales y deja que las herramientas apliquen la receta del `.mlir` — no las redimensiones tú mismo
- Nombres de archivo `.jpg` en minúsculas

:::caution
**Los contadores de fotogramas MPEG-TS mienten.** Al extraer fotogramas de grabaciones `.ts`, `CAP_PROP_FRAME_COUNT` puede informar 3× el recuento real — cuenta los fotogramas leyendo secuencialmente hasta el final.
:::

Genera la tabla de calibración (~3 minutos para 500 imágenes):

```bash
run_calibration.py fastdepth_224.mlir \
  --dataset /workspace/calib_set --input_num 500 \
  -o fastdepth_cal_table
```

## Paso 4 — Cuantizar y compilar

```bash
model_deploy.py --mlir fastdepth_224.mlir --quantize INT8 \
  --calibration_table fastdepth_cal_table --processor cv181x \
  --test_input fastdepth_in_f32.npz \
  --test_reference fastdepth_top_outputs.npz \
  --tolerance 0.85,0.45 \
  --model fastdepth_224_int8.cvimodel
```

La herramienta ejecuta **dos compuertas de validación** — aprende a leer ambas, responden a preguntas diferentes:

| Compuerta | Compara | Pregunta que responde | Resultado FastDepth |
|---|---|---|---|
| 1 | MLIR cuantizado vs referencia float32 | *¿la cuantización dañó las matemáticas?* | coseno **0.9997** ✅ |
| 2 | `.cvimodel` compilado (simulador de TPU) vs su propio MLIR cuantizado | *¿la compilación preservó las matemáticas?* | **IGUAL (1.0)** ✅ |

:::caution La Compuerta 2 no es un trámite
La generación de código puede imprimir advertencias (p. ej. `cvkcv181x tiu ... wrong parameter`) y **aun así informar `[Success]`** mientras produce un modelo numéricamente roto.
Solo la Compuerta 2 detecta esto. Si la Compuerta 1 pasa pero la Compuerta 2 se derrumba, tu problema es de compatibilidad modelo-vs-chip, no de cuantización — consulta [¿Se ejecutará tu modelo en este chip?](#se-ejecutará-tu-modelo-en-este-chip)
:::

Como referencia de precisión, construye una variante BF16 de la misma manera — omite `--calibration_table` y usa `--quantize BF16` (no se necesita calibración: BF16 conserva los rangos de números reales).

## Paso 5 — Ejecutarlo en la reCamera

La imagen del sistema operativo de reCamera no incluye un ejecutor genérico de `.cvimodel`, así que usamos un pequeño programa en C contra el API de `cviruntime`, compilado cruzado con la cadena de herramientas [sscma-example-sg200x](https://github.com/Seeed-Studio/sscma-example-sg200x) y enlazado estáticamente contra las bibliotecas del SDK `libcviruntime-static.a` / `libcvikernel-static.a` / `libcvimath-static.a`.
El API es agradablemente pequeño:

```c
#include "cviruntime.h"

CVI_MODEL_HANDLE model = NULL;
CVI_NN_RegisterModel("fastdepth_224_int8.cvimodel", &model);

CVI_TENSOR *inputs, *outputs;
int32_t input_num, output_num;
CVI_NN_GetInputOutputTensors(model, &inputs, &input_num, &outputs, &output_num);

// fill inputs[0] with 1x3x224x224 float32 (RGB/255, CHW), then:
CVI_NN_Forward(model, inputs, input_num, outputs, output_num);
// outputs[0] now holds the 1x1x224x224 depth map (float32)

CVI_NN_CleanupModel(model);
```

<!-- LINK: full runner source (warm-up, P50/P95 timing, dual-model mode) — location TBD -->

Preprocesamiento en el lado del host (Python — produce el archivo de entrada en bruto):

```python
import cv2
img = cv2.imread("frame.jpg")
img = cv2.resize(img, (224, 224))
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = img.astype("float32") / 255.0
img.transpose(2, 0, 1).tofile("input.bin")
```

En la cámara, el TPU necesita root y un subsistema de vídeo libre:

```bash
sudo /etc/init.d/S93sscma-supervisor stop   # frees VPSS/ION held by the stock stack
sudo ./depth_runner fastdepth_224_int8.cvimodel input.bin depth_out.bin 300
```

**Deberías ver** (salida real de nuestro dispositivo):

```
model registered: fastdepth_224_int8.cvimodel (target cv181x)
input : name=data fmt=FP32 count=150528 shape=[1,3,224,224]
output: name=decode_conv6/2_Relu_f32 fmt=FP32 count=50176 shape=[1,1,224,224]
depth latency over 300 runs (after 20 warm-up): mean 18.38 ms  P50 18.36 ms  P95 18.46 ms  (54.41 fps mean)
```

Visualiza el resultado como un mapa de calor:

```python
import cv2, numpy as np
d = np.fromfile("depth_out.bin", dtype="float32").reshape(224, 224)
g = ((d - d.min()) / (d.max() - d.min()) * 255).astype("uint8")
cv2.imwrite("depth_map.png", cv2.applyColorMap(g, cv2.COLORMAP_INFERNO))
```

## Resultados de benchmark

Todas las cifras: entrada 224×224, preprocesamiento como arriba, calentamiento de 20 inferencias, 300 ejecuciones medidas, en el dispositivo (TPU CV181x):

| Benchmark | media | P50 | P95 | FPS |
|---|---|---|---|---|
| FastDepth INT8 | 18.38 ms | 18.36 | 18.46 | 54.4 |
| FastDepth BF16 | 19.55 ms | 19.54 | 19.58 | 51.2 |
| Detección YOLO11n INT8 (modelo estándar) | 35.51 ms | 35.50 | 35.53 | 28.2 |
| FastDepth INT8 + YOLO11n, en serie | 53.90 ms | 53.88 | 53.99 | 18.5 |

Tres hallazgos que vale la pena conocer:

- **El TPU es determinista** — P95 − P50 ≤ 0.1 ms en todas las variantes. No hay jitter del que preocuparse al diseñar.
- **La co-residencia es gratuita** — cargar YOLO junto a él le cuesta al modelo de profundidad +0.01 ms. Una ejecución combinada continua de 30 minutos: sin bloqueos, sin deriva de latencia, memoria estable.
- **La ventaja de velocidad de INT8 sobre BF16 es solo de ~6%**: con este tamaño de modelo el TPU está limitado por el ancho de banda, así que INT8 básicamente te da *la mitad del tamaño de modelo*. Ambas precisiones son viables; INT8 midió < 2% de diferencia AbsRel frente a BF16 en DIODE (alineado por escala y desplazamiento), muy por debajo de un margen típico del 5%.

## Resultados cualitativos (qué esperar)

- **Interiores** (en distribución): estructura global correcta: los objetos más cercanos son más oscuros, las paredes lejanas son brillantes, los pasillos más profundos son los más brillantes.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="Fotograma de oficina interior junto a su mapa de calor de profundidad FastDepth INT8" />
</div>

- **Exteriores**: fuera de distribución para FastDepth entrenado en NYU: el rango se comprime bruscamente (una calle de 40 m se mapea a un intervalo de ~3 unidades) y la estructura se vuelve burda. Como mucho es utilizable para indicios aproximados de cerca/lejos.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-outdoor-street-result.png" alt="Fotograma de calle exterior junto a su mapa de calor de profundidad FastDepth INT8 que muestra compresión de rango" />
</div>

- **Noche**: en una cámara sin iluminación IR, las escenas iluminadas por lámparas producen manchas gruesas con los rangos más comprimidos de todos; las escenas totalmente sin luz son una entrada casi negra y no son significativas.

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-a.png" alt="Escenas nocturnas con mapas de profundidad FastDepth" />
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-b.png" alt="Escenas diurnas en exteriores con mapas de profundidad FastDepth" />
</div>

Si tu producto necesita profundidad de calidad en exteriores o de noche, planifica un fine-tuning en el dominio objetivo o una destilación desde un profesor más potente (por ejemplo, Depth Anything V2) hacia una arquitectura de estudiante amigable con el chip.

## ¿Se ejecutará tu modelo en este chip?

Convertir con éxito **no** es lo mismo que ejecutar correctamente. Un caso real de este proyecto: **ZipDepth** (un modelo de profundidad orientado a NPU) se cuantiza correctamente: Gate 1 cosine ≥ 0.998 tanto en INT8 *como* en BF16, pero su atención de strip-pooling usa average pools de forma `[48,1]`, `[1,48]` (stride 48) y `[24,24]`: más grandes de lo que la unidad de pooling TIU del CV181x puede codificar. Codegen imprimió `cvkcv181x tiu avg pool: wrong parameter` cuatro veces (una por pool), aun así informó éxito, y el modelo compilado produjo ruido, detectado solo por Gate 2 (SQNR negativo). El fallo es independiente de la precisión, por lo que ninguna tabla de cuantización mixta INT8/BF16 puede evitarlo.

Lista de comprobación antes de comprometerte con un modelo de profundidad para reCamera:

- ✅ Audita primero la lista de ops ONNX (Netron es tu amigo); prefiere arquitecturas construidas a partir de convoluciones pequeñas
- ⚠️ Evita **average pools** grandes o en forma de franja: `MaxPool` pequeño (por ejemplo, el 5×5 de SPPF) compila bien
- ✅ Pasa siempre `--test_input/--test_reference` para que se ejecuten ambas puertas
- Si Gate 1 pasa pero Gate 2 falla con advertencias de pooling: el modelo necesita cirugía arquitectónica (por ejemplo, descomponer un pool grande en una cadena exacta de pools pequeños: una media de medias sobre grupos iguales es la media global) antes de que pueda dirigirse a este chip

## Solución de problemas

| Síntoma | Causa | Solución |
|---|---|---|
| `Assertion failed ... device_init` en la cámara | la pila de IA de serie mantiene la memoria TPU/ION | `sudo /etc/init.d/S93sscma-supervisor stop`, ejecútalo con `sudo` |
| `model_runner.py: not found` en el contenedor | venv no activado | `source /workspace/tpu_env/bin/activate` |
| la instalación de `tpu_mlir[all]` falla | pin ascendente en paddlepaddle eliminado | instala `tpu_mlir[onnx]` en su lugar |
| aserción de `--test_input` en una imagen válida | extensión `.JPG` en mayúsculas | renómbrala a `.jpg` en minúsculas |
| Gate 2 falla, Gate 1 pasa | incompatibilidad entre codegen/chip (comprueba advertencias `wrong parameter`) | consulta [¿Se ejecutará tu modelo en este chip?](#¿Se-ejecutará-tu-modelo-en-este-chip) |
| La extracción de fotogramas lee menos fotogramas de los esperados | el recuento de fotogramas de metadatos `.ts` es incorrecto | cuenta mediante lectura secuencial |

## Recursos

[FastDepth](https://github.com/dwofk/fast-depth)

[TPU-MLIR](https://github.com/sophgo/tpu-mlir)

[Conjunto de datos DIODE](https://diode-dataset.org/)

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[Ejemplo de reCamera (toolchain de compilación cruzada)](https://github.com/Seeed-Studio/sscma-example-sg200x)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
