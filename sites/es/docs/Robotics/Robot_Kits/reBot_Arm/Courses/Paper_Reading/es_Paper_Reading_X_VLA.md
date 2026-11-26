---
description: "Un análisis en profundidad de X-VLA: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "X-VLA: Absorbiendo diferencias de embodiment con soft prompts entrenables"
hide_title: true
keywords: ["Paper Deep-Dive","X-VLA","VLA","Soft Prompts","Cross-Embodiment","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_x_vla
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "Requisitos previos: un soft prompt no es una descripción del robot",
    "id": "prerequisites-a-soft-prompt-is-not-a-robot-description",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por qué las cabezas de salida por sí solas son insuficientes",
    "id": "why-output-heads-alone-are-insufficient",
    "level": 2
  },
  {
    "value": "Arquitectura: combinación de tres flujos de información",
    "id": "architecture-combining-three-information-streams",
    "level": 2
  },
  {
    "value": "Representación de acciones: la forma no garantiza el significado",
    "id": "action-representation-shape-does-not-guarantee-meaning",
    "level": 2
  },
  {
    "value": "Entrenamiento y adaptación",
    "id": "training-and-adaptation",
    "level": 2
  },
  {
    "value": "Experimentos: capacidad y coste de adaptación",
    "id": "experiments-capability-and-adaptation-cost",
    "level": 2
  },
  {
    "value": "Integración con LeRobot y límites de los resultados",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-x_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-x_vla-title">X-VLA: Absorbiendo diferencias de embodiment con soft prompts entrenables</h1>
  <p className="paper-reading-lead">X-VLA: Transformer con soft prompts como modelo escalable de visión-lenguaje-acción entre distintos embodiments</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-combining-three-information-streams">Soft prompts de embodiment</a></li>
    <li><a href="#action-representation-shape-does-not-guarantee-meaning">Representación de acciones</a></li>
    <li><a href="#experiments-capability-and-adaptation-cost">Adaptación y experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2510.10274v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/xvla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot X-VLA ↗</a>

**Parámetros de LeRobot**

- `--policy.path=lerobot/xvla-base` parte de la base entre embodiments.
- `--policy.action_mode=auto` selecciona el procesamiento de acciones; no puede reparar automáticamente unidades físicas ni convenciones de coordenadas.
- `--policy.domain_id` selecciona los prompts de dominio y debe coincidir con la configuración de datos/control.
- El fine-tuning completo documentado entrena más que los prompts; es distinto del experimento eficiente en parámetros del artículo.

</aside>

“Pon la taza dentro del cuenco” puede requerir articulaciones, interpretaciones de cámara y unidades diferentes en una Franka, un robot bimanual y un brazo de bajo coste. Una anchura de tensor igual no alinea estas relaciones. **¿Puede una pequeña condición aprendida indicar a una política compartida qué cuerpo y distribución de datos está utilizando?**

## Requisitos previos: un soft prompt no es una descripción del robot

Los soft prompts son vectores continuos entrenables seleccionados por un identificador de dominio. Un dominio puede codificar una configuración de cámara, controlador y conjunto de datos, no solo un modelo de robot. Asignar un nuevo identificador por sí solo no proporciona un controlador entrenado.

## Resumen y guía de lectura

**Resumen breve.** X-VLA inyecta soft prompts específicos de dominio de forma temprana en la generación de acciones. Las características de visión-lenguaje de la vista principal, las imágenes auxiliares, el estado del robot y la generación de acciones basada en flow comparten un marco Transformer. Los experimentos estudian la escala, la adaptación al dominio objetivo y las actualizaciones con pocos parámetros.

**Nota de lectura.** La adaptación completa y el experimento con aproximadamente un 1% de parámetros entrenables tienen presupuestos y puntuaciones diferentes.

## Por qué las cabezas de salida por sí solas son insuficientes

Una proyección de salida específica de dominio gestiona las dimensiones pero no informa a la interpretación visual temprana. Las proyecciones de entrada específicas de dominio pueden perturbar las representaciones preentrenadas, mientras que las descripciones de robots escritas a mano requieren diseño manual. Los soft prompts proporcionan condiciones aprendidas durante la fusión multimodal. El artículo compara enfoques para manejar la heterogeneidad bajo recetas de entrenamiento alineadas.

<figure className="paper-reading-figure" data-reading-figure="x_vla/heterogeneity-comparison">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/heterogeneity-comparison.png" alt="Errores de validación para métodos de manejo de heterogeneidad" loading="lazy" />
  <figcaption><strong>Errores de validación para métodos de manejo de heterogeneidad.</strong> Fuente: el artículo de X-VLA. Bajo recetas de entrenamiento alineadas, los soft prompts alcanzan un menor error de acción en el conjunto de validación al final del entrenamiento, lo que respalda el condicionamiento por dominio durante la fusión. El eje vertical mide error de predicción offline, no éxito de tareas en lazo cerrado.</figcaption>
</figure>

## Arquitectura: combinación de tres flujos de información

Florence-Large procesa la vista principal y la instrucción. Un backbone de visión compartido codifica las vistas auxiliares. El estado del robot, las acciones ruidosas y los embeddings temporales se proyectan y fusionan con los prompts de dominio y las características de visión-lenguaje mediante capas Transformer estándar.

| Información | Papel en la colocación de la taza |
| --- | --- |
| Vista principal y lenguaje | Identificar la taza y el cuenco solicitados |
| Vistas auxiliares | Resolver la geometría local de agarre/contacto |
| Estado y acciones ruidosas | Anclar el cuerpo y la trayectoria |
| Prompts de dominio | Condicionar el cómputo compartido a la configuración |

Una notación didáctica para la interfaz es

$$
\hat A=\operatorname{Flow}_{\theta}(\epsilon\mid E(I,L),q,p_d).
$$

Aquí $p_d$ selecciona la condición de dominio aprendida, $q$ es el estado y $\epsilon$ es el ruido de acción. Las convenciones físicas siguen siendo responsabilidad de la preparación de datos y de los procesadores.

<figure className="paper-reading-figure" data-reading-figure="x_vla/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/xvla-architecture2.png" alt="Prompts específicos de dominio y cómputo multimodal compartido" loading="lazy" />
  <figcaption><strong>Prompts específicos de dominio y cómputo multimodal compartido.</strong> Fuente: la documentación oficial de LeRobot. Un ID de dominio selecciona prompts y proyecciones de acción antes del cómputo Transformer compartido. El 0,04% del diagrama es la fracción arquitectónica de módulos específicos de dominio, distinta del experimento de adaptación con aproximadamente un 1% de parámetros entrenables.</figcaption>
</figure>

## Representación de acciones: la forma no garantiza el significado

El artículo estandariza posición del efector final, rotación 6D y estado de la pinza. Una codificación de rotación 6D no implica seis grados de libertad de rotación. También utiliza 30 anclas de trayectoria en cuatro segundos durante el preentrenamiento para abstraer movimientos excesivamente finos; esto no es una frecuencia de control universal de despliegue.

Por ejemplo, las coordenadas en metros y milímetros siguen estando separadas por un factor 1.000 tras rellenarlas hasta la misma anchura. Los prompts no pueden sustituir la conversión de unidades, las convenciones de rotación, el orden de los brazos ni la alineación de la dirección de la pinza.

## Entrenamiento y adaptación

El preentrenamiento optimiza conjuntamente los parámetros compartidos y los prompts de dominio. El procedimiento principal de adaptación primero calienta los nuevos prompts con los pesos preentrenados congelados y luego descongela para una especialización conjunta. Un estudio separado eficiente en parámetros actualiza aproximadamente 9M parámetros, o el 1% del modelo.

En ejecución, los procesadores seleccionan el dominio y organizan las observaciones; el flow matching genera acciones y el posprocesamiento restaura la interfaz del robot. Los prompts son parámetros aprendidos en lugar de una memoria de tareas online acumulativa.

## Experimentos: capacidad y coste de adaptación

El X-VLA-0.9B con adaptación completa informa de puntuaciones LIBERO de 98,2%, 98,6%, 97,8% y 97,6%, con una media de aproximadamente 98,1%. El experimento con aproximadamente 9M parámetros actualizados informa de alrededor de 93% en LIBERO y 54% en Simpler-WidowX. Estos valores reflejan compromisos diferentes.

Los estudios de escala varían la capacidad del modelo, la diversidad de datos y el volumen, midiendo el error de acción en el conjunto de validación y el comportamiento aguas abajo. Un menor error offline puede correlacionarse con una mejor adaptación, pero no equivale al éxito en lazo cerrado: un pequeño error de agarre aún puede fallar al coger una taza.

Las demostraciones en robots reales incluyen manipulación precisa de tela tras la adaptación. No establecen que los prompts por sí solos resuelvan problemas arbitrarios de cuerpos no vistos o de contacto.

## Integración con LeRobot y límites de los resultados

La versión 0.7.0 incluye modos de acción, procesadores, identificadores de dominio y opciones de entrenamiento de prompts. Los fragmentos de entrenamiento incluyen:

```bash
--policy.path=lerobot/xvla-base
--policy.action_mode=auto
--policy.dtype=bfloat16
--policy.train_soft_prompts=true
--policy.train_policy_transformer=true
```

Especifica los datos reales, el dominio, las cámaras, la ubicación de salida y la política de congelación de visión/lenguaje. Reproducir el experimento con pocos parámetros requiere restringir explícitamente los módulos entrenables.

El checkpoint documentado `lerobot/xvla-libero` se describe en aproximadamente 93%, separado del 98,1% de adaptación completa del artículo. Los procesadores LIBERO dedicados también gestionan la rotación de la cámara de muñeca y las convenciones de estado/acción; una llamada directa a la red los omite.

## Conclusión

X-VLA introduce condiciones de dominio aprendidas lo bastante pronto como para influir en la formación de acciones. Los soft prompts proporcionan una interfaz de adaptación, mientras que las representaciones físicas y los procesadores mantienen la coherencia del control. La adaptación completa y la eficiente en parámetros requieren interpretaciones separadas.

</div>
