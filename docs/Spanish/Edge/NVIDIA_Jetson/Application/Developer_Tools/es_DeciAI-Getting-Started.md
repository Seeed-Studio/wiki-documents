---
description: Optimización de modelos de IA con Deci en dispositivos NVIDIA Jetson
title: Primeros pasos con Deci
tags:
  - Optomización de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/DeciAI-Getting-Started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# Primeros pasos con Deci en dispositivos NVIDIA® Jetson

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg" alt="pir" width={1000} height="auto" /></p>

La plataforma Deci te permite gestionar, optimizar, implementar y servir modelos en tu entorno de producción con facilidad. Puedes seguir utilizando marcos DL populares, como TensorFlow, PyTorch, Keras y ONNX. Todo lo que necesitas es la plataforma web Deci o el cliente Deci Python para ejecutarlo desde tu código.

Deci provee:

- Aceleración del rendimiento: acelera el rendimiento de inferencia de modelos entre 2 y 10 veces en cualquier hardware, sin comprometer la precisión, mediante el uso de la tecnología de construcción de arquitectura neuronal automatizada (AutoNAC) de Deci.
- Escalado en cualquier hardware: reduce hasta un 80 % de los costos de computación en la nube y de la lista de materiales para permitir la inferencia a escala, independientemente de si es desde una nube pública o privada, desde tu propio servidor o desde cualquier computadora, dispositivo móvil o de edge computing.
- Evaluación comparativa de inferencia: compara tus modelos en cualquier entorno de hardware objetivo y tamaño de lote para encontrar el rendimiento, la latencia, el uso de memoria y los costos de nube óptimos de tu modelo.
- Empaquetado de modelos: implementación rápida y sencilla en producción: implementa sin problemas modelos entrenados desde Deci Lab en cualquier entorno de producción, incluidas todas las dependencias de la biblioteca ambiental en un único contenedor encapsulado.
- Model Serving: el motor de inferencia en tiempo de ejecución de aprendizaje profundo patentado de Deci se puede implementar en tu propia máquina (en cualquier hardware: local, edge computing o en la nube). Deci proporciona las siguientes opciones para implementar su modelo optimizado de Deci como un servidor de tiempo de ejecución eficiente en silos:

  - Runtime Inference Container (RTiC) de Deci, que es un motor de tiempo de ejecución de aprendizaje automático en contenedores.
  - INFERY de Deci (de la palabra inferencia) te permite ejecutar un modelo desde un paquete de Python.

## Hardware soportado

Deci es soportado por el siguiente Hardware Jetson:

- Kits de Seeed:

  - reComputer J1010 impulsada por Jetson Nano
  - reComputer J1020 impulsada por Jetson Nano
  - reComputer J2011 impulsada por Jetson Xavier NX 8GB
  - reComputer J2012 impulsada por Jetson Xavier NX 16GB

- Carrier Boards de Seeed:

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

Si posees alguno de los hardware anteriores, puedes continuar trabajando con deci en tu hardware.

## Prerequisitos de Hardware

Prepara el siguiente Hardware:

- Cualquiera de los dispositivos Jetson mencionados anteriormente con JetPack 4.6
- Monitor, teclado, mouse (opcional)

## Crea una cuenta Deci

