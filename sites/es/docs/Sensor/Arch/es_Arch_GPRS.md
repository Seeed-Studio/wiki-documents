---
description: Arch GPRS
title: Arch GPRS
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arch_GPRS
last_update:
  date: 2/1/2023
  author: hushuxu
---


[![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_03.jpg) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

Arch GPRS es una placa de desarrollo habilitada para [mbed](http://mbed.org/handbook/mbed-SDK) que aloja un módulo de red celular junto con un microcontrolador. Es similar al [Seeeduino Arch](https://seeeddoc.github.io/Seeeduino_Arch/) en que también utiliza el microcontrolador LPC11U24. Con el Arch GPRS, puedes usar el SDK de mbed C/C++, bibliotecas y herramientas de desarrollo en línea optimizadas para construir rápidamente tu prototipo.
El módulo de red celular en el Arch GPRS está basado en el módem [GPRS](https://en.wikipedia.org/wiki/General_Packet_Radio_Service) EG-10. Con esto, las funciones de recolección de datos se pueden realizar fácilmente usando la red celular basada en 2G GSM.

Arch GPRS tiene una interfaz estándar **Arduino** así como conectores Grove en la placa. Es conveniente conectar Shields existentes y productos **Grove** al Arch GPRS. Incluso puedes conectar un panel solar directamente a la placa para permitir que la batería se cargue desde él. Un diseño de bajo consumo garantiza una carga fácil y operaciones de larga duración cuando se está al aire libre.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

## Características ##

- Habilitado para mbed

  - herramientas de desarrollo en línea

  - SDK de C/C++ fácil de usar

  - muchas bibliotecas y proyectos publicados

- Controlador NXP LPC11U24

  - Núcleo ARM Cortex-M0 de bajo consumo

  - 32KB Flash, 8KB RAM, 4KB EEPROM  

  - Dispositivo USB, 2xSPI, UART, I2C

- Módulo EG-10  

  - Soporta actualización inalámbrica del firmware EG-10  

  - Soporta tarjeta SIM externa: 1.8V/3.3V

  - Compatible con comandos AT estándar

- Equipado con función RTC

- Selecciona automáticamente USB5V o panel solar para cargar una batería

## Especificaciones ##

 |Elemento||Especificación|
 |--|--|--|
| Microcontrolador||LPC11U24|
| Modo de Alimentación||USB o Panel Solar|
 |Corriente de Carga |Panel solar|100 mA|
 ||USB 5V|  400 mA|
 |Frecuencia de Trabajo||850/900/1800/1900 MHz|
 |Tipo de Interfaz|| USB Micro B|
 |Tarjeta SIM||Clase B(3V) y Clase C(1.8V)|
 |Características GPRS|Transmisión de datos GPRS|enlace descendente 85.6kbps(Máx); enlace ascendente 42.8kbps(Máx)|
||Formato de códigos|CS-1,CS-2,CS-3,CS-4|
|  Soporte de Funciones||Soporte para Datos, Voz, SMS y Fax|
 |Capacidad EEPROM||256 KB|

## Interfaces ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Interface_Function.jpg)

El área amarilla es muy similar en estilo a una placa Arduino, y de hecho se usa como tal con nuestra placa Shield. Su distribución de pines es casi la misma que Seeeduino Arch (D11 y D13 están intercambiados), así que puedes hacer clic [aquí](https://seeeddoc.github.io/Seeeduino_Arch/#Pinout) para observar cada pin.

La imagen anterior es la vista frontal del Arch GPRS, el microcontrolador LPC11U24 en la parte posterior no ha sido marcado.

## Primeros Pasos ##

Inserta una tarjeta SIM en el socket SIM del Arch GPRS, puedes marcar un número de teléfono o enviar mensajes.
Ahora comencemos.

**Paso uno:** Registrar una cuenta mbed

- abre [https://mbed.org](https://mbed.org), haz clic en Login o signup. Si ya te has registrado, por favor haz clic en login directamente.

**Paso dos:** Importar Programa

- Abre el enlace: [https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/](https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/), luego haz clic en "Import this program" en la esquina derecha mientras puedes ver la imagen siguiente. Ahora haz clic en "import" para completar la importación del programa Arch GPRS.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test.png)

- Cuando el programa ha sido importado a tu cuenta, puedes verlo en la herramienta de desarrollo en línea.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test1.png)

**Paso tres** Editar código

- abre y cambia el archivo main.cpp del programa Arch GPRS. Tomemos como ejemplo hacer una llamada, necesitas cambiar "#define CALL_UP_TEST 0" por "#define CALL_UP_TEST 1", y cambiar el parámetro de la función "gprsTest.callUp("133xxxx5949");".

**Paso cuatro:** Agregar un dispositivo

- Haz clic en "No device selected" en la esquina superior derecha, luego haz clic en "Add a device" en la parte inferior izquierda después de ver la imagen siguiente.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%87.jpg)

- Aparece una página como se muestra a continuación. Arch GPRS es compatible con mbed LPC11U24 y Seeeduino Arch, así que puedes seleccionar "mbed LPC11U24" o Seeeduino Arch. Aquí tomamos como ejemplo seleccionar Seeeduino Arch.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%871.jpg)

- Entra a la página de Seeeduino Arch y haz clic en "Add to mbed Compiler", Ahora has completado exitosamente agregar Seeeduino Arch. Regresa al compilador mbed y haz clic en "No device selected". La imagen siguiente aparece después de hacer clic en Seeeduino Arch en la esquina inferior izquierda:

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%872.jpg)

