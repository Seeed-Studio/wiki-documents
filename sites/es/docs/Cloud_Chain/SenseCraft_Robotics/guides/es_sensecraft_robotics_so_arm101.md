---
title: Guía de entrenamiento SO-ARM101
description: Configura SO-ARM101 con SenseCraft Robotics, conecta y calibra los brazos, recopila demostraciones, entrena un modelo y valida la inferencia.
keywords:
  - SenseCraft Robotics
  - SO-ARM101
  - robot arm
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/00-task-overview-soarm-en.webp
slug: /sensecraft_robotics_so_arm101
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

Este tutorial utiliza un brazo SO-ARM101 Leader y un brazo SO-ARM101 Follower con SenseCraft Robotics. Cubre el flujo de trabajo completo desde la creación del proyecto y la configuración del dispositivo hasta la recopilación de datos, el entrenamiento del modelo y la operación.

La tarea de ejemplo consiste en recoger un objeto en el Punto A y colocarlo en el Punto B. Se proporciona solo para explicar el procedimiento. Los usuarios pueden diseñar otros escenarios de aplicación, como clasificación, manipulación, empaquetado, pulsación de botones o conectar y desconectar.

![Ejemplo de tarea de pick-and-place con SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/00-task-overview-soarm-en.webp)

> **Nota de versión**
> Los nombres de las interfaces, la ubicación de los botones y los backends de entrenamiento pueden cambiar según las versiones de SenseCraft Robotics. Los puertos serie como COM21, COM35, COM3 y COM6, así como los nombres de conjuntos de datos, son ejemplos de un vídeo. Utiliza siempre los dispositivos detectados por el ordenador actual.

## Descripción general del tutorial

Este tutorial sigue el orden de configuración de hardware y operación de software:

| Capítulo | Etapa | Contenido clave |
| :--- | :--- | :--- |
| Capítulo 1 | **Preparación** | Lista de hardware, requisitos de ordenador y software, comprobaciones de escena y seguridad |
| Capítulo 2 | **Conectar los brazos** | Montaje físico y conexiones de cables |
| Capítulo 3 | **Flujo de trabajo del software** | **Flujo de trabajo principal**: configuración del dispositivo ➔ recopilación de datos ➔ entrenamiento del modelo ➔ despliegue y operación |


---

<span id="preparation"></span>

## 1. Preparación

### 1.1 Hardware

