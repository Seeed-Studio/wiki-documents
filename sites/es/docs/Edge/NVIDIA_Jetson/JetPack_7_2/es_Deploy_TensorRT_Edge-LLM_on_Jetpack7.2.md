---
description: Implementa NVIDIA TensorRT Edge-LLM en JetPack 7.2 exportando un modelo en un host x86 con GPU, compilando el runtime en Jetson Orin o Jetson Thor, generando un motor TensorRT y validando la inferencia en C++.
title: Implementar TensorRT Edge-LLM en JetPack 7.2
keywords:
  - Jetson
  - TensorRT
  - LLM
  - TensorRT Edge-LLM
  - JetPack 7.2
  - Jetson Orin
  - Jetson Thor
  - ONNX
image: https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png
slug: /deploy_tensorrt_edge_llm_on_jetpack7.2
last_update:
  date: 07/31/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/es/deploy_tensorrt_edge_llm_on_jetpack7.2/
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# Implementar TensorRT Edge-LLM en JetPack 7.2

## Descripción general

[TensorRT Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM) es la pila de inferencia de alto rendimiento de NVIDIA para implementar modelos de lenguaje grandes, modelos visión-lenguaje, modelos multimodales y determinadas cargas de trabajo visión-lenguaje-acción en plataformas embebidas de NVIDIA. Proporciona una canalización de exportación de checkpoints, un generador de motores TensorRT, un runtime en C++ optimizado, ejemplos y un servidor experimental compatible con OpenAI.

JetPack 7.2 es la ruta oficialmente soportada de TensorRT Edge-LLM para Jetson Orin. Jetson Thor también es compatible en JetPack 7.x. Esta guía fija **TensorRT Edge-LLM v0.9.1**, la última versión publicada cuando esta página se actualizó el **31 de julio de 2026**.

:::note
Las capturas de pantalla de esta guía reutilizan las imágenes existentes del flujo de trabajo de TensorRT Edge-LLM del tutorial de JetPack 6.2. El flujo de trabajo general de exportación en el host y motor en el destino es el mismo, pero los nombres de comandos, flags de compilación, números de versión y salida de consola pueden diferir en la v0.9.1.
:::

## Matriz de plataformas

| Destino | Versión de software | CMake target | Valor del toolkit CUDA | Precisión de runtime |
| --- | --- | --- | --- | --- |
| Jetson Orin | JetPack 7.2 | `jetson-orin` | `13.2` | FP16, INT8, INT4 |
| Jetson Thor | JetPack 7.2 | `jetson-thor` | `13.2` | Consulta la matriz de modelos compatibles para cada modelo y precisión. |

:::warning
TensorRT Edge-LLM v0.9.1 no admite las precisiones de runtime FP8, MXFP8, FP4 ni NVFP4 en Jetson Orin. Utiliza checkpoints FP16, INT8 o INT4 para Orin. No copies un motor TensorRT compilado en JetPack 6.2 dentro de JetPack 7.2; vuelve a compilar el motor en el sistema de destino con JetPack 7.2.
:::

La implementación tiene dos etapas:

1. **Exportar en un host x86 con GPU**: instala las herramientas de Python y exporta un checkpoint de Hugging Face a ONNX.
2. **Compilar y ejecutar en Jetson**: compila el runtime en C++, genera un motor TensorRT desde ONNX y ejecuta la inferencia.

## Parte 1: Exportar el modelo en un host x86 con GPU

### Requisitos del host

- Linux x86-64 con Ubuntu 22.04 o 24.04
- GPU NVIDIA Ampere o más reciente con capacidad de cómputo 8.0+
- CUDA 12.x o 13.x
- Python 3.10+
- RAM, VRAM y espacio en disco suficientes para el checkpoint seleccionado

La exportación del modelo puede requerir varias veces el tamaño del checkpoint en la RAM y VRAM del host. Comienza con el ejemplo pequeño Qwen3-0.6B FP16 antes de pasar a un modelo más grande o cuantizado.

### Clonar e instalar la v0.9.1

```bash
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive

python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install .
```

Instala las dependencias opcionales de las herramientas cuando necesites cuantización de checkpoints, fusión de LoRA, reducción de vocabulario o utilidades para tokenizadores:

```bash
pip install ".[tools]"
```

Verifica la interfaz de línea de comandos actual:

```bash
tensorrt-edgellm-export --help
tensorrt-edgellm-quantize --help
```

