---
description:  GPRS Shield V2.0
title:  GPRS Shield V2.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/GPRS_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: GPRS Shield V2.0
category: Discontinued
bzurl: https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html
oldwikiname:  GPRS Shield V2.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V2
sku:  113030000
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GRPS_SLD.jpg)

¡Conecta tu Arduino a la red de telefonía celular GSM/GPRS con el shield GPRS! Ahora puedes usar tu Arduino/Seeeduino u otras placas principales para marcar un número de teléfono o enviar un mensaje de texto a tu amigo mediante comandos AT fáciles de usar. Esta nueva versión cuenta con un módulo GSM/GPRS SIM900 de cuatro bandas y bajo consumo de energía, así como una antena PCB compacta. Mientras tanto, se han realizado mejoras en las interfaces y el circuito básico para hacerlo más conciso y confiable. Y tienes dos opciones para comunicar el shield GPRS con la placa principal: UART o [SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html)

## Versión

---

| Revisión | Descripciones                                              | Lanzamiento      |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | Lanzamiento público inicial (beta)                             | 3 Mar 2011  |
| v1.2     | Agregado puerto de software para encender/apagar el SIM90              | 2 Dic 2011  |
| v1.4     | Rediseño del circuito de fuente de alimentación, nueva disposición del PCB | 30 Ago 2012 |
| v2.0     | Soporte de cuatro bandas y rediseño de la antena PCB                                     | 3 Feb 2013  |
| v3.0     | Cambio del socket de Arduino al estándar más reciente de Arduino Uno  | 20 Mar 2015 |

**¿Cuál es la diferencia entre V2.0 y la versión anterior?**

- Cambio de Apariencia

  - V2.0 adopta un contorno de shield estándar así como una carcasa protectora;
  - La antena tipo pato es reemplazada por una antena PCB compacta;
  - Las interfaces de micrófono y auriculares son reemplazadas por un conector de auriculares 2 en 1 en V2.0.

- Cambio en el Circuito de Alimentación

  - Reemplaza el circuito LDO original con circuito DC-DC. La disipación de calor se reduce y la eficiencia aumenta hasta 80%+. Mientras tanto, el conector EXT_PWR en V1.0 fue removido. V2.0 puede tomar corriente directamente del Arduino ahora sin adaptador de 5V adicional.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Power_circuit.jpg)

- Circuito de Arranque Suave

  - Se agrega un circuito de arranque suave en la nueva versión para suavizar el choque de energía en el momento en que el shield se enciende, previniendo que el shield tenga problemas de reinicio inesperado.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Soft-start_circuit.jpg)

- Revisión de la Antena

  - La potencia máxima de transmisión del SIM900 es 30dBm(1w). Sin embargo, la potencia de salida de V1.0 es solo 0.4W. En esta nueva versión, la potencia de transmisión se incrementa a 29dBm o más(0.8w+), brindándote una transmisión de señal más confiable y firme.

## Especificaciones

---

| Elemento                | Valor                                                                          |
|-------------------------|--------------------------------------------------------------------------------|
| Compatible              | Arduino UNO/Seeeduino directamente ; Otras placas principales vía jumpers     |
| Interfaz seleccionable  | UART, Software serial                                                          |
| Soporte cuádruple banda | 850/900/1800/1900MHz                                                           |
| Soporte de comunicación | Estándar - GSM 07.07 & 07.05 y Mejorado - Comandos AT SIMCOM                  |
| Temperatura de operación| -40°C a +85 °C                                                                |
| Soporte de protocolo    | Protocolo 0710 MUX, protocolo TCP/UDP embebido, FTP/HTTP, FOTA, MMS, AT embebido |
| Certificación de SIM900 | CE, IC, FCC, ROHS, PTCRB, GCF, ICASA, REACH, AT&T                              |
| Dimensiones             | 68.58 * 53.34mm                                                                |
| Fuente de alimentación  | 5v vía pin 5V, 6.5~12v vía pin Vin                                             |

## Precauciones

---

- Asegúrate de que tu tarjeta SIM esté activada.
- El GPRS Shield no viene con precauciones ESD. Ten especial cuidado al manipularlo en clima seco.

## Descripción General del Hardware

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Shild_V2_hardware_overview.jpg)

