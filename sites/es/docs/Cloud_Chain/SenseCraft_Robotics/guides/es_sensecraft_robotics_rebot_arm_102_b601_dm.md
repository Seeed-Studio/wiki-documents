---
title: Guía de entrenamiento reBot Arm 102 + B601 DM
description: Configura reBot Arm 102 + B601 DM con SenseCraft Robotics, conecta y calibra los brazos, recopila demostraciones, entrena un modelo y valida la inferencia.
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 DM
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_dm
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

Este tutorial utiliza el reBot Arm 102 (brazo líder) y el B601 DM (brazo seguidor) con SenseCraft Robotics para presentar el flujo de trabajo completo, desde la creación del proyecto y la configuración del dispositivo hasta la recopilación de datos, el entrenamiento del modelo y la operación.
La tarea de ejemplo en esta guía consiste en recoger un objeto en el Punto A y colocarlo en el Punto B. Se proporciona solo a modo de ilustración; los usuarios pueden diseñar escenarios de aplicación según sus necesidades, como clasificación, manipulación, empaquetado, pulsación de botones o conectar y desconectar.

![Ejemplo de tarea de pick-and-place con brazo DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp)

> **Nota de versión**
> Los nombres de las interfaces, la ubicación de los botones y los backends de entrenamiento pueden cambiar según las versiones de SenseCraft Robotics. Los números de puerto serie (como COM21, COM35, COM3 y COM6) y los nombres de conjuntos de datos de esta guía son ejemplos tomados de un vídeo. Utiliza siempre los dispositivos detectados por tu ordenador actual.

## Descripción general del tutorial

Este tutorial está organizado en el orden de configuración de hardware y operación de software para ayudarte a configurar rápidamente los brazos y entrenar un modelo:

| Capítulo | Etapa | Contenido clave |
| :--- | :--- | :--- |
| Capítulo 1 | **Preparación** | Lista de hardware, requisitos de ordenador y software, comprobaciones de escena y seguridad |
| Capítulo 2 | **Conectar los brazos** | Montaje físico y conexiones de cables para los brazos líder y seguidor |
| Capítulo 3 | **Entrenamiento por software** | **Flujo de trabajo principal**: configuración del dispositivo ➔ recopilación de datos ➔ entrenamiento del modelo ➔ despliegue y operación |



<span id="preparation"></span>

## 1. Preparación

### 1.1 Hardware

![Lista de hardware](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-1-hardware-list-dm-en.webp)

