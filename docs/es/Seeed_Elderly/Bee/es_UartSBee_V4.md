---
description: UartSBee V4
title: UartSBee V4
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/UartSBee_V4
last_update:
  date: 1/13/2023
  author: shuxu hu
---
 ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Xbs4.jpg)

**UartSBee v4.0** es un adaptador **USB a Serie** compatible con cable FTDI equipado con socket BEE (20 pines 2.0mm). El **FT232RL** integrado puede ser usado para programar o comunicarse con MCUs. Por otro lado, podrías conectar tu PC a varias aplicaciones inalámbricas a través de un módulo compatible con **Bee**. UartSBee también proporciona conexiones para los pines de modo bit-bang del **FT232RL**. Estos pines de modo bit-bang (8 pines I/O) pueden ser usados como reemplazo para aplicaciones que involucran puerto paralelo de PC, el cual es escaso hoy en día.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/UartSBee-V4-p-688.html)

## Seguimiento de Versiones de Hardware

| Revisión | Descripción | Fecha de Lanzamiento |
|----------|-------------|----------------------|
| UartSBee V3.1 | Eliminar conexión de Bluetooth en la parte inferior, Reducir factor de forma | Sept 02, 2010 |
| UartSBee V2.3 | Corriente DC para pin 3.3v, hasta 500mA proporcionados para mejor soporte de XBee pro | Jul 21, 2009 |
| UartSBee V2.1 | Lanzamiento público inicial | Feb 01, 2009 |

## Características

---
- Compatible con Cable FTDI.
- Interfaz Serie compatible con USB 2.0.
- E/S compatibles con 3.3V y 5V.
- Salidas de alimentación dual de 3.3V y 5V.
- Botón de reset para módulos BEE.
- Listo para modo Bit-Bang (8 E/S Serie o como SPI).
- LEDs para operaciones UART y BEE.

## Ideas de Aplicaciones

---
- Adaptador USB a Serie para comunicarse con dispositivos Serie de nivel TTL/CMOS.
- Programador para Arduino / Seeeduino y placas compatibles.
- Programador para microcontroladores / CPLDs usando ISP(programación serie en circuito).
- Fuente de alimentación de 3.3V / 5V para aplicaciones MCU en protoboard
- Adaptador USB para módulos BEE (para función inalámbrica de PC).
- Posibilidades infinitas como dispositivo paralelo basado en USB en modo bit-bang FT232RL - Se sabe que funciona como **AVR-ISP**, **JTAG** de baja velocidad con OpenOCD, como **I2C**,

## Precauciones

---

- **UartSBee v3.1** proporciona un **interruptor de palanca** de **selección de alimentación**(3.3V o 5V). <u>Antes de conectar</u> la placa a cualquier otro dispositivo, asegúrese de configurar el interruptor de selección de alimentación a 3.3V o 5V.

## Esquemático

---
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_V4.0_Sch.png)

## Especificaciones

---

### Especificaciones Clave

| Especificación | Valor |
|--------------|-------|
| Microprocesador | FT232RL |
| Tamaño PCB | 3.1cm x 4.1cm |
| Indicadores | POWER,LED Verde. LEDs para Txd y Rxd |
| Fuente de alimentación | 3.3V y 5V DC |
| Interfaz | Mini-B USB, conector de pines de paso 2.54mm |
| Socket adaptador | Conector de pines hembra de paso 2.0mm compatible con XBee |
| Conectividad | USB |
| Protocolo de Comunicación | UART, E/S Bit Bang, SPI |
| ROHS | SÍ |

### Características Eléctricas

| Especificación | Mínimo | Típico | Máximo | Unidad |
|---------------|--------|--------|--------|--------|
| Voltaje de entrada | - | 5 | 5 | Vdc |
| Consumo de corriente | - | - | 500 | mA |
| Voltaje de salida | 3.3 | - | 5 | Vdc |

## Diagrama de Bloques del Sistema

---
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-block-diagram.jpg)

- Se proporciona un pequeño **interruptor** de **reset** para reiniciar dispositivos compatibles con **Bee**.
- Además del conector de **2 x 10** para módulos compatibles con BEE, se proporcionan pads adicionales para **conectores de 2 x 10 pines**, **conector ISP de 2 x 3**. Los usuarios pueden soldar conectores de pines apropiadamente.

## Aplicaciones

---

### Puerto USB – Serial

**UartSBee** se usa comúnmente como interfaz de USB a Puerto Serial (puerto COM). Este tipo de configuración se puede usar para comunicarse con un puerto serial de MCU o para programar un MCU que soporte ISP basado en UART.

