---
description: "Capítulo 19 del curso para principiantes de SO-ARM Physical AI — qué es un embodiment, cómo se definen las articulaciones, el estado, la acción y las cámaras del SO-ARM para GR00T, el paradigma de modelo fundacional más ajuste, y el encaje del servidor de inferencia GR00T con el cliente de control del robot."
title: Capítulo 19 - Embodiment del robot y arquitectura de GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - embodiment
  - VLA
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_19
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_19/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 4 · Capítulo 19 · Teoría</span>
    <h2>19. Embodiment del robot y arquitectura de GR00T</h2>
    <p>
      Capítulo 19 del curso para principiantes de SO-ARM Physical AI — qué es un embodiment, cómo se definen las articulaciones, el estado, la acción y las cámaras del SO-ARM para GR00T, el paradigma de modelo fundacional más ajuste, y el encaje del servidor de inferencia GR00T con el cliente de control del robot.
    </p>
    <div className="hero-actions">
      <a href="#embodiment">Embodiment</a>
      <a href="#joints">Juntas y estado</a>
      <a href="#architecture">Arquitectura</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 19.1 ¿Qué es un embodiment?

<section id="embodiment" className="section-card">
  <div className="section-title">
    <span>Embodiment</span>
    <h2>19.1 ¿Qué es un embodiment?</h2>
  </div>

"Embodiment" es cómo existe físicamente un robot: cuántas articulaciones, qué cámaras, qué pinza, qué espacio de acciones. Un modelo VLA fundacional se entrena a través de **muchos** embodiments — distintos brazos, humanoides, plataformas móviles — y necesita decir "¿para qué cuerpo estoy actuando ahora?"

Esa vía es la **etiqueta de embodiment (embodiment tag)**. Al ajustar GR00T con datos del SO-ARM, el dataset lleva la etiqueta `new_embodiment`, que selecciona la proyección de entrada/salida correcta para un embodiment de un solo brazo. Junto con una **configuración de datos** — para el montaje estándar de dos cámaras del SO-ARM, `so100_dualcam` — le dice al modelo exactamente cómo es su cuerpo.

:::note
El SO-ARM es uno de los embodiments de bajo costo mejor soportados del ecosistema GR00T: la guía oficial de ajuste de NVIDIA usa datos de SO101, y la vía de política `groot` de LeRobot también funciona con datasets del SO-ARM.
:::

</section>

## 19.2 Articulaciones, estado y acción del SO-ARM

<section id="joints" className="section-card">
  <div className="section-title">
    <span>Definiciones</span>
    <h2>19.2 Articulaciones, estado y acción del SO-ARM</h2>
  </div>

### Articulaciones y estado

El `observation.state` del SO-ARM tiene 6 dimensiones, en el orden fijo guardado en los metadatos del dataset:

| Dim. | Articulación |
| :---: | :--- |
| 0 | rotación de hombro |
| 1 | elevación de hombro |
| 2 | codo |
| 3 | cabeceo de muñeca |
| 4 | giro de muñeca |
| 5 | pinza |

### Acción

`action` refleja las mismas 6 dimensiones: posiciones objetivo del paso siguiente. En `modality.json` (Capítulo 20), el grupo estado/acción se divide en `single_arm` (dims 0-4) y `gripper` (dim 5), porque GR00T puede procesarlos por cabezas distintas.

</section>

## 19.3 Modalidad de cámara

<section id="camera-modality" className="section-card">
  <div className="section-title">
    <span>Cámaras</span>
    <h2>19.3 Modalidad de cámara</h2>
  </div>

### Montajes habituales (SO-ARM)

La configuración `so100_dualcam` espera dos vistas — el montaje estándar del ecosistema:

| Clave | Vista | Propósito |
| :--- | :--- | :--- |
| `front` (o `top`) | Superior / frontal cubriendo el área | Dónde está el objeto, dónde B |
| `side` (o `wrist`) | Lateral o de pinza | Altura sobre la mesa, contacto con el objeto |

### Notas

- Las claves grabadas en el dataset deben reaparecer idénticas en la inferencia.
- Dos vistas son el punto óptimo de GR00T en este brazo; más cámaras exigen configuración personalizada.

</section>

## 19.4 Modalidad de lenguaje

<section id="language-modality" className="section-card">
  <div className="section-title">
    <span>Lenguaje</span>
    <h2>19.4 Modalidad de lenguaje</h2>
  </div>

### Lado de datos

Cada episodio lleva una descripción ligada al grabar (el `--dataset.single_task` del Capítulo 12) o rellenada en `meta/tasks.jsonl`. GR00T la lee por la clave de anotación `human.task_description` (la recomendada del Capítulo 18 para datos del SO-ARM).

### Lado de inferencia

Al desplegar, la instrucción se pasa en vivo — p. ej. el `--lang_instruction="Grab pens and place into pen holder."` del cliente del Capítulo 21. Cambia la frase, cambia la tarea; mismos pesos.

</section>

## 19.5 Ventana de observación y ventana de acción

<section id="windows" className="section-card">
  <div className="section-title">
    <span>Ventanas</span>
    <h2>19.5 Ventana de observación y ventana de acción</h2>
  </div>

