---
title: Grove - Speaker Plus
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Speaker-Plus/
slug: /Grove-Speaker-Plus
sku: 101020853
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-Speaker-Plus/
---

<!--     -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/03.png" alt="pir" width={600} height="auto" /></p>

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)

Grove Speaker Plus consiste em uma poderosa placa driver de amplificador e um alto-falante de alta qualidade. O alto-falante gera diferentes tons com diferentes frequências de entrada, sendo fácil de controlar com sinal PWM. Você pode criar efeitos sonoros distintos, tocar suas músicas favoritas ou montar sua própria caixa de música com programação simples ou usando um grande número de códigos musicais já existentes.

Comparado à última versão do Grove Speaker, o Grove Speaker Plus possui um alto-falante de melhor qualidade com design separado e substituível, o que permite que você o troque por outros alto-falantes de sua preferência. Com a ajuda do potenciômetro on-board, você pode ajustar facilmente o volume de saída. Já está cansado de alto-falantes fixos com baixa qualidade de som? Quer conectar e tocar o seu próprio alto-falante? Esta é a sua escolha.

Recursos
-------

- Alto-falante com boa qualidade de som e alto volume
- Design de alto-falante separado e substituível
- Função de ajuste de som com potenciômetro on-board
- Interface plug and play fácil de usar

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
-------------

| Parâmetros           | Valores |
|------|-----|
| Dimensões | 130mm x90mm x12mm|
|Peso   |G.W 12g|

Plataformas compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas de MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

#### Materiais Necessários

| Seeeduino Lotus | Grove Speaker Plus|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/small.png)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)|

#### Conexão de Hardware

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/Hardware_Connection.jpg" alt="Grove-Speaker Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

Uso
-----

### Brincar com Arduino

O alto-falante pode emitir uma variedade de sons como buzina de carro, campainha e ignição. Os diferentes sons são baseados na frequência do sinal de entrada.

Você pode fornecer diferentes sinais de frequência para este módulo com o Arduino. O Arduino gera esses sinais via PWM ou até mesmo `digitalWrite` e `delay`. Aqui vamos mostrar como gerar esses sinais usando *delay()*, o alto-falante soa as notas graves de 1~7.

|Nota|Frequência correspondente|Meio ciclo|
|---|---|----|
|1| 261.6255653 |1911.128216|
|1.5|277.182631|1803.864832|
|2|293.6647679|1702.621678|
|2.5|311.1269837|1607.060866|
|3|329.6275569|1516.863471|
|4|349.2282314|1431.728466|
|4.5|369.9944227|1351.371722|
|5|391.995436|1275.525055|
|5.5|415.3046976|1203.935334|
|6|440|1136.363636|
|6.5|466.1637615|1072.584446|
|7|493.8833013|1012.384907|

#### Código de Software

**Passo 1.** Conecte o Grove - Speaker Plus à porta **D3** em um Base Shield e encaixe o Base Shield no seu Seeeduino.

**Passo 2.** Conecte o Seeeduino ao seu PC através de um cabo USB.

**Passo 3.** Envie o código abaixo para a sua IDE Arduino.

:::tip
        Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

```cpp
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

<div class="admonition note">
<p class="admonition-title">Note</p>
Devido à influência da capacitância, o módulo só pode emitir sinais de graves, e não consegue emitir agudos.
</div>

:::tip
     Quando o código terminar de ser enviado, você ouvirá o Speaker fazendo um som de DÓ a SI.
:::

## Visualizador Online do Esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [How to generate different tone with MCU](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [LM386 Low Voltage Audio Power Amplifier Datasheet](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
