---
description: "Capítulo 12 del curso Sim-to-Real VLA de SO-ARM101 (opcional) — recopilar datos de Isaac Sim: teleopera el gemelo digital del SO-ARM101 blanco, graba episodios LeRobot v3, repite y verifica."
title: Capítulo 12 - Recopilar datos de Isaac Sim (opcional)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac Sim
  - Gemelo digital
  - Recolección de datos
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_12
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_12/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 3 · Capítulo 12 · Opcional · Datos de sim</span>
    <h2>12. Recopilar datos de Isaac Sim</h2>
    <p>
      Teleopera el gemelo digital del SO-ARM101 blanco con el mismo brazo
      líder, graba episodios con exactamente el mismo esquema de dataset y
      valida el bucle completo sin ocupar el robot real.
    </p>
    <div className="hero-actions">
      <a href="#process">Flujo de datos</a>
      <a href="#cameras">Vistas de cámara</a>
      <a href="#requirements">Requisitos</a>
      <a href="#launch">Arranque</a>
      <a href="#capture">Grabación</a>
      <a href="#replay">Reproducción</a>
    </div>
  </div>
</section>

:::note Este capítulo es opcional
Se recomienda ejecutar antes el bucle real completo (recopilar → entrenar
→ evaluar, capítulos 9–11). Los datos simulados no ocupan el robot real y
escalan diversidad de escena e iluminación a bajo coste, así que funcionan
bien como complemento una vez validado el pipeline real.
:::

## 12.1 Objetivos y flujo de datos

<section id="process" className="section-card">
  <div className="section-title">
    <span>Enlace de datos</span>
    <h2>12.1 Objetivos y flujo de datos</h2>
  </div>

- Conocer la herramienta de simulación NVIDIA Isaac Sim;
- Conocer la disposición de cámaras del gemelo: la cámara de muñeca
  `front` y la cenital `external` — los mismos dos flujos del dataset
  real;
- Generar un dataset VLA completo en el gemelo.

El enlace de datos del proyecto SO-ARM101 es el siguiente:

```text
Líder SO-101 (o IK por teclado)
       | USB serie
       ▼
Puente Python LeRobot -- UDP 127.0.0.1:5015 --> Isaac Sim SO-ARM101 blanco
                                                        |
                                   +--------------------+--------------------+
                                   |                                         |
                                   ▼                                         ▼
                              action/state                     cámaras front + external
                                   |                                         |
                                   +--------------------+--------------------+
                                                        |
                                                        ▼
                                                 LeRobot Dataset v3
```

El líder solo aporta comandos manuales: el brazo simulado no ejecuta
trayectorias de agarre por sí solo. El sistema registra a la vez:

- `action`: los seis comandos articulares del líder;
- `observation.state`: los seis valores simulados en espacio del líder;
- `observation.images.front`: la cámara que se mueve con la muñeca;
- `observation.images.external`: la vista cenital sobre el área de trabajo;
- el texto de tarea (`Put the three vials into the vial rack`), los
  parámetros de aleatorización y el estado de éxito de la tarea.

La frecuencia por defecto es 30 FPS y ambas cámaras graban a 640 × 480 —
idéntico al dataset real del capítulo 9.

</section>

## 12.2 Vistas de cámara

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>front + external</span>
    <h2>12.2 Vistas de cámara</h2>
  </div>

Tras pulsar `R` para reiniciar la escena, las dos vistas se ven como las
del robot real: `front` es el flujo de muñeca que se mueve con el brazo y
`external` la vista cenital fija — ambos se graban en el dataset.

:::note Ver el hardware de muñeca en cuadro es normal
La pinza y el soporte visibles en la parte baja de la vista `front` son
intencionados — la cámara de muñeca va al frente del objetivo y mira a lo
largo del brazo, igual que el soporte real del capítulo 8. Usa
`./run_so101.sh --single-viewport` para conservar solo la vista principal
y ocultar las ventanas flotantes; la grabación no se ve afectada.
:::

</section>

