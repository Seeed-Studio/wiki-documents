---
description: Seeeduino v3.0
title: Seeeduino v3.0
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_v3.0
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_v3.0/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_v3.0_top.jpg)

## Visão Geral ##

O Seeeduino v3 é uma placa de microcontrolador baseada no ATmega328, e é compatível com Arduino. Ela possui um chip driver FTDI USB‑para‑serial que pode ser considerado como uma ponte, permitindo que seu computador se comunique com a placa. Ela possui 14 pinos digitais (que incluem 6 pinos PWM e porta UART) e 8 pinos analógicos, um ressonador cerâmico de 16 MHz, uma conexão USB, um botão de reset, um cabeçalho ICSP e um conector de alimentação DC. Possui duas chaves seletoras, uma para mudar a tensão de entrada do ATmega328, e a outra é o pino de habilitar/desabilitar o DTR, o que permite usar a função FTDI sozinha sem a influência do ATmega328. Ela também possui dois conectores Grove brancos, tornando conveniente o uso de produtos Grove com a placa.

## Especificações ##

|Item|Valor|
|---|---|
| Microcontrolador|Atmel ATmega328 (AVR 8‑bit) em encapsulamento TQFP‑32  |
|  Placa (Boot-loader)|Arduino Duemilanove c/ Atmega328 |
| Tensão de Operação|5V ou 3,3V (escolha por chave deslizante)  |  
|  Corrente máxima de saída das portas 3V3 e 5V|Porta de 5V ‑ 500mA, porta de 3V3 ‑ 800mA (precisa ser alimentada por conector DC ou Vin) |
| Corrente máxima de saída dos pinos digitais|40mA  |
|  Tensão de Entrada miniUSB|5V. Máxima é 5,5V. |
|  Tensão de Entrada no Conector DC & Vin|7V a 12V (valores mais baixos são preferíveis). Máxima é 20V. Se a entrada for menor que 7V e a chave estiver em 5V, então o VCC no AVR ficará cerca de 2V abaixo da entrada. |
|Pinos Digitais de E/S|14 (dos quais 6 fornecem saída PWM)   |
|  Pinos de Entrada Analógica|8 (dos quais 2 são usados para comunicação I2C ‑ PC4 e PC5) |
|  Memória Flash|32 KB  |
|  SRAM|2 KB |
|  EEPROM|1 KB     |
|  Frequência de Clock|16 MHz     |

## Uso ##

### USB‑para‑Serial ###

O Seeeduino possui um chip driver FTDI USB‑para‑serial onboard ‑ FT232R, que é programado como um conversor USB‑para‑serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI.png)

Dez pinos do FT232R foram expostos, ao lado da porta ICSP, facilitando o uso desses pinos, se necessário.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_FTDI_pinout.png)

Há uma chave seletora "M_RST_AUTO" na placa. Ela determina se o sinal DTR do host pode reiniciar o microcontrolador ATmega328.

Defina para "AUTO" para o modo Automático, que permite ao host reiniciar o microcontrolador usando o sinal DTR para reinicializá‑lo automaticamente. Observação: Esta posição é necessária durante o desenvolvimento, portanto será a posição padrão para a maioria das pessoas.

Defina para "M" para o modo Manual, que desabilita o sinal DTR do host, exigindo assim que o usuário pressione fisicamente o botão RESET para reiniciar o microcontrolador. Além disso, é necessário configurá‑la para o modo "M" se você quiser usar o FT232R sozinho.

Para mais informações sobre o chip FTDI, você pode consultar a [página inicial da FTDI](https://www.ftdichip.com/index.html)

### Breakout ###

O Seeeduino é uma placa principal baseada no ATmega328, e todos os pinos úteis são expostos. Há pinos de alimentação, 14 pinos digitais de E/S e 8 pinos analógicos no Seeeduino; ao mesmo tempo, seis dos pinos digitais de E/S podem ser usados como saídas PWM. Todos os pinos do Seeeduino estão ligados a cabeçalhos com espaçamento de 2,54 mm.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/img/Seeeduino_pinout.png)

