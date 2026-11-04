---
description: "Cómo ejecutar NVIDIA GR00T N1 en reBot Arm y SO-ARM101: análisis de la arquitectura de doble sistema de GR00T N1, la pirámide de datos, los chunks de acciones por flow matching y la adaptación robótica."
title: "Cómo ejecutar NVIDIA GR00T N1 en reBot Arm y SO-ARM101"
hide_title: true
keywords:
  - Análisis en profundidad de artículo
  - gr00t_n1
  - Aprendizaje de robots
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Brazo
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_gr00t_n1
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/robotics/paper_reading_gr00t_n1/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-gr00t_n1-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ANÁLISIS EN PROFUNDIDAD DE ARTÍCULOS</span>
  <h1 id="paper-reading-gr00t_n1-title">Cómo ejecutar NVIDIA GR00T N1 en reBot Arm y SO-ARM101</h1>
  <p className="paper-reading-lead">GR00T N1: Un modelo base abierto para robots humanoides generalistas</p>
  <ul className="paper-reading-badges" aria-label="En esta guía">
    <li>Robots humanoides</li>
    <li>Arquitectura de doble sistema</li>
    <li>Pirámide de datos</li>
    <li>Flow matching</li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/abs/2503.14734" target="_blank" rel="noopener noreferrer" aria-label="Leer el artículo de GR00T N1 en arXiv">
    <span className="paper-reading-source-tag">arXiv</span>
    <span>Leer el artículo</span>
    <span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

## GR00T N1.7: Adaptación y Fine-Tuning

Esta lectura cubre el paper original de GR00T N1. Para trabajo práctico con **GR00T N1.7** (`nvidia/GR00T-N1.7-3B`), sigue el curso existente de reBot:

- [Encarnación del robot y arquitectura de GR00T](/es/robotics/rebot_physical_ai_course_chapter_19/)
- [Preparar un dataset VLA para reBot](/es/robotics/rebot_physical_ai_course_chapter_20/)
- [Fine-Tuning de GR00T N1.7 para el brazo reBot](/es/robotics/rebot_physical_ai_course_chapter_21/)
- [Desplegar el modelo con Fine-Tuning en el robot](/es/robotics/rebot_physical_ai_course_chapter_22/)

Los ajustes experimentales de N1 que se comentan a continuación pertenecen al paper original. Usa los tutoriales de N1.7 para la configuración específica de entrenamiento y despliegue de esa versión.


## Requisitos previos

### De ACT a GR00T N1: el bucle de aprendizaje es el mismo

Si has usado LeRobot + ACT, este flujo de trabajo te resultará familiar:

```text
Human teleoperation
    ↓
Collect camera / state / action data
    ↓
Organize an episode dataset
    ↓
Train a policy
    ↓
Observation → Action chunk → On-robot execution
```

GR00T N1 sigue respondiendo a la misma pregunta:

> Dado lo que ve el robot, su estado actual y la petición del usuario, ¿cómo debería moverse a continuación?
> 
> 

ACT normalmente aprende un robot y una familia de tareas a partir de demostraciones. GR00T N1 busca priors generales a partir de múltiples robots, vídeos humanos y datos sintéticos antes de adaptarse a un robot real concreto.

