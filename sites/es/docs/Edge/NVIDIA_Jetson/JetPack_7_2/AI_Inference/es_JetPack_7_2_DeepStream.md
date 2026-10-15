---
description: Instala y usa NVIDIA DeepStream 9.1 en JetPack 7.2, incluyendo habilidades agenticas, desarrollo de canalizaciones en lenguaje natural, analítica de video, planificación de memoria y guía de migración.
title: DeepStream en JetPack 7.2
keywords:
  - JetPack 7.2
  - DeepStream
  - GStreamer
  - TensorRT
  - analítica de video
image: https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg
slug: /jetpack_7_2_deepstream
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/jetpack_7_2_deepstream/
---

# DeepStream en JetPack 7.2

NVIDIA DeepStream es el framework acelerado de analítica de streaming en el ecosistema Jetson. Combina decodificación de video por hardware, GStreamer, inferencia con TensorRT, seguimiento, metadatos, transporte de mensajes y APIs de aplicación en canalizaciones de IA perimetral multi-stream.

A partir del **31 de julio de 2026**, **DeepStream 9.1** es la versión actual y la primera versión de DeepStream cuya tabla de plataformas Jetson apunta explícitamente a **JetPack 7.2 GA / Jetson Linux 39.2**. Es compatible tanto con **Jetson Orin** como con **Jetson Thor**.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" />
</div>

:::info
La animación anterior se reutiliza de una aplicación DeepStream existente de Seeed para ilustrar una canalización de analítica de múltiples objetos. Vuelve a compilar la aplicación, los motores TensorRT, los plugins y la configuración con DeepStream 9.1 antes de usar el flujo de trabajo en JetPack 7.2.
:::

## DeepStream 9.1 y base de JetPack 7.2

| Componente | Base de DeepStream en JetPack 7.2 |
| --- | --- |
| DeepStream | 9.1 |
| Jetson Linux | 39.2 GA |
| JetPack | 7.2 GA |
| CUDA | 13.2 |
| TensorRT | 10.16.1.7 |
| cuDNN | 9.20.0.46 |
| GStreamer | 1.24.2 |
| OpenCV | 4.8.0 |
| Plataformas Jetson compatibles | Jetson Orin y Jetson Thor |
| Paquete nativo de Jetson | `deepstream-9.1_9.1.0-1_arm64.deb` |

:::warning
Los paquetes Jetson de DeepStream 9.0 se basaban en JetPack 7.1 / Jetson Linux 38.4. Usa DeepStream 9.1 para un objetivo JetPack 7.2. No instales un paquete Jetson más antiguo solo porque la versión principal parezca cercana.
:::

## Por qué DeepStream 9.1 es importante

DeepStream 9.1 es más que una actualización de compatibilidad. La versión orienta el desarrollo de aplicaciones hacia un flujo de trabajo asistido por agentes mientras continúa el cambio de DeepStream 9.x hacia Service Maker, analítica avanzada multicámara, integración de modelos fundacionales y servicios de producción observables.

### Agente de programación en lenguaje natural

El repositorio oficial de DeepStream incluye un **DeepStream Coding Agent**. Un desarrollador puede describir una canalización en lenguaje natural, y el agente puede generar una aplicación DeepStream, ensamblar archivos de configuración y código fuente, compilar el proyecto, lanzarlo en un contenedor y ayudar a diagnosticar errores.

Ejemplo de solicitud:

```text
Create a DeepStream 9.1 application for JetPack 7.2 that reads four RTSP streams,
runs a PeopleNet-compatible detector, tracks people, publishes entry events,
and saves a short clip when a person enters the restricted zone.
```

El Coding Agent cambia cómo se redactan las aplicaciones; no elimina la necesidad de validar la compatibilidad del modelo, la capacidad de streams, el uso de memoria y el comportamiento de la aplicación en el Jetson de destino.

### Habilidades agenticas

DeepStream 9.1 proporciona acceso a **13 habilidades agenticas** a través del repositorio DeepStream. Las habilidades oficiales cubren tareas como:

- compilar y ejecutar aplicaciones DeepStream Service Maker;
- inspeccionar y depurar canalizaciones;
- configurar seguimiento 3D multivista;
- realizar calibración automática multicámara;
- crear configuraciones de inferencia a partir de modelos ONNX o TAO compatibles;
- generar código de aplicación y ejecutar ejemplos en contenedores.

Dos nuevos flujos de trabajo importantes son:

- **habilidad MV3DT**: ayuda a configurar el seguimiento 3D multivista entre cámaras calibradas;
- **habilidad AutoMagicCalib**: asiste en la calibración de cámaras para despliegues de analítica multicámara.

### Inference Builder MCP

