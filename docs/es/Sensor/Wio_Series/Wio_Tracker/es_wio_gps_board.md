---
title: Wio Tracker - GPS, BT3.0, GSM, Compatible con Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/wio_gps_board/
slug: /es/wio_gps_board
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/Wio_GPS_Antanna.jpg)

¿Qué es Wio Tracker? Wio Tracker es una placa de desarrollo compatible con Arduino que te ayuda a rastrear cualquier objeto en movimiento en el planeta. Al integrar GSM&GPRS así como GPS&BeiDou en una sola placa, proporciona una solución todo-en-uno para tu proyecto IoT exterior.

Si estás siguiendo las últimas noticias sobre Redes de Área Amplia de Baja Potencia (LPWAN), puedes saber que 2016 es un año especial porque surgieron nuevas tecnologías como LoRa y Sigfox, que impulsaron notablemente el desarrollo de WAN. El Wio Tracker tiene similitudes con LoRa y Sigfox pero también es bastante diferente. Es más adecuado para rastreo móvil exterior y situaciones que tienen alta frecuencia de interacción con el cliente y volumen medio de datos, por ejemplo bicicletas compartidas, localización logística, rastreo de mascotas.

Comparado con las soluciones tradicionales de rastreo GPS, el Wio Tracker de Seeed es mucho más fácil de usar y personalizar para el mercado IoT en rápido cambio. Como una placa de desarrollo Grove amigable para el usuario, la apariencia del Wio Tracker puede recordarte al Wio Link, otro producto destacado de Seeed. Así que también puedes encontrar 6 conectores grove en la placa. Como una placa compatible con Arduino, los usuarios pueden usar el Wio Tracker con Arduino IDE directamente.

¿Por qué llamamos al Wio Tracker una solución? Porque realmente no es solo una placa. En SeeedStudio, tenemos la capacidad de ayudar al cliente a personalizar el Wio Tracker para su propio proyecto y terminar el proyecto hasta la producción en masa. Como el Wio Tracker usa módulos estándar que están en producción en masa, estamos listos para la producción en masa incluso cuando el cliente está en su etapa de prototipado.

Hemos preparado todo, lo último que necesitamos son tus proyectos creativos, así que si estás haciendo un proyecto de rastreo IoT exterior, ¡por favor no dudes en usar el Wio Tracker!

:::caution
    Por favor siempre conecta una batería Lipo de 3.7V en caso de que la alimentación USB no sea suficiente.
:::
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-Tracker-GPS%2C-BT3.0%2C-GSM%2C-Arduino-Compatible-p-2831.html)

## Características

- Motor Multi-GNSS para GPS y BeiDou combinados, localización de mayor precisión
- Tecnología EPO™, proporcionando Órbita de Predicción Extendida predicha para acelerar TTFF sin necesidad de servidor adicional
- Basado en datos EPO™, la función QuecFastFix™ Online reduce aún más el TTFF en arranque en frío, haciendo que el TTFF de arranque en frío sea comparable al de arranque en caliente
- Modo GLP (GNSS Low Power), 40% de consumo de energía para modo normal y precisión ligeramente menor
- Modo Período, también reduce el consumo de energía controlando el tiempo de suspensión
- Tecnología Always Locate™, un algoritmo inteligente para ahorro de energía
- Tecnología Easy™ (Embedded Assist System), predicción de órbita auto-generada para posicionamiento instantáneo, reduciendo el Tiempo Para Primera Fijación (TTFF)
- Tecnología LOCUS™, solución innata de registro de datos de navegación sin necesidad de host y flash externo
- Comando AT: GSM 07.07, 07.05 y comando AT mejorado
- Bluetooth 3.0 con SPP y HFP-AG
- 6 Conectores Grove
- Socket 2 en 1 para Nano SIM y tarjeta TF
- Compatible con Arduino IDE
- Bajo consumo y tamaño pequeño

### Módulo Quectel MC20

- Tamaño ultra compacto: 18.7 × 16.0 × 2.1mm
- Constelación de navegación múltiple: GPS/ BeiDou/ QZSS
- Canales del receptor GNSS: 99 canales de adquisición/ 33 de seguimiento
- Funciones AGPS potentes: AGPS Autónomo EASY™/ AGPS Offline EPO™/ AGPS Online QuecFastFix
- LNA integrado para mejor sensibilidad GNSS (-167dBm@Tracking): capaz de usar antena GNSS pasiva sin necesidad de LNA adicional
- Características GNSS mejoradas: comando SDK/ AIC/ LOCUS/ GLP
- GSM cuatro bandas: 850/900/1800/1900MHz
- Múltiples protocolos de internet: TCP/ UDP/ PPP/ HTTP/ FTP/ SSL
- Soporte para Voz, SMS, QuecFOTATM, DSSS, OpenCPU
- Soporte para Bluetooth V3.0: perfiles SPP & HFP-AG

