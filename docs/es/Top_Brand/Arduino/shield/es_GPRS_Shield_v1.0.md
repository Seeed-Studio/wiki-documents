---
description:  GPRS Shield V1.0
title:  GPRS Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/GPRS_Shield_v1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: GPRS Shield V1.0
category: Shield
bzurl: https://www.seeedstudio.com/depot/gprs-shield-p-779.html
oldwikiname:  GPRS Shield V1.0
prodimagename: gprs-shield-p-779.html
surveyurl: https://www.research.net/r/GPRS_Shield_V1
sku:  103030013
--- -->

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_shield_v1.4.jpg)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

El GPRS Shield te proporciona una forma de usar la red de telefonía celular GSM para recibir datos desde una ubicación remota. El shield te permite lograr esto a través de cualquiera de los tres métodos:

* Servicio de Mensajes Cortos
* Audio
* Servicio GPRS

El GPRS Shield es compatible con todas las placas que tienen el mismo factor de forma (y distribución de pines) que una placa Arduino estándar. El GPRS Shield puede configurarse y controlarse a través de UART mediante comandos AT simples. Basado en el módulo SIM900 de SIMCOM, el GPRS Shield es como un teléfono celular. Además de las características de comunicación, el GPRS Shield tiene 12 GPIOs, 2 PWMs y un ADC.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

## Versión

| Revisión    | Descripciones     |Lanzamiento    |
| :------------- | :------------- |:------------- |
| v0.9b      | Lanzamiento público inicial (beta)       |3 de marzo, 2011       |
| v1.2      | Añadido puerto de software para encender/apagar el SIM90       |2 de diciembre, 2011       |
| v1.4     | Rediseño del circuito de fuente de alimentación, nueva disposición del PCB      |30 de agosto, 2012       |

## Características

