---
description: Optimizar modelo de IA con Deci en dispositivos NVIDIA Jetson
title: Primeros pasos con Deci
tags:
  - AI model optimize
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# Primeros pasos con Deci en dispositivos NVIDIA® Jetson

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

La plataforma Deci te permite gestionar, optimizar, desplegar y servir modelos en tu entorno de producción con facilidad. Puedes continuar usando frameworks de DL populares, como TensorFlow, PyTorch, Keras y ONNX. Todo lo que necesitas es la plataforma web de Deci o el cliente Python de Deci para ejecutarlo desde tu código.

Deci proporciona:

- Aceleración de rendimiento – Acelera el rendimiento de inferencia del modelo de 2x a 10x en cualquier hardware, sin comprometer la precisión, utilizando la tecnología de Construcción Automática de Arquitectura Neural (AutoNAC) de Deci.
- Escalado en cualquier hardware – Reduce hasta el 80% de los costos de computación en la nube y BOM para habilitar inferencia a escala, independientemente de si es desde una nube privada o pública, desde tu propio servidor o desde cualquier computadora, dispositivo edge o móvil.
- Benchmarking de inferencia – Evalúa el rendimiento de tus modelos en cualquier entorno de hardware objetivo y tamaño de lote para encontrar el Throughput, Latencia, Uso de memoria y Costos de nube óptimos de tu modelo.
- Empaquetado de modelos – Despliega rápida y fácilmente en producción – Despliega sin problemas modelos entrenados desde Deci Lab a cualquier entorno de producción, incluyendo todas las dependencias de librerías ambientales en un solo contenedor encapsulado.
- Servicio de modelos – El motor de inferencia de tiempo de ejecución de aprendizaje profundo propietario de Deci puede desplegarse en tu propia máquina (en cualquier hardware – on-prem / edge / nube). Deci proporciona las siguientes opciones para desplegar tu Modelo Optimizado de Deci como un servidor de tiempo de ejecución eficiente aislado:

  - Contenedor de Inferencia de Tiempo de Ejecución (RTiC) de Deci, que es un motor de tiempo de ejecución de aprendizaje automático en contenedor.
  - INFERY de Deci (de la palabra inferencia) que te permite ejecutar un modelo desde un paquete Python.

## Hardware soportado

Deci es soportado por el siguiente hardware relacionado con Jetson:

- Kits de Seeed:

  - reComputer J1010 construido con Jetson Nano
  - reComputer J1020 construido con Jetson Nano
  - reComputer J2011 construido con Jetson Xavier NX 8GB
  - reComputer J2012 construido con Jetson Xavier NX 16GB

- Placas portadoras de Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- Kits de desarrollo oficiales de NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- SoMs oficiales de NVIDIA:
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

Si posees cualquiera del hardware anterior, puedes proceder a trabajar con deci en tu hardware.

## Prerrequisitos de hardware

Prepara el siguiente hardware:

- Cualquiera de los dispositivos Jetson anteriores ejecutando JetPack 4.6
- Monitor, teclado, ratón (opcional)

## Registrarse para una cuenta de Deci

