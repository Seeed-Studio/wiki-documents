---
description: "Capítulo 8 del curso Sim-to-Real VLA de SO-ARM101 — construir el espacio de trabajo: la lista de hardware del estudio, lightbox, soportes de cámara, posiciones del rack y objetos, y las dos cámaras."
title: Capítulo 8 - Construir el espacio de trabajo
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Espacio de trabajo
  - Lightbox
  - Soporte de cámara
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_8
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 2 · Capítulo 8 · Build Your Robot Lab</span>
    <h2>8. Construir el espacio de trabajo</h2>
    <p>
      La tarea es siempre la misma: colocar tres viales en el rack. Este
      capítulo monta el estudio que hace la tarea grabable y repetible —
      lista de hardware, lightbox, soportes, posiciones de objetos y
      cámaras.
    </p>
    <div className="hero-actions">
      <a href="#hardware">Hardware</a>
      <a href="#lightbox">Lightbox</a>
      <a href="#brackets">Soportes</a>
      <a href="#props">Posiciones</a>
      <a href="#cameras">Cámaras</a>
      <a href="#checklist">Lista de verificación</a>
    </div>
  </div>
</section>

## 8.1 Lista de hardware

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>Lista de materiales</span>
    <h2>8.1 Lista de hardware</h2>
  </div>

