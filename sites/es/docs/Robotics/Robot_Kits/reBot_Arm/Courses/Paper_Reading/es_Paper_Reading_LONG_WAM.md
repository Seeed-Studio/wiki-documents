---
description: "Un análisis en profundidad de Long-WAM: mecanismos, entrenamiento, experimentos y alcance de la integración con LeRobot v0.7.0."
title: "Long-WAM: Hacer que el historial visual sea útil para la predicción y el control"
hide_title: true
keywords: ["Paper Deep-Dive","Long-WAM","World-Action Models","Long Context","Inverse Dynamics","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_long_wam
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
    "value": "Prerrequisitos: historial, predicción y ejecución",
    "id": "prerequisites-history-prediction-and-execution",
    "level": 2
  },
  {
    "value": "Resumen y guía de lectura",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "Por qué importa la inicialización de video",
    "id": "why-video-initialization-matters",
    "level": 2
  },
  {
    "value": "Preentrenamiento de video: predecir el cambio a partir del pasado",
    "id": "video-pretraining-predicting-change-from-the-past",
    "level": 2
  },
  {
    "value": "Arquitectura: cómo el pasado y el futuro llegan al controlador",
    "id": "architecture-how-past-and-future-reach-the-controller",
    "level": 2
  },
  {
    "value": "Futuros de entrenamiento y futuros de despliegue",
    "id": "training-futures-and-deployment-futures",
    "level": 3
  },
  {
    "value": "Tiempo de ejecución: reducir el coste del historial",
    "id": "runtime-reducing-the-cost-of-history",
    "level": 2
  },
  {
    "value": "Experimentos: separar los efectos del historial, el futuro y el sistema",
    "id": "experiments-separating-history-future-and-systems-effects",
    "level": 2
  },
  {
    "value": "Inicialización y contexto",
    "id": "initialization-and-context",
    "level": 3
  },
  {
    "value": "Condicionamiento futuro y tareas dinámicas",
    "id": "future-conditioning-and-dynamic-tasks",
    "level": 3
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-long_wam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-long_wam-title">Long-WAM: Hacer que el historial visual sea útil para la predicción y el control</h1>
  <p className="paper-reading-lead">Long-WAM: Escalando el contexto de los World-Action Models</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#video-pretraining-predicting-change-from-the-past">Historial visual</a></li>
    <li><a href="#architecture-how-past-and-future-reach-the-controller">Predicción y acciones</a></li>
    <li><a href="#runtime-reducing-the-cost-of-history">Ejecución en tiempo real</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2610.10528v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>Leer el artículo</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/longwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · Documentación de LeRobot Long-WAM ↗</a>

**Parámetros de LeRobot**

- `--policy.path=Efficient-Large-Model/Long-WAM-LIBERO-IDM-LeRobot` carga pesos de predecir-y-luego-actuar.
- `past_obs_steps=48` cuenta ticks de control pasados, no acciones futuras.
- `inference_action_horizon=80` y `n_action_steps=10` distinguen la longitud de predicción de la de ejecución.
- Llama a `select_action` en cada tick de control, incluso mientras se consumen acciones en cola. La integración versionada valida la inferencia síncrona.

</aside>

Una taza se mueve hacia la izquierda en una cinta transportadora. Una imagen la localiza; varias imágenes revelan su movimiento. En otra tarea, un robot ya ha sacado una taza de un armario, pero la vista actual se parece a la escena inicial. El historial identifica la siguiente fase. **¿Aceptar más historial hace automáticamente que una política lo use?**

## Prerrequisitos: historial, predicción y ejecución

El historial contiene observaciones antes de una decisión; la predicción cubre el futuro; la ejecución determina cuándo el robot vuelve a planificar. A 20 Hz, 48 ticks de control pasados abarcan 2,4 segundos y 10 acciones ejecutadas abarcan 0,5 segundos. Ninguno determina el horizonte de predicción, y los fotogramas de video pueden muestrearse con un stride independiente.

<figure className="paper-reading-figure" data-reading-figure="long_wam/teaching-history-future-feedback-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/long-wam-history-future-feedback-en-v2.png" alt="Historial observado, futuro predicho y retroalimentación de la ejecución real" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>Historial observado, futuro predicho y retroalimentación de la ejecución real.</strong> Ilustración didáctica generada por IA de la variante de modelado de dinámica inversa (IDM). El historial de video observado y los latentes de video futuros parcialmente desruidos condicionan conjuntamente las acciones. La desruido de video futuro se detiene en un nivel de ruido distinto de cero, sin decodificación de píxeles. El condicionamiento por lenguaje y estado del robot se omite para mayor claridad. Solo las nuevas observaciones de la ejecución real entran en el historial observado; los futuros predichos no son observaciones pasadas.</figcaption>
</figure>

## Resumen y guía de lectura

**Resumen en breve.** Long-WAM aprende dependencias de historial-a-futuro mediante preentrenamiento de video autorregresivo y luego preserva esa estructura causal durante la adaptación de acciones. Las acciones usan tanto el historial observado como los latentes de futuro predicho. La codificación en streaming, la ejecución asíncrona y las optimizaciones de hardware reducen el coste en tiempo de ejecución.

**Nota de lectura.** Una ventana de entrada más larga y la capacidad de explotar el historial son cosas distintas. Del mismo modo, el sistema de despliegue original y un adaptador síncrono de LeRobot tienen capacidades validadas diferentes.

## Por qué importa la inicialización de video

La generación de video bidireccional puede leer tanto fotogramas anteriores como posteriores. El control de robots debe inferir qué viene después a partir de las observaciones ya disponibles. Añadir historial solo durante el fine-tuning de acciones no enseña necesariamente una dependencia temporal efectiva.

A diferencia del Fast-WAM estándar, Long-WAM conserva las condiciones de futuro predicho. A diferencia de simplemente ampliar un búfer de contexto, aprende la causalidad temporal durante el preentrenamiento de video.

## Preentrenamiento de video: predecir el cambio a partir del pasado

LongLive2.0-Robot continúa desde un checkpoint autorregresivo de LongLive-2.0 usando video de robots y egocéntrico sin requerir un espacio de acciones común. La atención block-causal permite que cada bloque objetivo lea su contexto anterior genuino.

El teacher forcing supervisa múltiples bloques en paralelo. Las perturbaciones de error en búfer enseñan la recuperación de errores de historial que se asemejan a las condiciones de rollout. El historial aporta la condición; el video futuro aporta la supervisión. La imagen de condición limpia se excluye del objetivo de desruido.

## Arquitectura: cómo el pasado y el futuro llegan al controlador

Las consultas de video leen sus propios bloques visuales y los anteriores, nunca acciones. Las consultas de acción leen el historial, los latentes futuros parcialmente desruidos y todo el bloque de acciones.

| Etapa IDM | Entrada | Resultado |
| --- | --- | --- |
| Predecir latentes futuros | Historial, instrucción y condición de estado | Dinámica anticipada |
| Prefill visual | Latentes observados y predichos | Claves y valores visuales por capa |
| Desruido de acciones | Caché visual, estado y ruido de acción | Bloque de acciones continuas |
| Retroalimentación | Ejecución recién observada | Historial genuino actualizado |

IDM infiere acciones después de predecir el cambio visual. No se necesita decodificación RGB futura. El ajuste V4 del artículo detiene la desruido de video en $\sigma_\star=0.9$ y reutiliza la caché visual resultante durante la generación de acciones.

<figure className="paper-reading-figure" data-reading-figure="long_wam/overview">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/overview.png" alt="Del preentrenamiento de video causal a acciones condicionadas por el historial" loading="lazy" />
  <figcaption><strong>Del preentrenamiento de video causal a acciones condicionadas por el historial.</strong> Fuente: el artículo de Long-WAM. La canalización inferior distingue historial observado, futuros imaginados y el experto en acciones; el caché de KV preserva el contexto histórico. El despliegue sigue necesitando nuevas observaciones reales en lugar de tratar las predicciones como eventos que ya ocurrieron.</figcaption>
</figure>

### Futuros de entrenamiento y futuros de despliegue

El entrenamiento primero optimiza el flow matching de video y luego condiciona el entrenamiento de acciones en latentes futuros de ground truth con ruido hacia adelante. El despliegue sustituye futuros predichos. La pasada de acción desacopla la caché visual, actualizando el experto en acciones y el adaptador propioceptivo mientras el objetivo de video entrena al predictor.

Esta elección de gradiente difiere de la máscara hacia adelante que impide que el video lea acciones. La información de futuro predicho también debe permanecer distinta de las observaciones reales en el siguiente ciclo de control.

## Tiempo de ejecución: reducir el coste del historial

Un VAE en streaming codifica las observaciones entrantes de forma incremental en lugar de recomputar todo el historial. La ejecución asíncrona prepara otro bloque mientras el robot consume el actual.

Con un solapamiento de $O$ ticks y duración de tick $\Delta t$, una entrega puntual requiere

$$
T_{\mathrm{ready}}\leq O\Delta t.
$$

Un plazo incumplido ocasional puede causar esperas incluso cuando la inferencia media es rápida. Los 107,4 ms reportados en una RTX 5090 incluyen la predicción de latentes futuros bajo la configuración optimizada del artículo; no son una latencia universal de dispositivo o adaptador.

<figure className="paper-reading-figure" data-reading-figure="long_wam/streaming-execution">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/streaming-execution.png" alt="Entrega asíncrona con codificación en streaming y de ventana completa" loading="lazy" />
  <figcaption><strong>Transferencia asíncrona con streaming y codificación de ventana completa.</strong> Fuente: el artículo de Long-WAM. El streaming codifica las observaciones que van llegando, mientras que la codificación de ventana completa retrasa las transferencias. Ambos calendarios usan el mismo intervalo nominal de disparo y solapamiento. El diagrama ilustra esperas de planificación reducidas, no una ganancia de tasa de éxito medida por separado.</figcaption>
</figure>

## Experimentos: Separar los efectos del historial, del futuro y del sistema

### Inicialización y contexto

El artículo compara la inicialización de video bidireccional, autoregresiva general y autoregresiva específica del dominio de robots. El rendimiento de Long-context RoboCasa GR-1 alcanza el 78,7%; la inicialización autoregresiva se beneficia más del historial, mientras que la inicialización bidireccional no obtiene la misma mejora neta. La longitud útil del historial depende de la tarea.

<figure className="paper-reading-figure" data-reading-figure="long_wam/context-scaling">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/long_wam/context-scaling.png" alt="Context scaling under different video initializations" loading="lazy" />
  <figcaption><strong>Escalado de contexto bajo diferentes inicializaciones de video.</strong> Fuente: el artículo de Long-WAM. Los ajustes discretos de contexto se representan con un espaciado uniforme. La inicialización causal de robot alcanza su máximo en 2,4 segundos en LIBERO-Long y 19,2 segundos en RoboCasa. Ventanas más largas no siguen mejorando el éxito, y la inicialización bidireccional no obtiene las mismas ganancias.</figcaption>
</figure>

### Condicionamiento futuro y tareas dinámicas

| Configuración del artículo | Media LIBERO | LIBERO-Long | Media RoboTwin |
| --- | ---: | ---: | ---: |
| Sin predicción futura | 97,3% | 94,5% | 92,0% |
| Co-denoising conjunto | 97,8% | 95,8% | 93,6% |
| IDM | 99,5% | 99,5% | 94,4% |

Estas son tasas de éxito en benchmarks distintos. Tras el ajuste fino con datos dinámicos, el éxito de DOMINO es del 34,9%, sustancialmente por debajo de las puntuaciones de manipulación estática. Los resultados casi saturados de LIBERO no implican que el control dinámico esté resuelto.

En las plataformas físicas Unitree G1 y YAM, el artículo estudia tanto tareas dinámicas como de horizonte largo. El apilado dinámico de tazas tiene éxito en 19 de 20 pruebas de Long-WAM, frente a cero para π0.5 y Fast-WAM en esa configuración. Los experimentos de tareas compuestas además usan un planificador de alto nivel separado; sus resultados pertenecen al sistema combinado.

## Integración con LeRobot y límites de los resultados

La versión 0.7.0 admite checkpoints nativos IDM/CoD, ajuste fino e inferencia síncrona. La versión de LIBERO usa dos cámaras de 224×224, acciones 7D, estado 8D e historial P48. Proporciona observaciones nuevas en cada tick de control, incluso mientras las acciones siguen en cola.

El checkpoint IDM documentado obtiene 99,4%, 99,8%, 97,8% y 99,0%, con 500 episodios por conjunto: 99,00% en total. CoD promedia 98,45%. Estos son resultados del adaptador, separados del 99,5% del artículo. Los paquetes `model.pt` originales no son directorios de checkpoints nativos de LeRobot.

`reset()` borra tanto el historial como las acciones en cola. Cambiar solo `past_obs_steps` no constituye entrenamiento de escalado de contexto. El async/RTC genérico no está validado en este adaptador; la ejecución optimizada del proyecto original sigue siendo una capacidad separada.

## Conclusión

Long-WAM aprende a predecir a partir del historial antes de conectar esa predicción con las acciones. El streaming y la ejecución asíncrona hacen que este camino sea más práctico. Sus ganancias dependen de la inicialización, de los requisitos de memoria de la tarea, del condicionamiento futuro y del sistema de despliegue utilizado.

</div>
