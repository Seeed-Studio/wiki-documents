---
description: Convierte modelos ONNX al formato RKNN para reCamera Pro y crea un modelo cuantizado INT8 con un conjunto de datos de calibración representativo.
title: Convertir y Cuantizar Modelos
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RKNN-Toolkit2
  - RV1126B
  - model quantization
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_model_conversion
sku: 10003420
sidebar_position: 2
last_update:
  date: 08/28/2026
  author: yylin
createdAt: '2026-08-28'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/es/recamera_pro_rknn_model_conversion/
---

# Convertir y Cuantizar Modelos para reCamera Pro con RKNN-Toolkit2

## Introducción

reCamera Pro utiliza el Rockchip RV1126B. Para ejecutar un modelo de red neuronal personalizado en su NPU, exporta el modelo a ONNX y compílalo a un modelo RKNN para **RV1126B** en un PC Linux x86_64 o en un entorno WSL.

Esta guía crea un modelo base FP16 y un modelo cuantizado INT8. La conversión se realiza en el PC host; solo se necesita una reCamera Pro conectada para la validación final y el despliegue.

:::note Antes de comenzar
Esta guía utiliza **RKNN-Toolkit2 2.3.2**, Python 3.10 y `target_platform='rv1126b'`. Mantén la versión del Toolkit alineada con el RKNN Runtime suministrado por el firmware de reCamera Pro. No utilices instrucciones destinadas a un producto reCamera diferente o a otro SoC de Rockchip.
:::

---

## 1. Requisitos

La configuración utilizada en los ejemplos de esta guía es la siguiente:

