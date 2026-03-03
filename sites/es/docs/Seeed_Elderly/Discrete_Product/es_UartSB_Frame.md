---
description:  Marco UartSB
title:  Marco UartSB
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/UartSB_Frame
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Top.jpg)

**Marco UartSB** es un adaptador de programación basado en USB para **Seeeduino Film** equipado con un conector FPC. El IC USB UART integrado **FT232RL** puede utilizarse para programar o comunicarse con MCUs con lógica de 3.3V. También funciona como una placa de conexión "FT232RL" de bajo voltaje (3.3V). **Marco UartSB** también proporciona conexiones para los pines de modo bit-bang del **FT232RL**. Estos pines de modo bit-bang (8 pines I/O) pueden utilizarse como reemplazo para aplicaciones que involucran el puerto paralelo de PC, que es escaso hoy en día.

**Modelo:[PGM31058P](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)**

## Características

- Interfaz serie compatible con USB 2.0.
- Conector FPC de 20 pines para conectar **Seeeduino Film**
- I/Os compatibles con 3.3V.
- Salidas de alimentación dual de 3.3V y 5V.
- Listo para modo bit-bang (8 I/Os serie o como SPI).
- LEDs para TxD, Rxd y alimentación.

## Ideas de aplicaciones  

- Programador para **Seeeduino Film** y placas compatibles con 3.3V.
- Adaptador USB a serie para comunicarse con dispositivos serie de nivel 3.3V.
- Programador para microcontroladores / CPLDs usando ISP (programación serie en circuito).
- Fuente de alimentación de 3.3V / 5V para aplicaciones MCU en protoboard.
- La alimentación de 5V puede utilizarse para cargar la batería del Seeeduino Film. (No usar conexión FPC para esta aplicación)
- Posibilidades infinitas como dispositivo paralelo basado en USB en modo bit-bang FT232RL - Se sabe que funciona como **AVR-ISP**, **JTAG** de baja velocidad con OpenOCD y como **I2C**

## Precauciones  

<font color="red">**
**</font>

- Conecte el Marco UartSB al Seeeduino Film solo como se muestra en la sección **Programador Seeeduino Film** "UartSB_Frame#Seeeduino_Film_Programmer").
- No use FFC (Cable Plano Flexible) para conectar directamente el Marco UartSB al Seeeduino Film. Esto invertiría la conexión FPC de 20 pines.

- Maneje el conector FPC de 20 pines con cuidado.

- Use **Marco UartSB** solo con I/Os de 3.3v.

## Esquemático  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Schematic_1.png)

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Scehmatic_2.png)

## Especificaciones  

### Especificaciones clave  

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">Microprocesador</th>
<td>FT232RL</td>
</tr>
<tr>
<th scope="row">Tamaño PCB</th>
<td>35mm x 20mm</td>
</tr>
<tr>
<th scope="row">Indicadores</th>
<td>POWER - LED verde, RX y TX - LEDs rojos</td>
</tr>
<tr>
<th scope="row">Fuente de alimentación</th>
<td>3.3V y 5V DC</td>
</tr>
<tr>
<th scope="row">Interfaz</th>
<td>USB Mini-B, conector de pines de paso 2.54mm</td>
</tr>
<tr>
<th scope="row">Puerto de programación Seeeduino</th>
<td>Conector FPC de 20 pines</td>
</tr>
<tr>
<th scope="row">Conectividad</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">Protocolo de comunicación</th>
<td>UART, I/O bit bang, SPI</td>
</tr>
</table>

### Características Eléctricas  

<table>
<tr>
<th>Especificación</th>
<th>Mínimo</th>
<th>Típico</th>
<th>Máximo</th>
<th>Unidad</th>
</tr>
<tr>
<td>Voltaje de entrada</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>Vdc</td>
</tr>
<tr>
<td>Consumo de corriente</td>
<td>-</td>
<td>-</td>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<td>Voltaje de salida</td>
<td>3.3</td>
<td>-</td>
<td>5</td>
<td>Vdc</td>
</tr>
</table>

