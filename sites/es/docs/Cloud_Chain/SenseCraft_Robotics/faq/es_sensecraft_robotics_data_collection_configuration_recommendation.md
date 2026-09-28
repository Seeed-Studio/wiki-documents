---
title: Recomendaciones de configuración para la recopilación de datos
description: Escenarios de entrenamiento recomendados de SenseCraft Robotics, disposiciones de cámara, parámetros de recopilación, pasos de entrenamiento y comprobaciones de despliegue.
keywords:
  - SenseCraft Robotics
  - recopilación de datos
  - entrenamiento de robots
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/device-model-selection.webp
slug: /sensecraft_robotics_data_collection_configuration
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

**Una referencia de selección para la recopilación de datos, la disposición de visión y los parámetros de entrenamiento.**

| Elemento | Contenido |
| --- | --- |
| Escenarios aplicables | Enseñanza y entrenamiento de brazo robótico, demostraciones de pick-and-place / transferencia, recopilación de conjuntos de datos y revisión de planes de entrenamiento de modelos |
| Conclusión principal | Preferir una configuración de doble vista. Usar resolución de cámara 480p y recopilación a 60 fps por defecto (corresponde a High). Planificar los episodios de recopilación y los pasos de entrenamiento según la dificultad de la tarea. |
| Prioridad | Asegurar primero una cobertura completa de cámara y datos estables, luego aumentar la resolución o añadir escenarios más complejos. |
| Uso de la salida | Puede servir como base para la configuración de compra, planes de entrenamiento y listas de verificación de despliegue in situ. |

Para el entrenamiento básico, se prefiere la configuración de "vista superior + pinza". Utiliza la configuración de "vista superior + vista lateral" cuando la tarea requiere juicio de altura, manejo de oclusiones o reconocimiento de la pose del objetivo.

Comienza la recopilación a 480p y 60 fps (frecuencia de fotogramas de recopilación: High). Si se producen caídas de fotogramas, primero cierra la vista previa en el lado derecho de la página de recopilación y luego evalúa si reducir la resolución o mejorar el rendimiento del ordenador. La calidad del entrenamiento depende primero de la estabilidad de los datos y la cobertura del escenario, y después de una mayor resolución o un número de cámaras más complejo.

## Recomendaciones rápidas

- Disposición de la cámara: Coloca la cámara superior a unos 45° del objeto objetivo. El encuadre debe cubrir el objeto objetivo, el efector final del brazo robótico y el área clave de movimiento.
- Resolución: 480p se recomienda por defecto. Equilibra claridad, carga de transmisión y tamaño del archivo de vídeo. Aumenta la resolución solo cuando el rendimiento del ordenador sea suficiente.
- Frecuencia de fotogramas de recopilación: 60 fps se recomienda por defecto (corresponde a High). Es lo suficientemente fluida para la mayoría de las acciones de brazo robótico. Una frecuencia de fotogramas demasiado alta puede causar cuellos de botella de rendimiento, caídas de fotogramas o errores en el conjunto de datos.
- Comprobaciones de rendimiento: Si las caídas de fotogramas aún se producen a 60 fps, primero cierra la vista previa de recopilación del lado derecho y luego comprueba el ancho de banda de la cámara, los puertos USB, las escrituras en disco y los programas en segundo plano.

## Opciones de configuración de cámara

| Opción | Tareas adecuadas | Notas de instalación | Notas |
| --- | --- | --- | --- |
| Vista superior + pinza | Transferencia de punto fijo, pick-and-place y entrenamiento básico de enseñanza. Adecuada para observar el proceso de contacto de agarre. | Coloca la cámara superior a unos 45° del objetivo y captura tanto como sea posible el objetivo completo y el brazo robótico. Apunta la cámara de la pinza al efector final y al área de agarre. | La vista de la pinza puede temblar o quedar oculta. Asegura el cable y verifica la estabilidad de la imagen. |
| Vista superior + vista lateral | Agarre desde posiciones aleatorias, cambios de pose, oclusiones o tareas que requieren juicio de altura. | La cámara superior cubre la vista global. La cámara lateral debe capturar claramente el contorno del objetivo, la aproximación de la pinza y la posición de colocación. | Mantén la cámara lateral fuera del área de interferencia del movimiento del brazo robótico y evita oclusiones prolongadas por fijaciones o piezas de trabajo. |

## Notas sobre la selección de cámara

| Ordenador | Combinación recomendada | Notas |
| --- | --- | --- |
| Mac | 2 cámaras USB Hikvision | Mantén la frecuencia de fotogramas del brazo robótico en no más de 60 fps. La recopilación a 120 fps no está disponible y pueden producirse problemas de compatibilidad en algunos casos. |
| Mac | 1 cámara USB Hikvision + 1 Logitech C270 HD Webcam | Actualmente la combinación más estable. También se puede usar para recopilación de brazo robótico a 120 fps. |
| Mac | 2 Logitech C270 HD Webcams | También es una combinación estable y admite todas las frecuencias de fotogramas de recopilación del brazo robótico. |
| Windows | Todas las combinaciones anteriores están disponibles | Las combinaciones actualmente funcionan en Windows. Conecta las cámaras directamente a los puertos USB y evita los hubs. |