- La configuración predeterminada de fábrica para el UART del GPRS Shield es 19200 bps 8-N-1. (Se puede cambiar usando comandos AT).
- Selección de puerto serie
  - Hay dos opciones para comunicar el GPRS shield con la placa principal mientras conectas los dos jumpers en las posiciones SWserial o HWserial. Si usas SWserial, D7 y D8 serán utilizados por el SIM900 del GPRS Shield; si usas HWserial, D0 (RX) y D1 (TX) serán utilizados.

    ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_serial_port.png)

- Encendido/apagado por D9
  - Pad JP desoldado por defecto. Suéldalo si quieres usar software para encender/apagar el GPRS shield. Establece D9 a un nivel alto, significa que el botón está siendo presionado. El pad de JP está al lado del puerto ISP.
- Breakout del SIM900
  - Algunos pines del SIM900 están disponibles al lado del puerto ISP, están LINEIN_R, LINEIN_L, ADC, PWM1, PWM2, GPIO1~GPIO6, GND, FW_update (DISP_CLK, DISP_DATA, DISP_D/C, DISP_CS), RI, DCD, DSR, CTS, VDD_EXT, LDTR, LRTS. Y esos pines están conectados desde el SIM900 sin ninguna configuración.

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Break.png)

- Soporte de batería RTC
  - Puede proporcionar 3v voltios al VRTC del SIM900 desde una batería CR1220.
- Alimentación
  - Reemplaza el circuito LDO original con circuito DC-DC -- TD1410. La disipación de calor es menor y la eficiencia es mayor hasta 80%+. Mientras tanto, la salida puede llegar hasta 4.15V/2A. Y hay dos entradas de fuente de alimentación:
Pin 5v: Se añade circuito de arranque suave en la nueva versión para suavizar el choque de energía en el momento que el shield se enciende, previniendo el problema de reinicio inesperado del shield. Más cambios detallados por favor consulta Lectura Relacionada : Versión
  - Pin Vin: El rango de voltaje de entrada está entre 6.5v a 12v.
- Antena
  - El tipo de conector de Antena es IPEX, y la potencia máxima de transmisión del SIM900 es 30dBm(1w). Más información por favor ve [la Especificación de la Antena GPRS](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Antenna_of_GPRS_.pdf).
- Descripción del Estado de LEDs
  <dl><dd><table cellspacing="0">
  <tr>
    <th scope="col">**LED**</th>
    <th scope="col">**Estado**</th>
    <th scope="col">**Función**</th>
  </tr>
  <tr>
    <th scope="row">Indicador de encendido(Verde)</th>
    <td>Apagado</td>
    <td>La alimentación del GPRS Shield está apagada</td>
  </tr>
  <tr>
    <td></td>
    <td>Encendido</td>
    <td>La alimentación del GPRS Shield está encendida</td>
  </tr>
  <tr>
    <th scope="row">Indicador de Estado(Rojo)</th>
    <td>Apagado</td>
    <td>Apagado</td>
  </tr>
  <tr>
    <td></td>
    <td>Encendido</td>
    <td>Encendido</td>
  </tr>
  <tr>
    <th scope="row">Indicador de Red(Verde)</th>
    <td>Apagado</td>
    <td>SIM900 no está funcionando</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms Encendido/800ms Apagado</td>
    <td>SIM900 no encuentra la red</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms Encendido/3000ms Apagado</td>
    <td>SIM900 encuentra la red</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms Encendido/300ms Apagado</td>
    <td>Comunicación GPRS</td>
  </tr>
  </table></dd></dl>

## Comenzando

---

### Divirtiéndose con Comandos AT

Al recibir el GPRS Shield, ¿cuál sería lo primero que querrías hacer con él? ¿Enviar un mensaje de texto (SMS)? ¿O llamar a alguien (se requieren auriculares)? Puedes hacer todo esto hablando con el GPRS Shield usando Comandos AT - un lenguaje especial que entiende.

Los Comandos AT son comandos textuales simples enviados al módem GPRS a través de su interfaz serie (UART), por lo que puedes usar cualquier software de terminal serie para comunicarte con él.

#### Instalación del hardware

