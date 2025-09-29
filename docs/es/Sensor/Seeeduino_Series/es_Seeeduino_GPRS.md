---
description: Seeeduino GPRS
title: Seeeduino GPRS
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_GPRS
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_cover.jpg)

Seeeduino GPRS es un panel IoT, puedes conectarte a internet a través de la red inalámbrica GPRS con él. También se admite realizar/responder llamadas de voz y enviar/recibir mensajes SMS. Mientras tanto, Seeeduino GPRS soporta función de radio FM y comunicación bluetooth. Seeeduino GPRS está basado en Atmage32U4 y SIM800H. Atmage32U4 es un microcontrolador y es compatible con Arduino. SIM800H soporta Quad-band 850/900/1800/1900MHz, puede transmitir información de voz, SMS y datos con bajo consumo de energía. SIM800H también aporta algunas características adicionales como por ejemplo Bluetooth y radio FM. Está diseñado con técnica de ahorro de energía para que el consumo de corriente sea tan bajo como 0.1mA en modo de suspensión.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-GPRS-p-1909.html)

## Ideas de Aplicación

* Internet de las Cosas  
* Casa Inteligente
* Diseño Portátil
* Teléfono DIY
* Industrial

Aquí hay algunos proyectos divertidos para tu referencia.

|Rastreador GPS/GSM Arduino|Teléfono Arduino 2.0|Estación Meteorológica GPRS Arduino|
|----------|----------|---------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_3.jpg)|
|[Hazlo Ahora](https://www.instructables.com/id/Arduino-GPSGSM-Tracker/)|[Hazlo Ahora](https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/)|[Hazlo Ahora](https://www.instructables.com/id/Arduino-GPRS-Weather-Station-Part-1/)|

## Características

* Compatible con Arduino Leonardo estándar
* Cuatro bandas 850/900/1800/1900MHz
* Conector para auriculares
* Conveniente portador de tarjeta SIM externo
* Control mediante comandos AT
* Soporta Bluetooth
* Soporta Radio FM
* Corriente < 2A
* Bootloader de Arduino Leonardo

## Especificaciones

**Modelo SIM800H**

|Parámetro|Valor|
|------------|------------|
|Modelo GPRS|SIM800H|
|Cuatro bandas|850/900/1800/1900MHz|
|Clase multi-slot GPRS|12/10|
|Clase de estación móvil GPRS|B|
|Fase GSM estándar|2/2+|
|FM|76~109MHz|
|Bluetooth|Compatible con 3.0+EDR|
|Rango de voltaje de alimentación|3.4 ~ 4.4V|

**Microcontrolador AVR Arduino**

|Parámetro|Valor|
|------------|-------------|
|Microcontrolador|ATmega32u4|
|Memoria Flash|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|Velocidad de Reloj|16MHz|
|Voltaje de Operación|5V|
|Pines E/S Digitales|20|
|Canales PWM|7|
|Canales de Entrada Analógica|12|


## Descripción General del Hardware

Las imágenes a continuación muestran una descripción general de las características del hardware del Seeeduino GPRS. El diagrama de pines y las funciones alternativas de varios pines del Seeeduino GPRS se muestran en el diagrama de pines. Esto podría usarse como una referencia rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_hardware2.png)

* **Interruptor de Alimentación**
Interruptor deslizante usado para cambiar el nivel lógico y la salida de alimentación de la placa a 5V o 3.3V.
Hoy en día muchos sensores nuevos y excelentes están siendo desarrollados para trabajar con 3.3V, con otras placas duino necesitarías colocar un convertidor de nivel lógico entre la placa y estos sensores, ¡con la placa Seeeduino GPRS todo lo que tienes que hacer es deslizar el interruptor!

* **Entrada DC**
La Entrada DC permite que tu placa Seeeduino GPRS sea alimentada desde un adaptador de pared para que puedas suministrar más energía a tu proyecto si es necesario, por ejemplo cuando uses motores DC u otros dispositivos de alta potencia. La entrada DC puede ser de 9V-12V y la corriente pico es de 2A.
Pero hay un error de hardware en el Seeeduino GPRS que tienes que notar. Cuando hay una entrada de alimentación externa, hay muy brevemente 6V en el pin de 5V, dura aproximadamente 2ms. **Es riesgoso destruir el dispositivo que está conectado a 5V.** Por lo tanto recomendamos que no uses la Entrada DC para alimentar el sistema. Y ya habíamos considerado arreglar el error, pero no saldrá muy pronto.

* **Conexión para SIM800h**
Puedes depurar el Sim800h por esta interfaz.

* **ICSP**
Esta es la conexión ICSP para el ATMEGA32U4-MUR, está ubicada en la posición estándar ICSP/SPI para hardware compatible con Arduino Uno, Due, Mega, y Leonardo (ej. shields) que pueden usar este conector. Los pines SPI en este puerto: MISO, SCK, y MOSI, por favor nota que esos pines NO se conectan a D11~D13.

