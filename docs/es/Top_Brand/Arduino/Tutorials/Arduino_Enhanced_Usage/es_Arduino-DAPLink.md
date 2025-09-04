---
description: Usar placas Arduino como dispositivo DAPLink
title: Usar placas Arduino como dispositivo DAPLink
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arduino-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Cómo usar placas Arduino como dispositivo DAPLink

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

## Qué es DAPLink

**[Arm Mbed DAPLink](https://armmbed.github.io/DAPLink/)** es un proyecto de software de código abierto que programa y depura software de aplicación ejecutándose en **CPUs Arm Cortex**. DAPLink a menudo se denomina firmware de interfaz y se ejecuta en un MCU auxiliar conectado al puerto SWD o JTAG del MCU de aplicación. Esta configuración está disponible en casi todas las placas de desarrollo. Crea un puente entre tu computadora de desarrollo y el puerto de acceso de depuración de la CPU.

>Por favor visita también [DAPLink](https://github.com/ARMmbed/DAPLink) para más información.

### DAPLink para placas Arduino

Ahora, hemos **desarrollado el firmware DAPLink ejecutándose en tus placas Arduino**(*Serie SAMD*) como [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) para que puedas cargar y depurar placas de desarrollo que soporten DAPLink de la manera más rentable!

### Características

- Depurar y flashear CPUs Arm Cortex
- Proporciona un puerto serie virtual, eliminando la necesidad de un convertidor USB a puerto serie
- Arrastrar y soltar para cargar firmware (próximamente)

## Placas compatibles

Soporta todas las placas SAMD de Seeed:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Serie Seeeduino Zero:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

:::note
¡Por favor asegúrate de haber instalado la **última librería de placas ArduinoSAMD para Seeed (>=1.8.1)** para que esto funcione!
:::

## Comenzar

### 1. Instalando las librerías Arduino de DAPLink

1. Visita los repositorios [**Seeed_Arduino_DAPLink**](https://github.com/Seeed-Studio/Seeed_Arduino_DAPLink/) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería Seeed_Arduino_DAPLink puede instalarse en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_DAPLink` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Instalando la librería Adafruit_TinyUSB_Arduino

1. Visita los repositorios [**Adafruit_TinyUSB_Arduino**](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería Adafruit_TinyUSB_Arduino puede instalarse en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Adafruit_TinyUSB_Arduino` que acabas de descargar.

### Personalizando las definiciones de pines

Si estás usando **Wio Terminal** o **Seeeduino Xiao**, puedes omitir esta sección y simplemente usar las definiciones predeterminadas.

- Las definiciones de pines para DAPLink están definidas en **`DAP_config.h`** bajo `Seeed_Arduino_DAPLink/src`, consulta lo siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/pins-new.png"/></div>

### Cargar a placas Arduino

Abre el `simple_daplink.ino` bajo `Seeed_Arduino_DAPLink/example` usando el IDE de Arduino. Bajo `Tools` -> `USB Stack` y elige **TinyUSB**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/usbstack.png"/></div>

¡Compila y carga el código!

## Ejemplo de Conexión de Hardware

En este wiki, hemos usado la [placa de desarrollo STM32F410RB](https://www.st.com/en/microcontrollers-microprocessors/stm32f410rb.html) como ejemplo de conexión:

>Si has cambiado las definiciones de pines, por favor conecta según tus propias definiciones.

- Ejemplo de Conexión Seeeduino Xiao

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"/></div>

- Ejemplo de Conexión Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## Ejemplo de Depuración y Flash para IDEs

¡Nuestra placa Arduino ahora se convierte en nuestro dispositivo DAPLink para cargar en MCUs! Veamos algunos ejemplos para diferentes IDEs como referencia.

### Depuración con OpenOCD

- Conecta el Arduino DAPLink al desarrollo objetivo según la conexión anterior, y a tu PC.

- Asegúrate de haber instalado OpenOCD.

- Abre Terminal y ejecuta lo siguiente:

Cambia a tu dispositivo objetivo según tu placa de desarrollo, puedes consultar el [documento oficial](http://openocd.org/doc/html/CPU-Configuration.html) como referencia.

```sh
openocd -f interface/cmsis-dap.cfg -f target/stm32f4x.cfg
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-1.png"/></div>

- Bajo la ruta de compilación del proyecto de tu placa de desarrollo, ejecuta gcc, que se ve algo así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-2.png"/></div>

- bajo gdb, conéctate al host local ejecutando lo siguiente:

```sh
target remote 127.0.0.1:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-3.png"/></div>

- ¡Ahora la placa de desarrollo está conectada, puedes comenzar a depurar o cargar!

Ejecuta `load` para cargar a la placa de desarrollo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-4.png"/></div>

Algunos comandos útiles para GDB:

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

### Depuración con Eclipse

Para Eclipse, es muy similar a OpenOCD ya que puede usar OpenOCD como backend.

- Navega a **Help** -> **Eclipse Marketplace**, busca y descarga **Eclipse Embedded CDT**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-2.png"/></div>

- Navega a **Window** -> **Preference** -> **MCU** -> **Global OpenOCD Path** y completa tu ruta de OpenOCD como sigue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-3.png"/></div>

- Compila tu proyecto. Bajo **Run Last Tool**, haz clic en **External Tools Configurations**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-5.png"/></div>

- Copia las siguientes configuraciones, por favor cambia a tu ruta (también tu placa objetivo).

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-6.png"/></div>

Si va bien, debería verse algo así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-8.png"/></div>

- Bajo **Debug**, haz clic en **Debug Configurations**, selecciona la sección **Debugger**, y completa tu ruta de gcc:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-9.png"/></div>

¡Ahora todo está listo para depurar!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

Para más referencia, por favor revisa [aquí](https://gnu-mcu-eclipse.github.io/debug/openocd/).

### Depuración con Keil

- Conecta el Arduino DAPLink al desarrollo objetivo según la conexión anterior y a tu PC.

Para usar nuestro Arduino DAPLink en Keil, verifica lo siguiente:

- Abre tu proyecto con Keil, haz clic en **Options for target**.

Deberías ver una ventana como la de abajo. Asegúrate de que el dispositivo coincida con tu dispositivo. Navega a la sección **Debug** y selecciona **CMSIS-DAP Debugger**.

- Haz clic en **settings** junto al **CMSIS-DAP Debugger**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-1.png"/></div>

- Elige **Seeed CMSIS-DAP**(nuestra placa Arduino) y deberías ver que está conectada.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-2.png"/></div>

- También puedes navegar a la sección **Flash Download** para asegurarte de que es el dispositivo correcto y hacer clic en **OK**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-3.png"/></div>

- ¡Haz clic en **Build** y **Flash**!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-4.png"/></div>

### Depuración con IAR Embedded Workbench

- Conecta el Arduino DAPLink al desarrollo objetivo según la conexión anterior y a tu PC.

- Abre tu proyecto, y navega a **Project** -> **Options**. En el menú Options, selecciona **Debugger**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-1.png"/></div>

- En la pestaña **Setup**, selecciona **CMSIS DAP** del menú desplegable Driver.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-2.png"/></div>

- En la pestaña **Download**, marca Verify download y Use **flash loader(s)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-3.png"/></div>

- Selecciona **CMSIS DAP** del menú de la izquierda, selecciona la pestaña **Interface** y configura el protocolo **SWD**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-4.png"/></div>

- ¡Haz clic en **OK**, y puedes hacer clic en **Download and Debug**!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-5.png"/></div>

## Uso Serial

Para hacer la vida más fácil, también implementamos una función USB a Serial en el Arduino Sketch que te ahorra la necesidad de hardware adicional!

- Por defecto, está definido como `Serial1` y son los pines Serial de Hardware. Por ejemplo, son los pines 6 y 7 para Seeeduino XIAO.

:::note
    Puedes definir tu propio Serial en el Arduino Sketch.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg"/></div>

>Uso de referencia, consulta [aquí](https://wiki.seeedstudio.com/es/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/).

## Recursos

- [DAPLink Github Oficial](https://github.com/ARMmbed/DAPLink)
- [Documentos OpenOCD](http://openocd.org/doc/html/index.html)

## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
