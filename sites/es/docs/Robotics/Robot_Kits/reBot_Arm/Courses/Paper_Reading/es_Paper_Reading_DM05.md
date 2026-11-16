---
description: "Una lectura detallada de DM0.5: fusión de contexto histórico, razonamiento encarnado, emparejamiento dinámico de acciones, Flow Matching y los límites de las evaluaciones en mundo abierto."
title: "DM0.5: Contexto histórico y alineación de trayectorias para el mundo abierto"
hide_title: true
keywords: [Technical Blog Deep-Dive, DM0.5, OpenDM, Historical Context, Trajectory Alignment, Flow Matching, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig01-architecture.png
slug: /robotics/paper_reading_dm05
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-10
createdAt: '2026-11-10'
updatedAt: '2026-11-10'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_dm05/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Arquitectura del modelo: de la comprensión de la escena a la generación de acciones",
    "id": "model-architecture-from-scene-understanding-to-action-generation",
    "level": 2
  },
  {
    "value": "Capa de abstracción de contexto: fusión de contexto histórico",
    "id": "context-abstraction-layer-historical-context-fusion",
    "level": 2
  },
  {
    "value": "Tareas Embodiment CoT: razonamiento encarnado amplio",
    "id": "embodiment-cot-tasks-broad-embodied-reasoning",
    "level": 2
  },
  {
    "value": "Capa de alineación de trayectorias: emparejamiento dinámico de acciones",
    "id": "trajectory-alignment-layer-dynamic-action-matching",
    "level": 2
  },
  {
    "value": "Generación continua de acciones con Flow Matching",
    "id": "continuous-action-generation-with-flow-matching",
    "level": 2
  },
  {
    "value": "Datos y entrenamiento: de qué aprende el modelo",
    "id": "data-and-training-what-the-model-learns-from",
    "level": 2
  },
  {
    "value": "Experimentos: qué respaldan los resultados",
    "id": "experiments-what-the-results-support",
    "level": 2
  },
  {
    "value": "Generalización zero-shot",
    "id": "zero-shot-generalization",
    "level": 3
  },
  {
    "value": "Capacidad de fine-tuning y manipulación con robots reales",
    "id": "fine-tuning-capability-and-real-robot-manipulation",
    "level": 3
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-dm05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · TECHNICAL BLOG DEEP-DIVE</span>
  <h1 id="paper-reading-dm05-title">DM0.5: Contexto histórico y alineación de trayectorias para el mundo abierto</h1>
  <p className="paper-reading-lead">DM0.5: un modelo fundacional de mundo abierto para inteligencia encarnada de propósito general</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Contexto histórico</li><li>Razonamiento encarnado</li><li>Alineación de trayectorias</li><li>Acciones continuas</li>
  </ul>
  <a className="paper-reading-source-link" href="https://www.dexmal.com/blog/dm0.5?lang=en-US" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Dexmal</span><span>Leer el blog técnico oficial</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Key LeRobot options">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/dm05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="Hugging Face" width="24" height="24" /> Hugging Face · Documentación de LeRobot DM0.5 ↗</a>

**Opciones clave de LeRobot**

Utiliza estas opciones junto con la configuración del conjunto de datos y de salida. Consulta la documentación oficial anterior para la instalación, el mapeo de cámaras y los comandos completos de evaluación.

- `--policy.path=lerobot/dm05_base`: inicia el fine-tuning supervisado desde el checkpoint base. El checkpoint adaptado a LIBERO es `lerobot/dm05_libero`.
- `--policy.add_state=false --policy.chunk_size=10 --policy.n_action_steps=10`: la receta oficial de LIBERO omite el estado del robot del prompt y predice y ejecuta 10 acciones a la vez. Usa la receta adecuada para tu robot.
- `--policy.push_to_hub=false`: guarda los resultados del entrenamiento localmente. Guarda y carga el checkpoint junto con su configuración, tokenizer y procesadores.

</aside>

Un robot recibe la instrucción: “Recoge la taza, limpia la mesa debajo de ella y vuelve a poner la taza en su sitio”. Una vez que la taza se ha movido, es posible que la imagen actual ya no muestre dónde estaba al principio. Sostener la taza se ve similar antes y después de limpiar, pero la siguiente acción es diferente. Las pausas y los cambios en el ritmo del demostrador también complican el aprendizaje de acciones.

**DM0.5 aborda estos problemas utilizando contexto histórico, aprendiendo el progreso de la tarea y alineando trayectorias de demostración.** Este artículo utiliza el blog técnico oficial de Dexmal y la implementación pública para explicar los tres mecanismos.

## Arquitectura del modelo: de la comprensión de la escena a la generación de acciones

Un modelo visión-lenguaje-acción (VLA) convierte imágenes, instrucciones y el estado del robot en acciones de control. DM0.5 utiliza un **VLM (Vision-Language Model) de 4B y un Action Expert de 680M**. El VLM representa la escena y la tarea, y el Action Expert genera acciones continuas del robot.

![Arquitectura oficial de DM0.5: el Action Expert genera acciones continuas condicionadas por observaciones históricas y actuales](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig01-architecture.png)

*Fuente: la sección Model del blog oficial. La compresión del historial, el razonamiento encarnado y la alineación de trayectorias mejoran las entradas y la supervisión del entrenamiento.*

Cuando llega el momento de devolver la taza, los fotogramas históricos muestran dónde estaba al principio, la imagen actual muestra la taza y la mesa tal como están ahora, y la instrucción especifica adónde debe ir la taza. El VLM codifica estas entradas como condiciones de acción. El Action Expert lee esas condiciones y genera una secuencia de movimientos para transportar y colocar la taza.

El modelo predice una secuencia de acciones futuras llamada **action chunk**. La caché KV en la figura de la arquitectura reutiliza el cómputo para las entradas de imagen y texto. El historial de la tarea cumple un propósito diferente: proporciona observaciones pasadas reales al modelo.

## Capa de abstracción de contexto: fusión de contexto histórico

Para volver a colocar la taza, el modelo necesita tanto una vista de antes de que se recogiera la taza como la vista actual. Introducir directamente un vídeo largo aumentaría el coste computacional.

La **Context Abstraction Layer** de DM0.5 muestrea fotogramas del pasado y comprime cada ranura histórica en un número fijo de tokens visuales. El modelo procesa estos tokens junto con las observaciones actuales. En la implementación pública de memoria, el average pooling bidimensional reduce el tamaño espacial de la cuadrícula de características visuales.

![Diagrama explicativo: los fotogramas históricos comprimidos se unen a la imagen actual y a la instrucción para condicionar las acciones](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide01-history-en.svg)

*Ilustración: el historial proviene solo de antes del instante de tiempo actual. La ranura gris representa historial ausente.*

El blog informa de compatibilidad con hasta unos **60 segundos** de historial de tarea. Que el modelo pueda recuperar la ubicación original de la taza depende de qué fotogramas se muestrean y de cuántos detalles espaciales sobreviven a la compresión. Muestrear un fotograma por segundo, por ejemplo, puede pasar por alto un detalle que solo fue visible brevemente.

El checkpoint y la canalización de entrada también deben ser compatibles con el historial. La integración estándar de LeRobot revisada aquí no expone la entrada de imagen histórica separada de OpenDM. Las opciones de LIBERO anteriores no pueden probar directamente la capacidad de memoria del modelo.

## Tareas Embodiment CoT: razonamiento encarnado amplio

Las etiquetas de acción le dicen al modelo cómo moverse en un momento dado. No necesariamente identifican lo que ya se ha hecho o lo que debería suceder a continuación. DM0.5 añade **11 tareas autoregresivas** al entrenamiento con datos de robots. Predecir respuestas de texto token a token proporciona supervisión adicional para las etapas de la tarea, los eventos y la intención de la acción.

El blog oficial agrupa estas **Embodiment CoT Tasks** en tres categorías:

| Categoría | Lo que aprende el modelo | Ejemplo didáctico: limpiar la mesa |
|---|---|---|
| Planificación de tareas | Etapa actual de la tarea y siguientes pasos | La taza se ha movido; limpia la mesa a continuación. |
| Predicción de eventos y entorno | Cambios en la escena y eventos clave | La zona debería estar limpia después de limpiar. |
| Generación de acciones | Acciones futuras o un resumen de la intención de la acción | Devuelve la taza a su ubicación anterior. |

Estos ejemplos ilustran la supervisión; no son muestras de entrenamiento publicadas. El historial proporciona evidencia de lo que ocurrió, y la supervisión semántica ayuda al modelo a conectar esos cambios con el progreso de la tarea y la selección de acciones. Este es un objetivo de entrenamiento. No requiere que el modelo produzca un rastro de razonamiento legible antes de cada acción.

## Capa de alineación de trayectorias: emparejamiento dinámico de acciones

Dos operadores demuestran la misma secuencia: acercarse, hacer contacto, asegurar el agarre y luego levantar. Uno hace una pausa de medio segundo antes del contacto. Si los objetivos se emparejan en desplazamientos de tiempo fijos, la misma ranura de predicción puede terminar supervisando diferentes etapas del movimiento.

La **Trajectory Alignment Layer** de DM0.5 empareja una predicción de acciones de longitud fija con puntos de anclaje en una trayectoria de verdad de terreno más densa. Las correspondencias deben preservar el orden temporal. La programación dinámica encuentra una secuencia de emparejamientos con un coste global menor.

![Diagrama explicativo: tres acciones predichas se emparejan con puntos de anclaje monótonamente crecientes en una trayectoria de verdad de terreno más densa](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide02-alignment-en.svg)

*Ilustración: los números representan un componente de acción normalizado. El coste simplificado incluye solo el error punto a punto.*

Considera una trayectoria de verdad de terreno `[0, 0, 0, 0.5, 1]` y una predicción de `[0, 0.5, 1]`. Si se fijan anclajes igualmente espaciados en las posiciones 1, 3 y 5, los objetivos son `[0, 0, 1]`, dando un error cuadrático de `0² + (0.5 − 0)² + 0² = 0.25`. Un emparejamiento monótono en las posiciones 1, 4 y 5 da un error de `0`. Ambas opciones conservan el inicio y el final de la trayectoria. La diferencia es si la predicción intermedia se empareja con el movimiento después de la pausa. Los anclajes fijos son una comparación didáctica, no la receta oficial de entrenamiento.

Si se hace coincidir solo por el error puntual más pequeño, se podría omitir una etapa de contacto clave. Por ello, el blog describe una restricción de continuidad de trayectoria entre anclas, pero no da su fórmula completa. El ejemplo ilustra una coincidencia monótona. La alineación cambia qué acciones supervisan al modelo durante el entrenamiento; el controlador sigue determinando el momento de las acciones durante el despliegue.

## Generación Continua de Acciones con Flow Matching

Las observaciones históricas y las instrucciones condicionan el modelo, y la alineación de trayectorias empareja las predicciones con la supervisión. El Action Expert genera acciones numéricas con **Flow Matching**.

La implementación pública estándar de ajuste fino supervisado (SFT) mezcla el fragmento de acción de verdad de terreno A con ruido gaussiano ε de la misma forma:

$$
X_s=(1-s)A+s\epsilon,\qquad U_s=\epsilon-A.
$$

La variable s va de 0 a 1, interpolando desde la acción hasta el ruido. El Action Expert recibe las acciones ruidosas, s, y las condiciones de imagen y lenguaje, y luego aprende a predecir la dirección de actualización U. Para un valor de acción de `0.6`, ruido `−0.2`, y `s=0.5`, el valor mezclado es `0.2` y la dirección objetivo es `−0.8`.

![Diagrama de enseñanza: Flow Matching aprende un campo de velocidades y luego integra desde ruido hasta acciones en la inferencia](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/guide03-flow-en.svg)

*Ilustración: los pasos internos de generación son distintos de las posiciones de control en un fragmento de acciones.*

En la inferencia, el modelo parte del ruido y disminuye s de 1 a 0. Continuando el ejemplo, en `0.2` con dirección predicha `−0.8`, un paso de `−0.1` da `0.28`, más cerca del valor de acción `0.6`. Las acciones generadas se desnormalizan y se pasan al controlador. La siguiente ronda usa una nueva observación.

El valor predeterminado del blog es **10 actualizaciones internas para generar un fragmento de acciones de 50 pasos**. El número de acciones ejecutadas antes de la siguiente observación depende de la receta de despliegue. El SFT estándar de LeRobot usa la pérdida de Flow Matching; no reproduce automáticamente el conjunto completo de tareas de razonamiento del blog ni el entrenamiento con alineación de trayectorias.

## Datos y Entrenamiento: De Qué Aprende el Modelo

DM0.5 combina manipulación robótica, navegación encarnada, manipulación humana egocéntrica y datos generales de imágenes y video. Las trayectorias de robot proporcionan supervisión de acciones, mientras que otras fuentes amplían la cobertura semántica, espacial y temporal. El video humano no proporciona directamente objetivos de articulaciones del robot.

La limpieza de datos elimina segmentos anómalos y largos periodos inactivos, comprueba la sincronización entre imágenes y acciones, y corrige las etiquetas de tareas. **Las grabaciones fiables son lo primero.** La alineación de trayectorias puede entonces abordar la variación en el ritmo de las demostraciones.

Durante el entrenamiento base, el VLM usa una tasa de aprendizaje más baja para preservar las capacidades de imagen y lenguaje, mientras que el Action Expert usa una tasa de aprendizaje más alta para aprender control. Los pesos base pueden luego adaptarse a tareas o robots particulares. Las entradas de cámara, la semántica de estados y acciones, y la normalización deben mantenerse coherentes.

## Experimentos: Qué Respaldan los Resultados

### Generalización Zero-Shot

![Resultados oficiales zero-shot: tasas de éxito en categorías de acciones y condiciones semánticas en dos plataformas robóticas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig02-zero-shot-en.png)

*Fuente: Zero-Shot Generalization en el blog oficial. La fila superior compara DM0.5-Droid y π0.5-Droid en Franka. La fila inferior compara DM0.5 y DM0 en Dexmal-Mirror. El eje vertical muestra la tasa de éxito.*

DM0.5 se desempeña mejor en la mayoría de las categorías de acciones y restricciones semánticas. En Franka, empata en “Move” y se desempeña peor en las restricciones de “Status”. Por lo tanto, las mejoras se aplican a la mayoría de las condiciones probadas en lugar de a cada instrucción. Las comparaciones deben mantenerse dentro de cada plataforma. Aquí, zero shot se refiere a configuraciones de tareas no vistas y aún depende de la experiencia de entrenamiento previa.

### Capacidad de Fine-Tuning y Manipulación con Robots Reales

LIBERO es un benchmark de simulación para manipulación con un solo brazo. Spatial, Object, Goal y Long enfatizan, respectivamente, las relaciones espaciales, la variación de objetos, los objetivos de tareas y las secuencias de horizonte largo. RoboTwin2.0 evalúa la manipulación con dos brazos. Clean usa escenas más simples; Randomized varía fondos, iluminación, desorden y otras condiciones ambientales para probar la ejecución bajo aleatorización de dominio.

![Resultados oficiales de fine-tuning: tasas de éxito en LIBERO y RoboTwin2.0](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/dm05/fig03-finetuning.png)

*Fuente: Fine-Tuning Capability en el blog oficial. Las tasas de éxito en la tabla son porcentajes.*

En los cuatro conjuntos de LIBERO, DM0.5 promedia **99.0%** de éxito frente a 96.9% para π0.5 en la misma tabla. En RoboTwin2.0, DM0.5 alcanza **93.6% en Clean y 93.3% en Randomized**, en comparación con 82.7% y 76.8% para π0.5. Los resultados respaldan a DM0.5 como un punto de partida sólido para la adaptación de tareas.

En el benchmark real-robot RoboChallenge Table30 v2, los autores entrenan una política multitarea para cada encarnación evaluada. La tasa de éxito en la tarea completa es **43.0%**, y la puntuación global es **54.42**. Son métricas separadas. Las altas puntuaciones en simulación no eliminan los fallos en hardware.

En cuanto a memoria, el blog muestra al robot devolviendo una taza a su posición original y siguiendo una regla de colocación de baterías después de ver a una persona demostrarla. En las pruebas de perturbación de cámara, la cámara de muñeca permanece fija mientras dos cámaras externas varían a lo largo de nueve configuraciones. Hay 10 ensayos por configuración, con tasas de éxito del 80% al 100%. Las perturbaciones humanas se muestran principalmente mediante demostraciones de comportamiento.

Estos resultados describen el sistema completo. No aíslan las contribuciones del contexto histórico, las tareas de razonamiento y la alineación de trayectorias. Las demostraciones de memoria y perturbaciones humanas también carecen de controles cuantitativos exhaustivos, por lo que no establecen fiabilidad en tareas arbitrarias de horizonte largo o perturbaciones.

## Conclusión

**Durante el entrenamiento, el razonamiento encarnado proporciona supervisión semántica para el progreso de la tarea y la intención de las acciones, mientras que la alineación de trayectorias empareja objetivos de acción para reducir el ruido de temporización de las demostraciones. Durante la ejecución, las observaciones históricas y actuales se combinan con la instrucción para condicionar las acciones continuas del Action Expert.**

Al aplicar DM0.5 a tu robot, primero determina si la tarea realmente depende de observaciones pasadas. Luego verifica que el checkpoint acepte esas observaciones y que la interfaz de acciones coincida con tu hardware. Usa comparaciones controladas en la tarea objetivo para juzgar si el método ayuda.

</div>