El servidor Inference Builder MCP puede inspeccionar un modelo compatible y generar artefactos de inferencia DeepStream. NVIDIA documenta compatibilidad para rutas de modelos ONNX y TAO, incluidos los flujos de trabajo PeopleNet, YOLOv8, YOLOv11, YOLOE y Grounding DINO.

Trata la configuración de inferencia generada como un punto de partida. Confirma el preprocesamiento, los nombres de tensores, dimensiones, archivos de etiquetas, comportamiento del parser, precisión y salida del motor TensorRT antes de usarla en producción.

### Capacidades de DeepStream 9.x disponibles para aplicaciones 9.1

DeepStream 9.1 también mantiene las principales capacidades de DeepStream 9.x:

- APIs Flow y Graph de Service Maker;
- desarrollo de Service Maker en Python;
- MaskTracker para seguimiento consciente de segmentación;
- MediaExtractor para clips orientados a eventos y captura de medios;
- seguimiento 3D multivista MV3DT;
- estimación de pose 3D y ejemplos Sparse4D;
- gestión dinámica de streams mediante APIs REST;
- observabilidad orientada a OpenTelemetry y Prometheus;
- integración de inferencia Triton y TensorRT;
- rutas de aplicación en C/C++, Python, GStreamer y contenedores.

Para nuevas aplicaciones en Python, NVIDIA recomienda `pyservicemaker`; los bindings antiguos de Python `pyds` están obsoletos. Graph Composer también está obsoleto, y el soporte de OpenCV está deshabilitado por defecto a menos que los componentes relevantes se recompilen con OpenCV habilitado.

## Dos tipos de integración con lenguaje natural

Al hablar de DeepStream y lenguaje natural, distingue entre **creación de canalizaciones** y **comprensión de video**.

### 1. Lenguaje natural para crear canalizaciones

El DeepStream Coding Agent y las habilidades traducen la intención de desarrollo en código de aplicación y configuración. Esta ruta es directamente relevante para JetPack 7.2 porque la aplicación generada puede dirigirse a un contenedor o paquete DeepStream 9.1 para Jetson.

Las buenas solicitudes especifican:

- que el objetivo es JetPack 7.2 y DeepStream 9.1;
- Jetson Orin o Jetson Thor;
- tipos de entrada y número de streams;
- el modelo y la precisión;
- requisitos de tracker, salida, eventos y mensajes;
- restricciones de memoria, latencia y consumo.

### 2. Lenguaje natural para comprender video

DeepStream 9.1 documenta un plugin `nvvllmvlm` que conecta streams de video con modelos grandes de lenguaje o de visión-lenguaje. El plugin admite:

- familias de modelos Cosmos Reason 2 y Cosmos Nemotron 12B;
- prompts en lenguaje natural por stream;
- razonamiento de video basado en segmentos de tiempo;
- inferencia asíncrona;
- procesamiento multi-stream;
- respuestas de texto adjuntas a los metadatos de DeepStream.

Las preguntas de ejemplo incluyen:

```text
Is there smoke or fire in this stream?
Is anyone entering the restricted area without protective equipment?
Summarize the activity around the loading bay during the last segment.
```

:::warning Limitación actual de Jetson
La documentación de DeepStream 9.1 para `nvvllmvlm` actualmente lista el plugin solo para **GPUs discretas x86**, con aproximadamente **40 GB de memoria de GPU** requeridos para los ejemplos documentados de Cosmos. No presentes este plugin como una ruta nativa para Jetson Orin o Jetson Thor hasta que NVIDIA documente compatibilidad con Jetson y el modelo objetivo quepa en la memoria unificada disponible.
:::

### Arquitectura híbrida recomendada para JetPack 7.2

JetPack 7.2 aún puede participar en un sistema de video en lenguaje natural separando el procesamiento perimetral en tiempo real del razonamiento con modelos grandes:

```text
Camera / RTSP streams
        |
        v
Jetson + JetPack 7.2 + DeepStream 9.1
decode -> detection -> tracking -> event filtering -> clip selection
        |
        +---- structured metadata ----+
        |                             |
        +---- selected video clips ---+--> x86 DeepStream nvvllmvlm
                                      or remote VLM service
                                                |
                                                v
                               natural-language answer / alert / summary
```

Este diseño mantiene la decodificación continua, el filtrado y la analítica de baja latencia en Jetson mientras envía solo clips o eventos relevantes al servicio VLM más grande. También reduce el ancho de banda y evita cargar un modelo de lenguaje muy grande junto a cada canalización perimetral.

## Opciones de instalación

DeepStream 9.1 proporciona tres rutas prácticas de desarrollo en JetPack 7.2.

### Opción A: Paquete nativo de Jetson