GR00T procesa la observación **actual** (imágenes + estado + lenguaje) y emite un **bloque de acciones** que cubre una ventana corta de futuro (16 pasos en N1.5). Como el ACT del Capítulo 14, solo la primera porción se ejecuta antes de reobservar — el mismo compromiso bloque/horizonte, ahora dentro de un modelo mucho mayor.

</section>

## 19.6 Modelo fundacional y ajuste fino

<section id="foundation" className="section-card">
  <div className="section-title">
    <span>Paradigma</span>
    <h2>19.6 Modelo fundacional y ajuste fino</h2>
  </div>

### Modelo fundacional

Un backbone VLM preentrenado con datos visuales-lingüísticos a escala de internet más grandes datasets multi-robot — llega sabiendo ya "qué son los objetos" y aproximadamente "cómo se ve la manipulación". Los pesos preentrenados de GR00T N1.5-3B están en Hugging Face: `nvidia/GR00T-N1.5-3B`.

### Ajuste fino

Tu dataset del SO-ARM adapta el modelo fundacional a tu mesa, tus objetos, tu redacción de instrucciones:

- El ajuste completo reentrena más de la red (~25GB de VRAM, Capítulo 21);
- El ajuste parcial (p. ej. `--no-tune_diffusion_model`, congela la cabeza DiT) recorta VRAM y tiempo, con algo de precisión menos;
- Las variantes LoRA / PEFT entrenan solo capas adaptadoras pequeñas.

### Zero-shot vs. ajuste

El zero-shot (sin ajustar) a veces "se mueve de forma plausible" pero rara vez completa tu tarea con fiabilidad — tu mesa nunca estuvo en el preentrenamiento. Ajustar con 50-100 episodios locales es la vía esperada.

</section>

## 19.7 Arquitectura del sistema GR00T

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>Arquitectura</span>
    <h2>19.7 Arquitectura del sistema GR00T</h2>
  </div>

### Flujo interno (simplificado)

```text
imágenes (frontal, lateral) ─┐
estado (6) ──────────────────┼─→ backbone VLM ─→ cabeza DiT ─→ bloque de acciones (k × 6)
lenguaje ────────────────────┘      (entender)      (denoise)      (a los servos)
```

- El **backbone VLM** funde las tres modalidades en un entendimiento semántico de escena e instrucción;
- La **cabeza DiT (Diffusion Transformer)** denoise repetidamente un latente hasta un bloque continuo y coherente (Flow Matching);
- El bloque fluye al lado de control, que ejecuta los primeros pasos y reobserva.

### Servidor de inferencia GR00T y cliente de control

Para el despliegue, la pila de NVIDIA Isaac-GR00T se divide en dos procesos:

**Cliente de control del robot** — conecta el SO-ARM y las cámaras, envía observaciones (imágenes + estado + lenguaje) al servidor, recibe bloques y los ejecuta en los servos. El ejemplo oficial es `examples/SO-100/eval_lerobot.py` — escrito exactamente para este brazo.

**Servidor de inferencia GR00T** — aloja el modelo, corre en la GPU disponible (estación de trabajo, instancia en la nube o Jetson AGX Thor en su imagen Docker) y responde al cliente por red.

```text
[ SO-ARM + cámaras ] ⇄ USB ⇄ [ cliente de control ] ⇄ red ⇄ [ servidor GR00T + GPU ]
```

### Lista de comprobación de integración

Antes de la práctica del Capítulo 21, asegúrate de responder:

1. ¿Qué etiqueta de embodiment? → `new_embodiment`
2. ¿Qué configuración de datos? → `so100_dualcam`
3. ¿Qué claves de cámara? → exactamente las del dataset
4. ¿Qué redacción de instrucciones? → exactamente las anotadas en el dataset

</section>

## 19.8 La posición del SO-ARM en GR00T

<section id="soarm-in-groot" className="section-card">
  <div className="section-title">
    <span>Posición</span>
    <h2>19.8 La posición del SO-ARM en GR00T</h2>
  </div>

- Un **embodiment de escritorio, de bajo costo y reproducible** — las mismas cualidades que lo hicieron brazo de referencia de LeRobot lo vuelven objetivo de ajuste para GR00T;
- Soportado por la **receta oficial de ajuste SO101** (blog de NVIDIA + ejemplos SO-100 del repositorio Isaac-GR00T);
- Desplegable en el **borde** con Jetson AGX Thor para inferencia;
- Y — Capítulo 22 — alcanzable por la **plataforma sin código SenseCraft Robotics** para quien evita toda la cadena GR00T.

</section>

## 19.9 Resumen del capítulo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>19.9 Resumen del capítulo</h2>
  </div>

- Embodiment = la definición del cuerpo del robot; para el SO-ARM en GR00T: etiqueta `new_embodiment`, configuración `so100_dualcam`.
- Estado/acción son de 6 dimensiones en orden fijo; dos cámaras + lenguaje completan el conjunto de modalidades.
- Modelo fundacional + ajuste supera al zero-shot para tu mesa concreta.
- El despliegue se divide en cliente de control (brazos + cámaras) y servidor de inferencia con GPU.

El próximo capítulo prepara tu dataset del SO-ARM para el ajuste de GR00T.

</section>

</div>