* Basado en el Módulo SIM900 de [SIMCom](http://simcomm2m.com/En/)
* Cuatro Bandas 850 / 900/ 1800 / 1900 MHz - funcionaría en redes GSM en todos los países del mundo.
* Control por comandos AT - Comandos Estándar: GSM 07.07 &amp; 07.05 | Comandos Mejorados: Comandos AT SIMCOM.
* Servicio de Mensajes Cortos - para que puedas enviar pequeñas cantidades de datos a través de la red (ASCII o hexadecimal crudo).
* Stack TCP/UDP integrado - te permite subir datos a un servidor web.
* Conectores de altavoz y auriculares - para que puedas enviar señales DTMF o reproducir grabaciones como un contestador automático.
* Portador de tarjeta SIM y Antena GSM - presentes en la placa.
* 12 GPIOs, 2 PWMs y un ADC (todos con lógica de 2.8 voltios) - para aumentar tu Arduino.
* Bajo consumo de energía - 1.5mA (modo de suspensión)
* Rango de Temperatura Industrial - -40°C a +85 °C

## Ideas de Aplicación

* Aplicaciones M2M (Máquina a Máquina) - Para transferir datos de control usando SMS o GPRS entre dos máquinas ubicadas en dos fábricas diferentes.
* Control remoto de electrodomésticos - Envía SMS para encender o apagar tu lavadora en casa mientras estás en tu oficina.
* Estación meteorológica remota o una Red de Sensores Inalámbricos - Hazlo con [Seeeduino Stalker](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_V3.1/) y crea un nodo sensor que sea capaz de transferir datos de sensores (como de una estación meteorológica - temperatura, humedad, etc.) a un servidor web (como [pachube.com](http://www.pachube.com)).
* Sistema de Respuesta de Voz Interactiva - Combina el GPRS Shield con un Decodificador MP3 y Decodificador DTMF (además de un Arduino) para crear un [Sistema de Respuesta de Voz Interactiva (IVRS)](https://en.wikipedia.org/wiki/Interactive_voice_response).
* Sistema de Seguimiento de Vehículos - Combina el GPRS Shield con un Arduino y módulo GPS. Luego instálalo en tu auto y publica tu ubicación en vivo en internet. Puede usarse como una alarma antirrobo automotriz.

## Precauciones

* Asegúrate de que tu tarjeta SIM esté desbloqueada.
* El producto se proporciona sin una carcasa aislante. Por favor, observa las precauciones ESD especialmente en clima seco (baja humedad).
* La configuración predeterminada de fábrica del UART del GPRS Shield es 19200 bps 8-N-1. (Se puede cambiar mediante comandos AT).
* Cuando uses el GPRS Shield con [Seeeduino Stalker](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_V3.1/), por favor recuerda desmontar el Jumper **OK_READ** (es decir, abrirlo). Esto desconectará el pin OK del IC Cargador de Batería del Pin Digital 7 del microcontrolador y por lo tanto permitirá la comunicación sin obstáculos con el GPRS Shield usando la Librería NewSoftSerial.

## Especificaciones

Para las Especificaciones del SIM900, por favor consulta este archivo PDF: [SIM900_SPEC.pdf](https://wiki.seeedstudio.com/es/images/0/0b/SIM900_SPEC.pdf)

<table  cellspacing="0" width="80%">
<tr>
  <th scope="col">Elemento</th>
  <th scope="col">Mín</th>
  <th scope="col">Típico</th>
  <th scope="col">Máx</th>
  <th scope="col">Unidad</th>
</tr>
<tr>
  <th scope="row">Voltaje</th>
  <td>4.8</td>
  <td>5.0</td>
  <td>5.2</td>
  <td>VDC</td>
</tr>
<tr>
  <th scope="row">Corriente</th>
  <td>/</td>
  <td>50</td>
  <td>450</td>
  <td>mA</td>
</tr>
<tr>
  <th scope="row">Dimensión(con antena)</th>
  <td colspan="3">110x58x19</td>
  <td>mm</td>
</tr>
<tr>
  <th scope="row">Peso Neto</th>
  <td colspan="3">76±2</td>
  <td>g</td>
</tr>
</table>

## Función de la Interfaz

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_Shield_interface.png)

* **Selección de alimentación** - selecciona la fuente de alimentación para el shield GPRS (alimentación externa o 5v de arduino)
* **Conector de alimentación** - conecta a fuente de alimentación externa de 4.8~5VDC
* **Interfaz de antena** - conecta a antena externa
* **Selección de puerto serie** - selecciona puerto serie por software o puerto serie por hardware para conectar al Shield GPRS
* **Serie por hardware** - D0/D1 de Arduino/Seeeduino
* **Serie por software** - D7/D8 de Arduino/Seeeduino únicamente
* **LED de estado** - indica si la alimentación del SIM900 está encendida
* **Luz de red** - indica el estado de la conexión del SIM900 a la red
* **UART del SIM900** - pines UART del SIM900 disponibles externamente
* **Micrófono** - convierte sonido en una señal eléctrica
* **Altavoz** - convierte señal eléctrica en sonido
* **GPIO, PWM y ADC del SIM900** - pines GPIO, PWM y ADC del SIM900 disponibles externamente
* **Botón de encendido** - enciende y apaga el SIM900

### Uso de pines en Arduino

* **D0** - No utilizado si seleccionas puerto serie por software para comunicarte con el Shield GPRS
* **D1** - No utilizado si seleccionas puerto serie por software para comunicarte con el Shield GPRS
* **D7** - Utilizado si seleccionas puerto serie por software para comunicarte con el Shield GPRS
* **D8** - Utilizado si seleccionas puerto serie por software para comunicarte con el Shield GPRS
* **D9** - Utilizado para control por software del encendido o apagado del SIM900
* **Nota:** A4 y A5 están conectados a los pines I2C del SIM900. El SIM900 no puede ser accedido vía I2C.

## Primeros Pasos

### Estado de las Luces

<table>
  <tbody>
    <tr>
      <th>LED</th>
      <th>Estado</th>
      <th>Función</th>
    </tr>
    <tr>
      <td width="300px" rowSpan={2}>Estado</td>
      <td width="300px">Apagado</td>
      <td width="400px">Alimentación Apagada</td>
    </tr>
    <tr>
      <td width="300px">Encendido</td>
      <td width="400px">Alimentación Encendida</td>
    </tr>
    <tr>
      <td width="300px" rowSpan={4}>Luz de red</td>
      <td width="300px">Apagado</td>
      <td width="400px">SIM900 no está funcionando</td>
    </tr>
    <tr>
      <td width="300px">64ms Encendido/800ms Apagado</td>
      <td width="400px">SIM900 no encuentra la red</td>
    </tr>
    <tr>
      <td width="300px">64ms Encendido/3000ms Apagado</td>
      <td width="400px">SIM900 encuentra la red</td>
    </tr>
    <tr>
      <td width="300px">64ms Encendido/300ms Apagado</td>
      <td width="400px">Comunicación GPRS</td>
    </tr>
  </tbody>
</table>

### Instalación del hardware

* **Inserte una tarjeta SIM desbloqueada en el Soporte de Tarjeta SIM** - Soporte de 6 pines para tarjetas SIM. Tanto las tarjetas SIM de 1.8 voltios como las de 3.0 voltios son compatibles con el SIM900 - el tipo de voltaje de la tarjeta SIM se detecta automáticamente.
  * Inserte la tarjeta SIM en el soporte
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Insert_an_unlock_SIM_card.jpg)
  * Bloquee el soporte de la tarjeta SIM
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/SIM_card_inserted.jpg)

* **Asegúrese de que la almohadilla de la antena esté abrochada correctamente** - Se presenta un conector RF coaxial miniatura en la placa del GPRS Shield para conectar una antena GSM. El conector presentado en el GPRS Shield se llama [conector U.FL](https://en.wikipedia.org/wiki/Hirose_U.FL). La antena GSM que se adjunta al GPRS Shield tiene un [conector SMA](https://en.wikipedia.org/wiki/SMA_connector) (y no un conector RP-SMA) en él. También se suministra un cable de conexión con el GPRS Shield para conectar la antena a la placa. La topología de conexión se muestra en el diagrama a continuación:

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/The_antenna_pad.jpg)

* **Ensamble la antena GSM**

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Assemble_GSM_antenna.jpg)

* **Fuente de alimentación para el shield GPRS** - Seleccione la fuente de alimentación a través del interruptor en la placa, puede seleccionar la fuente de alimentación de 5V de arduino o fuente de alimentación externa. Seleccione la fuente de 5V de Arduino como se muestra en la siguiente imagen:

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_select_5v_of_arduino.jpg)

