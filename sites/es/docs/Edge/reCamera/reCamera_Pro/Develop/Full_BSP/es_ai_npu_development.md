---
description: Rutas de desarrollo de aplicaciones para RKNN, ROCKIVA y RKLLM en reCamera Pro.
title: Desarrollo de IA y NPU
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - Desarrollo de aplicaciones
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_npu_development
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_ai_npu_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Desarrollo de IA y NPU

Esta página cubre modelos del lado de la aplicación, bibliotecas de tiempo de ejecución y proyectos de referencia. Para compilaciones en C/C++, usa [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain); no necesitas compilar el sistema completo. Rutas como `project/app/rkai` se refieren a partes internas del paquete de código fuente completo y se proporcionan aquí como referencias al paquete fuente.

RV1126B tiene una NPU dedicada. El SDK contiene tres rutas de desarrollo de IA independientes. Elegir la correcta desde el principio puede ahorrar una cantidad considerable de tiempo.

| Ruta | Ubicación | Caso de uso | Lo que haces |
| --- | --- | --- | --- |
| **RKNN Runtime (API de C)** | `media/rknn-llm-mk/`, `project/app/rkai/rkai/common/include/rknn_api.h` | Ejecutar tu propio modelo de detección / clasificación / segmentación | Convertir ONNX a `.rknn` en un PC y luego ejecutar la inferencia mediante la API de C en la placa |
| **ROCKIVA (biblioteca de algoritmos empaquetada)** | `media/iva/iva/` | Detección lista para usar de rostros, personas, mascotas y otros | Llamar a `rockiva_*_api.h` y usar los modelos `.data` incluidos |
| **RKLLM (modelos de lenguaje / multimodales grandes)** | `media/rknn-llm-mk/rknn-llm/`, `project/app/rkllm-inference/` | Ejecutar un LLM / VLM en la placa | Convertir a `.rkllm` con rkllm-toolkit y ejecutar con `librkllmrt.so` en la placa |

## 1. RKNN Runtime

### Bibliotecas y cabeceras de tiempo de ejecución

Copias disponibles en el SDK:

```text
media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/deploy/3rdparty/librknnrt/
├── Linux/librknn_api/include/rknn_api.h          # C API header
├── Linux/librknn_api/include/rknn_matmul_api.h   # Matrix multiplication API
├── Linux/librknn_api/aarch64/librknnrt.so        # aarch64 runtime
├── Android/librknn_api/arm64-v8a/librknnrt.so
└── Android/librknn_api/armeabi-v7a/librknnrt.so

media/iva/iva/librockiva/rockiva-rv1126b-Linux/lib/librknnrt.so
media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/aiisp_relate/librknnrt_64bit.so
media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/aiisp_relate/librknnrt_32bit.so

project/app/rkai/rkai/common/include/rknn_api.h       # Header used by applications
project/app/rkai/rkai/common/include/rknn_custom_op.h # Custom operators
project/app/rkai/rkai/common/include/rknn_matmul_api.h
```

**En el dispositivo**, la biblioteca de tiempo de ejecución es `/oem/usr/lib/librknnrt.so`, que se añade a `LD_LIBRARY_PATH` mediante `/etc/profile.d/RkEnv.sh`.

> **La coincidencia de versiones es obligatoria:** RKNN-Toolkit2 (herramienta de conversión en PC), `rknn_api.h` y `librknnrt.so` deben usar versiones compatibles. La línea base interna para el firmware de producción de Seeed es **RKNN 2.3.2** (`target_platform='rv1126b'`). La `librknnrt.so` incluida en el SDK puede ser de una versión diferente; **usa `/oem/usr/lib/librknnrt.so` en el dispositivo como la fuente de verdad**. No la reemplaces con una biblioteca descargada por separado o copiada de otra placa.
>
> Antes del despliegue, comprueba la versión en el dispositivo (la salida exacta del comando aún necesita verificación en hardware):
>
> ```bash
> # strings /oem/usr/lib/librknnrt.so | grep -i "librknnrt version"
> # cat /sys/kernel/debug/rknpu/version 2>/dev/null || dmesg | grep -i rknpu
> ```
>
> Añade `/oem/usr/lib` a RUNPATH al enlazar: `-Wl,-rpath,/oem/usr/lib`. **No sobrescribas la biblioteca en el dispositivo.**

### Configuración de núcleos de la NPU

Máscaras de núcleo disponibles en `rknn_api.h`:

| Valor | Significado |
| --- | --- |
| `RKNN_NPU_CORE_AUTO` | Seleccionar automáticamente |
| `RKNN_NPU_CORE_0` | Usar solo el núcleo 0 |
| `RKNN_NPU_CORE_0_1` | Usar los núcleos 0 + 1 (`rkllm-inference` toma `2` como argumento) |
| `RKNN_NPU_CORE_0_1_2` | Usar los tres núcleos (pasa `3`) |

