---
description: Grove Base HAT
title: Grove Base HAT
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_HAT/
---

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT.JPG)

Grove Base HAT é uma placa adicional que traz sensores Grove para o Raspberry Pi. Ele é compatível com Raspberry Pi 2 Model B, Raspberry Pi 3 Model B e Raspberry Pi B+. Existem quatro furos de montagem, combinando bem com o tamanho normal do Raspberry Pi. Ele também mantém o espaço para cabos de câmera.

## Versão

<table className="tg">
  <tbody><tr>
      <th className="tg-yw4l">Versão do Produto</th>
      <th className="tg-yw42">Alterações</th>
      <th className="tg-yw4l">Data de Lançamento</th>
    </tr>
    <tr>
      <td className="tg-4eph">Grove Base HAT</td>
      <td className="tg-4eph">Inicial</td>
      <td className="tg-b7b8">15 de Dez, 2017</td>
    </tr>
  </tbody></table>

## Recursos

* 2 portas digitais

* 2 portas analógicas
* 3 portas I2C
* 1 porta UART
* 1 chave de energia

## Visão Geral de Hardware

As imagens abaixo mostram uma visão geral dos recursos de hardware do Grove Base HAT. O pinout e as funções alternativas de vários pinos do Grove Base HAT são mostrados no diagrama de pinout. Isso pode ser usado como uma referência rápida.

![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Hardware_overview.jpg)

* **<font face size={5} font color="00b0f0">❶</font>Porta Digital:**
2 portas Grove digitais são usadas para conectar sensores digitais Grove.

* **<font face size={5} font color="00b0f0">❷</font>Porta Analógica:**
2 portas Grove analógicas são usadas para conectar sensores analógicos Grove. O Raspberry Pi não suporta sinal analógico. Então usamos o chip ADS1015 para transferir o sinal ADC para sinal I2C.

* **<font face size={5} font color="00b0f0">❸</font>Porta I2C:**
3 portas Grove I2C são usadas para conectar sensores Grove I2C.

* **<font face size={5} font color="00b0f0">❹</font>UART:**
1 porta Grove UART é usada para conectar sensores Grove UART. O UART do Raspberry Pi 3 é usado por bluetooth. Siga [THE RASPBERRY PI UARTS
](https://www.raspberrypi.org/documentation/configuration/uart.md) para habilitar o UART.

* **<font face size={5} font color="00b0f0">❺</font>Chave de Energia do Sistema:**
A chave deslizante é usada para alterar o nível lógico e a tensão de operação da placa para 5V ou 3,3V.

* **<font face size={5} font color="00b0f0">❻</font>ADS1015:**
 ADS1015 é um conversor analógico‑digital (ADC) de precisão com 12 bits de resolução. Os dados são transferidos por meio de uma interface serial compatível com I2C.

* **<font face size={5} font color="00b0f0">❼</font>TXS0108:**
Este tradutor não inversor de 8 bits usa dois trilhos de alimentação configuráveis separados. A porta A acompanha a tensão de alimentação do pino VCCA. O pino VCCA aceita qualquer tensão de alimentação entre 1,2 V e 3,6 V. As portas A são conectadas ao Raspberry. A porta B acompanha a tensão de alimentação do pino VCCB. O pino VCCB aceita qualquer tensão de alimentação entre 1,65 V e 5,5 V. As portas B são conectadas aos sensores Grove.

* **<font face size={5} font color="00b0f0">❽</font>LIVRE:**
Os pinos LIVRE não são usados pelo Grove Base HAT.

## Primeiros Passos

### Hardware

* Passo 1. Prepare os seguintes itens:

| Raspberry Pi | Grove Base HAT |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/Grove%20Base%20HAT_s.JPG)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|

* Passo 2. Conecte o Grove Base HAT ao Raspberry.

* Passo 3. Conecte o Raspberry ao PC através de um cabo USB.

### Software

* Passo 1. Configurar I2C, o I2C não vem ativado por padrão. Podemos usar o raspi-config para habilitá-lo. Execute "sudo raspi-config".

* Passo 2. Use a seta para baixo até 5 interfacing Options e pressione "enter" para selecionar.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.1.png)

* Passo 3. Use a seta para baixo até P5 I2C e pressione "enter" para selecionar.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.2.png)

* Passo 4. Selecione "Yes" para habilitar.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.3.png)

* Passo 5. Selecione "Ok".
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.4.png)

* Passo 6. Selecione "Finish" para salvar as alterações.
![](https://files.seeedstudio.com/wiki/Grove_Base_HAT/img/enable_i2C.5.png)

* Passo 7. Baixe [ADS1X15_Driver](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip) para a pasta /home/pi do Raspberry e descompacte.

```
wget https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ADS1X15_Driver.zip
unzip ADS1X15_Driver.zip
```

* Passo 8. Vá para a pasta singleended e execute make. Veremos o arquivo Singleended destacado em verde.

```
pi@raspberrypi:~ $ cd ~/Adafruit_ADS1X15_Linux/examples/singleended
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ make
g++ -o singleended.o -c singleended.cpp -I../../ -W -Wall
g++ -o Singleended singleended.o -lads1015 -L../../
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ls
Makefile  Singleended  singleended.cpp  singleended.o

```

* Passo 9. Execute singleended para ler os dados.

```
pi@raspberrypi:~/Adafruit_ADS1X15_Linux/examples/singleended $ ./Singleended
Hello!
Getting single-ended readings from AIN0..3
ADC Range: +/- 6.144V (1 bit = 3mV/ADS1015, 0.1875mV/ADS1115)
AIN0: 4095
AIN1: 4095
AIN2: 4095
AIN3: 4095
```

## FAQs

Clique **[aqui](http://support.seeedstudio.com/knowledgebase/articles/1831468-grove-base-hat-sku-tbd)** para ver todas as FAQs de Grove_Base_HAT.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]** [Baixar Wiki em PDF](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Grove_Base_HAT.pdf)

* **[Eagle]** [Arquivo de Esquemático do Grove Base HAT](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/Raspberry%20Pi%20Grove%20Base%20HAT.zip)
* **[Datasheet]** [ADS1015](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/ads1015.pdf)
* **[Datasheet]** [TXS0108](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/txs0108e.pdf)
* **[PDF]** [Mecânica do Grove Base HAT](https://files.seeedstudio.com/wiki/Grove_Base_HAT/res/hat-board-mechanical.pdf)
* **[Github]** [HAT](https://github.com/raspberrypi/hats)

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

