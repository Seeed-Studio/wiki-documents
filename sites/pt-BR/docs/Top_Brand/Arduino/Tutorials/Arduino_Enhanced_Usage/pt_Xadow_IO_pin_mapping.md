---
description: Mapeamento de pinos de E/S do Xadow
title: Mapeamento de pinos de E/S do Xadow
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_IO_pin_mapping
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-02-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_IO_pin_mapping/
---
<!-- ---
name: Xadow IO pin mapping
category: Tutorial
bzurl:
oldwikiname:  Xadow IO pin mapping
prodimagename:
surveyurl: https://www.research.net/r/Xadow_IO_pin_mapping
sku:
--- -->

Página de referência única para todas as informações de pinos incluindo:-

* Como usar cada pino no seu código Arduino

* Mapeamento de pinos Xadow FFC para Atmega32u4

* pinos que possuem interrupções e temporizadores

* as 2 portas seriais, IIc e ISP
* E/S adicionais na placa que podem ser hackeadas

As tabelas fornecem diferentes visões dos dados e são especialmente úteis quando você está planejando quais módulos usar e quais pinos de E/S para uso direto!

## Barramento de E/S Xadow FFC e informações correspondentes de Arduino e Atmega e exemplo de código Arduino

<table>
<tr>
<td colspan="4"> <strong>Pinos Xadow FFC</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Pinos Atmega32u4</strong></td>
<td></td>
</tr>
<tr>
<td> <strong>Nome</strong></td>
<td> <strong>Função de E/S</strong></td>
<td> <strong>Uso alternativo</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Pino de E/S</strong></td>
<td> <strong>exemplo(s) de código</strong></td>
<td> <strong>Nome (<strong>interrupções em vermelho</strong>)</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Notas</strong></td>
</tr>
<tr>
<td> P1</td>
<td> Pino Digital</td>
<td> ISP SCK</td>
<td> 1</td>
<td> <strong>15</strong></td>
<td> PinMode(15, OUTPUT); digitalWrite(15, HIGH);</td>
<td> PB1<strong>(PCINT1</strong>/SCLK)</td>
<td> 9</td>
<td> Ilhas do conector ISP SMD também na parte traseira da placa principal Xado</td>
</tr>
<tr>
<td> P2</td>
<td> Pino Digital</td>
<td> ISP MOSI</td>
<td> 2</td>
<td> <strong>16</strong></td>
<td> PinMode(16, OUTPUT); digitalWrite(16, HIGH);</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> 10</td>
</tr>
<tr>
<td> P3</td>
<td> Pino Digital</td>
<td> ISP MISO</td>
<td> 3</td>
<td> <strong>14</strong></td>
<td> PinMode(14, OUTPUT); digitalWrite(14, HIGH);</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> 11</td>
</tr>
<tr>
<td> P4</td>
<td> Pino Analógico</td>
<td> Pino digital!</td>
<td> 4</td>
<td> <strong>A5</strong></td>
<td> analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);</td>
<td> PF0(ADC0)</td>
<td> 41</td>
<td> Pinos analógicos do Arduino também podem ser usados como pinos digitais!</td>
</tr>
<tr>
<td> P5</td>
<td> Pino Digital</td>
<td> IIC SCL</td>
<td> 9</td>
<td> <strong>3</strong></td>
<td> PinMode(3, OUTPUT); digitalWrite(3, HIGH);</td>
<td> PD0(OC0B/SCL/<strong>INT0</strong>)</td>
<td> 18</td>
<td></td>
</tr>
<tr>
<td> P6</td>
<td> Pino Digital</td>
<td> IIC SDA</td>
<td> 10</td>
<td> <strong>2</strong></td>
<td> PinMode(2, OUTPUT); digitalWrite(2, HIGH);</td>
<td> PD1 (SDA/<strong>INT1</strong>)</td>
<td> 19</td>
<td></td>
</tr>
<tr>
<td> P7</td>
<td> Pino Digital</td>
<td> Serial Rxd</td>
<td> 11</td>
<td> <strong>0</strong></td>
<td> PinMode(0, OUTPUT); digitalWrite(0, HIGH);</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> 20</td>
<td>
Veja os exemplos de Xadow BLE/GPS para estas informações de uso de pinos seriais.