![Verificación de comandos de TensorRT Edge-LLM](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/1.png)

### Exportar Qwen3-0.6B a ONNX

El siguiente ejemplo exporta directamente el checkpoint FP16. FP16 es compatible con Jetson Orin y mantiene sencillo el primer flujo de trabajo de validación.

```bash
export EDGE_LLM_PATH=$HOME/TensorRT-Edge-LLM
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B
export PYTHONPATH=$EDGE_LLM_PATH:$PYTHONPATH

mkdir -p "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

tensorrt-edgellm-export \
  Qwen/Qwen3-0.6B \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx"
```

![Flujo de trabajo de exportación del modelo](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/2.png)

![Procesamiento del checkpoint](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/3.png)

![Progreso de exportación a ONNX](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/4.png)

![Artefactos del modelo exportado](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/5.png)

El grafo LLM exportado debería estar disponible en:

```text
$WORKSPACE_DIR/Qwen3-0.6B/onnx/llm
```

### Opcional: usar un checkpoint INT4 en Jetson Orin

Para un modelo más grande en un dispositivo Orin, utiliza un checkpoint listado como INT4 AWQ o INT4 GPTQ en la matriz oficial de modelos compatibles. Los checkpoints pre-cuantizados se pueden exportar directamente. Los pesos INT4 externalizados reducen la presión de memoria durante la compilación del motor en dispositivos Orin con memoria limitada.

```bash
tensorrt-edgellm-export \
  /path/to/supported-int4-checkpoint \
  "$WORKSPACE_DIR/<model-name>/onnx" \
  --externalize-weights int4_ffn
```

Para un checkpoint MoE INT4, añade las opciones de pesos externalizados específicas de la familia de modelos documentadas por TensorRT Edge-LLM. Verifica siempre el checkpoint y la precisión exactos en la [matriz de modelos compatibles](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html).

### Transferir el directorio ONNX a Jetson

Crea el directorio de destino y copia el modelo exportado:

```bash
ssh <jetson-user>@<jetson-ip> \
  "mkdir -p ~/tensorrt-edgellm-workspace/$MODEL_NAME"

scp -r \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx" \
  <jetson-user>@<jetson-ip>:~/tensorrt-edgellm-workspace/$MODEL_NAME/
```

## Parte 2: Compilar TensorRT Edge-LLM en JetPack 7.2

El siguiente flujo de trabajo principal está dirigido a Jetson Orin. A continuación se proporciona una configuración para Jetson Thor.

### Verificar JetPack 7.2

En el dispositivo Jetson, comprueba la versión de Jetson Linux, el compilador CUDA y los paquetes de TensorRT:

```bash
cat /etc/nv_tegra_release
nvcc --version
dpkg -l | grep -E 'tensorrt|libnvinfer'
```

Para la matriz de compilación v0.9.1 de JetPack 7.2, `nvcc --version` debe coincidir con la cadena de herramientas CUDA 13.2 esperada por la configuración de compilación.

### Instalar dependencias de compilación

```bash
sudo apt update
sudo apt install -y cmake build-essential git
```

### Clonar la versión correspondiente en Jetson

Utiliza la misma versión de TensorRT Edge-LLM para la exportación en el host y el runtime en el destino:

```bash
cd ~
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive
```

### Configurar y compilar para Jetson Orin

```bash
cd ~/TensorRT-Edge-LLM
mkdir -p build
cd build

cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-orin \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL

cmake --build . -j"$(nproc)"
```

Los kernels CuTe DSL están habilitados porque las rutas actuales de Qwen3.5 y otros modelos compatibles los requieren.

Verifica que los ejemplos se hayan compilado:

```bash
./examples/llm/llm_build --help
./examples/llm/llm_inference --help
```

### Variante de compilación para Jetson Thor

En Jetson Thor con JetPack 7.2, utiliza los mismos pasos de compilación pero cambia el destino embebido:

```bash
cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-thor \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL
```

## Compilar el motor TensorRT

En el dispositivo Jetson, define el espacio de trabajo y compila un motor a partir del grafo ONNX exportado:

```bash
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B

cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_build \
  --onnxDir "$WORKSPACE_DIR/$MODEL_NAME/onnx/llm" \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --maxBatchSize 1 \
  --maxInputLen 1024 \
  --maxKVCacheCapacity 4096
```

