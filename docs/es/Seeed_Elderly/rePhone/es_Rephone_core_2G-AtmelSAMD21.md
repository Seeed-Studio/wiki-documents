---
description:  Rephone Core 2G-AtmelSAMD21
title:  Rephone Core 2G-AtmelSAMD21
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Rephone_core_2G-AtmelSAMD21
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cover.jpg)

RePhone es una de las plataformas de placa de desarrollo más únicas e interesantes creadas por Seeed Studio. Desde su primera aparición en el escenario de KickStarter, ha recibido toneladas de atención y apoyo de makers de todo el mundo porque con RePhone no solo puedes crear un teléfono especial para ti, sino también dotar de conectividad celular a las cosas que te rodean.

El RePhone Core 2G-AtmelSAMD21 v1.0 es una nueva placa RePhone core 2G compatible con Arduino, que está basada en el SAMD21 de Atmel y SIM800H. La mayoría de las características del RePhone Core 2G-AtmelSAMD21 v1.0 son las mismas que las del Xadow – GSM+BLE, como ofrecer una amplia gama de protocolos de comunicación – GSM, GPRS y Bluetooth, soportar cuatro bandas 850/900/1800/1900Mz, y soportar tarjeta Nano SD 2G. Pero la solución del SAMD21 de Atmel más SIM800H ha reducido mucho el consumo de energía comparado con el Xadow – GSM+BLE. Si estás buscando un núcleo Rephone de alto rendimiento y bajo consumo de energía para encantar al mundo, entonces este nuevo módulo RePhone core 2G es la mejor opción.

:::note
    El RePhone Core 2G-AtmelSAMD21 v1.0 es compatible con todos los Xadow v2.0 excepto el Xadow 1.54 inch Touchscreen
    Por favor conecta una batería a la placa si quieres usar la función GSM o GPRS en caso de que la alimentación del USB no sea suficiente y falle la comunicación.
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)

:::warning
    Este producto **NO** incluye una batería lipo, y tampoco hay baterías lipo vendidas en nuestro Bazaar, cualquier batería lipo de 3.7V funcionará.

    Este producto **NO** incluye un Micrófono, Altavoz y entrada de auriculares de 3.5mm, necesitas comprar un [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) para esas funciones.
:::

## Características

---

### Arduino/Procesador

- ATSAMD21G18 @ 48MHz con lógica/alimentación de 3.3V
- Compatible con Arduino (basado en el bootloader de Arduino Zero)
- Integrado con chip de gestión de batería de litio
- Botón de usuario

### SIM800H

- Cuatro bandas 850/900/1800/1900MHz
- GPRS multi-slot clase 12/10
- Estación móvil GPRS clase B
- Cumple con el estándar GSM 2/2+
  - Clase 4 (2 W @850/900MHz)
  - Clase 1 (1 W @1800/1900MHz)
- bluetooth: compatible 3.0+EDR
- FM: límites de banda 76~109MHz, sintonización paso a paso 50KHz
- Control vía comando AT 3GPP TS 27.007, 27.005 y conjunto de comandos AT mejorados de SIMCOM
- SIM USAT
- Bajo consumo
- Rango de temperatura de funcionamiento: -40 ~+85 °C

## Especificaciones

---

| Elemento|Valor|
|--------------|-------------------------------------|
|Microcontrolador |ATSAMD21G18, ARM Cortex M0+ de 32 bits |
|Voltaje de Funcionamiento |3.3V|
|Corriente DC por Pin I/O |7 mA|
|Memoria Flash |256 KB|
|SRAM |32 KB|
|EEPROM |Ninguna|
|Velocidad de Reloj |48 MHz|
|Longitud |68 mm|
|Ancho |30 mm|
|Peso |12 gr.|

## Descripción General del Hardware

---
![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hw.png)

- **1-**Conector Xadow de 11 pines
- **2-**Botón de Usuario(D3)
- **3-**Conector Micro USB para programación y alimentación
- **4-**Conector Xadow de 35 pines
- **5-**Conector de Batería Jst1.0
- **6-**Tarjeta Nano Sim (igual que iPhone 5/6/7)
- **7-**IC ATSAMD21G18
- **8-**LED monitor de estado de carga
  - parpadea - no hay batería insertada
  - encendido - cargando
  - apagado - carga completa
- **9-**IC - ETA6003([hoja de datos](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf))
- **A-**Puerto de depuración SWD
- **B-**Conector de Antena
- **C-**Pad de PIN E/S
- **D-**SIM800H

## Mapa de pines

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png)

:::tip
    [Haz clic](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png) para ver una imagen más grande.
:::
:::note
    * INT1 conecta a D7
    * INT2 conecta a D12
:::
## Arduino IDE