Cada um dos 14 pinos digitais da placa pode ser usado como entrada ou saída, usando as funções [pinMode()](https://arduino.cc/en/Reference/PinMode)[digitalWrite()](https://arduino.cc/en/Reference/DigitalWrite)[digitalRead()](https://arduino.cc/en/Reference/DigitalRead). Eles operam em 5 volts ou 3,3 volts ao mover a chave seletora "3V3_VCC_5V" para duas posições diferentes. E cada pino pode fornecer ou receber no máximo 40 mA. E a biblioteca [SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial) permite comunicação serial em qualquer um dos pinos digitais.

#### UART: D0 (RX) e D1 (TX) ####

Ela pode ser usada para receber e transmitir dados seriais TTL. Esses dois pinos estão conectados ao chip FTDI, o que possibilita uma comunicação direta entre o seu computador e dispositivos periféricos.

#### Interrupções Externas: D2 e D3 ####

Os dois pinos são as interrupções externas do ATmega328; eles podem ser configurados para disparar uma interrupção em nível baixo, borda de subida ou descida, ou em qualquer mudança de valor. Para mais informações, consulte a [função attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt).

#### PWM: D3, D5, D6, D9, D10, D11 ####

Pulse Width Modulation (Modulação por Largura de Pulso) é uma técnica para obter resultados analógicos por meios digitais. Ela pode ser gerada usando analogWrite(), com uma saída de uma série de sinais de pulso repetidos em nível HIGH e LOW. A frequência PWM do Seeeduino é de cerca de 500Hz e fornece saída PWM de 8 bits com a função [analogWrite()](https://arduino.cc/en/Reference/AnalogWrite). Para mais informações, consulte [PWM](https://arduino.cc/en/Reference/AnalogWrite)

#### SPI: D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK) ####

Esses pinos suportam comunicação SPI usando a [biblioteca SPI](https://arduino.cc/en/Reference/SPI).

##### Diagrama SPI #####

| MISO (D12)|VCC  |
|---|---|
| SCK(D13)|MOSI(D11)  |
|  Reset|GND |

#### Indicador "L" ####

Há um LED "L" na placa, conectado ao pino D13; você pode controlar esse LED via D13.

Há oito pinos analógicos no cabeçalho analógico, rotulados de A0 a A7. Cada pino fornece resolução de 10 bits. Isso significa que uma entrada analógica entre 0V e 5V (0V a 3,3V) pode ser mapeada para 0 a 1024 (0 a 675). Você pode usar analogRead() para obter o valor de uma entrada analógica.

#### I2C: A4 (SDA) & A5 (SCL) ####

O Seeeduino pode gerar um clock de barramento para controlar seu dispositivo escravo I2C com um endereço específico. O Grove I2C também se conecta a A4 e A5.

Há um botão de reset na placa, que está conectado ao pino RST. Ao pressionar o botão, este pino será colocado em nível baixo, então o ATmega328 será reiniciado.

### Alimentação ###

O Seeeduino pode ser alimentado através do conector USB ou do conector DC Jack (Vin). Se você usar USB para alimentá‑lo, a tensão de entrada deve ser 5VDC regulados, como a de um computador ou um adaptador de tomada USB. Por outro lado, quando você escolher o DC Jack, ele deve ser um plugue com centro positivo de 2,1mm e furo externo de 5,5mm. A entrada de alimentação DC deve ser de 7‑20V; entretanto, como resultado do superaquecimento devido a tensões de entrada mais altas, recomenda‑se 7‑12V. Há um regulador de tensão na placa, portanto ela pode converter 5V para 3,3V. Ao mover a chave seletora "3V3_VCC_5V" para a posição 3V3, a tensão de entrada do ATmega328 será alterada para 3,3V e, ao mesmo tempo, a placa operará em 3,3 volts.

### Conectores Grove ###

O Seeeduino possui dois conectores Grove brancos, um é porta IIC e o outro é porta UART. Essas duas portas são ligadas diretamente ao ATmega328, e foram projetadas para conectar produtos Grove à placa de forma mais conveniente.

### Indicadores On‑board ###

Há alguns indicadores na placa, que podem exibir certos estados.

|  Rótulo | Conexão|
|---|---|
|  LED de usuário com rótulo "L" |   Ele é conectado ao pino PB5/SCK do ATmega328P (pino 13 do cabeçalho digital).   |
| LED de Reset com rótulo "RST"  | Ele é conectado ao pino PC6/RESET do ATmega328P. Ele acende quando o Reset está em nível baixo.  |
|LED de Alimentação com rótulo "PWR"|Ele é conectado ao pino VCC do ATmega328P.|
|LED de Transmissão com rótulo "TX"|Ele é conectado ao pino CBUS1 do FT232RL.|
|LED de Recepção com rótulo "RX"|Ele é conectado ao pino CBUS0 do FT232RL.|

## Leituras Relacionadas ##

- [Como usar o Seeeduino](https://seeeddoc.github.io/How_to_use_Seeeduino/)
- [Rastreamento de Versão](https://seeeddoc.github.io/Seeeduino/)

## Licenciamento ##

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição‑CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código‑fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código‑fonte para mais detalhes.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Source]**[Arquivos de Fonte do Seeeduino v3.0](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/SeeeduinoV3.0_Source_File.zip)
- **[PDF]**[PCB do Seeeduino v3.0](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino%20v3.0%20PCB.pdf)
- **[PDF]**[SCH do Seeeduino v3.0](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0%20SCH.pdf)
- **[PDF]**[Esquemático em pdf](https://files.seeedstudio.com/wiki/Seeeduino-v3.0/res/Seeeduino_v3.0.pdf)

## Suporte Técnico & Discussão do Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
