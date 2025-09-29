---
title: Grove - NFC_tag
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove_NFC_Tag/
slug: /es/Grove_NFC_Tag
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_uasge.jpg)

Grove - NFC Tag es un módulo de etiqueta de comunicación de campo cercano altamente integrado, este módulo tiene interfaz I2C, que se basa en M24LR64E-R, M24LR64E-R tiene un identificador único de 64 bits y EEPROM de 64-Kbit. Grove - NFC Tag incluye una antena PCB independiente que puede extenderse fácilmente fuera de cualquier carcasa que uses, dejando más espacio para que diseñes el exterior de tu proyecto.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)

Especificaciones
===============

- Voltaje de funcionamiento: 5V o 3V3
- Corriente de funcionamiento < 1mA
- Rango efectivo < 2cm
- Sirve para comunicación sin contacto a 13.56MHz
- Compatible con ISO 15693 e ISO 18000-3 modo 1
- Identificador único de 64 bits (UID)
- Lectura de bloque y escritura (bloques de 32 bits)
- Interfaz Grove I2C

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Plataformas Compatibles
----------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
===

Leer/Escribir desde Móvil
------------------------

1. Descarga [NfcV-reader para Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instálalo
2. Podemos Leer/Escribir desde el Móvil

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_1.png)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_3.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_4.png)

Control de LED
--------------

1. Instalación de Hardware

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_Photo.jpg)

1. Descarga [NfcV-reader para Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instálalo
2. Descarga [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E), renómbralo a NFC_Tag_M24LR6E y ponlo en la biblioteca de Arduino.
3. Abre Arduino IDE. Si Arduino IDE ya está abierto, reinícialo.
4. En Arduino IDE, haz clic en los menús: File -> Example -> NFC_Tag_M24LR6E -> ledControl
5. Ahora, puedes controlar el LED desde tu teléfono.

```
 
#include "NfcTag.h"
#include <Wire.h>
 
NfcTag nfcTag;
int led = 5;
bool flag = false;
bool preFlag = false;
void setup(){
  Serial.begin(9600);
  pinMode(led,OUTPUT);
  nfcTag.init();
}
 
void loop(){
  flag = nfcTag.readByte(EEPROM_I2C_LENGTH-1) == 0xff?true:false;
  if(flag != preFlag){
    Serial.println("get remote NFC control signal!");
    if(flag == true){
      Serial.println("led will light up!");
      digitalWrite(led,HIGH);
    }else{
      Serial.println("led will turn dark!");
      digitalWrite(led,LOW);
    }
    preFlag = flag;
  }
  delay(5*1000);
}
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.pdf)
- [Grove - NFC Tag archivo Eagle](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip)
- [M24LR64E-R datasheet.pdf](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/M24LR64E-R.pdf)
- [NfcV-reader para Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)
- [NFC Tag M24LR6E Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_NFC_Tag -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