> Los brazos deben estar ensamblados, montados, alimentados y conectados por USB. Si el ensamblaje no está completo, consulta [Paso 1: Ensamblar el brazo](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/#%E7%AC%AC%E4%B8%80%E6%AD%A5%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82).

#### Brazos

| Categoría | Líder: reBot Arm 102 | Seguidor: B601 DM |
|---|---|---|
| Brazo | reBot Arm 102 ×1  🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | Kit reBot Arm B601-DM ensamblado (versión con garra ensamblada y fuente de alimentación) ×1   🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| Fuente de alimentación | Adaptador de alimentación de 12 V / 2 A ×1    | Fuente de alimentación de 24 V / 15 A y cable de alimentación ×1   |
| Cable de datos | Cable de datos USB-C ×1 | Cable de datos USB-C ×1 |
| Componentes de comunicación y alimentación | — | Placa controladora USB-CAN ×1 <br />Placa de separación de señal/alimentación ×1 |
| Otros cables | — | Cable JST de 2 pines ×1<br />Cable JST de 3 pines ×1<br />Cable XT30 2+2 ×1 |
| Herramientas de montaje | Sargento en C ×2 | Sargento en C ×2  |

#### Cámaras

Se requieren dos cámaras: una para la vista superior y otra para la vista lateral o la vista de la garra.

<table>
  <thead>
    <tr>
      <th>Cámara</th>
      <th>Cámara de vista superior</th>
      <th>Cámara de vista lateral</th>
      <th>Cámara de garra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cantidad</td>
      <td>1</td>
      <td colspan="2">Elige la cámara de <em>vista lateral</em> o la de <em>garra</em></td>
    </tr>
    <tr>
      <td>Montaje</td>
      <td>Soporte de vista superior ×1</td>
      <td>Soporte de escritorio pequeño ×1</td>
      <td>Soporte impreso en 3D ×1</td>
    </tr>
  </tbody>
</table>

**Opciones de cámara**: En macOS o Windows, elige cualquiera de las siguientes combinaciones. Recomendamos conectar las cámaras directamente a los puertos USB del ordenador en lugar de usar un hub o base USB.

| Opción | Cámara USB Hikvision | Webcam Logitech C270 HD | Rendimiento de recopilación |
|:---|:---|:---|:---|
| Opción1 | 1 | 1 | Más estable; admite recopilación a 120 FPS |
| Opción2 | ❌ | 2 | Estable; admite todas las frecuencias de fotogramas de recopilación |
| Opción3 | 2 | ❌ | Mantén la frecuencia de fotogramas en 60 FPS o menos; no se admite recopilación a 120 FPS y pueden producirse problemas de compatibilidad en algunos casos |


### 1.2 Ordenador y software

- Ordenador con Windows o macOS (el entrenamiento local requiere una GPU compatible)
- Conexión de red estable (para descargas, inicio de sesión, entrenamiento en la nube e inferencia)
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado
- Una [cuenta de SenseCraft](https://account.seeed.cc/login) registrada, iniciada sesión dentro de SenseCraft Robotics


Para obtener instrucciones detalladas, consulta [Descarga de software y configuración de la cuenta](/es/sensecraft_robotics/#descarga-y-configuración-de-la-cuenta).

### 1.3 Escena y seguridad

- Marca dos posiciones fijas en la mesa: Punto A para la posición inicial del objeto y Punto B para su destino.
- Prepara un objeto de tamaño adecuado y fácil de agarrar, como un bloque rojo o un objeto blando.
- Asegúrate de que el Punto A, el Punto B, ambos brazos y el objeto estén dentro del campo de visión de las cámaras y no estén obstruidos.
- Despeja el área de trabajo del brazo de personas, desorden, cables y objetos frágiles. Ajusta el brazo líder para que no se acerque al brazo seguidor ni aparezca en la vista de la cámara del seguidor.

![Ejemplo de escena y seguridad](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)


<span id="connect-arms"></span>

## 2. Conectar los brazos

> **Aviso de seguridad:**
> Desconecta la alimentación antes de conectar o desconectar cables JST, XT30 u otros cables. Enciende la alimentación solo después de confirmar que todos los cables están conectados correctamente.
> El B601 RS y el B601 DM se parecen. Asegúrate de distinguirlos.


### 2.1 Montar y conectar el reBot Arm 102 (brazo líder)



#### Paso 1: Montar el reBot Arm 102

Utiliza sargentos para madera para fijar el reBot Arm 102 a una mesa plana. Empuja suavemente la base para confirmar que no se mueve.

#### Paso 2: Conectar los cables

![Montaje y conexión del reBot Arm 102 (brazo líder)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)


Las conexiones constan de dos rutas:

* **Ruta de señal (brazo -> cable USB-C -> ordenador)**
  1. Prepara un cable USB-C para conectar el brazo al ordenador (**no lo conectes todavía al ordenador; conéctalo cuando llegues al enlace del puerto serie y al escaneo de dispositivos**).

* **Ruta de alimentación (brazo -> adaptador de alimentación de 12 V 2 A -> regleta -> encendido)**
  1. Conecta el **adaptador de alimentación de 12 V 2 A** al conector de alimentación del brazo.
  2. Conecta el adaptador a la regleta para encender el brazo.


### 2.2 Montar y conectar el B601 DM (brazo seguidor)

![Conexión de cables del B601 DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-follower-wiring-overview-dm-en.webp)

#### Paso 3: Montar el B601 DM

Utiliza sargentos en C para fijar el B601 DM a una mesa estable y plana. Después de fijarlo, gira suavemente el brazo hacia la izquierda y la derecha para confirmar que la base no se mueve.

#### Paso 4: Conectar los cables

Asegúrate de que la alimentación esté desconectada antes de empezar. Las conexiones constan de dos rutas:

* **Ruta de señal (brazo -> placa de separación de señal/alimentación -> placa controladora USB-CAN -> ordenador)**
  1. Utiliza un cable XT30 2+2 para conectar el primer motor de la parte inferior a la placa de separación de señal/alimentación.
  2. Utiliza el cable JST de 2 pines para conectar la placa de separación de señal/alimentación a la placa controladora USB-CAN.
  3. Utiliza el cable JST de 3 pines para conectar el primer motor de la parte inferior a la placa controladora USB-CAN (este es un cable de depuración y puede dejarse desconectado).
  4. Prepara un cable de datos USB-C para conectar la placa controladora USB-CAN al ordenador (**no lo conectes todavía al ordenador; conéctalo cuando llegues al enlace del puerto serie y al escaneo de dispositivos**).

* **Ruta de alimentación (brazo -> placa de separación de señal/alimentación -> adaptador de alimentación de 24 V -> toma de corriente -> encendido)**
  1. Utiliza un cable XT30 2+2 para conectar el primer motor de la parte inferior a la placa de separación de señal/alimentación.
  2. Conecta la placa de separación de señal/alimentación al **adaptador de alimentación de 24 V**.
  3. Conecta el adaptador de alimentación a la toma de corriente. Después de confirmar que el brazo está fijado, que los cables son correctos y que el área circundante está despejada, enciende la alimentación.

![Conexión del B601 DM (brazo seguidor)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-connect-follower-dm-en.webp)



<span id="project"></span>

## 3. Proyecto

Después de iniciar sesión, abre la página **Projects**. Crea un proyecto nuevo para el primer uso o abre un proyecto existente. En un proyecto, la **Project Overview** proporciona acceso a la configuración del dispositivo, la repetición de acciones, los conjuntos de datos, el entrenamiento, los modelos y la operación.

| Operación | Pasos |
|---|---|
| Crear un proyecto | Haz clic en **New Project** → introduce el nombre y la descripción del proyecto → haz clic en **Create and Start** |
| Abrir un proyecto existente | Selecciona un proyecto de la lista de proyectos → abre el proyecto |

![Ventana de nuevo proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-create-project-dm-en.webp)


### 3.1 Project Overview

**Project Overview** muestra el estado actual del proyecto, incluido el estado de conexión del brazo, la configuración del dispositivo, el conjunto de datos, el entrenamiento, el modelo y la operación.

Si la página muestra **Pending configuration** o **Not connected**, haz clic en **Go to Device Setup** para configurar los brazos.

![Project overview](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-1-device-selection-dm-en.webp)



<span id="device-setup"></span>

### 3.2 Device Setup

Device Setup se utiliza para la selección de dispositivos, el enlace de puertos serie, la calibración de brazos, la verificación de teleoperación y la configuración de cámaras.

#### 3.2.1 Seleccionar el modelo de dispositivo

En el paso **Device Pairing**, selecciona **reBot Arm 102 + B601 DM** y luego haz clic en **Next** para enlazar los puertos serie.

![Seleccionar reBot Arm 102 + B601 DM](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-1-device-pairing-dm-en.webp)


#### 3.2.2 Enlazar los puertos serie USB para los brazos líder y seguidor

1. **Escaneo inicial**: Desconecta los cables USB de ambos brazos, haz clic en **Rescan** y toma nota de los puertos serie que se muestran actualmente.
2. **Enlazar el brazo líder**: Conecta el reBot Arm 102 (brazo líder), haz clic de nuevo en **Rescan** y enlaza el puerto serie recién detectado al brazo líder.
3. **Enlazar el brazo seguidor**: Conecta el B601 DM (brazo seguidor), haz clic de nuevo en **Rescan** y enlaza el puerto serie recién detectado al brazo seguidor.
4. Confirma que ambos brazos muestren **Connected** y luego haz clic en **Next**.

![Vincula los puertos serie para los brazos líder y seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-2-serial-binding-dm-en.webp)

> **Vinculación del puerto serie y resolución de problemas:**
> - Después de cada escaneo, vincula solo el puerto serie recién detectado. No identifiques un dispositivo solo por su número de COM.
> - Si no se muestra un puerto serie, vuelve a conectar el cable USB y escanea de nuevo. Si solo se muestra un puerto serie, comprueba el otro cable USB y la alimentación del dispositivo.


#### 3.2.3 Verificación de la calibración del brazo

1. Sigue el ejemplo en pantalla para colocar los brazos líder y seguidor en sus poses iniciales y confirma que el área de trabajo esté despejada.
2. Haz clic en **Start Calibration** y luego sigue las instrucciones en pantalla para completar el ajuste a cero del brazo líder, el ajuste a cero del brazo seguidor y la finalización de la calibración.
3. Si las poses de los brazos no son coherentes o la calibración falla, haz clic en **Recalibrate** y no continúes con los siguientes pasos.

![Verificación de la calibración del brazo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)

> No realices teleoperación ni recopilación de datos antes de que la calibración se haya completado.

#### 3.2.4 Verificación de la teleoperación

La verificación de la teleoperación confirma que el brazo seguidor sigue correctamente al brazo líder. Si la dirección está invertida, el retardo es excesivo o el movimiento es discontinuo, comprueba los roles de los dispositivos, la vinculación del puerto serie y el resultado de la calibración.

1. Haz clic en **Start Teleoperation**.
2. Mueve el brazo líder en un rango pequeño y observa si el brazo seguidor se mueve de forma síncrona, en la misma dirección y con suavidad.
3. Después de completar la comprobación, haz clic en **End Teleoperation** y luego selecciona una opción según el resultado:
   - **Normal**: Haz clic en **Confirm Teleoperation Normal**.
   - **Abnormal**: Haz clic en **Abnormal, Return to Recalibrate**.

![Verificación de la teleoperación](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)

> **Compensación de gravedad (opcional)**
> El brazo tiene cierto peso, por lo que ajustar manualmente el brazo seguidor puede requerir esfuerzo. Cuando la compensación de gravedad está activada, el sistema compensa parte del peso y hace que el brazo seguidor sea más fácil de mover. Después del ajuste, desactiva la compensación de gravedad antes de realizar la verificación de la teleoperación.
> La compensación de gravedad sirve para ajustar el brazo seguidor; no se utiliza para controlar el brazo seguidor durante la operación líder-seguidor.


#### 3.2.5 Vincular las cámaras

Las cámaras registran información visual mientras el brazo realiza una tarea. A continuación se muestran dos disposiciones de cámara habituales:

| Disposición | Instalación y propósito | Escenarios adecuados | Ilustración |
|:---|:---|:---|:---|
| Vista del efector final<br /> | <small><strong>Cámara de vista superior</strong>: Instálala sobre la parte frontal de la mesa de trabajo para cubrir el área de trabajo.<br /><br /><strong>Cámara del efector final</strong>: Instálala cerca del efector final para observar los detalles de agarre.</small> | <small>Operaciones finas que requieren observar el contacto entre el efector final y el objeto.</small> | ![Disposición de vista del efector final](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-in-hand-dm-en.webp)<br /><small>*Nota: Puedes diseñar tú mismo el soporte de la cámara 3D.</small> |
| Asistencia de vista lateral<br /> | <small><strong>Cámara de vista superior</strong>: Instálala sobre la parte frontal de la mesa de trabajo para cubrir el área de trabajo.<br /><br /><strong>Cámara de vista lateral</strong>: Instálala en el lateral frontal de la mesa de trabajo para observar la altura del brazo y el movimiento del efector final.</small> | <small>Tareas de pick-and-place, manipulación y colocación.</small> | ![Disposición de asistencia de vista lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-to-hand-dm-en.webp) |

Este tutorial utiliza la disposición de **asistencia de vista lateral**. Después de instalar y posicionar las cámaras:

1. Conecta las cámaras al ordenador y haz clic en **Rescan**.
2. Selecciona los flujos de vídeo correspondientes en las secciones **Top-view camera** y **Side-view camera**.
3. Comprueba ambas ventanas de vista previa para confirmar que los brazos, el objeto y las posiciones objetivo sean claramente visibles. Haz clic en **Next** después de confirmar la configuración.

![Vincula las cámaras de vista superior y vista lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> Para confirmar que cada cámara coincide con su posición de instalación, haz clic en **View Camera Layout**. Si una vista previa está en negro o es anormal, vuelve a escanear, reinicia la cámara o utiliza otro puerto USB.


<span id="action-replay"></span>

### 3.3 Repetición de acciones

**Action Replay** registra los movimientos del brazo mediante enseñanza con el brazo líder y los guarda en la lista de acciones para su reproducción. Después de grabar, comprueba si el movimiento es continuo y si la dirección del movimiento y la apertura y cierre del efector final son normales.

| Función | Operación | Propósito |
|---|---|---|
| Grabar una acción | Haz clic en **+** para crear una acción → usa el brazo líder para controlar el brazo seguidor y completar la tarea → haz clic en **Stop Recording** → guarda | Registrar acciones objetivo como agarrar, mover y colocar |
| Reproducir una acción | Haz clic en **Replay** | Comprobar si la acción es completa y continua, y confirmar la dirección del movimiento y la apertura y cierre del efector final |

> Antes de grabar una acción por primera vez, completa la conexión del dispositivo y la verificación de la teleoperación en **Device Setup**, y haz clic en **Confirm Teleoperation Normal**. Si la reproducción es anormal, elimina la acción y grábala de nuevo.

![Lista de acciones y operaciones de reproducción](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-3-action-replay-dm-en.webp)


<span id="dataset"></span>

### 3.4 Conjunto de datos

**Dataset** se utiliza para crear tareas de recopilación y registrar, inspeccionar, limpiar y fusionar episodios de tareas. Recomendamos recopilar datos en pequeños lotes para que las desconexiones de dispositivos, errores de software o tirones de vídeo puedan detectarse pronto y se reduzca el riesgo de perder todos los datos por un solo fallo.

- Primero registra unos 10 episodios de tarea por lote.
- Después de completar 2–3 lotes, conserva unos 20–30 episodios válidos para la primera ejecución de entrenamiento.
- Añade más datos para tareas complejas según los resultados del entrenamiento.

#### 3.4.1 Configurar una tarea de recopilación de datos

Abre **Dataset** → **Collect Data** en la parte superior de la página e introduce la información de la tarea. Si se van a fusionar varios conjuntos de datos, la descripción de la tarea en cada lote debe ser exactamente la misma. Antes de la recopilación, mantén también lo más estables posible las posiciones A y B, la categoría del objeto, las posiciones de las cámaras, el fondo de la mesa y las condiciones de iluminación.

| Campo | Valor de ejemplo | Instrucciones |
|---|---|---|
| Nombre del conjunto de datos | `DM Arm Pick-and-Place from A to B-01` | Utiliza un esquema de nombres “dispositivo + tarea + lote” |
| Descripción de la tarea | `Move the object from the left to the right` | Describe claramente el objetivo de la tarea; las descripciones deben ser exactamente iguales cuando se fusionan lotes |
| Número de episodios | `10` | Cada episodio debe contener una tarea completa |
| Duración del episodio | `20`–`30` seconds | Cubrir la secuencia de acciones completa |
| Duración del descanso | `5` seconds | Dejar tiempo para reajustar el brazo y ajustar la escena |

![Configurar una tarea de recopilación de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-1-dataset-config-dm-en.webp)

#### 3.4.2 Registrar episodios de tareas

Registrar episodios de tareas es el núcleo de los datos de entrenamiento. Cada episodio debe registrar por completo recoger el objeto en el Punto A, moverlo al Punto B y soltarlo. Para ayudar al modelo a aprender rápidamente, mantén el flujo de la tarea generalmente coherente. Para mejorar la generalización, añade datos con diferentes posiciones, ángulos y variaciones de movimiento.

1. Coloca el objeto en el Punto A, confirma que el brazo está en su pose inicial y haz clic en **Start Recording**.
2. Usa el brazo líder para controlar el brazo seguidor y completar la tarea, y luego devuelve el brazo a su pose inicial.
3. Después de completar la tarea, espera a que termine el tiempo restante o haz clic en la flecha (o pulsa la barra espaciadora) para finalizar el episodio actual antes de tiempo.
4. Durante el período de descanso, devuelve el objeto al Punto A y confirma que el brazo está listo. Inicia el siguiente episodio cuando termine el período de descanso.

![Registrar episodios de tareas](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-2-recording-episode-dm-en.webp)

> **Importante ⚠️**
>
> - Antes de la recopilación, ajusta y fija las cámaras. **Asegúrate de que los brazos, el efector final, el objeto y los Puntos A y B sean visibles en las vistas de las cámaras.**
> - Las acciones clave no deben estar 🚫 obstruidas ni fuera de las vistas de las cámaras; de lo contrario, es posible que los datos no sean utilizables para el entrenamiento.
> - Si una tarea falla, el objeto no se agarra con seguridad, el vídeo se entrecorta o una cámara queda obstruida, haz clic en **Retake Immediately** o pulsa `Esc` para detener la recopilación.
> - Puedes terminar primero el lote actual y luego inspeccionar y eliminar los episodios anormales.
> - Si existe riesgo de pérdida de control o colisión, detente 🛑 inmediatamente.



#### 3.4.3 Inspeccionar, eliminar y fusionar datos

Después de la recopilación, inspecciona los episodios anormales, elimina los datos no válidos y fusiona varios conjuntos de datos cuando sea necesario.

| Operación | Cómo realizarla | Descripción |
|---|---|---|
| Inspeccionar episodios anormales | Selecciona un episodio y reproduce su vídeo o repite su acción | Confirma que la tarea se completó y que el movimiento del efector final fue normal. Anota los números de episodios anormales durante la grabación para poder inspeccionarlos directamente más tarde |
| Eliminar episodios anormales | Haz clic en **Batch Delete Episodes**, selecciona los episodios anormales y confirma; luego haz clic en **Generate Deleted Copy** | Cambia el nombre del nuevo conjunto de datos y confirma. El conjunto de datos original no se sobrescribirá |
| Fusionar conjuntos de datos | Haz clic en **Merge**, selecciona los conjuntos de datos e introduce un nuevo nombre de conjunto de datos | Recomendamos fusionar conjuntos de datos con la misma descripción de tarea, combinación de dispositivos y configuración de cámaras |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspeccionar conjunto de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-check-dm-en.webp)


<figcaption>Inspeccionar conjunto de datos</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Eliminar episodios anómalos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-delete-dm-en.webp)


<figcaption>Eliminar episodios anómalos</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Combinar conjuntos de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-merge-dm-en.webp)


<figcaption>Combinar conjuntos de datos</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 Entrenamiento

El entrenamiento genera un modelo de acción para el brazo (es decir, un programa de control de acciones formado a partir de los datos de demostración). SenseCraft Robotics lee los datos de la tarea registrada, analiza cómo el brazo completa el objetivo y genera un modelo que puede utilizarse para la operación automática.

Utiliza la siguiente tabla para configurar los parámetros de entrenamiento:

| Parámetro | Opción / valor | Detalles |
| :--- | :--- | :--- |
| **Hardware de entrenamiento** | Cloud · Auto-select GPU | Utiliza un servidor en la nube para el entrenamiento y consume los créditos correspondientes. |
| | Local · Free | Utiliza el ordenador actual para el entrenamiento y no consume créditos, pero requiere una GPU local compatible. |
| **Conjunto de datos de entrenamiento** | Seleccionar el conjunto de datos objetivo | Selecciona el conjunto de datos registrado preparado para esta ejecución de entrenamiento. |
| **Política** | ACT | La política de control de acciones predeterminada que se utiliza actualmente. |
| **Pasos de entrenamiento** | `10000` | Recomendamos introducir 10000 como valor inicial y ajustarlo según el rendimiento real del modelo. |

> **Nota sobre créditos**
> El entrenamiento Cloud · Auto-select GPU consume créditos; el entrenamiento Local · Free no consume créditos de entrenamiento en la nube. Para la obtención, uso y reglas de los créditos, consulta [Credit Rules](/es/sensecraft_robotics/#reglas-de-créditos).

**Recomendaciones de pasos de entrenamiento y episodios:**

| Dificultad de la tarea | Descripción de la tarea | Episodios recomendados | Pasos de entrenamiento recomendados |
|---|---|---:|---:|
| Principiante | Punto fijo A a Punto B | Alrededor de 20 | 10,000–15,000 pasos |
| Intermedio | Recoger y colocar en posiciones aleatorias | Alrededor de 50 | 30,000–40,000 pasos |
| Avanzado | Muchos pasos o larga duración | Alrededor de 100 | 80,000–100,000 pasos |

> **Duración del entrenamiento**: El tiempo total de entrenamiento depende tanto del modelo de GPU seleccionado como del número de pasos de entrenamiento. Por ejemplo, entrenar durante 20,000 pasos (2W) en la nube en la mayoría de las GPU suele tardar desde varios minutos hasta varias decenas de minutos. Entrenar durante 100,000 pasos (10W) tarda aproximadamente cinco veces más que entrenar durante 20,000 pasos.

Después de confirmar la configuración, haz clic en **Start Training**. Una vez que comience el entrenamiento, puedes ver el progreso y las tareas históricas en la lista **Current Training Tasks**.

![Configuración de entrenamiento](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-5-training-dm-en.webp)

<span id="model"></span>

### 3.6 Modelo

**Model** se utiliza para ver los resultados del entrenamiento y seleccionar el modelo para la operación posterior. Antes de utilizar un modelo, confirma que el entrenamiento esté completo y que su combinación de tarea y dispositivo coincida con el proyecto actual.

![Lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-6-model-dm-en.webp)

<span id="run"></span>

### 3.7 Operación

**Operation** carga un modelo entrenado en los brazos para verificar si puede completar la tarea correctamente.

**Pasos:**

1. **Seleccionar un modelo**: Selecciona un modelo etiquetado como **Supported by Current Robot Arm**.
2. **Seleccionar un método de inferencia**: Selecciona **Cloud Inference** o **Local Inference**, y configura los parámetros correspondientes.
3. **Iniciar la inferencia**: Después de confirmar la configuración, haz clic en **Start Inference**.

**Diferencias principales entre Cloud Inference y Local Inference:**

| Comparación | Cloud Inference | Local Inference |
| :--- | :--- | :--- |
| **Hardware de cómputo** | Utiliza una GPU en la nube de alto rendimiento para la inferencia. | Utiliza la CPU local del ordenador para la inferencia (la plataforma actual no admite el uso de una GPU local). |
| **Impacto en el rendimiento** | La potencia de cómputo es alta y generalmente sin restricciones, pero el resultado depende en gran medida de la **calidad de la transmisión de red**. | El rendimiento se ve afectado por la **CPU local**. |
| **Configuración de parámetros** | **Action count (predeterminado: 120):** Número de pasos de acción predichos en una inferencia. <br />**Block threshold (predeterminado: 0.9):** Parámetro que afecta la continuidad y precisión del movimiento. Un valor más alto hace que la ejecución del brazo sea más cautelosa (y puede causar pausas); un valor más bajo hace que el movimiento sea más fluido (pero puede causar errores).<br />**(La configuración predeterminada suele ser suficiente.)** | **Run count:** Número total de veces (episodios) que se repite la tarea de forma continua.<br />**Time limit per run (seconds):** Tiempo máximo para una ejecución de la tarea; la ejecución termina automáticamente cuando se alcanza el límite.<br />**(La configuración predeterminada suele ser suficiente.)** |
| **Salida de datos** | Solo realiza inferencia para verificación. | Después de que finaliza la ejecución, el contenido de la inferencia se genera automáticamente como un conjunto de datos correspondiente. |
| **Coste y límites** | El coste está sujeto a las reglas de la plataforma; la potencia de cómputo es alta y adecuada para iniciar el entrenamiento rápidamente. | Normalmente no requiere créditos en la nube, pero está limitado por el rendimiento de la CPU local. |

**Notas**

- Antes de comenzar: Confirma que los brazos estén conectados correctamente y que el área de trabajo sea segura.
- Durante la operación: No desconectes ni desarmes los brazos y observa si sus movimientos son normales.
- Si el resultado no es satisfactorio: Vuelve a **Dataset**, elimina los episodios anómalos, añade datos válidos y entrena de nuevo.

![Interfaz de operación del modelo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-7-run-dm-en.webp)
