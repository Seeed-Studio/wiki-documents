---
description: UartSBee V3.1
title: UartSBee V3.1
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/UartSBee_V3.1
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsb31.jpg)

UartSBee v3.1 es un adaptador USB a Serial completamente equipado con socket BEE (20 pines 2.0mm). El FT232RL integrado puede ser usado para programar o comunicarse con MCUs. Por otro lado, podrías conectar tu PC a varias aplicaciones inalámbricas a través de un módulo compatible con Bee. UartSBee también proporciona conexiones para los pines de modo bit-bang del FT232RL. Estos pines de modo bit-bang (8 pines I/O) pueden ser usados como reemplazo para aplicaciones que involucran puerto paralelo de PC, el cual es escaso hoy en día.

Modelo:[INT110B2P](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109)


##   Características  ##

- Interfaz Serial compatible con USB 2.0.

- I/Os compatibles con 3.3V y 5V.

- Salidas de alimentación dual de 3.3V y 5V.

- Botón de reset para módulos BEE.

- Listo para modo Bit-Bang (8 I/Os Seriales o como SPI).

- LEDs para operaciones UART y BEE.

##   Ideas de Aplicaciones   ##

- Adaptador USB a Serial para comunicarse con dispositivos Seriales de nivel TTL/CMOS.

- Programador para Arduino / Seeeduino y placas compatibles.

- Programador para micro-controladores / CPLDs usando ISP (programación serial en circuito).

- Fuente de alimentación de 3.3V / 5V para aplicaciones MCU en protoboard

- Adaptador USB para módulos BEE (para función inalámbrica de PC).

- Posibilidades infinitas como dispositivo paralelo basado en USB en modo bit-bang FT232RL - Se sabe que funciona como **AVR-ISP**, **JTAG** de velocidad lenta con OpenOCD, como **I2C**, 

##   Precauciones   ##

- **UartSBee v3.1** proporciona un **interruptor de selección de alimentación** (3.3V o 5V). Antes de conectar la placa a cualquier otro dispositivo, asegúrate de configurar el interruptor de selección de alimentación a 3.3V o 5V.

##   Esquemático   ##

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Schematic.png)

##   Especificaciones   ##

###   Especificaciones Clave   ###

 |Microprocesador|FT232RL|
 |---|---|
 |Tamaño PCB| 3.1cm x 4.1cm|
 | Indicadores| POWER, LED Verde. LEDs para Txd y Rxd|
 |Fuente de alimentación|3.3V y 5V DC|
 |Interfaz| Mini-B USB, conector de pines de paso 2.54mm|
| Socket adaptador|Conector de pines hembra de paso 2.0mm compatible con XBee|
| Conectividad|USB|
 |Protocolo de Comunicación| UART, Bit Bang I/O, SPI|
| ROHS|SÍ|

###   Características Eléctricas   ###


 |Especificación| Mínimo| Típico| Máximo|Unidad|
 |---|---|---|---|---|
 |Voltaje de entrada| -| 5|5|Vdc|
 |Consumo de Corriente|-|-|500|mA|
 |Voltaje de salida|3.3|-|5|Vdc|

##   Diagrama de Bloques del Sistema   ##

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsbee-block-diagram.jpg)

- Se proporciona un pequeño interruptor de reset para resetear dispositivos compatibles con Bee.

- Además de las conexiones 2 x 10 para módulos compatibles con BEE, se proporcionan pads adicionales para conectores de 2 x 10 pines, conector ISP de 2 x 3. Los usuarios pueden soldar conectores de pines apropiadamente.

##  Aplicaciones  ##

###   Puerto USB – Serial   ###

**UartSBee** se usa comúnmente como interfaz de Puerto USB a Serial (puerto COM). Este tipo de configuración puede ser usado para comunicarse con un puerto serial MCU o para programar un MCU que soporte ISP basado en UART.

#### Windows ####

- En SO Windows, la primera vez que conectes el dispositivo, podrías ser consultado por el controlador.

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Detected_Windows.JPG)

Descarga e instala el controlador de **puerto COM Virtual** desde el sitio web de FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- Se abre un asistente para instalar el controlador. Elige "Instalar desde una lista o ubicación específica"

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_1.JPG)

- Elige la ruta del controlador descargado

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_2.JPG)

- Si has descargado un controlador sin firmar, aparece la siguiente ventana. Solo haz clic en "Continuar de todos modos"

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_2.1.JPG)

- El **controlador UartSBee** se instala exitosamente. Windows asigna un nombre de puerto COM al FT232RL como COM10, COM11 etc... Por favor verifica el nombre exacto en el Administrador de Dispositivos. En este caso "COM16" está asignado para UartSBee

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_3.JPG)