* **Configurar puerto de comunicación** - El shield GPRS puede ser controlado a través del puerto serie por hardware de Arduino o puerto serie por software, Seleccione el puerto serie por software con los jumpers:

|GPRS se comunica con arduino por serie por software| GPRS se comunica con arduino por serie por hardware|
|---|---|
|![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_software_serial.jpg) |![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_hardware_serial.jpg) |

* **Conectar al Arduino UNO R3** - El GPRS Shield, como cualquier otro shield bien diseñado, es apilable como se muestra en la foto de abajo.

* GPRS Shield + Arduino UNO R3
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Plug_GPRS_to_arduino.jpg)

### Encender y apagar

* **Activación por hardware**
Presiona la tecla de encendido durante aproximadamente 2 segundos para encender o apagar.
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Button_to_power_up_and_down.jpg)

* **Activación por software**
Puedes encender/apagar el shield a través del pin D9 de Arduino añadiendo activación por software en tu firmware.

:::note
El JP para el pin 9 en el shield debe estar soldado para poder usar el encendido/apagado por software.
:::

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Shixu.jpg)

En cuanto al tiempo de encendido/apagado, se necesita un pulso de >1s para activar el encendido, y se necesita un retraso de >3.2s para que el tiempo se estabilice. El siguiente código en tu firmware es necesario para encender/apagar el shield sin presionar el botón:

```
void powerUpOrDown()
{
    pinMode(9, OUTPUT);
    digitalWrite(9,LOW);
    delay(1000);
    digitalWrite(9,HIGH);
    delay(2000);
    digitalWrite(9,LOW);
    delay(3000);
}
```

### Comenzando - Diversión con Comandos AT

