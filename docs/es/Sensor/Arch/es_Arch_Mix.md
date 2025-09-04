---
description: Arch Mix
title: Arch Mix
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_Mix
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Arch_Mix/img/main1.jpg)

Arch Mix es una placa de desarrollo delgada y liviana basada en el procesador NXP i.MX RT1052 (3020 CoreMark/1284 DMIPS @ 600 MHz). Lo que la hace adecuada para control industrial, especialmente para escenarios con código extenso y requisitos de aplicaciones de alta velocidad en tiempo real.

El i.MX RT1052 es una nueva familia de procesadores que presenta la implementación avanzada de NXP del núcleo Arm Cortex®-M7. Actualmente, el i.MX RT1052 es la solución Cortex-M7 de mayor rendimiento que ofrece 3036 CoreMarks, lo cual es 13 veces mejor que el microcontrolador LPC1788. Además del rendimiento de alta velocidad, proporciona una respuesta rápida en tiempo real. El i.MX RT1050 también tiene características ricas de audio y video, incluyendo pantalla LCD, gráficos 2D básicos, interfaz de cámara, SPDIF e interfaz de audio I2S.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Arch-Mix-p-2901.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
El Firmware Inicial de Arch Mix es RT-Thread que está obsoleto, por favor sigue este wiki para flashear el Arduino Bootloader en Arch Mix y úsalo como placa de desarrollo Arduino.
:::

## Ideas de Aplicación

- Control Industrial
- Edificios Inteligentes
- Interfaces Humano-Máquina Industriales
- Automatización y Control de Procesos
- Robot

## Características

- Microcontrolador ARM® Cortex®-M7 600MHz (NXP i.MX RT1052)
- Velocidad de carga del sistema ultra-rápida
- Interfaz periférica rica: RMII, CAN, I2C, UART, CSI, I2S, ADC, SPDIF IN/OUT, SWD
- Más pequeña que otras placas Demo de RT1052/1050: 67mm x 39mm

## Especificaciones

|Parámetros|Valor|
|----|----|
|**Procesador: NXP i.MX RT1052**||
|Plataforma|ARM Cortex-M7 MPCore|
|Frecuencia|600 MHz|
|Boot ROM|96KB|
|RAM On-Chip|512KB|
|**Memoria**||
|SDRAM|32MB|
|Flash QSPI|8MB|
|HyperFlash(Opcional)|64MB|
|**Conectividad**||
|USB 2.0 Host|x1|
|USB 2.0 OTG, y entrada de alimentación DC 5V|x1|
|Interruptor DIP de configuración de arranque|x1|
|LED|LED de alimentación x1<br />LED RGB de usuario x1|
|Botones|Botón de reset x1, botón On/Off x1, botón de usuario x1|
|Interfaz LCD RGB de 24 bits|x1|
|Conector de tarjeta Micro SD|x1|
|Conector de batería RTC 3V|x1|
|Header de 22 pines|RMII, CAN, I2C, UART, CSI, I2S,<br /> ADC, SPDIF IN/OUT, SWD|

<div align="center"><b>Tabla 1.</b><i>Especificación</i></div>

## Descripción General del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" /></a></p>
  <figcaption><b>Figura 1</b>. <i>Descripción General del Hardware Frontal</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" /></a></p>
  <figcaption><b>Figura 2</b>. <i>Descripción General del Hardware Posterior</i></figcaption>
</figure>
</div>

