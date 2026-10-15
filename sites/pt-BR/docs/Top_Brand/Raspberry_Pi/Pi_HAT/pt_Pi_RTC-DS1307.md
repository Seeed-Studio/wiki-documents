---
description: DS1307 RTC (Relógio de Tempo Real) para Raspberry Pi
title: DS1307 RTC (Relógio de Tempo Real) para Raspberry Pi
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Pi_RTC-DS1307
sku: 103030277
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Pi_RTC-DS1307/
---


![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/main.jpg)

O Pi RTC é baseado no chip de relógio DS1307 e pode fornecer um relógio de tempo real (RTC) para o Raspberry Pi por meio da interface I2C. O relógio em tempo real deste módulo conta segundos, minutos, horas, data do mês, mês, dia da semana e ano com compensação de ano bissexto válida até 2100. O relógio opera em formato de 24 horas ou 12 horas com indicador AM/PM. Se você quiser manter a cronometragem deste módulo quando o Raspberry Pi estiver desligado, será necessário colocar uma célula de lítio CR1225 de 3 volts no suporte de bateria.  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Pi-RTC-DS1307.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::note
        A bateria não está incluída.
:::

## Recursos

- Suporta Raspberry Pi 2/ 3 B/B+/4/Zero
- Suporta segundos, minutos, horas, dia da semana, mês, ano
- Suporta formato de 24 horas ou 12 horas com indicador AM/PM
- 56 bytes de RAM não volátil (NV) alimentada por bateria para armazenamento de dados
- Interface serial de dois fios
- Sinal de saída de onda quadrada programável
- Circuito automático de detecção e comutação em caso de falha de energia

## Especificação

|Item|Valor|
|---|---|
|Tensão de Operação|5V|
|Interface|I2C|
|Endereço I2C|0x68|

## Aplicações típicas

Quaisquer aplicações que precisem de Tempo Real no Raspberry.

## Pinagem

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/pin_out.jpg)

:::note
RX/TX não é usado neste módulo, mas o conector 5x2 ocupa o pino RX/TX do Raspberry Pi, então nós trazemos o RX/TX para fora e fornecemos um conector de 2 pinos.
:::

### Esquemático

**Circuito de conversor de nível bidirecional**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/schematic.jpg)

Este é um circuito típico de conversor de nível bidirecional para conectar duas seções de tensão diferente de um barramento I^2^C. O barramento I<sup>2</sup>C do Raspberry Pi usa 3,3 V, porém o chip DS1307 funciona a 5 V, então este circuito será necessário. No esquemático acima, **Q1** e **Q2** são MOSFETs de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que atuam como uma chave bidirecional. Para entender melhor esta parte, você pode consultar o [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas Suportadas

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|  ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Materiais necessários

|Raspberry Pi|Pi RTC(DS1307)|
|---|---|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|

:::note
Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos; o cabo com 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.
:::

### Instalação

O driver que fornecemos é aplicado apenas para Raspbian Jessie/Stretch.

:::tip
Se você não sabe como usar um Raspberry Pi, verifique [aqui](https://www.raspberrypi.org/documentation/) antes de começar.
:::

- **Passo 1. Instalação do Driver**

Digite o seguinte comando no seu terminal

```
git clone https://github.com/Seeed-Studio/pi-hats.git
```

Quando o download terminar, digite o seguinte comando no seu terminal

```
cd ~/pi-hats/tools
sudo ./install.sh -u rtc_ds1307
```

- **Passo 2. Desligar o Raspberry Pi**

```
sudo shutdown -h now
```

- **Passo 3. Inserir o HAT no Raspberry Pi**

![](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/img/connect.jpg)

Certifique-se de conectar o pino 1 deste HAT ao pino 1 do GPIO do Raspberry, exatamente como na figura acima.

- **Passo 4. Ligar o Raspberry Pi**

### Uso

Agora você pode usar o comando para verificar se o driver foi instalado com sucesso.

```
./install.sh -l
```

Se você quiser desinstalar o driver, pode usar o comando abaixo:

```
sudo ./install.sh -u
```

Agora vamos ver o que o módulo RTC pode fazer:

___
Ler o relógio de hardware e imprimir o resultado

```
sudo hwclock -r
```

___

Definir a hora do sistema a partir do relógio de hardware

```
sudo hwclock -s
```

___

Definir o relógio de hardware a partir da hora atual do sistema

```
sudo hwclock -w
```

___

Mais usos

```
hwclock --help
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivos Eagle do Pi RTC(DS1307)](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/Pi%20RTC%20(DS1307).zip)

- **[http]** [Biblioteca Seeed Pi RTC](https://github.com/Seeed-Studio/pi-hats)

- **[PDF]** [Datasheet DS1307](https://files.seeedstudio.com/wiki/Pi_RTC-DS1307/res/DS1307.pdf)

## Projeto

Este é o vídeo de introdução deste produto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
