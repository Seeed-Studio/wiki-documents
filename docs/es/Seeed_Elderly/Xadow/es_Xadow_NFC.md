---
description: Xadow - NFC
title: Xadow - NFC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_NFC
last_update:
  date: 1/13/2023
  author: shuxu hu
---
---
La Comunicación de Campo Cercano (NFC) es un conjunto de tecnologías inalámbricas de corto alcance. Está detrás de aplicaciones cotidianas como sistemas de control de acceso y sistemas de pago móvil.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/X_nfc_01.jpg)

Xadow NFC cuenta con un módulo transceptor altamente integrado PN532 que maneja la comunicación sin contacto a 13.56MHz. Puedes leer y escribir una etiqueta de 13.56MHz con este módulo o implementar intercambio de datos punto a punto con dos Xadow NFC. Xadow NFC está diseñado para usar protocolos de comunicación I2C, SPI o UART, siendo I2C el modo predeterminado. Además, asignamos una antena PCB independiente que puede extenderse fácilmente fuera de cualquier carcasa que uses, dejando más espacio para que diseñes el exterior de tu proyecto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-p-1627.html)

## Especificaciones
---
- Voltaje de Funcionamiento: 3.3V
- Corriente de Funcionamiento:
  - Modo Estático: 73mA
  - Modo Escritura/Lectura: 83mA
- Interfaz de host compatible: I2C(predeterminado), SPI, UART.
- Sirve para comunicación sin contacto a 13.56MHz.
- Compatible con protocolos ISO14443 Tipo A y Tipo B.
- Distancia máxima de operación para detectar etiquetas NFC es de 28mm dependiendo del tamaño actual de la antena.
- Compatible con comunicación P2P.
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
Xadow NFC tiene muchas capacidades que integran un controlador NFC PN532, nuestra biblioteca de Arduino soporta lectura/escritura de etiquetas, comunicación teléfono-a-Xadow NFC, emulación de etiquetas en este momento, es un todoterreno 3-en-1.

:::note:
    Cuando Xadow NFC está usando protocolos de comunicación SPI, existe una biblioteca que soporta comunicación teléfono-a-Xadow NFC. El modo de comunicación predeterminado para este producto es I2C, por lo que la biblioteca no se puede usar directamente.
:::
Antes de leer/escribir etiquetas, lo que necesitas preparar es la instalación del hardware y las bibliotecas.

- La instalación del hardware como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/XadowNFC.jpg)

:::note:
    Cuando conectes Xadow - NFC a [Xadow - Main Board](https://wiki.seeedstudio.com/es/Xadow_Main_Board), debes considerar la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::

- Descarga la [biblioteca PN532](https://github.com/Seeed-Studio/PN532) y la [Biblioteca NDEF](https://github.com/don/NDEF). No olvides instalar estas bibliotecas en la Biblioteca de Arduino. Si no has conocido claramente la operación, por favor consulta [aquí](https://www.seeedstudio.com/wiki/How_to_install_Arduino_Library) para una mirada más cercana.

:::note:
    Asegúrate de que tienes las carpetas - PN532, PN532_SPI, PN532_I2C, PN532_HSU y NDEF (de la Biblioteca NDEF) en tu carpeta de Biblioteca de Arduino.
:::
**Demo 1: Escribir mensajes a etiqueta**

- Abre el código directamente por la ruta:File -> Example ->Ndef_dev->WriteTag.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Code_Interfae.jpg)

En este código, la función message.addUriRecord("https://arduino.cc") se usa para escribir mensaje a la etiqueta. Puedes reemplazar el mensaje "https://arduino.cc" con un nuevo mensaje. Por ejemplo, ingresamos "do you happy?" y "hello, world" usando esta función.

- Sube el código y abre el Monitor Serie, Te solicita colocar una etiqueta NFC en la antena NFC. Después de una operación exitosa, te solicitará leer la etiqueta.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/WriteTag.jpg)

**Demo 2: Leer etiqueta**

Si quieres saber si la operación de escritura que acabas de hacer fue exitosa, puedes usar el código:ReadTag para verificar.

- Abre el código:ReadTag directamente por la ruta:File -> Example ->Ndef_dev->ReadTag y súbelo a tu Xadow Main Board.

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/ReadTag_code.bmp)

- Abre el Monitor Serie para ver la información de la etiqueta. La siguiente figura muestra el resultado de lectura:

![](https://files.seeedstudio.com/wiki/Xadow_NFC/images/Read_a_Tag.jpg)

Es esencial explicar un mensaje NDEF para tener un reconocimiento claro sobre la imagen anterior. Puede haber múltiples registros en un mensaje NDEF. Para nuestros propósitos de análisis usamos solo un registro NDEF.

**TNF(001)** - El valor del campo TNF indica la estructura del valor del campo TYPE. El valor 0x01 (tipo bien conocido del Foro NFC) indica que el campo TYPE contiene un valor que sigue el formato de nombre de tipo RTD definido en la especificación RTD del Foro NFC).

**Type Length** - El campo TYPE_LENGTH es un entero sin signo de 8 bits que especifica la longitud en octetos del campo TYPE. El campo TYPE_LENGTH es siempre cero para ciertos valores del campo TNF.

**Pay load Length** - El campo PAYLOAD_LENGTH es un entero sin signo que especifica la longitud en octetos del campo PAYLOAD (la carga útil de la aplicación). El tamaño del campo PAYLOAD_LENGTH está determinado por el valor de la bandera SR

**Type(55)** - El valor del campo TYPE es un identificador que describe el tipo de la carga útil, El tipo de registro URI ("U")

**Pay Load** - El resto de la cadena en UTF-8

## Visor en Línea del Esquemático de Xadow NFC

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Visor en Línea del Esquemático de la Antena Xadow NFC

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos
---
- [Archivo Eagle de Xadow NFC](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip)
- [Archivo Eagle de la Antena Xadow NFC](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip)
- [Hoja de Datos del PN532](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

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