Modelos de referencia:

- Logitech C270 HD Webcam: [https://www.logitech.com/en-sg/shop/p/c270-hd-webcam](https://www.logitech.com/en-sg/shop/p/c270-hd-webcam)
- Cámara USB Hikvision: modelo básico de enfoque fijo, 1080p es suficiente

## Parámetros de recopilación de datos

| Parámetro | Valor recomendado | Motivo | Ajuste |
| --- | --- | --- | --- |
| Resolución de vídeo | 480p | Lo suficientemente clara para ver el objetivo y el proceso de acción, manteniendo el tamaño del archivo y la presión de transmisión manejables. | Aumenta la resolución si el rendimiento del ordenador, la cámara y el almacenamiento son suficientes. Si hay caídas de fotogramas, vuelve primero a 480p. |
| Frecuencia de fotogramas de recopilación | 60 fps (corresponde a High en el software SenseCraft) | Lo suficientemente fluida para registrar el movimiento del brazo robótico y normalmente no pierde acciones clave. | Las frecuencias de fotogramas más altas aumentan la carga de rendimiento. Si a 60 fps todavía hay caídas de fotogramas, cierra primero la vista previa del lado derecho. |
| Ventana de vista previa | Activada por defecto; desactívala cuando haya caídas de fotogramas | La vista previa ayuda a las comprobaciones in situ pero consume recursos de cómputo. | La estabilidad de la recopilación tiene mayor prioridad que la experiencia de vista previa. Desactiva las vistas previas innecesarias para la recopilación formal. |
| Integridad de los datos | Verificación por muestreo después de cada ronda de recopilación | Ayuda a detectar a tiempo vistas faltantes, caídas de fotogramas, cambios de iluminación o acciones fallidas. | Usa un esquema de nombres coherente por fecha, tarea, dificultad y número de episodio para la trazabilidad. |

## Dificultad de la tarea, episodios y pasos de entrenamiento

| Dificultad | Descripción de la tarea | Episodios | Pasos de entrenamiento sugeridos | Enfoque de aceptación |
| --- | --- | --- | --- | --- |
| Principiante | Mover desde la posición fija A a la posición B | 20 episodios | 10k-15k pasos | Trayectoria de movimiento estable, error de posición final controlable y sin fallos de ejecución repetidos evidentes. |
| Intermedio | Recoger desde posiciones aleatorias y mover a la posición B especificada | 50 episodios | 30k-40k pasos | Cubre diferentes posiciones iniciales, tasa de éxito de agarre estable y posición de colocación coherente. |
| Avanzado | Tareas de larga duración, de múltiples pasos o continuas | 100 episodios | 80k-100k pasos | Centrarse en la estabilidad a largo plazo, la recuperación ante excepciones, el error acumulado y la cobertura de la distribución del conjunto de datos. |

## Lista de verificación para el despliegue in situ

- Cobertura de la vista: El encuadre debe mostrar al mismo tiempo el objeto objetivo, las acciones clave de la pinza y el área de colocación. El objetivo no debe permanecer cerca del borde de la imagen durante largos periodos.
- Claridad del objetivo: La cámara lateral debe capturar claramente el contorno del objetivo. La cámara superior debe mostrar la posición relativa entre el objetivo y el brazo robótico.
- Frecuencia de fotogramas estable: Ejecuta una prueba corta antes de la recopilación formal y confirma que no haya caídas de fotogramas continuas a 60 fps.
- Entorno consistente: Mantén la iluminación estable, el fondo simple y el rango de colocación del objetivo despejado para reducir variables irrelevantes.
- Trazabilidad de los datos: Registra la dificultad de la tarea, la opción de cámara, la resolución, la frecuencia de fotogramas, el número de episodios y las excepciones para cada sesión de recopilación.

## Ruta de implementación sugerida

1. Comienza con una tarea de nivel principiante para verificar la cobertura de la cámara y la estabilidad de la recopilación. Confirma que 480p y 60 fps pueden recopilar de forma continua.
2. Pasa a una tarea de nivel intermedio, añade posiciones iniciales aleatorias y céntrate en la tasa de éxito de agarre y las caídas de fotogramas.
3. Amplía a tareas avanzadas de larga duración, añade más episodios y registra muestras anómalas para una optimización posterior.
4. Antes de aumentar la dificultad de la tarea, mantén fijas las posiciones de las cámaras y los parámetros para evitar cambiar demasiadas variables a la vez.