**Windows**

- En el SO Windows, la primera vez que conectes el dispositivo, es posible que se te solicite el controlador.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Detected_Windows.JPG)

Descarga e instala el controlador de **puerto COM virtual** desde el sitio web de FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- Se abre un asistente para instalar el controlador. Elige "Instalar desde una lista o ubicación específica"

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_1.JPG)

- Elige la ruta del controlador descargado

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.JPG)

- Si has descargado un controlador sin firmar, aparece la siguiente ventana. Solo haz clic en "Continuar de todos modos"

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.1.JPG)

- El controlador de **UartSBee** se instala exitosamente. Windows asigna un nombre de puerto **COM** al **FT232RL** como **COM10**, **COM11** etc... Por favor verifica el nombre exacto en el Administrador de dispositivos. En este caso "**COM16**" está asignado para UartSBee

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_3.JPG)

**GNU/Linux**

Todos los **SO GNU/Linux** modernos vienen con controladores FT232RL. Para verificar si UartSBee es detectado, ejecuta un comando **lsusb**. Debería aparecer una salida similar a la siguiente.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Lsub.png)

**GNU/Linux** asigna **/dev/ttyUSB0**, **/dev/ttyUSB1** etc... como nombre del dispositivo.

Para verificar el funcionamiento del puerto serial conecta los pines **TxD** y **RxD** de UartSBee y usa una aplicación de terminal como **cutecom** para configurar los parámetros del dispositivo como se muestra a continuación.

**Baudrate**:9600, **Bits de datos**:8, **Bits de parada**:Ninguno y sin Handshake

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-txd-rxd-connected.JPG)

Cualquier carácter escrito en el terminal sería devuelto como eco como se muestra.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartsBee-CuteCom.png)

La misma funcionalidad se puede verificar en **Windows** - **Hyperterminal** también.

### Fuente de Alimentación 3.3V / 5v para protoboard de MCU µCs y Programador para µCs / CPLDs

Además de las salidas de alimentación de 3.3V y 5V proporcionadas por UartSBee, el nivel lógico de los pines I/O se puede seleccionar para operaciones **TTL de 5.0V** o **CMOS de 3.3V**. En el ejemplo siguiente se demuestra una aplicación de microcontrolador basada en protoboard. Un MCU LPC1343 ARM Cortex-M3 está conectado a UartSBee. Como este es un dispositivo de 3.3V, el interruptor de alimentación está configurado a 3.3V. El LPC1343 se puede programar a través de UART. Esta aplicación podría extenderse a cualquier MCU / CPLDs que soporten flasheo basado en UART o flasheo basado en SPI (Necesita modo BitBang de FT232R).

**Prototipado en Protoboard**: **UartSBee v3.1** actuando como fuente de alimentación de 3.3V y puerto de programación UART de 3.3V para LPC1343.

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG)

 **Interruptor**: I/O de 3.3V Seleccionado
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UarSBee-Switch_3.3V_selected.jpg)

### Interfaz de Módulo Bee para aplicación Inalámbrica de PC

**Complementos Inalámbricos para PC**

La interfaz compatible con Bee proporcionada por UartSBee se puede usar para conectar módulos Bee como **XBee**, **Bluetooth Bee**, **RF Bee**, **Wifi Bee**, **GPS Bee** al USB de PC. Esto hace más fáciles las aplicaciones inalámbricas para PC basadas en Bee. Como la mayoría de estos módulos Bee soportan interfaz UART, la programación en PC también es fácil.

**Complementos Inalámbricos para MCU**

Este tipo de arreglo también se puede usar para interfaz con UART de microcontroladores (Seeeduino).

Por favor consulta la documentación del módulo Bee para más información.

**XBee **Conectado a**UartSBee                                                                     BluetoothBee **Conectado a**UartSBee**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee-hardware.jpg) ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/BluetoothBee_with_UartSBee.JPG)

### Modo BitBang

Una característica agradable de UartSBee v3.1 comparado con otros dispositivos USB-Serial basados en FT232RL es que todos los I/Os de Bit-Bang están llevados a los pines del conector.

El modo Bit-Bang es una característica especial del FT232RL en la cual 8 líneas I/O (**D0 - D7**) se pueden usar como líneas I/O bidireccionales de propósito general. Tres modos Bit-Bang son soportados por FT232RL

- **Modo Bit-Bang Asíncrono**

