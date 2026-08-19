---
description: Crea una demo de vista envolvente con ojo de pez de cuatro cámaras en Jetson. Une en tiempo real una vista cenital (BEV) para el posicionamiento del chasis, usa YOLO para ayudar al agarre con brazo robótico y utiliza un VLM para ayudar a comprender la escena.
title: Crea una demo de vista envolvente con ojo de pez de cuatro cámaras en Jetson
keywords:
  - Jetson
  - Visión por computadora
  - vista envolvente
  - ojo de pez
  - BEV
  - vista cenital
  - YOLO
  - VLM
  - brazo robótico
  - reComputer
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562
last_update:
  date: 08/19/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/es/jetson_fisheye_surround_view_demo/
---

## Introducción

Este proyecto muestra un **sistema de vista envolvente con ojo de pez de cuatro cámaras** en NVIDIA Jetson. Cuatro cámaras ojo de pez alrededor del chasis se calibran, corrigen la distorsión y se unen en una **vista cenital (BEV) en tiempo real**.

Luego, la BEV se utiliza como una capa de percepción compartida:

- El **análisis de ocupación** proporciona indicaciones de espacio libre cercano y obstáculos para el **movimiento del chasis**
- **YOLO-World** detecta y localiza objetivos para **asistir el agarre con brazo robótico**
- **Un VLM** genera una breve descripción en inglés para **ayudarte a comprender la escena**

Esta demo está pensada para asistir el **agarre con brazo robótico** y proporcionar **soporte de posicionamiento para el movimiento del chasis**.

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div>

En la demo, las cuatro cámaras miran hacia **delante, atrás, izquierda y derecha**. Después de la calibración y el cosido en GPU, la BEV cenital sigue esta disposición:

- **Parte superior de la imagen** = parte delantera del vehículo
- **Centro de la imagen** = carrocería del vehículo
- Los obstáculos cercanos y las direcciones libres son visibles alrededor del chasis
- Objetivos como botellas, cajas o sillas pueden localizarse en el marco del vehículo para asistir el agarre
- El VLM puede resumir la vista actual en un breve texto en inglés para la comprensión de la escena

## Qué hace cada módulo

| Módulo | Qué hace | Para qué sirve |
| --- | --- | --- |
| Cosido envolvente | Construye una BEV cenital en tiempo real a partir de cuatro cámaras ojo de pez | Vista envolvente compartida alrededor del chasis |
| Análisis de ocupación | Estima el espacio libre cercano y los obstáculos en el plano del suelo | Asistir el movimiento y posicionamiento del chasis |
| YOLO-World | Detecta objetivos de vocabulario abierto e informa la posición 2D en el marco del vehículo | Asistir el agarre con brazo robótico |
| Subtítulo VLM | Genera una breve descripción en inglés de la BEV actual | Ayudar a un operador o agente a comprender la escena |

:::note
YOLO sirve para **dónde está el objetivo**. El VLM sirve para **cómo se ve la escena**. La ocupación es una pista 2D del suelo, no un mapa de LiDAR, y el subtítulo del VLM no es una fuente de coordenadas.
:::

## Características clave

- **Cosido envolvente con ojo de pez de cuatro cámaras en tiempo real**
- **Remapeo, deformación y mezcla en GPU** con CUDA OpenCV
- **Calibración basada en web** para intrínsecos, extrínsecos y uniones
- **Cuadrícula de ocupación** para asistencia al movimiento del chasis
- **Detección de vocabulario abierto con YOLO-World** para asistencia de agarre
- **Subtitulación de escena con VLM** para comprensión de la escena
- Compatibilidad con flujos de trabajo para **Jetson Thor** y **AGX Orin / Jetson genérico**

## Qué es esta demo

Esta demo convierte cuatro flujos ojo de pez en una imagen BEV y luego ejecuta percepción sobre esa vista compartida.

En comparación con una canalización de una sola cámara, el flujo de trabajo de vista envolvente te ofrece:

- **Conciencia del entorno de 360 grados** alrededor del chasis
- **Visualización cenital** que es más fácil de usar para navegación y asistencia de agarre
- **Una única BEV compartida** para ocupación, localización de objetivos y subtitulación de escena
- **Un flujo de calibración** que puede repetirse en hardware real

La canalización es:

1. Capturar imágenes de cuatro cámaras ojo de pez
2. Ejecutar la calibración intrínseca de ojo de pez
3. Estimar la alineación extrínseca y las homografías
4. Corregir la distorsión y deformar cada imagen de cámara sobre una BEV en el plano del suelo
5. Mezclar las cuatro vistas en una imagen envolvente
6. Ejecutar ocupación, asistencia de agarre con YOLO y comprensión de escena con VLM sobre la BEV cosida

## Requisitos previos

### Hardware

- Un dispositivo Jetson como **Seeed reComputer Thor J601** o **Jetson AGX Orin**
- **Cuatro cámaras USB ojo de pez**
- Una pantalla o una sesión de escritorio remoto
- Acceso a red si abres la página de calibración desde otro ordenador

Opcional:

- Un chasis móvil, si quieres usar la ocupación para asistencia de movimiento
- Un brazo robótico, si quieres usar las posiciones objetivo de YOLO para asistencia de agarre

### Software

- JetPack compatible con tu placa Jetson de destino
- OpenCV con CUDA para cosido en tiempo real
- Entorno de Python para la interfaz web de calibración
- Dependencias del modelo YOLO-World y VLM opcional

## Instalación y configuración

### Paso 1. Clonar el repositorio

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### Paso 2. Compilar OpenCV con CUDA