## 12.3 Requisitos del entorno

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>GPU e instalación</span>
    <h2>12.3 Requisitos del entorno</h2>
  </div>

- Ubuntu 22.04;
- GPU NVIDIA RTX — NVIDIA recomienda 12 GB+ de VRAM para trabajar con
  Isaac Sim;
- Isaac Sim 6.1 standalone instalado y arrancable.

Instala Isaac Sim una vez:

```bash
# Descarga el zip standalone de Isaac Sim 6.1 para Linux desde NVIDIA,
# extrae y arranca una vez:
mkdir -p ~/isaacsim && cd ~/isaacsim
unzip ~/Downloads/isaac-sim-standalone-6.1.0-linux-x86_64.zip
./python.sh -c "print('isaac ok')"
```

- El entorno LeRobot del capítulo 7 (`~/rebot_lerobot/.venv`), con los
  extras de dataset para que los episodios se conviertan:
  `uv pip install -e "./lerobot[dataset,viz]"`. Sin ellos, la conversión
  falla y el terminal imprime `[dataset-error]`;
- `git-lfs` instalado — los activos USD del proyecto van con Git LFS.

:::caution GPUs de portátil de 8 GB
En GPUs de 8 GB (la mayoría de portátiles) la carga de render puede
privar de recursos al compositor del escritorio y congelar la máquina, aun
con las mitigaciones integradas (render Real-Time, 640×360, límite de
30 Hz). Usa esas flags o pasa a la recolección headless.
:::

</section>

## 12.4 Descargar el código fuente

<section id="source" className="section-card">
  <div className="section-title">
    <span>Clonar el proyecto</span>
    <h2>12.4 Descargar el código fuente</h2>
  </div>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/yuyoujiang/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

:::caution Los activos USD van con Git LFS
Sin `git lfs pull`, el clon solo contiene pequeños archivos puntero y
Isaac Sim no puede abrir la escena.
:::

</section>

## 12.5 Arrancar la teleoperación en Isaac Sim

<section id="launch" className="section-card">
  <div className="section-title">
    <span>Primer arranque</span>
    <h2>12.5 Arrancar la teleoperación en Isaac Sim</h2>
  </div>

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --leader-port /dev/ttyACM0
```

Si solo hay un dispositivo serie, el programa lo detecta automáticamente:

```bash
./run_so101.sh
```

Si Isaac Sim está en otro directorio:

```bash
ISAACSIM_ROOT=/path/to/isaacsim ./run_so101.sh --leader-port /dev/ttyACM0
```

El primer arranque construye `scenes/so101_vials_sorting.usda` y compila
shaders, lo que tarda unos minutos; es normal.

¿Sin líder? El modo IK de teclado conduce el efector final directamente:

1. Haz clic una vez en la vista 3D (foco de teclado);
2. Pulsa `Y` — el terminal imprime
   `[teleop] Control source: KEYBOARD (IK: WASD ...)`;
3. `W`/`S`/`A`/`D` mueven en el plano de la mesa, las flechas suben y
   bajan, `Z`/`C` cabecean la herramienta, `G` abre y cierra la pinza.

</section>

## 12.6 Grabar un episodio

<section id="capture" className="section-card">
  <div className="section-title">
    <span>R · S · C</span>
    <h2>12.6 Grabar un episodio</h2>
  </div>

Asegúrate de que la vista de Isaac Sim tiene foco de teclado y sigue la
secuencia:

1. Pulsa `R` para reiniciar la escena: los tres viales se recolocan y se
   aplica la aleatorización de objetos e iluminación;
2. Revisa las dos vistas de cámara y las posiciones iniciales;
3. Pulsa `S` (modo líder) o `T` (modo teclado) para empezar a grabar:

```text
[record] Episode started at 30 FPS -> .../datasets/so101_vials_front_side
```

4. Opera el líder y coloca los tres viales en el rack; el asistente de
   agarre fija un vial cuando la pinza se cierra cerca (el terminal imprime
   `[GRASP]`) y lo suelta al abrir sobre el rack (`[RELEASE]`);
5. Vuelve a pulsar `S`/`T` para terminar y guardar;
6. Espera la codificación en segundo plano:

```text
[dataset] Episode saved; total completed: 1
```

El sistema convierte JPEG temporales, acciones y estados a LeRobot Dataset
v3 en segundo plano; puedes empezar la siguiente operación durante la
codificación.

Atajos de teclado:

| Tecla | Función |
|---|---|
| `R` | Reinicia los tres viales y los re-aleatoriza |
| `S` / `T` | Empieza a grabar; en grabación, vuelve a pulsar para terminar y guardar |
| `C` | Cancela el episodio actual sin escribirlo en el dataset |
| `Y` | Alterna modo líder / modo IK de teclado |
| `B` | Alterna el paso lento / rápido del teclado |

Si un vial cae, un agarre falla o la calidad del movimiento es mala, pulsa
`C` para descartar, luego `R` y graba de nuevo.

</section>

## 12.7 Inspeccionar y visualizar el dataset

<section id="viz" className="section-card">
  <div className="section-title">
    <span>Visualizador de datasets</span>
    <h2>12.7 Inspeccionar y visualizar el dataset</h2>
  </div>

```bash
cd ~/rebot_lerobot
source .venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --episode-index 0 \
  --display-compressed-images true
