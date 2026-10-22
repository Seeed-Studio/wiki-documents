---
description: "Capítulo 10 del curso para principiantes de SO-ARM Physical AI — calibra los brazos líder y seguidor con lerobot-calibrate, entiende el mapeo de articulaciones y los archivos de calibración, y ejecuta tu primera teleoperación maestro-esclavo."
title: Capítulo 10 - Calibración y teleoperación de líder y seguidor
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - calibración
  - teleoperación
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_10
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 10 · Práctica</span>
    <h2>10. Calibración y teleoperación de líder y seguidor</h2>
    <p>
      Capítulo 10 del curso para principiantes de SO-ARM Physical AI — calibra los brazos líder y seguidor con lerobot-calibrate, entiende el mapeo de articulaciones y los archivos de calibración, y ejecuta tu primera teleoperación maestro-esclavo.
    </p>
    <div className="hero-actions">
      <a href="#why-calibrate">Por qué calibrar</a>
      <a href="#calibrate">Calibrar</a>
      <a href="#teleop">Teleoperar</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>
      Retira objetos de valor y personas ajenas a menos de 1 metro del espacio de trabajo. Antes de ejecutar este capítulo, asegúrate de que el brazo esté bien fijado y que la alimentación y los cables estén conectados correctamente.
    </p>
  </div>
</div>

## 10.1 Por qué importa la calibración del brazo completo

<section id="why-calibrate" className="section-card">
  <div className="section-title">
    <span>Motivación</span>
    <h2>10.1 Por qué importa la calibración del brazo completo</h2>
  </div>

El Capítulo 6 grabó IDs y baud rates; el Capítulo 7 verificó los neutros. La **calibración del brazo completo** es el último paso: aprende, para cada articulación, el mapeo entre la lectura cruda del servo y un ángulo físico, de modo que líder y seguidor reporten valores idénticos cuando coinciden físicamente.

Esta calibración es esencial por una razón más profunda: **permite que una red entrenada en un SO-ARM funcione en otro.** Como todo SO-ARM calibrado coincide en qué es "cero grados" y "el centro del rango", un dataset grabado en tu seguidor es válido en el mío.

:::danger
Repaso de reglas de alimentación: en la **edición Standard de SO101** toda la alimentación es de 5V. En la **edición Pro de SO101**, calibra y opera el líder con fuente de 5V y el seguidor con fuente de 12V en cada paso.
:::

</section>

## 10.2 Calibrar el brazo seguidor

<section id="calibrate" className="section-card">
  <div className="section-title">
    <span>Calibración</span>
    <h2>10.2 Calibrar el brazo seguidor</h2>
  </div>

Conecta los 6 servos por sus cables de 3 hilos y la placa, concede permisos y ejecuta:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm  # <- dale un nombre único al robot
```

El procedimiento (mostrado en el video):

1. **Posición media**: mueve el brazo para que cada articulación quede en el centro de su rango (aproximadamente la postura "vertical"), y pulsa Enter;
2. **Rango completo**: mueve cada articulación por su **rango** completo, una a una, mientras la herramienta muestrea el mínimo/máximo.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
Por actualizaciones del repositorio de LeRobot, es normal que el terminal no reciba señal del servo 5 al calibrar el brazo líder. Puedes continuar la operación.
:::

</section>

## 10.3 Calibrar el brazo líder

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>Calibración</span>
    <h2>10.3 Calibrar el brazo líder</h2>
  </div>

Los mismos dos pasos (posición media, luego rango completo por articulación), con las claves del teleoperator:

```bash
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm  # <- dale un nombre único al líder
```

:::tip
Si ves `Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port. Try running lerobot-find-port`, vuelve a conceder permisos con `sudo chmod 666 /dev/ttyACM*`.
:::

### Dónde vive la calibración (y cómo rehacerla)

Los archivos de calibración se guardan como JSON en `~/.cache/huggingface/lerobot/calibration/robots/` y `~/.cache/huggingface/lerobot/calibration/teleoperators/`. Para recalibrar:

- **Opción 1 — borra los archivos** para empezar de cero:

```bash
rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators
```

- **Opción 2 — responde al prompt.** Al reejecutar el comando sobre un brazo calibrado aparece:

```text
Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:
```

Escribe `c` + Enter para recalibrar; pulsa Enter para conservar los datos existentes.

### Si la calibración falla: `Magnitude ... exceeds 2047`

Si la calibración o la teleoperación lanza `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`, el offset cero de un servo es anómalo. Apaga y reinicia el brazo y reintenta; si persiste, haz primero una **calibración de posición media** — con la herramienta del Capítulo 7, o con los scripts de Seeed_RoboController:

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable              # (opcional) desactiva el par para mover a mano
python -m src.tools.servo_middle_calibration   # escribe la posición actual como 2048
python -m src.tools.servo_center_test          # mueve a 2048 para verificar
```