NÃO é a mesma porta serial para enviar o código – veja o LED Vermelho/Verde abaixo.
</td>
</tr>
<tr>
<td> P8</td>
<td> Pino Digital</td>
<td> Serial Txd</td>
<td> 12</td>
<td> <strong>1</strong></td>
<td> PinMode(1, OUTPUT); digitalWrite(1, HIGH);</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> 21</td>
</tr>
</table>

## MAIS alguns pinos de E/S Xadow - somente no módulo Principal, NÃO no barramento FFC

<table>
<tr>
<td colspan="4"> <strong>Pinos Xadow</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Pinos Atmega32u4</strong></td>
<td></td></tr>
<tr>
<td> <strong>Nome</strong></td>
<td> <strong>Função de E/S</strong></td>
<td> <strong>Uso alternativo</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Pino de E/S</strong></td>
<td> <strong>exemplo(s) de código</strong></td>
<td> <strong>Nome (<strong>interrupções em vermelho</strong>)</strong></td>
<td> <strong>#</strong></td>
<td> <strong>Notas</strong></td>
</tr>
<tr>
<td> LED Vermelho</td>
<td> Rx</td>
<td></td>
<td> -</td>
<td> <strong>17</strong></td>
<td> PinMode(17, OUTPUT); digitalWrite(17, HIGH);</td>
<td> PB0(SS/<strong>PCINT0</strong>)</td>
<td> 8</td>
<td> Código de envio pela porta serial</td>
</tr>
<tr>
<td> LED Verde</td>
<td> Tx</td>
<td></td>
<td> -</td>
<td> <strong>11</strong></td>
<td> PinMode(11, OUTPUT); digitalWrite(11, HIGH);</td>
<td> PB7(<strong>PCINT7</strong>/OC0A/OC1C/!RTS)</td>
<td> 12</td>
</tr>
<tr>
<td> Wake</td>
<td></td>
<td></td>
<td> -</td>
<td> <strong>10</strong></td>
<td> Ainda não conectamos e validamos isto!</td>
<td> PB^/A10/D10</td>
<td> 30</td>
<td> Interruptor na placa – você precisa de habilidades de soldagem avançadas para acessar isto!</td>
</tr></table>

Nota: O botão de Reset está conectado ao pino de Reset 13 do Atmega32u4 através de um diodo – portanto não há acesso ao pino de E/S do 32u4 NO BOTÃO DE RESET!

## A GRANDE Tabela de módulos Xadow e o uso de pinos do barramento de E/S para cada módulo

Por que uma tabela tão grande e complicada? Bem, ela reúne todas as informações de E/S em um só lugar, mas mais importante, permite que você veja quais pinos de E/S ainda estão disponíveis depois que você selecionar vários módulos Xadow! Além disso, o esquemático tem números de pinos FFC diferentes do restante da documentação do wiki!

Notas:-

1. Lembre-se de que dispositivos IIC são em cascata – isto é, eles podem se conectar em paralelo, então você pode ter mais de um dispositivo IIC conectado aos mesmos pinos!

2. Precisa de mais pinos de E/S? Você pode ser capaz de usar UM pino para vários usos diferentes, da mesma forma que o motor de vibração e o buzzer compartilham um pino, ou em algumas situações você pode usar o mesmo pino para diferentes propósitos em MOMENTOS DIFERENTES. Por exemplo, você pode definir um pino como saída para disparar um sensor ultrassônico e depois mudar o pino para entrada para detectar quando o sinal é recebido!

3. A maioria dos módulos IIC &lbrace;exceto o módulo da Placa Principal, LED, RTC&rbrace;, TAMBÉM possuem pinos de breakout IIC.

Então itens em roxo nas colunas IIC SCL &amp; IIC SDA NÃO possuem também pinos de breakout!

4. Detalhes adicionais realçados em amarelo no centro da tabela documentam os pinos de breakout **ADICIONAIS** em cada módulo Xadow!

5. ? = Não sei, ou ainda não verificado!

