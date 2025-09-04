---
description: Seeeduino Mega
title: Seeeduino Mega
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Mega
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_cover.jpg)

Seeeduino Mega es un potente microcontrolador derivado de Arduino Mega. Cuenta con el procesador ATmega2560 que proporciona una gran cantidad de pines de E/S, hasta 70 E/S digitales, 16 entradas analógicas, 14 PWM y 4 puertos serie por hardware. Comparado con Arduino Mega, redujimos el volumen de Arduino Mega en al menos un 30% y lo hicimos 100% compatible con [productos Seeed Shield](https://www.seeedstudio.com/s/shield.html). Y como miembro de la serie Seeeduino, Seeeduino Mega hereda detalles deliberados de Seeeduino, como voltaje de operación seleccionable (3.3V/5V), botón de reset en ángulo recto, y más.


[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Mega-p-717.html)


## Ideas de Aplicación

* Internet de las Cosas  
* Hazlo Tú Mismo
* Robot
* Casa Inteligente
* Impresora 3D
* Industrial

Aquí tienes algunos proyectos divertidos para tu referencia.

|Cubo LED 8*8*8|Robot Hexápodo|Impresora 3D Arduino DIY|
|-------|-------|--------
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_3.jpg)|
|[Hazlo Ahora](https://www.instructables.com/id/Arduino-Mega-8x8x8-RGB-LED-Cube/)|[Hazlo Ahora](https://www.instructables.com/id/Arduino-Mega-Hexapod/)|[Hazlo Ahora](https://www.instructables.com/id/Arduino-Controlled-CNC-3D-Printer/)|

## Características

* Compatible con la mayoría de Shields Arduino Duemilanove y Diecimila
* ATmega 2560 @ 16MHz
* Operación seleccionable 5V/3.3V
* 70 E/S Digitales
* 16 entradas analógicas
* 14 salidas PWM
* 4 puertos serie por hardware (UART)
* Factor de forma pequeño, 30% más pequeño que Arduino Mega
* Fácil de programar, no se requiere hardware adicional para cargar firmware – solo conecta a un puerto USB y listo.
* Header ICSP
* Puede ser alimentado a través de una batería o a través de un adaptador AC a DC

## Especificaciones

|Elemento|Valor|
|------------|-----------|
|Microcontrolador|ATmega2560|
|Voltaje de Operación|5V/3.3V|
|Voltaje de Entrada|7-12V|
|Pines de E/S Digitales|70|
|Canales PWM|14|
|Canales de Entrada Analógica|16|
|Corriente DC por Pin de E/S|20 mA|
|Memoria Flash|256 KB|
|RAM|8 KB|
|EEPROM|4 KB|
|Velocidad de Reloj|16 MHz|

## Descripción General del Hardware

La imagen a continuación muestra una descripción general de las características del hardware de Seeeduino Mega. El diagrama de pines y las funciones alternativas de varios pines de Seeeduino Mega se muestran en el diagrama de pines. Esto podría usarse como una referencia rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_hardware1.png)