Otras banderas comunes incluyen `RKNN_FLAG_PRIOR_HIGH/MEDIUM/LOW` (prioridad), `RKNN_FLAG_ASYNC_MASK` (ejecución asíncrona), `RKNN_FLAG_COLLECT_PERF_MASK` (recopilación de rendimiento), `RKNN_FLAG_MEM_ALLOC_OUTSIDE` (memoria externa) y `RKNN_FLAG_SHARE_WEIGHT_MEM` (compartir pesos entre modelos).

### Conversión de modelos (en un PC)

El SDK **no incluye** RKNN-Toolkit2. Configura un entorno Python independiente en un host Linux x86_64:

```bash
# An isolated conda or venv environment is recommended
pip install rknn-toolkit2==2.3.2
```

Esquema del script de conversión:

```python
from rknn.api import RKNN

rknn = RKNN(verbose=True)
rknn.config(
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
    target_platform='rv1126b',       # Required; do not leave this unset
)
rknn.load_onnx(model='model.onnx')
rknn.build(do_quantization=False)    # Establish an FP16 baseline first
rknn.export_rknn('model.rknn')
```

Pautas:

- **Establece primero una línea base en FP16**, luego verifica que la inferencia funcione y comprueba la precisión antes de considerar la cuantización a INT8.
- INT8 requiere una lista representativa de imágenes de calibración, una ruta por línea. Mantén el conjunto de calibración separado del conjunto de validación.
- Conserva los metadatos `.rknn.json` con el mismo nombre junto con el modelo exportado, incluyendo diseño de entrada, normalización, orden de color, política de redimensionado, semántica de salida y postprocesado. Esto es necesario para el despliegue y la depuración.
- **No adivines** los parámetros de preprocesado del modelo. Copia mean/std, tamaño de entrada, NCHW/NHWC y RGB/BGR del script de entrenamiento o de exportación.
- Una conversión exitosa solo significa que se produjo un `.rknn` compatible con RV1126B; **no demuestra la precisión del modelo ni la corrección en tiempo de ejecución**. Verifica esos aspectos por separado.

### Inferencia en el dispositivo con la API de C

```c
#include "rknn_api.h"

rknn_context ctx = 0;
rknn_init(&ctx, model_data, model_size, 0, NULL);

rknn_input_output_num io_num;
rknn_query(ctx, RKNN_QUERY_IN_OUT_NUM, &io_num, sizeof(io_num));

rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1);

rknn_input in[1] = {0};
in[0].type = RKNN_TENSOR_UINT8;
in[0].fmt  = RKNN_TENSOR_NHWC;
in[0].size = width * height * 3;
in[0].buf  = rgb_buffer;
rknn_inputs_set(ctx, 1, in);

rknn_run(ctx, NULL);

rknn_output out[1] = {0};
out[0].want_float = 1;
rknn_outputs_get(ctx, 1, out, NULL);
/* ... post-processing ... */
rknn_outputs_release(ctx, 1, out);
rknn_destroy(ctx);
```