El GPRS Shield viene con todos los accesorios que necesitas para comenzar a enviar datos a través de la red GSM, excepto una placa Arduino y una tarjeta SIM GSM. Si quieres hacer llamadas de voz, también necesitarías un auricular con micrófono.

**Paso 1: Creando una configuración de prueba para el GPRS Shield**

Cuando recibiste tu GPRS Shield, ¿cuál sería lo primero que querrías hacer con él? ¿Enviar un mensaje de texto (SMS)? ¿o llamar a alguien (auricular requerido)? Puedes hacer todo esto comunicándote con el GPRS Shield a través de Comandos AT - que es un lenguaje especial que entiende. Los Comandos AT son comandos textuales simples enviados al módem GPRS a través de su interfaz serial (UART), por lo que puedes usar cualquier software de terminal serial para comunicarte con él.

:::note:
Casi todos los comandos AT deben enviarse seguidos de **retorno de carro** y necesitas seleccionar la opción "+CR" en el terminal del puerto serial.
:::

Para hacer experimentos con comandos AT, necesitarías una forma de encender y comunicarte con tu GPRS Shield. La mejor manera de hacer esto es usando una placa Arduino Duemilanove descrita a continuación. Los mismos pasos son aplicables para [Seeeduino](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/) o [Seeeduino Stalker](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_V3.1/).

* Sigue los pasos de instalación de hardware anteriores para configurar el sistema de hardware;
* Asegúrate de que los jumpers GPRS_TX &amp; GPRS_RX en el GPRS Shield estén montados en la posición SWSerial - así GPRS_TX se conectará a D7(RX) y GPRS_RX a D8(TX).
* Conecta el Arduino Duemilanove (o Seeeduino) a tu computadora mediante un cable USB.
* El microcontrolador ATmega328P en la placa Duemilanove tiene solo una UART que se usa para comunicarse con la PC. Lo que necesitamos es un Sketch de Arduino ejecutándose dentro del ATmega328P que emule un segundo puerto serial (UART) usando serial por software en los pines digitales D8 y D7. Toda la comunicación pasará a través del puerto serial por software y el puerto serial de hardware real. Al hacer esto, todos los datos provenientes de la computadora (conectada a la UART de hardware real) serían enrutados al GPRS Shield (conectado a la UART por software). Entonces podríamos emitir comandos AT para controlar el GPRS Shield. El diagrama de bloques que describe este esquema se muestra a continuación.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_aurduino_uart.jpg)

Para desarrollar tal programa, necesitamos usar la biblioteca SoftwareSerial. Aquí está el código de demostración.