- **Mini USB**
El puerto Mini USB se usa para conectar la placa a tu PC para programación y para alimentación.
- **Interruptor de Modo**
Interruptor deslizante usado para permitir o evitar el reinicio y carga automática.
- **Interruptor de Alimentación**
Interruptor deslizante usado para cambiar el nivel lógico y la salida de alimentación de la placa a 5V o 3.3V. Hoy en día muchos sensores nuevos y excelentes están siendo desarrollados para trabajar con 3.3V, con otras placas duino necesitarías colocar un convertidor de nivel lógico entre la placa y estos sensores, ¡con el Seeeduino Mega todo lo que tienes que hacer es deslizar el interruptor!
- **Entrada DC**
La entrada DC permite que tu Seeeduino Mega sea alimentado desde un adaptador de pared para que puedas suministrar más energía a tu proyecto si es necesario, por ejemplo cuando uses motores DC u otros dispositivos de alta potencia. La entrada DC puede ser de 7V-12V. Como la corriente pico es de 2A cuando el modelo está encendido, la alimentación DC es tu mejor opción que la alimentación USB.
- **Reset**
Este botón está convenientemente ubicado en el lateral para permitirte reiniciar la placa Seeeduino incluso cuando un shield está colocado encima. Este no es el caso en otras placas Arduino donde el botón está colocado arriba haciéndolo difícil de acceder.
- **ICSP**
Esta es la conexión ICSP para el ATmega328P, está ubicada en la posición estándar ICSP/SPI para hardware compatible con Arduino Uno, Due, Mega, y Leonardo (ej. shields) que pueden usar este conector. Los pines SPI en este puerto: MISO, SCK, y MOSI, también están conectados a los pines digitales 12, 13, y 11 respectivamente igual que los del Arduino Uno.
- **Pines Digitales**
Hay hasta 70 pines digitales en Seeeduino Mega. Haz clic [aquí](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf) para ver el mapeo de pines entre los pines de Arduino y los pines de Atmega2560.
Cada uno de los 70 pines digitales en el Mega puede ser usado como entrada o salida, usando las funciones pinMode(), digitalWrite(), y digitalRead(). Operan a 5 voltios. Cada pin puede proporcionar o recibir 20 mA como condición de operación recomendada y tiene una resistencia pull-up interna (desconectada por defecto) de 20-50 k ohm. Un máximo de 40mA es el valor que no debe ser excedido para evitar daño permanente al microcontrolador.
Además, algunos pines tienen funciones especializadas:
	* Serial: 0 (RX) y 1 (TX); Serial 1: 19 (RX) y 18 (TX); Serial 2: 17 (RX) y 16 (TX); Serial 3: 15 (RX) y 14 (TX). Usado para recibir (RX) y transmitir (TX) datos serie TTL. Los pines 0 y 1 también están conectados a los pines correspondientes del chip ATmega16U2 USB-to-TTL Serial.
	* Interrupciones Externas: 2 (interrupción 0), 3 (interrupción 1), 18 (interrupción 5), 19 (interrupción 4), 20 (interrupción 3), y 21 (interrupción 2). Estos pines pueden ser configurados para disparar una interrupción en un nivel bajo, un flanco ascendente o descendente, o un cambio en el nivel. Ver la función attachInterrupt() para detalles.
	* PWM: 2 a 13 y 44 a 46. Proporcionan salida PWM de 8 bits con la función analogWrite().
	* SPI: 50 (MISO), 51 (MOSI), 52 (SCK), 53 (SS). Estos pines soportan comunicación SPI usando la librería SPI. Los pines SPI también están disponibles en el header ICSP, que es físicamente compatible con el Arduino /Genuino Uno.
	* LED: 13. Hay un LED incorporado conectado al pin digital 13. Cuando el pin está en valor HIGH, el LED está encendido, cuando el pin está en LOW, está apagado.
	* TWI: 20 (SDA) y 21 (SCL). Soportan comunicación TWI usando la librería Wire. Nota que estos pines no están en la misma ubicación que los pines TWI en las placas Arduino Duemilanove o Diecimila antiguas.
	* Analógico: El Mega 2560 tiene 16 entradas analógicas, cada una de las cuales proporciona 10 bits de resolución (es decir, 1024 valores diferentes). Por defecto miden desde tierra a 5 voltios, aunque es posible cambiar el extremo superior de su rango usando el pin AREF y la función analogReference().
	* AREF: Voltaje de referencia para las entradas analógicas. Usado con analogReference().
	* Reset: Lleva esta línea a LOW para reiniciar el microcontrolador. Típicamente usado para añadir un botón de reinicio a shields que bloquean el de la placa.
	* Los pines no marcados: Úsalos operando el Registro.

## Instalar el Driver

En primer lugar, necesitas:

* **Conseguir un cable Micro-USB**
Necesitas un cable Micro-USB primero; el cable de datos de un teléfono Android funcionará bien.
Si no puedes encontrar uno, puedes comprar uno [aquí](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar la placa**
Conecta la placa Arduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado como **PWR**) debería encenderse.


**Para Windows**

