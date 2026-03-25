---
description: EL Shield
title: EL Shield
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EL_Shield
sku: 104030000
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/EL_Shield/
---

<!-- ---
name: EL Shield
category: Shield
bzurl: https://seeedstudio.com/EL-Shield-p-1287.html
oldwikiname: EL_Shield
prodimagename: EL_Shield_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/104030000 1.jpg
surveyurl: https://www.research.net/r/EL_Shield
sku: 104030000
--- -->

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_02.jpg)

Este shield é usado para controlar dispositivos EL. Ele pode controlar 4 dispositivos EL simultaneamente. O método de controle é tão simples quanto controlar um LED. Acionado por PWM, ele pode criar um efeito colorido e florido controlando cada fio EL com um programa simples. Combinado com nosso Inversor EL, pode acionar um fio EL com até 15 m de comprimento, o que oferece possibilidades infinitas para o seu projeto. Além disso, o shield é coberto por uma placa de acrílico, o que aumenta a segurança do usuário.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/el-shield-p-1287.html)

Especificações
--------------

- Tensão de operação: 5V
- Interface do inversor: JST 2.0
- Interface do canal de controle: soquete 2P - 2,5SM

Visão geral de hardware
---------

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_interface.jpg)

Demonstração
-------------

Aqui está uma demonstração simples envolvendo o EL shield, 4 fitas EL e o inversor personalizado que acompanha o EL shield.
Conecte tudo como na figura abaixo.

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_Hardware_Installation.jpg)

Envie o código abaixo para o seu microcontrolador.

```
// EL test code

void setup(){
 for(int i = 4; i<8; i++)
 {
  pinMode(i, OUTPUT);
 }
}

void setEL(int ch) // set a certain EL on
{
 for(int i = 4; i<8; i++) // all off
 digitalWrite(i, LOW);
 digitalWrite(ch+3, HIGH); // ch on
}

int count = 0;

void loop()
{
 setEL(count%4 + 1);
 delay(200);
 if(count++ == 1000)
 {
  count = 0;
 }
}
```

## Visualizador de esquema online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo eagle do EL Shield](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip)
- [Arquivo de código-fonte do EL Shield para Arduino 1.0](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Test_code.zip)
- [Folha de dados BT134W-600D](https://files.seeedstudio.com/wiki/EL_Shield/res/BT134W-600D.pdf)
- [Folha de dados MOC 3063](https://files.seeedstudio.com/wiki/EL_Shield/res/MOC3063M.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/EL_Shield -->

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