- **Paso 1.** Visita [esta página](https://console.deci.ai/sign-up) para registrarte para una cuenta de Deci

- **Paso 2.** Ingresa los detalles requeridos y finaliza el proceso de registro

Ahora se te presentará la plataforma Deci Lab

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Zoo de modelos de Deci Lab con modelos pre-optimizados

Por defecto, Deci Lab incluye el modelo **ResNet50 Baseline** que ya está cargado en la interfaz con un par de optimizaciones para diferentes hardware. Eso no es todo. Deci ofrece una colección masiva de modelos base con las versiones optimizadas correspondientes de los modelos para diferentes hardware en Deci Model Zoo. Haz clic en **Model Zoo** y **List** para ver todos los modelos disponibles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

Como ejemplo, buscaremos **YOLOX** en la barra de búsqueda para ver todos los modelos YOLOX.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

Como puedes ver, hay modelos base como **YOLOX_Nano**, **YOLOX_Small** y modelos optimizados como **YOLOX_Nano Jetson Nano Optimized**, **YOLOX_Nano Jetson Xavier Optimized**

## Optimizar tu propio modelo

Como se explicó anteriormente, puedes usar modelos pre-optimizados directamente sin necesidad de optimizarlos manualmente. Sin embargo, si quieres usar tu propio modelo, puedes subir tu modelo a Deci Lab y optimizarlo según tu hardware objetivo

**Paso 1:** En Deci Lab, haz clic en **+ New Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**Paso 2:** Elige una tarea apropiada según tu modelo. Aquí hemos elegido **Object Detection**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**Paso 3:** Ingresa un nombre para el modelo y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**Paso 4:** Elige un framework de modelo (ONNX en este caso), sube un modelo según el framework elegido y haz clic en **Next**. Aquí hemos subido el [modelo yolov6n.onnx](https://github.com/meituan/YOLOv6/releases/tag/0.1.0).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**Paso 5:** Selecciona **Primary hardware**, **Inference batch size**, **Quantization level** y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**Paso 6:** Agrega objetivos y restricciones de rendimiento. Esto será principalmente útil si usas **AutoNAC** que es una característica incluida en la **versión premium**. AutoNAC puede aumentar dramáticamente el rendimiento de inferencia del modelo mientras disminuye el tamaño del modelo y mucho más. Si no estás usando AutoNAC, necesitas llenar un valor para **Throughput** y aquí lo hemos establecido como 40 (puede ser un valor aleatorio). Finalmente haz clic en **start** para comenzar el proceso de optimización.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

Ahora el proceso de optimización mostrará su progreso como sigue y estará listo después de unos minutos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## Comparar el rendimiento del modelo

Podemos usar la plataforma Deci Lab para comparar el rendimiento del modelo entre los modelos base y los modelos optimizados, o bien desplegar el modelo en el hardware objetivo y ejecutar benchmarks. Aunque es más fácil visualizar todo en Deci Lab, se recomienda desplegar el modelo y ejecutar benchmark en el dispositivo objetivo para asegurar que las métricas de rendimiento sean precisas para el hardware específico.

### Visualizar en Deci Lab

Aquí usaremos los modelos base **YOLOX_Nano** y **YOLOX_Nano Jetson Xavier NX Optimized** para comparar.

**Paso 1:** Navega a Model Zoo y haz clic en **clone** junto a los modelos base **YOLOX_Nano** y **YOLOX_Nano Jetson Xavier NX Optimized**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**Paso 2:** En Deci Lab, haz clic en el modelo **YOLOX_Nano** bajo **MODEL_VERSIONS** para ir a la sección **model insights**.

**Paso 3:** Selecciona **Jetson Xavier** como **Target Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

Ahora verás todas las métricas de rendimiento para el modelo **YOLOX_Nano**, si fuera a ser desplegado en un dispositivo Jetson Xavier NX.

**Paso 4:** Regresa a la página principal de Deci Lab, haz clic en el modelo **YOLOX_Nano Jetson Xavier NX Optimized** bajo **MODEL_VERSIONS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

Ahora verás todas las métricas de rendimiento para el modelo **YOLOX_Nano Jetson Xavier NX Optimized**, si fuera a ser desplegado en un dispositivo Jetson Xavier NX.

#### Comparación de rendimiento

Podemos comparar los resultados que obtuvimos previamente para el hardware objetivo Jetson Xavier usando la tabla a continuación

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimized |
|----------------------|------------|---------------------------------------|
| Accuracy             | 25.8       | 25.8                                  |
| Throughput           | 62.8fps    | 175.8fps                              |
| Latency              | 15.9361ms  | 5.6897ms                              |
| GPU memory footprint | 1.05MB     | 1.01MB                                |
| Model size           | 3.66MB     | 9.74MB                                |

Como puedes ver, el principal aumento de rendimiento es el throughput donde el modelo optimizado es casi **2.7 veces más rápido** que el modelo base.

### Desplegar en dispositivo Jetson y hacer benchmark

Ahora desplegaremos los dos modelos anteriores en un dispositivo Jetson Xavier NX y realizaremos benchmark para asegurar que obtenemos resultados de rendimiento precisos.

#### Instalar INFERY

- **Paso 1.** Abre una ventana de terminal en el dispositivo Jetson y actualiza la lista de paquetes

```sh
sudo apt update 
```

- **Paso 2.** Instalar el gestor de paquetes pip

```sh
sudo apt install python3-pip
```

- **Paso 3.** Actualizar pip a la última versión

```sh
python3 -m pip install -U pip
```

- **Paso 4.** Instalar INFERY para Jetson

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### Cargar el modelo

- **Paso 1.** En Deci Lab, pasa el cursor sobre el nombre del modelo y haz clic en **Deploy** desde la ventana emergente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Haz clic en **Download model** para descargar el modelo al PC y luego copia este archivo del modelo al directorio home del dispositivo Jetson

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **Paso 3.** Abre una ventana de terminal en el dispositivo Jetson y ejecuta

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **Paso 4.** Copia el segundo comando bajo **LOAD MODEL** en la ventana **Deploy Model** del laboratorio Deci al terminal del dispositivo Jetson (Asegúrate de que Jetson esté seleccionado como hardware objetivo)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**Nota:** Asegúrate de ajustar el parámetro **model_path** según donde hayas copiado el modelo anteriormente. Si copiaste el archivo del modelo al directorio home, puedes mantener la ruta tal como está.

Verás la siguiente salida, si el modelo se carga exitosamente

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### Medir el rendimiento de un modelo

Para medir el rendimiento de un modelo usando INFERY, ejecuta el comando **model.benchmark** desde tu aplicación

```sh
model.benchmark(batch_size=1)
```

La siguiente será la salida para el modelo **YOLOX_Nano**

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "13.63 ms",
    "batch_inf_time_variance": "1.12 ms",
    "memory": "3537.89 mb",
    "pre_inference_memory_used": "3532.94 mb",
    "post_inference_memory_used": "3537.89 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "73.36 fps",
    "sample_inf_time": "13.63 ms",
    "include_io": true,
    "framework_type": "onnx",
    "framework_version": "1.8.0",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:23:57__07-06-2022",
    "ctime": 1657112037,
    "h_to_d_mean": null,
    "d_to_h_mean": null,
    "h_to_d_variance": null,
    "d_to_h_variance": null
}>
```

donde:

- 'batch_size' – Especifica el tamaño de lote que se utilizó para el benchmark.
- 'batch_inf_time' – Especifica la latencia para todo el lote.
- 'sample_inf_time' – Especifica la latencia para una sola muestra dentro del lote. equivalente a batch_inf_time dividido por el batch_size.
- 'memory' – Especifica la huella de memoria que el modelo utiliza durante la inferencia.
- 'throughput' – Especifica el número de solicitudes que se procesan (pases hacia adelante) por segundo.
- 'batch_inf_time_variance' – Especifica la varianza de los tiempos de inferencia del lote durante el benchmark. Si la varianza es alta, recomendamos aumentar el número pasado a 'repetitions' para hacer los benchmarks más confiables.

Repite los mismos pasos para el **modelo YOLOX_Nano Jetson Xavier NX Optimizado**, realiza el benchmark y verás los resultados como sigue:

```sh
base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...
<ModelBenchmarks: {
    "batch_size": 1,
    "batch_inf_time": "5.28 ms",
    "batch_inf_time_variance": "0.05 ms",
    "memory": "2555.62 mb",
    "pre_inference_memory_used": "2559.38 mb",
    "post_inference_memory_used": "2555.62 mb",
    "total_memory_size": "7765.41 mb",
    "throughput": "189.25 fps",
    "sample_inf_time": "5.28 ms",
    "include_io": true,
    "framework_type": "trt",
    "framework_version": "8.0.1.6",
    "inference_hardware": "GPU",
    "infery_version": "3.2.2",
    "date": "18:30:05__07-06-2022",
    "ctime": 1657112405,
    "h_to_d_mean": "0.43 ms",
    "d_to_h_mean": "0.20 ms",
    "h_to_d_variance": "0.00 ms",
    "d_to_h_variance": "0.00 ms"
}>
```

#### Comparación de rendimiento

Podemos comparar principalmente el rendimiento para estos resultados

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimizado |
|------------|------------|----------------------------------------|
| Rendimiento | 73.36fps   | 189.25fps                              |

Se puede ver que el modelo optimizado es casi **2.57 veces más rápido** que el modelo base.

## Recursos

- **[Página Web]** [Documentación de Deci AI](https://docs.deci.ai/docs)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

