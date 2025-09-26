---
description: BLE Carbon
title: BLE Carbon
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE_Carbon
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/cover.png)

El BLE Carbon es un esfuerzo conjunto de 96Boards y Seeed, que tiene como objetivo proporcionar soluciones BLE económicas y compactas para proyectos de IoT.

96Boards es producido por Linaro, una organización sin fines de lucro cofundada por empresas famosas incluyendo ARM, IBM, Samsung, ST-Ericsson y TI. Es la primera especificación abierta que define una plataforma para la entrega de placas Cortex-A de 32 bits y 64 bits compatibles, de bajo costo y tamaño reducido de la gama de proveedores de SoC ARM. Al estandarizar los buses de expansión para E/S periférica, pantalla y cámaras, permite que el ecosistema de hardware desarrolle una gama de productos complementarios compatibles que funcionarán en cualquier producto 96Boards durante la vida útil de la plataforma.

BLE Carbon es el tipo de placas que utiliza la plataforma de software de 96Boards mientras que el hardware de Seeed, también utiliza la solución bluetooth de Nordic. Con la especificación abierta ampliamente utilizada y el sólido respaldo de fabricación de 96Boards y Seeed, BLE Carbon debe ser una de las mejores soluciones BLE para proyectos de IoT.

El Carbon viene preinstalado con Zephyr. Cuando futuros sistemas operativos estén disponibles, puede consultar la página de descarga para más sistemas operativos y aplicaciones.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Carbon-p-2710.html)

## Características

### Características del microcontrolador
- STM32F401RET6 en paquete LQFP64
- CPU ARM de 32 bits Cortex-M4 con FPU
- Frecuencia máxima de CPU de 84 MHz
- VDD de 1.7 V a 3.6 V
- Flash de 512 KB
- SRAM de 96 KB
- GPIO (50) con capacidad de interrupción externa
- ADC de 12 bits con 16 canales
- RTC
- Temporizador de control avanzado
- Temporizadores de propósito general (7)
- Temporizadores Watchdog (2)
- USART/UART (4)
- I2C (3)
- SPI (3)
- SDIO
- USB 2.0 OTG FS

### Características de la placa
- Microcontrolador STM32F401 con Flash de 512kB, ram de 96kB
- Fuente de alimentación USB con protección de fusible
- 6 LEDs
  - USR1, USR2, BT, PWR, RX, TX
- Dos botones pulsadores
  - USR y RESET
- Conectores de depuración SWD
- Antena chip integrada
- Voltaje de trabajo de 3.3V
- Conector de baja velocidad 2x15pin paso 2.54mm
- Totalmente compatible con estándares IoT 96Boards

## Especificaciones

|Parámetro|Valor|
|------------|------|
|Chipset |STM32F401|
|BT |nRF51822|
|Velocidad de reloj| Frecuencia máxima de CPU de 84MHz|
|Flash| 512KB|
|SRAM |96KB|
|Voltaje de salida digital |3.3V|
|Pines analógicos| 6|
|Voltaje de entrada analógica| 0~3.3V|
|Dimensiones| 60x30mm|

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/hw.png)

1.**OTG** - Puede usarse como USB OTG/HOST y dispositivo USB, también se usa para USB DFU.

2.**Indicadores LED**

- *USR1* - LED controlado por el usuario, conectado a PD2
- *USR2* - LED controlado por el usuario, conectado a PA15
- *BT* - Indicador de Bluetooth, conectado a PB5. Este LED se encenderá cuando se conecte a un dispositivo.
- *PWR* - Se enciende cuando se alimenta.
- *RX* - Indicador de FT230X - RX
- *TX* - Indicador de FT230X - TX

3.**UART** - para depuración o actualización de firmware, conectado a USART1.

4.**Botón de Reset** - Presionar para reiniciar el sistema

5.**Botón BOOT0** - botón de usuario o seleccionar modo de arranque, conectado a PC12, por defecto bajo.

6.**UART y SWD para depuración (tanto STM32F401 como nRF51822)**

7.**Antena del chip BT**

8.**Pines** - Los detalles se refieren al mapa de pines

9.**IC1** - FT230X

A.**IC2** - STM32F401

B.**IC3** - nRF51822

## Mapa de Pines