## Definición de pines y especificaciones  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Outline_35mmx20mm.png)

<table>
<tr>
<th>Nombre del pad</th>
<th>Descripción</th>
</tr>
<tr>
<td width="100px">GND</td>
<td width="450px">Pin de tierra</td>
</tr>
<tr>
<td width="100px">3v3</td>
<td width="450px">Suministro de energía de 3.3V</td>
</tr>
<tr>
<td width="100px">5V</td>
<td width="450px">Suministro de energía de 5V desde puerto USB</td>
</tr>
<tr>
<td>RXD</td>
<td>Entrada de datos UART</td>
</tr>
<tr>
<td>TXD</td>
<td>Salida de datos UART</td>
</tr>
<tr>
<td width="100px">CTS</td>
<td width="450px">Señal UART Clear to Send</td>
</tr>
<tr>
<td width="100px">RTS</td>
<td width="450px">Señal UART Request to Send</td>
</tr>
<tr>
<td width="100px">DTR</td>
<td width="450px">Señal UART Data Terminal Ready</td>
</tr>
<tr>
<td width="100px">DCD</td>
<td width="450px">Señal UART Data Carrier Detect</td>
</tr>
<tr>
<td width="100px">DSR</td>
<td width="450px">Señal UART Data Set Ready</td>
</tr>
</table>

## Uso

### Programador de Seeeduino Film

**UartSB Frame** está diseñado exclusivamente para flashear **Seeeduino Film**. Funciona como una interfaz USB a Puerto Serie (puerto COM) cuando se conecta a PC. Este tipo de configuración puede usarse para comunicarse con un puerto serie de MCU. También es útil para programar un MCU que soporte ISP basado en UART.

- Si los controladores FT232RL no fueron instalados, sigue el procedimiento en la siguiente sección (configurando UartSB Frame).

- Conecta el Seeeduino Film al UartSB Frame como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Film_with_UartSB_Frame.jpg)

- Configura el tipo de placa a Arduino Pro o Pro Mini (3.3V, 8MHz) w/ATMega168 en Arduino IDE

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Arduino_Board_Selection.jpg)

- Sube el sketch.

#### Configurando UartSB Frame en **Windows**

- En SO Windows, la primera vez que conectes el dispositivo, podrías ser consultado por el controlador.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Detected_Windows.JPG)

Descarga e instala el controlador **Virtual COM port** desde el sitio web de FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- Se abre un asistente para instalar el controlador. Elige "Install from a list or specific location"

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_1.JPG)

- Elige la ruta del controlador descargado

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.JPG)

- Si has descargado un controlador sin firmar, aparece la siguiente ventana. Solo haz clic en "Continue Anyway"

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.1.JPG)

- El controlador de **UartSB Frame** se instala exitosamente. Windows asigna un nombre de puerto **COM** al **FT232RL** como **COM10**, **COM11** etc... Por favor verifica el nombre exacto en el Administrador de Dispositivos. En este caso "**COM16**" está asignado para UartSB Frame

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_3.JPG)

#### Configurando UartSB Frame en **GNU/Linux**

Todos los **SO GNU/Linux** modernos vienen con controladores FT232RL. Para verificar si UartSB Frame es detectado, ejecuta un comando **lsusb**. Debería aparecer una salida similar a la siguiente.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Lsub.png)

**GNU/Linux** asigna **/dev/ttyUSB0**, **/dev/ttyUSB1** etc... como nombre de dispositivo.

Para verificar el funcionamiento del puerto serie conecta los pines **TxD** y **RxD** del UartSB Frame y usa una aplicación de terminal como **cutecom** para configurar los parámetros del dispositivo como se muestra a continuación.

**Baudrate**:9600, **Data bits**:8, **Stop bits**:None y sin Handshake

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Txd_Rxd_connected.jpg)

Cualquier carácter escrito en terminal sería devuelto como eco como se muestra.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartsBee-CuteCom.png)

La misma funcionalidad puede verificarse en **Windows** - **Hyperterminal** también.

