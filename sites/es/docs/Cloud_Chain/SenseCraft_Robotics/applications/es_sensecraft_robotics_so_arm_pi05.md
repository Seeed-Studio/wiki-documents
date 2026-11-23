---
title: Entrenar y ejecutar π0.5 con SO-ARM
description: Usa SO-ARM y π0.5 para recopilar y fusionar datos de organización de escritorio de múltiples tareas, entrenar en la nube, ejecutar la inferencia en el robot y mejorar el modelo.
keywords:
  - SenseCraft Robotics
  - SO-ARM
  - π0.5
  - VLA
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-scene-en.webp
slug: /sensecraft_robotics/applications/so-arm-pi05
last_update:
  date: 11/10/2026
  author: Seeed Studio
---

**Descarga de la plataforma SenseCraft Robotics:** [Download](https://sensecraft.seeed.cc/en/robotics?utm_source=wiki&utm_medium=referral&utm_campaign=sensecraft_wiki&utm_content=soarm_pi0.5)

Este tutorial utiliza un proyecto de organización de escritorio con tres tareas para demostrar la recopilación de datos, el entrenamiento en la nube y la validación en el mundo real con SO-ARM + π0.5. Los pasos detallados se centran en colocar la caja cuadrada en un contenedor de almacenamiento. Recopila datos para las otras dos tareas de la misma manera y luego fusiona los tres conjuntos de datos de tareas para el entrenamiento.

Después de completar este tutorial, introduce “Place the square box in the storage bin” para probar si el robot puede poner la caja cuadrada en el contenedor de almacenamiento. Luego introduce instrucciones para las otras tareas para comprobar si el robot puede cambiar a ejecutarlas.

Puedes ver primero el videotutorial que aparece a continuación o seguir la guía paso a paso que sigue.

<div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: '12px' }}>
  <iframe
    src="https://www.youtube.com/embed/Tfoej8WtSUE"
    title="Videotutorial Entrenar y ejecutar π0.5 con SO-ARM"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

## 1. Comprender el flujo de trabajo de entrenamiento

Un modelo VLA (Vision-Language-Action) combina información visual, de lenguaje y de acción. En este proyecto, las cámaras capturan los objetos que se van a ordenar y sus contenedores de destino, la instrucción de la tarea especifica qué objeto recoger y dónde colocarlo, y el estado del robot proporciona información como las posiciones actuales de las articulaciones. El modelo combina estas entradas para predecir las siguientes acciones del robot.

El flujo de trabajo completo es:

**Crear un proyecto → Configurar el robot y las cámaras → Recopilar demostraciones con instrucciones → Revisar y fusionar conjuntos de datos → Entrenar en la nube → Ejecutar en el robot real → Evaluar y recopilar más datos**

Una tarea normalmente requiere múltiples demostraciones. En un conjunto de datos que contiene varias tareas, cada episodio debe conservar su instrucción de tarea correspondiente.

| Concepto | Significado | Ejemplo |
|---|---|---|
| Instrucción de tarea (Task) | Describe el objetivo que el robot debe cumplir | Place the square box in the storage bin |
| Episodio | Un registro completo de la ejecución de una tarea, que incluye imágenes, estados del robot, acciones y datos relacionados | Recoger la caja cuadrada desde su posición inicial, colocarla en el contenedor de almacenamiento y detener la grabación |

## 2. Requisitos previos

Antes de comenzar, prepara lo siguiente:

