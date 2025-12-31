---
description: Seeed Studio XIAO nRF54L15 con PlatformIO
title: XIAO nRF54L15 con PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /es/xiao_nrf54l15_with_platform_io
last_update:
  date: 7/4/2025
  author: Jason
  sidebar_position: 5
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:600, height:'auto'}}/></div>

## Introducción a PlatformIO

PlatformIO se presenta como un ecosistema de desarrollo potente y altamente extensible diseñado para sistemas embebidos. Integra sin problemas el soporte para una amplia gama de placas de desarrollo y microcontroladores, ofreciendo una flexibilidad sin igual. Lo que distingue a PlatformIO es su notable escalabilidad: incluso si tu placa específica no está soportada nativamente, su arquitectura permite definiciones de placas personalizadas de manera sencilla.

Crucialmente, PlatformIO cierra la brecha para desarrolladores familiarizados con Arduino, permitiendo la compilación e implementación de código estilo Arduino simplemente incluyendo las librerías relevantes. Esta guía te llevará a través del proceso de configurar PlatformIO para tu XIAO nRF54L15 y demostrará cómo compilar, cargar y monitorear código de ejemplo, haciendo el desarrollo complejo de Zephyr RTOS notablemente accesible.

## Configurando PlatformIO para XIAO nRF54L15

Sigue estos pasos simplificados para configurar tu entorno de desarrollo e implementar tu primera aplicación en el XIAO nRF54L15 Sense.


### Instalar la Extensión PlatformIO IDE para VS Code

Si aún no lo has hecho, instala la extensión PlatformIO IDE directamente dentro de Visual Studio Code. Esta poderosa extensión transforma VS Code en un entorno de desarrollo embebido integral.

- Abre VS Code.

- Ve a la vista de Extensiones (Ctrl+Shift+X o Cmd+Shift+X).

- Busca ["PlatformIO IDE"](https://platformio.org/platformio-ide) y haz clic en Instalar.


### Crear un Nuevo Proyecto PlatformIO

Aquí puedes elegir cualquiera de las versiones de desarrollo para crear un archivo de proyecto, tomo XIAO ESP32 C3 como ejemplo.

<table align="center">
  <tr>
      <th>Operación uno</th>
        <th>Operación dos</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>



### Configurar platformio.ini para Soporte Zephyr del XIAO nRF54L15

Una vez que tu proyecto esté creado, localiza el archivo platformio.ini en la raíz de tu directorio de proyecto (visible en el Explorador de VS Code a la izquierda). Este archivo es el corazón de la configuración de tu proyecto PlatformIO.

<table align="center">
  <tr>
      <th>Operación tres</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platform54.jpg"/></div>
  </tr>
</table>


Necesitas reemplazar todo el contenido de tu archivo platformio.ini con la siguiente configuración:

```
[env:seeed-xiao-nrf54l15]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54l15
```
:::tip
Si previamente descargaste otras librerías XIAO, debes eliminarlas manualmente antes de modificar el archivo platform.ini y volver a descargar las librerías requeridas.
:::

Ruta Mac：
`/Users/YourName/.platformio/platforms`

Ruta Windows：
`C:\Users\000.platformio\platforms\Seeed Studio`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformmodify.jpg" style={{width:600, height:'auto'}}/></div>
<table align="center">
  <tr>
      <th>Operación cuatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platformiozephyr.jpg"/></div>
  </tr>
</table>

Necesitas reemplazar el contenido de cMakeLists.txt con la siguiente configuración
```
set(BOARD_ROOT "$ENV{ZEPHYR_BASE}/../../platforms/Seeed Studio/zephyr")
cmake_minimum_required(VERSION 3.13.1)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(blinky)

target_sources(app PRIVATE ../src/main.cpp) # If the main source file is.c, please change it to src/main.c
```
Luego vuelve a guardar el archivo platformio.ini (Ctrl+S o Cmd+S) y espera a que se cargue completamente.

### Compilar y Cargar tu Primer Ejemplo Blink

Ahora, probemos tu configuración con un clásico ejemplo "Blink". Este código alternará el LED integrado en tu XIAO nRF54L15.

Reemplaza el contenido de tu archivo src/main.cpp (o src/main.c) con el siguiente código C compatible con Zephyr:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**A continuación compilamos y grabamos usando este código**

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 #include <zephyr/kernel.h>
 #include <zephyr/device.h>
 #include <zephyr/drivers/gpio.h>
 #include <nrfx_power.h>

 /* 1000 msec = 1 sec */
 #define SLEEP_TIME_MS   1000

 /* The devicetree node identifier for the "led0" alias. */
 #define LED0_NODE DT_ALIAS(led0)

 static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

 int main(void)
 {
	 int ret;
	 bool led_is_on = true;
	nrfx_power_constlat_mode_request();
	 if (!gpio_is_ready_dt(&led)) {
		 return -1;
	 }

	 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	 if (ret < 0) {
		 return ret;
	 }

	 while (1) {
		 ret = gpio_pin_set_dt(&led, (int)led_is_on);
		 if (ret < 0) {
			 return ret;
		 }
		 led_is_on = !led_is_on;
		 k_msleep(SLEEP_TIME_MS);
	 }

	 return 0;
 }

```

Ahora, conecta tu XIAO nRF54L15 a tu computadora vía USB. En VS Code:

- Compilar: Haz clic en el ícono "Build" (marca de verificación) en la barra de herramientas de PlatformIO en la parte inferior de VS Code, o usa la barra lateral de PlatformIO: PROJECT TASKS -> nombre_de_tu_proyecto -> General -> Build.

- Cargar: Después de una compilación exitosa, haz clic en el ícono "Upload" (flecha derecha) en la barra de herramientas de PlatformIO, o usa la barra lateral de PlatformIO: PROJECT TASKS -> nombre_de_tu_proyecto -> General -> Upload.


<table align="center">
  <tr>
      <th>Operación cinco</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blink.jpg" /></div>
  </tr>
</table>

La salida en la terminal debería indicar un proceso de compilación y grabación exitoso.


### Observar el Resultado

Después de una carga exitosa, el LED integrado de tu XIAO nRF54L15 debería comenzar a parpadear en intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>



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
