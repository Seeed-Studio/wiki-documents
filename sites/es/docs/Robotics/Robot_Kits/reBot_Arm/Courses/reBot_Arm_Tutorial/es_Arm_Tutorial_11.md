---
description: "Capítulo 11 del Curso para Principiantes de IA Física de Seeed: configuración del entorno, calibración del brazo seguidor y líder, mapeo de articulaciones, seguridad en la teleoperación, inicio de la teleoperación maestro-esclavo, frecuencia de control y latencia, y práctica práctica."
title: Capítulo 11 - Calibración del Líder y el Seguidor y Teleoperación
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Calibration
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_11
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 3 · Capítulo 11 · Práctica</span>
    <h2>11. Calibración del Líder y el Seguidor y Teleoperación</h2>
    <p>
      Capítulo 11 del Curso para Principiantes de IA Física de Seeed: configuración del entorno,
      calibración del brazo seguidor y líder, mapeo de articulaciones, seguridad en la teleoperación, inicio de la teleoperación
      maestro-esclavo, frecuencia de control y latencia, y práctica práctica.
    </p>
    <div className="hero-actions">
      <a href="#environment">Entorno</a>
      <a href="#calibrate-follower">Calibración</a>
      <a href="#teleoperate">Teleoperación</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>En este capítulo</strong>
    <span>11.1 Desempaquetado, cableado y montaje del brazo</span>
    <span>11.2 Configuración del entorno</span>
    <span>11.3 Calibración del brazo seguidor</span>
    <span>11.4 Calibración del brazo líder</span>
    <span>11.5 Mapeo de articulaciones: dirección, rango y pinza</span>
    <span>11.6 Directrices de seguridad para la teleoperación</span>
    <span>11.7 Inicio de la teleoperación maestro-esclavo</span>
    <span>11.8 Frecuencia de control y latencia</span>
    <span>11.9 Práctica práctica</span>
  </div>
</section>

<RebotCourseNav />

## 11.1 Desempaquetado, cableado y montaje del brazo

<section id="unboxing" className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>11.1 Desempaquetado, cableado y montaje del brazo</h2>
  </div>

- **reBot DM**
<iframe width="600" height="400" src="https://www.youtube.com/embed/llSa6qn3yrY?si=D3ZUoBbih8_qtcFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
- **reBot RS**
<iframe width="600" height="400" src="https://www.youtube.com/embed/llSa6qn3yrY?si=Ejc4Q97tFzURuh1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</section>

## 11.2 Configuración del entorno

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Entorno</span>
    <h2>11.2 Configuración del entorno</h2>
  </div>

Suponiendo que ya has creado un entorno virtual en la Etapa 2, a continuación solo necesitamos clonar el repositorio e instalar el entorno en el entorno conda que creaste. NO uses una máquina virtual ni WSL; es mejor instalar Ubuntu 22.04 directamente.

:::tip
Recuerda: todos los pasos posteriores deben realizarse dentro del entorno virtual y del entorno `lerobot`.
:::

**Paso 1:** Clonar el repositorio Seeed LeRobot

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

**Paso 2:** Entra en el entorno virtual e instala LeRobot y los plugins de reBot

```bash
conda create -y -n rebot_arm python=3.12
pip install -e ./lerobot
```

```bash
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

**Paso 3:** Instalar ffmpeg (dependencia de códec de vídeo)

```bash
conda install ffmpeg -c conda-forge
```

**Notas de versión:**

- De forma predeterminada, se instalará ffmpeg 7.X (compatible con el codificador libsvtav1).
- Si encuentras problemas de compatibilidad de versión, puedes especificar ffmpeg 7.1.1:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- Puedes comprobar mediante `ffmpeg -encoders | grep svtav1` si el codificador libsvtav1 es compatible.

**Paso 4:** Configuración especial para dispositivos NVIDIA Jetson (omite este paso en un PC normal)

Para dispositivos Jetson JetPack 6.0+ (asegúrate de haber instalado PyTorch-gpu y Torchvision compatibles con Jetson antes de este paso):

```bash
# Install OpenCV and other dependencies via conda (Jetson JetPack 6.0+ only)
conda install -y -c conda-forge "opencv>=4.10.0.84"
# Uninstall OpenCV
conda remove opencv
# Install specific OpenCV version via pip3
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
# This version must be compatible with Torchvision
pip3 install numpy==1.26.0
```

**Paso 5:** Comprobar si la GPU de PyTorch está disponible

```bash
python3

