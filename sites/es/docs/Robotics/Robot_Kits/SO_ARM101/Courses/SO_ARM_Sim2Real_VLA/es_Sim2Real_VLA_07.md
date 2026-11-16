---
description: "Capítulo 7 del curso Sim-to-Real VLA de SO-ARM101 — preparar el brazo robótico: instalar el entorno LeRobot, escribir IDs de servos (preensamblados lo omiten), calibrar ambos brazos y verificar con una teleoperación."
title: Capítulo 7 - Preparar el brazo robótico
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - lerobot-setup-motors
  - Calibración
  - LeRobot
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_7
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/es/robotics/soarm_sim2real_vla_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 2 · Capítulo 7 · Build Your Robot Lab</span>
    <h2>7. Preparar el brazo robótico</h2>
    <p>
      Dos brazos: un líder que mueves con la mano y un seguidor que repite
      el movimiento. Instala el entorno, escribe los IDs de servos (omítelo
      en preensamblados), calibra ambos y verifica con una primera
      teleoperación.
    </p>
    <div className="hero-actions">
      <a href="#arms">Los brazos</a>
      <a href="#env">Entorno</a>
      <a href="#ids">IDs de servos</a>
      <a href="#calibrate">Calibración</a>
      <a href="#teleop">Verificación</a>
    </div>
  </div>
</section>

## 7.1 Los dos brazos

<section id="arms" className="section-card">
  <div className="section-title">
    <span>Líder y seguidor</span>
    <h2>7.1 Los dos brazos</h2>
  </div>

**Brazo líder** — un brazo open source de bajo coste para educación e
investigación, disponible como unidad completa o kit DIY. Seis
articulaciones con servos STS3215 de 7,4 V sobre una fuente de 5 V; solo
lee ángulos de articulaciones.

**Brazo seguidor** — el que ejecuta. En el kit Pro lleva servos de 12 V;
refleja al líder durante la teleoperación y luego ejecuta la política VLA
entrenada.

:::caution No mezcles las alimentaciones
El líder funciona a 5 V y el seguidor a 12 V. Invertirlas puede dañar los
servos. Apaga ambos brazos antes de cambiar cualquier cable.
:::

La guía de montaje completa vive en el curso para principiantes:
[capítulo 6 — configurar motores y montar los brazos](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_6/)
cubre impresión 3D, planificación de motores, escritura de IDs y montaje
paso a paso; el [capítulo 7 — depuración de servos](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_7/)
cubre la herramienta Feetech para un servo problemático.

</section>

## 7.2 Instalar el entorno LeRobot

<section id="env" className="section-card">
  <div className="section-title">
    <span>Instalar una vez</span>
    <h2>7.2 Instalar el entorno LeRobot</h2>
  </div>

Antes de calibrar, instala el entorno exacto que usan los capítulos
siguientes. Instala `uv` primero y luego crea el espacio de trabajo:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
uv --version

mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Descarga el fork de Seeed (incluye soporte líder/seguidor SO101)
git clone https://github.com/Seeed-Projects/lerobot.git

# Crea el entorno virtual (Python 3.12)
uv venv --python 3.12 .venv
source .venv/bin/activate

uv pip install --upgrade pip
uv pip install -e ./lerobot

