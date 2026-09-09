---
description: Crea una demo de vista envolvente con ojo de pez y cuatro cámaras en Jetson AGX Thor. Une en tiempo real una vista cenital (BEV) para posicionamiento del chasis, usa YOLO para ayudar al agarre con brazo robótico y un VLM para ayudar a entender la escena.
title: Crea una demo de vista envolvente con ojo de pez y cuatro cámaras en Jetson AGX Thor
keywords:
  - Jetson AGX Thor
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
  - Sensing
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562, 101090101
last_update:
  date: 08/24/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/jetson_fisheye_surround_view_demo/
---

## Introducción

Esta demo ejecuta una canalización de **vista envolvente con ojo de pez y cuatro cámaras** en **NVIDIA Jetson AGX Thor**. Se calibran cuatro cámaras alrededor del chasis y se unen en una **vista cenital (BEV)** en tiempo real. La ocupación insinúa el movimiento del chasis, YOLO-World localiza objetivos de agarre y un VLM genera descripciones de la escena.

{/* <div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div> */}

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/o0NTeeLV4Vk" title="Four-Camera Fisheye Surround View Demo on Jetson AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Distribución BEV después del cosido:

- **Parte superior de la imagen** = parte delantera del vehículo
- **Centro de la imagen** = carrocería del vehículo
- Las cámaras miran hacia **delante, atrás, izquierda y derecha**

:::note
YOLO responde **dónde está el objetivo**. El VLM responde **cómo se ve la escena**. La ocupación es una pista 2D en el suelo, no un mapa de LiDAR.
:::

Esta demo está verificada en **reComputer Robotics J601**.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Robotics J601 </th>
        <th> Sensing SG3S-ISX031C-GMSL2F </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## Características clave

- Cosido en GPU con CUDA OpenCV
- Calibración web para intrínsecos, extrínsecos y uniones
- Ocupación, YOLO-World y VLM sobre un mismo BEV compartido
- Verificado en **Jetson AGX Thor** / **reComputer Robotics J601**

## Requisitos previos

### Hardware