```
//Serial Relay - Arduino will patch a
//serial link between the computer and the GPRS Shield
//at 19200 bps 8-N-1
//Computer is connected to Hardware UART
//GPRS Shield is connected to the Software UART

#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; // buffer array for data recieve over serial port
int count=0;     // counter for buffer array
void setup()
{
    GPRS.begin(19200);               // the GPRS baud rate
    Serial.begin(19200);             // the Serial port of Arduino baud rate.

}

void loop()
{
    if (GPRS.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while(GPRS.available())          // reading data into char array
        {
            buffer[count++]=GPRS.read();     // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);            // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero


    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
    GPRS.write(Serial.read());       // write it to the GPRS shield
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

* Sube el sketch a la placa Arduino.
* Descarga y descarga la [herramienta serial](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Sscom32E.zip) si no tienes una. Elige el puerto COM correcto para Arduino, y configúralo para operar a **19200** 8-N-1 y luego haz clic en "Open COM".
* Puedes encender o apagar el SIM900 presionando el botón durante aproximadamente 2 segundos. Después de encender, el LED rojo se encenderá, el verde al lado parpadeará y el shield habrá encontrado la red si parpadea cada 3 segundos.
Aquí está el botón Power_on_and_off.

 ![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Power_on_and_off_for_SIM900.jpg)

 También, deberías ver mensajes del shield como
 `RDY` `+CFUN: 1` `+CPIN: READY` `Call Ready` en el monitor serial. Si no puedes ver los mensajes en el monitor serial, deberías hacer clic en la opción "send new" que añadirá retorno de carro al final del comando AT y luego enviar el comando AT "AT+IPR=19200" para establecer la velocidad de baudios del SIM900.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_set_baud_rate.jpg)

 Ten en cuenta que la velocidad de baudios del shield GPRS y el puerto serial del Arduino deben ser iguales antes de configurar la velocidad de baudios del shield GPRS.

* Ahora, haz clic en la opción "send new", luego escribe y envía "AT" (sin las comillas) a la placa Arduino. El Shield GPRS debería responder enviando un "OK" de vuelta. Esto significa que has configurado exitosamente tu Shield GPRS. Puedes experimentar con varios Comandos AT ahora. (Si estás usando el Monitor Serial disponible en el IDE de Arduino, deberías establecer el final de línea a "Carriage return" junto con una velocidad de baudios de 19200).

**Paso 2: Enviando un mensaje de texto (SMS)**

Ahora que nuestro setup de prueba está listo, juguemos con algunos Comandos AT manualmente antes de pasar a programar el Arduino para hacer esto. Intentemos enviar un SMS para empezar.

* Crea el setup como se describe en el Paso 1 arriba.
* A través de tu software de terminal serial, envía **AT+CMGF=1** y presiona la tecla Enter. El Shield GPRS puede enviar SMSes en dos modos: modo Texto y modo PDU (o binario). Como queremos enviar un mensaje legible por humanos, seleccionaremos el modo texto. El Shield GPRS responderá con un **OK**.
* Haz clic en la opción "send new" y envía **AT+CMGS="+918446043032"**. Esto instruirá al Shield GPRS para comenzar a aceptar texto para un nuevo mensaje, los números significan el número de teléfono especificado (reemplaza el número con el número de teléfono del teléfono objetivo). El Shield GPRS enviará un '_**&gt;'**_ para recordarte que escribas el mensaje. Ten en cuenta que los números de teléfono en cualquier Comando AT deben seguir el formato [E.123](https://en.wikipedia.org/wiki/E.123).

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_send_a_message.jpg)

* Comienza a escribir tu mensaje, después de terminar de escribir, haz clic en la opción "send hex" y luego envía un hex: **1A**. El módem aceptará el mensaje y responderá con un **OK**. Unos momentos después, el mensaje debería ser recibido en el teléfono cuyo número habías especificado. Puedes referirte a la imagen de abajo.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Gprssendsms1.jpg)

:::note
Si sigues los pasos como se especifica arriba, no puedes recibir el mensaje en el teléfono objetivo, entonces podría ser que necesites establecer el número del Centro de Mensajes SMS.
:::

Envía el comando **AT+CSCA="+919032055002"** y presiona la tecla Enter. Envía este comando entre los comandos AT+CMGF y AT+CMGS. Reemplaza el número de teléfono especificado en el comando arriba con el número del Centro SMS de tu Proveedor de Servicio GSM.

El número del centro de mensajes es específico para cada proveedor de servicio (por ejemplo +919032055002 es el número del centro de mensajes para _Tata DoCoMo, Pune, India_). Puedes obtener el número del centro de mensajes llamando al centro de atención al cliente del Proveedor de Servicio GSM y preguntándoles por él.

**Paso 3: Explorando más**

Ahora que has probado cómo funcionan los Comandos AT, puedes probar otros comandos antes de pasar a desarrollar sketches para Arduino usando el Shield GPRS.

Esto implica crear un sketch para enviar esta misma secuencia de Comandos AT (en tu nombre) por el puerto serial al Shield GPRS para realizar la misma tarea de enviar un SMS, hacer una llamada o enviar datos a través de una conexión GPRS.

Puedes revisar el [manual de referencia de Comandos AT](https://wiki.seeedstudio.com/es/images/a/a0/SIM900_ATC_V1_00.pdf) para descifrar la secuencia de comandos. Si desarrollas un sketch de Arduino, encuentras que el Shield GPRS no actúa como esperas, entonces necesitarás verificar tus Comandos AT y su secuencia. Para hacer esto, recarga el sketch de relé serial adjunto arriba en la sección de inicio en el ATmega328P y escribe los Comandos AT manualmente y verifica la salida. Las respuestas enviadas de vuelta por el Shield GPRS te ayudarán a depurar la secuencia de Comandos AT.

:::note
Un programa en C para realizar la misma tarea también ha sido desarrollado y adjuntado: [Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip").
:::

El programa fue desarrollado en una PC con Windows. [AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725) fue usado como el IDE y [WinAVR](http://winavr.sourceforge.net/) fue usado como el compilador. El archivo ZIP contiene un Proyecto de AVRStudio4. El compilador de C (WinAVR) generará un Intel Hex (.hex). Para subir este archivo .hex a una placa Arduino fuera del IDE de Arduino requeriría un programa que sea capaz de comunicarse con el bootloader de la placa Arduino. [XLoader](http://xloader.russemotto.com/) es tal programa que funciona en Windows y puede subir archivos .hex generados por varios compiladores a una Placa Arduino.

### Notas de la librería SoftwareSerial

Con Arduino 1.0 deberías poder usar la librería SoftwareSerial incluida con la distribución (en lugar de NewSoftSerial). Sin embargo, debes estar consciente de que el buffer reservado para mensajes entrantes está codificado a 64 bytes en el encabezado de la librería, "SoftwareSerial.h":

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

Esto significa que si el módulo GPRS recibe más datos que el buffer, es probable que los pierdas con un desbordamiento del buffer! Por ejemplo, al leer un SMS del módulo con "AT+CMGR=xx" (xx es el índice del mensaje), puede que ni siquiera veas la parte del mensaje porque la información de encabezado precedente (como el número de teléfono y la hora) ocupa mucho espacio. La solución parece ser cambiar manualmente **_SS_MAX_RX_BUFF** a un valor más alto (¡pero razonable para que no uses toda tu memoria!)

La [biblioteca Softwareserial](https://arduino.cc/hu/Reference/SoftwareSerial) tiene las siguientes limitaciones (tomadas de la página de arduino). Si usas múltiples puertos serie por software, solo uno puede recibir datos a la vez.
Esto significa que si intentas agregar otro dispositivo serie como el LCD serie grove, puedes obtener errores de comunicación a menos que elabores tu código cuidadosamente.

## Ejemplos de Código Fuente Simples

El código de demostración a continuación es para que el Xduino envíe mensajes SMS, realice una llamada de voz, envíe una solicitud http a un sitio web y suba datos al pachube. Ha sido probado en Arduino Duemilanove y también funciona en cualquier plataforma compatible, ten en cuenta que este sketch usa la UART por software del ATmega328P. por favor sigue los pasos a continuación para ejecutar este sketch.

1. Retira el Shield GPRS, descarga este sketch en tu Arduino.
2. Desconecta el Xduino del puerto USB para quitar la fuente de alimentación.
3. Configura los jumpers del Puerto Serie en el Shield GPRS en posición SWserial, para usar el puerto Serie Soft de Arduino.
4. Conecta la antena al Shield GPRS e inserta la Tarjeta SIM.
5. Monta el Shield GPRS en Arduino.
6. Conecta el Arduino a la computadora por USB, y abre tu software de terminal serie favorito en la computadora, elige el puerto COM para Arduino, configúralo para operar a 19200 8-N-1.
7. Escribe comandos en el terminal para ejecutar diferentes funciones, hay 4 funciones en la demostración:

    * a. Si ingresas **'t'**, la demostración enviará un mensaje SMS a otro teléfono celular que definas(necesitas configurar el número en el código);
    * b. Si ingresas **'d'**, el programa marcará una llamada al otro teléfono celular que definas(necesitas configurar el número en el código);
    * c. Si ingresas **'h'**, enviará una solicitud http a una web a la que quieras acceder(necesitas configurar la dirección web en el código), retornará una cadena del sitio web si va correctamente;
    * d. Si ingresas **'s'**, subirá los datos al pachube(para detalles puedes referirte a la explicación en el código). Te recomiendo encarecidamente que ingreses 'h' antes de ingresar 's', porque subir datos al pachube necesita hacer algunas configuraciones, después de ejecutar la función de enviar una solicitud http, la configuración será ejecutada.

8. Si el programa retorna error en el terminal después de que escribas el comando, no te preocupes, solo intenta ingresar el comando de nuevo.

```cpp
/*Note: this code is a demo for how to using gprs shield to send sms message, dial a voice call and
  send a http request to the website, upload data to pachube.com by TCP connection,

  The microcontrollers Digital Pin 7 and hence allow unhindered
  communication with GPRS Shield using SoftSerial Library.
  IDE: Arduino 1.0 or later
  Replace the following items in the code:
  1.Phone number, don't forget add the country code
  2.Replace the Access Point Name
  3. Replace the Pachube API Key with your personal ones assigned
  to your account at cosm.com
  */


