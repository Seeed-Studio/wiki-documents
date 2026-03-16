---
description: Primeiros Passos com o Módulo de Gateway LoRaWAN® WM1302.
title: Módulo de Gateway LoRaWAN® WM1302
keywords:
  - wio
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /WM1302_module
sku: 114992549, 114992550, 114992629, 114992628, 113100022, 114992967, 114992969, 114992991, 100021717, 114993268
last_update:
  date: 12/15/2025
  author: David Du
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/WM1302_module/
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.

:::note
Lançamos recentemente a Série Wio-E5 baseada no módulo Wio-E5.

Clique [aqui](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conhecer os novos membros da família LoRa-E5, desde o [Wio-E5 Module](https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/) [módulo Grove](https://wiki.seeedstudio.com/pt-br/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/) até o [Development Kit](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/).

Para saber mais sobre como criar um nó final LoRaWAN® com o STM32Cube MCU Package para a série STM32WL (SDK), para ingressar e enviar dados para a rede LoRaWAN®, leia mais nas páginas wiki das [mini Dev boards](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/) e do [Development Kit](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/).
:::

:::note
O módulo WM1302 oferece duas versões de interface distintas. A versão `SPI` é atualmente a escolha predominante. Se você preferir a versão `USB`, as modificações de hardware exigem certos ajustes no firmware oficial original para que o módulo funcione corretamente. Para mais detalhes, consulte a parte de **FAQ**.
:::

O módulo WM1302 é uma nova geração de módulo de gateway LoRaWAN® com formato mini-PCIe. Baseado no chip LoRaWAN® de banda base Semtech® SX1302, o WM1302 libera um potencial de capacidade ainda maior de transmissão sem fio de longa distância para produtos de gateway. Ele apresenta maior sensibilidade, menor consumo de energia e temperatura de operação mais baixa do que os chips LoRa® anteriores SX1301 e SX1308.

O módulo de gateway LoRaWAN® WM1302 possui versões SPI e USB nas bandas de frequência US915 e EU868, permitindo que você tenha uma ampla gama de opções de planos de frequência LoRaWAN®, incluindo EU868, US915, AS923, AS920, AU915, KR920 e IN865.

O módulo WM1302 possui certificação CE, FCC e Telec, o que ajuda a simplificar o processo de desenvolvimento e certificação dos dispositivos de gateway LoRaWAN®.

O WM1302 é projetado para aplicações M2M e IoT e pode ser amplamente aplicado em cenários que exigem gateway LPWAN. Ele é uma escolha perfeita para reduzir significativamente as dificuldades técnicas e o tempo consumido ao desenvolver dispositivos de gateway LoRa®, incluindo gateway LoRaWAN®, hotspots etc.

## Recursos

- **Alimentado pelo chip LoRa® de banda base Semtech® SX1302**, com consumo de energia extremamente baixo e alto desempenho.
- **Formato mini-PCIe com o padrão de dedo dourado de 52 pinos**, fácil de integrar com vários dispositivos de gateway.
- **Temperatura de operação ultrabaixa**, sem necessidade de dissipação de calor adicional, reduzindo o tamanho do gateway LoRaWAN®.
- **Alta sensibilidade** até -139 dBm @SF12 com front-end TX/RX SX1250; potência de TX de até 26 dBm @3.3V.
- **Certificado com CE, FCC e TELEC**. Simplifica o processo de certificação do produto final.

## Visão Geral de Hardware

### Diagrama

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### Pinagem

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

<br />

#### Mapeamento de Pinagem do Raspberry Pi

<table class="tg">
<thead>
<tr>
<th class="tg-4onr">40 Pin No.(BOARD#)</th><th class="tg-ev79">GPIO Raspberry Pi (BCM#)</th><th class="tg-ev79">Pinagem do HAT WM1302 para Pi</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="tg-4onr">1</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">2</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">3</td>
  <td class="tg-f42p">GPIO 2</td>
  <td class="tg-f42p">I2C_SDA</td>
</tr>

<tr>
  <td class="tg-4onr">4</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">5</td>
  <td class="tg-f42p">GPIO 3</td>
  <td class="tg-f42p">I2C_SCL</td>
</tr>

<tr>
  <td class="tg-4onr">6</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">7</td>
  <td class="tg-f42p">GPIO 4</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">8</td>
  <td class="tg-f42p">GPIO 14</td>
  <td class="tg-f42p">GPS_RXD</td>
</tr]

<tr>
  <td class="tg-4onr">9</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">10</td>
  <td class="tg-f42p">GPIO 15</td>
  <td class="tg-f42p">GPS_TXD</td>
</tr>

<tr>
  <td class="tg-4onr">11</td>
  <td class="tg-f42p">GPIO 17</td>
  <td class="tg-f42p">SX1302_RESET<br />Versão SPI: Ativo em ALTO<br />Versão USB: Ativo em BAIXO</td>
</tr>

<tr>
  <td class="tg-4onr">12</td>
  <td class="tg-f42p">GPIO 18</td>
  <td class="tg-f42p">SX1262_BUSY</td>
</tr>

<tr>
  <td class="tg-4onr">13</td>
  <td class="tg-f42p">GPIO 27</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">14</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">15</td>
  <td class="tg-f42p">GPIO 22</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">16</td>
  <td class="tg-f42p">GPIO 23</td>
  <td class="tg-f42p">SX1262_DIO1</td>
</tr>

<tr>
  <td class="tg-4onr">17</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">18</td>
  <td class="tg-f42p">GPIO 24</td>
  <td class="tg-f42p">SX1262_DIO2</td>
</tr>

<tr>
  <td class="tg-4onr">19</td>
  <td class="tg-f42p">GPIO 10</td>
  <td class="tg-f42p">SPI_MOSI</td>
</tr>

<tr>
  <td class="tg-4onr">20</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">21</td>
  <td class="tg-f42p">GPIO 9</td>
  <td class="tg-f42p">SPI_MISO</td>
</tr>

<tr>
  <td class="tg-4onr">22</td>
  <td class="tg-f42p">GPIO 25</td>
  <td class="tg-f42p">GPS_RST</td>
</tr>

<tr>
  <td class="tg-4onr">23</td>
  <td class="tg-f42p">GPIO 11</td>
  <td class="tg-f42p">SPI_SCK</td>
</tr>

<tr>
  <td class="tg-4onr">24</td>
  <td class="tg-f42p">GPIO 8</td>
  <td class="tg-f42p">SX1302_CS</td>
</tr>

<tr>
  <td class="tg-4onr">25</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">26</td>
  <td class="tg-f42p">GPIO 7</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">27</td>
  <td class="tg-f42p">GPIO 0</td>
  <td class="tg-f42p">I2C_SDA(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">28</td>
  <td class="tg-f42p">GPIO 1</td>
  <td class="tg-f42p">I2C_SCL(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">29</td>
  <td class="tg-f42p">GPIO 5</td>
  <td class="tg-f42p">SX1262_RST</td>
</tr>

<tr>
  <td class="tg-4onr">30</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">31</td>
  <td class="tg-f42p">GPIO 6</td>
  <td class="tg-f42p">SX1262_CS</td>
</tr>

<tr>
  <td class="tg-4onr">32</td>
  <td class="tg-f42p">GPIO 12</td>
  <td class="tg-f42p">GPS_WAKE_UP</td>
</tr>

<tr>
  <td class="tg-4onr">33</td>
  <td class="tg-f42p">GPIO 13</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">34</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">35</td>
  <td class="tg-f42p">GPIO 19</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">36</td>
  <td class="tg-f42p">GPIO 16</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">37</td>
  <td class="tg-f42p">GPIO 26</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">38</td>
  <td class="tg-f42p">GPIO 20</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">39</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">40</td>
  <td class="tg-f42p">GPIO 21</td>
  <td class="tg-f42p">NC</td>
</tr>

</tbody>
</table>


## Especificações

<table class="tg">
<thead>
<tr><th class="tg-4onr">Região</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frequência</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensibilidade</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">Potência de TX</td>
    <td class="tg-f42p">26 dBm (com alimentação de 3,3 V)</td>
    <td class="tg-f42p">25 dBm (com alimentação de 3,3 V)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Alimentação: Verde Configuração: Vermelho TX: Verde RX: Azul</td>
  </tr>
  <tr>
    <td class="tg-4onr">Fator de Forma</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, Dedo Dourado de 52 pinos</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo de Energia (versão SPI)</td>
    <td class="tg-f42p" colspan="2">Standby: 7.5 mA<br />TX potência máxima: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Consumo de energia (versão USB)</td>
    <td class="tg-f42p" colspan="2">Standby: 20 mA<br />TX potência máxima: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Suporta</td>
  </tr>
  <tr>
    <td class="tg-4onr">Conector da antena</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Temperatura de operação</td>
    <td class="tg-f42p" colspan="2">-40°C a 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensões</td>
    <td class="tg-f42p" colspan="2">30 mm (largura) × 50.95 mm (comprimento)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certificação</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## Aplicação

- Desenvolvimento de dispositivos Gateway LPWAN

- Qualquer desenvolvimento de aplicação de comunicação sem fio de longa distância

- Aprendizado e pesquisa de aplicações LoRa® e LoRaWAN®

## Dimensão

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## Primeiros Passos

### Diferença entre a versão SPI e a versão USB

Para o WM1302 LoRaWAN® Gateway Module versão SPI, os chips Semtech SX1302 e SX126x são conectados ao Raspberry Pi via o mesmo barramento SPI com diferentes pinos de chip select(CS).

Para o WM1302 LoRaWAN® Gateway Module versão USB, os chips Semtech SX1302 e SX126x são conectados a um MCU STM32L4, e este MCU programado de fábrica funcionará como um dispositivo USB, tornando-se uma ponte entre o Raspberry Pi e o SX1302/SX126x.

### Início rápido com WM1302

#### Hardware necessário

- WM1302 LoRaWAN® Gateway Module

- Placas Raspberry Pi com conector GPIO de 40 pinos (por exemplo, Raspberry Pi 4B ou Raspberry 3B+)

- WM1302 Pi Hat para Raspberry Pi

- Fonte de alimentação para Raspberry Pi

- Uma antena LoRa®

- Um cartão SD de 8G ou maior e um leitor de cartões

- Um cabo USB Tipo C se estiver usando o WM1302 LoRaWAN® Gateway Module versão USB

#### Software necessário

- [Última imagem do Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/): Raspberry Pi OS Lite é recomendado

- [Balena Etcher](https://www.balena.io/etcher/): Para gravar a imagem do Raspberry Pi OS no cartão SD

- [putty](https://www.putty.org/): Para conectar ao Raspberry Pi via SSH no Windows

<br />

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Version" label="Versão SPI do WM1302">

#### Etapa 1. Montar o WM1302 Raspberry Pi Hat e instalar o módulo WM1302

Desligue o Raspberry Pi primeiro, insira o módulo WM1302 no Pi Hat como na figura a seguir e prenda-o com parafusos.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>


#### Etapa 2. Habilitar as interfaces I2C e SPI do Raspbian

O módulo WM1302 se comunica com o Raspberry Pi através das interfaces SPI e I2C. Porém, essas duas interfaces não estão habilitadas por padrão no Raspbian, então o desenvolvedor precisa habilitá-las antes de usar o WM1302. Aqui, apresentamos uma forma via linha de comando para habilitar as interfaces SPI e I2C.

Primeiro, faça login no Raspberry Pi via SSH ou usando um monitor (não use o console serial, pois o módulo GPS no Pi Hat assume os pinos UART de hardware do Pi), depois digite `sudo raspi-config` na linha de comando para abrir a Ferramenta de Configuração de Software do Raspberry Pi:

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Selecione `Interface Options`

2. Selecione `SPI`, depois selecione `Yes` para habilitá-lo

3. Selecione `I2C`, depois selecione `Yes` para habilitá-lo

4. Selecione `Serial Port`, depois selecione `No` para "Would you like a login shell..." e selecione `Yes` para "Would you like the serial port hardware..."

5. Depois disso, reinicie o Raspberry Pi para garantir que essas configurações funcionem.

#### Etapa 3. Obter e compilar o código-fonte do SX1302

Agora vamos instalar o `git` e fazer o download do `sx1302_hal` (biblioteca e programas para o SX1302 LoRa Gateway) do GitHub:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Vá para a pasta `sx1302_hal` e compile tudo:

```shell
cd ~/sx1302_hal
make
```

#### Etapa 4. Executar o packet forwarder Semtech SX1302

Copie `reset_lgw.sh` para a pasta `packet_forwarder` e modifique o `reset pin` para o SX1302 e SX1261 no script `reset_lgw.sh` com o editor de texto `nano`:

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder
nano tools/reset_lgw.sh
```

Você verá o `reset pin` padrão como a seguir:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Aqui usamos o comando `cat /sys/kernel/debug/gpio`, que é uma interface de depuração fornecida pelo sistema de arquivos `debugfs` do kernel. Ele é usado principalmente para monitorar o status em tempo real de todos os pinos GPIO no Raspberry Pi.

`gpiochip0` é o que realmente nos interessa: o módulo WM1302 se conecta ao Raspberry Pi através do conector de 40 pinos do Pi HAT, e tudo isso é gerenciado por esse controlador.

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ cat /sys/kernel/debug/gpio
gpiochip0: GPIOs 571-624, parent: platform/1f000d0000.gpio, pinctrl-rp1:
 gpio-571 (ID_SDA              )
 gpio-572 (ID_SCL              )
 gpio-573 (GPIO2               )
 gpio-574 (GPIO3               )
 gpio-575 (GPIO4               )
 gpio-576 (GPIO5               )
 gpio-577 (GPIO6               )
 gpio-578 (GPIO7               |spi0 CS1            ) out hi ACTIVE LOW
 gpio-579 (GPIO8               |spi0 CS0            ) out hi ACTIVE LOW
 gpio-580 (GPIO9               )
 gpio-581 (GPIO10              )
 gpio-582 (GPIO11              )
 gpio-583 (GPIO12              )
 gpio-584 (GPIO13              )
 gpio-585 (GPIO14              )
 gpio-586 (GPIO15              )
 gpio-587 (GPIO16              )
 gpio-588 (GPIO17              )
 gpio-589 (GPIO18              )
 gpio-590 (GPIO19              )
 gpio-591 (GPIO20              )
 gpio-592 (GPIO21              )
 gpio-593 (GPIO22              )
 gpio-594 (GPIO23              )
 gpio-595 (GPIO24              )
 gpio-596 (GPIO25              )
 gpio-597 (GPIO26              )
 gpio-598 (GPIO27              )
 gpio-599 (PCIE_RP1_WAKE       )
 gpio-600 (FAN_TACH            )
 gpio-601 (HOST_SDA            )
 gpio-602 (HOST_SCL            )
 gpio-603 (ETH_RST_N           |phy-reset           ) out hi ACTIVE LOW
 gpio-604 (-                   )
 gpio-605 (CD0_IO0_MICCLK      |cam0_reg            ) out lo 
 gpio-606 (CD0_IO0_MICDAT0     )
 gpio-607 (RP1_PCIE_CLKREQ_N   )
 gpio-608 (-                   )
 gpio-609 (CD0_SDA             )
 gpio-610 (CD0_SCL             )
 gpio-611 (CD1_SDA             )
 gpio-612 (CD1_SCL             )
 gpio-613 (USB_VBUS_EN         )
 gpio-614 (USB_OC_N            )
 gpio-615 (RP1_STAT_LED        |PWR                 ) out hi ACTIVE LOW
 gpio-616 (FAN_PWM             )
 gpio-617 (CD1_IO0_MICCLK      |cam1_reg            ) out lo 
 gpio-618 (2712_WAKE           )
 gpio-619 (CD1_IO1_MICDAT1     )
 gpio-620 (EN_MAX_USB_CUR      )
 gpio-621 (-                   )
 gpio-622 (-                   )
 gpio-623 (-                   )
 gpio-624 (-                   )
```

Se o seu sistema não montar automaticamente o debugfs, você deve montá-lo manualmente primeiro:

```shell
sudo mount -t debugfs none /sys/kernel/debug
```

De acordo com as informações, podemos descobrir a relação entre os pinos GPIO `gpio-588, gpio-589, gpio-576` e seu índice físico correspondente `(GPIO17), (GPIO18), (GPIO5)`.

:::note
Consulte a tabela **Raspberry Pi Pinout Mapping** para os mapeamentos completos dos pinos GPIO.
:::

Modifique o `SX1302_RESET_PIN`, `SX1302_POWER_EN_PIN` e `SX1261_RESET_PIN` com base nas informações de GPIO que obtivemos, como a seguir:

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Salve essas alterações pressionando `CTRL + x`, seguido de `y` e `Enter` para fechar o editor de texto.

<br />

Você também pode consultar o script completo abaixo:

<details>
<summary>reset_lgw.sh</summary>

```shell
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0

```
</details>

<br />

Escolha o `server_address` do LoRaWAN Network Server de sua preferência e o gateway EUI `gateway_ID` no `global_conf.json.sx1250.xxxxx` correspondente com base no módulo que você está usando, e modifique a `up/down port` para `1700`. Em seguida, execute o seguinte código para iniciar o concentrador:


```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

</TabItem>
<TabItem value="WM1302 USB Version" label="WM1302 USB Version">

#### Etapa 1. Montar o WM1302 Raspberry Pi Hat e instalar o módulo WM1302

Primeiro, desligue a Raspberry Pi, insira o módulo WM1302 no Pi Hat como na figura a seguir e parafuse-o. Conecte sua porta Type C a uma das portas USB da Raspberry Pi com um cabo USB Type C.

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### Etapa 2. Habilitar as interfaces I2C e SPI no Raspbian

O módulo WM1302 se comunica com a Raspberry Pi usando SPI e I2C. Porém, essas duas interfaces não vêm habilitadas por padrão no Raspbian, então o desenvolvedor precisa habilitá-las antes de usar o WM1302. Aqui, apresentamos uma forma via linha de comando para habilitar as interfaces SPI e I2C.

Primeiro, faça login na Raspberry Pi via SSH ou usando um monitor (não use o console serial, pois o módulo GPS no Pi Hat assume os pinos UART de hardware da Pi), e então digite `sudo raspi-config` na linha de comando para abrir a Ferramenta de Configuração de Software da Raspberry Pi:


```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. Selecione `Interface Options`

2. Selecione `SPI` e, em seguida, selecione `Yes` para habilitá-lo

3. Selecione `I2C` e, em seguida, selecione `Yes` para habilitá-lo

4. Selecione `Serial Port`, depois selecione `No` para "Would you like a login shell..." e selecione `Yes` para "Would you like the serial port hardware..."

5. Depois disso, reinicie a Raspberry Pi para garantir que essas configurações entrem em vigor.

#### Etapa 3. Obter e compilar o código-fonte do SX1302

Agora vamos instalar o `git` e baixar o `sx1302_hal` (biblioteca e programas para o Gateway LoRa SX1302) do GitHub:

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Vá para a pasta `sx1302_hal` e compile tudo:

```shell
cd ~/sx1302_hal
make
```

#### Etapa 4. Executar o packet forwarder Semtech SX1302

Para obter a porta USB específica, siga as etapas abaixo:

```shell
lsusb
```

No meu caso, o ID de `Product` do nosso módulo WM1302 é `8047`

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 003: ID 2886:8047 Seeed Technology Co., Ltd. WM1302 USB Port  
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

Então obtenha o dispositivo USB com o `Product ID` `8047`. 

```shell
sudo dmesg | grep 8047
sudo modprobe cdc_acm
```

No meu caso, o número da porta USB é `1-1.3`.

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 8047
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
```

Agora podemos obter a porta do dispositivo usando:

```shell
sudo dmesg | grep 1-1.3
```

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 1-1.3
[  215.364299] usb 1-1.3: new full-speed USB device number 3 using xhci_hcd
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
[  215.459643] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  215.459657] usb 1-1.3: Product: WM1302 USB Port  
[  215.459669] usb 1-1.3: Manufacturer: SEEED
[  215.459680] usb 1-1.3: SerialNumber: 4E100336FF7F
[  215.543301] cdc_acm 1-1.3:1.0: ttyACM0: USB ACM device
```

Então, no meu caso, o dispositivo USB é `ttyACM0`. A configuração de dispositivo USB padrão em `global_conf.json.sx1250.xxxxx.USB` é `ttyACM0`, portanto não precisamos fazer nada aqui.

Se o seu dispositivo usar outra porta USB, podemos usar o comando `sed` `sed -i 's/search_string/replacement_string/g' filename` para modificar o arquivo de configuração `global_conf.json.sx1250.xxxxx.USB` para a região correspondente.

<br />

Escolha o `server_address` do LoRaWAN Network Server de sua preferência e o gateway EUI `gateway_ID` no `global_conf.json.sx1250.xxxxx` correspondente com base no módulo que você está usando, e modifique a `up/down port` para `1700`. Em seguida, execute o seguinte código para iniciar o concentrador:

```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

</TabItem>
</Tabs>

<!-- Code END -->

---

Agora, o packet forwarder já consegue ser executado corretamente. Para encaminhar dados com sucesso para o nosso LoRaWAN Network Server (por exemplo, TTN ou ChripStack), ainda precisamos fazer algumas configurações no lado do servidor.

Para isso, primeiro precisamos registrar o Raspberry Pi Gateway que acabamos de construir em nosso LoRa Network Server. Tomando o [TTN](https://www.thethingsindustries.com/docs/getting-started/) como exemplo, faça login no [console do TTN](https://eu1.cloud.thethings.network/console), clique no botão `Gateways` no painel do lado esquerdo e clique em `Register gateway`. Preencha o `Gateway EUI`, o `Gateway Server address` e o `Frequency plan`, deixando as outras opções com as configurações padrão.

- **Gateway EUI:** Um identificador exclusivo de 64 bits para o seu gateway.

- **Gateway Server address:**  A URL do cluster no qual o network server está implantado (`eu1.cloud.thethings.network`, por exemplo). 

- **Frequency plan:**  Configure o plano de frequência correspondente com base na sua região. `Europe 863-870 MHz (SF9 for RX2-recommended)` para a Europa, `United States 902-928 MHz, FSB 2` para os EUA.

<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>

<br />

Depois de registrar o gateway com sucesso, pressione `CTRL + c` para parar o `lora_pkt_fwd`, em seguida edite e verifique o arquivo de configuração `global_conf.json.sx1250.xxxx` para garantir que as entradas `"gateway_ID"` e `"server_address"` correspondam exatamente às configurações no LNS.

```json
    ...
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
    ...
```

Reinicie o `lora_pkt_fwd` usando o comando `./lora_pkt_fwd -c global_conf.json.sx1250.xxxxx`, e você deverá conseguir ver que o seu Raspberry Pi Gateway está conectado ao TTN.

## FAQ

<details>
<summary>Por que meus dispositivos não conseguem ingressar no network server mesmo com todas as configurações corretas?</summary>

<br />

Observamos que certos módulos (versão USB WM1302-US915) podem falhar ao transmitir corretamente pacotes de dados downlink devido a diferenças de hardware. Para corrigir esse problema, modifique o valor da macro `TX_JIT_DELAY` (você pode encontrar essa macro em `/sx1302_hal/packet_forwarder/src/jitqueue.c`) de 40000 para 120000 e refaça o build do sx1302_hal. 


</details>

## Fontes

- [Semtech SX1302 datasheet](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## Certificados

- [Certificado CE do WM1302(USB)](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [Certificado CE do WM1302(SPI)](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## Suporte Técnico & Discussão de Produto

Envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
