---
title: Grove - NFC_tag
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove_NFC_Tag/
slug: /Grove_NFC_Tag
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove_NFC_Tag/
---

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_uasge.jpg)

Grove - NFC Tag é um módulo de Tag de Comunicação por Campo Próximo (Near Field Communication) altamente integrado, este módulo usa interface I2C, que é baseado no M24LR64E-R. O M24LR64E-R possui um identificador exclusivo de 64 bits e uma EEPROM de 64 Kbits. O Grove - NFC Tag possui uma antena PCB independente que pode ser facilmente estendida para fora de qualquer gabinete que você utilizar, deixando mais espaço para você projetar o exterior do seu projeto.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-NFC-Tag-p-1866.html)

Especificações
=============

- Tensão de operação: 5V ou 3V3
- Corrente de operação &lt;1mA
- Alcance efetivo &lt;2cm
- Serve para comunicação sem contato em 13,56MHz
- Compatível com ISO 15693 e ISO 18000-3 modo 1
- Identificador exclusivo (UID) de 64 bits
- Leitura de bloco e escrita (blocos de 32 bits)
- Interface Grove I2C

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Uso
=====

Leitura/Gravação a partir do celular
--------------------

1. Baixe [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instale
2. Podemos ler/gravar a partir do celular

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_1.png)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_3.jpg)

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/NFC_Tag_4.png)

Controlar LED
-----------

1. Instalação de Hardware

![](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/img/Grove-NFC_Tag_Photo.jpg)

1. Baixe [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk) e instale
2. Baixe [NFC Tag Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E), renomeie para NFC_Tag_M24LR6E e coloque na pasta de bibliotecas do Arduino.
3. Abra a IDE do Arduino. Se a IDE do Arduino já estiver aberta, reinicie-a.
4. Na IDE do Arduino, clique nos menus: File -> Example -> NFC_Tag_M24LR6E -> ledControl
5. Agora você pode controlar o LED a partir do seu telefone.

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

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - NFC Tag.PDF](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.pdf)
- [Grove - NFC Tag Eagle file](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/Grove-NFC_Tag_v1.0.zip)
- [M24LR64E-R datasheet.pdf](https://files.seeedstudio.com/wiki/Grove-NFC_Tag/res/M24LR64E-R.pdf)
- [NfcV-reader for Android](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E/blob/master/Resources/NfcVreader.apk)
- [NFC Tag M24LR6E Lib](https://github.com/Seeed-Studio/NFC_Tag_M24LR6E)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_NFC_Tag -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