Luego vuelve a `lerobot-calibrate` y repite la calibración completa.

</section>

## 10.4 Mapeo de articulaciones: dirección, rango y pinza

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>Mapeos</span>
    <h2>10.4 Mapeo de articulaciones: dirección, rango y pinza</h2>
  </div>

Tras la calibración, verifica a mano:

- **Dirección**: girar la articulación 1 del líder en sentido horario debe girar la 1 del seguidor en sentido horario. Si alguna va al revés, la calibración se hizo con el brazo en postura espejo — repite esa articulación.
- **Rango**: lleva cada articulación del líder a ambos topes; el seguidor debe alcanzar los topes correspondientes sin forzar contra las piezas impresas.
- **Pinza**: cierra por completo el mango del líder — la pinza del seguidor debe cerrar por completo; la apertura total mapea a la apertura total.

:::tip
Recuerda del Capítulo 9: el `--robot.id` / `--teleop.id` elegido aquí queda ligado al archivo de calibración. Usa exactamente los mismos ids al teleoperar, grabar y evaluar más adelante.
:::

</section>

## 10.5 Iniciar la teleoperación maestro-esclavo

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>Teleoperación</span>
    <h2>10.5 Iniciar la teleoperación maestro-esclavo</h2>
  </div>

Ahora llega el momento en que los dos brazos se vuelven un solo sistema. Concede permisos y arranca:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

El comando teleoperate automáticamente:

1. Detecta calibraciones faltantes e inicia el procedimiento;
2. Conecta el robot y el teleoperator y comienza la teleoperación.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### Directrices de seguridad en teleoperación

- Sujeta el seguidor la primera vez que se activa el par — saltará a su postura calibrada.
- Mueve el líder **despacio**; el seguidor sigue con par completo.
- Mantén los dedos fuera de la pinza y de los puntos de pellizco.
- Si el seguidor se retrasa, vibra o una articulación deja de responder: detente, apaga, y revisa el cable de bus de ese servo (un LED apagado indica el cable flojo previo).

</section>

## 10.6 Frecuencia de control y latencia

<section id="latency" className="section-card">
  <div className="section-title">
    <span>Rendimiento</span>
    <h2>10.6 Frecuencia de control y latencia</h2>
  </div>

### ¿De dónde viene la latencia? ¿Por qué es inevitable?

Cada ciclo lee el líder, envía objetivos al seguidor y (luego) lee cámaras. Las cámaras USB entregan fotogramas a su propio ritmo. El bucle es rápido — decenas de milisegundos — pero no cero, así que los movimientos rápidos del líder siempre se ven algo suavizados en el seguidor. Es normal.

### ¿Qué es la frecuencia de control? ¿Se puede configurar?

LeRobot ejecuta el bucle a un fps configurado (30 por defecto en los flujos de SO-ARM; el `--dataset.fps` posterior debe coincidir). Si la teleoperación se traba:

- Evita concentradores USB — conecta brazos y cámaras directo al ordenador;
- Comprueba que ningún otro proceso retenga los puertos serie;
- Verifica con `lerobot-find-port` que ningún otro dispositivo comparta el bus.

</section>

## 10.7 Práctica

<section id="practice" className="section-card">
  <div className="section-title">
    <span>Práctica</span>
    <h2>10.7 Práctica</h2>
  </div>

1. Calibra líder y seguidor; encuentra ambos JSON bajo `~/.cache/huggingface/lerobot/calibration/`.
2. Teleopera 5 minutos: toca con la pinza las cuatro esquinas de la alfombrilla y recoge un objeto pequeño.
3. Prueba deliberadamente la vía del fallo: ejecuta teleoperate con un `--robot.id` equivocado y lee el error — así no lo olvidarás.
4. Practica la recalibración vía el prompt `c`.

Con la cadena de control verificada, el próximo capítulo diseña los datos de tu primera política.

</section>

</div>
