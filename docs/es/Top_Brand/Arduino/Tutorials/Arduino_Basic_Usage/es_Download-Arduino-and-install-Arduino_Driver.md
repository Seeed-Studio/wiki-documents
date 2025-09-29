---
description: Descargar Arduino e instalar el controlador de Arduino
title: Descargar Arduino e instalar el controlador de Arduino

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Download-Arduino-and-install-Arduino_Driver
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Arduino_quickstart.jpg)

## Descargar el Entorno de Arduino

Ahora Arduino IDE está disponible para Windows, Mac OS X y Linux. Por favor haz clic en el botón de abajo para descargar.

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

:::note
    Recomendamos usar la versión más reciente del Arduino IDE.
:::

## Configurar el Arduino IDE

### Para Windows y Mac OS X

Descarga el software correspondiente, y haz clic en setup.exe, luego sigue las instrucciones y estará listo.

### Para Linux

Por favor ve a  ![Installing Arduino on Linux](http://playground.arduino.cc/Learning/Linux)

## Conectar Seeeduino a la PC

Conecta la placa Seeeduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado PWR) debería encenderse.

## Instalar el controlador

### Instalando controladores para el Seeeduino con Windows 7

* Conecta tu placa y espera a que Windows comience su proceso de instalación de controladores. Después de unos momentos, el proceso fallará.
* Abre el Administrador de Dispositivos haciendo clic derecho en "Mi PC" y seleccionando panel de control.

* Busca bajo Puertos (COM &amp; LPT). Deberías ver un puerto abierto llamado "Puerto Serie USB" Haz clic derecho en el "Puerto Serie USB" y elige la opción "Actualizar Software de Controlador".

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)

* A continuación, elige la opción "Buscar software de controlador en mi equipo".

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)

* Finalmente, selecciona el archivo de controlador llamado "FTDI USB Drivers", ubicado en la carpeta "Drivers" de la descarga del Software de Arduino.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

<font color="red"><strong>Nota:</strong> los Controladores USB FTDI son de Arduino. Pero cuando instales controladores para otros Controladores, como Xadow Main Board, Seeeduino Clio, Seeeduino Lite, necesitas descargar el archivo de controlador correspondiente y guardarlo. Y seleccionar el archivo de controlador que has descargado.</font>

* Los cuadros de diálogo de abajo aparecen automáticamente si has instalado el controlador exitosamente.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)

* Puedes verificar que los controladores han sido instalados abriendo el Administrador de Dispositivos de Windows. Busca un "Puerto Serie USB" en la sección Puertos.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)

* También puedes ver el puerto serie en el entorno de Arduino.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

### Instalando controladores para el Seeeduino con Windows 8

Debes guardar estos archivos que estás editando antes de instalar el controlador con Windows 8, porque habrá varios apagados durante la operación.

* Presiona "Tecla de Windows" + "R"

* Ingresa shutdown.exe /r /o /f /t 00

* Haz clic en el botón "OK".

* El sistema se reiniciará a una pantalla "Elegir una opción"

* Selecciona "Solucionar problemas" de la pantalla "Elegir una opción"

* Selecciona "Opciones avanzadas" de la pantalla "Solucionar problemas"

* Selecciona "Configuración de inicio de Windows" de la pantalla "Opciones avanzadas"

* Haz clic en el botón "Reiniciar"

* El sistema se reiniciará a la pantalla "Opciones de arranque avanzadas"

* Selecciona "Deshabilitar imposición de firma de controladores"

* Una vez que el sistema inicie, puedes instalar los controladores de Arduino igual que en Windows

### Instalando controladores para el Seeeduino con Mac OS

* Ingresa a la página: [https://www.ftdichip.com](https://www.ftdichip.com).

* Descarga el Controlador para la versión Mac OS X, llamado 2.2.18 (32bit)

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)

* Abre el archivo de controlador que acabas de descargar, y haz doble clic en FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)

* Después del doble clic, verás una ventana de instalador.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)

* Haz clic en "Continuar".

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)

* Puedes ver los cuadros de diálogo de abajo si has instalado el controlador exitosamente.

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)

* Pruébalo con Seeeduino

![](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

-----------------------------

# añadir

## Instalar el Controlador

En primer lugar, necesitas:

* **Conseguir un cable Micro-USB**
  * Necesitas un cable Micro-USB primero; el cable de datos de un teléfono Android funcionará bien.
Si no puedes encontrar uno, puedes comprar uno [aquí](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Conectar la placa**
  * El Seeeduino V4.2 automáticamente toma energía ya sea de la conexión USB a la computadora o de una fuente de alimentación externa. Conecta la placa Arduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado como **PWR**) debería encenderse.

### Para Windows

:::note
Este controlador está disponible para Windows XP, Windows Vista, Windows 7, Windows 8/8.1 y Windows 10.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

* Conecta tu placa y espera a que Windows comience su proceso de instalación del controlador. Después de unos momentos, el proceso fallará, a pesar de los mejores esfuerzos.
* Haz clic en el Menú Inicio y abre el Panel de Control.
* Mientras estés en el Panel de Control, navega a Sistema y Seguridad. Luego, haz clic en Sistema. Una vez que la ventana del Sistema esté abierta, abre el **Administrador de Dispositivos**.
* Busca bajo Puertos (COM y LPT). Deberías encontrar un puerto abierto llamado "Seeeduino v4.2". Si no hay una sección COM y LPT, busca bajo "Otros Dispositivos" por "Dispositivo Desconocido".
* Haz clic derecho en el puerto "Seeeduino v4.2" y elige la opción "Actualizar Software del Controlador".
* Luego, elige la opción "Buscar software del controlador en mi computadora".
* Finalmente, navega y selecciona el archivo del controlador llamado "seeed_usb_serial.inf"
* Windows terminará la instalación del controlador desde ahí.

### Para Mac OSX

No necesitas instalar ningún controlador.

### Para Linux

## Comenzando en Linux

Para usar en Linux, por favor ve a [Instalando Arduino en Linux](http://playground.arduino.cc/Learning/Linux)

No necesitas instalar ningún controlador.

-----------------------
En primer lugar, necesitas Instalar un Software de Arduino.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

-------------

#### P1. ¿Cuál es la diferencia entre Arduino UNO y Seeeduino v4.2?

Seeeduino v4.2 es completamente compatible con Arduino UNO. Las principales diferencias se listan a continuación:

* Usa un micro USB para alimentar y programar la placa
* 3 conectores Grove integrados
* Interruptor de alimentación del sistema 3.3/5V
* Circuito DCDC en lugar de LDO, más eficiencia
* Otras mejoras del circuito

#### P2. No puedo subir mi sketch al Seeeduino v4.2

Por favor verifica,

* Si el LED de Alimentación está encendido
* Si elegiste el Puerto y Placa correctos (Seeeduino v4.2)
* Cierra y reabre Arduino IDE e intenta de nuevo

#### P3. ¿Dónde puedo encontrar soporte técnico si tengo algún otro problema?

Puedes publicar una pregunta en el [Foro de Seeed](https://community.seeedstudio.com/discover.html?t=Arduino) .

## Soporte Técnico y Discusión del Producto


<br />

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