Verifica primero JetPack 7.2:

```bash
cat /etc/nv_tegra_release
```

La salida debe identificar Jetson Linux versión 39.2. Instala los prerrequisitos de DeepStream documentados por NVIDIA:

```bash
sudo apt update
sudo apt install -y \
  libssl3 \
  libssl-dev \
  libcurl4-openssl-dev \
  libgstreamer1.0-0 \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav \
  libgstreamer-plugins-base1.0-dev \
  libgstrtspserver-1.0-0 \
  libjansson4 \
  libyaml-cpp-dev \
  libmosquitto1
```

Descarga `deepstream-9.1_9.1.0-1_arm64.deb` desde los assets oficiales de lanzamiento de NVIDIA DeepStream en GitHub y luego instálalo:

```bash
cd ~/Downloads
sudo apt install ./deepstream-9.1_9.1.0-1_arm64.deb
sudo ldconfig
```

Verifica la instalación:

```bash
deepstream-app --version-all
```

### Opción B: Contenedor de NVIDIA

Los contenedores DeepStream se publican bajo el repositorio unificado `deepstream`. El repositorio antiguo `deepstream-l4t` ya no es la ruta de contenedor actual.

Para un contenedor de ejemplo con interfaz gráfica:

```bash
xhost +local:docker

sudo docker run --rm -it \
  --runtime nvidia \
  --network host \
  -e DISPLAY="$DISPLAY" \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  nvcr.io/nvidia/deepstream:9.1-triton-multiarch
```

Para un despliegue sin cabeza, omite el montaje de la pantalla y usa una configuración que escriba metadatos, archivos, RTSP o mensajes en lugar de abrir una ventana.

### Opción C: Monorepo de DeepStream y flujo de trabajo agentico

Clona el repositorio oficial cuando necesites código fuente de Service Maker, habilidades, ejemplos, integración con el coding-agent o plugins reutilizables:

```bash
git clone https://github.com/NVIDIA/DeepStream.git
cd DeepStream
```

En un entorno de coding-agent compatible, sigue el flujo de trabajo `/install-coding-agent` del repositorio. Mantén el trabajo generado bajo control de versiones y revisa cada comando antes de que modifique el Jetson o inicie un contenedor con privilegios.

## Valida la primera canalización

Después de instalar DeepStream, lista las configuraciones de ejemplo incluidas con el paquete:

```bash
find /opt/nvidia/deepstream/deepstream-9.1/samples/configs \
  -maxdepth 3 -type f -name '*.txt' | sort | head -30
```

Empieza con un solo archivo local o una sola cámara antes de habilitar múltiples streams RTSP. Una validación básica debe confirmar:

1. la decodificación por hardware se realiza correctamente;
2. TensorRT carga o recompila el motor correcto;
3. aparecen los metadatos de inferencia;
4. el rastreador produce identificadores estables;
5. la salida de destino se ejecuta sin acumular latencia;
6. la memoria se mantiene estable durante al menos 30 minutos.

## Reglas de migración de JetPack 7.2

### Reconstruir motores TensorRT

No copies un motor TensorRT serializado de JetPack 6.x en DeepStream 9.1. Vuelve a construirlo con el runtime TensorRT 10.16.1.7 de JetPack 7.2 y la arquitectura de GPU de destino.

### Reconstruir analizadores y plugins personalizados

Vuelve a compilar los analizadores personalizados de `nvdsinfer`, los plugins de GStreamer, las extensiones de CUDA y los componentes de Service Maker con los encabezados de DeepStream 9.1 y las bibliotecas de JetPack 7.2.

### Revisar claves de configuración

Compara cada configuración de aplicación con la guía de migración de DeepStream 9.1. Presta especial atención a:

- el comportamiento de `nvstreammux` y las dimensiones de lote;
- los metadatos de tensores de inferencia y la configuración del analizador;
- las bibliotecas del rastreador y la configuración del rastreador;
- el manejo dinámico de flujos controlado por REST;
- los esquemas de message-converter y message-broker;
- los cambios en las API de Python binding o Service Maker.

### Revalidar rutas de cámara y códec

JetPack 7.2 pasa al kernel de Linux 6.8 y a una pila multimedia más reciente. Revalida las rutas CSI, GMSL, USB, RTSP, del decodificador, del codificador y de zero-copy en lugar de asumir que una canalización de GStreamer de JetPack 6.x permanece sin cambios.

## Diseño de DeepStream eficiente en memoria

Las canalizaciones de DeepStream pueden volverse limitadas por memoria cuando combinan muchos decodificadores, lotes grandes, múltiples motores TensorRT, fotogramas de alta resolución, rastreadores, grabación de clips y un servicio LLM o VLM.