- **Inserta una tarjeta SIM activada en el Soporte de Tarjeta SIM** - Soporte de 6 pines para tarjetas SIM. Tanto las tarjetas SIM de 1.8 voltios como las de 3.0 voltios son compatibles con el SIM900 - el tipo de voltaje de la tarjeta SIM se detecta automáticamente.
  - Inserta la tarjeta SIM en el soporte
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM.JPG)
  - Bloquea el Soporte de Tarjeta SIM
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM2.JPG)

- **Asegúrate de que la almohadilla de la antena esté abrochada correctamente**

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSANT.JPG)

- **Configuración del puerto de comunicación**
El shield GPRS puede ser controlado a través del puerto serie por hardware o puerto serie por software de Arduino. Aquí usamos el puerto serie por software como predeterminado. Elígelo insertando tapas de puente como se muestra a continuación.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSserial.JPG)

- **Conectar a Arduino** - El GPRS Shield, como cualquier otro shield bien diseñado, es apilable.

- **Encender Arduino** - Enciende Arduino mediante cable USB o conector DC. El LED indicador de encendido debería iluminarse una vez conectado.
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSshieldV2.png)

#### Software

Divirtámonos controlando el shield GPRS con comandos AT.

El GPRS Shield viene con todos los accesorios que necesitas para comenzar a enviar datos a través de la red GSM excepto una placa Arduino y una tarjeta SIM GSM. Si quieres hacer llamadas de voz, también necesitarías auriculares con micrófono.

**Paso 1: Creando una configuración de prueba para el GPRS Shield**

:::note
Casi todos los comandos AT deben enviarse seguidos de **retorno de carro** y necesitas seleccionar la opción "+CR" en el terminal del puerto serie.
:::

Para experimentar con comandos AT, necesitarías una forma de encender y comunicarte con tu GPRS Shield. La mejor manera de hacer esto usando una placa Arduino Duemilanove se describe a continuación. Los mismos pasos son aplicables para [Seeeduino](https://wiki.seeedstudio.com/es/Seeeduino_v4.2/) o [Seeeduino Stalker](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_V3.1/).

- Sigue los pasos de instalación de hardware anteriores para configurar el sistema de hardware;
- Asegúrate de que los puentes GPRS_TX & GPRS_RX en el GPRS Shield estén montados en la posición SWSerial - así GPRS_TX se conectará a D7(RX) y GPRS_RX a D8(TX).
- Conecta el Arduino Duemilanove (o Seeeduino) a tu computadora mediante un cable USB.
- El microcontrolador ATmega328P en la placa Duemilanove tiene solo una UART que se usa para comunicarse con la PC. Lo que necesitamos es un Sketch de Arduino ejecutándose dentro del ATmega328P que emule un segundo puerto serie (UART) usando serie por software en los pines digitales D8 y D7. Toda la comunicación pasará a través del puerto serie por software y el puerto serie por hardware real. Al hacer esto, todos los datos provenientes de la computadora (conectada a la UART por hardware real) serían enrutados al GPRS Shield (conectado a la UART por software). Entonces podríamos emitir comandos AT para controlar el GPRS Shield. El diagrama de bloques que describe este esquema se muestra a continuación.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_aurduino_uart.jpg)

Para desarrollar tal programa, necesitamos usar la biblioteca SoftwareSerial. Aquí está el código de demostración.

```cpp
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

- Sube el sketch a la placa Arduino. Si no sabes cómo subir el código, por favor sigue las [instrucciones](https://wiki.seeedstudio.com/es/Upload_Code/).
- Descarga y ejecuta la [herramienta serial](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Sscom32E.zip) si no tienes una. Elige el puerto COM correcto para Arduino, y configúralo para operar a **19200** 8-N-1 y luego haz clic en "Open COM". También puedes usar AT Command Tester para enviar comandos AT. Por favor haz clic [aquí](https://wiki.seeedstudio.com/es/AT_Command_Tester_Application/) si te interesa.
- Enciende el SIM900 presionando el botón de encendido durante aproximadamente 2 segundos. El LED rojo se encenderá. El verde al lado parpadeará. Si el shield se une a la red exitosamente, el LED verde parpadeará cada 3 segundos.
- Deberías encontrar el mensaje en el monitor serial como se muestra a continuación, el cual es enviado por el SIM900 para informarte que se ha unido a la red.

```txt
RDY

+CFUN: 1

+CPIN: READY

Call Ready