- **reComputer Robotics J601** (Jetson AGX Thor)
- **Cuatro cámaras ojo de pez GMSL2 [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)**
- **Un [cable Mini-Fakra 4 en 1](https://www.seeedstudio.com/Mini-fakra-Coaxial-Cable-4-in-1-0-5m-Female-to-Female-p-6484.html)** para que las cuatro cámaras compartan un único puerto GMSL
- Una pantalla o una sesión de escritorio remoto
- Acceso a red si abres la página de calibración desde otro ordenador

Opcional:

- Un chasis móvil, si quieres usar la ocupación para asistencia al movimiento
- Un brazo robótico, si quieres usar las posiciones objetivo de YOLO para asistencia al agarre

### Software

- JetPack con soporte de controlador GMSL para J601
- OpenCV con CUDA habilitado para cosido en tiempo real
- Entorno de Python para la interfaz web de calibración
- Dependencias de YOLO-World y del modelo VLM opcional

## Conexión de hardware

Conecta cuatro cámaras ojo de pez Sensing GMSL2 a **un puerto GMSL Mini-Fakra** en **reComputer Robotics J601** antes de la calibración. J601 tiene dos conectores Mini-Fakra (hasta ocho cámaras GMSL2). Esta demo usa **un puerto GMSL** y un cable Mini-Fakra 4 en 1.

1. Alimenta la placa J601 a través de la entrada de CC XT30.
2. Si estás usando la placa de expansión GMSL, colócala primero en el conector de expansión de cámara.
3. Conecta el cable Mini-Fakra 4 en 1 a **un puerto GMSL Mini-Fakra**.
4. Conecta las cuatro cámaras ojo de pez Sensing a los cuatro extremos Fakra de ese cable.
5. Monta las cámaras alrededor del chasis de forma que miren hacia **delante, atrás, izquierda y derecha**.
6. Opcionalmente conecta una pantalla HDMI si quieres ver la ventana BEV en vivo en la placa.

Para la puesta en marcha de GMSL en J601, consulta [Uso de interfaces de hardware de Robotics J601](https://wiki.seeedstudio.com/es/recomputer_jetson_robotics_j601_interfaces_usage/).

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_03.png" />
</div>

:::tip
Después de conectar las cámaras, confirma los nodos `/dev/video*` y la asignación en `config/camera_profile.json`. Consulta [Paso 1. Comprobar la asignación de cámaras](#paso-1-comprobar-la-asignación-de-cámaras).
:::

## Instalación y configuración

### Paso 1. Clonar el repositorio

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### Paso 2. Compilar CUDA OpenCV

Antes de ejecutar la demo de vista envolvente en vivo, asegúrate de que OpenCV con CUDA habilitado esté disponible.

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
En Ubuntu 24.04, no ejecutes un simple `pip3 install -r requirements.txt` en el Python del sistema. Este proyecto mantiene separado el entorno de cosido del entorno de modelos de percepción.
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

### Paso 1. Comprobar la asignación de cámaras

La asignación de dispositivos de cámara se define en:

```bash
config/camera_profile.json
```

Asignación típica en el repositorio:

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

Confirma estos nodos de dispositivo antes de la calibración. Una vez que la demo esté en ejecución, puedes volver a comprobarlo cubriendo la cámara **frontal**: la **parte superior** de la imagen BEV debería oscurecerse. Si frontal y trasera están intercambiadas, cambia la asignación de dispositivos en el archivo de configuración. No edites los archivos de resultados de calibración para esto.

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

La interfaz de calibración se usa para:

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

Esto lanza la canalización BEV en vivo: cosido, ocupación, asistencia de agarre con YOLO y generación opcional de descripciones de escena con VLM.

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
| Ejecución sin pantalla (headless) | `./scripts/run_perception.sh --no-window` |
| Prueba rápida sin conexión | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` se centra en la ocupación alrededor del chasis
- `--mode grasp --target bottle` pide a YOLO que busque un objetivo de agarre
- `--vlm off` omite la generación de descripciones de escena cuando solo necesitas posicionamiento o detección

## Resultado de la demo y controles

Cuando la ventana de la demo esté en ejecución, estarán disponibles estos atajos de teclado:

| Tecla | Acción |
| --- | --- |
| `ESC` o `q` | Salir |
| `o` | Ejecutar YOLO-World una vez para asistencia de agarre |
| `a` | Disparar una descripción VLM para comprensión de la escena |
| `s` | Guardar un fotograma |
| `m` | Conmutar el mapa de ocupación |

Durante la ejecución, la demo también puede escribir:

- `output/perception/preview.jpg`
- `events.jsonl`

Estos archivos son útiles para depuración, validación e integración posterior.

## Convención de coordenadas

El proyecto usa esta convención BEV:

| Elemento | Significado |
| --- | --- |
| Parte superior de la imagen | Parte delantera del vehículo |
| Origen de `base_link` | Aproximadamente el centro del BEV |
| `+X` | Hacia delante |
| `+Y` | Izquierda |

Por lo tanto, YOLO puede informar posiciones objetivo 2D aproximadas, como dirección, distancia hacia delante y desplazamiento lateral, para ayudar al agarre.

El resultado sigue siendo una **aproximación en el plano del suelo**. No es una pose de agarre de 6 GDL y no debe tratarse como verdad de referencia precisa para manipulación.

## Notas y limitaciones

- Esta demo proporciona **asistencia de percepción**. **No** envía comandos de control al chasis ni al brazo
- **YOLO** localiza objetivos para ayudar al agarre; no cierra por sí mismo el bucle de agarre
- La salida del **VLM** es para **comprensión de la escena**, no para coordenadas
- La ocupación es una **pista 2D en el suelo**, no un mapa de SLAM con LiDAR
- El cosido en tiempo real está pensado para **Jetson AGX Thor con CUDA habilitado**
- El modo solo CPU es útil para depuración, pero no se recomienda para despliegue en vivo

## Recursos

- [Video de demostración](https://www.youtube.com/watch?v=o0NTeeLV4Vk)
- [Primeros pasos con reComputer Robotics J601](https://wiki.seeedstudio.com/es/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [Uso de las interfaces de hardware de Robotics J601](https://wiki.seeedstudio.com/es/recomputer_jetson_robotics_j601_interfaces_usage/)
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