### Cargador de Batería para Seeeduino Film

La alimentación USB 5v disponible en el breakout **UartSB Frame** puede usarse para cargar la batería del **Seeeduino Film**.

- Solda el Conector de Alimentación del **Seeeduino Film** a 5V y GND del **UartSB Frame**.

- Conecta el conector de alimentación al jack **CHG**.

- Conecta la Batería al jack **BAT** del Seeeduino Film.

- Enciende el USB.

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Battery_Charging_with_UartSBFrame.jpg)

### Modo BitBang

Una característica agradable del UartSB Frame comparado con otros dispositivos USB-Serie basados en FT232RL es que todas las E/S de Bit-Bang son llevadas a los pines del header.

El modo Bit-Bang es una característica especial del FT232RL en la cual 8 líneas de E/S (**D0 - D7**) pueden usarse como líneas de E/S bidireccionales de propósito general. Tres modos Bit-Bang son soportados por FT232RL

- **Modo Bit-Bang Asíncrono**

Cualquier dato escrito al dispositivo es sincronizado a los pines de salida configurados. La tasa de transferencia de datos se configura basada en el generador de tasa de baudios. En este modo cualquiera de las 8 líneas de E/S puede configurarse como entrada o salida.

- **Modo Bit-Bang Síncrono**

En este modo los datos se envían síncronamente. Una entrada se lee antes de que un byte de salida sea enviado al dispositivo. Por lo tanto para leer entrada, debe realizarse una operación de escritura.

- **Modo CBUS Bit-Bang**

Este es un modo especial que requiere reprogramación de la EEPROM del FT232RL. Esto usa las señales **C0 - C3**.

El **Modo Bit-Bang** del **FT232RL** está bien documentado en la nota de aplicación[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Tabla: Mapeo de E/S Bit-Bang**

<table>
<tr>
<th>Señal UartSB Frame</th>
<th>Señal E/S BitBang</th>
</tr>
<tr>
<td>TxD</td>
<td>D0</td>
</tr>
<tr>
<td>RxD</td>
<td>D1</td>
</tr>
<tr>
<td>RTS</td>
<td>D2</td>
</tr>
<tr>
<td>CTS</td>
<td>D3</td>
</tr>
<tr>
<td>DTR</td>
<td>D4</td>
</tr>
<tr>
<td>DSR</td>
<td>D5</td>
</tr>
<tr>
<td>DCD</td>
<td>D6</td>
</tr>
<tr>
<td>RI</td>
<td>D7</td>
</tr>
</table>

**Operación en Modo BitBang:**

Una operación simple en modo Bit-Bang asíncrono se demuestra en el siguiente arreglo de protoboard en el cual el pin DTR (D4) está conectado a un LED. La velocidad de parpadeo del LED es controlada por el programa de aplicación del lado de la PC.

**Circuito LED Parpadeante**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_BitBang_demo.jpg)

Esta imagen de arriba fue hecha con Fritzing.org

**Pines de E/S Bit Bang (cabecera ISP) mostrados en la Capa Inferior**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Bottom.jpg)

