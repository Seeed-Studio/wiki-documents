---
description: Seeeduino Crypto (ATmega4809 ECC608)
title: Seeeduino Crypto (ATmega4809 ECC608)
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-Crypto-ATmega4809-ECC608
last_update:
  date: 1/31/2023
  author: shuxu hu
---


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Seeed-Crypto-ATmega4809-ECC608-wiki.jpg)

Seeeduino Crypto está diseñado para encriptación. Se basa en el ATmega4809 de alto rendimiento y el chip de encriptación microchip ECC608. Con la ayuda del chip de encriptación ECC608, puedes experimentar la encriptación I2C y otras comunicaciones encriptadas.

Además de la encriptación, Seeeduino Crypto tiene las mismas funciones que Seeeduino V4.2 / Arduino Uno Rev3. Tiene recursos de interfaz ricos, incluyendo 6 pines de entrada analógica, 14 I/O digitales - 5 para salida PWM, con 2 puertos Grove I2C y 1 puerto Grove UART. Solo conéctalo y usa cientos de sensores y actuadores.

La solución de control Seeeduino Crypto es la misma que ARDUINO UNO WIFI REV2. La diferencia es que Seeeduino Crypto no tiene WIFI integrado. Puedes agregar un módulo wifi de Arduino si es necesario. Correspondientemente, el precio de Seeeduino Crypto es menos de la mitad de ARDUINO UNO WIFI REV2.

:::tip

    Este producto permite a los usuarios experimentar el modo de encriptación de comunicación I2C con gran plasticidad.
:::

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html)

## Características

- Microcontrolador ATmega4809 de alto rendimiento

- Chip criptográfico de alta seguridad ECC608, soporta SHA-256 & HMAC Hash / AES-128

- 2 Grove I2C + 1 Grove UART, fácil de prototipar

- Alimentación Type C + transmisión de datos

## Especificaciones

|Elemento|Detalle|
|---|---|
| Chip | Microcontrolador: ATMEGA4809-AFR   / Encriptación: ECC608 |
| Velocidad de Reloj | 16Mhz |
| Recursos I/O |Canales de Entrada Analógica: 6  /Pines I/O Digitales: 14 / Canales PWM: 5|
| Interfaz Periférica |2 Puertos Grove I2C / 1 Puerto Grove UART / 1 Interfaz ICSP /1 puerto de datos USB Type C|
| Voltaje de Operación | 5V|
| Alimentación |5V USB Type C / Entrada DC Jack 8 -15 V|

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Hardware-figure.jpg)

- **Type C** Es la interfaz Type C de la placa, conectada al extremo del PC, utilizada como fuente de alimentación y descarga.  

- **LED RX / LED TX** LEDs indicadores de comunicación serie TX,RX, convenientes para que los usuarios conozcan el estado de recepción y transmisión de la comunicación serie.  
  
- **Conector de Alimentación DC** El voltaje de entrada es de 8v-15v.

- **Botón de Reset y LED de Reset** Utilizado para reiniciar la placa, cuando se reinicia, la lámpara de reset parpadeará.

- **LED de Alimentación** El indicador de alimentación del sistema.

- **Chip ATMEGA32U4-MU** El chip utilizado como USB a UPDI para descarga está conectado al MCU maestro atmega4809-afr para grabar el programa al MCU maestro.

- **Chip de Encriptación ATECC608** Un chip de encriptación para comunicación I2C.

- **Chip ATMEGA4809-AFR** MCU integrado, como el chip de control principal del sistema.

- **Conectores Grove** Contiene dos I2C y una interfaz estándar UART Grove

:::note

    Cuando se utiliza el puerto serie para comunicar los datos de salida, debe haber un cierto retraso de más de 25ms, de lo contrario el puerto serie puede bloquearse.
:::

## Primeros Pasos

:::note

    Esta parte está basada en Arduino 1.8.10 bajo Windows 10.
:::

En primer lugar, necesitas instalar un Software de Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note

    Si el Software Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

**Abrir el ejemplo Blink**

Abre el sketch de ejemplo de parpadeo del LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/select-blink.png)

**Añadir Seeeduino a tu IDE de Arduino**

Haz clic en **Tools > Board > Boards Manager**, puedes escribir la palabra clave 'MegaAVR' en la barra de búsqueda, encuentra **Arduino MegaAVR**, e instálalo.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/install.png)

**Selecciona tu placa**

Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando un **Arduino Uon WIFI Rev2**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/board.png)

**Selecciona tu puerto serie**

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** están usualmente reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/port.png)

**Subir el programa**

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si es así, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Recursos

- **Esquemático**

   [Diagrama Esquemático de Seeeduino Crypto](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/Seeeduino-Crypto-(ATmega4809%26ECC608).zip)  

- **Hoja de Datos**

   [Hoja de Datos ATECC608A-MAHDA-S](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATECC608A-MAHDA-S-datasheet.pdf)

   [Hoja de Datos ATMEGA32U4-MU](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA32U4-MU-datasheet.pdf)

   [Hoja de Datos ATMEGA4809-AFR](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA4809-AFR-datasheet.pdf)  

- **Referencias**

   [Comenzando con Arduino](https://www.arduino.cc/en/Guide/HomePage)

   [Referencia del Lenguaje Arduino](https://www.arduino.cc/en/Reference/HomePage)

   [Descargar el Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)

   [Preguntas Frecuentes de Arduino](https://www.arduino.cc/en/Main/FAQ)

   [Introducción a Arduino](https://www.arduino.cc/en/guide/introduction)

   [Página de Wikipedia para Arduino](https://en.wikipedia.org/wiki/Arduino)

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
