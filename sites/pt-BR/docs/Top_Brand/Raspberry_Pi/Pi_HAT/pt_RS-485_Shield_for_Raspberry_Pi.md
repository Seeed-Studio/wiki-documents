---
description: Shield RS-485 para Raspberry Pi
title: Shield RS-485 para Raspberry Pi
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RS-485_Shield_for_Raspberry_Pi
sku: 103030295
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/RS-485_Shield_for_Raspberry_Pi/
---

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/main.jpg)

RS-485 é uma solução econômica em redes de comunicação serial. Ele pode ser usado com taxas de dados de até 10 Mbit/s ou distâncias de até 1200 m em velocidades mais baixas. Este Shield RS-485 é uma placa de expansão padrão para Raspberry Pi. Ele é integrado com um terminal de parafuso simples, bem como interface DB9.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                             | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Shield RS-485 para Raspberry Pi | Inicial                                                                                               | Set 2018      |

## Características

- Um driver e um receptor por peça
- Minimização de ruído EMI
- Taxa de transmissão de até 2,5 Mbps
- Sem limitação de taxa de variação do driver
- Corrente de curto-circuito limitada
- Aplicações Fail-Safe
- Suporte a Raspberry Pi 3B/3B+/4

<!-- <div class="page"/></div> -->

## Especificação

|Item|Valor|
|:---|:---|
|Tensão de Alimentação de Operação|3.3V|
|Interface|Interface RS-485 DB9 X1<br />Interface RS-485 com Terminal de Parafuso X1 <br /> Conector Fêmea 2×13 para Raspberry X1<br />  Conector Fêmea de Expansão 2×13 X1<br />  Interface Grove I2C X1|
|Taxa de Dados|2,5 Mbps|
|Número de Receptores ativos|32|
|Faixa de Temperatura de Armazenamento|-65～160℃|
|Número de Canais|8|
|Resolução|12 bits|
|Consumo de Energia|Consumo de energia diferente dependendo da taxa de transmissão|
|Tamanho|C: 62 mm L: 39,2 mm A: 21,8 mm|
|Peso|23 g|
|Tamanho da Embalagem|C: 140 mm L: 75 mm A: 25 mm|
|Peso Bruto|42 g|

<!-- <div class="page"/></div> -->

## Aplicações Típicas

- Transceptores RS-485 de Baixa Potência
- Tradutores de Nível
- Transceptores para Aplicações Sensíveis a EMI em Redes Locais de Controle Industrial
- Aplicações half-duplex

## Visão Geral do Hardware

### Pinagem

**Visão geral**

![Pin_map](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map.jpg)

<!-- <div class="page"/></div> -->

---
**Interface RS-485 DB9 & Interface RS-485 com Terminal de Parafuso**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/8.jpg)

A interface 485 usa transmissão de sinal diferencial. Certifique-se de que a porta A esteja conectada à porta A do dispositivo 485 e a porta B esteja conectada à porta B do dispositivo 485.

>485-A: A extremidade A do fio de transmissão de dados RS485, conectada ao pino A do chip MAX485.  
>485-B: A extremidade B do fio de transmissão de dados RS485, conectada ao pino B do chip MAX485.  
>GND: Conectar ao GND do Raspberry Pi.

[![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg)

<p style={{textAlign: 'center'}}><font color="green">Você pode clicar na imagem para ver o arquivo original</font></p>

Como você pode ver, GPIO14 e GPIO15 são aplicados para transmissão de dados, e usamos o GPIO18 como sinal de habilitação.

Para a definição dos sinais lógicos, consulte a tabela abaixo.

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/function_table.jpg)

---
**Conectores Fêmeas para Raspberry**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/5.jpg)

Usamos um conector fêmea 2X13 para conectar este módulo ao Raspberry Pi, certifique-se de que os pinos estejam alinhados.

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map_2.jpg)

---
**Conectores Fêmeas de Extensão**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/6.jpg)

Este Shield RS-485 ocupa 26 pinos do Raspberry Pi, e apenas 5 pinos GPIO são realmente usados. Nós disponibilizamos esses 26 pinos caso você precise deles para outros propósitos.

>Lista de GPIO Ocupados

Número do GPIO|Função
:---:|---
GPIO02|SDA para Porta Grove I2C
GPIO03|SCL para Porta Grove I2C
GPIO14|Conectado ao pino **DI** do chip Max485, para transmissão de dados.
GPIO15|Conectado ao pino **RO** do chip Max485, para transmissão de dados.
GPIO18|Conectado aos pinos **RE** & **DE** do chip Max485, atuando como sinal de habilitação.

---
**Porta Grove I2C**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/3.jpg)

Reservamos a interface I2C para que você possa facilmente usá-la com dispositivos I2C. Deve-se notar que o VCC desta porta é 5V; você precisa confirmar se o módulo é compatível com a tensão de 5V.

>SCL: clock serial I2C, conectado ao GPIO03 do Raspberry Pi.  
>SDA: dados seriais I2C, conectado ao GPIO02 do Raspberry Pi.  
>VCC: Conectar ao pino de 5V do Raspberry Pi.  
>GND: Conectar ao pino GND do Raspberry Pi.

<!-- <div class="page"/></div> -->

---
**Chip Max485**

![](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/7.jpg)

Usamos o CI MAX485ESA neste shield; para mais detalhes sobre este CI, verifique o [Datasheet do MAX485](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

<!-- <div class="page"/></div> -->

## Primeiros Passos

### Hardware

**Materiais necessários**

|Raspberry Pi|Shield RS-485 para Raspberry Pi|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html)|

- **Passo 1.** Conecte o Shield RS-485 para Raspberry Pi ao Raspberry Pi.

- **Passo 2.** Conecte o **485-A** ao fio 485 A, conecte o **485-B** ao fio 485 B.

:::note
    Se o fio estiver invertido, a comunicação não será possível.
:::

- **Passo 3.** Alimente o Raspberry Pi com um cabo micro-USB.

### Software

#### Código de teste de comunicação

Você pode criar um novo arquivo python e copiar o código a seguir para o novo arquivo, ou pode baixar o arquivo-fonte na área de download de recursos. Em seguida, execute-o no seu terminal.

<!-- <div class="page"/></div> -->

**Código de Envio.**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

send_str = "*******rs485888888--\n"

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200)

Tx_Enable = LED(18)
Tx_Enable.on()

while 1:
    ser.write(send_str)
    time.sleep(1)

```

<!-- <div class="page"/></div> -->

**Código de Recepção**

```python

#!/usr/bin/env python

import time
import serial
import os
from gpiozero import LED

ser = serial.Serial(port='/dev/ttyS0',baudrate =115200,timeout=1)
data = ''

Rx_Disable = LED(18)
Rx_Disable.off()

while True:
    str = ser.readall()  
    if str:  
        print str 

```

Você precisa de dois shields e dois Raspberry para testar o código acima, ou pode usar a ferramenta serial no PC para se comunicar com o seu Raspberry Pi.

<!-- <div class="page"/></div> -->

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Shield RS-485 para Raspberry Pi](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip)

- **[Zip]** [Código de Teste em Python](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/Python_test.zip)

- **[PDF]** [Datasheet do MAX485](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf)

- **[PDF]** [Wiki em Formato PDF](https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485_Shield_for_Raspberry_Pi.pdf)

## Suporte Técnico & Discussão sobre o Produto

 .
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