:::caution
    A diferencia de la mayoría de placas Arduino & Genuino, el Wio Tracker funciona a 3.3V. El voltaje máximo que los pines I/O pueden tolerar es 3.3V. Aplicar voltajes superiores a 3.3V a cualquier pin I/O podría dañar la placa.
:::

## Especificación

| Elemento|Función|Valor|
|--------------|-------------------------------------|-------|
|Microcontrolador |Procesador|ATSAMD21G18A-MU, ARM Cortex-M0+, 48MHz|
||Memoria Flash|256KB|
||SRAM|32KB|
||Voltaje de Operación|3.3V|
||Corriente DC por Pin I/O|7 mA|
||Velocidad de Reloj |48 MHz|
|GSM/GPRS|GSM|850／900／1800／1900MHz, Clase 4 (2W @850／900MHz), Clase 1 (1W @1800／1900MHz)|
|||Comando AT: GSM 07.07, 07.05 y comando AT mejorado|
|||Bajo Consumo de Energía: 1.2mA@DRX=5|
||GPRS|GPRS Multi-slot Clase 12: Descarga hasta 85.6kbps, Subida hasta 85.6kbps|
|||Protocolo: TCP／UDP／FTP／HTTP／PPP／SSL|
||SMS|Mensaje Punto a Punto, difusión SMS, modo Texto y PDU|
||Audio|Cancelación de eco, Eliminación de ruido|
||Bluetooth|Bluetooth 3.0: SPP, HFP-AG|
|GNSS|Sistema|GPS L1 1575.42MHz, BeiDou B1 1561.10MHz|
||Precisión|&lt;2.5 m CEP|
||Tecnología|EASY/LOCUS/AlwaysLocate/EPO/GLP/AIC|
|Periférico|Grove|2 x Puerto Digital Grove|
|||2 x Puerto Analógico|
|||1 x UART|
|||1 x I2C|
||Antena|Antena GSM|
|||Antena Bluetooth|
|||Antena GNSS|
||Otros|USB: Suministro de energía y carga de programa|
|||Conector JST 1.0 para batería|
|||Jack de Audio de 3.5mm|
|||Botón de Encendido GSM, Botón de Reinicio|
|||1 x LED RGB de Usuario SK6812|
|||Interfaz de Altavoz|
|||Socket 2 en 1 para Nano SIM y tarjeta TF|
|Tamaño|Longitud|54.7mm|
||Ancho|48.2mm|
||Peso||

## Ideas de Aplicación

- Transporte Inteligente
- Rastreador de Mascotas
- Equipos deportivos al aire libre
- Grabadora de conducción
- Dispositivo portátil
- Seguridad de Propiedades

:::tip
    Usa módulos Grove para expandir tu aplicación
:::
Hay 6 conectores Grove en la placa. Si esta es la primera vez que escuchas sobre Grove, por favor echa un vistazo al [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/) para más detalles.
En resumen, Grove son cientos de sensores en estilo estándar, que consiste en sensores, actuadores, pantallas así como comunicación.

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_top.png)

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_bottom.png)

:::tip
    Si quieres usar el conector Grove integrado, por favor usa digitalWrite(12, HIGH) para abrir 3V3_B. De lo contrario no puedes proporcionar energía a los módulos Grove.
:::

## Mapa de Pines

|Nombre del Pin|Interrupción Externa|PWM|Entrada Analógica|Salida Analógica|Función|
|--------|-----------|---|---------|----------|--------|
|RX      |SÍ        |SÍ|         |          |Grove UART|
|TX      |SÍ        |SÍ|         |          |Grove UART|
|D2      |SÍ        |SÍ|         |          |Grove Digital|
|D3      |SÍ        |SÍ|         |          |Grove Digital|
|D4      |SÍ        |   |         |          |Grove Digital|
|D5      |SÍ        |SÍ|         |          |Grove Digital|
|D6      |SÍ        |   |         |          |Control LED de Usuario|
|D7      |SÍ        |   |         |          |Energía del MC20|
|D10     |SÍ        |SÍ|         |          |LED de Usuario|
|D11     |SÍ        |SÍ|         |          |Verificar Auriculares|
|D12     |SÍ        |SÍ|         |          |Control de Energía Grove|
|D13     |SÍ        |SÍ|         |          |Botón de Energía GSM|
|SDA     |SÍ        |   |         |          |Grove I2C|
|SCL     |SÍ        |   |         |          |Grove I2C|
|A0      |SÍ        |   | SÍ     |  SÍ     |Grove Analógico|
|A1      |SÍ        |   | SÍ     |  SÍ     |Grove Analógico|
|A2      |SÍ        |   | SÍ     |  SÍ     |Grove Analógico|
|A3      |SÍ        |   | SÍ     |  SÍ     |Grove Analógico|
|A4      |SÍ        |   | SÍ     |          |Verificar batería|