# SDK de servos Feetech — necesario para los buses SO-01
uv pip install feetech-servo-sdk
```

:::note Volver a entrar al entorno
El entorno se configura una sola vez. Los capítulos siguientes asumen que
puedes volver a entrar con:
`cd ~/rebot_lerobot && source .venv/bin/activate`
:::

</section>

## 7.3 ¿Kit o preensamblado?

<section id="ids" className="section-card">
  <div className="section-title">
    <span>Preensamblado: omitir IDs</span>
    <h2>7.3 ¿Kit o preensamblado?</h2>
  </div>

| Tu situación | Montaje | Escribir IDs | Calibración |
| --- | --- | --- | --- |
| Versión impresa en 3D / kit | Sí | **Sí** | Sí |
| Brazo preensamblado | Ya hecho | **Omitir** — IDs escritos en fábrica | Sí |

**Si compraste brazos preensamblados, salta directamente a
[7.4 Calibrar los brazos](#calibrate).**

Etiqueta cada servo antes de montarlo — **F1–F6** en los del seguidor y
**L1–L6** en los del líder. Articulación 1 = hombro horizontal, 2 = hombro
vertical, 3 = codo, 4 = cabeceo de muñeca, 5 = giro de muñeca, 6 = pinza.
Las articulaciones 1–3 del líder SO-ARM101 usan relaciones distintas a las
del SO-ARM100 — revisa la tabla del
[capítulo 6.2 para principiantes](https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_6/)
antes de montar nada.

:::caution Un servo cada vez
Los seis servos comparten un bus serie. Configura los IDs con un solo servo
conectado a la placa, o un ID duplicado se escribirá en todos los servos
que lo tengan.
:::

</section>

## 7.4 Escribir IDs de servos (solo versión kit)

<section id="setup-motors" className="section-card">
  <div className="section-title">
    <span>lerobot-setup-motors</span>
    <h2>7.4 Escribir IDs de servos (solo versión kit)</h2>
  </div>

Encuentra primero el puerto de la placa de control:

```bash
lerobot-find-port
```

Desconecta la placa cuando se te pida y reconéctala; el puerto impreso es
el tuyo (normalmente `/dev/ttyACM0`).

Graba los IDs articulación por articulación:

```bash
lerobot-setup-motors \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0
```

La herramienta nombra la articulación a conectar — cablea ese único servo,
pulsa Enter y escribe el ID y el baud rate:

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

Repite para las seis articulaciones del seguidor y ejecuta la misma
herramienta para el líder:

```bash
lerobot-setup-motors \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1
```

Configura los permisos del puerto serie (persistentes tras reiniciar):

```bash
sudo usermod -aG dialout $USER   # cierra sesión y vuelve a entrar
sudo chmod 666 /dev/ttyACM*
```

En Ubuntu, el servicio `brltty` puede apropiarse del adaptador serie. Si el
puerto desaparece a los pocos segundos, elimínalo:
`sudo apt remove brltty`.

</section>

## 7.5 Calibrar los brazos

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>Postura de referencia</span>
    <h2>7.5 Calibrar los brazos</h2>
  </div>

La calibración es obligatoria para kit **y** preensamblados. Enseña a
LeRobot la posición media de cada articulación y sus dos topes mecánicos.
Los archivos viven en `~/.cache/huggingface/lerobot/calibration/`, con el
ID del brazo como clave — reutiliza un ID solo para el mismo brazo físico.

Encuentra ambos puertos y exporta las variables que usan todos los
capítulos:

```bash
export TELEOP_PORT=/dev/ttyACM0
export TELEOP_ID=so101_leader
export ROBOT_PORT=/dev/ttyACM1
export ROBOT_ID=so101_follower
```

Calibra el líder:

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

1. Lleva cada articulación al **centro de su recorrido**. Centra con
   cuidado el giro de muñeca — si arranca en un tope, el encoder puede
   desbordarse durante el barrido;
2. Pulsa Enter y barre cada articulación lentamente hasta ambos topes, de
   una en una. Repetir no molesta: los extremos se sobrescriben;
3. Pulsa Enter para guardar.

Calibra el seguidor igual:

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID
```

En el seguidor, detente en el tope mecánico real del brazo — no en un
cable, no en la mesa. Un cable pinzado registra un falso límite y comprime
el recorrido útil.

:::caution Firma de una mala calibración
Si el seguidor refleja solo la mitad del movimiento del líder, o una
articulación salta a un tope, el barrido fue corto. Recalibra ese brazo y
mueve cada articulación por todo su recorrido.
:::

Si usas las herramientas del workshop de NVIDIA, verifica la calidad del
seguidor:

```bash
export ROBOT_PORT ROBOT_ID
python ~/Sim-to-Real-SO-101-Workshop/docker/real/scripts/so101_check_calibration.py
```

Una buena calibración termina con:

```text
Overall: ✓ PASS — calibration looks good.
```

</section>

## 7.6 Verificar el brazo robótico

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Primera teleoperación</span>
    <h2>7.6 Verificar el brazo robótico</h2>
  </div>

Lleva ambos brazos a una postura similar y ejecuta:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID
```

Mueve el líder despacio. El seguidor debe seguir cada articulación en la
misma dirección y alcanzar los mismos topes. Detén con `Ctrl+C`.

Esto confirma también el orden de articulaciones del resto del curso:
`shoulder_pan`, `shoulder_lift`, `elbow_flex`, `wrist_flex`, `wrist_roll`,
`gripper`. Si una va al revés, recalibra — no lo compenses por software.

Durante las primeras ejecuciones mantén una mano junto al interruptor de
alimentación del seguidor.

Siguiente: [Capítulo 8 — Construir el espacio de trabajo](es_Sim2Real_VLA_08.md).

</section>

</div>