Utiliza la [guía de optimización de memoria de JetPack 7.2](/es/jetpack_7_2_memory_optimization/) junto con estos controles a nivel de canalización:

- comienza con un flujo y aumenta el número de flujos gradualmente;
- ajusta el tamaño de lote de `nvstreammux` a las fuentes activas reales;
- utiliza la precisión de modelo más baja que cumpla los requisitos de precisión;
- evita cargar motores duplicados en procesos de aplicación separados;
- reduce la resolución de entrada antes de la inferencia cuando el caso de uso lo permita;
- utiliza intervalos de inferencia para cargas de trabajo que no requieren inferencia en cada fotograma;
- selecciona un rastreador que se ajuste al presupuesto de precisión y memoria;
- conserva solo clips de eventos en lugar de grabar cada fotograma decodificado;
- envía metadatos o clips filtrados a un VLM remoto en lugar de cargar conjuntamente un VLM muy grande en el dispositivo perimetral.

Mide la memoria en reposo, la memoria de carga de motor, la memoria máxima de lote y la memoria en estado estable con `tegrastats`. No optimices solo para fotogramas por segundo; supervisa la latencia, los fotogramas perdidos, el crecimiento de colas, la temperatura y la potencia de la placa.

DeepStream 9.1 documenta una solución temporal para picos de memoria en Ubuntu 24.04 para aplicaciones que agregan y eliminan flujos repetidamente a través de la API REST:

```bash
export MALLOC_ARENA_MAX=1
export MALLOC_MMAP_MAX_=0
export MALLOC_MMAP_THRESHOLD_=131072
export MALLOC_TRIM_THRESHOLD_=131072
```

Aplica estas variables solo al proceso de aplicación afectado y valida el comportamiento de larga duración antes de convertirlas en parte de un entorno de sistema completo.

## Proyectos sugeridos para JetPack 7.2

### Generador de canalizaciones en lenguaje natural

Utiliza el Coding Agent para generar una aplicación de Service Maker a partir de un requisito escrito, luego valida y versiona el código generado.

### Seguimiento 3D multicámara

Combina las habilidades AutoMagicCalib y MV3DT para un seguimiento multicámara calibrado. Comienza con archivos grabados sincronizados antes de pasar a cámaras en vivo.

### Razonamiento de video de borde a nube

Ejecuta la decodificación, detección, seguimiento y selección de clips en Jetson. Envía eventos seleccionados a un servicio `nvvllmvlm` de DeepStream en x86 para respuestas y resúmenes en lenguaje natural.

### Supervisión industrial consciente de la memoria

Amplía el flujo de trabajo de [Supervisión de visión industrial en JetPack 7.2](/es/industrial_vision_monitoring_on_industrial_bk/) con batching de DeepStream, seguimiento, clips de eventos y metadatos estructurados mientras supervisas la memoria unificada.

## Lista de verificación para producción

- [ ] Jetson informa JetPack 7.2 / Jetson Linux 39.2.
- [ ] DeepStream informa la versión 9.1.
- [ ] Todos los motores TensorRT se reconstruyeron en la versión de destino.
- [ ] Los analizadores y plugins personalizados se compilan con DeepStream 9.1.
- [ ] Se validan las rutas de cámara, RTSP, decodificador, codificador y zero-copy.
- [ ] Se prueban el comportamiento de agregar/eliminar flujos y de reconexión.
- [ ] La memoria se mantiene estable durante la carga máxima de flujos y eventos.
- [ ] Se registran la latencia, FPS, fotogramas perdidos, potencia y térmicas.
- [ ] El razonamiento de video en lenguaje natural se ejecuta en un backend compatible.
- [ ] El código generado por el agente se revisa y se consolida antes del despliegue.

## Referencias oficiales de NVIDIA

- [Notas de la versión de DeepStream 9.1](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Release_notes.html)
- [Introducción a DeepStream](https://developer.nvidia.com/deepstream-getting-started)
- [Instalación de DeepStream 9.1 en Jetson](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Installation.html)
- [Contenedores Docker de DeepStream](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_docker_containers.html)
- [Repositorio de GitHub de DeepStream](https://github.com/NVIDIA/DeepStream)
- [Referencia de habilidades agentic de DeepStream](https://docs.nvidia.com/metropolis/deepstream/9.1/text/AgenticSkillsReference.html)
- [Servidor Inference Builder MCP](https://docs.nvidia.com/metropolis/deepstream/9.1/text/InferenceBuilder_MCP_Server.html)
- [Plugin de inferencia LLM/VLM](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_plugin_gst-nvvllmvlm.html)

## Soporte técnico y debate sobre productos

Gracias por elegir productos de Seeed Studio. Para soporte técnico y debate sobre productos, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>