#### GNU/Linux ####

Todos los **SO GNU/Linux** modernos vienen con controladores FT232RL. Para verificar si UartSBee es detectado, ejecuta un comando lsusb. Debería aparecer una salida similar a la siguiente.

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Lsub.png)

**GNU/Linux** asigna **/dev/ttyUSB0**, **/dev/ttyUSB1** etc... como nombre de dispositivo.

Para verificar el funcionamiento del puerto serial conecta los pines **TxD** y **RxD** de UartSBee y usa una aplicación de terminal como cutecom para configurar los parámetros del dispositivo como se muestra a continuación.

**Baudrate**:9600, **Bits de datos**:8, **Bits de parada**:Ninguno y sin Handshake

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsbee-txd-rxd-connected.JPG)

Cualquier carácter escrito en terminal sería devuelto como eco como se muestra.

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartsBee-CuteCom.png)

La misma funcionalidad puede ser verificada en Windows - Hyperterminal también.

###   Fuente de Alimentación 3.3V / 5v para µCs en protoboard MCU y Programador para µCs / CPLDs   ###

Además de las salidas de alimentación de 3.3V y 5V proporcionadas por UartSBee, el nivel lógico de los pines I/O puede ser seleccionado para operaciones **5.0VTTL** o **3.3V CMOS**. En el ejemplo siguiente se demuestra una aplicación de micro-controlador basada en protoboard. Un MCU LPC1343 ARM Cortex-M3 está conectado a UartSBee. Como este es un dispositivo de 3.3V, el interruptor de alimentación está configurado a 3.3V. LPC1343 puede ser programado a través de UART. Esta aplicación podría ser extendida a cualquier MCU / CPLDs que soporten flasheo basado en UART o flasheo basado en SPI (Necesita modo BitBang FT232R).

**Prototipado en Protoboard: UartSBee v3.1** actuando como fuente de alimentación de 3.3V y puerto de programación flash UART de 3.3V para LPC1343.

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG)
Interruptor: I/O de 3.3V Seleccionado

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UarSBee-Switch_3.3V_selected.jpg)

###   Interfaz de Módulo Bee para aplicación Inalámbrica de PC   ###

#### Complementos Inalámbricos para PC

La interfaz compatible con Bee que proporciona UartSBee puede usarse para conectar módulos Bee como **XBee, Bluetooth Bee, RF Bee, Wifi Bee, GPS Bee** al USB de PC. Esto hace más fácil la aplicación inalámbrica de PC basada en Bee. Como la mayoría de estos módulos Bee soportan interfaz UART, la programación de PC también es fácil.

#### Complementos Inalámbricos para MCU

Este tipo de arreglo también puede usarse para interfaz con UART de microcontroladores (Seeeduino).

Por favor consulte la documentación del módulo Bee para más información.

- XBee Conectado a UartSBee      
- BluetoothBee Conectado a UartSBee

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee-hardware.jpg)
![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/BluetoothBee_with_UartSBee.JPG)

###   Modo BitBang   ###

Una característica agradable de UartSBee v3.1 comparado con otros dispositivos USB-Serial basados en FT232RL es que todas las E/S de Bit-Bang están llevadas a los pines del header.

El modo Bit-Bang es una característica especial del FT232RL en la cual 8 líneas de E/S (**D0 - D7**) pueden usarse como líneas de E/S bidireccionales de propósito general. Tres modos Bit-Bang son soportados por FT232RL

- **Modo Bit-Bang Asíncrono** 

Cualquier dato escrito al dispositivo es sincronizado a los pines de salida configurados. La tasa de transferencia de datos se configura basada en el generador de tasa de baudios. En este modo cualquiera de las 8 líneas de E/S puede configurarse como entrada o salida.

- **Modo Bit-Bang Síncrono**

En este modo los datos se envían síncronamente. Una entrada se lee antes de que un byte de salida sea enviado al dispositivo. Por lo tanto para leer entrada, debe realizarse una operación de escritura.

- **Modo CBUS Bit-Bang**

Este es un modo especial que requiere reprogramación de la EEPROM del FT232RL. Esto usa señales C0 - C3.

