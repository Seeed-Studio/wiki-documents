---
description: "Un análisis en profundidad de Fast-WAM: mecanismos, entrenamiento, experimentos y alcance de la integración en LeRobot v0.7.0."
title: "Fast-WAM: Aprender de video futuro sin generarlo en ejecución"
hide_title: true
keywords: ["Paper Deep-Dive","Fast-WAM","World-Action Models","Video Co-Training","Direct Action Inference","LeRobot"]
slug: /robotics/paper_reading_fastwam
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
    "value": "Requisitos previos: aprender del futuro frente a generarlo",
    "id": "prerequisites-learning-from-the-future-versus-generating-it",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por qué importan las variantes controladas",
    "id": "why-the-controlled-variants-matter",
    "level": 2
  },
  {
    "value": "Arquitectura: las acciones solo leen la observación actual",
    "id": "architecture-actions-read-only-the-current-observation",
    "level": 2
  },
  {
    "value": "Entrenamiento e inferencia",
    "id": "training-and-inference",
    "level": 3
  },
  {
    "value": "Datos: qué significa “sin preentrenamiento encarnado”",
    "id": "data-what-without-embodied-pretraining-means",
    "level": 2
  },
  {
    "value": "Experimentos: evidencia para eliminar la generación futura",
    "id": "experiments-evidence-for-removing-future-generation",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-fastwam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fastwam-title">Fast-WAM: Aprender de video futuro sin generarlo en ejecución</h1>
  <p className="paper-reading-lead">Fast-WAM: ¿Necesitan los World Action Models imaginar el futuro en tiempo de prueba?</p>
  <ul className="paper-reading-badges" aria-label="Temas de lectura">
    <li><a href="#data-what-without-embodied-pretraining-means">Entrenamiento conjunto con video</a></li>
    <li><a href="#architecture-actions-read-only-the-current-observation">Inferencia directa de acciones</a></li>
    <li><a href="#experiments-evidence-for-removing-future-generation">Experimentos</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2603.16666v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Versión de integración y parámetros">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fastwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot Fast-WAM ↗</a>

**Parámetros de LeRobot**

- `--policy.type=fastwam` selecciona la política de entrenamiento; usa `--policy.path` para los pesos entrenados.
- `--policy.path=lerobot/fastwam_libero_uncond_2cam224` carga el checkpoint de LIBERO documentado.
- `action_horizon` controla la longitud de la predicción; `n_action_steps` controla cuántas acciones se consumen antes de volver a planificar y no puede excederla.
- Desde el checkout del código fuente, instala con `pip install -e ".[fastwam,libero]"`. Consulta la guía versionada para ver los comandos de evaluación completos.

</aside>

Un robot que dobla toallas podría generar un video del siguiente pliegue antes de elegir los movimientos del brazo. Eso añade desruido de video a cada consulta de control. **¿Ayuda la predicción futura porque el modelo aprendió el cambio físico durante el entrenamiento, o porque imagina explícitamente el futuro mientras actúa?** Fast-WAM separa estos factores.

## Requisitos previos: aprender del futuro frente a generarlo

La supervisión con video futuro moldea los parámetros del modelo durante el entrenamiento. La generación futura realiza cómputo adicional durante el despliegue. Saltarse la decodificación RGB aún permite la predicción de latentes futuros; Fast-WAM estándar va más allá y no instancia ningún token de video futuro en la inferencia.

## Resumen y guía de lectura

**Resumen breve.** Fast-WAM entrena conjuntamente video y acciones pero genera acciones directamente a partir de representaciones visuales actuales en despliegue. Variantes controladas de desruido conjunto, video-y-luego-acción y sin-entrenamiento-con-video separan la supervisión de la imaginación en tiempo de inferencia. En los entornos probados, eliminar el entrenamiento con video causa la mayor pérdida de rendimiento.

**Nota de lectura.** Este es un resultado condicional sobre los modelos y tareas evaluados. No establece que el condicionamiento futuro sea innecesario para todos los problemas dinámicos o fuera de distribución, y el backbone de video sigue siendo parte de la política.

## Por qué importan las variantes controladas

Los modelos convencionales de mundo-acción o bien predicen video antes de las acciones o desruidan ambos conjuntamente. Ambos combinan la supervisión de video en entrenamiento con la generación futura en despliegue. Un marco compartido que cambia la atención y la supervisión de video hace que sus efectos individuales sean más fáciles de evaluar que una comparación entre modelos no relacionados.

## Arquitectura: las acciones solo leen la observación actual

El modelo reutiliza el DiT de video, el VAE y el codificador de texto de Wan2.2-5B, añadiendo un experto de acciones de aproximadamente 1B para un total de unos 6B parámetros. Un patrón estructurado de atención MoT conecta las ramas.

| Grupo de tokens | Acceso en entrenamiento | ¿Se mantiene en despliegue? |
| --- | --- | --- |
| Observación actual limpia | Ancla visual actual y lenguaje | Sí; contexto visual calculado una vez |
| Video futuro ruidoso | Ancla actual y grupo de video futuro | No |
| Bloque de acciones ruidoso | Ancla actual, lenguaje y acciones | Sí; desruido iterativo de acciones |

Las acciones no pueden atender a tokens de video futuro, y el ancla limpia no lee los otros grupos. Esto evita una dependencia del entrenamiento de acciones en información futura que desaparece en despliegue.

En el ejemplo de la toalla, la supervisión de video enseña cómo mover una esquina cambia la tela. La rama de acción siempre aprende su movimiento a partir de la tela actual y la instrucción. Los parámetros compartidos transfieren estructura útil sin proporcionar el futuro como entrada de acción.

<figure className="paper-reading-figure" data-reading-figure="fastwam/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/architecture.png" alt="Ramas de video y acción durante el entrenamiento conjunto" loading="lazy" />
  <figcaption><strong>Ramas de video y acción durante el entrenamiento conjunto.</strong> Fuente: el artículo de Fast-WAM. El entrenamiento predice latentes de video futuro y bloques de acción a partir del lenguaje y las observaciones actuales. La máscara de atención determina si las acciones pueden leer el futuro; dibujar ambas ramas no implica por sí mismo esa dependencia.</figcaption>
</figure>

### Entrenamiento e inferencia

El objetivo combina pérdidas de flujo de video y de acciones:

$$
\mathcal L=\lambda_v\mathcal L_{\mathrm{video}}+\lambda_a\mathcal L_{\mathrm{action}}.
$$

El desruido de video moldea las representaciones dinámicas; el desruido de acciones reconstruye las demostraciones. El despliegue ejecuta observación actual → un codificado visual → desruido de acciones → ejecución parcial → nueva observación. Un horizonte de predicción de 32 pasos no requiere ejecutar los 32 pasos antes de volver a planificar.

<figure className="paper-reading-figure" data-reading-figure="fastwam/attention-masks">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/attention-masks.png" alt="Dependencias de atención en entrenamiento e inferencia" loading="lazy" style={{maxWidth: "380px", marginInline: "auto"}} />
  <figcaption><strong>Dependencias de atención en entrenamiento e inferencia.</strong> Fuente: el artículo de Fast-WAM. Las filas son consultas y las columnas son claves legibles. Las acciones leen el frame actual y las acciones, pero no los frames futuros. Eliminar tokens futuros en la inferencia preserva esta ruta de condicionamiento, separando la supervisión de video de la generación de video en tiempo de ejecución.</figcaption>
</figure>

## Datos: qué significa “sin preentrenamiento encarnado”

El backbone parte de pesos de video preentrenados. La ausencia de preentrenamiento encarnado en el artículo significa que no hay una etapa adicional grande de preentrenamiento con acciones de robot, no inicialización aleatoria.

Las evaluaciones cubren LIBERO, RoboTwin 2.0 limpio y aleatorizado, y una tarea real de doblado de toallas con un Galaxea R1 Lite. La tarea real usa 60 horas de teleoperación y 30k pasos de entrenamiento por modelo, informando tanto el éxito como el tiempo de finalización.

## Experimentos: evidencia para eliminar la generación futura

| Método en marco compartido | Media en LIBERO | Media en RoboTwin |
| --- | ---: | ---: |
| Fast-WAM | 97.6% | 91.8% |
| Desruido conjunto de video/acción | 98.5% | 90.6% |
| Video-y-luego-acción IDM | 98.0% | 91.3% |
| Sin entrenamiento conjunto con video | 93.5% | 83.8% |

Estas son tasas de éxito del artículo en benchmarks separados. La inferencia directa de acciones está por debajo de las variantes que generan futuro en LIBERO y ligeramente por encima en RoboTwin. Eliminar el entrenamiento con video produce la pérdida más consistente: 4.1 y 8.0 puntos porcentuales respectivamente. La evidencia respalda la supervisión con video más que una superioridad universal en precisión para la inferencia directa.

RoboTwin usa 100 pruebas por tarea para cada configuración limpia/aleatorizada. Una prueba cuenta como exitosa solo tras completar la tarea, y los promedios pueden ocultar tareas individuales difíciles.

Para el doblado, el éxito eventual por sí solo puede ocultar múltiples agarres fallidos. El tiempo de finalización mide si la ejecución es eficiente. La latencia de inferencia reportada de aproximadamente 190 ms pertenece a la configuración de medición de los autores; no es la frecuencia de control de los motores.

## Integración con LeRobot y límites de los resultados

La versión 0.7.0 consume imágenes, estado, acciones e instrucciones. Las vistas de cámara se concatenan horizontalmente y deben coincidir con `image_size`. El checkpoint usa un preprocesamiento visual externo `IDENTITY` porque el modelo reescala las imágenes internamente; aplicar ambas transformaciones normalizaría dos veces.

El checkpoint documentado obtiene 97.6%, 99.0%, 95.0% y 94.0% en las cuatro suites de LIBERO: 96.4% sobre 2,000 episodios. La media de 97.6% del artículo es un resultado experimental diferente.

Los fragmentos de parámetros de evaluación son:

```bash
--policy.path=lerobot/fastwam_libero_uncond_2cam224
--policy.dtype=float32
--policy.n_action_steps=10
--env.type=libero
--env.task=libero_10
--eval.n_episodes=50
```

Una evaluación completa recorre las cuatro suites y sus tareas con renderizado, procesamiento del gripper, semillas y límites de episodios coincidentes.

## Conclusión

Fast-WAM separa una señal de entrenamiento útil del cálculo recurrente de despliegue. Su máscara evita fugas futuras, y sus variantes controladas muestran un mayor beneficio al conservar el entrenamiento de video que al conservar la generación de video en los entornos probados. La distribución de tareas y las condiciones de latencia definen el alcance de esa conclusión.

</div>