Cualquier dato escrito al dispositivo es enviado por reloj a los pines de salida configurados. La tasa de transferencia de datos se configura basada en el generador de tasa de baudios. En este modo cualquiera de las 8 líneas I/O se puede configurar como entrada o salida.

- **Modo Bit-Bang Síncrono**

En este modo los datos se envían síncronamente. Una entrada se lee antes de que un byte de salida sea enviado al dispositivo. Por lo tanto para leer entrada, se debe realizar una operación de escritura.

- **Modo CBUS Bit-Bang**

Este es un modo especial que requiere reprogramación de la EEPROM del FT232RL. Esto usa señales **C0 - C3**.

 El **Modo Bit-Bang** del **FT232RL** está bien documentado en la nota de aplicación[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Tabla: Mapeo de I/O Bit-Bang**

| Señal UartSBee | Señal I/O BitBang |
|-----------------|-------------------|
| TxD | D0 |
| RxD | D1 |
| RTS | D2 |
| CTS | D3 |
| DTR | D4 |
| DSR | D5 |
| DCD | D6 |
| RI | D7 |

**Operación en Modo BitBang:**

Una operación simple en modo Bit-Bang asíncrono se demuestra en el siguiente arreglo de protoboard en el cual el pin DTR (D4) está conectado a un LED. La velocidad de parpadeo del LED es controlada por el programa de aplicación del lado de la PC.

 **Circuito LED Parpadeante                                                             E/S BitBang de UartSBee V3.1 - Lado Inferior**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_bit-bang-DTR.jpg)   ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_Bottom_Bit_Bang.png)

El modo Bit-Bang requiere un controlador directo especial de FTDI llamado [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm). Este controlador necesita ser instalado después de remover el controlador de Puerto COM Virtual del chip FT232RL. En GNU/Linux este controlador se ejecuta en modo kernel. Como alternativa a D2XX está disponible un controlador libre de código abierto [libFTDI](http://www.intra2net.com/en/developer/libftdi/). Este funciona en Windows, GNU/Linux y Mac OS. Se ejecuta en modo usuario en GNU/Linux. Por lo tanto no hay necesidad de remover el controlador FT232RL existente.

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB** libFTDI requiere libusb que puede ser descargado desde

[http://www.libusb.org/](http://www.libusb.org/)

El siguiente código de ejemplo puede ser compilado de manera similar a la de los archivos de ejemplo de libFTDI. Una manera fácil es copiar el contenido del código de abajo a uno de los archivos .c de ejemplo existentes y construir todo el controlador usando

./configure

make

 **Ejemplo de Código**

```
/*
Blinky.C&nbsp;: UartSBee v3.1 (FT232RL) Bit-Bang mode - Blinky.

Circuit:
Connect DTR to Anode of LED, Connect one end of resistor to GND and other end
to Cathode of the LED
*/

#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8 bit pin mask for I/O pin
#define TXD 0x01
#define RXD 0x02
#define RTS 0x04
#define CTS 0x08
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>
#include <ftdi.h>

int main()
{
    unsigned char ouputState = 0;
    struct ftdi_context ftdic;

    /* 1. Initialize ftdi device context */
    ftdi_init(&ftdic);

    /* 2. Open the device based of VID/PID pair */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("Unable to UartSBee v3.1");
        return 1;
    }

    /* 3. Enable Bit-Bang mode with for DTR line  */
    ftdi_set_bitmode(&ftdic, DTR, BITMODE_BITBANG);

    /* 4. Blink LED every 1 second */
    while(1) {
        ouputState ^= DTR;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

El modo Bit-Bang del FT232RL puede usarse para construir puertos AVR ISP, JTAG, SPI e I2C. Consulte los enlaces externos.

**Idea de Conexión AVR-ISP**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_ISP_Connection_BitBang.jpg)

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

[Archivos de Esquemático y PCB](https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip);

## Enlaces Externos

- [Página del producto FTDI FT232RL](https://www.ftdichip.com/Products/ICs/FT232R.htm)

- [Controladores FTDI Virtual COM Port (VCP)](https://www.ftdichip.com/Drivers/VCP.htm)
- [Controladores FTDI D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)

- [Nota de aplicación del modo Bit-Bang de FTDI](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Controladores de Código Abierto**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

- [libUSB](http://www.libusb.org/)

**Otras Fuentes de Información de Aplicaciones del FT232RL**

- [Hackaday - Introducción al modo bit-bang](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

- [Implementación JTAG del FT232R con OpenOCD](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

- [Ejemplo del Modo Bitbang SPI del FT232R](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

- [Flasheando Arduino con el modo bitbang del FT232R](http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