<table>
<tr>
<td>
</td>
<td>
</td>
<td> <center>SCK</center></td>
<td> <center>MOSI</center></td>
<td> <center>MISO</center></td>
<td> <center>A5</center></td>
<td> <center>3</center></td>
<td> <center>2</center></td>
<td> <center>1</center></td>
<td> <center>0</center></td>
<td> <strong>Nome do pino Arduino</strong></td>
</tr>
<tr>
<td>
</td>
<td> <strong>Interrupções em vermelho--------&gt;</strong></td>
<td> PB1(PCINT1/SCLK)</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> PF0(ADC0)</td>
<td> PD0(OC0B/SCL/INT0)</td>
<td> PD1(SDA/<strong>INT1</strong>)</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> Nome do pino Atmega32u4</td>
</tr>
<tr>
<td> <center><strong>IIC = I2C</strong></center></td>
<td></td>
<td> 9</td>
<td> 10</td>
<td> 11</td>
<td> 41</td>
<td> 18</td>
<td> 19</td>
<td> 20</td>
<td> 21</td>
<td> Pino# Atmega32u4</td>
</tr>
<tr>
<td></td>
<td></td>
<td> P1, 1</td>
<td> P2, 2</td>
<td> P3, 3</td>
<td> P4, 4</td>
<td> P5, 9</td>
<td> P6, 10</td>
<td> P7, 11</td>
<td> P8,12</td>
<td> Nome, # do pino FFC</td>
</tr>
<tr>
<td> <strong>Módulos Xadow </strong></td>
<td> <strong>Modo de Controle do Módulo &amp; Endereço</strong></td>
<td> <center>Pino Digital </center></td>
<td> <center>Pino Digital </center></td>
<td> <center>Pino Digital </center></td>
<td> <center><strong>Analógico ou </strong>Pino Digital </center></td>
<td> <center><strong>IIC SCL</strong></center></td>
<td> <center><strong>IIC SDA</strong></center></td>
<td> <center><strong>Serial Rxd</strong></center></td>
<td> <center><strong>Serial Txd</strong></center></td>
<td> <strong>Função do pino Xadow</strong></td>
</tr>
<tr>
<td> <center>Acelerômetro de 3 Eixos </center></td>
<td> <center>IIC 0x53</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td></td>
</tr>
<tr>
<td> <center>BaroMeter </center></td>
<td> <center>IIC 0x77</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td></td>
</tr>
<tr>
<td> <center>BLE Slave </center></td>
<td> <center>Serial </center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td colspan="2"> <center>RX/TX </center></td>
<td> Além de ilhas específicas para BLE na parte traseira</td>
</tr>
<tr>
<td> <center>Breakout </center></td>
<td> <center>Nenhum!</center></td>
<td> SCK</td>
<td> MOSI</td>
<td> MISO</td>
<td> <center>A5</center></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td> Rxd</td>
<td> TxD</td>
<td> + soquetes Grove I2C &amp; Serial</td>
</tr>
<tr>
<td> <center>Controlador de LED </center></td>
<td> <center>IIC 0x04</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> <center>OLED </center></td>
<td> <center>IIC 0x3C</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td> <center>Motor de Vibração </center></td>
<td> <center>Sinal Digital </center></td>
<td></td>
<td> <center>H </center></td>
<td></td>
<td> <center>H </center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> _<strong>Desconecte o módulo ANTES de usar ISP</strong>_</td>
</tr>
<tr>
<td> <center>RTC </center></td>
<td> <center>IIC 0x68</center></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td> ilha traseira conecta INTB – Int0???</td>
</tr>
<tr>
<td> <center>Buzzer </center></td>
<td> <center>Sinal Digital </center></td>
<td> <center>H </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>H </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> _<strong>Desconecte o módulo ANTES de usar o ISP</strong>_</td>
</tr>
<tr>
<td> <center>Bússola Digital </center></td>
<td> <center>IIC 0x1E</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center>Motor </center></td>
<td> <center>A definir </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center>GPS </center></td>
<td> <center>Serial </center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td colspan="2"> <center>RX/TX </center></td>
<td></td>
</tr>
<tr>
<td> <center>Armazenamento </center></td>
<td> <center>IIC 0x50 &amp; 0x51</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td> <center>?</center></td>
<td></td>
</tr>
<tr>
<td> <center><strong>Placa Principal</strong></center></td>
<td> <center>?IIC master =0x00?</center></td>
<td> ISP – SCK</td>
<td> ISP MOSI</td>
<td> ISP MISO</td>
<td></td>
<td> <center>SCL</center></td>
<td> <center>SDA</center></td>
<td></td>
<td></td>
<td> Tudo via pads SMD na parte traseira.</td>
</tr>
</table>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