| Elemento | Descripción | Cantidad |
|---|---|---|
| Kit Pro SO-ARM101 (líder + seguidor) | [Kit de brazo IA SO-ARM101](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 |
| Cámaras USB ×2 | Una para la muñeca y otra externa; cualquier cámara UVC a 640×480 y 30 FPS | 2 |
| Soportes de cámara | Soporte de muñeca del workshop + un soporte externo rígido | 2 |
| Rack de viales y tres viales | Objetos de la tarea — misma geometría que el gemelo digital | 1 juego |
| Lightbox o caja de foam + luz difusa | Fondo uniforme e iluminación estable | 1 |
| Tapete no reflectante | Superficie donde apoyar los objetos | 1 |
| Hub USB con alimentación | Si el PC o el Jetson no tiene puertos suficientes | 1 |

Las políticas aprenden lo que ven las cámaras. Una mesa cualquiera con una
ventana detrás produce un dataset lleno de cambios de luz; el estudio
elimina ese ruido. El enfoque sigue los capítulos de datasets del curso
para principiantes
([capítulo 11 — diseño de tareas](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_11/)
y [capítulo 12 — configuración de cámaras](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_12/)).

</section>

## 8.2 El lightbox

<section id="lightbox" className="section-card">
  <div className="section-title">
    <span>El estudio</span>
    <h2>8.2 El lightbox</h2>
  </div>

El estudio mínimo:

| Elemento | Propósito |
| --- | --- |
| Caja de foam o tapete liso | Fondo uniforme detrás de los objetos |
| Luz blanca difusa (una lámpara con pantalla, o dos LED a 45°) | Iluminación suave y estable sin sombras duras |
| Superficie no reflectante | Los viales y el rack se ven desde ambas cámaras |
| Posición fija del robot | El seguidor atornillado o fijado con cinta, base hacia los objetos |

:::tip Una luz gana a tres
Varias fuentes desiguales crean reflejos móviles en los viales brillantes.
Una luz cenital difusa más la luz ambiente de la sala es más fácil de
reproducir otro día — y eso importa cuando grabes más episodios luego.
:::

</section>

## 8.3 Soportes y anclajes

<section id="brackets" className="section-card">
  <div className="section-title">
    <span>Soportes</span>
    <h2>8.3 Soportes y anclajes</h2>
  </div>

Dos soportes llevan las cámaras; ambos deben ser lo bastante rígidos para
aguantar una semana de grabaciones sin desviarse.

**Soporte de cámara de muñeca.** Montado en la pinza del seguidor, siguiendo
el soporte oficial del workshop de SO-101: la cámara va sobre las garras,
inclinada unos 45° hacia abajo, de modo que las puntas y el objeto agarrado
queden en encuadre durante todo el alcance. Imprime o compra el soporte del
workshop y aprieta bien los tornillos — una cámara de muñeca que rote a
mitad de episodio invalida todos los episodios posteriores.

**Soporte de cámara externa.** Vale cualquiera rígido: un trípode pequeño,
un poste de perfil 2020 o un brazo articulado sujetado a la mesa. Colócalo
encima y delante del área de trabajo para que un fotograma cubra el rack,
las tres posiciones de viales y la mayor parte del alcance del seguidor.
No la sostengas con la mano ni la fijes a la misma tabla que empuja el
seguidor.

Cableado: deja holgura en la muñeca para que el bucle no se enganche, y
aleja ambos cables de cámara del área de trabajo del seguidor.

</section>

## 8.4 Posiciones de los objetos

<section id="props" className="section-card">
  <div className="section-title">
    <span>Posiciones</span>
    <h2>8.4 Posiciones de los objetos</h2>
  </div>

La definición de la tarea es parte del dataset. Manténla consistente:

- **Rack de viales**: a la derecha de la base del seguidor, dentro del
  alcance cómodo — mismo lado y distancia que el gemelo digital;
- **Tres viales**: repartidos en el área frente al brazo, a unos 10–20 cm;
  recolócalos a mano entre episodios;
- **Frase de tarea**: `Put the three vials into the vial rack` — la cadena
  exacta usada en la grabación del capítulo 9 y en el dataset del gemelo.
  No la parafrasees entre episodios.

:::tip Mide una vez y haz un fixture
Fija el rack con cinta y marca el área de viales en el tapete. La
reproducibilidad importa más que la precisión milimétrica.
:::

Si además vas a recopilar episodios simulados (capítulo 12), alinea la mesa
con la escena del gemelo — el gemelo es la especificación:

| Comprobación | Referencia en sim | Mesa real |
| --- | --- | --- |
| Posición del rack | Fija en `SO101_RACK_POSITION` | Mismo lado y distancia respecto a la base |
| Área inicial de viales | `SO101_VIAL_POSITIONS` | La misma región de 10–20 cm frente al brazo |
| Vistas de cámara | Muñeca + externa | Mismo encuadre, 640×480, 30 FPS |
| Iluminación | Domo + luz principal | Difusa, sin sombra dura sobre el rack |

Un desajuste de 1–2 cm es tolerable. El rack al otro lado, la cámara a otra
altura o una cámara en mano, no.

</section>

## 8.5 Cámaras

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Dos vistas</span>
    <h2>8.5 Cámaras</h2>
  </div>

Lista las cámaras y captura una vista previa de cada una:

```bash
lerobot-find-cameras opencv
```

Las imágenes van a `outputs/captured_images/`; el nombre del archivo
contiene el índice del dispositivo: `opencv__dev_video4.png` es el índice
4. Expórtalos:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Los índices pueden cambiar tras reiniciar o reconectar; repite la
comprobación antes de cada sesión de grabación. Bloquea el enfoque y la
exposición si la cámara lo permite — el autofocus buscando durante un
episodio produce fotogramas borrosos.

Verifica ambas vistas durante la teleoperación:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --display_data=true \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }"
```

:::note Los nombres de cámara son parte del esquema del dataset
El curso graba con las claves `front` (cámara de muñeca) y `external`
(cenital) para que el dataset real tenga exactamente los mismos nombres de
características que el simulado del capítulo 12 — eso permite el
co-entrenamiento sin renombrar. El capítulo 10 mapea ambos flujos a las
entradas `wrist` y `front` de GR00T.
:::

</section>

## 8.6 Lista de verificación del estudio

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Antes del capítulo 9</span>
    <h2>8.6 Lista de verificación del estudio</h2>
  </div>

- Lightbox o tapete colocado, una luz difusa, sin sombras duras en el rack;
- Seguidor fijado; líder a mano;
- Soporte de muñeca rígido, cámara inclinada unos 45°, ve las garras;
- Cámara externa en soporte rígido, ve el rack y las tres ranuras;
- Ambas cámaras previsualizan a 640×480 y 30 FPS, enfoque bloqueado;
- `CAMERA_GRIPPER` y `CAMERA_EXTERNAL` exportados;
- Rack fijado con cinta, área de viales marcada, frase de tarea fijada.

Siguiente: [Capítulo 9 — Recopilar datos del entorno real](es_Sim2Real_VLA_09.md).

</section>

</div>