Antes de ejecutar la demo de vista envolvente en vivo, asegúrate de que OpenCV con CUDA esté disponible.

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

Si la configuración es correcta, el recuento de dispositivos CUDA debería ser `1`.

### Paso 3. Instalar dependencias de la calibración web

La interfaz web de calibración depende de `aiortc` y paquetes relacionados de Python.

```bash
./scripts/install_web_deps.sh
```

:::tip
En Ubuntu 24.04, no ejecutes un simple `pip3 install -r requirements.txt` en el Python del sistema. Este proyecto mantiene el entorno de cosido separado del entorno de modelos de percepción.
:::

### Paso 4. Instalar dependencias de percepción

Para habilitar la asistencia de agarre con YOLO-World y la comprensión de escena con VLM, ejecuta:

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

Esto prepara el entorno de percepción y descarga los archivos de modelo necesarios.

## Cómo usarlo

Calibra primero las cuatro cámaras y luego inicia la demo de vista envolvente en vivo. **No** ejecutes ambos al mismo tiempo; necesitan acceso exclusivo a las cámaras.

### Paso 1. Comprobar el mapeo de cámaras

El mapeo de dispositivos de cámara se define en:

```bash
config/camera_profile.json
```

Mapeo típico en el repositorio:

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

Confirma estos nodos de dispositivo antes de la calibración. Una vez que la demo esté en ejecución, puedes volver a comprobarlo cubriendo la cámara **frontal**: la **parte superior** de la imagen BEV debería oscurecerse. Si la parte delantera y trasera están intercambiadas, cambia el mapeo de dispositivos en el archivo de configuración. No edites los archivos de resultados de calibración para esto.

### Paso 2. Abrir la interfaz web de calibración

Inicia el servicio de calibración:

```bash
./calib.sh
```

Luego abre la página de calibración en tu navegador:

```text
http://<board-ip>:8787/
```

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_02.png" />
</div>

La interfaz de calibración se utiliza para:

- calibración intrínseca
- alineación extrínseca
- refinamiento de uniones

Para el refinamiento de uniones, sigue el emparejamiento del repositorio:

- `front + left`
- `front + right`
- `back + left`
- `back + right`

Coloca el tablero de ajedrez en la zona de solapamiento entre las dos vistas de cámara. Cuando ambas vistas detecten el tablero y muestren estado listo, el sistema puede refinar esa unión.

### Paso 3. Ejecutar la demo

Cuando la calibración esté completa, inicia la demo de vista envolvente:

```bash
./run.sh
```

Esto lanza la canalización BEV en vivo: cosido, ocupación, asistencia de agarre con YOLO y subtitulación de escena opcional con VLM.

También puedes iniciar directamente el lanzador de percepción:

```bash
./scripts/run_perception.sh --vlm off --mode nav --range 2.5
./scripts/run_perception.sh --mode grasp --target bottle
```

### Modos comunes

| Objetivo | Comando |
| --- | --- |
| Asistencia al movimiento del chasis | `./scripts/run_perception.sh --vlm off --mode nav --range 2.5` |
| Asistencia de agarre con brazo robótico | `./scripts/run_perception.sh --mode grasp --target bottle` |
| Ejecución sin interfaz gráfica (headless) | `./scripts/run_perception.sh --no-window` |
| Prueba rápida sin conexión | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` se centra en la ocupación alrededor del chasis
- `--mode grasp --target bottle` le pide a YOLO que busque un objetivo de agarre
- `--vlm off` omite la subtitulación de escena cuando solo necesitas posicionamiento o detección

## Resultado de la demo y controles

Cuando la ventana de la demo esté en ejecución, estarán disponibles estos atajos de teclado:

| Tecla | Acción |
| --- | --- |
| `ESC` o `q` | Salir |
| `o` | Ejecutar YOLO-World una vez para asistencia de agarre |
| `a` | Disparar un subtítulo VLM para comprensión de la escena |
| `s` | Guardar un fotograma |
| `m` | Alternar el mapa de ocupación |

Durante la ejecución, la demo también puede escribir:

- `output/perception/preview.jpg`
- `events.jsonl`

Estos archivos son útiles para depuración, validación e integración posterior.

## Convención de coordenadas

El proyecto utiliza esta convención BEV:

| Elemento | Significado |
| --- | --- |
| Parte superior de la imagen | Parte delantera del vehículo |
| Origen de `base_link` | Aproximadamente el centro de la BEV |
| `+X` | Hacia delante |
| `+Y` | Izquierda |

Por lo tanto, YOLO puede informar posiciones objetivo 2D aproximadas, como dirección, distancia hacia delante y desplazamiento lateral, para asistir el agarre.

El resultado sigue siendo una **aproximación en el plano del suelo**. No es una pose de agarre de 6 GDL y no debe tratarse como verdad de referencia precisa para manipulación.

## Notas y limitaciones

- Esta demo proporciona **asistencia de percepción**. **No** envía comandos de control al chasis ni al brazo
- **YOLO** localiza objetivos para asistir el agarre; no cierra por sí mismo el bucle de agarre
- La salida del **VLM** es para **comprensión de la escena**, no para coordenadas
- La ocupación es una **pista 2D del suelo**, no un mapa de SLAM con LiDAR
- El cosido en tiempo real está pensado para **sistemas Jetson con CUDA**
- El modo solo CPU es útil para depuración, pero no se recomienda para despliegue en vivo

## Recursos

- [Primeros pasos con reComputer Robotics J601](https://wiki.seeedstudio.com/es/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