:::note
<font color="red"><b>*0</b></font> Necesitas alimentar el Arch Mix por el puerto USB OTG. Para la diferencia entre USB HOST y USB OTG, por favor consulta [aquí](https://www.quora.com/What-is-the-difference-between-USB-host-VS-USB-OTG).
<br />
<br />
<font color="red"><b>*1</b></font> Proporcionamos dos opciones para la memoria flash, puedes usar 64M HyperFlash(U7-por defecto DNP) o 8M QSPI Flash(U11-selección por defecto).
<br />
<br />
<font color="red"><b>*2</b></font> Después de que la placa esté alimentada por USB OTG, puedes encender y apagar el sistema presionando y manteniendo presionado (aproximadamente 3~5 segundos) este botón.
<br />
<br />
<font color="red"><b>*3</b></font> Ten en cuenta que este puerto es un puerto de batería CR2032 de 1.25mm, no conectes una batería Li-Po. Si quieres usar la función RTC, puedes buscar 'CR2032 Battery with Wire Leads' en Amazon u otra web.
:::

**Alimentación**

Por favor suministra alimentación a través del puerto Micro-USB **OTG**.

:::caution Peligro

- El voltaje de alimentación de entrada es 5V, no puede exceder 5.5V.  
- Todos los niveles de interfaz IO digital y analógica son 3.3V. Por favor no ingreses más de 3.3V, de lo contrario la CPU puede dañarse.  
- La interfaz alimentada por batería del RTC(J6) solo puede conectarse a una batería de botón de aproximadamente 3V, y el voltaje no puede exceder 3.6V.
:::

**Interruptor**

El Arch Mix puede configurarse en tres modos de arranque diferentes: HyperFlash, QSPI Flash y tarjeta SD. Usamos QSPI Flash por defecto, cuando cambies el modo de arranque, necesitas cambiar el interruptor DIP a la posición correspondiente.

DISPOSITIVO | BOOT_CFG | Valor de las cuatro teclas SW1
---|---|---
HyperFlash|0x02_00|0 , 1 , 1 , 0
QSPI Flash|0x00_00|0 , 0 , 1 , 0
SD|0x00_40|1 , 0 , 1 , 0

<div align="center"><b>Tabla 2.</b><i>Configuración de BOOT</i></div>

**Botón**

Hay tres botones en esta placa, por favor consulta la tabla de funciones.

Nombre|Función|Detalle
---|---|---
SW2|Botón de Usuario|Para configuración del usuario, para esta placa de desarrollo el pin No. 125 es SW2
SW3|RESET|Reinicio del sistema, cuando presiones este botón el sistema se reiniciará
SW4|Encendido/Apagado|Enciende y apaga el sistema presionando y manteniendo presionado (aproximadamente 3~5 segundos) este botón

<div align="center"><b>Tabla 3.</b><i>Tabla de función de botones</i></div>

**Interfaz LCD**

Como puedes ver, hay una interfaz LCD de 50 pines en esta placa, soporta hasta resolución WXGA de 1366 x 768. En caso de que necesites una pantalla LCD para esta placa, puedes usar la pantalla serie LCD8000. Consulta los enlaces a continuación.

[LCD de NXP](https://www.nxp.com/support/developer-resources/software-development-tools/i.mx-developer-resources/evaluation-kit-for-the-i.mx-6ull-and-6ulz-applications-processor:MCIMX6ULL-EVK?tab=Buy_Parametric_Tab#/)  
[LCD de Embest](http://www.embest-tech.com/prod_view.aspx?TypeId=118&Id=277)

### Distribución de Pines

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" /></a></p>
  <figcaption><b>Figura 3</b>. <i>Distribución de pines, haz clic en la imagen para ver el archivo original</i></figcaption>
</figure>
</div>

:::tip
La mayoría de los pines del procesador NXP i.MX RT1050 tienen función de multiplexación, puedes hacer clic en el archivo adjunto a continuación para ver la multiplexación detallada de pines.
:::

 [Tabla de Definición de Pines Arch Mix](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

### Diagrama de Bloques

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" /></a></p>
  <figcaption><b>Figura 4</b>. <i>Diagrama de Bloques Arch Mix, haz clic en la imagen para ver el archivo original</i></figcaption>
</figure>
</div>

### Diagrama de Dimensiones

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" /></a></p>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>Dimensiones de la Placa, Unidad(mm)</i></figcaption>
</figure>
</div>

## Flasheando el Bootloader de Arduino al Arch Mix

¡Ahora puedes flashear el **bootloader de Arduino** al Arch Mix y usarlo como una placa Arduino! Esta puede ser una de las placas Arduino más potentes (Cortex M7) del mercado.

### Configuración de Interruptores

Asegúrate de que esté ejecutándose desde el **QSPI** donde los interruptores están en orden:

- **0010**

### Hardware Requerido

- Arch Mix x 1

- **Sondas de Depuración J-Link** x 1

### Comenzando

- Descarga e instala el software [**J-Flash**](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/) desde el sitio oficial según el SO de tu PC.

- Encuentra la **ruta de instalación de J-Flash** y realiza los siguientes cambios.

- Navega a la ubicación de instalación: `SEGGER/JLink_V686/Devices/NXP/iMXRT105x`.

>Por ejemplo, para macOS, mi ruta de instalación es: `/Applications/SEGGER/JLink_V686/Devices/NXP/iMXRT105x`

- Descarga y descomprime el **[iMXRT105x.zip](https://files.seeedstudio.com/wiki/Arch_Mix/res/iMXRT105x.zip)**, pega y reemplaza los archivos en esta ruta.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/1.png"/></div>

- Navega de vuelta a la ubicación raíz de `SEGGER/JLink_V686` y debería haber un archivo llamado **`JLinkDevices.xml`**. Abre el archivo con un editor y busca `NXP_iMXRT105x_` y deberías ver que hay algunas opciones. Copia y pega el siguiente código en la misma sección como se indica en el diagrama:

```xml
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1051QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1052QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/2.png"/></div>

- Guarda el archivo.

- Ahora J-Flash está configurado y puedes abrir el software J-Flash.

- Crea un nuevo proyecto J-Flash y selecciona el **MCIMXRT1052QSPI** como el chip. Puedes usar el filtro para ayudarte a encontrar este chip. Si no puedes ver este chip, entonces hay algo mal en tus configuraciones previas de J-Flash, y por favor verifica de nuevo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/3.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/4.png"/></div>

- Descarga el [**Bootloader de Arduino para Arch Mix**](https://files.seeedstudio.com/wiki/Arch_Mix/res/bootloader.hex) aquí. También puedes revisar el [**código fuente**](https://github.com/Seeed-Studio/ArduinoCore-imxrt) en github aquí.

- Arrastra este bootloader hex al J-Flash.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/5.png"/></div>

- **Conecta los pines SWD del J-Link a los pines SWD del Arch Mix**.
  - DIO a DIO
  - CLK a CLK
  - GND a GND

- Selecciona **Target** -> **Connect** desde el menú desplegable superior izquierdo de J-Flash. Una vez conectado, deberías ver:

>Si no se puede conectar, por favor verifica el cableado del J-Link y Arch Mix de nuevo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/6.png"/></div>

- Selecciona **Target** -> **Production Programming** para flashear el bootloader al Arch Mix.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/7.png"/></div>

- Reinicia el Arch Mix y ahora el bootloader de Arduino está flasheado en él!

### Primeros pasos con Arduino

- Añade la librería de la placa Arch Mix al IDE de Arduino:

Abre tu IDE de Arduino, haz clic en **File** > **Preferences**, y copia la siguiente url en **Additional Boards Manager URLs**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

Haz clic en **Herramientas** > **Placa** > **Gestor de placas** y busca Arch Mix en el Gestor de placas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/IDE.png"/></div>

- Abre el ejemplo de parpadeo de LED: **Archivo** > **Ejemplos** > **01.Basics** > **Blink**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/></div>

- Necesitarás seleccionar la entrada en el menú **Herramientas** > **Placa** que corresponda a tu Arduino. Selecciona el Arch Mix.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/board.png"/></div>

- Elige el puerto correcto:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/port.png"/></div>

- Haz clic en cargar y el LED en Arch Mix debería comenzar a parpadear! ¡Ahora tienes una potente placa Cortex M7 en tus manos!

:::note
Para el mapa de pines de Arduino, puedes consultar [aquí](https://github.com/Seeed-Studio/ArduinoCore-imxrt/blob/master/variants/arch_mix/variant.h) para más referencia.
:::

## Usando NXPBooTUtility para flashear el bootloader de Arduino

Si **no tienes un J-Link** a mano, también hay otra forma de flashear el bootloader usando [**NXP Boot Utility**](https://github.com/JayHeng/NXP-MCUBootUtility), pero **solo es compatible con Windows**.

- Descarga el [NXP Boot Utility](https://github.com/JayHeng/NXP-MCUBootUtility).

```sh
git clone https://github.com/JayHeng/NXP-MCUBootUtility
```

- Navega a la carpeta **NXP-MCUBootUtility**, ve a `NXP-MCUBootUtility/bin` y abre el **NXP-MCUBootUtility.exe**.

- Conecta el **Pin Rx** del Arch Mix al **Pin 3.3V** usando un cable jumper hembra y **ajusta los interruptores a 0001**

- Conecta el Arch Mix a tu computadora y deberías ver la siguiente pantalla:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-1.png"/></div>

- Haz clic en **Boot Device Configuration**, elige la Flash y haz clic en **OK**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-2.png"/></div>

- Haz clic en Connect to ROM para entrar al modo de descarga:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-3.png"/></div>

- Elige el Bootloader:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-4.png"/></div>

- Haz clic en All in One Action y descargará el bootloader al Arch Mix!

- Una vez completado el flasheo, **ajusta el interruptor de vuelta a 0010** y presiona reset. ¡Ahora el Arduino Bootloader está flasheado en el Arch Mix usando la NXP Boot Utility!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atención</p>
    <p style={{color: '#000000', fontSize: 14}}>Asegúrate de que los interruptores estén ajustados de vuelta a 0010 para entrar al arranque desde Flash QSPI y funcionar como placa de desarrollo Arduino.</p>
  </div>
</div>

## Recursos

[Guía de Firmware del Arch Mix](https://files.seeedstudio.com/wiki/Arch_Mix/res/micropython_firmware.pdf)  
[Herramientas](https://files.seeedstudio.com/wiki/GM6020/res/Firmware_and_Tools.zip)

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Mix/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Esquemático](https://files.seeedstudio.com/wiki/Arch_Mix/res/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip)
- **[ZIP]** [Firmware y Herramientas](#)
- **[PDF]** [Wiki en Formato PDF](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch_Mix.pdf)
- **[PDF]** [Hoja de Datos del i.MX RT1050](https://files.seeedstudio.com/wiki/Arch_Mix/res/i.MX%20RT1050.pdf)
- **[PDF]** [Diagrama de Dimensiones](https://files.seeedstudio.com/wiki/Arch_Mix/res/ARCH%20MIX_V1.0_Dimension.pdf)
- **[xlsx]** [Función de Pines del Arch Mix_v1.0](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

## Soporte Técnico y Discusión de Productos


Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
