---
description: "Capítulo 7 del curso para principiantes de SO-ARM Physical AI — usa la herramienta de depuración Seeed_RoboController para detectar servos, reprogramar IDs, escribir valores neutros, controlar servos individuales y leer su estado."
title: Capítulo 7 - Depuración de servos con la herramienta de ajuste
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - servo
  - depuración
  - ajuste
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_7
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 7 · Práctica</span>
    <h2>7. Depuración de servos con la herramienta de ajuste</h2>
    <p>
      Capítulo 7 del curso para principiantes de SO-ARM Physical AI — usa la herramienta de depuración Seeed_RoboController para detectar servos, reprogramar IDs, escribir valores neutros, controlar servos individuales y leer su estado.
    </p>
    <div className="hero-actions">
      <a href="#install-tool">Instalación</a>
      <a href="#check-servos">Comprobar servos</a>
      <a href="#recalibrate-ids">Corregir IDs</a>
      <a href="#neutral">Valor neutro</a>
    </div>
  </div>
</section>

## 7.1 Para qué sirve la herramienta

<section id="intro" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>7.1 Para qué sirve la herramienta</h2>
  </div>

La herramienta de depuración de servos ([Seeed_RoboController](https://github.com/Seeed-Projects/Seeed_RoboController)) es una herramienta gráfica de depuración para brazos robóticos LeRobot / SO-ARM. Con ella puedes:

- Detectar rápidamente el estado de los servos;
- Reprogramar IDs duplicados o incorrectos;
- Escribir valores neutros (posición media);
- Controlar servos individuales y leer voltaje, temperatura, velocidad, carga y corriente;
- Gestionar registros avanzados, baud rate y restablecimiento de fábrica.

Funciona en **Windows, Ubuntu y Mac**, y es tu primera parada cuando un brazo se comporta de forma extraña — antes de recalibrar en LeRobot, antes de desmontar y antes de asumir que un servo está roto.

</section>

## 7.2 Instalación

<section id="install-tool" className="section-card">
  <div className="section-title">
    <span>Instalación</span>
    <h2>7.2 Instalación</h2>
  </div>

**1. Clona el repositorio:**

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

**2. Instala las dependencias.** Se recomienda dentro del entorno conda de LeRobot del Capítulo 5. Si prefieres una instalación independiente, crea un entorno virtual nuevo para no contaminar el Python del sistema:

```bash
pip install -r requirements.txt
```

**3. Comprueba el entorno.** Si devuelve `[OK] Environment check passed`, el proyecto está listo:

```bash
python setup.py
```

**4. Inicia la herramienta:**

```bash
python -m src.gui.factory_calibration_tool
```

Esto abre la selección interactiva de puerto. (Opcional) Especifica los puertos manualmente si están ocupados:

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</section>

## 7.3 Comprobar si los servos están bien

<section id="check-servos" className="section-card">
  <div className="section-title">
    <span>Detección</span>
    <h2>7.3 Comprobar si los servos están bien</h2>
  </div>

Primero, selecciona el puerto correspondiente en el selector de puertos. Si los servos 1-6 se detectan todos, los servos se reconocen correctamente y las funciones básicas funcionan.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="Los seis servos detectados" />
</div>

Si algunos servos aparecen como no detectados:

1. Revisa que el cableado sea correcto; cierra la página y vuelve a abrirla.
2. Si siguen sin detectarse, los IDs pueden estar duplicados — posiblemente porque se ejecutó por error un comando de calibración de servos como si fuera el de calibración del brazo. En ese caso, reprograma esos IDs (siguiente sección).

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo no detectado" />
</div>

</section>

## 7.4 Reprogramar IDs de servo

<section id="recalibrate-ids" className="section-card">
  <div className="section-title">
    <span>Corregir IDs</span>
    <h2>7.4 Reprogramar IDs de servo</h2>
  </div>

Del Capítulo 4: todos los servos comparten un bus, así que grabar un ID afecta a **todos** los servos con ese ID. Por eso hay que desconectar los demás y reprogramarlos de a uno.

**Paso 1 — retira los mazos de cables** entre servos adyacentes, de la pinza hacia la base:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="Desconectar servo 6 de 5" />
</div>

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="Desconectar servo 1 de la placa" />
</div>

**Paso 2 — conecta un servo a la vez.** Asegúrate de que solo un servo esté conectado a la placa. Por ejemplo, conecta el servo #6 como se muestra — los demás se conectan igual, así que puedes arreglar IDs sin desmontar el brazo.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="Un solo servo conectado a la placa" />
</div>

**Paso 3 — reescribe el ID.** En el ejemplo, solo se reconoce el servo #4, pero el conectado es el #6 — el ID está mal y hay que devolverlo a 6.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="ID incorrecto detectado" />
</div>

Haz clic en el servo #4 y cambia su ID a 6. Repite la operación con los demás servos.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="Reescribir el ID del servo" />
</div>

Terminada la corrección, vuelve a conectar los cables uno a uno.

</section>

## 7.5 Escribir el valor neutro en el servo

<section id="neutral" className="section-card">
  <div className="section-title">
    <span>Neutro</span>
    <h2>7.5 Escribir el valor neutro en el servo</h2>
  </div>

La posición neutra (media) es la postura "recta" de la que se mide toda calibración posterior — internamente corresponde al valor 2048.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="Postura neutra de referencia" />
</div>

1. Pulsa **Serial Port Neutral Test** para comprobar si la posición neutra del brazo coincide con la referencia. Si es aproximadamente igual, el neutro es correcto.
2. Si no, mueve el brazo a la posición neutra y pulsa **Serial Port Neutral Calibration** — la posición actual se escribe en el servo como valor neutro.
3. Pulsa **Serial Port Disable Motors** y el brazo quedará suelto — sostenlo con la mano.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="Botones de prueba y calibración neutra" />
</div>

:::tip
Esta también es la solución al error de LeRobot `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`: ese mensaje indica un offset cero anómalo en un servo. Haz aquí una calibración de posición media (o con el script `servo_middle_calibration.py` del mismo repositorio) y repite la calibración completa del Capítulo 10.
:::

</section>

## 7.6 Control y estado de servos individuales

<section id="single-servo" className="section-card">
  <div className="section-title">
    <span>Control</span>
    <h2>7.6 Control y estado de servos individuales</h2>
  </div>

Por defecto, todos los servos de la página están en su posición neutra.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="Todos los servos en neutro" />
</div>

**1. Activa el par y mueve un servo.** Activa todos los pares de un clic, o uno individual, y desliza el control para moverlo. Muévete **despacio**: las piezas impresas bloquean físicamente ciertas posiciones, así que no lleves el control a 0 ni al máximo. Al desactivar el par, el brazo queda suelto.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" alt="Par activado, servo movido" />
</div>

**2. Mantenimiento por servo.** Puedes calibrar el neutro de un solo servo y limpiar su neutro, máximo y mínimo internos.

**3. Panel de estado del servo:**

| Campo | Significado |
| :--- | :--- |
| Pos | Posición |
| V | Voltaje |
| T | Temperatura |
| Spd | Velocidad |
| Carga | Par |
| Cur | Corriente |
| Mov | Estado de movimiento |
| Modelo | Modelo, autoridad |
| Estado | Normal / Sobrecorriente / Sobrecarga |

Que la temperatura suba con la carga durante largas sesiones de teleoperación es normal en el seguidor; `Sobrecorriente` o `Sobrecarga` persistente en reposo suele indicar una articulación atascada o un neutro incorrecto.

</section>

## 7.7 Herramientas avanzadas

<section id="advanced" className="section-card">
  <div className="section-title">
    <span>Avanzado</span>
    <h2>7.7 Herramientas avanzadas</h2>
  </div>

Para depurar más a fondo puedes leer y escribir registros crudos, modificar el baud rate y restaurar los valores de fábrica.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="Panel de herramientas avanzadas" />
</div>

:::warning
Escribir registros y restablecer de fábrica puede inutilizar la configuración de un servo si se hace a ciegas. Prefiere las funciones guiadas (secciones 7.3-7.6) y toca los registros crudos solo cuando una guía concreta lo indique.
:::

</section>

## 7.8 Resumen

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>7.8 Resumen</h2>
  </div>

- La herramienta de depuración es la consola de mantenimiento del bus de servos: detectar, corregir IDs, fijar neutros, mover servos, leer estado.
- Los IDs de servo siempre se reescriben de a un servo conectado por vez.
- Un neutro correcto (2048) es la base de toda la calibración posterior.

Con los brazos ensamblados y cada servo verificado, la Etapa 2 está completa. La Etapa 3 empieza explicando por qué los brazos robóticos necesitan aprender — y luego pone tu SO-ARM a recolectar datos y entrenar políticas.

</section>

</div>
