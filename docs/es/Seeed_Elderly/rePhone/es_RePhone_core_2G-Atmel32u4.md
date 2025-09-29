---
description: Rephone Core 2G-Atmel32u4
title: Rephone Core 2G-Atmel32u4
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RePhone_core_2G-Atmel32u4
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cover.jpg)

RePhone es una de las plataformas de placa de desarrollo más únicas e interesantes creada por Seeed Studio, con RePhone no solo puedes crear un teléfono especial para ti mismo, sino también encantar las cosas que te rodean con conectividad celular. La primera edición del núcleo RePhone es Xadow – GSM+BLE, esta vez proporcionamos otras 2 ediciones del núcleo RePhone con mayor rendimiento y menor consumo de energía, una de ellas es el RePhone core 2G Atmel32u4 v1.0.

El RePhone core 2G Atmel32u4 v1.0 es una nueva placa núcleo RePhone 2G compatible con Arduino, que está basada en Atmel32u4 y SIM800H. La mayoría de las características del RePhone Core 2G Atmel32u4 v1.0 son las mismas que Xadow – GSM+BLE, como ofrecer una amplia gama de protocolos de comunicación – GSM, GPRS y Bluetooth, soportar cuatro bandas 850/900/1800/1900Mz, y soportar tarjeta Nano SD 2G. Pero la solución de Atmel32u4 más SIM800H ha reducido mucho el consumo de energía comparado con Xadow – GSM+BLE. Si estás buscando un núcleo Rephone de alto rendimiento y bajo consumo de energía para encantar el mundo, entonces este nuevo módulo núcleo RePhone 2G es la mejor opción.

También proporcionamos una versión aún más potente del nuevo núcleo RePhone 2G porque su solución es AtmelSAMD21+SIM800. Haz clic [aquí](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html) para encontrarlo.

:::warning
    1. Este producto **NO** incluye una batería lipo, y tampoco hay baterías lipo vendidas en nuestro Bazaar, cualquier batería lipo de 3.7V funcionará
    2. Este producto **NO** incluye un micrófono, altavoz y entrada de auriculares de 3.5mm, necesitas comprar un [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) para esas funciones.
:::
##Características

###Arduino/Procesador

* Atmega32u4 funciona a 16MHz
* Funciona con Arduino IDE (basado en el bootloader de Arduino Leonardo)
* Integrado con chip de gestión de batería de litio
* Botón de usuario


###SIM800H

* Cuatro bandas 850/900/1800/1900MHz
* GPRS multi-slot clase 12/10
* Estación móvil GPRS clase B
* Cumple con el estándar GSM 2/2+
    * Clase 4 (2 W @850/900MHz
    * Clase 1 (1 W @1800/1900MHz)
* bluetooth: compatible 3.0+EDR
* FM: límites de banda 76~109MHz, sintonización paso a paso 50KHz
* Control vía comando AT 3GPP TS 27.007, 27.005 y conjunto de comandos AT mejorados SIMCOM
* SIM USAT
* Bajo consumo
* Rango de temperatura de funcionamiento: -40 ~+85 °C


##Especificaciones

| Elemento|Valor|
|--------------|-------------------------------------|
|Microcontrolador |Atmega32U4 |
|Voltaje de Funcionamiento	|3.3V|
|Corriente DC por Pin I/O	|50|
|Memoria Flash	|32 KB de los cuales 4KB son usados por el bootloader|
|SRAM	|2.5 KB|
|EEPROM	|1KB|
|Velocidad de Reloj	|16 MHz|
|Longitud	|68 mm|
|Ancho	|30 mm|
|Peso	|12 gr.|

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hw.png)

* **1- **Conector Xadow de 11 pines
* **2- **Botón de Usuario(D3)
* **3- **Conector Micro USB para programación y alimentación
* **4- **Conector Xadow de 35 pines
* **5- **Conector de Batería Jst1.0
* **6- **Tarjeta Nano Sim (igual que iPhone 5/6/7)
* **7- **IC Atmega32U4
* **8- **LED monitor de estado de carga
    * parpadea - no hay batería insertada
    * encendido - cargando
    * apagado - carga completa
* **9- **IC - ETA6003(hoja de datos)
* **A- **Pads ICSP
* **B- **Conector de Antena
* **C- **Pad de PIN I/O
* **D- **SIM800H

##Mapa de pines

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png)

:::tip
    [Haz clic](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/pinmap.png) para ver una imagen más grande.
:::
:::note
    * INT1 conecta a D7
    * INT2 conecta a D12
:::
##Arduino IDE

Después de descargar e instalar el [Arduino IDE más reciente](https://www.arduino.cc/en/Main/Software), luego haz clic [aquí](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/) para agregar la placa a tu Arduino IDE.

###Instalar el Controlador (Para Windows)

Cuando insertes la placa por primera vez, deberías obtener un dispositivo USB COM llamado RePhone 2G SAMD21 que necesita instalar un controlador. Haz clic en el botón de abajo para descargar el controlador para la placa.

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)

