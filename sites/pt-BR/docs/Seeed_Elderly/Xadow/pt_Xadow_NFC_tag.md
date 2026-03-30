---
description: Xadow - NFC Tag
title: Xadow - NFC Tag
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_NFC_tag
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_NFC_tag/
---

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow%20NFC%20Tag.jpg)

Xadow - NFC Tag é um módulo de tag de comunicação em campo próximo (NFC) altamente integrado; este módulo utiliza interface I2C e é baseado no M24LR64E-R. O M24LR64E-R possui um identificador exclusivo de 64 bits e uma EEPROM de 64 Kbit. O Xadow - NFC Tag inclui uma antena PCB independente que pode facilmente se estender para fora de qualquer gabinete que você usar, deixando mais espaço para você projetar o exterior do seu projeto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-Tag-p-1881.html)

## Especificação

---
- Tensão de operação: 5V ou 3V3
- Corrente de operação &lt;1mA
- Alcance efetivo máximo de 2 cm
- Serve para comunicação sem contato a 13,56 MHz
- Compatível com ISO 15693 e ISO 18000-3 modo 1
- Identificador exclusivo (UID) de 64 bits
- Leitura de bloco e gravação (blocos de 32 bits)
- Interface I2C

## Uso

---

## Leitura/gravação pelo celular

1. Baixe [NfcV-reader for Androud](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instale-o

2. Podemos ler/gravar a tag pelo celular

![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/Xadow-NFC_Tag_photo1.jpg)

3. Coloque seu telefone próximo a uma tag.

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_1.png)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_2.jpg)|
|---|---|

|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_3.jpg)|![](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/img/NFC_Tag_4.png)
|---|---|

## Controlar LED

---

1. Baixe [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instale-o

2. Baixe [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E), renomeie para NFC_Tag_M24LR6E e coloque-a na biblioteca do Arduino.

3. Abra a IDE do Arduino. Se a IDE do Arduino já estiver aberta, reinicie-a.

4. Na IDE do Arduino, clique nos menus: File -&gt; Example -&gt; NFC_Tag_M24LR6E -&gt; ledControl

5. Agora, você pode controlar o LED pelo seu telefone.

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

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Xadow - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.pdf)

- [Xadow - NFC Tag Eagle](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/Xadow-NFC_Tag_v1.0.zip)

- [M24LR64E-R datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_NFC_tag/res/M24LR64E-R.pdf)

- [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)

- [NFC Tag M24LR6E  Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