* **LED PWR2**
Indicación de Alimentación del SIM800H

* **LED STA**
Indicación de Estado de Operación

* **LED NET**

|Estado|Comportamiento del SIM800H|
|------------|-------------|
|Apagado|SIM800H no está funcionando|
|64ms encendido/800ms apagado|SIM800H no registrado en la red|
|64ms encendido/3000ms apagado|SIM800H registrado en la red|
|64ms encendido/300ms apagado|SIM800H comunicación establecida|

## Instalar el Driver

En primer lugar, necesitas:

* **Conseguir un cable Micro-USB**
Necesitas un cable Micro-USB primero; el cable de datos de un teléfono Android funcionará bien.
Si no puedes encontrar uno, puedes comprar uno [aquí](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar la placa**
Conecta la placa Arduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado **PWR**) debería encenderse.

**Para Windows**

:::note
Este driver está disponible para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 y Windows 10.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* Conecta tu placa y espera a que Windows comience su proceso de instalación del driver. Después de unos momentos, el proceso fallará, a pesar de los mejores esfuerzos.
* Haz clic en el Menú Inicio y abre el Panel de Control.
* Mientras estés en el Panel de Control, navega a Sistema y Seguridad. Luego, haz clic en Sistema. Una vez que la ventana del Sistema esté abierta, abre el **Administrador de Dispositivos**.
* Busca bajo Puertos (COM y LPT). Deberías encontrar un puerto abierto llamado "Seeeduino GPRS". Si no hay una sección COM y LPT, busca bajo "Otros Dispositivos" por "Dispositivo Desconocido".
* Haz clic derecho en el puerto "Seeeduino GPRS" y elige la opción "Actualizar Software del Controlador".
* Luego, elige la opción "Buscar software del controlador en mi equipo".
* Finalmente, navega y selecciona el archivo del driver llamado "seeed_usb_serial.inf"
* Windows terminará la instalación del driver desde ahí.

**Para Mac OSX**

No necesitas instalar ningún driver.

## Primeros Pasos

:::note
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::

En primer lugar, necesitas instalar un Software de Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
Si el Software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software de Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

**Abrir el ejemplo Blink**

Abre el sketch de ejemplo del parpadeo del LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Seleccionar tu placa**

Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponda a tu Arduino.
Seleccionando un **Arduino Leonardo**. Si no puedes encontrar el Arduino Leonardo, por favor revisa [Cómo Agregar placas Seeed al IDE de Arduino](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_board.png)

**Seleccionar tu puerto serie**

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_com.png)

:::note
En Mac, esto debería ser algo con **/dev/tty.USBmodem**.
:::
**Subir el programa**

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (LED Pin 13) en la placa comenzar a parpadear (en verde). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Comenzando en Linux