Para asegurarte de que el controlador se instaló correctamente, abre tu Administrador de Dispositivos para ver si existe **RePhone 2G 32U4**.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/device_manager.png)

###Hola Mundo
Ahora podemos subir nuestra primera demostración - Hola Mundo a la placa.

Abre tu Arduino IDE y copia el código de abajo:

```c
void setup()
{
    Serial.begin(115200);
}

void loop()
{
    Serial.println("Hello world!");
    delay(1000);
}
```

Y luego,

* Haz clic en **Tools > Board > RePhone core 2G-Atmel32u4**


Si no puedes encontrar el RePhone core 2G-Atmel32u4, por favor revisa [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/)


* Haz clic en **Tools > Port** para seleccionar el número de puerto correcto. (*No elijas COM1*)

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/arduino_ide.png)

Luego haz clic en el botón **Upload** en la parte superior izquierda del Arduino IDE, segundos después el sketch se habrá subido exitosamente.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload.png)

Si la subida es exitosa, deberías ver alguna información en rojo.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/upload_done.png)

Abre el Monitor Serie de tu Arduino IDE y obtendrás "Hello World" impreso cada segundo.

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/hello_world.png)


##Modo de Comando AT

La placa RePhone core 2G soporta el modo de comando AT. TX/RX del SIM800H está conectado al Serial1(D0/D1) del AtemlSAMD21.

Copia el código de abajo y súbelo a tu placa.

```c
#include "atmel32u4_gprs.h"

void setup()
{
    Serial.begin(9600);
    while(!Serial);

    Serial.println("SIM800 Serial Debug Test ...");
    gsm.preInit();

    while(0 != gsm.sendATTest())
    {
        Serial.println("sim800 init error!");
    }

    Serial.println("sim800 init O.K!");
}

void loop()
{
    gsm.ATDebug();
}
```

Abre tu monitor Serie y espera a que se imprima ***GSM init ok.*** en el monitor, luego puedes introducir un comando.
Intenta introducir un "AT" para obtener un "OK".

![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/cmd.png)

:::tip
    Todos los comandos deben terminar con una nueva línea(\r\n).
:::
Haz clic en el botón de abajo para obtener la documentación detallada de comandos AT.

[![](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)


##Ejemplos

Hemos hecho muchos ejemplos para mostrarte cómo funciona este módulo.
Al principio, por favor

1. Inserta una tarjeta nano SIM
2. Inserta la antena
3. Si tienes una batería lipo, insértala también en la placa

Haz clic en **Archivo > Ejemplos** y luego puedes abrir esos ejemplos.
###Atmel32U4_SIM800

* **Bluetooth_AT_Command_And_Music_Play**: Reproducir música vía bluetooth
* **GSM_GPRS_HTTP_GET**: Http get hello.txt desde [mbed.org](http://mbed.org)
* **GSM_Receive_SMS**: Recibir SMS
* **GSM_Voice_Call**: Recibir llamada de voz
* **SIM800_Serial_Debug**: Modo de comando AT

###RePhone_API_for_Arduino

* **gps_test**: Ejemplo de [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)
* **ledmatrix_test**: Ejemplo de [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)
* **nfc_test**: Ejemplo de [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)
* **sensorhub_test**: Ejemplo de [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)
* **ws2812_test**: Ejemplo de [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

###rephone_button

* **button_test**: Prueba del botón integrado

###rephone_lcm

* **lcm_display_test**: Ejemplo de pantalla LCD

###rephone_menu_gsm

* **rephone_menu_test**


## Familia RePhone
Hay varios módulos complementarios encadenables para extender las características y funcionalidades – Xadow Audio, Xadow LED 5x7, Xadow Basic Sensors, Xadow Duino, Xadow GPS v2 y Xadow NFC v2.


|GPS v2|Basic Sensors|NFC v2|
|----------------|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg)|
|[Obtener Más Detalles](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)|[Obtener Más Detalles](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)|[Obtener Más Detalles](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)|
|LED 5 x 7|Audio|Xadow GSM Breakout|
|----------------|--------------|-------------|
|![](https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg)|![](https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg)|
|[Obtener Más Detalles](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)|[Obtener Más Detalles](https://www.seeedstudio.com/Xadow-Audio-p-2554.html)|[Obtener Más Detalles](https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html)|

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


#Recursos

- [Esquemáticos en PDF](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [Esquemáticos en EAGLE](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/102040006RePhone%20core%202G-Atmel32u4.zip)
- [Controlador](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/driver.zip)
- [Hoja de datos del ETA6003](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/ETA6003.pdf)
- [Comando AT del SIM800H](https://files.seeedstudio.com/wiki/RePhone_core_2G-Atmel32u4/res/SIM800_AT.pdf)
- [Descargar TODO lo Anterior](https://github.com/SeeedDocument/RePhone_core_2G-Atmel32u4/archive/master.zip)

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