- Un PC Linux x86_64 o un entorno WSL 2. No conviertas modelos en la propia reCamera Pro.
- Python 3.10.
- [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2** para x86_64 y sus dependencias incluidas.
- Un modelo ONNX con forma de entrada, preprocesamiento y semántica de salida conocidos.
- Para cuantización INT8: imágenes de calibración representativas. No se requieren etiquetas.

La versión de Python se puede cambiar. RKNN-Toolkit2 actualmente admite Python de la 3.6 a la 3.12. Instala la rueda que coincida con tu versión de Python; los dígitos después de `cp` en el nombre del archivo de la rueda identifican su versión de CPython.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/Model_Conversion/image.png" alt="Ejemplo de versión de rueda de Python para RKNN-Toolkit2" /></div>

Antes de la conversión, registra el origen y la licencia del modelo, el comando de exportación, el checksum, el layout de entrada, el orden de color, la política de cambio de tamaño, la normalización y el posprocesamiento. Este es el contrato del modelo que tu aplicación de reCamera Pro debe reproducir.

:::tip Flujo de trabajo recomendado
Genera siempre primero el modelo FP16. Es la referencia para comprobar el grafo y el preprocesamiento antes de investigar la precisión o el rendimiento de INT8.
:::

---

## 2. Preparar RKNN-Toolkit2

Descarga la versión **2.3.2** desde el [repositorio oficial de Rockchip](https://github.com/airockchip/rknn-toolkit2). En el paquete de la versión, elige la rueda y los requisitos bajo `rknn-toolkit2/packages/x86_64` que coincidan con CPython 3.10.

Crea un entorno aislado e instala la rueda. Sustituye `PATH_TO_TOOLKIT` y el nombre del archivo de la rueda por las rutas de tu paquete descargado.

```bash
python3.10 -m venv rknn-2.3.2
source rknn-2.3.2/bin/activate

python -m pip install --upgrade pip
python -m pip install -r PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/requirements_cp310*.txt
python -m pip install PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/rknn_toolkit2-2.3.2-*-cp310-*.whl

python -c "from rknn.api import RKNN; print('RKNN-Toolkit2 import succeeded')"
```

:::caution Utiliza el toolkit de conversión del host
RKNN-Toolkit2 es el toolkit de conversión del lado del host. No utilices `rknn-toolkit-lite2` para la conversión; está destinado a ejecutar modelos en sistemas objetivo compatibles. Un `.rknn` para RV1126B debe construirse con `target_platform='rv1126b'`.
:::

---

## 3. Confirmar el Contrato de Entrada de ONNX

Prefiere una entrada ONNX estática con batch 1. Inspecciona el modelo con [Netron](https://netron.app/), ONNX checker, `model-inspect` o su programa de exportación. Confirma estos valores a partir de la implementación original del modelo; no los infieras a partir de un nombre de archivo.

| Elemento | Ejemplo | Por qué es importante |
| --- | --- | --- |
| Nombre y forma de entrada | `images`, `[1, 3, 640, 640]` | Requerido por `load_onnx()` |
| Layout | NCHW o NHWC | Debe coincidir con el grafo exportado |
| Orden de canales | RGB o BGR | Un intercambio de canales puede reducir gravemente la precisión |
| Rango de entrada y normalización | `[0,255]` a `[0,1]` | Debe aplicarse exactamente una vez |
| Política de cambio de tamaño | stretch, crop o letterbox | Debe ser idéntica en tiempo de ejecución |
| Salidas y posprocesamiento | puntuaciones, cajas, máscaras, etc. | Necesario para interpretar las predicciones |

Por ejemplo, si la aplicación proporciona píxeles RGB uint8 en `[0,255]` y el modelo espera floats en `[0,1]`, utiliza `mean_values=[[0, 0, 0]]` y `std_values=[[255, 255, 255]]`. RKNN aplica `(input - mean) / std`. Si la normalización está dentro del grafo ONNX, utiliza valores identidad (`mean=[0,0,0]`, `std=[1,1,1]`) para que no se aplique dos veces.

Utiliza `model-inspect` para inspeccionar las entradas y salidas del modelo:

```bash
pip install model-inspect-tool

model-inspect ./yolov8n.onnx
```

A continuación se muestra un ejemplo de salida:

```text
Format:  onnx
Path:    /home/yylin/rknn_test/rknn_model_zoo/examples/yolov8/model/yolov8n.onnx
Backend: onnx
Dynamic: false

Inputs:
  name=images, shape=[1, 3, 640, 640], dtype=float

Outputs:
  name=318, shape=[1, 64, 80, 80], dtype=float
  name=onnx::ReduceSum_326, shape=[1, 80, 80, 80], dtype=float
  name=331, shape=[1, 1, 80, 80], dtype=float
  name=338, shape=[1, 64, 40, 40], dtype=float
  name=onnx::ReduceSum_346, shape=[1, 80, 40, 40], dtype=float
  name=350, shape=[1, 1, 40, 40], dtype=float
  name=357, shape=[1, 64, 20, 20], dtype=float
  name=onnx::ReduceSum_365, shape=[1, 80, 20, 20], dtype=float
  name=369, shape=[1, 1, 20, 20], dtype=float
```

---

## 4. Exportar Directamente un Modelo Ultralytics YOLO a RKNN

Para modelos Ultralytics YOLO, Ultralytics puede exportar directamente a RKNN. Crea el modelo ONNX intermedio e invoca RKNN-Toolkit2 por ti, por lo que no necesitas escribir un script de conversión ONNX por separado.

Instala Ultralytics en el entorno de RKNN-Toolkit2 preparado anteriormente:

```bash
python -m pip install ultralytics
```

El siguiente ejemplo exporta un modelo RKNN FP16 para reCamera Pro. Sustituye `yolo11n.pt` por tu checkpoint entrenado, por ejemplo `runs/detect/train/weights/best.pt`.

```python
from ultralytics import YOLO

model = YOLO('yolo11n.pt')
model.export(format='rknn', name='rv1126b', imgsz=640)
```

Comando CLI equivalente:

```bash
yolo export model=yolo11n.pt format=rknn name=rv1126b imgsz=640
```

La exportación normalmente crea un directorio como `yolo11n_rknn_model/`, que contiene un archivo RKNN con un nombre similar a `yolo11n-rv1126b.rknn`. Aquí, `name='rv1126b'` selecciona el objetivo Rockchip; no es un nombre de directorio de salida.

Para crear un modelo INT8, pasa `quantize=8` y la definición YAML de un conjunto de datos YOLO representativo. Ultralytics utiliza las rutas de imagen de ese conjunto de datos para generar la lista de calibración requerida por RKNN-Toolkit2.

```python
from ultralytics import YOLO

model = YOLO('runs/detect/train/weights/best.pt')
model.export(
    format='rknn',
    name='rv1126b',
    imgsz=640,
    quantize=8,
    data='path/to/data.yaml',
)
```

```bash
yolo export model=runs/detect/train/weights/best.pt format=rknn name=rv1126b imgsz=640 quantize=8 data=path/to/data.yaml
```

:::caution Se requieren datos de calibración para INT8
`data` debe apuntar a un YAML de conjunto de datos YOLO válido cuyas rutas de imagen sean accesibles desde el host. Utiliza imágenes representativas del escenario de despliegue de reCamera Pro y conserva imágenes separadas reservadas para la evaluación de precisión. Ultralytics no convierte una exportación exitosa en una garantía de precisión de la tarea o rendimiento del dispositivo.
:::

:::tip Exportación directa frente al flujo de trabajo manual
Utiliza esta ruta para una exportación rápida de Ultralytics YOLO. Utiliza el flujo de trabajo ONNX que aparece a continuación cuando tu modelo no es un modelo de Ultralytics, cuando necesitas control explícito sobre los ajustes de Toolkit2 o cuando necesitas diagnosticar el grafo ONNX exportado.
:::

---

## 5. Crear una Referencia RKNN FP16

Crea `convert_onnx_to_rknn.py`. Cambia la ruta del modelo, el nombre de entrada, la forma y la normalización para tu propio modelo.

```python
from rknn.api import RKNN

ONNX_MODEL = 'model.onnx'
RKNN_MODEL = 'model-fp16-rv1126b.rknn'

rknn = RKNN(verbose=True)

# Example only: uint8 RGB [0,255] becomes model-domain [0,1].
rknn.config(
    target_platform='rv1126b',
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
)

ret = rknn.load_onnx(
    model=ONNX_MODEL,
    inputs=['images'],                     # Replace with your ONNX input name.
    input_size_list=[[1, 3, 640, 640]],    # Replace with your static shape.
)
if ret != 0:
    raise RuntimeError('Failed to load ONNX model')

# No calibration dataset: build a non-quantized FP16 baseline.
ret = rknn.build(do_quantization=False)
if ret != 0:
    raise RuntimeError('Failed to build RKNN model')

if rknn.export_rknn(RKNN_MODEL) != 0:
    raise RuntimeError('Failed to export RKNN model')
rknn.release()
print(f'Created {RKNN_MODEL}')
```

```bash
python convert_onnx_to_rknn.py
sha256sum model-fp16-rv1126b.rknn
```

Si el toolkit informa de un operador no compatible, una entrada dinámica o un grafo no válido, corrige o vuelve a exportar el modelo ONNX. No elimines operadores solo para completar la compilación.

---

## 6. Preparar un Conjunto de Datos de Calibración INT8

Las imágenes de calibración INT8 deben parecerse a las entradas de despliegue. Como punto de partida práctico, utiliza unas 100--500 imágenes y cubre la iluminación esperada, fondos, tamaños de objetos, puntos de vista, desenfoque por movimiento, ruido de la cámara y casos de fallo importantes. Mantén las imágenes de calibración separadas de las imágenes de evaluación de precisión. Si el conjunto de calibración es demasiado pequeño, el modelo INT8 puede producir resultados que difieran del modelo ONNX original.

La lista tiene una ruta de imagen por línea; las entradas PNG, JPEG, BMP y NPY se utilizan habitualmente.

```bash
find calibration/images -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  | sort > calibration/dataset.txt

wc -l calibration/dataset.txt
head -n 3 calibration/dataset.txt
```

:::caution Mantén el preprocesamiento coherente
Los datos de calibración deben utilizar el mismo orden de canales, la misma política de cambio de tamaño y la misma convención numérica de entrada que la inferencia. Imágenes no representativas, errores RGB/BGR o un preprocesamiento no coincidente pueden causar una gran caída de precisión en INT8.
:::

---

## 7. Construir el Modelo RKNN INT8

Copia el script FP16 a `convert_onnx_to_rknn_int8.py`, luego sustituye el nombre del modelo y el bloque de compilación por:

```python
RKNN_MODEL = 'model-int8-rv1126b.rknn'

ret = rknn.build(
    do_quantization=True,
    dataset='calibration/dataset.txt',
)
if ret != 0:
    raise RuntimeError('Failed to build INT8 RKNN model')
```

```bash
python convert_onnx_to_rknn_int8.py
sha256sum model-int8-rv1126b.rknn
```

La configuración INT8 predeterminada suele ser una buena primera prueba. Solo experimenta con algoritmos de cuantización, cuantización híbrida o compresión de pesos después de medir su efecto en tu tarea.

---

## 8. Validar antes del despliegue

Un `build()` y `export_rknn()` satisfactorios confirman que RKNN-Toolkit2 compiló el grafo para RV1126B. **No** demuestran por sí solos la precisión de la tarea, el postprocesamiento correcto ni la latencia en el dispositivo.

1. Ejecuta el modelo ONNX original y la configuración RKNN FP16 en muestras reservadas; compara los resultados de la tarea decodificados, no solo los tensores en bruto.
2. Compara los resultados FP16 e INT8 en esas mismas muestras e investiga cualquier regresión inaceptable.
3. En reCamera Pro, carga el `.rknn` exportado con el Runtime de RKNN que coincida con el firmware. Consulta los atributos de los tensores y verifica el tipo de entrada, el diseño, el tamaño, el preprocesamiento y el postprocesamiento.
4. Mide la latencia tras el calentamiento y el comportamiento sostenido en el dispositivo.

:::note La validación en el host tiene límites
El simulador RKNN del host y la NPU RV1126B son entornos de ejecución diferentes. La comparación en el host verifica la conversión y el preprocesamiento; la aceptación final requiere probar el `.rknn` exportado en reCamera Pro.
:::

---

## 9. Solución de problemas

| Síntoma | Verificar primero |
| --- | --- |
| `load_onnx()` falla | Valida ONNX, el opset del exportador, el nombre de entrada, la forma estática y los archivos de datos externos. |
| Operador no compatible | Vuelve a exportar o usa una operación compatible semánticamente equivalente. |
| La compilación INT8 falla | Verifica todas las rutas del conjunto de datos, el número de entradas, el dtype/forma y la legibilidad de las imágenes. |
| La precisión INT8 es deficiente | Comprueba RGB/BGR, la política de cambio de tamaño, mean/std, la cobertura de calibración y el postprocesamiento. |
| Funciona en el host pero falla en el dispositivo | Confirma `rv1126b`, el checksum del modelo, la alineación Toolkit/Runtime 2.3.2 y los atributos de los tensores. |
| La inferencia en el dispositivo es lenta | Mide después del calentamiento; revisa el preprocesamiento y el postprocesamiento, así como la ejecución en la NPU. |

## 10. Próximos pasos

Conserva la fuente ONNX, el script de conversión, el checksum de la lista de calibración, el checksum del `.rknn` y el contrato de preprocesamiento/postprocesamiento junto con el modelo exportado. A continuación, integra el modelo con la API de C de RKNN Runtime de reCamera Pro y pruébalo en el dispositivo.