Para usar en Linux, por favor ve a [Instalando Arduino en Linux](http://playground.arduino.cc/Learning/Linux)

**Función GPRS**

Seeeduino GPRS ofrece la función de un teléfono móvil como hacer/recibir llamadas de voz, enviar/recibir SMS, hacer una conexión TCP, etc. Aquí está la [Biblioteca Seeeduino GPRS](https://github.com/Seeed-Studio/Seeeduino_GPRS), por favor descárgala a tu computadora para usar Seeeduino GPRS. Aquí hay una breve introducción.

Para comenzar a jugar con el Seeeduino GPRS, se requieren unos auriculares y una tarjeta SIM.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_t.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_b.jpg)

**Para hacer una llamada**

Abre el sketch de ejemplo **GPRS_CallUp** en libraries/Seeeduino_GPRS/example/GPRS_CallUp/, reemplaza el número de teléfono en la función callUp, luego compila el sketch y súbelo a tu placa. Seeeduino GPRS llamará al número especificado en el código.

```
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Call up Test...");
    gprs.preInit();//power on SIM800
    delay(1000);
    while(0 != gprs.init()) { //gprs init
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to call...");
    gprs.callUp("150****9566");
}

void loop() {
    //nothing to do
}

```

**Para enviar un SMS**

Al igual que hacer una llamada, se puede enviar un SMS con Seeeduino GPRS. Abre el sketch de ejemplo **GPRS_SendSMS** en libraries/Seeeduino_GPRS/example/GPRS_SendSMS/, y reemplaza el número de teléfono y el mensaje en la función sendSMS, luego compila el sketch y súbelo a tu placa. Seeeduino GPRS enviará el mensaje al número especificado en el código.

```
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Send SMS Test ...");
    gprs.preInit();
    delay(1000);
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to send SMS message...");
    gprs.sendSMS("130****3364","hello,world"); //define phone number and text
}

void loop() {
    //nothing to do
}

```

**Para responder una llamada y leer un SMS**

Si alguien te llama o te envía un mensaje, Seeeduino GPRS también puede responder la llamada o leer el mensaje. Abre el sketch de ejemplo **GPRS_LoopHandle** en libraries/Seeeduino_GPRS/example/GPRS_LoopHandle/, luego compila el sketch y súbelo a tu placa, el Seeeduino GPRS sondeará para verificar si hay una llamada entrante o SMS. Si hay una llamada entrante, Seeeduino GPRS responderá la llamada automáticamente. Si hay un SMS entrante, Seeeduino GPRS mostrará el mensaje en el Monitor Serie.

```
#include <gprs.h>
#include <SoftwareSerial.h>
#include <stdio.h>

char gprsBuffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - LoopHandle Test...");
    gprs.preInit();
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to monitor your call or message...");
}

void loop() {
    if(gprs.serialSIM800.available()) {
        inComing = 1;
    }else{
        delay(100);
    }

    if(inComing){
        gprs.readBuffer(gprsBuffer,32,DEFAULT_TIMEOUT);
        Serial.print(gprsBuffer);

        if(NULL != strstr(gprsBuffer,"RING")) {
            gprs.answer();
        }else if(NULL != (s = strstr(gprsBuffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
            char message[MESSAGE_LENGTH];
            int messageIndex = atoi(s+12);
            gprs.readSMS(messageIndex, message,MESSAGE_LENGTH);
            Serial.print(message);
        }
        gprs.cleanBuffer(gprsBuffer,32);
        inComing = 0;
    }
}
```

**Función de Radio FM**

Seeeduino GPRS tiene una función de radio FM. Abre el sketch de ejemplo **FM_Test** en libraries/Seeeduino_GPRS/example/FM_Test/, y conecta un botón a tu placa, luego compila el sketch y súbelo a tu placa, Seeeduino GPRS funciona como una radio FM. Incluso el canal puede cambiarse con el botón.

```
#include <fm.h>
#include <SoftwareSerial.h>

int channelButton = 5; //used for changing channel
FM fm;

void setup() {
    pinMode(channelButton,INPUT);
    Serial.begin(9600);
    Serial.println("FM Test...");
    fm.preInit();
    while(0 != fm.powerOn()){
        Serial.println("FM power on failed, try again...");
        delay(2000);
    }
    fm.setVolume(6); //0,1,2,3,4,5,6
    fm.scanChannel();
    Serial.println("FM init success");
}

void loop() {
    while(HIGH == digitalRead(channelButton)){
        delay(50);
    }
    Serial.print("change Channel\r\n");
    fm.channelNext();
    while(LOW == digitalRead(channelButton)){
        delay(50);
    }
}
```

**Función Bluetooth**

Seeeduino GPRS puede ser usado como un dispositivo bluetooth, pero aún no es muy estable. Hay dos ejemplos de sketches en la biblioteca. El primero es **Bluetooth AT Command**, puedes enviar comandos AT a Seeeduino GPRS a través de él, y el otro es **Bluetooth_Communicate**, puedes comunicarte con Seeeduino GPRS en perfil SPP con él, pero puede fallar mientras se conecta a tu dispositivo bluetooth o móvil. A continuación está el código de Bluetooth AT Command.

```
#include <bluetooth.h>
#include <SoftwareSerial.h>

#define DEFAULT_TIMEOUT 5
#define BT_BUF_LEN      32
BlueTooth bluetooth;

char bluetoothBuffer[BT_BUF_LEN];
int start = 0;

void setup() {
    Serial.begin(9600);
    Serial.println("Bluetooth AT Command Test...");
    bluetooth.preInit();
    delay(3*1000);
    while(0 != bluetooth.powerOn()){ //bluetooth PowerOn
        Serial.println("bluetooth power on failed, try again...");
        delay(2000);
    }
}

void loop() {
    if(bluetooth.serialSIM800.available()) {
        start = 1;
    }else{
        delay(500);
    }

    if(start){
        //bluetooth.cleanBuffer(bluetoothBuffer,64);
        bluetooth.readBuffer(bluetoothBuffer,BT_BUF_LEN,DEFAULT_TIMEOUT);
        if(NULL != strstr(bluetoothBuffer,"+BTPAIRING:")){
            bluetooth.acceptPairing();
        }
        if(NULL != strstr(bluetoothBuffer,"+BTCONNECTING:")){
            bluetooth.acceptConnect();
        }
        start = 0;
    }
}
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **Esquemático**

    [Archivo Eagle de Seeeduino GPRS](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip)

    [Archivo PDF de Seeeduino GPRS](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Schematic.pdf)

* **Firmware**

    [Firmware de Seeeduino GPRS y Guía de Actualización](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Firmware_update_for_Seeeduino_GPRS_v1.0.zip)

* **Comandos AT SIM800**

    [PDF del Manual de Comandos AT Serie SIM800](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

* **Librería Seeeduino GPRS**  

    [Librería Seeeduino GPRS en GitHub](https://github.com/Seeed-Studio/Seeeduino_GPRS)

## Soporte Técnico y Discusión del Producto

   <br />
 ¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
