---
description: "Una lectura detallada de GR00T 2: predicción conjunta de video y acciones, transferencia de habilidades entre cuerpos, adaptación rápida, control agente y loco-manipulación de cuerpo completo a bordo."
title: "GR00T 2: Cómo el modelado mundo-acción impulsa la generalización y la adaptación"
hide_title: true
keywords: [Paper Deep-Dive, GR00T 2, World-Action Model, WAM, Cross-Embodiment Transfer, Agentic Control, Whole-Body Loco-Manipulation]
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-history.jpg
slug: /robotics/paper_reading_gr00t_2
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-10
createdAt: '2026-11-10'
updatedAt: '2026-11-10'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_gr00t_2/
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Predicción conjunta: conectando el video futuro y las acciones del robot",
    "id": "joint-prediction-connecting-future-video-and-robot-actions",
    "level": 2
  },
  {
    "value": "¿Por qué predecir el futuro además de la acción?",
    "id": "why-predict-the-future-as-well-as-the-action",
    "level": 3
  },
  {
    "value": "De las representaciones de entrada a la generación conjunta",
    "id": "from-input-representations-to-joint-generation",
    "level": 3
  },
  {
    "value": "Entrenamiento con supervisión de video y acción",
    "id": "training-with-video-and-action-supervision",
    "level": 3
  },
  {
    "value": "Entrenamiento multi-fuente: construyendo una base para habilidades adaptables",
    "id": "multi-source-training-building-a-foundation-for-adaptable-skills",
    "level": 2
  },
  {
    "value": "Qué aporta cada fuente de datos",
    "id": "what-each-data-source-contributes",
    "level": 3
  },
  {
    "value": "De un prior de video a acciones de robot",
    "id": "from-a-video-prior-to-robot-actions",
    "level": 3
  },
  {
    "value": "¿Escalar video humano ayuda en robots reales?",
    "id": "does-scaling-human-video-help-on-real-robots",
    "level": 3
  },
  {
    "value": "X-Adaptabilidad: transferencia de habilidades entre cuerpos",
    "id": "x-adaptability-cross-embodiment-skill-transfer",
    "level": 2
  },
  {
    "value": "Las demostraciones humanas enseñan la tarea; los datos del robot la anclan en el cuerpo objetivo",
    "id": "human-demonstrations-teach-the-task-robot-data-grounds-it-in-the-target-body",
    "level": 3
  },
  {
    "value": "Transferencia desde pinzas de mano y manos vestibles",
    "id": "transferring-from-handheld-grippers-and-wearable-hands",
    "level": 3
  },
  {
    "value": "Adaptación rápida y ejecución fiable",
    "id": "fast-adaptation-and-reliable-execution",
    "level": 2
  },
  {
    "value": "Mejorar la precisión de ejecución con pocas demostraciones",
    "id": "improving-execution-precision-with-a-few-demonstrations",
    "level": 3
  },
  {
    "value": "Aprendizaje por refuerzo para habilidades ricas en contacto",
    "id": "reinforcement-learning-for-contact-rich-skills",
    "level": 3
  },
  {
    "value": "GR00T 2 agente: control y direccionamiento",
    "id": "agentic-gr00t-2-control-and-steering",
    "level": 3
  },
  {
    "value": "GR00T 2 Turbo: loco-manipulación de cuerpo completo a bordo",
    "id": "gr00t-2-turbo-onboard-whole-body-loco-manipulation",
    "level": 2
  },
  {
    "value": "Qué ahorra la compresión y qué cuesta",
    "id": "what-compression-saves-and-what-it-costs",
    "level": 3
  },
  {
    "value": "Conectando las predicciones de tarea con el control de cuerpo completo de alta frecuencia",
    "id": "connecting-task-predictions-to-high-frequency-whole-body-control",
    "level": 3
  },
  {
    "value": "Simulación para entrenamiento y evaluación",
    "id": "simulation-for-training-and-evaluation",
    "level": 2
  },
  {
    "value": "Añadiendo experiencia para el cuerpo objetivo",
    "id": "adding-experience-for-the-target-embodiment",
    "level": 3
  },
  {
    "value": "Uso de gemelos digitales para filtrar modelos",
    "id": "using-digital-twins-to-screen-models",
    "level": 3
  },
  {
    "value": "Conclusión: convertir un modelo compartido en habilidades utilizables",
    "id": "conclusion-turning-a-shared-model-into-usable-skills",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-gr00t-2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-gr00t-2-title">GR00T 2: Cómo el modelado mundo-acción impulsa la generalización y la adaptación</h1>
  <p className="paper-reading-lead">GR00T 2: Escalando modelos fundacionales de robots para generalización, destreza y adaptación</p>
  <p>NVIDIA · Noviembre de 2026</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>Modelo mundo-acción</li><li>Transferencia entre cuerpos</li><li>Adaptación rápida</li><li>Control de cuerpo completo</li>
  </ul>
  <a className="paper-reading-source-link" href="https://research.nvidia.com/labs/gear/gr00t-2/" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Project</span><span>Visitar la página del proyecto de NVIDIA</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
  <div>
    <a className="paper-reading-source-link" href="https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf" target="_blank" rel="noopener noreferrer">
      <span className="paper-reading-source-tag">PDF</span><span>Leer el whitepaper</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

¿Puede un robot aprender a colocar papel de filtro en un embudo observando a una persona hacerlo? Si un robot ya conoce el orden de los pasos en una tarea de ensamblaje, ¿pueden unas pocas demostraciones enseñarle a hacer un contacto más preciso? ¿Cómo puede un humanoide usar la misma habilidad mientras mantiene el equilibrio? Estas preguntas comparten un objetivo: aprender habilidades a partir de una amplia gama de experiencias y adaptarlas a un robot, tarea y condición de operación concretos.

**La pregunta central en GR00T 2 es si aprender conjuntamente cómo cambia el mundo y cómo actúa un robot puede hacer que las habilidades sean más fáciles de transferir, adaptar y ejecutar.**

**Resumen del proyecto, parafraseado:** GR00T 2 es un modelo mundo-acción que predice conjuntamente video futuro y acciones del robot. Aprende de videos humanos, demostraciones capturadas con dispositivos de mano y datos de robots. NVIDIA demuestra transferencia de habilidades entre cuerpos, adaptación con pocos ejemplos y control agente. GR00T 2 Turbo extiende el enfoque a la loco-manipulación de cuerpo completo en humanoides.

**Nota de lectura:** La predicción conjunta es el enfoque de modelado común. La alineación entre cuerpos, el post-entrenamiento de tareas, un agente de razonamiento y un controlador de cuerpo completo abordan cada uno una parte distinta del problema. Este artículo sigue el camino desde el entrenamiento del modelo hasta la transferencia y ejecución de habilidades, manteniendo diferenciada la contribución del modelo fundacional de los resultados del sistema completo.

## Predicción conjunta: conectando el video futuro y las acciones del robot

### ¿Por qué predecir el futuro además de la acción?

Un modelo convencional de visión-lenguaje-acción (VLA) genera acciones de control a partir de observaciones de cámara, instrucciones en lenguaje y estado del robot. Las demostraciones de robots proporcionan objetivos de acción para el entrenamiento. Sin embargo, la mayoría de los videos humanos no vienen con comandos de robot que puedan servir como el mismo tipo de supervisión.

Los movimientos humanos y de robots difieren, pero el video puede describir los cambios que producen: el papel de filtro se mueve hacia un embudo, o un enchufe se acerca a un tomacorriente y hace contacto. La generación de video ofrece una forma de aprender esos cambios. La recolección de datos entre cuerpos y la reasignación de movimiento ayudan a mapear movimientos de diferentes cuerpos a representaciones adecuadas para el entrenamiento.

GR00T 2 conecta estas ideas en un **modelo mundo-acción (WAM)**. Una red compartida genera conjuntamente observaciones visuales futuras y acciones. La predicción de video describe cómo se desarrolla una interacción, mientras que la predicción de acción describe lo que debería hacer el robot actual.

Esto se basa en ideas discutidas en otras partes de la serie. VLA-JEPA usa la predicción de estados futuros para mejorar sus representaciones; LingBot-VA usa predicciones futuras para el control. GR00T 2 extiende el modelado conjunto video-acción a entrenamiento a gran escala con múltiples fuentes de datos y cuerpos de robot. Estas son comparaciones de decisiones de diseño, no clasificaciones de rendimiento entre artículos.

### De las representaciones de entrada a la generación conjunta

El modelo recibe video reciente de múltiples cámaras, una instrucción en lenguaje y el estado del robot. El historial en la demostración de NVIDIA cubre 0,8 segundos. A partir de estas entradas, el modelo predice video futuro y una secuencia de acciones llamada un **trozo de acción**.

Un autoencoder variacional de video (VAE) comprime el video bruto en latentes, que luego se tokenizan para la red compartida. El lenguaje se codifica como características de instrucción. Pequeños módulos específicos del cuerpo conectan el estado y las acciones del robot con la red compartida. Aquí, **cuerpo** incluye la estructura física del robot, la configuración de cámaras y la interfaz de acción. La misma instrucción de agarrar papel de filtro requiere diferentes objetivos articulares en distintas manos de robot.

La conexión clave está dentro del Transformer compartido. Las representaciones de video intercambian información a través del tiempo y entre vistas de cámara. Los tokens de acción pueden atender a tokens de video, **incluido el video futuro que se está generando**. Esto da a la predicción de acción acceso a la estimación del modelo de cómo cambiará la escena.

[El ejemplo de ensamblaje Dexter de NVIDIA](https://research.nvidia.com/labs/gear/gr00t-2/#model) muestra la cámara de la cabeza y ambas cámaras de muñeca. **La imagen superior es el historial de observación real; la imagen inferior es el futuro generado a partir de él.** Los cambios en las manos y el camión en la imagen inferior son predicciones.

![Historial de observación real de las tres cámaras de Dexter](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-history.jpg)

![Fotogramas futuros que GR00T 2 generó para las tres cámaras a partir del mismo historial de observación](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-future.jpg)

Considera la tarea del papel de filtro. El papel sigue en la mano del robot en el fotograma observado. La rama de video predice cómo entrará en contacto con el embudo, mientras que la rama de acción genera los movimientos correspondientes de muñeca y dedos. Ambas salidas se refinan en la misma red. La política no tiene que renderizar un video RGB completo y pasarlo a un controlador separado.

Por último, los módulos específicos del cuerpo decodifican la representación compartida en controles para el robot actual. El modelo puede compartir lo que aprende sobre las interacciones mientras preserva el significado de las acciones para cada cuerpo.

### Entrenamiento con supervisión de video y acción

GR00T 2 usa **flow matching** para aprender a recuperar video futuro y acciones a partir de ruido. Para ilustrar la idea, usa la trayectoria recta estándar de abajo, con $Y$ denotando un tensor objetivo de latentes de video o acciones:

$$
X_s=(1-s)Y+s\epsilon,
\qquad u=\epsilon-Y.
$$

Aquí, $\epsilon$ es ruido gaussiano con la misma forma, y $s\in[0,1]$ es el tiempo interno de generación del modelo. En $s=1$, la entrada es ruido; en $s=0$, es el objetivo limpio. Condicionado en las observaciones, la red toma la entrada ruidosa $X_s$ y aprende la dirección objetivo $u$. Los objetivos de video y de acción proporcionan supervisión por separado y actualizan la red compartida.

Tomemos un único elemento de acción. Si su objetivo normalizado es 0.6 y su valor de ruido es −0.2, el punto medio es `0.5×0.6 + 0.5×(−0.2) = 0.2`, y la dirección objetivo es `−0.2−0.6 = −0.8`. En la inferencia, la integración va desde el ruido hacia los datos, en la dirección de tiempo de generación decreciente, por lo que el valor se mueve hacia 0.6. El modelo real aprende sobre los tensores completos de video y acción; el ejemplo aísla un solo elemento.

Las muestras solo de video aún pueden supervisar la predicción visual futura. La supervisión de acción se aplica donde hay etiquetas de acción válidas disponibles. Por lo tanto, los videos humanos pueden ayudar a entrenar la red compartida que genera acciones de robot sin requerir un conjunto completo de etiquetas de control de robot para cada clip.

Durante el entrenamiento, el futuro observado proporciona el objetivo. Durante la inferencia, el modelo comienza desde ruido nuevo y genera latentes de video futuros y un bloque de acciones. El robot ejecuta parte del bloque, lee nuevas observaciones de cámara y estado, y comienza la siguiente ronda. **Los pasos internos de eliminación de ruido y los pasos de ejecución física se ejecutan en diferentes escalas de tiempo.** El robot aún necesita observaciones reales para verificar una predicción de que el papel de filtro está en su lugar.

## Entrenamiento Multifuente: Construyendo una Base para Habilidades Adaptables

### Qué Aporta Cada Fuente de Datos

| Fuente de datos | Cantidad usada para entrenamiento | Qué aporta |
|---|---:|---|
| Video humano egocéntrico | 402,730 horas | Una amplia gama de tareas, objetos e interacciones mano–objeto |
| Demostraciones con pinza UMI de mano | 10,184 horas en 2,897 tareas | Demostraciones de movimiento y agarre en una forma más cercana a la manipulación robótica |
| Teleoperación de robot | Unas 23,500 horas | Apariencia específica de la encarnación, estado y control ejecutable |

El video humano proviene de Human-1M. La tabla muestra la cantidad filtrada usada por GR00T 2. UMI captura demostraciones con una pinza de mano. Los datos del robot abarcan pinzas paralelas, manos diestras y humanoides.

Las fuentes se complementan entre sí. La experiencia humana amplía la cobertura de tareas, los dispositivos de mano hacen que las demostraciones dependan menos del acceso al robot, y los datos del robot conectan esa experiencia con el control físico. Las muestras humanas con movimiento de mano rastreado también pueden proporcionar supervisión de movimiento. Las muestras sin acciones válidas aún pueden entrenar la predicción de video futuro.

El entrenamiento conjunto también depende de la alineación: las observaciones, los fotogramas futuros, el lenguaje y las acciones deben referirse a la misma interacción. “Coloca el papel de filtro en el embudo con la mano derecha” da una supervisión más específica para un paso que “termina el experimento” a lo largo de toda una grabación. El filtrado, la segmentación y la anotación de datos ayudan a establecer esta correspondencia.

### De un Prior de Video a Acciones de Robot

El entrenamiento procede en tres etapas:

1. **Preentrenamiento de video de vista única.** Inicializar desde un modelo de difusión de video preentrenado y aprender el futuro de las interacciones encarnadas a partir de observaciones humanas y de robots.
2. **Entrenamiento de video-acción multivista.** Añadir módulos de estado y acción específicos de la encarnación y entrenar con observaciones de múltiples cámaras y etiquetas de acción válidas.
3. **Entrenamiento de video-acción con ponderación aumentada del robot.** Aumentar la contribución de las demostraciones de robot mientras se conservan las otras fuentes, acercando el modelo compartido a las condiciones que enfrentará en un robot.

Estas etapas producen un modelo fundacional que puede ejecutarse directamente o adaptarse más. Conectan el preentrenamiento de video con el control del robot y explican por qué la adaptación económica descrita más adelante depende del preentrenamiento a gran escala.

### ¿Ayuda Escalar el Video Humano en Robots Reales?

Los autores entrenan modelos con 0%, 1%, 10% y 100% de los datos de video humano, luego evalúan tanto las ejecuciones generadas como la ejecución en robots reales en 72 tareas Dexter. A medida que aumenta la cantidad de video humano, el progreso medio de la tarea sube de **64% a 77%** en las ejecuciones generadas y de **50% a 70%** en el robot.

![Curvas de escalado de video humano de NVIDIA: progreso de ejecución de video a la izquierda, progreso de robot real a la derecha, con barras de error de 1 DE](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/human-video-scaling.png)

El panel izquierdo en [la figura de NVIDIA](https://research.nvidia.com/labs/gear/gr00t-2/#escalado-de-video-humano) muestra el progreso de ejecución de video; el derecho muestra el progreso del robot real. Las barras de error representan una desviación estándar.

La métrica es el progreso de la tarea: cuánto de una tarea se completó. Es distinta de la tasa de éxito de tarea completa. Las ejecuciones generadas y las ejecuciones en robot se puntúan por separado. El aumento en ambas medidas respalda el uso de video humano para el aprendizaje de robots así como para la predicción de video.

La cantidad de entrenamiento también cambia en estos ajustes. Los resultados respaldan el enfoque general de escalado, sin aislar los efectos de más datos y más entrenamiento. La siguiente pregunta es si la experiencia resultante se transfiere a tareas que el robot objetivo nunca ha demostrado.

## X-Adaptabilidad: Transferencia de Habilidades entre Cuerpos

### Las Demostraciones Humanas Enseñan la Tarea; los Datos del Robot la Anclan en el Cuerpo Objetivo

NVIDIA llama a esta capacidad **adaptación cruzada (X-Adapt)**. Una persona u otro dispositivo de recopilación de datos demuestra la tarea objetivo. El robot objetivo puede aportar datos de otras tareas o actividades generales, pero no proporciona ninguna demostración de la tarea objetivo.

![Figura 12 del whitepaper: retargetear el movimiento humano a la interfaz del robot y coentrenar con datos de juego de robot independientes de la tarea](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig12-human-transfer.png)

La Figura 12 sigue la tarea del papel de filtro a través del proceso de transferencia:

1. Una persona realiza la tarea llevando cámaras en la cabeza y la muñeca y equipo de seguimiento de movimiento, con vistas de cámara posicionadas para aproximar las del robot.
2. Transformar las trayectorias de la muñeca humana al marco de coordenadas del robot y retargetear las poses de la mano a objetivos de robot factibles, preservando relaciones de contacto importantes y respetando los límites articulares.
3. Coentrenar con las demostraciones de la tarea objetivo y datos de juego de robot independientes de la tarea que excluyen esa tarea. Las demostraciones muestran qué hacer; los datos de juego enseñan al modelo cómo se ve el robot objetivo y cómo se mueve.
4. En el despliegue, usar las propias observaciones del robot para predecir video futuro y acciones para ese cuerpo, luego continuar la ejecución con retroalimentación real.

Cero demostraciones teleoperadas de la tarea objetivo aún dejan espacio para experiencia del robot en otras tareas. La predicción conjunta proporciona un objetivo de aprendizaje compartido, mientras que la alineación de vistas y el retargeting de acciones ayudan a salvar las diferencias entre cuerpos.

Con 20 pruebas de robot real por tarea, la preparación del papel de filtro tiene éxito en **65%** de las pruebas. Los resultados en las cuatro tareas de laboratorio van de **10% a 65%**. La transferencia de habilidades es posible, pero la dispersión muestra que algunas tareas de manipulación fina siguen siendo difíciles de completar de forma fiable.

En [la comparación de papel de filtro de NVIDIA](https://research.nvidia.com/labs/gear/gr00t-2/#h2r), la imagen superior es una demostración humana de entrenamiento y la imagen inferior muestra a Dexter funcionando de forma autónoma. Ambos colocan papel de filtro en un embudo, usando dedos e interfaces de acción diferentes.

![Demostración humana: una mano enguantada coloca papel de filtro en un embudo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/filter-paper-human.jpg)

![Robot real: la mano de Dexter coloca papel de filtro en el mismo embudo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/filter-paper-dexter.jpg)

### Transferencia desde Pinzas de Mano y Manos Vestibles

Las demostraciones UMI están más cerca de un formato compatible con robots que el video humano ordinario. La pinza, la cámara y el marco de referencia de la acción aún pueden diferir. Transferir a YAM requiere alinear la vista de la cámara de muñeca y expresar el movimiento del efector final y el ancho de la pinza en el espacio de acción de YAM.

Solo con datos UMI, el modelo aún puede predecir un brazo humano y una pinza de mano después de una observación de YAM. Añadir datos independientes de la tarea del robot objetivo ayuda a que las predicciones reflejen la apariencia de YAM. Las pruebas en robot real determinan si la tarea se completa realmente.

En el montaje de un camión volquete de juguete, una tarea demostrada solo con la pinza de mano, YAM completa **6/10** pruebas de principio a fin. El robot objetivo no tiene ninguna demostración de esa tarea, pero aún se beneficia del preentrenamiento y de los datos independientes de la tarea. El resultado muestra transferencia entre dispositivos junto con un fallo sustancial en una tarea de horizonte largo.

DexUMI amplía este enfoque de recopilación a un exoesqueleto de cinco dedos vestible. Cuando sus articulaciones y geometría de contacto coinciden con la mano objetivo, las demostraciones humanas se mapean más fácilmente a acciones de robot para tareas bimanuales como preparar el desayuno o encender un fósforo. Una mano de robot diferente aún puede requerir retargeting de movimiento y alineación de vistas.

**Un modelo compartido puede transferir experiencia de tareas; la configuración de transferencia aún debe alinear observaciones y semántica de acciones.** Los experimentos evalúan conjuntamente el modelado conjunto, los datos de entrenamiento y la alineación. No aíslan cuánto de la ganancia proviene solo de la predicción futura.

## Adaptación Rápida y Ejecución Fiable

### Mejorar la Precisión de Ejecución con Unas Pocas Demostraciones

Después de la transferencia entre cuerpos, un robot puede seguir la secuencia correcta pero fallar en la posición de agarre, la apertura de la pinza o la alineación de contacto. Las demostraciones del robot objetivo aportan estos detalles, que la adaptación incorpora en la habilidad existente.

GR00T 2 usa **adaptación de bajo rango (LoRA)**. Mantiene los pesos base y entrena un conjunto más pequeño de actualizaciones de parámetros mientras sigue aprendiendo video futuro y acciones. Esto adapta el modelo a una tarea con menos datos y cómputo que reentrenar el modelo fundacional.

![Figura 2 del whitepaper: tasa media de éxito de Dexter-50 con cero, una o cinco demostraciones del robot objetivo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig02-few-shot.png)

Las tareas de Dexter-50 aparecen en vídeos humanos o en datos de otros robots, pero están ausentes de los propios datos de entrenamiento de Dexter. La evaluación compara el uso directo del modelo preentrenado con la adaptación usando una o cinco demostraciones por tarea:

| Demostraciones por tarea | 0 | 1 | 5 |
|---|---:|---:|---:|
| Tasa media de éxito por intento | 40% | 71% | 95% |

Cinco demostraciones suman menos de tres minutos de datos de robot por tarea. El ajuste fino correspondiente con LoRA lleva unos 30 minutos en una sola RTX 5090. Ese es el coste de adaptar un modelo fundacional existente.

Las 50 tareas se seleccionaron de un conjunto que alcanzó al menos un 80% de éxito tras cinco demostraciones. **El promedio del 95% se aplica a este conjunto seleccionado y no garantiza éxito con cinco demostraciones en tareas nuevas arbitrarias.** Además, “tuvo éxito al menos una vez en 40/50 tareas” es diferente del 40% de tasa de éxito sin demostraciones que aparece en la tabla.

La manipulación hábil muestra lo que la adaptación de tareas puede lograr. Con dos manos Sharpa de 22 GDL, Dexter puede realizar tareas de montaje y de laboratorio. NVIDIA informa de un 85% de éxito al instalar módulos de memoria. En otro ejemplo, los autores reconstruyen en simulación una tarea de uso de herramientas a partir de una demostración humana, recopilan demostraciones usando aprendizaje por refuerzo, adaptan GR00T 2 con los datos de simulación y lo transfieren a manos robóticas reales. Estos ejemplos usan post-entrenamiento de tareas.

### Aprendizaje por refuerzo para habilidades ricas en contacto

Al insertar un cable Ethernet o roscar un accesorio de tubería, una acción puede parecerse a la demostración y aun así fallar. El aprendizaje por refuerzo (RL) en el mundo real permite al robot probar acciones y usar el éxito en la tarea como retroalimentación para encontrar mejores formas de hacer contacto.

Los autores recopilan ejecuciones exitosas encontradas por RL y realizan ajuste fino desde la misma inicialización de ajuste fino supervisado (SFT) que GRPO. A esto lo llaman **autoimitación inducida por GRPO**. La interacción encuentra comportamientos efectivos y el entrenamiento supervisado los consolida.

NVIDIA destaca tres tareas ricas en contacto. En accesorios de tubería fija, inserción de cables e inserción de cargadores, el ajuste fino supervisado logra **66%, 76% y 40%** de éxito, respectivamente. La autoimitación inducida por GRPO eleva estas cifras a **88%, 94% y 96%**, con 50 intentos por tarea y política. La comparación muestra que la experiencia de la interacción puede mejorar la precisión del contacto bajo estas condiciones de tarea y evaluación.

### Agentic GR00T 2: control y direccionamiento

Incluso cuando un robot puede ensamblar una pieza, si la deja caer queda una decisión por tomar: continuar, reintentar o recuperar primero la pieza. **Agentic GR00T 2 es un sistema de control en capas que usa GR00T 2 como su política de manipulación.** Un agente de razonamiento de nivel superior descompone la tarea, elige el siguiente paso y comprueba los resultados. GR00T 2 genera acciones a partir de instrucciones y observaciones, y el robot las ejecuta.

A través de un servidor de herramientas compartido, el agente lee imágenes de cámara y el estado del robot, llama a GR00T 2 mediante la WAM API y usa herramientas de code-as-policy (CaP) cuando es necesario. El agente observa el resultado antes de elegir qué hacer a continuación. **El control agentic organiza el bucle de retroalimentación; el direccionamiento visual proporciona objetivos espaciales para el paso actual.**

![Diagrama de tiempo de ejecución de Agentic GR00T 2 de NVIDIA, que muestra el agente, el servidor de herramientas, la ejecución y la retroalimentación del entorno](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/agentic-runtime.png)

Lee el [diagrama de tiempo de ejecución de NVIDIA](https://research.nvidia.com/labs/gear/gr00t-2/#agentic-control) de izquierda a derecha para ver cómo una tarea se convierte en un comando de ejecución. Las flechas azules muestran cómo las observaciones regresan a la política o al servidor de herramientas.

#### Control agentic: secuenciar tareas y recuperarse de fallos

En el montaje con robots reales, GR00T 2 realiza la mayor parte de la manipulación mientras el agente supervisa el progreso. Si una pieza cae o el progreso se estanca, el agente puede usar una herramienta de recuperación para volver a agarrar la pieza o reorganizar la escena y luego devolver el control a GR00T 2. Esto sitúa las habilidades individuales dentro de un bucle observar–razonar–actuar–verificar para tareas de largo horizonte.

![Figura 7 del whitepaper: éxito en montaje de largo horizonte con demostraciones correctivas y recuperación agentic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig07-agent-recovery.png)

El panel izquierdo de la Figura 7 informa de 100 intentos por tarea y método. Al inicio de cada intento, las piezas se vierten sobre una mesa, por lo que el robot debe completar el montaje desde una disposición desordenada:

| Método | Avión de juguete | Tractor de juguete | Coche Hot Wheels |
|---|---:|---:|---:|
| Ajuste fino supervisado (SFT) | 69/100 | 51/100 | 23/100 |
| Añadir demostraciones correctivas en estados encontrados por la política (DAgger) | 84/100 | 71/100 | 78/100 |
| Añadir recuperación agentic | 98/100 | 97/100 | 97/100 |

**Las tasas de éxito del 97% o superiores son resultados del sistema combinado, que incluye demostraciones correctivas y recuperación.** Algunos fallos aún se marcaron como completos aunque los tornillos no estuvieran totalmente apretados. Comprobar el estado físico sigue siendo un reto.

#### Direccionamiento visual: hacer que el objetivo sea inequívoco

El lenguaje por sí solo puede dejar poco claro qué recoger, dónde colocarlo o qué brazo debe actuar. En el mismo sistema, el agente de razonamiento marca puntos de agarre y liberación en la vista de cámara actual, usa el color para indicar el brazo y pasa esas marcas a GR00T 2 junto con una instrucción de paso. GR00T 2 genera los movimientos de aproximación, agarre, transporte y liberación. Luego el agente comprueba si debe continuar o reintentar.

![Clasificación de residuos con Dexter: el agente marca el objeto objetivo y su contenedor de destino en la vista de cámara](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/dexter-steering-poster.jpg)

El [ejemplo de clasificación de Dexter de NVIDIA](https://research.nvidia.com/labs/gear/gr00t-2/#steering) muestra el objeto y el contenedor seleccionados. Las marcas especifican qué objeto mover y adónde debe ir en ese paso.

Las marcas de entrenamiento pueden extraerse del estado de las manos y el efector final en demostraciones existentes. El modelo aprende a interpretar estas marcas durante el entrenamiento sin requerir una nueva colección de demostraciones anotadas.

En las pruebas de corto horizonte **qué-y-dónde** de YAM, cada configuración tiene 90 intentos. La instrucción de tarea por sí sola produce un **40%** de éxito. Las instrucciones de paso del planificador alcanzan el **66%**, y añadir marcas visuales a esas instrucciones de paso llega al **92%**. Los tres resultados corresponden al mismo subconjunto de tareas y deben mantenerse separados de agregados que incluyan otros tipos de instrucciones.

Con direccionamiento visual, YAM completa **17/20** intentos de clasificación de residuos de largo horizonte y **3/10** intentos de desmontaje de placas. Completar toda la tarea de clasificación sigue siendo difícil para Dexter. Los puntos de agarre y liberación también dejan sin especificar la orientación final y los movimientos intermedios, como verter o limpiar. El lenguaje y las habilidades de manipulación aprendidas siguen aportando esa información.

La adaptación rápida y el aprendizaje por refuerzo mejoran las habilidades individuales. Agentic GR00T 2 combina ejecución, verificación y recuperación en tareas más largas. Desplegar la predicción conjunta en un humanoide en movimiento también requiere abordar el coste de inferencia y el control de todo el cuerpo.

## GR00T 2 Turbo: locomani­pulación de todo el cuerpo a bordo

### Lo que ahorra la compresión y lo que cuesta

Un humanoide necesita manipular objetos mientras se mueve y mantiene el equilibrio. El coste de la predicción conjunta vídeo–acción afecta a si una política puede hacer esto en el hardware a bordo del robot.

**GR00T 2 Turbo** usa un Transformer conjunto de vídeo–acción más pequeño con 2B parámetros y un codificador de vídeo de mayor compresión. Una representación de vídeo más compacta reduce el cómputo manteniendo la predicción conjunta y el mismo horizonte de acción.

![Figura 19 del whitepaper: latencia de predicción de Turbo antes y después de la optimización de inferencia en una estación de trabajo y en hardware a bordo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig19-turbo-latency.png)

La Figura 19 compara el tiempo de predicción para el mismo checkpoint antes y después de la optimización de inferencia. En la configuración G1 optimizada, una predicción tarda unos **38 ms** en una RTX 5090 y **124 ms** en la Jetson Thor a bordo. Esto mide la predicción del modelo, no la respuesta completa, que también incluye preparación de observaciones, transmisión y control. La mejora refleja toda la configuración de inferencia más que la compresión del modelo por sí sola.

Hay una compensación entre velocidad y capacidad. En la comparación tarea por tarea de NVIDIA, Turbo supera a GR00T 2 en los accesorios de tubería fija de YAM y en la inserción de cables en disyuntores, pero queda por detrás en las otras cuatro tareas de YAM. En Dexter, Turbo queda por detrás en cinco de seis tareas y empata en la sexta. Sus requisitos de cómputo se adaptan mejor al uso a bordo, mientras que el rendimiento en manipulación fina aún debe comprobarse tarea por tarea.

### Conectar las predicciones de tareas con el control de todo el cuerpo de alta frecuencia

![Figura 9 del whitepaper: Turbo genera un plan de movimiento y SONIC gestiona el control de todo el cuerpo de alta frecuencia y el equilibrio](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/fig09-whole-body-stack.png)

La Figura 9 separa la predicción a nivel de tarea del control corporal. Un modelo de razonamiento selecciona la tarea. Turbo predice conjuntamente futuros tokens de vídeo y de movimiento de todo el cuerpo. El **controlador de todo el cuerpo SONIC** convierte esos tokens en objetivos de articulaciones usando el estado actual del robot para seguir el movimiento y mantener el equilibrio.

Turbo planifica aproximadamente una vez por segundo y genera **1,6 segundos** de movimiento por bloque. SONIC se ejecuta a **50 Hz**. El controlador de nivel inferior mantiene el robot en movimiento sin requerir que el modelo genere una nueva predicción de vídeo cada 20 milisegundos. Los componentes de ejecución se ejecutan a bordo; el modelo de razonamiento de nivel superior se ejecuta por separado.

El sistema G1 completa **48/48** intentos de servir palomitas y **28/30** intentos de despejar una mesa, pero solo **14/30** intentos en una tarea de limpieza de todo el cuerpo más difícil. La predicción conjunta puede soportar la locomani­pulación en el mundo real, con un margen claro para mejorar la fiabilidad en tareas más difíciles.

![Demostración de palomitas G1 de NVIDIA: un humanoide sostiene una bandeja junto a la máquina de palomitas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/g1-popcorn.jpg)

En la [demostración oficial de palomitas](https://research.nvidia.com/labs/gear/gr00t-2/#whole-body), manejar la bandeja y entregar las palomitas requiere que los movimientos de la mano y el movimiento de todo el cuerpo trabajen juntos.

## Simulación para entrenamiento y evaluación

### Añadir experiencia para la encarnación objetivo

Recopilar demostraciones de cuerpo completo y aprender por prueba y error en un robot real es costoso. La simulación puede complementar los datos del robot real con más variación en las tareas y en los movimientos del robot. Las pruebas en el mundo real luego verifican si las habilidades se transfieren.

Manteniendo fijos los datos de entrenamiento reales, añadir demostraciones simuladas eleva la tasa de éxito de Turbo en el robot real en las tareas G1 fuera de distribución de **6.7% a 63.3%**. GR00T 1.7 alcanza **40.0%** con datos de simulación. La comparación respalda los datos de simulación como una forma de mejorar la generalización en el mundo real en este contexto; no implica que cada habilidad simulada se vaya a transferir directamente.

En el [ejemplo de recogida de corona con G1 de NVIDIA](https://research.nvidia.com/labs/gear/gr00t-2/#whole-body), la imagen superior es la simulación y la imagen inferior es el robot real. Compara las posiciones de los objetos sobre la mesa y la postura inicial del robot.

![Simulación: G1 mira hacia la corona y los objetos distractores sobre la mesa](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/g1-crown-sim.jpg)

![Mundo real: G1 afronta la misma tarea de recogida de corona](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t-2/g1-crown-real.jpg)

Estos componentes abordan diferentes partes de la loco-manipulación de cuerpo completo: Turbo reduce el coste de predicción, SONIC conecta las predicciones con el control físico y la simulación añade experiencia para aprender nuevas habilidades.

### Uso de gemelos digitales para filtrar modelos

La simulación también ayuda a los desarrolladores a filtrar modelos antes de las pruebas con robots reales. Los autores utilizan vídeos de robots, escaneos y fotografías para reconstruir el entorno de la tarea, incluyendo geometría, apariencia y modelos de colisión. Pruebas automatizadas y comentarios humanos ayudan a perfeccionar los gemelos digitales resultantes.

En **25 tareas YAM y 14 políticas**, las tasas de éxito simuladas y en el robot real tienen una correlación de Pearson de **0.92**. Esta correspondencia permite a los desarrolladores filtrar configuraciones de procesamiento de datos o de inferencia en simulación antes de probarlas en el hardware.

El resultado respalda la simulación como herramienta de desarrollo para estas tareas. Nuevas condiciones de contacto, encarnaciones o métodos de entrenamiento siguen requiriendo comprobaciones frescas de cuán de cerca la simulación sigue a la realidad. Una correlación alta por sí sola no valida la ejecución en el mundo real.

## Conclusión: convertir un modelo compartido en habilidades utilizables

GR00T 2 aprende conjuntamente los cambios visuales futuros y las acciones del robot, lo que permite que vídeos humanos, demostraciones con dispositivos de mano y datos de robots contribuyan a una base común de habilidades. Los experimentos entre encarnaciones muestran cómo la experiencia en tareas puede transferirse. La adaptación con pocos ejemplos y el aprendizaje por refuerzo mejoran operaciones específicas. Un agente de razonamiento secuencia tareas, identifica objetivos y gestiona la recuperación. Turbo y un controlador de cuerpo completo llevan la predicción conjunta a la loco-manipulación a bordo.

**El modelado conjunto proporciona la base compartida; la alineación y el post-entrenamiento convierten esa base en habilidades para tareas; el control y la retroalimentación ponen esas habilidades en práctica.** Los tres grupos de capacidades comparten un enfoque de modelado y dependen de sus propios datos, entrenamiento y componentes de sistema.

Los resultados respaldan el potencial de escalar este enfoque, con límites claros. Las demostraciones cero de la tarea objetivo siguen dependiendo de la experiencia previa con la encarnación objetivo. El alto éxito con cinco ejemplos depende de la selección de tareas. Verificar los estados físicos durante tareas largas y llevar a cabo operaciones difíciles de cuerpo completo sigue siendo un desafío. Un futuro predicho plausible no es confirmación de que el mundo físico haya cambiado como se predijo. La fiabilidad en última instancia depende de la retroalimentación real y de la evaluación en la tarea prevista.

</div>