- Puedes ver tu placa seleccionada en el compilador en línea mbed después de hacer clic en "Select Platform".

**Paso cinco:** Compilar, descargar

- Haz clic en "Compile", aparece un "Success!" mientras el IDE mbed genera un bin. Necesitas guardar el archivo bin en tu PC.

**Paso seis:** Actualizar firmware

- Conecta el puerto USB del Arch GPRS a tu computadora usando un cable USB Micro B y mantén presionado el botón, Arch GPRS aparecerá como un almacenamiento USB llamado CRP DISABLD.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/A_usb_device.jpg)

- Ve al CRP DISABLD. Ahora necesitas agregar el archivo bin que has obtenido al dispositivo CRP DISABLD. Si el archivo bin ya existe en el dispositivo USB, necesitas eliminarlo y agregar el nuevo archivo bin.

Presiona rápidamente el botón del Arch GPRS y espera un momento, escucharás al Arch GPRS llamándote.

## ARCH GPRS Con Xively ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/ARCH_GPRS_With_Xively.png)

Xively es un servicio de base de datos en línea que permite a los desarrolladores conectar datos derivados de sensores (por ejemplo, datos de energía y ambiente de objetos, dispositivos y edificios) a la Web y construir sus propias aplicaciones basadas en esos datos. Usando ARCH GPRS podemos realizar esto fácilmente.

**Paso uno：** Registrarse en una cuenta de Xively

- abrir [https://xively.com/](https://xively.com/), hacer clic en Login o signup. Si ya te has registrado, por favor haz clic en login directamente.

**Paso dos：** Agregar tu propio dispositivo y Canales

- puedes crear dispositivo y agregar canales como desees. Si no sabes cómo hacerlo, puedes visitar [https://xively.com/get_started/](https://xively.com/get_started/)

**Paso tres：** Importar programa

- Abrir el enlace: [http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/](http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/), luego hacer clic en "Import this program" en la esquina derecha mientras puedes ver la imagen siguiente. Ahora haz clic en "import" para completar la importación del programa Arch GPRS.

**Paso cuatro：** Agregar tu propia información

- reemplazar el FEED_ID & SENSOR_ID & XIVELY_KEY con los tuyos, y conectar tu ARCH GPRS con el sensor, luego compilar y actualizar firmware.

**Paso cinco：** verificar el valor de tu sensor

- si es exitoso, verás tus datos subidos en el gráfico de tu canal.

**Nota:**

Si usas Seeeduino Arch en MAC o Linux, por favor lee la nota de aplicación --- [USB ISP programming](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x).

## Programando Seeeduino Arch en Windows, Linux o Mac ##

Seeeduino Arch no tiene una interfaz mbed. Usa USB In-System-Programming(ISP) para actualizar el firmware.

Para entrar al modo USB ISP, conecta el Arch con tu computadora y mantén presionado su botón, y luego aparecerá un disco llamado "CRP DISABLD".

- en windows

    1.eliminar firmware.bin en el disco "CRP DISABLD".

    2.copiar un nuevo firmware al disco.

- en linux

    1.si el disco no está montado, montar el disco en /path/to/mount
    2.dd if=new_firmware.bin of=/path/to/mount/firmware.bin conv=notrunc

- en mac necesitarás usar Terminal para ejecutar el siguiente script para copiar tu archivo .bin a tu Arch

    1.dd if=new_firmware.bin of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

   Si te inclinas por ello, también puedes crear una aplicación **Automator** para soportar arrastrar y soltar el archivo a tu placa. Solo crea un "Run Shell Script" con el siguiente comando:

   dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

Presiona rápidamente el botón para ejecutar el nuevo firmware.

## Ver También ##

- [Arch GPRS V2](https://seeeddoc.github.io/Arch_GPRS_V2/)

## Notas ##

Arch GPRS no viene con [una interfaz mbed](https://mbed.org/handbook/mbed-HDK). Para mostrar mensajes de depuración, por favor intenta [USBSerial](https://mbed.org/handbook/USBSerial).

## Visor de Esquemático En Línea

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Archivo Eagle de Arch GPRS](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip)
- **[PDF]**[PDF de Arch GPRS](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.pdf)
- **[EAGLE]**[Esquemático de Arch GPRS](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.sch)
- **[PDF]**[Esquemático de Arch GPRS en formato PDF](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Schematic.pdf)
- **[Comando]**[Referencia de comandos AT](https://files.seeedstudio.com/wiki/Arch_GPRS/res/AT%E6%8C%87%E4%BB%A4%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Hoja de datos]**[Hoja de datos EG10](https://files.seeedstudio.com/wiki/Arch_GPRS/res/EG10%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Demo]**[demo](https://mbed.org/users/loovee/code/ARCH_GPRS_Demo/)

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