import torch
print(torch.cuda.is_available())   # Should output True
```

Escribe `exit()` para salir.

:::warning
Si muestra `False`, instalaste la versión para CPU: necesitas reinstalar PyTorch.
:::

</section>

## 11.3 Calibración del brazo seguidor

<section id="calibrate-follower" className="section-card">
  <div className="section-title">
    <span>Calibración</span>
    <h2>11.3 Calibración del brazo seguidor</h2>
  </div>

- A continuación, asegúrate de que el robot reBot B601-RS esté conectado a la alimentación y al cable de datos antes de calibrar.
- Los archivos de calibración del Líder y el Seguidor se almacenan respectivamente en `~/.cache/huggingface/lerobot/calibration/robots` y `~/.cache/huggingface/lerobot/calibration/teleoperators`. Para recalibrar, elimina los archivos correspondientes o simplemente ejecuta el comando de calibración: la terminal te indicará que pulses <kbd>C</kbd> para recalibrar o pulses <kbd>Enter</kbd> para usar el archivo de calibración existente.
- Si no puedes conectarte al seguidor, consulta la Etapa 2 y usa la interfaz de motorbridge para comprobar si el brazo funciona correctamente.
- Sigue las indicaciones para mover el brazo Seguidor a la posición cero que se muestra arriba. El brazo solo necesita calibrarse una vez en el mismo ordenador después del montaje. A continuación se muestran los comandos de calibración; consulta la posición cero en la imagen (la pinza debe estar completamente cerrada).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-01.png" alt="Posición cero del seguidor" />
</div>

**Para la calibración del seguidor DM:**

```bash
sudo chmod 666 /dev/ttyACM*
cd lerobot
lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

**Para la calibración del seguidor RS:**

Si tu sistema aún no tiene instalado el controlador PCAN, consulta esta página: [PCAN driver installed](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow)

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
cd lerobot

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

(Opcional) Si estás usando Jetson (Jetpack 6.x), ejecuta el siguiente comando para encontrar el número de puerto CAN de tu Jetson:

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

Salida de ejemplo:

```text
can2  # Could also be can0, can1, or other CAN number
```

El número de puerto usado en todos los comandos posteriores del seguidor debe coincidir con la salida aquí.

:::warning
Si tu Jetson no tiene el [PCAN driver installed](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow), la comunicación será persistentemente anómala.
:::

</section>

## 11.4 Calibración del brazo líder

<section id="calibrate-leader" className="section-card">
  <div className="section-title">
    <span>Calibración</span>
    <h2>11.4 Calibración del brazo líder</h2>
  </div>

**Notas de calibración del Líder reBot 102:**

- Cuando comienza la calibración, la posición actual de cada servo en el reBot Arm 102 se **restablecerá a cero**.
- `joint_ranges` (límites de articulación) provienen del archivo de configuración `config_rebot_arm_102_leader.py`, no de los datos de calibración.
- Si una articulación siempre parece atascada cerca de un límite, comprueba primero la configuración de `joint_ranges`.
- Las direcciones de las articulaciones se definen en el archivo de configuración; si las direcciones no coinciden, modifica la configuración en lugar de recalibrar.
- El Líder reBot 102 utiliza un módulo USB-a-UART, normalmente asignado a `/dev/ttyUSB*`.
- Usa `ls /dev/ttyUSB*` para ver el número de puerto real.

En la primera conexión, es posible que obtengas un error indicando que no se puede encontrar el puerto serie `/dev/ttyACM0`; esto se debe a que `brltty` está ocupando el puerto. Sigue estos pasos:

```bash
sudo dmesg | grep ttyUSB   # See 'disconnected' on the last line
sudo apt remove brltty     # Remove brltty
```

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-02.png" alt="Puerto serie del brazo líder" />
</div>

Sigue las indicaciones para mover el brazo Líder a la posición cero que se muestra arriba:

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Mantenlo quieto y luego pulsa <kbd>Enter</kbd> hasta que la calibración se complete.

</section>

## 11.5 Mapeo de articulaciones: dirección, rango y pinza

<section id="joint-mapping" className="section-card">
  <div className="section-title">
    <span>Mapeo</span>
    <h2>11.5 Mapeo de articulaciones: dirección, rango y pinza</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-03.png" alt="Mapeo de articulaciones" />
