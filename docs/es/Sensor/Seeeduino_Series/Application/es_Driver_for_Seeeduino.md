---
description: Controlador para Seeeduino
title: Controlador para Seeeduino
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Driver_for_Seeeduino
last_update:
  date: 1/31/2023
  author: shuxu hu
---

##   Instalar el controlador

###   Instalación de controladores para el Seeeduino con Windows 7


*Conecta tu placa y espera a que Windows comience su proceso de instalación del controlador. Después de unos momentos, el proceso fallará.
*   Abre el Administrador de dispositivos haciendo clic derecho en "Mi PC" y seleccionando panel de control.

*   Busca en Puertos (COM y LPT). Deberías ver un puerto abierto llamado "Puerto serie USB". Haz clic derecho en el "Puerto serie USB" y elige la opción "Actualizar software de controlador".


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)


*   A continuación, elige la opción "Buscar software de controlador en mi equipo".


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)


*   Finalmente, selecciona el archivo de controlador llamado "FTDI USB Drivers", ubicado en la carpeta "Drivers" de la descarga del Software de Arduino.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

**Nota:** los controladores USB FTDI son de Arduino. Pero cuando instales controladores para otros controladores, como Xadow Main Board, Seeeduino Clio, Seeeduino Lite,

necesitas descargar el archivo de controlador correspondiente y guardarlo. Y seleccionar el archivo de controlador que has descargado.


*   Los siguientes cuadros de diálogo aparecen automáticamente si has instalado el controlador exitosamente.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)


*   Puedes verificar que los controladores han sido instalados abriendo el Administrador de dispositivos de Windows. Busca un "Puerto serie USB" en la sección Puertos.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)


*   También puedes ver el puerto serie en el entorno de Arduino.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

###   Instalación de controladores para el Seeeduino con Windows 8

Debes guardar estos archivos que estás editando antes de instalar el controlador con Windows 8, porque habrá varios apagados durante la operación.


*   Presiona "Tecla de Windows" + "R"

*   Ingresa shutdown.exe /r /o /f /t 00

*   Haz clic en el botón "Aceptar".

*   El sistema se reiniciará a una pantalla "Elegir una opción"

*   Selecciona "Solucionar problemas" de la pantalla "Elegir una opción"

*   Selecciona "Opciones avanzadas" de la pantalla "Solucionar problemas"

*   Selecciona "Configuración de inicio de Windows" de la pantalla "Opciones avanzadas"

*   Haz clic en el botón "Reiniciar"

*   El sistema se reiniciará a la pantalla "Opciones de arranque avanzadas"

*   Selecciona "Deshabilitar imposición de firma de controladores"

*   Una vez que el sistema inicie, puedes instalar los controladores de Arduino igual que en Windows


###   Instalación de controladores para el Seeeduino con Mac OS


*   Ingresa a la página: [https://www.ftdichip.com](https://www.ftdichip.com).


*   Descarga el controlador para la versión Mac OS X, llamado 2.2.18 (32bit)


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)


*   Abre el archivo de controlador que acabas de descargar, y haz doble clic en FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)


*   Después de hacer doble clic, verás una ventana del instalador.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)


*   Haz clic en "Continuar".


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)


*   Puedes ver los siguientes cuadros de diálogo si has instalado el controlador exitosamente.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)


*   Pruébalo con Seeeduino


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>