![Compilación del motor TensorRT](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

![Compilación del motor completada](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png)

El tiempo de compilación del motor y el pico de memoria dependen del modelo, la precisión, la longitud máxima de entrada, la capacidad de la caché KV y la configuración de memoria del Jetson.

## Ejecutar inferencia en C++

Crea un archivo de solicitud:

```bash
cat > "$WORKSPACE_DIR/input.json" <<'EOF'
{
  "batch_size": 1,
  "temperature": 1.0,
  "top_p": 1.0,
  "top_k": 50,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "What is the capital of the United States?"
        }
      ]
    }
  ]
}
EOF
```

Ejecuta la inferencia:

```bash
cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_inference \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --inputFile "$WORKSPACE_DIR/input.json" \
  --outputFile "$WORKSPACE_DIR/output.json"
```

Visualiza el resultado:

```bash
cat "$WORKSPACE_DIR/output.json"
```

La respuesta debería contener texto generado similar a:

```json
{
  "responses": [
    {
      "output_text": "The capital of the United States is Washington, D.C.",
      "request_idx": 0,
      "batch_idx": 0
    }
  ]
}
```

![Inferencia con TensorRT Edge-LLM](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/8.png)

![Salida de la inferencia](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/9.png)

## Medir el rendimiento del motor

Utiliza `llm_bench` para mediciones sintéticas de prefill y decodificación:

```bash
./build/examples/llm/llm_bench \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --mode prefill
```

Registra los siguientes valores al comparar JetPack 6.2 y JetPack 7.2:

- Pico de memoria del sistema durante la compilación del motor
- Memoria tras la carga del motor
- Tiempo hasta el primer token
- Rendimiento de procesamiento del prompt
- Rendimiento de decodificación
- Frecuencia de la GPU, modo de potencia, temperatura y potencia total de la placa

## Diferencias con el flujo de trabajo de JetPack 6.2

| Elemento | Ruta compatible con JetPack 6.2 | Ruta compatible con JetPack 7.2 |
| --- | --- | --- |
| Estado de Jetson Orin | Compatible | Oficialmente soportado y probado |
| Valor de compilación CUDA | `12.6` | `13.2` |
| CMake target | `jetson-orin` | `jetson-orin` |
| Precisión de runtime en Orin | FP16, INT8, INT4 | FP16, INT8, INT4 |
| CuTe DSL | Dependiente de la versión | Habilitar con `-DENABLE_CUTE_DSL=ALL` para las rutas de modelos actuales |
| Reutilización del motor | Volver a compilar para JetPack 6.2 | Volver a compilar para JetPack 7.2 |

## Solución de problemas

### CMake no puede encontrar TensorRT

Confirma que JetPack instaló los paquetes de desarrollo de TensorRT y que las bibliotecas están bajo `/usr`:

```bash
dpkg -l | grep -E 'tensorrt|libnvinfer'
ls /usr/include/NvInfer.h
```

### La versión de CUDA no coincide

No cambies `CUDA_CTK_VERSION` solo para omitir las comprobaciones de configuración. Confirma que el dispositivo está ejecutando la imagen JetPack 7.2 prevista y que `nvcc` se resuelve en el kit de herramientas CUDA de JetPack.

### La compilación del motor se interrumpe o se queda sin memoria

- Comienza con Qwen3-0.6B FP16.
- Usa un checkpoint INT4 compatible para modelos más grandes en Jetson Orin.
- Usa pesos INT4 externalizados cuando se admitan.
- Reduce `maxInputLen` y `maxKVCacheCapacity` para la primera ejecución de validación.
- Detén contenedores no relacionados y servicios que consuman mucha memoria antes de compilar el motor.

### El modelo o la precisión se rechaza

Consulta la [matriz de modelos compatibles de TensorRT Edge-LLM](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html). La compatibilidad de una familia de modelos no significa que todos los checkpoints, precisiones, codificadores visuales o combinaciones de decodificadores especulativos sean compatibles en todas las plataformas Jetson.

## Próximos pasos

- Añade un flujo de trabajo LLM INT4 para un modelo Jetson Orin más grande.
- Añade inferencia VLM con un checkpoint Qwen-VL, InternVL, Phi multimodal o Gemma compatible.
- Evalúa la API experimental de alto nivel de Python y el servidor compatible con OpenAI.
- Usa [Prototipado rápido en Jetson con NVIDIA Skills](/es/rapid_prototyping_on_jetson_with_nvidia_skills/) para automatizar la inspección del dispositivo, la auditoría de memoria y la recopilación de benchmarks.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
