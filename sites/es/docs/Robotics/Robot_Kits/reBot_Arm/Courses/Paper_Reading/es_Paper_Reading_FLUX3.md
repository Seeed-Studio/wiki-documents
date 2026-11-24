---
description: "Un análisis en profundidad de FLUX 3 Action: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "FLUX 3 Action: equilibrando la predicción conjunta vídeo‑acción y el coste en tiempo de ejecución"
hide_title: true
keywords: ["Paper Deep-Dive","FLUX 3 Action","World-Action Models","Joint Video-Action Prediction","Distillation","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_flux3
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
    "value": "Requisitos previos: latencia y factor en tiempo real",
    "id": "prerequisites-latency-and-real-time-factor",
    "level": 2
  },
  {
    "value": "Afirmaciones del informe y guía de lectura",
    "id": "report-claims-and-reading-guide",
    "level": 2
  },
  {
    "value": "Arquitectura: conectar el movimiento y las consecuencias visuales",
    "id": "architecture-connecting-motion-and-visual-consequences",
    "level": 2
  },
  {
    "value": "Datos e interfaces de encarnación",
    "id": "data-and-embodiment-interfaces",
    "level": 2
  },
  {
    "value": "Entrenamiento: más allá de un objetivo conjunto",
    "id": "training-beyond-a-joint-objective",
    "level": 2
  },
  {
    "value": "Guía dividida",
    "id": "split-guidance",
    "level": 3
  },
  {
    "value": "Promediado de pesos y destilación",
    "id": "weight-averaging-and-distillation",
    "level": 3
  },
  {
    "value": "Experimentos: mantener unidos checkpoints y protocolos",
    "id": "experiments-keep-checkpoints-and-protocols-attached",
    "level": 2
  },
  {
    "value": "Simulación y eficiencia",
    "id": "simulation-and-efficiency",
    "level": 3
  },
  {
    "value": "Evaluación física",
    "id": "physical-evaluation",
    "level": 3
  },
  {
    "value": "Integración con LeRobot: conservar las condiciones guardadas",
    "id": "lerobot-integration-preserve-saved-conditions",
    "level": 2
  },
  {
    "value": "Conclusión",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-flux3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-flux3-title">FLUX 3 Action: equilibrando la predicción conjunta vídeo‑acción y el coste en tiempo de ejecución</h1>
  <p className="paper-reading-lead">FLUX 3 Action</p>
  <ul className="paper-reading-badges" aria-label="Temas de lectura">
    <li><a href="#architecture-connecting-motion-and-visual-consequences">Vídeo y acciones conjuntas</a></li>
    <li><a href="#training-beyond-a-joint-objective">Entrenamiento y destilación</a></li>
    <li><a href="#experiments-keep-checkpoints-and-protocols-attached">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://bfl.ai/models/flux-3-action" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">Informe</span><span>Leer el informe</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Versión de integración y parámetros">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/flux3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot FLUX 3 Action ↗</a>

**Parámetros de LeRobot**

- `--policy.path=black-forest-labs/flux-3-action-so101` carga un checkpoint adaptado a SO-101.
- `--config_path=examples/flux3/lora.json` selecciona la receta versionada de adaptación de tareas.
- La versión SO-101 predice 42 acciones y ejecuta 32 a 30 Hz usando cámaras `scene`/`wrist`.
- El adaptador admite inferencia y adaptación de tareas PEFT; usa el repositorio independiente del autor para nuevas encarnaciones y fine-tuning completo.

</aside>

Un robot coloca una caja azul en un contenedor. Un modelo conjunto mundo‑acción predice tanto el movimiento del brazo como su resultado visual, pero la generación de vídeo añade cómputo. **¿Pueden las recetas de entrenamiento y la destilación conservar una predicción conjunta útil mientras reducen el coste de ejecución?**

## Requisitos previos: latencia y factor en tiempo real

La latencia mide una consulta. El factor en tiempo real compara su coste de procesamiento con el movimiento que predice:

$$
\mathrm{RTF}=\frac{\text{processing time}}{\text{predicted motion duration}}.
$$

En un ejemplo didáctico, 0,4 segundos de cómputo para dos segundos de movimiento dan un RTF de 0,2, mientras que 0,25 segundos para un segundo dan 0,25. El primero tiene mejor coste por movimiento pero una respuesta inmediata más lenta. La replanificación dinámica depende de esa diferencia.

## Afirmaciones del informe y guía de lectura

**Resumen del informe.** El modelo de aproximadamente 7B parte de un preentrenamiento multimodal muy centrado en vídeo, continúa con un entrenamiento intermedio de acciones y se adapta a cuerpos objetivo. Predice conjuntamente futuros latentes de vídeo y acciones continuas. El informe estudia formatos de acción, calendarios de ruido, guía dividida, promediado de pesos y destilación.

**Nota de lectura.** Los checkpoints base, destilados con guía y de un solo paso tienen distinta precisión y velocidad. Sus mejores cifras no pueden combinarse en una sola configuración.

## Arquitectura: conectar el movimiento y las consecuencias visuales

Un VAE de vídeo congelado codifica las observaciones y un codificador de texto congelado aporta las instrucciones. El Transformer desruida conjuntamente las representaciones de vídeo y acción. Observaciones/acciones futuras emparejadas supervisan el entrenamiento; las observaciones actuales y el lenguaje condicionan el despliegue.

| Etapa de control | Ejemplo de colocación de caja |
| --- | --- |
| Observar | Localizar la caja, el contenedor y la garra |
| Desruido conjunto | Predecir el movimiento y los cambios visuales esperados |
| Postprocesar | Restaurar la convención de control del cuerpo |
| Ejecutar | Consumir parte del bloque de acción |
| Observar de nuevo | Responder a los resultados reales de agarre y colocación |

Omitir la decodificación RGB sigue dejando la predicción de latentes futuros en el modelo. Esto difiere de la eliminación de tokens de vídeo futuro en inferencia de Fast-WAM.

<figure className="paper-reading-figure" data-reading-figure="flux3/joint-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/joint-architecture.svg" alt="Predicción conjunta vídeo‑acción en un backbone compartido" loading="lazy" />
  <figcaption><strong>Predicción conjunta vídeo‑acción en un backbone compartido.</strong> Fuente: el informe oficial de Black Forest Labs. La tarea, el historial visual y el estado condicionan capas compartidas que transportan características futuras y de acción, que se decodifican por separado. La destilación cambia el coste de muestreo manteniendo esta estructura de predicción conjunta.</figcaption>
</figure>

## Datos e interfaces de encarnación

El vídeo representa más del 95% de los tokens de preentrenamiento. El entrenamiento intermedio de acciones añade juego, manos egocéntricas, pinzas de mano y teleoperación manteniendo los datos multimodales. Las proporciones de muestras y de tokens representan presupuestos diferentes.

La mayor parte de los datos de pose usa EE50: 25 canales por efector primario/secundario, incluyendo posición, rotación 6D y valores de mano/pinza, con dimensiones no usadas rellenadas. Algunos datos usan en su lugar cabezas en espacio articular. El adaptador SO-101 usa seis comandos absolutos de articulación/pinza con orden y unidades de estado medido coincidentes; no ejecuta los primeros seis valores EE50.

## Entrenamiento: más allá de un objetivo conjunto

El vídeo y las acciones tienen distinta estructura de señal/ruido. El informe mide el comportamiento de reconstrucción y ajusta las distribuciones en tiempo de entrenamiento en lugar de asumir dificultad idéntica al mismo nivel nominal de ruido.

Los estudios DROID también varían la representación de acción y el tamaño de lote. El fine-tuning conjunto con lotes más grandes acaba superando al fine-tuning de efector final, mientras que las cabezas de efector final existentes pueden ayudar con presupuestos más pequeños. Una pérdida de entrenamiento decreciente no garantiza una mejora del éxito en lazo cerrado.

### Guía dividida

La guía libre de clasificador refuerza la diferencia entre predicciones condicionadas y no condicionadas. La guía de vídeo y de acción puede fijarse de forma independiente. En el barrido del informe, guía de vídeo 4 y guía de acción 1 superan a aumentar ambas indiscriminadamente. Este es un ajuste empírico para este modelo, no una constante WAM universal.

<figure className="paper-reading-figure" data-reading-figure="flux3/split-guidance">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/split-guidance.svg" alt="Barrido conjunto de escalas de guía de vídeo y acción" loading="lazy" />
  <figcaption><strong>Barrido conjunto de escalas de guía de vídeo y acción.</strong> Fuente: el informe oficial de Black Forest Labs. La CFG de acción es horizontal y la CFG de vídeo vertical. Este barrido completo de RoboLab-120 alcanza un máximo del 42,00% con vídeo 4 y acción 1. Maximizar ambas no es lo mejor, y este barrido es independiente de los resultados multi‑semilla para checkpoints destilados.</figcaption>
</figure>

### Promediado de pesos y destilación

EMA suaviza los pesos a lo largo de las actualizaciones de entrenamiento. En la comparación DROID, los pesos en bruto obtienen un 36,50% y la Power EMA en línea seleccionada alcanza el 42,00%. La integración SO-101 informa de beneficios mixtos de EMA, lo que requiere una evaluación emparejada.

La destilación de guía enseña a un estudiante la predicción guiada del profesor, evitando el cómputo repetido condicionado/no condicionado. La destilación de pasos luego aproxima el muestreo multi‑paso en una sola actualización, aumentando la velocidad con un coste en precisión.

## Experimentos: mantener unidos checkpoints y protocolos

### Simulación y eficiencia

El informe da aproximadamente un 38,3% de éxito en RoboLab-120 para el checkpoint de un solo paso y un 42,2% para la destilación con guía. La variante más rápida no es la de mayor puntuación. Las ventajas de RTF sobre π0.5 dependen de la precisión y de la clase de GPU; las GPU de consumo no comparten automáticamente el resultado de estación de trabajo/centro de datos.

El artículo de lanzamiento de los autores enumera por separado un 42,92%. Ese registro de publicación no se sustituye por cada configuración del informe.

### Evaluación física

Positronic evalúa diez tareas DROID en Franka con tres ensayos cada una, un límite de 240 segundos, condiciones emparejadas y un operador cegado. FLUX completa 28/30. Este protocolo pequeño no establece aproximadamente un 93% de éxito en todos los entornos.

Las demostraciones SO-101 muestran objetos, contenedores y colocaciones de cámara cambiados. Los clips exitosos ilustran el comportamiento pero no pueden establecer una tasa de éxito de generalización sin recuentos de ensayos y un protocolo coincidente.

## Integración con LeRobot: conservar las condiciones guardadas

El checkpoint SO-101 de la v0.7.0 lleva condiciones históricas de estado/acción, ocho ticks de observación y dos instantáneas visuales codificadas por separado. Predice 42 acciones y ejecuta 32 antes de replanificar, separado de las variantes de evaluación de aproximadamente 2,13 segundos del informe.

```bash
lerobot-train \
  --config_path=examples/flux3/lora.json \
  --policy.path=black-forest-labs/flux-3-action-so101 \
  --dataset.repo_id=YOUR_ORG/YOUR_SO101_DATASET \
  --output_dir=outputs/so101_lora
```

Reemplaza el marcador de posición del conjunto de datos. LoRA adapta el tronco mientras que las cabezas de acción/condicionamiento se entrenan completamente y se guardan. Usa claves coincidentes `observation.images.scene` y `observation.images.wrist`, o el mismo mapa de cambio de nombre en el entrenamiento y la ejecución. Llama a la política en cada tick de control para mantener el historial actualizado.

La instalación requiere compilaciones compatibles de PyTorch, CUDA y NATTEN. Cambiar el historial, la guía, el muestreo o la destilación cambia la configuración experimental incluso cuando el tipo de política sigue siendo el mismo.

## Conclusión

FLUX 3 Action mantiene la predicción conjunta de video/acción mientras ajusta los datos, los formatos de acción, la guía, el promedio y la destilación. Una evaluación significativa considera conjuntamente la duración de la predicción, el tiempo de consulta, la longitud de la ejecución y la identidad del checkpoint.

</div>
