---
description: "Una lectura detallada de LaWAM, desde subobjetivos visuales latentes y generación de acciones hasta resultados de benchmarks e integración con LeRobot."
title: "LaWAM: Predecir cambios en la escena antes de generar acciones del robot"
hide_title: true
keywords: [Paper Deep-Dive, LaWAM, World-Action Models, Latent Actions, LeRobot]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawam_overview.png
slug: /robotics/paper_reading_lawam
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-16
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_lawam/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Requisitos previos: tres magnitudes en la tarea del cajón",
    "id": "prerequisites-three-quantities-in-the-drawer-task",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Etapa 1: aprender a predecir el cambio a partir de dos observaciones",
    "id": "stage-1-learning-to-predict-change-from-two-observations",
    "level": 2
  },
  {
    "value": "Etapa 2: predecir la acción latente antes de observar el futuro",
    "id": "stage-2-predicting-the-latent-action-before-the-future-is-observed",
    "level": 2
  },
  {
    "value": "Por qué el mismo horizonte de subobjetivo puede contener diferentes números de pasos",
    "id": "why-the-same-subgoal-horizon-can-contain-different-numbers-of-steps",
    "level": 3
  },
  {
    "value": "Experimentos: latencia del fragmento de acción y éxito en la tarea",
    "id": "experiments-action-chunk-latency-and-task-success",
    "level": 2
  },
  {
    "value": "LIBERO: tasa de éxito y latencia por fragmento de acción",
    "id": "libero-success-rate-and-latency-per-action-chunk",
    "level": 3
  },
  {
    "value": "RoboTwin y robots físicos: lo que los promedios no muestran",
    "id": "robotwin-and-physical-robots-what-the-averages-leave-out",
    "level": 3
  },
  {
    "value": "¿Se pueden reutilizar las mismas acciones latentes en distintas escenas?",
    "id": "can-the-same-latent-actions-be-reused-across-scenes",
    "level": 3
  },
  {
    "value": "Ablación: ¿qué aporta el subobjetivo predicho a la generación de acciones?",
    "id": "ablation-what-does-the-predicted-subgoal-contribute-to-action-generation",
    "level": 3
  },
  {
    "value": "Integración con LeRobot y diferencias de evaluación",
    "id": "lerobot-integration-and-evaluation-differences",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-lawam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-lawam-title">LaWAM: predecir cambios en la escena antes de generar acciones del robot</h1>
  <p className="paper-reading-lead">LaWAM: Latent World Action Models for Efficient Dynamics-Aware Robot Policies</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li><a href="#stage-1-learning-to-predict-change-from-two-observations">Acciones latentes y el modelo del mundo</a></li>
    <li><a href="#stage-2-predicting-the-latent-action-before-the-future-is-observed">Generación de acciones</a></li>
    <li><a href="#experiments-action-chunk-latency-and-task-success">Evaluación</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.15768v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Comandos clave de LeRobot">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/main/en/lawam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot LaWAM ↗</a>

**Comandos clave de LeRobot**

- `--policy.path=jialei02/lawam-libero-sft-lerobot` carga el checkpoint publicado, ajustado finamente en LIBERO.
- `--env.type=libero` selecciona el entorno de evaluación. Usa `--env.task=libero_object` para una ejecución rápida. El benchmark completo cubre los conjuntos Spatial, Object, Goal y Long.
- `--eval.n_episodes=50` ejecuta 50 pruebas por tarea. La evaluación completa usa `--env.task_ids` para seleccionar las tareas 0–9 en cada conjunto, para un total de 2.000 pruebas.
- El checkpoint publicado establece `flow_num_inference_steps=10`, lo que determina el número de pasos de denoising usados para generar cada fragmento de acción.

Consulta la documentación de LeRobot anterior para la instalación, el comando completo `lerobot-eval` y la receta de fine-tuning.

</aside>

Jialei Chen et al. · arXiv:2606.15768v2 · 25 de octubre de 2026 · CoRL 2026 · [Página del proyecto](https://rlinf.github.io/LaWAM/) · [Código de los autores](https://github.com/RLinf/LaWAM)

Se le pide a un robot que abra un cajón. Primero mueve su pinza hacia el tirador, luego cierra la pinza y tira. Si el primer fragmento de acción solo acerca la pinza al tirador, ese acercamiento puede ser el único cambio visible que la política necesita predecir para ese fragmento. Una vez que la siguiente observación muestra la pinza cerrada alrededor del tirador, la predicción siguiente puede incluir el cajón deslizándose hacia afuera. **Si una política predice la escena al final del siguiente fragmento de acción y usa esa predicción para generar controles, ¿cuánto del futuro necesita predecir?**

## Requisitos previos: tres magnitudes en la tarea del cajón

- Una **acción latente** es un vector continuo aprendido a partir de un par de observaciones. Resume la transición entre ellas, como la pinza moviéndose hacia el tirador o tirando hacia afuera. El entrenamiento determina qué codifican sus coordenadas.
- Un **subobjetivo visual latente** es una predicción de la escena al final del fragmento de acción actual, representada por características visuales que preservan la disposición espacial. Las características cerca de la pinza pueden cambiar a medida que se mueve, mientras que las de la superficie de la mesa pueden permanecer aproximadamente iguales.
- Un **fragmento de acción** es una secuencia temporalmente ordenada de vectores de control, como poses del efector final y comandos de la pinza. El experto en acciones genera comandos para alcanzar, cerrar y tirar. Tras la ejecución, la política usa una observación nueva para generar acciones posteriores.

## Resumen y guía de lectura

**Resumen breve.** LaWAM traslada la predicción del futuro al espacio de características de un codificador visual preentrenado. Durante el preentrenamiento con vídeo, infiere una acción latente a partir de dos observaciones y aprende a usarla para predecir características futuras a partir de las características actuales. En la política del robot, el backbone de visión-lenguaje predice una acción latente a partir de la observación actual y la instrucción. El modelo del mundo la mapea a un subobjetivo espacial, que condiciona al experto en acciones. Los autores reportan tasas de éxito promedio del 98,6% en LIBERO y del 91,22% en RoboTwin, con una inferencia del modelo de 187 ms por fragmento de acción.

**Nota de lectura.** Sigue dos traspasos. Primero, el futuro observado proporciona una señal de maestro para la acción latente durante el entrenamiento. En despliegue, la política aporta su propia estimación de esa acción latente. Segundo, el experto en acciones recibe el subobjetivo visual predicho. Una ablación pone a prueba esa conexión eliminando el subobjetivo de las entradas del experto.

## Etapa 1: aprender a predecir el cambio a partir de dos observaciones

Para cada ejemplo de vídeo, los autores muestrean un fotograma actual y uno futuro separados por un intervalo físico $\tau$. Un codificador DINOv3 congelado los mapea a características espaciales $u$ y $u_T$, donde $T$ denota el extremo del intervalo. El codificador de dinámica inversa procesa conjuntamente los parches visuales de ambos fotogramas e infiere una acción latente continua $z$. El decodificador hacia adelante toma las características actuales y $z$. Inyecta $z$ mediante normalización de capa adaptativa para predecir las características del punto final:

$$
\tilde{u}_T = \mathrm{LaWM}_{\omega}(u,z).
$$

En el ejemplo del cajón, el codificador de dinámica inversa ve el cajón antes y después de abrirse y debe codificar suficiente información sobre ese cambio en $z$. El decodificador hacia adelante parte de las características del cajón cerrado. Las características actuales preservan las posiciones iniciales del cajón y la pinza, y la acción latente le indica al decodificador qué cambió para que pueda predecir el cajón abierto en el contexto de esa escena.

El entrenamiento minimiza el error cuadrático entre $\tilde{u}_T$ y $u_T$ y usa divergencia KL para regularizar el posterior de la acción latente hacia una distribución normal estándar. Cuando el estado del efector final está disponible, una cabeza auxiliar predice el estado del efector final en el punto final a partir del estado actual y $z$. Esto anima a que $z$ codifique el movimiento del robot. Tras el preentrenamiento, el decodificador hacia adelante se convierte en el **Latent World Model (LaWM)**, el codificador de dinámica inversa congelado actúa como maestro para la siguiente etapa y se descarta la cabeza auxiliar.

Esta etapa usa aproximadamente 3.000 horas de vídeo de robots y 1.500 horas de vídeo egocéntrico humano. El horizonte de predicción es de 1,2 segundos para vídeo de teleoperación de robots y de 0,4 segundos para vídeo humano. Las características visuales proporcionan un objetivo de entrenamiento común, y los datos de robots con etiquetas de control o de estado pueden aportar supervisión adicional.

## Etapa 2: predecir la acción latente antes de observar el futuro

Durante el entrenamiento de la política, el maestro congelado aún puede usar ambos fotogramas. El backbone Qwen3-VL estima una acción latente $\hat{z}$ a partir de la observación actual y la instrucción de la tarea. Las consultas de acción latente atienden a la vista principal y a la instrucción, mientras que las consultas de acción también pueden atender a vistas auxiliares opcionales. Una única pasada hacia adelante de LaWM mapea $\hat{z}$ y las características actuales al subobjetivo espacial $\hat{u}_T$.

![Flujo de entrenamiento en dos etapas y generación de acciones de LaWAM](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawam_overview.png)

La primera etapa aprende cambios a partir de observaciones de vídeo emparejadas. La segunda etapa predice una acción latente a partir de la observación actual y la instrucción. El experto en acciones usa tanto el contexto de visión-lenguaje como las características espaciales de las escenas actual y predicha. Imagen de la página del proyecto de los autores.

El experto en acciones Alternate-DiT alterna la atención entre dos entradas. Una proporciona el contexto semántico del VLM. La otra proporciona las características espaciales actuales $u$ y el subobjetivo predicho $\hat{u}_T$. Para la tarea del cajón, la primera entrada transporta información sobre la instrucción y el objeto objetivo, y la segunda describe el cambio esperado durante este fragmento. La cabeza de acción aprende flow matching condicional para convertir una secuencia de acciones ruidosa en un fragmento de acción continuo. En la configuración estándar de inferencia del artículo, el experto en acciones usa 10 pasos de denoising y LaWM calcula un subobjetivo visual por fragmento.

| Señal de entrenamiento | Qué restringe |
| --- | --- |
| Destilación de acciones latentes | Acerca la predicción de la política $\hat{z}$ a la acción latente del profesor $z$, inferida a partir del par de observaciones. |
| Regresión de características futuras | Hace avanzar LaWM con el propio $\hat{z}$ de la política y entrena su salida para que coincida con las características futuras observadas $u_T$. |
| Emparejamiento de flujo de acciones | Utiliza el subobjetivo predicho y el contexto semántico para aprender fragmentos de acción a partir de demostraciones de robots. |

El experto en acciones utiliza el subobjetivo predicho tanto en el entrenamiento como en el despliegue. **Knowledge Insulation (KI)** bloquea los gradientes de la pérdida de acción a través de la rama del subobjetivo. La regresión de características futuras sigue actualizando LaWM, y la pérdida de acción sigue entrenando al experto en acciones y su vía de acondicionamiento semántico. En el despliegue, la política pasa desde la imagen e instrucción actuales a una estimación de acción latente, un subobjetivo predicho y luego un fragmento de acción. La política utiliza observaciones RGB, y las etiquetas de acción del robot utilizan una representación del efector final. El video humano contribuye a la Etapa 1. La Etapa 2 utiliza trayectorias de robot con instrucciones en lenguaje natural.

![Movimiento observado del efector y mapas de calor de subobjetivos predichos en LIBERO](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/libero_chunk.png)

La columna de la derecha muestra el subobjetivo predicho para este fragmento de acción. En las observaciones de la izquierda, el efector se mueve hacia la posición indicada por el subobjetivo a medida que se ejecuta el fragmento.

### Por qué el mismo horizonte de subobjetivo puede contener diferentes números de pasos

Cada conjunto de datos conserva su frecuencia de control nativa. A $h$ Hz, un fragmento de acción que abarca $\tau$ segundos contiene $\mathrm{round}(\tau h)$ pasos. El paso $i$ se codifica en su tiempo transcurrido $i/h$. Para un horizonte de 1,2 segundos, los datos a 5 Hz proporcionan seis pasos y los datos a 20 Hz proporcionan 24 pasos. El paso 3 a 5 Hz y el paso 12 a 20 Hz ocurren ambos a los 0,6 segundos, por lo que reciben la misma codificación de posición temporal.

Para un experimento controlado en LIBERO, los autores submuestrean las mismas demostraciones a 20 Hz para crear versiones a 5 Hz y 10 Hz. Las tareas, la morfología del robot y las demostraciones de origen se comparten entre las distintas tasas. Mezclar frecuencias sin codificación de tiempo físico reduce el éxito en relación con la referencia de 20 Hz. Añadir la codificación recupera gran parte del rendimiento perdido. La comparación aísla cómo alinear las acciones por tiempo transcurrido afecta al entrenamiento con frecuencias mixtas.

## Experimentos: Latencia de fragmentos de acción y éxito en las tareas

### LIBERO: tasa de éxito y latencia por fragmento de acción

El artículo evalúa los conjuntos Spatial, Object, Goal y Long, con 40 tareas en total y 50 ensayos por tarea. Un ensayo se considera exitoso cuando cumple la condición de éxito de la tarea. La tabla muestra las tasas de éxito promedio y las latencias de fragmentos de acción para métodos seleccionados.

| Método | Tasa de éxito promedio en las cuatro suites | Latencia por fragmento de acción |
| --- | ---: | ---: |
| π₀.₅ | 96.9% | 220 ms |
| Fast-WAM | 97.6% | 486 ms |
| Cosmos-Policy | 98.5% | 1,413 ms |
| LingBot-VA | 98.5% | 4,482 ms |
| LaWAM | 98.6% | 187 ms |

LaWAM alcanza 99.4% en Spatial, 99.6% en Object, 98.4% en Goal y 97.0% en Long. La diferencia de latencia de aproximadamente 24 veces es relativa a LingBot-VA. Los autores miden el tiempo de los modelos en la misma GPU A100 con precisión BF16 y 10 pasos de desruido, mientras que cada método conserva su resolución de entrada y horizonte de predicción nativos. Los 187 ms cubren solo la inferencia del modelo. LaWM tiene alrededor de 230 millones de parámetros, y la política completa tiene alrededor de 2,3 mil millones.

![Tasa de éxito media en LIBERO frente a latencia de inferencia del modelo por fragmento de acción](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/libero_latency.png)

El eje horizontal es la latencia de inferencia por fragmento, y el eje vertical es la tasa de éxito media en LIBERO. El tamaño del círculo representa el número de parámetros. El sector rosa representa la fracción de parámetros en el modelo del mundo.

### RoboTwin y robots físicos: lo que los promedios no muestran

RoboTwin 2.0 evalúa 50 tareas bimanuales, con 100 ensayos por tarea en cada una de dos condiciones: escenas limpias y escenas aleatorizadas. LaWAM alcanza 92.64% y 89.80%, respectivamente, para un promedio combinado de 91.22%. Fast-WAM alcanza 91.98% y 90.52% en las mismas condiciones. LaWAM lidera en escenas limpias y queda ligeramente por detrás de Fast-WAM bajo aleatorización. En la tarea de abrir el microondas, LaWAM obtiene 41% y 43%, en comparación con 95% y 91% para Motus.

Los autores utilizan un brazo Franka para tareas de pick-and-place y apertura de cajones, y un Quanta X1 para doblar toallas y despejar mesas. LaWAM tiene éxito en 28, 26 y 27 de 30 ensayos, respectivamente, en las tres primeras tareas. Un ensayo de despeje de mesa solo se considera exitoso si el robot completa las ocho subtareas. Con el mismo checkpoint, LaWAM despeja la mesa en 21 de 50 ensayos bajo iluminación normal y en 12 de 50 con iluminación adicional de colores. La menor tasa de éxito bajo iluminación coloreada muestra cuánto puede variar el resultado con las condiciones de observación en esta tarea de largo horizonte.

![Robots físicos realizando pick-and-place, apertura de cajones, doblado de toallas y despeje de mesas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/real_world_rollouts.png)

Lee cada secuencia de izquierda a derecha. El ejemplo de despeje de mesa continúa a lo largo de dos filas e incluye despejar pañuelos, un vaso de papel, platos, un cuenco y una cuchara.

### ¿Se pueden reutilizar las mismas acciones latentes en distintas escenas?

Los autores extraen una secuencia de acciones latentes de un video de origen y la aplican a observaciones iniciales de distintas escenas y morfologías de robot. Esto ilustra cómo LaWM asigna el mismo código de transición a cambios específicos del contexto en las características espaciales. Estas son predicciones cualitativas de características en lazo abierto. Los ensayos en lazo cerrado anteriores miden el éxito en el control real.

![Despliegues de características a partir de acciones latentes compartidas en distintas escenas y morfologías de robot](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/lawam/lawm_dynamics.png)

La fila superior es el video de origen utilizado para inferir las acciones latentes. Cada fila restante comienza con una imagen inicial y sus características visuales. Las cuadrículas de colores posteriores muestran las predicciones de LaWM en instantes sucesivos.

### Ablación: ¿qué aporta el subobjetivo predicho a la generación de acciones?

Las ablaciones en LIBERO-10 utilizan como referencia una variante que **omite el preentrenamiento de la política en la Etapa 2**. Esta alcanza 96.4%, mientras que el modelo completo con ese preentrenamiento alcanza 97.0%. Las variantes siguientes utilizan la referencia de 96.4% y conservan la pérdida de acción.

| Configuración | Tasa de éxito |
| --- | ---: |
| Referencia sin preentrenamiento de la política en la Etapa 2 | 96.4% |
| Eliminar el acondicionamiento por subobjetivo del experto en acciones manteniendo la destilación y la supervisión de características futuras | 94.6% |
| Eliminar Knowledge Insulation | 94.2% |
| Eliminar la destilación de acciones latentes | 93.4% |
| Predecir características futuras directamente, omitiendo la interfaz de acciones latentes | 94.4% |
| Usar un adaptador con el mismo número de parámetros | 91.4% |
| VLA base | 91.0% |

Eliminar la entrada de subobjetivo del experto en acciones reduce el éxito en 1.8 puntos porcentuales. Esta comparación prueba directamente el valor de permitir que el experto lea las características predichas en la inferencia. Los controles de predicción directa y adaptador con parámetros equivalentes ponen a prueba el papel de la interfaz de acciones latentes y si la mejora se explica únicamente por una mayor capacidad.

## Integración con LeRobot y diferencias de evaluación

El checkpoint de LIBERO para LeRobot publicado incluye normalización y procesamiento del efector. Con `action_horizon=8`, predice ocho pasos de control por fragmento. Con `n_action_steps=8`, ejecuta los ocho antes de predecir un nuevo fragmento a partir de la observación más reciente. La cabeza de acción rellena su secuencia interna hasta `chunk_size=50`. `policy.path` carga el checkpoint `model.safetensors` en formato LeRobot. Los pesos originales `.pt` de los autores requieren conversión antes de cargarse mediante esta interfaz.

Para un conjunto de datos multicámara diferente, `primary_image_features` y `wrist_image_features` especifican los roles de las vistas principal y de muñeca. `lam_image_feature` selecciona qué vista principal proporciona los fotogramas temporales para el modelo de acciones latentes.

LeRobot informa de **1,970 éxitos en 2,000 ensayos (98.5%)** para el checkpoint publicado en las cuatro suites LIBERO con MuJoCo 3.3.2. El artículo informa de una tasa de éxito promedio de **98.6%** en su tabla de experimentos.

## Conclusión

En el ejemplo del cajón, LaWAM predice las características de la escena al final del fragmento de acción actual. El experto en acciones las utiliza para generar los controles para alcanzar, cerrar el efector o tirar. La comparación de latencia en LIBERO muestra que la política puede utilizar un futuro predicho manteniendo rápida la generación de fragmentos de acción. Eliminar el subobjetivo del experto en acciones reduce el éxito en LIBERO-10, lo que muestra que las características espaciales predichas ayudan a la generación de acciones en esa evaluación.

Los grandes movimientos de cámara pueden interferir con el aprendizaje de acciones latentes, y las deformaciones sutiles de telas son poco frecuentes en los datos de entrenamiento. La caída en el éxito al despejar la mesa bajo iluminación adicional de colores muestra que las condiciones de observación siguen siendo importantes para tareas de largo horizonte.

</div>