Después de descargar e instalar el [Arduino IDE más reciente](https://www.arduino.cc/en/Main/Software), hay algo que necesita configurarse.
Abre tu Arduino IDE, y haz clic en **Archivo > Preferencias**
Copia el código de abajo en **URLs Adicionales del Gestor de Placas**, y luego **OK**

```c
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/setting.png)

Luego vamos a **Tools > Board > Boards Manager**

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/boards_manager.png)

Haz clic en el botón **Install** y espera unos minutos antes de que la placa se instale.

Después de que se complete la instalación, puedes encontrar RePhone core 2G-AtmelSAMD21 en la parte inferior de **Tools > Board**.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/board_r2.png)

### Instalar el Controlador (Para Windows)

Cuando insertes la placa por primera vez, deberías obtener un dispositivo USB COM llamado RePhone 2G SAMD21 que necesita instalar un controlador. Haz clic en el botón de abajo para descargar el controlador para la placa.

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/driver.png)](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)

Para asegurarte de que el controlador se instaló correctamente, abre tu Administrador de dispositivos para ver si existe **RePhone 2G SAMD21**.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/device_manager.png)

### Hello World
Ahora podemos subir nuestra primera demostración - Hello World a la placa.

Abre tu Arduino IDE y copia el código de abajo:

```c
void setup()
{
    SerialUSB.begin(115200);
}

void loop()
{
    SerialUSB.println("Hello world!");
    delay(1000);
}
```

Y luego,

- Haz clic en **Tools > Board > RePhone core 2G-AtmelSAMD21**
- Haz clic en **Tools > Port** para seleccionar el número de puerto correcto. (*No elijas COM1*)

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/arduino_ide.png)

Luego haz clic en el botón **Upload** en la parte superior izquierda del IDE de Arduino, segundos después el sketch se cargó exitosamente.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload.png)

Si la carga es exitosa, deberías ver alguna información en rojo.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload_done.png)

Abre el Monitor Serie de tu IDE de Arduino y obtendrás "Hello World" impreso cada segundo.

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hello_world.png)

## Modo de Comando AT

---
La placa RePhone core 2G soporta el modo de comando AT. TX/RX del SIM800H está conectado al Serial1(D0/D1) del AtemlSAMD21.

Copia el código de abajo y cárgalo a tu placa.

```c
#include "atmelsamd21_gprs.h"

void setup()
{
    SerialUSB.begin(115200);
    while(!SerialUSB);

    SerialUSB.println("RePhone core 2G - AtmelSAMD21 AT Command Test");
    gsm.preInit();                  // power on

    while(0 != gsm.init())
    {
        SerialUSB.println("GSM init error.");
        delay(2000);
    }

    SerialUSB.println("GSM init ok.");
}

void loop()
{
    while(SerialUSB.available())Serial1.write(SerialUSB.read());
    while(Serial1.available())SerialUSB.write(Serial1.read());
}

```

Abre tu monitor Serie y espera a que se imprima ***GSM init ok.*** en el monitor, luego puedes introducir un comando.
Intenta introducir un "AT" para obtener un "OK".

![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cmd.png)

:::tip
    Todos los comandos deben terminar con una nueva línea(\r\n).
:::
Haz clic en el botón de abajo para obtener la documentación detallada de comandos AT.

[![](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/at_cmd.png)](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

## Ejemplos

---
Hemos creado muchos ejemplos para mostrarte cómo funciona este módulo.
Al principio, por favor

1. Inserta una tarjeta nano SIM
2. Inserta la antena
3. Si tienes una batería lipo, insértala también en la placa

Haz clic en **Archivo > Ejemplos** y luego puedes abrir esos ejemplos.
### AtmelSAMD21_SIM800

- **Bluetooth_AT_Command_And_Music_Play**: Reproducir música vía bluetooth
- **GSM_GPRS_HTTP_GET**: Http get hello.txt desde [mbed.org](http://mbed.org)
- **GSM_Receive_SMS**: Recibir SMS
- **GSM_Voice_Call**: Recibir llamada de voz

### RePhone_API_for_Arduino

- **gps_test**: Ejemplo de [Xadow GPS v2](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)
- **ledmatrix_test**: Ejemplo de [Xadow LED 5x7](https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html)
- **nfc_test**: Ejemplo de [Xadow NFC v2](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)
- **sensorhub_test**: Ejemplo de [Xadow Basic Sensors](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)
- **ws2812_test**: Ejemplo de [Xadow Duino](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

### rephone_button

- **button_test**: Prueba del botón integrado

### rephone_lcm

- **lcm_display_test**: Ejemplo de pantalla LCD

### rephone_menu_all

- **rephone_menu_test**

### TwilioMessage

- **message_test**: Envío/Recepción de Mensajes Twilio

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

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Esquemas en PDF](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/pdf_sch_rephone_2g.pdf)
- [Esquemas en EAGLE](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip)
- [Controlador](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip)
- [Hoja de datos del ETA6003](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf)
- [Comando AT del SIM800H](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/SIM800_AT.pdf)
- [Descargar TODO lo Anterior](https://github.com/SeeedDocument/RePhone-core-2G-AtmelSAMD21/archive/master.zip)

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