#include <SoftwareSerial.h>
#include <String.h>

SoftwareSerial mySerial(7, 8);

void setup()
{
    mySerial.begin(19200);               // the GPRS baud rate
    Serial.begin(19200);    // the GPRS baud rate
    delay(500);
}

void loop()
{
    //after start up the program, you can using terminal to connect the serial of gprs shield,
    //if you input 't' in the terminal, the program will execute SendTextMessage(), it will show how to send a sms message,
    //if input 'd' in the terminal, it will execute DialVoiceCall(), etc.

    if (Serial.available())
    switch(Serial.read())
    {
        case 't':
        SendTextMessage();
        break;
        case 'd':
        DialVoiceCall();
        break;
        case 'h':
        SubmitHttpRequest();
        break;
        case 's':
        Send2Pachube();
        break;
    }
    if (mySerial.available())
    Serial.write(mySerial.read());
}

///SendTextMessage()
///this function is to send a sms message
void SendTextMessage()
{
    mySerial.print("AT+CMGF=1\r");    //Because we want to send the SMS in text mode
    delay(100);
    mySerial.println("AT + CMGS = \"+86138xxxxx615\"");//send sms message, be careful need to add a country code before the cellphone number
    delay(100);
    mySerial.println("A test message!");//the content of the message
    delay(100);
    mySerial.println((char)26);//the ASCII code of the ctrl+z is 26
    delay(100);
    mySerial.println();
}

