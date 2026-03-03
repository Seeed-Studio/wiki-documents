---
description: reComputer-FAQ
title: Solución de Problemas de Instalación
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /es/Troubleshooting_Installation
last_update:
  date: 2023/6/30
  author: Seraphina
---


### Solución de Problemas de Instalación con NVIDIA SDK Manager

Hay muchas causas de varios errores de instalación. A continuación se presenta una lista de verificación de problemas comunes de instalación, que puede ayudarte a recuperarte de una instalación fallida.

1. Revisa la tabla de resumen para identificar qué componente falló.

    a. Expande el grupo con el estado "Error".

    b. Cuando encuentres el componente fallido, haz clic en el ícono de detalles a la derecha de Install Error para ser redirigido a la pestaña Terminal, que mostrará el error exacto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Si el error está relacionado con un problema del entorno, como un repositorio apt roto o un prerrequisito faltante, intenta solucionarlo manualmente, luego haz clic en el botón Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Reintentar la instalación también está disponible de otras dos maneras:

    a. Desde **Flasheo a eMMC con SDK Manager -- Paso 3**, usa el botón Repair/Uninstall para llegar a la página Manage NVIDIA SDKs. Si es necesario, expande el SDK que tiene el estado "Broken", luego haz clic en Repair para la parte relevante (Host o Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. En **Flasheo a eMMC con SDK Manager -- Paso 3**, selecciona el SDK requerido y ejecuta la instalación nuevamente.

5. Finalmente, intenta desinstalar y reinstalar el SDK relevante.

### Solución de problemas de instalación usando la línea de comandos

El método de instalación por línea de comandos es relativamente simple, y a menudo es propenso a errores en escenarios donde se usa el modo de recuperación forzada.

Si encuentras el error mostrado abajo en **Flasheo a eMMC con línea de comandos -- Paso 2**, probablemente no lograste poner la Jetson-101 Carrier Board en modo de recuperación forzada. Por favor presta especial atención, no entres al modo de recuperación forzada con la Jetson-101 Carrier Board encendida, ya que esto no es válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Si no puedes entrar al sistema en **Flasheo a eMMC con línea de comandos -- Paso 3** y estás atascado en la línea de comandos de la pantalla de arranque, probablemente no saliste del modo de recuperación forzada. Del mismo modo, no es válido que desconectes el jumper para salir del modo de recuperación forzada mientras la Jetson-101 Carrier Board está encendida, todo esto necesita hacerse mientras estás apagado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
Si se necesita más espacio de almacenamiento, podemos usar una tarjeta SD para expandir la capacidad, o grabar el sistema en una tarjeta SD, puedes consultar nuestra solución recomendada [Flash System on SD card](https://wiki.seeedstudio.com/es/J1010_Boot_From_SD_Card/)
:::