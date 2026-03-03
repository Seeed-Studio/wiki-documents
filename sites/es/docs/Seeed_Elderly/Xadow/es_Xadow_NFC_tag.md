---
description: Xadow - Etiqueta NFC
title: Xadow - Etiqueta NFC
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_NFC_tag
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow%20NFC%20Tag.jpg)

Xadow - Etiqueta NFC es un módulo de etiqueta de comunicación de campo cercano altamente integrado, este módulo tiene interfaz I2C, que se basa en M24LR64E-R, M24LR64E-R tiene un identificador único de 64 bits y EEPROM de 64-Kbit. Xadow - Etiqueta NFC incluye una antena PCB independiente que puede extenderse fácilmente fuera de cualquier carcasa que uses, dejando más espacio para que diseñes el exterior de tu proyecto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html)

## Especificaciones

---
- Voltaje de funcionamiento: 5V o 3V3
- Corriente de funcionamiento &lt;1mA
- Rango efectivo máximo de 2CM
- Sirve para comunicación sin contacto a 13.56MHz
- Compatible con ISO 15693 e ISO 18000-3 modo 1
- Identificador único de 64 bits (UID)
- Leer bloque y escribir (bloques de 32 bits)
- Interfaz I2C

## Uso

---

## Leer/Escribir por móvil

1. Descarga [NfcV-reader para Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instálalo

2. Podemos leer/escribir con el móvil

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow-NFC_Tag_photo1.jpg)

3.Coloca tu teléfono cerca de una etiqueta.

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_1.png)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_2.jpg)|
|---|---|

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_3.jpg)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_4.png)
|---|---|

## Controlar LED

---

1. Descarga [NfcV-reader para Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instálalo

2. Descarga [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E) renómbralo a NFC_Tag_M24LR6E y ponlo en la biblioteca de Arduino.

3. Abre Arduino IDE. Si Arduino IDE ya está abierto, reinícialo.

4. En Arduino IDE, haz clic en los menús: File -> Example -> NFC_Tag_M24LR6E -> ledControl

5. Ahora, puedes controlar el LED con tu teléfono.

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

## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Xadow - Etiqueta NFC.PDF](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.pdf)

- [Xadow - Etiqueta NFC Eagle](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip)

- [Hoja de datos M24LR64E-R.pdf](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/M24LR64E-R.pdf)

- [NfcV-reader para Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)

- [Librería NFC Tag M24LR6E](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