///DialVoiceCall
///this function is to dial a voice call
void DialVoiceCall()
{
    mySerial.println("ATD + +86138xxxxx615;");//dial the number
    delay(100);
    mySerial.println();
}

///SubmitHttpRequest()
///this function is submit a http request
///attention:the time of delay is very important, it must be set enough
void SubmitHttpRequest()
{
    mySerial.println("AT+CSQ");
    delay(100);

    ShowSerialData();// this code is to show the data from gprs shield, in order to easily see the process of how the gprs shield submit a http request, and the following is for this purpose too.

    mySerial.println("AT+CGATT?");
    delay(100);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"CONTYPE\",\"GPRS\"");//setting the SAPBR, the connection type is using gprs
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"APN\",\"CMNET\"");//setting the APN, the second need you fill in your local apn server
    delay(4000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=1,1");//setting the SAPBR, for detail you can refer to the AT command mamual
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+HTTPINIT"); //init the HTTP request

    delay(2000);
    ShowSerialData();

    mySerial.println("AT+HTTPPARA=\"URL\",\"www.google.com.hk\"");// setting the httppara, the second parameter is the website you want to access
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+HTTPACTION=0");//submit the request
    delay(10000);//the delay is very important, the delay time is base on the return from the website, if the return datas are very large, the time required longer.
    //while(!mySerial.available());

    ShowSerialData();

    mySerial.println("AT+HTTPREAD");// read the data from the website you access
    delay(300);

    ShowSerialData();

    mySerial.println("");
    delay(100);
}

