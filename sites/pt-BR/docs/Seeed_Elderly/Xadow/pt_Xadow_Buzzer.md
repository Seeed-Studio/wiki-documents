---
description: Xadow - Buzzer
title: Xadow - Buzzer
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Buzzer
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Buzzer/
---
![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Xadow_buzzer.jpg)

Este é um módulo Xadow que pode emitir um tom. Para acioná-lo, você precisa controlar dois pinos simultaneamente: isto é diferente do Grove - Buzzer, que usa apenas um pino para controle. Ele é pequeno, mas barulhento! Pode ser usado para gerar bipes, tons e alertas.

Xadow é uma série de placas compatíveis com Arduino(TM), pequenas mas perfeitamente formadas, que contém vários módulos. É um kit extremamente adequado para projetos sensíveis a espaço, como dispositivos vestíveis e projetos artísticos, que têm maiores exigências em tamanho, peso e conexão em cascata flexível. Você pode encontrar mais módulos aqui.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html)

## Especificação
---
- Tensão de trabalho: 3.3V
- Frequência fundamental: 2700Hz
- Nível de pressão sonora: >75dB
- Dimensões: 25.43mm x 20.35mm

## Demonstração
---
Existe uma demonstração simples para mostrar como acionar o som do buzzer. Se você conseguir usá-la com sucesso, poderá aplicá-la em seus ótimos projetos, como detectar o status da bateria: o buzzer emitirá um som quando a Xadow Main Board estiver com bateria fraca.

![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Buzzer_Usage.jpg)

```
void setup()
{
    DDRB |= 0x06;
}

void loop()
{
    //turn on the buzzer
    PORTB |= 0x06;
    delay(1);
    //turn off the buzzer
    PORTB &= ~(0x06);
    delay(1);
}
```


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Arquivo Eagle do Xadow Buzzer](https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