```

Si no puedes ver los mensajes en el monitor serie, debes hacer clic en la opción "send new" que añadirá un retorno de carro al final del comando AT y luego enviar el comando AT "AT+IPR=19200" para establecer la velocidad de baudios del SIM900.

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_set_baud_rate.jpg)

**Paso 2: Enviar un mensaje de texto (SMS)**

Ahora que nuestra configuración de prueba está lista, juguemos con algunos comandos AT manualmente antes de pasar a programar el Arduino para hacer esto. Intentemos enviar un SMS para empezar.

- Crea la configuración como se describe en el Paso 1 anterior.
- A través de tu software de terminal serie, envía **AT+CMGF=1** y presiona la tecla Enter. El GPRS Shield puede enviar SMS en dos modos: modo Texto y modo PDU (o binario). Como queremos enviar un mensaje legible para humanos, seleccionaremos el modo texto. El GPRS Shield responderá con un **OK**.
- Haz clic en la opción "send new" y envía **AT+CMGS="+18888888888"**. Esto instruirá al GPRS Shield para que comience a aceptar texto para un nuevo mensaje, los números significan el número de teléfono especificado (reemplaza el número con el número de teléfono del teléfono objetivo). El GPRS Shield enviará un '_**&gt;'**_ para recordarte que escribas el mensaje. Ten en cuenta que los números de teléfono en cualquier comando AT deben seguir el formato [E.123](https://en.wikipedia.org/wiki/E.123).

- Comienza a escribir tu mensaje, después de terminar de escribir, haz clic en la opción "send hex" y luego envía un hex: **1A**. El módem aceptará el mensaje y responderá con un **OK**. Unos momentos después, el mensaje debería ser recibido en el teléfono cuyo número habías especificado. Yo envié "How are you ?". Puedes verificar el historial haciendo clic en "EXT". El historial de comandos se lista debajo de "Set Multi Char".

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Send_a_text_message.jpg)

:::note
Si, a pesar de seguir los pasos como se especifica arriba, no puedes recibir el mensaje en el teléfono objetivo, podrías necesitar establecer el número del Centro de Mensajes SMS. Envía el siguiente comando entre los comandos AT+CMGF y AT+CMGS: AT+CSCA="+18888888888". Reemplaza el número de teléfono especificado con el número del Centro SMS de tu Proveedor de Servicios GSM. El número del centro de mensajes es específico para cada proveedor de servicios. Puedes obtener el número del centro de mensajes llamando al centro de atención al cliente del Proveedor de Servicios GSM y preguntándoles por él.
:::

**Paso 3: Hacer una llamada telefónica con los comandos AT**

- Reinicia el SIM900 si cambias de enviar textos a hacer llamadas telefónicas.
- Reemplaza el número de teléfono con tu número objetivo en el comando "ATD18888888888;" (sin las comillas) y presiona la tecla Enter para enviarlo. Si tiene éxito, aparecerá un mensaje "ATH OK" como se muestra en la imagen de abajo. De lo contrario, aparecerá "No CRRLIER" en su lugar. La razón podría ser un número de teléfono inexistente o un formato de comando incorrecto.

**Paso 4: Explorando más**

Ahora que has probado cómo funcionan los comandos AT, puedes probar otros comandos antes de pasar a desarrollar sketches para Arduino usando el GPRS Shield.

Esto implica crear un sketch para enviar esta misma secuencia de comandos AT (en tu nombre) por el puerto serie al GPRS Shield para realizar la misma tarea de enviar un SMS, hacer una llamada o enviar datos a través de una conexión GPRS.

Puedes revisar el [manual de referencia de comandos AT](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf) para descubrir la secuencia de comandos. Si desarrollas un sketch de Arduino, encuentras que el GPRS Shield no actúa como esperas, entonces necesitarás verificar tus comandos AT y su secuencia. Para hacer esto, recarga el sketch de relé serie adjunto arriba en la sección de inicio en el ATmega328P y escribe los comandos AT manualmente y verifica la salida. Las respuestas enviadas de vuelta por el GPRS Shield te ayudarán a depurar la secuencia de comandos AT.

:::note
Un programa en C para realizar la misma tarea también ha sido desarrollado y adjuntado: [Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip").
:::

El programa fue desarrollado en una PC con Windows. [AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725) fue usado como el IDE y [WinAVR](http://winavr.sourceforge.net/) fue usado como el compilador. El archivo ZIP contiene un Proyecto de AVRStudio4. El compilador de C (WinAVR) generará un Intel Hex (.hex). Para subir este archivo .hex a una placa Arduino fuera del IDE de Arduino requeriría un programa que sea capaz de comunicarse con el bootloader de la placa Arduino. [XLoader](http://xloader.russemotto.com/) es tal programa que funciona en Windows y puede subir archivos .hex generados por varios compiladores a una Placa Arduino.

##### Notas de la librería SoftwareSerial

Con Arduino deberías poder usar la librería SoftwareSerial incluida con la distribución (en lugar de NewSoftSerial). Sin embargo, debes estar consciente de que el buffer reservado para mensajes entrantes está codificado de forma fija a 64 bytes en el encabezado de la librería, "SoftwareSerial.h":

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

Esto significa que si el módulo GPRS recibe más datos que el buffer, es probable que los pierdas con un desbordamiento del buffer! Por ejemplo, al leer un SMS del módulo con "AT+CMGR=xx" (xx es el índice del mensaje), puede que ni siquiera veas la parte del mensaje porque la información de encabezado precedente (como el número de teléfono y la hora) ocupa mucho espacio. La solución parece ser cambiar manualmente **_SS_MAX_RX_BUFF** a un valor más alto (¡pero razonable para que no uses toda tu memoria!)

La [biblioteca Softwareserial](https://arduino.cc/hu/Reference/SoftwareSerial) tiene las siguientes limitaciones (tomadas de la página de arduino). Si usas múltiples puertos serie por software, solo uno puede recibir datos a la vez.
Esto significa que si intentas agregar otro dispositivo serie como el LCD serie grove, puedes obtener errores de comunicación a menos que elabores tu código cuidadosamente.

##### Cómo Enviar un Mensaje de Texto o Marcar un Número de Teléfono Usando Comandos AT

En este ejemplo crearemos un sketch de Arduino para permitirte enviar un mensaje de texto o marcar un número de teléfono para una llamada de voz cuando escribas 't' o 'd' respectivamente en la ventana de comunicación serie de Arduino.

###### Comandos AT Para Enviar un Mensaje de Texto

Mirando el Conjunto de Comandos SIM900 podemos ver que para enviar un mensaje de texto primero tenemos que establecer el formato SMS, esto se hace usando el comando AT+CMGF.

El comando AT+CMGF puede ser uno de dos valores: 0, o 1 para "modo PDU" y "modo texto" respectivamente. En "modo texto", los mensajes SMS se representan como texto legible. En "modo PDU", los mensajes SMS se representan como cadenas binarias codificadas en caracteres hexadecimales. Usaremos "modo texto" en este ejemplo, así que el comando que necesitamos enviar al shield GPRS es:

**AT+CMGF=1\r**

Ahora que hemos establecido el formato SMS podemos proceder a enviar el mensaje de texto. Para enviar el mensaje de texto usamos el comando AT+CMGS. Según el Conjunto de Comandos AT SIM900, el comando CMGS sigue este formato:

**AT+CMGS=&lt;da&gt;[,&lt;toda&gt;]&lt;CR&gt;**

donde &lt;da&gt; es la dirección de destino (número de teléfono), &lt;toda&gt; es el tipo opcional de dirección de destino, y &lt;CR&gt; es el carácter de retorno de carro '\r'. Una vez que hayamos enviado este comando, el shield GPRS responderá con el carácter '>' señalándonos que ingresemos el mensaje actual.

:::note
El número de teléfono debe incluir el código de país, por ejemplo, para un número de teléfono de EE.UU. (555)123-4567 el valor &lt;da&gt; debe ser +15551234567
:::

###### Comando(s) Para una Llamada de Voz

Según la hoja del Conjunto de Comandos AT SIM900, el comando usado para marcar un número para una llamada de voz es "ATD+xxxxxxxxxx;" donde "xxxxxxxxxxx" es el número de teléfono con código de país incluido. Se debe enviar un punto y coma para establecer una llamada de voz, omitirlo establecerá una llamada de datos o fax.

El código de Arduino para enviar un mensaje de texto simple o marcar una llamada de voz se muestra a continuación. No olvides cambiar el número de teléfono "xxxxxxxxxx" y el mensaje "How are you today?" por tus propios valores.

###### Código de Arduino

```cpp
  #include <SoftwareSerial.h>


  SoftwareSerial gprsSerial(7,8);

  void setup()
  {
    gprsSerial.begin(19200); // GPRS shield baud rate
    Serial.begin(19200);   
    delay(500);
  }

  void loop()
  {

    if (Serial.available()) // if there is incoming serial data
     switch(Serial.read()) // read the character
     {
       case 't': // if the character is 't'
         SendTextMessage(); // send the text message
         break;
       case 'd': // if the character is 'd'
         DialVoiceCall(); // dial a number
         break;

     }

    if (gprsSerial.available()){ // if the shield has something to say
      Serial.write(gprsSerial.read()); // display the output of the shield
    }
  }

  /*
  * Name: SendTextMessage
  * Description: Send a text message to a number
  */
  void SendTextMessage()
  {
    Serial.println("Sending Text...");
    gprsSerial.print("AT+CMGF=1\r"); // Set the shield to SMS mode
    delay(100);
    // send sms message, the phone number needs to include the country code e.g. if a U.S. phone number such as (540) 898-5543 then the string must be:
    // +15408985543
    gprsSerial.println("AT+CMGS = \"+xxxxxxxxxx\"");
    delay(100);
    gprsSerial.println("How are you today?"); //the content of the message
    delay(100);
    gprsSerial.print((char)26);//the ASCII code of the ctrl+z is 26 (required according to the datasheet)
    delay(100);
    gprsSerial.println();
    Serial.println("Text Sent.");
  }

  /*
  * Name: DialVoiceCall()
  * Description: Can call/dial a phone number
  */
  void DialVoiceCall()
  {
    gprsSerial.println("ATD+xxxxxxxxxx;");//dial the number, must include country code
    delay(100);
    gprsSerial.println();
  }
