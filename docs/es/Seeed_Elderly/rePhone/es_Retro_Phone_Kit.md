---
description:  Kit de Teléfono Retro
title:  Kit de Teléfono Retro
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Retro Phone Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg)

El Kit de Teléfono Retro es un teléfono de hardware de código abierto que es compatible con Arduino. ¿Recuerdas RePhone? El primer teléfono modular y de código abierto del mundo, con el cual puedes hackear las cosas que te rodean con conexión celular. El Teléfono Retro puede considerarse como RePhone con botones que pueden llevarte de vuelta a esos viejos tiempos cuando el teléfono móvil era simplemente una herramienta para hacer llamadas telefónicas. El kit es muy fácil de usar, por lo que puedes hacer un teléfono móvil en minutos.

La placa principal de este kit es Xadow-Key Board, que contiene una pantalla y un panel de botones. La parte más importante es el RePhone Core 2G-Atmel32u4, que es una nueva placa RePhone Core que acaba de llegar al mercado. Utiliza MCU Atmel32u4 y soporta cuatro bandas 850/900/1800/1900MHz que cubren la red GSM en todo el mundo. También le permitimos mantener un conector de auriculares de 3.5mm para que puedas usar auriculares para hacer llamadas telefónicas. No incluimos ninguna carcasa para el teléfono, por lo que eres libre de hacer bricolaje con cualquier carcasa que te guste.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html)

## Características
---
- Compatible con Arduino

- Soporta Audio Analógico

- Solo 2G Nano SIM

- Certificado PTCRB

- LCD 128*64

- Conector de auriculares de 3.5mm (con Micrófono) que soporta OMTP

- Fuente de Alimentación: 3.4-4.2V(BAT) 5V(USB)

## Especificaciones

**Rephone Core 2G-Atmel32u4**

Para más información sobre este módulo, por favor consulta en [Rephone Core 2G-Atmel32u4](https://wiki.seeedstudio.com/es/RePhone_core_2G-Atmel32u4/)

|Elemento|	Valor|
|---|---|
|Microcontrolador|	Atmega32U4|
|Voltaje de Operación|	3.3V|
|Corriente DC por Pin I/O	|50|
|Memoria Flash	|32 KB de los cuales 4KB son usados por el bootloader|

|SRAM	|2.5 KB
|EEPROM|	1KB
|Velocidad de Reloj	|16 MHz
|Longitud	|68 mm
|Ancho	|30 mm
|Peso	|12 gr

## Conexión del Módulo
El Rephone Core 2G-Atmel32u4 integra un conector Xadow de 36 pines y un conector Xadow de 11 pines, similar al Xadow - GSM＋BLE. En este caso, la conexión del módulo es muy fácil,

1. Conecta el Xadow Key Board al tablero central RePhone a través del conector de 36 pines. Ten en cuenta que el cable debe insertarse firmemente y plano, y lo más importante, mantén el lado 'TOP' hacia arriba.

2. Inserta la antena

3. Inserta una tarjeta SIM nano 2G

4. Conecta la batería Lipo al tablero central Rephone a través de la interfaz de batería.

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG)

## Ejecutar un código de prueba

**RePhone_Menu_GSM**

Paso1. Instala el Rephone Core 2G-Atmel32u4, por favor haz clic [aquí](https://wiki.seeedstudio.com/es/RePhone_core_2G-Atmel32u4/#arduino-ide) para ver la instrucción completa.

Paso2. Encuentra el ejemplo y súbelo a tu tablero

Una vez que hayas instalado el Rephone Core 2G-Atmel32u4 en Arduino IDE, los ejemplos básicos también estarán incluidos y puedes encontrarlos en la sección de ejemplos.

Los ejemplos incluyen:
- Atmel32u4_gprs.h
- TimerOne.h
- Rephone_lcm.h
- Rephone_button.h
- Rephone_menu_gsm

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png)

Paso3. Haz una llamada telefónica a ti mismo

- Si el ejemplo se sube exitosamente, la pantalla se encenderá y podrás ver el menú principal como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG)

- Haz clic en el botón derecho para seleccionar la interfaz de llamada telefónica

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG)

- Marca tu número y luego haz clic en el botón derecho para elegir "Go"

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG)

Entonces recibirás una llamada telefónica del Retro Phone.

## Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.


## Visor en Línea del Esquemático RePhone core 2G Atmel32u4

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Visor en Línea del Esquemático Xadow - Key Board

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Esquemático del RePhone core 2G Atmel32u4 en PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [Esquemático del RePhone core 2G Atmel32u4 en Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip)
- [Xaodw - Esquemático del Teclado en PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf)
- [Xadow - Esquemático del Teclado en Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip)
- [Controlador para RePhone core 2G Atmel32u4](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip)
- [Hoja de datos del ETA6003](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf)
- [Comandos AT del SIM800](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf)

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
