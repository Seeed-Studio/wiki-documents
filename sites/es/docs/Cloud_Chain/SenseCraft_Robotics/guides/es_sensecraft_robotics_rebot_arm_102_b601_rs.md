---
title: Guía de entrenamiento de reBot Arm 102 + B601 RS
description: Configura reBot Arm 102 + B601 RS con SenseCraft Robotics, conecta y calibra los brazos, recopila demostraciones, entrena un modelo y valida la inferencia.
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 RS
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_rs
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

Este tutorial utiliza reBot Arm 102 (brazo líder) y B601 RS (brazo seguidor) con SenseCraft Robotics para presentar el flujo de trabajo completo, desde la creación del proyecto y la configuración del dispositivo hasta la recopilación de datos, el entrenamiento del modelo y el despliegue.
La tarea de ejemplo en esta guía consiste en recoger un objeto en el Punto A y colocarlo en el Punto B. Se proporciona solo como ilustración; los usuarios pueden diseñar escenarios de aplicación según sus necesidades, como clasificación, manipulación, empaquetado, pulsación de botones o conectar y desconectar.

![Ejemplo de tarea de pick-and-place con el brazo RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp)


> **Nota sobre la versión**
> Los nombres de las interfaces, la ubicación de los botones y los backends de entrenamiento pueden cambiar según la versión de SenseCraft Robotics. Los números de puerto serie (como COM21, COM35, COM3 y COM6) y los nombres de conjuntos de datos de esta guía son ejemplos tomados de un vídeo. Utiliza siempre los dispositivos detectados por tu ordenador actual.

## Descripción general del tutorial

Este tutorial está organizado en el orden de configuración de hardware y operación de software para ayudarte a configurar rápidamente los brazos y entrenar un modelo:

| Capítulo | Etapa | Contenido clave |
| :--- | :--- | :--- |
| Capítulo 1 | **Preparación** | Lista de hardware, requisitos de ordenador y software, comprobaciones de escena y seguridad |
| Capítulo 2 | **Conectar los brazos** | Montaje físico y conexiones de cables para los brazos líder y seguidor |
| Capítulo 3 | **Entrenamiento por software** | **Flujo de trabajo principal**: configuración del dispositivo ➔ recopilación de datos ➔ entrenamiento del modelo ➔ despliegue y operación |



---

<span id="preparation"></span>

## 1. Preparación

### 1.1 Hardware
![Lista de hardware](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/01-1-hardware-list-rs-en.webp)

> Los brazos deben estar ensamblados, montados, alimentados y conectados por USB. Si el ensamblaje no está completo, consulta [Paso 1: Ensamblar el brazo](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).

#### Brazos

| Categoría | Líder: reBot Arm 102 | Seguidor: B601 RS |
|---|---|---|
| Brazo | reBot Arm 102 ×1    🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | reBot Arm B601-RS ensamblado ×1  🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| Fuente de alimentación | Adaptador de alimentación de 12 V / 2 A ×1 | Fuente de alimentación de 48 V / 12,5 A ×1 |
| Cable de datos | Cable de datos USB-C ×1 | Cable de extensión USB ×1 |
| Componentes de comunicación y alimentación | — | Placa controladora USB-CAN ×1 <br />Placa de separación de señal/alimentación ×1  |
| Otros cables | — | Cable JST de 2 pines ×1<br />Cable JST de 3 pines ×1<br />Cable XT30 2+2 ×1 |
| Herramientas de montaje | Sargento en C ×2   | Sargento en C ×2  |

> Los brazos deben estar ensamblados, montados, alimentados y conectados por USB. Si el ensamblaje no está completo, consulta [Paso 1: Ensamblar el brazo](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).

