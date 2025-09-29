---
description: --
title: Comenzando con Phospho
keywords:
- NVIDIA Jetson
- Phospho
- Robotic Arm
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.webp
slug: /es/control_robotic_arm_via_phospho
last_update:
  date: 7/1/2025
  author: Youjiang
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción

Phospho es cómo los ingenieros de ML hacen inteligentes a los robots reales. Proporcionamos el hardware, las librerías y las capacidades de control remoto para que los desarrolladores puedan recopilar datos, entrenar modelos de IA y desplegar aplicaciones a robots reales en minutos en lugar de meses.

En esta wiki, demostraremos el control de movimiento del brazo robótico SO Arm 100 usando phospho.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/phospho_1.png" />
</div>

## Prerrequisitos

- SO Arm 100/101
- Computadora con sistema operativo Mac/Windows/Linux

:::note
Puedes comprar un brazo robótico listo para usar desde [phospho](https://robots.phospho.ai/starter-pack), o adquirir el kit de ensamblaje desde [SeeedStudio](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html).
:::

## Comenzando

### Preparar el Brazo Robótico

1. Si compraste el kit de brazo robótico de Seeedstudio, necesitarás consultar [este enlace](https://wiki.seeedstudio.com/es/lerobot_so100m/#assembly) para ensamblar tu brazo robótico.
2. Si lo compraste de [Phospho](https://robots.phospho.ai/), recibirás un dispositivo listo para usar que te permite omitir completamente el proceso de ensamblaje.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.jpg" />
</div>

Después de completar el ensamblaje, por favor conecta el brazo robótico a tu computadora usando un cable de datos USB.

### Instalar Phospho

<div style={{ textAlign: 'justify' }}>

La instalación del software phospho es muy amigable para el usuario, no requiere configuración de entorno complicada y toma poco tiempo para descargar. Simplemente necesitas seleccionar el comando de instalación apropiado basado en el sistema operativo de tu computadora.

</div>

<Tabs>
<TabItem value="MacOS" label="MacOS">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | bash
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | sudo bash
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
powershell -ExecutionPolicy ByPass -Command "irm https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.ps1 | iex"
```

</TabItem>
</Tabs>

Luego, inicia el servidor:

```bash
phosphobot run
```

:::info
El servidor puede tardar hasta 15 segundos en iniciarse.
:::

Una vez que el servicio esté completamente iniciado, puedes acceder a la interfaz de usuario en tu navegador en http://0.0.0.0:8020/.
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/webui.png" />
</div>

### Conectar el Brazo Robótico

Después de que se inicie la WebUI, descubrirá y reconocerá automáticamente el brazo robótico. Si el reconocimiento falla, puedes iniciar manualmente una conexión.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/connection.png" />
</div>

Antes de operar el brazo robótico, necesitamos realizar la segunda calibración. Puedes consultar el siguiente tutorial en video para el procedimiento de calibración.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/calibration.png" />
</div>

<div class="video-container">
  <iframe width="900" height="540" src="https://www.youtube.com/embed/65DW8yLcRmM" title="How to calibrate the SO-100 or SO-101 robot arm? Step by step guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::info
El Lerobot SO Arm 100/101 típicamente requiere dos etapas de calibración:

1. Durante el ensamblaje: Se debe realizar la inicialización de posición cero para cada servomotor.
2. Durante la operación del software: Se requiere recalibración para compensar errores de ensamblaje.

:::

### Controlar el Brazo Robótico con Phospho

A diferencia del repositorio Lerobot, Phospho no solo soporta teleoperación vía Leader, sino que también proporciona múltiples métodos de control: control por teclado/ratón, control manual de arrastrar y soltar, y control basado en VR. Este diseño enriquecerá significativamente nuestras metodologías de recolección de datos.

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/control.png" />
</div>

`Control Robot` --> `Keyboard control` --> `Start Moving Robot`

Si todo salió bien, ahora deberías poder controlar el movimiento del brazo robótico usando el teclado de tu computadora.

:::note
¡Más allá del control remoto de brazos robóticos, phospho ofrece muchas otras características emocionantes esperando ser exploradas! ¡Pruébalo ahora!
:::

## Demostración de Efectos

Aquí experimentamos con control de brazo robótico basado en VR. Después de instalar la aplicación phospho teleop en VR, el sistema puede descubrir el brazo robótico vía red local. Como se demuestra en el video, la interfaz VR permite una operación remota notablemente suave de los movimientos del brazo robótico.

<div class="video-container">
<iframe width="900" height="540" src="https://www.youtube.com/embed/dvkHfyivQjI" title="AI-Powered Control of the Robotic Arm via Phospho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias

- [https://phospho.ai/](https://phospho.ai/)
- [https://docs.phospho.ai/welcome](https://docs.phospho.ai/welcome)
- [https://github.com/phospho-app/phosphobot](https://github.com/phospho-app/phosphobot)
- [https://wiki.seeedstudio.com/es/lerobot_so100m](https://wiki.seeedstudio.com/es/lerobot_so100m/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
