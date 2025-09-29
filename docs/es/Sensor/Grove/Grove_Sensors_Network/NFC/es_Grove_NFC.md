---
title: Grove - NFC
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove_NFC/
slug: /es/Grove_NFC
last_update:
  date: 01/06/2022
  author: gunengyu
---

<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_01.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_02.jpg" />
      </td>
    </tr>
  </tbody></table>


La Comunicación de Campo Cercano (NFC) es un conjunto de tecnologías inalámbricas de corto alcance. Está detrás de aplicaciones cotidianas como sistemas de control de acceso y sistemas de pago móvil.
Grove NFC cuenta con un módulo transceptor altamente integrado PN532 que maneja la comunicación sin contacto a 13.56MHz. Puedes leer y escribir una etiqueta de 13.56MHz con este módulo o implementar intercambio de datos punto a punto con dos NFCs. Grove NFC está diseñado para usar protocolos de comunicación I2C o UART, y UART es el modo predeterminado. Además, asignamos una antena PCB independiente que puede extenderse fácilmente fuera de cualquier carcasa que uses, dejando más espacio para que diseñes el exterior de tu proyecto.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

|Versión|Fecha|Cambio|
|--|--|--|
|Grove NFC V1.0|11 de diciembre, 2015 |inicial|
|Grove NFC V1.1|31 de agosto, 2016| Agregar almohadillas TP2/TP3 en la parte posterior del PCB, para cambiar entre I2C y UART|

## Especificaciones

- Voltaje de Funcionamiento: 3.3V
- Corriente de Funcionamiento:
  - Modo Estático: 73mA
  - Modo Escritura/Lectura: 83mA
- Interfaz de host compatible: I2C, UART(por defecto).
- Sirve para comunicación sin contacto a 13.56MHz.
- Compatible con protocolos ISO14443 Tipo A y Tipo B.
- La distancia máxima de operación para detectar etiquetas NFC es de 28mm dependiendo del tamaño actual de la antena.
- Dimensiones: 25.43mm x 20.35mm

:::tip
Para más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción general del hardware

### Grove NFC v1.0

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC_cutAndsolder.jpg)  

La configuración predeterminada es UART, si necesitas cambiarla a I2C, entonces debes hacer algo de soldadura primero.

Corta las siguientes conexiones:

- TP1 a UART
- TP2 a RX
- TP3 a TX

Solda las siguientes conexiones:

- TP1 a I2C
- TP2 a SCL
- TP3 a SDA

### Grove NFC v1.1

La configuración predeterminada es UART, si necesitas cambiarla a I2C, entonces debes cortar la conexión UART y luego soldar los pines I2C como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/v1.1%20hardware%20connection.png)

## Primeros pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

El Grove - NFC soporta I2C y UART, [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) soporta Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan y Arduino Leonardo/Seeeduino Lite.

### Jugar con Seeeduino Lite

#### Hardware

**Materiales requeridos**

| Seeeduino Lite | Base Shield| Grove - NFC |  Etiquetas NFC|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">Obtener uno ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener uno ahora</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">Obtener uno ahora</a>|Por favor prepárate tú mismo|

- **Paso 1.** Conecta Grove - NFC al puerto **UART** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino Lite.

- **Paso 3.** Conecta Seeeduino Lite a la PC mediante un cable USB

#### Software

- **Paso 1.**  Descarga la [Librería Seeed Arduino NFC](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Paso 2.**  Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería **Seeed Arduino NFC** para Arduino.

- **Paso 3.**  Abre el código "WriteTag" a través de la ruta: **File --> Examples --> WriteTag**.

- **Paso 4.**  Modifica el código como se muestra a continuación para habilitar la comunicación SPI.

:::tip
xiao puede tener problemas de compatibilidad de pines.
:::

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **Paso 5.** Sube el código. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 6.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ctrl+shift+m al mismo tiempo. Establece la velocidad de baudios en **9600**.

- **Paso 7.** Usa el Grove - NFC para acercarlo a una etiqueta NFC. Si todo va bien, obtendrás la información de la etiqueta NFC en el Monitor Serie.

:::warning
Si quieres conectar a los puertos UART del Arduino Mega, puedes cambiar PN532_HSU pn532hsu(Serial1) a PN532_HSU pn532hsu(SerialX). X representa el puerto serie del arduino mega que uses. Si quieres conectar sensores Grove-NFC al Arduino Uno, puedes usar el puerto serie por software. Por favor sigue las instrucciones a continuación para configurar [puerto serie por software](https://www.arduino.cc/en/Reference/softwareSerial).
:::

```cpp
#if 0 // use SPI
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 0 // use hardware serial

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 1  // use software serial

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else //use I2C

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
``` 

 
### Jugar con Seeedunio V4.2 

### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - NFC |  Etiquetas NFC|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">Obtener Uno Ahora</a>|Por favor prepáralo tú mismo|

:::note
**1.** Por favor, elija etiquetas NFC de 13.5MHZ, ISO14443, o el módulo Grove - NFC puede no ser capaz de leer la etiqueta.

**2.** Por favor, conecte el cable USB con cuidado, de lo contrario puede dañar el puerto. Por favor, use el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no está seguro sobre el cable que tiene, puede hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**3.** Cada módulo Grove viene con un cable Grove cuando lo compra. En caso de que pierda el cable Grove, puede hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

**4.** Para esta demostración, puede trabajar sin el baseshield, ya que el Seeeduino V4.2 tiene un conector Grove I2C integrado.
:::

- **Paso 1.** Conecte Grove - NFC al puerto **I2C** del Grove-Base Shield. Por favor, asegúrese de seguir la descripción general del hardware para cambiar la configuración UART predeterminada a I2C.

- **Paso 2.** Conecte Grove - Base Shield al Seeeduino V4.2.

- **Paso 3.** Conecte Seeeduino V4.2 a la PC a través de un cable USB


#### Software

- **Paso 1.**  Descargue [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC).

- **Paso 2.**  Consulte [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca **Seeed Arduino NFC** para Arduino.

- **Paso 3.**  Abra el código "WriteTag" a través de la ruta: **File --> Examples --> WriteTag**.

- **Paso 4.**  Modifique el código como se muestra a continuación para habilitar la comunicación I2C.

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **Paso 5.** Sube el código. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 6.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios en **9600**

- **Paso 7.** Usa el Grove - NFC para acercarlo a una etiqueta NFC. Si todo va bien, obtendrás la información de la etiqueta NFC en el Monitor Serie.

# Grove - NFC v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - NFC v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos EAGLE (esquemático y placa) del Grove - NFC v1.0](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip)
- **[Zip]** [Archivos EAGLE (esquemático y placa) del Grove - NFC v1.1](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip)
- **[PDF]** [Hoja de datos del PN532 PDF](https://files.seeedstudio.com/wiki/Grove-NFC/res/PN532.pdf)
- **[Librería]** [Librería Arduino NFC de Seeed](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)

## Proyecto

**Particle Photon + Grove NFC + Grove LCD vía I2C** Usa Particle Photon para leer el UID de una tarjeta NFC y mostrarlo en LCD, todo con I2C.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-photon-grove-nfc-grove-lcd-via-i2c-7e7d36/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_NFC -->

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