El **Modo Bit-Bang** del **FT232RL** está bien documentado en la nota de aplicación[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Tabla: Mapeo de E/S Bit-Bang**

 |Señal UartSBee| Señal E/S BitBang|
 |---|---|
 |TxD|D0|
 |RxD|D1|
| RTS| D2|
| CTS| D3|
| DTR| D4|
| DSR| D5|
|DCD|D6|
 |RI| D7|

**Operación del Modo BitBang:**

Una operación simple del modo Bit-Bang Asíncrono se demuestra en el arreglo de protoboard de abajo en el cual el pin DTR (D4) está conectado a un LED. La tasa de parpadeo del LED es controlada por el programa de aplicación del lado de PC.

**Circuito LED Parpadeante **   
                                                         **E/S BitBang de UartSBee V3.1 - Lado Inferior**

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_bit-bang-DTR.jpg) ![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_Bottom_Bit_Bang.png)

El modo Bit-Bang requiere un controlador directo especial de FTDI llamado [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm). Este controlador necesita instalarse después de remover el controlador de Puerto COM Virtual del chip FT232RL. En GNU/Linux este controlador funciona en modo kernel. Como alternativa a D2XX está disponible un controlador Libre de Código Abierto [libFTDI](http://www.intra2net.com/en/developer/libftdi/). Este funciona en Windows, GNU/Linux y Mac OS. Funciona en modo usuario en GNU/Linux. Por lo tanto no hay necesidad de remover el controlador FT232RL existente.

libFTDI

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

libUSB libFTDI requiere libusb que puede descargarse de 

[http://www.libusb.org/](http://www.libusb.org/)

El código de ejemplo de abajo puede compilarse de manera similar a la de los archivos de ejemplo de libFTDI. Una manera fácil es copiar el contenido del código de abajo a uno de los archivos .c de ejemplo existentes y construir todo el controlador usando

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

El modo Bit-Bang del FT232RL puede utilizarse para construir puertos AVR ISP, JTAG, SPI e I2C. Consulte los enlaces externos.

Idea de Conexión AVR-ISP

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_ISP_Connection_BitBang.jpg)


##   Soporte   ##

Si tiene preguntas u otras mejores ideas de diseño, puede ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

##   Licencias   ##

Esta documentación está licenciada bajo la [Licencia Creative Commons Atribución-No comercial-Compartir igual 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/). El código fuente y las bibliotecas están licenciados bajo **GPL**/**LGPL**, consulte los archivos de código fuente para más detalles.

##   Seguimiento de Versión del Documento   ##

 |Revisión| Descripción| Editor| Fecha de Lanzamiento|
 |---|---|---|---|
 |V0.9d|Notas de Aplicación Detalladas|Visweswara R|23 de Diciembre de 2010|

##   Seguimiento de Versión del Hardware   ##

 |Revisión|Descripción|Fecha de Lanzamiento|
 |---|---|---|
 |UartSBee V3.1|Eliminar la conexión de Bluetooth en la parte inferior, Reducir factor de forma|02 de Sept, 2010|
| UartSBee V2.3| Corriente DC para pin de 3.3v, hasta 500mA proporcionados para mejor soporte de XBee pro| 21 de Jul, 2009|
| UartSBee V2.1| Lanzamiento público inicial| 01 de Feb, 2009|

##   Seguimiento de Errores   ##

El Seguimiento de Errores es el lugar donde puede publicar cualquier error que crea haber encontrado durante el uso. Por favor escriba lo que tiene que decir, sus respuestas nos ayudarán a mejorar nuestros productos.

##   Idea Adicional   ##

La Idea Adicional es el lugar para escribir sus ideas de proyecto sobre este producto, u otros usos que haya encontrado. O puede escribirlos en la página de Proyectos.


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="http://garden.seeedstudio.com/images/b/b4/Uartsbee31_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos   ##

Archivos de Esquemático y Placa [[[2]](http://garden.seeedstudio.com/images/b/b4/Uartsbee31_Schematic_Board.zip)];

##   Enlaces Externos   ##

- [[3]](https://www.ftdichip.com/Products/ICs/FT232R.htm)[Página del producto FTDI FT232RL](https://www.ftdichip.com/Products/ICs/FT232R.htm)
- [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) Controladores FTDI Virtual COM Port (VCP)

- [Controladores FTDI D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)
- [Nota de aplicación del modo Bit-Bang de FTDI](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Controladores de Código Abierto**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)
- [libUSB](http://www.libusb.org/)

**Otras Fuentes de información de aplicación del FT232RL**

- [Hackaday - Introducción al modo bit-bang](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)
- [Implementación JTAG del FT232R con OpenOCD ](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)
- [Ejemplo del Modo Bitbang SPI del FT232R](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)
- [Flasheando Arduino con modo bitbang del FT232R](http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html)

##   Cómo comprar   ##

Puedes comprar UartSBee V3.1 en: [https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109)


##   Licencias   ##

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

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