El modo Bit-Bang requiere un controlador directo especial de FTDI llamado [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm). Este controlador necesita ser instalado después de remover el controlador de Puerto COM Virtual del chip FT232RL. En GNU/Linux este controlador se ejecuta en modo kernel. Como alternativa a D2XX está disponible un controlador de Código Abierto Libre [libFTDI](http://www.intra2net.com/en/developer/libftdi/). Este funciona en Windows, GNU/Linux y Mac OS. Se ejecuta en modo usuario en GNU/Linux. Por lo tanto no hay necesidad de remover el controlador FT232RL existente.

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB** libFTDI requiere libusb que puede ser descargado desde

[http://www.libusb.org/](http://www.libusb.org/)

El siguiente código de ejemplo puede ser compilado de manera similar a los archivos de ejemplo de libFTDI. Una manera fácil es copiar el contenido del código de abajo a uno de los archivos .c de ejemplo existentes y construir todo el controlador usando

./configure

make

 **Ejemplo de Código**

Blinky.C: UartSBee v3.1 (FT232RL) modo Bit-Bang - Blinky.

Circuito:
Conectar TXD al Ánodo del LED, Conectar un extremo de la resistencia a GND y el otro extremo
al Cátodo del LED

```c
#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// 8 bit pin mask for I/O pin </span>
#define TXD 0x01  
#define RXD 0x02  
#define RTS 0x04  
#define CTS 0x08  
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>;
#include <ftdi.h>;    

int main
{ 
    unsigned char ouputState =0;
    struct ftdi_context ftdic;

    /* 1. Initialize ftdi device context */
    ftdi_init(&ftdic);  

    /* 2. Open the device based of VID/PID pair */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) &lt<span ;>0)
    {
        printf("Unable to open UartSBs Frame");
        return1;}

    /* 3. Enable Bit-Bang mode with for DTR line  */
    ftdi_set_bitmode(&ftdic, TXD, BITMODE_BITBANG);

    /* 4. Blink LED every 1 second */
    while(1)</span> <span class="br0">{
        ouputState ^= TXD;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

El modo Bit-Bang del FT232RL puede utilizarse para construir puertos AVR ISP, JTAG, SPI e I2C. Consulte los enlaces externos.

## Galería de Imágenes

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSBFrame_SeeeduinoFilm_Programming.jpg)

## FAQ  

Por favor, liste su pregunta aquí:

## Soporte  

Si tiene preguntas u otras mejores ideas de diseño, puede ir a nuestro [foro](https://www.seeedstudio.com/forum) o **desear** discutir.

## Rastreador de Versiones del Documento  

<table>
<tr>
<th>Revisión</th>
<th>Descripción</th>
<th>Editor</th>
<th>Fecha de Lanzamiento</th>
</tr>
<tr>
<td>V0.9b</td>
<td>Notas de Aplicación Detalladas</td>
<td>Visweswara R</td>
<td>22 Feb 2010</td>
</tr>
</table>

## Rastreador de Versiones de Hardware  

<table>
<tr>
<th>Revisión</th>
<th>Descripción</th>
<th>Fecha de Lanzamiento</th>
</tr>
<tr>
<td>UartSBs Frame</td>
<td>0.9b</td>
<td>22 de febrero, 2010</td>
</tr>
</table>

## Rastreador de Errores  

El Rastreador de Errores es el lugar donde puedes publicar cualquier error que creas haber encontrado durante el uso. Por favor escribe lo que tengas que decir, tus respuestas nos ayudarán a mejorar nuestros productos.

## Idea Adicional  

La Idea Adicional es el lugar para escribir tus ideas de proyecto sobre este producto, u otros usos que hayas encontrado. O puedes escribirlos en la página de Proyectos.

## Recursos  

- **[Eagle]**[Archivos de Esquemático y Placa en Eagle](https://wiki.seeedstudio.com/es/images/d/d3/UartSBs_Frame_Schematic_Board.zip)

- **[PDF]** [Esquemático PDF](https://wiki.seeedstudio.com/es/images/9/91/UartSBs_0.9b_Schematic.pdf)

## Cómo comprar  

Haz clic aquí para comprar [UartSB Frame](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)

## Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/).  El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Enlaces Externos  

- **[[2]](https://www.ftdichip.com/Products/ICs/FT232R.htm)**[Página del producto FTDI FT232RL](https://www.ftdichip.com/Products/ICs/FT232R.htm)

- [[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) Controladores FTDI Virtual COM Port (VCP)
- [Controladores FTDI D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)

- [Nota de aplicación del modo Bit-Bang de FTDI](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**Controladores de Código Abierto**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

- [libUSB](http://www.libusb.org/)

**Otras Fuentes de información de aplicación FT232RL**

- [Hackaday - Introducción al modo bit-bang](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

- [Implementación JTAG FT232R con OpenOCD](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

- [Ejemplo del Modo Bitbang SPI FT232R](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