- **Paso 1.** Visita [esta página](https://console.deci.ai/sign-up) para crear una cuenta Deci

- **Paso 2.** Ingresa los datos solicitados y termina de crear tu cuenta

Ahora te introducirán a Deci Lab Platform

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/2.png" alt="pir" width={1000} height="auto" /></p>

## Deci Lab model zoo con modelo pre optimizados

De forma predeterminada, Deci Lab incluye el modelo **ResNet50 Baseline** que ya está cargado en la interfaz con un par de optimizaciones para diferente hardware. Eso no es todo. Deci ofrece una colección masiva de modelos base con las correspondientes versiones optimizadas de los modelos para diferentes hardware en Deci Model Zoo. Haz click en **Model Zoo** y **List** para ver todos los modelos disponibles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/3.png" alt="pir" width={1000} height="auto" /></p>

Como ejemplo, buscaremos **YOLOX** en la barra de búsqueda para ver todos los modelos de YOLOX.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/4.png" alt="pir" width={1000} height="auto" /></p>

Como puedes ver, existen modelos base como **YOLOX_Nano**, **YOLOX_Small** y modelos optimizados como **YOLOX_Nano Jetson Nano Optimized**, **YOLOX_Nano Jetson Xavier Optimized**

## Optimiza tu propio modelo

Como se explicó anteriormente, puedes utilizar modelos preoptimizados directamente sin necesidad de optimizarlos manualmente. Sin embargo, si deseas utilizar tu propio modelo, puedes cargarlo en Deci Lab y optimizarlo según tu hardware de destino.

**Paso 1:** En Deci Lab, haz click en **+ New Model**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/5.png" alt="pir" width={1000} height="auto" /></p>

**Paso 2:** Elige la tarea apropiada de acuerdo a tu modelo. En este caso elegiremos **Object Detection** (Detección de objetos)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/6.png" alt="pir" width={500} height="auto" /></p>

**Paso 3:** Ingresa un nombre para el modelo y haz click en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/7.png" alt="pir" width={500} height="auto" /></p>

**Paso 4:** Elije un marco modelo (ONNX en este caso), carga un modelo según el marco elegido y haz click en **Nexct**. Aquí hemos subido [modelo yolov6n.onnx](https://github.com/meituan/YOLOv6/releases/tag/0.1.0).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/8.png" alt="pir" width={500} height="auto" /></p>

**Paso 5:** Selecciona **Primary hardware**, **Inference batch size**, **Quantization level** y haz click en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/9.png" alt="pir" width={500} height="auto" /></p>

**Paso 6:** Agrega objetivos y limitaciones de rendimiento. Esto será principalmente útil si usas **AutoNAC**, que es una función incluida en la **versión premium**. AutoNAC puede aumentar drásticamente el rendimiento de la inferencia de modelos al tiempo que reduce el tamaño del modelo y mucho más. Si no estás utilizando AutoNAC, debes ingresar un valor para **Throughput** (rendimiento) y aquí lo hemos configurado como 40 (puede ser un valor aleatorio). Finalmente haz click en **Start** para comenzar el proceso de optimización.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/10.png" alt="pir" width={500} height="auto" /></p>

Ahora el proceso de optimización mostrará su progreso de la siguiente manera y finalizará después de unos minutos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/11.png" alt="pir" width={1000} height="auto" /></p>

## Comparación del rendimiento de los modelos

Podemos usar la plataforma Deci Lab para comparar el rendimiento del modelo entre los modelos base y los modelos optimizados, o implementar el modelo en el hardware de destino y ejecutar pruebas comparativas. Aunque es más fácil visualizar todo en Deci Lab, se recomienda implementar el modelo y ejecutar pruebas comparativas en el dispositivo de destino para asegurarse de que las métricas de rendimiento sean precisas para el hardware específico.

### Visualizar en Deci Lab

Aquí usaremos el modelo base **YOLOX_Nano** y los modelos **YOLOX_Nano Jetson Xavier NX Optimized** para comparar.

**Paso 1:** Navega hasta Model Zoo y haz click en **clone** junto al modelo base **YOLOX_Nano** y los modelos **YOLOX_Nano Jetson Xavier NX Optimized**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/12.png" alt="pir" width={1000} height="auto" /></p>

**Paso 2:** En Deci Lab, haz click en el modelo **YOLOX_Nano** en **MODEL_VERSIONS** para ir a la sección **model insights**.

**Paso 3:** Selecciona **Jetson Xavier** en **Target Hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/13.png" alt="pir" width={1000} height="auto" /></p>

Ahora verás todas las métricas de rendimiento para el modelo **YOLOX_Nano**, si se va a implementar en un dispositivo Jetson Xavier NX.

**Paso 4:** Vuelve a la página de inicio de Deci Lab, haz click en el modelo **YOLOX_Nano Jetson Xavier NX Optimized** en **MODEL_VERSIONS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/14.png" alt="pir" width={1000} height="auto" /></p>

Ahora verás todas las métricas de rendimiento para el modelo **YOLOX_Nano Jetson Xavier NX Optimized**, si se va a implementar en un dispositivo Jetson Xavier NX.

#### Comparasión de rendimiento

Podemos comparar los resultados que obtuvimos anteriormente para el hardware de destino Jetson Xavier usando la siguiente tabla

|                      | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimizado|
|----------------------|------------|---------------------------------------|
| Exactitud            | 25.8       | 25.8                                  |
| Rendimiento          | 62.8fps    | 175.8fps                              |
| Latencia             | 15.9361ms  | 5.6897ms                              |
| GPU memory footprint | 1.05MB     | 1.01MB                                |
| Tamaño del modelo    | 3.66MB     | 9.74MB                                |

Como puedes ver, el principal aumento se ve en el rendimiento, donde el modelo optimizado es casi **2,7 veces más rápido** que el modelo base.

### Implementar en dispositivo Jetson y comparar

Ahora implementaremos los dos modelos anteriores en un dispositivo Jetson Xavier NX y realizaremos pruebas comparativas para asegurarnos de obtener resultados de rendimiento precisos.

#### Instalar INFERY

- **Paso 1.** Abre una terminal en el dispositivo Jetson y actualiza la lista de paquetes

```sh
sudo apt update 
```

- **Paso 2.** Instala "pip package manager"

```sh
sudo apt install python3-pip
```

- **Paso 3.** Actualiza pip a la última versión

```sh
python3 -m pip install -U pip
```

- **Paso 4.** Instala INFERY para Jetson

```sh
sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl
```

#### Carga el modelo

- **Paso 1.** En Deci Lab, coloca el mouse sobre el nombre del modelo y haz click en **Deploy** en la ventana emergente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/15.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2.** Haz click en **Download model** para descargar el modelo a la PC y luego copia este archivo de modelo al directorio de inicio del dispositivo Jetson.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/16.png" alt="pir" width={500} height="auto" /></p>

- **Paso 3.** Abre una terminal en el dispositivo Jetson y ejecuta

```sh
lakshanthad@nano:~$ python3
Python 3.6.9 (default, Dec  8 2021, 21:08:43)
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import infery, numpy as np
```

- **Paso 4.** Copia el segundo comando en **LOAD MODEL** en la ventana Deci lab **Deploy Model** en la terminal del dispositivo Jetson (asegúrate de que "Jetson" esté seleccionado para el hardware de destino)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/DeciAI/17.png" alt="pir" width={500} height="auto" /></p>

```
ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')
```

**Nota:** Asegúrate de ajustar el parámetro **model_path** colocando el directorio donde copiaste el modelo antes. Si copiaste el archivo del modelo en el directorio de inicio, puedes mantener la ruta como está.

Verás el siguiente output si el modelo fue cargado exitosamente

```sh
infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU
infery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.
```

#### Medir el rendimiento de un modelo

Para medir el rendimiento de un modelo usando INFERY, ejecuta el comando **model.benchmark** desde tu aplicación

```sh
model.benchmark(batch_size=1)
```

El siguiente será el resultado del modelo **YOLOX_Nano**

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

Donde:

- 'batch_size' – Especifica el tamaño del lote que se utilizó como punto de referencia.
- 'batch_inf_time' – Especifica la latencia de todo el lote.
- 'sample_inf_time' – Especifica la latencia de una única muestra dentro del lote.equivalente a batch_inf_time dividido entre el batch_size.
- 'memory' – Especifica la huella de memoria que utiliza el modelo durante la inferencia.
- 'throughput' – Especifica el número de solicitudes que se procesan (pasos directos) por segundo.
- 'batch_inf_time_variance' – Especifica la variación de los tiempos de inferencia por lotes durante la prueba comparativa. Si la variación es alta, recomendamos aumentar el número pasado a "repeticiones" para que los puntos de referencia sean más confiables.

Repite los mismos pasos para **YOLOX_Nano Jetson Xavier NX Optimized model**, realiza la prueba comparativa y verás los resultados de la siguiente manera:

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

#### Comparasión de rendimiento

Podemos comparar principalmente el rendimiento de estos resultados.

|            | YOLOX_Nano | YOLOX_Nano Jetson Xavier NX Optimizado|
|------------|------------|---------------------------------------|
| Rendimiento| 73.36fps   | 189.25fps                             |

Se puede ver que el modelo optimizado es casi **2,57 veces más rápido** que el modelo base.

## Recursos

- **[Página web]** [Deci AI Documentation](https://docs.deci.ai/docs)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