:::note
    Todos los pines pueden actuar como Entrada y Salida Digital
:::

## Primeros Pasos - Arduino IDE

:::note
    Este capítulo está basado en Win10 y Arduino IDE v1.6.0
:::
Primero necesitas instalar la última versión del Arduino IDE, y [AÑADIR Seeeduino SAMD a tu Arduino IDE](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/).

### Instalar el Controlador (Para Windows)

Cuando insertes la placa por primera vez, deberías obtener un dispositivo USB COM llamado Wio Tracker que necesita instalar un controlador. Haz clic [aquí](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip) para descargar el controlador para la placa.

Para asegurarte de que el controlador se instaló correctamente, abre tu Administrador de Dispositivos para ver si **Wio Tracker** existe.

### Instalar la librería de Wio Tracker (Para Windows, Linux y Mac)

Haz clic [aquí](https://github.com/Seeed-Studio/Seeed_Wio_GPS_Board/archive/master.zip) para descargar la librería (archivo zip) de Wio Tracker e importa la librería zip a tu Arduino IDE. Si eres nuevo en esto, por favor haz clic [aquí](https://www.arduino.cc/en/Guide/Libraries#toc4) para más información.

### Parpadeo

A diferencia de otras placas, hay un LED de Usuario SK6812 en Wio Tracker, que es una fuente de luz LED de control inteligente y similar al ws2812b. Ahora vamos a subir nuestra primera demostración - Parpadeo a Wio Tracker, que introducirá cómo usar el LED de Usuario.

Primero, tenemos que instalar [Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel/archive/master.zip)(para LED ws2812b) e importarla al Arduino IDE.

Luego abre tu Arduino IDE y haz clic en **File > Examples > MC20_GPS_Traker > Blink** para abrir el sketch o copia el código de abajo:

```c
#include "MC20_Arduino_Interface.h"
#include <Adafruit_NeoPixel.h>

#define RGBPOWER     6          //To use User LED, D6 should be HIGH.
#define RGBPIN       10
#define LED_NUM      1

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(LED_NUM, RGBPIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(RGBPOWER, OUTPUT);
  digitalWrite(RGBPOWER, HIGH);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.
  // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
  pixels.setPixelColor(0, pixels.Color(0,0,100)); // Moderately bright blue color.
  pixels.show(); // This sends the updated pixel color to the hardware.
  delay(1000);   // Wait for 1 second
  pixels.setPixelColor(0, pixels.Color(0,0,0));   // Turn off the led.
  pixels.show();
  delay(1000);
}
```

Y luego,

- Haz clic en **Tools > Board > Wio Tracker**
- Haz clic en **Tools > Port** para seleccionar el número de puerto correcto. (*No elijas COM1*)

Luego haz clic en el botón **Upload** en la parte superior izquierda del IDE de Arduino, segundos después el sketch se habrá subido exitosamente.

Si la subida es exitosa, deberías ver alguna información en rojo y verás el LED de Usuario, está parpadeando en azul.

### Verificar batería

Wio Tracker está diseñado para rastrear objetos en movimiento al aire libre. Así que puedes alimentar la placa a través de una batería Lipo de 3.7V con conector JST1.0 y verificar el voltaje de tu batería fácilmente.

:::caution
    Asegúrate de que el extremo positivo y negativo de tu batería esté conectado correctamente, de lo contrario la placa puede dañarse.
:::
El pin de estado de la batería ha sido conectado a A4, lo que te permite medir el voltaje de la batería mediante código.

Abre tu IDE de Arduino y haz clic en **File > Examples > MC20_GPS_Traker > Check_Battery** para abrir el sketch o copia el código de abajo:

```c
#include "MC20_Arduino_Interface.h"

const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*2.0;        // there's an 10M and 10M resistor divider
    SerialUSB.print("The voltage of battery is ");
    SerialUSB.print(v, 2);
    SerialUSB.println(" V");
    delay(1000);
}
```

### Usa módulos Grove para expandir tu aplicación

Para usar 6 conectores Grove en Wio Tracker, tenemos que usar `digitalWrite(12, HIGH)` para abrir 3V3_B para alimentar los módulos Grove (D12 por defecto está en LOW para reducir el consumo).

- El siguiente código muestra cómo usar módulos Grove Analógicos y Digitales:

Abre tu Arduino IDE y haz clic en **File > Examples > MC20_GPS_Traker > Button_LightSensor** para abrir el sketch o copia el código siguiente:

```c
#include "MC20_Arduino_Interface.h"

#define GrovePowerPin   12
#define LightSensorPin  A0
#define ButtonPin       2


void setup() {
  SerialUSB.begin(115200);
  pinMode(ButtonPin, INPUT);
  pinMode(GrovePowerPin, OUTPUT);
  // write high to grove power pin to enable all the Grove ports,
  // or only Grove D2 port is usable.
  digitalWrite(GrovePowerPin, HIGH);   
}

void loop() {
    // print analog data when the button is pressed
    if (digitalRead(ButtonPin)) {
        SerialUSB.print("The value of light sensor:");
        SerialUSB.println(analogRead(LightSensorPin));
    }
    delay(500);
}   
```

- El siguiente código muestra cómo usar el puerto Grove UART:

```c
#define GrovePowerPin   12

void setup() {
  pinMode(GrovePowerPin, OUTPUT);
  digitalWrite(GrovePowerPin, HIGH);    //power Grove
  //SerialUSB.begin(115200);
  SerialDBG.begin(115200);    //set Grove UART baud rate 115200
}

void loop() {  
  //SerialUSB.println("Grove UART is sending message");
  SerialDBG.println("This is Grove UART");
  delay(1000);
}
```

Por favor usa [USB To Uart](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html) para leer los datos del puerto UART Grove.

:::caution
    Si tanto SerialUSB como SerialDBG se usan en el código, por favor abre el puerto com de SerialUSB al usar, de lo contrario SerialDBG no funcionará.
:::

### GNSS

El módulo MC20 proporciona el conjunto de comandos AT para que el MCU se comunique con sus módulos GSM/GPRS, GNSS y Bluetooth.

Y hemos instalado una biblioteca bien escrita para el Wio GPS, para aplicaciones simples ni siquiera necesitas saber mucho sobre cómo usar los comandos AT, que son complejos y difíciles de leer.

El siguiente ejemplo muestra cómo leer longitud y latitud e imprimirlas en el Monitor Serie. Ten en cuenta que el Wio Tracker debe colocarse al aire libre para obtener señal GPS. Y este ejemplo necesita una tarjeta SIM en el Wio Tracker, las siguientes imágenes muestran cómo instalar/desinstalar una tarjeta SIM:

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/insertsim.jpg)

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/pullsim.jpg)

