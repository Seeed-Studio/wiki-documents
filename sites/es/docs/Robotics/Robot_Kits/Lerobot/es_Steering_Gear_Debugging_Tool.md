---
description: "Cómo depurar servos SO-ARM con la herramienta Seeed_RoboController: detectar servos, corregir IDs, escribir valores neutros y leer el estado en Windows, Ubuntu y Mac."
title: Herramienta de depuración para SO-Arm
keywords:
  - Lerobot
  - SO-ARM
  - Robótica
  - Servo
  - Calibración
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/es/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Herramienta de depuración de engranajes de dirección para SO-ARM en LeRobot

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="Kits de brazo robótico SO-ARM100 y SO-ARM101"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-101-Assembled-Kit-Pro-p-6691.html" target="_blank" rel="noopener noreferrer">
    <span>Obtén el kit SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center"><strong>Plataformas compatibles</strong> · Windows / Ubuntu / macOS</p>

## Introducción

La herramienta de depuración de engranajes de dirección (Seeed_RoboController) es una herramienta gráfica de depuración para brazos robóticos SO-ARM en LeRobot. Con esta herramienta, puedes detectar rápidamente el estado de los servos, recalibrar los IDs de los servos, escribir valores neutros, controlar servos individuales y gestionar archivos de calibración del brazo robótico, lo que facilita el montaje, la depuración y el mantenimiento de los brazos líder y seguidor.

## 1. Instalación

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

<h4>Clonar el repositorio</h4>

<p className="rebot-step-label">Paso 1</p>

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

<h4>Instalar dependencias</h4>

<p className="rebot-step-label">Paso 2</p>

Instala las dependencias en tu entorno virtual LeRobot existente. Para una instalación independiente, crea un nuevo entorno virtual para evitar afectar al Python del sistema.

```bash
pip install -r requirements.txt
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

<h4>Comprobar el entorno</h4>

<p className="rebot-step-label">Paso 3</p>

```bash
python setup.py
```

Si devuelve [OK] Environment check passed, el proyecto está listo para ejecutarse.

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

<h4>Iniciar la herramienta</h4>

<p className="rebot-step-label">Paso 4</p>

<Tabs defaultValue="interactive">
<TabItem value="interactive" label="Selección interactiva de puerto">

Selecciona los puertos serie en la interfaz después de iniciar.

```bash
python -m src.gui.factory_calibration_tool
```

</TabItem>
<TabItem value="manual" label="Especificar puertos manualmente">

Si los puertos están ocupados, puedes especificarlos manualmente. El siguiente comando usa rutas de dispositivo de Linux como ejemplo.

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</TabItem>
</Tabs>

</div>
</section>

</div>

## 2. Primeros pasos (aplicable al brazo líder y al brazo seguidor)

Comienza comprobando la detección de los servos. Continúa con los dos pasos siguientes solo si aún sospechas que hay IDs de servos duplicados después de comprobar el cableado y el puerto serie.

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Comprobar si los servos son normales {#1-Comprobar-si-los-servos-son-normales}

<p className="rebot-step-label">Paso 1</p>

Selecciona el puerto en el selector de puertos serie. La comprobación de detección se supera si la herramienta reconoce los servos 1–6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

Si falta un servo, comprueba su cableado y luego cierra y vuelve a abrir la herramienta. Si aún no aparece, comprueba si hay IDs de servos duplicados. Por ejemplo, ejecutar por error el comando de calibración del servo puede cambiar los IDs de los servos.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Retirar los mazos de cables de los servos {#2-Retirar-los-mazos-de-cables-de-los-servos}

<p className="rebot-step-label">Paso 2</p>

Primero retira el mazo de cables de conexión entre el servo 6 y el servo 5.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

Luego retira el mazo de cables de conexión entre el servo 5 y el servo 4.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 4 y el servo 3.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 3 y el servo 2.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 2 y el servo 1.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

Retira el mazo de cables de conexión entre el servo 1 y la placa de control.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Recalibrar los IDs de los servos {#3-Recalibrar-los-IDs-de-los-servos}

<p className="rebot-step-label">Paso 3</p>

:::caution Escribe los IDs de los servos de uno en uno
Conecta solo un servo al bus serie cuando escribas su ID. Por ejemplo, cambiar el ID 4 a 6 cambia todos los servos con ID 4 en ese bus.
:::

Conecta el servo 6 directamente a la placa controladora como se muestra. Usa el mismo método para otros servos sin desmontar el brazo.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

Si el servo conectado es el servo 6 pero la herramienta solo muestra el ID 4, cambia el ID de ese servo de nuevo a 6.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

Selecciona el ID 4 en la interfaz y cámbialo a 6. Comprueba y corrige los servos restantes de uno en uno.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

Vuelve a conectar los mazos de cables de los servos uno por uno después de corregir los IDs.

</div>
</section>

</div>

### Escribir el valor neutro en el servo {#4-Escribir-el-valor-neutro-en-el-servo}

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1. Haz clic en **Serial Port Neutral Test** y compara la posición del brazo con la imagen anterior. Si coinciden aproximadamente, el valor neutro es correcto.
2. Si no coinciden, mueve el brazo a la posición neutra y haz clic en **Serial Port Neutral Calibration** para guardar la posición actual como el valor neutro del servo.
3. Sujeta el brazo antes de hacer clic en **Serial Port Disable Motors**. Los servos perderán su par de sujeción.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### Control de un solo servo {#5-Control-de-un-solo-servo}

La interfaz muestra cada servo en su posición neutra de forma predeterminada.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

#### Ajustar la posición de un servo

1. Habilita el par para el servo seleccionado o usa el control que habilita el par para todos los servos.
2. Mueve lentamente el control deslizante del servo seleccionado y observa cómo se mueve la articulación correspondiente.

:::caution Ten en cuenta los límites mecánicos
La estructura del brazo limita el recorrido de las articulaciones. Mueve el control deslizante lentamente y evita ajustarlo a 0 o a su valor máximo. Sujeta el brazo antes de deshabilitar el par.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" />
</div>

También puedes calibrar la posición neutra de un servo individual o borrar sus posiciones almacenadas neutra, mínima y máxima.

#### Campos de estado del servo

| Campo | Significado |
| --- | --- |
| `Pos` | Posición |
| `V` | Voltaje |
| `T` | Temperatura |
| `Spd` | Velocidad |
| `Load` | Par |
| `Cur` | Corriente |
| `Mov` | Estado de movimiento |
| `Model` | Modelo y permisos |
| `Status` | Normal, Overcurrent u Overload |

### Herramientas avanzadas {#6-Herramientas-avanzadas}

| Herramienta | Propósito |
| --- | --- |
| Lectura/escritura de registros | Leer o escribir datos en una dirección de registro especificada. |
| Cambiar velocidad en baudios | Ajustar la velocidad de comunicación serie del servo. |
| Restaurar configuración de fábrica | Restablecer el servo a su configuración de fábrica. |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>