#### Cámaras
Se requieren dos cámaras: una para la vista superior y otra para la vista lateral o la vista del efector final.
<table>
  <thead>
    <tr>
      <th>Cámara</th>
      <th>Cámara de vista superior</th>
      <th>Cámara de vista lateral</th>
      <th>Cámara del efector final</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cantidad</td>
      <td>1</td>
      <td colspan="2">Elige la cámara de <em>vista lateral</em> o la del <em>efector final</em></td>
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
| Opción 1 | 1 | 1 | Más estable; admite recopilación a 120 FPS |
| Opción 2 | ❌ | 2 | Estable; admite todas las frecuencias de fotogramas de recopilación |
| Opción 3 | 2 | ❌ | Mantén la frecuencia de fotogramas en 60 FPS o menos; no se admite recopilación a 120 FPS y pueden producirse problemas de compatibilidad en algunos casos |

### 1.2 Ordenador y software

- Ordenador con Windows o macOS (el entrenamiento local requiere una GPU compatible)
- Conexión de red estable (para descargas, inicio de sesión, entrenamiento en la nube e inferencia)
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado
- Una [cuenta SenseCraft](https://account.seeed.cc/login) registrada, iniciada sesión dentro de SenseCraft Robotics


Para obtener instrucciones detalladas, consulta [Descarga de software y configuración de la cuenta](/es/sensecraft_robotics/#descarga-y-configuración-de-la-cuenta).

### 1.3 Escena y seguridad

- Marca dos posiciones fijas en la mesa: Punto A para la posición inicial del objeto y Punto B para su destino.
- Prepara un objeto de tamaño adecuado y fácil de agarrar, como un bloque rojo o un objeto blando.
- Asegúrate de que el Punto A, el Punto B, ambos brazos y el objeto estén dentro del campo de visión de las cámaras y no estén obstruidos.
- Despeja el área de trabajo del brazo de personas, desorden, cables y objetos frágiles. Ajusta el brazo líder para que no se acerque al brazo seguidor ni aparezca en la vista de la cámara del seguidor.
![Ejemplo de escena y seguridad](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)
> **Nota:** Esta imagen utiliza el brazo B601 DM como ejemplo. La configuración y la operación son las mismas para el B601 RS.
---
<span id="connect-arms"></span>

## 2. Conectar los brazos

> **Aviso de seguridad:**
> Desconecta la alimentación antes de conectar o desconectar cables JST, XT30 u otros cables. Enciende la alimentación solo después de confirmar que todos los cables están conectados correctamente.
> B601 RS y B601 DM tienen un aspecto similar. Asegúrate de distinguirlos.


### 2.1 Montar y conectar reBot Arm 102 (brazo líder)

![Montaje y conexión de reBot Arm 102 (brazo líder)](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)

#### Paso 1: Montar reBot Arm 102
Utiliza sargentos de carpintero para fijar reBot Arm 102 a una mesa plana. Empuja suavemente la base para confirmar que no se mueve.

#### Paso 2: Conectar los cables
Las conexiones constan de dos rutas:

* **Ruta de señal (brazo -> cable USB-C -> ordenador)**
  1. Prepara un cable USB-C para conectar el brazo al ordenador (**aún no lo conectes al ordenador; conéctalo cuando llegues al enlace del puerto serie y busques dispositivos**).

* **Ruta de alimentación (brazo -> fuente de alimentación de 12 V 2 A -> regleta)** 
  1. Conecta el **adaptador de alimentación de 12 V 2 A** al conector de alimentación del brazo.
  2. Conecta el adaptador a la regleta para encender el brazo.



---

### 2.2 Montar y conectar el B601 RS (brazo seguidor)
![Conexión de cables del B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-follower-wiring-overview-rs-en.webp)

#### Paso 4: Montar el B601 RS
Utiliza sargentos en C para fijar el B601 RS a una mesa plana. Gira suavemente el brazo hacia la izquierda y la derecha para confirmar que la base no se mueve.

#### Paso 5: Conectar los cables
Asegúrate de que la alimentación esté desconectada antes de empezar. Las conexiones constan de dos rutas:

* **Ruta de señal (brazo -> placa de separación de señal -> USB-CAN -> ordenador)**
  1. Utiliza un cable XT30 2+2 para conectar la base del brazo al módulo de separación de señal.
  2. Corta el cable de 2 pines. Conecta un extremo al módulo de separación de señal; conecta el cable rojo del otro extremo a H en el USB-CAN y el cable negro a L.
  3. Conecta un extremo del USB-CAN al ordenador a través del cable de extensión USB (**aún no lo conectes al ordenador; conéctalo cuando el enlace del puerto serie esté listo y busques dispositivos**).

* **Ruta de alimentación (brazo -> placa de separación de señal -> fuente de alimentación de 48 V 12,5 A -> toma de corriente)**
  1. Utiliza un cable XT30 2+2 para conectar la base del brazo al módulo de separación de señal.
  2. Utiliza el cable de alimentación XT30 para conectar el módulo de separación de señal a la fuente de alimentación de 48 V 12,5 A.
  3. Conecta la fuente de alimentación a la toma de corriente. Después de confirmar que el brazo está fijado, los cables son correctos y el área circundante está despejada, enciende la alimentación.

![Conectar la alimentación al B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-connect-follower-rs-en.webp)


---

<span id="project"></span>

## 3. Proyecto

Después de iniciar sesión, abre la página **Projects**. Crea un proyecto nuevo para el primer uso o abre un proyecto existente. En un proyecto, la **Project Overview** proporciona acceso a la configuración del dispositivo, la repetición de acciones, los conjuntos de datos, el entrenamiento, los modelos y la operación.

| Operación | Pasos |
|---|---|
| Crear un proyecto | Haz clic en **New Project** → introduce el nombre y la descripción del proyecto → haz clic en **Create and Start** |
| Abrir un proyecto existente | Selecciona un proyecto de la lista de proyectos → abre el proyecto |

![Ventana de nuevo proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-create-project-rs-en.webp)


### 3.1 Project Overview

**Project Overview** muestra el estado actual del proyecto, incluido el estado de conexión del brazo, la configuración del dispositivo, el conjunto de datos, el entrenamiento, el modelo y la operación.

Si la página muestra **Pending configuration** o **Not connected**, haz clic en **Go to Device Setup** para configurar los brazos.

![Descripción general del proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-1-device-selection-rs-en.webp)



<span id="device-setup"></span>

### 3.2 Device Setup

Device Setup se utiliza para la selección de dispositivos, el enlace de puertos serie, la calibración de brazos, la verificación de teleoperación y la configuración de cámaras.

#### 3.2.1 Seleccionar el modelo de dispositivo

En el paso **Device Pairing**, selecciona **reBot Arm 102 + B601 RS** y luego haz clic en **Next** para enlazar los puertos serie.

![Seleccionar reBot Arm 102 + B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-1-device-pairing-rs-en.webp)


#### 3.2.2 Enlazar los puertos serie USB para los brazos líder y seguidor



1. **Escaneo inicial**: Desconecta los cables USB de ambos brazos, haz clic en **Rescan** y registra los puertos serie que se muestran actualmente.
2. **Vincular el brazo líder**: Conecta el reBot Arm 102, haz clic en **Rescan** de nuevo y vincula el puerto serie que acaba de aparecer al brazo líder.
3. **Vincular el brazo seguidor**: Conecta el B601 RS, haz clic en **Rescan** de nuevo y vincula *PCAN channel (can0)* al brazo seguidor.
4. Confirma que ambos brazos muestren **Connected**, luego haz clic en **Next**.

![Vincular los puertos serie para los brazos líder y seguidor](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-2-serial-binding-rs-en.webp)

> **Vinculación del puerto serie y resolución de problemas:**
> - Después de cada escaneo, vincula solo el puerto serie que acaba de aparecer. No identifiques los dispositivos únicamente por sus números de COM.
> - Si no se muestra un puerto serie, vuelve a conectar el cable USB y escanea de nuevo. Si solo se muestra un puerto serie, comprueba el otro cable USB y la alimentación del dispositivo.


#### 3.2.3 Verificación de la calibración del brazo

1. Sigue el ejemplo en pantalla para mover los brazos líder y seguidor a la postura inicial y asegúrate de que el área de trabajo esté libre de obstáculos.
2. Haz clic en **Start Calibration** y sigue las instrucciones en pantalla para completar en secuencia los pasos de posición cero del líder, posición cero del seguidor y finalización de la calibración.
3. Si las posturas de los brazos no coinciden o la calibración falla, haz clic en **Recalibrate** y no continúes.

![Verificación de la calibración del brazo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)
*Nota: La ilustración usa un brazo DM como ejemplo. El procedimiento para el brazo RS es exactamente el mismo.*

> No realices teleoperación ni recopilación de datos antes de que la calibración se haya completado.

#### 3.2.4 Verificación de la teleoperación

La verificación de la teleoperación confirma que el brazo seguidor sigue correctamente al brazo líder. Si la dirección está invertida, el retardo es excesivo o el movimiento es discontinuo, comprueba los roles de los dispositivos, las vinculaciones de los puertos serie y el resultado de la calibración.

1. Haz clic en **Start Teleoperation**.
2. Mueve ligeramente el brazo líder y observa si el brazo seguidor se mueve de forma síncrona, sigue la misma dirección y se mueve con suavidad.
3. Después de comprobarlo, haz clic en **End Teleoperation** y selecciona una opción según el resultado:
   - **Normal**: haz clic en **Confirm Teleoperation Normal**;
   - **Abnormal**: haz clic en **Abnormal, Return to Recalibrate**.

![Verificación de la teleoperación](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)
*Nota: La ilustración usa un brazo DM como ejemplo. El procedimiento para el brazo RS es exactamente el mismo.*

> **Compensación de gravedad (opcional)**
> El brazo tiene cierto peso, por lo que ajustar manualmente el seguidor puede requerir esfuerzo. Cuando la compensación de gravedad está activada, el sistema compensa parte del peso, lo que facilita el movimiento del seguidor. Apaga la compensación de gravedad después del ajuste y antes de la verificación de la teleoperación.
> La compensación de gravedad sirve para ajustar el brazo seguidor; no controla el brazo seguidor para que siga al líder.

#### 3.2.5 Vincular las cámaras

Las cámaras registran información visual mientras el brazo realiza una tarea. Según la posición de montaje de la cámara, se usan habitualmente los dos siguientes diseños:
| Diseño | Instalación y propósito | Escenarios adecuados | Ilustración |
|:---|:---|:---|:---|
| Vista del efector final<br /> | <small><strong>Cámara de vista superior</strong>: montada sobre la parte frontal de la mesa de trabajo para cubrir el área de trabajo.<br /><br /><strong>Cámara del efector final</strong>: montada cerca del efector final para observar los detalles de agarre.</small> | <small>Operaciones finas que requieren observar el contacto entre el efector final y el objeto.</small> | ![Diseño de vista del efector final](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-in-hand-rs-en.webp)<br /><small>*Nota: Puedes diseñar tu propio soporte de cámara 3D.</small> |
| Asistencia de vista lateral<br /> | <small><strong>Cámara de vista superior</strong>: montada sobre la parte frontal de la mesa de trabajo para cubrir el área de trabajo.<br /><br /><strong>Cámara de vista lateral</strong>: montada en la parte frontal lateral de la mesa de trabajo para observar la altura del brazo y el movimiento del efector final.</small> | <small>Tareas como agarrar, manipular y colocar.</small> | ![Diseño de asistencia de vista lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-to-hand-rs-en.webp) |

Este tutorial utiliza el **diseño de asistencia de vista lateral**. Después de instalar y posicionar las cámaras:

1. Conecta las cámaras al ordenador y haz clic en **Rescan**.
2. Selecciona los flujos de vídeo correspondientes en las áreas **Front Camera** y **Side Camera**.
3. Comprueba ambas ventanas de vista previa para confirmar que los brazos, el objeto y la posición objetivo sean claramente visibles. Haz clic en **Next** después de confirmarlo.

![Vincular las cámaras frontal y lateral](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> Para comprobar si las cámaras corresponden a sus posiciones de montaje, haz clic en **View Camera Layout**. Si la vista previa está en negro o es anómala, vuelve a escanear, reinicia las cámaras o cambia los puertos USB.


<span id="action-replay"></span>

### 3.3 Repetición de acciones

**Action Replay** registra las acciones del brazo mediante enseñanza con el brazo líder y las guarda en la lista de acciones para su reproducción. Después de grabar, comprueba si la acción es continua y si la dirección del movimiento y la apertura y cierre del efector final son correctos.

| Función | Operación | Propósito |
|---|---|---|
| Grabar una acción | Haz clic en **+** para crear una acción → usa el brazo líder para controlar el seguidor a través de la tarea <br />Haz clic en **Stop Recording** → guardar | Registrar acciones objetivo como agarrar, mover y colocar |
| Reproducir una acción | Haz clic en **Replay** | Comprobar que la acción sea completa y continua, y confirmar la dirección del movimiento y la apertura y cierre del efector final |
> Antes de grabar una acción por primera vez, completa la conexión del dispositivo y la verificación de la teleoperación en **Device Setup**, y haz clic en **Confirm Teleoperation Normal**. Si la reproducción es anómala, elimina la acción y grábala de nuevo.

![Lista de acciones y operación de reproducción](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-3-action-replay-rs-en.webp)


<span id="dataset"></span>

### 3.4 Conjunto de datos

**Dataset** se utiliza para crear tareas de recopilación y para registrar, inspeccionar, limpiar y fusionar episodios de tareas. Recomendamos recopilar datos en pequeños lotes para detectar pronto desconexiones, problemas de software o saltos de vídeo y reducir el riesgo de perder todos los datos por un único fallo.

- Registra unos 10 episodios de tarea por lote;
- Después de completar 2–3 lotes, conserva unos 20–30 episodios válidos para la primera ejecución de entrenamiento;
- Añade más datos para tareas complejas según los resultados del entrenamiento.

#### 3.4.1 Configurar una tarea de recopilación de datos

Ve a **Dataset** → **Collect Data** e introduce la información de la tarea. Si se van a fusionar varios conjuntos de datos, las descripciones de la tarea para todos los lotes deben ser exactamente iguales. Antes de la recopilación, mantén lo más constantes posible las posiciones A y B, la categoría del objeto, las posiciones de las cámaras, el fondo de la mesa y las condiciones de iluminación.

| Campo | Valor de ejemplo | Instrucciones |
|---|---|---|
| Nombre del conjunto de datos | `RS arm pick object from A to B-01` | Usa el formato “dispositivo + tarea + lote” |
| Descripción de la tarea | `Move the object from the left to the right` | Indica claramente el objetivo de la tarea; las descripciones deben ser exactamente iguales cuando se fusionen los lotes |
| Número de episodios | `10` | Cada episodio debe contener una tarea completa |
| Duración por episodio | `20`–`30` segundos | Cubre la secuencia completa de acciones |
| Duración de descanso | `5` segundos | Permite que el brazo se reinicie y que se ajuste la escena |

![Configurar una tarea de recopilación de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-1-dataset-config-rs-en.webp)

#### 3.4.2 Registrar episodios de tareas

Registrar episodios de tareas es el núcleo de los datos de entrenamiento. Cada episodio debe registrar completamente el proceso de agarrar el objeto en el Punto A, moverlo al Punto B y soltarlo. Para ayudar al modelo a aprender rápidamente, mantén el procedimiento de la tarea generalmente consistente. Para mejorar la generalización, añade datos con diferentes posiciones, ángulos y variaciones de movimiento.

1. Coloca el objeto en el Punto A, confirma que el brazo esté en su postura inicial y haz clic en **Start Recording**.
2. Usa el brazo líder para controlar al seguidor a través de la tarea y luego devuelve el brazo a su postura inicial.
3. Después de completar la tarea, espera a que termine el tiempo restante o haz clic en la flecha (o pulsa la barra espaciadora) para finalizar el episodio actual antes de tiempo.
4. Durante el período de descanso, devuelve el objeto al Punto A y asegúrate de que el brazo esté listo. Inicia el siguiente episodio cuando termine el período de descanso.

![Registrar episodios de tareas](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-2-recording-episode-rs-en.webp)

> **Recordatorio importante ⚠️**
>
> - Antes de la recopilación, ajusta y fija las cámaras. **Asegúrate de que los brazos, el efector final, el objeto y los Puntos A y B sean visibles.**
> - Las acciones clave no deben quedar 🚫 obstruidas ni fuera del campo de visión de la cámara, o los datos podrían no ser utilizables para el entrenamiento.
> - Si una tarea falla, el objeto no se agarra con seguridad, el vídeo se entrecorta o una cámara queda obstruida, haz clic en **Record Again** o pulsa `Esc` para detener la recopilación.
> - Puedes completar primero el lote actual y luego inspeccionar y eliminar los episodios anómalos.
> - Si el brazo se comporta de forma inesperada o hay riesgo de colisión, detente 🛑 inmediatamente.

#### 3.4.3 Inspeccionar, eliminar y fusionar datos

Después de la recopilación, inspecciona los episodios anómalos, elimina los datos no válidos y fusiona varios conjuntos de datos cuando sea necesario.

| Operación | Método | Descripción |
|---|---|---|
| Inspeccionar episodios anómalos | Selecciona un episodio y reproduce el vídeo o repite la acción | Confirma que la tarea esté completa y que la acción del efector final sea normal. Puedes anotar los números de episodios anómalos durante la grabación e inspeccionarlos directamente después |
| Eliminar episodios anómalos | Haz clic en **Batch Delete Episodes**, selecciona los episodios anómalos y confirma; luego haz clic en **Generate Deleted Copy** | Introduce un nuevo nombre de conjunto de datos y confirma. El conjunto de datos original no se sobrescribirá |
| Fusionar conjuntos de datos | Haz clic en **Merge**, selecciona los conjuntos de datos e introduce un nuevo nombre de conjunto de datos | Fusiona conjuntos de datos con descripciones de tarea, combinaciones de dispositivos y configuraciones de cámaras coincidentes |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect the dataset](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-check-rs-en.webp)


<figcaption>Inspeccionar el conjunto de datos</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-delete-rs-en.webp)


<figcaption>Eliminar episodios anómalos</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-merge-rs-en.webp)