Abre tu Arduino IDE y haz clic en **File > Examples > MC20_GPS_Traker > MC20_GNSS > GNSS_Show_Coordinate** para abrir el sketch o copia el código siguiente:

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"
#include "MC20_GNSS.h"


GNSS gnss = GNSS();

void setup() {
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gnss.Power_On();
  SerialUSB.println("\n\rPower On!");

  while(!gnss.open_GNSS()){
    delay(1000);
  }

  SerialUSB.println("Open GNSS OK.");
}

void loop() {
  // gnss.dataFlowMode();

  if(gnss.getCoordinate()){
    SerialUSB.print("GNSS: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);  
  } else{
    SerialUSB.println("Error!");
  }

  delay(1000);
}
```

### Lectura de Mensajes SMS

El siguiente ejemplo muestra cómo leer mensajes SMS en el Wio Tracker. Se necesita una tarjeta Nano SIM en este ejemplo.

Abre tu Arduino IDE y haz clic en **File > Examples > MC20_GPS_Traker > MC20_SMSRead** para abrir el sketch o copia el siguiente código:

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"

#define RGBPIN 10

char phone[32];
char dateTime[32];
char buffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPSTracker gpsTracker = GPSTracker();

void setup() {
  // MC20_init();
  pinMode(RGBPIN, OUTPUT);
  digitalWrite(RGBPIN, LOW);
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gpsTracker.Power_On();
  SerialUSB.println("Power On!");

  // gpsTracker.deleteSMS(1);

}

void loop() {

  if(MC20_check_readable()){
    inComing = 1;
  }else{
    delay(1000);
  }

  if(1 == inComing){
    MC20_read_buffer(buffer, 64);
    SerialUSB.println(buffer);

    if(NULL != (s = strstr(buffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
        char message[128];
        int messageIndex = atoi(s+12);
        gpsTracker.readSMS(messageIndex, message,128);
        SerialUSB.print("Recv SMS: ");
        SerialUSB.println(message);
     }
     MC20_clean_buffer(buffer,64);  
     inComing = 0;
  }

}
```

### Conexión Bluetooth

También es muy fácil conectarse a tu dispositivo Bluetooth en Wio Tracker. Abre tu Arduino IDE y haz clic en **File > Examples > MC20_GPS_Traker > MC20_BlueTooth > BT_FastConnect** para abrir el sketch o copia el código de abajo.

Luego cambia el deviceName de tu dispositivo Bluetooth, Wio Tracker se conectará automáticamente.

```c
#include "MC20_Common.h"
#include "MC20_BT.h"

// GPSTracker gpsTracker = GPSTracker();
BlueTooth bt = BlueTooth();
int bt_state = -1;
char *deviceName = "N-612";


void setup() {
  SerialUSB.begin(115200);
  while(!SerialUSB);

  bt.Power_On();
  SerialUSB.println("\n\rMC20 power On!");
  bt.BTPowerOn();
  SerialUSB.println("\n\rBT power On!");

  while(IDLE != (bt_state = bt.getBTState())){
    SerialUSB.print("State: ");
    SerialUSB.println(bt_state);
    delay(1000);
  }

  bt.BTFastConnect(deviceName, HFG_PROFILE);
}

void loop() {
  /* Debug */
  if(SerialUSB.available()){
    serialMC20.write(SerialUSB.read());
  }
  if(serialMC20.available()){     
    SerialUSB.write(serialMC20.read());
  }
}
```

### Tarjeta SD

- **Paso 1.** Conecta la tarjeta SD a la placa Wio GPS.
- **Paso 2.** Usa el cable USB para conectar la placa Wio GPS a la PC.
- **Paso 3.** Abre tu Arduino IDE, Selecciona **Tools** -> **Board** -> **Wio GPS board**.
- **Paso 4.** Haz clic en **File > Examples > Seeed_Wio_GPS_Board\SD_Card_Test_DumpFile** para abrir el sketch o copia el código siguiente.
- **Paso 5.** Sube el código a la placa Wio GPS, muestra cómo leer un archivo desde la tarjeta SD usando la librería SD y enviarlo por el puerto serie.

```cpp
/*
  SD card file dump

 This example shows how to read a file from the SD card using the
 SD library and send it over the serial port.

 The circuit:
 * SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4 (for MKRZero SD: SDCARD_SS_PIN)

 created  22 December 2010
 by Limor Fried
 modified 9 Apr 2012
 by Tom Igoe

 This example code is in the public domain.

 */

#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
char* fileName = "gps.txt";

void setup() {
  // Open serial communications and wait for port to open:
  SerialUSB.begin(115200);
  while (!SerialUSB) {
    ; // wait for serialUSB port to connect. Needed for native USB port only
  }


  SerialUSB.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    SerialUSB.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  SerialUSB.println("card initialized.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open(fileName);

  // if the file is available, write to it:
  if (dataFile) {
    while (dataFile.available()) {
      SerialUSB.write(dataFile.read());
    }
    dataFile.close();
  }
  // if the file isn't open, pop up an error:
  else {
    SerialUSB.println("error opening datalog.txt");
  }
}

void loop() {
}
```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Esquemas en Eagle](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip)
- [Archivo Sketchup (3D)](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker.skp)
- [Nota de Aplicación GSM Bluetooth](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_BT_Application_Note_V1.2(C).pdf)
- [Manual de Comandos AT de Archivo GSM](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_FILE_AT_Commands_Manual_V1.5.pdf)
- [Manual de Comandos AT MC20](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_AT_Commands_Manual_V1.1.pdf)
- [Guía de Aplicación MC20 GNSS AGPS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AGPS_ApplicationGuide_V1.1.pdf)
- [Manual de Comandos AT GNSS MC20](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AT_Commands_Manual_V1.1.pdf)
- [Especificación del Protocolo GNSS MC20](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_Protocol_Specification_V1.0.pdf)

## Soporte Técnico y Discusión de Productos

Si tienes algún problema técnico, por favor envíalo a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