```

## FAQ

Aquí está el FAQ del GPRS Shield que lista las preguntas frecuentes, por favor léelo antes de usar:

- ¿Por qué el GPRS Shield no puede funcionar con Stalker v2.1/2.0 a través del puerto serie por software (D7/D8)?

    Stalker v2.1/2.0 ha usado los Pines Digitales (D7/D8), necesitas conectar GPRS_TX/GPRS_RX a otros Pines Digitales como puerto serie por software. Y este problema fue resuelto en la versión Stalker 2.2.

- ¿Por qué el I2C no se puede usar cuando ensamblo el GPRS Shield al Stalker u otras placas Arduino?

    Porque el GPRS Shield entra en conflicto con otros módulos a través de I2C. El GPRS Shield no usa puerto I2C, puedes desconectar la conexión del puerto I2C del SIM900 a A4/A5.

## Proyectos Relacionados

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

Esta es una demostración hecha con GPRS Shield V2.0.

Con esta demostración, hacemos un teléfono móvil llamado Arduino Phone usando Arduino, shield GPRS Shield y otros módulos.

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_gas.jpg)
Esta es una demostración hecha con GPRS Shield V2.0.

Con esta demostración, podemos recibir SMS cuando hay fuga de gas en casa.
[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=242)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático y PCB del GPRS Shield v2.0 en formato eagle](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip)
- **[PDF]** [Esquemático del GPRS Shield v2.0 en formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_V2_Schematic.pdf)
- **[PDF]** [PCB del GPRS Shield v2.0 en formato PDF](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRSshield%20V2%20PCB.pdf)
- **[Librería]** [Librería GPRS_Shield en gitHub - basada en Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Librería]** [Librería GPRS_SIM900 en gitHub - No Suli](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Documento]** [Comandos AT v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf)
- **[Documento]** [Diseño de Hardware SIM900](https://wiki.seeedstudio.com/es/images/e/e3/SIM900_HD_V1.05.pdf)
- **[Hoja de Datos]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Hoja de Datos]** [Hoja de Datos SIM900](https://www.seeedstudio.com/document/SIM900datasheeet.zip)
- **[Herramientas]** [Firmware y herramienta SIM900 (firmware:1137B08SIM900M64_ST)](https://wiki.seeedstudio.com/es/images/8/87/SIM900_firmware_and_tool.zip)

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
