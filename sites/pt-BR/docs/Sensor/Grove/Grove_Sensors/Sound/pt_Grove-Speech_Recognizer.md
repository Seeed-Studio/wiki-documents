---
title: Grove - Reconhecedor de Voz
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Speech_Recognizer/
slug: /Grove-Speech_Recognizer
sku: 101020232
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Speech_Recognizer/
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cover.jpg)

Usar a voz para interagir com as coisas ao seu redor sempre pode ser uma das partes mais interessantes de uma aplicação de IoT; queremos fazer algo diferente e mais legal. Recentemente lançamos a solução de controle por voz “Respeaker” no Kickstarter e ela se tornou um sucesso. Porém, nem todo mundo precisa de um Respeaker para construir um projeto de controle por voz; às vezes as pessoas só precisam de uma solução simples. Aqui gostaríamos de apresentar a primeira geração do Grove Speech Recognizer para realizar rapidamente e com facilidade o seu sonho de casa inteligente.

O Grove Speech Recognizer é projetado para aplicações de controle por voz, como casa inteligente, brinquedos inteligentes, robô com controle por voz, qualquer coisa que você queira controlar por meio de voz, vale a pena tentar. A placa inclui um Nuvoton ISD9160, um microfone, 1 memória flash SPI, 1 conector Grove, 1 conector para alto-falante e 1 LED para refletir a sua voz.

O Nuvoton ISD9160 é um Chipcorder (SoC) baseado em Cortex™-M0, que oferece uma solução poderosa e econômica para aplicações de controle por voz. O ISD9160 não é a única coisa incrível neste Grove. Vamos olhar para o microfone. Lembra aquele momento desconfortável em que você tinha que falar diretamente e bem perto do dispositivo de reconhecimento de voz para garantir que ele pudesse ouvi‑lo? Isso não vai acontecer desta vez! O microfone no Grove Speech Recognizer é omnidirecional, o que significa que, quer o usuário fale de frente, de trás, da esquerda ou da direita, o microfone registrará os sinais todos com o mesmo ganho.

Este reconhecedor de voz pode reconhecer 22 comandos, incluindo “start”, “stop”, “Play music” e assim por diante. Toda vez que reconhece um comando, ele retorna um valor e então o alto‑falante conectado a ele repetirá o comando. Esse valor pode ser usado para controlar outros dispositivos, como motor, reprodutor de música. Nós o testamos por horas para garantir que possua uma alta taxa de reconhecimento e um disparo falso muito baixo.

Aqui estão algumas observações que você precisa saber antes de usá‑lo:
Palavra de ativação: Hicell (por favor, pronuncie como uma única palavra)
Quando ele reconhece a palavra de ativação, o LED fica vermelho; então você pode dizer a palavra de comando e, se ele reconhecer a palavra de comando, o LED ficará azul.

:::note
    O firmware do módulo foi escrito por um fornecedor terceirizado, ele não é open source.
:::

## Ideias de Aplicação

* Internet das Coisas
* Casa Inteligente
* Interface Homem‑Máquina
* Controle de Iluminação
* Hub de Sensores
* Robô

## Recursos

* Reconhecimento de voz local
* Taxa de disparo falso muito baixa
* Conector para alto‑falante (JST2.0, alto‑falante não incluído)
* Microfone embutido
* Tensão de operação de 3,3/5 V
* 22 entradas de reconhecimento
* Baud rate padrão: 9600

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

**Suporte a Plataformas**

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## Especificação

| Item  | Min |Typ | Max | Condição |
|---|-------|-----|--------|-----------|
| Tensão de Operação |3V     |3.3V |5V |25 ℃|
|Corrente de Operação  |25mA   |26.5mA |80mA@reprodução |VCC = 3.3V 25℃|
|Corrente de Operação  | 25mA | 26.5mA |130mA@reprodução| VCC = 5V 25℃|
|Temperatura de Operação| 0℃ |25℃ |85℃ | |
|Tamanho | | 40*20mm  | | |
|Peso | | 5g  | |
|Flash | | 2Mbytes | |
|Sensibilidade do Microfone |-43dB | -40dB | -37dB | VCC = 5V 25℃ |
|SNR do Microfone | 58dB  || | |
|Diretividade do Microfone | |Omnidirecional | | |
|Potência do Alto‑falante| | |1W |VCC = 5V 25℃|
|Núcleo do Processador| |Cortex-M0| | |
|Frequência do Processador | |32.768MHz|50MHz|VCC = 5V 25℃|