![GR00T N1 Análisis en profundidad: 1.1 De ACT a GR00T N1: el bucle de aprendizaje es el mismo (imagen 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-11-en.png)


ACT empieza con una habilidad concreta; GR00T N1 primero aprende una base común entre cuerpos y tareas, y luego aprende a usar el robot actual.

### Observación, estado, acción y encarnación

Los tres términos introducidos con ACT mantienen su significado:

- **Observación:** información de sensores externos, como imágenes RGB de cabeza, muñeca y multivista.

- **Estado:** la configuración del robot, incluyendo ángulos articulares, apertura del gripper, pose del efector final, estado de la cintura o del cuello.

- **Acción:** controles solicitados, potencialmente objetivos articulares, incrementos, poses del efector final o comandos del gripper.



La **encarnación** incluye más que la apariencia. Combina definiciones de cuerpo y de control:

```text
Robot structure
+ Sensors
+ State definition
+ Action definition
+ Control frequency and mode
= One embodiment
```

Un solo Franka, un sistema bimanual y un humanoide GR-1 tienen distintas dimensiones de estado/acción. Compartir un modelo entre estos cuerpos es un reto central.

### VLA, fragmentación de acciones y flow matching

![GR00T N1 Análisis en profundidad: 1.3 VLA, fragmentación de acciones y flow matching (imagen 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-09-en.png)


Un **VLA** añade lenguaje de tarea a las entradas de la política visual. El lenguaje identifica qué objeto manipular, adónde debe ir y si el comportamiento coincide con la petición; no es contexto decorativo.

Un **fragmento de acción**, como en ACT, predice una breve secuencia futura en lugar de una sola acción. GR00T N1 fija `H = 16`.

El **flow matching** puede entenderse como refinar acciones aleatorias en un fragmento ejecutable bajo condicionamiento de imágenes, lenguaje y estado. El paper usa solo `K = 4` actualizaciones de inferencia.

---

## Abstract

Los robots de propósito general necesitan cuerpos capaces y modelos inteligentes. Los humanoides son prometedores para entornos humanos, pero comprender nuevas situaciones, manejar la variación del mundo real y aprender rápidamente nuevas tareas requiere modelos base entrenados con datos grandes y diversos.

GR00T N1 es un modelo base abierto para humanoides con una arquitectura VLA de doble sistema. Un módulo de visión-lenguaje, Sistema 2, interpreta imágenes e instrucciones; un Transformer de difusión, Sistema 1, genera acciones suaves en tiempo real. Los módulos están estrechamente conectados y se entrenan conjuntamente de extremo a extremo.

El entrenamiento mezcla trayectorias reales, vídeos humanos y datos sintéticos. GR00T N1 supera a las líneas base de aprendizaje por imitación comparadas en benchmarks de simulación a través de distintas encarnaciones y aprende tareas bimanuales condicionadas por lenguaje de forma eficiente en el humanoide Fourier GR-1.

Tres ideas organizan el paper:

1. **VLA de doble sistema:** un componente interpreta, otro actúa.

2. **Datos heterogéneos:** usar vídeos humanos, simulación y vídeos generados junto con demostraciones de robots.

3. **Compartición entre encarnaciones:** distintos cuerpos comparten capacidades centrales en lugar de recibir modelos totalmente independientes.



---

## Introducción y trabajos relacionados

### Hardware, modelos, datos e islas de datos

La introducción identifica tres elementos necesarios:

- **Hardware** determina la capacidad física. Los humanoides son atractivos porque los entornos humanos están diseñados para cuerpos humanos.

- **Modelos** deben manejar tareas abiertas, no un comportamiento fijo.

- **Datos** determinan la exposición a entornos, objetos, tareas y cuerpos.



Los modelos de lenguaje y visión pueden aprender de internet, pero la robótica carece de un internet equivalente de acciones. Los datos reales son costosos y lentos de recopilar, y los robots difieren en articulaciones, sensores y controles.

Juntar datasets aún puede dejar **islas de datos**: los archivos comparten una base de datos pero no semántica ni espacios de acción.

Por lo tanto, el paper no solo pregunta cómo diseñar una política, sino también cómo unificar su corpus de entrenamiento.

### La pirámide de datos

![GR00T N1 Análisis en profundidad: 3.2 La pirámide de datos (imagen 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-12.png)

| Nivel | Datos | Cantidad relativa | Relación con el robot |
|---|---|---|---|
| Inferior | Datos web + vídeos humanos | Mayor | Conceptos ricos de acción sin comandos directos de robot. |
| Medio | Simulación + trayectorias neuronales | Grande | Escalable y controlable, pero con sesgo de simulación o generación. |
| Superior | Datos de robots en el mundo real | Menor | Más cercano a la ejecución, más costoso de recopilar. |

Al subir se reduce la cantidad pero aumenta la especificidad a la encarnación objetivo.

Vídeos humanos: qué acciones y tareas existen
Simulación / generación: cómo pueden variar esas tareas
Datos de robots reales: cómo debería ejecutarlas este cuerpo

---

## Arquitectura de GR00T N1

### El Sistema 2 entiende; el Sistema 1 actúa

![GR00T N1 Análisis en profundidad: 4.1 El Sistema 2 entiende; el Sistema 1 actúa (imagen 17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-17.png)

La arquitectura toma prestada una analogía de doble sistema de la cognición:

- **Sistema 2: Eagle-2 VLM**, que interpreta imágenes, lenguaje y tareas.

- **Sistema 1: Transformer de difusión (DiT)**, que genera acciones continuas rápidamente.



No son programas independientes: la cross-attention los conecta estrechamente y el entrenamiento los optimiza conjuntamente.

Eagle-2 contiene un modelo de lenguaje y un codificador de imágenes. Las imágenes entran a `224 × 224`, produciendo 64 tokens por frame. Los autores usan características VLM de la capa intermedia 12 en lugar de las finales, lo que mejora la velocidad y el éxito posterior en sus experimentos.

El Sistema 2 opera a unas 10 Hz en una NVIDIA L40, mientras que el sistema de acción puede generar controles en lazo cerrado a una tasa mayor. La interpretación de alto nivel no necesita recalcularse cada milisegundo, mientras que el movimiento debe seguir siendo continuo.

### Conectar distintos robots a un único DiT

![GR00T N1 Análisis en profundidad: 4.2 Conectar distintos robots a un único DiT (imagen 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-13.png)

Hay dos tipos de módulos:

- **Núcleo compartido:** VLM y DiT comparten conocimiento visual, lingüístico y de comportamiento entre robots.

- **Interfaces específicas de encarnación:** codificador de estado, codificador de acción y decodificador de acción traducen dimensiones de la plataforma y semántica de control hacia y desde características compartidas.



| Módulo | Función | ¿Por qué específico de la encarnación? |
|---|---|---|
| Codificador de estado | Codificar el estado actual como tokens. | Los campos y dimensiones del estado difieren. |
| Codificador de acción | Codificar acciones ruidosas y el tiempo de generación. | Las dimensiones de acción difieren. |
| Decodificador de acción | Convertir características del DiT en controles. | Los modos de control de articulaciones, efector final y gripper difieren. |

**Comentario:** El aprendizaje entre robots no consiste solo en rellenar con ceros vectores hasta igualar su longitud. Las dimensiones iguales no significan nada sin saber qué articulación, pose o comando representa cada valor.

### Fragmentos de acción con flow matching

En el tiempo `t`, se predice una secuencia en lugar de una sola acción:

```text
A_t = [a_t, a_(t+1), ..., a_(t+H-1)]
H = 16
```

El entrenamiento comienza con el fragmento real `A_t`, ruido gaussiano `ε` y tiempo de flujo `τ`, construyendo:

```text
A_t^τ = τ A_t + (1 - τ) ε
```

- Cerca de `τ=0`, el fragmento se parece al ruido.

- Cerca de `τ=1`, se parece a acciones reales.



El DiT lee características de visión-lenguaje, características de estado y acciones ruidosas para aprender una dirección de actualización. El paper escribe la pérdida como:

```text
L_fm(θ)
= E_τ [ || V_θ(φ_t, A_t^τ, q_t) - (ε - A_t) ||² ]
```

Aquí `φ_t` denota características del VLM y `q_t` características del estado del robot.

En inferencia no hay acción futura real, así que se empieza desde ruido y se realizan cuatro actualizaciones de Euler hacia adelante:

```text
A_t^0 ~ N(0, I)

A_t^(τ+1/K)
= A_t^τ + (1/K) V_θ(φ_t, A_t^τ, q_t)

K = 4
```

GR00T-N1-2B tiene 2,2B de parámetros totales, incluyendo unos 1,34B en el VLM. En una L40, generar un fragmento de 16 pasos lleva unos 63,9 ms.

---

## Datos y entrenamiento

### Uso de vídeos sin acciones de robot

Las trayectorias de robots supervisan directamente imágenes, estados y acciones. Los vídeos humanos y generados contienen imágenes pero no comandos articulares de robot.

GR00T N1 añade supervisión similar a acciones de dos maneras.

Las **acciones latentes** aprenden códigos de comportamiento discretos a partir de cambios visuales, en lugar de ángulos articulares exactos: conceptos como moverse a la izquierda, agarrar o empujar.

![GR00T N1 Análisis en profundidad: 5.1 Uso de vídeos sin acciones de robot (imagen 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-01.png)

Estas pueden abarcar diferentes cuerpos: las manos humanas y las pinzas de los robots tienen articulaciones distintas pero ambas pueden mover un objeto hacia la izquierda en la imagen.

Un **modelo de dinámica inversa (IDM)** infiere acciones entre observaciones:

```text
Observation_t + Observation_(t+1)
                  ↓
                 IDM
                  ↓
          Pseudo Action Label
```

Las acciones latentes se asemejan a un vocabulario de comportamiento sin unidades; las salidas del IDM se asemejan a pseudoetiquetas de acción. Ninguna de las dos convierte los videos en demostraciones físicas perfectas. Hacen que los datos solo de imágenes sean utilizables para el preentrenamiento.

### Trayectorias neuronales y simulación: más variación a partir de menos demostraciones

La generación de video parte de imágenes reales de robots y varía las indicaciones en lenguaje para sintetizar tareas, posiciones de objetos y trayectorias. Estas son **trayectorias neuronales**.

![GR00T N1 Análisis en profundidad: 5.2 Trayectorias neuronales y simulación: más variación a partir de menos demostraciones (imagen 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-00.png)

Los autores amplían 88,4 horas de teleoperación interna a 827,3 horas de video generado, casi diez veces más. La generación puede mover objetos de forma imposible, distorsionar contactos o deformar el robot, por lo que filtros basados en modelos de lenguaje y reglas eliminan las muestras de baja calidad antes de que las acciones latentes o el IDM proporcionen supervisión.

![GR00T N1 Análisis en profundidad: 5.2 Trayectorias neuronales y simulación: más variación a partir de menos demostraciones (imagen 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-08.png)

La simulación, en cambio, se ejecuta en un motor físico. Métodos como DexMimicGen redirigen demostraciones centradas en objetos a nuevas escenas, produciendo alrededor de 780.000 trayectorias simuladas, aproximadamente 6.500 horas.

**Diferencia:**

- Las trayectorias neuronales proporcionan variación visual y semántica pero una fiabilidad física limitada.

- La simulación proporciona acciones exactas e interacciones físicas, pero mantiene una brecha de sim-to-real.



### Preentrenamiento y postentrenamiento

Los datos de teleoperación provienen de Manus, VIVE, Apple Vision Pro, Leap Motion y otros dispositivos, redirigidos a los robots.

![GR00T N1 Análisis en profundidad: 5.3 Preentrenamiento y postentrenamiento (imagen 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-05.png)

![GR00T N1 Análisis en profundidad: 5.3 Preentrenamiento y postentrenamiento (imagen 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-15-en.png)


El postentrenamiento no es ni entrenar desde cero ni control inmediato zero-shot de robots arbitrarios. Adapta el modelo fundacional a una configuración de cámara, estado, interfaz de acción y tarea objetivo.

| Configuración | Preentrenamiento | Postentrenamiento |
|---|---|---|
| Tamaño de lote | 16.384 | 128 o 1.024 |
|Pasos de gradiente|200.000|20.000\-60.000|
| Datos principales | Múltiples cuerpos | Un cuerpo / tarea |
| Propósito | Priors generales | Adaptación a un cuerpo y tarea específicos |

El preentrenamiento de GR00T-N1-2B utiliza alrededor de 50.000 horas de GPU H100. El conjunto de datos suma 8.375,7 horas y 592,9M de fotogramas.

**Resumen en una frase:** El preentrenamiento aporta una amplia experiencia de mundos y cuerpos; el postentrenamiento enseña al modelo a usar este robot en particular.

---

## Experimentos y resultados

### ¿Cómo se evalúa la efectividad?

Las pruebas en simulación y físicas examinan los priors de preentrenamiento y la adaptación con datos limitados, en lugar de solo ajustar las tareas de entrenamiento.

![GR00T N1 Análisis en profundidad: 6.1 ¿Cómo se evalúa la efectividad? (imagen 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-10.png)

Los benchmarks de simulación incluyen:

- **RoboCasa Kitchen:** 24 tareas de cocina.

- **DexMimicGen Cross-Embodiment Suite:** nueve tareas de manipulación entre robots.

- **GR-1 Tabletop:** 24 tareas humanoides de sobremesa.



Las pruebas con GR-1 real incluyen pick-and-place, objetos articulados, manipulación industrial y cooperación multi-robot.

![GR00T N1 Análisis en profundidad: 6.1 ¿Cómo se evalúa la efectividad? (imagen 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-03.png)

Las principales comparaciones son BC-Transformer y Diffusion Policy. GR00T N1 difiere no solo en tamaño y arquitectura, sino en el preentrenamiento heterogéneo entre cuerpos, por lo que los resultados también reflejan los datos y el entrenamiento.

### ¿Ayudan los priors con pocos datos?

El postentrenamiento en simulación utiliza 30, 100 o 300 demostraciones por tarea. Las tendencias principales son:

- Los priors ayudan más cuando los datos de la tarea son escasos.

- Con más datos, una Diffusion Policy dedicada reduce la diferencia, pero GR00T N1 mantiene una fuerte eficiencia de datos.

- En algunos entornos, alrededor del 10% de los datos de la tarea se acerca a una Diffusion Policy entrenada con todos los datos.



![GR00T N1 Análisis en profundidad: 6.2 ¿Ayudan los priors con pocos datos? (imagen 16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-16.png)

La implicación práctica es:

> El valor de un modelo fundacional no es no necesitar datos; es aprender de forma efectiva desde un punto de partida preentrenado cuando tus datos son limitados.
> 
> 

### ¿Mejoran las trayectorias neuronales el comportamiento real?

Las ablaciones comparan solo datos reales, videos generados etiquetados con acciones latentes y videos generados con pseudoacciones de IDM.

![GR00T N1 Análisis en profundidad: 6.3 ¿Mejoran las trayectorias neuronales el comportamiento real? (imagen 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-02.png)

Las trayectorias sintéticas mejoran algunas tareas, y el IDM a menudo se conecta de forma más directa a los espacios de acción reales que los códigos latentes. Más generación no es automáticamente mejor: los errores físicos y el sesgo de las pseudoetiquetas también entran en el entrenamiento.

Los autores también observan transferencias espontáneas de mano izquierda a derecha en un modelo preentrenado que pueden desaparecer tras un postentrenamiento en tareas estrechas.

![GR00T N1 Análisis en profundidad: 6.3 ¿Mejoran las trayectorias neuronales el comportamiento real? (imagen 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/gr00t_n1/image-04.png)

Esto ilustra el **olvido catastrófico**: un ajuste fino enfocado puede aumentar la puntuación objetivo mientras sobrescribe capacidades más amplias preentrenadas.

---

## Limitaciones, implicaciones prácticas y resumen

### ¿Qué sigue sin resolverse?

- **Principalmente tareas cortas de sobremesa.** La navegación de larga duración, el movimiento de cuerpo completo y la planificación conjunta siguen siendo trabajo futuro.

- **Razonamiento espacial limitado.** Reconocer un objeto no implica una comprensión precisa en 3D, de contacto o de fuerza.

- **Inconsistencias físicas sintéticas.** Un video que parece plausible no garantiza un movimiento ejecutable.

- **Olvido durante el postentrenamiento.** La adaptación debe evaluarse tanto por la retención de la generalización como por el éxito en el objetivo.



### Conexión con la práctica de LeRobot

El apéndice de ingeniería amplía el formato de conjunto de datos de LeRobot. Almacenar números es insuficiente; sus significados deben definirse.

| Contenido | Información a especificar |
|---|---|
| Video | Nombres de cámaras, vistas, resolución, frecuencia de fotogramas y alineación temporal. |
| Estado | La articulación o pose representada por cada dimensión. |
| Acción | Objetivos absolutos o incrementales; controles de articulaciones o del efector final. |
| Lenguaje | Instrucciones asociadas con cada episodio. |
| Rotación | Matriz de rotación, ángulos de Euler, cuaternión o representación 6D. |

`modality.json` añade estas semánticas, abordando si el modelo entiende el séptimo número, no solo si puede abrir el archivo.

Para lectores con conjuntos de datos ACT, las consideraciones adicionales son:

| Etapa | Práctica ACT | Consideraciones adicionales para modelos fundacionales VLA |
|---|---|---|
| Recopilación | Alinear cámaras, estado y acciones. | Anotaciones de lenguaje estables. |
| Datos | Consistencia dentro de un robot. | Consistencia semántica entre cuerpos. |
| Entrenamiento | Aprender una política a partir de demostraciones. | Postentrenar un checkpoint fundacional. |
| Inferencia | Imagen + estado → segmento de acción | Imagen + lenguaje + estado → segmento de acción |
| Evaluación | Éxito en el robot | Éxito, generalización y retención de capacidades preentrenadas |

</div>
