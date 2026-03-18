---
title: LTE Cat 1 Pi HAT
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/LTE_Cat_1_Pi_HAT/
slug: /LTE_Cat_1_Pi_HAT
sku: 113990454, 113990496, 102991015
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LTE_Cat_1_Pi_HAT/
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

O LTE CAT.1 Pi HAT da Seeed é um modem de extensão celular de código aberto para Raspberry Pi,
baseado na série u-blox LARA-R2xx. É compatível com Raspberry Pi 1 Model B+ e versões posteriores.

O LTE CAT.1 Pi HAT é projetado para redes LTE Categoria 1 e com fallback 2G (apenas versão da UE). Incorporando protocolos comuns, como TCP/UDP, HTTP.

O LTE CAT.1 Pi HAT suporta interfaces UART e USB. Por UART, o Raspberry Pi se comunica com o LTE CAT.1 Pi HAT via comando AT sem qualquer driver especial. É muito adequado para construção de protótipos rapidamente.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

|Versão|Links|
|--|--|
|Europa<br/>|<p style={{}}><a href="https://www.seeedstudio.com/TE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|EUA-AT&T<br/> |<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|EUA-VZW<br />|<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|

## Versão

| Versão do Produto              | Alterações | Data de Lançamento |
|------------------------------|-----------|--------------------|
| LTE Cat 1 Pi HAT(USA-AT&T)   | Inicial   | Dez 2017           |
| LTE Cat 1 Pi HAT(USA-VZW)    | Inicial   | Dez 2017           |
| LTE Cat 1 Pi HAT(Europe)     | Inicial   | Dez 2017           |

## Especificações

- Compatível com Raspberry Pi 1 Model
B+ e versões posteriores

- LTE CAT.1 e suporta fallback 2G (apenas
versão da UE)

- Interface UART e USB para
comunicação

- Suporta conector Grove I2C e Digital
connector

- Protocolos no módulo celular

- Pilha TCP/UDP incorporada

- HTTP, FTP, SSL incorporados

- Pilha dupla IPV4/IPV6

- Comando AT padrão 3GPP TS 27.007 [8], TS 27.005 [9]

## Aplicações

- Gateway IoT
- Registrador de dados
- Máquina de vendas
- POS
- Dispositivos de casa inteligente
- Robô
- Publicidade
- Outro cenário que precisa de redes celulares

## Visão Geral de Hardware

**Interfaces**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)

