---
description: Xadow - Breakout
title: Xadow - Breakout
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Breakout
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Breakout/
---
![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/Xadow_Breakout_01.jpg)

Talvez você queira conectar vários módulos ao Xadow. Por exemplo, um sensor IR que pode detectar se alguém está por perto. Você pode conectar o sensor a este módulo Breakout.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Breakout-p-1519.html)

## Especificação
---
- Um adaptador
- Compatível em hardware com todos os módulos Grove
- Dimensões: 25,43 mm x 20,35 mm

## Demonstração
---
Abaixo está o demo para controlar um buzzer. Você precisa conectar o Grove - Buzzer ao Xadow Breakout com um cabo Grove e conectar o Xadow Breakout à Xadow Main Board com um cabo FFC.

![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/XadowBreakoutUsage.jpg)

O Xadow Breakout não só pode controlar alguns módulos que se comunicam por IIC ou Serial, como também pode controlar outros módulos, porque os dois conectores Grove podem ser usados como porta Digital ou porta Analógica. Em outras palavras, ele pode controlar todos os módulos Grove.

O código de demonstração é assim:
```
Void setup()
{
    DDRD |=0x04;
}
void loop()
{
    PORTD |=0x04;
    delay(500);
    PORTD &=~(0x04);
    delay(500);
}
```
Agora você pode ouvir o buzzer fazendo "Bi Bi Bi". Você pode substituí-lo por um Grove - LED e ver o LED ligar/desligar.


## Visualizador Online do Esquemático
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Xadow Breakout](https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
