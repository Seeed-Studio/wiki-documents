---
title: Grove - Recorder V3
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Recorder_v3.0/
slug: /Grove-Recorder_v3.0
sku: 107020029
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Recorder_v3.0/
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/cover.jpg)

Esta é a versão mais recente do Grove-recorder e também a melhor versão. Em comparação com a anterior, há algumas atualizações que gostaríamos de mencionar.

A primeira mudança é o MCU. Na V3.0, o MCU foi atualizado para ISD9160FI, que é mais poderoso do que o antigo ISD1820PY. Como ele é mais poderoso? Junto com a nova flash de 2 Mbytes adicionada, ele permite gravar até 83 segundos, muito mais do que a gravação anterior de 12 s.

Em segundo lugar, se você já usou a versão anterior, saberia que, se quiser reproduzir o que gravou, precisa pressionar outro botão no Grove button conectado separadamente. Na V3.0, integramos o botão de gravação e o botão de reprodução em um único botão. Mantendo o botão pressionado por 2 s, ele começa a gravar; ao pressionar rapidamente o botão, ele reproduz o que foi gravado.

## O que há de novo na V3

* MCU de ISD1820PY para ISD 9160FI
* Botão de gravação e reprodução
* Interruptor de gravação
* Flash de 2 Mbytes

## Recursos

* Tempo de gravação muito longo, até 83 s
* Botão embutido para operar
* Indicador de LED embutido
* Autônomo ou controlado por MCU
* Microfone embutido

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Suporte de Plataforma

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## Especificação

* Tensão de trabalho: 3,3/5 V
* Corrente de trabalho (@5V, 25℃)
  * Standby: 25-30 mA
  * Gravando: 29-35 mA
  * Reproduzindo: 110-150 mA
* Corrente de trabalho (@3.3V, 25℃)
  * Standby: 23-25 mA
  * Gravando: 25-30 mA
  * Reproduzindo: 70-150 mA
* Temperatura de trabalho: 0~85℃
* Tamanho: 40x20 mm
* Peso: 31,5 g

## Visão Geral do Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/hw.png)

1.Conector do alto-falante - JST2.0

2.Microfone

3.Controle de voz

4.Botão

* Pressionar rapidamente e soltar: Reproduzir
* Pressão longa: Inicia a gravação até soltar o botão

5.Indicador de LED

* LED vermelho, acende quando o botão é pressionado

6.Conector Grove

7.Interruptor REC

* Mude para ON se quiser controlar o módulo para gravar via software

8.MCU

## Primeiros Passos

Aqui mostraremos como este Grove - Recorder V3.0 funciona por meio de uma demonstração simples. Antes de tudo, você precisa preparar os itens abaixo:

| Seeeduino V4 | Grove - Recorder | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/stuff.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com)|[Adquira agora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### Conexão de Hardware
Graças ao benefício dos módulos da série Grove, você não precisa fazer solda ou usar breadboard; o que precisa fazer é conectar os módulos à porta correta do Base Shield. Para esta demonstração, conectamos o Grove - Recorder à porta D2.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/connection.jpeg)

## Autônomo

Este módulo pode funcionar de forma autônoma, sem programação.

* **Gravar** - Pressione o botão até o LED acender, e ele estará gravando; solte o botão quando terminar a gravação.
* **Reproduzir** - Pressione e solte o botão para reproduzir a voz que foi gravada.

Se você quiser controlar o módulo por código, continue.

## Software

Copie o código abaixo e cole no seu Arduino IDE e faça o upload para o seu Seeeduino V4. Depois de enviar o código para um Arduino, abra o Serial Monitor.

```
/* Grove - Recorder Test Code
+--------------------------------------------------------------------+
|   Open Serial Monitor and input command to control the module:
|   r - start recording
|   s - stop recording
|   p - play
+-------------------------------------------------------------------*/

const int pinRec  = 3;
const int pinPlay = 2;

void setup() 
{
    Serial.begin(115200);
    Serial.println("Grove - Recorder V3.0 Test Code");
    Serial.println("cmd: \r\nr: record\r\ns: stop recording\r\np: play");

    pinMode(pinRec, OUTPUT);
    pinMode(pinPlay, OUTPUT);
    digitalWrite(pinRec, HIGH);
    digitalWrite(pinPlay, HIGH);
}

void loop() 
{
    if(Serial.available())
    {
        char c = Serial.read();
        if(c == 'r')            // begin to record
        {
            digitalWrite(pinRec, LOW);
            Serial.println("start recording...");
        }
        else if(c == 's')       // stop recording
        {
            digitalWrite(pinRec, HIGH);
            Serial.println("stop recording...");
        }
        else if(c == 'p')       // play
        {
            digitalWrite(pinPlay, LOW);
            delay(100);
            digitalWrite(pinPlay, HIGH);
            Serial.println("play...");
        }
    }
}
```

## Inserir Comando

Você pode inserir alguns comandos no Serial Monitor:

* **Iniciar gravação** - Digite um 'r'
* **Parar gravação** - Digite um 's'
* **Reproduzir** - Digite um 'p'

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Record à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a primeira vez que você usa o Codecraft, consulte também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc, que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Recorder/img/cc_Recorder.png)

Envie o programa para o seu Arduino/Seeeduino.

:::tip
    Quando o código terminar de ser enviado, você pode usar o Recorder para gravar e reproduzir via Serial Monitor.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemáticos em PDF](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/Grove%20-%20Recorder%20v3.0a.pdf)
* [Esquemáticos em Eagle](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip)
* [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove_Recorder_CDC_File.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