[![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)

:::note
    Haz clic para ver una imagen más grande.
:::
## Conexión entre nRF51822 y STM32F401

Si quieres usar un SoftDevice BLE en aplicaciones que no pueden ser portadas a nRF5, por ejemplo porque usan periféricos específicos o necesitan más recursos como RAM, memoria flash, o velocidad de CPU, deberías considerar usar serialización.

### Conexión de hardware
La conexión de hardware es la siguiente:

|STM32F401 |nRF51822| función |
|----------------|------------|-------------|
|PA4 |P0.25 |SPI_CSN |
|PB1 |P0.28 |SPI_REQ |
|PB0 |P0.29 |SPI_RDY |
|PA7 |P0.00 |SPI_MOSI |
|PA6 |P0.30 |SPI_MISO |
|PA5 |P0.07 |SPI_CLK |
|PB2 |SWDIO/NRESET| RESET |

### Configuración del software de serialización
Prepare la placa de conectividad realizando los siguientes pasos:

1. Conecte la placa al ordenador y asegúrese de que el cable RESET esté desconectado.
2. Programe el SoftDevice en la placa de conectividad. Consulte Programming SoftDevices para obtener instrucciones.
3. En Keil, abra el Connectivity Example para la capa de transporte físico que desee utilizar: \examples\ble_central_and_peripheral\ble_connectivity\board\ser_s13x_spi
4.  Compile la aplicación y descargue el archivo .hex creado a la placa de conectividad.

Para más detalles, consulte [Running a serialized application](http://infocenter.nordicsemi.com/index.jsp?topic=/com.nordic.infocenter.s130.api.v2.0.0/index.html)

## Cómo actualizar el firmware

### Procedimientos de demostración DfuSe
#### Cómo descargar un archivo DFU

1. Presione el botón BOOT0 y conecte OTG a su PC.
2. Ejecute la aplicación **DfuSe demonstration** (Inicio -> Todos los programas -> STMicroelectronics -> DfuSe Demonstration).
3. Haga clic en el botón **Choose** (Elemento 1 en la siguiente figura) para seleccionar un archivo DFU. La información mostrada como VID, PID, Versión y número de destino se lee del archivo DFU.
4. Marque la casilla **Optimize upgrade duration** para ignorar los bloques FF durante la carga.
5. Marque la casilla **Verify after download** si desea iniciar el proceso de verificación después de descargar los datos.
6. Haga clic en el botón **Upgrade** (Elemento 2 en la siguiente figura) para comenzar a actualizar el contenido del archivo a la memoria.
7. Haga clic en el botón **Verify** (Elemento 3 en la siguiente figura) para verificar si los datos se descargaron correctamente.

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_1.png)

#### Cómo generar archivos DFU desde archivos S19/Hex/Bin

1. Ejecute la aplicación **DFU File Manager** (Inicio -> Todos los programas -> STMicroelectronics -> DFU File Manager).
2. Seleccione el elemento **I want to GENERATE a DFU file from S19, HEX or BIN files** en el cuadro de diálogo **Want to do** y luego haga clic en **OK**.
3. Para crear la imagen desde un archivo S19 o Hex, haga clic en el botón **S19 or Hex** y seleccione su archivo, se creará una imagen DFU para cada archivo añadido.
4. Para crear el archivo DFU, haga clic en **Generate**.

:::note
     Para más detalles, lea el manual del usuario ([UM0412](http://www.st.com/content/ccc/resource/technical/document/user_manual/3f/61/72/ff/c5/5a/4a/7b/CD00155676.pdf/files/CD00155676.pdf/jcr:content/translations/en.CD00155676.pdf)) de ST.
:::
### 6.2 Descargar un archivo hex a través de UART

1. Presione el botón BOOT0 y conecte UART a su PC.
2. Ejecute la aplicación **Demonstrator GUI** (Inicio -> Todos los programas -> STMicroelectronics -> Demonstrator GUI).
3. Siga los pasos a continuación para descargar el firmware.

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_1.png)

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_2.png)

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_3.png)

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_4.png)

![enter image description here](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_5.png)

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Esquemáticos en Eagle](https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip)
- [Esquemáticos en PDF](https://files.seeedstudio.com/wiki/BLE-Carbon/res/BLE%20Carbon%20v1.0_SCH.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
