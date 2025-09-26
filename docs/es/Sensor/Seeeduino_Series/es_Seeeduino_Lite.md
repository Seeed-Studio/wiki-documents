---
description: Seeeduino Lite
title: Seeeduino Lite
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Lite
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/400px-Lite_01.jpg)

Seeeduino Lite es un microcontrolador basado en ATmega32U4. Al igual que Arduino Leonardo, ahorra un procesador secundario necesario para la comunicación USB a serie. Y esto permite que Seeeduino Lite aparezca ante la computadora como un dispositivo USB, como un teclado y ratón. Derivado de Leonardo, también fusionamos detalles personalizados de la serie Seeeduino en Seeeduino Lite, como voltaje de operación seleccionable, conectores Grove integrados y así sucesivamente. Tiene 20 E/S digitales (7 de las cuales pueden generar PWM), una conexión micro USB, un conector de alimentación, un encabezado ICSP y un botón de reinicio. Contiene todo lo necesario para soportar el microcontrolador; simplemente conéctalo a una computadora con un cable USB o aliméntalo con un adaptador AC-DC para comenzar.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html)


## Especificaciones
---
- Microcontrolador: ATmega32u4
- Voltaje de Operación: 5V
- Voltaje de Entrada (recomendado): 7-12V
- Voltaje de Entrada (límites): 6-20V
- Pines E/S Digitales: 20
- Canales PWM: 7
- Canales de Entrada Analógica: 12
- Corriente DC por Pin E/S: 40 mA
- Corriente DC para Pin 3.3V: 50 mA
- Memoria Flash: 32 KB (ATmega32u4) de los cuales 4 KB son usados por el bootloader
- SRAM: 2.5 KB (ATmega32u4)
- EEPROM: 1 KB (ATmega32u4)
- Velocidad de Reloj: 16 MHz

## Interfaz
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Seeeduino_Lite_Intrface_Function.jpg)

**U1:** IC 78M05, Regulador de voltaje positivo de tres terminales.

**U3:** IC LD1117, un Regulador de Voltaje de Baja Caída capaz de proporcionar hasta 800mA de Corriente de Salida.

**U5:** IC Atmega32U4, Microcontrolador AVR de 8 bits con 32K Bytes de Flash ISP y Controlador USB.


## Instalación del Controlador
---

:::note
    Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::


Descarga los archivos del controlador desde aquí [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver).

Conecta Seeeduino Lite a tu computadora mediante un cable micro-USB.

Espera el aviso de nuevo hardware encontrado. Si el instalador no se ejecuta automáticamente, navega al Administrador de Dispositivos de Windows y encuentra la entrada de Seeeduino Lite.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Unknow_Device.jpg)

Haz clic derecho y elige Actualizar controlador. Cuando se te pregunte si instalar automáticamente o desde una ubicación específica, selecciona "Buscar software de controlador en mi equipo".

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Update_Driver.jpg)

Elige "Buscar el mejor controlador en estas ubicaciones", y marca la casilla "incluir esta ubicación en la búsqueda". Haz clic en el botón Examinar y navega a la unidad que has descargado. Selecciona la carpeta drivers y haz clic en OK.


![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Browse_Driver_Location.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Successfully_Update_Driver.jpg)

Reemplaza dos archivos en la ruta de Arduino. Abre el directorio Arduino-1.0.1/hardware/arduino/cores/arduino, reemplaza el archivo: USBCore.cpp con el nuevo USBCore.cpp. Y reemplaza el archivo: boards.txt con el nuevo boards.txt en la ruta: Arduino-1.0.1/hardware/arduino. Ahora, puedes programar y usar el seeeduino lite como usas otras placas Arduino.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Seeeduino Lite](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip).
- [nuevo boards.txt](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [nuevo USBCore.cpp](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip).
- [Archivo de Controlador Lite](https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Signed_USB_Serial_Driver-master.zip).

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>