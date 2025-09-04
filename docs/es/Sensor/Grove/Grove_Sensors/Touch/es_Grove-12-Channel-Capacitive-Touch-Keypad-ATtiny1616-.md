---
description: Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)
title: Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg)

El Teclado Táctil Capacitivo Grove de 12 botones está construido alrededor del ATtiny1616, un procesador AVR® de 8 bits que funciona hasta 16 MHz. El ATtiny1616 es un chip de bajo consumo y alto rendimiento que integra el controlador táctil periférico QTouch® que soporta interfaces táctiles capacitivas con detección de proximidad y escudo controlado. Con este módulo, puedes crear fácilmente un teclado de contraseña arduino o un teclado de teléfono DIY.

Hicimos este teclado en forma 3x4, igual que el diseño de un teclado de teléfono móvil. El teclado tradicional requiere 3 líneas verticales y 4 líneas horizontales para escanear, lo que ocupará 7 pines I/O del microcontrolador. Con la ayuda del ATtiny1616 y el conector Grove, solo dos pines RX y TX son suficientes para el Teclado Táctil Capacitivo Grove de 12 Canales. Puedes usar fácilmente este módulo con un microcontrolador con interfaz UART por hardware, o puedes usar el UART por software para leer la entrada de botones con dos pines I/O normales.

En resumen, el Teclado Táctil Capacitivo Grove de 12 botones es un módulo fácil de usar que requiere muy poco código, especialmente cuando lo usas con [placas principales compatibles con Grove](https://www.seeedstudio.com/seeeduino-boards-c-987.html), sin soldadura, solo conectar y usar.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Controlador ATtiny1616 de bajo consumo
- Compatible con 3.3V / 5V
- Táctil capacitivo, alta sensibilidad
- Teclado de 12 botones
- Conector Grove UART de 4 pines
- Indicador LED integrado

## Aplicaciones

- Teclado de teléfono
- Acceso por contraseña
- Interfaz de entrada extendida

## Diagrama de Pines

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" alt="Touch Keypad hardware" title="hardware overview" />
    <figcaption><b>Figura 1</b>. <i>Vista general del hardware</i></figcaption>
  </a>
</figure>
</div>

## Especificaciones

|Parámetro|Valor|
|---|---|
|Voltaje de alimentación|3.3V / 5V|
|CPU| CPU AVR® de 8 bits @ 16MHz|
|Tipo de sensor|Teclado Táctil Capacitivo|
|Cantidad de botones|12|
|Rango de temperatura de operación|-40°C a 105°C|
|Interfaz de salida|UART|
|Interfaz de descarga de firmware|UPDI|

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Jugar con Arduino

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield |Grove 12 button Capacitive Touch Keypad|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

>Además, puedes considerar nuestro nuevo [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), que es equivalente a la combinación de Seeeduino V4.2 y Baseshield.

:::note
**1** Por favor conecta el cable USB suavemente, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

#### Conexión de Hardware

- **Paso 1.** Conecta el Grove 12 Channel Capacitive Touch Keypad al puerto **D2** del Base Shield.

> Si estás usando una placa SAM, entonces deberías conectar al puerto **UART**. Por favor consulta la tabla 1 para más detalles

|Placa|Tipo UART|Puerto de Conexión|
|-----|---------|------------|
|Placa AVR (como Seeeduino V4.2)|Soft UART|D2,D3|
|Placa SAM (como Seeeduino Lotus M0+)|Hardware UART|UART|

<div align="center"><b>Tabla 1.</b><i>Selección de Puerto UART</i></div>

- **Paso 2.** Conecta Grove - Base Shield en Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki-connect.jpg)

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga el archivo [12_Channel_Keypad.ino](https://github.com/Seeed-Studio/Seeed_ATtiny1616/blob/master/12_Channel_Keypad.ino) desde Github.

- **Paso 2**. Luego abre `12_Channel_Keypad.ino`, o simplemente puedes copiar el siguiente código en un nuevo sketch de Arduino.

```cpp
#include "SoftwareSerial.h"

#if defined(ARDUINO_ARCH_AVR)
#define SERIAL Serial
SoftwareSerial mySerial(2,3);
#define TRANS_SERIAL  mySerial
#elif defined(ARDUINO_ARCH_SAMD)
#define SERIAL SerialUSB
#define TRANS_SERIAL  Serial
#else

#endif


//RX=2,TX=3(D2) Software Serial Port

void setup() {
 TRANS_SERIAL.begin(9600); 

    SERIAL.begin(9600);  // start serial for output
    SERIAL.println("Version:v1.0");
}

void loop() {
    printData();
}

/*
* data mapping:E1---1；E2---2；E3---3；E4---4；E5---5；E6---6；
*              E7---7；E8---8；E9---9；EA---*；EB---0；EC---#；
*/
void printData() {
    while(TRANS_SERIAL.available()) {
        uint8_t data = TRANS_SERIAL.read();
        switch(data) {
                case 0xE1 :
                    SERIAL.println("1");
                    break;
                case 0xE2 :
                    SERIAL.println("2");
                    break;
                case 0xE3 :
                    SERIAL.println("3");
                    break;
                case 0xE4 :
                    SERIAL.println("4");
                    break;
                case 0xE5 :
                    SERIAL.println("5");
                    break;
                case 0xE6 :
                    SERIAL.println("6");
                    break;
                case 0xE7 :
                    SERIAL.println("7");
                    break;
                case 0xE8 :
                    SERIAL.println("8");
                    break;
                case 0xE9 :
                    SERIAL.println("9");
                    break;
                case 0xEA :
                    SERIAL.println("*");
                    break;
                case 0xEB :
                    SERIAL.println("0");
                    break;
                case 0xEC :
                    SERIAL.println("#");
                    break;
                default:
                    break;
            }
    }

}

```

- **Paso 3.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 4.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas `ctrl`+`shift`+`m` al mismo tiempo. Establece la velocidad de baudios a **9600**.

:::tip
Ahora, toca el teclado, entonces el monitor mostrará la tecla correspondiente.
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/arduino-output.jpg" alt="grove keypad demo" title="output" />
  </figure>
</div>

### Jugar con Raspberry pi

**Materiales requeridos**

| Raspberry pi | Grove Base Hat para RasPi| Grove Teclado Táctil Capacitivo de 12 botones |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

- **Paso 1**. Conecta el Grove Base Hat al Raspberry.

- **Paso 2**. Conecta el Grove 12 button Capacitive Touch Keypad al puerto **UART** del Base Hat.

- **Paso 3**. Enciende la Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pii-connect.jpg)

#### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

##### Configuración UART

Antes de comenzar, necesitamos configurar la UART de la Raspberry Pi.

- Paso 1. Habilita la **UART0** de la Raspberry Pi3.

```
sudo nano /boot/config.txt
```

Luego añade el contenido `dtoverlay=pi3-disable-bt` al final del **config.txt**

Presiona `ctrl`+`x` para salir de nano, y presiona `y` para guardar la modificación.

- Paso 2. Deshabilita el servicio del sistema para usar el UART0.

```
sudo systemctl disable hciuart
```

:::note
Pi3-disable-bt desactiva el dispositivo Bluetooth y restaura UART0/ttyAMA0 a los GPIOs 14 y 15. También es necesario desactivar el servicio del sistema que inicializa el módem para que no use la UART: sudo systemctl disable hciuart.
:::

- Paso 3. Elimina el `console=serial0,115200` en **cmdline.txt**.

```
sudo nano /boot/cmdline.txt
```

Luego elimina `console=serial0,115200` en este archivo.

:::note
        Si no puedes encontrar `console=serial0,115200` en este archivo txt, simplemente omite este paso.
:::

- Paso 4. Reinicia la Raspberry Pi

```
sudo reboot
```

Para más detalles, consulte la [Configuración UART oficial de Raspberry Pi](https://www.raspberrypi.org/documentation/configuration/uart.md)

##### Demo de Raspberry Pi

- **Paso 1**. Siga [Configuración de Software](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar el entorno de desarrollo.

Después de que el entorno del sistema se configure exitosamente, puede ver un mensaje como este:

```cpp
Running setup.py install for grove.py ... done
Successfully installed grove.py-0.6
#######################################################
  Lastest Grove.py from github install complete   !!!!!
#######################################################

```

Ahora, escribe 'ls', puedes encontrar la carpeta **grove.py** bajo el directorio raíz.

```cpp
pi@raspberrypi:~ $ ls
01_HelloRPi            Desktop    MagPi         rpi_apa102driver
01_HelloRPi.cpp        Documents  Music         Templates
4mics_hat              Downloads  ofxGPIO       Videos
apa102_led.c           env        Pictures      wiringpi_apa102
bcm2835-1.50           grove.py   Public        wiringpi_apa102.cpp
bcm2835-1.50.tar.gz    led        python_games
bcm2835-1.50.tar.gz.1  led1       respeaker

```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar la demostración.

```
cd grove.py/grove
python grove_12_channel_touch_keypad.py

```

:::tip
    Luego toca la tecla, la terminal mostrará la tecla correspondiente.
:::

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/grove-py-result.jpg)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo de esquemático del Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip)
- **[PDF]** [Hoja de datos del ATtiny1616](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/ATtiny1616-1617_Datasheet.pdf)

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