## Visão Geral de Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/hw.png)

1. Conector Grove
2. LED vermelho - acende quando "HIcell" é reconhecido
3. LED azul - acende quando um comando é reconhecido
4. Conector para Alto‑falante - você pode conectar um alto‑falante para obter o retorno de voz
5. Microfone
6. ISD9160CFI - controlador

## Retorno de Comando

| Comando | Valor |
|-------------|--------|
|Ligar a luz |1|
|Desligar a luz |2|
|Tocar música |3|
|Pausar  |4|
|Próxima  |5|
|Anterior  |6|
|Aumentar  |7|
|Diminuir |8|
|Ligar a TV |9|
|Desligar a TV |10|
|Aumentar a temperatura |11|
|Diminuir a temperatura |12|
|Que horas são |13|
|Abrir a porta |14|
|Fechar a porta |15|
|Esquerda |16|
|Direita  |17|
|Parar  |18|
|Iniciar |19|
|Modo 1 |20|
|Modo 2 |21|
|Ir |22|

## Primeiros Passos

Aqui vamos mostrar como este Grove - Speech Recognizer funciona por meio de um simples demo. Antes de tudo, você precisa preparar os itens abaixo:

| Seeeduino V4 | Grove - Speech Recognizer | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

**Conexão de Hardware**

Graças à vantagem dos módulos da série Grove, você não precisa fazer soldagem ou usar protoboard; tudo o que você precisa fazer é conectar os módulos à porta correta do Base Shield. Para este demo, conectamos o Grove - Speech Recognizer à porta D2.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/connect.jpeg)

**Software**

Copie o código abaixo e cole no seu Arduino IDE, e faça o upload para o seu Seeeduino V4. Depois de enviar o código para um Arduino, abra o Serial Monitor.

```
#include <SoftwareSerial.h>

#define SOFTSERIAL_RX_PIN  2
#define SOFTSERIAL_TX_PIN  3

SoftwareSerial softSerial(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

const char *voiceBuffer[] =
{
    "Turn on the light",
    "Turn off the light",
    "Play music",
    "Pause",
    "Next",
    "Previous",
    "Up",
    "Down",
    "Turn on the TV",
    "Turn off the TV",
    "Increase temperature",
    "Decrease temperature",
    "What's the time",
    "Open the door",
    "Close the door",
    "Left",
    "Right",
    "Stop",
    "Start",
    "Mode 1",
    "Mode 2",
    "Go",
};

void setup()
{
    Serial.begin(9600);
    softSerial.begin(9600);
    softSerial.listen();
}

void loop()
{
    char cmd;

    if(softSerial.available())
    {
        cmd = softSerial.read();
        Serial.println(voiceBuffer[cmd - 1]);
    }
}

```

**Ativar o módulo**

O módulo será ativado quando houver o comando **Hicell**, então o LED vermelho acenderá. Tente novamente quando o LED vermelho não acender.

:::note
    O LED vermelho ficará aceso por 5 segundos. Se o LED vermelho apagar antes de o comando ser reconhecido, você deve dizer **Hicell** novamente.
:::

**Comando**

Depois que o módulo estiver ativo, você pode falar o comando. Como, por exemplo:

    "Turn on the TV"
Se o LED azul acender (por cerca de 1 s), isso significa que o comando foi reconhecido corretamente. Dê uma olhada no seu Serial Monitor, o comando foi impresso nele.

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/monitor.png)

### Brincar com o Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Speech Recognizer à porta D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta for a sua primeira vez usando o Codecraft, consulte também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc, que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cc_Speech_Recognizer.PNG)

Envie o programa para o seu Arduino/Seeeduino.

:::success
    Quando o upload do código terminar, diga Hicell para acordá‑lo, e você poderá dizer outro comando quando o LED vermelho acender.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemáticos em Eagle](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip)
* [Esquemáticos em PDF](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove%20-%20Speech%20Recognizer%20v1.0.pdf)
* [Arquivo Codecraft CDC](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove_Speech_Recognizer_CDC_File.zip)

## Atualização para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial bem-sucedido.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