///send2Pachube()///
///this function is to send the sensor data to the pachube, you can see the new value in the pachube after execute this function///
void Send2Pachube()
{
    mySerial.println("AT+CGATT?");
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CSTT=\"CMNET\"");//start task and setting the APN,
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CIICR");//bring up wireless connection
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIFSR");//get local IP adress
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSPRT=0");
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIPSTART=\"tcp\",\"api.cosm.com\",\"8081\"");//start up the connection
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSEND");//begin send data to remote server
    delay(4000);
    ShowSerialData();
    String humidity = "1031";//these 4 line code are imitate the real sensor data, because the demo did't add other sensor, so using 4 string variable to replace.
    String moisture = "1242";//you can replace these four variable to the real sensor data in your project
    String temperature = "30";//
    String barometer = "60.56";//
    mySerial.print("{\"method\": \"put\",\"resource\": \"/feeds/42742/\",\"params\"");//here is the feed you apply from pachube
    delay(500);
    ShowSerialData();
    mySerial.print(": {},\"headers\": {\"X-PachubeApiKey\":");//in here, you should replace your pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print(" \"_cXwr5LE8qW4a296O-cDwOUvfddFer5pGmaRigPsiO0");//pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print("jEB9OjK-W6vej56j9ItaSlIac-hgbQjxExuveD95yc8BttXc");//pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print("Z7_seZqLVjeCOmNbEXUva45t6FL8AxOcuNSsQS\"},\"body\":");
    delay(500);
    ShowSerialData();
    mySerial.print(" {\"version\": \"1.0.0\",\"datastreams\": ");
    delay(500);
    ShowSerialData();
    mySerial.println("[{\"id\": \"01\",\"current_value\": \"" + barometer + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"02\",\"current_value\": \"" + humidity + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"03\",\"current_value\": \"" + moisture + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"04\",\"current_value\": \"" + temperature + "\"}]},\"token\": \"lee\"}");


    delay(500);
    ShowSerialData();

    mySerial.println((char)26);//sending
    delay(5000);//waitting for reply, important! the time is base on the condition of internet
    mySerial.println();

    ShowSerialData();

    mySerial.println("AT+CIPCLOSE");//close the connection
    delay(100);
    ShowSerialData();
}

void ShowSerialData()
{
    while(mySerial.available()!=0)
    Serial.write(mySerial.read());
}
```

## FAQ

Aquí está el FAQ del GPRS Shield que lista las preguntas frecuentes, por favor léelo antes de usar:

* ¿Por qué el GPRS Shield no puede funcionar con Stalker v2.1/2.0 a través del puerto serie por software (D7/D8)?

    Stalker v2.1/2.0 ha usado los Pines Digitales (D7/D8), necesitas conectar GPRS_TX/GPRS_RX a otros Pines Digitales como puerto serie por software. Y este problema fue resuelto en la versión Stalker 2.2.

* ¿Por qué el I2C no se puede usar cuando ensamblo el GPRS Shield al Stalker u otras placas Arduino?

    Porque el GPRS Shield entra en conflicto con otros módulos a través de I2C. El GPRS Shield no usa puerto I2C, puedes desconectar la conexión del puerto I2C del SIM900 a A4/A5.

## Proyectos Relacionados

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

Esta es una demostración hecha con GPRS Shield V2.0.

Con esta demostración, hacemos un teléfono móvil llamado Arduino Phone usando Arduino, shield GPRS Shield y otros módulos.

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemático GPRS Shield v1.4 en formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield_Schematic.pdf)

* [PCB GPRS Shield v1.4 en formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield%20v1.4.pdf)
* [Esquemático y PCB GPRS Shield v1.4 en formato eagle](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip)
* [Comandos AT v1.00](https://wiki.seeedstudio.com/es/images/a/a0/SIM900_ATC_V1_00.pdf)
* [Comandos AT v1.03](https://wiki.seeedstudio.com/es/images/a/a8/SIM900_AT_Command_Manual_V1.03.pdf)
* [Comandos AT v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/AT_Commands_v1.11.pdf)
* [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
* [Diseño de Hardware SIM900](https://wiki.seeedstudio.com/es/images/e/e3/SIM900_HD_V1.05.pdf)
* [Firmware y herramienta SIM900 (firmware:1137B08SIM900M64_ST)](https://wiki.seeedstudio.com/es/images/8/87/SIM900_firmware_and_tool.zip)
* [Hoja de datos SIM900](https://www.seeedstudio.com/document/SIM900datasheeet.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