```

Revisa episodios en secuencia: acciones, estados y ambos flujos de vídeo
deben estar sincronizados, sin fotogramas negros, congelados ni
oclusión severa.

</section>

## 12.8 Reproducir acciones en Isaac Sim

<section id="replay" className="section-card">
  <div className="section-title">
    <span>Bucle de simulación</span>
    <h2>12.8 Reproducir acciones en Isaac Sim</h2>
  </div>

Primero arranca un receptor que no conecta el líder, no graba y tiene la
aleatorización desactivada:

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --no-start-bridge --no-recording --no-dr &
```

Luego reproduce el episodio 0 desde un segundo terminal:

```bash
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts ~/rebot_lerobot/.venv/bin/python \
  scripts/replay_episode_so101.py --episode 0
```

Reproducción en bucle: añade `--loop`. El script envía la columna `action`
del dataset para comprobar la trayectoria del brazo; no es un reproductor
de vídeo — el contenido de cámara se inspecciona con el visualizador de
arriba. El terminal imprime `[teleop:LIVE]` mientras fluyen acciones y
`[SUCCESS]` cuando los tres viales quedan dentro del rack durante 0,35 s.

</section>

## 12.9 Verificar sin el líder (opcional)

<section id="no-leader" className="section-card">
  <div className="section-title">
    <span>Comprobación headless</span>
    <h2>12.9 Verificar sin el líder (opcional)</h2>
  </div>

Si aún no tienes el brazo líder, el grabador por script valida física,
cámaras y escritura del dataset sin interfaz gráfica:

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --auto-record 2
```

Graba dos episodios cortos en `datasets/so101_vials_front_side` y termina.
El `[dataset] Episode saved` final significa que toda la cadena —
construcción de escena, física, cámaras, conversión del dataset — funciona
sin hardware.

</section>

## 12.10 Configuración y material de referencia

<section id="config" className="section-card">
  <div className="section-title">
    <span>Archivos de configuración</span>
    <h2>12.10 Configuración y material de referencia</h2>
  </div>

Archivos principales del proyecto SO-ARM101:

- `config/teleop_config_so101.json`: puerto serie, UDP, mapeo articular y
  asistencia de agarre;
- `config/domain_randomization_so101.json`: parámetros de objetos,
  iluminación, cámaras y dataset;
- `config/grasp_config_so101.json`: objetos de escena, parámetros físicos
  y condiciones de éxito de la tarea.

Continúa con el [capítulo 13 — Aumento de datasets (opcional)](es_Sim2Real_VLA_13.md)
o vuelve a la ruta real en el
[capítulo 14 — Preparar tu Jetson](es_Sim2Real_VLA_14.md).

</section>

</div>