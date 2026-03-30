---
title: Grove - Speaker
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Speaker/
slug: /Grove-Speaker
sku: 107020001
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Speaker/
---

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Grove_Speaker_01.jpg)

O Grove - Speaker é um módulo que consiste em amplificação de potência e saída de áudio. O volume pode ser ajustado pelo potenciômetro on-board. Com diferentes frequências de entrada, o alto-falante gera diferentes tons. Codifique a música no Arduino e faça você mesmo sua própria caixa de música!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)

Recursos
-------

- Volume ajustável
- Interface Grove

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
-------------

| Item            | Min | Típico | Máx | Unidade |
|-----------------|-----|--------|-----|---------|
| Tensão de trabalho | 4.0 | 5.0     | 5.5 | VCC  |
| Ganho de tensão    | -   | -       | 46  | dB   |
| Largura de banda   | -   | -       | 20  | KHz  |

Plataformas compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação de compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

Uso
-----

### Brincar com Arduino

O alto-falante pode emitir uma variedade de sons como buzina de carro, campainha e ignição. Os diferentes sons são baseados na frequência do sinal de entrada.

Você pode fornecer sinais de diferentes frequências para este módulo com o Arduino. O Arduino gera esses sinais via PWM ou mesmo `digitalWrite` e `delay`. Aqui vamos mostrar como gerar esses sinais usando *delay()*, o som de baixo do alto-falante de 1~7.

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Tone.jpg)

```
/*macro definition of Speaker pin*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//bass 1~7

void setup()
{
    pinInit();
}
void loop()
{
        /*sound bass 1~7*/
    for(int note_index=0;note_index<7;note_index++)
    {
        sound(note_index);
        delay(500);
    }
}
void pinInit()
{
    pinMode(SPEAKER,OUTPUT);
    digitalWrite(SPEAKER,LOW);
}
void sound(uint8_t note_index)
{
    for(int i=0;i<100;i++)
    {
        digitalWrite(SPEAKER,HIGH);
        delayMicroseconds(BassTab[note_index]);
        digitalWrite(SPEAKER,LOW);
        delayMicroseconds(BassTab[note_index]);
    }
}
```

:::note
Devido à influência da capacitância, o módulo só consegue emitir sinais de baixo, e não é capaz de emitir agudos.
:::

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte o Grove - Speaker à porta D3 em um Base Shield

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a primeira vez que você usa o Codecraft, consulte também o [Guia para usar o Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Speaker.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    Quando o código terminar de ser enviado, você ouvirá o Speaker emitindo um som de DO a SI.
:::

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Arquivo Eagle do Grove - Speaker](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip)
- [Como gerar diferentes tons com MCU](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [Grove_-_Speaker_v1.0_brd.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_brd.pdf)
- [Grove_-_Speaker_v1.0_sch.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_sch.pdf)
- [LM386 Low Voltage Audio Power Amplifier Datasheet](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
- [Código CodeCraft](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Speaker.zip)

<!-- Este arquivo Markdown foi criado a partir de https://www.seeedstudio.com/wiki/Grove_-_Speaker -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