</div>

</section>

## 11.6 Directrices de seguridad para la teleoperación

<section id="safety" className="section-card">
  <div className="section-title">
    <span>Seguridad</span>
    <h2>11.6 Directrices de seguridad para la teleoperación</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-04.png" alt="Directrices de seguridad para la teleoperación" />
</div>

</section>

## 11.7 Inicio de la teleoperación maestro-esclavo

<section id="teleoperate" className="section-card">
  <div className="section-title">
    <span>Teleoperación</span>
    <h2>11.7 Inicio de la teleoperación maestro-esclavo</h2>
  </div>

:::danger ¡Las mismas reglas de seguridad se aplican a todos los escenarios de movimiento del brazo!
Durante la teleoperación, si los cables de alimentación se aflojan, la conexión de alimentación es deficiente o los cables de señal se desconectan, primero debes detener el código, devolver el brazo a su posición inicial cero, luego reconectar la alimentación y reiniciar el programa, para evitar que la corrupción de datos haga que el brazo se salga de control y genere peligro.
:::

**Teleoperación DM** — primero concede permisos a los puertos serie:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo chmod 666 /dev/ttyACM*
```

Ejecuta la teleoperación:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

**Teleoperación RS** — primero concede permisos a los puertos serie:

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Ejecuta la teleoperación:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

</section>

## 11.8 Frecuencia de Control y Latencia

<section id="frequency-latency" className="section-card">
  <div className="section-title">
    <span>Rendimiento</span>
    <h2>11.8 Frecuencia de Control y Latencia</h2>
  </div>

Que la teleoperación se sienta "sensible" depende de dos cosas: cuántos bucles ejecuta por segundo el circuito de reenvío (frecuencia) y cuánta demora hay entre tu mano y el brazo (latencia).

### ¿De Dónde Viene la Latencia? ¿Por Qué Es Inevitable?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-11/ch11-05.png" alt="Latency sources" />
</div>

### ¿Qué Es la Frecuencia de Control? ¿Se Puede Configurar?

El bucle de teleoperación tiene por defecto **60 Hz** — completa 60 bucles por segundo de "leer Leader → mapear → enviar CAN → leer de vuelta"; cada bucle tiene un presupuesto de tiempo de 16,7 ms. Esta frecuencia se puede ajustar mediante el parámetro `fps` de la configuración de teleoperación, pero ten en cuenta dos cosas:

- **El límite superior está determinado por el tiempo del circuito de hardware, no por el software.** La cadena anterior en sí misma tarda más de diez milisegundos por bucle, por lo que el límite superior práctico para este hardware es de alrededor de 60–100 Hz. Configurarlo más alto no tiene sentido: la frecuencia real no aumentará y solo verás advertencias de tiempo de período excedido.
- **60 Hz ya supera con creces lo necesario.** Los movimientos humanos conscientes más rápidos son solo de 5–10 Hz; 60 Hz es como tomar diez instantáneas de cada pequeño movimiento, por lo que la densidad de muestreo cubre completamente el ancho de banda de la mano.

</section>

## 11.9 Práctica Guiada

<section id="practice" className="section-card">
  <div className="section-title">
    <span>Práctica</span>
    <h2>11.9 Práctica Guiada: Agarrar, Transportar y Colocar</h2>
  </div>

La teleoperación es estable, pero "puede moverse" y "puede trabajar" aún requieren práctica deliberada. La calidad de los datos del Capítulo 13 depende de tu nivel de destreza actual. Practica en tres niveles:

- **Ejercicio 1: Transferencia de objetos sin carga (familiarizarse con la sensación).** Coloca algunos bloques ligeros en el espacio de trabajo. Practica: moverte sobre el objetivo → descender → cerrar el efector final → levantar. Objetivo: 10 repeticiones sin colisiones ni caídas a mitad de ejecución, con cada ejecución fluyendo suavemente y sin vacilaciones.
- **Ejercicio 2: Transporte y colocación (cadena completa de tareas).** Completa todo el flujo de trabajo de "agarrar → transportar → colocar en el contenedor designado". Objetivo: 10 repeticiones consecutivas con poses de inicio y fin casi idénticas cada vez.
- **Estándar de aprobación:** puedes completar 20 tareas completas seguidas a un ritmo constante sin sentirte tenso; entonces estarás listo para el siguiente capítulo.

</section>

</div>