<figcaption>Combinar conjuntos de datos</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 Entrenamiento

El entrenamiento genera un modelo de acción para el brazo (es decir, un programa de control de acciones creado a partir de los datos de enseñanza). SenseCraft Robotics lee los datos de la tarea registrada, analiza cómo el brazo realiza la acción objetivo y genera un modelo que puede utilizarse para la operación autónoma.

Utiliza la siguiente tabla para configurar los parámetros de entrenamiento:

| Parámetro | Opción / valor | Detalles |
| :--- | :--- | :--- |
| **Hardware de entrenamiento** | Cloud · automatically select GPU | Utiliza un servidor en la nube para el entrenamiento y consume los créditos correspondientes. |
| | Local · free | Utiliza el ordenador actual para el entrenamiento. No se consumen créditos, pero se requiere una GPU local compatible. |
| **Conjunto de datos de entrenamiento** | Seleccionar el conjunto de datos objetivo | Selecciona el conjunto de datos que registraste y preparaste para esta ejecución de entrenamiento. |
| **Política** | ACT | La política de control de acciones predeterminada actualmente compatible. |
| **Pasos de entrenamiento** | `10000` | Se recomienda 10 000 como valor inicial. Ajústalo más adelante según el rendimiento real del modelo. |

> **Aviso sobre créditos**
> El entrenamiento en la nube con **Cloud · automatically select GPU** consume créditos. El entrenamiento **Local · free** no consume créditos de entrenamiento en la nube. Consulta las [Reglas de créditos](/es/sensecraft_robotics/#créditos) para obtener información sobre cómo conseguir y utilizar créditos.

**Pasos de entrenamiento y recuento de episodios recomendados:**

| Dificultad de la tarea | Descripción de la tarea | Episodios recomendados | Pasos de entrenamiento recomendados |
|---|---|---:|---:|
| Principiante | Punto fijo A a punto B | Alrededor de 20 | 10 000–15 000 pasos |
| Intermedio | Agarrar y colocar en posiciones aleatorias | Alrededor de 50 | 30 000–40 000 pasos |
| Avanzado | Varios pasos o larga duración | Alrededor de 100 | 80 000–100 000 pasos |

> **Duración del entrenamiento**: El tiempo total de entrenamiento depende tanto del **modelo de GPU** seleccionado como del **número de pasos de entrenamiento**. Por ejemplo, entrenar durante 20 000 pasos (20K) en la nube suele tardar desde varios minutos hasta decenas de minutos en la mayoría de las GPU. Entrenar durante 100 000 pasos (100K) tarda aproximadamente cinco veces más que entrenar durante 20K pasos.

Después de confirmar la configuración, haz clic en **Start Training**. Una vez iniciado el entrenamiento, visualiza el progreso y el historial de entrenamiento en la lista **Current Training Tasks**.

![Training configuration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-5-training-rs-en.webp)

<span id="model"></span>

### 3.6 Modelo

**Modelo** se utiliza para ver los resultados del entrenamiento y seleccionar un modelo para la operación posterior. Antes de usarlo, confirma que el entrenamiento esté completo y que la combinación de tarea y dispositivo coincida con el proyecto actual.

![Model list](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-6-model-rs-en.webp)

<span id="run"></span>

### 3.7 Operación

**Operación** carga un modelo entrenado en los brazos para verificar si puede completar la tarea correctamente.

**Pasos:**
1. **Seleccionar un modelo**: Selecciona un modelo etiquetado como **Supports current arm**.
2. **Seleccionar un método de inferencia**: Selecciona **Cloud Inference** o **Local Inference**, y luego configura los parámetros correspondientes.
3. **Iniciar la inferencia**: Después de confirmar la configuración, haz clic en **Start Cloud/Local Inference**.

**Diferencias clave entre la inferencia en la nube y la inferencia local:**
| Comparación | Inferencia en la nube | Inferencia local |
| :--- | :--- | :--- |
| **Hardware de cómputo** | Utiliza una GPU en la nube de alto rendimiento para la inferencia. | Utiliza la CPU local del ordenador (la plataforma actual no admite el uso de una GPU local). |
| **Impacto en el rendimiento** | La potencia de cómputo generalmente no es una limitación, pero los resultados dependen en gran medida de la **calidad de la transmisión de red**. | Los resultados dependen de la **potencia de cómputo de la CPU local**. |
| **Parámetros** | **Action chunks (predeterminado 120):** número de pasos de acción predichos en una inferencia. <br />**Chunk threshold (predeterminado 0.9):** afecta la suavidad y precisión del movimiento. Un valor más alto hace que el brazo sea más cauteloso y puede causar pausas; un valor más bajo hace que el movimiento sea más fluido pero puede aumentar los errores.<br />**(Normalmente se recomiendan los valores predeterminados.)** | **Run count:** número total de veces (episodios) que se repetirá la tarea. <br />**Time limit per run (seconds):** duración máxima de una ejecución de la tarea; la ejecución finaliza automáticamente cuando se agota el tiempo.<br />**(Normalmente se recomiendan los valores predeterminados.)** |
| **Salida de datos** | Solo realiza la verificación de inferencia. | Genera automáticamente un conjunto de datos correspondiente a partir de las ejecuciones de inferencia después de que finaliza la operación. |
| **Coste y limitaciones** | Sujeto a la tarificación de la plataforma; la mayor potencia de cómputo es adecuada para comenzar rápidamente. | Normalmente no consume créditos en la nube, pero está limitado por el rendimiento de la CPU local. |

**Notas**
- Antes de comenzar: Confirma que los brazos estén conectados correctamente y que el área de trabajo sea segura.
- Durante la operación: No desconectes ni desarmes los brazos y observa si sus movimientos son normales.
- Si el resultado no es satisfactorio: Vuelve a **Dataset**, elimina los episodios anómalos, añade datos válidos y entrena de nuevo.

![Model operation interface](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-7-run-rs-en.webp)