- Un brazo líder y un brazo seguidor SO-ARM completamente ensamblados y en funcionamiento.
- Fuentes de alimentación, cables USB y cámaras compatibles.
- Un ordenador con la aplicación de escritorio SenseCraft Robotics actualizada a la V1.1.27 y con una conexión de red estable.

  **Descarga de software:** [Download](https://sensecraft.seeed.cc/en/robotics?utm_source=wiki&utm_medium=referral&utm_campaign=sensecraft_wiki&utm_content=soarm_pi0.5)
- Suficiente almacenamiento local en tu ordenador y suficientes créditos en la cuenta para la tarea de entrenamiento.
- Objetos relacionados con la tarea, como la caja cuadrada y un contenedor de almacenamiento, y una mesa de trabajo estable.

Si es la primera vez que utilizas el robot, completa el ensamblaje y la configuración básica antes de continuar.

> Antes de hacer funcionar el robot, fija su base, despeja su área de trabajo y asegúrate de poder detenerlo rápidamente. Mantén a las personas y los objetos frágiles fuera del área de movimiento del robot durante las pruebas iniciales.

![Configuración de entrenamiento de organización de escritorio con SO-ARM](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-scene-en.webp)

## 3. Crear un proyecto de entrenamiento de modelo de IA

1. Abre SenseCraft Robotics.
2. Crea un proyecto con un nombre reconocible, como `SOARM-Desktop-Organization`.
3. Selecciona **AI Model Training** como propósito del proyecto.
4. Después de crear el proyecto, abre **Device Setup**.

Los proyectos de AI Model Training admiten la recopilación de datos, el entrenamiento de modelos y la inferencia. Si solo necesitas grabar y repetir una trayectoria fija, elige en su lugar un proyecto de Action Playback. Este tutorial utiliza un proyecto de AI Model Training.

![Lista de proyectos de SenseCraft Robotics y entrada para nuevo proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/project-list-en.webp)

![Crear un proyecto de entrenamiento de modelo de IA](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/create-project-en.webp)

## 4. Configurar el brazo robótico y las cámaras

En Device Setup, sigue las instrucciones en pantalla para completar estos pasos:

1. **Seleccionar el dispositivo:** Elige el modelo de brazo robótico que estás utilizando. Este tutorial utiliza SO-ARM.
2. **Vincular los puertos serie:** Identifica los puertos para el brazo líder y el brazo seguidor. Para evitar intercambiarlos, conecta primero el cable USB del brazo líder y vincula su puerto, luego conecta y vincula el brazo seguidor.
3. **Calibrar:** Sigue el procedimiento guiado para establecer las referencias de posición de las articulaciones de modo que el brazo seguidor pueda seguir correctamente al líder. SO-ARM admite calibración automática y manual. Para la calibración automática, coloca el brazo como se indica y deja suficiente espacio a su alrededor para evitar colisiones durante la calibración.
4. **Verificar la teleoperación:** Mueve lentamente el brazo líder. Confirma que el seguidor lo sigue correctamente y que la pinza se abre y se cierra con normalidad.
5. **Vincular cámaras:** Selecciona las cámaras necesarias para la recopilación de datos y comprueba sus vistas en directo.

Comprueba las vistas en directo de las cámaras: la caja cuadrada y el contenedor de almacenamiento deben ser claramente visibles. Simula el movimiento desde la posición inicial de la caja cuadrada hasta el contenedor de almacenamiento y confirma que el agarre y la colocación se mantienen dentro del encuadre. Si utilizas una cámara de muñeca, comprueba que el área de agarre sea visible cuando la pinza se acerque a la caja. Comprueba las áreas de agarre y colocación de las otras dos tareas de la misma manera.

Mantén las posiciones de las cámaras, los ángulos de visión, la configuración de los dispositivos y la iluminación lo más coherentes posible entre la recopilación de datos y la ejecución. Después de cambiar la configuración, comprueba la compatibilidad con tus datos y modelos existentes.

Para obtener instrucciones de configuración detalladas, consulta la [Guía SO-ARM101](/es/sensecraft_robotics_so_arm101/).

## 5. Recopilar demostraciones con instrucciones de tarea

### 5.1 Crear un conjunto de datos e introducir una descripción de la tarea

1. Abre **Datasets** y crea un conjunto de datos para la tarea.
2. En la configuración de recopilación, introduce un nombre de conjunto de datos y una descripción de la tarea. La descripción de la tarea se convierte en la instrucción para cada episodio de este lote. Describe claramente la acción y el destino, por ejemplo, “Pick up the square box and place it in the storage bin.” Evita descripciones vagas como “pick up” o “task 1.” Elige un nombre de conjunto de datos que identifique claramente el contenido recopilado; también puedes usar la propia descripción de la tarea para que el conjunto de datos sea fácil de identificar y gestionar.
3. Establece el número de episodios, la duración por episodio y la duración de descanso. Ajusta el número de episodios a la dificultad de la tarea. Para este tutorial, comienza con 50 episodios por tarea y registra reemplazos después del filtrado para que tengas al menos 50 demostraciones válidas. Primero registra un intento completo de recogida y colocación para determinar una duración de episodio adecuada. Deja suficiente tiempo de descanso para restablecer los objetos y el robot a sus posiciones iniciales. Para configuraciones sencillas, normalmente bastan 10–15 segundos.
4. Comprueba el brazo robótico, la cámara y la configuración de almacenamiento.
5. Coloca los objetos y el brazo robótico de modo que estén listos para la demostración. Asegúrate de que tanto la posición inicial del objeto como su destino estén dentro del alcance del robot. Mantén fija la posición inicial del objeto y la posición del contenedor durante la recopilación inicial para facilitar el restablecimiento. Recopila datos con posiciones aleatorias más adelante, durante la optimización.

![Página de conjuntos de datos antes de crear un conjunto de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/dataset-empty-en.webp)

![Nombre del conjunto de datos, descripción de la tarea y configuración de recopilación](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/dataset-collection-settings-en.webp)

### 5.2 Grabar múltiples episodios

1. Inicia la grabación.
2. Usa el brazo líder para teleoperar el brazo seguidor a través de una demostración completa de recogida y colocación.
3. Detén la grabación una vez que la tarea esté completa.
4. Revisa la grabación y conserva las demostraciones válidas.
5. Restablece los objetos y el brazo robótico y luego graba la siguiente demostración.

Antes de cada episodio, utiliza el periodo de descanso para devolver la caja cuadrada a su posición inicial, mantener el contenedor de almacenamiento en su lugar y devolver el robot a una postura inicial coherente. Graba la secuencia: acercarse a la caja cuadrada → cerrar la pinza → levantar → moverse por encima del contenedor de almacenamiento → soltar. Graba y restablece las otras dos tareas por separado de la misma manera.

![Iniciar la grabación de datos de demostración](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/start-recording-en.webp)

![Progreso de la grabación del episodio y atajos](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/episode-recording-en.webp)

### 5.3 Recopilar datos para diferentes tareas

Para entrenar un modelo que ejecute múltiples tareas, graba demostraciones para cada tarea por separado. Por ejemplo:

| Tarea | Instrucción de ejemplo |
|---|---|
| Pick up the square box and place it in the storage bin | Pick up the square box and place it in the storage bin. |
| Pick up the orange and place it on the fruit plate | Pick up the orange and place it on the fruit plate. |
| Pick up the donut and place it in the toy box | Pick up the donut and place it in the toy box. |

Este proyecto contiene tres tareas de organización. Después de recopilar la tarea de la caja cuadrada, crea conjuntos de datos independientes para las otras dos tareas, introduce sus descripciones de tarea correspondientes y graba sus demostraciones. La instrucción de cada lote debe coincidir con la acción demostrada. No reutilices la instrucción de la caja cuadrada para las otras tareas.

![Lista de conjuntos de datos para las tres tareas de organización](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/task-datasets-en.webp)

## 6. Revisar y combinar conjuntos de datos

Antes de entrenar, abre los detalles del conjunto de datos, revisa los episodios por tarea y comprueba que:

- Las instrucciones de la tarea sean precisas y completas.
- Las imágenes sean claras y las acciones importantes sean visibles.
- Las demostraciones estén completas, sin fallos evidentes ni segmentos no relacionados.
- Ninguna tarea tenga lagunas significativas en la cobertura de datos.

Después de recopilar y revisar las tres tareas, selecciona los tres conjuntos de datos correspondientes en la función de combinación. Puedes nombrar el conjunto de datos combinado “organización del escritorio”. Conserva la asociación de tarea e instrucción original de cada episodio y, a continuación, utiliza el conjunto de datos combinado de tres tareas para entrenar el modelo.

Antes de combinar, comprueba la compatibilidad entre tipos de robot, configuraciones de cámara, frecuencias de muestreo de recopilación (FPS), espacios de acción y otros ajustes relevantes. Si la plataforma informa de una incompatibilidad, ajusta los conjuntos de datos de origen o recopila nuevos datos según las indicaciones.

Por ejemplo, si cada uno de los tres conjuntos de datos de origen contiene 50 episodios válidos, comprueba que el conjunto de datos combinado muestre 3 tareas y 150 episodios. Filtra por cada tarea y reproduce algunos episodios para confirmar que las instrucciones coinciden con las demostraciones y que las cámaras capturaron todo el proceso. Excluye las grabaciones fallidas o incompletas de las demostraciones correctas y luego graba reemplazos. Comprueba también las otras dos tareas con respecto a sus respectivos criterios de éxito.

![Tareas y episodios en el conjunto de datos combinado](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merged-dataset-episodes-en.webp)

![Entrada de combinación en la lista de conjuntos de datos](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merge-datasets-en.webp)

![Seleccionar y combinar tres conjuntos de datos de origen](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merge-datasets-dialog-en.webp)

## 7. Entrenar π0.5 en la nube

1. Abre la página **Train**.
2. Elige la GPU en la nube que quieras usar.
3. Selecciona el conjunto de datos que has revisado.
4. Selecciona **π0.5** como estrategia de entrenamiento.
5. Utiliza la configuración de entrenamiento recomendada por la plataforma como punto de partida para tu primera ejecución.
6. Revisa los parámetros de entrenamiento y la información de recursos, cuota o coste que se muestra en la página.
7. Envía el trabajo de entrenamiento y supervisa su estado y progreso en la página de entrenamiento.

Antes de enviarlo, la plataforma comprueba si los datos cumplen los requisitos del modelo. Si informa de instrucciones de tarea faltantes, incompatibilidades en la configuración de cámaras u otros problemas de datos, resuélvelos antes de volver a enviar.

Una vez finalizado el entrenamiento, abre **Models** y busca el modelo de este trabajo de entrenamiento. El nombre de la tarea suele ser el nombre del conjunto de datos seguido de la estrategia de entrenamiento.

**Un trabajo de entrenamiento completado no garantiza el rendimiento de la tarea en el mundo real; aún necesitas validar el modelo en el robot.** Para tu primera iteración, ejecuta el modelo antes de decidir si añadir datos o ajustar la configuración de entrenamiento en función de los fallos observados.

![Encontrar el modelo entrenado en la lista de modelos](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/cloud-gpu-selection-en.webp)

![Estado y progreso del entrenamiento en la nube de π0.5](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-progress-en.webp)

## 8. Ejecutar el modelo en SO-ARM

> **Modo de ejecución:** Los modelos VLA, especialmente π0.5 utilizado en este tutorial, requieren una gran capacidad de cómputo y memoria de GPU. Un ordenador típico puede tener dificultades para ejecutarlos con fluidez. Para este tutorial, utiliza una GPU en la nube para la inferencia. El brazo robótico y las cámaras permanecen conectados a tu ordenador local, y el robot ejecuta la salida del modelo localmente. Mantén estable tu conexión de red. Antes de intentar la inferencia local, confirma que tu entorno de hardware y software cumple los requisitos del modelo seleccionado.

1. Abre la página **Run**.
2. Elige la GPU en la nube que quieras usar.
3. Selecciona el modelo π0.5 entrenado y un modo de ejecución disponible que sea compatible con él.
4. Confirma que el robot y las cámaras estén conectados correctamente y que su configuración coincida con los datos de entrenamiento.
5. Devuelve la caja cuadrada y el contenedor de almacenamiento a sus posiciones durante la recopilación de datos y devuelve el robot a la postura inicial utilizada en las demostraciones. Para la primera prueba, utiliza las mismas vistas de cámara, objetos y disposición del escritorio que durante la recopilación.
6. Para este ejemplo, introduce “Pick up the square box and place it in the storage bin.” Utiliza la misma instrucción que para las demostraciones de la caja cuadrada. Al validar las otras dos tareas, restablece sus respectivas escenas e introduce la instrucción original de cada tarea.
7. Inicia la ejecución y observa si el robot completa la tarea. Detén la ejecución de inmediato si notas movimientos anómalos.

Para un modelo entrenado en varias tareas, valida cada tarea utilizando su instrucción correspondiente.

![Ejecutar el modelo VLA en SenseCraft Robotics](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/run-model-preview-en.webp)

## 9. Mejorar el modelo según los resultados de ejecución

| Problema observado | Qué comprobar o añadir primero |
|---|---|
| Éxito solo desde unas pocas posiciones iniciales | Añadir demostraciones correctas con diferentes posiciones de los objetos |
| Fallos frecuentes al agarrar o colocación imprecisa | Comprobar cámaras, calibración del robot y calidad de los datos; añadir demostraciones para los escenarios afectados |
| Bajo rendimiento en una tarea de un modelo multitarea | Comprobar las instrucciones de esa tarea, la calidad de los episodios y la cobertura de datos |
| El rendimiento empeora tras cambiar las cámaras o la escena | Comprobar la coherencia de la configuración y recopilar datos en las nuevas condiciones |
| Las acciones no coinciden con la instrucción de la tarea | Comprobar las asociaciones episodio‑tarea y la instrucción introducida en tiempo de ejecución |

Conserva las versiones de los conjuntos de datos, las configuraciones de entrenamiento y los resultados de las pruebas de cada iteración para poder evaluar si los cambios ayudan. Para tus primeras mejoras, prioriza los problemas claros de datos antes de ajustar los parámetros de entrenamiento.

## 10. Preguntas frecuentes

### ¿Puede un conjunto de datos contener varias tareas?

Sí. Cada episodio debe conservar la instrucción de tarea correcta. Al combinar datos de diferentes tareas, asegúrate de que los modelos de dispositivo, las cámaras y otras configuraciones de datos sean compatibles.

### Después de entrenar, ¿puedo realizar cualquier tarea simplemente cambiando la instrucción?

No hay tal garantía. El rendimiento depende del modelo base, los datos de demostración y las condiciones del mundo real. Valida primero las tareas cubiertas durante el entrenamiento y luego prueba gradualmente nuevas instrucciones o condiciones.

### ¿Se pueden usar los datos de evaluación para entrenamiento adicional?

Sí, después de revisar y filtrar los datos y confirmar que cumplen los requisitos. Utiliza las grabaciones fallidas para analizar problemas y prioriza añadir demostraciones correctas para esos escenarios.

### ¿Qué ocurre si me quedo sin almacenamiento local?

Consulta y cambia la ruta de almacenamiento de datos local en la configuración de la app y luego sigue las indicaciones para migrar los datos existentes. Después de la migración, confirma que tus conjuntos de datos, modelos, grabaciones de acciones y datos de evaluación sigan siendo accesibles.