Para una aplicación con la API de C, comienza con el [ejemplo de RKNN en `recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Configurar manualmente el sysroot, las rutas de cabeceras y las banderas de enlace puede introducir bibliotecas que no coincidan con el firmware; primero usa el ejemplo para establecer una compilación conocida como correcta.

**No uses `rknn-toolkit-lite2` (Python) para escribir una aplicación de C/C++ del lado del dispositivo.** Está pensado para validación rápida; las aplicaciones de producción deben usar la API de C.

### Modelos de detección existentes

`project/app/recamera_ipc/model/rknn/` contiene modelos y metadatos que pueden usarse como referencia:

| Archivo | Descripción |
| --- | --- |
| `yolox_s.rknn` + `yolox_s.json` | Detección de objetos YOLOX-S |
| `nanodet-plus-m_416.rknn` + `nanodet-plus-m_416.json` | Detección NanoDet-Plus-M 416×416 |

Los archivos `.json` contienen metadatos relacionados (definiciones de entrada/salida, umbrales y parámetros de postprocesado). Crea metadatos equivalentes para tu propio modelo si quieres que se cargue en el framework de inferencia `recamera_ipc`. El código relacionado está en `project/app/recamera_ipc/common/rc_infer/`, `rc_model/` y `rockiva/`.

### Proyectos de referencia

| Ruta | Contenido |
| --- | --- |
| `project/app/rkai/rkai/samples/rkai_samples_vlm.cpp` | Ejemplo de VLM (comprensión imagen-texto) |
| `project/app/rkai/rkai/samples/rkai_samples_vlm_vision.cpp` | Ejemplo de VLM solo de visión |
| `project/app/rkai/rkai/samples/rkai_samples_llm.cpp` | Ejemplo de LLM |
| `project/app/rkai/rkai/rkai_VLM/`, `rkai_LLM/` | Bibliotecas wrapper de RKAI (CMake, con `include/` y `src/`) |
| `project/app/rkai/rkai/app_conf/{config,inputs}` | Configuración de tiempo de ejecución y muestras de entrada |
| `project/app/rkai/rkai/RkLunch.sh` | Script de inicio |
| `project/app/testdemo/yoloworld_demo/` | Demo YOLO-World de extremo a extremo (con `3rdparty` y `resources`) |
| `media/rknn-llm-mk/rknn-llm/examples/rkllm_api_demo/` | Ejemplo mínimo de la API de RKLLM |
| `media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/` | Ejemplo multimodal completo (incluye `deploy/3rdparty`) |

Documentación: `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md` (hay disponible una versión en inglés).

## 2. ROCKIVA

Ubicado en `media/iva/iva/`, incluyendo `CMakeLists.txt`, `librockiva/` y `models/`.

Paquete RV1126B:

```text
media/iva/iva/librockiva/rockiva-rv1126b-Linux/
├── include/
│   ├── rockiva_common.h       # Common types and initialization
│   ├── rockiva_one_api.h      # Unified API (most commonly used)
│   ├── rockiva_det_api.h      # Detection
│   ├── rockiva_face_api.h     # Face processing
│   ├── rockiva_ba_api.h       # Behavior analysis
│   └── rockiva_image.h        # Image structures
├── lib/librockiva.so
├── lib/librknnrt.so           # Includes another copy of the RKNN runtime
└── lib64/
```

Datos de modelos:

```text
media/iva/iva/models/rockiva_data_rv1126b/
├── iva_object_detection_pfp.data        # Person / face / pet detection
├── iva_object_detection_v3_pfp.data
└── iva_object_detection_v3_cls8.data    # 8-class detection
```

Enlaza con `-lrockiva -lrknnrt` y pasa el directorio de modelos `.data` a la API de inicialización en tiempo de ejecución.

El principal beneficio de ROCKIVA es que **elimina la necesidad de entrenar y postprocesar tu propio detector**: devuelve directamente cajas delimitadoras de personas / rostros / mascotas. Es adecuado para mejorar la detección de movimiento, alertas de personas, detección de caídas y funciones similares. Un proyecto `fall_detect` en este SDK también puede servir como referencia.

Documentación: `docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf`. (**No hay categoría `npu_iva` en `docs/en`; solo se incluye el manual en chino.**)

`recamera_ipc` ya contiene código de integración de ROCKIVA en `project/app/recamera_ipc/common/rockiva/`.

## 3. RKLLM (Modelos de lenguaje grandes en el dispositivo)

### Contenido del SDK

`media/rknn-llm-mk/rknn-llm/`:

| Directorio / archivo | Contenido |
| --- | --- |
| `rkllm-runtime/Linux/` | Tiempo de ejecución en el dispositivo (`librkllmrt.so`) |
| `rkllm-toolkit/` | Herramientas de conversión de modelos en PC (`packages/`, `examples/`) |
| `examples/rkllm_api_demo/` | Ejemplo de LLM solo de texto |
| `examples/multimodal_model_demo/` | Ejemplo multimodal imagen-texto (incluye `deploy/3rdparty`) |
| `examples/rkllm_server_demo/` | Ejemplo de despliegue en servidor |
| `doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf` / `_EN_` | Manuales oficiales del SDK RKLLM 1.2.3 |
| `rknpu-driver/rknpu_driver_0.9.8_20241009.tar.bz2` | Paquete del controlador del kernel de la NPU |
| `benchmark.md`, `CHANGELOG.md`, `README.md` | Benchmarks de rendimiento y registro de cambios |

El contenedor Makefile es `media/rknn-llm-mk/Makefile`; se compila como parte de `./build.sh media`.

### Aplicación: `rkllm-inference`

`project/app/rkllm-inference/` (habilitado con `RK_APP_RKLLM_INFERENCE=y`) produce dos binarios:

- `rkllm_inference_demo`: inferencia interactiva imagen-texto
- `rkllm_benchmark_demo`: benchmark de inferencia de una sola ejecución

```bash
make -C project/app/rkllm-inference
# Outputs: project/app/rkllm-inference/out/bin/{rkllm_inference_demo,rkllm_benchmark_demo}
```

Ejecuta con:

```bash
rkllm_inference_demo \
  <image_path> <encoder_model_path> <llm_model_path> \
  <max_new_tokens> <max_context_len> <rknn_core_num> \
  [img_start] [img_end] [img_content]
```

| Argumento | Significado |
| --- | --- |
| `image_path` | Imagen de entrada |
| `encoder_model_path` | Codificador de visión `.rknn` |
| `llm_model_path` | Modelo de lenguaje `.rkllm` |
| `max_new_tokens` | Número máximo de tokens generados |
| `max_context_len` | Longitud del contexto |
| `rknn_core_num` | `2` → `RKNN_NPU_CORE_0_1`; `3` → `RKNN_NPU_CORE_0_1_2`; cualquier otro valor → `AUTO` |
| `img_start/img_end/img_content` | Tokens especiales de visión; por defecto usa los tokens de estilo Qwen-VL `vision_start`, `vision_end` e `image_pad` |

La entrada interactiva admite `0` / `1` para prompts de ejemplo integrados, texto personalizado, preguntas imagen-texto con el prefijo `<image>`, `clear` para limpiar la caché KV y `exit` para salir.

La salida del benchmark incluye carga del modelo, preprocesamiento, codificación de visión, TTFT, decodificación, tiempo de extremo a extremo y rendimiento. `prefill_time`, `decode_time` y `memory_usage` provienen de `RKLLMPerfStat` de RKLLM. Después de la codificación de visión, **descarga explícitamente el codificador antes de cargar el LLM** para reducir la presión de memoria en esta plataforma limitada.

Dependencias: `librknnrt.so`, `librkllmrt.so` y OpenCV de la plataforma de destino. Reutiliza `rknn_api.h` de `project/app/rkai/rkai/common/include/rknn_api.h`.

> Si tu VLM usa diferentes tokens de marcador de posición de visión, pasa los valores correctos de `img_start` / `img_end` / `img_content` en tiempo de ejecución. De lo contrario, la salida puede ser incorrecta.

### Notas sobre memoria y viabilidad

RV1126B tiene mucha menos memoria que una plataforma típica de despliegue de LLM. Antes de ejecutar un LLM / VLM:

- Usa `rkllm_benchmark_demo` para comprobar `memory_usage` y asegurarte de que el modelo no desencadene OOM.
- La configuración de la placa establece `RK_BOOTARGS_CMA_SIZE="8M"`, que es una región CMA pequeña; los modelos grandes consumen principalmente memoria de sistema normal y memoria de NPU.
- Normalmente se requiere cuantización INT4 / INT8; es probable que los modelos FP16 no quepan.

## 4. AI-ISP

`RK_AIISP_MODEL=NONE` significa que AI-ISP **no está habilitado** en esta configuración de placa, aunque la ruta de código está presente:

- `media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/` (incluye `librknnrt_32bit.so` / `librknnrt_64bit.so`)
- Ejemplos: `media/samples/example/demo/sample_demo_aiisp.c`, `sample_demo_dual_aiisp.c`
- Pruebas de estrés: `sample_demo_aiisp_stresstest.c`, `sample_demo_dual_aiisp_stresstest.c`
- Los archivos IQ relacionados con AINR están en `iqfiles/isp35/ainr/`

Para habilitar AI-ISP, establece `RK_AIISP_MODEL` en un modelo específico en la configuración de la placa y proporciona los recursos correspondientes.

## 5. Pruebas de rendimiento y estrés

| Herramienta | Ruta |
| --- | --- |
| Prueba de estrés de NPU | `project/app/recamera_utils/stress_test/npu_stress.py` |
| Prueba de estrés de CPU | `project/app/recamera_utils/stress_test/cpu_stress.py` |
| Prueba de estrés de eMMC / SD | `project/app/recamera_utils/stress_test/emmc_sd_stress.py` |
| Prueba EMC | `project/app/recamera_utils/stress_test/emc_test.py` |
| Benchmark de RKLLM | `rkllm_benchmark_demo` |

Antes de ejecutar una carga de trabajo de IA sostenida, evalúa el comportamiento térmico y de energía. Períodos largos de carga completa de la NPU pueden activar la limitación térmica; consulta `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf`.

## Flujo de trabajo de desarrollo recomendado

1. En un PC, convierte ONNX a `.rknn` para `target_platform='rv1126b'` con RKNN-Toolkit2 2.3.2; comienza con FP16.
2. Escribe una aplicación mínima con `rknn_api.h` y verifica en la placa que el modelo se carga y devuelve salida. Comienza con una imagen estática, sin la cámara.
3. Comprueba la precisión comparando las salidas con ONNX en el mismo conjunto de entradas.
4. Añade el flujo de vídeo: obtén frames NV12 de rockit → convierte a RGB / cambia el tamaño con RGA → pásalos a la NPU. Consulta [Desarrollo de vídeo e ISP](/es/recamera_pro_video_isp_development/).
5. Para detección general de personas / rostros, evalúa ROCKIVA antes de implementar tú mismo la misma funcionalidad.
6. Considera la cuantización INT8 y la optimización multinúcleo (`RKNN_NPU_CORE_0_1`) solo después de que el flujo funcione.

## Soporte técnico y discusión de producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
