---
title: Seguimiento de la palma con cámara de muñeca reBot-RS
description: Usa una cámara de profundidad montada en la muñeca para seguir una mano y controlar el efector de reBot Arm B601-RS con un gesto de pellizco.
slug: /rebot_arm_b601_rs_camera_follow
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp
keywords:
  - reBot Arm
  - B601-RS
  - seguimiento de mano
  - cámara de profundidad
  - servo visual
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Seguimiento de la palma con cámara de muñeca reBot-RS

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="Brazo robótico reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Entorno de referencia: Python 3.10" />
  <img src="https://img.shields.io/badge/Platform-Linux-orange.svg" alt="Plataforma: Linux" />
  <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Cámara: cámara de profundidad RGB-D" />
  <img src="https://img.shields.io/badge/Tracking-MediaPipe-yellow.svg" alt="Detección de mano: MediaPipe" />
</p>

<p align="center">
  <strong>Detección de profundidad en la muñeca · Seguimiento de la palma · Pellizcar para agarrar · Vista previa web local</strong>
</p>

Este tutorial explica cómo ejecutar [reBot RS Camera Follow](https://github.com/Yang-Ci/reBot_RS_Camera-Follow). Una cámara de profundidad montada en la muñeca captura imágenes de color y profundidad, mientras que el programa detecta la palma y calcula las órdenes de seguimiento para el brazo. También puedes controlar el efector pellizcando el pulgar y el índice y usar una página web local para ver la cámara, el estado de las articulaciones y el modelo del robot.

El proyecto combina puntos de referencia de la mano con datos de profundidad alineados para estimar la posición tridimensional de la palma. Filtra el objetivo, transforma coordenadas y calcula órdenes de articulaciones usando la cinemática del robot. La página web muestra una vista previa de los datos y gestiona el proceso de control. Los valores de las articulaciones pueden provenir de la retroalimentación, de las órdenes o de una estimación del modelo; comprueba la etiqueta de origen de datos en la página.

<GitHubStarButton
  owner="Yang-Ci"
  repo="reBot_RS_Camera-Follow"
  ariaLabel="Star reBot_RS_Camera-Follow on GitHub"
/>

:::warning Seguridad con el robot real
La inicialización habilita los motores y mueve el brazo a HOME; al salir también mueve el brazo de vuelta a cero. Despeja toda el área de movimiento, fija el brazo, comprueba la alimentación, el CAN y la trayectoria HOME, y asegúrate de que el paro de emergencia por hardware esté disponible. Empieza a baja velocidad y dentro de un rango pequeño cuando ejecutes el sistema por primera vez o después de cambiar el hardware. Las protecciones de software y la visualización web no pueden sustituir la detección de colisiones ni un paro de emergencia por hardware.
:::

## Arquitectura del sistema y enfoque

### Arquitectura del sistema

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/system-architecture-en-dark.png" alt="Arquitectura del sistema: una cámara en la muñeca envía fotogramas a un host Linux, que controla el brazo por CAN y recibe retroalimentación de articulaciones; una página web local muestra el estado." />
</p>

La cámara de muñeca suministra fotogramas de color y profundidad al host, que controla el brazo por CAN y recibe retroalimentación de las articulaciones. La página web local gestiona el controlador y muestra la vista previa y el estado.

El hilo de visión captura fotogramas de la cámara y detecta la mano. El hilo de servo lee el objetivo más reciente y usa el modelo del robot y la pose de la cámara para calcular las órdenes de articulaciones. La página web inicia y gestiona el controlador a través de un servicio local y recibe el estado; no se conecta directamente a CAN. La visualización puede mostrar retroalimentación real, órdenes o estimaciones; comprueba su etiqueta de origen de datos.

### Seguimiento de la palma y control del efector

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/following-workflow-en-dark.png" alt="El seguimiento de la palma detecta la palma 3D, genera un objetivo y mueve el brazo. El control por pellizco detecta las yemas de los dedos, calcula la distancia de pellizco y ordena el efector." />
</p>

El seguimiento de la palma detecta la palma 3D, calcula un objetivo de seguimiento y mueve el brazo. El control del efector usa las posiciones de las yemas de los dedos y la distancia de pellizco para producir una orden de apertura.

Como la cámara está montada en la muñeca, el controlador debe transformar las coordenadas de la cámara a coordenadas del robot. Si se pierde la palma brevemente, el programa puede extrapolar durante un tiempo limitado; tras una pérdida más prolongada, mantiene la posición. El movimiento puede reanudarse cuando la mano se detecta de nuevo. El control por pellizco comparte el resultado de detección de la mano con el seguimiento, y la página web también te permite mantener el efector en su posición actual.

## Requisitos previos

- Un reBot Arm B601-RS configurado, su fuente de alimentación y una interfaz CAN funcional. Consulta primero el [Inicio rápido de reBot-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/).
- Un ordenador con Linux. El entorno de referencia usa Python 3.10; el proyecto requiere el SDK de la cámara, Pinocchio y motorbridge. Las bibliotecas del sistema y los permisos de dispositivo varían según la máquina.
- Una cámara de profundidad montada en la muñeca y un soporte compatible. La página web puede seleccionar Gemini 2, Gemini 305, Gemini 336 o RealSense D435i. Consulta los requisitos de la pose de la cámara más abajo.

## Elige un soporte para la cámara

Gemini 2, D435i y Gemini 336 usan el soporte nivelado V1, con un URDF de cámara independiente para cada modelo. La figura muestra el modelo STL del soporte compartido desde tres vistas; sus etiquetas están en chino:

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini2-level-mount.png" alt="Vistas en perspectiva, superior y lateral del soporte compartido por Gemini 2, Gemini 336 y D435i" />
</p>

La figura indica la caja envolvente del modelo como X 95.8 × Y 51.0 × Z 25.1 mm. Descarga los archivos STEP y STL desde el [directorio del soporte compartido](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/tree/main/models/wrist_camera/gemini2-gemini336-d435i).

Gemini 305 usa un soporte nivelado centrado independiente, que se muestra abajo como una vista previa del modelo STL. El soporte también puede adaptarse a D405; las opciones de cámara para el siguiente programa dependen de lo que el proyecto admita.

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/camera_follow/gemini305-level-mount.png" alt="Vistas en perspectiva, superior y lateral del soporte compartido por Gemini 305 y D405" />
</p>

Las etiquetas de la figura están en chino e indican la caja envolvente del modelo como X 46.0 × Y 73.4 × Z 24.7 mm. Consulta el [modelo STL del soporte](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/meshes/Gemini305_D405_Mount.stl) y las [notas del modelo](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md). La carcasa de la cámara Gemini 305 se aproxima en el modelo URDF.

Los centros ópticos y las posiciones de montaje difieren entre cámaras. Estas poses son ensamblajes CAD nominales. Antes de usar, comprueba el montaje, el campo de visión y el URDF frente a la configuración física, y luego verifica la dirección del movimiento a baja velocidad.

## Instala el proyecto y las dependencias

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>Obtén el proyecto y crea un entorno</h4>
    <p className="rebot-step-label">Paso 1</p>

Ejecuta lo siguiente en una terminal de Linux:

```bash
git clone https://github.com/Yang-Ci/reBot_RS_Camera-Follow.git
cd reBot_RS_Camera-Follow
python3.10 -m venv .venv-arm
.venv-arm/bin/python -m pip install -r requirements.txt
```

Instala y verifica el SDK para tu cámara. Para D435i, instala también los bindings de Python de RealSense en este entorno:

```bash
.venv-arm/bin/python -m pip install 'pyrealsense2>=2.54'
```

El archivo [requirements-d435i.txt](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/requirements-d435i.txt) del proyecto proporciona un conjunto de dependencias para uso solo de visión con D435i; el control del robot real también requiere las dependencias principales. Si la instalación falla, comprueba la versión de Python, las bibliotecas del sistema, los permisos de dispositivo y el SDK de la cámara.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>Comprueba los recursos incluidos</h4>
    <p className="rebot-step-label">Paso 2</p>

El controlador del robot, el URDF de RS, el modelo web y los recursos de detección de mano en el navegador están incluidos en este repositorio. No necesitas clonar otros proyectos ni configurar rutas de recursos. Comprueba los archivos desde la raíz del proyecto:

```bash
ls vendor/rebot_control
ls assets/robot/description/urdf/ReBot_Arm_RS.urdf
ls web/lib/mediapipe
```

Estos comandos deberían listar los directorios o el archivo correspondientes. Las dependencias de Python y el SDK de la cámara aún deben instalarse. Consulta las [notas sobre recursos incluidos](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md) para ver las fuentes.
  </div>
</section>
</div>

## Comprueba la pose de la cámara

Gemini 2, D435i, Gemini 305 y Gemini 336 usan por defecto la pose nominal de cámara CAD de sus respectivos archivos URDF; no se requiere un archivo de calibración mano-ojo. Gemini 2, D435i y Gemini 336 usan sus modelos nivelados V1 correspondientes. D435i selecciona el marco óptico según la imagen de color o infrarroja actual. Gemini 305 usa el modelo de soporte nivelado centrado.

Antes de usar, asegúrate de que la cámara física y el soporte coinciden con el URDF seleccionado, y luego comprueba la dirección del movimiento a baja velocidad. Las poses CAD nominales no son resultados medidos. Consulta las [notas del modelo de muñeca](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/models/wrist_camera/README.md) para más detalles.

## Comprueba la vista previa de la cámara

Inicia el servicio web desde la raíz del proyecto:

```bash
python3 web/server.py
```

En el mismo ordenador, abre [http://127.0.0.1:8765](http://127.0.0.1:8765). El servicio solo escucha en la máquina local. La interfaz web actual está en chino: selecciona **Real Robot Control** (真机控制), selecciona la cámara conectada y haz clic en **Open Camera** (打开摄像头) para comprobar la imagen antes de conectar el brazo. La vista incrustada de profundidad en las previsualizaciones de Gemini ayuda a comprobar si hay datos de profundidad disponibles; no es un dispositivo de medición ni de seguridad.

Para la **Simulación de Cámara de Computadora** (电脑摄像头模拟), cambia de modo, haz clic en **Enable Camera** (开启摄像头) y permite el acceso del navegador. Este modo solo controla el modelo web; no controla el brazo físico, no estima la profundidad de la palma ni realiza cinemática inversa del efector final.

Para ejecutar la visión de Gemini 336 sin conectar el brazo:

```bash
.venv-arm/bin/python palm_follow_grasp.py --camera gemini336 --no-arm
```

Si no aparece ninguna imagen, comprueba la conexión de la cámara, los permisos del dispositivo, el SDK y si otro programa está usando la cámara. Si falta el modelo web, verifica que los recursos `assets/` y `web/lib/` del repositorio estén completos.

## Iniciar el seguimiento con el robot real

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
  <div className="rebot-step-content">
    <h4>Comprueba el equipo y el área de trabajo</h4>
    <p className="rebot-step-label">Paso 1</p>

Cierra otros programas que usen CAN y comprueba la pose de la cámara, las posiciones cero de las articulaciones, HOME, el área de trabajo y el paro de emergencia de hardware. Asegúrate de que las trayectorias desde la pose actual hasta HOME y de vuelta a cero estén despejadas.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
  <div className="rebot-step-content">
    <h4>Selecciona la cámara y el preset de baja velocidad</h4>
    <p className="rebot-step-label">Paso 2</p>

Selecciona la cámara en la página web. Para la primera ejecución, usa **Low-Speed Validation** (低速验证) y **Keep Gripper Position** (保持当前位置). El preset de baja velocidad ajusta las ganancias de seguimiento y horizontal a 1.5 y limita la velocidad del efector final a 0.10 m/s. Estos ajustes solo se aplican a la ejecución actual y no se escriben en los archivos de configuración.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
  <div className="rebot-step-content">
    <h4>Inicializa el robot real</h4>
    <p className="rebot-step-label">Paso 3</p>

Haz clic en **Initialize Real Robot** (初始化真机). El programa toma el control de la cámara, habilita el brazo y lo mueve a HOME. Observa el movimiento real; una vez que llegue a HOME, el brazo esperará una orden de inicio.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
  <div className="rebot-step-content">
    <h4>Inicia el seguimiento de la palma</h4>
    <p className="rebot-step-label">Paso 4</p>

Pulsa `R`, haz clic en **Start Following** (开始跟随) o mantén una palma abierta durante 3 segundos para iniciar. Mueve la mano lentamente para verificar la dirección y el rango del movimiento real. Si se selecciona **Pinch Control** (捏合控制), pellizca con el pulgar y el índice para controlar la pinza mientras el seguimiento está habilitado.

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
  <div className="rebot-step-content">
    <h4>Pausar y salir</h4>
    <p className="rebot-step-label">Paso 5</p>

Pulsa la barra espaciadora para pausar. Haz clic en **Exit and Return to Zero** (退出并回零), o pulsa `Q` / `Esc`, para solicitar que el programa deje de seguir, vuelva a cero y desactive los motores. Una solicitud de salida durante la inicialización se procesa después de que la inicialización termine; usa el paro de emergencia de hardware en caso de emergencia.

  </div>
</section>
</div>

Cuando la palma se pierde brevemente, el programa puede extrapolar durante un tiempo limitado; tras una pérdida más prolongada mantiene la posición. El movimiento puede reanudarse automáticamente cuando la mano se detecte de nuevo. Después de que un bloqueo por realimentación o protección de la mesa pause el sistema, pulsa `R` o haz clic en el control de reanudación manualmente. El modelo web y la visualización de la pinza pueden mostrar órdenes o estimaciones y no deben usarse como evidencia de seguridad de la posición real. Consulta la [guía web](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md) para obtener detalles sobre operación y protección.

## Configuración y resolución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| La vista previa de la cámara funciona, pero la inicialización falla | Comprueba el modelo de cámara seleccionado, el URDF, el CAN, HOME, las posiciones cero de las articulaciones y el mensaje de error de la página. |
| La dirección o la posición de seguimiento es incorrecta | Pausa inmediatamente y comprueba la orientación física de la cámara, la transformación cámara-brazo, el URDF y las posiciones cero de las articulaciones. No enmascares el problema aumentando la velocidad. |
| La mano o la profundidad no se detectan | Comprueba la iluminación, si la mano está en el campo de visión, la imagen de profundidad y las conexiones del dispositivo; evita la oclusión. |
| El brazo no responde o una protección lo pausa | Comprueba si otro programa está usando CAN, la realimentación del dispositivo y los mensajes de la página. No anules la protección de realimentación. |

`config/follow.yaml` controla la distancia de seguimiento, las ganancias, la velocidad y los parámetros del área de trabajo. Cuando se selecciona Gemini 336 sin una configuración personalizada, también se aplica `config/follow_gemini336.yaml`. `config/grasp.yaml` asigna el gesto de pellizco a la pinza. Muestra las opciones de línea de comandos con:

```bash
.venv-arm/bin/python palm_follow_grasp.py --help
```

:::warning
`--no-arm` es la opción solo de visión. `--no-gripper` y `--no-follow` siguen conectándose al brazo. Vuelve a comprobar la configuración y valida a baja velocidad después de cambiar la configuración o el hardware.
:::

## Recursos

- [Repositorio del proyecto y README más reciente](https://github.com/Yang-Ci/reBot_RS_Camera-Follow)
- [Operación web y fuentes de datos](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/web/README.md)
- [Manual de calibración, control y diagnóstico](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/docs/技术手册.md)
- [Recursos incluidos y sus fuentes](https://github.com/Yang-Ci/reBot_RS_Camera-Follow/blob/main/assets/README.md)
