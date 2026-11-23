---
description: "Un análisis en profundidad de Cosmos 3: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "Cosmos 3: Del modelado omnimodal del mundo a políticas conjuntas de video‑acción"
hide_title: true
keywords: ["Paper Deep-Dive","Cosmos 3","Omnimodal World Models","MoT","Joint Video-Action Prediction","LeRobot"]
slug: /robotics/paper_reading_cosmos3
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
    "value": "Prerrequisitos: tres modos de acción",
    "id": "prerequisites-three-action-modes",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Arquitectura: rutas de comprensión y generación",
    "id": "architecture-understanding-and-generation-paths",
    "level": 2
  },
  {
    "value": "Acciones: geometría compartida con interfaces específicas de dominio",
    "id": "actions-shared-geometry-with-domain-specific-interfaces",
    "level": 2
  },
  {
    "value": "Entrenamiento: tres usos de una trayectoria",
    "id": "training-three-uses-of-one-trajectory",
    "level": 2
  },
  {
    "value": "Cerrando el ciclo",
    "id": "closing-the-loop",
    "level": 3
  },
  {
    "value": "Experimentos: especificidad de las instrucciones e inicialización",
    "id": "experiments-instruction-specificity-and-initialization",
    "level": 2
  },
  {
    "value": "Instrucciones de RoboLab",
    "id": "robolab-instructions",
    "level": 3
  },
  {
    "value": "Adaptación a LIBERO-10",
    "id": "adaptation-to-libero-10",
    "level": 3
  },
  {
    "value": "Valoraciones físicas de preferencia",
    "id": "physical-preference-ratings",
    "level": 3
  },
  {
    "value": "Integración con LeRobot: igualar tamaño, controles y receta",
    "id": "lerobot-integration-match-size-controls-and-recipe",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-cosmos3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-cosmos3-title">Cosmos 3: Del modelado omnimodal del mundo a políticas conjuntas de video‑acción</h1>
  <p className="paper-reading-lead">Cosmos 3: modelos omnimodales del mundo para IA física</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-understanding-and-generation-paths">Arquitectura multimodal</a></li>
    <li><a href="#actions-shared-geometry-with-domain-specific-interfaces">Acciones y entrenamiento</a></li>
    <li><a href="#experiments-instruction-specificity-and-initialization">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.02800v4" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/cosmos3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot Cosmos 3 ↗</a>

**Parámetros de LeRobot**

- `--policy.type=cosmos3_nano` y `--policy.type=cosmos3_edge` seleccionan los tamaños compatibles.
- `--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO` carga una política entrenada en las cuatro suites LIBERO.
- `--policy.save_predicted_video=true` además decodifica/guarda las predicciones, añadiendo coste de visualización.
- Dominio, lienzo de cámara, frecuencia de fotogramas real y representación de la acción son todas condiciones del modelo.

</aside>

Un robot coloca un cuenco negro en un cajón y lo cierra. Podemos preguntar qué hará una acción dada, qué acción explica una transición visual o qué acción debería lograr un objetivo. **¿Puede un solo modelo aprender las tres cosas cambiando qué partes de una trayectoria se conocen?**

## Prerrequisitos: tres modos de acción

| Modo | Conocido | Predicho | Ejemplo del cajón |
| --- | --- | --- | --- |
| Dinámica directa | Vista actual y acciones | Vistas futuras | Hasta dónde tirar mueve el cajón |
| Dinámica inversa | Transición visual | Acciones | Cómo convertir cerrado en abierto |
| Política | Observación actual y objetivo | Acciones y vistas futuras | Movimiento y resultado esperado juntos |

Un video de un cajón que se abre no es un comando ejecutable para un robot. El aprendizaje de políticas necesita supervisión de acciones y una interfaz específica del cuerpo, con predicciones corregidas por retroalimentación real.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/teaching-three-conditioning-modes-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/cosmos-three-conditioning-modes-en-v2.png" alt="Tres tareas de predicción condicional para la apertura de un cajón" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Tres tareas de predicción condicional para la apertura de un cajón.</strong> Ilustración didáctica generada por IA. Las columnas muestran dinámica directa, dinámica inversa y predicción conjunta de video‑acción (política), con diferentes entradas conocidas y objetivos de predicción. Son modos de generación alternativos, no etapas de ejecución secuenciales. Las escenas visuales representan secuencias de video; el lenguaje y el condicionamiento con tokens especiales se simplifican.</figcaption>
</figure>

## Resumen y guía de lectura

**Resumen breve.** Cosmos 3 unifica lenguaje, imagen, video, audio y acción en una arquitectura MoT que combina comprensión autoregresiva con generación continua. Las elecciones de tokens limpios/ruidosos implementan dinámica directa, dinámica inversa y aprendizaje de políticas. El entrenamiento intermedio con acciones aporta priors entre dominios antes del entrenamiento final específico del objetivo.

**Nota de lectura.** Este artículo se centra en los mecanismos relevantes para robótica. Las clasificaciones de calidad de imagen/video no miden el éxito del control, y el adaptador Nano/Edge de LeRobot no expone toda la plataforma omnimodal.

## Arquitectura: rutas de comprensión y generación

La ruta causal de comprensión procesa texto y tokens de visión ViT opcionales. La ruta de generación elimina el ruido de tokens continuos de video, audio y acción. Cada capa tiene normalización, proyecciones y parámetros de feed‑forward separados, con atención compartida que conecta el contexto.

Las características ViT respaldan la comprensión, mientras que un VAE de video congelado proporciona latentes generativos. Este MoT basado en rutas difiere del enrutamiento MoE disperso que selecciona varios expertos feed‑forward por token.

En modo de política, la imagen actual está limpia y el video/las acciones futuras se ensucian y restauran conjuntamente. Los prompts describen además la frecuencia de fotogramas, resolución, disposición de vistas y fotogramas inactivos para alinear el tiempo visual y de acción.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/mot-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/mot-architecture.png" alt="Enrutamiento de atención entre comprensión autoregresiva y generación por difusión" loading="lazy" />
  <figcaption><strong>Enrutamiento de atención entre comprensión autoregresiva y generación por difusión.</strong> Fuente: la documentación oficial de LeRobot. La comprensión usa autoatención causal; la generación usa atención completa y lee el contexto de comprensión. La máscara bloquea las consultas de comprensión desde los tokens generados. La atención compartida conecta los cálculos sin hacer idénticas sus reglas de decodificación.</figcaption>
</figure>

## Acciones: geometría compartida con interfaces específicas de dominio

El informe organiza las acciones en torno al movimiento ego, los efectores y los estados de agarre. Las poses consecutivas pueden definir

$$
\Delta T_t=T_{t-1}^{-1}T_t.
$$

La traslación y la rotación 6D codifican el movimiento; los canales de agarre codifican el estado actual de manipulación. Proyecciones específicas de dominio mapean los vectores de cada cuerpo a dimensiones ocultas compartidas.

Las representaciones de preentrenamiento y los formatos de control objetivo pueden diferir. DROID usa ocho canales de articulaciones/garra en la receta del adaptador; LIBERO usa diez canales con rotación 6D, convertidos de vuelta a las acciones de siete dimensiones del simulador. El relleno no puede sustituir estas conversiones.

<figure className="paper-reading-figure" data-reading-figure="cosmos3/action-representation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/action-representation.png" alt="Componentes geométricos compartidos entre vectores de acción específicos de la encarnación" loading="lazy" />
  <figcaption><strong>Componentes geométricos compartidos entre vectores de acción específicos de la encarnación.</strong> Fuente: el artículo de Cosmos 3. Posición, rotación 6D y componentes de agarre forman vectores de distinta longitud, conectados mediante proyecciones específicas de dominio. Seis números de rotación no implican seis grados de libertad rotacionales, y los componentes compartidos no hacen que los comandos sean intercambiables.</figcaption>
</figure>

## Entrenamiento: tres usos de una trayectoria

Para una demostración de cajón, la dinámica directa mantiene limpias las acciones y predice el video. La dinámica inversa mantiene limpias las transiciones visuales y predice las acciones. El modo de política añade ruido y predice ambos.

El entrenamiento general de comprensión/generación precede al entrenamiento intermedio de acciones en múltiples dominios y al entrenamiento final específico del objetivo. Los priors de acción respaldan la adaptación, mientras que las demostraciones objetivo alinean los controles y escenas reales. La generación de video general por sí sola no crea una política desplegable.

### Cerrando el ciclo

Las vistas se componen en un lienzo fijo. Los latentes actuales limpios condicionan el muestreo conjunto de video y acciones futuras. El robot ejecuta un segmento y luego observa de nuevo. La decodificación de video es opcional para inspección.

Si el modelo imagina el cuenco dentro del cajón pero la garra lo suelta, la siguiente llamada debe usar la posición real del cuenco. La predicción conjunta vincula el movimiento con las consecuencias esperadas sin garantizar su corrección física.

## Experimentos: especificidad de las instrucciones e inicialización

### Instrucciones de RoboLab

El informe evalúa 120 tareas con diez ensayos cada una:

| Modelo | Vagas | Predeterminadas | Específicas |
| --- | ---: | ---: | ---: |
| Cosmos3-Nano, inicialización con entrenamiento intermedio de acciones | 20.6% | 36.8% | 39.7% |
| Cosmos3-Nano, inicialización con preentrenamiento general | 16.7% | 28.1% | 30.2% |
| π0.5 | 15.2% | 28.0% | 28.1% |

Estas son tasas de éxito bajo diferentes condiciones de instrucción. Las cifras 36.8% y 39.7% no son intercambiables, y las peticiones vagas siguen siendo sustancialmente más difíciles.

### Adaptación a LIBERO-10

Cincuenta ensayos para cada una de diez tareas dan 500 ejecuciones por checkpoint:

| Actualizaciones | MT-init | PT-init |
| --- | ---: | ---: |
| 500 | 24.6% | 0.0% |
| 1,000 | 91.4% | 73.8% |
| 2,000 | 97.4% | 95.2% |

La mayor brecha inicial respalda una adaptación más rápida desde la acción a mitad del entrenamiento. La reducción de la brecha no implica que la inicialización preentrenada general nunca pueda aprender.

### Valoraciones de Preferencia Física

RoboArena agrega comparaciones por pares a ciegas. El informe registra una valoración líder el 30 de mayo de 2026. Una valoración de preferencia no es ni un porcentaje de éxito en una batería fija ni una afirmación sobre la clasificación de hoy.

## Integración con LeRobot: Ajustar Tamaño, Controles y Receta

La versión 0.7.0 admite aproximadamente implementaciones Nano de 16.5B y Edge de 4.6B, entrenando principalmente la ruta de generación y los módulos de acción de forma predeterminada. Los checkpoints Base, DROID, LIBERO de cuatro baterías y solo LIBERO-10 cumplen propósitos diferentes.

Los resultados documentados de Nano/Edge en cuatro baterías promedian 97.90%/97.95%, con 500 episodios por batería. El checkpoint Nano solo de LIBERO-10 obtiene 97.6%; el MT-init del informe con 2,000 actualizaciones obtiene 97.4%. Diferentes conjuntos de entrenamiento, implementaciones y pesos deben conservar etiquetas separadas.

```bash
--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO
--policy.dtype=bfloat16
--env.type=libero
--env.task=libero_spatial,libero_object,libero_goal,libero_10
--env.observation_height=256
--env.observation_width=256
```

Estos fragmentos de evaluación requieren los ajustes de evaluación versionados restantes. Los nuevos conjuntos de datos necesitan tasas de fotogramas correctas, descripciones de vistas, estadísticas e identificadores de dominio. Con condicionamiento de estado, los canales de estado/acción deben tener anchos y semánticas coincidentes. Los procesadores de datos/entornos realizan conversiones físicas.

Al adaptar una base, `load_action_modules=false` puede inicializar los módulos de destino; la evaluación debe cargar los módulos entrenados. Las recetas basadas en EMA requieren el checkpoint EMA correspondiente. Estas son instrucciones de integración, no evidencia de una ejecución de benchmark en la máquina actual.

## Conclusión

Cosmos 3 aprende varias relaciones condicionales entre el cambio visual y las acciones en una arquitectura unificada. La acción a mitad del entrenamiento proporciona priors de adaptación reutilizables. Interpretar la política requiere separar sus tres modos, las representaciones específicas del cuerpo, las condiciones de instrucción y los protocolos posteriores al entrenamiento.

</div>