![Lista de hardware SO-ARM101 Pro](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

La siguiente lista se basa en la **Lista de piezas** oficial suministrada con el kit SO-ARM101.

#### Accesorios del Leader y del Follower

| Elemento | Leader | Follower |
|---|---|---|
| Brazo  [Buy now](https://www.seeedstudio.com/SO-101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html?utm_source=sensecraft_wiki&utm_medium=socil) | Brazo Leader negro ensamblado ×1| Brazo Follower blanco ensamblado ×1 |
| Placa de control de servos LeRobot | ×1 | ×1 |
| Cable de alimentación | Cable de alimentación de 5 V (multi-cabezal) ×1 | Pro: cable de alimentación de 12 V ×1; Standard: 5 V |
| Cable de datos | Cable de datos USB-C ×1 | Cable de datos USB-C ×1 |
| Cable adaptador de alimentación DC | ×1 | ×1 |
| Abrazadera de montaje | ×2 | ×2 |

#### Materiales y accesorios compartidos

| Accesorio | Cantidad | Descripción |
|---|---:|---|
| Piezas de garra flexible | ×1 | Instaladas en el extremo del brazo |
| Cámara USB de 32 × 32 mm | ×2 | Se requieren dos cámaras. El kit incluye una; prepara una segunda cámara por separado. Los datos de entrenamiento deben contener dos vistas. |
| Destornillador | ×1 | Para montaje y ajuste |
| Alfombrilla de ratón | ×1 | Protege y estabiliza la superficie de trabajo |

> Los brazos deben estar ensamblados, montados, alimentados y conectados por USB. Si el montaje no está completo, consulta [Paso 1: Montar el brazo](https://wiki.seeedstudio.com/cn/lerobot_so100m/#%E6%A0%A1%E5%87%86%E8%88%B5%E6%9C%BA%E5%B9%B6%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82).

#### Notas sobre alimentación y conexiones

- **Versión Standard:** tanto el Leader como el Follower usan alimentación de **5 V**.
- **Versión Pro:** el Leader usa **5 V** y el Follower usa **12 V**. No los intercambies.
- Comprueba la tensión de entrada, la tensión de salida y la corriente nominal en la etiqueta del adaptador y en la documentación oficial del producto para la versión aplicable.

### 1.2 Ordenador y software

- Ordenador con Windows o macOS. El entrenamiento local requiere una GPU compatible.
- Conexión de red estable para descargas, inicio de sesión, entrenamiento en la nube e inferencia.
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) instalado.
- Una [cuenta SenseCraft](https://account.seeed.cc/login) registrada, iniciada sesión dentro de SenseCraft Robotics.

Para obtener instrucciones detalladas, consulta [Descarga de software y configuración de cuenta](/es/sensecraft_robotics/#download-and-account).

### 1.3 Escena y seguridad

- Marca dos posiciones fijas en la mesa: Punto A para la posición inicial del objeto y Punto B para su destino.
- Prepara un objeto de tamaño adecuado que sea fácil de agarrar, como un bloque rojo o un objeto blando.
- Asegúrate de que el Punto A, el Punto B, ambos brazos y el objeto sean visibles en las vistas de la cámara y no estén obstruidos.
- Despeja el espacio de trabajo del brazo de personas, desorden, cables y objetos frágiles. Mantén el Leader alejado del Follower y fuera del campo de visión de la cámara del Follower.

![Ejemplo de escena y seguridad de la tarea](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp)

---

<span id="connect-arms"></span>

## 2. Conectar los brazos

> **Aviso de seguridad:**
> Desconecta la alimentación antes de instalar, conectar o retirar los brazos. Confirma que los brazos estén seguros, que los cables estén conectados correctamente y que el espacio de trabajo esté despejado antes de restablecer la alimentación. Nunca conectes ni desconectes la interfaz de alimentación mientras esté energizada.

### 2.1 Instalar los cuerpos de los brazos

#### Paso 1: Montar el Leader y el Follower

1. Coloca el SO-ARM101 Leader y el Follower sobre una mesa o plataforma de montaje estable y nivelada.
2. Utiliza las cuatro abrazaderas del kit para fijar los dos brazos, usando dos abrazaderas por brazo. Empuja suavemente cada base para confirmar que no pueda deslizarse ni volcarse.
3. Mantén una distancia segura entre los brazos y deja libre todo el rango de movimiento para cada articulación.
4. Con la alimentación desconectada, mueve lentamente cada articulación a mano para confirmar un movimiento suave sin colisiones, atascos ni contacto con los límites mecánicos.

![Instalar los cuerpos de los brazos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

### 2.2 Instalar las placas de control y conectar USB-C

#### Paso 2: Instalar las placas de control

1. Instala una placa de control de servos LeRobot en cada brazo. Alinea la placa con la ranura en la base del brazo, comprueba la orientación del conector e instálala firmemente. No la fuerces en la dirección inversa.
2. Comprueba que los cables entre cada placa de control y los servos estén completamente insertados y que no estén sueltos, doblados bruscamente, pellizcados o conectados a la interfaz incorrecta.

#### Paso 3: Conectar los cables de datos

Las conexiones de datos son:

* **Leader:** SO-ARM101 Leader → cable de datos USB-C → ordenador
* **Follower:** SO-ARM101 Follower → cable de datos USB-C → ordenador

Utiliza un cable USB-C para conectar cada placa de control al ordenador. Para facilitar la identificación de los puertos serie, conecta primero los extremos del brazo y conecta los extremos del ordenador uno por uno durante el paso de vinculación de puertos serie en la Sección 3.2.2.

![Instalar las placas de control](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

### 2.3 Instalar las interfaces de alimentación y encender

#### Paso 4: Instalar las interfaces de alimentación

1. Confirma que los adaptadores de alimentación no estén conectados a la red eléctrica.
2. Inserta cada cable adaptador de alimentación DC en la interfaz de alimentación del brazo y aprieta el collar de bloqueo en el sentido de las agujas del reloj.
3. Comprueba los requisitos de alimentación: **Pro** usa 5 V para el Leader y 12 V para el Follower; **Standard** usa 5 V para ambos brazos. No mezcles las tensiones.
4. Confirma que cada conector esté bloqueado y que los cables no puedan entrar en el rango de movimiento de las articulaciones.

#### Paso 5: Encender

1. Conecta ambos adaptadores de alimentación al enchufe y enciéndelos.
2. Observa los indicadores de la placa de control. Si un indicador está apagado, parpadea de forma anómala, se calienta o produce olor, desconecta la alimentación inmediatamente e inspecciona el sistema.
3. USB-C se utiliza solo para la comunicación de datos. La alimentación y el USB-C deben estar conectados durante el escaneo de dispositivos, la calibración y la teleoperación.

![Instalar las interfaces de alimentación](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)


<span id="project"></span>

## 3. Flujo de trabajo del proyecto

Después de iniciar sesión, abre la página **Projects**. Crea un proyecto para el primer uso o abre un proyecto existente. La vista general del proyecto proporciona acceso a la configuración del dispositivo, la repetición de acciones, los conjuntos de datos, el entrenamiento, los modelos y la operación.

| Operación | Pasos |
|---|---|
| Crear un proyecto | Haz clic en **New Project** → introduce el nombre y la descripción del proyecto → haz clic en **Create and Start** |
| Abrir un proyecto existente | Selecciona un proyecto de la lista de proyectos → ábrelo |

![Crear un proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### 3.1 Vista general del proyecto

La **Project Overview** muestra el estado actual de los brazos, la configuración del dispositivo, los conjuntos de datos, el entrenamiento, los modelos y la operación.

Si la página muestra **To be configured** o **Not connected**, haz clic en **Go to Device Setup** para configurar los brazos.

![Vista general del proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-1-project-overview-soarm-en.webp)

<span id="device-setup"></span>

### 3.2 Configuración del dispositivo

Device Setup se utiliza para la selección de dispositivos, vinculación de puertos serie, calibración de brazos, verificación de teleoperación y configuración de cámaras.

#### 3.2.1 Seleccionar el modelo de dispositivo

En el paso **Device Pairing**, selecciona **SO-ARM101 + SO-ARM101**, luego haz clic en **Next** para vincular los puertos serie.

![Seleccionar SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

#### 3.2.2 Vincular los puertos serie USB

1. **Escaneo inicial:** Desconecta los cables USB de ambos brazos, haz clic en **Rescan** y anota los puertos que se muestran actualmente.
2. **Vincular el Leader:** Conecta el SO-ARM101 Leader, haz clic de nuevo en **Rescan** y vincula el puerto que aparezca nuevo al Leader.
3. **Vincular el Follower:** Conecta el SO-ARM101 Follower, haz clic de nuevo en **Rescan** y vincula el puerto que aparezca nuevo al Follower.
4. Confirma que ambos brazos muestren **Connected**, luego haz clic en **Next**.

![Vincular los puertos serie del Leader y del Follower](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

> **Solución de problemas de puertos serie:**
> - Después de cada escaneo, vincula solo el puerto que aparezca nuevo. No identifiques los dispositivos únicamente por sus números de COM.
> - Si no se muestra un puerto, vuelve a conectar el cable USB y escanea de nuevo. Si solo se muestra un puerto, comprueba el otro cable USB y la alimentación del dispositivo.

#### 3.2.3 Verificación de la calibración del brazo

La página de calibración proporciona **Calibración automática** y **Calibración manual**. Antes de comenzar, mueve el Leader y el Follower a la postura media que se muestra en el ejemplo en pantalla y despeja el espacio de trabajo del brazo.

##### Calibración automática

La calibración automática identifica automáticamente el rango de recorrido de las articulaciones. Es adecuada para brazos SO-ARM101 cuyas articulaciones tienen topes físicos fiables.

1. Retira cualquier carga del Leader y del Follower, y confirma que no haya obstáculos en el espacio de trabajo del brazo.
2. Sigue el ejemplo en pantalla y mueve lentamente cada articulación en secuencia para que el Leader y el Follower queden aproximadamente verticales y alineados en la posición media.
3. Confirma que todas las articulaciones que se van a calibrar tienen topes físicos fiables y, a continuación, selecciona la casilla de confirmación en la página.
4. Haz clic en **Start Calibration** y espera a que el sistema identifique el rango de recorrido de las articulaciones y complete la calibración.

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![ calibration selection](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-calibration0-soarm-en.webp)


<figcaption>Selección del modo de calibración</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-automatic-calibration-soarm-en.webp)


<figcaption>Calibración manual</figcaption>
</figure>

</div>

##### Calibración manual

Si una articulación no tiene un tope físico fiable, o si necesitas confirmar la posición media y el recorrido de la articulación paso a paso usando la guía en pantalla, selecciona Calibración manual.

1. Mantén el Leader encendido y listo para la guía manual. Confirma que no haya obstáculos en el espacio de trabajo del brazo.
2. Sigue el ejemplo en pantalla y mueve lentamente cada articulación del Leader cerca de la mitad de su rango de recorrido.
3. Después de confirmar que la postura del Leader es correcta, haz clic en **Start Calibration**.
4. Sigue las instrucciones en pantalla para confirmar las posiciones medias y el recorrido de las articulaciones del Leader y del Follower en secuencia.

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-manual-calibration-soarm-en.webp)


<figcaption>Calibración manual</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Manual calibration](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-3-calibration2-soarm-en.webp)


<figcaption>Calibración manual</figcaption>
</figure>

</div>

> No realices teleoperación ni recopilación de datos durante la calibración. Si la postura del brazo es anormal, una articulación está obstruida o la calibración falla, detén la calibración de inmediato, comprueba la posición del brazo y el espacio de trabajo, e inténtalo de nuevo.

#### 3.2.4 Verificación de la teleoperación

La verificación de la teleoperación confirma que el Follower sigue correctamente al Leader. Si la dirección está invertida, el retardo es excesivo o el movimiento es discontinuo, comprueba los roles de los dispositivos, la vinculación del puerto serie y el resultado de la calibración.

1. Haz clic en **Start Teleoperation**.
2. Mueve ligeramente el Leader y observa si el Follower se mueve de forma síncrona, sigue la misma dirección y se mueve con suavidad.
3. Haz clic en **End Teleoperation** después de la comprobación y, a continuación, selecciona el resultado:
   - **Normal:** haz clic en **Confirm Teleoperation Normal**.
   - **Anormal:** haz clic en **Abnormal, Return to Recalibrate**.

![Teleoperation verification](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

> **Compensación de gravedad (opcional)**
> Los brazos tienen cierto peso, por lo que ajustar manualmente el Follower puede requerir esfuerzo. La compensación de gravedad compensa parte del peso y facilita el ajuste. Apágala después del ajuste y antes de la verificación de la teleoperación. La compensación de gravedad sirve para ajustar el Follower; no controla que el Follower siga al Leader.

#### 3.2.5 Vincular las cámaras

Se requieren dos cámaras y dos vistas para la recopilación de datos y el entrenamiento del modelo. Según la posición de montaje, las disposiciones habituales son:

| Disposición | Instalación y propósito | Escenarios adecuados | Ilustración |
|:---|:---|:---|:---|
| Vista del efector final | **Cámara cenital:** montada sobre la parte frontal del banco de trabajo para cubrir el área de trabajo.<br /><br />**Cámara del efector final:** montada cerca del efector final para observar los detalles de agarre. | Operaciones finas que requieren observar el contacto entre el efector final y el objeto. | ![Gripper-view layout](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-in-hand-soarm-en.webp)<br /><small>*Nota: Puedes diseñar tu propio soporte 3D para la cámara.*</small> |
| Asistencia de vista lateral | **Cámara cenital:** montada sobre la parte frontal del banco de trabajo para cubrir el área de trabajo.<br /><br />**Cámara lateral:** montada en el lateral frontal del banco de trabajo para observar la altura del brazo y el movimiento del efector final. | Tareas como agarrar, manipular y colocar. | ![Side-view assistance layout](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp) |

Este tutorial utiliza la **disposición de asistencia de vista lateral**. Conecta ambas cámaras, instálalas y colócalas y, a continuación:

1. Conecta las cámaras al ordenador y haz clic en **Rescan**.
2. Selecciona los flujos de vídeo correspondientes en las áreas **Front Camera** y **Side Camera**.
3. Comprueba ambas previsualizaciones para confirmar que los brazos, el objeto y la posición objetivo sean claramente visibles. Haz clic en **Next** después de confirmar.

![Bind the front and side cameras](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

> Para confirmar que cada cámara coincide con su posición de montaje, haz clic en **View Camera Layout**. Si una previsualización está en negro o es anormal, vuelve a escanear, reinicia la cámara o cambia el puerto USB.

<span id="action-replay"></span>

### 3.3 Repetición de acciones

**Action Replay** registra las acciones del brazo mediante enseñanza con el Leader y las guarda en la lista de acciones para su repetición. Después de grabar, comprueba si la acción es continua y si la dirección del movimiento y la apertura y cierre del efector final son correctos.

| Función | Operación | Propósito |
|---|---|---|
| Grabar una acción | Haz clic en **+** para crear una acción → usa el Leader para controlar el Follower → haz clic en **Stop Recording** para guardar | Grabar acciones de agarre, movimiento y colocación |
| Repetir una acción | Haz clic en **Replay** | Comprobar que la acción sea completa y continua, y que la dirección del movimiento y la acción del efector final sean correctas |

> Antes de grabar una acción por primera vez, completa la configuración del dispositivo y la verificación de la teleoperación, y luego haz clic en **Confirm Teleoperation Normal**. Si la repetición es anormal, elimina la acción y grábala de nuevo.

![Action list and replay](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

<span id="dataset"></span>

### 3.4 Conjunto de datos

**Dataset** se utiliza para crear tareas de recopilación y registrar, inspeccionar, limpiar y fusionar episodios de tareas. Se recomienda un enfoque de pequeños lotes y múltiples sesiones para que las desconexiones, problemas de software o tirones de vídeo puedan detectarse pronto.

- Primero registra unos 10 episodios de tarea por lote.
- Después de 2–3 lotes, conserva unos 20–30 episodios válidos para la primera ejecución de entrenamiento.
- Añade más datos para tareas complejas según los resultados del entrenamiento.

#### 3.4.1 Configurar una tarea de recopilación de datos

Abre **Dataset** → **Collect Data** e introduce la información de la tarea. Si se van a fusionar conjuntos de datos, sus descripciones de tarea deben ser exactamente iguales. Mantén las posiciones A/B, la categoría del objeto, las posiciones de las cámaras, el fondo de la mesa y la iluminación lo más estables posible.

| Campo | Ejemplo | Guía |
|---|---|---|
| Nombre del conjunto de datos | `SO-ARM101 pick-and-place A-to-B-01` | Usa la convención de nombres “dispositivo + tarea + lote” |
| Descripción de la tarea | `Move the object from the left to the right` | Indica claramente el objetivo de la tarea; las descripciones deben coincidir exactamente al fusionar |
| Número de episodios | `10` | Cada episodio completa una tarea completa |
| Duración por episodio | `20`–`30` segundos | Cubre la acción completa |
| Duración de descanso | `5` segundos | Restablece los brazos y la escena |

![Configure a data-collection task](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

#### 3.4.2 Registrar episodios de tareas

Cada episodio debe registrar el proceso completo de agarrar el objeto en el Punto A, moverlo al Punto B y soltarlo. Mantén el procedimiento coherente; añade pequeños cambios en la posición, el ángulo y el movimiento solo cuando se requiera mayor capacidad de generalización.

1. Coloca el objeto en el Punto A, confirma la postura inicial y haz clic en **Start Recording**.
2. Usa el Leader para controlar el Follower a través de la tarea y luego devuelve el brazo a la postura inicial.
3. Después de completar la tarea, espera el tiempo restante o haz clic en ➡ (o pulsa la barra espaciadora) para finalizar el episodio antes de tiempo.
4. Durante el período de descanso, devuelve el objeto al Punto A y prepara el brazo para el siguiente episodio.

![Record task episodes](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

> **Importante**
> - Asegura las cámaras antes de la recopilación. Los brazos, el efector final, el objeto y los Puntos A y B deben permanecer visibles en ambas vistas.
> - No permitas que las acciones clave queden bloqueadas o salgan de las vistas de la cámara.
> - Si la tarea falla, el objeto no se sujeta de forma segura, el video se entrecorta o una cámara queda bloqueada, haz clic en **Record Again** o presiona `Esc` para detener la recopilación.
> - Puedes terminar primero el lote y luego inspeccionar y eliminar los episodios anómalos.
> - Detente inmediatamente si hay pérdida de control o riesgo de colisión.

#### 3.4.3 Inspeccionar, eliminar y fusionar datos

Después de la recopilación, inspecciona los episodios anómalos, elimina los datos no válidos y fusiona los conjuntos de datos compatibles cuando sea necesario.

| Operación | Método | Descripción |
|---|---|---|
| Inspeccionar episodios anómalos | Selecciona un episodio y reproduce el video o la repetición de acciones | Verifica la finalización de la tarea y el movimiento de la pinza |
| Eliminar episodios anómalos | Haz clic en **Batch Delete Episodes**, selecciona los episodios, confirma y haz clic en **Generate Deleted Copy** | Cambia el nombre del nuevo conjunto de datos; el conjunto de datos original no se sobrescribe |
| Fusionar conjuntos de datos | Haz clic en **Merge**, selecciona los conjuntos de datos e introduce un nuevo nombre de conjunto de datos | Fusiona conjuntos de datos con descripciones de tarea, combinaciones de dispositivos y configuraciones de cámara coincidentes |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspeccionar conjunto de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)


<figcaption>Inspeccionar conjunto de datos</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Eliminar episodios anómalos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-delete-soarm-en.webp)


<figcaption>Eliminar episodios anómalos</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Fusionar conjuntos de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-merge-soarm-en.webp)


<figcaption>Fusionar conjuntos de datos</figcaption>
</figure>

</div>

<span id="training"></span>

### 3.5 Entrenamiento

El entrenamiento genera un modelo de acción a partir de los datos de enseñanza. SenseCraft Robotics lee los datos de tarea registrados, analiza cómo el brazo realiza la acción objetivo y genera un modelo para la operación autónoma.

| Parámetro | Opción / valor | Detalles |
| :--- | :--- | :--- |
| **Hardware de entrenamiento** | Cloud · automatically select GPU | Usa un servidor en la nube y consume los créditos correspondientes. |
| | Local · free | Usa el ordenador actual y requiere una GPU local compatible. |
| **Conjunto de datos de entrenamiento** | Selecciona el conjunto de datos objetivo | Selecciona un conjunto de datos registrado y preparado. |
| **Política** | ACT | Política de control de acciones predeterminada actual. |
| **Pasos de entrenamiento** | `10000` | Recomendado como valor inicial; ajústalo según los resultados. |

> **Aviso sobre créditos**
> El entrenamiento en la nube consume créditos; el entrenamiento local no consume créditos de entrenamiento en la nube. Consulta la información sobre créditos en [Credit rules](/es/sensecraft_robotics/#reglas-de-créditos).

**Pasos de entrenamiento y recuento de episodios recomendados:**

| Dificultad de la tarea | Descripción de la tarea | Episodios recomendados | Pasos recomendados |
|---|---|---:|---:|
| Principiante | Punto fijo A a Punto B | Alrededor de 20 | 10,000–15,000 |
| Intermedio | Agarrar y colocar en posiciones aleatorias | Alrededor de 50 | 30,000–40,000 |
| Avanzado | Múltiples pasos o larga duración | Alrededor de 100 | 80,000–100,000 |

> **Duración del entrenamiento:** El tiempo total de entrenamiento depende del modelo de GPU seleccionado y del número de pasos de entrenamiento. Por ejemplo, 20,000 pasos en la nube pueden tardar desde varios minutos hasta decenas de minutos en la mayoría de las GPU; 100,000 pasos tardan aproximadamente cinco veces más.

Haz clic en **Start Training** después de confirmar la configuración. Consulta el progreso y el historial en **Current Training Tasks**.

![Configuración de entrenamiento](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

<span id="model"></span>

### 3.6 Modelo

**Model** se utiliza para ver los resultados del entrenamiento y seleccionar un modelo para la operación. Confirma que el entrenamiento esté completo y que la combinación de tarea y dispositivo coincida con el proyecto actual.

![Lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

<span id="run"></span>

### 3.7 Operación

**Operation** carga un modelo entrenado en los brazos para verificar si puede completar la tarea correctamente.

1. **Seleccionar un modelo:** Selecciona un modelo marcado como compatible con los brazos actuales.
2. **Seleccionar un método de inferencia:** Selecciona **Cloud Inference** o **Local Inference** y configura los parámetros correspondientes.
3. **Iniciar la inferencia:** Confirma la configuración y haz clic en **Start Cloud/Local Inference**.

**Diferencias clave entre la inferencia en la nube y la inferencia local:**

| Comparación | Inferencia en la nube | Inferencia local |
| :--- | :--- | :--- |
| **Hardware de cómputo** | Usa una GPU en la nube de alto rendimiento. | Usa la CPU local; la plataforma actual no admite una GPU local. |
| **Impacto en el rendimiento** | Los resultados dependen en gran medida de la calidad de la transmisión de red. | Los resultados dependen del rendimiento de la CPU local. |
| **Parámetros** | **Action count (predeterminado 120):** pasos de acción predichos por inferencia. <br />**Chunk threshold (predeterminado 0.9):** afecta la suavidad y la precisión. Los valores más altos son más cautelosos y pueden provocar pausas; los valores más bajos son más suaves pero pueden aumentar los errores. | **Run count:** número de ejecuciones repetidas de la tarea. <br />**Time limit per run:** duración máxima de una ejecución; termina automáticamente al agotarse el tiempo. |
| **Salida de datos** | Solo realiza la verificación de inferencia. | Genera automáticamente un conjunto de datos a partir de las ejecuciones de inferencia después de que finaliza la operación. |
| **Coste y limitaciones** | Sujeto a las reglas de la plataforma; la capacidad de cómputo es adecuada para comenzar rápidamente. | Normalmente no requiere créditos en la nube, pero está limitado por el rendimiento de la CPU local. |

**Notas**

- Antes de la operación, confirma que los brazos estén conectados correctamente y que el área de trabajo sea segura.
- Durante la operación, no desconectes ni desarmes los brazos. Observa sus movimientos.
- Si el resultado no es satisfactorio, vuelve a **Dataset**, elimina los episodios anómalos, añade datos válidos y entrena de nuevo.
![Interfaz de operación del modelo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)
![Interfaz de operación del modelo](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-run-soarm-en.webp)