:::note
    Este driver está disponible para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 y Windows 10.
:::
[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- Conecta tu placa y espera a que Windows comience su proceso de instalación del driver. Después de unos momentos, el proceso fallará, a pesar de los mejores esfuerzos.
- Haz clic en el Menú Inicio y abre el Panel de Control.
- Mientras estés en el Panel de Control, navega a Sistema y Seguridad. Luego, haz clic en Sistema. Una vez que la ventana del Sistema esté abierta, abre el **Administrador de Dispositivos**.
- Busca bajo Puertos (COM y LPT). Deberías encontrar un puerto abierto llamado "Seeeduino Mega". Si no hay una sección COM y LPT, busca bajo "Otros Dispositivos" por "Dispositivo Desconocido".
- Haz clic derecho en el puerto "Seeeduino Mega" y elige la opción "Actualizar Software del Controlador".
- Luego, elige la opción "Buscar software del controlador en mi equipo".
- Finalmente, navega y selecciona el archivo del driver llamado "Seeeduino Mega.inf"
- Windows terminará la instalación del driver desde ahí.

**Para Mac OSX**

No necesitas instalar ningún driver.


## Comenzando

:::note
    Esta parte está basada en Arduino 1.6.9 bajo Windows 10.
:::
En primer lugar, necesitas Instalar un Software de Arduino.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Ejecutar la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que has descargado previamente.

:::note
    Si el Software de Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del Software de Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

**Abrir el ejemplo Blink**

Abre el sketch de ejemplo del parpadeo del LED: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Añadir Seeeduino a tu Arduino IDE**

Haz clic en **File > Preference**, y llena Additional Boards Manager URLs con la siguiente url:
    *https://raw.githubusercontent.com/Seeed-Studio/Seeeduino-Boards/master/package_seeeduino_index.json*

Haz clic en OK para terminar la configuración. Luego haz clic en **Tools > Board > Boards Manager**, encuentra **Seeeduino by Seeed Studio**, e Instálalo.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/add_board.png)

**Seleccionar tu placa**

Necesitarás seleccionar la entrada en el menú **Tools > Board** que corresponde a tu Arduino.
Seleccionando un **Seeeduino Mega 2560**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/mega_arduino_ide.png)

**Seleccionar tu puerto serie**

Selecciona el dispositivo serie de la placa Arduino desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (**COM1** y **COM2** usualmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Arduino y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/select_com_seeeduino_mega.png)

:::note
    En Mac, esto debería ser algo con **/dev/tty.USBmodem**.
:::
**Subir el programa**

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos y si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

Unos segundos después de que termine la subida, deberías ver el LED del pin 13 (L) en la placa comenzar a parpadear (en naranja). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

## Comenzando en Linux

Para usar en Linux, por favor ve a [Instalando Arduino en Linux](http://playground.arduino.cc/Learning/Linux)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

* **Esquemático**

    [Archivo Eagle de Seeeduino Mega](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip)

* **Mapeo de Pines**

    [PDF de Mapeo de Pines de Seeeduino Mega](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf)

* **Referencias**

    [Comenzando con Arduino](https://www.arduino.cc/en/Guide/HomePage)

    [Referencia del Lenguaje Arduino](https://www.arduino.cc/en/Reference/HomePage)

    [Descargar el Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)

    [FAQ de Arduino](https://www.arduino.cc/en/Main/FAQ)

    [Introducción a Arduino](https://www.arduino.cc/en/guide/introduction)

    [Página de Wikipedia para Arduino](https://en.wikipedia.org/wiki/Arduino)

    [Arduino Mega](https://www.arduino.cc/en/Main/ArduinoBoardMega2560?setlang=en)

## FAQ

**¿Cuál es la diferencia entre Arduino Mega y Seeeduino Mega?**

Seeeduino Mega es un microcontrolador potente derivado de Arduino Mega. Y estas son las principales diferencias:

* Usa un mini USB para alimentar y programar
* Añade interruptor de alimentación del sistema 3.3/5V
* Añade interruptor de modo de reinicio automático
* Tamaño más pequeño

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