- **LTE CAT.1**: Série LTE CAT.1 U-blox LARA-R2xx
module, consulte a [página de produto da série u-blox LARA-R2](https://www.u-blox.com/en/product/lara-r2-series) para mais informações.
- **Porta Grove**: 2 portas Grove I2C/Digital, conectadas a SDA_RPI, SCL_RPI, podem ser usadas como porta I2C ou GPIO.
- **Chaveadora**: Controla a tensão da porta Grove como 5V ou 3,3V
- **Interface USB**: Pode ser usada para alimentar o LTE Cat.1 Pi HAT e o Raspberry juntos, e também usada como porta de depuração. Consulte a FAQ Q1 sobre como usar como porta de depuração.
- **Suporte de Bateria**: O MP2617 é usado para gerenciamento de energia da bateria. Se a bateria não estiver conectada, o LED CHG piscará na frequência de 6 Hz. Ele ficará desligado durante o carregamento e ligado quando terminar o carregamento. O conector é padrão JST2.0.
- **Botão de Reset Lara-R2XX**: Reinicia o módulo Lara-R2xx.
- **Botão de Ligar Lara-R2XX**: Pressione 2 segundos para ligar o módulo Lara-R2xx.
- **Antena**: Inclui 2 antenas, uma principal e outra de diversidade. A antena principal é usada tanto para enviar quanto para receber sinais. Ela deve estar conectada. A antena de diversidade é usada apenas para recepção e para melhorar a sensibilidade do receptor. É opcional.
- **Pinos Rpi 40**: Consulte o pinout.
- **Slot para cartão SIM**: Siga a direção da serigrafia para conectar o cartão SIM LTE.

:::caution
    Para a bateria, sugerimos bateria de íon de lítio de 3,7 V e conexão ao JST2.0. Especialmente para o Lara-R211(Europe) Pi HAT, ele inclui a função GSM com alto consumo de energia. Se não houver sinal LTE por perto, o LTE CAT.1 Pi HAT também consome muita energia. Portanto, sugerimos fortemente anexar a bateria.
:::

**Pinout**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg .tg-us36{border-color:inherit;vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-us36">Pino Usado</th>
        <th className="tg-us36">Python (BCM)</th>
        <th className="tg-us36">WiringPi GPIO</th>
        <th className="tg-us36">Nome</th>
        <th className="tg-us36" colSpan={2}>Número do Pino P1</th>
        <th className="tg-us36">Nome</th>
        <th className="tg-us36">WiringPi GPIO</th>
        <th className="tg-us36">Python (BCM)</th>
        <th className="tg-us36">Pino Usado</th>
      </tr>
      <tr>
        <td className="tg-us36">3V3_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Alimentação DC 3,3 V</td>
        <td className="tg-us36">1</td>
        <td className="tg-us36">2</td>
        <td className="tg-us36">Alimentação DC 5 V</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">5V_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">SDA_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36">8</td>
        <td className="tg-us36">GPIO02 (SDA1, I2C)</td>
        <td className="tg-us36">3</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">Alimentação DC 5 V</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">5V_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">SCL_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36">9</td>
        <td className="tg-us36">GPIO03 (SCL1, I2C)</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">Terra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">7</td>
        <td className="tg-us36">GPIO04</td>
        <td className="tg-us36">7</td>
        <td className="tg-us36">8</td>
        <td className="tg-us36">GPIO14 (TXD0)</td>
        <td className="tg-us36">15</td>
        <td className="tg-us36" />
        <td className="tg-us36">TX_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Terra</td>
        <td className="tg-us36">9</td>
        <td className="tg-us36">10</td>
        <td className="tg-us36">GPIO15 (RXD0)</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36" />
        <td className="tg-us36">RX_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">RTS_RPI</td>
        <td className="tg-us36">17</td>
        <td className="tg-us36">0</td>
        <td className="tg-us36">GPIO17</td>
        <td className="tg-us36">11</td>
        <td className="tg-us36">12</td>
        <td className="tg-us36">GPIO18</td>
        <td className="tg-us36">1</td>
        <td className="tg-us36">18</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">2</td>
        <td className="tg-us36">GPIO27</td>
        <td className="tg-us36">13</td>
        <td className="tg-us36">14</td>
        <td className="tg-us36">Terra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">3</td>
        <td className="tg-us36">GPIO22</td>
        <td className="tg-us36">15</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36">GPIO23</td>
        <td className="tg-us36">4</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">3V3_RPI</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Alimentação DC 3,3 V</td>
        <td className="tg-us36">17</td>
        <td className="tg-us36">18</td>
        <td className="tg-us36">GPIO24</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">FREE</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36" />
        <td className="tg-us36">12</td>
        <td className="tg-us36">GPIO10 (SPI0_MOSI)</td>
        <td className="tg-us36">19</td>
        <td className="tg-us36">20</td>
        <td className="tg-us36">Terra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">FREE</td>
        <td className="tg-us36" />
        <td className="tg-us36">13</td>
        <td className="tg-us36">GPIO09 (SPI0_MISO)</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">GPIO25 </td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">LIVRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIVRE</td>
        <td className="tg-us36" />
        <td className="tg-us36">14</td>
        <td className="tg-us36">GPIO11 (SPI0 SCLK)</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">GPIO08 (SPI0_CS0)</td>
        <td className="tg-us36">10</td>
        <td className="tg-us36" />
        <td className="tg-us36">LIVRE</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Terra</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">GPIO07 (SPI0_CS1)</td>
        <td className="tg-us36">11</td>
        <td className="tg-us36" />
        <td className="tg-us36">LIVRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIVRE</td>
        <td className="tg-us36" />
        <td className="tg-us36">30</td>
        <td className="tg-us36">Reservado</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">28</td>
        <td className="tg-us36">Reservado</td>
        <td className="tg-us36">31</td>
        <td className="tg-us36" />
        <td className="tg-us36">LIVRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LARA_PWR</td>
        <td className="tg-us36">5</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">GPIO05</td>
        <td className="tg-us36">29</td>
        <td className="tg-us36">30</td>
        <td className="tg-us36">Terra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LARA_RST</td>
        <td className="tg-us36">6</td>
        <td className="tg-us36">22</td>
        <td className="tg-us36">GPIO06</td>
        <td className="tg-us36">31</td>
        <td className="tg-us36">32</td>
        <td className="tg-us36">GPIO12</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">12</td>
        <td className="tg-us36">LIVRE</td>
      </tr>
      <tr>
        <td className="tg-us36">LIVRE</td>
        <td className="tg-us36">13</td>
        <td className="tg-us36">23</td>
        <td className="tg-us36">GPIO13</td>
        <td className="tg-us36">33</td>
        <td className="tg-us36">34</td>
        <td className="tg-us36">Terra</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">GND</td>
      </tr>
      <tr>
        <td className="tg-us36">LIVRE</td>
        <td className="tg-us36">19</td>
        <td className="tg-us36">24</td>
        <td className="tg-us36">GPIO19(SPI1 MISO)</td>
        <td className="tg-us36">35</td>
        <td className="tg-us36">36</td>
        <td className="tg-us36">GPIO16(SPI1 CS0)</td>
        <td className="tg-us36">27</td>
        <td className="tg-us36">16</td>
        <td className="tg-us36">CTS_RPI</td>
      </tr>
      <tr>
        <td className="tg-us36">LIVRE</td>
        <td className="tg-us36">26</td>
        <td className="tg-us36">25</td>
        <td className="tg-us36">GPIO26</td>
        <td className="tg-us36">37</td>
        <td className="tg-us36">38</td>
        <td className="tg-us36">GPIO20(SPI1 MOSI)</td>
        <td className="tg-us36">28</td>
        <td className="tg-us36">20</td>
        <td className="tg-us36">LIVRE</td>
      </tr>
      <tr>
        <td className="tg-us36">GND</td>
        <td className="tg-us36" />
        <td className="tg-us36" />
        <td className="tg-us36">Terra</td>
        <td className="tg-us36">39</td>
        <td className="tg-us36">40</td>
        <td className="tg-us36">GPIO21(SPI1 SCLK)</td>
        <td className="tg-us36">29</td>
        <td className="tg-us36">21</td>
        <td className="tg-us36">LIVRE</td>
      </tr>
    </tbody></table>
</div>

**Dimensões**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=eeee1715-69fe-4e5e-a643-15a3c1f3510d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

**Versões**

Agora nós fizemos três versões do LTE Cat 1 Pi HAT. Além de suportarem diferentes redes, elas são quase iguais. E você deve prestar atenção que apenas a versão Europa suporta rede 2G.

| Versão  | Módulo    | Rede |
|----------|-----------|---------|
| Europa   | LARA-R211 | 2G/4G   |
| EUA-AT&T | LARA-R203 | 4G      |
| EUA-VZW  | LARA-R204 | 4G      |

## Primeiros Passos

### Hardware

:::note
    Nós usamos o Raspberry Pi3 com [RASPBIAN STRETCH WITH DESKTOP](https://www.raspberrypi.org/downloads/raspbian/) de 18-04-2018 para o demo abaixo.
:::

- Etapa 1. Empilhe o LTE Cat 1 Pi HAT em cima do Raspberry e conecte as 2 antenas.

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

- Etapa 2. Conecte também o mouse, o teclado e o monitor.
- Etapa 3. Ligue o Raspberry Pi.

### Software

- Etapa 1. Use dtoverlay=pi3-disable-bt para habilitar a UART0 do Raspberry Pi3/Pi4.

```
sudo nano /boot/config.txt
```

Depois adicione `dtoverlay=pi3-disable-bt` e `enable_uart=1` ao final do config.txt. Ele deve ficar assim.

```bash
[all]
#dtoverlay=vc4-fkms-v3d
dtoverlay=pi3-disable-bt
enable_uart=1
```

- Etapa 2. Desabilite o serviço do sistema para usar a UART0.

```
sudo systemctl disable hciuart 
```

:::note
    Pi3-disable-bt desabilita o dispositivo Bluetooth e restaura a UART0/ttyAMA0 para os GPIOs 14 e 15. Também é necessário desativar o serviço do sistema que inicializa o modem para que ele não use a UART: sudo systemctl disable hciuart.
:::

- Etapa 3. Exclua o console=serial0,115200 em cmdline.txt.

```
sudo nano /boot/cmdline.txt
```

Depois exclua console=serial0,115200 da string.

- Etapa 4. Reinicie o Raspberry Pi3/Pi4

```
sudo reboot
```

- Etapa 5. Execute os comandos abaixo para rodar o demo

```
cd ~
git clone https://github.com/Seeed-Studio/ublox_lara_r2_pi_hat.git
cd ublox_lara_r2_pi_hat
sudo python setup.py install
cd test
sudo python test01.py
```

- Etapa 6. Aqui está a saída do terminal.

```
pi@raspberrypi:~/Desktop/ublox_lara_r2_pi_hat/examples $ sudo python test01.py
40-pin GPIO header detected
Enabling CTS0 and RTS0 on GPIOs 16 and 17
rts cts on
waking up...
module name:  LARA-R211
RSSI:  3
```

## FAQ

**P1: Podemos nos comunicar com o LTE Cat 1 Pi HAT diretamente com o PC?**

R1: Sim, há 2 maneiras. Uma é USB e a outra é porta UART.

- Para USB, use o cabo USB para conectar o Pi HAT diretamente ao PC. Em seguida, faça o download e instale o [u-blox Cellular USB_Windows Driver, v2.0](https://www.u-blox.com/sites/default/files/ubloxCell_usbcdc_windows_3264_v2.0.0.0.exe.zip). As portas COM3 e COM4 são usadas para comandos AT no gerenciador de dispositivos. Podemos usar qualquer ferramenta de monitor de porta serial COM para executar comandos AT ou usar
software de avaliação [m-center for Windows, version 1.11.0](https://www.u-blox.com/sites/default/files/products/tools/m-center-01.11.00.exe) para Windows.

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

- Para a porta UART, use o [adaptador usb para serial](https://www.seeedstudio.com/UartSBee-V5-p-1752.html), siga a conexão abaixo e use o baudrate de 115200. Podemos usar qualquer ferramenta de monitor de porta serial COM para executar comandos AT.

|   Adaptador USB para UART | LTE Cat1 Pi HAT              |
|--------------------------|------------------------------|
| GND                      | Pin6-GND                     |
| TX                       | Pin8-TX_RPI                  |
| RX                       | Pin10-RX_RPI                 |
| NA                       | Pin11-RTS_RPI Conectar ao Pin9-GND |

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/UART.png)

:::caution
    Conecte o RTS_RPI ao GND conforme marcado em vermelho na figura acima se usarmos a porta UART para comunicação.
:::
**P2: Vocês têm a lista de comandos AT?**

R2: Aqui está [u-blox-CEL_ATCommands](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf).

**P3: Quais são as diferenças entre o Lara-R203/204/211?**

R3: Consulte a [página de produto da série u-blox LARA-R2](https://www.u-blox.com/en/product/lara-r2-series).

**P4: Como registrar na rede AT&T para o LARA-203?**

R4: Execute os comandos abaixo.

```
AT+COPS=2
AT+UMNOCONF=2
AT+COPS=0
```

Você pode tentar o comando abaixo para verificar a conexão com a rede AT&T.

```
AT+UPSD=0,1,"AT&T"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

**P5: Como registrar na rede Verizon para o LARA-204?**

R5: Execute os comandos abaixo.

```
AT+COPS=2
AT+UMNOCONF=3
AT+COPS=0
```

Você pode tentar o comando abaixo para verificar a conexão com a rede Verizon.

```
AT+UPSD=0,1,"vzwinternet"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

## Recursos

- **[PDF]** [Esquemático do LTE Cat.1 Pi HAT](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LTE%20CAT.1%20Pi%20HAT%20v1.0.pdf)
- **[PDF]** [u-blox-CEL_ATCommands](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)
- **[PDF]** [LARA-R2_DataSheet](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_DataSheet_(UBX-16005783).pdf)
- **[PDF]** [LARA-R2_SysIntegrManual](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_SysIntegrManual_(UBX-16010573).pdf)
- **[PDF]** [AT-Commands Examples AppNote](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/AT-CommandsExamples_AppNote_(UBX-13001820).pdf)

Temos esta peça disponível no [geppetto](https://geppetto.seeedstudio.com/), design eletrônico modular fácil com Seeed e Geppeto. Construa agora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## Projetos

**Fechadura Inteligente com Reconhecimento Facial usando LTE Pi HAT**: O reconhecimento facial está se tornando cada vez mais amplamente utilizado, podemos usá-lo para fazer uma fechadura inteligente.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/face-recognization-smart-lock-with-lte-pi-hat-abcec9/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

 se você tiver qualquer problema técnico, envie o problema para o nosso [forum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
